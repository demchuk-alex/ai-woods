/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Change the output directory (default is 'out')
  // distDir: 'dist',
  
  // These settings help with GitHub Pages and other static hosts
  basePath: process.env.NODE_ENV === 'production' ? '/engineer-diary-blog' : '',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [],
  },
  // Enable trailing slashes if desired
  // trailingSlash: true,
  
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
};

module.exports = nextConfig; 