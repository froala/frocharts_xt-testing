var path = require('path'),
    walk = require('walkdir'),
    childProcess = require('child_process'),
    phantomjs = require('phantomjs'),
    fs = require('fs'),
    events = require('./specs/events/spec'),
    outDir = path.join(__dirname, '/results/'),
    eventsResultFile = path.join(__dirname, '/results/events-result.json'),
    dataLoadResultFile = path.join(__dirname, '/results/dataload-result.json'),
    eventsResultHtml = path.join(__dirname, '/results/events-result.html'),
    dataLoadResultHtml = path.join(__dirname, '/results/dataload-result.html'),
    htmlString = '',
    i,
    ejs = require('ejs');

!fs.existsSync(outDir) && fs.mkdirSync(outDir);
var eventspecs = Object.keys(events),
    eventSpecCount = 0,
    passingCount = 0,
    failingCount,
    eventResults = {},
    eventsTpl;

// Calculate event spec count, the count can be calculated as a part of execution, 
// but if for some reason the execution fails, the count will be incorrect.
for (i = 0 ; i < eventspecs.length; i++){
    eventSpecCount +=  Object.keys(events[eventspecs[i]]).length;
}


var eventTest = function(chart, jj) {
    var chartSpec = events[chart],
        lastevent = chartSpec["lastevent"],
        chartEventCount = 0,
        chartPassingCount = 0,
        chartFailingCount = 0;
    delete chartSpec["lastevent"];

    console.log(chart + " event test initiated");
    // Link to run in phantomjs
    var href = 'specs/events/' + chart + '.html';

    // Arguments for child process of node
    var childArgs = [
        path.join(__dirname, 'src/phantom.js'),
        href,
        'events',
        JSON.stringify(events[path.basename(href, '.html')], null, 4),
        lastevent
    ];
    // Count the number of Events to test for based on the spec file
    eventKeys = Object.keys(chartSpec);
    chartEventCount = eventKeys.length;
    
    // Run the child process
    var eproc = childProcess.execFile(phantomjs.path, childArgs, function(err, stdout, stderr) {});

    // Log the phantom output on the console
    eproc.stdout.on('data', function(data) {
        data = data.trim().split('\n');
        //console.log("data " + data);
        for (var i = 0; i < data.length; i++) {
            var chartType = data[i].slice(0, data[i].indexOf('event')),
                eventName = data[i].slice(data[i].indexOf('event') + 5, data[i].indexOf('opts')).trim(),
                params = data[i].slice(data[i].indexOf('opts') + 4).trim().split('!^!'),
                eventPassed = true,
                chartEventSpecParams = events[chartType][eventName]['params'];

            console.log("chart " + chartType);
            console.log("event " + eventName);

            for (var j = 0; j < params.length; j = j + 2) {
                chartEventSpecParams[params[j]] = (chartEventSpecParams[params[j]] == params[j + 1]) ? true : (eventPassed = false, params[j + 1]) ;
            }
            events[chartType][eventName]['triggered'] = true;
            // Increment the passing count based on eventPassed flag
            eventPassed && passingCount++ && chartPassingCount++;
        }
        // put the chart results into the main results
        eventResults[chart] = {
            total: chartEventCount,
            passing: chartPassingCount,
            failing: chartEventCount - chartPassingCount,
            details: events[chart]
        };

    });

    eproc.stdout.on('end', function() {
        jj++;
        if (eventspecs[jj])  {
            eventTest(eventspecs[jj], jj);
        }
        else {
            failingCount = eventSpecCount - passingCount;
            eventResults = {
                total: eventSpecCount,
                passing: passingCount,
                failing: failingCount,
                details: eventResults
            };
            fs.writeFileSync(eventsResultFile, JSON.stringify(eventResults, null, 4)); 
            // prepare html file
            // Generate html report
            eventsTpl = fs.readFileSync(path.join(__dirname, './assets/events-results.tpl'), {
                encoding: 'utf-8'
            });
            fs.writeFileSync(eventsResultHtml, ejs.render(eventsTpl, eventResults));
        }
    });
}

eventTest(eventspecs[0], 0);

var dataspecs = [],
    dataloadresults = {},
    dataloadPassCount = 0,
    parsedResults;

walk.sync('specs/dataload/').map(function(file) {
    if (file.slice(-4) == 'html') dataspecs.push(file);
});
//console.log("dataspecs", dataspecs);

var dataLoadTest = function(dataloadspecs, ii) {
    var href = dataloadspecs[ii],
        spec = href.slice(href.indexOf('/dataload/') + 10, -5),
        specDetails = spec.split('/'),
        specName = specDetails[1],
        chartName = specDetails[0],
        chartResults,
        tpl;

    console.log(spec + " data load test initiated");
    //init results
    !(dataloadresults[chartName]) && (dataloadresults[chartName] = {
        total: 0,
        passing: 0,
        failing: 0,
        details: {}
    });
    chartResults = dataloadresults[chartName];
    chartResults.total++;
    chartResults.details[specName] = false;

    // Arguments for child process of node
    var childArgs = [
        path.join(__dirname, 'src/phantom.js'),
        href,
        'dataload'
    ];

    // Run the child process
    var dproc = childProcess.execFile(phantomjs.path, childArgs, function(err, stdout, stderr) {});

    // Log the phantom output on the console
    dproc.stdout.on('data', function(data) {
        var specDetails,
            chartName,
            specName,
            specStatus;

        data = data.split('!^!');

        console.log('dataload', data[0] + ' ' + data[1]);
        specDetails = data[0].split('/');
        chartName = specDetails[0];
        specName = specDetails[1],
        chartResults;

        if (chartName && specName) {
            chartResults = dataloadresults[chartName];
            specStatus = data[1] === "true";
            if (specStatus) {
                chartResults.passing++;
                dataloadPassCount++;
                chartResults.details[specName] = true;
            }
            else {
                chartResults.failing++;
            }
            
        }
        
    });

    dproc.stdout.on('end', function() {
        ii++;
        if (dataloadspecs[ii]) {
           dataLoadTest(dataspecs, ii); 
        }
        else {
            parsedResults = {
                total: dataspecs.length,
                passing: dataloadPassCount,
                failing: dataspecs.length - dataloadPassCount,
                details: dataloadresults
            };
            fs.writeFileSync(dataLoadResultFile, JSON.stringify(parsedResults, null, 4));
            // Generate html report
            tpl = fs.readFileSync(path.join(__dirname, './assets/dataload-results.tpl'), {
                encoding: 'utf-8'
            });
            fs.writeFileSync(dataLoadResultHtml, ejs.render(tpl, parsedResults));
        }
        
    })
}
// Iterative function
dataLoadTest(dataspecs, 0);
