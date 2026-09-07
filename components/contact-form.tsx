"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const empty = { name: "", contact: "", message: "" };

export function ContactForm() {
  const [values, setValues] = React.useState(empty);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [company, setCompany] = React.useState("");
  const startedAt = React.useRef(Date.now());

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((p) => ({ ...p, [key]: undefined }));
    };

  const mailtoHref = () => {
    const subject = `Poptávka z webu: ${values.name || "bez jména"}`;
    const body = [
      `Jméno: ${values.name}`,
      `Kontakt: ${values.contact}`,
      "",
      values.message,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
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
    try {
      const res = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company,
          elapsed: (Date.now() - startedAt.current) / 1000,
        }),
      });

      if (res.status === 422) {
        const data = (await res.json()) as { errors?: Errors };
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      if (!res.ok) {
        setStatus("failed");
        return;
      }

      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div>
        <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
          Poptávka odešla
        </h2>
        <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-ink-700">
          Ozveme se na kontakt, který jste uvedli. Když to spěchá, zavolejte
          rovnou, telefon bereme i ze stavby.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-block font-mono text-2xl text-ink transition-colors hover:text-signal"
        >
          {site.phone}
        </a>
        <p className="mt-6">
          <button
            type="button"
            onClick={() => {
              startedAt.current = Date.now();
              setStatus("idle");
            }}
            className="text-[14px] text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
          >
            Napsat další zprávu
          </button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 className="text-[1.35rem] font-semibold tracking-[-0.015em] text-ink">
        Napište nám
      </h2>
      <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-ink-700">
        Popište, o jaký objekt jde a co potřebujete. Ozveme se na uvedený
        kontakt. Rychlejší je zavolat.
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

        {/* Past na roboty, pro člověka je pole skryté. */}
        <div className="hidden" aria-hidden>
          <label htmlFor="company">Firma</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

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
              "w-full resize-y border bg-white px-3.5 py-3 text-[16px] text-ink placeholder:text-ink-300 focus:outline-none",
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

      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full sm:w-auto"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Odesílám" : "Odeslat poptávku"}
      </Button>

      <div role="status" aria-live="polite" className="mt-4 min-h-[1.25rem]">
        {status === "failed" ? (
          <p className="max-w-[46ch] border-l-2 border-signal pl-4 text-[13.5px] leading-relaxed text-ink-700">
            Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo použijte{" "}
            <a
              href={mailtoHref()}
              className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-signal"
            >
              svůj e-mailový klient
            </a>
            , případně zavolejte na {site.phone}.
          </p>
        ) : null}
      </div>
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
          "h-12 w-full border bg-white px-3.5 text-[16px] text-ink placeholder:text-ink-300 focus:outline-none",
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
