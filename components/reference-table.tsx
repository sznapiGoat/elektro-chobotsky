"use client";

import * as React from "react";
import { references, referenceTypes, type ReferenceType } from "@/lib/site";
import { cn } from "@/lib/utils";

type Filter = ReferenceType | "Vše";

const filters: Filter[] = ["Vše", ...referenceTypes];

export function ReferenceTable() {
  const [filter, setFilter] = React.useState<Filter>("Vše");

  const rows =
    filter === "Vše" ? references : references.filter((r) => r.type === filter);

  const counts = React.useMemo(() => {
    const map = new Map<Filter, number>([["Vše", references.length]]);
    referenceTypes.forEach((t) =>
      map.set(t, references.filter((r) => r.type === t).length)
    );
    return map;
  }, []);

  return (
    <div>
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
            <tr key={r.name} className="border-b border-line align-top">
              <td className="py-4 pr-6 text-[15px] leading-snug text-ink">
                {r.name}
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
  );
}
