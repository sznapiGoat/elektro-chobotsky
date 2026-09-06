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
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: site.name,
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${sans.variable} ${mono.variable} flex min-h-[100dvh] flex-col`}>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
