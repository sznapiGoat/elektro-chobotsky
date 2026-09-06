import Link from "next/link";
import { fields, site } from "@/lib/site";

const pages = [
  { label: "Nabídka služeb", href: "/nabidka-sluzeb" },
  { label: "Reference", href: "/reference" },
  { label: "Fotogalerie", href: "/fotogalerie" },
  { label: "Certifikáty", href: "/certifikaty" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-200">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-[15px] font-semibold text-ink">{site.name}</p>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
            {site.address.street}
            <br />
            {site.address.city}
          </p>
          <p className="mt-3 font-mono text-[12.5px] leading-relaxed text-ink-500">
            IČ {site.ico}
            <br />
            DIČ {site.dic}
          </p>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Obory
          </h2>
          <ul className="mt-4 space-y-2.5">
            {fields.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/${f.slug}`}
                  className="text-[13.5px] text-ink-700 transition-colors hover:text-signal"
                >
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Stránky
          </h2>
          <ul className="mt-4 space-y-2.5">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-[13.5px] text-ink-700 transition-colors hover:text-signal"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            Kontakt
          </h2>
          <a
            href={site.phoneHref}
            className="mt-4 block font-mono text-xl text-ink transition-colors hover:text-signal"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block break-all text-[13.5px] text-ink-700 transition-colors hover:text-signal"
          >
            {site.email}
          </a>
          <p className="mt-4 text-[13.5px] text-ink-500">{site.area}</p>
        </div>
      </div>
    </footer>
  );
}
