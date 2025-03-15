/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'hencheo-portifolio';

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
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  })
}

export default nextConfig; 