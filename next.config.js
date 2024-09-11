/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Make sure this matches your repository name
  basePath: '/prxshetty.github.io',
}

module.exports = nextConfig