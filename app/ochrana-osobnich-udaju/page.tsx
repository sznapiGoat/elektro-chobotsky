import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Jak nakládáme s údaji z poptávkového formuláře. Web neběží na sledovacích skriptech ani nepoužívá cookies.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

const blocks = [
  {
    heading: "Kdo údaje zpracovává",
    paragraphs: [
      `Správcem je ${site.name}, ${site.address.street}, ${site.address.city}, IČ ${site.ico}. Kontakt na správce je telefon ${site.phone} a e-mail ${site.email}.`,
    ],
  },
  {
    heading: "Jaké údaje a proč",
    paragraphs: [
      "Zpracováváme jen to, co nám sami napíšete do poptávky: jméno, telefon nebo e-mail a popis zakázky. Používáme to k jedinému účelu, tedy abychom vám mohli odpovědět a domluvit se na práci.",
      "Formulář na stránce Kontakt nic neodesílá na náš server. Otevře váš e-mailový klient s předvyplněnou zprávou, kterou odesíláte vy sami ze své adresy. Zpráva tedy putuje přímo do naší e-mailové schránky.",
    ],
  },
  {
    heading: "Jak dlouho je držíme",
    paragraphs: [
      "E-mailovou korespondenci k poptávce uchováváme po dobu jednání a dále po dobu záruky a zákonných lhůt u realizovaných zakázek. Poptávky, ze kterých nic nebylo, mažeme, jakmile je jasné, že se zakázka neuskuteční.",
    ],
  },
  {
    heading: "Komu je předáváme",
    paragraphs: [
      "Nikomu. Údaje z poptávek nepředáváme třetím stranám ani je nepoužíváme k rozesílání nabídek. Výjimkou jsou případy, kdy nám to ukládá zákon.",
    ],
  },
  {
    heading: "Cookies a měření návštěvnosti",
    paragraphs: [
      "Tento web neukládá cookies, nepoužívá měření návštěvnosti ani reklamní skripty. Proto se na něm neobjevuje lišta se souhlasem, není k čemu ji dávat.",
    ],
  },
  {
    heading: "Vaše práva",
    paragraphs: [
      "Máte právo vědět, jaké údaje o vás máme, nechat si je opravit nebo smazat a vznést námitku proti zpracování. Stačí napsat nebo zavolat na kontakt uvedený výše. Se stížností se můžete obrátit na Úřad pro ochranu osobních údajů.",
    ],
  },
];

export default function OchranaOsobnichUdaju() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell pb-10 pt-8">
          <h1 className="max-w-[24ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.4rem]">
            Ochrana osobních údajů
          </h1>
          <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
            Krátce a bez právničiny. Web nesbírá nic na pozadí, zpracováváme
            jen to, co nám sami napíšete do poptávky.
          </p>
        </div>
      </section>

      <div className="shell py-12 lg:py-16">
        <div className="max-w-[64ch] space-y-12">
          {blocks.map((b) => (
            <section key={b.heading}>
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.015em] text-ink">
                {b.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {b.paragraphs.map((p) => (
                  <p key={p} className="text-[15.5px] leading-[1.75] text-ink-700">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <p className="border-l-2 border-signal pl-5 text-[14.5px] leading-[1.7] text-ink-700">
            Až formulář začne odesílat poptávky přes server, bude potřeba tento
            text doplnit o zpracovatele a o dobu uložení na straně serveru.
          </p>

          <Link
            href="/kontakt"
            className="inline-block text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Zpět na kontakt
          </Link>
        </div>
      </div>
    </>
  );
}
