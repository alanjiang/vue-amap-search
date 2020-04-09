var path = require('path')
var webpack = require('webpack')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
  var assetsSubDirectory = 'static';
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('mapmobile'),
    filename: 'build.js'
  },
  module: {
    rules: [
      
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new FriendlyErrorsPlugin()
  ]
}
