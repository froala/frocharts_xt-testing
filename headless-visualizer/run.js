var walk = require('walkdir'),
    fs = require('fs'),
    path = require('path'),
    shell = require('shelljs'),
    program = require('commander');

program
    .option('-s, --specs [path]', 'Baseline version')
    .option('-b, --baseline [number]', 'Baseline version')
    .option('-t, --testVersion [number]', 'Test version')
    .option('-v, --verbose', 'Verbose logging')
    .option('-f, --fixSpecs', 'Add refimage key with correct paths to specs')
    .parse(process.argv);

var paths = walk.sync(program.specs),
    startTime = (new Date).getTime();

var sanitizeRefpaths = function(specPath) {
    var chartSpec = JSON.parse(fs.readFileSync(specPath + "/chartsSpec.json"));
    for (var i in chartSpec) {
        chartSpec[i]["refimage"] = specPath + "/ref-images/" + i + "-snapshot.png";
    }
    fs.writeFileSync(specPath + "/chartsSpec.json", JSON.stringify(chartSpec, null, 4));
}

console.log("Initializing . .");
var proglen = 0,
    testCaseCounters = [],
    totalTestCases = 0;
for (var ii = 0; ii < paths.length - 1; ii++) {
    if (paths[ii].slice(-15) == 'chartsSpec.json') {
        testCaseCounters[proglen] = Object.keys(JSON.parse(fs.readFileSync(paths[ii]))).length;
        totalTestCases += testCaseCounters[proglen];
        proglen++;
    }
}
console.log(proglen + " specs found containing " + totalTestCases + " test cases.");
if (!program.verbose) {
    var pace = require('pace')(totalTestCases),
        paceCounter = 0;
}

for (var i = 0; i < paths.length - 1; i++) {

    if (paths[i].slice(-15) == 'chartsSpec.json') {
        var parentName = path.dirname(paths[i]).replace(process.cwd(), ".");
        if (program.fixSpecs) sanitizeRefpaths(parentName);

        if (!fs.existsSync(parentName + '/ref-images/')) fs.mkdirSync(parentName + '/ref-images/');

        if (!fs.existsSync(parentName + '/snapshots/')) fs.mkdirSync(parentName + '/snapshots/');

        if (program.baseline) {
            var cmd = 'node bin/japp --save --specSource ' + parentName + '/ --savePath ' + parentName + '/ref-images/' + ' --snapshotsPath ' + parentName + '/snapshots/' +
                ' --maxThreads 1' + ' --jsSourceRoot ./fc-versions/' + program.baseline + ' --threshold 0 ';

            if (program.verbose) cmd += '-v';
            shell.exec(cmd);
        }

        if (program.testVersion) {
            var cmd = 'node bin/japp --specSource ' + parentName + '/ --savePath ' + parentName + '/ref-images/' + ' --snapshotsPath ' + parentName + '/snapshots/' +
                ' --maxThreads 1' + ' --jsSourceRoot ./fc-versions/' + program.testVersion + ' --threshold 0 ';

            if (program.verbose) cmd += '-v';
            shell.exec(cmd);
        }
        if (!program.verbose) {
            for (var j = 0; j < testCaseCounters[paceCounter]; j++) pace.op();
            paceCounter++;
        }
    }
};

var endTime = (new Date).getTime(),
    duration = endTime - startTime,
    milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

console.log("Time taken :" + hours + ":" + minutes + ":" + seconds + "." + milliseconds);

console.log("Generating reports.");
shell.exec('node src/report-generator.js ' + program.specs);
shell.exec('open ' + path.resolve(program.specs, 'japp_result.html'));