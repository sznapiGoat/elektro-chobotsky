"use client";

import * as React from "react";
import Image from "next/image";
import { photo } from "@/lib/photos";
import { references, referenceTypes, type ReferenceType } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = ReferenceType | "Vše";

const filters: Filter[] = ["Vše", ...referenceTypes];

const withPhoto = references.filter((r) => r.photo);

export function ReferenceTable() {
  const [filter, setFilter] = React.useState<Filter>("Vše");
  const [hovered, setHovered] = React.useState<string | null>(null);

  const rows =
    filter === "Vše" ? references : references.filter((r) => r.type === filter);

  const counts = React.useMemo(() => {
    const map = new Map<Filter, number>([["Vše", references.length]]);
    referenceTypes.forEach((t) =>
      map.set(t, references.filter((r) => r.type === t).length)
    );
    return map;
  }, []);

  const shown =
    references.find((r) => r.name === hovered && r.photo) ?? withPhoto[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 border-b border-line pb-5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "border px-3 py-1.5 text-[13px] transition-colors",
                filter === f
                  ? "border-ink bg-ink text-paper"
                  : "border-line-strong text-ink-700 hover:border-ink hover:text-ink"
              )}
            >
              {f}
              <span
                className={cn(
                  "ml-2 font-mono text-[11.5px]",
                  filter === f ? "text-paper-300" : "text-ink-500"
                )}
              >
                {counts.get(f)}
              </span>
            </button>
          ))}
        </div>

        <table className="mt-8 w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-line-strong">
              <th className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500">
                Objekt
              </th>
              <th className="hidden py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500 sm:table-cell">
                Místo
              </th>
              <th className="hidden py-2.5 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500 md:table-cell">
                Typ
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                onMouseEnter={() => setHovered(r.name)}
                onFocus={() => setHovered(r.name)}
                className={cn(
                  "border-b border-line align-top transition-colors",
                  r.photo ? "hover:bg-paper-200" : ""
                )}
              >
                <td className="py-4 pr-6 text-[15px] leading-snug text-ink">
                  <span className="flex items-baseline gap-2">
                    {r.name}
                    {r.photo ? (
                      <span
                        aria-hidden
                        className="font-mono text-[11px] text-ink-300"
                      >
                        foto
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-1 block text-[13px] text-ink-500 sm:hidden">
                    {[r.place, r.type].filter(Boolean).join(", ")}
                  </span>
                </td>
                <td className="hidden py-4 pr-6 text-[14px] text-ink-700 sm:table-cell">
                  {r.place}
                </td>
                <td className="hidden py-4 text-[14px] text-ink-700 md:table-cell">
                  {r.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {rows.length === 0 ? (
          <p className="py-10 text-[15px] text-ink-500">
            V této kategorii nemáme uvedenou žádnou realizaci.
          </p>
        ) : null}
      </div>

      {/* Náhled fotografie k objektu, na kterém je kurzor. */}
      <aside className="hidden lg:col-span-4 lg:block">
        <div className="lg:sticky lg:top-24">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
            Náhled
          </p>
          {shown?.photo ? (
            <figure className="mt-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                {withPhoto.map((r) => {
                  const p = photo(r.photo as string);
                  const isShown = r.name === shown.name;
                  return (
                    <Image
                      key={r.name}
                      src={`/foto/${p.file}.jpg`}
                      alt={isShown ? p.alt : ""}
                      fill
                      sizes="(max-width: 1024px) 0px, 30vw"
                      className={cn(
                        "object-cover transition-opacity duration-500 ease-out",
                        isShown ? "opacity-100" : "opacity-0"
                      )}
                    />
                  );
                })}
              </div>
              <figcaption className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
                {shown.name}
                {shown.place ? (
                  <span className="text-ink-500">, {shown.place}</span>
                ) : null}
              </figcaption>
            </figure>
          ) : null}
          <p className="mt-4 max-w-[34ch] text-[12.5px] leading-relaxed text-ink-500">
            Fotografii máme u {withPhoto.length} z {references.length} objektů.
            Přejezdem po řádku se náhled přepne.
          </p>
        </div>
      </aside>
    </div>
  );
}
