"use client";

import * as React from "react";
import Image from "next/image";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { allPhotos, photoGroups } from "@/lib/photos";

const items: LightboxItem[] = allPhotos.map((p) => ({
  src: `/foto/${p.file}.jpg`,
  alt: p.alt,
  title: p.caption,
  meta: p.place,
  w: p.w,
  h: p.h,
}));

const indexOf = new Map(allPhotos.map((p, i) => [p.file, i]));

/**
 * Galerie po tématech. Sloupcová sazba nechává snímkům jejich vlastní poměr
 * stran, takže se nic neořezává a pásy nevypadají jako jednotná mřížka.
 */
export function PhotoGallery() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-16 lg:space-y-20">
      {photoGroups.map((group) => (
        <section key={group.title}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line-strong pb-3">
            <h2 className="text-[1.2rem] font-semibold tracking-[-0.015em] text-ink">
              {group.title}
            </h2>
            <span className="font-mono text-[12.5px] text-ink-500">
              {group.photos.length}
            </span>
          </div>

          <div className="mt-6 gap-3 [column-fill:balance] columns-1 sm:columns-2 lg:columns-3">
            {group.photos.map((p) => (
              <figure key={p.file} className="mb-3 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setOpenIndex(indexOf.get(p.file) ?? 0)}
                  aria-label={`Zvětšit fotografii: ${p.caption}`}
                  className="group relative block w-full overflow-hidden border border-line outline-none"
                >
                  <Image
                    src={`/foto/${p.file}.jpg`}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="h-auto w-full transition-[filter] duration-500 ease-out group-hover:brightness-[1.06]"
                  />
                  <span className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-signal/70 group-focus-visible:border-signal" />
                </button>
                <figcaption className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
                  {p.caption}
                  {p.place ? <span className="text-ink-300">, {p.place}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </div>
  );
}
