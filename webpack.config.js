const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets",
        },
        {
          from: "data",
          to: "data",
        },
      ],
    }),
  ],
};
