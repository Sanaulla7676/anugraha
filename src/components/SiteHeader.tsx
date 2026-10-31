import Link from "next/link";
import Image from "next/image";
import PillNav from "@/components/PillNav";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Anugraha Training Institute home">
          <Image src="/anugraha-symbol.svg" alt="" width={48} height={48} priority />
          <span className="brand-wordmark"><strong>ANUGRAHA</strong><small>TRAINING INSTITUTE</small></span>
        </Link>
        <PillNav />
        <a className="header-call" href="tel:9686568245"><span>Admissions</span><b>96865 68245</b></a>
      </div>
    </header>
  );
}
