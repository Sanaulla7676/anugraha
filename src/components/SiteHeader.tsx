"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import PillNav from "@/components/PillNav";
import SearchOverlay from "@/components/SearchOverlay";
import { nav, navGroup } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  // nv-nav-hide: slide away on scroll down, return on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const fn = () => { const y = window.scrollY; setSolid(y > 60); setHidden(y > last && y > 240); last = y; };
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMenu(false); }, [pathname]);

  return (
    <>
      <header className={`site-header${hidden ? " is-hidden" : ""}${solid ? " is-solid" : ""}`}>
        <Link href="/" className="brand" aria-label="Anugraha Training Institute home"><Image src="/anugraha-symbol.svg" alt="" width={40} height={40} priority /><span>ANUGRAHA</span></Link>
        <PillNav />
        <div className="hd-right">
          <button className="glass-pill hd-search" onClick={() => setSearch(true)} aria-label="Search"><Search size={26} aria-hidden="true" /><span>Search</span></button>
          <Link className="glass-pill hd-bell" href="/admissions" aria-label="Next batch — admissions"><Bell size={28} aria-hidden="true" /><i className="dot" /></Link>
          <Link className="btn-brand" href="/counselling">Book Counselling</Link>
        </div>
        <div className="hd-mobile">
          <Link className="btn-brand" href="/counselling">Book</Link>
          <button className="glass-pill hd-burger" onClick={() => setMenu(v => !v)} aria-expanded={menu} aria-controls="mobile-menu" aria-label="Menu">{menu ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </header>
      {menu && (
        <div className="mobile-menu" id="mobile-menu">
          {nav.map(n => <Link key={n.href} href={n.href} className={navGroup(pathname) === n.href ? "is-active" : ""}>{n.label}</Link>)}
          <Link href="/admissions">Admissions</Link>
          <Link href="/careers">Careers</Link>
          <button onClick={() => { setMenu(false); setSearch(true); }}>Search</button>
          <a href="tel:9686568245">Call 96865 68245</a>
        </div>
      )}
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}
