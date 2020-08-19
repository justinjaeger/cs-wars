const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// NPM RUN DEV TO RUN IT ON LOCAL 8080

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: process.env.NODE_ENV,
  devServer: {
    https: true,
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/': {
        target: 'https://localhost:3001/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        // query: {
        //   presents: ['@babel/env', '@babel/react'],
        //   plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        // },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};