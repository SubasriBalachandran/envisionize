const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
