const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  
  mode: "development",

  watch: true,

  entry: {
      index: "./src/index.js",
      
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.html$/i,
                loader: 'html-loader',
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
      
      new HtmlWebpackPlugin({
          filename: "index.html",
          template: "index.html"
      }),
      new HtmlWebpackPlugin({
        filename: "mimikeel.html",
        template: "./pages/mimikeel.html"
    }),

  ],

};
