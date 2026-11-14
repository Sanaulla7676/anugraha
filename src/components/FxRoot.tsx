"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applyFx } from "@/lib/fx";

gsap.registerPlugin(ScrollTrigger);

/** Global motion layer: preloader, smooth scroll, progress bar, cursor ring, page-enter and data-fx runner. */
export default function FxRoot() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  // nv-preloader (first visit per session only)
  useEffect(() => {
    const el = loader.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false; try { seen = sessionStorage.getItem("anu-intro") === "1"; } catch { /* private mode */ }
    if (seen || reduce) { setDone(true); return; }
    const fill = el.querySelector<HTMLElement>(".pl-fill"); const pct = el.querySelector<HTMLElement>(".pl-pct");
    const p = { v: 0 };
    const tl = gsap.timeline({ onComplete: () => { try { sessionStorage.setItem("anu-intro", "1"); } catch { /* noop */ } setDone(true); } });
    tl.to(p, { v: 100, duration: 1.1, ease: "power2.inOut", onUpdate: () => { if (fill) fill.style.transform = `scaleX(${p.v / 100})`; if (pct) pct.textContent = Math.round(p.v) + "%"; } })
      .to(el.querySelector(".pl-inner"), { y: -30, opacity: 0, duration: 0.35 })
      .to(el, { yPercent: -100, duration: 0.7, ease: "power4.inOut" });
    return () => { tl.kill(); };
  }, []);

  // nv-smooth-scroll (Lenis) + sc-progress-bar
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
    const onScroll = () => { const h = document.documentElement.scrollHeight - window.innerHeight; if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`; };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { window.removeEventListener("scroll", onScroll); gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  // ix-cursor-follow: global ring (fine pointers only)
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = cursor.current; if (!el) return;
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" }); const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    const move = (e: PointerEvent) => { el.style.opacity = "1"; x(e.clientX); y(e.clientY); };
    window.addEventListener("pointermove", move); return () => window.removeEventListener("pointermove", move);
  }, []);

  // nv-page-enter + data-fx runner on every route
  useEffect(() => {
    const main = document.querySelector("main");
    if (main && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.fromTo(main, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", clearProps: "transform" });
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    const cleanup = applyFx(document);
    window.scrollTo(0, 0);
    return () => { window.clearTimeout(t); cleanup(); };
  }, [pathname]);

  return (
    <>
      <div className="progress-bar" ref={bar} aria-hidden="true" />
      <div className="fx-cursor" ref={cursor} aria-hidden="true" />
      {!done && (
        <div className="preloader" ref={loader} aria-hidden="true">
          <div className="pl-inner"><Image src="/anugraha-symbol.svg" alt="" width={72} height={72} /><p>ANUGRAHA</p><div className="pl-bar"><i className="pl-fill" /></div><small className="pl-pct">0%</small></div>
        </div>
      )}
    </>
  );
}
