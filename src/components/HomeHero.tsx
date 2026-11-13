"use client";
import Link from "next/link";
import {useEffect,useRef} from "react";
import {ArrowRight,ArrowUpRight,Play} from "lucide-react";
import {gsap} from "gsap";

const img=(id:string,w=760)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=86`;
const tracks=[
 ["01","Event planning & strategy","Briefs • concepts • run sheets","photo-1511795409834-ef04bbd61622","/course"],
 ["02","Client & budget management","Meetings • proposals • costing","photo-1517245386807-bb43f82c33c4","/curriculum"],
 ["03","Vendor & production","Sourcing • décor • setup","photo-1519167758481-83f550bb49b3","/exposure"],
 ["04","Live event operations","Teams • timelines • coordination","photo-1492684223066-81342ee5ff30","/roadmap"]
];
function Laurel(){return <svg viewBox="0 0 84 42" aria-hidden="true" className="ng-laurel"><path d="M32 35C19 33 9 24 7 10M52 35c13-2 23-11 25-25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 17l-7-2 5-6M17 25l-8 1 3-7M24 31l-7 4 1-8M72 17l7-2-5-6M67 25l8 1-3-7M60 31l7 4-1-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
export default function HomeHero(){
 const root=useRef<HTMLElement>(null);
 useEffect(()=>{
  const section=root.current;
  if(!section||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const ctx=gsap.context(()=>{
   const tl=gsap.timeline({defaults:{ease:"power3.out"}});
   tl.fromTo(".ng-nav",{y:-18,opacity:0},{y:0,opacity:1,duration:.65})
    .fromTo(".ng-subject",{y:28,scale:1.035,opacity:0},{y:0,scale:1,opacity:1,duration:1.1,ease:"power2.out"},"-=.45")
    .fromTo(".ng-left > *",{y:22,opacity:0},{y:0,opacity:1,duration:.65,stagger:.09},"-=.75")
    .fromTo(".ng-stats,.ng-vibes",{y:18,opacity:0},{y:0,opacity:1,duration:.7,stagger:.12},"-=.55")
    .fromTo(".ng-feature-card",{y:28,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.7,stagger:.14},"-=.45");
   gsap.to(".ng-subject",{y:-7,duration:4.4,ease:"sine.inOut",repeat:-1,yoyo:true});
   gsap.to(".ng-ambient",{scale:1.08,opacity:.8,duration:6,ease:"sine.inOut",repeat:-1,yoyo:true});
   gsap.to(".ng-ribbon-path",{strokeDashoffset:-260,duration:9,ease:"none",repeat:-1});
  },section);
  return()=>ctx.revert();
 },[]);
 return <section className="ng-hero" ref={root} id="home">
  <div className="ng-bg-grid" aria-hidden="true"/><div className="ng-ambient" aria-hidden="true"/>
  <svg className="ng-ribbon" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true"><path className="ng-ribbon-path" d="M-30 795 C210 640 285 945 540 798 S880 642 1088 810 S1440 1010 1705 730" fill="none" stroke="rgba(255,176,0,.68)" strokeWidth="2" strokeDasharray="8 18"/><path d="M-30 810 C210 655 285 960 540 813 S880 657 1088 825 S1440 1025 1705 745" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1"/></svg>
  <header className="ng-nav">
   <div className="ng-nav-pill">
    <Link href="/" className="ng-brand" aria-label="Anugraha home"><span className="ng-brand-mark">A</span><span className="ng-brand-name">ANUGRAHA<small>EVENTS INSTITUTE</small></span></Link>
    <nav className="ng-nav-links" aria-label="Main navigation"><Link className="is-active" href="/">Home</Link><Link href="/course">Course</Link><Link href="/curriculum">Curriculum</Link><Link href="/exposure">Exposure</Link><Link href="/about">About</Link></nav>
   </div>
   <div className="ng-center-badge"><Laurel/><div><strong>3 FOUNDERS</strong><span>10+ YEARS OF EXPERIENCE EACH</span></div><Laurel/></div>
   <div className="ng-nav-actions"><Link className="ng-nav-ghost" href="/roadmap"><Play size={15} fill="currentColor"/> Course flow</Link><Link className="ng-nav-cta" href="/counselling">Enquire now <ArrowUpRight size={17}/></Link></div>
  </header>
  <img className="ng-subject" src="https://thumbs.wbm.im/pw/medium/b3d100ded00147a3a1d13812281648ad.png" alt="Professional event coordinator wearing a communication headset" fetchPriority="high"/>
  <div className="ng-left">
   <p className="ng-eyebrow"><i/> EVENT MANAGEMENT TRAINING · BENGALURU</p>
   <h1>LEARN EVENT<br/><span>MANAGEMENT.</span></h1>
   <p className="ng-lead">Plan with purpose. Create with confidence. Learn the real work behind memorable events in a focused 45-day programme.</p>
   <Link className="ng-primary-button" href="/course">Explore 45-day course <ArrowRight size={20}/></Link>
   <div className="ng-track-list">{tracks.map(([n,title,meta,photo,href])=><Link href={href} className="ng-track" key={n}><img src={img(photo,180)} alt="" loading="lazy"/><span className="ng-track-copy"><strong>{title}</strong><small>{meta}</small></span><span className="ng-track-arrow"><ArrowUpRight size={16}/></span></Link>)}</div>
   <div className="ng-one-course"><strong>ONE COURSE</strong><span>A COMPLETE EVENT JOURNEY</span></div>
   <Link className="ng-trailer-button" href="/curriculum"><span><ArrowRight size={16}/></span> Explore the full curriculum</Link>
  </div>
  <div className="ng-right">
   <div className="ng-stats"><div><strong>45</strong><span>DAYS</span><small>Structured training</small></div><i/><div><strong>12</strong><span>MODULES</span><small>Core learning areas</small></div><i/><div><strong>10–15</strong><span>DAYS</span><small>Industry observation</small></div><div className="ng-avatar" aria-label="Anugraha founder-led training"><img src="/anugraha-symbol.svg" alt=""/></div></div>
   <div className="ng-vibes"><strong>MAKE EVENTS<br/><em>MATTER.</em></strong><span>PLAN <b>•</b> DESIGN <b>•</b> COORDINATE <b>•</b> EXECUTE</span></div>
   <div className="ng-cards">
    <Link href="/exposure" className="ng-feature-card ng-card-warm"><img src={img("photo-1519741497674-611481863552",760)} alt="Wedding celebration venue" loading="lazy"/><span className="ng-card-scrim"/><span className="ng-card-copy"><small>EVENT FORMAT 01</small><strong>Weddings &<br/>celebrations</strong><i><ArrowUpRight size={17}/></i></span></Link>
    <Link href="/exposure" className="ng-feature-card ng-card-cool"><img src={img("photo-1492684223066-81342ee5ff30",760)} alt="Corporate and live event stage" loading="lazy"/><span className="ng-card-scrim"/><span className="ng-card-copy"><small>EVENT FORMAT 02</small><strong>Corporate &<br/>live events</strong><i><ArrowUpRight size={17}/></i></span></Link>
   </div>
  </div>
  <div className="ng-credit"><a href="https://pikwizard.com/png/transparent-businesswoman-in-black-suit-with-headset-smiling-confidently/b3d100ded00147a3a1d13812281648ad/" target="_blank" rel="noreferrer">Cut-out image credit: Pikwizard</a></div>
  <div className="ng-scroll-cue"><span>SCROLL TO EXPLORE</span><i/></div>
 </section>;
}
