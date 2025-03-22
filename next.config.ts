import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Cloudflare Pages compatibility
  output: 'export',
  transpilePackages: ['next-mdx-remote'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
    ],
  },
  experimental: {
  }
};

export default nextConfig;
