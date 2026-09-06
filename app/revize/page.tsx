import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";

export const metadata: Metadata = {
  title: "Revize elektrických zařízení",
  description:
    "Výchozí a periodické revize vyhrazených elektrických zařízení v rozsahu E2A, tedy do 1 kV AC a 1,5 kV DC včetně hromosvodů. Osvědčení Technické inspekce ČR, platnost do roku 2030.",
};

const authorizations = [
  {
    issuer: "Technická inspekce ČR",
    doc: "Osvědčení k provádění revizí vyhrazených elektrických zařízení",
    ref: "5098/25/R-EZ-E2A",
    valid: "do 24. 6. 2030",
  },
  {
    issuer: "Elektroservis VV s.r.o.",
    doc: "Odborná způsobilost v elektrotechnice dle NV 194/2022 Sb.",
    ref: "EVV/050/2024",
    valid: "do 12. 3. 2027",
  },
];

const clauses = [
  {
    title: "Prohlídka",
    items: [
      "kontrola provedení instalace a použitých přístrojů",
      "ochrana před úrazem elektrickým proudem",
      "označení vodičů, dostupnost a stav rozvaděčů",
    ],
  },
  {
    title: "Měření a zkoušení",
    items: [
      "spojitost ochranných vodičů a pospojování",
      "izolační stav rozvodů",
      "impedance poruchové smyčky a účinnost ochrany",
      "funkce a vybavovací čas proudových chráničů",
    ],
  },
  {
    title: "Vyhodnocení",
    items: [
      "porovnání zjištěného stavu s požadavky norem",
      "výpis závad rozdělený podle vážnosti",
    ],
  },
  {
    title: "Revizní zpráva",
    items: [
      "identifikace zařízení a rozsah revize",
      "použité měřicí přístroje a naměřené hodnoty",
      "závěr o tom, zda je zařízení schopné bezpečného provozu",
    ],
  },
];

const occasions = [
  {
    title: "Výchozí revize",
    text: "Před uvedením nové instalace do provozu. Bez ní nelze zařízení převzít ani zkolaudovat.",
  },
  {
    title: "Po zásahu do instalace",
    text: "Po rekonstrukci, rozšíření rozvodů nebo výměně rozvaděče se revize dělá na dotčenou část.",
  },
  {
    title: "Periodická revize",
    text: "V pravidelné lhůtě po dobu provozu. Lhůtu stanovuje norma podle prostředí, ve kterém zařízení pracuje.",
  },
  {
    title: "Pro pojišťovnu",
    text: "Platná revizní zpráva bývá podmínkou plnění při škodě způsobené elektroinstalací.",
  },
];

export default function Revize() {
  return (
    <>
      <FieldHead
        title="Revize"
        lead="Výchozí a periodické revize vyhrazených elektrických zařízení v rozsahu E2A, tedy zařízení do 1 kV AC a 1,5 kV DC včetně hromosvodů, v prostředí bez nebezpečí výbuchu."
      />

      {/* Oprávnění nejdřív. U revizí je to jediné, co rozhoduje. */}
      <section className="border-b border-line bg-paper-200">
        <div className="shell py-12 lg:py-14">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Na základě čeho revidujeme
          </h2>
          <dl className="mt-6">
            {authorizations.map((a) => (
              <div
                key={a.ref}
                className="grid gap-2 border-t border-line-strong py-5 last:border-b sm:grid-cols-12 sm:gap-6"
              >
                <dt className="text-[13.5px] text-ink-500 sm:col-span-3">{a.issuer}</dt>
                <dd className="text-[15px] font-medium leading-snug text-ink sm:col-span-5">
                  {a.doc}
                </dd>
                <dd className="font-mono text-[13px] text-ink-700 sm:col-span-2">
                  {a.ref}
                </dd>
                <dd className="font-mono text-[13px] text-ink-700 sm:col-span-2 sm:text-right">
                  {a.valid}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/certifikaty"
            className="mt-6 inline-block text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Naskenované doklady
          </Link>
        </div>
      </section>

      {/* Obsah revize jako číslované články, s čísly v levém okraji. */}
      <section className="shell py-14 lg:py-20">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Co revize obsahuje
        </h2>

        <ol className="mt-10 max-w-[64rem]">
          {clauses.map((c, i) => (
            <li
              key={c.title}
              className="grid gap-3 border-t border-line py-7 last:border-b sm:grid-cols-[3rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-[12.5px] text-ink-500">
                {i + 1}.
              </span>
              <div>
                <h3 className="text-[16.5px] font-semibold text-ink">{c.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="max-w-[56ch] text-[14.5px] leading-[1.65] text-ink-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="shell py-14 lg:py-16">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Kdy revizi potřebujete
          </h2>
          <div className="mt-8 grid gap-x-14 gap-y-8 sm:grid-cols-2">
            {occasions.map((o) => (
              <div key={o.title}>
                <h3 className="text-[15.5px] font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 max-w-[44ch] text-[14.5px] leading-[1.7] text-ink-700">
                  {o.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-[60ch] border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
            Lhůtu pravidelné revize nelze určit obecně. Vychází z protokolu
            o určení vnějších vlivů, tedy z prostředí, ve kterém zařízení
            pracuje. Řekněte nám typ provozu a lhůtu pro váš objekt ověříme.
          </p>
        </div>
      </section>

      <FieldFooterNav current="revize" />
      <ContactStrip question="Potřebujete výchozí revizi k nové instalaci nebo periodickou k provozu?" />
    </>
  );
}
