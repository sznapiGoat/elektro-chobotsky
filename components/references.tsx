import { Reveal } from "@/components/reveal";
import { referenceGroups } from "@/lib/site";

const total = referenceGroups.reduce((sum, g) => sum + g.items.length, 0);

export function References() {
  return (
    <section id="reference" className="scroll-mt-24 py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl">
                Reference
              </h2>
              <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-steel-300">
                Výběr z realizací pro obce, průmysl, provozovny i soukromé
                investory. Uvedeno {total} objektů, ve skutečnosti jich je víc.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          {referenceGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-text">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 border-t border-ink-600/70 pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-snug text-steel-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
