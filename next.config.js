/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['courses-top.ru', 'cdn-bucket.hb.bizmrg.com'],
    unoptimized: true,
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
