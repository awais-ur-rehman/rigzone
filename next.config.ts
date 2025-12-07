import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable React compiler and configure static export for StackCP */
  reactCompiler: true,
  output: 'export',
  images: {
    // Allow Cloudinary assets and disable on-the-fly optimizer for static hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  // Set Turbopack root to current directory to avoid lockfile detection issues
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
