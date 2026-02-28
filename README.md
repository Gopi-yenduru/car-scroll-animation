# ITZFIZZ — Scroll-Driven Hero Section Animation

A production-grade, scroll-driven hero section built with **Next.js**, **GSAP**, and **Tailwind CSS**, inspired by the [reference demo](https://paraschaturvedi.github.io/car-scroll-animation).

---

## ✨ Features

- **Smooth intro animation** — staggered headline reveal, car entrance, and stat counters animate in on page load using GSAP timelines
- **Scroll-driven animation** — car drifts right and rotates as you scroll; headline and stats fade out — all tied to scroll progress via `ScrollTrigger` scrub
- **Performance-first** — all animations use CSS `transform` (translate, scale, rotate), avoiding layout reflows
- **Below-fold reveals** — feature cards and section titles animate in as they enter the viewport
- **Responsive** — fluid clamp-based typography and layout adapts to all screen sizes
- **Custom SVG car** — a detailed top-view McLaren-inspired car drawn in SVG

---

## 🗂️ Project Structure

```
car-scroll-animation/
├── components/
│   └── HeroSection.jsx      # Main hero + below-fold component
├── pages/
│   ├── _app.js              # Global app wrapper
│   └── index.js             # Entry page
├── public/
│   └── car.svg              # Top-view car illustration
├── styles/
│   └── globals.css          # Tailwind base + all custom styles
├── next.config.js           # Next.js config (static export enabled)
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Push to GitHub

1. Create a new GitHub repository (e.g. `car-scroll-animation`)
2. Push this project:
```bash
git init
git add .
git commit -m "feat: initial commit — scroll-driven hero section"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/car-scroll-animation.git
git push -u origin main
```

### Step 2 — Add GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_ENV: production

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **gh-pages** branch → **/ (root)** → Save
4. Your live URL will be: `https://<YOUR_USERNAME>.github.io/car-scroll-animation`

---

## ⚡ Alternative: Deploy to Vercel (Easier, Zero Config)

```bash
npm install -g vercel
vercel --prod
```

Your live URL is instantly ready. Recommended for fastest deployment.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework, static export |
| GSAP 3 + ScrollTrigger | Animations (intro + scroll-driven) |
| Tailwind CSS 3 | Utility-first styling |
| Google Fonts (Bebas Neue + Barlow) | Typography |
| SVG | Custom car illustration |

---

## 📋 Functional Requirements Checklist

- [x] Hero section occupies first screen (100vh)
- [x] Letter-spaced headline: `W E L C O M E  I T Z F I Z Z`
- [x] Impact metrics / statistics with descriptions
- [x] Page-load staggered animations (headline letters + stats)
- [x] Scroll-based animation tied to scroll progress (not autoplay)
- [x] Car moves smoothly with interpolated easing (GSAP scrub)
- [x] Animations use `transform` only — no layout reflows
- [x] GSAP (ScrollTrigger plugin)
- [x] Next.js / React
- [x] Tailwind CSS
- [x] Clean, readable, well-structured code

---

## 👨‍💻 Author

Built for internship assignment evaluation.
