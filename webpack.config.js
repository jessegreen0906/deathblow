const path = require('path');

module.exports = {
	entry: {
		client: ['babel-polyfill', './dist/dblo_client/dblo_client-app/index.js'],
		server: ['babel-polyfill', './dist/dblo_server/Server.js']
	},
	output: {
		filename: '[name].main.js',
		path: path.resolve(__dirname, 'build')
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
};