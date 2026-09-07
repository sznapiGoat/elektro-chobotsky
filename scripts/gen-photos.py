# -*- coding: utf-8 -*-
"""Vygeneruje lib/photos.ts. Rozměry se čtou přímo ze souborů."""
import io, os
from PIL import Image

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
D = "public/foto"

meta = {
    "rozvadec-jistice": ("Otevřený rozvaděč s několika řadami jističů a proudových chráničů, číslovanými vodiči a svorkovnicemi.", "Osazený rozvaděč s jističi a chrániči", ""),
    "rozvadec-svorkovnice": ("Vnitřek rozvaděče se svorkovnicemi, popisky obvodů a přívodními vodiči.", "Svorkovnice a značení obvodů", ""),
    "rozvadece-skrine": ("Otevřené rozvaděčové skříně s dvířky a vnitřní kabelovou výzbrojí v technické místnosti.", "Rozvaděčové skříně, dokončená montáž", ""),
    "rozvadece-provoz": ("Tři uzavřené rozvaděčové skříně s bezpečnostním značením v provozní chodbě.", "Rozvaděče v provozu", ""),
    "rozvadec-01": ("Osazený hlavní rozvaděč s bezpečnostním značením a drátěnými kabelovými žlaby nad ním.", "Hlavní rozvaděč a kabelové trasy", ""),
    "detail-stitky": ("Bezpečnostní štítky na dveřích rozvaděče, upozornění na elektrické zařízení a označení hlavního vypínače.", "Značení rozvaděče", ""),
    "hala-01": ("Hala s betonovým stropem, lineárními svítidly, vzduchotechnikou a označením nouzového východu.", "Hala s lineárním osvětlením", ""),
    "hala-02": ("Hala s betonovými stěnami, lištovými svítidly na stropě a povrchovými kabelovými trasami vedenými k rozvodům.", "Osvětlení a kabelové trasy v hale", ""),
    "hala-03": ("Interiér haly s červeně lakovanými ocelovými rámy prostupů a lineárním osvětlením na šedém stropě.", "Provozní hala s prostupy", ""),
    "hala-04": ("Hala s prosvětlenými okny, závěsnými svítidly a povrchově vedenou kabelovou trasou pod stropem.", "Hala, dokončené rozvody", ""),
    "detail-svitidla": ("Lineární svítidla a povrchová kabelová trasa na betonovém stropě haly, vedle vzduchotechnické potrubí.", "Svítidla a trasy pod stropem", ""),
    "detail-prostup": ("Červeně lakovaný ocelový rám prostupu v hale, vedle něj otopné těleso a označení nouzového východu.", "Prostup v hale", ""),
    "detail-okna": ("Prosvětlená okna v betonové stěně haly s otopnými tělesy a lištovým svítidlem.", "Hala, boční stěna", ""),
    "truhlarska-dilna": ("Truhlářská dílna s dřevoobráběcími stroji a řadami lineárních svítidel pod stropem.", "Truhlářská dílna, osvětlení nad stroji", ""),
    "dilna-osvetleni": ("Dílna s lineárním svítidlem, odsávacím potrubím a sekčními vraty v pozadí.", "Dílna s odsáváním", ""),
    "sklad-plosina": ("Sklad s montážní plošinou pod stropní konstrukcí a rozvody vedenými nad regály.", "Sklad, montáž pod stropem", ""),
    "pekarstvi-prodejna": ("Prodejna pekařství s bodovými svítidly na liště, závěsnými svítidly nad pecemi a vitrínou.", "Prodejna pekařství", "Praha"),
    "pekarstvi-pece": ("Interiér pekařství s pecemi, vitrínou a černými závěsnými svítidly.", "Pekařství, pece a vitrína", "Praha"),
    "pekarstvi-pult": ("Prodejní pult pekařství s vitrínami a bodovým osvětlením na liště.", "Prodejní pult", "Praha"),
    "pekarstvi-provoz": ("Prodejna pekařství se zákazníky u pultu, nad pultem lišta s bodovými svítidly.", "Prodejna v provozu", "Praha"),
    "pekarstvi-vyrobna": ("Výrobna pekařství s hnětači, bílým obkladem a zářivkovým osvětlením.", "Výrobna pekařství", "Praha"),
    "pekarstvi-hnetace": ("Hnětače a pracovní stoly ve výrobně pekařství.", "Výrobna, hnětače", "Praha"),
    "prodejna-ulice": ("Prodejna z ulice, nad vchodem světelná reklama a hodiny.", "Prodejna z ulice", "Praha"),
    "bowling-herna": ("Bowlingová dráha s obrazovkami nad dráhami, dřevěným krovem a barevnými koulemi na podavači.", "Bowlingová dráha a herna", ""),
    "jidelna-zs-01": ("Školní jídelna s barevnými židlemi a kruhovými svítidly zapuštěnými do akustického podhledu.", "Jídelna ZŠ", "Divišov"),
    "jidelna-zs-02": ("Pohled do jídelny se dvěma řadami stolů a rovnoměrně rozmístěnými stropními svítidly.", "Jídelna ZŠ, rozmístění svítidel", "Divišov"),
    "jidelna-zs-03": ("Jídelna s dřevěnými trámy a bodovými svítidly v akustickém podhledu, v pozadí nástěnné hodiny.", "Jídelna ZŠ, pohled do sálu", "Divišov"),
    "detail-jidelna-zidle": ("Modré a oranžové židle u stolů ve školní jídelně.", "Jídelna po rekonstrukci", "Divišov"),
    "detail-tramy": ("Dřevěné trámy a bodová svítidla v akustickém podhledu jídelny.", "Podhled s bodovými svítidly", "Divišov"),
    "sal-hvezdny-podhled": ("Sál s parketami, jevištní oponou, černým perforovaným podhledem s desítkami bodových svítidel a jevištními reflektory na stěnách.", "Sál s jevištním osvětlením", ""),
    "hotel-ulice": ("Hotel s restaurací z ulice, na fasádě označení hotelu.", "Hotel z ulice", ""),
    "hotel-01": ("Hotel s restaurací, zahradou a venkovním bazénem.", "Hotel s restaurací", ""),
    "detail-hotel-bazen": ("Venkovní bazén se zahradou před hotelem s restaurací.", "Zahrada s bazénem", ""),
    "objekt-drevena-fasada": ("Objekt s dřevěnou fasádou, balkony a upravenou zahradou.", "Objekt s dřevěnou fasádou", ""),
    "areal-cesta": ("Příjezdová cesta k areálu s několika objekty, po stranách stromy.", "Areál s několika objekty", ""),
    "hygienicke-zazemi-01": ("Dokončená sprcha s obkladem a skleněnou zástěnou v hygienickém zázemí provozovny.", "Hygienické zázemí provozovny", ""),
    "hygienicke-zazemi-02": ("Předsíň hygienického zázemí s otevřenými dveřmi do WC a průhledem do haly.", "Hygienické zázemí, předsíň", ""),
    "detail-sprcha": ("Sprchová baterie a skleněná zástěna v obloženém hygienickém zázemí.", "Sprcha, detail", ""),
}

groups = [
    ("Rozvaděče a rozvody", ["rozvadec-jistice", "rozvadec-svorkovnice", "rozvadece-skrine", "rozvadece-provoz", "rozvadec-01", "detail-stitky"]),
    ("Haly, dílny a sklady", ["hala-01", "hala-03", "detail-svitidla", "hala-02", "hala-04", "detail-prostup", "truhlarska-dilna", "dilna-osvetleni", "sklad-plosina", "detail-okna"]),
    ("Prodejny a provozovny", ["pekarstvi-prodejna", "pekarstvi-pece", "pekarstvi-pult", "pekarstvi-provoz", "pekarstvi-vyrobna", "pekarstvi-hnetace", "prodejna-ulice", "bowling-herna"]),
    ("Veřejné budovy", ["jidelna-zs-01", "jidelna-zs-03", "detail-jidelna-zidle", "jidelna-zs-02", "detail-tramy", "sal-hvezdny-podhled"]),
    ("Objekty a zázemí", ["hotel-ulice", "hotel-01", "detail-hotel-bazen", "objekt-drevena-fasada", "areal-cesta", "hygienicke-zazemi-01", "hygienicke-zazemi-02", "detail-sprcha"]),
]

hero = ["rozvadec-jistice", "pekarstvi-prodejna", "hala-01", "bowling-herna", "sal-hvezdny-podhled"]


def dims(f):
    with Image.open(os.path.join(D, f + ".jpg")) as im:
        return im.size


missing = [f for f in meta if not os.path.exists(os.path.join(D, f + ".jpg"))]
assert not missing, missing
listed = set(f for _, fs in groups for f in fs)
assert listed == set(meta), listed ^ set(meta)

L = []
L.append("/** Fotografie. Rozmery jsou nactene ze souboru skriptem scripts/gen-photos.py. */")
L.append("export type Photo = {")
L.append("  file: string;")
L.append("  w: number;")
L.append("  h: number;")
L.append("  alt: string;")
L.append("  caption: string;")
L.append("  place?: string;")
L.append("};")
L.append("")


def emit(files, indent):
    lines = []
    for f in files:
        w, h = dims(f)
        alt, cap, place = meta[f]
        lines.append(indent + "{")
        lines.append(indent + '  file: "' + f + '",')
        lines.append(indent + "  w: " + str(w) + ",")
        lines.append(indent + "  h: " + str(h) + ",")
        lines.append(indent + '  alt: "' + alt + '",')
        lines.append(indent + '  caption: "' + cap + '",')
        if place:
            lines.append(indent + '  place: "' + place + '",')
        lines.append(indent + "},")
    return lines


L.append("/** Snimky pro uvodni prehravac na domovske strance. */")
L.append("export const heroSlides: Photo[] = [")
L += emit(hero, "  ")
L.append("];")
L.append("")
L.append("export const photoGroups: { title: string; photos: Photo[] }[] = [")
for title, files in groups:
    L.append("  {")
    L.append('    title: "' + title + '",')
    L.append("    photos: [")
    L += emit(files, "      ")
    L.append("    ],")
    L.append("  },")
L.append("];")
L.append("")
L.append("export const allPhotos: Photo[] = photoGroups.flatMap((g) => g.photos);")
L.append("")
L.append("export function photo(file: string): Photo {")
L.append("  const found = allPhotos.find((p) => p.file === file);")
L.append('  if (!found) throw new Error("Neznama fotografie: " + file);')
L.append("  return found;")
L.append("}")
L.append("")

io.open("lib/photos.ts", "w", encoding="utf-8", newline="\n").write("\n".join(L))
print("hotovo, fotek:", len(meta))
