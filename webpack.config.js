const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 抽离css插件
const OptimizeCss = require('optimize-css-assets-webpack-plugin');  // 压缩优化css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩优化js插件

module.exports = {
  mode: 'development',
  optimization: { // 优化项
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,  // 并发打包
        sourceMap: true
      }),
      new OptimizeCss()
    ]
  },
  devServer: {  // 开发服务器配置
    port: 3001,
    progress: true,
    contentBase: './dist',
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: "source-map",
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
          options: {
    
          }
        }
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'postcss-loader'}
        ]
      },
      {
        test: /\.less$/, 
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'less-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './build/index.html',
      filename: 'index.html',
      // minify: {
      //   // removeAttributeQuotes: true,  // 去除双引号
      //   collapseWhitespace: true      // 不换行
      // },
      // hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}