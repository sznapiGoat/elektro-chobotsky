import Link from "next/link";

/** Záhlaví stránky oboru. Drobná navigační cesta, titulek, jeden odstavec. */
export function FieldHead({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="shell pb-12 pt-8 lg:pb-16">
        <p className="font-mono text-[11.5px] text-ink-500">
          <Link href="/nabidka-sluzeb" className="transition-colors hover:text-signal">
            Nabídka služeb
          </Link>
          <span className="px-2 text-ink-300">/</span>
          <span className="text-ink-700">{title}</span>
        </p>
        <h1 className="mt-6 max-w-[20ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-measure text-[16px] leading-[1.75] text-ink-700">
          {lead}
        </p>
      </div>
    </section>
  );
}
