var fs = require("fs");
var filePathArray = phantom.args[0];
var specFileArray = filePathArray.split(",");
var srcDirectory = phantom.args[1];
var saveImages = (phantom.args[2] === "1") ? true: false;
var scriptFolder = phantom.libraryPath;

if (saveImages) {
	var savePath = phantom.args[3];
	var threshold = 0;
	var overrideSpecRef = phantom.args[4];
	var refImagesSource = phantom.args[5];
}
else {
	var savePath = phantom.args[3];
	var threshold = phantom.args[4];
}

if (!fs.exists(savePath)) {
	if (saveImages) {
		console.log("Path provided to save the images is not valid");
		phantom.exit(1);
	}
	else {
		savePath = null;
	}
}

if (!saveImages && savePath) {
	console.log("__buildComparer__");
}

phantom.injectJs(scriptFolder + "/fcimg.js");
var fcImaging = jappPageScriptInterface;

var run = function () {
	//var srcFiles = getSrcFileArray();

	runner = new PhantomFCRunner(require("webpage").create());

	runner.finished = function () {
		//console.log("next spec");
		if (runner.isDirty) {
			runner.writeSpecsIntoFile(runner.source);
			runner.isDirty = false;
		}

		this.getNextSpecArray();
	};

	runner.createPage(function () {
		runner.getNextSpecArray();
	});
};

var PhantomFCRunner = function (page) {
	this.source = [];
	this.index = 0;
	this.length = 0;

	this.page = page;
	this.isDirty = false;

	this.currentSpec = null;
	this.isRunning = false;

	this.specFilePath = null;
	this.specFileIndex = 0;

	this.listenToPage();
};

PhantomFCRunner.prototype.listenToPage = function () {
	var pfcr = this,
		page = pfcr.page;

	page.onResourceError = function (errorObj) {
		console.log("RESOURCE ERROR: " + errorObj.errorString);
	};

	page.onError = function (err, stack) {
		console.log("PAGE ERROR: " + err);
		console.log(JSON.stringify(stack));

		console.log(['__noSnapshot__', pfcr.specId, pfcr.specFilePath].join(","));
		pfcr.next();
	};

	page.onConsoleMessage = function (msg) {
		var name = null,
			specId,
			snapshotPath,
			diffPath,
			refImagePath,
			parts = [],
			imagePrefix,
			specFilePath;

		//fs.write('japp_log.txt', (msg + '\n\n'), 'a');
		if (msg.indexOf("!action!") !== -1) {
			parts = msg.split(",");
			parts = parts.slice(1);
			pfcr.page.sendEvent.apply(pfcr.page, parts);
		}
		else if (msg.indexOf("!noclick!") !== -1) {
			parts = msg.split(",");
			specId = parts[1];

			console.log(['__noSnapshot__', specId, pfcr.specFilePath].join(","));
			pfcr.next();
		}
		else if (msg.indexOf("!click!") !== -1) {
			parts = msg.split(",");
			imagePrefix = parts[1];
			refImagePath = parts[2];
			specId = pfcr.spec.id;

			//console.log(JSON.stringify(parts));

			specFilePathNoExtn = pfcr.specFilePath.toString();
			//specFilePathNoExtn.replace(/\.json$/, '');

			// sanitize the path
			specFilePathNoExtn = specFilePathNoExtn.slice(0, -5);
			specFilePathNoExtn = specFilePathNoExtn.replace(/\\/g, '/');
			specFilePathNoExtn = specFilePathNoExtn.replace(/\\\\/g, '/');

			//console.log(specFilePathNoExtn);

            var pathWithoutSuffix = savePath + imagePrefix;
            var pathWithSnaphotSuffix = pathWithoutSuffix + "-snapshot.png";
            var pathWithDiffSuffix = pathWithoutSuffix + "-diff.png";

            var savePathLeading = pathWithoutSuffix;

            snapshotPath = pathWithSnaphotSuffix;
            diffPath = pathWithDiffSuffix;

			if (saveImages) {
				page.render(snapshotPath);
/*
				if (overrideSpecRef) {
					pfcr.spec.refimage = (refImagesSource + pathWithSnaphotSuffix);
					pfcr.isDirty = true;
				}
*/
				pfcr.next();
			}
			else if (savePath) {
				page.render(snapshotPath);
				if (refImagePath) {
					if (fs.exists(refImagePath)) {
						page.evaluate(fcImaging.imageComparer, snapshotPath, refImagePath, threshold, pfcr.specFilePath, specId, savePathLeading);
					}
					else {
						console.log(["__NotFound__", refImagePath, specId, pfcr.specFilePath, snapshotPath].join(","));
						pfcr.next();
					}
				}
				else {
					console.log(["__NotFound__", refImagePath, specId, pfcr.specFilePath, snapshotPath].join(","));
					pfcr.next();
				}
			}
			else {
				// Adding a random number in the string to avoid any collision
				// that might possibly happen with a parallel thread.
				snapshotPath = specId + ((Math.ceil(Math.random() * 1000) % 100) + "-snapshot.png");
				page.render(snapshotPath);
				if (refImagePath) {
					if (fs.exists(refImagePath)) {
						page.evaluate(fcImaging.imageComparer, snapshotPath, refImagePath, threshold, pfcr.specFilePath, specId);
					}
					else {
						console.log(["__NotFound__", refImagePath, specId, pfcr.specFilePath, snapshotPath].join(","));
						fs.remove(snapshotPath);
						pfcr.next();
					}
				}
				else {
					fs.remove(snapshotPath);
					pfcr.next();
				}
			}
		}
		else if (msg.indexOf("__exitPhantomMismatch__") !== -1 ||
			msg.indexOf("__exitPhantomMatch__") !== -1) {

			if ((msg.indexOf("__exitPhantomMismatch__") !== -1) && savePath) {
				var msgParts = msg.split(","),
					savePathLeading = msgParts[6],
					diffUrl = savePathLeading + "-diff.png";

				page.render(diffUrl);
				console.log([msg, diffUrl].join(","));
			}
			else {
				console.log(msg);
			}
			pfcr.next();
		}
		else if (msg.indexOf("deleteSnapshot") !== -1 && !savePath) {
			var sName = msg.split(",")[1];
			sName && fs.exists(sName) && fs.remove(sName);
		}
		else {
			console.log(msg);
		}
	};
};

PhantomFCRunner.prototype.createPage = function (callback) {
	var pfcr = this,
		page = pfcr.page;

	page.open("http://localhost:8090/", function (status) {
		if (status !== "success") {
			console.log("Page failed to open");
			pfcr.next();
		}
		else {
			callback && callback();
		}
	});
};

PhantomFCRunner.prototype.loadScripts = function (srcFileArray) {
	var i = 0,
		ii = srcFileArray.length,
		page = this.page;

	for (; i < ii; i += 1) {
		page.injectJs(srcFileArray[i]);
	}
};

PhantomFCRunner.prototype.next = function () {
	var pfcr = this,
		spec = pfcr.source[pfcr.index],
		page = pfcr.page;

	pfcr.index += 1;

	if (!spec) {
		pfcr.finished();
	}
	else {
		//pfcr.page.sendEvent.apply(pfcr.page, ["mousemove", 0, 0]);
		//console.log("Image generator: " + spec.id);
		pfcr.spec = spec;
		spec.refimage = pfcr.specFilePath.slice(0,-15) + "ref-images" + spec.refimage.slice(spec.refimage.lastIndexOf("/"));
		//console.log(JSON.stringify(spec));
		page.evaluate(
			fcImaging.imageGenerator,
			spec.id,
			spec.refimage,
			spec.options,
			spec.actions
		);
	}
};

PhantomFCRunner.prototype.loadSpecs = function (specArray) {
	this.source = specArray;
	this.index = 0;
	this.length = specArray && specArray.length;
};

PhantomFCRunner.prototype.setSpecPath = function (specPath) {
	this.specFilePath = specPath;
	//console.log("specPath: " + specPath);
};

PhantomFCRunner.prototype.getNextSpecArray = function () {

	this.specJSONFile = specFileArray[this.specFileIndex++];

	var specJSONFile = this.specJSONFile;
	if (!specJSONFile) {
		phantom.exit(0);
	}

	var filedata = fs.read(specJSONFile);
	//console.log("I will parse");
	var specJSON = JSON.parse(filedata);
	//console.log("I parsed");
	var item, specArray = [];

	for (var spec in specJSON) {
		item = specJSON[spec];
		item.id = spec;
		specArray.push(item);
	}

	this.setSpecPath(specJSONFile);
	this.loadSpecs(specArray);
	this.start();
};

PhantomFCRunner.prototype.writeSpecsIntoFile = function () {

	var specJSONFile = this.specJSONFile,
		specArray = this.source,
		writeObj = {},
		i = 0,
		ii = specArray.length,
		item;

	for (; i < ii; i += 1) {
		item = specArray[i];
		if (item.id) {
			writeObj[item.id] = item;
		}
	}

	fs.write(specJSONFile, JSON.stringify(writeObj, null, 4), 'w');
};

PhantomFCRunner.prototype.start = function () {
	this.isRunning = true;
	this.next();
};

PhantomFCRunner.prototype.finished = function () {
	phantom.exit(0);
};

run();
