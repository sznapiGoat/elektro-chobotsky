"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = React.useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <form onSubmit={onSubmit} noValidate>
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
        Napište nám
      </h2>
      <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-ink-700">
        Formulář otevře váš e-mailový klient s předvyplněnou zprávou. Rychlejší
        je zavolat.
      </p>

      <div className="mt-8 space-y-6">
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
          <label htmlFor="message" className="text-[13.5px] font-medium text-ink">
            Popis zakázky
          </label>
          <textarea
            id="message"
            rows={6}
            value={values.message}
            onChange={set("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            className={cn(
              "w-full resize-y border bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-300 focus:outline-none",
              errors.message
                ? "border-signal focus:border-signal"
                : "border-line-strong focus:border-ink"
            )}
          />
          {errors.message ? (
            <p id="message-error" className="text-[13px] text-signal">
              {errors.message}
            </p>
          ) : (
            <p id="message-hint" className="text-[13px] text-ink-500">
              Například: rodinný dům v Čerčanech, nová elektroinstalace včetně
              revize, do konce roku.
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Otevírám e-mail" : "Odeslat poptávku"}
      </Button>

      <p role="status" aria-live="polite" className="mt-4 min-h-[1.25rem] text-[13px] text-ink-500">
        {status === "sent"
          ? "Zpráva je připravená ve vašem e-mailovém klientu. Pokud se neotevřel, napište prosím přímo na uvedený e-mail."
          : ""}
      </p>
    </form>
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
      <label htmlFor={id} className="text-[13.5px] font-medium text-ink">
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
          "h-12 w-full border bg-white px-3.5 text-[15px] text-ink placeholder:text-ink-300 focus:outline-none",
          error ? "border-signal focus:border-signal" : "border-line-strong focus:border-ink"
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="text-[13px] text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}
