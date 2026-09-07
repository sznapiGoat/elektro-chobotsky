import type { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { PhotoGallery } from "@/components/photo-gallery";
import { allPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Fotogalerie",
  description:
    "Fotografie z dokončených instalací: hlavní rozvaděč, osvětlení a kabelové trasy v halách, jídelna ZŠ Divišov, hygienické zázemí provozovny.",
};

export default function Fotogalerie() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-10 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
              Fotogalerie
            </h1>
            <p className="font-mono text-[13px] text-ink-500">
              {allPhotos.length} fotografií
            </p>
          </div>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Snímky z dokončených instalací, rozdělené podle typu objektu.
            Kliknutím se fotografie otevře v plné velikosti, mezi snímky se dá
            přecházet klávesami.
          </p>
        </div>
      </section>

      <section className="shell py-12 lg:py-16">
        <PhotoGallery />
      </section>

      <ContactStrip question="Chystáte podobnou stavbu? Zavolejte a projdeme rozsah." />
    </>
  );
}
