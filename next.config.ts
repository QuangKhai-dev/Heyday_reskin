import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|woff2?)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable' // Cache dài hạn
          }
        ]
      }
    ]
  },
  /* config options here */
  webpack: (config, {}) => {
    config.module.generator.asset.publicPath = '/_next/'

    return config
  }
}

export default nextConfig
