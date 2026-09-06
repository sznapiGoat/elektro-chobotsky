"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-[2px]">
        <div className="shell flex h-16 items-center justify-between gap-4 lg:gap-8">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
              <span className="sm:hidden">{site.shortName}</span>
              <span className="hidden sm:inline">{site.name}</span>
            </span>
            <span className="hidden text-[12px] text-ink-500 lg:block">
              {site.trade}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Hlavní navigace">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href === "/nabidka-sluzeb" && pathname !== "/" && isFieldPath(pathname));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b py-1 text-[13.5px] transition-colors",
                    active
                      ? "border-signal text-ink"
                      : "border-transparent text-ink-700 hover:border-line-strong hover:text-ink"
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
              className="font-mono text-[13.5px] text-ink transition-colors hover:text-signal"
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="border border-line-strong px-3 py-1.5 text-[13px] text-ink transition-colors hover:border-ink lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobilní navigace je samostatná fixed vrstva mimo blurovanou hlavičku. */}
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

function isFieldPath(pathname: string) {
  return [
    "/elektroinstalace",
    "/hromosvody",
    "/revize",
    "/zabezpecovaci-systemy",
    "/elektricke-vytapeni",
  ].includes(pathname);
}
