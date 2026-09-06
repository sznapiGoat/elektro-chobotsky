import Image from "next/image";
import { ArrowDown, Phone } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      <div className="grid-plane pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(120% 70% at 18% 0%, rgba(34, 52, 63, 0.85) 0%, rgba(10, 16, 21, 0) 65%)",
        }}
      />

      <div className="shell relative grid items-end gap-12 pb-16 pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-7">
          <span aria-hidden className="mb-8 block h-[3px] w-14 bg-signal" />
          <h1 className="font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] text-steel-100 sm:text-5xl lg:text-[3.6rem]">
            Od roku 1995 stavíme elektroinstalace,
            <br className="hidden sm:block" /> které projdou revizí.
          </h1>

          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-steel-300 sm:text-base">
            Silnoproud, slaboproud, hromosvody a zabezpečení Jablotron. Revize
            s osvědčením TIČR. Středočeský kraj a Praha.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={site.phoneHref} size="lg" className="font-mono normal-case tracking-normal">
              <Phone size={18} weight="fill" />
              {site.phone}
            </ButtonLink>
            <ButtonLink href="#sluzby" variant="outline" size="lg">
              Nabídka služeb
              <ArrowDown size={16} />
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="relative border border-ink-600/80 bg-ink-800">
            <Image
              src="/foto/hala-02.jpg"
              alt="Hala s betonovými stěnami, lištovými svítidly na stropě a povrchovými kabelovými trasami vedenými k rozvodům."
              width={960}
              height={1280}
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-[300px] w-full object-cover object-center sm:h-[420px] lg:h-[460px]"
            />
            <figcaption className="flex items-baseline justify-between gap-4 border-t border-ink-600/80 px-4 py-3">
              <span className="text-[13px] text-steel-300">
                Osvětlení a rozvody v hale
              </span>
              <span className="font-mono text-[11px] text-steel-400">
                Divišov
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
