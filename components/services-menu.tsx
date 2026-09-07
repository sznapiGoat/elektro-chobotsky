"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fields, site } from "@/lib/site";
import { topicsFor } from "@/lib/topics";

/**
 * Rozbalovací nabídka služeb pod hlavičkou. Otevírá se najetím myší,
 * u klávesnice fokusem. Panel je potomek hlavičky, takže přejezd
 * z odkazu na panel ji nezavře.
 */
export function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
      transition={{ duration: reduce ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-16 hidden border-b border-line bg-paper shadow-[0_20px_44px_-30px_rgba(19,26,32,0.45)] lg:block"
    >
      <div className="shell grid grid-cols-5 gap-8 py-8">
        {fields.map((f) => {
          const topics = topicsFor(f.slug);
          return (
            <div key={f.slug}>
              <Link
                href={`/${f.slug}`}
                onClick={onNavigate}
                className="block text-[14.5px] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors hover:text-signal"
              >
                {f.title}
              </Link>
              <ul className="mt-3 space-y-2 border-t border-line pt-3">
                {topics.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.field}/${t.slug}`}
                      onClick={onNavigate}
                      className="block text-[13.5px] leading-snug text-ink-700 transition-colors hover:text-signal"
                    >
                      {t.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-3.5">
        <Link
          href="/nabidka-sluzeb"
          onClick={onNavigate}
          className="text-[13.5px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
        >
          Úplný výčet služeb na jedné stránce
        </Link>
        <span className="text-[13px] text-ink-500">
          Působíme {site.areaIn}
        </span>
      </div>
    </motion.div>
  );
}
