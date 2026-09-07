# -*- coding: utf-8 -*-
"""Zapojí odkaz na profil na Google, obce, ochranu údajů a skip link."""
import io, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit("NENALEZENO v %s:\n%s" % (path, old[:140]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)


# --- layout: skip link, profil ve strukturovanych datech ---------------------
edit("app/layout.tsx", [
    ("""  areaServed: [""",
     """  url: "https://chobotsky-elektro.cz",
  hasMap: site.googleProfile,
  areaServed: ["""),
    ('  sameAs: ["https://chobotsky.webnode.cz"],',
     '  sameAs: [site.googleProfile, "https://chobotsky.webnode.cz"],'),
    ("""        <SiteHeader />""",
     """        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:text-[14px] focus:text-ink"
        >
          Přeskočit na obsah
        </a>
        <SiteHeader />"""),
    ('        <div className="flex-1">{children}</div>',
     '        <main id="obsah" className="flex-1">\n          {children}\n        </main>'),
])

# --- patička: profil a ochrana údajů ----------------------------------------
edit("components/site-footer.tsx", [
    ("""          <p className="mt-4 text-[13.5px] text-ink-500">{site.area}</p>""",
     """          <p className="mt-4 text-[13.5px] text-ink-500">{site.area}</p>
          <a
            href={site.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[13.5px] text-ink-700 underline decoration-line-strong underline-offset-4 transition-colors hover:text-signal"
          >
            Profil na Google Maps
          </a>"""),
    ("""            {pages.map((p) => (""",
     """            {[...pages, { label: "Ochrana osobních údajů", href: "/ochrana-osobnich-udaju" }].map((p) => ("""),
])

# --- sitemap ----------------------------------------------------------------
edit("app/sitemap.ts", [
    ('    ...fields.map((f) => `/${f.slug}`),',
     '    "/ochrana-osobnich-udaju",\n    ...fields.map((f) => `/${f.slug}`),'),
])

# --- kontakt: profil, obce, poznamka u formulare -----------------------------
edit("app/kontakt/page.tsx", [
    ('import { site } from "@/lib/site";',
     'import Link from "next/link";\nimport { site } from "@/lib/site";'),
    ("""          <p className="mt-8 max-w-[42ch] text-[14.5px] leading-[1.7] text-ink-700">
            Pokud voláme zpět, děje se to většinou mimo pracovní dobu na
            stavbě. Když se nedovoláte, napište zprávu a ozveme se.
          </p>""",
     """          <p className="mt-8 max-w-[42ch] text-[14.5px] leading-[1.7] text-ink-700">
            Pokud voláme zpět, děje se to většinou mimo pracovní dobu na
            stavbě. Když se nedovoláte, napište zprávu a ozveme se.
          </p>

          <a
            href={site.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-[14px] text-ink transition-colors hover:border-ink hover:bg-paper-200"
          >
            Otevřít profil na Google Maps
            <span aria-hidden className="font-mono text-ink-500">
              &#8599;
            </span>
          </a>

          <h2 className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
            Kam jezdíme
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
            {site.towns.map((town) => (
              <li
                key={town}
                className="border border-line px-2.5 py-1 text-[13px] text-ink-700"
              >
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed text-ink-500">
            A okolní obce. Když si nejste jistí, jestli k vám dojedeme,
            zavolejte a řekneme to hned.
          </p>"""),
    ("""            <ContactForm />
          </div>
        </div>""",
     """            <ContactForm />
          </div>
          <p className="mt-4 max-w-[52ch] text-[12.5px] leading-relaxed text-ink-500">
            Údaje z formuláře používáme jen k tomu, abychom vám odpověděli.
            Web neměří návštěvnost ani neukládá cookies, podrobnosti jsou
            v{" "}
            <Link
              href="/ochrana-osobnich-udaju"
              className="text-ink-700 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              ochraně osobních údajů
            </Link>
            .
          </p>
        </div>"""),
])

print("hotovo")
