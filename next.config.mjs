/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Původní Webnode adresa /nabidka-sluzeb zůstala zachovaná jako stránka.
    // Ostatní staré adresy odpovídají novým routám, přesměrování není potřeba.
    return [{ source: "/kontaktni-formular", destination: "/kontakt", permanent: true }];
  },
};

export default nextConfig;
