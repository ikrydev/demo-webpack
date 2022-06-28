const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    ...(isProd && { filename: "[name].[contenthash].js" }),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        framework: {
          test: /[\\/]node_modules.*(react|react-dom|react-router|emotion|react-emotion)\//,
          name: "framework",
        },
        unify: {
          test: /[\\/]node_modules.*(unify-react-mobile|unify-react-desktop|unify-icons|unify-token)\//,
          name: "unify",
        },
        vendor: {
          test: /[\\/]node_modules[\\/]((?!(react|react-dom|react-router|emotion|react-emotion|unify-react-mobile|unify-react-desktop|unify-icons|unify-token)).*)[\\/]/,
          name: "vendor",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({}),
  ],
};
