class AbstractLogger {
	constructor(){
		var INFO = 1,
			DEBUG = 2,
			ERROR = 3,
			level = 0,
			nextLogger = null;
	}
	setNextLogger(nextLogger){
		this.nextLogger = nextLogger;
	}
	logMessage(level, message){
		if(this.level <= level){
			this.write(message);
		}
		if(this.nextLogger != null){
			this.nextLogger.logMessage(level, message);
		}
	}
	write(message){
		console.log('')
	}
}

class ErrorLogger extends AbstractLogger{
	constructor(level){
		super();
		this.level = level
	}
	write(message){
		console.log('Error level ' + message);
	}
}

class InfoLogger extends AbstractLogger{
	constructor(level){
		super();
		this.level = level
	}
	write(message){
		console.log('Info level ' + message);
	}
}

class DebugLogger extends AbstractLogger{
	constructor(level){
		super();
		this.level = level
	}
	write(message){
		console.log('Debug level ' + message +'/n');
	}
}

function getChainOfLoggers(){
	errorLogger = new ErrorLogger(3);
	fileLogger = new DebugLogger(2);
	consoleLogger = new InfoLogger(1);
	console.log(errorLogger);

	errorLogger.setNextLogger(fileLogger);
	fileLogger.setNextLogger(consoleLogger);

	return errorLogger;
}

var loggerChain = getChainOfLoggers();

loggerChain.logMessage(1,'This is an information');
loggerChain.logMessage(2, 'This is an debug level information');
loggerChain.logMessage(3, 'This is an error error information');