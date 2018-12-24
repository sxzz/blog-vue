const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: config => {
    if (process.argv.indexOf('--report') !== -1) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{}]);
    }
  },
};
