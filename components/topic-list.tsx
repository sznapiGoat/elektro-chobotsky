import Link from "next/link";
import { topicsFor } from "@/lib/topics";

/** Rozcestník podstránek oboru. Řádky, ne mřížka karet. */
export function TopicList({ field }: { field: string }) {
  const items = topicsFor(field);
  if (items.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper-200">
      <div className="shell py-12">
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Podrobněji
        </h2>
        <ul className="mt-6">
          {items.map((t, i) => (
            <li key={t.slug} className="border-t border-line last:border-b">
              <Link
                href={`/${t.field}/${t.slug}`}
                className="group grid gap-2 py-5 transition-colors hover:bg-paper-300 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2"
              >
                <span className="font-mono text-[12.5px] text-ink-500 sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-semibold leading-snug text-ink transition-colors group-hover:text-signal sm:col-span-4">
                  {t.navTitle}
                </span>
                <span className="text-[14px] leading-relaxed text-ink-700 sm:col-span-6">
                  {t.lead}
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
      </div>
    </section>
  );
}
