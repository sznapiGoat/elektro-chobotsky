import Image from "next/image";
import { photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Pás fotografií uvnitř stránky. Sloupce se řídí počtem snímků,
 * popisky jsou pod snímkem, nikdy přes něj.
 */
export function PhotoBand({
  files,
  ratio = "aspect-[4/3]",
  full = false,
  className,
}: {
  files: string[];
  ratio?: string;
  full?: boolean;
  className?: string;
}) {
  // Na mobilu dva sloupce, jinak by pás fotek zabral celou obrazovku na snímek.
  const cols =
    files.length === 1
      ? "grid-cols-1"
      : files.length === 2
        ? "grid-cols-2"
        : files.length === 4
          ? "grid-cols-2 lg:grid-cols-4"
          : "grid-cols-2 sm:grid-cols-3";

  return (
    <div className={cn(full ? "" : "shell", className)}>
      <div className={cn("grid gap-3", cols)}>
        {files.map((file) => {
          const p = photo(file);
          return (
            <figure key={file}>
              <div className={cn("relative w-full border border-line", ratio)}>
                <Image
                  src={`/foto/${p.file}.jpg`}
                  alt={p.alt}
                  fill
                  sizes={
                    files.length === 1
                      ? "(max-width: 1240px) 100vw, 1240px"
                      : "(max-width: 640px) 46vw, 33vw"
                  }
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
                {p.caption}
                {p.place ? <span className="text-ink-300">, {p.place}</span> : null}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
