import Link from "next/link";
import Image from "next/image";
import PillNav from "@/components/PillNav";
export default function SiteHeader(){return <header className="site-header"><div className="header-inner">
<Link href="/" className="brand-lockup" aria-label="Anugraha Training Institute home"><Image src="/anugraha-symbol.svg" alt="" width={48} height={48} priority/><span className="brand-wordmark"><strong>ANUGRAHA</strong><small>TRAINING INSTITUTE</small></span></Link>
<PillNav/><Link className="header-admissions" href="/admissions">Admissions <span>↗</span></Link>
</div></header>}
