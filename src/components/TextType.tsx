"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Props={
  text:string|string[];
  typingSpeed?:number;
  initialDelay?:number;
  pauseDuration?:number;
  deletingSpeed?:number;
  loop?:boolean;
  cursorCharacter?:string;
  cursorColor?:string;
  cursorBlinkDuration?:number;
  cursorGlide?:boolean;
  typeEffect?:"none"|"fade"|"blur"|"rise";
  startOnVisible?:boolean;
  className?:string;
};

export default function TextType({
  text,typingSpeed=48,initialDelay=0,pauseDuration=1700,deletingSpeed=27,loop=true,
  cursorCharacter="_",cursorColor="currentColor",cursorBlinkDuration=.5,cursorGlide=true,
  typeEffect="none",startOnVisible=true,className=""
}:Props){
  const items=Array.isArray(text)?text:[text];
  const [index,setIndex]=useState(0);
  const [count,setCount]=useState(0);
  const [deleting,setDeleting]=useState(false);
  const [visible,setVisible]=useState(!startOnVisible);
  const [reduce,setReduce]=useState(false);
  const root=useRef<HTMLSpanElement>(null);
  const caret=useRef<HTMLSpanElement>(null);
  const cursor=useRef<HTMLSpanElement>(null);
  const blink=useRef<gsap.core.Tween|null>(null);
  const last=useRef<{x:number;y:number}|null>(null);
  const current=items[index%items.length]??"";
  const shown=current.slice(0,count);

  useEffect(()=>{
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    const update=()=>setReduce(media.matches);
    update();media.addEventListener("change",update);
    return()=>media.removeEventListener("change",update);
  },[]);

  useEffect(()=>{
    if(!startOnVisible||!root.current)return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){setVisible(true);observer.disconnect();}
    },{threshold:.18});
    observer.observe(root.current);
    return()=>observer.disconnect();
  },[startOnVisible]);

  useEffect(()=>{
    if(reduce){setCount(current.length);setDeleting(false);return;}
    if(!visible||!items.length)return;
    const delay=deleting?deletingSpeed:count===current.length?pauseDuration:(count===0?initialDelay:typingSpeed);
    const timer=window.setTimeout(()=>{
      if(!deleting&&count<current.length)setCount(v=>v+1);
      else if(!deleting)setDeleting(true);
      else if(count>0)setCount(v=>v-1);
      else{setDeleting(false);setIndex(v=>loop?(v+1)%items.length:Math.min(v+1,items.length-1));}
    },delay);
    return()=>window.clearTimeout(timer);
  },[count,current.length,deleting,deletingSpeed,initialDelay,items.length,loop,pauseDuration,reduce,typingSpeed,visible]);

  useLayoutEffect(()=>{
    const point=caret.current,mark=cursor.current;
    if(!point||!mark)return;
    const x=point.offsetLeft,y=point.offsetTop;
    if(!last.current||!cursorGlide||reduce||Math.abs(last.current.y-y)>1){
      gsap.killTweensOf(mark);gsap.set(mark,{x,y});
    }else{
      gsap.to(mark,{x,y,duration:.13,ease:"power3.out",overwrite:true});
    }
    last.current={x,y};
  },[shown,cursorGlide,reduce]);

  useEffect(()=>{
    const node=cursor.current;
    if(!node||reduce||cursorBlinkDuration<=0)return;
    const tween=gsap.to(node,{opacity:.12,duration:cursorBlinkDuration*.48,repeat:-1,yoyo:true,ease:"sine.inOut"});
    blink.current=tween;
    return()=>{tween.kill();gsap.killTweensOf(node);blink.current=null;};
  },[cursorBlinkDuration,reduce]);

  useEffect(()=>{
    if(reduce||typeEffect==="none"||!root.current)return;
    const node=root.current.querySelector(".text-type-content");
    if(!node)return;
    const effects:Record<string,Keyframe[]>={fade:[{opacity:0},{opacity:1}],blur:[{opacity:0,filter:"blur(.35em)"},{opacity:1,filter:"blur(0)"}],rise:[{opacity:0,transform:"translateY(.35em)"},{opacity:1,transform:"translateY(0)"}]};
    node.animate(effects[typeEffect],{duration:typeEffect==="blur"?500:420,easing:"cubic-bezier(.22,1,.36,1)"});
  },[shown,typeEffect,reduce]);

  return <span className={`text-type-root ${className}`} ref={root} aria-label={items.join(" / ")}>
    <span className="text-type-content" aria-hidden>{shown}<span ref={caret} className="text-type-caret">​</span></span>
    <span ref={cursor} className="text-type-cursor" style={{color:cursorColor}} aria-hidden>{cursorCharacter}</span>
    <span className="sr-only">{current}</span>
  </span>;
}
