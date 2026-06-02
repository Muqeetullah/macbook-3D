# MacBook 3D Landing Page

Short description: A sleek 3D MacBook Pro landing page with interactive model controls, scroll animations, and responsive product storytelling.

An Apple-inspired MacBook Pro product page built with React, Vite, Three.js, GSAP, and Tailwind CSS. The site combines video-led hero content, scroll-triggered animation, and an interactive 3D product viewer for switching MacBook size and color options.

![MacBook 3D Landing Page](public/readme/hero.webp)

## Features

- Interactive 3D MacBook viewer powered by React Three Fiber and Drei
- 14-inch and 16-inch model scale switching with shared GLB assets
- Space gray and dark color controls using Zustand state
- GSAP and ScrollTrigger animations for pinned sections, timelines, and reveals
- Deferred below-the-fold sections with lazy-loaded React components
- Optimized Vite build chunks for app, GSAP, and Three.js dependencies
- Responsive layout with custom fonts, videos, product imagery, and feature highlights

## Tech Stack

- [React](https://react.dev/) for the UI
- [Vite](https://vite.dev/) for development and builds
- [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), and [Drei](https://drei.docs.pmnd.rs/) for the 3D scene
- [GSAP](https://gsap.com/) for animation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://zustand-demo.pmnd.rs/) for lightweight global state

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL printed by Vite, usually [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```text
src/
  components/          React sections and UI components
  components/models/   Generated model components
  components/three/    Three.js scene helpers
  constants/           Shared navigation, features, and asset data
  hooks/               Reusable React hooks
  lib/                 Third-party library setup
  store/               Zustand store
public/
  fonts/               Custom font files
  models/              GLB model assets
  videos/              Hero and feature videos
```

## Notes

Large media and 3D assets are served from `public/`. If you replace the MacBook model or videos, keep the paths in `src/constants` and the model components in sync.
