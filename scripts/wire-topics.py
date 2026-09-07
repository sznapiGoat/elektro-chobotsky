# -*- coding: utf-8 -*-
"""Vloží rozcestník podstránek na stránky oborů."""
import io, os, re

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))

pages = {
    "app/elektroinstalace/page.tsx": "elektroinstalace",
    "app/hromosvody/page.tsx": "hromosvody",
    "app/revize/page.tsx": "revize",
    "app/zabezpecovaci-systemy/page.tsx": "zabezpecovaci-systemy",
    "app/elektricke-vytapeni/page.tsx": "elektricke-vytapeni",
}

for path, field in pages.items():
    s = io.open(path, encoding="utf-8").read()

    if "TopicList" in s:
        print("preskoceno", path)
        continue

    s = s.replace(
        'import { FieldHead } from "@/components/field-head";',
        'import { FieldHead } from "@/components/field-head";\nimport { TopicList } from "@/components/topic-list";',
        1,
    )

    # Rozcestník jde hned za záhlaví stránky oboru.
    m = re.search(r"(      <FieldHead\n(?:.*\n)*?      />\n)", s)
    if not m:
        raise SystemExit("FieldHead nenalezen v " + path)
    s = s[: m.end(1)] + "\n      <TopicList field=\"%s\" />\n" % field + s[m.end(1) :]

    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)
