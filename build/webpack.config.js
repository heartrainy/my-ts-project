const path = require('path');
const OptimizeCss = require('optimize-css-assets-webpack-plugin'); // 压缩优化css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩优化js插件
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const plugins = require('./plugins');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');

module.exports = {
  mode: 'development',
  optimization: { // 优化项
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true, // 并发打包
        sourceMap: true
      }),
      new OptimizeCss()
    ]
  },
  devServer: { // 开发服务器配置
    port: 3001,
    progress: true,
    contentBase: './dist',
    open: true,
    historyApiFallback: true,  // 允许浏览器直接访问地址
    proxy: {
      '/proxy-prefix': {
        target: 'http://localhost:3002',
        pathRewrite: { '^/proxy-prefix': '' },
        changeOrigin: true,
        // secure: false, // 接受 运行在 https 上的服务
      }
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve('.', './tsconfig.json')
      })
    ]
  },
  devtool: "source-map",
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', './dist')
  },
  module: {
    rules: [...jsRules, ...styleRules]
  },
  plugins: [...plugins]
}