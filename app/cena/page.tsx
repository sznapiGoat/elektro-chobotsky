import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { DataTable } from "@/components/data-table";
import { FaqList } from "@/components/faq-list";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cena",
  description:
    "Jak se tvoří cena elektroinstalace, hromosvodu a revize. Co cenu určuje, jak vypadá nabídka a na co si dát pozor u cenových nabídek.",
  alternates: { canonical: "/cena" },
};

const drivers = [
  {
    name: "Rozsah",
    detail: "Počet obvodů, délky tras, počet vývodů a rozvaděčů",
    why: "Nejsilnější položka. Dvacet obvodů není dvakrát tolik práce jako deset, ale blíž tomu než k patnácti.",
  },
  {
    name: "Novostavba nebo rekonstrukce",
    detail: "Holá stavba proti obydlenému domu",
    why: "Na holé stavbě se dělá rychleji. V obydleném domě se řeší prach, přesuny nábytku a odstávky po částech.",
  },
  {
    name: "Přístupnost",
    detail: "Zděné jádro, panel, hala ve výšce, práce za provozu",
    why: "Drážkování betonu a práce z plošiny jsou jiná kapitola než sádrokarton.",
  },
  {
    name: "Materiál",
    detail: "Přístroje, kabely, rozvaděč, svítidla",
    why: "Rozdíl mezi základní a vyšší řadou přístrojů se na celém domě pozná. Vybíráme podle toho, co má sloužit dvacet let.",
  },
  {
    name: "Termín",
    detail: "Standardní režim, nebo přizpůsobení stavbě",
    why: "Když se čeká jen na nás a stavba stojí, dá se pracovat i mimo běžný režim. To se ale do ceny počítá.",
  },
  {
    name: "Vzdálenost",
    detail: "Doprava na místo",
    why: "V okolí Divišova a Benešova ji obvykle neřešíme. U vzdálenějších zakázek se do nabídky uvede.",
  },
];

const offerParts = [
  "rozpis prací po položkách, ne jedno číslo za celý dům",
  "materiál včetně toho, jaké přístroje a kabely jsou v ceně",
  "výchozí revize a revizní zpráva u prací, které ji vyžadují",
  "schéma rozvaděče a dokumentace k předání",
  "termín, ve kterém jsme schopni práci udělat",
];

const warnings = [
  {
    title: "Nabídka bez rozpisu",
    text: "Jedno číslo za celý dům se nedá porovnat s ničím a nedá se u něj reklamovat, když se v průběhu něco ubere.",
  },
  {
    title: "Revize není v ceně",
    text: "Levnější nabídka bez revize se srovná ve chvíli, kdy revizi objednáváte samostatně u někoho dalšího. A revizní technik u cizí instalace potřebuje dokumentaci.",
  },
  {
    title: "Cena za bod bez určení materiálu",
    text: "Cena za zásuvku nic neříká, dokud není jasné, jaký přístroj a jaký kabel v ní bude. Rozdíl je znatelný.",
  },
  {
    title: "Práce bez oprávnění",
    text: "U elektroinstalace a hromosvodů rozhoduje, kdo za práci ručí a čím se prokáže. Doklady máme k nahlédnutí v sekci Certifikáty.",
  },
];

const steps = [
  {
    title: "Telefon",
    text: "Řeknete, o jaký objekt jde a co potřebujete. Z toho se dá odhadnout, jestli je to práce na den, nebo na měsíc.",
  },
  {
    title: "Prohlídka",
    text: "Domluvíme se na termínu a přijedeme se podívat. Otevřeme rozvaděč a zjistíme, co objekt má a co unese přípojka.",
  },
  {
    title: "Nabídka",
    text: "Pošleme rozpis prací a materiálu s cenou. Když se rozsah v průběhu změní, změnu odsouhlasíte předem.",
  },
  {
    title: "Termín",
    text: "Po odsouhlasení nabídky potvrdíme termín. U větších zakázek po etapách, aby bylo jasné, co kdy bude hotové.",
  },
];

const faq = [
  {
    q: "Kolik stojí revize elektroinstalace?",
    a: "Podle rozsahu zařízení. U rodinného domu je to jiná práce než u haly s desítkami obvodů, a jinak se počítá i revize po rekonstrukci, kde se měří jen dotčená část. Řekněte nám, o jaký objekt jde a kolik má rozvaděčů, a cenu vám řekneme.",
  },
  {
    q: "Kolik stojí elektroinstalace rodinného domu?",
    a: "Nedá se to říct dopředu, protože rozhoduje počet obvodů, zvolené přístroje a to, jestli jde o novostavbu nebo rekonstrukci. Proto jezdíme na prohlídku a nabídku posíláme až po ní. Čísla z internetu vám u vašeho domu nepomůžou.",
  },
  {
    q: "Účtujete výjezd a prohlídku?",
    a: "Zavolejte a domluvíme se na tom předem, ať v tom není nejasnost. U zakázek v okolí Divišova a Benešova to obvykle neřešíme.",
  },
  {
    q: "Dá se cena v průběhu práce změnit?",
    a: "Jen po odsouhlasení. U rekonstrukcí se občas po otevření stěn objeví něco, s čím nikdo nepočítal. V takovém případě práci zastavíme, vysvětlíme, o co jde, a pokračujeme, až se dohodneme.",
  },
];

export default function Cena() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-10 pt-8 lg:pb-14">
          <h1 className="max-w-[22ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            Cena
          </h1>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Cenník tu nenajdete, protože u elektroinstalace nemá vypovídací
            hodnotu. Cena za zásuvku bez určení materiálu a bez znalosti
            objektu je číslo, které nikomu nepomůže. Tady je místo toho, co
            cenu určuje, jak nabídka vypadá a jak se k číslu dostanete.
          </p>
        </div>
      </section>

      <section className="shell py-12 lg:py-16">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Co cenu určuje
        </h2>
        <DataTable
          className="mt-8"
          minWidth="min-w-[46rem]"
          head={["Položka", "Co to znamená", "Proč to hraje roli"]}
          rows={drivers.map((d) => [d.name, d.detail, d.why])}
        />
      </section>

      <section className="border-y border-line bg-paper-200">
        <div className="shell grid gap-12 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="lg:col-span-5">
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
              Jak nabídka vypadá
            </h2>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.7] text-ink-700">
              Nabídku posíláme rozepsanou, abyste viděli, za co platíte, a
              mohli ji srovnat s jinou. Obsahuje tyhle části.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {offerParts.map((part) => (
                <li
                  key={part}
                  className="grid grid-cols-[1.25rem_1fr] items-baseline gap-2 border-b border-line py-3.5 text-[15px] leading-snug text-ink-700"
                >
                  <span aria-hidden className="font-mono text-ink-300">
                    &middot;
                  </span>
                  {part}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-12 lg:py-16">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Jak se k ceně dostanete
        </h2>
        <ol className="mt-8">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-[3rem_10rem_1fr] sm:gap-6"
            >
              <span className="font-mono text-[12.5px] text-ink-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[16px] font-semibold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="max-w-[54ch] text-[14.5px] leading-[1.7] text-ink-700">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[60ch] border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
          Konkrétní číslo dostanete až po prohlídce. Cokoli řečeného dřív by
          bylo věštění, které se pak stejně mění, a to nikdo nechce ani na
          jedné straně.
        </p>
      </section>

      <section className="border-t border-line bg-paper-200">
        <div className="shell py-12 lg:py-16">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Na co si dát pozor u nabídek
          </h2>
          <p className="mt-5 max-w-measure text-[15px] leading-[1.7] text-ink-700">
            Platí to i pro naši nabídku. Když v ní něco z toho chybí, ptejte se.
          </p>
          <div className="mt-8 grid gap-x-14 gap-y-8 sm:grid-cols-2">
            {warnings.map((w) => (
              <div key={w.title}>
                <h3 className="text-[15.5px] font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-700">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/certifikaty"
            className="mt-8 inline-block text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Naše doklady a oprávnění
          </Link>
        </div>
      </section>

      <section className="shell py-12 lg:py-16">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Časté dotazy k ceně
        </h2>
        <FaqList items={faq} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      <ContactStrip
        question={`Popište zakázku a ozveme se s nabídkou. Působíme ${site.areaIn}.`}
      />
    </>
  );
}
