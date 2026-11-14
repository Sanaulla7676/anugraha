import { programs, programHref } from "@/lib/programs";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Course", href: "/course" },
  { label: "Exposure", href: "/exposure" },
  { label: "About", href: "/about" }
];

export const navGroup = (path: string): string => {
  if (path === "/") return "/";
  if (path.startsWith("/programs")) return "/programs";
  if (["/course", "/curriculum", "/roadmap", "/admissions", "/counselling", "/careers", "/faq"].some(p => path.startsWith(p))) return "/course";
  if (["/exposure", "/gallery", "/projects", "/student-stories"].some(p => path.startsWith(p))) return "/exposure";
  return "/about";
};

export const searchIndex: { label: string; href: string; meta: string }[] = [
  { label: "Home", href: "/", meta: "Page" },
  { label: "All programs", href: "/programs", meta: "Page" },
  ...programs.map(p => ({ label: p.name, href: programHref(p.slug), meta: `Program ${p.no}` })),
  { label: "45-day course", href: "/course", meta: "Page" },
  { label: "Curriculum", href: "/curriculum", meta: "Page" },
  { label: "Roadmap", href: "/roadmap", meta: "Page" },
  { label: "Industry exposure", href: "/exposure", meta: "Page" },
  { label: "Career paths", href: "/careers", meta: "Page" },
  { label: "Student projects", href: "/projects", meta: "Page" },
  { label: "Student stories", href: "/student-stories", meta: "Page" },
  { label: "Gallery", href: "/gallery", meta: "Page" },
  { label: "About Anugraha", href: "/about", meta: "Page" },
  { label: "Founders & trainers", href: "/founders", meta: "Page" },
  { label: "Admissions", href: "/admissions", meta: "Page" },
  { label: "Book counselling", href: "/counselling", meta: "Page" },
  { label: "FAQs", href: "/faq", meta: "Page" },
  { label: "Resources & guides", href: "/resources", meta: "Page" },
  { label: "Contact", href: "/contact", meta: "Page" }
];
