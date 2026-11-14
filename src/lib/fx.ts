"use client";
// Animation engine. Any element opts in with data-fx="id id2". Ids are catalogued in fx-catalogue.ts.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Ctx = { delay: number; dur: number; cleanup: (fn: () => void) => void };
type Run = (el: HTMLElement, c: Ctx) => void;

const num = (v: string | undefined, d: number) => (v !== undefined && v !== "" && !Number.isNaN(Number(v)) ? Number(v) : d);
const trig = (el: Element, extra: Record<string, unknown> = {}) => ({ trigger: el, start: "top 88%", once: true, ...extra });

/* ---------- A. Scroll reveals ---------- */
type RvDef = { from: gsap.TweenVars; to?: gsap.TweenVars; kids?: boolean; ease?: string; dur?: number };
const CLIP_OPEN = (c: string) => ({ clipPath: c });
const RV: Record<string, RvDef> = {
  "rv-fade-up": { from: { y: 48, opacity: 0 } },
  "rv-fade-down": { from: { y: -48, opacity: 0 } },
  "rv-fade-left": { from: { x: -60, opacity: 0 } },
  "rv-fade-right": { from: { x: 60, opacity: 0 } },
  "rv-zoom-in": { from: { scale: 0.8, opacity: 0 } },
  "rv-zoom-out": { from: { scale: 1.25, opacity: 0 } },
  "rv-flip-x": { from: { rotationX: -80, opacity: 0, transformPerspective: 900 } },
  "rv-flip-y": { from: { rotationY: 80, opacity: 0, transformPerspective: 900 } },
  "rv-rotate-in": { from: { rotation: -8, y: 30, opacity: 0 } },
  "rv-skew-up": { from: { skewY: 7, y: 50, opacity: 0 } },
  "rv-blur-in": { from: { filter: "blur(18px)", opacity: 0 }, to: { filter: "blur(0px)", opacity: 1 } },
  "rv-clip-up": { from: CLIP_OPEN("inset(100% 0 0 0)"), to: CLIP_OPEN("inset(0% 0 0 0)") },
  "rv-clip-down": { from: CLIP_OPEN("inset(0 0 100% 0)"), to: CLIP_OPEN("inset(0 0 0% 0)") },
  "rv-clip-left": { from: CLIP_OPEN("inset(0 100% 0 0)"), to: CLIP_OPEN("inset(0 0% 0 0)") },
  "rv-clip-right": { from: CLIP_OPEN("inset(0 0 0 100%)"), to: CLIP_OPEN("inset(0 0 0 0%)") },
  "rv-clip-circle": { from: CLIP_OPEN("circle(0% at 50% 50%)"), to: CLIP_OPEN("circle(80% at 50% 50%)") },
  "rv-clip-diamond": {
    from: CLIP_OPEN("polygon(50% 50%,50% 50%,50% 50%,50% 50%)"),
    to: CLIP_OPEN("polygon(50% -60%,160% 50%,50% 160%,-60% 50%)")
  },
  "rv-slide-far-left": { from: { x: -240, opacity: 0 } },
  "rv-slide-far-right": { from: { x: 240, opacity: 0 } },
  "rv-drop-bounce": { from: { y: -120, opacity: 0 }, ease: "bounce.out", dur: 1.1 },
  "rv-elastic-pop": { from: { scale: 0.4, opacity: 0 }, ease: "elastic.out(1,.6)", dur: 1.2 },
  "rv-tilt-rise": { from: { y: 70, rotation: 4, opacity: 0 } },
  "rv-swing-in": { from: { rotationX: 60, transformOrigin: "top center", opacity: 0, transformPerspective: 700 }, ease: "back.out(1.6)" },
  "rv-expand-x": { from: { scaleX: 0, transformOrigin: "left center", opacity: 0.2 } },
  "rv-focus-in": { from: { filter: "blur(12px)", scale: 1.15, opacity: 0 }, to: { filter: "blur(0px)", scale: 1, opacity: 1 } },
  "rv-glow-in": { from: { filter: "brightness(3) saturate(0)", opacity: 0 }, to: { filter: "brightness(1) saturate(1)", opacity: 1 } },
  "rv-stagger-up": { from: { y: 40, opacity: 0 }, kids: true },
  "rv-stagger-scale": { from: { scale: 0.85, opacity: 0 }, kids: true },
  "rv-stagger-left": { from: { x: -50, opacity: 0 }, kids: true },
  "rv-stagger-clip": { from: CLIP_OPEN("inset(100% 0 0 0)"), to: CLIP_OPEN("inset(0% 0 0 0)"), kids: true }
};

const reveal = (id: string): Run => (el, c) => {
  const d = RV[id];
  const targets = d.kids ? Array.from(el.children) : [el];
  if (!targets.length) return;
  const common: gsap.TweenVars = {
    duration: d.dur ?? c.dur,
    ease: d.ease ?? "power3.out",
    delay: c.delay,
    stagger: d.kids ? 0.1 : 0,
    scrollTrigger: trig(el),
    onComplete: () => { gsap.set(targets, { clearProps: "clipPath,filter,transformPerspective" }); }
  };
  if (d.to) gsap.fromTo(targets, d.from, { ...d.to, x: 0, y: 0, ...common });
  else gsap.from(targets, { ...d.from, ...common });
};

/* ---------- text helpers ---------- */
const originals = new WeakMap<HTMLElement, string>();
const remember = (el: HTMLElement, c: Ctx) => {
  if (!originals.has(el)) originals.set(el, el.innerHTML);
  c.cleanup(() => { const o = originals.get(el); if (o !== undefined) { el.innerHTML = o; originals.delete(el); } });
};
const splitWords = (el: HTMLElement, c: Ctx, mask = false): HTMLElement[] => {
  remember(el, c);
  const txt = el.textContent || "";
  el.setAttribute("aria-label", txt);
  el.textContent = "";
  return txt.split(/\s+/).filter(Boolean).map(w => {
    const s = document.createElement("span");
    s.setAttribute("aria-hidden", "true");
    s.style.display = "inline-block";
    let inner: HTMLElement = s;
    if (mask) {
      s.style.overflow = "hidden"; s.style.verticalAlign = "top";
      inner = document.createElement("span"); inner.style.display = "inline-block"; s.appendChild(inner);
    }
    inner.textContent = w;
    el.appendChild(s); el.appendChild(document.createTextNode(" "));
    return inner;
  });
};
const splitChars = (el: HTMLElement, c: Ctx): HTMLElement[] => {
  const words = splitWords(el, c);
  const out: HTMLElement[] = [];
  words.forEach(w => {
    const t = w.textContent || ""; w.textContent = "";
    Array.from(t).forEach(ch => { const s = document.createElement("span"); s.style.display = "inline-block"; s.textContent = ch; w.appendChild(s); out.push(s); });
  });
  return out;
};

/* ---------- B. Text effects ---------- */
const TX: Record<string, Run> = {
  "tx-chars": (el, c) => { const t = splitChars(el, c); gsap.from(t, { y: 60, opacity: 0, rotate: 6, duration: 0.7, ease: "power3.out", stagger: 0.025, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-words": (el, c) => { const t = splitWords(el, c); gsap.from(t, { y: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-lines": (el, c) => {
    const t = splitWords(el, c, true);
    const tops = Array.from(new Set(t.map(n => (n.parentElement as HTMLElement).offsetTop)));
    gsap.from(t, { yPercent: 115, duration: 0.9, ease: "power4.out", delay: c.delay, stagger: (i: number) => tops.indexOf((t[i].parentElement as HTMLElement).offsetTop) * 0.12, scrollTrigger: trig(el, { start: "top 92%" }) });
  },
  "tx-scramble": (el, c) => {
    const txt = el.textContent || ""; const glyphs = "█▓▒░<>/\\#%&";
    const scrambled = (n: number) => txt.slice(0, n) + Array.from(txt.slice(n)).map(ch => (ch === " " ? " " : glyphs[Math.floor(Math.random() * glyphs.length)])).join("");
    el.setAttribute("aria-label", txt);
    el.textContent = scrambled(0);
    c.cleanup(() => { el.textContent = txt; });
    const p = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => { gsap.to(p, { v: 1, duration: 1.4, delay: c.delay, ease: "none", onUpdate: () => { el.textContent = scrambled(Math.floor(p.v * txt.length)); }, onComplete: () => { el.textContent = txt; } }); } });
  },
  "tx-typewriter": (el, c) => { const t = splitChars(el, c); gsap.set(t, { opacity: 0 }); gsap.to(t, { opacity: 1, duration: 0.01, stagger: 0.035, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-count": (el, c) => {
    const target = num(el.dataset.count, parseFloat(el.textContent || "0") || 0); const suffix = el.dataset.suffix || ""; const original = el.textContent || "";
    el.textContent = "0" + suffix; c.cleanup(() => { el.textContent = original; });
    const p = { v: 0 };
    gsap.to(p, { v: target, duration: 1.8, ease: "power2.out", delay: c.delay, scrollTrigger: trig(el), onUpdate: () => { el.textContent = Math.round(p.v) + suffix; } });
  },
  "tx-gradient-sweep": el => { el.classList.add("fx-sweep"); },
  "tx-wave": (el, c) => {
    const t = splitChars(el, c);
    ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => { gsap.to(t, { y: -8, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: { each: 0.06, repeat: -1, yoyo: true }, delay: c.delay }); } });
  },
  "tx-blur-words": (el, c) => { const t = splitWords(el, c); gsap.fromTo(t, { filter: "blur(14px)", opacity: 0 }, { filter: "blur(0px)", opacity: 1, duration: 0.9, ease: "power2.out", stagger: 0.09, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-rotate-chars": (el, c) => { const t = splitChars(el, c); gsap.from(t, { rotationX: -90, transformOrigin: "50% 100%", opacity: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.03, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-glitch": el => { el.dataset.text = el.textContent || ""; el.classList.add("fx-glitch"); },
  "tx-underline-draw": (el, c) => { el.classList.add("fx-uline"); gsap.to(el, { "--u": 1, duration: 0.9, ease: "power3.out", delay: c.delay + 0.2, scrollTrigger: trig(el, { start: "top 92%" }) } as gsap.TweenVars); },
  "tx-mask-reveal": (el, c) => { const t = splitWords(el, c, true); gsap.from(t, { yPercent: 120, duration: 0.8, ease: "power4.out", stagger: 0.07, delay: c.delay, scrollTrigger: trig(el, { start: "top 92%" }) }); },
  "tx-spotlight": el => { el.classList.add("fx-shine"); },
  "tx-outline-fill": el => {
    el.classList.add("fx-outline");
    gsap.to(el, { color: "#ffffff", ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "top 35%", scrub: true } });
  }
};

/* ---------- C. Scroll-driven ---------- */
const scrub = (el: Element, start = "top bottom", end = "bottom top") => ({ trigger: el, start, end, scrub: true });
const SC: Record<string, Run> = {
  "sc-parallax-slow": el => { gsap.fromTo(el, { yPercent: 8 }, { yPercent: -8, ease: "none", scrollTrigger: scrub(el) }); },
  "sc-parallax-fast": el => { gsap.fromTo(el, { yPercent: 22 }, { yPercent: -22, ease: "none", scrollTrigger: scrub(el) }); },
  "sc-parallax-x": el => { gsap.fromTo(el, { xPercent: -8 }, { xPercent: 8, ease: "none", scrollTrigger: scrub(el) }); },
  "sc-scrub-scale": el => { gsap.fromTo(el, { scale: 0.86 }, { scale: 1, ease: "none", scrollTrigger: scrub(el, "top bottom", "center 60%") }); },
  "sc-scrub-rotate": el => { gsap.fromTo(el, { rotation: -5 }, { rotation: 5, ease: "none", scrollTrigger: scrub(el) }); },
  "sc-scrub-fade": el => { gsap.fromTo(el, { opacity: 0.15 }, { opacity: 1, ease: "none", scrollTrigger: scrub(el, "top 95%", "top 55%") }); },
  "sc-pin-panel": el => {
    ScrollTrigger.create({ trigger: el, start: "top 12%", end: "+=45%", pin: true, pinSpacing: true });
  },
  "sc-hscroll": (el, c) => {
    const track = el.querySelector<HTMLElement>("[data-track]"); if (!track) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      const dist = () => Math.max(0, track.scrollWidth - el.clientWidth);
      gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: el, start: "top 12%", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });
    c.cleanup(() => mm.revert());
  },
  "sc-progress-bar": () => { /* global: FxRoot */ },
  "sc-bg-shift": el => { ScrollTrigger.create({ trigger: el, start: "top 70%", end: "bottom 30%", toggleClass: { targets: el, className: "is-lit" } }); },
  "sc-stack-cards": el => {
    el.classList.add("fx-stack");
    const cards = Array.from(el.children) as HTMLElement[];
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      gsap.to(card, { scale: 0.92, opacity: 0.55, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 20%", scrub: true } });
    });
  },
  "sc-zoom-hero": el => {
    const host = (el.closest("section") || el) as HTMLElement;
    gsap.to(el, { scale: 1.18, yPercent: 6, ease: "none", scrollTrigger: { trigger: host, start: "top top", end: "bottom top", scrub: true } });
  },
  "sc-image-wipe": el => { gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", ease: "none", scrollTrigger: scrub(el, "top 90%", "top 40%") }); },
  "sc-line-draw": el => {
    el.querySelectorAll<SVGGeometryElement>("path,line,polyline,circle,rect").forEach(p => {
      const len = p.getTotalLength?.() || 0; if (!len) return;
      p.style.strokeDasharray = String(len); p.style.strokeDashoffset = String(len);
      gsap.to(p, { strokeDashoffset: 0, ease: "none", scrollTrigger: scrub(el, "top 85%", "bottom 45%") });
    });
  },
  "sc-marquee-velocity": (el, c) => {
    const track = el.querySelector<HTMLElement>("[data-track]"); if (!track) return;
    track.innerHTML += track.innerHTML; // duplicate for a seamless loop
    c.cleanup(() => { track.innerHTML = track.innerHTML.slice(0, track.innerHTML.length / 2); });
    const tween = gsap.to(track, { xPercent: -50, repeat: -1, duration: 38, ease: "none" });
    ScrollTrigger.create({ onUpdate: s => { const v = Math.min(6, 1 + Math.abs(s.getVelocity()) / 400); gsap.to(tween, { timeScale: v, duration: 0.2, overwrite: true, onComplete: () => { gsap.to(tween, { timeScale: 1, duration: 1.1 }); } }); } });
  }
};

/* ---------- D. Interaction ---------- */
const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void, c: Ctx) => {
  el.addEventListener(type, fn as EventListener); c.cleanup(() => el.removeEventListener(type, fn as EventListener));
};
const cls = (name: string): Run => el => { el.classList.add(name); };
const IX: Record<string, Run> = {
  "ix-magnetic": (el, c) => {
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" }); const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    on(el, "pointermove", e => { const r = el.getBoundingClientRect(); x((e.clientX - (r.left + r.width / 2)) * 0.28); y((e.clientY - (r.top + r.height / 2)) * 0.28); }, c);
    on(el, "pointerleave", () => { x(0); y(0); }, c);
  },
  "ix-tilt-3d": (el, c) => {
    gsap.set(el, { transformPerspective: 800 });
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.4 }); const ry = gsap.quickTo(el, "rotationY", { duration: 0.4 });
    on(el, "pointermove", e => { const r = el.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 12); rx(-((e.clientY - r.top) / r.height - 0.5) * 12); }, c);
    on(el, "pointerleave", () => { rx(0); ry(0); }, c);
  },
  "ix-spotlight-card": (el, c) => {
    el.classList.add("fx-spot-card");
    on(el, "pointermove", e => { const r = el.getBoundingClientRect(); el.style.setProperty("--mx", e.clientX - r.left + "px"); el.style.setProperty("--my", e.clientY - r.top + "px"); }, c);
  },
  "ix-cursor-follow": (el, c) => {
    on(el, "pointerenter", () => document.documentElement.classList.add("cur-big"), c);
    on(el, "pointerleave", () => document.documentElement.classList.remove("cur-big"), c);
  },
  "ix-ripple": (el, c) => {
    el.classList.add("fx-ripple-host");
    on(el, "pointerdown", e => {
      const r = el.getBoundingClientRect(); const s = document.createElement("span"); s.className = "fx-ripple";
      s.style.left = e.clientX - r.left + "px"; s.style.top = e.clientY - r.top + "px"; el.appendChild(s);
      gsap.fromTo(s, { scale: 0, opacity: 0.55 }, { scale: 14, opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => s.remove() });
    }, c);
  },
  "ix-shine-sweep": cls("fx-shine-sweep"),
  "ix-img-zoom": cls("fx-img-zoom"),
  "ix-lift": cls("fx-lift"),
  "ix-border-beam": cls("fx-beam"),
  "ix-arrow-nudge": cls("fx-nudge"),
  "ix-icon-spin": cls("fx-spin"),
  "ix-card-flip": cls("fx-flip"),
  "ix-text-roll": el => { el.classList.add("fx-roll"); el.querySelectorAll<HTMLElement>("[data-roll]").forEach(n => { n.dataset.text = n.textContent || ""; }); },
  "ix-underline-grow": cls("fx-grow"),
  "ix-mouse-parallax": (el, c) => {
    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
    on(el, "pointermove", e => { const r = el.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5; const py = (e.clientY - r.top) / r.height - 0.5; layers.forEach(l => { const d = num(l.dataset.depth, 10); gsap.to(l, { x: -px * d, y: -py * d, duration: 0.8, ease: "power3.out", overwrite: "auto" }); }); }, c);
    on(el, "pointerleave", () => { gsap.to(layers, { x: 0, y: 0, duration: 1, ease: "power3.out" }); }, c);
  }
};

/* ---------- E. Ambient ---------- */
const add = (el: HTMLElement, node: HTMLElement, c: Ctx) => { el.appendChild(node); c.cleanup(() => node.remove()); return node; };
const AM: Record<string, Run> = {
  "am-orbs": (el, c) => {
    const w = document.createElement("div"); w.className = "fx-orbs"; w.setAttribute("aria-hidden", "true");
    w.innerHTML = '<i></i><i></i><i></i>'; add(el, w, c);
  },
  "am-grain": cls("fx-grain"),
  "am-aurora": cls("fx-aurora"),
  "am-pulse-ring": (el, c) => {
    const w = document.createElement("div"); w.className = "fx-rings"; w.setAttribute("aria-hidden", "true");
    w.innerHTML = "<i></i><i></i><i></i>"; add(el, w, c);
  },
  "am-halo-ring": (el, c) => {
    const w = document.createElement("div"); w.className = "fx-halo"; w.setAttribute("aria-hidden", "true");
    w.innerHTML = '<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="86" class="h1"/><circle cx="100" cy="100" r="72" class="h2"/><circle cx="100" cy="100" r="58" class="h3"/></svg>'; add(el, w, c);
  },
  "am-particles": (el, c) => {
    const cv = document.createElement("canvas"); cv.className = "fx-particles"; cv.setAttribute("aria-hidden", "true"); add(el, cv, c);
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let w = 0, h = 0, raf = 0, visible = true;
    const resize = () => { const r = el.getBoundingClientRect(); w = cv.width = r.width; h = cv.height = r.height; };
    resize(); window.addEventListener("resize", resize); c.cleanup(() => window.removeEventListener("resize", resize));
    const dots = Array.from({ length: 54 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 0.6 + Math.random() * 2, s: 0.2 + Math.random() * 0.7, a: 0.2 + Math.random() * 0.6 }));
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(el); c.cleanup(() => io.disconnect());
    const tick = () => {
      raf = requestAnimationFrame(tick); if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      dots.forEach(d => { d.y -= d.s; d.x += Math.sin(d.y / 40) * 0.25; if (d.y < -4) { d.y = h + 4; d.x = Math.random() * w; } ctx.beginPath(); ctx.fillStyle = `rgba(255,${150 + Math.floor(d.r * 30)},60,${d.a})`; ctx.shadowColor = "rgba(255,150,40,.9)"; ctx.shadowBlur = 8; ctx.arc(d.x, d.y, d.r, 0, 6.283); ctx.fill(); });
    };
    tick(); c.cleanup(() => cancelAnimationFrame(raf));
  },
  "am-scanline": cls("fx-scan"),
  "am-perspective-grid": cls("fx-grid"),
  "am-glow-breathe": cls("fx-breathe"),
  "am-marquee": cls("fx-ticker")
};

/* ---------- registry & runner ---------- */
const REGISTRY: Record<string, Run> = { ...Object.fromEntries(Object.keys(RV).map(k => [k, reveal(k)])), ...TX, ...SC, ...IX, ...AM };
export const implementedIds = Object.keys(REGISTRY);

const HEAVY = new Set(["am-particles", "ix-mouse-parallax", "ix-tilt-3d", "ix-magnetic", "ix-cursor-follow", "sc-hscroll", "sc-pin-panel", "sc-stack-cards"]);

export function applyFx(root: ParentNode = document): () => void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return () => {};
  const small = window.matchMedia("(max-width: 899px)").matches;
  const cleanups: Array<() => void> = [];
  const ctx = gsap.context(() => {
    root.querySelectorAll<HTMLElement>("[data-fx]").forEach(el => {
      const ids = (el.dataset.fx || "").split(/\s+/).filter(Boolean);
      const c: Ctx = { delay: num(el.dataset.fxDelay, 0), dur: num(el.dataset.fxDur, 0.9), cleanup: fn => cleanups.push(fn) };
      ids.forEach(id => {
        const run = REGISTRY[id];
        if (!run || (small && HEAVY.has(id))) return;
        try { run(el, c); } catch { /* an effect must never break the page */ }
      });
    });
  });
  ScrollTrigger.refresh();
  return () => { cleanups.reverse().forEach(f => { try { f(); } catch { /* noop */ } }); ctx.revert(); };
}
