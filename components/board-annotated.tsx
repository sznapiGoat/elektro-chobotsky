"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { boardSpots } from "@/lib/board";
import { photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Fotografie rozvaděče s popisky. Bod se vybírá kliknutím na značku
 * ve snímku nebo na řádek ve výpisu, obojí ovládá jeden stav.
 */
export function BoardAnnotated() {
  const [activeId, setActiveId] = React.useState(boardSpots[0].id);
  const reduce = useReducedMotion();
  const p = photo("rozvadec-jistice");
  const active = boardSpots.find((s) => s.id === activeId) ?? boardSpots[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-6">
        <figure className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-line bg-ink">
            <Image
              src={`/foto/${p.file}.jpg`}
              alt={p.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />

            {boardSpots.map((spot, i) => {
              const isActive = spot.id === activeId;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveId(spot.id)}
                  onMouseEnter={() => setActiveId(spot.id)}
                  aria-pressed={isActive}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className={cn(
                    "absolute -ml-5 -mt-5 flex h-10 w-10 items-center justify-center border font-mono text-[12px] outline-none transition-[background-color,border-color,transform] duration-300 ease-out sm:-ml-3.5 sm:-mt-3.5 sm:h-7 sm:w-7 sm:text-[11px]",
                    isActive
                      ? "scale-110 border-white bg-signal text-white"
                      : "border-white/70 bg-ink/70 text-white hover:border-white hover:bg-ink"
                  )}
                >
                  <span aria-hidden>{i + 1}</span>
                  <span className="sr-only">{spot.title}</span>
                </button>
              );
            })}
          </div>
          <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
            Osazený rozvaděč z vlastní realizace. Kliknutím na číslo se
            zobrazí popis.
          </figcaption>
        </figure>
      </div>

      <div className="lg:col-span-6">
        <div className="min-h-[9.5rem] border-t-2 border-signal pt-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-[1.2rem] font-semibold tracking-[-0.015em] text-ink">
                {active.title}
              </h3>
              <p className="mt-3 max-w-[54ch] text-[15px] leading-[1.7] text-ink-700">
                {active.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <ol className="mt-8 border-t border-line">
          {boardSpots.map((spot, i) => {
            const isActive = spot.id === activeId;
            return (
              <li key={spot.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setActiveId(spot.id)}
                  aria-current={isActive}
                  className={cn(
                    "grid w-full grid-cols-[2rem_1fr] items-baseline gap-2 py-3 text-left text-[14.5px] transition-colors",
                    isActive ? "text-ink" : "text-ink-500 hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[11.5px] transition-colors",
                      isActive ? "text-signal" : "text-ink-300"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "border-b pb-0.5 transition-colors",
                      isActive ? "border-signal" : "border-transparent"
                    )}
                  >
                    {spot.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
