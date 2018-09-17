/**
 * webpack base config
 */

const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const ENV = process.env.NODE_ENV || "development";

const enrtyBasePath = "/";
// const fileName = "demo";

function generateHtml(name, title) {
  return {
    title: title,
    template: `./${name}.template.html`,
    filename: `${name}.html`,
    // chunks: [`${name}`],
    inject: true,
    common: [
      `<script>${fs.readFileSync(
        path.join(__dirname, "../src/utils/baidutongji.js")
      )}</script>`,
      `<script>${fs.readFileSync(
        path.join(__dirname, "../src/utils/wxapi.js")
      )}</script>`
    ],
    minify:
      ENV === "production"
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
          }
        : {}
  };
}
module.exports = {
  mode: ENV,
  context: path.resolve(__dirname, "../src/"),
  entry: {
    index: "./index.js",
    vendor: ["react", "react-dom", "redux", "react-redux"]
  },
  output: {
    filename: "js/[name].[hash:6].js",
    chunkFilename: "js/[name].js",
    path: path.resolve(__dirname, "../dist/")
  },
  externals: {
    jquery: "jQuery",
    Swiper: "Swiper"
  },
  resolve: {
    extensions: [".jsx", ".js", ".scss"],
    alias: {
      "@Components": path.resolve(__dirname, "../src/components/"),
      Templates: path.resolve(__dirname, "src/templates/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin(generateHtml("index", "demo")),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  }
};
