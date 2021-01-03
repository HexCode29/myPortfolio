const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
       {test: /\.css$/i, loader: ["style-loader","css-loader"]},
       {test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader'}
    ],
  },
  
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
     new HtmlWebpackPlugin({
       template: "./public/index.html"
     })
  ]
}