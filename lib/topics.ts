/**
 * Podstránky oborů. Každé téma si vybírá vlastní skladbu bloků,
 * takže se stránky neopakují ve stejném rytmu.
 */
export type Block =
  | { kind: "text"; heading?: string; paragraphs: string[] }
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "steps"; heading: string; steps: { title: string; text: string }[] }
  | {
      kind: "table";
      heading: string;
      head: string[];
      rows: string[][];
    }
  | { kind: "specs"; heading: string; rows: { label: string; value: string }[] }
  | { kind: "note"; text: string }
  | { kind: "photos"; heading?: string; files: string[] };

export type Topic = {
  field: string;
  slug: string;
  title: string;
  navTitle: string;
  lead: string;
  description: string;
  blocks: Block[];
};

export const topics: Topic[] = [
  // --- Elektroinstalace ------------------------------------------------------
  {
    field: "elektroinstalace",
    slug: "rodinne-a-bytove-domy",
    title: "Elektroinstalace rodinných a bytových domů",
    navTitle: "Rodinné a bytové domy",
    lead: "Nové rozvody i rekonstrukce ve stávajících domech, od rozvaděče až po zásuvky, včetně výchozí revize.",
    description:
      "Elektroinstalace rodinných a bytových domů: rozvaděč s chrániči, zásuvkové a světelné obvody, slaboproud a výchozí revize. Středočeský kraj a Praha.",
    blocks: [
      {
        kind: "text",
        heading: "Kdy se instalace řeší celá",
        paragraphs: [
          "U novostavby je to jednoduché, rozvody se dělají od nuly a dají se navrhnout podle toho, jak se bude v domě žít. U rekonstrukcí rozhoduje stav stávajících rozvodů. Pokud jsou v domě aluminiové vodiče, chybí ochranný vodič nebo je celý dům na dvou jističích, nemá smysl instalaci rozšiřovat a je potřeba ji vyměnit.",
          "Než něco navrhneme, otevřeme rozvaděč a podíváme se, co dům má. Rozsah práce se pak dá odhadnout mnohem přesněji než po telefonu.",
        ],
      },
      {
        kind: "list",
        heading: "Co v domech obvykle děláme",
        items: [
          "rozvaděč s jističi, proudovými chrániči a přepěťovou ochranou",
          "zásuvkové a světelné obvody, vypínače a stmívání",
          "samostatné přívody pro varnou desku, bojler a další tepelné spotřebiče",
          "slaboproud, tedy data, televizní rozvod a zvonek",
          "příprava tras pro zabezpečovací systém",
          "výchozí revize a revizní zpráva při předání",
        ],
      },
      {
        kind: "note",
        text: "V bytových domech se pracuje za provozu. Odstávky proto plánujeme dopředu a po částech, aby zůstaly funkční stoupačky i společné prostory.",
      },
      {
        kind: "photos",
        heading: "Z realizací",
        files: ["rozvadec-jistice", "detail-stitky", "rozvadece-skrine"],
      },
    ],
  },
  {
    field: "elektroinstalace",
    slug: "prumyslove-objekty",
    title: "Elektroinstalace hal, dílen a skladů",
    navTitle: "Průmyslové objekty",
    lead: "Povrchové kabelové trasy, osvětlení provozů, přívody ke strojům a rozvaděče s jištěním technologie.",
    description:
      "Elektroinstalace výrobních a skladových hal, dílen a provozoven: kabelové trasy, osvětlení, přívody ke strojům, nouzové osvětlení a rozvaděče.",
    blocks: [
      {
        kind: "text",
        heading: "Čím se průmysl liší od domu",
        paragraphs: [
          "V hale se rozvody nedělají pod omítku. Vedou se povrchově v lištách, na kabelových roštech nebo v drátěných žlabech, aby se daly kdykoli doplnit a zkontrolovat. Osvětlení se navrhuje na úroveň, kterou provoz potřebuje, a řeší se zvlášť pro pracovní místa a zvlášť pro komunikace.",
          "Přívody ke strojům se dimenzují podle jejich příkonu a rozbíhacích proudů, ne podle toho, co je zvykem v bytě. K tomu patří nouzové osvětlení a označení únikových cest.",
        ],
      },
      {
        kind: "list",
        heading: "Co v provozech děláme",
        items: [
          "kabelové trasy v lištách, na roštech a v drátěných žlabech",
          "osvětlení hal, dílen a skladů",
          "přívody ke strojům a zásuvkové skříně",
          "nouzové osvětlení a označení únikových cest",
          "rozvaděče s jištěním technologie",
          "úpravy rozvodů při změně dispozice provozu",
        ],
      },
      {
        kind: "photos",
        heading: "Z realizací",
        files: ["hala-01", "truhlarska-dilna", "sklad-plosina", "dilna-osvetleni"],
      },
    ],
  },
  {
    field: "elektroinstalace",
    slug: "odberna-mista-a-pripojky",
    title: "Odběrná místa a přípojky nízkého napětí",
    navTitle: "Odběrná místa a přípojky",
    lead: "Nová odběrná místa, přípojky NN a úpravy stávajících přívodů včetně přípravy pro osazení měření.",
    description:
      "Realizace nových odběrných míst a úpravy stávajících, elektrické přípojky nízkého napětí, pilíř s hlavní domovní skříní a příprava pro měření.",
    blocks: [
      {
        kind: "steps",
        heading: "Jak nové odběrné místo vzniká",
        steps: [
          {
            title: "Posouzení",
            text: "Zjistíme, co stávající přívod unese a jaký příkon objekt skutečně potřebuje. U rekonstrukcí to bývá rozdíl, se kterým nikdo nepočítal.",
          },
          {
            title: "Přívod",
            text: "Kabelová nebo vzdušná přípojka nízkého napětí podle podmínek v místě, pilíř s hlavní domovní skříní na hranici pozemku.",
          },
          {
            title: "Příprava měření",
            text: "Osadíme přípojkovou a měřicí skříň a připravíme vše tak, aby distributor mohl namontovat elektroměr.",
          },
          {
            title: "Rozvaděč objektu",
            text: "Za měřením navazuje hlavní rozvaděč, odkud vedou jednotlivé okruhy do objektu.",
          },
          {
            title: "Revize a předání",
            text: "Výchozí revize přívodu i rozvaděče, revizní zpráva jako doklad pro distributora a pro stavbu.",
          },
        ],
      },
      {
        kind: "note",
        text: "O navýšení hlavního jističe před měřením se žádá u distributora. My připravíme technickou část a doklady, které k žádosti patří.",
      },
      {
        kind: "list",
        heading: "Úpravy stávajících odběrných míst",
        items: [
          "přesun měření z domu na hranici pozemku",
          "výměna zastaralé přípojkové a měřicí skříně",
          "rozdělení jednoho odběru na dva, například dům a provozovna",
          "oddělení přívodu pro dostavbu nebo dílnu",
        ],
      },
    ],
  },
  {
    field: "elektroinstalace",
    slug: "verejne-osvetleni",
    title: "Veřejné osvětlení pro obce",
    navTitle: "Veřejné osvětlení",
    lead: "Montáž, rozšíření a údržba veřejného osvětlení, výměny svítidel a opravy poruch.",
    description:
      "Montáž a údržba veřejného osvětlení pro obce: nové trasy a stožáry, výměna svítidel, rozvaděče veřejného osvětlení a opravy poruch.",
    blocks: [
      {
        kind: "text",
        heading: "Pro obce a jejich správce",
        paragraphs: [
          "Veřejné osvětlení řešíme pro obce v okolí Divišova a Benešova. Nejčastěji jde o rozšíření stávající trasy k nové zástavbě, výměnu svítidel a opravy poruch, které se objeví v průběhu roku.",
          "U rozšíření je podstatné, jak je na tom stávající trasa a rozvaděč. Doplnit několik světelných bodů do vedení, které je na hranici svých možností, nemá smysl.",
        ],
      },
      {
        kind: "list",
        heading: "Co pro obce děláme",
        items: [
          "montáž nových tras a stožárů veřejného osvětlení",
          "rozšíření stávajícího osvětlení k nové zástavbě",
          "výměna svítidel a světelných zdrojů",
          "rozvaděče veřejného osvětlení a jejich spínání",
          "hledání a odstranění poruch v kabelovém vedení",
          "revize po zásahu do rozvodu",
        ],
      },
      {
        kind: "specs",
        heading: "Doložená realizace",
        rows: [
          { label: "Objekt", value: "Rozšíření veřejného osvětlení" },
          { label: "Místo", value: "Drahňovice" },
          { label: "Obor", value: "Silnoproud, venkovní rozvody" },
        ],
      },
    ],
  },

  // --- Hromosvody -----------------------------------------------------------
  {
    field: "hromosvody",
    slug: "montaz-hromosvodu",
    title: "Montáž hromosvodu",
    navTitle: "Montáž hromosvodu",
    lead: "Jímací soustava, svody a zemniče na rodinných domech, halách i veřejných budovách, podle ČSN EN 62305.",
    description:
      "Montáž hromosvodů podle ČSN EN 62305: jímací tyče a mřížová soustava, svody se zkušebními spoji, zemniče a pospojování.",
    blocks: [
      {
        kind: "text",
        heading: "Z čeho se montáž skládá",
        paragraphs: [
          "Rozsah ochrany vychází z typu objektu a z toho, co je na střeše. Rodinný dům s pálenou krytinou se řeší jinak než hala s technologií a jinak než budova s plechovou střechou, která sama může tvořit část jímací soustavy.",
          "Materiál a průřezy určuje norma. Hliník, měď a pozinkovaná ocel se nesmí spojovat libovolně, jinak spoj do několika let odejde korozí.",
        ],
      },
      {
        kind: "list",
        heading: "Prvky ochrany",
        items: [
          "jímací tyče, jímací vedení a mřížová soustava na střeše",
          "svody vedené po fasádě nebo skrytě, se zkušebními spoji",
          "zemniče, tedy zemnicí drát, deska nebo obvodový zemnič",
          "pospojování kovových částí objektu a vnitřní ochrana před přepětím",
          "držáky a podpěry podle typu krytiny, aby se neporušila hydroizolace",
        ],
      },
      {
        kind: "note",
        text: "Po montáži následuje výchozí revize. Bez revizní zprávy je hromosvod z pohledu stavby i pojišťovny nedoložený.",
      },
      {
        kind: "photos",
        heading: "Objekty, na kterých jsme pracovali",
        files: ["hotel-ulice", "objekt-drevena-fasada"],
      },
    ],
  },
  {
    field: "hromosvody",
    slug: "revize-hromosvodu",
    title: "Revize hromosvodu",
    navTitle: "Revize hromosvodu",
    lead: "Prohlídka jímací soustavy a svodů, měření zemního odporu a revizní zpráva. V rozsahu osvědčení TIČR.",
    description:
      "Revize hromosvodů: prohlídka jímací soustavy a svodů, kontrola spojů, měření zemního odporu a revizní zpráva. Osvědčení TIČR v rozsahu E2A.",
    blocks: [
      {
        kind: "list",
        heading: "Co revize obsahuje",
        items: [
          "prohlídka jímací soustavy a jejího upevnění",
          "kontrola svodů, spojů a zkušebních svorek",
          "měření zemního odporu jednotlivých svodů",
          "kontrola pospojování kovových částí objektu",
          "revizní zpráva se závěrem a výpisem závad",
        ],
      },
      {
        kind: "text",
        heading: "Kdy revizi potřebujete",
        paragraphs: [
          "Výchozí revizi po nové montáži, dále v pravidelné lhůtě po dobu provozu. K tomu ještě po každém zásahu do střechy nebo do soustavy, tedy po výměně krytiny, po zateplení fasády nebo po instalaci technologie na střechu.",
          "Zvlášť po zásahu bleskem. Soustava sice zafungovala, ale spoje a zemniče mohly být poškozené.",
        ],
      },
      {
        kind: "note",
        text: "Lhůtu pravidelné revize určuje norma podle typu objektu a zvolené hladiny ochrany. Řekněte nám, o jakou budovu jde, a lhůtu ověříme.",
      },
      {
        kind: "specs",
        heading: "Na základě čeho revidujeme",
        rows: [
          { label: "Osvědčení", value: "5098/25/R-EZ-E2A" },
          { label: "Vydal", value: "Technická inspekce ČR" },
          { label: "Rozsah", value: "E2A, včetně hromosvodů" },
          { label: "Platnost", value: "do 24. 6. 2030" },
        ],
      },
    ],
  },

  // --- Revize ---------------------------------------------------------------
  {
    field: "revize",
    slug: "vychozi-revize",
    title: "Výchozí revize",
    navTitle: "Výchozí revize",
    lead: "Revize nové instalace před uvedením do provozu, ke kolaudaci a k převzetí stavby.",
    description:
      "Výchozí revize elektrických zařízení před uvedením do provozu a ke kolaudaci. Co je potřeba připravit a co revizní zpráva obsahuje.",
    blocks: [
      {
        kind: "text",
        heading: "Kdy se dělá",
        paragraphs: [
          "Před prvním uvedením nové instalace do provozu a po každé změně, která se dotkne rozvodů. Bez výchozí revize nelze zařízení převzít ani zkolaudovat a nelze u něj doložit, že je schopné bezpečného provozu.",
          "Revizi děláme i na instalace, které montoval někdo jiný. V tom případě je potřeba dokumentace a součinnost toho, kdo rozvody prováděl.",
        ],
      },
      {
        kind: "list",
        heading: "Co je potřeba připravit",
        items: [
          "dokumentaci skutečného provedení, alespoň schéma rozvaděče",
          "protokol o určení vnějších vlivů, pokud jde o jiné než běžné prostory",
          "přístup ke všem rozvaděčům a rozvodnicím",
          "dokončené zednické práce v místech, kde se měří",
          "zapojené a funkční spotřebiče s pevným přívodem",
        ],
      },
      {
        kind: "note",
        text: "Revizi neděláme na rozestavěné instalaci. Měření na nedokončených rozvodech nemá výpovědní hodnotu a zpráva by byla k ničemu.",
      },
    ],
  },
  {
    field: "revize",
    slug: "periodicke-revize",
    title: "Periodické revize",
    navTitle: "Periodické revize",
    lead: "Pravidelné revize po dobu provozu zařízení. Lhůtu určuje prostředí, ve kterém instalace pracuje.",
    description:
      "Periodické revize elektrických zařízení v pravidelné lhůtě. Nejčastější závady, které revize odhalí, a podklady pro pojišťovnu.",
    blocks: [
      {
        kind: "text",
        heading: "Proč se opakují",
        paragraphs: [
          "Instalace se v provozu mění, i když do ní nikdo vědomě nezasáhl. Spoje se uvolňují teplotními cykly, izolace stárne, přibývají spotřebiče a s nimi doplněné obvody. Periodická revize je kontrola toho, jestli je zařízení pořád v takovém stavu, v jakém bylo předáno.",
          "Lhůtu nelze určit obecně. Vychází z protokolu o určení vnějších vlivů, tedy z prostředí, ve kterém zařízení pracuje. Jinou lhůtu má kancelář a jinou vlhká výrobna.",
        ],
      },
      {
        kind: "list",
        heading: "Nejčastější závady, které revize najde",
        items: [
          "obvody doplněné bez revize a bez zákresu do dokumentace",
          "nefunkční nebo chybějící proudové chrániče u zásuvkových obvodů",
          "uvolněné spoje v rozvaděči, poznat je podle zbarvení izolace",
          "chybějící nebo neaktuální popisky obvodů",
          "poškozené krytí zařízení ve vlhkých a prašných provozech",
        ],
      },
      {
        kind: "note",
        text: "Platná revizní zpráva bývá podmínkou plnění při škodě způsobené elektroinstalací. Vyplatí se hlídat si datum další revize dřív, než ho začne hlídat pojišťovna.",
      },
      {
        kind: "photos",
        heading: "Z realizací",
        files: ["rozvadec-svorkovnice", "rozvadece-provoz"],
      },
    ],
  },

  // --- Zabezpečovací systémy ------------------------------------------------
  {
    field: "zabezpecovaci-systemy",
    slug: "jablotron-100-plus",
    title: "JABLOTRON 100+ a Mercury",
    navTitle: "JABLOTRON 100+",
    lead: "Montáž systémů podle technické dokumentace výrobce, na certifikát z června 2025 a koncesovanou živnost.",
    description:
      "Montáž zabezpečovacích systémů JABLOTRON 100+ a Mercury: ústředna, detektory, klávesnice, sirény a ovládání přes aplikaci výrobce.",
    blocks: [
      {
        kind: "text",
        heading: "Jak se sestava skládá",
        paragraphs: [
          "Základem je ústředna s komunikátorem, na kterou se váže vše ostatní. Rozsah se odvozuje od dispozice objektu, ne od cenových hladin. Podstatné je, kudy se do objektu dá vstoupit a co má být chráněné.",
          "Systém jde postavit jako drátový, bezdrátový nebo kombinovaný. V objektu, kde zároveň děláme elektroinstalaci, vedeme slaboproud společně se silnoproudem a kabelové trasy se tak dělají jednou.",
        ],
      },
      {
        kind: "list",
        heading: "Prvky systému",
        items: [
          "ústředna s komunikátorem",
          "detektory pohybu a detektory otevření dveří a oken",
          "klávesnice a bezkontaktní čtečky",
          "vnitřní a venkovní siréna",
          "ovládání a přehled o stavu přes aplikaci výrobce",
        ],
      },
      {
        kind: "specs",
        heading: "Doklady k montáži",
        rows: [
          { label: "Certifikát", value: "JABLOTRON 100+ a Mercury" },
          { label: "Vydal", value: "Jablotron a.s., Akademie Jablotron" },
          { label: "Vystaveno", value: "14. 6. 2025" },
          { label: "Koncese", value: "ŽÚ/342/2020, na dobu neurčitou" },
        ],
      },
    ],
  },
  {
    field: "zabezpecovaci-systemy",
    slug: "servis-a-rozsireni",
    title: "Servis a rozšíření stávajících systémů",
    navTitle: "Servis a rozšíření",
    lead: "Doplnění detektorů, výměna ovládání a přebírání systémů po předchozích dodavatelích.",
    description:
      "Servis a rozšíření zabezpečovacích systémů: doplnění detektorů do nových částí objektu, výměna ovládání, převzetí systému po jiném dodavateli.",
    blocks: [
      {
        kind: "list",
        heading: "Co u stávajících systémů řešíme",
        items: [
          "doplnění detektorů do přistavěných nebo přebudovaných částí objektu",
          "výměna klávesnic a přechod na ovládání přes aplikaci",
          "převzetí systému po předchozím dodavateli",
          "výměna záložních akumulátorů a kontrola napájení",
          "kontrola funkce detektorů a nastavení zón",
        ],
      },
      {
        kind: "text",
        heading: "Systémy po jiných dodavatelích",
        paragraphs: [
          "Stává se, že objekt má funkční ústřednu, ale nikdo k ní nemá dokumentaci ani přístupové kódy. To se dá řešit, jen je potřeba počítat s tím, že první návštěva je zaměření stávajícího stavu, ne montáž.",
          "U velmi starých systémů bývá levnější ústřednu vyměnit než dohledávat náhradní díly, které se už nevyrábějí.",
        ],
      },
      {
        kind: "note",
        text: "Zásah do zabezpečovací techniky patří pod koncesovanou živnost k ochraně majetku a osob. Doklad k ní najdete v sekci Certifikáty.",
      },
    ],
  },

  // --- Elektrické vytápění --------------------------------------------------
  {
    field: "elektricke-vytapeni",
    slug: "primotopy-a-kotle",
    title: "Přímotopy, kotle a akumulace",
    navTitle: "Přímotopy a kotle",
    lead: "Elektrické vytápění tam, kde není plyn. Rozhoduje příkon přípojky a jištění, ne katalog.",
    description:
      "Přímotopné konvektory, elektrické kotle a akumulační kamna: příkon přípojky, jištění okruhů, spínání podle HDO a návaznost na otopnou soustavu.",
    blocks: [
      {
        kind: "text",
        heading: "Čím to začíná",
        paragraphs: [
          "Elektrické vytápění se nevybírá podle vytápěné plochy, ale podle toho, co unese přípojka. Přímotopy a kotel mají vysoký příkon a v objektu, kde je hlavní jistič na hranici, se nedají prostě přidat.",
          "Proto se u nás každá poptávka na elektrické vytápění začíná otevřením rozvaděče a zjištěním, jaký je hlavní jistič a jaká je rezerva.",
        ],
      },
      {
        kind: "table",
        heading: "Co k jednotlivým řešením patří",
        head: ["Řešení", "Co je potřeba zajistit"],
        rows: [
          [
            "Přímotopné konvektory",
            "Samostatně jištěné okruhy a dostatečný příkon přípojky",
          ],
          [
            "Elektrický kotel",
            "Vlastní jištěný okruh a návaznost na otopnou soustavu",
          ],
          [
            "Akumulační kamna",
            "Spínání podle signálu HDO a samostatný okruh",
          ],
          [
            "Kombinace s jiným zdrojem",
            "Řízení, aby si zdroje nešly proti sobě",
          ],
        ],
      },
      {
        kind: "note",
        text: "Nízký tarif se týká celého odběrného místa. Před přechodem na akumulační vytápění se proto vyplatí spočítat, co to udělá s celkovou spotřebou domu.",
      },
    ],
  },
  {
    field: "elektricke-vytapeni",
    slug: "topne-kabely",
    title: "Topné kabely a podlahové topení",
    navTitle: "Topné kabely",
    lead: "Podlahové topení, ochrana okapů a potrubí, vyhřívání vjezdů a schodišť.",
    description:
      "Topné kabely a rohože: podlahové topení do koupelen a dlažeb, ochrana okapů a svodů, ochrana potrubí a vyhřívání venkovních ploch.",
    blocks: [
      {
        kind: "steps",
        heading: "Jak pokládka probíhá",
        steps: [
          {
            title: "Volba kabelu",
            text: "Podle použití. Do podlahy odporový kabel nebo rohož, do okapů a na potrubí samoregulační kabel, který mění výkon podle teploty.",
          },
          {
            title: "Příprava skladby",
            text: "Rozhodne se dřív, než přijde obkladač nebo pokrývač. Kabel má svoje minimální krytí a bez toho ho nelze položit.",
          },
          {
            title: "Pokládka",
            text: "Kabel se rozvede podle rozteče, změří se odpor a izolační stav před zalitím i po něm.",
          },
          {
            title: "Regulace",
            text: "Termostat s podlahovou sondou u vytápění, snímač teploty a vlhkosti u okapů a venkovních ploch.",
          },
          {
            title: "Revize",
            text: "Okruh topných kabelů je součástí instalace, takže se na něj vztahuje revize jako na cokoli jiného.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Kde se topné kabely používají",
        items: [
          "podlahové topení v koupelnách, na dlažbách a v zimních zahradách",
          "ochrana okapů a svodů proti ledu a rampouchům nad vstupy",
          "ochrana venkovních a nezateplených rozvodů vody",
          "vyhřívání vjezdů, ramp a schodišť",
        ],
      },
      {
        kind: "note",
        text: "Topné kabely se pokládají jednou a na desítky let. Chyba ve skladbě podlahy se opravuje bouráním, proto se to řeší při přípravě stavby, ne až při dokončování.",
      },
      {
        kind: "photos",
        heading: "Z realizací",
        files: ["hygienicke-zazemi-01", "detail-sprcha"],
      },
    ],
  },
];

export function topicsFor(field: string) {
  return topics.filter((t) => t.field === field);
}

export function findTopic(field: string, slug: string) {
  return topics.find((t) => t.field === field && t.slug === slug);
}
