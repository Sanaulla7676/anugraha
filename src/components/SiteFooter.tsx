import Link from "next/link";

const groups = [
  { title: "Discover", links: [["About Anugraha","/about"],["Founders & trainers","/founders"],["45-day course","/course"],["Curriculum","/curriculum"],["Training roadmap","/roadmap"]] },
  { title: "Learn & grow", links: [["Industry exposure","/exposure"],["Career pathways","/careers"],["Student projects","/projects"],["Student stories","/student-stories"],["Event gallery","/gallery"]] },
  { title: "Admissions", links: [["Admission process","/admissions"],["Frequently asked questions","/faq"],["Book counselling","/counselling"],["Contact","/contact"]] }
];

export default function SiteFooter(){return <footer className="site-footer">
  <div className="footer-main">
    <div className="footer-brand-block"><Link href="/" className="footer-wordmark">ANUGRAHA</Link><span>TRAINING INSTITUTE</span><p>From Learning to Leading Events.</p><small>Event Management Training Institute · Vijayanagar, Bengaluru</small></div>
    {groups.map(group=><div className="footer-links" key={group.title}><h4>{group.title}</h4>{group.links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</div>)}
    <div className="footer-contact"><h4>Talk to admissions</h4><a href="tel:9686568245" className="footer-phone">96865 68245</a><p>Monday to Saturday<br/>Hours confirmed during counselling</p><Link className="footer-contact-link" href="/counselling">Book a counselling session ↗</Link></div>
  </div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Anugraha Training Institute</span><span>LEARN · PLAN · CREATE · LEAD</span><Link href="/contact">Contact admissions</Link></div>
</footer>}
