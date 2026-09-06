import type { Metadata } from "next";
import { Saira, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Saira({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chobotsky-elektro.cz"),
  title: {
    default: "Miroslav Chobotský | Elektroinstalace, hromosvody a revize",
    template: "%s | Miroslav Chobotský",
  },
  description:
    "Silnoproudé a slaboproudé elektroinstalace, montáž hromosvodů, zabezpečovací systémy Jablotron a revize elektrických zařízení. Od roku 1995 ve Středočeském kraji a v Praze.",
  keywords: [
    "elektroinstalace",
    "hromosvody",
    "revize elektrických zařízení",
    "zabezpečovací systémy Jablotron",
    "elektrikář Divišov",
    "Benešov",
    "Středočeský kraj",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: "Miroslav Chobotský | Elektroinstalace, hromosvody a revize",
    description:
      "Elektroinstalace, hromosvody, revize a zabezpečovací systémy Jablotron. Od roku 1995 ve Středočeském kraji a v Praze.",
    siteName: site.name,
  },
  alternates: { canonical: "/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: site.name,
  description: site.about,
  foundingDate: "1995-02-09",
  telephone: "+420606145684",
  email: site.email,
  vatID: site.dic,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: "257 26",
    addressLocality: "Divišov",
    addressCountry: "CZ",
  },
  areaServed: ["Středočeský kraj", "Praha"],
  knowsAbout: [
    "elektroinstalace",
    "hromosvody",
    "revize vyhrazených elektrických zařízení",
    "zabezpečovací systémy Jablotron",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="dark">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} min-h-[100dvh]`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
