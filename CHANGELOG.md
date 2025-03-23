# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### [f2074d7] - 2025-03-20 - Documentation Navigation System
#### Added
- New documentation layout system with responsive sidebar
  - Added `app/docs/layout.tsx` with flexible layout structure
  - Implemented `DocsMenu` component for navigation
  - Added `SubLink` component for nested navigation items
- New UI Components:
  - Added `ScrollArea` component for better navigation experience
  - Added `Collapsible` component for expandable menu items
  - Added `Dialog` component with accessibility features
#### Changed
- Enhanced `Leftbar` component:
  - Improved mobile responsiveness
  - Added documentation menu integration
  - Added scroll area for better navigation
- Updated video source in landing page to use local file
#### Dependencies
- Added @radix-ui/react-collapsible: ^1.1.3
- Added @radix-ui/react-scroll-area: ^1.2.3


### [86749cf] - 2025-03-20 - Accessibility Improvement
#### Added
- Added `SheetTitle` component with `sr-only` class to `SheetContent` for screen reader accessibility.


### [704a174] - 2025-03-20 - Landing Page Cleanup
#### Changed
- Improved landing page layout and readability
  - Cleaned up text formatting and spacing
  - Enhanced video background implementation
  - Optimized footer positioning to stick to bottom


### [0fffb1e] - 2025-03-19 - Header and Footer for Landing Page
#### Added
- New UI components:
  - Navbar with logo, navigation links, and theme toggle
  - Footer component for landing page
  - Anchor component for navigation
  - Theme toggle functionality
  - UI components: button, dropdown-menu, sheet
- Added background video to public assets
#### Changed
- Updated app layout and page structure
- Modified tailwind configuration


### [cfb5c77] - 2025-03-19 - Landing Page Updated
#### Added
- Enhanced landing page styles and layout
- New Radix UI package dependencies:
  - @radix-ui/react-dialog: ^1.1.6
  - @radix-ui/react-dropdown-menu: ^2.1.6
  - @radix-ui/react-slot: ^1.1.2
#### Changed
- Refactored app/page.tsx with improved layout and content structure
- Modified layout.tsx to adjust container sizing (width changed to 70-90vw responsive)
- Updated globals.css with improved font configuration


### [f3850de] - 2025-03-19 - Enabling Dark Themes
#### Added
- Theme provider implementation with next-themes
- Dark mode support with class-based theme switching
- Tailwind typography and animation plugins
#### Changed
- Updated layout.tsx to include ThemeProvider
- Modified tailwind configuration for dark mode
- Updated project title to "Aria Docs Clone"
#### Fixed
- Theme provider type definitions using React.ComponentProps


### [ebbc8d2] - 2025-03-19 - Cloudflare Deploy
#### Added
- Cloudflare Pages deployment configuration
  - Added wrangler.jsonc with Cloudflare Pages settings
  - Added deployment scripts to package.json:
    - `pages:build`
    - `preview`
    - `deploy`
- Node.js version specification (v22) in .nvmrc
#### Changed
- Updated next.config.ts for Cloudflare compatibility
  - Enabled static export
  - Configured unoptimized images


### [f56db15] - 2025-03-19 - First Commit
#### Added
- Comprehensive theme configuration in globals.css
  - Dark mode variables using OKLCH color space
  - Custom theme variables for sidebar, charts, and UI components
- shadcn/ui configuration
  - Added components.json with project settings
  - Added utility functions in lib/utils.ts
#### Changed
- Added essential UI dependencies
  - class-variance-authority: ^0.7.1
  - clsx: ^2.1.1
  - lucide-react: ^0.483.0
  - tailwind-merge: ^3.0.2
  - tw-animate-css: ^1.2.4


### [f3afd3d] - 2025-03-19 - Initial Commit
#### Added
- Initial project setup using Create Next App
- Core dependencies
  - Next.js 15.2.3
  - React 19.0.0
  - TypeScript configuration
  - ESLint setup