/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

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
  ...(isProduction && {
    basePath: '/landing-portifolio',
    assetPrefix: '/landing-portifolio/',
  })
}

module.exports = nextConfig 