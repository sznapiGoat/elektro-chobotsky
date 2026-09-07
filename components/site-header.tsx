"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldPaths = [
  "/elektroinstalace",
  "/hromosvody",
  "/revize",
  "/zabezpecovaci-systemy",
  "/elektricke-vytapeni",
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  // Na domovské stránce hlavička leží na fotografii, dokud uživatel neodroluje.
  const onHome = pathname === "/";
  const overlay = onHome && !scrolled;

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (onHome) setScrolled(value > 80);
  });

  React.useEffect(() => {
    setScrolled(onHome ? window.scrollY > 80 : true);
  }, [onHome]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 border-b transition-colors duration-500 ease-out",
          overlay
            ? "border-white/15 bg-transparent"
            : "border-line bg-paper/95 backdrop-blur-[2px]"
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 lg:gap-8">
          <Link href="/" className="flex items-baseline gap-3">
            <span
              className={cn(
                "text-[15px] font-semibold tracking-[-0.01em] transition-colors",
                overlay ? "text-white" : "text-ink"
              )}
            >
              <span className="sm:hidden">{site.shortName}</span>
              <span className="hidden sm:inline">{site.name}</span>
            </span>
            <span
              className={cn(
                "hidden text-[12px] transition-colors lg:block",
                overlay ? "text-white/70" : "text-ink-500"
              )}
            >
              {site.trade}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Hlavní navigace">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href === "/nabidka-sluzeb" &&
                  fieldPaths.some((f) => pathname.startsWith(f)));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b py-1 text-[13.5px] transition-colors",
                    active && "border-signal",
                    overlay
                      ? cn(
                          "text-white/80 hover:text-white",
                          active ? "text-white" : "border-transparent hover:border-white/40"
                        )
                      : cn(
                          "text-ink-700 hover:text-ink",
                          active ? "text-ink" : "border-transparent hover:border-line-strong"
                        )
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className={cn(
                "font-mono text-[13.5px] transition-colors",
                overlay ? "text-white hover:text-white/70" : "text-ink hover:text-signal"
              )}
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "border px-3 py-1.5 text-[13px] transition-colors lg:hidden",
                overlay
                  ? "border-white/50 text-white hover:border-white"
                  : "border-line-strong text-ink hover:border-ink"
              )}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobilní navigace je samostatná fixed vrstva mimo hlavičku. */}
      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-paper lg:hidden">
          <div className="shell flex h-16 items-center justify-between border-b border-line">
            <span className="text-[15px] font-semibold text-ink">{site.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="border border-line-strong px-3 py-1.5 text-[13px] text-ink"
            >
              Zavřít
            </button>
          </div>
          <nav className="shell py-4" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-line py-4 text-xl font-semibold tracking-[-0.01em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-8 block bg-signal px-5 py-4 text-center font-mono text-base text-white"
            >
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
