"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Menu,X,ChevronDown} from "lucide-react";
import {nav} from "@/lib/site";
export default function SiteHeader(){const path=usePathname();const [open,setOpen]=useState(false);return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" aria-label="Anugraha home"><span className="brand-mark"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5C13 18 8 24 24 42c16-18 11-24 0-37Z" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M24 15c-7 8-8 14 0 21 8-7 7-13 0-21ZM7 30c6 0 11 2 17 12 6-10 11-12 17-12" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="24" cy="6" r="2" fill="currentColor"/></svg></span><span className="brand-copy"><b>ANUGRAHA</b><small>TRAINING INSTITUTE</small></span></Link><nav className={open?"main-nav is-open":"main-nav"} aria-label="Main navigation">{nav.map(n=><Link key={n.href} onClick={()=>setOpen(false)} className={path===n.href?"nav-link active":"nav-link"} href={n.href}>{n.label}</Link>)}</nav><Link className="nav-cta" href="/counselling">Book Counselling <span>↗</span></Link><button className="menu-toggle" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
