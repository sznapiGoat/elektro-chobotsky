"use client";

import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, Phone, X } from "@phosphor-icons/react/dist/ssr";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-colors duration-300 ease-out",
          scrolled
            ? "border-b border-ink-600/80 bg-ink-950/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name}, na začátek stránky`}
          >
            <span className="block h-6 w-[3px] bg-signal transition-[height] duration-300 ease-out group-hover:h-7" />
            <span className="font-display text-[15px] font-semibold uppercase tracking-[0.14em] text-steel-100">
              Chobotský
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-steel-400 sm:block">
              elektro / hromosvody
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Hlavní navigace">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-[13px] text-steel-300 transition-colors hover:text-steel-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 border border-ink-500 px-4 py-2.5 font-mono text-[13px] text-steel-100 transition-colors hover:border-signal hover:text-white sm:flex"
            >
              <Phone size={15} className="text-signal-text" />
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Otevřít menu"
              className="flex h-10 w-10 items-center justify-center border border-ink-500 text-steel-200 transition-colors hover:border-steel-400 xl:hidden"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobilní menu je samostatná fixed vrstva, ne potomek blurované hlavičky. */}
      {menuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-ink-950 xl:hidden"
        >
          <div className="shell flex h-[68px] items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel-400">
              Navigace
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Zavřít menu"
              className="flex h-10 w-10 items-center justify-center border border-ink-500 text-steel-200"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="shell mt-6 flex flex-col" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-t border-ink-600/70 py-5 font-display text-xl font-semibold uppercase tracking-[0.06em] text-steel-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              onClick={() => setMenuOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 bg-signal py-4 font-mono text-base text-white"
            >
              <Phone size={17} />
              {site.phone}
            </a>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
}
