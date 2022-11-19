const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {ESBuildMinifyPlugin} = require('esbuild-loader');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
});
