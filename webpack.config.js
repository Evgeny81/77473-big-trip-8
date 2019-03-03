const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`), // eslint-disable-line no-undef
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: `babel-loader`,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, `css-loader`],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: `[name].css`
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line no-undef
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true,
  },
};
