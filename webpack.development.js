const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./public/assets/"),
    filename: "main.bundle.js",
    publicPath: "/assets/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
