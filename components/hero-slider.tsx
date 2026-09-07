"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides } from "@/lib/photos";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL = 7000;

export function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Automatické přepínání se zastaví při hoveru, focusu a při prefers-reduced-motion.
  const auto = !reduce && !paused;

  React.useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, [auto, index]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="relative isolate overflow-hidden border-b border-line bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative h-[min(82vh,700px)] min-h-[480px] w-full">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.file}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={`/foto/${slide.file}.jpg`}
              alt={i === index ? slide.alt : ""}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover brightness-[0.92]"
            />
          </div>
        ))}

        {/* Zástin, aby text nad fotkou splňoval kontrast. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/45" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="shell flex flex-1 items-center pt-12">
            <div>
              <h1 className="max-w-[22ch] text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[2.9rem] lg:text-[3.5rem]">
                Elektroinstalace, hromosvody a revize
              </h1>
              <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.7] text-paper-300 sm:text-[17px]">
                Od roku 1995 ve Středočeském kraji a v Praze. Revize provádíme
                na osvědčení Technické inspekce ČR.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={site.phoneHref}
                  className="border border-signal bg-signal px-6 py-3.5 font-mono text-[17px] text-white transition-colors hover:border-signal-hover hover:bg-signal-hover"
                >
                  {site.phone}
                </a>
                <Link
                  href="/nabidka-sluzeb"
                  className="text-[14.5px] text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-signal"
                >
                  Nabídka služeb
                </Link>
              </div>
            </div>
          </div>

          {/* Ovládání. Uživatel může přepnout kliknutím nebo šipkami. */}
          <div
            className="shell pb-6"
            role="group"
            aria-label="Volba fotografie"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                go(1);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(-1);
              }
            }}
          >
            <div className="flex items-end gap-5">
              <div className="flex shrink-0 items-center gap-2">
                <ArrowButton
                  label="Předchozí fotografie"
                  glyph="←"
                  onClick={() => go(-1)}
                />
                <ArrowButton
                  label="Další fotografie"
                  glyph="→"
                  onClick={() => go(1)}
                />
                <span className="ml-1 font-mono text-[12px] text-white/70">
                  {index + 1}/{heroSlides.length}
                </span>
              </div>

              <ul className="-mx-1 flex min-w-0 snap-x gap-x-6 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {heroSlides.map((slide, i) => (
                <li key={slide.file} className="shrink-0 snap-start">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={i === index}
                    className="group relative block pb-2 pt-1 text-left"
                  >
                    <span
                      className={cn(
                        "block text-[12.5px] transition-colors",
                        i === index
                          ? "text-white"
                          : "text-white/70 group-hover:text-white"
                      )}
                    >
                      {slide.caption}
                      {slide.place ? (
                        <span className="hidden sm:inline">, {slide.place}</span>
                      ) : null}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/25" />
                    {i === index ? (
                      <motion.span
                        key={auto ? `run-${index}` : `still-${index}`}
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-signal"
                        initial={{ scaleX: auto ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: auto ? INTERVAL / 1000 : 0.3,
                          ease: "linear",
                        }}
                      />
                    ) : null}
                  </button>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowButton({
  label,
  glyph,
  onClick,
}: {
  label: string;
  glyph: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center border border-white/45 text-[15px] text-white transition-colors hover:border-white hover:bg-white/10"
    >
      <span aria-hidden>{glyph}</span>
    </button>
  );
}
