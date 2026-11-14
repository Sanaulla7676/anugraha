import { pageContent } from "@/lib/page-content";
import { pageDesign } from "@/lib/page-design";
import { programs, programHref, unsplash, type Program } from "@/lib/programs";

export type HeroProps = {
  eyebrow: string;
  h1: [string, string];
  h1Sr?: string;
  cta: { label: string; href: string };
  list: { title: string; meta: string; thumb: string; href: string }[];
  bigTitle: string;
  bigSub: string;
  outline: { label: string; href: string };
  rightTitle: string;
  rightSub: string;
  stats: [string, string][];
  cards: { label: string; href: string; img: string; tone: "warm" | "cool" }[];
  image: { src: string; pos: string; local?: boolean };
  badge: { big: string; small: string };
  fx?: string[];
  fxH1?: string;
};

const COPY: Record<string, { e: string; h: [string, string]; bt: string; bs: string; rt: string; rs: string; m: string; pos?: string }> = {
  home: { e: "EVENT MANAGEMENT INSTITUTE", h: ["LEARN, PLAN", "AND LEAD EVENTS."], bt: "ONE COURSE", bs: "A WORLD OF EVENTS", rt: "BUILD MOMENTS", rs: "PLAN • DESIGN • DELIVER", m: "Home • Overview" },
  about: { e: "ABOUT ANUGRAHA", h: ["A PRACTICAL PLACE", "TO LEARN EVENTS."], bt: "OUR STORY", bs: "WHY ANUGRAHA", rt: "REAL SKILLS", rs: "PLAN • PRACTISE • LEAD", m: "Institute • Story" },
  founders: { e: "FOUNDERS & TRAINERS", h: ["LEARN FROM PEOPLE", "WHO HAVE DONE IT."], bt: "3 FOUNDERS", bs: "10+ YEARS EACH", rt: "BEHIND SCENES", rs: "GUIDE • SHARE • MENTOR", m: "Team • Trainers" },
  course: { e: "THE FLAGSHIP PROGRAMME", h: ["45 DAYS TO LEARN", "EVENT MANAGEMENT."], bt: "45 DAYS", bs: "COMPLETE VIEW", rt: "ONE PROGRAMME", rs: "LEARN • OBSERVE • BUILD", m: "45 Days • Offline" },
  curriculum: { e: "COURSE CURRICULUM", h: ["SEE WHAT YOU WILL", "LEARN, STEP BY STEP."], bt: "12 MODULES", bs: "BRIEF TO RUN SHEET", rt: "SKILLS LINKED", rs: "BRIEF • BUDGET • BUILD", m: "12 Modules • Skills" },
  exposure: { e: "INDUSTRY EXPOSURE", h: ["SEE EVENTS COME", "TOGETHER."], bt: "10–15 DAYS", bs: "GUIDED VISITS", rt: "REAL EVENTS", rs: "WATCH • LEARN • ASK", m: "Observation • Visits" },
  careers: { e: "CAREER PATHS", h: ["WHERE EVENT SKILLS", "CAN TAKE YOU."], bt: "YOUR PATH", bs: "MANY DIRECTIONS", rt: "GROW YOUR WAY", rs: "EXPLORE • CHOOSE • GROW", m: "Roles • Freelance" },
  projects: { e: "STUDENT PROJECTS", h: ["BUILD WORK YOU", "CAN SHOW."], bt: "PORTFOLIO", bs: "LEARN BY DOING", rt: "REAL DOCUMENTS", rs: "PROPOSE • COST • PRESENT", m: "Portfolio • Work" },
  roadmap: { e: "45-DAY ROADMAP", h: ["YOUR 45-DAY", "LEARNING JOURNEY."], bt: "DAY BY DAY", bs: "BASICS TO FINAL", rt: "CLEAR PHASES", rs: "LEARN • PRACTISE • PRESENT", m: "Timeline • Phases" },
  "student-stories": { e: "STUDENT STORIES", h: ["REAL STORIES,", "WHEN READY."], bt: "HONEST", bs: "NO FAKE REVIEWS", rt: "REAL PROOF", rs: "SHARE • CONSENT • TRUST", m: "Voices • Honest" },
  gallery: { e: "EVENT GALLERY", h: ["EXPLORE THE WORLDS", "OF EVENTS."], bt: "EVENT WORLDS", bs: "WEDDINGS TO STAGES", rt: "SEE THE CRAFT", rs: "IMAGINE • OBSERVE • CREATE", m: "Formats • Visuals" },
  admissions: { e: "ADMISSIONS", h: ["TAKE THE FIRST", "STEP TO EVENTS."], bt: "APPLY", bs: "COUNSELLING FIRST", rt: "CLEAR PROCESS", rs: "ASK • VISIT • JOIN", m: "Apply • Counselling" },
  faq: { e: "FREQUENTLY ASKED", h: ["CLEAR ANSWERS", "BEFORE YOU ENROL."], bt: "ASK AWAY", bs: "STRAIGHT ANSWERS", rt: "NO GUESSWORK", rs: "ASK • KNOW • DECIDE", m: "Answers • Clarity" },
  contact: { e: "CONTACT", h: ["TALK TO THE", "ANUGRAHA TEAM."], bt: "SAY HELLO", bs: "96865 68245", rt: "VIJAYANAGAR", rs: "CALL • VISIT • ASK", m: "Call • Visit" },
  counselling: { e: "BOOK COUNSELLING", h: ["LET'S TALK ABOUT", "YOUR GOALS."], bt: "BOOK A SLOT", bs: "WHATSAPP ENQUIRY", rt: "START HERE", rs: "SHARE • TALK • BEGIN", m: "Book • Session" },
  resources: { e: "RESOURCES & GUIDES", h: ["PRACTICAL GUIDES", "FOR PLANNERS."], bt: "LEARN MORE", bs: "EVENT GUIDES", rt: "USEFUL GUIDES", rs: "READ • PLAN • APPLY", m: "Guides • Planning" }
};

const POS: Record<string, string> = { home: "50% 30%", about: "50% 35%", founders: "50% 30%", course: "50% 40%", curriculum: "50% 35%", exposure: "50% 40%", careers: "40% 35%", projects: "50% 40%", roadmap: "60% 40%", "student-stories": "50% 30%", gallery: "50% 45%", admissions: "50% 35%", faq: "50% 30%", contact: "50% 40%", counselling: "50% 35%", resources: "50% 40%" };

const FX: Record<string, { fx: string[]; h1: string }> = {
  home: { fx: ["am-grain", "ix-mouse-parallax"], h1: "tx-mask-reveal" },
  about: { fx: ["am-grain", "am-orbs"], h1: "tx-words" },
  founders: { fx: ["am-grain", "am-aurora"], h1: "tx-blur-words" },
  course: { fx: ["am-grain", "am-particles"], h1: "tx-chars" },
  curriculum: { fx: ["am-grain", "am-perspective-grid"], h1: "tx-lines" },
  exposure: { fx: ["am-grain", "am-scanline"], h1: "tx-scramble" },
  careers: { fx: ["am-grain", "am-pulse-ring"], h1: "tx-rotate-chars" },
  projects: { fx: ["am-grain", "am-glow-breathe"], h1: "tx-typewriter" },
  roadmap: { fx: ["am-grain", "am-orbs"], h1: "tx-mask-reveal" },
  "student-stories": { fx: ["am-grain", "am-aurora"], h1: "tx-blur-words" },
  gallery: { fx: ["am-grain", "am-particles"], h1: "tx-wave" },
  admissions: { fx: ["am-grain", "am-halo-ring"], h1: "tx-words" },
  faq: { fx: ["am-grain", "am-glow-breathe"], h1: "tx-lines" },
  contact: { fx: ["am-grain", "am-pulse-ring"], h1: "tx-chars" },
  counselling: { fx: ["am-grain", "am-halo-ring"], h1: "tx-words" },
  resources: { fx: ["am-grain", "am-orbs"], h1: "tx-mask-reveal" }
};

export const pageKeys = Object.keys(COPY);

export function heroFor(key: string): HeroProps {
  const c = COPY[key], page = pageContent[key], design = pageDesign[key];
  const rel = design.related.slice(0, 4).map(r => {
    const k = r.href.replace("/", "") || "home";
    return { title: r.label, meta: COPY[k]?.m || "Anugraha", thumb: unsplash(pageContent[k]?.photo || page.photo, 256), href: r.href, k };
  });
  const cards = rel.slice(0, 2).map((r, i) => ({ label: r.title, href: r.href, img: r.thumb, tone: (i ? "cool" : "warm") as "warm" | "cool" }));
  const list = key === "home"
    ? programs.slice(0, 4).map(p => ({ title: p.name, meta: p.meta, thumb: unsplash(p.img, 256), href: programHref(p.slug) }))
    : rel.map(({ k, ...r }) => { void k; return r; });
  const cardsFinal = key === "home"
    ? [{ label: "Industry Exposure", href: "/exposure", img: unsplash("photo-1511578314322-379afb476865", 700), tone: "warm" as const }, { label: "Next Batch", href: "/admissions", img: unsplash("photo-1521737711867-e3b97375f902", 700), tone: "cool" as const }]
    : cards;
  const fits = design.stats.length >= 3 && design.stats.slice(0, 3).every(([v, l]) => l.length <= 16 && v.length <= 10);
  const stats: [string, string][] = fits ? design.stats.slice(0, 3) : [["45", "Days"], ["20–25", "Batch size"], ["12", "Modules"]];
  return {
    eyebrow: c.e, h1: c.h,
    h1Sr: key === "home" ? " — event management course in Bangalore" : undefined,
    cta: key === "counselling" ? { label: "Call Admissions", href: "tel:9686568245" } : { label: "Book Counselling", href: "/counselling" },
    list, bigTitle: c.bt, bigSub: c.bs, outline: key === "home" ? { label: "Explore Programs", href: "/programs" } : { label: "View Programs", href: "/programs" },
    rightTitle: c.rt, rightSub: c.rs, stats, cards: cardsFinal,
    image: { src: unsplash(page.photo, 1800), pos: POS[key] || "50% 35%" },
    badge: { big: "45 Days", small: "Offline Programme" },
    fx: FX[key].fx, fxH1: FX[key].h1
  };
}

export function heroForProgram(p: Program, idx: number): HeroProps {
  const others = [...p.related.map(s => programs.find(x => x.slug === s)!), programs[(idx + 1) % programs.length]].filter((x, i, a) => x && a.indexOf(x) === i && x.slug !== p.slug).slice(0, 4);
  const next = programs[(idx + 1) % programs.length];
  return {
    eyebrow: `MODULE ${p.no} OF 12`, h1: p.h1,
    cta: { label: "Book Counselling", href: "/counselling" },
    list: others.map(o => ({ title: o.name, meta: o.meta, thumb: unsplash(o.img, 256), href: programHref(o.slug) })),
    bigTitle: `MODULE ${p.no}`, bigSub: p.meta.toUpperCase(),
    outline: { label: "All Programs", href: "/programs" },
    rightTitle: p.meta.split(" • ")[0].toUpperCase(), rightSub: "LEARN • PRACTISE • BUILD",
    stats: [["45", "Days course"], ["12", "Modules"], ["20–25", "Batch size"]],
    cards: [
      { label: `Next: ${next.name}`, href: programHref(next.slug), img: unsplash(next.img, 700), tone: "warm" },
      { label: "Book Counselling", href: "/counselling", img: unsplash("photo-1521737711867-e3b97375f902", 700), tone: "cool" }
    ],
    image: { src: unsplash(p.img, 1800), pos: p.imgPos },
    badge: { big: `Module ${p.no}`, small: "of 12 Programs" },
    fx: ["am-grain", p.fx.ambient, "ix-mouse-parallax"], fxH1: p.fx.hero
  };
}

export const programsIndexHero = (): HeroProps => ({
  eyebrow: "12 PROGRAMS · ONE COURSE", h1: ["EVERY SKILL BEHIND", "A GREAT EVENT."],
  cta: { label: "Book Counselling", href: "/counselling" },
  list: programs.slice(0, 4).map(p => ({ title: p.name, meta: p.meta, thumb: unsplash(p.img, 256), href: programHref(p.slug) })),
  bigTitle: "12 PROGRAMS", bigSub: "ONE 45-DAY COURSE", outline: { label: "See the Course", href: "/course" },
  rightTitle: "PICK A MODULE", rightSub: "LEARN • PRACTISE • BUILD",
  stats: [["12", "Programs"], ["45", "Days course"], ["20–25", "Batch size"]],
  cards: [
    { label: "Curriculum", href: "/curriculum", img: unsplash("photo-1492684223066-81342ee5ff30", 700), tone: "warm" },
    { label: "Admissions", href: "/admissions", img: unsplash("photo-1523580494863-6f3031224c94", 700), tone: "cool" }
  ],
  image: { src: unsplash("photo-1519167758481-83f550bb49b3", 1800), pos: "50% 40%" },
  badge: { big: "12 Programs", small: "Inside One Course" }, fx: ["am-grain", "am-orbs", "ix-mouse-parallax"], fxH1: "tx-mask-reveal"
});
