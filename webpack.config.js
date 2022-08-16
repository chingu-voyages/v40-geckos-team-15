let path = require("path");
let htmlwebplug = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new htmlwebplug({
      title: "webpack app",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
    ],
  },
};
