import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { programs, programHref, unsplash } from "@/lib/programs";
import MotionGraphic from "@/components/MotionGraphic";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="eyebrow">{children}</p>;

export function Closing({ title = "Start with a conversation, not a guess.", text = "Speak with the Anugraha admissions team about the 45-day programme, the learning centre and the next batch." }: { title?: string; text?: string }) {
  return (
    <section className="sec closing" data-fx="am-halo-ring sc-bg-shift">
      <div className="wrap closing-in">
        <Eyebrow>YOUR NEXT STEP</Eyebrow>
        <h2 className="title" data-fx="tx-mask-reveal">{title}</h2>
        <p className="lead">{text}</p>
        <div className="btn-row">
          <Link className="btn-white" href="/counselling" data-fx="ix-magnetic ix-ripple"><span>Book Counselling</span><ArrowUpRight size={24} aria-hidden="true" /></Link>
          <a className="btn-outline" href="tel:9686568245"><span className="ring"><Play size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" /></span><span>Call 96865 68245</span></a>
        </div>
      </div>
    </section>
  );
}

export function ProgramCard({ i }: { i: number }) {
  const p = programs[i];
  return (
    <Link href={programHref(p.slug)} className="pcard" data-fx="ix-tilt-3d ix-spotlight-card ix-img-zoom ix-arrow-nudge">
      <div className="pcard-img"><Image src={unsplash(p.img, 700)} alt="" fill sizes="(max-width:700px) 90vw, 360px" style={{ objectFit: "cover", objectPosition: p.imgPos }} /><span className="pcard-no">{p.no}</span></div>
      <div className="pcard-body">
        <h3>{p.name}</h3>
        <p>{p.tagline}</p>
        <span className="pcard-meta"><small>{p.meta}</small><ArrowUpRight className="arrow" size={22} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

export function ProgramGrid({ max }: { max?: number }) {
  const n = max ?? programs.length;
  return <div className="pgrid" data-fx="rv-stagger-scale">{programs.slice(0, n).map((_, i) => <ProgramCard key={i} i={i} />)}</div>;
}

export function Marquee() {
  return (
    <div className="marquee" data-fx="sc-marquee-velocity am-marquee" aria-label="The 12 programs">
      <div className="marquee-track" data-track>
        {programs.map(p => <Link key={p.slug} href={programHref(p.slug)}><span>{p.no}</span>{p.name}</Link>)}
      </div>
    </div>
  );
}

export function Stage({ id, label, title, text }: { id: string; label: string; title: string; text: string }) {
  return (
    <section className="sec stage" data-fx="sc-bg-shift">
      <div className="wrap stage-in">
        <div className="stage-copy"><Eyebrow>{label}</Eyebrow><h2 className="title" data-fx="tx-lines">{title}</h2><p className="lead" data-fx="rv-fade-up">{text}</p></div>
        <div className="stage-mg" data-fx="rv-clip-circle"><MotionGraphic id={id} label={label} /></div>
      </div>
    </section>
  );
}
