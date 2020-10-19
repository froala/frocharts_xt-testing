//var lib = require("./lib.js");
var child_process = require("child_process");
var fs = require("fs");
var path = require("path");
var http = require("http");
var phantom = require("phantomjs");
var logger = require("./lib/logger.js");
//var imagemagick = require("./lib/imagemagick.js");

// default options
var options = {
    specGenerationFileName: "mergedSpec.json"
};

var exitCodes = {
    allPassing: 0,
    failing: 1,
    refMissing: 2,
    noSnapshot: 4,
    savePathError: 8,
    specPathError: 9,
    sourcePathError: 10,
    refPathError: 11
};

// the server created to serve compare images as the canvas
// element needed by resemble module cannot work if the
var resembleServer = null;

var buildComparer = false;

var callbacks = {
    completedCount: 0,
    checkComplete: function() {
        this.completedCount += 1;
        return (this.completedCount === options.phantomThreads);
    },
    complete: [],
    eachpass: [],
    eachfail: []
};

var out = {
    total: 0,
    passing: 0,
    failing: 0,
    ssfailing: 0,
    missing: 0,
    report: {
        passing: [],
        ssfailing: [],
        failing: [],
        missing: [],
        status: ""
    },
    stdout: [],
};

var getFolderMap = function(dir, store, callback) {
    var mod = this,
        subFolderCount = 0,
        successCount = 0,
        failCount = 0,
        directSubFolders = [],
        subfolderCB = function(status) {

            if (status === "success") {
                successCount += 1;
            } else {
                failCount += 1;
            }

            if (((successCount + failCount) === subFolderCount) && callback) {
                if (failCount) {
                    callback("error");
                } else {
                    callback("success");
                }
            }
        };

    fs.readdir(dir, function(err, files) {

        if (err) {
            callback("error");
            return false;
        }

        var i = 0,
            ii = files.length,
            subfolders = {},
            file,
            fspath;

        for (; i < ii; i += 1) {
            file = files[i].replace(/\r/, '');
            file = file.replace(/\n/, '');
            fspath = path.join(dir, file);
            file = path.normalize(file);

            if (fs.statSync(fspath).isDirectory()) {
                subfolders[file] = [];
                subFolderCount += 1;
                directSubFolders.push(file);
            } else {
                store.push(file);
            }
        }

        i = 0;
        ii = directSubFolders.length;
        if (!ii) {
            if (callback) {
                callback("success");
            }
        } else {
            store.push(subfolders);
            for (; i < ii; i += 1) {
                getFolderMap(path.join(dir, directSubFolders[i]), subfolders[directSubFolders[i]], subfolderCB);
            }
        }
    });
};

var splitSpecs = function(specArray, prefix) {

    prefix = prefix || ".";
    var item,
        subitem,
        count = 0,
        num = options.phantomThreads,
        specFiles = specArray || options.specFiles,
        i = 0,
        ii = specFiles.length,
        returnArr = options.splitSpecs || (options.splitSpecs = []),
        index = 0;

    if (!num) {
        return [];
    }

    for (; i < ii; i += 1) {
        item = specFiles[i];

        if (typeof item === "object") {
            for (subitem in item) {
                splitSpecs(item[subitem], path.normalize(path.join(prefix, subitem)));
            }
        } else if (specFiles[i].indexOf("Spec.json") !== -1) {
            index = i % num;

            if (!returnArr[index]) {
                returnArr[index] = [];
            }
            returnArr[index].push(path.normalize(path.join(prefix, specFiles[i])));
        }
    }

    return returnArr;
};

var processPhantomMessage = function(msg, program) {
    var parts;

    if (msg.indexOf("__exitPhantomMismatch__") !== -1) {
        out.total += 1;
        out.failing += 1;
        parts = msg.split(",");
        out.report.failing.push({
            id: parts[1],
            path: parts[2],
            mismatch: parts[3],
            snapshot: parts[4],
            refpath: parts[5],
            diff: parts[7]
        });
        if (program.verbose) logger.error("Snapshot mismatch is " + parts[3] + "%  for " + parts[1] + " in " + parts[2]);
        if (program.verbose) logger.debug(msg);
    } else if (msg.indexOf("__exitPhantomMatch__") !== -1) {
        out.total += 1;
        out.passing += 1;
        parts = msg.split(",");
        out.report.passing.push({
            id: parts[1],
            path: parts[2],
            mismatch: parts[3],
            snapshot: parts[4],
            refpath: parts[5],
        });
        if (program.verbose) logger.info("Snapshot matching for " + parts[1] + " in " + parts[2]);
        if (program.verbose) logger.debug(msg);
    } else if (msg.indexOf("__NotFound__") !== -1) {
        out.total += 1;
        out.missing += 1;
        out.failing += 1;
        parts = msg.split(",");
        out.report.missing.push({
            refpath: parts[1],
            id: parts[2],
            path: parts[3],
            snapshot: parts[4]
        });
        if (program.verbose) logger.error("Reference image not found at " + parts[1] + " for " + parts[2] + " in " + parts[3]);
        if (program.verbose) logger.debug(msg);
    } else if (msg.indexOf("__buildComparer__") !== -1) {
        buildComparer = true;
    } else if (msg.indexOf("__noSnapshot__") !== -1) {
        out.total += 1;
        out.ssfailing += 1;
        out.failing += 1;
        parts = msg.split(",");
        out.report.ssfailing.push({
            id: parts[1],
            path: parts[2]
        });
        if (program.verbose) logger.error("Snapshot could not be generated for " + parts[1] + " in " + parts[2]);
        if (program.verbose) logger.debug(msg);
    } else {
        if (program.verbose) logger.debug(msg);
    }
};

module.exports = {
    cli: function(program) {

        if (program.verbose) logger.startTime("full");

        var fspath,
            sPath,
            exists,
            source,
            merge,
            destination,
            confObj;

        if (program.verbose) {
            if (program.verbose) logger.setDebugMode(true);
            if (program.verbose) logger.setWriteStream("japp_log.txt");
        }

        if (fs.existsSync(path.join(process.cwd(), program.config))) {
            if (program.verbose) logger.info("config file read from " + program.config);
            confObj = JSON.parse(fs.readFileSync(path.join(process.cwd(), program.config)));
        } else {
            confObj = {};
        }

        options.phantomThreads = Number(program.maxThreads) || confObj.maxThreads || 1;

        if (program.generateSpecs) {
            source = program.dataSourceFolder || confObj.dataSourceFolder || "./tests/data/";
            merge = Boolean(program.mergeSpecs || confObj.mergeSpecs);

            this.specGeneratorFS(source, merge);
            return;
        }

        if (program.save) {
            sPath = path.normalize(program.savePath || confObj.savePath || "./saved/");

            fspath = path.join(process.cwd(), sPath);
            exists = fs.existsSync(fspath);
            options.overwriteRef = program.overwriteRef;
            if (program.verbose) logger.info(fspath);
            if (exists) {
                options.saveImages = true;
                options.savePath = sPath.replace(/\\/g, '/');
                if (program.verbose) logger.info("The images generated by japp will be saved in " + options.savePath);
            } else {
                options.saveImages = false;
                options.savePath = null;
                if (program.verbose) logger.error("The path provided to save the images does not exist.");
                process.exit(exitCodes.savePathError);
            }
        } else {
            sPath = path.normalize(program.snapshotsPath || confObj.snapshotsPath || "./snapshots/");

            fspath = path.join(process.cwd(), sPath);
            exists = fs.existsSync(fspath);

            if (exists) {
                options.savePath = sPath.replace(/\\/g, '/');
                if (program.verbose) logger.info("snapshots to be saved in " + options.savePath);
            } else {
                options.savePath = null;
            }
        }

        sPath = path.normalize(program.specSource || confObj.specSource || "./tests/specs/");

        fspath = path.join(process.cwd(), sPath);
        exists = fs.existsSync(fspath);

        if (exists) {
            options.specSource = fspath.replace(/\\/g, '/');
            options.specSourceRelative = sPath.replace(/\\/g, '/');
            if (program.verbose) logger.info("specs being read from " + options.specSourceRelative);
        } else {
            options.specSource = null;
            if (program.verbose) logger.error("The path provided to source the specs does not exist.");
            process.exit(exitCodes.specPathError);
        }

        sPath = path.normalize(program.refImagesRoot || confObj.refImagesRoot || "./");

        fspath = path.join(process.cwd(), sPath);
        exists = fs.existsSync(fspath);

        if (exists) {
            options.refImages = sPath.replace(/\\/g, '/');;
            if (program.verbose) logger.info("reference images being read from " + options.refImages);
        } else {
            options.refImages = null;
            if (!options.saveImages) {
                if (program.verbose) logger.error("The root provided for the reference images does not exist.");
                process.exit(exitCodes.refPathError);
            }
        }

        sPath = path.normalize(program.jsSourceRoot || confObj.jsSourceRoot || "./src/");

        fspath = path.join(process.cwd(), sPath);
        exists = fs.existsSync(fspath);
        if (program.verbose) logger.info("source files" + fspath);
        if (exists) {
            options.jsSource = sPath.replace(/\\/g, '/');
            if (program.verbose) logger.info("js source being read from " + options.jsSource);
        } else {
            options.jsSource = null;
            if (program.verbose) logger.error("The path provided for the source files does not exist.");
            process.exit(exitCodes.sourcePathError);
        }

        var mPath = path.normalize(program.mapsPathPrefix || confObj.mapsPathPrefix || "maps/");
        fspath = path.join(fspath, mPath);
        exists = fs.existsSync(fspath);

        if (exists) {
            options.mapsPathPrefix = mPath.replace(/\\/g, '/');
            if (program.verbose) logger.debug("maps located in " + options.mapsPathPrefix + " inside the js source folder");
        } else {
            options.mapsPathPrefix = "";
            if (program.verbose) logger.warn("The path provided for the MAPS source files does not exist.");
        }

        options.threshold = Number(program.threshold) || Number(confObj.threshold) || 0;

        this.start(program);
    },


    /**
     * This function converts the chart json data into a spec json and either stores it in the store
     * provided or returns the spec json for writing. If added to the store the consumer of
     * this method has the responsibility of writing the specs in the store into the filesystem.
     * If not added to the store, then the method returns an object that is should be immediately written
     * to the file system (also by the consumer of the method).
     *
     * @param  {[type]} data  The chart json data
     * @param  {[type]} id    id to hash the spec json that gets created
     * @param  {[type]} store The spec store
     * @return {[type]}       [description]
     */
    convertJSONToSpec: function(data, id, store) {

        if (!data) {
            return null;
        }

        var chartConstructionOptions = {
                width: "600",
                height: "400",
                type: "column2d",
                dataFormat: "json",
                dataSource: data
            },
            toWriteImmediately = {},
            toSave = false;

        if (data.__constructorParams) {

            chartConstructionOptions.width = (data.__constructorParams.width || "600");
            chartConstructionOptions.height = (data.__constructorParams.height || "400");
            chartConstructionOptions.type = (data.__constructorParams.type || data.__constructorParams.swfUrl || "column2d");

            delete data.__constructorParams;
        }

        if (!store || store[id]) {
            toWriteImmediately[id] = {
                description: "Auto generated spec",
                options: chartConstructionOptions
            };
        } else {
            toSave = true;
            store[id] = {
                description: "Auto generated spec",
                options: chartConstructionOptions
            };
        }

        return {
            addedToStore: toSave,
            writeNow: toWriteImmediately
        };
    },


    /**
     * Gets FusionCharts chart data in JSON format from an array of files and converts them into
     * specs.
     * If there are more than data files provided in the array then the corresponding specs
     * are save in a single file obtained from targetSpec.
     * If there is a single file in the array then the generated spec is stored either based
     * on the targetSpec parameter (if provided), OR the file name of the json data file.
     *
     * @param  {[type]} folderPath  [description]
     * @param  {[type]} dataFileArr [description]
     * @param  {[type]} targetSpec  [description]
     * @return {[type]}             [description]
     */
    createSpecsFromFiles: function(folderPath, dataFileArr, targetSpec) {

        var i = 0,
            ii = dataFileArr.length,
            specData = {},
            toSave = false,
            temp,
            key,
            specKey,
            convertResult,
            file;

        if (ii < 1) {
            return false;
        } else if (ii > 1) {
            targetSpec = targetSpec || options.specGenerationFileName;
        } else { // ii === 1
            specData = null;
        }

        for (; i < ii; i += 1) {

            file = dataFileArr[i];
            data = fs.readFileSync(path.join(folderPath, file));

            key = file.split(".")[0];
            specKey = (key && key.toString()) || "noname";

            convertResult = this.convertJSONToSpec(JSON.parse(data), specKey, specData);

            if (convertResult.addedToStore) {
                toSave = true;
            }

            if (convertResult.writeNow) {
                for (var item in convertResult.writeNow) {
                    if (targetSpec) {
                        temp = targetSpec + "Spec.json";
                    } else {
                        temp = item + "Spec.json";
                    }
                    fs.writeFileSync(
                        path.join(folderPath, temp),
                        JSON.stringify(convertResult.writeNow, null, 4), {
                            flag: "w"
                        }
                    );
                }
            }
        }

        if (toSave) {
            // targetSpec should be defined. If for some reason it is not defined, there is a problem
            // with the logic.
            if (targetSpec) {
                fs.writeFileSync(
                    path.join(folderPath, targetSpec),
                    JSON.stringify(specData, null, 4), {
                        flag: "w"
                    }
                );
            } else {
                logger.error('The target file in which to save the merged specs was not found.');
            }
        }
    },

    /**
     * Read the source folder from the filesystem, fetches all the files (assuming all the files contain only FusionCharts
     * specific data), converts them into spec jsons and writes them back to the file system.
     *
     * @param  {[type]} source [description]
     * @param  {[type]} merge  [description]
     * @return {[type]}        [description]
     */
    specGeneratorFS: function(source, merge) {
        logger.info("Merge source" + source + merge);
        var mod = this,
            dataStore = [];

        getFolderMap(source, dataStore, function(status) {

            if (status !== "success") {
                logger.error("Unable to open the folder " + source);
                return;
            }

            var converter = function(folder, tree) {
                var i = 0,
                    ii = tree.length,
                    fileArray = [],
                    item;

                for (; i < ii; i += 1) {
                    item = tree[i];
                    if (typeof item === "object") {
                        for (var each in item) {
                            converter(path.join(source, each), item[each]);
                        }
                    } else if (item.indexOf("Spec.json") === -1) {
                        if (merge) {
                            fileArray.push(item);
                        } else {
                            mod.createSpecsFromFiles(folder, [item]);
                        }
                    }
                }

                if (merge) {
                    mod.createSpecsFromFiles(folder, fileArray);
                }
            };

            converter(source, dataStore);
        });
    },
    configure: function(opts) {
        // Might be needed later
    },
    start: function(program) {
        var mod = this;

        if (options.specSource) {
            if (program.verbose) logger.info("Reading the specs from the file system");
            getFolderMap(options.specSource, (options.specFiles = []), function(status) {

                if (status !== "success") {
                    if (program.verbose) logger.error("Spec path provided does not exist / cannot be opened");
                    process.exit(exitCodes.specPathError);
                }

                if (program.verbose) logger.info("Starting the tests. Please wait.");
                mod.startHTTP(program);

                var resultBatch = splitSpecs(null, options.specSourceRelative),
                    i = 0,
                    ii = resultBatch.length,
                    checkCB = function() {
                        if (callbacks.checkComplete()) {
                            if (program.verbose) logger.info("Testing has finished executing!");
                            mod.finished(program);
                        }
                    };

                options.phantomThreads = ii;

                if (!ii) {
                    if (program.verbose) logger.error("No spec files found");
                    process.exit(1);
                }

                for (; i < ii; i += 1) {
                    if (resultBatch[i].length) {
                        mod.runTests(resultBatch[i], checkCB, program);
                    }
                }
            });
        }
    },
    startHTTP: function(program) {
        if (resembleServer) {
            return resembleServer;
        }
        if (program.verbose) logger.info("Creating a server to serve resemble.js");

        var resourcePrefix = path.relative(process.cwd(), __dirname);

        resembleServer = http.createServer(function(req, res) {
            var url = req.url.toString(),
                filename;

            if (url.indexOf('.js') !== -1) {

                filename = path.normalize(path.join(process.cwd(), ("./" + url)));
                fs.readFile(filename, function(err, data) {

                    if (err) {
                        res.writeHead(404);
                        res.end("Error reading file. Check if the file is present");
                    } else {
                        res.setHeader("Content-type", "text/javascript");
                        res.writeHead(200);
                        res.write(data);
                        res.end();
                    }
                });
            } else if (url.indexOf(".png") !== -1) {

                filename = path.normalize(path.join(process.cwd(), ("./" + url)));
                fs.readFile(filename, function(err, data) {
                    if (err) {
                        res.writeHead(404);
                        res.end("Error reading file. Check if the file is present");
                    } else {
                        res.setHeader("Content-type", "image/png");
                        res.writeHead(200);
                        res.end(data, 'binary');
                    }
                });
            } else {
                //console.log("Serving the html page");
                res.write([
                    "<html>",
                    "<head>",
                    "<script type='text/javascript' src='" + resourcePrefix + "/lib/resemble.js'></script>",
                    "<script type='text/javascript' src='" + options.jsSource + "/FusionCharts.js'></script>",
                    "<script type='text/javascript'>",
                    "//FusionCharts.options.scriptBaseUri = '" + options.jsSource + "';",
                    "//FusionCharts.options.html5ScriptNamePrefix = '" + options.mapsPathPrefix + "/FusionCharts.HC.';",
                    "</script>",
                    "</head>",
                    "<body><div id='chart-container'></div><div id='diffHolder'></div></body>",
                    "</html>"
                ].join(""));
                res.end();
            }
        });

        resembleServer.listen(8090);
    },
    stopHTTP: function(program) {
        if (resembleServer) {
            resembleServer.close();
            resembleServer = null;
            if (program.verbose) logger.info("Resemble server closed.");
        }
    },
    setPhantomCount: function(num) {
        options.phantomThreads = num;
    },
    runTests: function(specFileArray, callback, program) {

        var args;

        if (options.saveImages) {
            args = [
                path.normalize(path.resolve(__dirname,"..", "node_modules/phantomjs/bin/phantomjs")),
                path.normalize(path.join(__dirname, "src/phantomrunner.js")),
                specFileArray.join(","),
                options.jsSource,
                "1",
                options.savePath,
                options.overwriteRef,
                options.refImages
            ];
        } else {
            args = [
                path.normalize(path.resolve(__dirname,"..", "node_modules/phantomjs/bin/phantomjs")),
                path.normalize(path.join(__dirname, "src/phantomrunner.js")),
                specFileArray.join(","),
                options.jsSource,
                "0",
                options.savePath,
                options.threshold,
                process.cwd()
            ];
        }

        if (program.verbose) logger.info("Creating instance of phantom");
        //console.log(args);
        var ls = child_process.spawn("node", args, {
            maxBuffer: 700 * 1024 // to increase stdout buffer limit
        });

        ls.stdout.on('data', function(data) {
            data = data.toString().split("\n");

            for (var i = 0, ii = data.length; i < ii; i += 1) {
                if (data[i]) {
                    processPhantomMessage(data[i], program);
                }
            }
        });

        ls.stderr.on('data', function(data) {
            if (program.verbose) logger.error('STDERR: ' + data);
        });

        ls.on('close', function(code) {
            if (callback) {
                callback();
            }
        });
    },
    buildResultHTML: function() {
        var htmlstr = "<html><head></head><body>";
        htmlstr += "<h3>Failing Tests</h3>";
        for (i = 0, ii = out.report.failing.length; i < ii; i += 1) {

            htmlstr += "<div style='border:1px solid red;padding: 5px; margin: 5px;'>";
            htmlstr += '<div>' + out.report.failing[i].id + '</div>';
            htmlstr += "<img src='ref-images/" + out.report.failing[i].id + "-snapshot.png' />";
            htmlstr += "<img src='snapshots/" + out.report.failing[i].id + "-snapshot.png' />";
            htmlstr += "<img src='snapshots/" + out.report.failing[i].id + "-diff.png' />";
            //htmlstr += "<img src='" + process.cwd() + "/" + out.report.failing[i].diff + "' />";
            htmlstr += "</div>";
        }

        htmlstr += "</body></html>";

        fs.writeFileSync(options.specSourceRelative + "japp_mismatch.html", htmlstr);

        htmlstr = "<html><head></head><body>";
        htmlstr += "<h3>Passing Tests</h3>";
        for (i = 0, ii = out.report.passing.length; i < ii; i += 1) {
            htmlstr += "<div style='border:1px solid red;padding: 5px; margin: 5px;'>";
            htmlstr += '<div>' + out.report.passing[i].id + '</div>';
            htmlstr += "<img src='ref-images/" + out.report.passing[i].id + "-snapshot.png' />";
            htmlstr += "<img src='snapshots/" + out.report.passing[i].id + "-snapshot.png' />";
            htmlstr += "</div>";
        }

        htmlstr += "</body></html>";

        fs.writeFileSync(options.specSourceRelative + "japp_match.html", htmlstr);
    },
    help: function() {},
    stop: function() {
        lo
    },
    /** Events to listen to **/
    finished: function(program) {
        var i = 0,
            ii = callbacks.complete.length,
            exitCode = 0;

        for (; i < ii; i += 1) {
            callbacks.complete[i].call();
        }

        if (program.verbose) {
            logger.endTime("full");

            console.log("\nResults\n===========");
            console.log("Total Tests Executed: " + out.total);
            console.log("Tests Passing: " + out.passing);
            console.log("Tests Failing: " + out.failing);
        }

        fs.writeFileSync(options.specSourceRelative + "japp_result.json", JSON.stringify(out, null, 4));

        if (buildComparer) {
            this.buildResultHTML();
        }

        this.stopHTTP(program);

        if (out.total === out.passing) {
            exitCode = 0;
        }

        if (out.failing) {
            exitCode += 1;
        }

        if (out.missing) {
            exitCode += 2;
        }

        if (out.ssfailing) {
            exitCode += 4;
        }

        process.exit(exitCode);
    },
    onEachPass: function() {

    },
    onEachFail: function() {

    },
    onComplete: function() {

    }
};
