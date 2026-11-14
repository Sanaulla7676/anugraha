import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramPage from "@/components/ProgramPage";
import { getProgram, programHref, programs } from "@/lib/programs";

export const dynamicParams = false;
export function generateStaticParams() { return programs.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return {
    title: p.metaTitle, description: p.metaDescription, keywords: p.keywords,
    alternates: { canonical: programHref(p.slug) },
    openGraph: { type: "website", siteName: "Anugraha Training Institute", title: p.metaTitle, description: p.metaDescription, url: programHref(p.slug) },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();
  return <ProgramPage p={p} />;
}
