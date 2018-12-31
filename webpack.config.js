'use strict';
/* global process __dirname */
const MODE = process.env.MODE || 'development';
const enabledSourcemap = (MODE === 'development');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const js = {
	mode: MODE,
	devtool: enabledSourcemap ? 'cheap-module-eval-source-map' : false,
	entry: `${ __dirname }/src/js/main.js`,
	output: {
		path: `${ __dirname }/public/js/`,
		filename: 'main.js',
		publicPath: `/js/`,
	},
	externals: [
		'child_process'
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|vendor)/,
				loader: 'eslint-loader',
				options: {
					// fix wrong files automatically
					fix: true,
				},
			},
		],
	},
	devServer: {
		port: 3000,
		contentBase: `${ __dirname }/public/`,
		open: true,
	},
	  plugins: [
		new WebpackBuildNotifierPlugin({
			suppressSuccess: "initial",
		})
	],
};

module.exports = [js];
