"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Faq } from "@/lib/faq";
import { cn } from "@/lib/utils";

/** Časté dotazy. Rozbalený je vždy nejvýš jeden, aby šly odpovědi srovnat. */
export function FaqList({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <ul className="mt-6 border-t border-line">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <li key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-baseline justify-between gap-6 py-4 text-left"
              >
                <span
                  className={cn(
                    "max-w-[52ch] text-[15.5px] font-medium leading-snug transition-colors",
                    isOpen ? "text-ink" : "text-ink-700 hover:text-ink"
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 font-mono text-[15px] transition-transform duration-300 ease-out",
                    isOpen ? "rotate-45 text-signal" : "text-ink-300"
                  )}
                >
                  +
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`faq-${i}`}
                  initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-5 text-[15px] leading-[1.7] text-ink-700">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
