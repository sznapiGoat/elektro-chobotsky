export const site = {
  name: "Miroslav Chobotský",
  shortName: "M. Chobotský",
  trade: "Elektroinstalace, hromosvody, revize",
  founded: 1995,
  phone: "606 145 684",
  phoneHref: "tel:+420606145684",
  email: "chobotskymiroslav@seznam.cz",
  address: { street: "Lbosín 16", city: "257 26 Divišov" },
  ico: "616 70 341",
  dic: "CZ7310230598",
  area: "Středočeský kraj a Praha",
  areaIn: "ve Středočeském kraji a v Praze",
  googleProfile:
    "https://www.google.com/maps/search/?api=1&query=Miroslav%20Chobotsk%C3%BD%20-%20elektroinstalace&query_place_id=ChIJAecEO4p8DEcRrUNqb3PPThM",
  /** Města, která firma uvádí ve svém profilu jako oblast, kam jezdí. */
  towns: [
    "Divišov",
    "Benešov",
    "Vlašim",
    "Sázava",
    "Čerčany",
    "Chocerady",
    "Týnec nad Sázavou",
    "Votice",
    "Praha",
  ],
  about:
    "Firma byla založena v roce 1995. Předmětem podnikání jsou silnoproudé a slaboproudé elektroinstalace, instalace zabezpečovacích systémů Jablotron, montáž hromosvodů, výchozí a pravidelné revize el. zařízení. Působíme převážně ve Středočeském kraji a v Praze.",
};

export const nav = [
  { label: "Nabídka služeb", href: "/nabidka-sluzeb" },
  { label: "Reference", href: "/reference" },
  { label: "Fotogalerie", href: "/fotogalerie" },
  { label: "Certifikáty", href: "/certifikaty" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Pět oborů, každý má vlastní stránku. */
export const fields = [
  {
    slug: "elektroinstalace",
    title: "Elektroinstalace",
    lead: "Silnoproudé i slaboproudé rozvody v rodinných a bytových domech, provozovnách a průmyslových objektech.",
    keywords: "RD, BD a průmysl, odběrná místa, přípojky NN, veřejné osvětlení",
  },
  {
    slug: "hromosvody",
    title: "Hromosvody",
    lead: "Montáž a revize ochrany před bleskem podle ČSN EN 62305. Jímací soustavy, svody a zemniče.",
    keywords: "montáž, opravy, revize hromosvodů",
  },
  {
    slug: "revize",
    title: "Revize",
    lead: "Výchozí a periodické revize vyhrazených elektrických zařízení v rozsahu E2A.",
    keywords: "výchozí a periodické revize, revizní zprávy",
  },
  {
    slug: "zabezpecovaci-systemy",
    title: "Zabezpečovací systémy",
    lead: "Montáž a rozšíření systémů JABLOTRON 100+ a Mercury. Certifikát výrobce a koncese k ochraně majetku a osob.",
    keywords: "Jablotron 100+, Mercury, servis a rozšíření",
  },
  {
    slug: "elektricke-vytapeni",
    title: "Elektrické vytápění",
    lead: "Přímotopy, elektrické kotle, akumulační kamna a topné kabely včetně ochrany okapů.",
    keywords: "přímotopy, kotle, akumulace, topné kabely",
  },
];

/** Původní výčet služeb z Webnode webu, zachovaný slovo za slovem. */
export const originalServices = [
  { text: "elektroinstalace RD, BD a průmyslových objektů", field: "elektroinstalace" },
  { text: "instalace zabezpečovacích systémů Jablotron", field: "zabezpecovaci-systemy" },
  { text: "realizace nových a úprava stávajících odběrných míst", field: "elektroinstalace" },
  { text: "elektrické přípojky NN", field: "elektroinstalace" },
  { text: "montáž a údržba veřejného osvětlení", field: "elektroinstalace" },
  { text: "hromosvody", field: "hromosvody" },
  {
    text: "elektrické topení, přímotopy, el. kotle, akumulační kamna",
    field: "elektricke-vytapeni",
  },
  {
    text: "topné kabely, podlahové topení, ochrana okapů, ochrana potrubí, ochrana venkovních ploch",
    field: "elektricke-vytapeni",
  },
  { text: "výchozí a periodické revize", field: "revize" },
];

/** Nejsilnější oprávnění. Čísla a data jsou z naskenovaných dokladů. */
export const credentials = [
  {
    issuer: "Technická inspekce ČR",
    title: "Osvědčení k revizím vyhrazených elektrických zařízení",
    ref: "5098/25/R-EZ-E2A",
    valid: "do 24. 6. 2030",
    doc: "ticr-osvedceni-1",
  },
  {
    issuer: "Elektroservis VV s.r.o.",
    title: "Odborná způsobilost v elektrotechnice dle NV 194/2022 Sb.",
    ref: "EVV/050/2024",
    valid: "do 12. 3. 2027",
    doc: "odborna-zpusobilost-evv",
  },
  {
    issuer: "Jablotron a.s.",
    title: "Certifikát JABLOTRON 100+ a Mercury",
    ref: "Akademie Jablotron",
    valid: "vystaveno 14. 6. 2025",
    doc: "jablotron-100-mercury",
  },
  {
    issuer: "Městský úřad Benešov",
    title: "Koncese Poskytování technických služeb k ochraně majetku a osob",
    ref: "ŽÚ/342/2020",
    valid: "na dobu neurčitou",
    doc: "koncese-rozhodnuti-1",
  },
];

export const certificates = [
  {
    file: "ticr-osvedceni-1",
    title: "Osvědčení k provádění revizí vyhrazených elektrických zařízení",
    issuer: "Technická inspekce ČR",
    ref: "5098/25/R-EZ-E2A",
    valid: "platnost do 24. 6. 2030",
    alt: "Osvědčení Technické inspekce České republiky k provádění revizí vyhrazených elektrických zařízení v rozsahu E2A.",
  },
  {
    file: "ticr-osvedceni-2",
    title: "Příloha k osvědčení, vymezení rozsahu E2A",
    issuer: "Technická inspekce ČR",
    ref: "5098/25/R-EZ-E2A",
    valid: "příloha 2/2",
    alt: "Příloha osvědčení TIČR vymezující rozsah E2A: zařízení do 1 kV AC nebo 1,5 kV DC včetně hromosvodů.",
  },
  {
    file: "odborna-zpusobilost-evv",
    title: "Doklad o složení zkoušky odborné způsobilosti v elektrotechnice",
    issuer: "Elektroservis VV s.r.o.",
    ref: "EVV/050/2024",
    valid: "platnost do 12. 3. 2027",
    alt: "Doklad o složení zkoušky z odborné způsobilosti k výkonu činností v elektrotechnice dle NV 194/2022 Sb.",
  },
  {
    file: "jablotron-100-mercury",
    title: "Certifikát o absolvování kurzu JABLOTRON 100+ a Mercury",
    issuer: "Jablotron a.s.",
    ref: "Akademie Jablotron",
    valid: "vystaveno 14. 6. 2025",
    alt: "Certifikát firmy Jablotron a.s. o absolvování odborného kurzu JABLOTRON 100+ a Mercury.",
  },
  {
    file: "dehn-csn-en-62305",
    title: "Osvědčení Ochrana před bleskem podle ČSN EN 62305",
    issuer: "DEHN + SÖHNE a LUMA Plus",
    ref: "Chomutov",
    valid: "19. 1. 2010",
    alt: "Osvědčení o absolvování praktického školení Ochrana před bleskem podle normy ČSN EN 62305.",
  },
  {
    file: "lpe-elektroinstalacni-pristroje",
    title: "Osvědčení Praktické používání moderních elektroinstalačních přístrojů",
    issuer: "LPE s.r.o.",
    ref: "351-2020/LP",
    valid: "12. 2. 2020",
    alt: "Osvědčení vzdělávací agentury LPE o školení k proudovým chráničům, obloukovým ochranám AFDD a spínacím přístrojům.",
  },
  {
    file: "koncese-rozhodnuti-1",
    title: "Rozhodnutí o udělení koncese k ochraně majetku a osob",
    issuer: "Městský úřad Benešov",
    ref: "ŽÚ/342/2020",
    valid: "21. 1. 2020, strana 1",
    alt: "Rozhodnutí Městského úřadu Benešov o udělení koncese na poskytování technických služeb k ochraně majetku a osob.",
  },
  {
    file: "koncese-rozhodnuti-2",
    title: "Rozhodnutí o udělení koncese, odůvodnění",
    issuer: "Městský úřad Benešov",
    ref: "ŽÚ/342/2020",
    valid: "21. 1. 2020, strana 2",
    alt: "Druhá strana rozhodnutí o koncesi s odůvodněním a podpisem vedoucí obecního živnostenského úřadu.",
  },
  {
    file: "vypis-zr-1",
    title: "Výpis z živnostenského rejstříku",
    issuer: "Městský úřad Benešov",
    ref: "ID RZP 2468415",
    valid: "oprávnění od 9. 2. 1995",
    alt: "Výpis z živnostenského rejstříku se čtyřmi živnostenskými oprávněními, první vzniklo 9. 2. 1995.",
  },
  {
    file: "vypis-zr-2",
    title: "Výpis z živnostenského rejstříku, pokračování",
    issuer: "Městský úřad Benešov",
    ref: "ID RZP 2468415",
    valid: "strana 2",
    alt: "Druhá strana výpisu z živnostenského rejstříku s oprávněním k ochraně majetku a osob.",
  },
];

export const referenceTypes = [
  "Veřejné stavby",
  "Průmysl a logistika",
  "Obchod a provozovny",
  "Bydlení",
  "Hotely a penziony",
] as const;

export type ReferenceType = (typeof referenceTypes)[number];

/** 25 realizací z původní stránky Reference, rozpadlých na objekt, místo a typ. */
export const references: {
  name: string;
  place: string;
  type: ReferenceType;
  /** Fotografie, u které je z jejího obsahu zřejmé, že patří k tomuto objektu. */
  photo?: string;
}[] = [
  {
    name: "Jídelna ZŠ",
    place: "Divišov",
    type: "Veřejné stavby",
    photo: "jidelna-zs-01",
  },
  {
    name: "Rekonstrukce sokolovny",
    place: "Divišov",
    type: "Veřejné stavby",
    photo: "sal-hvezdny-podhled",
  },
  { name: "Rekonstrukce budovy Kaleidoskop", place: "Solenice", type: "Veřejné stavby" },
  { name: "Rozšíření veřejného osvětlení", place: "Drahňovice", type: "Veřejné stavby" },
  { name: "XPO Supply Chain CZ s.r.o., LC Měchnov", place: "Měchnov", type: "Průmysl a logistika" },
  {
    name: "Skladová hala ED plošiny s.r.o.",
    place: "Divišov",
    type: "Průmysl a logistika",
    photo: "sklad-plosina",
  },
  { name: "Výrobní hala KADATEC s.r.o.", place: "Zdislavice", type: "Průmysl a logistika" },
  { name: "Servisní hala EICHLER BUS s.r.o.", place: "Divišov", type: "Průmysl a logistika" },
  {
    name: "Truhlářská dílna Interier Miriam s.r.o.",
    place: "Divišov",
    type: "Průmysl a logistika",
    photo: "truhlarska-dilna",
  },
  {
    name: "Fotovoltaická elektrárna Václav Hanuš",
    place: "Divišov",
    type: "Průmysl a logistika",
  },
  { name: "Prodejna Honda Galerie Butovice", place: "Praha", type: "Obchod a provozovny" },
  { name: "Prodejna Vancl Sport", place: "Praha, Barrandov", type: "Obchod a provozovny" },
  {
    name: "Prodejny Antonínovo pekařství",
    place: "Praha, Vinohrady a Vršovice",
    type: "Obchod a provozovny",
    photo: "pekarstvi-prodejna",
  },
  { name: "Fitness centrum", place: "Divišov", type: "Obchod a provozovny" },
  { name: "Provozovna Šenk s.r.o.", place: "Tatouňovice", type: "Obchod a provozovny" },
  { name: "Provozovna FRAM s.r.o.", place: "", type: "Obchod a provozovny" },
  { name: "DATA SYSTEM SOLUTIONS s.r.o.", place: "Čerčany", type: "Obchod a provozovny" },
  {
    name: "Herny DOMINO",
    place: "",
    type: "Obchod a provozovny",
    photo: "bowling-herna",
  },
  { name: "Rekonstrukce vily Mgr. Martin Mašek", place: "Praha, Barrandov", type: "Bydlení" },
  { name: "RD Ing. Pavel Janovský", place: "Čerčany", type: "Bydlení" },
  { name: "RD Ing. Libor Truhelka", place: "", type: "Bydlení" },
  { name: "RD MUDr. František Rousek", place: "", type: "Bydlení" },
  { name: "Rekonstrukce hotelu HEINZ", place: "Dobříš", type: "Hotely a penziony" },
  { name: "Penzion Hulín", place: "Sedlčany", type: "Hotely a penziony" },
  { name: "Penzion Všetice", place: "Všetice", type: "Hotely a penziony" },
];

/** Popisky vycházejí z toho, co je na fotografii skutečně vidět. */
export const gallery = [
  {
    file: "rozvadec-01",
    w: 1237,
    h: 1280,
    alt: "Osazený hlavní rozvaděč s bezpečnostním značením a drátěnými kabelovými žlaby nad ním.",
    caption: "Hlavní rozvaděč, dokončená montáž",
  },
  {
    file: "hala-02",
    w: 960,
    h: 1280,
    alt: "Hala s betonovými stěnami, lištovými svítidly na stropě a povrchovými kabelovými trasami vedenými k rozvodům.",
    caption: "Osvětlení a kabelové trasy v hale",
  },
  {
    file: "jidelna-zs-01",
    w: 1024,
    h: 730,
    alt: "Školní jídelna s barevnými židlemi a kruhovými svítidly zapuštěnými do akustického podhledu.",
    caption: "Jídelna ZŠ Divišov",
  },
  {
    file: "jidelna-zs-03",
    w: 1024,
    h: 768,
    alt: "Jídelna s dřevěnými trámy a bodovými svítidly v akustickém podhledu, v pozadí nástěnné hodiny.",
    caption: "Jídelna ZŠ Divišov, pohled do sálu",
  },
  {
    file: "jidelna-zs-02",
    w: 1024,
    h: 768,
    alt: "Pohled do jídelny se dvěma řadami stolů a rovnoměrně rozmístěnými stropními svítidly.",
    caption: "Jídelna ZŠ Divišov, rozmístění svítidel",
  },
  {
    file: "hala-01",
    w: 1280,
    h: 960,
    alt: "Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.",
    caption: "Hala s lineárním osvětlením",
  },
  {
    file: "hala-04",
    w: 1280,
    h: 960,
    alt: "Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem.",
    caption: "Hala, dokončené rozvody",
  },
  {
    file: "hala-03",
    w: 1280,
    h: 960,
    alt: "Interiér haly s červeně lakovanými ocelovými rámy prostupů a lineárním osvětlením na šedém stropě.",
    caption: "Provozní hala s prostupy",
  },
  {
    file: "hygienicke-zazemi-01",
    w: 960,
    h: 1280,
    alt: "Dokončená sprcha s obkladem a skleněnou zástěnou v hygienickém zázemí provozovny.",
    caption: "Hygienické zázemí provozovny",
  },
  {
    file: "hygienicke-zazemi-02",
    w: 1280,
    h: 960,
    alt: "Předsíň hygienického zázemí s otevřenými dveřmi do WC a průhledem do haly.",
    caption: "Hygienické zázemí, předsíň",
  },
  {
    file: "hotel-01",
    w: 930,
    h: 290,
    alt: "Hotel s restaurací, zahradou a venkovním bazénem, jeden z objektů, kde firma pracovala.",
    caption: "Hotel s restaurací",
  },
];

/** Milníky pro stránku O nás. Všechny jsou z doložených dokumentů. */
export const milestones = [
  {
    year: "1995",
    text: "Vzniká živnostenské oprávnění pro montáž, opravy, revize a zkoušky elektrických zařízení, 9. února.",
  },
  {
    year: "2010",
    text: "Praktické školení Ochrana před bleskem podle ČSN EN 62305 u firem DEHN + SÖHNE a LUMA Plus.",
  },
  {
    year: "2020",
    text: "Školení k proudovým chráničům a obloukovým ochranám AFDD. V lednu udělena koncese k ochraně majetku a osob.",
  },
  {
    year: "2024",
    text: "Zkouška odborné způsobilosti v elektrotechnice podle NV 194/2022 Sb., pro samostatnou činnost i řízení činnosti.",
  },
  {
    year: "2025",
    text: "Certifikát JABLOTRON 100+ a Mercury. Osvědčení Technické inspekce ČR k revizím v rozsahu E2A s platností do roku 2030.",
  },
];

/** Snímky pro úvodní přehrávač na domovské stránce. */
export const heroSlides = [
  {
    file: "hala-01",
    w: 1280,
    h: 960,
    alt: "Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.",
    caption: "Osvětlení haly",
    place: "Divišov",
  },
  {
    file: "jidelna-zs-01",
    w: 1024,
    h: 730,
    alt: "Školní jídelna s barevnými židlemi a kruhovými svítidly zapuštěnými do akustického podhledu.",
    caption: "Jídelna ZŠ",
    place: "Divišov",
  },
  {
    file: "hala-03",
    w: 1280,
    h: 960,
    alt: "Interiér haly s červeně lakovanými ocelovými rámy prostupů a lineárním osvětlením na šedém stropě.",
    caption: "Provozní hala",
    place: "Měchnov",
  },
  {
    file: "hala-04",
    w: 1280,
    h: 960,
    alt: "Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem.",
    caption: "Kabelové trasy",
    place: "Zdislavice",
  },
];

/** Detailní výřezy z vlastních fotografií, použité jako doplňkové záběry. */
export const details = [
  {
    file: "detail-stitky",
    w: 340,
    h: 320,
    alt: "Bezpečnostní štítky na dveřích rozvaděče, upozornění na elektrické zařízení a označení hlavního vypínače.",
    caption: "Značení rozvaděče",
  },
  {
    file: "detail-prostup",
    w: 500,
    h: 700,
    alt: "Červeně lakovaný ocelový rám prostupu v hale, vedle něj otopné těleso a označení nouzového východu.",
    caption: "Prostup v hale",
  },
  {
    file: "detail-jidelna-zidle",
    w: 640,
    h: 370,
    alt: "Modré a oranžové židle u stolů ve školní jídelně.",
    caption: "Jídelna po rekonstrukci",
  },
  {
    file: "detail-svitidla",
    w: 820,
    h: 430,
    alt: "Lineární svítidla a povrchová kabelová trasa na betonovém stropě haly, vedle vzduchotechnické potrubí.",
    caption: "Svítidla a trasy pod stropem",
  },
  {
    file: "detail-okna",
    w: 600,
    h: 540,
    alt: "Prosvětlená okna v betonové stěně haly s otopnými tělesy a lištovým svítidlem.",
    caption: "Hala, boční stěna",
  },
  {
    file: "detail-tramy",
    w: 680,
    h: 380,
    alt: "Dřevěné trámy a bodová svítidla v akustickém podhledu jídelny.",
    caption: "Podhled s bodovými svítidly",
  },
  {
    file: "detail-sprcha",
    w: 460,
    h: 490,
    alt: "Sprchová baterie a skleněná zástěna v obloženém hygienickém zázemí.",
    caption: "Hygienické zázemí",
  },
  {
    file: "detail-hotel-bazen",
    w: 580,
    h: 180,
    alt: "Venkovní bazén se zahradou před hotelem s restaurací.",
    caption: "Hotel s restaurací",
  },
];
