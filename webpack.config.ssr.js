const path = require("path");
const webpack = require("webpack");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  devtool: false,
  // target: "node",
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  resolve: {
    modules: ["build", "node_modules", "build/src"],
  },
  plugins: [
    // new webpack.NormalModuleReplacementPlugin(/([a-z-_0-9]+\.css)/, "noop2"),
    // new webpack.NormalModuleReplacementPlugin(/regenerator-runtime/, "noop2"),
  ],
};
