import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import { Closing, Eyebrow, ProgramGrid, Stage } from "@/components/Blocks";
import CounsellingForm from "@/components/CounsellingForm";
import JsonLd, { crumbs, faqLd } from "@/components/JsonLd";
import { heroFor } from "@/lib/hero";
import { pageContent } from "@/lib/page-content";
import { pageDesign } from "@/lib/page-design";
import { getSectionDetails } from "@/lib/section-details";
import { faqs } from "@/lib/site";

const MG: Record<string, [string, string]> = {
  about: ["mg-golden-parallax", "EVERY EVENT HAS A STAGE"],
  founders: ["mg-geometric-intro", "FOUNDER-LED LEARNING"],
  course: ["mg-orbit-counter", "THE 45-DAY JOURNEY"],
  curriculum: ["mg-liquid-morph", "PLAN · DESIGN · DELIVER"],
  exposure: ["mg-vendor-network", "PEOPLE BEHIND EVERY EVENT"],
  careers: ["mg-story-reveal", "YOUR NEXT STEP"],
  projects: ["mg-poster-build", "BUILD, THEN SHOW"],
  roadmap: ["mg-timeline-build", "PHASE BY PHASE"],
  "student-stories": ["mg-chat-bubbles", "LISTENING FIRST"],
  gallery: ["mg-stage-layout", "FROM PLAN TO STAGE"],
  admissions: ["mg-run-sheet", "YOUR ADMISSION CHECKLIST"],
  faq: ["mg-alert-pulse", "CLEAR ANSWERS, CALM DECISIONS"],
  contact: ["mg-story-reveal", "SAY HELLO"],
  counselling: ["mg-orbit-counter", "START THE CONVERSATION"],
  resources: ["mg-budget-bars", "BUDGET, VENDORS, TIMELINES"]
};
const CARD_FX = ["rv-zoom-out", "rv-flip-y", "rv-clip-down", "rv-clip-left", "rv-clip-right", "rv-clip-diamond", "rv-slide-far-left", "rv-expand-x", "rv-glow-in"];
const REVEAL: Record<string, string> = { about: "rv-fade-up", founders: "rv-blur-in", course: "rv-stagger-up", curriculum: "rv-clip-up", exposure: "rv-fade-left", careers: "rv-zoom-in", projects: "rv-tilt-rise", roadmap: "rv-fade-right", "student-stories": "rv-focus-in", gallery: "rv-clip-circle", admissions: "rv-flip-x", faq: "rv-fade-up", contact: "rv-swing-in", counselling: "rv-zoom-in", resources: "rv-skew-up" };
const HOVER: Record<string, string> = { about: "ix-lift", founders: "ix-spotlight-card", course: "ix-tilt-3d", curriculum: "ix-border-beam", exposure: "ix-img-zoom", careers: "ix-lift", projects: "ix-shine-sweep", roadmap: "ix-spotlight-card", "student-stories": "ix-lift", gallery: "ix-tilt-3d", admissions: "ix-border-beam", faq: "ix-lift", contact: "ix-shine-sweep", counselling: "ix-lift", resources: "ix-spotlight-card" };

export default function ContentPage({ pageKey }: { pageKey: string }) {
  const page = pageContent[pageKey];
  const design = pageDesign[pageKey];
  if (!page || !design) return null;
  const [mg, mgLabel] = MG[pageKey] || MG.about;
  const reveal = REVEAL[pageKey] || "rv-fade-up";
  const hover = HOVER[pageKey] || "ix-lift";
  const stats = design.stats.slice(0, 3);
  const isFaq = pageKey === "faq";
  return (
    <>
      <Hero h={heroFor(pageKey)} />

      <section className="sec tight">
        <div className="wrap">
          <div className="stat-strip" data-fx="rv-stagger-up">
            {stats.map(([v, l]) => (
              <div className="glass" key={l}>
                {/^\d{1,3}$/.test(v) ? <strong data-fx="tx-count" data-count={v}>{v}</strong> : <strong>{v}</strong>}
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <Eyebrow>{page.tag}</Eyebrow>
            <h2 className="title" data-fx="tx-lines">{page.title}</h2>
          </div>
          <div>
            <p className="lead" data-fx="rv-fade-up">{page.intro}</p>
            <p className="sub" data-fx="rv-fade-up">{page.subtitle}</p>
          </div>
        </div>
      </section>

      {(pageKey === "course" || pageKey === "curriculum") && (
        <section className="sec">
          <div className="wrap">
            <Eyebrow>THE 12 PROGRAMS</Eyebrow>
            <h2 className="title" data-fx="tx-mask-reveal">Open any module to see exactly what it covers</h2>
            <ProgramGrid />
          </div>
        </section>
      )}

      <Stage id={mg} label={mgLabel} title={design.h2} text={design.heroCopy} />

      {pageKey === "counselling" && <section className="sec" id="counselling-form"><div className="wrap"><CounsellingForm /></div></section>}

      {pageKey === "contact" && (
        <section className="sec">
          <div className="wrap contact-grid" data-fx="rv-stagger-up">
            <a className="glass contact-card" href="tel:9686568245" data-fx="ix-lift"><small>CALL ADMISSIONS</small><strong>96865 68245</strong><span>Monday to Saturday</span></a>
            <div className="glass contact-card"><small>VISIT THE CENTRE</small><strong>Vijayanagar</strong><span>Bengaluru · confirmed during counselling</span></div>
            <Link className="glass contact-card" href="/counselling" data-fx="ix-lift"><small>BOOK ONLINE</small><strong>Counselling ↗</strong><span>Opens a prepared WhatsApp message</span></Link>
          </div>
        </section>
      )}

      {isFaq ? (
        <section className="sec">
          <div className="wrap narrow">
            <Eyebrow>ALL QUESTIONS</Eyebrow>
            <h2 className="title" data-fx="tx-words">Everything learners ask</h2>
            <div className="faq" data-fx="rv-stagger-clip">
              {faqs.map(([q, a]) => <details key={q}><summary><h3>{q}</h3></summary><p>{a}</p></details>)}
            </div>
          </div>
          <JsonLd data={faqLd(faqs as [string, string][])} />
        </section>
      ) : (
        <section className="sec">
          <div className="wrap">
            <Eyebrow>IN DETAIL</Eyebrow>
            <h2 className="title" data-fx="tx-mask-reveal">What this page covers</h2>
            <div className="cards" data-fx="rv-stagger-up">
              {page.sections.map((s, i) => {
                const details = getSectionDetails(s.title, s.body, pageKey, i);
                return (
                  <article className="card glass" key={s.title} data-fx={`${hover}`}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 data-fx={CARD_FX[i % CARD_FX.length]}>{s.title}</h3>
                    <p>{s.body}</p>
                    <div className="details" data-fx={reveal}>
                      {details.map(d => <div key={d.heading}><h4>{d.heading}</h4><p>{d.body}</p></div>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="sec tight">
        <div className="wrap">
          <Eyebrow>KEEP EXPLORING</Eyebrow>
          <h2 className="title" data-fx="tx-words">Continue your Anugraha journey</h2>
          <div className="related" data-fx="rv-stagger-scale">
            {design.related.map(r => (
              <Link key={r.href} href={r.href} className="glass" data-fx="ix-lift ix-arrow-nudge"><h3>{r.label}</h3><p>{r.description}</p><ArrowUpRight className="arrow" size={22} aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
      </section>

      <Closing title={page.closingTitle} text={page.closingText} />
      <JsonLd data={crumbs([["Home", "/"], [page.tag.split(" · ")[0], pageKey === "home" ? "/" : `/${pageKey}`]])} />
    </>
  );
}
