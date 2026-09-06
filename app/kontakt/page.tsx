import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Miroslav Chobotský, Lbosín 16, 257 26 Divišov. Telefon 606 145 684, e-mail chobotskymiroslav@seznam.cz. Působíme ve Středočeském kraji a v Praze.",
};

const details = [
  { label: "Sídlo", value: `${site.address.street}, ${site.address.city}` },
  { label: "Oblast působení", value: site.area },
  { label: "IČ", value: site.ico },
  { label: "DIČ", value: site.dic },
];

export default function Kontakt() {
  return (
    <>
      {/* Telefon je největší prvek na stránce. */}
      <section className="border-b border-line">
        <div className="shell pb-12 pt-8 lg:pb-16">
          <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            Kontakt
          </h1>
          <a
            href={site.phoneHref}
            className="mt-8 block font-mono text-[2.6rem] leading-none tracking-[-0.02em] text-ink transition-colors hover:text-signal sm:text-[4rem] lg:text-[5.5rem]"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block break-all text-[16px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            {site.email}
          </a>
        </div>
      </section>

      <div className="shell grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-5">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            {site.name}
          </h2>
          <dl className="mt-6 border-t border-line">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-4"
              >
                <dt className="text-[13.5px] text-ink-500">{d.label}</dt>
                <dd className="text-[14.5px] leading-snug text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[42ch] text-[14.5px] leading-[1.7] text-ink-700">
            Pokud voláme zpět, děje se to většinou mimo pracovní dobu na
            stavbě. Když se nedovoláte, napište zprávu a ozveme se.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-line bg-paper-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
