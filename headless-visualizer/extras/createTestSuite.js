var fs = require("fs");
var spawn = require("child_process").spawn;
var logger = require("./lib/logger.js");
var saveFolder = "autoSpecs";

var rstream = fs.createReadStream("./tests/specsfromurls/sample/Completed.txt", {'encoding': 'utf8'});
rstream.setEncoding('utf8');

if (!fs.existsSync(saveFolder)) {
	fs.mkdirSync(saveFolder);
}

rstream.on('data', function (data) {
	var rows = data.split("\n"),
		i = 0,
		ii = rows.length,
		url,
		name,
		nameArray = [],
		urlArray = [],
		items;

	for (; i < ii; i += 1) {
		items = rows[i].split("\t");
		//console.log(items[1]);
		if (items[0]) {
			name = items[0].replace(/^\s\s*/, '');
			name = name.replace(/\r/, '');
			name = name.replace(/\t/, '');
			nameArray.push(name.toString());
		}
		if (items[1]) {
			url = items[1].replace(/^\s\s*/, '');
			url = url.replace(/\r/, '');
			url = url.replace(/\t/, '');
			urlArray.push(url.toString());
		}
	}

	if (urlArray.length) {
		logger.info("URLs:");
		logger.info(JSON.stringify(urlArray, null, 4));

		var args = [
			"captureScript.js",
			JSON.stringify(urlArray),
			JSON.stringify(nameArray)
		];

		console.log("starting phantom");
		var ls = spawn("phantomjs", args);

		ls.stdout.on('data', function (data) {
			data = data.toString();

			if (data[0] === "{") {

				var obj = JSON.parse(data);
				// Sanitization.
				obj.options.dataFormat = "json";
				obj.options.type = obj.options.swfUrl;
				obj.data.chart && (obj.data.chart.animation = "0");
				obj.data.map && (obj.data.chart.map = "0");

				delete obj.options.swfUrl;
				delete obj.options.id;
				delete obj.options.renderAt;

				var writeObj = {};

				writeObj[obj.name] = {};
				writeObj[obj.name].options = obj.options;
				writeObj[obj.name].options.dataSource = obj.data;
				writeObj[obj.name].description = "Auto generated spec";

				console.log("writing data to file: " + obj.name + ".json");
				fs.writeFileSync("autoSpecs/" + obj.name + ".json", JSON.stringify(writeObj, null, 4));
			}
			else {
				logger.info(data);
			}
		});

		ls.stderr.on('data', function (data) {
			logger.error(data);
		});

		ls.on('close', function (code) {
			logger.info("Phantom is closed");
			//process.exit(code);
		});
	}
});