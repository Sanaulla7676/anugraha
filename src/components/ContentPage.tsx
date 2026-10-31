import Image from "next/image";
import Link from "next/link";
import {pageContent, type PageContent} from "@/lib/page-content";
import {modules,faqs} from "@/lib/site";
import {pageDesign, type HeroVariant, type SectionVariant} from "@/lib/page-design";
import {getSectionDetails} from "@/lib/section-details";
import Reveal from "@/components/Reveal";
import TrueFocus from "@/components/TrueFocus";
import TextType from "@/components/TextType";
import CounsellingForm from "@/components/CounsellingForm";

const img=(id:string,w=1000)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=86`;

function Cta({href,label,secondary=false}:{href:string;label:string;secondary?:boolean}){
 return <Link href={href} className={secondary?"hero-button hero-button-secondary":"hero-button hero-button-primary"}>
   <TrueFocus sentence={label} manualMode={false} focusStyle="brackets" order="sequential" easing="smooth" blurAmount={5} focusScale={1} borderColor="#D4B991" highlightColor="#D4B991" animationDuration={.5} pauseBetweenAnimations={1} cornerSize={8} borderWidth={1.6} unfocusedOpacity={1}/>
   <b aria-hidden>↗</b>
 </Link>;
}

function HeroStamp({pageKey,design}:{pageKey:string;design:typeof pageDesign[string]}){
 const [value,label]=design.stats[0]||["45","day programme"];
 const captions:Record<string,string>={
  home:"A focused start in event management",
  course:"One flagship offline programme",
  founders:"Founder-led learning",
  exposure:"Guided event observation",
  curriculum:"Skills that connect",
  careers:"Explore your direction",
  projects:"Build practical evidence",
  roadmap:"A structured learning journey",
  gallery:"Different event environments",
  admissions:"Start with counselling",
  faq:"Clear answers before you enrol",
  contact:"Speak with admissions",
  counselling:"A conversation before a decision",
  resources:"Practical planning guides"
 };
 return <aside className="hero-stamp" aria-label={`${value} ${label}`}>
   <strong>{value}</strong>
   <span>{label}</span>
   <small>{captions[pageKey]||"From learning to leading events"}</small>
 </aside>;
}

function Hero({pageKey,page}:{pageKey:string;page:PageContent}){
 const design=pageDesign[pageKey];
 const imageSource=img(page.photo||page.gallery?.[0]||"photo-1492684223066-81342ee5ff30",2600);
 const description=`Illustrative event and learning photography for ${page.tag.toLowerCase()}.`;
 return <section className={`page-hero page-hero-${design.heroVariant}`}>
  <Image className="hero-background" src={imageSource} alt={description} fill priority quality={90} sizes="100vw"/>
  <div className="hero-image-caption">ILLUSTRATIVE PHOTOGRAPHY <i/> ANUGRAHA · VIJAYANAGAR, BENGALURU</div>
  <div className="hero-content-shell">
   <div className="hero-copy">
    <span className="hero-eyebrow">{page.tag}</span>
    <h1>{design.h1}</h1>
    <h2>{design.h2}</h2>
    <p>{design.heroCopy}</p>
    {design.typeLines&&<div className="hero-type-line">
      <span>THE PROGRAMME</span>
      <TextType text={design.typeLines} typingSpeed={52} initialDelay={180} deletingSpeed={28} pauseDuration={1500} typeEffect="blur" cursorGlide cursorStyle="underscore" cursorBlinkDuration={.5} showCursor/>
    </div>}
    <div className="hero-button-row">
      <Cta href={pageKey==="counselling"?"#counselling-form":"/counselling"} label={design.cta}/>
      <Cta href={design.secondaryHref} label={design.secondary} secondary/>
    </div>
    <div className="hero-location"><span>ANUGRAHA TRAINING INSTITUTE</span><i/>VIJAYANAGAR, BENGALURU</div>
   </div>
  </div>
  <HeroStamp pageKey={pageKey} design={design}/>
  <div className="hero-scroll-cue"><span>SCROLL TO EXPLORE</span><i/></div>
 </section>;
}

function Stats({stats}:{stats:[string,string][]}){
 return <section className="proof-strip"><div className="proof-inner">{stats.map(([n,l])=><div className="proof-item" key={n}><strong>{n}</strong><span>{l}</span></div>)}</div></section>;
}

function IntroPanel({page,design,pageKey}:{page:PageContent;design:typeof pageDesign[string];pageKey:string}){
 return <section className={`intro-panel intro-${design.heroVariant}`}>
  <div className="intro-kicker"><span>WHY THIS MATTERS</span><i/></div>
  <div className="intro-main"><h2>{({
 home:"What event management really involves",about:"How Anugraha approaches training",founders:"Guidance from people who know event work",course:"The structure of the 45-day programme",curriculum:"How the learning topics connect",exposure:"What students can observe in the industry",careers:"Where event skills can be used",projects:"Practical work that builds confidence",roadmap:"A learning journey with clear phases","student-stories":"How we share genuine learner experiences",gallery:"A visual guide to different event formats",admissions:"What to expect before enrolling",faq:"The information you should know",contact:"Ways to reach the Anugraha team",counselling:"A conversation before a decision",resources:"Guides for planning better events"
 } as Record<string,string>)[pageKey]||"A practical perspective on event management"}</h2><p>{page.intro}</p></div>
  <div className="intro-signature"><span>ANUGRAHA</span><small>FROM LEARNING TO LEADING EVENTS</small></div>
 </section>;
}

function SectionDetails({pageKey,title,body,index,variant}:{pageKey:string;title:string;body:string;index:number;variant:SectionVariant}){
 const details=getSectionDetails(title,body,pageKey,index);
 const revealVariant:Record<SectionVariant,"rise"|"left"|"right"|"clip"|"scale"|"stagger"|"fade">={
 editorial:"left",manifesto:"rise",profiles:"stagger",modules:"stagger",syllabus:"clip","field-notes":"right",pathways:"stagger",folio:"scale",timeline:"left",stories:"rise",masonry:"scale",steps:"stagger",questions:"rise",contact:"right",counselling:"rise",guidebook:"clip"
 };
 return <section id={pageKey==="resources"?`resource-topic-${String(index+1).padStart(2,"0")}`:undefined} className={`learning-section learning-${variant} ${index%2?"learning-alt":""}`}>
  <Reveal variant={revealVariant[variant]}>
   <div className="learning-section-inner">
    <div className="learning-index"><span>SECTION {String(index+1).padStart(2,"0")}</span><i/></div>
    <div className="learning-main">
      <span className="learning-eyebrow">{pageKey.replace("-"," ").toUpperCase()} · ANUGRAHA</span>
      <h2>{title}</h2>
      <p className="learning-intro">{body}</p>
      <div className="learning-detail-grid">
       {details.map((detail,i)=><article className="learning-detail" key={detail.heading}>
        <span className="detail-no">0{i+1}</span><h3>{detail.heading}</h3><p>{detail.body}</p>
       </article>)}
      </div>
    </div>
    <div className="learning-side-note"><strong>{String(index+1).padStart(2,"0")}</strong><span>{variant==="timeline"?"45-DAY LEARNING JOURNEY":variant==="field-notes"?"OBSERVE WITH PURPOSE":variant==="modules"?"COURSE MODULE":"LEARN · APPLY · REFLECT"}</span></div>
   </div>
  </Reveal>
 </section>;
}

function FeatureSection({pageKey,variant}:{pageKey:string;variant:HeroVariant}){
 if(variant==="course")return <section className="feature-stage feature-course"><div className="feature-stage-head"><span>THE 12 CORE MODULES</span><h2>What the course brings together.</h2></div><div className="course-module-grid">{modules.map(([n,title,body])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>;
 if(variant==="curriculum")return <section className="feature-stage feature-curriculum"><div className="feature-stage-head"><span>THE LEARNING FRAMEWORK</span><h2>One skill prepares you for the next.</h2></div><div className="curriculum-flow">{[["01","Understand the event brief","Define purpose, audience, scope and the client’s requirements."],["02","Build the plan","Prepare concepts, budgets, supplier lists and timelines."],["03","Coordinate the details","Connect people, production, venue and communication."],["04","Review and present","Explain the decisions, receive feedback and improve the work."]].map(x=><article key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></section>;
 if(variant==="exposure")return <section className="feature-stage feature-exposure"><div className="feature-stage-head"><span>EVENT FORMATS YOU MAY OBSERVE</span><h2>Different events. Different operating realities.</h2></div><div className="event-type-chips">{["Hindu weddings","Muslim Nikah","Christian weddings","Receptions","Engagements","Birthdays","Corporate conferences","Product launches","Stage shows","Cultural programmes","Exhibitions","Public events"].map(x=><span key={x}>{x}</span>)}</div><p className="feature-caveat">Visits depend on actual schedules, permissions and access. This list describes possible event formats, not a guarantee that each learner will attend every type.</p></section>;
 if(variant==="careers")return <section className="feature-stage feature-careers"><div className="feature-stage-head"><span>CAREER DIRECTIONS</span><h2>Find a role that matches your strengths.</h2></div><div className="career-path-grid">{[["01","Plan & coordinate","Event coordinator · Wedding assistant"],["02","Design & produce","Décor support · Production assistant"],["03","Promote & communicate","Event marketing · Social media"],["04","Build independently","Freelance support · Event business basics"]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><p className="feature-caveat">These are possible directions introduced through training and career guidance, not promised jobs or placement outcomes.</p></section>;
 if(variant==="portfolio")return <section className="feature-stage feature-portfolio"><div className="feature-stage-head"><span>THE PRACTICAL FOLIO</span><h2>Work you can prepare during the course.</h2></div><div className="portfolio-document-grid">{[["01","CLIENT BRIEF","Capture the event goal, audience, date, venue and budget."],["02","PROPOSAL","Explain the concept, scope and planned deliverables."],["03","QUOTATION","Prepare itemised costs and clear assumptions."],["04","VENDOR LIST","Compare suppliers and record service information."],["05","RUN SHEET","Map the timeline, tasks and responsibilities."],["06","FINAL PROJECT","Present a simulated event plan and explain the decisions."]].map(x=><article key={x[0]}><span>{x[0]} / {x[1]}</span><h3>{x[1]}</h3><p>{x[2]}</p><i/></article>)}</div><p className="feature-caveat">These are examples of course deliverables, not completed student work or testimonials.</p></section>;
 if(variant==="roadmap")return <section className="feature-stage feature-roadmap"><div className="feature-stage-head"><span>THE LEARNING SEQUENCE</span><h2>Four phases across 45 days.</h2></div><div className="roadmap-phases">{[["01","FOUNDATIONS","Understand event formats, roles and the planning lifecycle."],["02","PLANNING","Practise client briefs, proposals, quotations and budgets."],["03","COORDINATION","Explore suppliers, event design, production and observation."],["04","PRESENTATION","Complete practical assignments, project presentation and assessment."]].map(x=><article key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><p>{x[2]}</p></article>)}</div><p className="feature-caveat">This is a learning roadmap, not a fixed day-by-day timetable. Batch schedules and observational visits depend on the actual calendar.</p></section>;
 if(variant==="stories")return <section className="feature-stage feature-stories"><div className="feature-stage-head"><span>TRANSPARENCY FIRST</span><h2>We will publish real stories, not invented praise.</h2></div><div className="story-promise-grid"><article><b>01</b><h3>Student work</h3><p>Only assignments created by learners and approved for sharing will appear as portfolio examples.</p></article><article><b>02</b><h3>Genuine feedback</h3><p>Quotes, names, photographs and ratings will be shown only with the learner’s permission.</p></article><article><b>03</b><h3>Clear outcomes</h3><p>Career updates will distinguish personal plans, confirmed roles and opportunities that were merely explored.</p></article></div></section>;
 if(variant==="gallery")return <section className="feature-stage feature-gallery"><div className="feature-stage-head"><span>EVENT WORLDS</span><h2>Explore the formats behind the training.</h2></div><div className="gallery-mosaic">{[["photo-1519741497674-611481863552","Weddings"],["photo-1519167758481-83f550bb49b3","Celebrations"],["photo-1492684223066-81342ee5ff30","Live events"],["photo-1511795409834-ef04bbd61622","Event production"]].map(([src,label])=><figure key={label}><Image src={img(src,950)} alt={label} fill sizes="(max-width: 700px) 50vw, 25vw"/><figcaption>{label}</figcaption></figure>)}</div><p className="feature-caveat">Illustrative stock photography only. Replace with Anugraha’s own approved event photos when available.</p></section>;
 if(variant==="admissions")return <section className="feature-stage feature-admissions"><div className="feature-stage-head"><span>THE ADMISSION PROCESS</span><h2>Four clear steps. No pressure to decide blindly.</h2></div><div className="admissions-process">{[["01","Request counselling","Share your interests and preferred time."],["02","Speak with the founders","Discuss the course, curriculum and career interests."],["03","Visit the centre","See the facilities and understand the learning format."],["04","Review and confirm","Check fee, batch date and admission details before paying."]].map(x=><article key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}</div></section>;
 if(variant==="faq")return <section className="feature-stage feature-faq"><div className="feature-stage-head"><span>QUICK ANSWERS</span><h2>Start with the questions most learners ask.</h2></div><div className="quick-faq-grid">{faqs.slice(0,6).map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><Link className="text-link" href="/faq">Open all FAQs ↗</Link></section>;
 if(pageKey==="resources")return <section className="feature-stage feature-resources"><div className="feature-stage-head"><span>PLANNING GUIDES</span><h2>Start with the event question you need to solve.</h2></div><div className="resource-guide-grid">{[
["01","Client briefing","Learn what to ask before proposing an event plan."],
["02","Event budgeting","Understand estimates, line items and budget changes."],
["03","Vendor sourcing","Compare event suppliers beyond the cheapest quote."],
["04","Event timelines","Organise the tasks, timings and people behind a programme."],
["05","Wedding planning","Understand ceremony flow and family requirements."],
["06","Event marketing","Prepare clear invitations, posters and social updates."]
].map(([n,title,body],i)=><a className="resource-guide-card" href={`#resource-topic-${String(i+1).padStart(2,"0")}`} key={n}><span>{n} / START HERE</span><h3>{title}</h3><p>{body}</p><b>Read guide ↓</b></a>)}</div><p className="feature-caveat">These are introductory educational guides. They are not a substitute for event-specific professional advice or a live project brief.</p></section>;
 if(variant==="contact")return <section className="feature-stage feature-contact"><div><span>CONTACT ADMISSIONS</span><h2>Speak directly with the team.</h2><a className="contact-number" href="tel:9686568245">96865 68245</a><p>Monday to Saturday. Exact calling hours and the full street address are confirmed by the institute.</p></div><div className="contact-location-card"><small>TRAINING CENTRE</small><strong>Vijayanagar</strong><span>Bengaluru, Karnataka</span><p>The exact address and Google Maps pin will be added after the institute confirms them.</p><Link href="/counselling">Arrange a centre visit ↗</Link></div></section>;
 return null;
}

function RelatedLinks({pageKey}:{pageKey:string}){
 const items=pageDesign[pageKey].related;
 return <section className="related-section"><div className="related-heading"><span>KEEP EXPLORING</span><h2>Continue your Anugraha journey.</h2></div><div className="related-grid">{items.map(item=><Link href={item.href} key={item.href}><small>READ NEXT ↗</small><h3>{item.label}</h3><p>{item.description}</p></Link>)}</div></section>;
}

export default function ContentPage({pageKey}:{pageKey:string}){
 const page=pageContent[pageKey] as PageContent;
 const design=pageDesign[pageKey];
 if(!page||!design)return null;
 const sections=page.sections;
 return <>
  <Hero pageKey={pageKey} page={page}/>
  <Stats stats={design.stats}/>
  <IntroPanel page={page} design={design} pageKey={pageKey}/>
  <FeatureSection pageKey={pageKey} variant={design.heroVariant}/>
  {pageKey==="counselling"&&<div id="counselling-form"><CounsellingForm/></div>}
  <div className={`page-story page-story-${design.sectionVariant}`}>
    {sections.map((section,index)=><SectionDetails key={section.title} pageKey={pageKey} title={section.title} body={section.body} index={index} variant={design.sectionVariant}/>)}
  </div>
  <section className="closing-story">
    <div><span>YOUR NEXT STEP</span><h2>{page.closingTitle}</h2><p>{page.closingText}</p><div className="closing-actions"><Cta href="/counselling" label="Book a counselling session"/><a className="plain-call" href="tel:9686568245">Call 96865 68245</a></div></div>
    <Image src="/anugraha-symbol.svg" alt="" width={190} height={190}/>
  </section>
  <RelatedLinks pageKey={pageKey}/>
 </>;
}
