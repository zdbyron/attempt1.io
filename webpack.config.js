var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var entryPoint = path.resolve(__dirname, 'src/main.js');

var config = {
	entry: [entryPoint, 'babel-polyfill'],
	output: {
		path: './bin',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 5555
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: 
				{
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;