let path = require('path');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        overlay: true
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader' }
        ]
    }
}

module.exports = (env, options) => {
    config.devtool = options.mode === 'production' ? false : 'eval-sourcemap';

    return config;
};