/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Ensure static assets are served correctly
  trailingSlash: false,
};

module.exports = nextConfig;

