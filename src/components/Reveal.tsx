"use client";

import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Variant="rise"|"left"|"right"|"clip"|"scale"|"stagger"|"fade";
export default function Reveal({children,className="",variant="rise",delay=0}:{children:React.ReactNode;className?:string;variant?:Variant;delay?:number}){
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const element=root.current;
    if(!element)return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce){gsap.set(element,{clearProps:"all"});return;}
    const context=gsap.context(()=>{
      const from:Record<Variant,gsap.TweenVars>={
        rise:{y:42,opacity:0},left:{x:-54,opacity:0},right:{x:54,opacity:0},
        clip:{clipPath:"inset(0 0 100% 0)",opacity:.35},scale:{scale:.94,opacity:0},
        stagger:{y:24,opacity:0},fade:{opacity:0}
      };
      const targets=variant==="stagger"?Array.from(element.children):element;
      gsap.fromTo(targets,from[variant],{
        x:0,y:0,scale:1,opacity:1,clipPath:"inset(0 0 0% 0)",
        duration:variant==="clip"?.95:.78,delay,ease:"power3.out",
        stagger:variant==="stagger"?.11:0,
        scrollTrigger:{trigger:element,start:"top 86%",once:true}
      });
    },element);
    return()=>context.revert();
  },[variant,delay]);
  return <div ref={root} className={className}>{children}</div>;
}
