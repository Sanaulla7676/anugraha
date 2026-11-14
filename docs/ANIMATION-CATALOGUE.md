# Anugraha — Animation & Motion Catalogue

105 effects. Generated from `src/lib/fx-catalogue.ts` (single source of truth).

Apply any effect with `data-fx="<id>"` (optionally `data-fx-delay`). All effects respect `prefers-reduced-motion`.

## A. Scroll reveal (30)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `rv-fade-up` | Fade up | Rises 48px while fading in. |
| 2 | `rv-fade-down` | Fade down | Drops in from above. |
| 3 | `rv-fade-left` | Fade from left | Slides in from the left. |
| 4 | `rv-fade-right` | Fade from right | Slides in from the right. |
| 5 | `rv-zoom-in` | Zoom in | Scales up from 80%. |
| 6 | `rv-zoom-out` | Zoom out | Settles down from 125%. |
| 7 | `rv-flip-x` | Flip X | 3D flip around the horizontal axis. |
| 8 | `rv-flip-y` | Flip Y | 3D flip around the vertical axis. |
| 9 | `rv-rotate-in` | Rotate in | Rotates and rises into place. |
| 10 | `rv-skew-up` | Skew up | Skewed rise that straightens out. |
| 11 | `rv-blur-in` | Blur in | Resolves from a heavy blur. |
| 12 | `rv-clip-up` | Clip wipe up | Revealed by a bottom-to-top wipe. |
| 13 | `rv-clip-down` | Clip wipe down | Revealed by a top-to-bottom wipe. |
| 14 | `rv-clip-left` | Clip wipe right | Revealed by a left-to-right wipe. |
| 15 | `rv-clip-right` | Clip wipe left | Revealed by a right-to-left wipe. |
| 16 | `rv-clip-circle` | Circle reveal | Expanding circular mask. |
| 17 | `rv-clip-diamond` | Diamond reveal | Expanding diamond mask. |
| 18 | `rv-slide-far-left` | Long slide left | Travels 240px from the left. |
| 19 | `rv-slide-far-right` | Long slide right | Travels 240px from the right. |
| 20 | `rv-drop-bounce` | Drop bounce | Falls in with a bounce. |
| 21 | `rv-elastic-pop` | Elastic pop | Pops in with elastic overshoot. |
| 22 | `rv-tilt-rise` | Tilt rise | Rises with a slight tilt. |
| 23 | `rv-swing-in` | Swing in | Swings down from its top edge. |
| 24 | `rv-expand-x` | Expand width | Grows horizontally from the left. |
| 25 | `rv-focus-in` | Focus in | Blur plus scale-down pull focus. |
| 26 | `rv-glow-in` | Glow in | Flashes bright then settles. |
| 27 | `rv-stagger-up` | Stagger up | Children rise one after another. |
| 28 | `rv-stagger-scale` | Stagger scale | Children scale in sequentially. |
| 29 | `rv-stagger-left` | Stagger from left | Children slide in sequentially. |
| 30 | `rv-stagger-clip` | Stagger wipe | Children wipe up sequentially. |

## B. Text effects (15)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `tx-chars` | Character cascade | Letters rise one by one. |
| 2 | `tx-words` | Word cascade | Words rise in sequence. |
| 3 | `tx-lines` | Line mask | Lines slide up from behind a mask. |
| 4 | `tx-scramble` | Scramble decode | Random glyphs resolve to the text. |
| 5 | `tx-typewriter` | Typewriter | Characters appear one at a time. |
| 6 | `tx-count` | Number count-up | Counts up to the target number. |
| 7 | `tx-gradient-sweep` | Gradient sweep | Moving orange gradient inside letters. |
| 8 | `tx-wave` | Wave | Letters bob in a continuous wave. |
| 9 | `tx-blur-words` | Blur words | Words un-blur in sequence. |
| 10 | `tx-rotate-chars` | Rotate letters | Letters flip up on the X axis. |
| 11 | `tx-glitch` | Glitch | Occasional RGB-split glitch. |
| 12 | `tx-underline-draw` | Underline draw | Underline draws beneath the text. |
| 13 | `tx-mask-reveal` | Word mask reveal | Each word slides out of its own mask. |
| 14 | `tx-spotlight` | Shine | Light band sweeps across the text. |
| 15 | `tx-outline-fill` | Outline fill | Outlined text fills as you scroll. |

## C. Scroll-driven (15)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `sc-parallax-slow` | Parallax slow | Drifts gently against scroll. |
| 2 | `sc-parallax-fast` | Parallax fast | Drifts quickly against scroll. |
| 3 | `sc-parallax-x` | Parallax sideways | Moves horizontally as you scroll. |
| 4 | `sc-scrub-scale` | Scrub scale | Scale tied to scroll position. |
| 5 | `sc-scrub-rotate` | Scrub rotate | Rotation tied to scroll position. |
| 6 | `sc-scrub-fade` | Scrub fade | Opacity tied to scroll position. |
| 7 | `sc-pin-panel` | Pin panel | Section pins briefly while content moves. |
| 8 | `sc-hscroll` | Horizontal scroll | Vertical scroll drives a sideways track. |
| 9 | `sc-progress-bar` | Progress bar | Top bar shows page progress. |
| 10 | `sc-bg-shift` | Section light-up | Section glow brightens as it enters. |
| 11 | `sc-stack-cards` | Stacking cards | Sticky cards shrink as the next arrives. |
| 12 | `sc-zoom-hero` | Hero zoom | Image zooms while the hero scrolls away. |
| 13 | `sc-image-wipe` | Image wipe | Scroll-scrubbed wipe reveal. |
| 14 | `sc-line-draw` | SVG line draw | SVG paths draw as you scroll. |
| 15 | `sc-marquee-velocity` | Velocity marquee | Ticker speeds up with scroll speed. |

## D. Interaction (15)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `ix-magnetic` | Magnetic | Element is pulled toward the cursor. |
| 2 | `ix-tilt-3d` | 3D tilt | Card tilts toward the pointer. |
| 3 | `ix-spotlight-card` | Spotlight card | Light follows the pointer across the card. |
| 4 | `ix-cursor-follow` | Cursor ring | Custom ring grows over this element. |
| 5 | `ix-ripple` | Click ripple | Ripple expands from the click. |
| 6 | `ix-shine-sweep` | Shine sweep | Light band sweeps across on hover. |
| 7 | `ix-img-zoom` | Image zoom | Inner image zooms on hover. |
| 8 | `ix-lift` | Lift | Raises with an orange glow. |
| 9 | `ix-border-beam` | Border beam | Light travels around the border. |
| 10 | `ix-arrow-nudge` | Arrow nudge | Arrow slides on hover. |
| 11 | `ix-icon-spin` | Icon spin | Icon rotates on hover. |
| 12 | `ix-card-flip` | Card flip | Card flips to reveal the back. |
| 13 | `ix-text-roll` | Text roll | Label rolls up on hover. |
| 14 | `ix-underline-grow` | Underline grow | Underline grows from the left. |
| 15 | `ix-mouse-parallax` | Mouse parallax | Layers shift with the pointer. |

## E. Ambient & background (10)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `am-orbs` | Floating orbs | Soft glowing orbs drift. |
| 2 | `am-grain` | Film grain | Cinematic grain overlay. |
| 3 | `am-aurora` | Aurora gradient | Colour fields slowly shift. |
| 4 | `am-pulse-ring` | Pulse rings | Concentric rings pulse outward. |
| 5 | `am-halo-ring` | Halo ring | Rotating neon ring. |
| 6 | `am-particles` | Particles | Canvas embers drift upward. |
| 7 | `am-scanline` | Scanline | A thin light line sweeps down. |
| 8 | `am-perspective-grid` | Perspective grid | Receding grid floor. |
| 9 | `am-glow-breathe` | Breathing glow | Glow pulses slowly. |
| 10 | `am-marquee` | Marquee ticker | Continuous scrolling ticker. |

## F. Navigation & page (6)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `nv-preloader` | Preloader | Logo and progress wipe on first visit. |
| 2 | `nv-page-enter` | Page enter | Page content rises in after navigation. |
| 3 | `nv-pill-morph` | Pill morph | Active pill glides between links. |
| 4 | `nv-nav-hide` | Smart header | Header hides on scroll down, returns on scroll up. |
| 5 | `nv-search-overlay` | Search overlay | Full-screen finder for pages and programmes. |
| 6 | `nv-smooth-scroll` | Smooth scroll | Inertial scrolling with Lenis. |

## G. Motion graphics (Remotion) (14)

| # | ID | Effect | What it does |
|---|---|---|---|
| 1 | `mg-orbit-counter` | Orbit counter | 45 ticks light up inside a rotating ring. |
| 2 | `mg-timeline-build` | Timeline build | A line draws and phases pop in. |
| 3 | `mg-budget-bars` | Budget bars | Line items grow into a total. |
| 4 | `mg-vendor-network` | Vendor network | Suppliers connect to the event hub. |
| 5 | `mg-stage-layout` | Stage layout | A venue plan assembles block by block. |
| 6 | `mg-run-sheet` | Run sheet | Event-day rows slide in and tick off. |
| 7 | `mg-chat-bubbles` | Client chat | A briefing conversation types out. |
| 8 | `mg-poster-build` | Poster build | A poster is assembled layer by layer. |
| 9 | `mg-alert-pulse` | Alert to plan B | A warning pulses, then a plan B resolves it. |
| 10 | `mg-product-reveal` | Product reveal | Particles, light sweep and camera push (promptmotion prompt 1). |
| 11 | `mg-golden-parallax` | Golden-hour parallax | Layered landscape with fog and sun (promptmotion prompt 2). |
| 12 | `mg-geometric-intro` | Geometric intro | Shapes transform into a typographic lockup (promptmotion prompt 3). |
| 13 | `mg-liquid-morph` | Liquid chrome morph | A chrome form morphs between three shapes (promptmotion prompt 4). |
| 14 | `mg-story-reveal` | Story reveal | Animated text reveals on a gradient story (promptmotion prompt 5). |
