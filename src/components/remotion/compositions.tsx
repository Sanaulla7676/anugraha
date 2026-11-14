"use client";
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, random } from "remotion";

const EMBER = "#F0440C", ORANGE = "#FF6A00", AMBER = "#FFB000", DARK = "#3A0C03", MINT = "#1EF0D0", WHITE = "#FFFFFF";
const FONT = "Inter, system-ui, sans-serif";
const C = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const lab: React.CSSProperties = { fontFamily: FONT, fontWeight: 600, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,.85)" };
const Frame: React.FC<{ children: React.ReactNode; bg?: string }> = ({ children, bg }) => (
  <AbsoluteFill style={{ background: bg || `radial-gradient(ellipse at 50% 45%, ${EMBER}55, ${DARK} 70%)`, fontFamily: FONT }}>{children}</AbsoluteFill>
);
const pop = (frame: number, fps: number, at: number) => spring({ frame: frame - at, fps, config: { damping: 14, stiffness: 120 } });

/* 1 — mg-orbit-counter */
export const OrbitCounter: React.FC = () => {
  const f = useCurrentFrame(); const lit = Math.floor(interpolate(f, [10, 120], [0, 45], C));
  const cx = 640, cy = 360, R = 230;
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <g style={{ transformOrigin: "640px 360px", transform: `rotate(${f * 1.2}deg)` }}>
        <circle cx={cx} cy={cy} r={R + 40} fill="none" stroke={MINT} strokeWidth="3" strokeDasharray="14 18" style={{ filter: `drop-shadow(0 0 10px ${MINT})` }} />
      </g>
      {Array.from({ length: 45 }, (_, i) => { const a = (i / 45) * Math.PI * 2 - Math.PI / 2; const on = i < lit; return <line key={i} x1={cx + Math.cos(a) * (R - 26)} y1={cy + Math.sin(a) * (R - 26)} x2={cx + Math.cos(a) * R} y2={cy + Math.sin(a) * R} stroke={on ? AMBER : "rgba(255,255,255,.18)"} strokeWidth={on ? 7 : 4} strokeLinecap="round" />; })}
      <text x={cx} y={cy + 28} textAnchor="middle" fontSize="130" fontWeight="800" fill={WHITE} fontFamily={FONT}>{lit}</text>
      <text x={cx} y={cy + 86} textAnchor="middle" fontSize="26" fontWeight="600" fill="rgba(255,255,255,.85)" letterSpacing="9" fontFamily={FONT}>OF 45 DAYS</text>
    </svg>
  </Frame>;
};

/* 2 — mg-timeline-build */
export const TimelineBuild: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const draw = interpolate(f, [5, 90], [0, 1], C);
  const phases = ["Foundations", "Client & budget", "Design & delivery", "Portfolio"];
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <line x1="160" y1="360" x2={160 + 960 * draw} y2="360" stroke={AMBER} strokeWidth="6" strokeLinecap="round" />
      {phases.map((p, i) => { const x = 160 + i * 320; const s = pop(f, fps, 20 + i * 22);
        return <g key={p} style={{ transformOrigin: `${x}px 360px`, transform: `scale(${s})`, opacity: s }}>
          <circle cx={x} cy="360" r="34" fill={EMBER} stroke={WHITE} strokeWidth="5" />
          <text x={x} y="372" textAnchor="middle" fontSize="32" fontWeight="800" fill={WHITE} fontFamily={FONT}>{i + 1}</text>
          <text x={x} y={i % 2 ? 450 : 290} textAnchor="middle" fontSize="28" fontWeight="700" fill={WHITE} fontFamily={FONT}>{p}</text>
        </g>; })}
      <text x="640" y="620" textAnchor="middle" fontSize="22" fill="rgba(255,255,255,.8)" letterSpacing="8" fontWeight="600" fontFamily={FONT}>A 45-DAY LEARNING JOURNEY</text>
    </svg>
  </Frame>;
};

/* 3 — mg-budget-bars */
export const BudgetBars: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const items: [string, number][] = [["Venue", 0.9], ["Décor", 0.7], ["Sound & light", 0.5], ["Catering", 0.8], ["Contingency", 0.3]];
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <text x="640" y="110" textAnchor="middle" fontSize="24" letterSpacing="9" fontWeight="600" fill="rgba(255,255,255,.85)" fontFamily={FONT}>LINE ITEMS → ONE QUOTATION</text>
      {items.map(([n, v], i) => { const s = pop(f, fps, 10 + i * 10); const x = 170 + i * 200; const h = 360 * v * s;
        return <g key={n}><rect x={x} y={600 - h} width="120" height={h} rx="14" fill={i === 4 ? "rgba(255,255,255,.55)" : `url(#bg${i})`} />
          <defs><linearGradient id={`bg${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={AMBER} /><stop offset="1" stopColor={EMBER} /></linearGradient></defs>
          <text x={x + 60} y="645" textAnchor="middle" fontSize="22" fontWeight="600" fill={WHITE} fontFamily={FONT}>{n}</text></g>; })}
      <text x="640" y="690" textAnchor="middle" fontSize="16" letterSpacing="6" fill="rgba(255,255,255,.6)" fontFamily={FONT}>ILLUSTRATIVE EXAMPLE</text>
    </svg>
  </Frame>;
};

/* 4 — mg-vendor-network */
export const VendorNetwork: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const nodes = ["Décor", "Flowers", "Sound", "Lighting", "Catering", "Photo"];
  const cx = 640, cy = 360, R = 250;
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      {nodes.map((n, i) => { const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2; const x = cx + Math.cos(a) * R * 1.25; const y = cy + Math.sin(a) * R * 0.95; const s = pop(f, fps, 15 + i * 12); const p = interpolate((f + i * 14) % 60, [0, 60], [0, 1]);
        return <g key={n}>
          <line x1={cx} y1={cy} x2={cx + (x - cx) * Math.min(1, s)} y2={cy + (y - cy) * Math.min(1, s)} stroke="rgba(255,176,0,.7)" strokeWidth="3" />
          <circle cx={cx + (x - cx) * p} cy={cy + (y - cy) * p} r="6" fill={WHITE} opacity={s > 0.9 ? 1 : 0} />
          <g style={{ transformOrigin: `${x}px ${y}px`, transform: `scale(${s})` }}><circle cx={x} cy={y} r="52" fill={DARK} stroke={AMBER} strokeWidth="4" /><text x={x} y={y + 8} textAnchor="middle" fontSize="22" fontWeight="700" fill={WHITE} fontFamily={FONT}>{n}</text></g></g>; })}
      <circle cx={cx} cy={cy} r={70 + Math.sin(f / 8) * 4} fill={EMBER} stroke={WHITE} strokeWidth="5" />
      <text x={cx} y={cy + 9} textAnchor="middle" fontSize="26" fontWeight="800" fill={WHITE} letterSpacing="4" fontFamily={FONT}>EVENT</text>
    </svg>
  </Frame>;
};

/* 5 — mg-stage-layout */
export const StageLayout: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const blocks = Array.from({ length: 12 }, (_, i) => ({ x: 250 + (i % 6) * 130, y: 330 + Math.floor(i / 6) * 110, d: 30 + i * 4 }));
  const s0 = pop(f, fps, 5);
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <rect x="1" y="1" width="1278" height="718" fill="none" />
      <g style={{ transformOrigin: "640px 190px", transform: `scale(${s0})` }}><rect x="380" y="110" width="520" height="130" rx="18" fill={EMBER} stroke={WHITE} strokeWidth="4" /><text x="640" y="188" textAnchor="middle" fontSize="34" fontWeight="800" letterSpacing="10" fill={WHITE} fontFamily={FONT}>STAGE</text></g>
      {blocks.map((b, i) => { const s = pop(f, fps, b.d); return <rect key={i} x={b.x} y={b.y} width="100" height="70" rx="12" fill="rgba(255,255,255,.14)" stroke={AMBER} strokeWidth="3" style={{ transformOrigin: `${b.x + 50}px ${b.y + 35}px`, transform: `scale(${s})`, opacity: s }} />; })}
      <text x="640" y="560" textAnchor="middle" fontSize="24" fontWeight="700" letterSpacing="10" fill="rgba(255,255,255,.9)" fontFamily={FONT}>SEATING</text>
      <g opacity={interpolate(f, [90, 110], [0, 1], C)}><path d="M640 690 L640 600" stroke={AMBER} strokeWidth="6" strokeLinecap="round" /><path d="M618 622 L640 598 L662 622" fill="none" stroke={AMBER} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><text x="760" y="668" fontSize="22" fontWeight="600" letterSpacing="8" fill="rgba(255,255,255,.85)" fontFamily={FONT}>ENTRY</text></g>
    </svg>
  </Frame>;
};

/* 6 — mg-run-sheet */
export const RunSheet: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const rows = ["Setup complete", "Sound check", "Guest arrival", "Programme begins", "Wrap-up & review"];
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <text x="240" y="130" fontSize="26" fontWeight="600" letterSpacing="10" fill="rgba(255,255,255,.85)" fontFamily={FONT}>EVENT-DAY RUN SHEET</text>
      {rows.map((r, i) => { const s = pop(f, fps, 8 + i * 14); const y = 190 + i * 100; const tick = interpolate(f, [30 + i * 14, 44 + i * 14], [0, 1], C);
        return <g key={r} style={{ opacity: s, transform: `translateX(${(1 - s) * -120}px)` }}>
          <rect x="240" y={y} width="800" height="76" rx="18" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.3)" />
          <text x="290" y={y + 48} fontSize="30" fontWeight="700" fill={WHITE} fontFamily={FONT}>{r}</text>
          <circle cx="980" cy={y + 38} r="22" fill={tick > 0.5 ? EMBER : "none"} stroke={AMBER} strokeWidth="4" />
          <path d="M969 38 L977 47 L992 30" transform={`translate(0 ${y})`} fill="none" stroke={WHITE} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity={tick} /></g>; })}
    </svg>
  </Frame>;
};

/* 7 — mg-chat-bubbles */
export const ChatBubbles: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const msgs: [boolean, string][] = [[false, "What is the occasion and guest count?"], [true, "A reception. About 200 guests."], [false, "Date and budget range?"], [true, "Date is flexible. Let's discuss budget."]];
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      {msgs.map(([client, t], i) => { const s = pop(f, fps, 10 + i * 26); const w = 40 + t.length * 15; const x = client ? 1020 - w : 260; const y = 150 + i * 120;
        return <g key={t} style={{ transformOrigin: `${client ? x + w : x}px ${y + 40}px`, transform: `scale(${s})`, opacity: s }}>
          <rect x={x} y={y} width={w} height="80" rx="40" fill={client ? "rgba(255,255,255,.95)" : EMBER} />
          <text x={x + 28} y={y + 49} fontSize="26" fontWeight="600" fill={client ? "#111" : WHITE} fontFamily={FONT}>{t}</text></g>; })}
      <text x="640" y="680" textAnchor="middle" fontSize="18" letterSpacing="8" fill="rgba(255,255,255,.65)" fontFamily={FONT}>ILLUSTRATIVE CLIENT BRIEFING</text>
    </svg>
  </Frame>;
};

/* 8 — mg-poster-build */
export const PosterBuild: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const layers = ["Background", "Image", "Headline", "Date & venue", "Logo"];
  const s0 = pop(f, fps, 0);
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={EMBER} /><stop offset="1" stopColor={AMBER} /></linearGradient></defs>
      <g style={{ transformOrigin: "400px 360px", transform: `scale(${s0})` }}>
        <rect x="220" y="90" width="360" height="540" rx="22" fill="url(#pg)" stroke={WHITE} strokeWidth="4" />
        <circle cx="400" cy="270" r={70 * pop(f, fps, 24)} fill="rgba(255,255,255,.9)" />
        <rect x="270" y="400" width={260 * interpolate(f, [40, 62], [0, 1], C)} height="26" rx="13" fill={DARK} />
        <rect x="270" y="446" width={180 * interpolate(f, [58, 78], [0, 1], C)} height="16" rx="8" fill="rgba(58,12,3,.7)" />
        <rect x="270" y="560" width={90 * interpolate(f, [76, 92], [0, 1], C)} height="30" rx="8" fill={WHITE} />
      </g>
      {layers.map((l, i) => { const s = pop(f, fps, 14 + i * 16); return <g key={l} style={{ opacity: s, transform: `translateX(${(1 - s) * 80}px)` }}>
        <rect x="720" y={170 + i * 78} width="360" height="56" rx="14" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.3)" />
        <text x="750" y={206 + i * 78} fontSize="24" fontWeight="600" fill={WHITE} fontFamily={FONT}>{l}</text></g>; })}
    </svg>
  </Frame>;
};

/* 9 — mg-alert-pulse */
export const AlertPulse: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const steps = ["Pause", "Inform", "Decide", "Act"]; const flip = f > 70;
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      {!flip && [0, 1, 2].map(i => { const t = ((f + i * 14) % 42) / 42; return <circle key={i} cx="640" cy="260" r={60 + t * 170} fill="none" stroke={AMBER} strokeWidth="4" opacity={1 - t} />; })}
      <g style={{ transformOrigin: "640px 260px", transform: `scale(${pop(f, fps, 0)})` }}>
        <path d="M640 170 L735 335 L545 335 Z" fill={flip ? "rgba(255,255,255,.2)" : EMBER} stroke={WHITE} strokeWidth="6" strokeLinejoin="round" />
        {flip ? <path d="M600 275 L632 307 L684 235" fill="none" stroke={WHITE} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /> : <text x="640" y="305" textAnchor="middle" fontSize="90" fontWeight="800" fill={WHITE} fontFamily={FONT}>!</text>}
      </g>
      <text x="640" y="430" textAnchor="middle" fontSize="40" fontWeight="800" letterSpacing="12" fill={WHITE} fontFamily={FONT}>{flip ? "PLAN B IS READY" : "SOMETHING CHANGED"}</text>
      {steps.map((s, i) => { const k = pop(f, fps, 80 + i * 10); return <g key={s} style={{ opacity: k }}><rect x={250 + i * 200} y="500" width="170" height="64" rx="32" fill="rgba(255,255,255,.12)" stroke={AMBER} strokeWidth="3" /><text x={335 + i * 200} y="541" textAnchor="middle" fontSize="24" fontWeight="700" fill={WHITE} fontFamily={FONT}>{s}</text></g>; })}
    </svg>
  </Frame>;
};

/* 10 — mg-product-reveal (promptmotion prompt 1: particles, dramatic lighting, camera move) */
export const ProductReveal: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const cam = interpolate(f, [0, 180], [1, 1.14], C); const sweep = interpolate(f, [30, 90], [-300, 1500], C);
  return <Frame bg="radial-gradient(ellipse at 50% 60%, #7a1d05, #1c0601 75%)">
    <AbsoluteFill style={{ transform: `scale(${cam})` }}>
      <svg width="1280" height="720" viewBox="0 0 1280 720">
        {Array.from({ length: 70 }, (_, i) => { const a = random(`a${i}`) * Math.PI * 2; const d = random(`d${i}`) * 520 * interpolate(f, [0, 60], [0.1, 1], C); return <circle key={i} cx={640 + Math.cos(a) * d} cy={380 + Math.sin(a) * d * 0.55 - f * 0.4} r={1 + random(`r${i}`) * 3} fill={AMBER} opacity={0.2 + random(`o${i}`) * 0.7} />; })}
        <g style={{ transformOrigin: "640px 360px", transform: `scale(${pop(f, fps, 18)})` }}>
          <text x="640" y="340" textAnchor="middle" fontSize="124" fontWeight="800" fill={WHITE} fontFamily={FONT}>45 DAYS</text>
          <text x="640" y="420" textAnchor="middle" fontSize="28" fontWeight="600" letterSpacing="14" fill="rgba(255,255,255,.9)" fontFamily={FONT}>EVENT MANAGEMENT</text>
        </g>
        <rect x={sweep} y="0" width="140" height="720" fill="rgba(255,255,255,.22)" transform="skewX(-18)" style={{ mixBlendMode: "overlay" }} />
      </svg>
    </AbsoluteFill>
  </Frame>;
};

/* 11 — mg-golden-parallax (promptmotion prompt 2: parallax, fog, golden hour) */
export const GoldenParallax: React.FC = () => {
  const f = useCurrentFrame();
  const hill = (off: number, y: number, amp: number, col: string, speed: number) => {
    const pts = Array.from({ length: 22 }, (_, i) => `${i * 70 - 100 - ((f * speed) % 70)},${y + Math.sin((i + off) * 0.7) * amp}`).join(" L");
    return <path d={`M${pts} L1500,720 L-100,720 Z`} fill={col} />;
  };
  return <Frame bg={`linear-gradient(180deg, ${DARK} 0%, ${EMBER} 52%, ${AMBER} 100%)`}>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <circle cx="900" cy={330 - f * 0.2} r="110" fill="#FFE2A0" opacity=".9" />
      {hill(0, 400, 40, "rgba(120,30,5,.75)", 0.3)}
      <rect x="0" y="430" width="1280" height="120" fill="rgba(255,200,120,.18)" style={{ transform: `translateX(${Math.sin(f / 40) * 40}px)` }} />
      {hill(3, 480, 50, "rgba(70,15,4,.9)", 0.7)}
      <g fill="rgba(30,6,2,.95)" style={{ transform: `translateX(${-f * 0.5}px)` }}><rect x="300" y="470" width="260" height="10" /><rect x="320" y="440" width="8" height="40" /><rect x="530" y="440" width="8" height="40" /><rect x="300" y="430" width="260" height="8" /></g>
      {hill(6, 560, 40, "rgba(25,5,2,1)", 1.4)}
      <text x="640" y="170" textAnchor="middle" fontSize="42" fontWeight="800" letterSpacing="12" fill={WHITE} fontFamily={FONT}>EVERY EVENT HAS A STAGE</text>
    </svg>
  </Frame>;
};

/* 12 — mg-geometric-intro (promptmotion prompt 3: geometric shapes, smooth transforms, typography) */
export const GeometricIntro: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const a = pop(f, fps, 0), b = pop(f, fps, 12), c2 = pop(f, fps, 24), merge = interpolate(f, [60, 90], [0, 1], C);
  return <Frame>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <g style={{ transformOrigin: "640px 300px", transform: `rotate(${f * 2}deg) scale(${1 - merge * 0.25})` }} opacity={1 - merge * 0.2}>
        <circle cx={640 - 160 * (1 - merge)} cy="300" r={90 * a} fill={EMBER} />
        <rect x={640 - 70 + 0 * merge} y={230 + 20 * merge} width={140 * b} height={140 * b} rx="14" fill="none" stroke={WHITE} strokeWidth="8" style={{ transformOrigin: "640px 300px", transform: `rotate(${merge * 45}deg)` }} />
        <path d={`M${640 + 160 * (1 - merge)} 380 L${640 + 160 * (1 - merge) + 90 * c2} 220 L${640 + 160 * (1 - merge) - 90 * c2} 220 Z`} fill={AMBER} />
      </g>
      <text x="640" y="560" textAnchor="middle" fontSize="84" fontWeight="800" fill={WHITE} letterSpacing={interpolate(f, [70, 120], [40, 14], C)} opacity={merge} fontFamily={FONT}>ANUGRAHA</text>
      <text x="640" y="615" textAnchor="middle" fontSize="22" fontWeight="600" letterSpacing="14" fill="rgba(255,255,255,.8)" opacity={interpolate(f, [100, 125], [0, 1], C)} fontFamily={FONT}>TRAINING INSTITUTE</text>
    </svg>
  </Frame>;
};

/* 13 — mg-liquid-morph (promptmotion prompt 4: liquid chrome morph between three forms) */
const shape = (k: number, t: number) => { const th = (t / 72) * Math.PI * 2; const r = k === 0 ? 1 : k === 1 ? 1 / Math.max(Math.abs(Math.cos(th)), Math.abs(Math.sin(th))) * 0.92 : 0.72 + 0.36 * Math.abs(Math.cos(2.5 * th)); return [Math.cos(th) * r, Math.sin(th) * r]; };
export const LiquidMorph: React.FC = () => {
  const f = useCurrentFrame(); const seg = Math.floor(f / 60) % 3; const p = interpolate(f % 60, [20, 55], [0, 1], C);
  const e = p * p * (3 - 2 * p); const next = (seg + 1) % 3; const names = ["PLAN", "DESIGN", "DELIVER"];
  const d = Array.from({ length: 72 }, (_, i) => { const a = shape(seg, i), b = shape(next, i); const x = 640 + (a[0] + (b[0] - a[0]) * e) * 190; const y = 340 + (a[1] + (b[1] - a[1]) * e) * 190; return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`; }).join(" ") + "Z";
  return <Frame bg="radial-gradient(ellipse at 50% 40%, #6b1a05, #150500 80%)">
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <defs><linearGradient id="chr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" /><stop offset=".3" stopColor="#ffd9b0" /><stop offset=".5" stopColor="#7a3a1a" /><stop offset=".7" stopColor="#ffb06a" /><stop offset="1" stopColor="#fff" /></linearGradient></defs>
      <path d={d} fill="url(#chr)" stroke="rgba(255,255,255,.6)" strokeWidth="3" strokeLinejoin="round" style={{ filter: "drop-shadow(0 20px 40px rgba(255,90,10,.45))" }} />
      <text x="640" y="650" textAnchor="middle" fontSize="40" fontWeight="800" letterSpacing="18" fill={WHITE} fontFamily={FONT}>{names[e > 0.5 ? next : seg]}</text>
    </svg>
  </Frame>;
};

/* 14 — mg-story-reveal (promptmotion prompt 5: story template with animated text reveals) */
export const StoryReveal: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const lines = ["JOIN OUR", "NEXT BATCH", "BOOK COUNSELLING"];
  return <Frame bg={`linear-gradient(135deg, ${DARK}, ${EMBER} 60%, ${AMBER})`}>
    <svg width="1280" height="720" viewBox="0 0 1280 720">
      <rect x="470" y="30" width="340" height="660" rx="44" fill="rgba(0,0,0,.28)" stroke={WHITE} strokeWidth="4" />
      <defs><clipPath id="sc"><rect x="478" y="38" width="324" height="644" rx="38" /></clipPath></defs>
      <g clipPath="url(#sc)">
        <rect x="478" y={38 + 644 * (1 - interpolate(f, [0, 20], [0, 1], C))} width="324" height="644" fill={`url(#sg)`} />
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={EMBER} /><stop offset="1" stopColor={AMBER} /></linearGradient></defs>
        {lines.map((t, i) => { const s = pop(f, fps, 18 + i * 22); return <g key={t} style={{ opacity: s, transform: `translateY(${(1 - s) * 40}px)` }}><text x="640" y={250 + i * 90} textAnchor="middle" fontSize={i === 2 ? 30 : 44} fontWeight="800" fill={WHITE} letterSpacing={i === 2 ? 5 : 1} fontFamily={FONT}>{t}</text></g>; })}
        <rect x="540" y="560" width={200 * interpolate(f, [80, 105], [0, 1], C)} height="56" rx="28" fill={WHITE} />
        <text x="640" y="596" textAnchor="middle" fontSize="22" fontWeight="700" fill="#111" opacity={interpolate(f, [100, 112], [0, 1], C)} fontFamily={FONT}>96865 68245</text>
      </g>
    </svg>
  </Frame>;
};

export const COMPOSITIONS: Record<string, { c: React.FC; frames: number }> = {
  "mg-orbit-counter": { c: OrbitCounter, frames: 170 },
  "mg-timeline-build": { c: TimelineBuild, frames: 150 },
  "mg-budget-bars": { c: BudgetBars, frames: 130 },
  "mg-vendor-network": { c: VendorNetwork, frames: 150 },
  "mg-stage-layout": { c: StageLayout, frames: 150 },
  "mg-run-sheet": { c: RunSheet, frames: 150 },
  "mg-chat-bubbles": { c: ChatBubbles, frames: 150 },
  "mg-poster-build": { c: PosterBuild, frames: 150 },
  "mg-alert-pulse": { c: AlertPulse, frames: 150 },
  "mg-product-reveal": { c: ProductReveal, frames: 180 },
  "mg-golden-parallax": { c: GoldenParallax, frames: 240 },
  "mg-geometric-intro": { c: GeometricIntro, frames: 150 },
  "mg-liquid-morph": { c: LiquidMorph, frames: 180 },
  "mg-story-reveal": { c: StoryReveal, frames: 150 }
};
