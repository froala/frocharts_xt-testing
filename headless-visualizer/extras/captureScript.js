var fs = require("fs");
var page = require("webpage").create();
var urls = phantom.args[0];
var names = phantom.args[1];

var urlArray = JSON.parse(urls);
var nameArray = JSON.parse(names);

var i = 0;
var ii = urlArray.length;

page.onConsoleMessage = function (msg) {

	if (msg[0] === "{") {
		console.log(msg);
		openNextUrl();
	}
	else {
		console.log("Page Message: " + msg);
	}
};

page.onError = function (msg) {
	console.log("Page Error: " + msg);

	openNextUrl();
};

page.onResourceRequested = function (requestData) {
	//console.log(requestData.url);
};

page.onResourceError = function (errorObj) {
	page.reason = errorObj.errorString;
};

var onOpen = function (status) {
	// page.injectJs()

	console.log("1: " + status);

	if (status !== "success") {
		console.log(page.reason);
	}

	page.evaluate(function (name) {
		var chart,
			container = {};

		for (chart in FusionCharts.items) {

			container.data = FusionCharts.items[chart].getJSONData();
			container.options = FusionCharts.items[chart].args;
			container.name = name;

			console.log(JSON.stringify(container));
		}
	}, nameArray[i-1]);
};

var openNextUrl = function () {
	if (i < ii) {
		//console.log("Opening URL: " + urlArray[i].toString());
		page.open(urlArray[i].toString(), onOpen);
		i += 1;
	}
	else {
		phantom.exit(0);
	}
};

openNextUrl();