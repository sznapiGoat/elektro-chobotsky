import { cn } from "@/lib/utils";

export type DataTableProps = {
  head: string[];
  rows: React.ReactNode[][];
  /** Sloupec, který na mobilu slouží jako titulek bloku. */
  titleIndex?: number;
  className?: string;
  minWidth?: string;
};

/**
 * Tabulka, která se na mobilu rozpadne na bloky. Vodorovné rolování
 * čtyřsloupcové tabulky je na telefonu k ničemu, proto se pod sm
 * vypisuje každý řádek pod sebe s popiskem sloupce.
 */
export function DataTable({
  head,
  rows,
  titleIndex = 0,
  className,
  minWidth = "min-w-[42rem]",
}: DataTableProps) {
  return (
    <div className={className}>
      {/* Mobil: řádek jako blok */}
      <ul className="sm:hidden">
        {rows.map((row, i) => (
          <li key={i} className="border-t border-line py-4 last:border-b">
            <p className="text-[15px] font-medium leading-snug text-ink">
              {row[titleIndex]}
            </p>
            <dl className="mt-2.5 space-y-1.5">
              {row.map((cell, j) =>
                j === titleIndex ? null : (
                  <div key={j} className="grid grid-cols-[7.5rem_1fr] gap-3">
                    <dt className="font-mono text-[10.5px] uppercase leading-5 tracking-[0.14em] text-ink-500">
                      {head[j]}
                    </dt>
                    <dd className="text-[14px] leading-snug text-ink-700">{cell}</dd>
                  </div>
                )
              )}
            </dl>
          </li>
        ))}
      </ul>

      {/* Od sm výš skutečná tabulka */}
      <div className="hidden overflow-x-auto sm:block">
        <table className={cn("w-full border-collapse text-left", minWidth)}>
          <thead>
            <tr className="border-b border-line-strong">
              {head.map((h) => (
                <th
                  key={h}
                  className="py-2.5 pr-6 font-mono text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line align-top">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "py-4 pr-6 text-[14px] leading-snug",
                      j === titleIndex ? "font-medium text-ink" : "text-ink-700"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
