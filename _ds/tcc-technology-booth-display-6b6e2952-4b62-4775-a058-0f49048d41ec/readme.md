# TCC Technology — Design System

A brand & UI system for **TCCtechnology** (T.C.C. Technology Co., Ltd.), built by the
Data Management team. Its first job: power an **auto-looping booth display** for the
convention that cycles TCC Technology's story, services, metrics and call-to-action.

> **Sources provided:** `uploads/tcctechnology logo.jpg` (primary wordmark). No codebase,
> Figma, or brand-guide file was supplied — the visual system below is **derived from the
> logo** (its exact gray + navy were color-picked) and from TCC Technology's public
> positioning as Thailand's carrier-neutral data-center, cloud & managed-services provider.
> Treat the palette/type choices as a proposed starting point and refine against the
> official brand book if one exists.

---

## Company context

TCC Technology is a leading Thai enterprise-IT provider, part of the **TCC Group**
conglomerate. Core offerings represented in this system:

- **Data Center** — Tier III, carrier-neutral facilities, 24/7 NOC.
- **Hybrid Cloud** — public / private / multi-cloud, orchestrated.
- **Managed Services** — monitoring, cybersecurity, IT operations.
- **System Integration** — solution design, delivery, lifecycle support.

Audience: enterprise IT decision-makers, in a formal B2B context. The booth display
speaks to passers-by at a convention — short, confident, scannable.

---

## Content fundamentals

- **Voice:** confident, calm, enterprise-grade. We are a *trusted partner*, not a hype machine.
- **Person:** "we" for TCC; "you / your" for the customer ("your digital infrastructure").
- **Casing:** Title/sentence case for headlines; **UPPERCASE wide-tracked** eyebrows
  (`.tcc-overline`) as a recurring motif. Metrics in figures ("99.99%", "24/7", "Tier III").
- **Tone examples:** "Your Trusted Technology Partner" · "Built for relentless uptime" ·
  "Local expertise, global standards" · "Let's build your digital infrastructure."
- **No emoji.** Iconography is line-based and restrained (see Iconography).
- **Numbers earn their place** — lead with proof points (uptime, years, certifications), not filler stats.

---

## Visual foundations

- **Colors:** deep corporate **navy** (`--tcc-navy-700 #16215C`, from the logo wordmark) +
  neutral **steel gray** (`--tcc-steel-500 #808285`, from the "TCC" mark) + a **digital
  cyan** accent (`--tcc-cyan-500 #00A8C8`) used sparingly for emphasis, data and connectivity
  cues. Page background is cool off-white `--tcc-paper #F6F8FB`.
- **Type:** **Jost** (geometric) for display/headings — its wide, light letterforms echo
  the logo. **IBM Plex Sans** for body & UI. **IBM Plex Mono** for specs, metrics, code.
  Display weights skew **light (300)** for elegance; UI uses 500–600.
- **Backgrounds:** dark scenes use a **navy radial gradient** (navy-700 → navy-900) with a
  faint **64px grid** and slow-drifting **cyan/indigo glow blobs**. Light surfaces are flat
  paper/white — no busy textures.
- **Animation:** smooth, confident, **no bounce**. Standard easing `cubic-bezier(.4,0,.2,1)`,
  240ms base. Scene transitions are an 800ms opacity + subtle translateY/scale fade.
  Ambient loops (glow drift, grid scan) are slow (18–24s) and decorative.
- **Hover:** buttons darken one navy step; press = 1px translateY down (no shrink).
- **Borders:** 1px hairlines `--tcc-line #E3E6EC`. Accent edges use a cyan→navy vertical bar.
- **Radii:** restrained/corporate — `sm 6px` for buttons, `lg 16px` for cards, `pill` for
  badges/CTAs. Not soft/playful.
- **Shadows:** soft, **cool navy-tinted** elevation (`rgba(12,18,51,…)`), never hard black.
- **Transparency/blur:** glassy cards on dark scenes (`rgba(255,255,255,.05)` + `blur(4px)`).
- **Imagery vibe (when used):** cool, clean, infrastructure/data-center — blues and steel,
  never warm. (No stock imagery shipped here — add real photography to `assets/` as needed.)

---

## Iconography

- **Style:** thin **line icons, 2px stroke, rounded caps/joins**, drawn with `currentColor`
  so they inherit text/accent color. Used in the booth's service cards (server, cloud,
  shield-check, share/network, eye).
- These are rendered inline in the booth template in a **Lucide-compatible** stroke style.
  **Substitution flag:** no official TCC icon set was provided — if you have a brand icon
  library, swap these for it. For new work, [Lucide](https://lucide.dev) (CDN) is the
  recommended match for stroke weight and style.
- **No emoji**, no unicode-as-icon. Logos live in `assets/`.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**Tokens** (`tokens/`)
- `fonts.css` (Jost · IBM Plex Sans · IBM Plex Mono) · `colors.css` · `typography.css`
  · `spacing.css` (radius/shadow/motion) · `base.css` (element resets + `.tcc-overline`, `.tcc-rule`).

**Assets** (`assets/`)
- `logo-tcctech.jpg` / `.png` (transparent) — primary wordmark on light.
- `logo-tcctech-white.png` — white knockout for navy / dark / photo backgrounds.

**Components** (`components/core/`) — namespace `window.TCCTechnologyDesignSystem_*`
- `Button` (primary / accent / secondary / ghost · sm/md/lg)
- `Badge` (neutral / brand / accent / success / warning / danger)
- `Card` (flat / raised / brand · optional cyan accent edge)
- `Stat` (oversized metric tile, light or `inverse` for navy)

**Templates** (`templates/`)
- `booth-display/BoothDisplay.dc.html` — the **auto-looping convention kiosk**. 5 scenes
  (Hero → Services → Metrics → Why TCC → CTA), click-or-auto navigation, tweakable accent,
  booth label, and per-scene seconds.

**Foundation cards** (`guidelines/`) — specimen cards surfaced in the Design System tab
(Colors, Type, Spacing, Brand).

---

## Using the booth display

Open `templates/booth-display/BoothDisplay.dc.html` full-screen on the booth monitor; it
auto-loops indefinitely. Tweaks: **accent** color, **boothLabel** text, **sceneSeconds**
(dwell time per scene). Tap the progress segments to jump to a scene.
