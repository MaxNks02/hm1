// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom alias for imports
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'src/components'
    );

    // Optimize webpack bundle splitting
    if (!isServer && !dev) {
      config.optimization.splitChunks.cacheGroups = {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      };
    }

    return config;
  },
};
