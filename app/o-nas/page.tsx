import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactStrip } from "@/components/contact-strip";
import { PhotoBand } from "@/components/photo-band";
import { milestones, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Firma byla založena v roce 1995. Silnoproudé a slaboproudé elektroinstalace, zabezpečovací systémy Jablotron, montáž hromosvodů a revize elektrických zařízení ve Středočeském kraji a v Praze.",
};

export default function ONas() {
  const years = new Date().getFullYear() - site.founded;

  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-12 pt-8 lg:pb-16">
          <h1 className="max-w-[22ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            O nás
          </h1>
          <p className="mt-6 max-w-measure text-[17px] leading-[1.7] text-ink">
            {site.about}
          </p>
        </div>
      </section>

      {/* Text v úzkém sloupci, letopočty jako poznámky vlevo. */}
      <div className="shell grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              Doložené milníky
            </h2>
            <ol className="mt-5 border-t border-line">
              {milestones.map((m) => (
                <li
                  key={m.year}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-[14px] text-signal">{m.year}</span>
                  <span className="text-[13.5px] leading-relaxed text-ink-700">
                    {m.text}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[12.5px] leading-relaxed text-ink-500">
              Všechny uvedené doklady jsou k nahlédnutí v sekci{" "}
              <Link
                href="/certifikaty"
                className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
              >
                Certifikáty
              </Link>
              .
            </p>
          </div>
        </aside>

        <div className="prose-list lg:col-span-8">
          <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Jak pracujeme
          </h2>
          <div className="mt-5 max-w-[62ch]">
            <p>
              Zakázku vedeme od začátku do konce jedním člověkem. To znamená,
              že ten, kdo instalaci navrhl a namontoval, ji také reviduje
              a podepisuje revizní zprávu. Nepředáváme rozdělanou práci dál
              a nesháníme na revizi cizí firmu.
            </p>
            <p>
              Za {years} let jsme dělali školní jídelnu, sokolovnu i logistické
              centrum. Rozsah zakázek je proto pokaždé jiný, ale postup zůstává
              stejný: nejdřív se podíváme na rozvaděč a na to, co přípojka
              unese, pak teprve navrhujeme řešení.
            </p>
            <p>
              Pracujeme převážně {site.areaIn}. Sídlíme v Lbosíně u Divišova,
              odkud je dostupný celý Benešov a okolí, Čerčany, Sedlčany
              i Praha.
            </p>
          </div>

          <h2 className="mt-14 text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
            Na co máme oprávnění
          </h2>
          <div className="mt-5 max-w-[62ch]">
            <p>
              Živnostenská oprávnění zahrnují montáž, opravy, revize a zkoušky
              elektrických zařízení, výrobu a instalaci elektrických strojů
              a přístrojů, projektování elektrických zařízení a koncesovanou
              činnost k ochraně majetku a osob. Odbornou způsobilost
              v elektrotechnice máme podle NV 194/2022 Sb. pro samostatnou
              činnost i pro řízení činnosti.
            </p>
            <p>
              Revize provádíme na základě osvědčení Technické inspekce ČR
              v rozsahu E2A. To znamená zařízení do 1 kV střídavého nebo
              1,5 kV stejnosměrného napětí, včetně hromosvodů, v prostředí
              bez nebezpečí výbuchu.
            </p>
          </div>

          <figure className="mt-14">
            <div className="relative aspect-[4/3] w-full border border-line">
              <Image
                src="/foto/rozvadec-01.jpg"
                alt="Osazený hlavní rozvaděč s bezpečnostním značením a drátěnými kabelovými žlaby nad ním."
                fill
                sizes="(max-width: 1024px) 92vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-ink-500">
              Hlavní rozvaděč s bezpečnostním značením, dokončená montáž.
            </figcaption>
          </figure>
        </div>
      </div>

      <section className="border-t border-line bg-paper-200 py-14">
        <PhotoBand
          files={["sal-hvezdny-podhled", "jidelna-zs-03", "rozvadece-skrine"]}
        />
      </section>

      <ContactStrip question="Máte dotaz k rozsahu prací nebo k oprávněním?" />
    </>
  );
}
