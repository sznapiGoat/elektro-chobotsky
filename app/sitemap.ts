import type { MetadataRoute } from "next";
import { topics } from "@/lib/topics";
import { fields, nav } from "@/lib/site";

const BASE = "https://chobotsky-elektro.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...nav.map((n) => n.href),
    "/ochrana-osobnich-udaju",
    ...fields.map((f) => `/${f.slug}`),
    ...topics.map((t) => `/${t.field}/${t.slug}`),
  ];

  return paths.map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
