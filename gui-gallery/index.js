// node run.js -m gv -c firefox -h 192.168.0.211:4444 -i https://test.3.fusioncharts.net/xt-testing -a browserstack
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
    UNDEF_OBJ = {
        'undefined': 'undefined'
    },
    UNDEF_STR = 'undefined',
    config = fs.readFileSync('../config.json'),
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
    TIMEOUT = 1000,
    galleryList = fs.readFileSync('./gallerylist.json'),
    DEF_TIMEOUT,
    HTML_TEMPLATE,
    paths,
    UNDEF,
    host,
    port,
    ii,
    driverOptions,
    server,
    client,
    serverUrl,
    portNumber,
    args,
    writeResults,
    RESET_BROWSER,
    isIE,
    resetResultData;

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

try {
    galleryList = JSON.parse(galleryList);
}
catch (err) {
    if (err) {
        console.log('There has been an error parsing your galleryList JSON.')
        console.log(err)
    }
}

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
    .parse(process.argv);

TIMEOUT = config.imageLoadTimeout || TIMEOUT;
DEF_TIMEOUT = config.defWaitTime || 0;

if (program.host) {
    host = program.host.split(':');
    port = host[1];
    host = host[0];
}

// Default Result json for this browser
resetResultData = function () {
    resultData = {
        "total": 0,
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
};

// push out all the results to respective files
writeResults = function (dir, resultData) {
    // json results
    fs.writeFileSync(path.resolve(dir, 'result-' + program.client + '.json'), JSON.stringify(resultData, 0, 4));
    resultHtmlTpl = fs.readFileSync(path.join(__dirname, '../templates/report-base.tpl'), {
        encoding: 'utf-8'
    });
    // html results
    fs.writeFileSync(path.resolve(dir, 'result-' + program.client + '-passing.html'), ejs.render(resultHtmlTpl,
     resultData.report.passing));
    fs.writeFileSync(path.resolve(dir, 'result-' + program.client + '-failing.html'), ejs.render(resultHtmlTpl,
     resultData.report.failing));
};

var galleryToTest = "charts";
var baseURLs = galleryList[galleryToTest];
var targetURLs = baseURLs;

console.log("baseURLs.length: ", baseURLs.length, " | Total test case: ", targetURLs.length);

if (!baseURLs.length && baseURLs.length !== targetURLs.length) {
    console.log("No test case to be executed...")
    return;
}

// browser client options
driverOptions = {
    logLevel: program.logging,
    desiredCapabilities: {
        browserName: program.client
    }
};

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


// Start the browser through selenium web driver
var client = webdriverio.remote(driverOptions);
client.init();



var launcher = function (index) {
    var baseURL = galleryList.base + baseURLs[index],
        targetURL = galleryList.target + targetURLs[index],
        dir = './results/';

    console.log("");
    console.log("Test Case # ", index + 1);
    // check if image saving folders exist
    fs.existsSync(path.resolve(dir)) || fs.mkdirSync(path.resolve(dir));
    fs.existsSync(path.resolve(dir, 'ref-images')) || fs.mkdirSync(path.resolve(dir, 'ref-images'));
    fs.existsSync(path.resolve(dir, 'snapshots')) || fs.mkdirSync(path.resolve(dir, 'snapshots'));

    //run browser client and load tests
    client
        // Render base version of chart in the browser
        .url(baseURL)
        //.setValue('#lst-ib', 'FusionCharts gallery and jsfiddle')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
        })
        .saveScreenshot(path.resolve(dir, 'ref-images', program.client + '-' + index + '.png'))
        // Render target/test version of chart in the browser
        .url(targetURL)
        //.setValue('#lst-ib', 'Selenium test for FusionCharts gallery and jsfiddle')
        .getTitle().then(function(title) {
            console.log('Title is: ' + title);
            // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
        })
        .saveScreenshot(path.resolve(dir, 'snapshots', program.client + '-' + index + '.png'))
        // On the call back function compare the two screenshots
        .call(function() {
            //compare the two screenshots using resemble            
            resemble(fs.readFileSync(path.resolve(dir, 'ref-images', program.client + '-' + index + '.png')))
                .compareTo(fs.readFileSync(path.resolve(dir, 'snapshots', program.client + '-' + index + '.png')))
                .onComplete(function(data) {

                    var diffImage = data.getDiffImage(),
                        pngfs = fs.createWriteStream(path.resolve(dir, 'snapshots', program.client + '-' + index + '-diff.png'));

                    diffImage._packer.pipe(pngfs);
                    data.getDiffImage().pack();

                    console.log('Mismatch: ' + data.misMatchPercentage + '%');
                    //console.log(caseCounter);
                    resultData["total"] += 1;
                    chartData = {};

                    // check if there is any mismatch and store the result accordingly
                    if (data.misMatchPercentage > 0) {
                        resultData["failing"] += 1;
                        var fail = {
                            id: index,
                            path: dir,
                            chartData: chartData,
                            mismatch: data.misMatchPercentage,
                            snapshot: 'snapshots/' + program.client + '-' + index + '.png',
                            refpath: 'ref-images/' + program.client + '-' + index + '.png',
                            diff: 'snapshots/' + program.client + '-' + index + '-diff.png'
                        };
                        resultData['report']['failing'].push(fail);
                    } else {
                        resultData['passing'] += 1;
                        var pass = {
                            id: index,
                            path: dir,
                            chartData: chartData,
                            mismatch: data.misMatchPercentage,
                            snapshot: 'snapshots/' + program.client + '-' + index + '.png',
                            refpath: 'ref-images/' + program.client + '-' + index + '.png',
                            diff: 'snapshots/' + program.client + '-' + index + '-diff.png'
                        };
                        resultData['report']['passing'].push(pass);
                    }

                    // continue with next spec if the file has not ended
                    if (index + 1 < baseURLs.length) {
                        //restart browser client to every 10 test cases
                       if (index != 0 && (index + 1) % 10 == 0 ) {
                            client.end();
                            if (isIE) {
                                setTimeout(function () {
                                    client = webdriverio.remote(driverOptions);
                                    client.init();
                                    launcher(index + 1);
                                }, 3000);
                            } else {
                                client = webdriverio.remote(driverOptions);
                                client.init();
                                launcher(index + 1);
                            }
                        } else {
                            launcher(index + 1);
                        }
                    } else {
                        client.end();
                        // write results
                        writeResults(dir, resultData);

                        // Generate master report
                        // reportGenerator.processDir("./images", program.client, camelCase(program.specs.replace('tests/', ''))
                        //  + ' on ' + camelCase(program.client));
                    }
                });
        });
}

resetResultData();

// call the main client launcher function
launcher(0);