import {
  ClipboardText,
  Lightning,
  PlugsConnected,
  ShieldCheck,
  Thermometer,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { services, type ServiceKey } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<ServiceKey, React.ElementType> = {
  plugs: PlugsConnected,
  lightning: Lightning,
  clipboard: ClipboardText,
  shield: ShieldCheck,
  thermometer: Thermometer,
};

export function Services() {
  return (
    <section
      id="sluzby"
      className="scroll-mt-24 border-y border-ink-600/70 bg-ink-800 py-20 lg:py-28"
    >
      <div className="shell">
        <Reveal>
          <h2 className="max-w-[30ch] font-display text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.015em] text-steel-100 sm:text-4xl">
            Nabídka služeb
          </h2>
          <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-steel-300">
            Pět oborů, které na sebe navazují. Objekt zvládneme kompletně,
            od přípojky přes hromosvod až po zabezpečení a revizní zprávu.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.key}
                delay={0.04 * i}
                className={cn(s.wide ? "lg:col-span-3" : "lg:col-span-2")}
              >
                <article className="group relative flex h-full flex-col border border-ink-600/80 bg-ink-700 p-6 transition-colors duration-300 hover:border-ink-500 sm:p-7">
                  <span className="absolute inset-x-0 top-0 h-[2px] w-0 bg-signal transition-[width] duration-500 ease-out group-hover:w-full" />

                  <Icon
                    size={26}
                    weight="light"
                    className="text-steel-300 transition-colors duration-300 group-hover:text-signal-text"
                  />

                  <h3 className="mt-6 font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-steel-100">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-300">
                    {s.lead}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-ink-600/80 pt-5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-snug text-steel-400"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] h-[1px] w-3 shrink-0 bg-steel-400/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
