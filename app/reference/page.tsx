import type { Metadata } from "next";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { PhotoBand } from "@/components/photo-band";
import { ReferenceTable } from "@/components/reference-table";
import { references } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Výběr z realizací: jídelna ZŠ Divišov, XPO Supply Chain LC Měchnov, výrobní hala KADATEC Zdislavice, prodejny v Praze, hotel HEINZ Dobříš a další objekty ve Středočeském kraji a v Praze.",
};

export default function Reference() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-10 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
              Reference
            </h1>
            <p className="font-mono text-[13px] text-ink-500">
              {references.length} uvedených objektů
            </p>
          </div>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Seznam není úplný, uvádíme objekty, u kterých máme svolení nebo
            u nichž jde o veřejné budovy. Fotografie z části zakázek jsou
            ve{" "}
            <Link
              href="/fotogalerie"
              className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              fotogalerii
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper-200 py-12">
        <PhotoBand
          files={["jidelna-zs-01", "pekarstvi-prodejna", "truhlarska-dilna", "hotel-ulice"]}
        />
      </section>

      <section className="shell py-12 lg:py-16">
        <ReferenceTable />
      </section>

      <ContactStrip question="Chcete referenci na konkrétní typ objektu? Rádi vás spojíme." />
    </>
  );
}
