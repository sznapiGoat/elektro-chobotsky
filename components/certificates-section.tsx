"use client";

import * as React from "react";
import Image from "next/image";
import { MagnifyingGlassPlus } from "@phosphor-icons/react/dist/ssr";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { certificates } from "@/lib/site";

const items: LightboxItem[] = certificates.map((c) => ({
  src: `/cert/${c.file}.jpg`,
  alt: c.alt,
  title: c.title,
  meta: c.meta,
  w: 905,
  h: 1280,
}));

export function CertificatesSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="certifikaty" className="scroll-mt-24 py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl">
            Certifikáty
          </h2>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-steel-300">
            Osvědčení, oprávnění a doklady o školeních. Každý dokument si můžete
            otevřít a přečíst celý.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {certificates.map((c, i) => (
            <Reveal key={c.file} delay={0.03 * i}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group flex h-full w-full flex-col border border-ink-600/80 bg-ink-800 text-left outline-none transition-colors duration-300 hover:border-steel-400/60 focus-visible:border-signal"
                aria-label={`Otevřít dokument: ${c.title}`}
              >
                <span className="relative block aspect-[905/1280] w-full overflow-hidden border-b border-ink-600/80 bg-ink-700">
                  <Image
                    src={`/cert/${c.file}.jpg`}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover object-top brightness-[0.82] transition-[filter] duration-500 ease-out group-hover:brightness-100"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center border border-steel-100/30 bg-ink-950/70 text-steel-100">
                      <MagnifyingGlassPlus size={16} />
                    </span>
                  </span>
                </span>

                <span className="flex flex-1 flex-col gap-2 p-4">
                  <span className="text-[13px] font-medium leading-snug text-steel-100">
                    {c.title}
                  </span>
                  <span className="font-mono text-[10.5px] leading-relaxed text-steel-400">
                    {c.meta}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
