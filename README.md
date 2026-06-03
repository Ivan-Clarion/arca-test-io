# Tester.io — Marketing Website

A polished, dark‑mode marketing site for **Tester.io**, a (fictional) **document‑intelligence** product. Tester.io connects to a company's folders, reads every document end to end, and surfaces the **risks, deadlines, and decisions** buried inside — before they become problems.

Built with **Next.js (App Router, JavaScript)** and **Tailwind CSS v4**, with a component‑based architecture and a premium dark‑and‑gold aesthetic.

---

## What the product is

Every company runs on documents — spreadsheets, memos, policies, reports — scattered across departments. The important details get lost because no one has time to read everything. Tester.io reads what your team can't and surfaces only what needs attention, across five departments: **Finance, HR, IT, Projects, Sales**.

The **Insights** section showcases real findings from a sample "Acme" folder scan, e.g.:

- 🔴 Security license expired → 100 endpoints unprotected
- 🟡 A Data Analyst role open 92 days
- 🔴 A board approval with no decision recorded (₱3.5M project in limbo)
- 🟡 AWS bill up 178% in a single month
- 🟢 FY2024 revenue beat target by 4.3%

---

## Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router)      |
| Language       | JavaScript (no TypeScript)                         |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)         |
| Icons          | [lucide-react](https://lucide.dev)                 |
| Fonts          | Montserrat via `next/font`                         |
| Images         | `next/image` (Unsplash for the Insights photos)    |
| Package manager| [pnpm](https://pnpm.io)                            |

---

## Getting started

```bash
# install dependencies
pnpm install

# run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# other scripts
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # run ESLint
```

---

## Design system

Derived from the Tester.io brand guidelines:

- **Colors** — gold gradient `#C6A559 → #E6B979` over deep, warm‑tinted dark surfaces. Tokens live in [`src/app/globals.css`](src/app/globals.css) (`--gold-start`, `--surface`, etc.).
- **Typography** — Montserrat (bold headings, medium body).
- **Surfaces** — a layered system (base → elevated → floating) with subtle gold‑tinted glows and shadows.
- **Motion** — an animated hero background (drifting gold blobs + masked grid) and scroll‑reveal animations, all `transform`/`opacity` only, with `prefers-reduced-motion` support and smooth anchor scrolling.

---

## Pages

**Homepage** (`/`) — a single scrolling page composed of sections:
Hero → Features → How it works → Insights → Pricing → FAQ → CTA.

**Sub‑pages** (linked from the footer):

| Route             | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `/about`          | Mission, story, values, stats                    |
| `/careers`        | Perks and open roles                             |
| `/contact`        | Contact channels + a contact form                |
| `/security`       | Security practices (encryption, SSO, audit logs) |
| `/documentation`  | Documentation categories                         |
| `/guides`         | How‑to guides                                    |
| `/support`        | Support options and popular topics               |
| `/status`         | System status and uptime                         |
| `/privacy`        | Privacy policy                                   |
| `/terms`          | Terms of service                                 |

---

## Project structure

```
src/
├─ app/
│  ├─ layout.js            # root layout: fonts, Navbar + Footer for every page
│  ├─ page.js              # homepage (composes the sections)
│  ├─ globals.css          # brand tokens + animations
│  └─ <route>/page.js      # the 10 sub-pages (about, careers, …)
├─ components/
│  ├─ ui/                  # reusable primitives
│  │  ├─ Button.jsx        # gradient / outline button (Link-aware)
│  │  ├─ BentoCard.jsx     # bento tile chrome
│  │  ├─ InfoCard.jsx      # icon + title + body content tile
│  │  ├─ Logo.jsx, SectionHeading.jsx, PageHeader.jsx
│  │  └─ Reveal.jsx        # IntersectionObserver scroll-reveal ("use client")
│  ├─ layout/
│  │  ├─ Navbar.jsx        # sticky nav
│  │  └─ Footer.jsx        # data-driven footer links
│  └─ sections/            # homepage + page sections
│     ├─ Hero.jsx, HeroBackground.jsx
│     ├─ Features.jsx, FeatureCard.jsx, FeatureVisuals.jsx
│     ├─ HowItWorks.jsx
│     ├─ InsightsShowcase.jsx, InsightCard.jsx
│     ├─ Pricing.jsx, PricingCard.jsx
│     ├─ FAQ.jsx, FAQItem.jsx        # accordion ("use client")
│     ├─ ContactForm.jsx             # contact form ("use client")
│     ├─ LegalPage.jsx               # shared privacy/terms layout
│     └─ CTA.jsx
├─ data/
│  └─ content.js           # all copy & data (nav, hero, features, pricing, faq, footer…)
└─ brand_assets/           # logo, brand guidelines, sample reference material
```

**Architecture notes:**

- **Content is data‑driven.** Copy and structured data live in [`src/data/content.js`](src/data/content.js); components stay presentational and render from it.
- **Navbar + Footer live in the root layout**, so every page gets them automatically.
- **Reusable primitives** (`Button`, `BentoCard`, `InfoCard`, `PageHeader`, `Reveal`, `SectionHeading`) keep the pages consistent and DRY.

---

## Notes

- The Insights section loads remote photos from `images.unsplash.com` (allow‑listed in [`next.config.mjs`](next.config.mjs)).
- The contact form and "Apply"/CTA buttons are front‑end only — there is no backend wired up.
- This is a demo/marketing site; "Tester.io" and the "Acme" sample data are fictional.
