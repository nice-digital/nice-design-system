const path = require("path");

// See https://storybook.js.org/configurations/custom-webpack-config/#extend-mode
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
