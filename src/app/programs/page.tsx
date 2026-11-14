import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Closing, Eyebrow, Marquee, ProgramGrid, Stage } from "@/components/Blocks";
import JsonLd, { crumbs, SITE } from "@/components/JsonLd";
import { programsIndexHero } from "@/lib/hero";
import { programs, programHref } from "@/lib/programs";

export const metadata: Metadata = {
  title: "12 Event Management Programs in Bangalore | Anugraha",
  description: "Explore the 12 programs inside Anugraha's 45-day event management course: planning, client handling, budgets, vendors, design, weddings, corporate events, marketing, leadership, crisis management, freelancing and portfolio.",
  alternates: { canonical: "/programs" },
  keywords: ["event management programs Bangalore", "event management course modules", "wedding planner course", "event marketing course", "event management institute Vijayanagar"]
};

export default function Page() {
  const list = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: programs.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: SITE + programHref(p.slug) })) };
  return (
    <>
      <Hero h={programsIndexHero()} />
      <Marquee />
      <section className="sec">
        <div className="wrap">
          <Eyebrow>ALL 12 PROGRAMS</Eyebrow>
          <h2 className="title" data-fx="tx-mask-reveal">Pick a module and see exactly what you will learn</h2>
          <p className="lead" data-fx="rv-fade-up">Every program is part of the same 45-day offline course in Vijayanagar, Bengaluru. Each page explains the skills, the way the module runs, what you build and the questions learners ask most.</p>
          <ProgramGrid />
        </div>
      </section>
      <Stage id="mg-geometric-intro" label="ONE INSTITUTE" title="Twelve skills. One complete event perspective." text="Learn the creative, financial and operational sides of events together, guided by founders with more than ten years of event experience each." />
      <Closing />
      <JsonLd data={[list, crumbs([["Home", "/"], ["Programs", "/programs"]])]} />
    </>
  );
}
