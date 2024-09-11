/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this if you're using a custom domain, otherwise use your GitHub Pages URL
  basePath: '/prxshetty.github.io',
}

module.exports = nextConfig