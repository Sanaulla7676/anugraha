"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { nav, navGroup } from "@/lib/nav";

/** nv-pill-morph: the active orange pill glides to the hovered link with an elastic ease. */
export default function PillNav() {
  const pathname = usePathname();
  const active = Math.max(0, nav.findIndex(n => n.href === navGroup(pathname)));
  const list = useRef<HTMLUListElement>(null);
  const marker = useRef<HTMLSpanElement>(null);
  const move = (i: number, instant = false) => {
    const el = list.current?.children.item(i) as HTMLElement | null;
    if (!el || !marker.current) return;
    gsap.to(marker.current, { x: el.offsetLeft, width: el.offsetWidth, duration: instant ? 0 : 0.55, ease: "elastic.out(1,.75)", overwrite: true });
  };
  useLayoutEffect(() => { move(active, true); const r = () => move(active, true); window.addEventListener("resize", r); return () => window.removeEventListener("resize", r); }, [active]);
  return (
    <nav className="pill-nav" aria-label="Main navigation" onPointerLeave={() => move(active)}>
      <span ref={marker} className="pill-marker" aria-hidden="true" />
      <ul ref={list}>
        {nav.map((n, i) => (
          <li key={n.href}>
            <Link href={n.href} className={i === active ? "is-active" : ""} aria-current={i === active ? "page" : undefined} onPointerEnter={() => move(i)} onFocus={() => move(i)}>{n.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
