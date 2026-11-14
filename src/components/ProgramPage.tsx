import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import MotionGraphic from "@/components/MotionGraphic";
import { Closing, Eyebrow } from "@/components/Blocks";
import JsonLd, { crumbs, faqLd, SITE } from "@/components/JsonLd";
import { heroForProgram } from "@/lib/hero";
import { programs, programHref, type Program } from "@/lib/programs";

export default function ProgramPage({ p }: { p: Program }) {
  const idx = programs.findIndex(x => x.slug === p.slug);
  const prev = programs[(idx + programs.length - 1) % programs.length];
  const next = programs[(idx + 1) % programs.length];
  const rel = p.related.map(s => programs.find(x => x.slug === s)!).filter(Boolean);
  const fx = p.fx;
  const course = {
    "@context": "https://schema.org", "@type": "Course", name: p.name, description: p.metaDescription,
    url: `${SITE}${programHref(p.slug)}`,
    provider: { "@type": "EducationalOrganization", name: "Anugraha Training Institute", url: SITE },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Anugraha Training Institute, Vijayanagar, Bengaluru" } }
  };
  return (
    <>
      <Hero h={heroForProgram(p, idx)} />

      <section className="sec" data-fx="sc-bg-shift">
        <div className="wrap split">
          <div>
            <Eyebrow>ABOUT THIS PROGRAM</Eyebrow>
            <h2 className="title" data-fx={fx.text}>{p.tagline}</h2>
            <p className="lead" data-fx="rv-fade-up">{p.lead}</p>
          </div>
          <aside className="glass snapshot" data-fx={`${fx.reveal} ${fx.hover}`}>
            <h3>Module snapshot</h3>
            <div className="snap-list">
              <div><h4>Format</h4><p>Offline classroom with practical tasks</p></div>
              <div><h4>Where</h4><p>Anugraha centre, Vijayanagar, Bengaluru</p></div>
              <div><h4>Part of</h4><p>The 45-day flagship Event Management course</p></div>
              <div><h4>Batch size</h4><p>20–25 learners</p></div>
            </div>
            <ul className="tags">{p.skills.map(s => <li key={s}>{s}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Eyebrow>WHAT YOU WILL LEARN</Eyebrow>
          <h2 className="title" data-fx={fx.text}>Six skills you will practise</h2>
          <div className="cards" data-fx={fx.reveal.startsWith("rv-stagger") ? fx.reveal : "rv-stagger-up"}>
            {p.learn.map((l, i) => (
              <article className="card glass" key={l.t} data-fx={fx.hover}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{l.t}</h3>
                <p>{l.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec stage" data-fx="sc-bg-shift">
        <div className="wrap stage-in">
          <div className="stage-copy">
            <Eyebrow>SEE IT IN MOTION</Eyebrow>
            <h2 className="title" data-fx="tx-lines">{p.name}, visualised</h2>
            <p className="lead" data-fx="rv-fade-up">A short motion graphic showing how this part of an event comes together. It is an illustration, not a real client or price.</p>
          </div>
          <div className="stage-mg" data-fx={fx.scroll === "sc-image-wipe" ? "rv-clip-circle" : "rv-clip-circle"}><MotionGraphic id={p.mg} label={`${p.name} animated explainer`} /></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Eyebrow>HOW THE MODULE RUNS</Eyebrow>
          <h2 className="title" data-fx="tx-mask-reveal">Five steps from idea to practice</h2>
          <ol className="steps wide" data-fx="rv-stagger-left">
            {p.steps.map((s, i) => (
              <li key={s.t} data-fx={fx.hover}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{s.t}</h3><h4>{s.k}</h4><p>{s.b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Eyebrow>WHAT YOU WILL BUILD</Eyebrow>
          <h2 className="title" data-fx="tx-words">Practical work for your portfolio</h2>
          <div className="cards four" data-fx="rv-stagger-scale">
            {p.build.map(b => (
              <article className="card glass" key={b.t} data-fx={fx.hover}>
                <h3>{b.t}</h3>
                <h5>Output: {b.o}</h5>
                <p>{b.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap narrow">
          <Eyebrow>QUESTIONS</Eyebrow>
          <h2 className="title" data-fx="tx-words">Common questions about this program</h2>
          <div className="faq" data-fx="rv-stagger-up">
            {p.faqs.map(([q, a]) => <details key={q}><summary><h3>{q}</h3></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <Eyebrow>KEEP EXPLORING</Eyebrow>
          <h2 className="title" data-fx="tx-words">Related programs</h2>
          <div className="related" data-fx="rv-stagger-scale">
            {[prev, ...rel, next].filter((x, i, a) => a.indexOf(x) === i).slice(0, 4).map(x => (
              <Link key={x.slug} href={programHref(x.slug)} className="glass" data-fx="ix-lift ix-arrow-nudge">
                <small>{x.no} · {x.meta}</small><h3>{x.name}</h3><p>{x.tagline}</p><ArrowUpRight className="arrow" size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Closing />
      <div className="credit"><h6>Illustrative photography. Real event visits are observational and depend on event schedules and access.</h6></div>
      <JsonLd data={[course, crumbs([["Home", "/"], ["Programs", "/programs"], [p.name, programHref(p.slug)]]), faqLd(p.faqs)]} />
    </>
  );
}
