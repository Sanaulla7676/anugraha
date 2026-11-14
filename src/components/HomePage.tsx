import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import { Closing, Eyebrow, Marquee, ProgramGrid, Stage } from "@/components/Blocks";
import MotionGraphic from "@/components/MotionGraphic";
import JsonLd, { faqLd } from "@/components/JsonLd";
import { heroFor } from "@/lib/hero";
import { pageContent } from "@/lib/page-content";
import { faqs } from "@/lib/site";

const phases = [
  ["01", "Foundations", "Event types, lifecycle, goals, checklists and run sheets."],
  ["02", "Client & budget", "Briefing, meetings, quotations, costing and vendor negotiation."],
  ["03", "Design & delivery", "Concepts, stage and décor, weddings, corporate events and coordination."],
  ["04", "Portfolio", "Marketing creatives, crisis practice, final project and assessment."]
];
const trust = [
  ["No guaranteed jobs", "Career guidance and placement assistance may be provided through contacts. Outcomes depend on the learner."],
  ["Our own certificates", "A course completion certificate and a separate practical experience certificate. No external accreditation is claimed."],
  ["Observation, not promises", "10–15 days of observational exposure. Access depends on event schedules and no event type is guaranteed."],
  ["Honest proof", "We publish real learner stories and work, with consent, as batches complete. No invented reviews."]
];
const steps = [
  ["01", "Book counselling", "Tell us your goals on WhatsApp or by phone."],
  ["02", "Visit the centre", "See the classroom, stage demo area and meet the team."],
  ["03", "Review the plan", "Go through the curriculum, batch dates, fee and payment details."],
  ["04", "Confirm admission", "Join the next batch, planned every 45 days."]
];

export default function HomePage() {
  const home = pageContent.home;
  return (
    <>
      <Hero h={heroFor("home")} />
      <Marquee />

      <section className="sec" data-fx="sc-bg-shift">
        <div className="wrap split">
          <div>
            <Eyebrow>WHY THIS MATTERS</Eyebrow>
            <h2 className="title" data-fx="tx-lines">What event management really involves</h2>
            <p className="lead" data-fx="rv-fade-up">{home.intro}</p>
          </div>
          <div className="pillars" data-fx="rv-stagger-up">
            {home.sections.slice(0, 4).map((s, i) => (
              <article className="glass" key={s.title} data-fx="ix-lift">
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="programs">
        <div className="wrap">
          <Eyebrow>12 PROGRAMS · ONE COURSE</Eyebrow>
          <h2 className="title" data-fx="tx-mask-reveal">Every skill behind a great event</h2>
          <p className="lead" data-fx="rv-fade-up">Each module has its own page with learning outcomes, the way it runs, what you build and answers to common questions.</p>
          <ProgramGrid />
        </div>
      </section>

      <Stage id="mg-product-reveal" label="THE 45-DAY PROGRAMME" title="One focused course. A complete event perspective." text="Daily classroom lessons, mock client meetings, practical assignments and guided industry observation, led by founders with more than ten years of event experience each." />

      <section className="sec">
        <div className="wrap">
          <Eyebrow>THE LEARNING JOURNEY</Eyebrow>
          <h2 className="title" data-fx="tx-words">Four phases across 45 days</h2>
          <div className="phase-grid">
            <ol className="phases" data-fx="rv-stagger-left">
              {phases.map(([n, t, b]) => <li className="glass" key={n}><span className="num">{n}</span><div><h3>{t}</h3><p>{b}</p></div></li>)}
            </ol>
            <MotionGraphic id="mg-timeline-build" label="Animated four-phase learning timeline" />
          </div>
          <p className="note">The exact timetable is confirmed for each batch by the admissions team.</p>
        </div>
      </section>

      <section className="sec band" data-fx="am-particles sc-bg-shift">
        <div className="wrap">
          <Eyebrow>REAL-WORLD EXPOSURE</Eyebrow>
          <h2 className="title" data-fx="tx-chars">See events come together outside the classroom.</h2>
          <div className="counters" data-fx="rv-stagger-scale">
            <div className="glass"><strong data-fx="tx-count" data-count="45">45</strong><span>days of training</span></div>
            <div className="glass"><strong>10–15</strong><span>days of observation</span></div>
            <div className="glass"><strong data-fx="tx-count" data-count="12">12</strong><span>core modules</span></div>
            <div className="glass"><strong>20–25</strong><span>learners per batch</span></div>
          </div>
          <Link className="btn-outline" href="/exposure"><span className="ring">▶</span><span>See how exposure works</span></Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Eyebrow>HONEST BY DESIGN</Eyebrow>
          <h2 className="title" data-fx="tx-mask-reveal">What we promise, and what we don't</h2>
          <div className="flips" data-fx="rv-stagger-up">
            {trust.map(([t, b]) => (
              <div className="flipcard" key={t} data-fx="ix-card-flip" tabIndex={0}>
                <div className="face front"><h3>{t}</h3><small>Hover to read</small></div>
                <div className="face back"><p>{b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <Eyebrow>ADMISSIONS</Eyebrow>
            <h2 className="title" data-fx="tx-lines">Four clear steps. No pressure.</h2>
            <ol className="steps" data-fx="rv-stagger-left">
              {steps.map(([n, t, b]) => <li key={n}><span className="num">{n}</span><div><h3>{t}</h3><p>{b}</p></div></li>)}
            </ol>
          </div>
          <div>
            <Eyebrow>QUICK ANSWERS</Eyebrow>
            <h2 className="title" data-fx="tx-lines">Questions learners ask first</h2>
            <div className="faq" data-fx="rv-stagger-up">
              {faqs.slice(0, 5).map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
            <Link className="textlink" href="/faq" data-fx="ix-underline-grow">All FAQs <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <Closing />
      <JsonLd data={faqLd(faqs.slice(0, 5) as [string, string][])} />
    </>
  );
}
