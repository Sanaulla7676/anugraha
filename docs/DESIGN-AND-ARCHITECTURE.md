# Anugraha Training Institute — Design & Architecture Document

Version 1.0 · 13 Nov 2026 · Prepared for SAAN WEB TECH
Live site: https://anugraha-lake.vercel.app · Repo: github.com/Sanaulla7676/anugraha

---

## 1. Reference image analysis

The supplied screenshot is a futuristic gaming-platform home screen. Everything below is what the site copies *structurally and stylistically* (not the gaming content).

### 1.1 Overall composition
| Zone | What the reference does | Anugraha adaptation |
|---|---|---|
| Top-left | Glass pill nav, 5 links, active item is a filled orange pill, thin orange outline around the whole pill | Pill nav: Home · Programs · Course · Exposure · Careers · About. Active = filled orange pill |
| Top-centre | Laurel badge "12 Million+ Active Players" sitting over the subject's head | Laurel badge "45 Days · Offline Programme" |
| Top-right | Search pill, bell with orange dot, solid orange "Login / Sign Up" pill | Search pill (opens page + programme finder), bell = "Next batch" alert linking to Admissions, orange "Book Counselling" pill |
| Under badge, right | 3 stats separated by thin vertical dividers + circular avatar | 45 Days · 20–25 Batch · 12 Modules + circular Anugraha symbol |
| Left column | Small letter-spaced eyebrow, big white uppercase headline, white pill button with download icon | Eyebrow "EVENT MANAGEMENT TRAINING INSTITUTE", headline "LEARN. PLAN. LEAD EVENTS.", white pill "Book Counselling" |
| Left list | 4 rows: rounded thumbnail, title, grey subtitle, circular outlined play button | 4 featured programmes: thumbnail, name, tags, circular arrow button |
| Bottom-left | Huge uppercase statement, wide-tracked subline, outlined pill with play circle | "ONE COURSE" / "A WORLD OF EVENTS" / outlined pill "Explore Programmes" |
| Centre/right | Cut-out portrait (no background) lit teal on one side, melting into an orange gradient | Hero photograph with a gradient fade mask, orange multiply wash, teal rim light |
| Right headline | Glowing white "INFINITE VIBES" with tracked "PLAY · STREAM · COMPETE" | "EVERY EVENT STARTS HERE" with "PLAN · DESIGN · DELIVER" |
| Bottom-right | Two glass image cards with play icon + label (one orange, one teal) | "Industry Exposure" (orange) and "Next Batch" (teal) cards |

### 1.2 The one fixed colour
**Orange is the brand colour.** Teal is only the rim-light accent (the glowing headphone ring and the second card). Everything else is near-black burnt brown and white.

| Token | Hex | Use |
|---|---|---|
| `--ember` | `#FF5A12` | Primary: active pill, CTA pill, glow, dividers |
| `--flame` | `#FF7A1A` | Gradient mid |
| `--amber` | `#FFA42B` | Gradient highlight, bottom glow |
| `--burnt` | `#B33A05` | Gradient shadow side |
| `--ink` | `#140602` | Page base (near-black, warm) |
| `--ink-2` | `#220B03` | Panels |
| `--teal` | `#17C8D0` | Rim light, accent card |
| `--teal-deep` | `#06505C` | Accent card gradient |
| `--white` | `#FFFFFF` | Headlines, white pill button |
| `--mute` | `rgba(255,255,255,.62)` | Subtitles |

Page background is a layered gradient: `radial(amber, bottom-left) + radial(ember, centre) + linear(ink → burnt → ember)`, exactly the "orange fog" in the screenshot.

### 1.3 Typography
- Family: a clean neo-grotesk. **Inter** (800/700 for headlines, 500 for UI, 400 body).
- Headline: uppercase, weight 800, tight tracking (−0.02em), white, soft text-shadow glow on the big right-hand statement.
- Eyebrows / sublines: uppercase, weight 500–600, tracking 0.32–0.5em, small (11–13 px). This wide tracking is a signature of the reference.
- Stats: 22–26 px bold number, 13 px muted label.
- Body: 16–18 px, 1.7 line-height, `--mute`.

### 1.4 Buttons and fields
| Element | Spec |
|---|---|
| Primary (light) | White fill, black text 600, radius 999, height 56, trailing icon, soft shadow |
| Primary (brand) | `--ember` fill, white text 600, radius 999, height 44 |
| Secondary | Transparent, 1.5 px white 70% border, radius 999, leading circular play/arrow icon |
| Circular play | 38 px circle, 1.5 px white 60% border, white triangle |
| Nav pill | Glass (`rgba(255,255,255,.06)` + blur), 1 px ember 55% border, radius 999, inner links 15 px 500 |
| Search / bell | Glass pills, same border treatment |
| Cards | Radius 20, 1 px ember/teal border, image with dark-to-transparent overlay, play icon + label bottom-left |
| Form fields | Glass fill, 1 px white 18% border, radius 14, focus ring = ember glow |

### 1.5 Imagery
Subject cut out of its background, lit from one side with teal, fading into an orange gradient; nothing sits in a box. Implemented with: `mask-image` fade on the photo, an orange `mix-blend-mode: multiply` wash, a teal radial rim light, and film grain. Every page gets its own hero photo and its own crop/focal point.

---

## 2. Sitemap (everything gets its own page)

```
/                          Home
/programs                  Programmes index (all 12 services)
/programs/[slug]           12 service pages (see 2.1)
/course                    45-day flagship overview
/curriculum                Full curriculum
/roadmap                   45-day journey
/exposure                  Industry exposure
/careers                   Career paths
/projects                  Student projects & portfolio
/student-stories           Learner voices (honest, no fake reviews)
/gallery                   Event gallery
/about  /founders          Institute, founders & trainers
/admissions  /counselling  Apply, WhatsApp counselling form
/faq  /resources  /contact
```

### 2.1 The 12 service pages
| # | Slug | Service |
|---|---|---|
| 01 | `event-planning-foundations` | Event planning foundations |
| 02 | `client-handling-communication` | Client handling & communication |
| 03 | `quotations-costing-budgets` | Quotations, costing & budgets |
| 04 | `vendor-sourcing-negotiation` | Vendor sourcing & negotiation |
| 05 | `event-design-decoration` | Event design, stage & décor |
| 06 | `wedding-celebration-planning` | Wedding & celebration planning |
| 07 | `corporate-public-events` | Corporate & public events |
| 08 | `event-marketing-creative-ai` | Event marketing, poster design, video editing & AI |
| 09 | `team-leadership-coordination` | Team leadership & coordination |
| 10 | `crisis-management` | Crisis management & problem solving |
| 11 | `freelancing-event-business` | Freelancing & event business |
| 12 | `portfolio-final-assessment` | Portfolio & final assessment |

### 2.2 Architecture of a service page
Every service page follows the same skeleton so the site feels systematic, but each has its own hero photo, focal point, motion-graphic composition and animation set.

| Section | Heading level | Purpose |
|---|---|---|
| Hero (image fade, eyebrow, CTA pair, stat strip) | **H1** (page title) + `p` lead | Say what the service is and who it is for |
| "What you will learn" — 6 outcome cards | **H2** → card titles **H3** | Skills list, SEO-rich |
| Motion graphic panel (Remotion) | **H2** caption | Visual explanation of the process |
| "How the module runs" — 5 steps | **H2** → steps **H3**, sub-labels **H4** | Process / method |
| "What you will build" — deliverables | **H2** → items **H3**, output meta **H5** | Practical evidence |
| "Skills you take away" — tag cloud | **H4** | Keywords |
| FAQ (3 questions) | **H2** → questions **H3** | FAQPage schema |
| Prev / next service + CTA band | **H2** → links, photo credit **H6** | Internal linking |

Heading rules: exactly one H1; H2 for sections; H3 for cards/steps/questions; H4 for panel sub-labels; H5 for small metadata labels; H6 for captions (image credit, "illustrative photography"). No level is skipped inside a section.

### 2.3 Architecture of the Home page
1. **Hero** (reference layout): glass nav · laurel badge · stats · H1 · white CTA · 4 featured programmes · "ONE COURSE" statement · outlined CTA · right statement · two glass cards. Orbit ring (Remotion) sits where the headphone ring sits.
2. **Marquee strip**: the 12 services scrolling with velocity-based speed.
3. **"The profession" intro** (H2): what event management involves.
4. **Programmes grid**: 12 cards, tilt + spotlight hover, link to each service page.
5. **45-day timeline** (pinned scroll sequence): four phases.
6. **Industry exposure** band: counter stats (10–15 days).
7. **Founder-led** panel (honest: no invented names).
8. **Admissions steps** and **FAQ preview**.
9. **Closing CTA** with halo ring.

### 2.4 Other pages
Each existing page (about, founders, course, curriculum, roadmap, exposure, careers, projects, student stories, gallery, admissions, counselling, FAQ, resources, contact) keeps its existing, honest content and is re-rendered through the new futuristic template: its own hero photo + crop, H1/H2 structure, stat strip, numbered section cards (H3), related links, closing CTA. The counselling page keeps its WhatsApp form restyled as glass fields.

---

## 3. SEO plan
- One `<h1>` per page; metadata (`title`, `description`, `keywords`, canonical, OpenGraph, Twitter) per route.
- JSON-LD: `EducationalOrganization` (home), `Course` + `BreadcrumbList` (each service page), `FAQPage` (FAQ and service FAQs).
- `sitemap.ts` lists every route including the 13 programme URLs; `robots.ts` unchanged.
- Target keywords: *event management course in Bangalore / Bengaluru*, *event planning training Vijayanagar*, *wedding planner course Bangalore*, *event marketing course*, *vendor negotiation training*, etc.
- Content is server-rendered HTML; animations are progressive enhancement, so crawlers see the full text.
- Images: `next/image`, descriptive `alt`, priority on the hero only, AVIF/WebP.
- Honesty constraints retained from the existing site: no guaranteed jobs, no fabricated testimonials, no invented founder names, no public fee.

---

## 4. Animation & motion plan — 105 effects

The effects are implemented in `src/lib/fx.ts` and applied through `data-fx` attributes, so any element can opt in. The full numbered catalogue (ID, name, what it does) is in **ANIMATION-CATALOGUE.md**, generated from the code so the two cannot drift.

| Group | Count | Engine |
|---|---|---|
| A. Scroll-reveal (`rv-*`) | 30 | GSAP + ScrollTrigger |
| B. Text effects (`tx-*`) | 15 | GSAP text splitting |
| C. Scroll-driven (`sc-*`) | 15 | ScrollTrigger scrub / pin |
| D. Interaction (`ix-*`) | 15 | GSAP quickTo + CSS |
| E. Ambient / background (`am-*`) | 10 | CSS + canvas |
| F. Navigation & page (`nv-*`) | 6 | GSAP + Lenis |
| G. Motion graphics (`mg-*`) | 14 | **Remotion Player** compositions |
| **Total** | **105** | |

Rules: `prefers-reduced-motion` disables everything except colour changes; animations only run once per element; mobile (< 900 px) disables heavy effects (particles, mouse parallax, tilt); content stays visible without JS.

### 4.1 Per-page effect sets
Every service page uses a different combination (hero effect · reveal style · text effect · scroll effect · hover effect · ambient · motion graphic). The assignment table is in the appendix of ANIMATION-CATALOGUE.md.

### 4.2 Tools and references
- **GSAP + ScrollTrigger** — core animation engine.
- **Lenis** — smooth scrolling (`nv-smooth-scroll`).
- **Remotion** (`remotion`, `@remotion/player`) — the 14 `mg-*` motion graphics are real Remotion compositions played inline, not videos, so they stay crisp and tiny.
- **React Bits** — patterns re-implemented natively (split text, magnet, tilted card, count-up, spotlight card, shiny text, marquee) to avoid copying third-party code into a client project.
- **promptmotion.com** — reviewed on 14 Nov 2026. It is a prompt library (5 free text prompts for AI *video* generators: product reveal, parallax landscape, intro sequence, liquid-metal morph, social story). It publishes no code or assets and states no reuse licence, so nothing was copied. The 14 Remotion compositions are original and are *inspired by those five prompt themes* (ProductReveal, GoldenParallax, GeometricIntro, LiquidMorph, StoryReveal) plus nine Anugraha-specific graphics.
- **HyperFrames** — not used at runtime. Suggested for the next step: rendering the Kannada–English promo videos listed in the Anugraha course brief as MP4s.

---

## 5. Build & deployment
1. Next.js 15 App Router + React 19 (existing stack kept).
2. `npm run build` must pass before any push.
3. Commit to `main` on `Sanaulla7676/anugraha`; Vercel's Git integration builds and publishes to anugraha-lake.vercel.app.
4. Rollback: revert the commit or redeploy the previous Vercel deployment.
