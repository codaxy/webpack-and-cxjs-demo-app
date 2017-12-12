var webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./webpack.config');

var specific = {
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            loader: ["style-loader", "css-loader"]
        }]
    },
    output: {
        publicPath: '/'
    },
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        port: 8088,
        inline: true,
        historyApiFallback: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://other-server.example.com',
        //         secure: false
        //     }
        // }
    }
};

module.exports = merge(common, specific);
