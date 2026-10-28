---
name: Siddharth Sharma
description: Mithai-shop editorial portfolio for an engineer who also runs businesses.
colors:
  jalebi: "#f26b1d"
  jalebi-deep: "#c65a1f"
  chai: "#fff4e3"
  kadak: "#2b1a12"
  pista: "#8db580"
  mithai: "#f28db2"
  muted-on-chai: "#604f45"
  muted-on-kadak: "#baac9d"
  polaroid-dark: "#ece0d0"
typography:
  display:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(4rem, 10.6vw, 11.5rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  headline-close:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(3rem, 8.4vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Rozha One, Georgia, serif"
    fontSize: "clamp(1.9rem, 4.2vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  italic-voice:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.3
  italic-fact:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label-small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  photo: "4px"
  screenshot: "8px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section-block: "clamp(96px, 14vw, 180px)"
  row-block: "clamp(24px, 3vw, 36px)"
  max-width: "1440px"
  header: "72px"
components:
  nav-link:
    textColor: "{colors.kadak}"
    typography: "{typography.label}"
    padding: "4px 0"
  theme-toggle:
    textColor: "{colors.kadak}"
    rounded: "{rounded.pill}"
    size: "40px"
  text-link:
    textColor: "{colors.kadak}"
    padding: "0 0 2px"
  stack-chip:
    textColor: "{colors.kadak}"
    typography: "{typography.label-small}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  social-pill:
    textColor: "{colors.chai}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  social-pill-hover:
    backgroundColor: "{colors.chai}"
    textColor: "{colors.kadak}"
  badge-arrow:
    backgroundColor: "{colors.jalebi}"
    textColor: "{colors.kadak}"
    rounded: "{rounded.pill}"
    padding: "10px"
  ventures-band:
    backgroundColor: "{colors.jalebi}"
    textColor: "{colors.kadak}"
  contact-band:
    backgroundColor: "{colors.kadak}"
    textColor: "{colors.chai}"
  polaroid:
    backgroundColor: "{colors.chai}"
    padding: "10px 10px 36px"
---

# Design System: Siddharth Sharma

## Overview

**Creative North Star: "The Mithai Shop Ledger"**

An editorial portfolio painted in a sweet-shop palette. The page reads like a well-kept shop ledger: an oversized fat-face name across nearly the full width, hairline-ruled tables of facts, ventures and projects, and an italic serif voice that speaks in short asides. The Everything Fine brand palette is used at full commitment. Jalebi orange takes over whole bands instead of acting as a timid accent, chai cream and kadak ink swap roles between light and dark themes, and pista and mithai add small, specific notes of life.

Density is low and the type scale is high. Each section is one idea set in display type, followed by ruled rows that scan quickly. Depth comes almost entirely from colour bands and hairlines. The only lifted objects are photographs and the cursor-riding project preview. Motion is editorial: words rise out of masks, rows reveal on scroll, and underlines sweep in. Nothing bounces.

The build rejects the dark dev-portfolio with a neon accent and the grid of identical project cards. Work is presented as an index of rows, never as a card grid.

**Key Characteristics:**
- Indian fat-face display (Rozha One) at poster scale, always weight 400 with negative tracking.
- Instrument Serif italic as the second voice for values, summaries and the punchline word.
- Whole-band colour: one jalebi band (ventures) and one inverse band (contact).
- 1px hairline rules carry the structure; there are no card boxes.
- Light and dark themes are mirror images of the same two brand neutrals.
- Pill-round controls, gently rounded photographs, and tilted polaroids taped in mithai and pista.

## Colors

A warm two-neutral system (cream and ink) with one loud owner colour and two small accents. All of it comes from the user's binding brand palette.

### Primary
- **Jalebi Orange** (jalebi): owns whole surfaces, namely the ventures band background, the intro wipe panel and the badge arrow disc. It also supplies the marker sweep behind project names on hover, the contact email underline and the caret. On the kadak ground (dark theme) it can set large italic text directly.
- **Jalebi Deep** (jalebi-deep): jalebi mixed 80/20 toward kadak in OKLab. This is what jalebi becomes when it has to be text on chai in the light theme. It is used only for large italic display words (≈3.95:1, large text only).

### Secondary
- **Pista Green** (pista): the "live" state. It marks an 8px dot with a 3px pista halo at 30%, which always appears beside the word "live" and never alone. It also tapes the right-hand polaroid.

### Tertiary
- **Mithai Pink** (mithai): the wink. It appears as the dot in "siddharth.sharma", as the text-selection background, and as the tape on the left-hand polaroid. Use it nowhere else.

### Neutral
- **Chai Cream** (chai): the light-theme ground, the dark-theme inverse band, and the polaroid paper.
- **Kadak Ink** (kadak): the dark-theme ground, all light-theme text, the inverse contact band in light mode, the text on the jalebi band, and the source colour for every hairline and shadow.
- **Muted on Chai** (muted-on-chai): secondary text in light mode (kadak 72% into chai), ≈7.1:1.
- **Muted on Kadak** (muted-on-kadak): secondary text in dark mode (chai 70% into kadak), ≈7.5:1.
- **Hairline**: the foreground at low alpha. Kadak 18% over chai, or chai 16% over kadak. On the jalebi band it is kadak 30%. These are defined as `color-mix` against transparent, not as solid tokens.
- **Polaroid Dark** (polaroid-dark): the polaroid paper in dark mode, slightly dimmed so it does not glare.

### Named Rules
**The Whole-Band Rule.** Jalebi is a surface, not a sprinkle. When orange appears at scale, it fills a full-bleed band with kadak text on it. Elsewhere it shrinks to a single functional mark (the marker sweep, the underline, the arrow disc).

**The Theme Mirror Rule.** Light and dark themes swap chai and kadak. They never introduce a third neutral. The inverse band flips with them. Its accent is jalebi on kadak, and it falls back to kadak on chai, because jalebi on chai fails as text (2.8:1).

**The One Wink Rule.** Mithai pink is limited to the name dot, text selection and polaroid tape. If a new surface wants pink, it takes the place of one of these uses.

## Typography

**Display Font:** Rozha One (with Georgia, serif)
**Italic Voice:** Instrument Serif, italic only (with Georgia, serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** A Devanagari-lineage fat face shouts the name and section heads. A light, literary italic answers it in short phrases. The grotesk stays out of the way and carries the facts.

### Hierarchy
- **Display** (400, clamp 4–11.5rem, 0.88): the hero name only. It sits on one line across ~90% of the width on desktop and stacks in two lines at 20.5vw on mobile. The words rise from overflow masks.
- **Headline Close** (400, clamp 3–8.5rem, 0.95): the contact closing line. Its last word switches to the italic voice in the band accent colour.
- **Headline** (400, clamp 2.25–4.75rem, 1.02): section titles, balanced and capped at 16ch.
- **Title** (400, clamp 1.9–3.5rem, 1.05): project and venture names in index rows. The lab title uses a smaller step (clamp 1.75–2.5rem).
- **Italic Voice** (Instrument Serif italic, 1.375rem, 1.3): venture summaries and the "hold up." punchline at display scale.
- **Italic Fact** (Instrument Serif italic, 1.125rem, 1.35): right-aligned values in the hero facts table.
- **Body** (400, 1.0625rem, 1.6): default text. Lead prose runs at 1.125rem with a 60ch maximum, and project summaries cap at 62ch.
- **Label** (0.875rem / 0.8125rem): nav, meta columns, fact keys, captions, stack chips and the footer. Labels are sentence case, and the vertical side email adds slight tracking (0.04em).
- **Emphasis** inside prose uses Hanken 600 in the full foreground colour against muted body text.

### Named Rules
**The Fat-Face-At-400 Rule.** Rozha One is always weight 400 with negative tracking (-0.02 to -0.03em). Never bold it, never letter-space it open, and never use it under ~1.5rem (the monogram is the floor).

**The Second Voice Rule.** Instrument Serif appears only in italic and only for values, summaries or one punchline word. It is never used for running paragraphs or for UI labels.

## Layout

The page is a single column of full-width sections capped at a 1440px maximum width, with a fluid gutter (clamp 16–56px). Section block padding is generous (clamp 96–180px), so each section reads as its own spread. Bands (ventures and contact) run full-bleed behind a constrained inner section.

The hero fills the viewport (100svh). The name sits at the top. Below it, a three-column grid holds the facts table (280–520px), the rotating badge and the tagline-plus-portrait aside, all aligned to the bottom edge. Content collections are **ruled indexes**: ventures use a 180px role column, the name and the body; work rows put the name and summary against a right-aligned meta column; lab rows form a five-column ledger. Rows are separated by top hairlines, and the last row closes with a bottom hairline.

Breakpoints: at ≤1080px the badge is hidden, ventures collapse to two columns and the lab drops its stack column. At ≤760px the nav list is hidden, the header shrinks to 64px, all grids become single-column, the work meta moves above the name and the facts stack key over value. The vertical side email appears only at ≥1100px. Hover-only affordances (cursor preview, underline sweeps) are gated on `(hover: hover) and (pointer: fine)`. Touch devices get inline thumbnails instead.

## Elevation & Depth

The world is flat. Depth comes from colour bands and hairlines, not from shadows. Exactly two kinds of object lift off the page, both photographic: the cursor-riding project preview and the taped polaroids. Shadows are soft, tinted with kadak and pushed downward with negative spread. There are no hard offsets and no glows.

### Shadow Vocabulary
- **Preview lift** (`0 24px 48px -16px` kadak 45%): the floating screenshot that follows the cursor over the work index.
- **Polaroid drop** (`0 18px 40px -18px` kadak 55%): the tilted, taped photos in "Off the keyboard".
- **Live halo** (`0 0 0 3px` pista 30%): a ring around the live-state dot, used as a status mark rather than as elevation.

### Named Rules
**The Paper-Only Lift Rule.** Only photographs and screenshots cast shadows. Text, controls and rows stay flat and are separated by hairlines.

## Shapes

Shapes split into two families: soft rectangles for imagery and full pills for controls. Photographs carry a 4px radius plus an inset 1px hairline outline so cream-on-cream edges stay readable. Screenshots carry 8px. Every interactive chrome element is a pill or a circle: the theme toggle, the stack chips, the social links, the badge and its arrow disc. Polaroids have square corners with an uneven bottom margin, tilted −2.5° and +2°, and taped with a rotated strip. The rotating "see the work" badge sets its text on a circular path, which makes it the one curved type device in the world.

## Components

### Navigation
- **Style:** a transparent header that sits absolutely over the hero, with the "SS" monogram in Rozha One at 1.5rem on the left and label-size links, an optional résumé link and the theme toggle on the right.
- **Hover:** a 1px currentColor underline sweeps in from the left (background-size 0→100%, 300ms ease-out). The footer links share this behaviour.
- **Mobile:** the link list is hidden at ≤760px. Only the monogram and toggle remain.

### Theme Toggle
- **Shape:** a 40px circle with a hairline border. On hover the border goes to the full foreground, and on press it scales to 0.94.
- **Icon swap:** sun and moon share one grid cell. The outgoing icon fades and rotates −60° at 0.8 scale.

### Text Link
- **Style:** Hanken 600 with a 1.5px currentColor bottom border and a trailing up-right arrow. On hover the arrow nudges 2px up and to the right. It inherits its colour, so it works on the jalebi band.

### Chips
- **Stack chip:** a 0.8125rem label in a pill with a 1px hairline border, 3×10px padding and no fill.
- **Social pill:** 10×18px padding, a pill shape with an inverse-fg border at 25% and an icon plus label. On hover it fills solid with the inverse foreground and the text flips.

### Project Index Row (signature)
Each row holds a title-size name with a trailing arrow, a muted summary, stack chips, and a right column with the year (tabular figures), the live dot and a GitHub icon link. The whole row is the link target. On hover a jalebi marker (32% of the line height, sitting at 88%) sweeps behind the name over 450ms and the arrow nudges. On fine pointers a 420px screenshot preview (8px radius, preview lift) trails the cursor with an eased follow, opening and closing as a centred clip-path inset. It hides on scroll. On touch the screenshot renders inline under the row instead.

### Lab Ledger Row
A compact five-column row (name in 600, summary, stack, year, arrow) at 0.9375rem, separated by hairlines. On hover it insets 12px horizontally and the arrow turns jalebi.

### Rotating Badge
A 128px circle with 11px uppercase text on a circular path, rotating every 18s, around a jalebi disc holding a down arrow. On hover the arrow drops 4px. The rotation stops under reduced motion.

### Polaroid
Chai paper (polaroid-dark in dark mode) with 10/10/36px padding, a 3:4 photo, the polaroid drop shadow, a slight tilt and an 84×24px translucent tape strip in mithai or pista at the top centre.

### Contact Email
A large link (clamp 1.25–2.25rem) with a mail icon and a 2px jalebi underline. On hover the gap between icon and text widens from 14 to 20px.

### Motion
Easing is `cubic-bezier(0.23, 1, 0.32, 1)` for reveals and state changes and `cubic-bezier(0.77, 0, 0.175, 1)` for the intro wipes. Each session gets one intro: a kadak screen where the name rises, a jalebi panel wipes up and then the whole screen clips away (≈2.4s). The hero then rises in. Scroll reveals lift 28px and fade, staggered 60ms per row. Reduced motion keeps the fades and drops all movement.

## Do's and Don'ts

### Do:
- **Do** let jalebi fill a full-bleed band with kadak text when orange appears at scale (The Whole-Band Rule).
- **Do** switch jalebi to jalebi-deep before using it as text on chai, and only at large italic display size.
- **Do** separate rows and table entries with 1px foreground hairlines at 16–18% (30% on the jalebi band).
- **Do** set Rozha One at weight 400 with negative tracking, and give the punchline word to Instrument Serif italic.
- **Do** gate hover-only effects on `(hover: hover) and (pointer: fine)` and give touch an inline equivalent.
- **Do** pair the pista dot with the word "live".

### Don't:
- **Don't** present work as a grid of identical cards. Use the ruled index.
- **Don't** build a dark dev-portfolio with a neon accent. The dark theme is kadak and chai, with jalebi as its only loud colour.
- **Don't** add a third neutral, grey or pure black/white. Every neutral is chai, kadak or a mix of the two.
- **Don't** use mithai pink beyond the name dot, selection and tape (The One Wink Rule).
- **Don't** put shadows on text, controls or rows (The Paper-Only Lift Rule).
- **Don't** bold or open-track Rozha One.
