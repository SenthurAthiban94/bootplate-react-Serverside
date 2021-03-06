const path = require('path');
const dist = path.join(__dirname, 'dist');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
	{
        mode:'production',
		name: 'client',
		target: 'web',
		entry: './app/client/client.jsx',
		output: {
			path: path.join(__dirname, 'build'),
			filename: 'client.js',
			publicPath: '/build/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
        devtool: 'source-map',
        optimization: {
            minimizer: [
              // we specify a custom UglifyJsPlugin here to get source maps in production
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                  compress: false,
                  ecma: 6,
                  mangle: true
                },
                sourceMap: true
              })
            ]
        },
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[hash:base64:10]',
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				}     
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
		]
	},
	{
        mode:'production',
		name: 'server',
		target: 'node',
		entry: './app/server/server.jsx',
		output: {
			path: path.join(__dirname, 'build'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/build/',
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.js', '.jsx']
        },
        optimization: {
            minimizer: [
              // we specify a custom UglifyJsPlugin here to get source maps in production
              new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                  compress: false,
                  ecma: 6,
                  mangle: true
                },
                sourceMap: true
              })
            ]
        },
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: "isomorphic-style-loader",
						use: [
							{
								loader: 'css-loader',
								options: {
									modules: true,
									importLoaders: 1,
									localIdentName: '[hash:base64:10]',
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader'
							}
						]
					})
				}
			],
		},
		plugins: [
			new ExtractTextPlugin({
				filename: 'styles.css',
				allChunks: true
			}),
			new OptimizeCssAssetsPlugin({
				cssProcessorOptions: { discardComments: { removeAll: true } }
			}),
			new StatsPlugin('stats.json', {
				chunkModules: true,
				modules: true,
				chunks: true,
				exclude: [/node_modules[\\\/]react/],
			}),
		]
	}
];