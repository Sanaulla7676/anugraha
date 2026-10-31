"use client";

import Link from "next/link";
import Image from "next/image";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
import PillNav from "@/components/PillNav";

export default function SiteHeader(){
 const pathname=usePathname();
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{
  const update=()=>setScrolled(window.scrollY>42);
  update();
  window.addEventListener("scroll",update,{passive:true});
  return()=>window.removeEventListener("scroll",update);
 },[pathname]);
 return <header className={`site-header ${scrolled?"is-scrolled":"is-over-hero"}`}>
  <div className="header-inner">
   <Link href="/" className="brand-lockup" aria-label="Anugraha Training Institute home">
    <Image src="/anugraha-symbol.svg" alt="" width={48} height={48} priority/>
    <span className="brand-wordmark"><strong>ANUGRAHA</strong><small>TRAINING INSTITUTE</small></span>
   </Link>
   <PillNav/>
   <Link className="header-admissions" href="/admissions">Admissions <span>↗</span></Link>
  </div>
 </header>;
}
