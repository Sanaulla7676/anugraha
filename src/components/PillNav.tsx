"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { nav } from "@/lib/site";

export default function PillNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);

  const activeIndex = Math.max(0, nav.findIndex((item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))));

  const moveIndicator = useCallback((index: number) => {
    const host = list.current;
    const marker = indicator.current;
    const item = host?.children.item(index) as HTMLElement | null;
    if (!host || !marker || !item) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(marker, { x: item.offsetLeft, width: item.offsetWidth });
      return;
    }
    gsap.to(marker, { x: item.offsetLeft, width: item.offsetWidth, duration: .56, ease: "elastic.out(1, .72)", overwrite: true });
  }, []);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setCollapsed(entry.contentRect.width < 760));
    observer.observe(element);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) gsap.fromTo(element, { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: .72, ease: "power3.out" });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    moveIndicator(activeIndex);
    const host = list.current;
    if (!host) return;
    const observer = new ResizeObserver(() => moveIndicator(activeIndex));
    observer.observe(host);
    return () => observer.disconnect();
  }, [activeIndex, moveIndicator, collapsed]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const closeOutside = (event: PointerEvent) => {
      if (root.current && event.target instanceof Node && !root.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav ref={root} className={`pill-nav ${collapsed ? "is-collapsed" : ""} ${open ? "is-open" : ""}`} aria-label="Main navigation">
      {!collapsed ? (
        <div className="pill-nav-track">
          <span ref={indicator} className="pill-nav-indicator" aria-hidden="true" />
          <ul ref={list}>
            {nav.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className={index === activeIndex ? "pill-nav-link active" : "pill-nav-link"} aria-current={index === activeIndex ? "page" : undefined}
                  onPointerEnter={() => moveIndicator(index)} onFocus={() => moveIndicator(index)} onClick={close}>
                  <span>{item.label}</span><i aria-hidden="true">·</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <button className="pill-nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            <span className="pill-nav-toggle-label">Explore Anugraha</span>
            <span className="pill-burger" aria-hidden="true"><i/><i/></span>
          </button>
          <div className="pill-nav-panel" id="mobile-navigation" aria-hidden={!open}>
            {nav.map((item, index) => (
              <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} className={pathname === item.href ? "pill-nav-row active" : "pill-nav-row"} style={{ transitionDelay: open ? `${index * 28}ms` : "0ms" }} onClick={close}>
                <span>{item.label}</span><span aria-hidden="true">↗</span>
              </Link>
            ))}
            <a className="pill-nav-row pill-nav-row-cta" href="tel:9686568245" tabIndex={open ? 0 : -1} onClick={close}>Call admissions <span>96865 68245</span></a>
          </div>
        </>
      )}
    </nav>
  );
}
