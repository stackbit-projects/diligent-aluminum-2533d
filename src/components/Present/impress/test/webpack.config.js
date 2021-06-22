module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./public/",
        filename: "app.bundle.js"
    },
    watch: true,
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.jsx?$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};
