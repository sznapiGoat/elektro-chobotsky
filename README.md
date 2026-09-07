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
| `/elektroinstalace` | Postup zakázky jako svislá osa, rozcestník podstránek, fotopásy |
| `/hromosvody` | Úzký textový sloupec, poznámky k normám na okraji |
| `/revize` | Oprávnění nahoře, obsah revize jako číslované články |
| `/zabezpecovaci-systemy` | Certifikát vlevo, komentář vpravo |
| `/elektricke-vytapeni` | Srovnávací tabulka variant |
| `/reference` | Filtrovatelná tabulka 25 objektů s náhledem fotografie u řádku |
| `/fotogalerie` | 38 fotografií v pěti tématických skupinách, sloupcová sazba, lightbox |
| `/certifikaty` | Registr dokladů s náhledy |
| `/o-nas` | Text v úzkém sloupci, doložené milníky na okraji |
| `/cena` | Co cenu určuje, jak vypadá nabídka, na co si dát pozor, dotazy k ceně |
| `/kontakt` | Telefon jako největší prvek stránky, formulář |
| `/ochrana-osobnich-udaju` | Zpracování údajů z poptávky |

Nabídka služeb je v hlavičce rozbalovací. Najetím myší na položku se pod
hlavičkou otevře panel s pěti obory a jejich podstránkami, u klávesnice se
otevře fokusem a zavře klávesou Escape. Na mobilu jsou obory vypsané pod
položkou v celoobrazovkovém menu.

Každý obor má vlastní podstránky, celkem dvanáct, na adresách
`/{obor}/{tema}`. Obsah je v `lib/topics.ts`, kde si každé téma vybírá
skladbu bloků (text, výčet, kroky, tabulka, technické údaje, poznámka,
fotografie). Bloky renderuje `components/topic-page.tsx`, takže se stránky
neopakují ve stejném rytmu. Nadpisy bloků plní obsah stránky vlevo, který
zvýrazňuje část, ve které uživatel právě je.

Staré adresy `/reference`, `/fotogalerie`, `/certifikaty`, `/kontakt`
a `/nabidka-sluzeb` zůstaly zachované jako skutečné stránky, přesměrování
tedy není potřeba. `app/sitemap.ts` generuje sitemap ze stejných dat.

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

## Poptávkový formulář

Formulář na `/kontakt` posílá data na `app/api/poptavka/route.ts`, odtud jdou
e-mailem přes Resend. Potřebuje proměnné podle `.env.example`:

```
RESEND_API_KEY=...
CONTACT_FROM=poptavka@vase-domena.cz   # doména musí být v Resendu ověřená
CONTACT_TO=chobotskymiroslav@seznam.cz
```

Bez nich vrátí API 503 a formulář nabídne odeslání přes e-mailový klient
uživatele, takže poptávka nikdy nezmizí do prázdna. Ochranu proti robotům
řeší skryté pole a kontrola času vyplnění, ne captcha.

## Mobil

Rozvržení se kontroluje skriptem `node scripts/shots.mjs <port> mobile <cesty>`,
který jede přes puppeteer-core na nainstalovaném Chrome, protože headless
přepínač `--window-size` na Windows neumí jít pod 500 px. Skript vypíše výšku
dokumentu, přetékající prvky a klikatelné cíle menší než 40 px.
`scripts/nav-check.mjs` kontroluje, že navigace zůstává na jednom řádku.

Tabulky se pod `sm` rozpadají do bloků komponentou `components/data-table.tsx`,
vodorovné rolování tabulky je na telefonu k ničemu. Pásy fotek jsou na mobilu
ve dvou sloupcích, obsah stránky u podstránek se na mobilu nezobrazuje.

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
- doplnit na stránku Cena skutečné cenové rozsahy nebo alespoň sazbu za
  hodinu. Stránka dnes vysvětluje, jak cena vzniká, ale žádné číslo neuvádí,
  protože ho neznáme.
- nastavit proměnné pro odesílání poptávek, jinak formulář jede na náhradní
  režim přes e-mailového klienta
- doplnit otevírací dobu do strukturovaných dat, až ji budeme znát
