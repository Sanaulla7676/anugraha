import Link from "next/link";
import { programs, programHref } from "@/lib/programs";

const groups = [
  { title: "Institute", links: [["About Anugraha", "/about"], ["Founders & trainers", "/founders"], ["Gallery", "/gallery"], ["Contact", "/contact"]] },
  { title: "Course", links: [["45-day course", "/course"], ["Curriculum", "/curriculum"], ["Roadmap", "/roadmap"], ["Industry exposure", "/exposure"], ["Career paths", "/careers"]] },
  { title: "Next steps", links: [["Admissions", "/admissions"], ["Book counselling", "/counselling"], ["Student projects", "/projects"], ["Student stories", "/student-stories"], ["FAQs", "/faq"], ["Resources", "/resources"]] }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-top">
        <div className="foot-brand">
          <Link href="/" className="foot-word">ANUGRAHA</Link>
          <p className="tag">TRAINING INSTITUTE</p>
          <p>From learning to leading events. Event Management Training Institute, Vijayanagar, Bengaluru.</p>
          <a className="foot-phone" href="tel:9686568245">96865 68245</a>
        </div>
        <nav className="foot-programs" aria-label="All programs">
          <h2 className="foot-h">12 Programs</h2>
          <ul>{programs.map(p => <li key={p.slug}><Link href={programHref(p.slug)}><span>{p.no}</span>{p.name}</Link></li>)}</ul>
        </nav>
        {groups.map(g => (
          <nav key={g.title} className="foot-col" aria-label={g.title}>
            <h2 className="foot-h">{g.title}</h2>
            {g.links.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
          </nav>
        ))}
      </div>
      <div className="foot-bottom">
        <span>© {new Date().getFullYear()} Anugraha Training Institute</span>
        <span className="tag">LEARN • PLAN • CREATE • LEAD</span>
        <Link href="/counselling">Book a counselling session</Link>
      </div>
    </footer>
  );
}
