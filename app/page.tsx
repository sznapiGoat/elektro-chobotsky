import Image from "next/image";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { Reveal } from "@/components/reveal";
import { credentials, fields, references, site } from "@/lib/site";

const titleBlock = [
  { label: "Firma", value: site.name },
  { label: "Obor", value: "Elektro, hromosvody, revize" },
  { label: "Oblast", value: site.area },
  { label: "Od roku", value: "1995" },
];

export default function Home() {
  const preview = references.slice(0, 6);

  return (
    <>
      {/* Titulní blok, čtyři pole jako v popisovém poli výkresu. */}
      <section>
        <div className="shell pt-8">
          <dl className="grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
            {titleBlock.map((f) => (
              <div
                key={f.label}
                className="border-b border-r border-line px-4 py-4"
              >
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
                  {f.label}
                </dt>
                <dd
                  className={`mt-1.5 text-[13.5px] leading-snug ${
                    f.label === "Od roku" ? "font-mono text-signal" : "text-ink"
                  }`}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="shell pb-12 pt-14 lg:pb-16 lg:pt-20">
        <Reveal>
          <h1 className="max-w-[24ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.9rem] lg:text-[3.4rem]">
            Elektroinstalace, hromosvody a revize pro obce, průmysl i rodinné
            domy.
          </h1>
          <p className="mt-7 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Živnostenské oprávnění pro montáž, opravy, revize a zkoušky
            elektrických zařízení máme od února 1995. Revize provádíme na
            základě osvědčení Technické inspekce ČR v rozsahu E2A, zabezpečovací
            systémy montujeme jako certifikovaný partner Jablotronu.
          </p>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <a
              href={site.phoneHref}
              className="font-mono text-2xl text-ink transition-colors hover:text-signal sm:text-[1.75rem]"
            >
              {site.phone}
            </a>
            <Link
              href="/nabidka-sluzeb"
              className="text-[14.5px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Celá nabídka služeb
            </Link>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <figure className="relative">
          <div className="relative h-[52vw] max-h-[520px] min-h-[220px] w-full border-y border-line">
            <Image
              src="/foto/hala-01.jpg"
              alt="Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu."
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="shell py-3 text-[12.5px] text-ink-500">
            Hala s lineárním osvětlením, jedna z dokončených instalací.{" "}
            <Link
              href="/fotogalerie"
              className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              Fotogalerie
            </Link>
          </figcaption>
        </figure>
      </Reveal>

      {/* Obory jako obsah, ne jako mřížka karet. */}
      <section className="shell pb-16 pt-10 lg:pb-20">
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

      {/* Oprávnění jako tabulka dokladů. */}
      <section className="border-t border-line bg-paper-200">
        <div className="shell py-16 lg:py-20">
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
        </div>
      </section>

      {/* Ukázka referencí prostým výčtem. */}
      <section className="shell py-16 lg:py-20">
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
      </section>

      <ContactStrip question="Řekněte nám, o jaký objekt jde, a ozveme se s termínem." />
    </>
  );
}
