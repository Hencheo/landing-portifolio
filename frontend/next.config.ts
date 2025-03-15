import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/landing-portifolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Desabilitar a geração de arquivos .map para reduzir o tamanho do build
  productionBrowserSourceMaps: false,
};

export default nextConfig;
