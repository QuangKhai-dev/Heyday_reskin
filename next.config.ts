import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, {}) => {
    config.module.generator.asset.publicPath = '/_next/'

    return config
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
