# -*- coding: utf-8 -*-
"""Úpravy pro mobil: cíle na dotek, tabulky do bloků, pásy fotek do dvou sloupců."""
import io, os, re

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit("NENALEZENO v %s:\n%s" % (path, old[:150]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)


# --- hlavicka: vetsi cile na dotek, popisek oboru az od xl, polozka Cena -----
edit("components/site-header.tsx", [
    ('                "hidden text-[12px] transition-colors lg:block",',
     '                "hidden text-[12px] transition-colors xl:block",'),
    ("""                "font-mono text-[13.5px] transition-colors",
                overlay ? "text-white hover:text-white/70" : "text-ink hover:text-signal\"""",
     """                "-my-2 py-2 font-mono text-[13.5px] transition-colors",
                overlay ? "text-white hover:text-white/70" : "text-ink hover:text-signal\""""),
    ('                "border px-3 py-1.5 text-[13px] transition-colors lg:hidden",',
     '                "border px-3.5 py-2.5 text-[13px] transition-colors lg:hidden",'),
])

# --- hero: sipky vetsi na mobilu --------------------------------------------
edit("components/hero-slider.tsx", [
    ('      className="flex h-9 w-9 items-center justify-center border border-white/45 text-[15px] text-white transition-colors hover:border-white hover:bg-white/10"',
     '      className="flex h-11 w-11 items-center justify-center border border-white/45 text-[15px] text-white transition-colors hover:border-white hover:bg-white/10 sm:h-9 sm:w-9"'),
])

# --- filtr referenci: vyssi chipy, tabulka bez min sirky --------------------
edit("components/reference-table.tsx", [
    ('                "border px-3 py-1.5 text-[13px] transition-colors",',
     '                "border px-3 py-2.5 text-[13px] transition-colors sm:py-1.5",'),
])

# --- obsah stranky se na mobilu nezobrazuje, obsah je hned pod nim ----------
edit("components/topic-page.tsx", [
    ('        <aside className="lg:col-span-3">',
     '        <aside className="hidden lg:col-span-3 lg:block">'),
])

# --- popsany rozvadec: vetsi znacky na dotek --------------------------------
edit("components/board-annotated.tsx", [
    ('                    "absolute -ml-3.5 -mt-3.5 flex h-7 w-7 items-center justify-center border font-mono text-[11px] outline-none transition-[background-color,border-color,transform] duration-300 ease-out",',
     '                    "absolute -ml-5 -mt-5 flex h-10 w-10 items-center justify-center border font-mono text-[12px] outline-none transition-[background-color,border-color,transform] duration-300 ease-out sm:-ml-3.5 sm:-mt-3.5 sm:h-7 sm:w-7 sm:text-[11px]",'),
])

# --- pas fotek: dva sloupce uz na mobilu ------------------------------------
edit("components/photo-band.tsx", [
    ("""  const cols =
    files.length === 1
      ? "grid-cols-1"
      : files.length === 2
        ? "sm:grid-cols-2"
        : files.length === 4
          ? "grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-3";""",
     """  // Na mobilu dva sloupce, jinak by pás fotek zabral celou obrazovku na snímek.
  const cols =
    files.length === 1
      ? "grid-cols-1"
      : files.length === 2
        ? "grid-cols-2"
        : files.length === 4
          ? "grid-cols-2 lg:grid-cols-4"
          : "grid-cols-2 sm:grid-cols-3";"""),
    ('                    files.length === 1\n                      ? "(max-width: 1240px) 100vw, 1240px"\n                      : "(max-width: 640px) 92vw, 33vw"',
     '                    files.length === 1\n                      ? "(max-width: 1240px) 100vw, 1240px"\n                      : "(max-width: 640px) 46vw, 33vw"'),
])

# --- navigace: pridana polozka Cena -----------------------------------------
edit("lib/site.ts", [
    ('  { label: "Nabídka služeb", href: "/nabidka-sluzeb" },',
     '  { label: "Nabídka služeb", href: "/nabidka-sluzeb" },\n  { label: "Cena", href: "/cena" },'),
])

print("hotovo")
