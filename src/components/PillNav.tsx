"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useLayoutEffect,useRef,useState} from "react";
import {gsap} from "gsap";
import {nav} from "@/lib/site";

export default function PillNav(){
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  const [collapsed,setCollapsed]=useState(false);
  const root=useRef<HTMLElement>(null);
  const list=useRef<HTMLUListElement>(null);
  const marker=useRef<HTMLSpanElement>(null);
  const matched=nav.findIndex(item=>pathname===item.href||(item.href!=="/"&&pathname.startsWith(item.href)));
  const fallback=pathname.startsWith("/founders")||pathname.startsWith("/gallery")||pathname.startsWith("/contact")?"/about":
    pathname.startsWith("/curriculum")||pathname.startsWith("/projects")||pathname.startsWith("/roadmap")||pathname.startsWith("/student-stories")||pathname.startsWith("/resources")?"/curriculum":
    pathname.startsWith("/admissions")||pathname.startsWith("/counselling")||pathname.startsWith("/faq")?"/course":"/";
  const active=matched>=0?matched:Math.max(0,nav.findIndex(item=>item.href===fallback));

  useEffect(()=>{
    const el=root.current;if(!el)return;
    const update=()=>setCollapsed(window.innerWidth<1040);
    update();window.addEventListener("resize",update,{passive:true});
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    if(!media.matches)gsap.fromTo(el,{y:-12,opacity:0},{y:0,opacity:1,duration:.7,ease:"power3.out"});
    return()=>window.removeEventListener("resize",update);
  },[]);

  const move=(index:number)=>{
    const item=list.current?.children.item(index) as HTMLElement|null;
    if(!item||!marker.current)return;
    gsap.to(marker.current,{x:item.offsetLeft,width:item.offsetWidth,duration:.54,ease:"elastic.out(1,.72)",overwrite:true});
  };

  useLayoutEffect(()=>{move(active);},[active,collapsed]);

  useEffect(()=>{
    if(!open)return;
    const escape=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};
    const outside=(e:PointerEvent)=>{if(root.current&&!root.current.contains(e.target as Node))setOpen(false)};
    document.addEventListener("keydown",escape);document.addEventListener("pointerdown",outside);
    return()=>{document.removeEventListener("keydown",escape);document.removeEventListener("pointerdown",outside)};
  },[open]);

  return <nav ref={root} className={`pill-nav ${collapsed?"is-collapsed":""} ${open?"is-open":""}`} aria-label="Main navigation">
    {!collapsed?<div className="pill-nav-track" onPointerLeave={()=>move(active)}>
      <span ref={marker} className="pill-nav-indicator" aria-hidden="true"/>
      <ul ref={list}>{nav.map((item,index)=><li key={item.href}>
        <Link href={item.href} aria-current={active===index?"page":undefined} className={active===index?"pill-nav-link active":"pill-nav-link"}
          onPointerEnter={()=>move(index)} onFocus={()=>move(index)} onClick={()=>setOpen(false)}>{item.label}</Link>
      </li>)}</ul>
    </div>:<>
      <button className="pill-nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}>
        <span>Explore</span><span className="pill-burger"><i/><i/></span>
      </button>
      {open&&<div className="pill-nav-panel" id="mobile-navigation">
        {nav.map((item,index)=><Link href={item.href} key={item.href} className={pathname===item.href?"pill-nav-row active":"pill-nav-row"} style={{animationDelay:`${index*38}ms`}} onClick={()=>setOpen(false)}>{item.label}<span>↗</span></Link>)}
        <a className="pill-nav-row pill-nav-row-cta" href="tel:9686568245" onClick={()=>setOpen(false)}>Call admissions <span>96865 68245</span></a>
      </div>}
    </>}
  </nav>;
}
