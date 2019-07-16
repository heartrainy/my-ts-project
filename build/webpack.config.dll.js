const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve('.', 'dist'),
    library: '_dll_[name]',
    // libraryTarget: 'commonjs'  // var umd
  },
  plugins: [
    // 动态链接库
    new webpack.DllPlugin({ // name == library
      name: '_dll_[name]',
      path: path.resolve('.', 'dist', '_dll_[name].manifast.json')  // 生成清单
    })
  ]
}