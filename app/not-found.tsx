import Link from "next/link";
import { fields, nav, site } from "@/lib/site";

export const metadata = { title: "Stránka nenalezena" };

export default function NotFound() {
  return (
    <section className="shell py-20 lg:py-28">
      <p className="font-mono text-[12.5px] text-ink-500">Chyba 404</p>
      <h1 className="mt-5 max-w-[20ch] text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.6rem]">
        Tuhle stránku tu nemáme
      </h1>
      <p className="mt-5 max-w-measure text-[16px] leading-[1.75] text-ink-700">
        Adresa nejspíš vede na starou verzi webu nebo v ní chybí písmeno.
        Zkuste některou ze stránek níže, nebo rovnou zavolejte.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
            Obory
          </h2>
          <ul className="mt-4 border-t border-line">
            {fields.map((f) => (
              <li key={f.slug} className="border-b border-line">
                <Link
                  href={`/${f.slug}`}
                  className="block py-3 text-[15px] text-ink-700 transition-colors hover:text-signal"
                >
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
            Stránky
          </h2>
          <ul className="mt-4 border-t border-line">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <Link
                  href={n.href}
                  className="block py-3 text-[15px] text-ink-700 transition-colors hover:text-signal"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={site.phoneHref}
        className="mt-12 inline-block font-mono text-3xl text-ink transition-colors hover:text-signal"
      >
        {site.phone}
      </a>
    </section>
  );
}
