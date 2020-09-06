/*
 * @Author: Aiden
 * @Date: 2020-09-01 16:37:29
 * @LastEditTime: 2020-09-06 22:47:19
 * @LastEditors: Aiden
 * @Description:
 */
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
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
    ],
    configureWebpack: {
      //警告 webpack 的性能提示
      performance: {
        hints: "warning",
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith(".js");
        }
      }
    },
    externals: Object.keys(pkg.dependencies).map(
      pkgName => (context, request, callback) => {
        // 逻辑：以模块名 pkgName 开始的引用都将视为外部模块
        request.indexOf(pkgName) === 0 ? callback(null, request) : callback();
      }
    )
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less"], // 表示这几个文件的后缀名都可以省略不写，按照顺序依次查找。
    alias: {
      "@": path.join(__dirname, "./src")
    }
  }
};
