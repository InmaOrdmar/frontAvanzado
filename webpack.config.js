const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin; // eslint-disable-line
const Dotenv = require('dotenv-webpack');

const commonConfig = {
  entry: {
    home: ['@babel/polyfill', path.join(__dirname, 'src', 'pages', 'home', 'index')],
    article: ['@babel/polyfill', path.join(__dirname, 'src', 'pages', 'article', 'index')]
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Large',
      template: path.join(__dirname, 'src', 'pages', 'home', 'index.html'),
      chunks: ['home'],
      minify: {
        collapseWhitespace: true
      },
      filename: path.resolve(__dirname, 'dist', 'index.html')
    }),
    new HtmlWebpackPlugin({
      title: 'Large - Article',
      template: path.join(__dirname, 'src', 'pages', 'article', 'index.html'),
      chunks: ['article'],
      minify: {
        collapseWhitespace: true
      },
      filename: path.resolve(__dirname, 'dist', 'article', 'index.html')
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
        ]
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
  },
  devtool: 'source-map'
};

const devConfig = {
  devServer: {
    open: true,
    overlay: true,
    port: 3000,
    hot: true
  }
};

const prodConfig = {
  plugins: [
    new CleanWebpackPlugin(['dist'])
    /* new CriticalPlugin({
      src: path.join(__dirname, 'src', 'index.html'),
      inline: true,
      minify: true,
      dest: path.join(__dirname, 'dist', 'index.html')
    }) */

  ]
};

module.exports = (env, argv) => (argv.mode === 'development' ? merge(commonConfig, devConfig) : merge(commonConfig, prodConfig));
