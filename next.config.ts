import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Optional: Add trailing slash to URLs
  trailingSlash: true,
  
  // Optional: Custom dist directory
  distDir: 'dist',
};

export default nextConfig;
