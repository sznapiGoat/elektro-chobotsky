import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { DataTable } from "@/components/data-table";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";
import { TopicList } from "@/components/topic-list";
import { PhotoBand } from "@/components/photo-band";

export const metadata: Metadata = {
  title: "Elektrické vytápění a topné kabely",
  description:
    "Přímotopy, elektrické kotle, akumulační kamna, podlahové topení a topné kabely pro ochranu okapů, potrubí a venkovních ploch.",
};

const variants = [
  {
    name: "Přímotopné konvektory",
    use: "Doplňkové vytápění, temperování, chaty a dostavby",
    need: "Dostatečný příkon přípojky a samostatně jištěné okruhy",
  },
  {
    name: "Elektrický kotel",
    use: "Ústřední vytápění v objektech bez plynu",
    need: "Vlastní jištěný okruh a návaznost na otopnou soustavu",
  },
  {
    name: "Akumulační kamna",
    use: "Vytápění s využitím nízkého tarifu",
    need: "Spínání podle HDO a samostatný okruh",
  },
  {
    name: "Podlahové topné kabely a rohože",
    use: "Koupelny, dlažby, zimní zahrady",
    need: "Proudový chránič, podlahová sonda a termostat",
  },
  {
    name: "Ochrana okapů a svodů",
    use: "Zabránění tvorbě ledu a rampouchů nad vstupy",
    need: "Topný kabel se snímačem a regulací podle teploty",
  },
  {
    name: "Ochrana potrubí",
    use: "Venkovní a nezateplené rozvody vody",
    need: "Samoregulační kabel a tepelná izolace potrubí",
  },
  {
    name: "Vyhřívání venkovních ploch",
    use: "Vjezdy, rampy a schodiště",
    need: "Kabel uložený do skladby povrchu a regulace",
  },
];

export default function ElektrickeVytapeni() {
  return (
    <>
      <FieldHead
        title="Elektrické vytápění"
        lead="Přímotopy, elektrické kotle a akumulační kamna, topné kabely pro podlahy i pro ochranu okapů, potrubí a venkovních ploch."
      />

      <TopicList field="elektricke-vytapeni" />

      {/* Srovnání variant jako tabulka, ne jako karty. */}
      <section className="shell py-14 lg:py-20">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Varianty a co k nim patří
        </h2>
        <p className="mt-5 max-w-measure text-[15px] leading-[1.7] text-ink-700">
          Volba záleží na tom, jak se v objektu topí dnes a jaký má přípojka
          příkon. Než něco navrhneme, podíváme se na rozvaděč.
        </p>

        <DataTable
          className="mt-10"
          minWidth="min-w-[44rem]"
          head={["Varianta", "Kde se používá", "Co je potřeba zajistit"]}
          rows={variants.map((v) => [v.name, v.use, v.need])}
        />

        <p className="mt-10 max-w-[60ch] border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
          Topné kabely se pokládají jednou a na desítky let. Skladbu podlahy
          nebo uchycení v okapu je proto potřeba vyřešit ještě před tím, než
          přijde pokrývač nebo obkladač.
        </p>
      </section>

      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Z realizací
          </h2>
        </div>
        <PhotoBand
          files={["hygienicke-zazemi-01", "detail-sprcha", "hygienicke-zazemi-02"]}
        />
      </section>

      <FieldFooterNav current="elektricke-vytapeni" />
      <ContactStrip question="Řešíte vytápění bez plynu nebo zamrzající okapy?" />
    </>
  );
}
