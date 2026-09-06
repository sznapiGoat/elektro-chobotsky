"use client";

import * as React from "react";
import Image from "next/image";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { gallery } from "@/lib/site";

const items: LightboxItem[] = gallery.map((g) => ({
  src: `/foto/${g.file}.jpg`,
  alt: g.alt,
  title: g.caption,
  w: g.w,
  h: g.h,
}));

const byFile = new Map(gallery.map((g, i) => [g.file, { ...g, index: i }]));

/**
 * Kompozice galerie. Každý pás má jiný tvar, aby to nebyla jednotná mřížka:
 * trojice portrétů, plná šíře, odsazený snímek, dvojice.
 */
const rows: { kind: "trio" | "full" | "inset" | "duo"; files: string[] }[] = [
  { kind: "trio", files: ["rozvadec-01", "hala-02", "hygienicke-zazemi-01"] },
  { kind: "full", files: ["jidelna-zs-01"] },
  { kind: "inset", files: ["jidelna-zs-03"] },
  { kind: "duo", files: ["jidelna-zs-02", "hala-01"] },
  { kind: "full", files: ["hala-03"] },
  { kind: "inset", files: ["hala-04"] },
  { kind: "duo", files: ["hygienicke-zazemi-02", "hotel-01"] },
];

export function PhotoEssay() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const tile = (
    file: string,
    ratio: string,
    sizes: string,
    className?: string
  ) => {
    const g = byFile.get(file);
    if (!g) return null;
    return (
      <figure key={file} className={className}>
        <button
          type="button"
          onClick={() => setOpenIndex(g.index)}
          aria-label={`Zvětšit fotografii: ${g.caption}`}
          className={`group relative block w-full overflow-hidden border border-line outline-none ${ratio}`}
        >
          <Image
            src={`/foto/${g.file}.jpg`}
            alt={g.alt}
            fill
            sizes={sizes}
            className="object-cover transition-[filter] duration-500 ease-out group-hover:brightness-[1.06]"
          />
          <span className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-signal/70 group-focus-visible:border-signal" />
        </button>
        <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
          {g.caption}
        </figcaption>
      </figure>
    );
  };

  return (
    <div className="space-y-14 lg:space-y-20">
      {rows.map((row, i) => {
        if (row.kind === "trio") {
          return (
            <div key={i} className="grid gap-4 sm:grid-cols-3">
              {row.files.map((f) =>
                tile(f, "aspect-[3/4]", "(max-width: 640px) 92vw, 30vw")
              )}
            </div>
          );
        }
        if (row.kind === "full") {
          return (
            <div key={i}>
              {row.files.map((f) =>
                tile(f, "aspect-[16/9] sm:aspect-[21/9]", "100vw")
              )}
            </div>
          );
        }
        if (row.kind === "inset") {
          return (
            <div key={i} className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8 lg:col-start-4">
                {row.files.map((f) =>
                  tile(f, "aspect-[4/3]", "(max-width: 1024px) 92vw, 62vw")
                )}
              </div>
            </div>
          );
        }
        return (
          <div key={i} className="grid gap-4 sm:grid-cols-2">
            {row.files.map((f) =>
              tile(f, "aspect-[4/3]", "(max-width: 640px) 92vw, 46vw")
            )}
          </div>
        );
      })}

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </div>
  );
}
