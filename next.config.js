/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/shows/upcoming',
        destination: '/productions',
        permanent: true,
      },
      {
        source: '/productions/coming-soon',
        destination: '/productions/sanctuary-city',
        permanent: true,
      },
    ]
  },
}
  
module.exports = nextConfig