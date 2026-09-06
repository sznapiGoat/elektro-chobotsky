import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Credibility } from "@/components/credibility";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { References } from "@/components/references";
import { Gallery } from "@/components/gallery";
import { CertificatesSection } from "@/components/certificates-section";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Services />
        <References />
        <Gallery />
        <CertificatesSection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
