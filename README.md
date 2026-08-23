# Codevo

Marketing landing page for **Codevo** — a product studio site built with Next.js, React, and Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- Tailwind CSS 4
- Zod (contact form validation)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Run production server    |
| `npm run lint`  | Run ESLint               |

## What’s included

One-page landing with:

- Hero (3D tilt mockup on hover)
- Intro, Process, Work, Services, Pricing
- Testimonials, FAQ, Contact
- Sticky navbar (full → pill on scroll)
- Multi-column footer with wordmark

Visual system:

- Alternating dark / light section bands
- Curved dark→light transitions with soft shadow
- Neon glow accents on dark sections
- Light sections open on scroll (`OpenOnScroll`)

## Project structure

```
src/
  app/                 # App Router (layout, page, globals)
  components/
    sections/          # Landing sections
    Header.tsx
    Footer.tsx
    Reveal.tsx
    OpenOnScroll.tsx
    ui.tsx
  lib/
    content.ts         # Copy & data
    contact-schema.ts  # Zod schema for contact form
```

## Contact form

Client-side validation with Zod. On success it shows a local confirmation only — **no API or database yet**.

## Notes

- Copy and section data live in `src/lib/content.ts`
- Admin panel is not included
