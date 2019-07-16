const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              'overrideBrowserslist': ['> 1%', 'last 2 versions']
            })
          ]
        }
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              'overrideBrowserslist': ['> 1%', 'last 2 versions']
            })
          ]
        }
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
          javascriptEnabled: true
        }
      }
    ]
  }
]