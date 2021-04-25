const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        // clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new RemoveEmptyScriptsPlugin()
    ],
});
