"use client";
import {useEffect,useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ClipboardList,Lightbulb,Calculator,Network,CalendarCheck} from "lucide-react";
const steps=[
 ["01","BRIEF","Understand the client, purpose, audience and event requirements.",ClipboardList],
 ["02","CONCEPT","Shape the idea, experience, venue approach and creative direction.",Lightbulb],
 ["03","BUDGET","Build quotations, supplier estimates, costing and clear scope.",Calculator],
 ["04","COORDINATE","Connect vendors, teams, production, schedules and responsibilities.",Network],
 ["05","EXECUTE","Follow the run sheet, solve problems and review the outcome.",CalendarCheck]
] as const;
export default function HomeStoryboard(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{
  const node=ref.current;if(!node)return;
  gsap.registerPlugin(ScrollTrigger);
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const ctx=gsap.context(()=>{
   gsap.fromTo(".ng-story-line",{scaleX:0},{scaleX:1,ease:"none",scrollTrigger:{trigger:node,start:"top 68%",end:"center 48%",scrub:true}});
   gsap.fromTo(".ng-story-step",{y:36,opacity:0},{y:0,opacity:1,duration:.72,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:node,start:"top 75%",once:true}});
   gsap.to(".ng-story-orbit",{rotate:360,duration:14,repeat:-1,ease:"none",transformOrigin:"center"});
  },node);
  return()=>ctx.revert();
 },[]);
 return <section className="ng-storyboard" ref={ref} aria-labelledby="ng-story-heading">
  <div className="ng-story-head"><span className="ng-story-kicker">THE EVENT STORYBOARD · FROM BRIEF TO SPOTLIGHT</span><h2 id="ng-story-heading">Every great event has a plan behind it.</h2><p>See how the learning connects: one clear brief becomes a creative, costed and coordinated event plan.</p></div>
  <div className="ng-story-track"><div className="ng-story-line" aria-hidden="true"/>{steps.map(([number,title,body,Icon])=><article className="ng-story-step" key={number}><div className="ng-story-node"><span className="ng-story-orbit"/><Icon size={24}/></div><small>STAGE {number}</small><h3>{title}</h3><p>{body}</p></article>)}</div>
 </section>;
}
