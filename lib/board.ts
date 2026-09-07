/**
 * Popisky k fotografii otevřeného rozvaděče. Souřadnice jsou v procentech
 * šířky a výšky snímku public/foto/rozvadec-jistice.jpg a odpovídají tomu,
 * co je na něm skutečně vidět.
 */
export type BoardSpot = {
  id: string;
  x: number;
  y: number;
  title: string;
  text: string;
};

export const boardSpots: BoardSpot[] = [
  {
    id: "pe",
    x: 52,
    y: 6,
    title: "Ochranné vodiče",
    text: "Zeleno-žluté vodiče svedené do svorkovnice v horní části skříně. Ochranný vodič je to, co při poruše odvede proud a drží kostru zařízení na potenciálu země. Na revizi se u něj měří spojitost, tedy jestli je propojený po celé délce.",
  },
  {
    id: "privod",
    x: 25,
    y: 15,
    title: "Přívod",
    text: "Třípólové přístroje v horní řadě jistí přívod do rozvaděče a hlavní odbočky. Jejich hodnota vychází z toho, co unese přípojka a co je smluvně sjednané s distributorem, ne z počtu obvodů v domě.",
  },
  {
    id: "chranic",
    x: 24,
    y: 61,
    title: "Proudový chránič",
    text: "Přístroj s testovacím tlačítkem na začátku každé řady. Vybaví ve chvíli, kdy část proudu teče jinou cestou než zpátky vodičem, typicky přes člověka. Na revizi se u něj měří vybavovací čas, protože chránič, který nevypne včas, je jen ozdoba.",
  },
  {
    id: "jistice",
    x: 48,
    y: 47,
    title: "Jističe okruhů",
    text: "Řady jednopólových jističů, jeden na každý světelný nebo zásuvkový obvod. Hodnota se volí podle průřezu vodiče, který za jističem následuje. Silnější jistič na tenčím kabelu je nejčastější chyba, kterou u starších instalací najdeme.",
  },
  {
    id: "svorkovnice",
    x: 84,
    y: 50,
    title: "Svorkovnice a číslování",
    text: "Svislý pás svorkovnic u pravé stěny a žluté popisky na jednotlivých vodičích. Díky číslování se dá o rok později dohledat, kam který kabel vede, bez rozebírání instalace. Bez popisků je každá další úprava hádání.",
  },
];
