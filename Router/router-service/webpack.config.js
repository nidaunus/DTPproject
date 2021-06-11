const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  target: 'web',
  output: {
    filename: "index.js",
    libraryTarget: 'umd',
    library: 'router-library',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.resolve(__dirname, 'public')],
    compress: true,
    port: 3000,
    historyApiFallback: true,
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
    /mobx-react/
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