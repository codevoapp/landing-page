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

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start development server             |
| `npm run build`      | Production static export (`out/`)    |
| `npm run build:pages`| Static export with GitHub Pages path |
| `npm run start`      | Run production server (non-Pages)    |
| `npm run lint`       | Run ESLint                           |

## Deploy to GitHub Pages

This repo deploys automatically to GitHub Pages on every push to `main`.

**Site URL:** [https://codevoapp.github.io/landing-page/](https://codevoapp.github.io/landing-page/)

### One-time GitHub setup

1. Open the repo on GitHub → **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually)

The workflow builds a static export with `basePath` `/landing-page` and publishes the `out/` folder.

### Local Pages build

```bash
npm run build:pages
```

Output is written to `out/` (already gitignored).

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
- Scroll open animation on light sections

## Project structure

```
src/
  app/                 # App Router (layout, page, globals)
  components/
    sections/          # Landing sections
    Navbar.tsx
    Footer.tsx
    ui.tsx
  lib/
    content.ts         # Copy & data
    contact-schema.ts  # Zod schema for contact form
.github/workflows/
  deploy.yml           # GitHub Pages deploy
```

## Contact form

Client-side validation with Zod. On success it shows a local confirmation only — **no API or database yet**.

## Notes

- Copy and section data live in `src/lib/content.ts`
- Admin panel is not included
- Local `next dev` has no `basePath`; Pages builds set `GITHUB_PAGES=true`
