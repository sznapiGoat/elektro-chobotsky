"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { ServicesMenu } from "@/components/services-menu";
import { fields, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldPaths = fields.map((f) => `/${f.slug}`);

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);
  const pathname = usePathname();

  // Na domovské stránce hlavička leží na fotografii, dokud uživatel neodroluje.
  // Při rozbalené nabídce se přepne na plnou, aby panel na něčem stál.
  const onHome = pathname === "/";
  const overlay = onHome && !scrolled && !servicesOpen;

  React.useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
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

  React.useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  React.useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    []
  );

  const openServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  // Krátká prodleva, aby nabídka nezmizela při přejezdu přes mezeru.
  const closeServices = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  };

  return (
    <>
      <header
        onMouseLeave={closeServices}
        className={cn(
          "sticky top-0 z-30 border-b transition-colors duration-500 ease-out",
          overlay
            ? "border-white/15 bg-transparent"
            : "border-line bg-paper/95 backdrop-blur-[2px]"
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 lg:gap-8">
          <Link href="/" className="-my-2 flex items-baseline gap-3 py-2">
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
                "hidden text-[12px] transition-colors xl:block",
                overlay ? "text-white/70" : "text-ink-500"
              )}
            >
              {site.trade}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Hlavní navigace">
            {nav.map((item) => {
              const isServices = item.href === "/nabidka-sluzeb";
              const active =
                pathname === item.href ||
                (isServices && fieldPaths.some((f) => pathname.startsWith(f)));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={isServices ? openServices : undefined}
                  onFocus={isServices ? openServices : closeServices}
                  aria-expanded={isServices ? servicesOpen : undefined}
                  className={cn(
                    "flex items-center gap-1.5 border-b py-1 text-[13.5px] transition-colors",
                    (active || (isServices && servicesOpen)) && "border-signal",
                    overlay
                      ? cn(
                          "text-white/80 hover:text-white",
                          active
                            ? "text-white"
                            : "border-transparent hover:border-white/40"
                        )
                      : cn(
                          "text-ink-700 hover:text-ink",
                          active
                            ? "text-ink"
                            : "border-transparent hover:border-line-strong"
                        )
                  )}
                >
                  {item.label}
                  {isServices ? (
                    <span
                      aria-hidden
                      className={cn(
                        "font-mono text-[10px] leading-none transition-transform duration-300 ease-out",
                        servicesOpen ? "rotate-180" : ""
                      )}
                    >
                      &#9662;
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className={cn(
                "-my-3 py-3 font-mono text-[13.5px] transition-colors",
                overlay ? "text-white hover:text-white/70" : "text-ink hover:text-signal"
              )}
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "border px-3.5 py-2.5 text-[13px] transition-colors lg:hidden",
                overlay
                  ? "border-white/50 text-white hover:border-white"
                  : "border-line-strong text-ink hover:border-ink"
              )}
            >
              Menu
            </button>
          </div>
        </div>

        <AnimatePresence>
          {servicesOpen ? (
            <ServicesMenu onNavigate={() => setServicesOpen(false)} />
          ) : null}
        </AnimatePresence>
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
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-line py-4 text-xl font-semibold tracking-[-0.01em] text-ink"
                >
                  {item.label}
                </Link>
                {item.href === "/nabidka-sluzeb" ? (
                  <ul className="border-b border-line py-2">
                    {fields.map((f) => (
                      <li key={f.slug}>
                        <Link
                          href={`/${f.slug}`}
                          className="block py-2.5 pl-4 text-[15px] text-ink-700"
                        >
                          {f.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
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
