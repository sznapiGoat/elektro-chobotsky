import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function About() {
  const years = new Date().getFullYear() - site.founded;

  const facts = [
    { label: "Rok založení", value: "1995" },
    { label: "Let praxe v oboru", value: String(years) },
    { label: "Oblast působení", value: site.area },
    { label: "IČ", value: site.ico },
  ];

  return (
    <section id="o-nas" className="scroll-mt-24 py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="max-w-[26ch] font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl">
              O nás
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.75] text-steel-200">
              {site.about}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.75] text-steel-400">
              Práci vedeme od prvního výkopu přípojky až po revizní zprávu, kterou
              předáme spolu s dokumentací. Stejná osoba, která instalaci provedla,
              za ni ručí i po letech.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <dl className="border-t border-ink-600/70">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6 border-b border-ink-600/70 py-5"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
                    {f.label}
                  </dt>
                  <dd className="font-display text-xl font-semibold tracking-[-0.01em] text-steel-100">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
