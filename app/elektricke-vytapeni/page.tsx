import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";

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

      {/* Srovnání variant jako tabulka, ne jako karty. */}
      <section className="shell py-14 lg:py-20">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Varianty a co k nim patří
        </h2>
        <p className="mt-5 max-w-measure text-[15px] leading-[1.7] text-ink-700">
          Volba záleží na tom, jak se v objektu topí dnes a jaký má přípojka
          příkon. Než něco navrhneme, podíváme se na rozvaděč.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                <th className="w-[22rem] py-2.5 pr-8 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Varianta
                </th>
                <th className="py-2.5 pr-8 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Kde se používá
                </th>
                <th className="py-2.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Co je potřeba zajistit
                </th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v, i) => (
                <tr
                  key={v.name}
                  className={`border-b border-line align-top ${
                    i % 2 === 1 ? "bg-paper-200" : ""
                  }`}
                >
                  <td className="py-4 pr-8 text-[15px] font-medium leading-snug text-ink">
                    {v.name}
                  </td>
                  <td className="py-4 pr-8 text-[14.5px] leading-snug text-ink-700">
                    {v.use}
                  </td>
                  <td className="py-4 text-[14.5px] leading-snug text-ink-700">
                    {v.need}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-10 max-w-[60ch] border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
          Topné kabely se pokládají jednou a na desítky let. Skladbu podlahy
          nebo uchycení v okapu je proto potřeba vyřešit ještě před tím, než
          přijde pokrývač nebo obkladač.
        </p>
      </section>

      <FieldFooterNav current="elektricke-vytapeni" />
      <ContactStrip question="Řešíte vytápění bez plynu nebo zamrzající okapy?" />
    </>
  );
}
