import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";
import { TopicList } from "@/components/topic-list";
import { PhotoBand } from "@/components/photo-band";

export const metadata: Metadata = {
  title: "Hromosvody",
  description:
    "Montáž, opravy a revize hromosvodů podle ČSN EN 62305. Jímací soustavy, svody a zemniče na rodinných domech, halách a veřejných budovách ve Středočeském kraji a v Praze.",
};

/** Poznámky na okraji textu, jako odkazy na normy v technickém listu. */
const margin = [
  {
    label: "Norma",
    value: "ČSN EN 62305",
    note: "Ochrana před bleskem, čtyři části. Podle ní se posuzuje rozsah ochrany objektu.",
  },
  {
    label: "Školení",
    value: "DEHN + SÖHNE, 2010",
    note: "Praktické školení Ochrana před bleskem v teorii i v praxi, pořádané s firmou LUMA Plus.",
  },
  {
    label: "Osvědčení",
    value: "5098/25/R-EZ-E2A",
    note: "Rozsah E2A zahrnuje zařízení k ochraně před účinky atmosférické a statické elektřiny, tedy hromosvody.",
  },
];

export default function Hromosvody() {
  return (
    <>
      <FieldHead
        title="Hromosvody"
        lead="Montáž a revize ochrany před bleskem podle ČSN EN 62305. Jímací soustavy, svody a zemniče na rodinných domech, halách i veřejných budovách."
      />

      <TopicList field="hromosvody" />

      <div className="shell grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        {/* Úzký textový sloupec, aby se stránka dala číst jako technický list. */}
        <div className="prose-list lg:col-span-7">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Z čeho se ochrana skládá
          </h2>
          <div className="mt-5 max-w-[62ch]">
            <p>
              Hromosvod není jen jímací tyč na hřebeni. Funkční celek tvoří
              jímací soustava, která blesk zachytí, svody, které svedou proud
              k zemi, a zemnicí soustava, která ho do země bezpečně rozptýlí.
              K tomu patří pospojování kovových částí objektu, aby mezi nimi
              při zásahu nevznikal rozdíl potenciálů.
            </p>
            <p>
              Rozsah ochrany vychází z normy a z toho, o jaký objekt jde.
              Jinak se řeší rodinný dům s plechovou krytinou, jinak výrobní
              hala s technologií na střeše a jinak veřejná budova. Materiál
              a průřezy volíme podle normy, ne podle toho, co je právě
              na skladě.
            </p>
          </div>

          <h2 className="mt-14 text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Opravy a doplnění
          </h2>
          <div className="mt-5 max-w-[62ch]">
            <p>
              U starších objektů častěji než novou montáž řešíme opravu.
              Typicky chybí nebo je přerušený svod, zemnič je zkorodovaný,
              nebo na střeše přibyla technologie, kterou původní jímací
              soustava nekryje. Po opravě vždy následuje revize, aby byl
              stav doložený.
            </p>
          </div>

          <h2 className="mt-14 text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Revize hromosvodů
          </h2>
          <div className="mt-5 max-w-[62ch]">
            <p>
              Revizi hromosvodu provádíme na základě osvědčení Technické
              inspekce ČR, jehož rozsah zařízení na ochranu před bleskem
              zahrnuje. Součástí je prohlídka jímací soustavy a svodů, měření
              zemního odporu a kontrola spojů, výsledkem je revizní zpráva.
            </p>
            <p>
              Lhůtu pravidelné revize určuje norma podle typu objektu a
              zvolené hladiny ochrany. Řekněte nám, o jakou budovu jde,
              a lhůtu ověříme.
            </p>
          </div>

          <p className="mt-10 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-500">
            Doklady k oprávněním jsou na stránce{" "}
            <Link
              href="/certifikaty"
              className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Certifikáty
            </Link>
            .
          </p>
        </div>

        <aside className="lg:col-span-5">
          <div className="border-t border-line lg:sticky lg:top-24">
            {margin.map((m) => (
              <div key={m.value} className="border-b border-line py-5">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
                  {m.label}
                </p>
                <p className="mt-1.5 font-mono text-[14px] text-ink">{m.value}</p>
                <p className="mt-2 max-w-[44ch] text-[13.5px] leading-relaxed text-ink-700">
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Objekty, na kterých jsme pracovali
          </h2>
        </div>
        <PhotoBand files={["hotel-ulice", "objekt-drevena-fasada", "areal-cesta"]} />
      </section>

      <FieldFooterNav current="hromosvody" />
      <ContactStrip question="Potřebujete novou jímací soustavu nebo revizi stávající?" />
    </>
  );
}
