/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Původní Webnode adresy vedou na odpovídající sekce nové stránky.
    return [
      { source: "/nabidka-sluzeb", destination: "/#sluzby", permanent: true },
      { source: "/reference", destination: "/#reference", permanent: true },
      { source: "/fotogalerie", destination: "/#fotogalerie", permanent: true },
      { source: "/certifikaty", destination: "/#certifikaty", permanent: true },
      { source: "/kontakt", destination: "/#kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
