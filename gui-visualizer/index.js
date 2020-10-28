// node run.js -m gv -c firefox -h 192.168.0.211:4444 -i https://test.3.froalacharts.net/xt-testing -a browserstack
// node run.js -m gv -c ie -v 8 -i https://test.3.fusioharts.net/xt-testing -a browserstack -l verbose
var program = require('commander'),
    webdriverio = require('webdriverio'),
    express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    resemble = require('node-resemble-js'),
    walk = require('walkdir'),
    shell = require('shelljs/global'),
    TEST_DIR = 'runner',
    specPaths = [],
    resultData = {},
    browserConfiguration,
    UNDEF_OBJ = {
        'undefined': 'undefined'
    },
    UNDEF_STR = 'undefined',
    config = fs.readFileSync('../config.json'),
    specConfig = fs.readFileSync('../spec-config.json'),
    getUndefVal = function (val) {
        return (UNDEF_OBJ[val] === UNDEF_STR) ? UNDEF : val;
    },
    getCleanPath = function (path, sep) {
        sep = sep || '';
        return path.replace(/^(\.\/|\/)/, sep).replace(/\/$/, sep);
    },
    ejs = require('ejs'),
    specs = [],
    reportGenerator = require('../scripts/report-generator.js'),
    count = 1,
    // Default timeout to wait for the images to get loaded.
    TIMEOUT = 10000,
    PRE_TIMEOUT = 50000,
    DEF_TIMEOUT,
    HTML_TEMPLATE,
    paths,
    UNDEF,
    host,
    port,
    ii,
    driverOptions,
    server,
    serverUrl,
    portNumber,
    args,
    writeResults,
    resetResultData,
    timeSeriesData = {},
    timeSeriesSchema = {},
    tsData,
    tsSchema;

function camelCase(str) {
    var rep = function (a, b) {
        return a.toUpperCase();
    };

    return str.replace(/\-/g, ' ')
        .replace(/\//g, ' ')
        .replace(/^(.)/g, rep)
        .replace(/\s(.)/g, rep)
        .replace(/\-(.)/g, rep)
        .replace(/^(..)$/g, rep)
}

try {
    config = JSON.parse(config);
}
catch (err) {
    if (err) {
        console.log('There has been an error parsing your JSON.')
        console.log(err)
    }
}
specConfig = JSON.parse(specConfig);

// Add command line arguments
program
    .option('-s, --specs [string]', 'Specs path')
    .option('-b, --baseline [string]', 'Baseline version')
    .option('-a, --agent [string]', 'Agent where to run the test cases browserstack or selenium')
    .option('-t, --testVersion [string]', 'Test version')
    .option('-l, --logging [string]', 'Level of logging verbosity (verbose) logging')
    .option('-c, --client [string]', 'Browser client. Defaults to firefox')
    .option('-v, --clientversion [string]', 'Browser version, applicable for remote testing only (browserstack or sauselabs)')
    .option('-i, --ip [string]', 'Ip address of the client machine where xt-testing located. eg. http://localhost/xt-testing')
    .option('-h, --host [string]', 'Host address with port of the running Selenium server eg. 192.168.0.1:4444 ')
    .option('-n, --browserConfig [object]', 'all Browser configuration')
    .parse(process.argv);

TIMEOUT = config.imageLoadTimeout || TIMEOUT;
DEF_TIMEOUT = config.defWaitTime || 0;
baseLineSrc = path.join("../../fc-versions", program.baseline, './');
testVersionSrc = path.join("../../fc-versions", program.testVersion, './');

HTML_TEMPLATE = [
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "froalacharts.js'></script>",
   
  
    "<link href='https://fonts.googleapis.com/css?family=Indie+Flower&display=swap' rel='stylesheet'>",
    "<link href='https://fonts.googleapis.com/css?family=Felipa&display=swap' rel='stylesheet'>",
    "<style type='text/css'>",
    "body, html {",
    "overflow-x: hidden;",
    "overflow-y: hidden;",
    "border: none;",
    "}",
    "</style>",
    "<script type='text/javascript'>",
    "__JAVASCRIPT_CODE__",
    "</script>",
    "<script type='text/javascript'>",
    "var jsError;",
    "window.onerror = function (errorMsg, url, lineNumber) {jsError='Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber;}",
    /*
    "FroalaCharts.addEventListener('renderComplete', function(e, a) {",
    "var options = __FC_DATA__",
    "var imgTimeout = /\.jpg|\.jpeg|\.png|\.gif/ig.test(JSON.stringify(options.dataSource)) ? ", TIMEOUT, " : ", DEF_TIMEOUT, ";",
    "setTimeout(function () { document.getElementById('chart-container').innerHTML += '<pre></pre>' }, imgTimeout);",
    "});",
    */
    "FroalaCharts.ready(function () { var salesChart = new FroalaCharts(__FC_DATA__).render('chart-container'); });",
    "</script>",
    "</head>",
    "<body><div id='chart-container'></div>",
    "<div id='console'></div>",
    "</body>",
    "</html>"];

// Get all the spec files
paths = walk.sync(program.specs);
// Default Result json for this browser
resetResultData = function () {
    resultData = {
        "total": 0,
        "jsErrorInFalling": 0,
        "jsErrorInPassing": 0,
        "passing": 0,
        "failing": 0,
        "ssfailing": 0,
        "missing": 0,
        "report": {
            "passing": [],
            "ssfailing": [],
            "failing": [],
            "missing": [],
            "status": ""
        },
        "stdout": []
    };
    return resultData
};

// push out all the results to respective files
writeResults = function (dir, resultData, program, client) {
    // json results
    fs.writeFileSync(path.resolve(dir, 'result-' + client.client + '.json'), JSON.stringify(resultData, 0, 4));
    resultHtmlTpl = fs.readFileSync(path.join(__dirname, '../templates/report-base.tpl'), {
        encoding: 'utf-8'
    });
    // html results
    fs.writeFileSync(path.resolve(dir, 'result-' + client.client + '-passing.html'), ejs.render(resultHtmlTpl,
     {data: resultData.report.passing, config: program, timeSeriesData: timeSeriesData, timeSeriesSchema: timeSeriesSchema}));
    fs.writeFileSync(path.resolve(dir, 'result-' + client.client + '-failing.html'), ejs.render(resultHtmlTpl,
     {data: resultData.report.failing, config: program, timeSeriesData: timeSeriesData, timeSeriesSchema: timeSeriesSchema}));
};

var totalTests = 0,
    totalExecute = 0;
    filterCharts = config.filterCharts || {},
    totalTestCount = 0,
    includes = !Number(filterCharts.includeOrExclude);

filterCharts = filterCharts.charts;

if (filterCharts !== undefined && filterCharts !== "") {
    filterCharts = new RegExp('^(' + filterCharts.replace(/\s*/g, "").replace(/\,/g, '|') + ')$', 'i');
} else {
    filterCharts = undefined;
}
// gather all spec file paths and specs
for (ii = 0; ii < paths.length; ii++) {
    if (/chartsSpec\.json$/.test(paths[ii])) {
        var specData = require(paths[ii]),
            validSpec = 0;
        // If filter test specs is defined
        for (var key in specData) {
            if (filterCharts && filterCharts.test(specData[key].options.type) == includes) {
                delete specData[key];
            } else {
                validSpec += 1;
                totalTestCount += 1;
            }
        }
        if (filterCharts) {
            validSpec && specPaths.push(paths[ii]);
            validSpec && specs.push(specData);
        } else {
            specPaths.push(paths[ii]);
            specs.push(specData);
        }
    }
    if (/chartsSpec-data\.json$/.test(paths[ii])) {
        tsData = require(paths[ii]);
        for(var key in tsData){
            timeSeriesData[key] = tsData[key];
        }
    }
    if (/chartsSpec-schema\.json$/.test(paths[ii])) {
        tsSchema = require(paths[ii]);
        for(var key in tsSchema){
            timeSeriesSchema[key] = tsSchema[key];
        }
    }
}
console.log("specs.length: ", specs.length, " | Total test case: ", totalTestCount);

if (!specs.length) {
    console.log("No test case to be executed...")
    return;
}




// browser client options

/*
if (program.agent == 'saucelabs') {
    driverOptions = {
        host: 'ondemand.saucelabs.com',
        port: '80',
        logLevel: program.logging,
        user: config.sluser,
        key: config.slkey,

        desiredCapabilities: {
            'browser': program.client,
            //'browser_version': '7.0',
            //'os': 'Windows',
            //'os_version': 'XP'
        }
    };
} else if (program.agent == 'browserstack') {
    driverOptions = {
        host: 'hub.browserstack.com',
        port: '80',
        logLevel: program.logging,
        user: config.bsuser,
        key: config.bskey,

        desiredCapabilities: {
            'browser': program.client,
            'browser_version': program.clientversion,
            //'os': 'Windows',
            //'os_version': 'XP',
            'browserstack.local': Boolean(Number(config.browserStackLocalTesting)),
            'browserstack.debug': true,
            'browserstack.user' : config.bsuser,
            'browserstack.key': config.bskey
        }
    };
} else if (host && port) {
    driverOptions.host = host;
    driverOptions.port = port;
}
*/
// Server Url
serverUrl = getCleanPath(program.ip) + "/gui-visualizer/runner/";

// Remove the garbage files, if any, in runner directory
if (fs.existsSync(TEST_DIR)) {
    fs.readdirSync(TEST_DIR).forEach(function (file, index) {
        /^\./.test(file) || fs.unlinkSync(TEST_DIR + "/" + file);
    });
}

/* Create HTML for testing
 * the following block of code accepts creates the HTML file and saves the file at runner direcoty
 * inside gui-visualizer
 */
function createHTML (url) {
    var caseIndex = Number(url.slice(url.indexOf('case') + 4, url.indexOf('spec'))),
        specIndex = Number(url.slice(url.indexOf('spec') + 4, url.indexOf('.html'))),
        testId = Object.keys(specs[specIndex])[caseIndex],
        testCaseObj = specs[specIndex][testId],
        chartData = JSON.stringify(testCaseObj['options']),
        action = testCaseObj['action'],
        actLen = action && action.length,
        scripts = {
            "resizeData": [
                "var chartObj,",
                "    data,",
                "    len = window.resizeData && window.resizeData.length,",
                "    i = 0;",
                "",
                "resizeChart  = function () {",
                "    setTimeout(function () {",
                "        chartObj.resizeTo(data.width,data.height);",
                "        if (i > len) {",
                "            setTimeout(function () {",
                // "                alert('done!');",
                // "                var options = __FC_DATA__,",
                "                var options = " + chartData + ",",
                "                imgTimeout = /\.jpg|\.jpeg|\.png|\.gif/ig.test(JSON.stringify(options.dataSource)) ? ", TIMEOUT, " : ", DEF_TIMEOUT, ";",
                "                setTimeout(function () {",
                "                    document.getElementById('chart-container').innerHTML += '<pre></pre>'",
                "                }, imgTimeout);",
                "            }, 1000)",
                "        }",
                "    }, 1000);",
                "}",

                "FroalaCharts.addEventListener('renderComplete', function (e, a) {",
                // "    alert(i)",
                //"    i++;",
                "    chartObj = e.sender;",
                "    data = resizeData[i];",

                "    FroalaCharts.addEventListener('resized', function (e, a) {",
                "        i++;",
                "        chartObj = e.sender;",
                "        data = resizeData[i];",

                "        if (i < len) {",
                "            resizeChart();",
                "        } else {",
                "        }",
                "    });",
                "    if (i < len && a.drawCount == 1) {",
                "        resizeChart();",
                "    }",
                "});"
            ],
            "updateData": [
                "var chartObj,",
                "    data,",
                "    len = window.updateData && window.updateData.length,",
                "    i = 0;",
                "",
                "updateChartData  = function () {",
                "    setTimeout(function () {",
                "        chartObj.setJSONData(data);",
                "        if (i > len) {",
                "            setTimeout(function () {",
                // "                alert('done!');",
                // "                var options = __FC_DATA__,",
                "                var options = " + chartData + ",",
                "                imgTimeout = /\.jpg|\.jpeg|\.png|\.gif/ig.test(JSON.stringify(options.dataSource)) ? ", TIMEOUT, " : ", DEF_TIMEOUT, ";",
                "                setTimeout(function () {",
                "                    document.getElementById('chart-container').innerHTML += '<pre></pre>'",
                "                }, imgTimeout);",
                "            }, 1000)",
                "        }",
                "    }, 1000);",
                "}",

                "FroalaCharts.addEventListener('renderComplete', function (e, a) {",
                // "    alert(i)",
                //"    i++;",
                "    chartObj = e.sender;",
                "    data = updateData[i];",

                "    FroalaCharts.addEventListener('dataupdated', function (e, a) {",
                "        i++;",
                "        chartObj = e.sender;",
                "        data = updateData[i];",

                "        if (i < len) {",
                "            updateChartData();",
                "            // setTimeout(updateChartData, 1000);",
                "        } else {",
                "        }",
                "    });",
                "    if (i < len && a.drawCount == 1) {",
                "        updateChartData();",
                "        // setTimeout(updateChartData, 1000);",
                "    }",
                "});"
            ],
            "default": [
                "var options = '__FC_DATA__',",
                "    imgTimeout = /\.jpg|\.jpeg|\.png|\.gif/ig.test(JSON.stringify(options.dataSource)) ? ", TIMEOUT, " : ", DEF_TIMEOUT, ";",
                "setTimeout(function () { document.getElementById('chart-container').innerHTML += '<pre></pre>' }, imgTimeout);"
            ],
            "timeseries": [
                "var options = " + chartData + ",",
                "    tsData = " + JSON.stringify(timeSeriesData[testCaseObj['options']['data-id']]) + ",",
                "    tsSchema = " + JSON.stringify(timeSeriesSchema[testCaseObj['options']['schema-id']]) + ",",
                "    dataTable = new FroalaCharts.DataStore().createDataTable(tsData, tsSchema);",
                "options.dataSource.data = dataTable;",
				
                "FroalaCharts.addEventListener('renderComplete', function(e, a) {",
                "   document.getElementById('chart-container').innerHTML += '<pre></pre>'",
                "});",
            ],
            "timeseries-update": [
                "var options = " + chartData + ",",
                "    tsData = " + JSON.stringify(timeSeriesData[testCaseObj['options']['data-id']]) + ",",
                "    tsSchema = " + JSON.stringify(timeSeriesSchema[testCaseObj['options']['schema-id']]) + ",",
                "    dataTable = new FroalaCharts.DataStore().createDataTable(tsData, tsSchema),",
                "    updateDataTable = new FroalaCharts.DataStore().createDataTable(updateData, updateSchema);",
                "options.dataSource.data = dataTable;",
                "updateDataSource.data = updateDataTable;",
                "FroalaCharts.addEventListener('renderComplete', function(eventObj, dataObj) {",
                "    if (dataObj.drawCount === 1) {",
                "        setTimeout(function(){eventObj.sender.setJSONData(updateDataSource);}, 1500)",
                "    } else if (dataObj.drawCount === 2) {",
                // "        document.getElementById('chart-container').innerHTML += '<pre></pre>';",
                "        setTimeout(function(){document.getElementById('chart-container').innerHTML += '<pre></pre>';}, 1500)",
                "    }",
                "});",
            ],
            "timeseries-resize": [
                "var options = " + chartData + ",",
                "    tsData = " + JSON.stringify(timeSeriesData[testCaseObj['options']['data-id']]) + ",",
                "    tsSchema = " + JSON.stringify(timeSeriesSchema[testCaseObj['options']['schema-id']]) + ",",
                "    dataTable = new FroalaCharts.DataStore().createDataTable(tsData, tsSchema);",
                "options.dataSource.data = dataTable;",
                "FroalaCharts.addEventListener('renderComplete', function(eventObj, dataObj) {",
                "    FroalaCharts.addEventListener('resized', function (e, a) {",
                "       setTimeout(function(){document.getElementById('chart-container').innerHTML += '<pre></pre>';}, 1500)",
                "    });",
                "    setTimeout(function(){eventObj.sender.resizeTo(resizeWidth, resizeHeight);}, 1500)",
                "});",
            ]
        },
        script = [
            "var options = '__FC_DATA__',",
            "    imgTimeout = /\.jpg|\.jpeg|\.png|\.gif/ig.test(JSON.stringify(options.dataSource)) ? ", TIMEOUT, " : ", DEF_TIMEOUT, ";",
            "setTimeout(function () { document.getElementById('chart-container').innerHTML += '<pre></pre>' }, imgTimeout);"
        ],
        dataToUpdate = false,
        chartToResize = false,
        i,
        res,
        isTimeSeries = (testCaseObj['options']['type'] === 'timeseries');

    
    /* data modification for theme test */
    if(specConfig.themeUpdateTest){
        /* alter data for the target case */
        if (/testcase/.test(url)) {
            chartData = JSON.parse(chartData);
            chartData.dataSource = JSON.stringify(action[0].updateData[0]); // replace the rendering dataSource with update data
            chartData = JSON.stringify(chartData);
            action = false; // remove the action array so that update doesn't happen for the target case
        }
    }
    /* end of data modification for theme test */
    if (!isTimeSeries && action) {
        for (i = 0; i < actLen; i ++) {
            if (action[i].updateData) {
                dataToUpdate = true;
               // !(/base/.test(url))&&action[i].updateData.push(testCaseObj['options'].dataSource);
                script = scripts.updateData.unshift("var updateData = " + JSON.stringify(action[i].updateData, null, 2) + ";");
                script = scripts.updateData;
            }
            if (action[i].resizeData) {
               chartToResize = true;
               // !(/base/.test(url))&&action[i].updateData.push(testCaseObj['options'].dataSource);
               script = scripts.resizeData.unshift("var resizeData = " + JSON.stringify(action[i].resizeData, null, 2) + ";");
               script = scripts.resizeData;
           }
        }
    }
    if (!dataToUpdate && !chartToResize) {
        script = scripts.default;
    }
    /* modify data for timeseries */
    if(isTimeSeries){
        chartData = 'options';
        script = scripts.timeseries;
        if(action){
            if(action['updateData']){
                script = scripts['timeseries-update'].unshift("var updateData = " + JSON.stringify(timeSeriesData[testCaseObj['action']['updateData']['data-id']]) + ", updateSchema = " + JSON.stringify(timeSeriesSchema[testCaseObj['action']['updateData']['schema-id']]) + ', updateDataSource = ' + JSON.stringify(action['updateData']['dataSource']) + ';');
                script = scripts['timeseries-update'];
            }
            if(action['resizeData']){
                script = scripts['timeseries-resize'].unshift("var resizeWidth = " + JSON.stringify(action['resizeData']['width']) + ', resizeHeight = ' + JSON.stringify(action['resizeData']['height']) + ';');
                script = scripts['timeseries-resize'];
            }
        }
    }
    /* modify data for timeseries - end */
    

    if (/base/.test(url)) {
        res = HTML_TEMPLATE.join("\n").replace(/__FC_FILE_PATH__/g, baseLineSrc)
            .replace(/__FC_DATA__/g, chartData)
            .replace(/__JAVASCRIPT_CODE__/g, script.join("\n"));
    } else if (/test/.test(url)) {
        res = HTML_TEMPLATE.join("\n").replace(/__FC_FILE_PATH__/g, testVersionSrc)
            .replace(/__FC_DATA__/g, chartData)
            .replace(/__JAVASCRIPT_CODE__/g, script.join("\n"));
    }
    url = url.split(/\//);
    fs.writeFileSync('./' + TEST_DIR + '/' + url[url.length - 1], res);
}

// Start the browser through selenium web driver


/* Launcher function for everything except the server
* this controls all the actions performed by this module except launching the server
* it spawns a new browser client and visits the base line version url
* takes a screenshot after the chart has rendered
* then navigates to the test version url
* again waits for the chart to render and takes a screenshot
* these two screenshots are saved in ref-images and snapshots folder respectively
* using resemblejs, it compares the two screenshots and generates a diff image
* if the images have some difference, the test case is deemed to have been failed
* it performs the above steps for all test cases and creates a cummulative report
*/
var launcher = function(caseCounter, specCounter, client, driverOptions, browserName, resultData, count) {
   

    var spec = specs[specCounter],
        dir = path.dirname(specPaths[specCounter]),
        testId = Object.keys(spec)[caseCounter],
        testDescription,
        chartType,
        width,
        height,
        urls = {
            base: serverUrl +browserName.client+ 'base' + 'case' + caseCounter + 'spec' + specCounter + '.html',
            test: serverUrl +browserName.client+ 'test' + 'case' + caseCounter + 'spec' + specCounter + '.html',
        },
        jsErrorInBase = [],
        jsErrorInTarget = [];
    
    
    console.log(' ');
    console.log(' ');
    console.log("Running : in Browser ",browserName.client, count++, " of ", totalTestCount);
    console.log("id: ", testId);
    testDescription = spec[testId].description,
    chartType = spec[testId].options.type,
    width = spec[testId].options.width,
    height = spec[testId].options.height,
    console.log(testDescription);
    console.log("specPaths: ", specPaths[specCounter].split(/gui\-visualizer/)[1]);

    // check if image saving folders exist
    fs.existsSync(path.resolve(dir, 'ref-images')) || fs.mkdirSync(path.resolve(dir, 'ref-images'));

    fs.existsSync(path.resolve(dir, 'snapshots')) || fs.mkdirSync(path.resolve(dir, 'snapshots'));

    // Create HTML file for testing in "gui-visualizer/runner" folder
    createHTML(urls.base);
    createHTML(urls.test);

    //run browser client and load tests
    client
        // Render base version of chart in the browser
        .url(urls.base)
        .waitForExist('pre', PRE_TIMEOUT, function(err) {
            if (err) console.log(err);
        })
        .execute(function(){
            return jsError || null;
        }).then(function(log) {
            if(log.value!=null)
            jsErrorInBase.push(log.value);
            
        })
        .saveScreenshot(path.resolve(dir, 'ref-images', browserName.client + '-' + testId + '.png'))
        // Render target/test version of chart in the browser

        .url(urls.test)
        .waitForExist('pre', PRE_TIMEOUT, function(err) {
            if (err) console.log(err);
        })
        .execute(function(){
            return jsError || null;
        }).then(function(log) {
             if(log.value!=null)
            jsErrorInTarget.push(log.value);
            
        })
        .saveScreenshot(path.resolve(dir, 'snapshots', browserName.client + '-' + testId + '.png'))
        // On the call back function compare the two screenshots
        .call(function() {
            // Delete the generated HTML file
            fs.unlinkSync(TEST_DIR + '/'+browserName.client+'base' + 'case' + caseCounter + 'spec' + specCounter + '.html');
            fs.unlinkSync(TEST_DIR + '/'+browserName.client+'test' + 'case' + caseCounter + 'spec' + specCounter + '.html');

            //compare the two screenshots using resemble
            resemble(fs.readFileSync(path.resolve(dir, 'ref-images', browserName.client + '-' + testId + '.png')))
                .compareTo(fs.readFileSync(path.resolve(dir, 'snapshots', browserName.client + '-' + testId + '.png')))
                .onComplete(function(data) {

                    var diffImage = data.getDiffImage(),
                        pngfs = fs.createWriteStream(path.resolve(dir, 'snapshots', browserName.client + '-' + testId + '-diff.png'));

                    diffImage._packer.pipe(pngfs);
                    data.getDiffImage().pack();

                    console.log('Mismatch: ' + data.misMatchPercentage + '%');
                    // resultData=resetResultData();
                    //console.log(caseCounter);
                    resultData["total"] += 1;
                    // console.log("......................................");
                    //     console.log(resultData);
                    chartData = {};
                    chartData = JSON.stringify(specs[specCounter][Object.keys(specs[specCounter])[caseCounter]]['options'].dataSource).replace(/\n/g, '');
                    var tsDataId,
                        tsSchemaId;
                    try{
                        tsDataId = specs[specCounter][Object.keys(specs[specCounter])[caseCounter]]['options']['data-id'];
                        tsSchemaId = specs[specCounter][Object.keys(specs[specCounter])[caseCounter]]['options']['schema-id'];
                    }catch(err){

                    }
                    // check if there is any mismatch and store the result accordingly
                    if (data.misMatchPercentage > 0) {
                        resultData["failing"] += 1;
                        var fail = {
                            id: testId,
                            description: testDescription,
                            type: chartType,
                            width:width,
                            height:height,
                            path: dir,
                            chartData: chartData,
                            tsDataId: tsDataId,
                            tsSchemaId: tsSchemaId,
                            mismatch: data.misMatchPercentage,
                            snapshot: 'snapshots/' + browserName.client + '-' + testId + '.png',
                            refpath: 'ref-images/' + browserName.client + '-' + testId + '.png',
                            diff: 'snapshots/' + browserName.client + '-' + testId + '-diff.png',
                            jsErrorInBase: jsErrorInBase,
                            jsErrorInTarget: jsErrorInTarget
                        };
                        if (fail.jsErrorInBase.length > 0 || fail.jsErrorInTarget.length > 0) {
                            resultData["jsErrorInFalling"] += 1;
                        }
                        resultData['report']['failing'].push(fail);
                    } else {
                        resultData['passing'] += 1;
                        var pass = {
                            id: testId,
                            description: testDescription,
                            type: chartType,
                            width:width,
                            height:height,
                            path: dir,
                            chartData: chartData,
                            tsDataId: tsDataId,
                            tsSchemaId: tsSchemaId,
                            mismatch: data.misMatchPercentage,
                            snapshot: 'snapshots/' + browserName.client + '-' + testId + '.png',
                            refpath: 'ref-images/' + browserName.client + '-' + testId + '.png',
                            diff: 'snapshots/' + browserName.client + '-' + testId + '-diff.png',
                            jsErrorInBase: jsErrorInBase,
                            jsErrorInTarget: jsErrorInTarget
                        };
                        if (pass.jsErrorInBase.length > 0 || pass.jsErrorInTarget.length > 0) {
                            resultData["jsErrorInPassing"] += 1;
                        }
                        resultData['report']['passing'].push(pass);

                    }

                    // continue with next spec if the file has not ended

                    if ((caseCounter + 1) < Object.keys(spec).length) {
                        //console.log(caseCounter, Object.keys(spec).length, specCounter);

                        //restart browser client to every 10 test cases

                       if (caseCounter != 0 && caseCounter % 10 == 0 ) {
                            client.end();
                            client = webdriverio.remote(driverOptions);
                            client.init();
                        }

                        launcher(caseCounter + 1, specCounter, client, driverOptions, browserName, resultData, count);
                    } else if (specCounter + 1 < specPaths.length) {

                        // write results
                        writeResults(dir, resultData, program, browserName);


                        //relaunch browser client to clear memory

                        client.end();
                        client = webdriverio.remote(driverOptions);
                        client.init();

                        resultData=resetResultData();

                        specCounter += 1;
                        launcher(0, specCounter, client, driverOptions, browserName, resultData, count);
                    } else {
                        client.end();
                        //server.close();
                        // write results
                        writeResults(dir, resultData, program, browserName);

                        // Generate master report
                        reportGenerator.processDir(program.specs, browserName.client, camelCase(program.specs.replace('tests/', ''))
                         + ' on ' + camelCase(browserName.client));
                    }
                });
        });
};

// call the main client launcher function

browserConfiguration=config.nodeConfig;
for(var nodeNumber=0;nodeNumber<browserConfiguration.length;nodeNumber++){

    driverOptions = {
        host : browserConfiguration[nodeNumber].host,
        port : browserConfiguration[nodeNumber].port,
        desiredCapabilities: {
            browserName:browserConfiguration[nodeNumber].client
        }
    };

    var client = webdriverio.remote(driverOptions);
    client.init();
    launcher(0, 0, client, driverOptions, {
        client:browserConfiguration[nodeNumber].browserName
    },resetResultData(), count);
}

