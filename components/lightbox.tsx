"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react/dist/ssr";
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
  /** Index otevřené položky, null zavře dialog. */
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
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">
            {item ? item.title : "Náhled"}
          </Dialog.Title>

          <div className="flex items-center justify-between border-b border-ink-600/70 px-4 py-3 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel-400">
              {index !== null ? `${index + 1} / ${items.length}` : ""}
            </p>
            <Dialog.Close
              aria-label="Zavřít náhled"
              className="flex h-9 w-9 items-center justify-center rounded border border-ink-600 text-steel-300 transition-colors hover:border-steel-400 hover:text-steel-100"
            >
              <X size={16} />
            </Dialog.Close>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-16">
            {item ? (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="100vw"
                className="max-h-full w-auto max-w-full object-contain"
                priority
              />
            ) : null}

            <NavButton side="left" onClick={() => step(-1)} />
            <NavButton side="right" onClick={() => step(1)} />
          </div>

          <div className="border-t border-ink-600/70 px-4 py-4 sm:px-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-steel-100">
              {item?.title}
            </p>
            {item?.meta ? (
              <p className="mt-1 font-mono text-xs text-steel-400">{item.meta}</p>
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NavButton({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Předchozí" : "Další"}
      className={cn(
        "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded border border-ink-600 bg-ink-900/80 text-steel-300 transition-colors hover:border-steel-400 hover:text-steel-100",
        side === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"
      )}
    >
      {side === "left" ? <CaretLeft size={18} /> : <CaretRight size={18} />}
    </button>
  );
}
