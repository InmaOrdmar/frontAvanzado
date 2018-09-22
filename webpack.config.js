const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


var commonConfig = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      filename: 'main[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Large',
          template: path.join(__dirname, 'src', 'index.html'),
          minify: {
            collapseWhitespace: true
          }
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[hash].css'
        })
    
    ],
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[path][name].[hash].[ext]'
                }    
              },
              {
                loader: 'image-webpack-loader'
              }
            ],
          }
        ]
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src', 'components'),
        assets: path.resolve(__dirname, 'src', 'assets'),
        styles: path.resolve(__dirname, 'src', 'styles'),
        utils: path.resolve(__dirname, 'src', 'utils'),
        data: path.resolve(__dirname, 'src', 'data')
      }  
    }
    
};

var devConfig = {
    devServer: {
      open: true,
      overlay: true,
      port: 3000,
      hot: true
    }
};
  
var prodConfig = {};
  
module.exports = (env, argv) => argv.mode === 'development' ? merge(commonConfig, devConfig) : merge(commonConfig, prodConfig);
  