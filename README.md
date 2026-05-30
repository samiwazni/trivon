# TRIVON — Landing Page

A single-page landing site for **TRIVON** — an autonomous-infrastructure brand
building "the layer the modern city runs on," starting with last-mile delivery
across the smart communities of Egypt & the wider MENA region. A Tekniikkatie venture.

Built with **Next.js (App Router) + TypeScript**. Editorial, typography-led, with a
real **light/dark mode** (default light, remembered, no flash on reload) and a
travelling-unit animation. Hand-written CSS, no framework.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build / deploy

```bash
npm run build && npm run start
```

Deploys to Vercel with zero config (`npx vercel`).

## Project structure

```
app/
  layout.tsx       fonts, metadata, no-flash theme script
  page.tsx         composes the page from components
  globals.css      ALL styles, organised by section — the classes you call
components/
  Nav.tsx          nav bar + logo + theme toggle
  ThemeToggle.tsx  light/dark button (isolated, reusable)
  Hero.tsx         hero section
  Chapter.tsx      reusable numbered section (props-driven)
  RouteBot.tsx     reusable animated route + travelling unit (props-driven)
  Footer.tsx       footer
  SiteEffects.tsx  scroll reveals + reduced-motion handling
public/
  (put your logo files here — see below)
```

## Adding a new section

Drop another `<Chapter>` into `app/page.tsx`:

```tsx
<Chapter id="trust" num="03" label="The Trust" heading="Your headline here.">
  <p className="chap-p reveal d2">Body copy…</p>
</Chapter>
```

To give it a travelling unit beside the label, pass a `route` prop:

```tsx
route={{
  path: "M12,98 C52,98 52,28 92,28 C132,28 132,86 160,70",
  start: [12, 98],
  end: [160, 70],
  viewBox: "0 0 172 120",
  dur: "5.5s",
}}
```

## Styling

All styles are class-based and live in `app/globals.css`, grouped by section
(tokens / theme, nav, hero, route, chapter, footer, reveal). Nothing is inline —
apply the existing classes, or add new rules in the same file.

- **Theme palette:** the CSS variables under `:root` and `[data-theme="dark"]`.
- **Accent colour:** `--accent`.
- **Logo size:** `.logo { height: 26px }`.

## Logo

Put your two logo files in **`public/`** with these exact names:

| File | Used for |
| --- | --- |
| `trivon_marke.png` | the **dark** logo — shown on the **light** theme |
| `trivon_marke-white.png` | the **white** logo — shown on the **dark** theme |

The nav swaps between them with the theme. If a file is missing it falls back to
the text wordmark.

## Light / dark mode

Default is **light**. The toggle flips `data-theme` on `<html>`; the whole palette
is CSS-variable driven. The choice is saved to `localStorage` and applied before
first paint via a small inline script in `app/layout.tsx`, so there's no flash.

## Content

Copy lives in `app/page.tsx` — the hero lead, **01 — The Horizon**, and
**02 — The Work**.
