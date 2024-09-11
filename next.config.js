/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
if (process.env.NODE_ENV === 'production') {
  nextConfig.assetPrefix = '/prxshetty.github.io'
  nextConfig.basePath = '/prxshetty.github.io'
}

module.exports = nextConfig