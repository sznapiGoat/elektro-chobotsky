import Link from "next/link";
import { BoardAnnotated } from "@/components/board-annotated";
import { ContactStrip } from "@/components/contact-strip";
import { HeroSlider } from "@/components/hero-slider";
import { PhotoBand } from "@/components/photo-band";
import { credentials, fields, references } from "@/lib/site";
import { allPhotos } from "@/lib/photos";

export default function Home() {
  const preview = references.slice(0, 6);

  return (
    <>
      <HeroSlider />

      {/* Obory jako obsah, ne jako mřížka karet. */}
      <section className="shell py-16 lg:py-20">
        <h2 className="text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
          Co děláme
        </h2>
        <ul className="mt-8 border-b border-line">
          {fields.map((f) => (
            <li key={f.slug} className="border-t border-line">
              <Link
                href={`/${f.slug}`}
                className="group grid gap-2 py-6 transition-colors hover:bg-paper-200 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2"
              >
                <span className="text-[1.35rem] font-semibold leading-tight tracking-[-0.015em] text-ink transition-colors group-hover:text-signal sm:col-span-4 sm:text-[1.5rem]">
                  {f.title}
                </span>
                <span className="text-[14.5px] leading-relaxed text-ink-700 sm:col-span-7">
                  {f.lead}
                </span>
                <span
                  aria-hidden
                  className="hidden text-right font-mono text-ink-300 transition-colors group-hover:text-signal sm:col-span-1 sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Popsaná fotografie rozvaděče. Laikovi vysvětlí, co v té skříni je. */}
      <section className="border-t border-line">
        <div className="shell py-16 lg:py-20">
          <h2 className="max-w-[26ch] text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
            Co je v rozvaděči
          </h2>
          <p className="mt-5 max-w-measure text-[15px] leading-[1.7] text-ink-700">
            Skříň, kterou většina lidí zavře a doufá, že to vydrží. Tady je
            rozebraná na části, které na ní při revizi kontrolujeme.
          </p>
          <div className="mt-10">
            <BoardAnnotated />
          </div>
        </div>
      </section>

      {/* Pás z realizací: provozovny, veřejné budovy, průmysl, rozvaděče. */}
      <section className="border-y border-line bg-paper-200 py-14 lg:py-16">
        <div className="shell flex flex-wrap items-baseline justify-between gap-4 pb-8">
          <h2 className="text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
            Z realizací
          </h2>
          <Link
            href="/fotogalerie"
            className="text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Všech {allPhotos.length} fotografií
          </Link>
        </div>
        <PhotoBand files={["pekarstvi-prodejna", "jidelna-zs-01", "truhlarska-dilna"]} />
        <PhotoBand
          files={["rozvadec-jistice", "bowling-herna", "sal-hvezdny-podhled"]}
          className="mt-3"
        />
      </section>

      {/* Oprávnění jako tabulka dokladů. */}
      <section className="shell py-16 lg:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
            Oprávnění
          </h2>
          <Link
            href="/certifikaty"
            className="text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Všech 10 dokladů k nahlédnutí
          </Link>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-strong">
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Vydal
                </th>
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Doklad
                </th>
                <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Číslo
                </th>
                <th className="py-2.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                  Platnost
                </th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((c) => (
                <tr key={c.ref} className="border-b border-line align-top">
                  <td className="py-4 pr-6 text-[14px] text-ink-700">{c.issuer}</td>
                  <td className="py-4 pr-6 text-[14px] font-medium text-ink">
                    {c.title}
                  </td>
                  <td className="py-4 pr-6 font-mono text-[13px] text-ink-700">
                    {c.ref}
                  </td>
                  <td className="py-4 font-mono text-[13px] text-ink-700">{c.valid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ukázka referencí prostým výčtem. */}
      <section className="border-t border-line">
        <div className="shell py-16 lg:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2rem]">
              Kde jsme pracovali
            </h2>
            <Link
              href="/reference"
              className="text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Všech {references.length} realizací
            </Link>
          </div>
          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {preview.map((r) => (
              <li key={r.name} className="text-[15px] leading-snug text-ink-700">
                {r.name}
                {r.place ? <span className="text-ink-500">, {r.place}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactStrip question="Řekněte nám, o jaký objekt jde, a ozveme se s termínem." />
    </>
  );
}
