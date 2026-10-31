"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type Props = {
  sentence: string;
  separator?: string;
  manualMode?: boolean;
  focusStyle?: "brackets" | "box" | "underline" | "highlight";
  order?: "sequential" | "random";
  blurAmount?: number;
  focusScale?: number;
  borderColor?: string;
  highlightColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  cornerSize?: number;
  borderWidth?: number;
  unfocusedOpacity?: number;
  className?: string;
};

export default function TrueFocus({
  sentence,
  separator=" ",
  manualMode=false,
  focusStyle="brackets",
  order="sequential",
  blurAmount=4,
  focusScale=1,
  borderColor="#B88A4A",
  highlightColor="#D4B991",
  animationDuration=.5,
  pauseBetweenAnimations=1.15,
  cornerSize=7,
  borderWidth=1.5,
  unfocusedOpacity=.76,
  className=""
}:Props) {
  const words=useMemo(()=>sentence.split(separator).filter(Boolean),[sentence,separator]);
  const [currentIndex,setCurrentIndex]=useState(0);
  const [rect,setRect]=useState({x:0,y:0,width:0,height:0});
  const host=useRef<HTMLSpanElement>(null);
  const wordRefs=useRef<Array<HTMLSpanElement|null>>([]);
  const reduce=useRef(false);

  useEffect(()=>{
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    const update=()=>{reduce.current=media.matches;};
    update();
    media.addEventListener("change",update);
    return ()=>media.removeEventListener("change",update);
  },[]);

  useEffect(()=>{
    if(manualMode||words.length<2||reduce.current)return;
    const timer=window.setInterval(()=>{
      setCurrentIndex(previous=>{
        if(order!=="random")return(previous+1)%words.length;
        const next=Math.floor(Math.random()*Math.max(1,words.length-1));
        return next>=previous?next+1:next;
      });
    },(animationDuration+pauseBetweenAnimations)*1000);
    return()=>window.clearInterval(timer);
  },[animationDuration,manualMode,order,pauseBetweenAnimations,words.length]);

  useLayoutEffect(()=>{
    const root=host.current;
    const word=wordRefs.current[currentIndex];
    if(!root||!word)return;
    const measure=()=>{
      const a=root.getBoundingClientRect(),b=word.getBoundingClientRect();
      setRect({x:b.left-a.left,y:b.top-a.top,width:b.width,height:b.height});
    };
    measure();
    const observer=new ResizeObserver(measure);
    observer.observe(root);
    wordRefs.current.forEach(node=>node&&observer.observe(node));
    return()=>observer.disconnect();
  },[currentIndex,sentence]);

  const style={
    "--focus-border":borderColor,
    "--focus-highlight":highlightColor,
    "--focus-width":`${borderWidth}px`,
    "--focus-corner":`${cornerSize}px`,
    "--focus-duration":`${animationDuration}s`
  } as React.CSSProperties;

  return <span ref={host} className={`true-focus-button ${className}`} style={style}>
    {words.map((word,index)=>{
      const active=index===currentIndex;
      return <span key={`${word}-${index}`} ref={node=>{wordRefs.current[index]=node;}}
        className={`true-focus-word ${active?"is-focused":""}`}
        style={{filter:`blur(${active?0:blurAmount}px)`,opacity:active?1:unfocusedOpacity,transform:active&&focusScale!==1?`scale(${focusScale})`:"scale(1)"}}
        onMouseEnter={()=>manualMode&&setCurrentIndex(index)} aria-hidden={!active}>{word}</span>;
    })}
    {focusStyle==="highlight"&&<span aria-hidden className="true-focus-highlight" style={{left:rect.x-3,top:rect.y-2,width:rect.width+6,height:rect.height+4}}/>}
    {focusStyle!=="highlight"&&<span aria-hidden className={`true-focus-frame true-focus-${focusStyle}`} style={{left:rect.x-5,top:rect.y-3,width:rect.width+10,height:rect.height+6}}>
      {focusStyle==="brackets"&&<><i className="focus-corner tl"/><i className="focus-corner tr"/><i className="focus-corner bl"/><i className="focus-corner br"/></>}
    </span>}
    <span className="sr-only">{sentence}</span>
  </span>;
}
