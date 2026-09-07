import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { FieldFooterNav } from "@/components/field-footer-nav";
import { FieldHead } from "@/components/field-head";
import { TopicList } from "@/components/topic-list";
import { PhotoBand } from "@/components/photo-band";

export const metadata: Metadata = {
  title: "Zabezpečovací systémy Jablotron",
  description:
    "Montáž, rozšíření a servis zabezpečovacích systémů JABLOTRON 100+ a Mercury. Certifikát výrobce z roku 2025 a koncese k ochraně majetku a osob.",
};

export default function ZabezpecovaciSystemy() {
  return (
    <>
      <FieldHead
        title="Zabezpečovací systémy"
        lead="Montáž a rozšíření systémů JABLOTRON 100+ a Mercury. Instalace probíhá podle technické dokumentace výrobce, na koncesovanou živnost k ochraně majetku a osob."
      />

      <TopicList field="zabezpecovaci-systemy" />

      <div className="shell grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        {/* Dokument vlevo, komentář vpravo. Certifikát je tu hlavní argument. */}
        <div className="lg:col-span-5">
          <figure className="lg:sticky lg:top-24">
            <div className="border border-line bg-white p-3">
              <Image
                src="/cert/jablotron-100-mercury.jpg"
                alt="Certifikát firmy Jablotron a.s. o absolvování odborného kurzu JABLOTRON 100+ a Mercury."
                width={905}
                height={1280}
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-[12.5px] leading-relaxed text-ink-500">
              Certifikát Akademie Jablotron, vystavený 14. 6. 2025.{" "}
              <Link
                href="/certifikaty"
                className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
              >
                Ostatní doklady
              </Link>
            </figcaption>
          </figure>
        </div>

        <div className="prose-list lg:col-span-7">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Co montujeme
          </h2>
          <div className="mt-5 max-w-[58ch]">
            <p>
              Pracujeme se systémy JABLOTRON 100+ a s řadou Mercury. Sestavu
              volíme podle dispozice objektu: ústřednu, detektory pohybu
              a otevření, sirénu a ovládací prvky, u novějších instalací
              i obsluhu přes aplikaci výrobce.
            </p>
            <p>
              Certifikát výrobce znamená, že jsme byli seznámeni s technickými
              parametry zařízení a se způsobem jejich montáže, a že instalaci
              provádíme podle jeho technické dokumentace a doporučení.
              Certifikát má platnost dva roky, ten současný je z června 2025.
            </p>
          </div>

          <h2 className="mt-14 text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Proč je potřeba koncese
          </h2>
          <div className="mt-5 max-w-[58ch]">
            <p>
              Montáž zabezpečovací techniky patří pod koncesovanou živnost
              Poskytování technických služeb k ochraně majetku a osob.
              Koncesi nám udělil Městský úřad Benešov v lednu 2020, na dobu
              neurčitou, a je podmíněná bezúhonností všech osob, které tuto
              činnost vykonávají.
            </p>
            <p>
              Když někdo montuje alarmy bez koncese, nejde jen o formalitu.
              Pojišťovna se na doklady při škodě dívá.
            </p>
          </div>

          <h2 className="mt-14 text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Rozšíření a servis
          </h2>
          <div className="mt-5 max-w-[58ch]">
            <p>
              U stávajících instalací nejčastěji doplňujeme detektory do nově
              přistavěných částí objektu, měníme ovládání a řešíme systémy
              po předchozích dodavatelích. Slaboproud vedeme společně
              s elektroinstalací, takže se kabelové trasy dělají jednou.
            </p>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-paper-200 py-14">
        <div className="shell pb-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Objekty, kde jsme dělali slaboproud
          </h2>
        </div>
        <PhotoBand files={["prodejna-ulice", "bowling-herna", "rozvadece-provoz"]} />
      </section>

      <FieldFooterNav current="zabezpecovaci-systemy" />
      <ContactStrip question="Chcete zabezpečit dům nebo provozovnu? Zavolejte a projdeme dispozici." />
    </>
  );
}
