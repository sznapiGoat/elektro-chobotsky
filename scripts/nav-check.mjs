/** Zkontroluje, že navigace zůstává na jednom řádku a nepřekrývá se. */
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const port = process.argv[2];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--disable-gpu"],
});

for (const width of [1024, 1100, 1280, 1440]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900 });
  await page.goto(`http://localhost:${port}/revize`, { waitUntil: "networkidle2" });

  const r = await page.evaluate(() => {
    const links = [...document.querySelectorAll("header nav a")];
    const tops = new Set(links.map((l) => Math.round(l.getBoundingClientRect().top)));
    const nav = document.querySelector("header nav");
    const brand = document.querySelector("header a");
    const phone = document.querySelector('header a[href^="tel:"]');
    const b = brand?.getBoundingClientRect();
    const n = nav?.getBoundingClientRect();
    const p = phone?.getBoundingClientRect();
    return {
      count: links.length,
      rows: tops.size,
      navVisible: n ? n.width > 0 : false,
      gapBrandNav: n && b ? Math.round(n.left - b.right) : null,
      gapNavPhone: p && n ? Math.round(p.left - n.right) : null,
    };
  });
  console.log(
    `${width}px  odkazu=${r.count} radku=${r.rows} nav=${r.navVisible ? "ano" : "skryta"} mezera brand/nav=${r.gapBrandNav} nav/telefon=${r.gapNavPhone}`
  );
  await page.close();
}

await browser.close();
