/* eslint-disable no-mixed-spaces-and-tabs */
import { DefinePlugin } from 'webpack';
import { resolve as _resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { config } from 'dotenv';
import TsconfigPathPlugin from 'tsconfig-paths-webpack-plugin';

export default () => {
	// call dotenv and it will return an Object with a parsed key
	const env = config().parsed;

	// reduce it to a nice object, the same as before
	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});

	return [
		{
			mode:
        process.env.NODE_ENV === 'production'
        	? 'production'
        	: 'development',
			entry: './src/index.tsx',
			output: {
				filename: 'bundle.js',
				path: _resolve(__dirname, 'public'),
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.jsx$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.ts$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.tsx$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/,
						use: {
							loader: 'file-loader',
							options: {
								name: './images/[hash].[ext]',
							},
						},
					},
				],
			},
			resolve: {
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
				plugins: [
					new TsconfigPathPlugin({
						configFile: 'tsconfig.json',
					}),
				],
			},
			devtool: 'inline-source-map',
			devServer: {
				static: join(__dirname, 'public'),
				compress: true,
				port: 3600,
				open: true,
				hot: true,
				historyApiFallback: true,
				host: '0.0.0.0',
			},
			plugins: [
				new DefinePlugin(envKeys),
				new HtmlWebpackPlugin({
					title: 'Drillz | Habit Building and Tracking App',
					template: './src/index.html',
					minify: {
						collapseWhitespace: true,
					},
				}),
			],
		},
	];
};
