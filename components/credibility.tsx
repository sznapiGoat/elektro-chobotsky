"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { certificates, credentials } from "@/lib/site";
import { cn } from "@/lib/utils";

const docs: LightboxItem[] = certificates.map((c) => ({
  src: `/cert/${c.file}.jpg`,
  alt: c.alt,
  title: c.title,
  meta: c.meta,
  w: 905,
  h: 1280,
}));

export function Credibility() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const openDoc = (file: string) => {
    const i = certificates.findIndex((c) => c.file === file);
    setOpenIndex(i >= 0 ? i : null);
  };

  return (
    <section
      aria-labelledby="opravneni-title"
      className="border-y border-ink-600/70 bg-ink-800"
    >
      <div className="shell py-16 lg:py-20">
        <Reveal>
          <h2
            id="opravneni-title"
            className="max-w-[24ch] font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl"
          >
            Oprávnění a certifikace
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-12">
          {/* Partnerský blok: logo na světlé plotně, aby zůstalo v originálních barvách. */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col gap-8 border border-ink-600/80 bg-ink-700 p-6">
              <div className="flex flex-1 items-center justify-center bg-white p-6">
                <Image
                  src="/brand/jablotron.png"
                  alt="Jablotron"
                  width={841}
                  height={224}
                  sizes="(max-width: 1024px) 90vw, 300px"
                  className="h-auto w-full"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-steel-100">
                  Certifikovaný montážní partner
                </p>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">
                  Zabezpečovací systémy JABLOTRON 100+ a Mercury montujeme podle
                  technické dokumentace výrobce. Ke koncesované činnosti k ochraně
                  majetku a osob.
                </p>
                <button
                  type="button"
                  onClick={() => openDoc("jablotron-100-mercury")}
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal-text transition-colors hover:text-white"
                >
                  Zobrazit certifikát
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {credentials.map((c, i) => (
              <Reveal key={c.key} delay={0.05 * (i + 1)}>
                <article
                  className={cn(
                    "group flex h-full flex-col justify-between gap-6 border p-6 transition-colors duration-300",
                    c.key === "ticr"
                      ? "border-signal/45 bg-signal-soft"
                      : "border-ink-600/80 bg-ink-700 hover:border-ink-500"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
                        {c.issuer}
                      </p>
                      <SealCheck
                        size={18}
                        className={
                          c.key === "ticr" ? "text-signal-text" : "text-steel-400"
                        }
                      />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-[-0.01em] text-steel-100">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-steel-300">
                      {c.scope}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-ink-600/80 pt-4">
                    <span className="font-mono text-xs text-steel-400">
                      {c.ref}
                    </span>
                    <span className="font-mono text-xs text-steel-200">
                      {c.valid}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-steel-400">
            Všechny doklady jsou k nahlédnutí v sekci{" "}
            <a
              href="#certifikaty"
              className="text-steel-200 underline decoration-ink-500 underline-offset-4 transition-colors hover:text-white hover:decoration-signal"
            >
              Certifikáty
            </a>
            .
          </p>
        </Reveal>
      </div>

      <Lightbox items={docs} index={openIndex} onIndexChange={setOpenIndex} />
    </section>
  );
}
