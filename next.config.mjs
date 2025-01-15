/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/prxshetty.github.io/' : '',
  basePath: isProd ? '/prxshetty.github.io' : '',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  experimental: {
    appDir: true
  }
};

export default nextConfig;