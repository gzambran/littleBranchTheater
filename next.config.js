/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Disable static optimization to allow server-side rendering
  reactStrictMode: true,
}
  
module.exports = nextConfig