/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/prxshetty.github.io',
  basePath: '/prxshetty.github.io'
}
if (process.env.NODE_ENV === 'production') {
  nextConfig.assetPrefix = '/prxshetty.github.io'
  nextConfig.basePath = '/prxshetty.github.io'
}


module.exports = nextConfig