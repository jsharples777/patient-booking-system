const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/App.tsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../backend/public/js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
  devtool: 'source-map',
};
