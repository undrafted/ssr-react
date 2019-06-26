module.exports = {
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
