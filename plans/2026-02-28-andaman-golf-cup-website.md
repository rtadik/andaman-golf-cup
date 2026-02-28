# Plan: Andaman Golf Cup 2026 — Event Website

**Created:** 2026-02-28
**Status:** Implemented
**Request:** Build a premium, trilingual (EN/TH/RU) static HTML/CSS/JS website for the Andaman Golf Cup 2026 charity golf event hosted by ANRCF.

---

## Overview

### What This Plan Accomplishes

Produces a complete, production-ready single-page static website for the Andaman Golf Cup 2026 event. The site is trilingual (English, Thai, Russian) with a language switcher, covers all event sections (hero, agenda, tickets, sponsorship, charity trust, past events, and registration), and handles registration with a bank transfer confirmation flow — all as self-contained static files requiring no backend.

### Why This Matters

This website is the primary touchpoint for inviting high-net-worth individuals, VIPs, and potential sponsors. It must immediately signal exclusivity, trustworthiness, and purpose — conveying both the luxury networking opportunity and the charitable mission of ANRCF. It will be shared directly with targets and needs to stand alone as a compelling brief.

---

## Current State

### Relevant Existing Structure

```
outputs/website/       ← target output directory (empty)
context/event-brief.md ← full event details, ticket types, sponsorship info
```

- Charity branding reference: https://anrcf.com/ — green/blue tones, environmental focus, professional aesthetic
- Event name: **Andaman Golf Cup 2026** (working title)
- Domain: **golf.anrcf.com**
- Stack confirmed: Static HTML + CSS + vanilla JS

### Gaps or Problems Being Addressed

- No website exists yet; this builds it from scratch
- Trilingual content needs to be written in EN, TH, and RU simultaneously
- Design system, HTML structure, and JS interactivity are independent workstreams that can be parallelized

---

## Proposed Changes

### Summary of Changes

- Create `outputs/website/` directory with a complete static site
- Four parallel agent workstreams (content, CSS, HTML, JS) then one integration step
- Update `context/event-brief.md` open items after plan execution
- Update `CLAUDE.md` to document the new output

### New Files to Create

| File Path | Purpose |
|---|---|
| `outputs/website/index.html` | Main and only HTML page (fully assembled, self-contained) |
| `outputs/website/style.css` | Full design system — layout, components, responsive, animations |
| `outputs/website/script.js` | Language switcher (data-i18n) + registration form handling |
| `outputs/website/_content-reference.md` | All translated content strings for all 3 languages (reference, not served) |

### Files to Modify

| File Path | Changes |
|---|---|
| `context/event-brief.md` | Check off completed open items after implementation |
| `CLAUDE.md` | Add `outputs/website/` to workspace structure documentation |

---

## Design Decisions

### Key Decisions Made

1. **Single HTML file with external CSS + JS**: Keeps the site easy to deploy anywhere (drag-and-drop to any host), easy to share as a zip, no build step required.
2. **data-i18n attribute pattern for i18n**: Each text element has `data-i18n="key"` and JS swaps `innerHTML` based on active language. Cleanest approach for a static trilingual site — avoids tripling the HTML.
3. **Language switcher as persistent pill in nav (EN | ภาษาไทย | RU)**: Visible at all times, no menu required. Defaults to English on load.
4. **Luxury color palette — deep forest green + gold**: `#1B3A2D` (primary), `#C9A84C` (gold accent), `#F8F5EE` (cream background), `#0D2419` (dark), `#FFFFFF` (white). Matches ANRCF's green branding while elevating to luxury/gala level appropriate for HNW audience.
5. **Playfair Display + Inter typefaces**: Playfair Display for headings (elegant, classic serif), Inter for body (clean, readable). Both from Google Fonts.
6. **Registration form → JS confirmation panel (no backend)**: On form submit, hide the form and show a confirmation panel with placeholder bank transfer details. No server needed.
7. **Parallel agent build**: Content, CSS, HTML skeleton, and JS are fully independent — launch 4 agents simultaneously for maximum efficiency, then integrate.
8. **Placeholder images as CSS gradient panels**: Until real photos are supplied, hero and gallery sections use styled gradient divs with overlay text. Easy to swap for `<img>` tags later.
9. **Sticky navigation with smooth scroll**: Nav sticks to top on scroll; anchor links scroll smoothly to sections.
10. **Mobile responsive**: CSS Grid + Flexbox, breakpoints at 768px and 1200px.

### Alternatives Considered

- **Next.js/React**: Rejected — overkill for a single event page, requires build tooling, harder to hand off
- **Three separate HTML files per language**: Rejected — tripled maintenance burden, no shared layout
- **Embedding all CSS/JS inline in HTML**: Rejected — single file is harder to read and edit; separate files are cleaner

### Open Questions (none blocking implementation)

- Military golf base name and address → use placeholder "Royal Bangkok Golf Club, Bangkok" for now
- Bank account details → use placeholder bank transfer block
- Real photos → placeholder gradient panels will be clearly marked for swap
- Exact VVIP slot count → use "Limited Availability" copy

---

## Step-by-Step Tasks

### Step 1: Launch 4 Parallel Agents

Launch all four agents simultaneously. Each produces a specific artifact that feeds into Step 2 integration.

---

#### Agent A — Content Writer

**Task:** Write all website copy in English, Thai, and Russian for every section. Output as `outputs/website/_content-reference.md`.

**Sections to cover:**

| Section | Keys needed |
|---|---|
| Nav | site name, nav links (About, Agenda, Tickets, Sponsors, Register), Register CTA |
| Hero | headline, subheadline, date+location line, two CTA buttons |
| About | section heading, body paragraph (2-3 sentences), 4 stat labels + values |
| Agenda | section heading, each timeline item (time + title + description) |
| Tickets | section heading, VVIP card (name, price, per-team label, 4 bullet benefits), VIP card (same), CTA button |
| Sponsorship | section heading, subheading, body paragraph, 3 benefit bullets, min amount, slots remaining label, CTA |
| Charity | section heading, body (2 sentences about ANRCF mission), 3 impact stats, link label |
| Past Events | section heading, subheading, 3 placeholder card captions |
| Register | section heading, all form labels (name, org, email, phone, team type, team count, notes), submit button, confirmation heading, confirmation body with placeholder bank details |
| Footer | tagline, charity name, copyright |

**Content guidelines:**
- English: Polished, prestigious. Speaks to power and purpose. "This is not just golf — it is a gathering of Thailand's most influential voices."
- Thai: Natural, formal register appropriate for Thai business culture. Placeholder note that native review is needed.
- Russian: Professional. Warm but exclusive. Placeholder note that native review is needed.
- Tone: Exclusive invitation, not a public event. Convey scarcity (10 sponsors only, limited VVIP slots).
- Drinks line: "Complimentary soft beverages and premium spirits served throughout the day."

**Output format (`_content-reference.md`):**
```markdown
## [section-name]
### English
key: "value"
### Thai
key: "value"
### Russian
key: "value"
```

**Files affected:**
- `outputs/website/_content-reference.md` (create)

---

#### Agent B — CSS Design System

**Task:** Write the complete `style.css` for the website. Produce a fully working stylesheet.

**Design tokens (CSS custom properties in `:root`):**
```css
--green-deep:    #1B3A2D;
--green-dark:    #0D2419;
--green-mid:     #2D5A3D;
--gold:          #C9A84C;
--gold-light:    #E8C97A;
--cream:         #F8F5EE;
--cream-dark:    #EDE9DF;
--white:         #FFFFFF;
--text-dark:     #2C2C2C;
--text-mid:      #5C5C5C;
--text-light:    #8C8C8C;
--font-serif:    'Playfair Display', Georgia, serif;
--font-sans:     'Inter', system-ui, sans-serif;
--radius:        8px;
--shadow-sm:     0 2px 8px rgba(0,0,0,0.08);
--shadow-md:     0 8px 32px rgba(0,0,0,0.12);
--shadow-lg:     0 24px 64px rgba(0,0,0,0.18);
--transition:    0.3s ease;
--max-width:     1200px;
```

**Sections to style:**

1. **Base reset + body**: `box-sizing: border-box`, remove margins, set base font (Inter 16px), background cream, text dark
2. **Typography scale**: h1 (Playfair, 56px/64px), h2 (Playfair, 40px), h3 (Playfair, 28px), h4 (Inter semibold, 18px), body, small
3. **Navigation**: Fixed top, `background: rgba(13,36,25,0.95)`, backdrop-filter blur. Logo left (serif, gold), nav links center (Inter 14px, white, uppercase tracking), language switcher + CTA right. Mobile: hamburger menu
4. **Language switcher**: Three pill buttons `EN | ภาษาไทย | RU` — inactive: outlined, white; active: gold fill, dark text
5. **Hero section**: Full viewport height, `background: linear-gradient(135deg, #0D2419 0%, #1B3A2D 50%, #2D5A3D 100%)` with a subtle diagonal pattern overlay. Centered content. Headline: Playfair 72px white. Subheadline: Inter 20px gold. Date/location: Inter 16px cream/70%. Two buttons: primary (gold fill) + secondary (white outline)
6. **Section wrapper**: `.section` class — `padding: 100px 24px`, `max-width: 1200px`, `margin: 0 auto`
7. **Section headings**: Centered, Playfair, with a gold underline accent (3px, 60px wide, centered)
8. **About section**: White background. Stats row: 4 cards with large gold number + label. Body copy centered, max-width 700px
9. **Agenda timeline**: Alternating left/right layout on desktop, single column on mobile. Each item: time (gold, serif, bold) + dot connector + content card (white, shadow, radius)
10. **Ticket cards**: Side-by-side on desktop. VVIP: dark green background, gold accents, "Premium" badge. VIP: white background, green accents. Price in large Playfair. Bullet list with checkmarks. CTA button bottom
11. **Sponsorship section**: Dark green background, gold text accents. Three benefit icons (Unicode or CSS-drawn) + labels. Large "10 Slots Only" callout in gold. CTA button
12. **Charity section**: Cream background. Logo placeholder left, text right (desktop). Three impact stats in green
13. **Past events gallery**: Three-column grid. Each card: square image placeholder (gradient, labeled "Photo Coming Soon") + caption text below
14. **Registration form**: White card, centered, max-width 640px. All inputs: Inter, 16px, border 1px `#DDD`, radius 6px, focus ring gold. Select dropdown. Textarea. Submit button: full-width gold. Confirmation panel: hidden by default, shown on submit — green header, bank details in monospace box
15. **Footer**: Dark green. Three columns (logo+tagline | nav links | contact). Copyright bar below. All text white/70%
16. **Responsive breakpoints**:
    - `@media (max-width: 768px)`: single column nav, stacked ticket cards, single-column agenda, single-column footer
    - `@media (max-width: 480px)`: reduced font sizes, tighter padding
17. **Utility classes**: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.text-gold`, `.text-center`, `.section-dark`, `.section-light`
18. **Animations**: Subtle fade-in on scroll (using `@keyframes fadeInUp` + Intersection Observer class hooks), smooth transitions on hover states

**Files affected:**
- `outputs/website/style.css` (create)

---

#### Agent C — HTML Structure

**Task:** Write the complete `index.html` — all sections with `data-i18n` hooks, form structure, and Google Fonts link. Default language: English. All text content uses `data-i18n="key"` attributes.

**Head:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title data-i18n="meta.title">Andaman Golf Cup 2026</title>
<meta name="description" data-i18n="meta.description" content="...">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
```

**HTML sections (in order):**
1. `<nav id="navbar">` — logo div, nav links (`<a href="#about">`, `#agenda`, `#tickets`, `#sponsorship`, `#register`), language switcher (`<button class="lang-btn" data-lang="en">EN</button>` etc.), register CTA button, hamburger for mobile
2. `<section id="hero">` — overlay div, content div with h1, p (subheadline), p (date/location with icon), two button links
3. `<section id="about">` — heading, gold divider, body paragraph, 4-column stats grid
4. `<section id="agenda">` — heading, gold divider, timeline container with 4 timeline items (each: `.timeline-time`, `.timeline-dot`, `.timeline-content` with h4 + p)
5. `<section id="tickets">` — heading, gold divider, two-column card grid (`.ticket-vvip`, `.ticket-vip` — each with badge, name, price, per-team note, ul benefits, CTA button)
6. `<section id="sponsorship">` — heading, gold divider, body, 3 benefit items, callout box (10 slots / 200k THB), CTA button
7. `<section id="charity">` — heading, gold divider, two-column (text + placeholder image), 3 stat items, link to anrcf.com
8. `<section id="past-events">` — heading, gold divider, subheading, 3-column gallery grid (each card: `.gallery-placeholder` div + figcaption)
9. `<section id="register">` — heading, gold divider, form card containing: `<form id="registration-form">` with all fields, `<div id="confirmation" class="hidden">` with bank transfer details placeholder
10. `<footer>` — three-column layout, copyright bar
11. `<script src="script.js"></script>`

**i18n key naming convention:**
- `nav.logo`, `nav.about`, `nav.agenda`, `nav.tickets`, `nav.sponsorship`, `nav.register`
- `hero.headline`, `hero.subheadline`, `hero.date`, `hero.cta.register`, `hero.cta.sponsor`
- `about.heading`, `about.body`, `about.stat1.value`, `about.stat1.label` ... etc.
- `agenda.heading`, `agenda.item1.time`, `agenda.item1.title`, `agenda.item1.desc` ... etc.
- `tickets.heading`, `tickets.vvip.name`, `tickets.vvip.price`, `tickets.vvip.benefit1` ... etc.
- `sponsor.heading`, `sponsor.body`, `sponsor.benefit1`, `sponsor.slots`, `sponsor.min`, `sponsor.cta`
- `charity.heading`, `charity.body`, `charity.stat1.value`, `charity.stat1.label` ... etc.
- `past.heading`, `past.subheading`, `past.card1`, `past.card2`, `past.card3`
- `register.heading`, `register.name`, `register.org`, `register.email`, `register.phone`, `register.teamtype`, `register.teamcount`, `register.notes`, `register.submit`
- `confirm.heading`, `confirm.body`, `confirm.bank.details`
- `footer.tagline`, `footer.copyright`

**Files affected:**
- `outputs/website/index.html` (create)

---

#### Agent D — JavaScript

**Task:** Write the complete `script.js` — language switcher and form handling.

**Module 1: i18n Language Switcher**

```js
// translations object — all keys for EN, TH, RU
const translations = { en: {}, th: {}, ru: {} }

// setLanguage(lang):
// 1. Store active lang in localStorage
// 2. Update <html lang=""> attribute
// 3. Query all [data-i18n] elements
// 4. For each: set element.innerHTML = translations[lang][key]
// 5. Update active class on lang buttons
// 6. Update <title> from translations
function setLanguage(lang) { ... }

// On DOMContentLoaded:
// 1. Read localStorage for saved language preference
// 2. Default to 'en'
// 3. Call setLanguage(savedLang)
// 4. Attach click handlers to .lang-btn buttons
```

**Translations to include in script.js** (populate from Agent A content output):
All EN, TH, RU strings for every `data-i18n` key listed in Agent C.

**Module 2: Registration Form Handler**

```js
// On form submit:
// 1. preventDefault()
// 2. Basic client-side validation (required fields non-empty)
// 3. If valid: hide #registration-form, show #confirmation div
// 4. Scroll #confirmation into view smoothly
// 5. If invalid: show inline validation messages

// Fields to validate:
// - name (required)
// - email (required, format check)
// - phone (required)
// - teamType (required, must select one)
// - teamCount (required, min 1)
```

**Module 3: Navigation**

```js
// Sticky nav shadow on scroll: add .scrolled class to #navbar when window.scrollY > 50
// Smooth scroll for anchor links (polyfill if needed)
// Mobile hamburger toggle: toggle .nav-open on nav
// Close mobile nav on link click
```

**Module 4: Scroll Animations**

```js
// IntersectionObserver: add .visible class to elements with .fade-in-up
// when they enter viewport (threshold 0.15)
// CSS handles the animation via .fade-in-up.visible
```

**Files affected:**
- `outputs/website/script.js` (create)

---

### Step 2: Integration

After all 4 agents complete, integrate their outputs into the final website.

**Actions:**
- Read `_content-reference.md` (Agent A output)
- Read `style.css` (Agent B output) — verify it's complete and consistent
- Read `index.html` (Agent C output) — verify all data-i18n keys are present
- Read `script.js` (Agent D output) — verify translations object matches all keys in HTML
- Cross-check: every `data-i18n` key in `index.html` must exist in all 3 language objects in `script.js`
- Fix any mismatches between the four artifacts
- Verify the form confirmation section has the placeholder bank transfer block
- Verify the gallery section has 3 placeholder cards
- Final review: site should be complete and ready to open in a browser

**Files affected:**
- `outputs/website/index.html` (final version)
- `outputs/website/style.css` (final version)
- `outputs/website/script.js` (final version)

---

### Step 3: Update Context and Documentation

**Actions:**
- Update `context/event-brief.md` — mark completed open items
- Update `CLAUDE.md` — add `outputs/website/` entry to Workspace Structure table

**Files affected:**
- `context/event-brief.md`
- `CLAUDE.md`

---

## Connections & Dependencies

### Files That Reference This Area

- `context/event-brief.md` — source of truth for all event details used in content
- `CLAUDE.md` — workspace structure docs need updating

### Updates Needed for Consistency

- `CLAUDE.md` Workspace Structure table → add `outputs/website/` row
- `context/event-brief.md` Open Items → check off completed items

### Impact on Existing Workflows

- None — this is a net-new output with no dependencies on existing plans or scripts

---

## Validation Checklist

- [ ] `outputs/website/index.html` opens in a browser without errors
- [ ] Language switcher cycles through EN → TH → RU and all text updates correctly
- [ ] Language preference persists on page reload (localStorage)
- [ ] All 10 sections render correctly (nav, hero, about, agenda, tickets, sponsorship, charity, past events, register, footer)
- [ ] Registration form shows validation errors on empty submit
- [ ] Valid form submission hides form and shows bank transfer confirmation panel
- [ ] Site is mobile responsive at 375px width (iPhone)
- [ ] Site looks correct at 1440px width (desktop)
- [ ] No broken links (all `href="#section"` anchors resolve)
- [ ] Google Fonts load correctly (Playfair Display + Inter)
- [ ] All placeholder sections are clearly marked with "TODO" comments for easy swap later
- [ ] `_content-reference.md` exists as a human-readable content reference
- [ ] `CLAUDE.md` updated with website output
- [ ] `context/event-brief.md` open items updated

---

## Success Criteria

1. Opening `outputs/website/index.html` in any modern browser produces a fully functional, visually premium website with no console errors
2. All three languages are fully populated — no empty or missing text in any language
3. The registration flow works end-to-end: form → validation → confirmation with placeholder bank details
4. The site could be deployed to `golf.anrcf.com` immediately by copying the `website/` folder to any static host

---

## Notes

- **Thai and Russian translations**: Flag in `_content-reference.md` that native speaker review is recommended before publishing
- **Images**: All image slots use CSS gradient placeholders. When real photos arrive, replace `.gallery-placeholder` divs with `<img>` tags and update the hero background
- **Bank transfer details**: The confirmation panel has clearly marked `<!-- REPLACE: bank details -->` placeholder comments
- **Golf base address**: Using "Royal Bangkok Sports Club, Bangkok" as placeholder — update when confirmed
- **Future enhancements** (not in scope): CMS integration, actual payment gateway, WhatsApp contact button, Google Analytics
- **Deployment**: `golf.anrcf.com` as subdomain — requires DNS CNAME record pointing to hosting, or upload to existing anrcf.com hosting provider. Simple hosts: Netlify (drag-and-drop), GitHub Pages, or same server as anrcf.com
