/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:05
 * @LastEditTime: 2021-01-15 17:26:06
 * @LastEditors: Aiden
 * @Description:
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "nosources-source-map",
  entry: "./examples/dev.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "/dist")
  },
  optimization: {
    minimize: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 51200000,
    maxAssetSize: 5120000,
  },
  module: {
    rules: [ // loader默认是从右向左执行，从下到上
      // {
      //   test: /\.(js|jsx)/,
      //   use: 'eslint-loader',
      //   exclude: [path.resolve(__dirname, "../node_modules")],
      //   // options: {
      //   //   enforce: 'pre' // previous
      //   // }
      // },
      {
        test: /\.(js|jsx|mdx)$/, // normal普通的loader
        use: "babel-loader",
        // exclude: [path.resolve(__dirname, "../node_modules"),path.resolve(__dirname, "../dist")]
        exclude: [path.resolve(__dirname, "../node_modules")],
        // include: path.resolve(__dirname, '../'),
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
              limit: 10000
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
      "@": path.join(__dirname, "../src")
    }
  },
  devServer: {
    port: "8800",
    progress: true,
    // contentBase: "public",
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
