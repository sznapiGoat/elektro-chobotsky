"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { gallery } from "@/lib/site";

/** Rozvržení dlaždic. Součet sloupců v každém pásu je 6, mřížka nemá prázdná místa. */
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-2 md:row-span-2",
  "col-span-2 md:col-span-4 md:row-span-2",
  "col-span-2 md:col-span-6",
];

const items: LightboxItem[] = gallery.map((g) => ({
  src: `/foto/${g.file}.jpg`,
  alt: g.alt,
  title: g.caption,
  w: g.w,
  h: g.h,
}));

export function Gallery() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section
      id="fotogalerie"
      className="scroll-mt-24 border-y border-ink-600/70 bg-ink-800 py-20 lg:py-28"
    >
      <div className="shell">
        <Reveal>
          <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl">
            Fotogalerie
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-steel-300">
            Dokončené instalace na stavbách, kde jsme pracovali. Kliknutím se
            fotografie otevře ve větším náhledu.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid auto-rows-[42vw] grid-cols-2 gap-2 sm:auto-rows-[32vw] md:auto-rows-[180px] md:grid-cols-6 lg:auto-rows-[210px]">
            {gallery.map((g, i) => (
              <button
                key={g.file}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Zvětšit fotografii: ${g.caption}`}
                className={`group relative block overflow-hidden border border-ink-600/80 outline-none transition-colors duration-300 hover:border-steel-400/60 focus-visible:border-signal ${spans[i]}`}
              >
                <Image
                  src={`/foto/${g.file}.jpg`}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover brightness-[0.86] transition-[filter] duration-500 ease-out group-hover:brightness-105"
                />

                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

                <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-steel-100/25 bg-ink-950/60 text-steel-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowsOutSimple size={14} />
                </span>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-left sm:p-4">
                  <span className="block translate-y-1 text-[13px] font-medium leading-snug text-steel-100 opacity-90 transition-[transform,opacity] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    {g.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
