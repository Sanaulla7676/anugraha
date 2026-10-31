"use client";

import {useEffect,useLayoutEffect,useMemo,useRef,useState} from "react";

type FocusStyle="brackets"|"box"|"underline"|"highlight";
type Props={
 sentence?:string;separator?:string;manualMode?:boolean;focusStyle?:FocusStyle;
 order?:"sequential"|"random";easing?:"smooth"|"spring";blurAmount?:number;
 focusScale?:number;borderColor?:string;highlightColor?:string;glowColor?:string;
 animationDuration?:number;pauseBetweenAnimations?:number;cornerSize?:number;
 borderWidth?:number;unfocusedOpacity?:number;className?:string;
};

const FRAME_GAP=10;

export default function TrueFocus({
 sentence="True Focus",separator=" ",manualMode=false,focusStyle="brackets",
 order="sequential",easing="smooth",blurAmount=5,focusScale=1,
 borderColor="#D4B991",highlightColor="#D4B991",glowColor="transparent",
 animationDuration=.5,pauseBetweenAnimations=1,cornerSize=8,borderWidth=1.6,
 unfocusedOpacity=1,className=""
}:Props){
 const words=useMemo(()=>sentence.split(separator).filter(word=>word.trim()),[sentence,separator]);
 const [currentIndex,setCurrentIndex]=useState(0);
 const [rect,setRect]=useState<{x:number;y:number;width:number;height:number}|null>(null);
 const [reduced,setReduced]=useState(false);
 const host=useRef<HTMLSpanElement>(null);
 const wordRefs=useRef<Array<HTMLSpanElement|null>>([]);
 const activeIndex=words.length?currentIndex%words.length:-1;
 const duration=reduced?0:animationDuration;
 const ease=easing==="spring"?"cubic-bezier(.34,1.56,.64,1)":"cubic-bezier(.65,0,.35,1)";

 useEffect(()=>{
  const query=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>setReduced(query.matches);
  update();query.addEventListener("change",update);
  return()=>query.removeEventListener("change",update);
 },[]);

 useEffect(()=>{
  if(manualMode||reduced||words.length<2)return;
  const interval=window.setInterval(()=>{
   setCurrentIndex(previous=>{
    const current=previous%words.length;
    if(order!=="random")return(current+1)%words.length;
    const next=Math.floor(Math.random()*(words.length-1));
    return next>=current?next+1:next;
   });
  },(animationDuration+pauseBetweenAnimations)*1000);
  return()=>window.clearInterval(interval);
 },[animationDuration,manualMode,order,pauseBetweenAnimations,reduced,words.length]);

 useLayoutEffect(()=>{
  const container=host.current,word=wordRefs.current[activeIndex];
  if(!container||!word)return;
  const measure=()=>{
   const a=container.getBoundingClientRect(),b=word.getBoundingClientRect();
   const next={x:b.left-a.left,y:b.top-a.top,width:b.width,height:b.height};
   setRect(previous=>previous&&previous.x===next.x&&previous.y===next.y&&previous.width===next.width&&previous.height===next.height?previous:next);
  };
  measure();
  if(typeof ResizeObserver==="undefined")return;
  const observer=new ResizeObserver(measure);
  observer.observe(container);
  wordRefs.current.forEach(node=>node&&observer.observe(node));
  return()=>observer.disconnect();
 },[activeIndex,sentence,separator]);

 const frame=rect?{
  x:rect.x-(rect.width*(focusScale-1))/2,
  y:rect.y-(rect.height*(focusScale-1))/2,
  width:rect.width*focusScale,
  height:rect.height*focusScale
 }:null;
 const frameStyle:React.CSSProperties={
  "--focus-border":borderColor,
  "--focus-highlight":highlightColor,
  "--focus-glow":glowColor,
  "--focus-duration":`${duration}s`,
  "--focus-ease":ease,
  "--focus-corner":`${cornerSize}px`,
  "--focus-width":`${borderWidth}px`
 } as React.CSSProperties;

 const shape=frame?{
  box:{left:frame.x-FRAME_GAP,top:frame.y-FRAME_GAP,width:frame.width+FRAME_GAP*2,height:frame.height+FRAME_GAP*2},
  underline:{left:frame.x,top:frame.y+frame.height+FRAME_GAP*.4,width:frame.width,height:borderWidth},
  highlight:{left:frame.x-frame.height*.14,top:frame.y+frame.height*.04,width:frame.width+frame.height*.28,height:frame.height*.92}
 }:null;
 const corners=frame?{
  tl:{left:frame.x-FRAME_GAP,top:frame.y-FRAME_GAP},
  tr:{left:frame.x+frame.width+FRAME_GAP-cornerSize,top:frame.y-FRAME_GAP},
  bl:{left:frame.x-FRAME_GAP,top:frame.y+frame.height+FRAME_GAP-cornerSize},
  br:{left:frame.x+frame.width+FRAME_GAP-cornerSize,top:frame.y+frame.height+FRAME_GAP-cornerSize}
 }:null;

 return <span ref={host} className={`true-focus-button ${className}`} style={frameStyle} aria-label={sentence}>
  {words.map((word,index)=>{
   const active=index===activeIndex;
   return <span key={`${word}-${index}`} ref={node=>{wordRefs.current[index]=node;}}
    className={`true-focus-word ${manualMode?"manual":""} ${active&&!manualMode?"active":""}`}
    style={{filter:`blur(${active?0:blurAmount}px)`,opacity:active?1:unfocusedOpacity,transform:focusScale!==1?`scale(${active?focusScale:1})`:undefined}}
    onMouseEnter={()=>manualMode&&setCurrentIndex(index)} aria-hidden="true">{word}</span>;
  })}
  {focusStyle==="highlight"&&shape&&<span className="true-focus-highlight" aria-hidden="true" style={shape.highlight}/>}
  {shape&&corners&&focusStyle!=="highlight"&&<span className="true-focus-frame" aria-hidden="true">
   {focusStyle==="box"&&<span className="true-focus-box" style={shape.box}/>}
   {focusStyle==="underline"&&<span className="true-focus-underline" style={shape.underline}/>}
   {focusStyle==="brackets"&&<>
    <i className="focus-corner top-left" style={corners.tl}/><i className="focus-corner top-right" style={corners.tr}/>
    <i className="focus-corner bottom-left" style={corners.bl}/><i className="focus-corner bottom-right" style={corners.br}/>
   </>}
  </span>}
  <span className="sr-only">{sentence}</span>
 </span>;
}
