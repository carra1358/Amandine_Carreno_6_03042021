const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: process.env.mode,

  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    photographes: path.resolve(__dirname, "src/photographes.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new ESLintPlugin({
      files: "./scr/*.js",
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      filename: "photographes.html",
      template: "photographes.html",
      chunks: ["photographes"],
    }),

    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
