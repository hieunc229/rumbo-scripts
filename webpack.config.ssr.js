module.exports = {
  mode: "production",
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
};
