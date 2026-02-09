# Envoy Workplace Management Platform — Next.js Clone

A high-performance Next.js recreation of Envoy's workplace management platform page, optimized for deployment on Vercel or Netlify.

## Tech Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **next/image** for automatic image optimization
- Static generation (SSG) for maximum performance

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Performance Benefits Over Webflow

- **Static HTML generation** — pages are pre-rendered at build time
- **Automatic image optimization** — WebP/AVIF with lazy loading via `next/image`
- **Code splitting** — only the JS needed per page is loaded
- **Edge CDN** — both Vercel and Netlify serve from edge locations worldwide
- **No Webflow runtime** — eliminates the ~200KB+ Webflow JS bundle
- **Smaller CSS** — Tailwind tree-shakes unused styles

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page (assembles all sections)
└── components/
    ├── Navbar.tsx        # Sticky nav with mobile menu
    ├── Hero.tsx          # Hero section with CTA
    ├── LogoTicker.tsx    # Animated logo carousel
    ├── Testimonial.tsx   # Quote card
    ├── PlatformOverview.tsx  # Feature overview with cards
    ├── CoreCapabilities.tsx  # Product module cards
    ├── Integrations.tsx  # Integration partner logos
    ├── CTA.tsx           # Call-to-action banner
    ├── FAQ.tsx           # Accordion FAQ
    └── Footer.tsx        # Site footer
```
