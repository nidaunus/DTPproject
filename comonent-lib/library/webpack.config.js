const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    library: 'mylibrary',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    })
  ],
  resolve: {
    extensions: ['.json', '.js']
  },
  externals: [
    /@material-ui/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  }
}