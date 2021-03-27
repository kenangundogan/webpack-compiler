const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.scss',
	},
	output: {
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							sassOptions: {
								// outputStyle: "compressed",
							},
						},
					},
				],
			},
		],
	}
};
