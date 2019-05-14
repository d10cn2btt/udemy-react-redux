var path = require("path");

module.exports = env => {
  let mainFile = 'main'
  if (typeof env !== 'undefined' && env.main_file) {
    mainFile = env.main_file
  }
  return {
    entry: [
      `./src/${mainFile}.js`
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/dist"
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: 'development',
    devServer: {
      contentBase: './'
    }
  }
};

// module.exports = {
//   entry: './src/main.js',
//   output: {
//     filename: './bundle.js'
//   },
//   mode: 'development'
// };
