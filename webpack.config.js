const path = require('path');

module.exports = {
  entry: './main.js', // Your entry point file (adjust if necessary)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'three': path.resolve('./node_modules/three'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true, // Automatically open the browser
  },
  mode: 'development', // Set to 'production' for production builds
};
