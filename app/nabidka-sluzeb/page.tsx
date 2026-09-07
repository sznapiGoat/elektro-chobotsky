import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { PhotoBand } from "@/components/photo-band";
import { fields, originalServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nabídka služeb",
  description:
    "Úplný výčet služeb: elektroinstalace RD, BD a průmyslových objektů, odběrná místa, přípojky NN, veřejné osvětlení, hromosvody, zabezpečovací systémy Jablotron, elektrické vytápění, výchozí a periodické revize.",
};

export default function NabidkaSluzeb() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-12 pt-8 lg:pb-16">
          <h1 className="max-w-[26ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            Nabídka služeb
          </h1>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Výčet níže je úplný a odpovídá tomu, na co máme živnostenská
            oprávnění. Podrobnosti ke každému oboru najdete na jeho stránce.
          </p>
        </div>
      </section>

      <div className="shell grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-7">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Firma Chobotský nabízí tyto služby
          </h2>

          <ol className="mt-8">
            {originalServices.map((s, i) => (
              <li
                key={s.text}
                className="grid grid-cols-[2.5rem_1fr] items-baseline border-t border-line py-4 last:border-b"
              >
                <span className="font-mono text-[12.5px] text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link
                  href={`/${s.field}`}
                  className="text-[15.5px] leading-snug text-ink-700 transition-colors hover:text-signal"
                >
                  {s.text}
                </Link>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-measure text-[14.5px] leading-relaxed text-ink-500">
            Objekt zvládneme kompletně, od přípojky nízkého napětí přes
            hromosvod a zabezpečení až po revizní zprávu. Působíme
            {site.areaIn}.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              Obory
            </h2>
            <ul className="mt-5 border-b border-line">
              {fields.map((f) => (
                <li key={f.slug} className="border-t border-line">
                  <Link
                    href={`/${f.slug}`}
                    className="group block py-4 transition-colors hover:bg-paper-200 sm:px-2"
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="text-[15.5px] font-semibold text-ink transition-colors group-hover:text-signal">
                        {f.title}
                      </span>
                      <span
                        aria-hidden
                        className="font-mono text-ink-300 transition-colors group-hover:text-signal"
                      >
                        →
                      </span>
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-ink-500">
                      {f.keywords}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-paper-200 py-14">
        <PhotoBand
          files={["rozvadec-jistice", "hala-03", "pekarstvi-pult"]}
        />
      </section>

      <ContactStrip question="Nevíte, do kterého oboru vaše zakázka patří? Zavolejte, poradíme." />
    </>
  );
}
