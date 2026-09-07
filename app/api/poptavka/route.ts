import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Odeslání poptávky. Když je nastavený RESEND_API_KEY, jde zpráva e-mailem.
 * Bez klíče se vrátí 503 a formulář nabídne odeslání přes e-mailový klient,
 * takže poptávka nikdy nezmizí do prázdna.
 */

type Payload = {
  name?: string;
  contact?: string;
  message?: string;
  /** Skryté pole. Roboti ho vyplní, člověk ne. */
  company?: string;
  /** Kolik sekund uživatel strávil ve formuláři. */
  elapsed?: number;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const contact = (body.contact ?? "").trim();
  const message = (body.message ?? "").trim();

  // Past na roboty. Tváříme se, že se odeslalo, ale nikam to nejde.
  if ((body.company ?? "").trim() !== "" || (body.elapsed ?? 0) < 3) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Doplňte prosím jméno.";
  if (contact.length < 6)
    errors.contact = "Doplňte telefon nebo e-mail, ať se vám můžeme ozvat.";
  if (message.length < 10)
    errors.message = "Napište prosím alespoň krátce, o co jde.";
  if (name.length > 120 || contact.length > 160 || message.length > 4000)
    errors.message = "Zpráva je příliš dlouhá.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Odesílání není nastavené." },
      { status: 503 }
    );
  }

  const text = [
    `Jméno: ${name}`,
    `Kontakt: ${contact}`,
    "",
    message,
    "",
    "Odesláno z poptávkového formuláře na webu.",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: contact.includes("@") ? contact : undefined,
      subject: `Poptávka z webu: ${name}`,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Zprávu se nepodařilo odeslat." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
