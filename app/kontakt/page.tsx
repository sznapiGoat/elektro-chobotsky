import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PhotoBand } from "@/components/photo-band";
import Link from "next/link";
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

          <a
            href={site.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-[14px] text-ink transition-colors hover:border-ink hover:bg-paper-200"
          >
            Otevřít profil na Google Maps
            <span aria-hidden className="font-mono text-ink-500">
              &#8599;
            </span>
          </a>

          <h2 className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
            Kam jezdíme
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
            {site.towns.map((town) => (
              <li
                key={town}
                className="border border-line px-2.5 py-1 text-[13px] text-ink-700"
              >
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed text-ink-500">
            A okolní obce. Když si nejste jistí, jestli k vám dojedeme,
            zavolejte a řekneme to hned.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-line bg-paper-200 p-6 sm:p-8">
            <ContactForm />
          </div>
          <p className="mt-4 max-w-[52ch] text-[12.5px] leading-relaxed text-ink-500">
            Údaje z formuláře používáme jen k tomu, abychom vám odpověděli.
            Web neměří návštěvnost ani neukládá cookies, podrobnosti jsou
            v{" "}
            <Link
              href="/ochrana-osobnich-udaju"
              className="text-ink-700 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              ochraně osobních údajů
            </Link>
            .
          </p>
        </div>
      </div>

      <section className="border-t border-line bg-paper-200 py-12">
        <PhotoBand
          files={["pekarstvi-provoz", "hala-04", "detail-jidelna-zidle"]}
        />
      </section>
    </>
  );
}
