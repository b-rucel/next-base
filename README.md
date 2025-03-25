This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is optimized for [Cloudflare Pages](https://pages.cloudflare.com/), leveraging server-side rendering capabilities through Pages Functions and @cloudflare/next-on-pages integration.

### Key Features

- **Server-Side Rendering (SSR)**
  - Full support for Next.js SSR features
  - Edge Runtime execution for optimal performance
  - Seamless API Routes integration

- **Development Workflow**
  - Local development with Wrangler
  - Hot module replacement
  - Instant preview deployments

- **Platform Benefits**
  - Global edge network distribution
  - Automatic HTTPS/SSL
  - Zero-configuration setup
  - CI/CD integration
  - Real-time logs and analytics

### Dashboard Setup and Automated CI/CD

The easiest way to deploy your Next.js application is through the Cloudflare Pages dashboard:

1. Log in to your Cloudflare account and navigate to Pages
2. Click "Create a project" and select "Connect to Git"
3. Choose your Git provider (GitHub, GitLab) and select your repository
4. Configure your build settings:
   - Build command: `npm run pages:build`
   - Build output directory: `.vercel/output/static`
5. Click "Save and Deploy"

Once connected, Cloudflare Pages automatically:
- Builds and deploys your main branch to production
- Creates preview deployments for all branches and pull requests
- Provides unique URLs for each deployment
- Enables instant rollbacks and deployment history

### Manual Deployment Process

For local development and manual deployments, use the following npm scripts:

```bash
# Build the project for Cloudflare Pages
npm run pages:build

# Preview the build locally
npm run preview

# Deploy to Cloudflare Pages
npm run deploy
```

> **Note**: Make sure to install the Wrangler CLI tool for local development and deployment management.

The deployment configuration is specified in `wrangler.jsonc`. Make sure you have the Cloudflare CLI configured with your account credentials before deploying.

For detailed deployment instructions, check out the [official Cloudflare Pages documentation](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/).
