import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-600/70 bg-ink-950">
      <div className="shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-5 w-[3px] bg-signal" />
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-steel-200">
            {site.name}
          </span>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Navigace v zápatí"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-steel-400 transition-colors hover:text-steel-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[11px] text-steel-400">
          IČ {site.ico} / {site.address.street}, {site.address.city}
        </p>
      </div>
    </footer>
  );
}
