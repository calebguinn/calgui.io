const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  }
})
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source'
    });
    return config;
  },
};

module.exports = withMDX(nextConfig)