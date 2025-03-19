# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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