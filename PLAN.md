# HashHead v4 - Implementation Plan

## Overview
Modern self-branded hub site for TreeCityWes / HashHead. Built with Next.js 15 + Tailwind CSS v4. Evolved dark terminal aesthetic pushed into 2026 with glassmorphism, smooth animations via Framer Motion, and a focus on X1 blockchain ecosystem.

## Tech Stack
- **Next.js 15** (App Router, static export)
- **Tailwind CSS v4** (latest)
- **Framer Motion** (smooth scroll-triggered animations, page transitions)
- **TypeScript 5**
- **No UI library** - custom components (keeping it lean like v3)

## Design Direction
Keep the dark terminal/hacker DNA but modernize:
- **Glassmorphism cards** - frosted glass with backdrop-blur over animated backgrounds
- **Gradient mesh backgrounds** - animated color mesh replacing flat black
- **Smooth scroll animations** - sections fade/slide in on scroll via Framer Motion
- **Refined typography** - Inter for body, JetBrains Mono for terminal/code elements
- **Color palette evolution**: Keep neon blue primary, add accent gradients (blue -> purple -> cyan)
- **Subtle noise texture overlay** for depth
- **Animated gradient borders** on cards (conic-gradient spin)
- **No more CRT scan lines or matrix rain** - cleaner, more modern

## Site Sections (Top to Bottom)

### 1. Header / Nav
- "HashHead" logo/wordmark (left)
- Nav links: X1 Ninja | X1 World | X1 Node | GitHub | X/Twitter | Discord
- Mobile hamburger menu
- Sticky with glassmorphism blur on scroll

### 2. Hero Section
- Large headline: **"HashHead"** with animated gradient text
- Subtitle: "Building the X1 Ecosystem" with typewriter effect
- Brief tagline about who TreeCityWes is
- CTA buttons: "Explore X1 Ninja" + "Join Discord"
- Animated particle/grid background (evolved from v3)

### 3. X1 Ecosystem Showcase (Primary Section)
Large featured cards for the main projects:
- **X1 Ninja** (x1.ninja) - Validator tools, staking dashboard
- **X1 World** (x1.world) - X1 blockchain explorer/community
- **X1 Node** (x1node.com) - Node setup guides and tools
- **XDex** (xdex.xyz) - Live DEX on X1
- **X1 Docs** (docs.x1.xyz) - Official documentation

Each card: glassmorphism style, icon/illustration, title, short description, "Visit" link, animated border glow on hover.

### 4. About / Who Is HashHead
- Brief bio section about TreeCityWes
- Social proof: GitHub stats, community size
- Links to X/Twitter, GitHub, Discord, YouTube

### 5. GitHub Projects
- Fetch top repos from GitHub API (same as v3 but refreshed design)
- Card grid with glassmorphism cards
- Show: repo name, description, stars, language, topics

### 6. XenBlocks Search (De-emphasized)
- Smaller section, below the fold
- Keep the terminal-style search input
- "Legacy Tools" or "XenBlocks Explorer" heading
- Links to XEN ecosystem tools (collapsed/minimal)

### 7. Community / Links
- Curated links organized by category:
  - **X1 Ecosystem** (primary, prominent)
  - **Community** (Discord, Telegram, YouTube)
  - **Legacy/XEN** (de-emphasized, collapsible)

### 8. Footer
- Social links: X/Twitter, GitHub, Discord, YouTube, Telegram
- "Built by TreeCityWes"
- Copyright 2026

## File Structure
```
hashhead_io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Main page composing all sections
│   │   └── globals.css         # Global styles, Tailwind imports
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav with glassmorphism
│   │   ├── Hero.tsx            # Hero section with animated text
│   │   ├── X1Showcase.tsx      # X1 ecosystem project cards
│   │   ├── About.tsx           # About TreeCityWes section
│   │   ├── GitHubProjects.tsx  # GitHub repo cards
│   │   ├── XenSearch.tsx       # XenBlocks search (de-emphasized)
│   │   ├── Links.tsx           # Curated links section
│   │   ├── Footer.tsx          # Footer with socials
│   │   ├── AnimatedBackground.tsx  # Particle/grid canvas
│   │   └── GlassCard.tsx       # Reusable glassmorphism card
│   └── lib/
│       └── constants.ts        # URLs, social links, project data
├── public/
│   └── (any static assets)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.ts
```

## Implementation Steps

1. **Project setup** - Initialize Next.js 15 + Tailwind v4 + Framer Motion + TypeScript
2. **Global styles & theme** - Set up color palette, fonts, glass card styles, noise texture
3. **Constants file** - All URLs, project data, social links in one place
4. **AnimatedBackground** - Canvas particle system (evolved from v3)
5. **GlassCard** - Reusable glassmorphism card component
6. **Header** - Sticky nav with mobile menu
7. **Hero** - Animated headline, typewriter subtitle, CTAs
8. **X1Showcase** - Featured project cards for X1 ecosystem
9. **About** - TreeCityWes bio section
10. **GitHubProjects** - Fetch and display repos
11. **XenSearch** - Terminal search (de-emphasized)
12. **Links** - Curated links with categories
13. **Footer** - Social links, copyright
14. **Page assembly** - Compose all sections with scroll animations
15. **Polish** - Responsive testing, performance, final touches
