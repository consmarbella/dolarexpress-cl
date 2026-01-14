/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure app router is used
  experimental: {
    appDir: true,
  },
  // Configure static file handling
  staticPageGenerationTimeout: 60,
};
module.exports = nextConfig;
