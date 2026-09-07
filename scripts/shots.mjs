/**
 * Screenshoty pro kontrolu. Používá nainstalovaný Chrome přes puppeteer-core,
 * takže se dá nastavit skutečná mobilní šířka, kterou headless přepínač neumí.
 *
 * node scripts/shots.mjs <port> <mobile|desktop> <cesta...>
 */
import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.env.SHOTS_DIR ?? "C:/Users/sznap/AppData/Local/Temp/shots";

const [port, mode, ...rawPaths] = process.argv.slice(2);
// Git Bash prepisuje argumenty zacinajici lomitkem, proto se predava bez nej.
const paths = rawPaths.map((p) => (p === "home" ? "/" : p.startsWith("/") ? p : "/" + p));
const viewport =
  mode === "mobile"
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
    : { width: 1440, height: 900, deviceScaleFactor: 1 };

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--disable-gpu"],
});

for (const p of paths) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "no-preference" },
  ]);
  await page.goto(`http://localhost:${port}${p}`, { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 700));

  const name = (p === "/" ? "home" : p.replace(/\//g, "_").replace(/^_/, "")) + `-${mode}`;
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: true });

  const metrics = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    docH: document.documentElement.scrollHeight,
    // Prvky, které přetékají za pravý okraj okna
    overflow: [...document.querySelectorAll("body *")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.right > window.innerWidth + 1;
      })
      .slice(0, 6)
      .map((el) => {
        const r = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()}.${(el.className || "")
          .toString()
          .split(" ")
          .slice(0, 2)
          .join(".")} right=${Math.round(r.right)}`;
      }),
    // Klikatelné prvky menší než 40 px
    small: [...document.querySelectorAll("a,button")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.height < 40 || r.width < 24);
      })
      .slice(0, 8)
      .map((el) => {
        const r = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()} "${(el.textContent || "")
          .trim()
          .slice(0, 22)}" ${Math.round(r.width)}x${Math.round(r.height)}`;
      }),
  }));

  console.log(
    `${p} -> ${name}.png  doc=${metrics.docH}px scroll=${metrics.scrollW}/${metrics.clientW}`
  );
  if (metrics.scrollW > metrics.clientW + 1)
    console.log("   PRETEKA:", metrics.overflow.join(" | ") || "(neurceno)");
  if (metrics.small.length) console.log("   MALE CILE:", metrics.small.join(" | "));
  await page.close();
}

await browser.close();
