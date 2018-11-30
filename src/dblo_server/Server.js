var restify = require('restify');

function respond(req, res, next) {
	res.send('2');
	next();
}

var server = restify.createServer();
server.get('/newSession', respond);
server.head('/newSession', respond);

server.listen(9001, function() {
	console.log('%s listening at %s', server.name, server.url);
});