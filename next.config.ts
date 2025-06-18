import type { NextConfig } from 'next';

// Minimal configuration optimized for Turbopack
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },

  // Environment variable configuration
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;
