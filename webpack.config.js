const path = require('path');

module.exports = {
	entry: './dist/dblo_client/dblo_client-app/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	}
};