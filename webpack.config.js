const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tunaweza.js',
    clean: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'toDoList',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/i,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

};