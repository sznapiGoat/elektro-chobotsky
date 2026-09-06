import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Kontaktní pruh na konci podstránky. Jeden řádek, žádná další sekce s nadpisem.
 * Otázka se mění podle stránky, aby to nebyl desetkrát stejný blok.
 */
export function ContactStrip({ question }: { question: string }) {
  return (
    <section className="border-t border-line bg-paper-200">
      <div className="shell flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-700">
          {question}{" "}
          <Link
            href="/kontakt"
            className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Nebo napište
          </Link>
          .
        </p>
        <a
          href={site.phoneHref}
          className="font-mono text-3xl leading-none text-ink transition-colors hover:text-signal sm:text-[2.25rem]"
        >
          {site.phone}
        </a>
      </div>
    </section>
  );
}
