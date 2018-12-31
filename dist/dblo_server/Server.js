"use strict";

var _Game = require("./data_classes/Game");

var restify = require('restify');

var gameList = {};

function createNewSession(req, res, next) {
  var gameId = 2;
  console.log('Creating new session');
  gameList[gameList.length] = new _Game.Game({
    gameId: gameId
  });
  res.send(gameId);
  next();
}

var server = restify.createServer();
server.use(function crossOrigin(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  return next();
});
server.get('/newSession', createNewSession); // server.head('/newSession', respond);

server.listen(9001, function () {
  console.log('%s listening at %s', server.name, server.url);
});