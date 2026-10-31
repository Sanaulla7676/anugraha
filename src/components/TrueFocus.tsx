"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
  manualMode?: boolean;
};

export default function TrueFocus({ words, interval = 2100, manualMode = false }: Props) {
  const [active, setActive] = useState(0);
  const [rect, setRect] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const container = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (manualMode || words.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % words.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, manualMode, words.length]);

  useLayoutEffect(() => {
    const host = container.current;
    const word = wordRefs.current[active];
    if (!host || !word) return;
    const measure = () => {
      const hostRect = host.getBoundingClientRect();
      const wordRect = word.getBoundingClientRect();
      setRect({ left: wordRect.left - hostRect.left, top: wordRect.top - hostRect.top, width: wordRect.width, height: wordRect.height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    wordRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [active, words]);

  return (
    <span className="true-focus" ref={container}>
      {words.map((word, index) => (
        <span
          key={word}
          ref={(node) => { wordRefs.current[index] = node; }}
          className={index === active ? "true-focus-word is-active" : "true-focus-word"}
          onMouseEnter={() => manualMode && setActive(index)}
          aria-hidden={index !== active}
        >
          {word}
        </span>
      ))}
      <span className="true-focus-frame" aria-hidden="true" style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}>
        <i className="focus-corner corner-tl" /><i className="focus-corner corner-tr" />
        <i className="focus-corner corner-bl" /><i className="focus-corner corner-br" />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
