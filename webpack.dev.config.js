/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:05
 * @LastEditTime: 2020-09-08 15:22:31
 * @LastEditors: Aiden
 * @Description:
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/dev.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 做一个限制，当我们图标小于多少时用base64来转化，否则用file-loader产生真实的图片。
              limit: 1
              // outputPath: '/img/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less"], // 表示这几个文件的后缀名都可以省略不写，按照顺序依次查找。
    alias: {
      "@": path.join(__dirname, "./src")
    }
  },
  devServer: {
    port: "7700",
    progress: true,
    contentBase: "./public",
    compress: true,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html" // 生成的内存中首页的名称
    })
  ]
};
