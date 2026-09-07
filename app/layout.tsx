import type { Metadata } from "next";
import { Golos_Text, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const sans = Golos_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Spline_Sans_Mono({
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Miroslav Chobotský, elektroinstalace, hromosvody a revize. Telefon 606 145 684.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
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
  url: "https://chobotsky-elektro.cz",
  hasMap: site.googleProfile,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Středočeský kraj" },
    { "@type": "City", name: "Praha" },
    { "@type": "City", name: "Benešov" },
    { "@type": "City", name: "Vlašim" },
    { "@type": "City", name: "Divišov" },
  ],
  image: "https://chobotsky-elektro.cz/og.jpg",
  sameAs: [site.googleProfile, "https://chobotsky.webnode.cz"],
  knowsAbout: [
    "elektroinstalace",
    "hromosvody",
    "revize vyhrazených elektrických zařízení",
    "zabezpečovací systémy Jablotron",
    "elektrické vytápění",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${sans.variable} ${mono.variable} flex min-h-[100dvh] flex-col`}>
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:text-[14px] focus:text-ink"
        >
          Přeskočit na obsah
        </a>
        <SiteHeader />
        <main id="obsah" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
