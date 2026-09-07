# -*- coding: utf-8 -*-
"""Doplní fotografické pásy na podstránky."""
import io, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def edit(path, pairs):
    s = io.open(path, encoding="utf-8").read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit("NENALEZENO v %s:\n%s" % (path, old[:120]))
        s = s.replace(old, new, 1)
    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("ok", path)


# --- Fotogalerie -------------------------------------------------------------
edit("app/fotogalerie/page.tsx", [
    ('import { PhotoEssay } from "@/components/photo-essay";',
     'import { PhotoGallery } from "@/components/photo-gallery";'),
    ('import { gallery } from "@/lib/site";',
     'import { allPhotos } from "@/lib/photos";'),
    ("{gallery.length} fotografií", "{allPhotos.length} fotografií"),
    ("<PhotoEssay />", "<PhotoGallery />"),
    ("""            Snímky z dokončených instalací. Kliknutím se fotografie otevře
            v plné velikosti, mezi snímky se dá přecházet klávesami.""",
     """            Snímky z dokončených instalací, rozdělené podle typu objektu.
            Kliknutím se fotografie otevře v plné velikosti, mezi snímky se dá
            přecházet klávesami."""),
])

# --- Elektroinstalace --------------------------------------------------------
edit("app/elektroinstalace/page.tsx", [
    ('import { Reveal } from "@/components/reveal";',
     'import { PhotoBand } from "@/components/photo-band";\nimport { Reveal } from "@/components/reveal";'),
    ('src="/foto/hala-04.jpg"', 'src="/foto/rozvadec-jistice.jpg"'),
    ('alt="Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem."',
     'alt="Otevřený rozvaděč s několika řadami jističů a proudových chráničů, číslovanými vodiči a svorkovnicemi."'),
    ("""            Povrchové kabelové trasy a osvětlení v hale.""",
     """            Osazený rozvaděč s jističi, chrániči a číslovanými vodiči."""),
    ("""      <FieldFooterNav current="elektroinstalace" />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Z realizací
          </h2>
        </div>
        <PhotoBand files={["hala-01", "truhlarska-dilna", "pekarstvi-pece"]} />
        <PhotoBand
          files={["rozvadece-skrine", "sklad-plosina", "detail-svitidla"]}
          className="mt-3"
        />
      </section>

      <FieldFooterNav current="elektroinstalace" />"""),
])

# --- Revize ------------------------------------------------------------------
edit("app/revize/page.tsx", [
    ('import { FieldHead } from "@/components/field-head";',
     'import { FieldHead } from "@/components/field-head";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""      {/* Obsah revize jako číslované články, s čísly v levém okraji. */}""",
     """      <section className="py-12 lg:py-14">
        <PhotoBand
          files={["rozvadec-svorkovnice", "detail-stitky"]}
          ratio="aspect-[4/3]"
        />
      </section>

      {/* Obsah revize jako číslované články, s čísly v levém okraji. */}"""),
])

# --- Hromosvody --------------------------------------------------------------
edit("app/hromosvody/page.tsx", [
    ('import { FieldHead } from "@/components/field-head";',
     'import { FieldHead } from "@/components/field-head";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""      <FieldFooterNav current="hromosvody" />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Objekty, na kterých jsme pracovali
          </h2>
          <p className="mt-4 max-w-[52ch] text-[14.5px] leading-relaxed text-ink-700">
            Snímky hromosvodů z posledních zakázek zatím nemáme, ochrana před
            bleskem se fotí špatně. Tady jsou objekty, na kterých jsme dělali
            elektroinstalaci i ochranu před bleskem.
          </p>
        </div>
        <PhotoBand files={["hotel-ulice", "objekt-drevena-fasada", "areal-cesta"]} />
      </section>

      <FieldFooterNav current="hromosvody" />"""),
])

# --- Elektrické vytápění -----------------------------------------------------
edit("app/elektricke-vytapeni/page.tsx", [
    ('import { FieldHead } from "@/components/field-head";',
     'import { FieldHead } from "@/components/field-head";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""      <FieldFooterNav current="elektricke-vytapeni" />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Z realizací
          </h2>
        </div>
        <PhotoBand
          files={["hygienicke-zazemi-01", "detail-sprcha", "hygienicke-zazemi-02"]}
        />
      </section>

      <FieldFooterNav current="elektricke-vytapeni" />"""),
])

# --- Zabezpečovací systémy ---------------------------------------------------
edit("app/zabezpecovaci-systemy/page.tsx", [
    ('import { FieldHead } from "@/components/field-head";',
     'import { FieldHead } from "@/components/field-head";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""      <FieldFooterNav current="zabezpecovaci-systemy" />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Objekty, kde jsme dělali slaboproud
          </h2>
        </div>
        <PhotoBand files={["prodejna-ulice", "bowling-herna", "rozvadece-provoz"]} />
      </section>

      <FieldFooterNav current="zabezpecovaci-systemy" />"""),
])

# --- Reference ---------------------------------------------------------------
edit("app/reference/page.tsx", [
    ('import { ReferenceTable } from "@/components/reference-table";',
     'import { PhotoBand } from "@/components/photo-band";\nimport { ReferenceTable } from "@/components/reference-table";'),
    ("""      <section className="shell py-12 lg:py-16">
        <ReferenceTable />
      </section>""",
     """      <section className="border-b border-line bg-paper-200 py-12">
        <PhotoBand
          files={["jidelna-zs-01", "pekarstvi-prodejna", "truhlarska-dilna", "hotel-ulice"]}
        />
      </section>

      <section className="shell py-12 lg:py-16">
        <ReferenceTable />
      </section>"""),
])

# --- Nabídka služeb ----------------------------------------------------------
edit("app/nabidka-sluzeb/page.tsx", [
    ('import { fields, originalServices, site } from "@/lib/site";',
     'import { PhotoBand } from "@/components/photo-band";\nimport { fields, originalServices, site } from "@/lib/site";'),
    ("""      <ContactStrip question="Nevíte, do kterého oboru vaše zakázka patří? Zavolejte, poradíme." />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <PhotoBand
          files={["rozvadec-jistice", "hala-03", "pekarstvi-pult"]}
        />
      </section>

      <ContactStrip question="Nevíte, do kterého oboru vaše zakázka patří? Zavolejte, poradíme." />"""),
])

# --- O nás -------------------------------------------------------------------
edit("app/o-nas/page.tsx", [
    ('import { ContactStrip } from "@/components/contact-strip";',
     'import { ContactStrip } from "@/components/contact-strip";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""      <ContactStrip question="Máte dotaz k rozsahu prací nebo k oprávněním?" />""",
     """      <section className="border-t border-line bg-paper-200 py-14">
        <PhotoBand
          files={["sal-hvezdny-podhled", "jidelna-zs-03", "rozvadece-skrine"]}
        />
      </section>

      <ContactStrip question="Máte dotaz k rozsahu prací nebo k oprávněním?" />"""),
])

# --- Kontakt -----------------------------------------------------------------
edit("app/kontakt/page.tsx", [
    ('import { ContactForm } from "@/components/contact-form";',
     'import { ContactForm } from "@/components/contact-form";\nimport { PhotoBand } from "@/components/photo-band";'),
    ("""        <div className="lg:col-span-7">
          <div className="border border-line bg-paper-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>""",
     """        <div className="lg:col-span-7">
          <div className="border border-line bg-paper-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-paper-200 py-12">
        <PhotoBand
          files={["pekarstvi-provoz", "hala-04", "detail-jidelna-zidle"]}
        />
      </section>
    </>"""),
])

print("vse hotovo")
