"use client";

import * as React from "react";
import Image from "next/image";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { certificates } from "@/lib/site";

const items: LightboxItem[] = certificates.map((c) => ({
  src: `/cert/${c.file}.jpg`,
  alt: c.alt,
  title: c.title,
  meta: `${c.issuer}, ${c.ref}, ${c.valid}`,
  w: 905,
  h: 1280,
}));

/** Registr dokladů. Řádky jako v evidenci, náhled až po kliknutí. */
export function CertificateRegister() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div>
      <div className="hidden border-b border-line-strong pb-2.5 lg:grid lg:grid-cols-12 lg:gap-6">
        <span className="col-span-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
          List
        </span>
        <span className="col-span-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
          Doklad
        </span>
        <span className="col-span-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
          Vydal
        </span>
        <span className="col-span-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
          Číslo a platnost
        </span>
      </div>

      <ul>
        {certificates.map((c, i) => (
          <li key={c.file} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group grid w-full grid-cols-[3.5rem_1fr] items-start gap-4 py-5 text-left outline-none transition-colors hover:bg-paper-200 focus-visible:bg-paper-200 lg:grid-cols-12 lg:gap-6"
            >
              <span className="relative block h-[70px] w-[50px] shrink-0 border border-line bg-white lg:col-span-1">
                <Image
                  src={`/cert/${c.file}.jpg`}
                  alt=""
                  fill
                  sizes="50px"
                  className="object-cover object-top"
                />
              </span>

              <span className="lg:col-span-5">
                <span className="block text-[15px] font-medium leading-snug text-ink transition-colors group-hover:text-signal">
                  {c.title}
                </span>
                <span className="mt-1.5 block text-[13px] text-ink-500 lg:hidden">
                  {c.issuer}
                </span>
                <span className="mt-0.5 block font-mono text-[12.5px] text-ink-500 lg:hidden">
                  {c.ref}, {c.valid}
                </span>
              </span>

              <span className="hidden text-[14px] text-ink-700 lg:col-span-3 lg:block">
                {c.issuer}
              </span>

              <span className="hidden lg:col-span-3 lg:block">
                <span className="block font-mono text-[13px] text-ink">{c.ref}</span>
                <span className="mt-0.5 block font-mono text-[12.5px] text-ink-500">
                  {c.valid}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </div>
  );
}
