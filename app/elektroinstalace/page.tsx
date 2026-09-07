import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";
import { TopicList } from "@/components/topic-list";
import { PhotoBand } from "@/components/photo-band";
import { Reveal } from "@/components/reveal";
import { references } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elektroinstalace",
  description:
    "Silnoproudé i slaboproudé elektroinstalace rodinných a bytových domů, provozoven a průmyslových objektů. Odběrná místa, přípojky NN, rozvaděče, osvětlení hal a veřejné osvětlení.",
};

const steps = [
  {
    title: "Odběrné místo",
    text: "Realizace nových odběrných míst i úpravy stávajících, elektrické přípojky nízkého napětí. Řešíme i přesun a doplnění měření při rekonstrukcích.",
  },
  {
    title: "Rozvaděč",
    text: "Hlavní i podružné rozvaděče, jištění jednotlivých okruhů, proudové chrániče a obloukové ochrany. Osazení a zapojení podle dimenzování celé instalace.",
  },
  {
    title: "Rozvody",
    text: "Kabelové trasy, zásuvkové a světelné obvody, slaboproud. V halách a provozovnách povrchové trasy a lineární osvětlení, v domech instalace pod omítku.",
  },
  {
    title: "Veřejné osvětlení",
    text: "Montáž a údržba veřejného osvětlení pro obce, rozšíření stávajících tras a výměna svítidel.",
  },
  {
    title: "Předání",
    text: "Výchozí revize a revizní zpráva, kterou předáme spolu s dokumentací k instalaci. Revizi děláme sami, není potřeba hledat další firmu.",
  },
];

export default function Elektroinstalace() {
  const examples = references.filter((r) =>
    [
      "Jídelna ZŠ",
      "XPO Supply Chain CZ s.r.o., LC Měchnov",
      "Výrobní hala KADATEC s.r.o.",
      "Rozšíření veřejného osvětlení",
    ].includes(r.name)
  );

  return (
    <>
      <FieldHead
        title="Elektroinstalace"
        lead="Silnoproudé i slaboproudé rozvody v rodinných a bytových domech, provozovnách a průmyslových objektech. Vedeme zakázku od přípojky nízkého napětí až po revizní zprávu."
      />

      <TopicList field="elektroinstalace" />

      {/* Postup zakázky jako svislá osa, ne mřížka karet. */}
      <section className="shell py-14 lg:py-20">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Jak zakázka běží
        </h2>

        <ol className="mt-10">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-3 border-t border-line py-7 last:border-b sm:grid-cols-[3rem_14rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-[12.5px] text-ink-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[16.5px] font-semibold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="max-w-[54ch] text-[15px] leading-[1.7] text-ink-700">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <Reveal>
        <figure>
          <div className="relative h-[48vw] max-h-[460px] min-h-[200px] w-full border-y border-line">
            <Image
              src="/foto/rozvadec-jistice.jpg"
              alt="Otevřený rozvaděč s několika řadami jističů a proudových chráničů, číslovanými vodiči a svorkovnicemi."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="shell py-3 text-[12.5px] text-ink-500">
            Osazený rozvaděč s jističi, chrániči a číslovanými vodiči.
          </figcaption>
        </figure>
      </Reveal>

      <section className="shell py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
              Pro koho pracujeme
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.7] text-ink-700">
              Obce a jejich budovy, výrobní a skladové haly, provozovny
              a prodejny, rodinné a bytové domy. Rozsah zakázek jde od výměny
              rozvaděče po elektroinstalaci celé haly.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-b border-line">
              {examples.map((r) => (
                <li
                  key={r.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-3.5"
                >
                  <span className="text-[15px] text-ink-700">{r.name}</span>
                  <span className="font-mono text-[12.5px] text-ink-500">{r.place}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/reference"
              className="mt-5 inline-block text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Všech {references.length} realizací
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-200 py-14">
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

      <FieldFooterNav current="elektroinstalace" />
      <ContactStrip question="Popište objekt a rozsah prací, ozveme se s termínem." />
    </>
  );
}
