const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
			chunkFilename: 'css/[id].min.css',
		}),
	],
});