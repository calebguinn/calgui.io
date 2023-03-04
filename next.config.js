module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source'
    });
    return config;
  },
};