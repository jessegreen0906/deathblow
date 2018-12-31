import {Logger} from './Logger';

class ClientApp {

	constructor(props) {
		this.sessionId = -1;
	}


	startNewGame() {
		Logger.debugLog('Starting game');
		this.requestNewSessionId();

		this.showCharacterCreationScreen();
	}

	requestNewSessionId() {
		Logger.debugLog('Requesting new session from the server');
		fetch('http://localhost:9001/newSession', {
		}).then(res =>
			res.json()
		).then(body => {
			this.sessionId = body;
		});
	}

	showCharacterCreationScreen() {
		$(".ui-screen.character-creation").css('display','block');
		$(".ui-screen").not('.character-creation').css('display', 'none');
	}
}

document.getElementById('new-game').addEventListener('click', ()=>{
	var clientApp = new ClientApp();
	clientApp.startNewGame();}
);
