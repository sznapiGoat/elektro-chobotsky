"use client";

import * as React from "react";
import {
  Envelope,
  MapPin,
  Phone,
  PaperPlaneRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;

export function Contact() {
  const [values, setValues] = React.useState({
    name: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Doplňte prosím jméno.";
    if (values.contact.trim().length < 6)
      next.contact = "Doplňte telefon nebo e-mail, ať se vám můžeme ozvat.";
    if (values.message.trim().length < 10)
      next.message = "Napište prosím alespoň krátce, o co jde.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    const subject = `Poptávka z webu: ${values.name}`;
    const body = [
      `Jméno: ${values.name}`,
      `Kontakt: ${values.contact}`,
      "",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-ink-600/70 bg-ink-700"
    >
      <div className="shell grid gap-14 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="max-w-[22ch] font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-steel-100 sm:text-[2.75rem]">
              Potřebujete revizi nebo elektro na stavbu?
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-steel-300">
              Zavolejte a řekněte, o jaký objekt jde. Termín i rozsah práce
              probereme rovnou po telefonu.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <a
              href={site.phoneHref}
              className="group mt-10 flex items-center gap-4 border-y border-ink-600/80 py-6 transition-colors hover:border-signal/60"
            >
              <Phone
                size={26}
                weight="fill"
                className="shrink-0 text-signal-text"
              />
              <span className="font-mono text-[2rem] leading-none text-steel-100 transition-colors group-hover:text-white sm:text-[2.6rem]">
                {site.phone}
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <Envelope size={18} className="mt-1 shrink-0 text-steel-400" />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
                    E-mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-[15px] text-steel-100 underline decoration-ink-500 underline-offset-4 transition-colors hover:decoration-signal"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={18} className="mt-1 shrink-0 text-steel-400" />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
                    Sídlo a oblast působení
                  </dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-steel-200">
                    {site.name}, {site.address.street}, {site.address.city}
                    <br />
                    <span className="text-steel-400">{site.area}</span>
                  </dd>
                </div>
              </div>
            </dl>

            <p className="mt-8 font-mono text-xs text-steel-400">
              IČ {site.ico} &nbsp;/&nbsp; DIČ {site.dic}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="border border-ink-600/80 bg-ink-800 p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.06em] text-steel-100">
                Napište nám
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">
                Formulář otevře váš e-mailový klient s předvyplněnou zprávou.
              </p>

              <div className="mt-7 space-y-5">
                <Field
                  id="name"
                  label="Jméno"
                  value={values.name}
                  onChange={set("name")}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  id="contact"
                  label="Telefon nebo e-mail"
                  value={values.contact}
                  onChange={set("contact")}
                  error={errors.contact}
                  autoComplete="tel"
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-300"
                  >
                    Popis zakázky
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={set("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={cn(
                      "w-full resize-y border bg-ink-900 px-3.5 py-3 text-[15px] text-steel-100 placeholder:text-steel-400/70 focus:outline-none focus:ring-0",
                      errors.message
                        ? "border-signal focus:border-signal"
                        : "border-steel-400/70 focus:border-steel-200"
                    )}
                  />
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-[13px] text-signal-text"
                    >
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-[13px] text-steel-400">
                      Například: rodinný dům, nová elektroinstalace, do konce
                      roku.
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-7 w-full sm:w-auto"
                disabled={status === "sending"}
              >
                <PaperPlaneRight size={17} weight="fill" />
                {status === "sending" ? "Otevírám e-mail" : "Odeslat poptávku"}
              </Button>

              <p
                role="status"
                aria-live="polite"
                className="mt-4 min-h-[1.25rem] text-[13px] text-steel-400"
              >
                {status === "sent"
                  ? "Zpráva je připravená ve vašem e-mailovém klientu. Pokud se neotevřel, napište prosím přímo na uvedený e-mail."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-300"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-12 w-full border bg-ink-900 px-3.5 text-[15px] text-steel-100 placeholder:text-steel-400/70 focus:outline-none focus:ring-0",
          error
            ? "border-signal focus:border-signal"
            : "border-steel-400/70 focus:border-steel-200"
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="text-[13px] text-signal-text">
          {error}
        </p>
      ) : null}
    </div>
  );
}
