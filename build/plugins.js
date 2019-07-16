const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css插件

module.exports = [
  new HtmlWebpackPlugin({
    template: path.resolve('.', './build/template/index.html'),
    filename: 'index.html',
    // minify: {
    //   // removeAttributeQuotes: true,  // 去除双引号
    //   collapseWhitespace: true      // 不换行
    // },
    // hash: true
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  // 多个Dll
  new webpack.DllReferencePlugin({
    manifest: path.resolve('.', 'dist', '_dll_react.manifast.json')
  }),
]