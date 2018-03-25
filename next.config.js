module.exports = {
  webpack(config, { dev }) {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    };
    return config;
  }
};
