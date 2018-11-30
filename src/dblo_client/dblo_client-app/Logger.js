const DEBUG = true;

export class Logger {

	static debugLog(logOutput) {
		if(DEBUG) {
			console.log(logOutput);
		}
	}
}
