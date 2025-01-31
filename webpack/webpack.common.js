const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WebExtension = require("webpack-target-webextension");
const srcDir = path.join(__dirname, "..", "src");

module.exports = (env) => ({
  entry: {
    options: path.join(srcDir, "options.js"),
    popup: path.join(srcDir, "popup.js"),
    content: path.join(srcDir, "content.js"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    publicPath: "js/",
    filename: "[name].js",
    environment: {
      dynamicImport: true,
    },
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return true;
      },
    },
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
    new CopyPlugin({
      patterns: [{
        from: `manifest/manifest-${env.browser}.json`,
        to: "../manifest.json",
        context: "src" }],
    }),
    new WebExtension(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
