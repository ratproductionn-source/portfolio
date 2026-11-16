---
name: khmer-angkor-night-ui
description: Design or build bilingual Khmer/English website UI in the Angkor Night style (dark, gold, Koulen + Kantumruy Pro), and solve Khmer typography, layout and UX problems.
---

# Khmer UI: Angkor Night

Use this skill when building or redesigning any website, page, component or app screen for Cambodian users, or any UI that mixes Khmer (ខ្មែរ) and English. It gives you (1) a complete visual system to reproduce the Angkor Night look, (2) hard rules for Khmer script that most AI-generated UIs get wrong, and (3) a problem-solving workflow so you design well, not just decorate.

If the target site already has a brand, keep its colors and logo, and still apply Part 2 (Khmer rules) and Part 4 (workflow). Only bring in the Angkor Night palette when there is no brand or the user asks for this look.

---

## Part 1: The visual system

### Look in one sentence
A dark ink night with one warm Angkor gold accent, a faint diagonal lattice like carved stone, big Khmer display headings, English as a quieter second voice, and small developer touches (mono labels, a code card).

### Design tokens (CSS custom properties)

```css
:root {
  /* ground → surfaces */
  --ink:        #0E1116;  /* page background */
  --surface:    #11151B;  /* alternate sections, stat tiles */
  --card:       #161B22;  /* cards, chips, image placeholders */
  --code:       #0B0E12;  /* code card */
  --line-soft:  #1E242C;  /* section dividers */
  --line:       #232A33;  /* card borders */
  --line-strong:#2E3640;  /* buttons, pills, inputs */
  --line-hover: #3A434F;

  /* text */
  --text:       #F2EDE4;  /* warm off-white, never pure #FFF for body */
  --text-2:     #CFCAC0;  /* English paragraphs */
  --muted:      #A9A49A;  /* labels; 7:1 on --ink */
  --faint:      #8E897F;  /* placeholders only, never real content */

  /* accent (pick ONE per site) */
  --accent:      #D4A537; /* Angkor gold (default) */
  --accent-soft: #D4A5371F; /* 12% tint for chip backgrounds */
  --accent-line: #D4A53766; /* 40% for frames */
  --on-accent:   #0E1116; /* text on gold buttons */
  /* alternates: saffron #E08A3C · lotus #E58FA6 · jade #4FB39A */

  --success: #4ADE80;     /* "open to work" dot */

  /* shape & space */
  --r-sm: 8px; --r-md: 12px; --r-lg: 16px; --r-xl: 18px; --r-pill: 999px;
  --pad-x: clamp(20px, 4vw, 48px);
  --section-y: 96px;
  --max: 1200px;
}
```

Light variant (when the user wants light mode): `--ink #FAF6EE`, `--surface #F3EDE1`, `--card #FFFFFF`, `--line #E4DCCB`, `--text #1A1712`, `--text-2 #3D372E`, `--muted #6B6458`. Gold as TEXT on light must darken to `#7A5A0E` (plain #D4A537 fails contrast on cream). Gold as a button fill stays `#D4A537` with dark text.

### Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&family=Koulen&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Role | Font | Use |
|---|---|---|
| Khmer display | Koulen (400 only) | h1, h2, section numbers ០១ |
| Body, both scripts | Kantumruy Pro 300–700 | all paragraphs, nav, buttons |
| Latin headings | Space Grotesk 500/700 | English titles, big numbers |
| Code & labels | JetBrains Mono 400/500 | tags, file names, dates, kickers |

Alternatives if asked: Khmer display → Moul (very ornate, titles only) or Bayon; Khmer body → Battambang, Hanuman (serif feel), Noto Sans Khmer (safest fallback). Always end stacks with `'Noto Sans Khmer', system-ui, sans-serif`.

### Type scale
- h1 Koulen `clamp(44px, 6vw, 80px)`, line-height 1.3
- h2 Koulen 44px, line-height 1.3
- Section number Koulen 22px in accent, Khmer numerals (០១ ០២ ០៣)
- English kicker under h2: Space Grotesk 16px, `letter-spacing: 2px; text-transform: uppercase; color: var(--muted)`
- Lead Khmer paragraph 22px / 1.9; English paragraph 18px / 1.7
- Body 15–16px / 1.7; labels 12–14px

### Signature elements

**Stone lattice background** (hero, image placeholders):
```css
background-image:
  repeating-linear-gradient(45deg,  rgba(212,165,55,.05) 0 1px, transparent 1px 34px),
  repeating-linear-gradient(-45deg, rgba(212,165,55,.05) 0 1px, transparent 1px 34px);
```
Keep opacity at .04–.07. It is texture, not decoration you notice.

**Angkor silhouette** (line art over the portrait frame, stroke = accent, opacity .55):
```html
<svg aria-hidden="true" viewBox="0 0 240 100" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M106 96 L106 65 Q106 26 120 8 Q134 26 134 65 L134 96"/><path d="M108 55 H132 M111 42 H129 M114 30 H126"/>
  <path d="M77 96 L77 73 Q77 43 88 30 Q99 43 99 73 L99 96"/><path d="M79 64 H97 M82 52 H94"/>
  <path d="M141 96 L141 73 Q141 43 152 30 Q163 43 163 73 L163 96"/><path d="M143 64 H161 M146 52 H158"/>
  <path d="M49 96 L49 79 Q49 56 58 46 Q67 56 67 79 L67 96"/><path d="M51 70 H65"/>
  <path d="M173 96 L173 79 Q173 56 182 46 Q191 56 191 79 L191 96"/><path d="M175 70 H189"/>
  <path d="M24 88 H49 M67 88 H77 M99 88 H106 M134 88 H141 M163 88 H173 M191 88 H216"/><path d="M10 96 H230"/>
</svg>
```

**Lotus mark** (above the contact heading, 44px):
```html
<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round">
  <path d="M12 3 C15 7.5 15 12.5 12 17 C9 12.5 9 7.5 12 3 Z"/>
  <path d="M12 17 C8 16.5 5 13.5 3.5 9 C7.5 9.5 10.5 12.5 12 17 Z"/>
  <path d="M12 17 C16 16.5 19 13.5 20.5 9 C16.5 9.5 13.5 12.5 12 17 Z"/>
  <path d="M6 20.5 H18"/>
</svg>
```

**Arched portrait frame:** `aspect-ratio: 4/5; border-radius: 200px 200px 20px 20px; border: 1px solid var(--accent-line); background: var(--card)`. Echoes a temple doorway.

**Logo tile:** 44px gold square, radius 10px, one Khmer letter (ក or the owner's initial) in Koulen 26px, `color: var(--on-accent)`.

### Components

```css
.btn{min-height:52px;padding:0 26px;border-radius:var(--r-md);display:inline-flex;align-items:center;gap:10px;font:600 16px 'Kantumruy Pro',sans-serif}
.btn-primary{background:var(--accent);color:var(--on-accent)}
.btn-ghost{border:1px solid var(--line-hover);color:var(--text);font-weight:500}
.chip{padding:6px 14px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);font-size:14px}
.tag{padding:6px 12px;border-radius:var(--r-sm);border:1px solid var(--line-strong);background:var(--card);font:13px 'JetBrains Mono',monospace}
.card{border:1px solid var(--line);border-radius:var(--r-xl);background:var(--surface);overflow:hidden}
.status{display:inline-flex;align-items:center;gap:10px;padding:6px 14px;border:1px solid var(--line-strong);border-radius:var(--r-pill);background:#131820;font-size:14px}
.status::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--success)}
```

Bilingual button pattern: Khmer first, English after it at 70% opacity: `មើលគម្រោង <span lang="en" style="opacity:.7">View work</span>`. On phones, drop the English half.

Stats strip: a grid with `gap:1px; background:var(--line)` so the gaps draw hairlines; each tile `--surface`, number in Space Grotesk 700 36px accent, label in Khmer then muted English.

Code card: `--code` background, three 10px grey dots, file name in mono, strings colored accent, keywords `#C792EA`, `white-space: pre`. One per page at most.

### Page skeleton (portfolio or landing)
1. Nav: logo tile + name/handle · links (អំពីខ្ញុំ ជំនាញ គម្រោង បទពិសោធន៍ ទំនាក់ទំនង) · ខ្មែរ/EN toggle · primary CTA. `flex-wrap: wrap`.
2. Hero on lattice: status pill → Koulen h1 with one phrase in accent → English lead → location with map-pin → two buttons. Right: arched portrait + overlapping code card.
3. Stats strip.
4. Sections alternate `--ink` / `--surface`, separated by `1px solid var(--line-soft)`, each opening with number + Khmer h2 + English kicker.
5. Contact: centered lotus, huge Koulen line (តោះធ្វើការជាមួយគ្នា), email button, icon links (Telegram first, the main messaging app in Cambodia).
6. Footer: © year + name · a Khmer line.

Icons: inline stroke SVG (Lucide style, 2px stroke, `currentColor`). Never emoji.

---

## Part 2: Khmer script rules (do not skip)

These are the mistakes that make Khmer UIs look broken. Check every one.

1. **Line height.** Khmer stacks subscript consonants (ជើង) and vowels above and below. Body ≥ 1.7, headings ≥ 1.3. Never `line-height: 1` on Khmer. Never fixed `height` plus `overflow: hidden` on a Khmer text box; use `min-height` and padding.
2. **No letter-spacing, no uppercase, no italic on Khmer.** letter-spacing breaks the shaping of clusters; Khmer has no case; fake italics look broken. Scope these with `:lang(en)` or apply them only to English elements.
3. **Size Khmer up.** At the same px, Khmer reads smaller than Latin. Use +1–2px for Khmer body (min 15px; 16px preferred on mobile).
4. **Mark the language.** `<html lang="km">` for Khmer-first pages and `lang="en"` on English spans (or the reverse). Screen readers, hyphenation and font selection depend on it. Style with `:lang(km) { … }`.
5. **Line breaking.** Khmer has no spaces between words. Chrome and Safari break Khmer with a dictionary, but some browsers and many PDF/email renderers don't, giving long overflowing lines. For headings and narrow containers, insert zero-width spaces (U+200B) or `<wbr>` between words, and add `overflow-wrap: anywhere` as a last resort. Never split inside a cluster (consonant + ្ + subscript + vowel).
6. **Fonts must contain Khmer.** Space Grotesk, Inter and JetBrains Mono have no Khmer glyphs; Khmer inside them falls back randomly. Put a Khmer font in every stack that may show Khmer, e.g. `font-family: 'Space Grotesk', 'Kantumruy Pro', sans-serif`.
7. **Numerals.** Khmer digits ០១២៣៤៥៦៧៨៩ are lovely for section numbers and decoration. For prices, phone numbers, dates and anything people copy or compare, use Arabic digits (0–9). Never mix the two in one number.
8. **Money and local formats.** Cambodia uses USD and riel side by side: `$12.50` and `៛50,000` (the riel sign ៛ goes before the amount). Phone: `+855 12 345 678`. Dates in Khmer: `១៦ វិច្ឆិកា ២០២៦` (16 November 2026). Months: មករា កុម្ភៈ មីនា មេសា ឧសភា មិថុនា កក្កដា សីហា កញ្ញា តុលា វិច្ឆិកា ធ្នូ.
9. **Bilingual layout.** Don't put the same sentence twice at equal weight; it doubles reading time. One language leads (bigger, first), the other follows (smaller, muted) or sits behind a ខ្មែរ/EN toggle. Plan for Khmer strings being 10–30% taller and sometimes longer than English: no fixed-width buttons.
10. **Translation quality.** Never ship machine-literal Khmer. Use natural UI words: ចូល (log in), ចុះឈ្មោះ (sign up), ស្វែងរក (search), បន្ថែមទៅកន្ត្រក (add to cart), ទូទាត់ប្រាក់ (pay), ទំនាក់ទំនង (contact), មើលបន្ថែម (see more), ផ្ញើ (send), បោះបង់ (cancel), រក្សាទុក (save). When unsure, write the Khmer, then flag in your reply that a native speaker should check it.
11. **Local context.** Cambodian users are mostly on mobile data and mid-range Android phones: lazy-load images, subset fonts (`&text=` or `unicode-range`), keep JS small. Payments: KHQR (Bakong) and ABA Pay are expected at checkout. Contact: Telegram beats email; add a Telegram link or bot. Facebook pages are common business homes.

---

## Part 3: Adapting to another website

1. **Inspect first.** Read the existing HTML/CSS or framework (Tailwind, Bootstrap, plain CSS, React, Vue, WordPress theme). Reuse its structure; don't rewrite what works.
2. **Map tokens, don't hardcode.** Put Part 1's tokens into the site's own system: CSS variables, `tailwind.config` `theme.extend.colors` / `fontFamily`, SCSS variables, or a theme.json. Example Tailwind:
   ```js
   theme:{extend:{colors:{ink:'#0E1116',surface:'#11151B',card:'#161B22',line:'#232A33',text:'#F2EDE4',muted:'#A9A49A',gold:'#D4A537'},
   fontFamily:{khmer:['Koulen','Noto Sans Khmer','sans-serif'],body:['"Kantumruy Pro"','"Noto Sans Khmer"','sans-serif'],head:['"Space Grotesk"','"Kantumruy Pro"','sans-serif'],mono:['"JetBrains Mono"','monospace']}}}
   ```
3. **Pick the right page type.** The portfolio skeleton is one template. For other sites keep the system and change the structure:
   - Business/landing: hero → value points (3) → services → proof (real testimonials only) → pricing → FAQ → contact.
   - Shop: search-first header, product grid (2 cols mobile, 4 desktop), sticky add-to-cart on mobile, prices in $ and ៛, KHQR at checkout.
   - Dashboard/admin: lattice off, gold only for the primary action and active nav, data in mono, tables in an `overflow-x:auto` box.
   - Restaurant/hotel: photos lead, menu in Khmer + English columns, map + Telegram booking.
   - School/NGO/government: light variant, high contrast, larger text (17–18px), plain language.
4. **Keep it restrained.** One accent. Lattice only in the hero and placeholders. One Angkor silhouette per page. Gold on ≤10% of the screen.

---

## Part 4: How to solve UI problems (think before styling)

Work in this order. Each step answers a question; don't jump to colors before steps 1–3.

1. **Goal.** Who is the user, what is the ONE action this page must get (hire, buy, sign up, call)? Write it down. Every element either serves it or goes.
2. **Content first.** List the real content: headings, copy, data, images. Never fill with lorem ipsum or invented stats/testimonials; use clear `[placeholders]` and tell the user what to supply.
3. **Hierarchy.** Decide what is read 1st, 2nd, 3rd. Express it with size, then weight, then color, then position. If everything is bold, nothing is.
4. **Layout.** Mobile first (360–390px), then widen. Flex/grid with `gap`, `max-width` containers, `flex-wrap`, `minmax()` grids. No horizontal scroll except inside tables.
5. **States.** Design every interactive state: default, hover, focus-visible (2px accent outline, offset 2px), active, disabled, loading, empty, error, success. Forms: label above input, inline error in Khmer, don't clear input on error.
6. **Accessibility.** Real `<button>`, `<a href>`, `<label for>`. Touch targets ≥ 44px. Text contrast ≥ 4.5:1 (3:1 for ≥ 24px). `aria-label` on icon-only buttons; decorative SVG `aria-hidden="true"`. Respect `prefers-reduced-motion`. Logical heading order (one h1).
7. **Performance.** `font-display: swap`, preconnect, width/height on images, `loading="lazy"` below the fold, no heavy animation libraries for simple fades.
8. **Self-review** before you hand over:
   - [ ] Khmer never clipped; line-height ≥ 1.7 body
   - [ ] No letter-spacing/uppercase on Khmer; every font stack contains a Khmer font
   - [ ] Looks right at 360px, 768px, 1280px+
   - [ ] One clear primary action per screen
   - [ ] Contrast passes; focus visible; targets ≥ 44px
   - [ ] No invented facts; placeholders listed for the user
   - [ ] Gold used sparingly; nothing that screams "AI template" (purple gradients, glassmorphism everywhere, emoji icons, left-border accent cards)

### Common problems → fixes

| Symptom | Cause | Fix |
|---|---|---|
| Khmer vowels cut at top/bottom | line-height too small or fixed height + overflow hidden | line-height 1.7+, use padding/min-height |
| Khmer shows as boxes or odd font | font has no Khmer glyphs | add Kantumruy Pro / Noto Sans Khmer to the stack |
| Khmer letters look broken apart | letter-spacing or `text-transform` | remove for `:lang(km)` |
| Long Khmer line overflows on mobile | no word breaks | ZWSP/`<wbr>` between words, `overflow-wrap:anywhere` |
| Button text wraps awkwardly | fixed width | `padding` + `min-height`, `white-space: nowrap` only for short labels |
| Page feels flat | no hierarchy | bigger h1, muted secondary text, more section spacing (96px) |
| Page feels busy | too many accents/ornaments | one accent, remove borders, increase whitespace |
| Gold text unreadable on light bg | contrast | use #7A5A0E for text, keep #D4A537 for fills |
| Slow on 4G | huge images, all font weights | WebP/AVIF, `srcset`, load only weights used |
| Mixed-language sentence looks uneven | different x-heights | same family (Kantumruy Pro) for both, or bump Khmer +1px |

---

## Output expectations
- Deliver working code in the site's stack, with tokens centralized.
- Write all Khmer UI text natively; mention which strings a native speaker should proofread.
- In your reply, state the assumptions you made (audience, primary action, light/dark) in one or two lines, and list placeholders the user must fill.