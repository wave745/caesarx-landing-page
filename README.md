# Caesar X Beta Landing Page

A professional, minimalist landing page for Caesar X with an interactive DotGrid background effect.

## Features

- **Interactive DotGrid Background** - Animated dot grid that responds to mouse movement
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Glassmorphic UI** - Modern glassmorphic button effects with gold color scheme
- **Social Icons** - X (Twitter) and Discord icons in bottom right
- **Single Page Layout** - No scrolling required, everything fits on one screen

## Installation

1. **Copy the files to your project** maintaining the directory structure:
   ```
   src/pages/BetaLandingPage.tsx → your-project/src/pages/
   src/components/DotGrid.jsx → your-project/src/components/
   src/components/DotGrid.css → your-project/src/components/
   public/icons/social/* → your-project/public/icons/social/
   ```

2. **Install required dependencies** (if not already installed):
   ```bash
   npm install gsap
   # or
   yarn add gsap
   ```

3. **Add the route to your `App.tsx` or router file:**
   ```tsx
   import BetaLandingPage from '@/pages/BetaLandingPage'
   
   // In your Routes:
   <Route path="/betalanding" element={<BetaLandingPage />} />
   ```

## Route

The landing page is accessible at: `/betalanding`

## Dependencies

- React
- React Router DOM
- GSAP (for DotGrid animations)
- @solana/wallet-adapter-react (for wallet integration)
- Tailwind CSS

## Customization

### Colors
The landing page uses the Caesar X gold color scheme (`#E7CC7C`). To change colors, update the inline styles in `BetaLandingPage.tsx`.

### Social Links
Update the social media links in the bottom right section:
```tsx
href="https://x.com/caesarx"  // Change to your X/Twitter URL
href="https://discord.gg/caesarx"  // Change to your Discord URL
```

## File Structure

```
caesarx-landing-page/
├── src/
│   ├── pages/
│   │   └── BetaLandingPage.tsx    # Main landing page component
│   └── components/
│       ├── DotGrid.jsx             # Interactive dot grid component
│       └── DotGrid.css             # DotGrid styles
└── public/
    └── icons/
        └── social/
            ├── discord-icon.svg    # Discord icon
            └── x-logo.svg          # X/Twitter icon
```

## Notes

- The DotGrid uses GSAP's InertiaPlugin for smooth animations
- All components are optimized for performance on mobile devices
- The page is designed to fit on a single screen without scrolling
