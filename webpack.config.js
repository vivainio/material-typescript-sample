const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    entry: "./app.ts",
    mode: "development",
    devtool: "inline-source-map",
    output: {
      filename: "bundle.js"
    },

    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            { loader: "css-loader" },
            {
              loader: "sass-loader",
              options: {
                includePaths: ["./node_modules"]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
  ]
  }
];
