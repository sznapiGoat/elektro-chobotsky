/** Fotografie. Rozmery jsou nactene ze souboru skriptem scripts/gen-photos.py. */
export type Photo = {
  file: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
  place?: string;
};

/** Snimky pro uvodni prehravac na domovske strance. */
export const heroSlides: Photo[] = [
  {
    file: "rozvadec-jistice",
    w: 960,
    h: 1280,
    alt: "Otevřený rozvaděč s několika řadami jističů a proudových chráničů, číslovanými vodiči a svorkovnicemi.",
    caption: "Osazený rozvaděč s jističi a chrániči",
  },
  {
    file: "pekarstvi-prodejna",
    w: 1280,
    h: 960,
    alt: "Prodejna pekařství s bodovými svítidly na liště, závěsnými svítidly nad pecemi a vitrínou.",
    caption: "Prodejna pekařství",
    place: "Praha",
  },
  {
    file: "hala-01",
    w: 1280,
    h: 960,
    alt: "Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.",
    caption: "Hala s lineárním osvětlením",
  },
  {
    file: "bowling-herna",
    w: 640,
    h: 427,
    alt: "Bowlingová dráha s obrazovkami nad dráhami, dřevěným krovem a barevnými koulemi na podavači.",
    caption: "Bowlingová dráha a herna",
  },
  {
    file: "sal-hvezdny-podhled",
    w: 1280,
    h: 960,
    alt: "Sál s parketami, jevištní oponou, černým perforovaným podhledem s desítkami bodových svítidel a jevištními reflektory na stěnách.",
    caption: "Sál s jevištním osvětlením",
  },
];

export const photoGroups: { title: string; photos: Photo[] }[] = [
  {
    title: "Rozvaděče a rozvody",
    photos: [
      {
        file: "rozvadec-jistice",
        w: 960,
        h: 1280,
        alt: "Otevřený rozvaděč s několika řadami jističů a proudových chráničů, číslovanými vodiči a svorkovnicemi.",
        caption: "Osazený rozvaděč s jističi a chrániči",
      },
      {
        file: "rozvadec-svorkovnice",
        w: 960,
        h: 1280,
        alt: "Vnitřek rozvaděče se svorkovnicemi, popisky obvodů a přívodními vodiči.",
        caption: "Svorkovnice a značení obvodů",
      },
      {
        file: "rozvadece-skrine",
        w: 1200,
        h: 1600,
        alt: "Otevřené rozvaděčové skříně s dvířky a vnitřní kabelovou výzbrojí v technické místnosti.",
        caption: "Rozvaděčové skříně, dokončená montáž",
      },
      {
        file: "rozvadece-provoz",
        w: 1200,
        h: 1600,
        alt: "Tři uzavřené rozvaděčové skříně s bezpečnostním značením v provozní chodbě.",
        caption: "Rozvaděče v provozu",
      },
      {
        file: "rozvadec-01",
        w: 1237,
        h: 1280,
        alt: "Osazený hlavní rozvaděč s bezpečnostním značením a drátěnými kabelovými žlaby nad ním.",
        caption: "Hlavní rozvaděč a kabelové trasy",
      },
      {
        file: "detail-stitky",
        w: 340,
        h: 320,
        alt: "Bezpečnostní štítky na dveřích rozvaděče, upozornění na elektrické zařízení a označení hlavního vypínače.",
        caption: "Značení rozvaděče",
      },
    ],
  },
  {
    title: "Haly, dílny a sklady",
    photos: [
      {
        file: "hala-01",
        w: 1280,
        h: 960,
        alt: "Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.",
        caption: "Hala s lineárním osvětlením",
      },
      {
        file: "hala-03",
        w: 1280,
        h: 960,
        alt: "Interiér haly s červeně lakovanými ocelovými rámy prostupů a lineárním osvětlením na šedém stropě.",
        caption: "Provozní hala s prostupy",
      },
      {
        file: "detail-svitidla",
        w: 820,
        h: 430,
        alt: "Lineární svítidla a povrchová kabelová trasa na betonovém stropě haly, vedle vzduchotechnické potrubí.",
        caption: "Svítidla a trasy pod stropem",
      },
      {
        file: "hala-02",
        w: 960,
        h: 1280,
        alt: "Hala s betonovými stěnami, lištovými svítidly na stropě a povrchovými kabelovými trasami vedenými k rozvodům.",
        caption: "Osvětlení a kabelové trasy v hale",
      },
      {
        file: "hala-04",
        w: 1280,
        h: 960,
        alt: "Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem.",
        caption: "Hala, dokončené rozvody",
      },
      {
        file: "detail-prostup",
        w: 500,
        h: 700,
        alt: "Červeně lakovaný ocelový rám prostupu v hale, vedle něj otopné těleso a označení nouzového východu.",
        caption: "Prostup v hale",
      },
      {
        file: "truhlarska-dilna",
        w: 1200,
        h: 1600,
        alt: "Truhlářská dílna s dřevoobráběcími stroji a řadami lineárních svítidel pod stropem.",
        caption: "Truhlářská dílna, osvětlení nad stroji",
      },
      {
        file: "dilna-osvetleni",
        w: 1200,
        h: 1600,
        alt: "Dílna s lineárním svítidlem, odsávacím potrubím a sekčními vraty v pozadí.",
        caption: "Dílna s odsáváním",
      },
      {
        file: "sklad-plosina",
        w: 960,
        h: 1280,
        alt: "Sklad s montážní plošinou pod stropní konstrukcí a rozvody vedenými nad regály.",
        caption: "Sklad, montáž pod stropem",
      },
      {
        file: "detail-okna",
        w: 600,
        h: 540,
        alt: "Prosvětlená okna v betonové stěně haly s otopnými tělesy a lištovým svítidlem.",
        caption: "Hala, boční stěna",
      },
    ],
  },
  {
    title: "Prodejny a provozovny",
    photos: [
      {
        file: "pekarstvi-prodejna",
        w: 1280,
        h: 960,
        alt: "Prodejna pekařství s bodovými svítidly na liště, závěsnými svítidly nad pecemi a vitrínou.",
        caption: "Prodejna pekařství",
        place: "Praha",
      },
      {
        file: "pekarstvi-pece",
        w: 1000,
        h: 750,
        alt: "Interiér pekařství s pecemi, vitrínou a černými závěsnými svítidly.",
        caption: "Pekařství, pece a vitrína",
        place: "Praha",
      },
      {
        file: "pekarstvi-pult",
        w: 960,
        h: 1280,
        alt: "Prodejní pult pekařství s vitrínami a bodovým osvětlením na liště.",
        caption: "Prodejní pult",
        place: "Praha",
      },
      {
        file: "pekarstvi-provoz",
        w: 960,
        h: 540,
        alt: "Prodejna pekařství se zákazníky u pultu, nad pultem lišta s bodovými svítidly.",
        caption: "Prodejna v provozu",
        place: "Praha",
      },
      {
        file: "pekarstvi-vyrobna",
        w: 1280,
        h: 960,
        alt: "Výrobna pekařství s hnětači, bílým obkladem a zářivkovým osvětlením.",
        caption: "Výrobna pekařství",
        place: "Praha",
      },
      {
        file: "pekarstvi-hnetace",
        w: 960,
        h: 1280,
        alt: "Hnětače a pracovní stoly ve výrobně pekařství.",
        caption: "Výrobna, hnětače",
        place: "Praha",
      },
      {
        file: "prodejna-ulice",
        w: 1000,
        h: 562,
        alt: "Prodejna z ulice, nad vchodem světelná reklama a hodiny.",
        caption: "Prodejna z ulice",
        place: "Praha",
      },
      {
        file: "bowling-herna",
        w: 640,
        h: 427,
        alt: "Bowlingová dráha s obrazovkami nad dráhami, dřevěným krovem a barevnými koulemi na podavači.",
        caption: "Bowlingová dráha a herna",
      },
    ],
  },
  {
    title: "Veřejné budovy",
    photos: [
      {
        file: "jidelna-zs-01",
        w: 1024,
        h: 730,
        alt: "Školní jídelna s barevnými židlemi a kruhovými svítidly zapuštěnými do akustického podhledu.",
        caption: "Jídelna ZŠ",
        place: "Divišov",
      },
      {
        file: "jidelna-zs-03",
        w: 1024,
        h: 768,
        alt: "Jídelna s dřevěnými trámy a bodovými svítidly v akustickém podhledu, v pozadí nástěnné hodiny.",
        caption: "Jídelna ZŠ, pohled do sálu",
        place: "Divišov",
      },
      {
        file: "detail-jidelna-zidle",
        w: 640,
        h: 370,
        alt: "Modré a oranžové židle u stolů ve školní jídelně.",
        caption: "Jídelna po rekonstrukci",
        place: "Divišov",
      },
      {
        file: "jidelna-zs-02",
        w: 1024,
        h: 768,
        alt: "Pohled do jídelny se dvěma řadami stolů a rovnoměrně rozmístěnými stropními svítidly.",
        caption: "Jídelna ZŠ, rozmístění svítidel",
        place: "Divišov",
      },
      {
        file: "detail-tramy",
        w: 680,
        h: 380,
        alt: "Dřevěné trámy a bodová svítidla v akustickém podhledu jídelny.",
        caption: "Podhled s bodovými svítidly",
        place: "Divišov",
      },
      {
        file: "sal-hvezdny-podhled",
        w: 1280,
        h: 960,
        alt: "Sál s parketami, jevištní oponou, černým perforovaným podhledem s desítkami bodových svítidel a jevištními reflektory na stěnách.",
        caption: "Sál s jevištním osvětlením",
      },
    ],
  },
  {
    title: "Objekty a zázemí",
    photos: [
      {
        file: "hotel-ulice",
        w: 1280,
        h: 850,
        alt: "Hotel s restaurací z ulice, na fasádě označení hotelu.",
        caption: "Hotel z ulice",
      },
      {
        file: "hotel-01",
        w: 930,
        h: 290,
        alt: "Hotel s restaurací, zahradou a venkovním bazénem.",
        caption: "Hotel s restaurací",
      },
      {
        file: "detail-hotel-bazen",
        w: 580,
        h: 180,
        alt: "Venkovní bazén se zahradou před hotelem s restaurací.",
        caption: "Zahrada s bazénem",
      },
      {
        file: "objekt-drevena-fasada",
        w: 300,
        h: 300,
        alt: "Objekt s dřevěnou fasádou, balkony a upravenou zahradou.",
        caption: "Objekt s dřevěnou fasádou",
      },
      {
        file: "areal-cesta",
        w: 800,
        h: 441,
        alt: "Příjezdová cesta k areálu s několika objekty, po stranách stromy.",
        caption: "Areál s několika objekty",
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
        file: "detail-sprcha",
        w: 460,
        h: 490,
        alt: "Sprchová baterie a skleněná zástěna v obloženém hygienickém zázemí.",
        caption: "Sprcha, detail",
      },
    ],
  },
];

export const allPhotos: Photo[] = photoGroups.flatMap((g) => g.photos);

export function photo(file: string): Photo {
  const found = allPhotos.find((p) => p.file === file);
  if (!found) throw new Error("Neznama fotografie: " + file);
  return found;
}
