# Caesar X Landing Page

A minimal, high-density industrial landing page designed for Caesar X. It features an interactive ambient dot grid, native Solana wallet connectivity, and smooth glassmorphic UI cards seamlessly integrated into a fast React + Vite pipeline.

## Features

- **Standalone React Application** - Fully configured using Vite and Tailwind CSS.
- **Solana Wallet Integration** - Auto-connects and integrates seamlessly with Phantom and standard solana-wallets natively.
- **Interactive Background** - Active GSAP-powered ambient dot grid reacting smoothly to mouse paths.
- **Minimalist Aesthetic** - Complete removal of overwhelming glows and bright elements in favor of sharp, gold-on-[zinc-900] styling.
- **Inline SVGs** - Clean scalable inline vector icons customized natively via Tailwind CSS utility hover-classes.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## File Structure

```
caesarx-landing-page/
├── public/
│   ├── CAESARX LOGO MAIN.svg    # Central landing card logo
│   └── caesarXlogo3d2.gif       # Top-left identity mark
├── src/
│   ├── components/
│   │   ├── DotGrid.jsx          # Ambient interactive background 
│   │   ├── DotGrid.css          # Background component styles
│   │   └── ui/
│   │       └── button.tsx       # Core unified Shadcn button logic
│   ├── lib/
│   │   └── utils.ts             # Application context utilities (Tailwind merge)
│   ├── pages/
│   │   └── BetaLandingPage.tsx  # Primary landing interface component
│   ├── App.tsx                  # Base Router mapping
│   ├── index.css                # Global definitions and Tailwind tokens
│   └── main.tsx                 # Base entry and Solana Context Providers
```

## Notes
- Built heavily around `npm` (Node), React, GSAP, TailwindCSS, and `@solana/wallet-adapter`.
- The central card automatically detects standard browser wallet extensions to route the Launch App condition logic natively.
