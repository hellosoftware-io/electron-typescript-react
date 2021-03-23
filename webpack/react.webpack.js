const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "..");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["main", "module", "browser"],
  },
  entry: path.resolve(rootPath, "src/renderer", "App.tsx"),
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  devServer: {
    static: path.join(rootPath, "dist/renderer"),
    dev: {
      publicPath: "/",
    },
    port: 4000,
    historyApiFallback: true,
    compress: true,
    // contentBase: path.join(rootPath, 'dist/renderer'),
    // historyApiFallback: true,
    // compress: true,
    // hot: true,
    // host: '0.0.0.0',
    // port: 4000,
    // publicPath: '/',
  },
  output: {
    path: path.resolve(rootPath, "dist/renderer"),
    filename: "js/[name].js",
    publicPath: "./",
  },
  plugins: [new HtmlWebpackPlugin()],
};
