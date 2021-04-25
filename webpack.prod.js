const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = merge(common, {
	mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].min.js',
        // clean: true
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
			chunkFilename: 'css/[id].min.css',
		}),
        new RemoveEmptyScriptsPlugin()
	],
});
