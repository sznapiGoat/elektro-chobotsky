/**
 * Časté dotazy k jednotlivým podstránkám. Klíčem je obor/téma.
 * Odpovědi drží jen to, co je doložitelné, u termínů a lhůt se odkazují
 * na prohlídku nebo na normu místo vymyšlených čísel.
 */
export type Faq = { q: string; a: string };

export const faqs: Record<string, Faq[]> = {
  "elektroinstalace/rodinne-a-bytove-domy": [
    {
      q: "Musí se při rekonstrukci vyměnit celá elektroinstalace?",
      a: "Ne vždy, rozhoduje stav stávajících rozvodů. Pokud jsou v domě aluminiové vodiče, chybí ochranný vodič nebo je celý dům na dvou jističích, doplňování se nevyplatí. Posoudíme to na místě po otevření rozvaděče.",
    },
    {
      q: "Uděláte i revizi, nebo si ji mám zajistit sám?",
      a: "Děláme ji sami, na osvědčení Technické inspekce ČR. Revizní zprávu předáváme spolu s dokumentací k instalaci, takže nemusíte hledat další firmu.",
    },
    {
      q: "Jak dlouho práce zabere?",
      a: "Termín i délku potvrzujeme po prohlídce. U rekonstrukcí se skutečný rozsah často ukáže až po otevření rozvaděče a stěn, a slibovat něco předem by bylo k ničemu.",
    },
  ],
  "elektroinstalace/prumyslove-objekty": [
    {
      q: "Zvládnete práci za provozu?",
      a: "U provozoven a hal je to běžný režim. Odstávky plánujeme dopředu a po částech, aby zůstala funkční ta část provozu, která běžet musí.",
    },
    {
      q: "Děláte i přívody ke strojům?",
      a: "Ano. Dimenzují se podle příkonu a rozbíhacích proudů daného stroje, ne podle toho, co je zvykem v bytě.",
    },
    {
      q: "Patří k tomu i nouzové osvětlení?",
      a: "Ano, včetně označení únikových cest. V halách to k elektroinstalaci patří stejně jako běžné osvětlení.",
    },
  ],
  "elektroinstalace/odberna-mista-a-pripojky": [
    {
      q: "Kdo žádá distributora o navýšení hlavního jističe?",
      a: "Žádost podává odběratel, tedy vy. My připravíme technickou část a doklady, které k žádosti patří, a odběrné místo uvedeme do stavu, kdy je možné měření osadit.",
    },
    {
      q: "Dá se přesunout měření z domu na hranici pozemku?",
      a: "Ano, je to jedna z nejčastějších úprav stávajících odběrných míst. Řeší se pilířem s hlavní domovní skříní a novým přívodem do objektu.",
    },
    {
      q: "Potřebuju na přípojku revizi?",
      a: "Ano. Výchozí revize přívodu i rozvaděče je doklad pro distributora i pro stavbu, bez ní se odběrné místo nedá uvést do provozu.",
    },
  ],
  "elektroinstalace/verejne-osvetleni": [
    {
      q: "Pracujete pro obce?",
      a: "Ano, veřejné osvětlení děláme pro obce v okolí Divišova a Benešova. Jde o montáž nových tras, rozšíření k nové zástavbě, výměny svítidel a odstraňování poruch.",
    },
    {
      q: "Vyměníte jen svítidla, nebo i kabelové trasy?",
      a: "Obojí. Před rozšířením se ale vždy posuzuje stav stávajícího vedení a rozvaděče. Doplnit světelné body do vedení, které je na hranici svých možností, nemá smysl.",
    },
  ],
  "hromosvody/montaz-hromosvodu": [
    {
      q: "Musím mít na domě hromosvod?",
      a: "Posuzuje se to podle typu objektu a rizika, u novostaveb to obvykle řeší projekt. Řekněte nám, o jakou budovu jde, a ověříme, co pro ni norma vyžaduje.",
    },
    {
      q: "Poškodí montáž krytinu nebo hydroizolaci?",
      a: "Držáky a podpěry se volí podle typu krytiny právě proto, aby se do ní nemuselo vrtat naslepo. U ploché střechy je to jinak než u pálené tašky.",
    },
    {
      q: "Jde hromosvod doplnit na hotový dům?",
      a: "Ano, na starších objektech je to většina naší práce. Svody se dají vést po fasádě a zemnič doplnit dodatečně.",
    },
  ],
  "hromosvody/revize-hromosvodu": [
    {
      q: "Jak často se revize hromosvodu dělá?",
      a: "Lhůtu určuje norma podle typu objektu a zvolené hladiny ochrany, obecné číslo pro všechny budovy neexistuje. Podle konkrétní budovy vám ji ověříme.",
    },
    {
      q: "Potřebuju revizi po zateplení fasády?",
      a: "Ano. Po každém zásahu do soustavy, do střechy nebo do fasády, protože při nich se svody běžně odpojí nebo poškodí.",
    },
    {
      q: "Co když do objektu uhodilo?",
      a: "Soustavu je potřeba zkontrolovat, i když navenek funguje. Spoje a zemniče mohly být zásahem poškozené a při dalším úderu už ochrana nemusí fungovat.",
    },
  ],
  "revize/vychozi-revize": [
    {
      q: "Co je potřeba na revizi připravit?",
      a: "Dokumentaci skutečného provedení, alespoň schéma rozvaděče, u jiných než běžných prostor protokol o určení vnějších vlivů, přístup ke všem rozvaděčům a dokončené zednické práce v místech, kde se měří.",
    },
    {
      q: "Uděláte revizi na instalaci od jiné firmy?",
      a: "Ano. Potřebujeme k tomu dokumentaci a součinnost toho, kdo rozvody prováděl, protože bez schémat se revize dělá výrazně obtížněji.",
    },
    {
      q: "Jde revizi udělat na rozestavěné stavbě?",
      a: "Ne. Měření na nedokončených rozvodech nemá výpovědní hodnotu a zpráva by nikomu k ničemu nebyla.",
    },
  ],
  "revize/periodicke-revize": [
    {
      q: "Jak zjistím, kdy mi končí platnost revize?",
      a: "Datum další revize je uvedené v revizní zprávě. Když zprávu nemáte, lhůtu určíme podle prostředí, ve kterém zařízení pracuje.",
    },
    {
      q: "Co se stane, když revizi nemám?",
      a: "U škody způsobené elektroinstalací bývá platná revizní zpráva podmínkou plnění pojišťovny. U provozů ji navíc kontroluje inspekce práce.",
    },
    {
      q: "Co revize nejčastěji najde?",
      a: "Obvody doplněné bez revize a bez zákresu, nefunkční nebo chybějící proudové chrániče, uvolněné spoje v rozvaděči a neaktuální popisky obvodů.",
    },
  ],
  "zabezpecovaci-systemy/jablotron-100-plus": [
    {
      q: "Musí mít firma na montáž alarmu koncesi?",
      a: "Ano, montáž zabezpečovací techniky patří pod koncesovanou živnost Poskytování technických služeb k ochraně majetku a osob. Naši koncesi udělil Městský úřad Benešov v lednu 2020 a je k nahlédnutí v sekci Certifikáty.",
    },
    {
      q: "Dá se systém ovládat z telefonu?",
      a: "Ano, systémy JABLOTRON 100+ se ovládají a kontrolují přes aplikaci výrobce. Vedle toho zůstává klávesnice nebo bezkontaktní čtečka v objektu.",
    },
    {
      q: "Drátový, nebo bezdrátový systém?",
      a: "Podle objektu, jde i kombinace obojího. Když v objektu děláme zároveň elektroinstalaci, vedeme slaboproud společně se silnoproudem a trasy se dělají jednou.",
    },
  ],
  "zabezpecovaci-systemy/servis-a-rozsireni": [
    {
      q: "Převezmete systém po jiné firmě?",
      a: "Ano. První návštěva je v tom případě zaměření stávajícího stavu, ne montáž, protože je potřeba zjistit, co v objektu je a jak je to zapojené.",
    },
    {
      q: "Nemám k systému kódy ani dokumentaci, co teď?",
      a: "Řešit se to dá, jen to zabere víc času. U velmi starých ústředen bývá výměna levnější než dohledávání náhradních dílů, které se už nevyrábějí.",
    },
  ],
  "elektricke-vytapeni/primotopy-a-kotle": [
    {
      q: "Unese elektrické vytápění moje přípojka?",
      a: "To je první věc, kterou zjistíme. Otevřeme rozvaděč, podíváme se na hlavní jistič a na rezervu. Přímotopy ani kotel nejde jen přidat do instalace, která je na svém maximu.",
    },
    {
      q: "Vyplatí se akumulace s nízkým tarifem?",
      a: "Nízký tarif se týká celého odběrného místa, takže se vyplatí spočítat, co přechod udělá s celkovou spotřebou domu, ne jen s vytápěním.",
    },
  ],
  "elektricke-vytapeni/topne-kabely": [
    {
      q: "Kdy se má topný kabel řešit?",
      a: "Před obkladačem a před pokrývačem. Skladba podlahy i uchycení v okapu se rozhodují dřív, než se povrch dokončí, jinak se to opravuje bouráním.",
    },
    {
      q: "Vztahuje se na topné kabely revize?",
      a: "Ano, okruh topných kabelů je součástí elektroinstalace, takže se na něj revize vztahuje jako na kterýkoli jiný obvod.",
    },
    {
      q: "Zabrání kabel v okapu rampouchům?",
      a: "S regulací a snímačem ano. Bez řízení by kabel topil i ve chvíli, kdy to není potřeba, proto se nedělá samostatně bez termostatu.",
    },
  ],
};

export function faqFor(field: string, slug: string): Faq[] {
  return faqs[`${field}/${slug}`] ?? [];
}
