import {Logger} from './Logger';

class ClientApp {

	constructor(props) {
		this.sessionId = -1;
	}


	startNewGame() {
		Logger.debugLog('Starting game');
		this.requestNewSessionId();
		Logger.debugLog('Session id: '+this.sessionId);
	}

	requestNewSessionId() {
		Logger.debugLog('Requesting new session from the server');
		//TODO: Make request for sessionID.
		var self = this;
		var reqCompleted = false;
		var response = async function() {
			return await fetch('http://localhost:9001/newSession', {
				mode: "no-cors"
			});
		};
		self.sessionId = response;
		Logger.debugLog('New SessionID stored: '+self.sessionId);
		// this.sessionId = 1;
	}

}

document.getElementById('new-game').addEventListener('click', ()=>{
	var clientApp = new ClientApp();
	clientApp.startNewGame();}
);
