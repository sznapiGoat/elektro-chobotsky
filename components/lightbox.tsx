"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  title: string;
  meta?: string;
  w: number;
  h: number;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export function Lightbox({ items, index, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const item = index !== null ? items[index] : null;

  const step = React.useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange]
  );

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) onIndexChange(null);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col bg-paper outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">
            {item ? item.title : "Náhled"}
          </Dialog.Title>

          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
            <p className="font-mono text-[12.5px] text-ink-500">
              {index !== null ? `${index + 1} / ${items.length}` : ""}
            </p>
            <div className="flex items-center gap-2">
              <NavButton label="Předchozí" onClick={() => step(-1)} glyph="←" />
              <NavButton label="Další" onClick={() => step(1)} glyph="→" />
              <Dialog.Close className="ml-2 border border-line-strong px-3 py-1.5 text-[13px] text-ink transition-colors hover:border-ink">
                Zavřít
              </Dialog.Close>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
            {item ? (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="100vw"
                className="max-h-full w-auto max-w-full border border-line object-contain"
                priority
              />
            ) : null}
          </div>

          <div className="shrink-0 border-t border-line px-5 py-4 sm:px-8">
            <p className="text-[14.5px] font-medium text-ink">{item?.title}</p>
            {item?.meta ? (
              <p className="mt-1 font-mono text-[12.5px] text-ink-500">{item.meta}</p>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NavButton({
  label,
  onClick,
  glyph,
}: {
  label: string;
  onClick: () => void;
  glyph: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex h-8 w-8 items-center justify-center border border-line-strong text-[15px] text-ink transition-colors hover:border-ink"
      )}
    >
      <span aria-hidden>{glyph}</span>
    </button>
  );
}
