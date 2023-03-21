/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'api-assets.clashroyale.com',
      },
      {
        hostname: 'event-assets.clashroyale.com'
      },
    ],
  },
}

module.exports = nextConfig
