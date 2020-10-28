var fs = require("fs"),
	path = require("path"),
	log4js = require("log4js"),
	logger,
	timers = {};

log4js.configure({
	appenders: [{
		"type": "console",
		"layout": {
			"type": "pattern",
        	"pattern": "%[%-5p-%m%]"
		}
	}]
});
logger = log4js.getLogger();

module.exports = {
	writeStream: false,
	debugMode: false,
	warn: function (msg) {
		logger.warn(msg);
		this.writeStream &&
			fs.write(this.writeStream, msg);
	},
	info: function (msg) {
		logger.info(msg);
		this.writeStream &&
			fs.write(this.writeStream, msg);
	},
	error: function (msg) {
		logger.error(msg);
		this.writeStream &&
			fs.write(this.writeStream, msg);
	},
	debug: function (msg) {
		if (this.debugMode) {
			logger.debug(msg);
		}
		this.writeStream &&
			fs.write(this.writeStream, msg);
	},
	startTime: function (msg) {
		if (timers[msg]) {
			this.warn("Timer has already been started for: " + msg);
		}
		else {
			timers[msg] = new Date();
		}
	},
	endTime: function (msg) {
		var totalTime = new Date() - timers[msg],
			str = "TIME: " + msg + ": " + totalTime + "\n";
		console.log(str);
		this.writeStream &&
			fs.write(this.writeStream, str);
	},
	setDebugMode: function (debug) {
		this.debugMode = debug;
	},
	setWriteStream: function (fileName) {
		if (this.writeStream) {
			this.closeWriteStream();
		}

		this.writeStream = fs.openSync(path.join(process.cwd(), fileName), 'w');
	},
	closeWriteStream: function () {
		if (this.writeStream) {
			fs.closeSync(this.writeStream);
			this.writeStream = false;
		}
	}
};
