"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Props = { items: string[]; typingSpeed?: number; deletingSpeed?: number; pauseDuration?: number };

export default function TextType({ items, typingSpeed = 68, deletingSpeed = 38, pauseDuration = 1450 }: Props) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const cursor = useRef<HTMLSpanElement>(null);
  const text = items[index] ?? "";

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      return;
    }
    const delay = deleting ? deletingSpeed : count === text.length ? pauseDuration : typingSpeed;
    const timer = window.setTimeout(() => {
      if (!deleting && count < text.length) setCount((value) => value + 1);
      else if (!deleting) setDeleting(true);
      else if (count > 0) setCount((value) => value - 1);
      else { setDeleting(false); setIndex((value) => (value + 1) % items.length); }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [count, deleting, deletingSpeed, items.length, pauseDuration, text, typingSpeed]);

  useEffect(() => {
    if (!cursor.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(cursor.current, { opacity: 0, duration: .45, repeat: -1, yoyo: true, ease: "sine.inOut" });
    return () => { tween.kill(); };
  }, []);

  return <span className="text-type" aria-label={items.join(", ")}><span aria-hidden="true">{text.slice(0, count)}</span><span className="text-type-cursor" ref={cursor} aria-hidden="true">_</span><span className="sr-only">{text}</span></span>;
}
