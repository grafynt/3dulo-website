import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow local images from /public and future CDN domains
    remotePatterns: [],
    // Unoptimized for placeholder images that don't exist yet
    unoptimized: true,
  },
  // Generate sitemap after build
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
