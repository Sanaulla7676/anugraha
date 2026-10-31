"use client";

import {useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState} from "react";
import {gsap} from "gsap";

type CursorStyle="character"|"bar"|"block"|"underscore";
type TypeEffect="none"|"fade"|"blur"|"rise";
type Props={
 text:string|string[];typingSpeed?:number;initialDelay?:number;pauseDuration?:number;
 deletingSpeed?:number;deleteMode?:"backspace"|"select";loop?:boolean;className?:string;
 showCursor?:boolean;hideCursorWhileTyping?:boolean;cursorStyle?:CursorStyle;
 cursorCharacter?:string;cursorColor?:string;cursorBlinkDuration?:number;cursorGlide?:boolean;
 typeEffect?:TypeEffect;prefix?:string;prefixColor?:string;textColors?:string[];
 startOnVisible?:boolean;reverseMode?:boolean;
};
const EFFECTS:Record<Exclude<TypeEffect,"none">,Keyframe[]>={
 fade:[{opacity:0},{opacity:1}],
 blur:[{opacity:0,filter:"blur(.3em)"},{opacity:1,filter:"blur(0)"}],
 rise:[{opacity:0,transform:"translateY(.35em)"},{opacity:1,transform:"translateY(0)"}]
};
const graphemes=(value:string)=>Array.from(value);

export default function TextType({
 text,typingSpeed=50,initialDelay=0,pauseDuration=1700,deletingSpeed=30,deleteMode="backspace",loop=true,
 className="",showCursor=true,hideCursorWhileTyping=false,cursorStyle="underscore",cursorCharacter="|",
 cursorColor="currentColor",cursorBlinkDuration=.5,cursorGlide=true,typeEffect="none",
 prefix="",prefixColor="currentColor",textColors=[],startOnVisible=false,reverseMode=false
}:Props){
 const textKey=Array.isArray(text)?text.join("\u0000"):String(text??"");
 const items=useMemo(()=>textKey.split("\u0000"),[textKey]);
 const [textIndex,setTextIndex]=useState(0);
 const [count,setCount]=useState(0);
 const [selected,setSelected]=useState(0);
 const [deleting,setDeleting]=useState(false);
 const [visible,setVisible]=useState(!startOnVisible);
 const [reduced,setReduced]=useState(false);
 const index=textIndex%Math.max(1,items.length);
 const chars=useMemo(()=>graphemes(items[index]||""),[items,index]);
 const total=chars.length;
 const shown=Math.min(count,total);
 const current=items[index]||"";
 const cursorRef=useRef<HTMLSpanElement>(null);
 const caretRef=useRef<HTMLSpanElement>(null);
 const rootRef=useRef<HTMLSpanElement>(null);
 const lastPosition=useRef<{x:number;y:number}|null>(null);
 const blinkTimeline=useRef<gsap.core.Timeline|null>(null);

 useEffect(()=>{
  const query=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>setReduced(query.matches);
  update();query.addEventListener("change",update);
  return()=>query.removeEventListener("change",update);
 },[]);

 useEffect(()=>{
  if(!startOnVisible||!rootRef.current)return;
  const observer=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting){setVisible(true);observer.disconnect();}
  },{threshold:.1});
  observer.observe(rootRef.current);
  return()=>observer.disconnect();
 },[startOnVisible]);

 useEffect(()=>{
  if(reduced){setCount(total);setDeleting(false);return;}
  if(!visible||!items.length)return;
  let timeout:number;
  const wait=(ms:number,fn:()=>void)=>{timeout=window.setTimeout(fn,ms);};
  if(!deleting){
   if(shown<total)wait(shown===0?initialDelay:typingSpeed,()=>setCount(shown+1));
   else if(loop||index<items.length-1)wait(pauseDuration,()=>setDeleting(true));
  }else if(shown>0){
   if(deleteMode==="select"){
    if(selected<shown)wait(deletingSpeed,()=>setSelected(selected+1));
    else wait(Math.max(160,deletingSpeed*8),()=>{setSelected(0);setCount(0);});
   }else wait(deletingSpeed,()=>setCount(shown-1));
  }else{
   setSelected(0);setDeleting(false);
   setTextIndex(previous=>loop?(previous+1)%items.length:Math.min(previous+1,items.length-1));
  }
  return()=>window.clearTimeout(timeout);
 },[count,deleteMode,deleting,deletingSpeed,index,initialDelay,items.length,loop,pauseDuration,reduced,selected,shown,total,typingSpeed,visible]);

 const placeCursor=useCallback((instant=false)=>{
  const caret=caretRef.current,cursor=cursorRef.current;
  if(!caret||!cursor)return;
  const x=caret.offsetLeft,y=caret.offsetTop;
  const previous=lastPosition.current;
  if(previous&&Math.abs(previous.x-x)<.5&&Math.abs(previous.y-y)<.5)return;
  lastPosition.current={x,y};
  if(instant||!previous||!cursorGlide||reduced||Math.abs((previous?.y??y)-y)>1){
   gsap.killTweensOf(cursor);gsap.set(cursor,{x,y});
  }else{
   gsap.to(cursor,{x,y,duration:.13,ease:"power3.out",overwrite:true});
  }
 },[cursorGlide,reduced]);

 useLayoutEffect(()=>{placeCursor(false);},[placeCursor,shown,selected,prefix,reverseMode]);
 useEffect(()=>{
  const node=rootRef.current;
  if(!node||typeof ResizeObserver==="undefined")return;
  const observer=new ResizeObserver(()=>placeCursor(true));
  observer.observe(node);
  return()=>observer.disconnect();
 },[placeCursor]);

 useEffect(()=>{
  const node=cursorRef.current;
  if(!node||!showCursor||reduced||cursorBlinkDuration<=0)return;
  const timeline=gsap.timeline({repeat:-1});
  timeline.to(node,{opacity:.15,duration:cursorBlinkDuration*.48,ease:"sine.inOut"})
    .to(node,{opacity:1,duration:cursorBlinkDuration*.48,ease:"sine.inOut"});
  blinkTimeline.current=timeline;
  return()=>{timeline.kill();gsap.killTweensOf(node);blinkTimeline.current=null;};
 },[cursorBlinkDuration,reduced,showCursor]);

 useEffect(()=>{
  if(reduced||typeEffect==="none"||!rootRef.current)return;
  const node=rootRef.current.querySelector(".text-type-content");
  if(node)node.animate(EFFECTS[typeEffect],{duration:typeEffect==="blur"?520:440,easing:"cubic-bezier(.22,1,.36,1)"});
 },[shown,typeEffect,reduced]);

 const visibleChars=reverseMode?chars.slice(total-shown):chars.slice(0,shown);
 const marked=Math.min(selected,shown);
 const contentChars=visibleChars.map((char,i)=>{
  const isSelected=deleteMode==="select"&&(reverseMode?i<marked:i>=shown-marked);
  return <span key={`${index}-${i}`} className={isSelected?"text-type-char text-type-char-selected":"text-type-char"}>{char}</span>;
 });
 const typing=shown<total||deleting;
 const hide=hideCursorWhileTyping&&typing;
 const activeColor=textColors.length?textColors[index%textColors.length]:"inherit";

 return <span className={`text-type-root ${className}`} ref={rootRef} aria-label={prefix+items.join(" ")}>
  <span className="text-type-sr">{prefix+items.join(" ")}</span>
  <span className="text-type-content" aria-hidden="true">
   {prefix&&<span className="text-type-prefix" style={{color:prefixColor}}>{prefix}</span>}
   <span style={{color:activeColor}}>{contentChars}</span>
   <span ref={caretRef} className="text-type-caret">{"\u200B"}</span>
  </span>
  {showCursor&&<span ref={cursorRef} aria-hidden="true" className={`text-type-cursor text-type-cursor--${cursorStyle} ${hide?"text-type-cursor-hidden":""}`} style={cursorColor!=="currentColor"?{color:cursorColor}:undefined}>
   {cursorStyle==="character"?cursorCharacter:<span className="text-type-cursor-shape"/>}
  </span>}
 </span>;
}
