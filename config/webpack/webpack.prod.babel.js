import CleanWebpackPlugin from "clean-webpack-plugin";

import paths from "./paths";
import rules from "./rules";

module.exports = {
  mode: "production",
  output: {
    filename: `${path.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split("/").pop()], {
      root: paths.root
    })
  ]
};
