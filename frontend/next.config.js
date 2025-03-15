/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/landing-portifolio',
  assetPrefix: '/landing-portifolio/',
  trailingSlash: true
}

module.exports = nextConfig 