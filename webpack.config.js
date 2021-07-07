const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  performance: {
    hints: "warning",
    hints: "error",
    hints: false,
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    },
  },
};
