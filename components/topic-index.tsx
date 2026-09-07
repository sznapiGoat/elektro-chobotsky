"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Obsah stránky. Zvýrazňuje část, ve které uživatel právě je.
 * Sleduje se přes IntersectionObserver, ne přes scroll listener.
 */
export function TopicIndex({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = React.useState(items[0]?.id ?? "");

  React.useEffect(() => {
    if (items.length === 0) return;

    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => n !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav aria-label="Obsah stránky">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
        Na této stránce
      </p>
      <ol className="mt-4 border-t border-line">
        {items.map((item, i) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="border-b border-line">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group grid grid-cols-[1.75rem_1fr] items-baseline gap-1 py-3 text-[13.5px] leading-snug transition-colors",
                  isActive ? "text-ink" : "text-ink-500 hover:text-ink"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11.5px] transition-colors",
                    isActive ? "text-signal" : "text-ink-300"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "border-b pb-0.5 transition-colors",
                    isActive ? "border-signal" : "border-transparent"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
