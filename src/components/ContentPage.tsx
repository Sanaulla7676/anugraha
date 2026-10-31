import Image from "next/image";
import Link from "next/link";
import { pageContent, type PageContent } from "@/lib/page-content";
import { faqs, stats } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import TrueFocus from "@/components/TrueFocus";
import TextType from "@/components/TextType";

const imageUrl = (id:string, width=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

function ImageBand({page}:{page:PageContent}) {
  const ids=[page.photo,...page.gallery];
  const labels=["Event atmosphere and planning","Event setup and celebration","Production and event design","Classroom and practical learning"];
  return <section className="image-band-section">
    <div className="section-kicker">A CLOSER LOOK</div>
    <h2>Explore the world of events.</h2>
    <div className="image-band-grid">
      {ids.map((id,i)=><figure className={i===0?"image-band image-band-large":"image-band"} key={id}>
        <Image src={imageUrl(id,1500)} alt={labels[i]||"Event management learning"} fill sizes="(max-width: 700px) 100vw, 45vw" />
        <figcaption>{labels[i]||"Event environment"}</figcaption>
      </figure>)}
    </div>
    <p className="image-caption">Illustrative event photography. These images are not presented as Anugraha-managed events.</p>
  </section>;
}

function PageFAQ() {
  return <section className="faq-section">
    <div className="faq-heading"><span className="section-kicker">BEFORE YOU DECIDE</span><h2>Questions worth asking.</h2><p>Get clear information before your counselling session.</p></div>
    <div className="faq-grid">
      {faqs.slice(0,6).map(([q,a])=><details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </div>
    <Link href="/faq" className="text-link">See all frequently asked questions <span>↗</span></Link>
  </section>;
}

export default function ContentPage({pageKey}:{pageKey:keyof typeof pageContent}) {
  const page=pageContent[pageKey];
  if (!page) return null;
  const isHome=pageKey==="home";
  return <>
    <section className={isHome?"editorial-hero home-hero":"editorial-hero"}>
      <div className="hero-image-wrap">
        <Image src={imageUrl(page.photo,2200)} alt="Event management environment" fill priority sizes="100vw" />
      </div>
      <div className="hero-image-shade" />
      <div className="hero-ornament hero-ornament-one" />
      <div className="hero-ornament hero-ornament-two" />
      <div className="hero-content">
        <span className="hero-eyebrow">{page.tag}</span>
        <h1>{isHome?<><span>Learn the craft.</span><br/><TrueFocus words={["Lead the moment.","Plan with purpose.","Create experiences."]} interval={2500}/></>:page.title}</h1>
        <p className="hero-subtitle"><TextType items={[page.subtitle,"From Learning to Leading Events.","Understand the work behind every event."]} typingSpeed={42} deletingSpeed={23} pauseDuration={1800}/></p>
        <p className="hero-intro">{page.intro}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/counselling">Book a counselling session <span>↗</span></Link>
          <Link className="button button-ghost" href={isHome?"/course":"/admissions"}>{isHome?"Explore the 45-day course":"View admission process"} <span>↗</span></Link>
        </div>
        <div className="hero-footnote"><span>Vijayanagar, Bengaluru</span><i/> <span>45-day offline programme</span><i/> <span>Founder-led learning</span></div>
      </div>
      <div className="hero-side-note">ANUGRAHA · EVENT MANAGEMENT TRAINING INSTITUTE</div>
    </section>

    <section className="metric-ribbon">
      {stats.map(([number,label])=><div className="metric-item" key={number}><strong>{number}</strong><span>{label}</span></div>)}
    </section>

    <Section eyebrow="THE ANUGRAHA APPROACH" title={isHome?"The craft behind every memorable event.":"A practical perspective, from brief to delivery."} tone="paper">
      <div className="intro-layout">
        <p className="intro-lead">{page.intro}</p>
        <div className="intro-side-note"><span className="intro-mark">✳</span><p>Learn to connect creative thinking with clear plans, sound budgets, reliable people and thoughtful coordination.</p></div>
      </div>
    </Section>

    {page.sections.map((section,index)=><section className={`detail-section ${index%2===0?"detail-tone-ivory":"detail-tone-beige"}`} key={section.title}>
      <Reveal>
        <div className="detail-inner">
          <div className="detail-index"><span>ANUGRAHA / {String(index+1).padStart(2,"0")}</span><i/></div>
          <div className="detail-copy">
            <span className="detail-eyebrow">{page.tag}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <div className="detail-rule"><span/><span/><span/></div>
          </div>
          <div className="detail-aside">
            <span className="aside-number">{String(index+1).padStart(2,"0")}</span>
            <span className="aside-caption">{index%3===0?"LEARN · OBSERVE · APPLY":index%3===1?"PLAN · COORDINATE · LEAD":"PRACTICE WITH PURPOSE"}</span>
          </div>
        </div>
      </Reveal>
    </section>)}

    <ImageBand page={page}/>

    <section className="learning-principles">
      <div className="principle-heading"><span className="section-kicker">HOW LEARNING CONNECTS</span><h2>Knowledge becomes useful when it is applied.</h2></div>
      <div className="principle-grid">
        <article><span>01</span><h3>Understand</h3><p>Learn the concepts, vocabulary and professional expectations behind event management.</p></article>
        <article><span>02</span><h3>Practise</h3><p>Build proposals, quotations, budgets, vendor lists, creative material and event plans.</p></article>
        <article><span>03</span><h3>Observe</h3><p>See event environments with guidance during the programme’s observational exposure blocks.</p></article>
        <article><span>04</span><h3>Present</h3><p>Explain your decisions, receive feedback and complete the final project and assessment.</p></article>
      </div>
    </section>

    <PageFAQ/>

    <section className="closing-cta">
      <div className="closing-cta-content">
        <span className="section-kicker">YOUR NEXT STEP</span>
        <h2>{page.closingTitle}</h2>
        <p>{page.closingText}</p>
        <div className="closing-actions">
          <Link className="button button-light" href="/counselling">Book counselling <span>↗</span></Link>
          <a className="button button-outline-light" href="tel:9686568245">Call 96865 68245</a>
        </div>
      </div>
      <div className="closing-decoration" aria-hidden="true"><Image src="/anugraha-symbol.svg" alt="" width={290} height={290}/></div>
    </section>
  </>;
}
