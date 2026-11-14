"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Player = dynamic(() => import("./remotion/RemotionPlayer"), { ssr: false });

/** Remotion motion graphic, mounted only when scrolled near the viewport. */
export default function MotionGraphic({ id, label, className = "" }: { id: string; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "200px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`mg-frame ${className}`} role="img" aria-label={label}>
      {show ? <Player id={id} /> : <div className="mg-skeleton" />}
    </div>
  );
}
