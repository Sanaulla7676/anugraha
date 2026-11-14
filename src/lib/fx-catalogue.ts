// Single source of truth for the animation catalogue. Every id here has an implementation:
//  - rv/tx/sc/ix/am: src/lib/fx.ts (applied through data-fx="id")
//  - nv: global components (FxRoot, SiteHeader, PillNav, SearchOverlay)
//  - mg: Remotion compositions in src/components/remotion/compositions.tsx
export type FxMeta = { id: string; group: string; name: string; desc: string; src?: string };

const A = "A. Scroll reveal";
const B = "B. Text effects";
const C = "C. Scroll-driven";
const D = "D. Interaction";
const E = "E. Ambient & background";
const F = "F. Navigation & page";
const G = "G. Motion graphics (Remotion)";

export const catalogue: FxMeta[] = [
  { id: "rv-fade-up", group: A, name: "Fade up", desc: "Rises 48px while fading in." },
  { id: "rv-fade-down", group: A, name: "Fade down", desc: "Drops in from above." },
  { id: "rv-fade-left", group: A, name: "Fade from left", desc: "Slides in from the left." },
  { id: "rv-fade-right", group: A, name: "Fade from right", desc: "Slides in from the right." },
  { id: "rv-zoom-in", group: A, name: "Zoom in", desc: "Scales up from 80%." },
  { id: "rv-zoom-out", group: A, name: "Zoom out", desc: "Settles down from 125%." },
  { id: "rv-flip-x", group: A, name: "Flip X", desc: "3D flip around the horizontal axis." },
  { id: "rv-flip-y", group: A, name: "Flip Y", desc: "3D flip around the vertical axis." },
  { id: "rv-rotate-in", group: A, name: "Rotate in", desc: "Rotates and rises into place." },
  { id: "rv-skew-up", group: A, name: "Skew up", desc: "Skewed rise that straightens out." },
  { id: "rv-blur-in", group: A, name: "Blur in", desc: "Resolves from a heavy blur." },
  { id: "rv-clip-up", group: A, name: "Clip wipe up", desc: "Revealed by a bottom-to-top wipe." },
  { id: "rv-clip-down", group: A, name: "Clip wipe down", desc: "Revealed by a top-to-bottom wipe." },
  { id: "rv-clip-left", group: A, name: "Clip wipe right", desc: "Revealed by a left-to-right wipe." },
  { id: "rv-clip-right", group: A, name: "Clip wipe left", desc: "Revealed by a right-to-left wipe." },
  { id: "rv-clip-circle", group: A, name: "Circle reveal", desc: "Expanding circular mask." },
  { id: "rv-clip-diamond", group: A, name: "Diamond reveal", desc: "Expanding diamond mask." },
  { id: "rv-slide-far-left", group: A, name: "Long slide left", desc: "Travels 240px from the left." },
  { id: "rv-slide-far-right", group: A, name: "Long slide right", desc: "Travels 240px from the right." },
  { id: "rv-drop-bounce", group: A, name: "Drop bounce", desc: "Falls in with a bounce." },
  { id: "rv-elastic-pop", group: A, name: "Elastic pop", desc: "Pops in with elastic overshoot." },
  { id: "rv-tilt-rise", group: A, name: "Tilt rise", desc: "Rises with a slight tilt." },
  { id: "rv-swing-in", group: A, name: "Swing in", desc: "Swings down from its top edge." },
  { id: "rv-expand-x", group: A, name: "Expand width", desc: "Grows horizontally from the left." },
  { id: "rv-focus-in", group: A, name: "Focus in", desc: "Blur plus scale-down pull focus." },
  { id: "rv-glow-in", group: A, name: "Glow in", desc: "Flashes bright then settles." },
  { id: "rv-stagger-up", group: A, name: "Stagger up", desc: "Children rise one after another." },
  { id: "rv-stagger-scale", group: A, name: "Stagger scale", desc: "Children scale in sequentially." },
  { id: "rv-stagger-left", group: A, name: "Stagger from left", desc: "Children slide in sequentially." },
  { id: "rv-stagger-clip", group: A, name: "Stagger wipe", desc: "Children wipe up sequentially." },

  { id: "tx-chars", group: B, name: "Character cascade", desc: "Letters rise one by one." },
  { id: "tx-words", group: B, name: "Word cascade", desc: "Words rise in sequence." },
  { id: "tx-lines", group: B, name: "Line mask", desc: "Lines slide up from behind a mask." },
  { id: "tx-scramble", group: B, name: "Scramble decode", desc: "Random glyphs resolve to the text." },
  { id: "tx-typewriter", group: B, name: "Typewriter", desc: "Characters appear one at a time." },
  { id: "tx-count", group: B, name: "Number count-up", desc: "Counts up to the target number." },
  { id: "tx-gradient-sweep", group: B, name: "Gradient sweep", desc: "Moving orange gradient inside letters." },
  { id: "tx-wave", group: B, name: "Wave", desc: "Letters bob in a continuous wave." },
  { id: "tx-blur-words", group: B, name: "Blur words", desc: "Words un-blur in sequence." },
  { id: "tx-rotate-chars", group: B, name: "Rotate letters", desc: "Letters flip up on the X axis." },
  { id: "tx-glitch", group: B, name: "Glitch", desc: "Occasional RGB-split glitch." },
  { id: "tx-underline-draw", group: B, name: "Underline draw", desc: "Underline draws beneath the text." },
  { id: "tx-mask-reveal", group: B, name: "Word mask reveal", desc: "Each word slides out of its own mask." },
  { id: "tx-spotlight", group: B, name: "Shine", desc: "Light band sweeps across the text." },
  { id: "tx-outline-fill", group: B, name: "Outline fill", desc: "Outlined text fills as you scroll." },

  { id: "sc-parallax-slow", group: C, name: "Parallax slow", desc: "Drifts gently against scroll." },
  { id: "sc-parallax-fast", group: C, name: "Parallax fast", desc: "Drifts quickly against scroll." },
  { id: "sc-parallax-x", group: C, name: "Parallax sideways", desc: "Moves horizontally as you scroll." },
  { id: "sc-scrub-scale", group: C, name: "Scrub scale", desc: "Scale tied to scroll position." },
  { id: "sc-scrub-rotate", group: C, name: "Scrub rotate", desc: "Rotation tied to scroll position." },
  { id: "sc-scrub-fade", group: C, name: "Scrub fade", desc: "Opacity tied to scroll position." },
  { id: "sc-pin-panel", group: C, name: "Pin panel", desc: "Section pins briefly while content moves." },
  { id: "sc-hscroll", group: C, name: "Horizontal scroll", desc: "Vertical scroll drives a sideways track." },
  { id: "sc-progress-bar", group: C, name: "Progress bar", desc: "Top bar shows page progress.", src: "FxRoot" },
  { id: "sc-bg-shift", group: C, name: "Section light-up", desc: "Section glow brightens as it enters." },
  { id: "sc-stack-cards", group: C, name: "Stacking cards", desc: "Sticky cards shrink as the next arrives." },
  { id: "sc-zoom-hero", group: C, name: "Hero zoom", desc: "Image zooms while the hero scrolls away." },
  { id: "sc-image-wipe", group: C, name: "Image wipe", desc: "Scroll-scrubbed wipe reveal." },
  { id: "sc-line-draw", group: C, name: "SVG line draw", desc: "SVG paths draw as you scroll." },
  { id: "sc-marquee-velocity", group: C, name: "Velocity marquee", desc: "Ticker speeds up with scroll speed." },

  { id: "ix-magnetic", group: D, name: "Magnetic", desc: "Element is pulled toward the cursor." },
  { id: "ix-tilt-3d", group: D, name: "3D tilt", desc: "Card tilts toward the pointer." },
  { id: "ix-spotlight-card", group: D, name: "Spotlight card", desc: "Light follows the pointer across the card." },
  { id: "ix-cursor-follow", group: D, name: "Cursor ring", desc: "Custom ring grows over this element.", src: "FxRoot" },
  { id: "ix-ripple", group: D, name: "Click ripple", desc: "Ripple expands from the click." },
  { id: "ix-shine-sweep", group: D, name: "Shine sweep", desc: "Light band sweeps across on hover." },
  { id: "ix-img-zoom", group: D, name: "Image zoom", desc: "Inner image zooms on hover." },
  { id: "ix-lift", group: D, name: "Lift", desc: "Raises with an orange glow." },
  { id: "ix-border-beam", group: D, name: "Border beam", desc: "Light travels around the border." },
  { id: "ix-arrow-nudge", group: D, name: "Arrow nudge", desc: "Arrow slides on hover." },
  { id: "ix-icon-spin", group: D, name: "Icon spin", desc: "Icon rotates on hover." },
  { id: "ix-card-flip", group: D, name: "Card flip", desc: "Card flips to reveal the back." },
  { id: "ix-text-roll", group: D, name: "Text roll", desc: "Label rolls up on hover." },
  { id: "ix-underline-grow", group: D, name: "Underline grow", desc: "Underline grows from the left." },
  { id: "ix-mouse-parallax", group: D, name: "Mouse parallax", desc: "Layers shift with the pointer." },

  { id: "am-orbs", group: E, name: "Floating orbs", desc: "Soft glowing orbs drift." },
  { id: "am-grain", group: E, name: "Film grain", desc: "Cinematic grain overlay." },
  { id: "am-aurora", group: E, name: "Aurora gradient", desc: "Colour fields slowly shift." },
  { id: "am-pulse-ring", group: E, name: "Pulse rings", desc: "Concentric rings pulse outward." },
  { id: "am-halo-ring", group: E, name: "Halo ring", desc: "Rotating neon ring." },
  { id: "am-particles", group: E, name: "Particles", desc: "Canvas embers drift upward." },
  { id: "am-scanline", group: E, name: "Scanline", desc: "A thin light line sweeps down." },
  { id: "am-perspective-grid", group: E, name: "Perspective grid", desc: "Receding grid floor." },
  { id: "am-glow-breathe", group: E, name: "Breathing glow", desc: "Glow pulses slowly." },
  { id: "am-marquee", group: E, name: "Marquee ticker", desc: "Continuous scrolling ticker." },

  { id: "nv-preloader", group: F, name: "Preloader", desc: "Logo and progress wipe on first visit.", src: "FxRoot" },
  { id: "nv-page-enter", group: F, name: "Page enter", desc: "Page content rises in after navigation.", src: "FxRoot" },
  { id: "nv-pill-morph", group: F, name: "Pill morph", desc: "Active pill glides between links.", src: "PillNav" },
  { id: "nv-nav-hide", group: F, name: "Smart header", desc: "Header hides on scroll down, returns on scroll up.", src: "SiteHeader" },
  { id: "nv-search-overlay", group: F, name: "Search overlay", desc: "Full-screen finder for pages and programmes.", src: "SearchOverlay" },
  { id: "nv-smooth-scroll", group: F, name: "Smooth scroll", desc: "Inertial scrolling with Lenis.", src: "FxRoot" },

  { id: "mg-orbit-counter", group: G, name: "Orbit counter", desc: "45 ticks light up inside a rotating ring.", src: "compositions" },
  { id: "mg-timeline-build", group: G, name: "Timeline build", desc: "A line draws and phases pop in.", src: "compositions" },
  { id: "mg-budget-bars", group: G, name: "Budget bars", desc: "Line items grow into a total.", src: "compositions" },
  { id: "mg-vendor-network", group: G, name: "Vendor network", desc: "Suppliers connect to the event hub.", src: "compositions" },
  { id: "mg-stage-layout", group: G, name: "Stage layout", desc: "A venue plan assembles block by block.", src: "compositions" },
  { id: "mg-run-sheet", group: G, name: "Run sheet", desc: "Event-day rows slide in and tick off.", src: "compositions" },
  { id: "mg-chat-bubbles", group: G, name: "Client chat", desc: "A briefing conversation types out.", src: "compositions" },
  { id: "mg-poster-build", group: G, name: "Poster build", desc: "A poster is assembled layer by layer.", src: "compositions" },
  { id: "mg-alert-pulse", group: G, name: "Alert to plan B", desc: "A warning pulses, then a plan B resolves it.", src: "compositions" },
  { id: "mg-product-reveal", group: G, name: "Product reveal", desc: "Particles, light sweep and camera push (promptmotion prompt 1).", src: "compositions" },
  { id: "mg-golden-parallax", group: G, name: "Golden-hour parallax", desc: "Layered landscape with fog and sun (promptmotion prompt 2).", src: "compositions" },
  { id: "mg-geometric-intro", group: G, name: "Geometric intro", desc: "Shapes transform into a typographic lockup (promptmotion prompt 3).", src: "compositions" },
  { id: "mg-liquid-morph", group: G, name: "Liquid chrome morph", desc: "A chrome form morphs between three shapes (promptmotion prompt 4).", src: "compositions" },
  { id: "mg-story-reveal", group: G, name: "Story reveal", desc: "Animated text reveals on a gradient story (promptmotion prompt 5).", src: "compositions" }
];

export const groupCounts = catalogue.reduce<Record<string, number>>((acc, f) => {
  acc[f.group] = (acc[f.group] || 0) + 1;
  return acc;
}, {});
