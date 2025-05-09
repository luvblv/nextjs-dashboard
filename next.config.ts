import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Disable auto-complete suggestions
    typedRoutes: false,
    // Disable other auto-complete features
    serverActions: {
      allowedOrigins: [],
    },
  },
};

export default nextConfig;
