import type { Metadata } from "next";
import { CertificateRegister } from "@/components/certificate-register";
import { ContactStrip } from "@/components/contact-strip";
import { certificates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certifikáty",
  description:
    "Osvědčení Technické inspekce ČR k revizím v rozsahu E2A, odborná způsobilost dle NV 194/2022 Sb., certifikát JABLOTRON 100+ a Mercury, koncese k ochraně majetku a osob a výpis z živnostenského rejstříku.",
};

export default function Certifikaty() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-10 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
              Certifikáty
            </h1>
            <p className="font-mono text-[13px] text-ink-500">
              {certificates.length} dokladů
            </p>
          </div>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Osvědčení, oprávnění a doklady o školeních. Kliknutím na řádek se
            dokument otevře v čitelné velikosti, včetně evidenčních čísel
            a dat platnosti.
          </p>
        </div>
      </section>

      <section className="shell py-12 lg:py-16">
        <CertificateRegister />
      </section>

      <ContactStrip question="Potřebujete doklad k výběrovému řízení nebo pro pojišťovnu?" />
    </>
  );
}
