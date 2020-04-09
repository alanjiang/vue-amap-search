var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  //entry: './src/components/amapsearch/search.vue',
  //entry: './src/main.js',
  output: {
    path: resolve('mapmobile'),
    filename: 'build.js'
   
  },
  module: {
    rules: [
    	
    	 
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
              resolve('src')
              
            ]
          },

    	
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            esModule: true,
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
              }),
              less: ExtractTextPlugin.extract({
                use: 'css-loader!less-loader',
                fallback: 'vue-style-loader'
              }),
            }
          }
        }],
      },
    ]
  },
  performance: {
    hints: false
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#source-map',
  externals: {
   
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'template.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),
    
  ]
})
