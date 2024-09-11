/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/prxshetty.github.io/' : '',
  basePath: isProd ? '/prxshetty.github.io' : '',
  output: 'export',
};

export default nextConfig;