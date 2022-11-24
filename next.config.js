/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    domains: [
        'raw.githubusercontent.com',
    ]
  }
}

module.exports = nextConfig
