import Link from "next/link";
import { fields } from "@/lib/site";

/** Odkazy na ostatní obory. Prostý řádkový seznam, ne mřížka karet. */
export function FieldFooterNav({ current }: { current: string }) {
  const others = fields.filter((f) => f.slug !== current);

  return (
    <section className="border-t border-line">
      <div className="shell py-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
          Další obory
        </h2>
        <ul className="mt-5">
          {others.map((f) => (
            <li key={f.slug} className="border-t border-line">
              <Link
                href={`/${f.slug}`}
                className="group flex flex-col gap-1 py-4 transition-colors hover:bg-paper-200 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-[15rem] shrink-0 text-[15.5px] font-semibold text-ink transition-colors group-hover:text-signal">
                  {f.title}
                </span>
                <span className="text-[13.5px] leading-relaxed text-ink-500">
                  {f.keywords}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
