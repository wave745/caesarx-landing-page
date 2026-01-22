# Caesar X Beta Landing Page

This package contains the complete beta landing page for Caesar X, including all necessary components and assets.

## Files Included

### Components
- `src/pages/BetaLandingPage.tsx` - Main landing page component
- `src/components/DotGrid.jsx` - Interactive dot grid background component
- `src/components/DotGrid.css` - Styles for DotGrid component
- `src/components/GridDistortion.jsx` - Grid distortion effect component (optional/reference)
- `src/components/GridDistortion.css` - Styles for GridDistortion component

### Assets
- `public/icons/social/discord-icon.svg` - Discord social icon
- `public/icons/social/x-logo.svg` - X/Twitter social icon

## Installation

1. Copy the files to your project maintaining the directory structure:
   ```
   src/pages/BetaLandingPage.tsx → your-project/src/pages/
   src/components/DotGrid.jsx → your-project/src/components/
   src/components/DotGrid.css → your-project/src/components/
   public/icons/social/* → your-project/public/icons/social/
   ```

2. Install required dependencies (if not already installed):
   ```bash
   npm install gsap
   # or
   yarn add gsap
   ```

3. Add the route to your `App.tsx` or router file:
   ```tsx
   import BetaLandingPage from '@/pages/BetaLandingPage'
   
   // In your Routes:
   <Route path="/betalanding" element={<BetaLandingPage />} />
   ```

## Features

- **Interactive DotGrid Background** - Animated dot grid that responds to mouse movement
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Glassmorphic UI** - Modern glassmorphic button effects
- **Social Icons** - X (Twitter) and Discord icons in bottom right
- **Mobile Optimized** - Responsive text sizes, spacing, and touch targets

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

## Notes

- The `GridDistortion` component is included but not currently used in the landing page
- The DotGrid uses GSAP's InertiaPlugin for smooth animations
- All components are optimized for performance on mobile devices
