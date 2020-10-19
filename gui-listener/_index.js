var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path'),
    fs = require('fs'),
    webdriverio = require('webdriverio'),
    program = require('commander'),
    walk = require('walkdir'),
    TEST_DIR = 'runner',
    eSpecPaths = ["setJSONUrl", "setXMLUrl", "setChartDataUrlXML", "setChartDataUrlJSON", "setJSONData", "setXMLData"],
    dataLoadTests = ["setJSONUrl", "setXMLUrl", "setChartDataUrlXML", "setChartDataUrlJSON", "setJSONData", "setXMLData"],
    eventSpecs = {},
    eventResult = {},
    dataloadResult = {},
    ejs = require('ejs'),
    host,
    port;


//Receive input for the following command line arguments
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

if (program.host) {
    host = program.host.split(':');
    port = host[1];
    host = host[0];
}

serverUrl = (program.ip || 'http://localhost/xt-testing') + '/gui-listener/' + TEST_DIR + '/';

testVersionSrc = path.join("../../fc-versions", program.testVersion, './');

HTML_TEMPLATE = [
        "<html>",
        "<head>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.charts.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.powercharts.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.widgets.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.msstackedcombidy2d.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.gantt.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "fusioncharts.maps.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "maps/fusioncharts.usa.js'></script>",
        "<script type='text/javascript' src='" + "__FC_FILE_PATH__" + "maps/fusioncharts.world.js'></script>",
        "<script type='text/javascript' src='" + "../assets/socketio.js" + "'></script>",
        "<script type='text/javascript'>",
        "__SCRIPT__",
        "</script>",
        "</head>",
        "<body><div id='chart-container'></div></body>",
        "</html>"
    ];

function createHTML (url, res) {

    if (/\.js$/.test(url)) {
        var eventSpec = require(url),
            eventList = eventSpec["events"],
            chartData = JSON.stringify(eventSpec["data"]),
            listenerStr = "",
            script =[
                "var socket = io();",
                "__FC_LISTENER_DATA__",
                "FusionCharts.addEventListener('renderComplete', function() {",
                "var mTag = document.createElement('pre');",
                "document.getElementById('chart-container').appendChild(mTag);",
                "});",
                "FusionCharts.ready(function () {",
                " var testChart = new FusionCharts( __FC_DATA__ ) .render('chart-container');",
                "});"
            ],
            html,
            filename;

        //generate the html string for adding an event listener and emitting the event options that are expected by the spec
        for (i in eventList) {
            listenerStr += "\nFusionCharts.addEventListener('" + i + "', function (opts, args) {\nsocket.emit('event', window.location.pathname + 'url' + opts.eventType + 'opts'";

            if (eventList[i]["params"] !== "noparams") {
                var eveParams = eventList[i]["params"];
                
                for (param in eveParams) {
                    listenerStr += "+ '" + param + "'";
                    listenerStr += "+ '!^!' + args." + param + "+ '!^!'";
                }
            } else {
                listenerStr += "+ 'noparams'";
            }
            listenerStr += ");\n});\n";
        }

        script = script.join("\n").replace(/__FC_LISTENER_DATA__/g, listenerStr)
            .replace(/__FC_DATA__/g, chartData);

        html = HTML_TEMPLATE.join("\n").replace(/__FC_FILE_PATH__/g, testVersionSrc)
            .replace(/__SCRIPT__/g, script);
    } else {
        var loadType = url,
            jData = JSON.stringify(require(path.resolve("gui-listener/specs/dataload/Column2D/Data2.json"))),
            xData = fs.readFileSync(path.resolve("gui-listener/specs/dataload/Column2D/Data1.xml"), 'utf8'),
            dataloadstr = "",
            script =[
                "var socket = io();",
                "FusionCharts.ready(function () {",
                "FusionCharts.addEventListener('renderComplete', function() {",
                " var dataLoaded = (FusionCharts.items.myChart.options.dataSource != '') ? true : false;",
                "socket.emit('dataload', '__DATA_LOAD__!^!' + dataLoaded );",
                "var mTag = document.createElement('pre'); document.getElementById('chart-container').appendChild(mTag);});",
                "var myChart = new FusionCharts( 'column2d','myChart','400', '400', '0');",
                "__FC_DATA__",
                "myChart.render('chart-container');",
                "});"
            ];

        switch (loadType) {
            case "setJSONUrl":
                dataloadstr = "myChart.setJSONUrl('../specs/dataload/Column2D/Data2.json');";
                break;
            case "setXMLUrl":
                dataloadstr = "myChart.setXMLUrl('../specs/dataload/Column2D/Data1.xml');";
                break;
            case "setChartDataUrlJSON":
                dataloadstr = "myChart.setChartDataUrl('../specs/dataload/Column2D/Data2.json', 'jsonurl');";
                break;
            case "setChartDataUrlXML":
                dataloadstr = "myChart.setChartDataUrl('../specs/dataload/Column2D/Data1.xml', 'xmlurl');";
                break;
            case "setJSONData":
                dataloadstr += "var jsondata = '" + jData + "';";
                dataloadstr += "myChart.setJSONData(jsondata);";
                break;
            case "setXMLData":
                dataloadstr += "var xmldata = '" + xData + "';";
                dataloadstr += "myChart.setXMLData(xmldata);";
                break;
        }

        script = script.join('\n').replace(/__FC_DATA__/g, dataloadstr)
            .replace(/__DATA_LOAD__/g, loadType);

        html = HTML_TEMPLATE.join("\n").replace(/__FC_FILE_PATH__/g, testVersionSrc)
            .replace(/__SCRIPT__/g, script);
    }

    fs.writeFileSync('./gui-listener/' + TEST_DIR + '/' + 'index.html', html);

}

//Store all paths to event testing specs and their content in local variables
var paths = walk.sync(path.join("gui-listener/specs", "/events/")),
    i = 0;
for (i = 0; i < paths.length; i++) {
    if (paths[i].slice(-2) == 'js') {
        eSpecPaths.unshift(paths[i]);
        var es = require(paths[i]);
        eventSpecs[path.basename(paths[i], ".js")] = es;
    }
};

/* Socket connection for listening to chart web page
 * the socketio on the web page emits data for each test case.
 * handlers are added for type of data emitted.
 * for example for "event", then the data emitted is consumed to populate event results object.
 * event data is broken down to extract params and then check them with expected values.
 * only event and dataload emissions are captured right now.
 * additional api testing can be added in a similar fashion.
 */
io.on('connection', function(socket) {
    socket.on('event', function(msg) {
        var specName = msg.slice(msg.indexOf("&") + 1, msg.indexOf("url")),
            eventName = msg.slice(msg.indexOf("url") + 3, msg.indexOf("opts"));
        console.log(specName + " " + eventName + " triggered");
        if (typeof eventResult[specName] === "undefined") {
            eventResult[specName] = eventSpecs[specName]["events"];
            eventResult[specName]["failing"] = eventResult[specName]["total"] = Object.keys(eventSpecs[specName]["events"]).length;
            eventResult[specName]["passing"] = 0;
        }

        if (eventResult[specName][eventName]["triggered"] != true) {
            console.log(eventResult[specName]["passing"], specName, eventName);
            eventResult[specName][eventName]["triggered"] = true;
            eventResult[specName]["passing"] += 1;
            eventResult[specName]["failing"] -= 1;
        }

        if (msg.indexOf("noparams") === -1) {
            msg = msg.slice(msg.indexOf("opts") + 4).trim();
            msg = msg.split("!^!");

            for (ii = 0; ii < msg.length; ii = ii + 2) {
                if (msg[ii + 1] !== undefined) {
                    var expected = eventSpecs[specName]["events"][eventName]["params"][msg[ii]],
                        received = msg[ii + 1];
                    eventResult[specName][eventName]["params"][msg[ii]] = (expected == received) ? true : received;
                }
            }
        } else {
            eventResult[specName][eventName]["params"] = "noparams";
        }
    });

    socket.on('dataload', function(msg) {
        console.log(msg);
        var ltype = msg.slice(0, msg.indexOf("!^!"));
        dataloadResult[ltype] = msg.slice(msg.indexOf("!^!") + 3);
    });
});

//Start server on the specified port
//http.listen(program.port || 3000, function() {
//    console.log('listening on *:', program.port || "3000");
//});

//Initiate client browser
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

var client = webdriverio.remote(driverOptions);
client.init();

/* Run events & api testing
* this is a recursive function which runs until all event test specs are run
* eventTester function contains dataload method testing as well
* this function controls the actions performed by the client browser
* mainly it just visits urls linked to test cases
* after visiting the url it waits for "pre" tag to exist which happens only when the chart has rendered
*/
var eventTester = function(esPaths, spcntr) {
    var eventSpec,
        eventList,
        wait = program.waittime || 100000;

    // Event test
    if (/\.js$/.test(esPaths[spcntr])) {
        eventSpec = require(path.resolve(esPaths[spcntr]));
        eventList = eventSpec["events"];
    }

    createHTML(esPaths[spcntr]);

    //events testing
    //visit url linked to each event test case
    client
        .url(serverUrl + 'index.html')
        .waitForExist('pre', wait, function(err) {
            if (err)  {
                console.log(err);
                return;
            } else {
                if (eventList) {
                    for (var i in eventList) {
                        //perform user interactions specified in the test case
                        if (eventList[i]["actions"]) {
                            var actionList = eventList[i]["actions"],
                                selectorType = "";
                            selectorType = (arguments["1"] != null) ? "svgtarget" : "vmltarget";
                            for (j = 0; j < actionList.length; j++) {
                                eval('client.' + actionList[j]["type"] + '("' + actionList[j][selectorType] + '")');
                            }
                        }
                    }
                }
            }
        })
        .call(function() {
            spcntr++;
            if (esPaths.length > spcntr) {
                eventTester(esPaths, spcntr);
            }
        })
        .end(function() {
            //create collective result objects
            eventResult["total"] = 0;
            eventResult["passing"] = 0;
            eventResult["failing"] = 0;
            for (i in eventResult) {
                if (typeof eventResult[i] === "object") {
                    eventResult["total"] += eventResult[i]["total"];
                    eventResult["passing"] += eventResult[i]["passing"];
                    eventResult["failing"] += eventResult[i]["failing"];
                }
            }

            var dTotal = Object.keys(dataloadResult).length,
                dPassing = 0,
                dFailing = dTotal;

            for (i in dataloadResult) {
                if (dataloadResult[i] === "true") {
                    dPassing += 1;
                    dFailing -= 1;
                }
            }

            var dLoadResult = {},
                eLoadResult = {},
                dtpl = fs.readFileSync(path.join(__dirname, './assets/dataload-results.tpl'), {
                    encoding: 'utf-8'
                });

            dLoadResult["total"] = dTotal;
            dLoadResult["passing"] = dPassing;
            dLoadResult["failing"] = dFailing;
            dLoadResult["details"] = dataloadResult;

            //write results to json and html
            fs.writeFileSync("gui-listener/results/events-result.json", JSON.stringify(eventResult, "\n", "\t"));
            fs.writeFileSync("gui-listener/results/dataload-result.json", JSON.stringify(dLoadResult, "\n", "\t"));
            fs.writeFileSync("gui-listener/results/dataload-result.html", ejs.render(dtpl, dLoadResult));
        });
};

//the main testing function which controls the client
eventTester(eSpecPaths, 0);
