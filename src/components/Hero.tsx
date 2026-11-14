import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Play, CalendarCheck } from "lucide-react";
import type { HeroProps } from "@/lib/hero";

const LEAVES: [number, number, number][] = [[10, 38, -20], [7, 31, -35], [6, 24, -50], [7, 17, -65], [10, 10, -80], [15, 5, -100]];
const Laurel = ({ flip = false }: { flip?: boolean }) => (
  <svg className={`laurel${flip ? " flip" : ""}`} viewBox="0 0 36 46" fill="none" aria-hidden="true">
    <path d="M24 44C12 40 5 28 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    {LEAVES.map(([x, y, r], i) => <ellipse key={i} cx={x} cy={y} rx="2.6" ry="5.6" transform={`rotate(${r + 90} ${x} ${y})`} fill="currentColor" />)}
    {LEAVES.map(([x, y, r], i) => <ellipse key={"b" + i} cx={x + 6} cy={y + 2} rx="2.2" ry="4.6" transform={`rotate(${r + 20} ${x + 6} ${y + 2})`} fill="currentColor" opacity=".85" />)}
  </svg>
);

export default function Hero({ h }: { h: HeroProps }) {
  const cutout = h.image.local ? "/hero-subject.png" : existsSync(join(process.cwd(), "public", "hero-subject.png")) && h.eyebrow.startsWith("EVENT MANAGEMENT") ? "/hero-subject.png" : null;
  return (
    <section className="hero" data-fx={(h.fx || []).join(" ")}>
      <div className="hero-subject" data-depth="22" data-fx="sc-zoom-hero">
        <div className={`hero-subject-img${cutout ? " is-cutout" : ""}`}>
          {cutout
            ? <Image src={cutout} alt="Event professional wearing a glowing headset" fill priority sizes="45vw" style={{ objectFit: "contain", objectPosition: "center top" }} />
            : <Image src={h.image.src} alt="Illustrative event photography for Anugraha Training Institute" fill priority quality={85} sizes="(max-width:1023px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: h.image.pos }} />}
        </div>
        <div className="hero-subject-wash" aria-hidden="true" />
        <div className="hero-subject-rim" aria-hidden="true" />
      </div>
      <div className="hero-fade" aria-hidden="true" />

      <div className="hero-badge" data-fx="rv-fade-down">
        <Laurel /><div><strong>{h.badge.big}</strong><span>{h.badge.small}</span></div><Laurel flip />
      </div>

      <div className="hero-stats" data-fx="rv-fade-down" data-fx-delay="0.3">
        {h.stats.map(([v, l]) => <div key={l + v}><strong>{v}</strong><span>{l}</span></div>)}
        <div className="hero-avatar"><Image src="/anugraha-symbol.svg" alt="Anugraha symbol" width={68} height={68} /></div>
      </div>

      <p className="hl-eyebrow" data-fx="rv-fade-up">{h.eyebrow}</p>
      <h1 className="hl-head">
        {h.h1.map((line, i) => <span className="ln" key={line} data-fx={h.fxH1 || "tx-words"} data-fx-delay={i * 0.18}>{line}</span>)}
        {h.h1Sr && <span className="sr-only">{h.h1Sr}</span>}
      </h1>
      <Link className="btn-white" href={h.cta.href} data-fx="ix-magnetic"><span>{h.cta.label}</span><CalendarCheck size={24} strokeWidth={1.9} aria-hidden="true" /></Link>

      <ul className="hl-list" data-fx="rv-stagger-left">
        {h.list.map(item => (
          <li key={item.href}>
            <Link href={item.href}>
              <Image src={item.thumb} alt="" width={64} height={58} />
              <span className="txt"><strong>{item.title}</strong><small>{item.meta}</small></span>
              <span className="play" aria-hidden="true"><Play size={13} fill="currentColor" strokeWidth={0} /></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hl-big" data-fx="rv-fade-up">
        <p className="display">{h.bigTitle}</p>
        <p className="tag">{h.bigSub}</p>
      </div>
      <Link className="btn-outline" href={h.outline.href}><span className="ring"><Play size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" /></span><span>{h.outline.label}</span></Link>

      <div className="hr-big" data-depth="10">
        <p className="display glow" data-fx="rv-fade-left">{h.rightTitle}</p>
        <p className="tag">{h.rightSub}</p>
      </div>

      <div className="hr-cards" data-fx="rv-stagger-up" data-fx-delay="0.2">
        {h.cards.map(c => (
          <Link key={c.label} href={c.href} className={`mcard ${c.tone}`}>
            <Image src={c.img} alt="" fill sizes="360px" style={{ objectFit: "cover" }} />
            <span className="mcard-label"><span className="ring"><Play size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" /></span>{c.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
