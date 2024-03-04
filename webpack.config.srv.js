const path = require("path");
const { ProvidePlugin, NormalModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    index: path.join(__dirname, "../build/src/index.js"),
  },
  output: {
    path: path.join(__dirname, "../bundle/server"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|gif|css||jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        type: "asset/resource",
        loader: "file-loader",
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
      {
        test: /\.(tsx|ts|js|jsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript",
              "@babel/preset-env",
            ],
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      React: "react",
    }),

    new NormalModuleReplacementPlugin(/([a-z-_0-9]+\.css)/, "noop2"),
    new NormalModuleReplacementPlugin(/regenerator-runtime/, "noop2"),
  ],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".json"],
    modules: ["build", "node_modules", "build/src"],
    // alias: {
    //   "rct-markdown": path.join(__dirname, "../src/modules/rct-markdown/src"),
    //   rumbo: path.join(__dirname, "../src/modules/rumbo/src"),
    // },
  },
  optimization: {
    minimize: false, //"compress",
  },
};
