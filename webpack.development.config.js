const path = require('path');

module.exports = [
	{
        mode: "development",
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
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
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
                                localIdentName: '[name]__[local]___[hash:base64:5]',
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
	},
	{
        mode : "development",
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
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
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
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
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
	}
];