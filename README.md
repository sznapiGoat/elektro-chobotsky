# Miroslav Chobotský, elektroinstalace a hromosvody

Redesign webu `chobotsky.webnode.cz`. Dvanáct podstránek, obsah přebraný
z původního webu, vizuál postavený jako technický list.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS 3
- Framer Motion, použitá jen na dvou místech (nájezd úvodního bloku a fotopásu)
- Radix Dialog jako základ lightboxu, tlačítka ve stylu shadcn/ui (`components/ui`)
- Bez ikonových knihoven. Navigační prvky lightboxu jsou textové.

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Struktura

| Adresa | Rozvržení |
|---|---|
| `/` | Fotografický hero s přepínáním snímků, obory jako obsah, pás z realizací, tabulka oprávnění |
| `/nabidka-sluzeb` | Úplný výčet služeb z původního webu, vpravo rejstřík oborů |
| `/elektroinstalace` | Postup zakázky jako svislá osa, fotopás, ukázky referencí |
| `/hromosvody` | Úzký textový sloupec, poznámky k normám na okraji |
| `/revize` | Oprávnění nahoře, obsah revize jako číslované články |
| `/zabezpecovaci-systemy` | Certifikát vlevo, komentář vpravo |
| `/elektricke-vytapeni` | Srovnávací tabulka variant |
| `/reference` | Filtrovatelná tabulka 25 objektů |
| `/fotogalerie` | 38 fotografií v pěti tématických skupinách, sloupcová sazba, lightbox |
| `/certifikaty` | Registr dokladů s náhledy |
| `/o-nas` | Text v úzkém sloupci, doložené milníky na okraji |
| `/kontakt` | Telefon jako největší prvek stránky, formulář |

Staré adresy `/reference`, `/fotogalerie`, `/certifikaty`, `/kontakt`
a `/nabidka-sluzeb` zůstaly zachované jako skutečné stránky, přesměrování
tedy není potřeba.

## Design systém

- Papírový podklad `paper` #F2F3F1, grafitová `ink` #131A20, vlasové linky
  `line`. Jediný akcent je signální červená `signal` #A82F26, použitá na
  aktivní položku navigace, tlačítko, letopočty milníků a svislé pruhy
  u poznámek.
- Nulové zaoblení hran v celé stránce. Panely se používají jen tam, kde
  ohraničení něco znamená.
- Typografie: Golos Text pro nadpisy i text, Spline Sans Mono pro čísla,
  evidenční čísla a hlavičky tabulek.
- Mono kapitálky jsou vyhrazené hlavičkám tabulek, nikde jinde. Mono bez
  kapitálek nese telefon, evidenční čísla a letopočty.
- Úvodní hero je fotografie s tmavým zástinem. Snímky se samy přepínají po
  sedmi sekundách, uživatel je může přepnout kliknutím na popisek nebo
  šipkami. Automatika se zastaví při hoveru, focusu a při prefers-reduced-motion.

## Fotografie

Všech 38 snímků je v `public/foto`. Třicet je stažených z původní galerie na
Webnode, osm jsou detailní výřezy z těch samých snímků, vyrobené kvůli tomu,
aby bylo z čeho stavět pásy uvnitř stránek.

Metadata fotografií generuje `python scripts/gen-photos.py` do `lib/photos.ts`.
Skript čte rozměry přímo ze souborů, popisky a alt texty jsou napsané ručně
podle toho, co je na snímku skutečně vidět. Po přidání fotky doplňte záznam
do `meta` a `groups` ve skriptu a spusťte ho znovu.

## Obsah

Data jsou v `lib/site.ts`:

- `site` kontakt, IČ, DIČ, oblast působení. `areaIn` je skloňovaná varianta
  oblasti pro vsazení do věty.
- `fields` pět oborů, `originalServices` původní devítibodový výčet
- `credentials` čtyři nejsilnější doklady, `certificates` všech deset skenů
- `references` 25 realizací rozdělených na objekt, místo a typ
- `gallery` fotografie s alt texty popsanými podle skutečného obsahu snímků
- `milestones` letopočty doložené dokumenty

## Co je potřeba doplnit před nasazením

- ověřit u klienta, ke kterému objektu patří fotografie hotelu s bazénem
  (nyní má neutrální popisek)
- doplnit doménu do `metadataBase` v `app/layout.tsx`
- zvážit odeslání formuláře přes API místo `mailto:`
- nechat klientem zkontrolovat texty na stránkách oborů, popisy postupů
  vycházejí z jeho oprávnění, ne z jeho slov
- ověřit u klienta přiřazení fotografií k objektům. Popisky říkají jen to, co
  je na snímku vidět, místo je uvedené pouze tam, kde je zřejmé.
- vyžádat si fotografie hromosvodů a topných kabelů, na tyto dva obory nemáme
  ani jeden snímek
