/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:05
 * @LastEditTime: 2020-09-21 13:25:21
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
    rules: [ // loader默认是从右向左执行，从下到上
      // {
      //   test: /\.(js|jsx)/,
      //   use: 'eslint-loader',
      //   exclude: [path.resolve(__dirname, "node_modules")]
      //   // options: {
      //   //   enforce: 'pre' // previous
      //   // }
      // },
      {
        test: /\.(js|jsx)$/, // normal普通的loader
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
        test: /\.(png|gif|jpg|eot|svg|ttf|woff|woff2)$/,
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
    extensions: [".js", ".jsx", ".json"], // 表示这几个文件的后缀名都可以省略不写，按照顺序依次查找。
    alias: {
      "@": path.join(__dirname, "./src")
    }
  },
  devServer: {
    port: "8800",
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
