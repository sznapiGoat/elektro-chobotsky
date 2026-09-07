const map: Record<string, string> = {
  á: "a", č: "c", ď: "d", é: "e", ě: "e", í: "i", ň: "n", ó: "o",
  ř: "r", š: "s", ť: "t", ú: "u", ů: "u", ý: "y", ž: "z",
};

/** Vytvoří id pro nadpis bloku, bez diakritiky, kvůli odkazům v obsahu. */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
