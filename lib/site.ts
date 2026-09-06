export const site = {
  name: "Miroslav Chobotský",
  trade: "Elektroinstalace a hromosvody",
  founded: 1995,
  phone: "606 145 684",
  phoneHref: "tel:+420606145684",
  email: "chobotskymiroslav@seznam.cz",
  address: { street: "Lbosín 16", city: "257 26 Divišov" },
  ico: "616 70 341",
  dic: "CZ7310230598",
  area: "Středočeský kraj a Praha",
  about:
    "Firma byla založena v roce 1995. Předmětem podnikání jsou silnoproudé a slaboproudé elektroinstalace, instalace zabezpečovacích systémů Jablotron, montáž hromosvodů, výchozí a pravidelné revize el. zařízení. Působíme převážně ve Středočeském kraji a v Praze.",
};

export const nav = [
  { label: "O nás", href: "#o-nas" },
  { label: "Nabídka služeb", href: "#sluzby" },
  { label: "Reference", href: "#reference" },
  { label: "Fotogalerie", href: "#fotogalerie" },
  { label: "Certifikáty", href: "#certifikaty" },
  { label: "Kontakt", href: "#kontakt" },
];

/** Oprávnění a školení doložená naskenovanými dokumenty v sekci Certifikáty. */
export const credentials = [
  {
    key: "ticr",
    issuer: "Technická inspekce ČR",
    title: "Osvědčení k revizím vyhrazených elektrických zařízení",
    ref: "ev. č. 5098/25/R-EZ-E2A",
    scope:
      "Rozsah E2A: zařízení do 1 kV AC a 1,5 kV DC včetně hromosvodů, v prostředí bez nebezpečí výbuchu.",
    valid: "Platnost do 24. 6. 2030",
    doc: "ticr-osvedceni-1",
  },
  {
    key: "jablotron",
    issuer: "Jablotron a.s.",
    title: "Certifikovaná montáž JABLOTRON 100+ a Mercury",
    ref: "Akademie Jablotron",
    scope:
      "Absolvovaný odborný kurz k technickým parametrům a montáži zabezpečovacích systémů Jablotron.",
    valid: "Vystaveno 14. 6. 2025",
    doc: "jablotron-100-mercury",
  },
  {
    key: "zpusobilost",
    issuer: "Elektroservis VV s.r.o.",
    title: "Odborná způsobilost dle NV 194/2022 Sb.",
    ref: "EVV/050/2024",
    scope:
      "Samostatná činnost i řízení činnosti na zařízeních do 1 kV AC a 1,5 kV DC v objektech tř. A včetně hromosvodů.",
    valid: "Platnost do 12. 3. 2027",
    doc: "odborna-zpusobilost-evv",
  },
  {
    key: "koncese",
    issuer: "Městský úřad Benešov",
    title: "Koncese k ochraně majetku a osob",
    ref: "ŽÚ/342/2020",
    scope:
      "Koncesovaná živnost Poskytování technických služeb k ochraně majetku a osob, na dobu neurčitou.",
    valid: "Udělena 21. 1. 2020",
    doc: "koncese-rozhodnuti-1",
  },
];

export const certificates = [
  {
    file: "ticr-osvedceni-1",
    title: "Osvědčení TIČR k revizím vyhrazených el. zařízení",
    meta: "Technická inspekce ČR, ev. č. 5098/25/R-EZ-E2A, platnost do 24. 6. 2030",
    alt: "Osvědčení Technické inspekce České republiky k provádění revizí vyhrazených elektrických zařízení v rozsahu E2A.",
  },
  {
    file: "ticr-osvedceni-2",
    title: "Příloha k osvědčení TIČR, rozsah E2A",
    meta: "Technická inspekce ČR, vymezení rozsahu činností",
    alt: "Příloha osvědčení TIČR vymezující rozsah E2A: zařízení do 1 kV AC nebo 1,5 kV DC včetně hromosvodů.",
  },
  {
    file: "jablotron-100-mercury",
    title: "Certifikát JABLOTRON 100+ a Mercury",
    meta: "Jablotron a.s., Akademie Jablotron, 14. 6. 2025",
    alt: "Certifikát firmy Jablotron a.s. o absolvování odborného kurzu JABLOTRON 100+ a Mercury.",
  },
  {
    file: "odborna-zpusobilost-evv",
    title: "Doklad o složení zkoušky odborné způsobilosti",
    meta: "Elektroservis VV s.r.o., EVV/050/2024, platnost do 12. 3. 2027",
    alt: "Doklad o složení zkoušky z odborné způsobilosti k výkonu činností v elektrotechnice dle NV 194/2022 Sb.",
  },
  {
    file: "dehn-csn-en-62305",
    title: "Osvědčení Ochrana před bleskem dle ČSN EN 62305",
    meta: "DEHN + SÖHNE a LUMA Plus, Chomutov, 19. 1. 2010",
    alt: "Osvědčení o absolvování praktického školení Ochrana před bleskem podle normy ČSN EN 62305.",
  },
  {
    file: "lpe-elektroinstalacni-pristroje",
    title: "Osvědčení k moderním elektroinstalačním přístrojům",
    meta: "LPE s.r.o., č. 351-2020/LP, 12. 2. 2020",
    alt: "Osvědčení vzdělávací agentury LPE o školení k proudovým chráničům, obloukovým ochranám AFDD a spínacím přístrojům.",
  },
  {
    file: "koncese-rozhodnuti-1",
    title: "Rozhodnutí o udělení koncese, strana 1",
    meta: "Městský úřad Benešov, ŽÚ/342/2020, 21. 1. 2020",
    alt: "Rozhodnutí Městského úřadu Benešov o udělení koncese na poskytování technických služeb k ochraně majetku a osob.",
  },
  {
    file: "koncese-rozhodnuti-2",
    title: "Rozhodnutí o udělení koncese, strana 2",
    meta: "Městský úřad Benešov, koncese na dobu neurčitou",
    alt: "Druhá strana rozhodnutí o koncesi s odůvodněním a podpisem vedoucí obecního živnostenského úřadu.",
  },
  {
    file: "vypis-zr-1",
    title: "Výpis z živnostenského rejstříku, strana 1",
    meta: "Montáž, opravy, revize a zkoušky elektrických zařízení od 9. 2. 1995",
    alt: "Výpis z živnostenského rejstříku se čtyřmi živnostenskými oprávněními, první vzniklo 9. 2. 1995.",
  },
  {
    file: "vypis-zr-2",
    title: "Výpis z živnostenského rejstříku, strana 2",
    meta: "Poskytování technických služeb k ochraně majetku a osob",
    alt: "Druhá strana výpisu z živnostenského rejstříku s oprávněním k ochraně majetku a osob.",
  },
];

export type ServiceKey =
  | "plugs"
  | "lightning"
  | "clipboard"
  | "shield"
  | "thermometer";

export const services: {
  key: string;
  icon: ServiceKey;
  title: string;
  lead: string;
  items: string[];
  wide: boolean;
}[] = [
  {
    key: "elektroinstalace",
    icon: "plugs",
    title: "Elektroinstalace",
    lead: "Silnoproud i slaboproud od přípojky až po osazený rozvaděč.",
    items: [
      "elektroinstalace RD, BD a průmyslových objektů",
      "realizace nových a úprava stávajících odběrných míst",
      "elektrické přípojky NN",
      "montáž a údržba veřejného osvětlení",
    ],
    wide: true,
  },
  {
    key: "hromosvody",
    icon: "lightning",
    title: "Hromosvody",
    lead: "Ochrana před bleskem podle ČSN EN 62305, od montáže po revizi.",
    items: [
      "montáž hromosvodů",
      "jímací soustavy, svody a zemniče",
      "opravy a doplnění stávající ochrany",
      "revize hromosvodů",
    ],
    wide: true,
  },
  {
    key: "revize",
    icon: "clipboard",
    title: "Revize",
    lead: "Výchozí i periodické revize s osvědčením TIČR v rozsahu E2A.",
    items: [
      "výchozí a periodické revize",
      "zařízení do 1 kV AC a 1,5 kV DC",
      "revizní zprávy ke kolaudaci a pro pojišťovnu",
    ],
    wide: false,
  },
  {
    key: "zabezpeceni",
    icon: "shield",
    title: "Zabezpečovací systémy",
    lead: "Certifikovaná montáž systémů Jablotron 100+ a Mercury.",
    items: [
      "instalace zabezpečovacích systémů Jablotron",
      "rozšíření a servis stávajících systémů",
      "koncese k ochraně majetku a osob",
    ],
    wide: false,
  },
  {
    key: "vytapeni",
    icon: "thermometer",
    title: "Elektrické vytápění",
    lead: "Přímotopy, kotle i topné kabely včetně ochrany okapů.",
    items: [
      "přímotopy, elektrické kotle, akumulační kamna",
      "topné kabely a podlahové topení",
      "ochrana okapů, potrubí a venkovních ploch",
    ],
    wide: false,
  },
];

export const referenceGroups = [
  {
    title: "Veřejné a občanské stavby",
    items: [
      "jídelna ZŠ Divišov",
      "fitness centrum Divišov",
      "rekonstrukce sokolovny v Divišově",
      "rekonstrukce budovy Kaleidoskop Solenice",
      "rozšíření veřejného osvětlení Drahňovice",
    ],
  },
  {
    title: "Průmysl a logistika",
    items: [
      "XPO Supply Chain CZ s.r.o., LC Měchnov",
      "skladová hala ED plošiny s.r.o. Divišov",
      "výrobní hala KADATEC s.r.o. Zdislavice",
      "servisní hala EICHLER BUS s.r.o. Divišov",
      "truhlářská dílna Interier Miriam s.r.o. Divišov",
      "fotovoltaická elektrárna Václav Hanuš Divišov",
    ],
  },
  {
    title: "Obchod a provozovny",
    items: [
      "prodejna Honda Galerie Butovice Praha",
      "prodejna Vancl Sport Praha Barrandov",
      "prodejny Antonínovo pekařství Praha, Vinohrady a Vršovice",
      "provozovna firmy Šenk s.r.o. Tatouňovice",
      "provozovna FRAM s.r.o.",
      "DATA SYSTEM SOLUTIONS s.r.o. Čerčany",
      "herny DOMINO",
    ],
  },
  {
    title: "Bydlení, hotely a penziony",
    items: [
      "rekonstrukce hotelu HEINZ Dobříš",
      "Penzion Hulín Sedlčany",
      "penzion Všetice",
      "rekonstrukce vily Mgr. Martin Mašek Praha Barrandov",
      "RD Ing. Pavel Janovský Čerčany",
      "RD Ing. Libor Truhelka",
      "RD MUDr. František Rousek",
    ],
  },
];

/** Popisky vycházejí z toho, co je na fotografii skutečně vidět. */
export const gallery = [
  {
    file: "rozvadec-01",
    w: 1237,
    h: 1280,
    alt: "Osazený hlavní rozvaděč s bezpečnostním značením a drátěnými kabelovými žlaby nad ním.",
    caption: "Hlavní rozvaděč a kabelové trasy",
  },
  {
    file: "jidelna-zs-01",
    w: 1024,
    h: 730,
    alt: "Školní jídelna s barevnými židlemi a kruhovými svítidly zapuštěnými do akustického podhledu.",
    caption: "Jídelna ZŠ Divišov",
  },
  {
    file: "hala-01",
    w: 1280,
    h: 960,
    alt: "Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.",
    caption: "Hala s lineárním osvětlením",
  },
  {
    file: "jidelna-zs-02",
    w: 1024,
    h: 768,
    alt: "Pohled do jídelny se dvěma řadami stolů a rovnoměrně rozmístěnými stropními svítidly.",
    caption: "Jídelna ZŠ Divišov",
  },
  {
    file: "hala-04",
    w: 1280,
    h: 960,
    alt: "Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem.",
    caption: "Hala, dokončené rozvody",
  },
  {
    file: "jidelna-zs-03",
    w: 1024,
    h: 768,
    alt: "Jídelna s dřevěnými trámy a bodovými svítidly v akustickém podhledu, v pozadí nástěnné hodiny.",
    caption: "Jídelna ZŠ Divišov",
  },
  {
    file: "hala-03",
    w: 1280,
    h: 960,
    alt: "Interiér haly s červeně lakovanými ocelovými rámy prostupů a lineárním osvětlením na šedém stropě.",
    caption: "Provozní hala",
  },
  {
    file: "hygienicke-zazemi-01",
    w: 960,
    h: 1280,
    alt: "Dokončená sprcha s obkladem a skleněnou zástěnou v hygienickém zázemí provozovny.",
    caption: "Hygienické zázemí",
  },
  {
    file: "hygienicke-zazemi-02",
    w: 1280,
    h: 960,
    alt: "Předsíň hygienického zázemí s otevřenými dveřmi do WC a průhledem do haly.",
    caption: "Hygienické zázemí",
  },
  {
    file: "hotel-01",
    w: 930,
    h: 290,
    alt: "Hotel s restaurací, zahradou a venkovním bazénem, jeden z objektů, kde firma pracovala.",
    caption: "Hotel s restaurací",
  },
];
