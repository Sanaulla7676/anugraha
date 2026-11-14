import type { MetadataRoute } from "next";
import { programs, programHref } from "@/lib/programs";

const base = "https://anugraha-lake.vercel.app";
const pages = ["/", "/programs", "/course", "/curriculum", "/roadmap", "/exposure", "/careers", "/projects", "/student-stories", "/gallery", "/about", "/founders", "/admissions", "/counselling", "/faq", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map(p => ({ url: base + p, lastModified: now, changeFrequency: (p === "/" ? "weekly" : "monthly") as "weekly" | "monthly", priority: p === "/" ? 1 : ["/programs", "/course", "/curriculum", "/admissions"].includes(p) ? 0.9 : 0.7 })),
    ...programs.map(p => ({ url: base + programHref(p.slug), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
