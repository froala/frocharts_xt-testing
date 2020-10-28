var fs = require('fs'),
    shell = require('shelljs/global'),
    program = require('commander'),
    path = require('path'),
    config = fs.readFileSync('./config.json'),
    walk = require('walkdir'),
    hlattrResultsFile = path.join(__dirname, './headless-visualizer/tests/smoke/japp_result.json'),
    hleventsResultFile = path.join(__dirname, './headless-listener/results/events-result.json'),
    hldataLoadResultFile = path.join(__dirname, './headless-listener/results/dataload-result.json'),
    gieventsResultFile = path.join(__dirname, './gui-listener/results/events-result.json'),
    gidataLoadResultFile = path.join(__dirname, './gui-listener/results/dataload-result.json'),
    getCleanPath = function (path, sep) {
        sep = sep || '';
        return path.replace(/^(\.\/|\/)/, sep).replace(/\/$/, sep);
    },
    o = [],
    EXE;

/* makedirp Function to create directories recursively
 * @param {type} dirPath: path to the nested directory to be created.
 * @returns {undefined}
 */
function makedirp(dirPath) {
    // If the directory already exists don't do anything
    if (!fs.existsSync(dirPath)) {
        // If the parent directory exists, create the directory
        fs.existsSync(path.dirname(dirPath)) && mkdir(dirPath);
        makedirp(path.dirname(dirPath));
        makedirp(dirPath);
    }
}

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
        console.log('There has been an error parsing your JSON.');
        console.log(err);
    }
}

program
    .option('-a, --agent [string]', 'Agent where to run the test cases browserstack or selenium')
    .option('-b, --baseline [string]', 'Baseline version')
    .option('-s, --specs [string]', 'Specs path')
    .option('-t, --testVersion [string]', 'Test version')
    .option('-l, --logging [string]', 'Level of logging verbosity (verbose) logging')
    .option('-c, --client [string]', 'Browser client. Defaults to firefox')
    .option('-v, --clientversion [string]', 'Browser version, applicable for remote testing only (browserstack or sauselabs)')
    .option('-m, --module [string]', 'Module(s) to run. hv,hl,gv,gl')
    .option('-i, --ip [string]', 'Ip address of the client machine. Defaults to localhost')
    .option('-h, --host [string]', 'Host address with port of the running Selenium server eg. 192.168.0.1:4444 ')
    .option('-n, --nodeConfig [string]', 'all Browser configuration')
    .parse(process.argv);

// Add "/" before the url.
program.baseline = program.baseline || config.baseline;
program.testVersion = program.testVersion || config.testVersion;
program.specs = getCleanPath(program.specs || config.specs);
program.module = program.module || config.module;
program.logging = program.logging == 1 ? 'verbose' : 'silent';
program.client = program.client || config.client;
program.client = "\"" + program.client + "\"";
//program.clientversion = program.clientversion;
//program.ip = program.ip || config.ip;
program.host = program.host || config.host;
program.agent = program.agent || config.agent;

program.bsuser = program.bsuser || config.bsuser;
program.bskey = program.bskey || config.bskey;
program.sluser = program.sluser || config.sluser;
program.slkey = program.slkey || config.slkey;
program.nodeConfig = program.nodeConfig || config.nodeConfig;

program.agent && o.push(' -a ' + program.agent);
program.baseline && o.push(' -b ' + program.baseline);
program.specs && o.push(' -s ' + program.specs);
program.testVersion && o.push(' -t ' + program.testVersion);
program.logging && o.push(' -l ' + program.logging);
// program.client && o.push(' -c ' + program.client);
program.clientversion && o.push(' -v ' + program.clientversion);
//program.ip && o.push(' -i ' + program.ip);
program.host && o.push(' -h ' + program.host);
// program.nodeConfig && o.push(' -n ' + program.nodeConfig);


var giattrResultFile = path.join(__dirname, './gui-visualizer/' + program.specs +
        '/result-' + program.client + '.json'),
    startTime = (new Date).getTime();


//Run headless visualizer
if (!program.module || program.module.indexOf('hv') != -1) {
    cp('-rf', './fc-versions/' + program.baseline, './headless-visualizer/fc-versions/');
    cp('-rf', './fc-versions/' + program.testVersion, './headless-visualizer/fc-versions/');
    cp('-rf', './fc-versions/' + program.testVersion + '/*.js', './headless-listener/fusioncharts/');
    cd('headless-visualizer/');
    exec('node run.js -s tests/smoke/ -b ' + program.baseline + ' -t ' + program.testVersion + ' -f');
    cd('..');
}

//Run headless listener
if (!program.module || program.module.indexOf('hl') != -1) {
    cd('headless-listener/');
    exec('npm install');
    exec('node run.js');
    cd('..');
}

//Run gui visualizer
if (!program.module || program.module.indexOf('gv') != -1) {
    cd('gui-visualizer/');
    program.ip = program.ip || config.ipGV;
    program.ip && o.push(' -i ' + program.ip);
    console.log(" ");
    console.log(o.join(''));
    EXE = exec('node index.js' + o.join(''));
    cd('..');
}

//Run gui gallery
if (!program.module || program.module.indexOf('gg') != -1) {
    cd('gui-gallery/');
    program.ip = program.ip || config.ipGV;
    program.ip && o.push(' -i ' + program.ip);
    console.log(" ");
    console.log(o.join(''));
    EXE = exec('node index.js' + o.join(''));
    cd('..');
}

//Run gui listener
if (!program.module || program.module.indexOf('gl') != -1) {
    program.ip = program.ip || config.ipGL;
    program.ip && o.push(' -i ' + program.ip);
    console.log('node gui-listener/index.js' + o.join(''));
    EXE = exec('node gui-listener/index.js' + o.join(''));
}

if (EXE && EXE.code != 0) {
    throw EXE.code;
}


console.log("__________Execution Completed__________");
console.log("____________Creating Results____________");

// Create Master result html
var htmlStr = '',
    tableStr = '',
    jappResults = fs.existsSync(hlattrResultsFile) && JSON.parse(fs.readFileSync(hlattrResultsFile)),
    hleventResults = fs.existsSync(hleventsResultFile) && JSON.parse(fs.readFileSync(hleventsResultFile)),
    hldataLoadResults = fs.existsSync(hldataLoadResultFile) && JSON.parse(fs.readFileSync(hldataLoadResultFile)),
    gieventsResults = fs.existsSync(gieventsResultFile) && JSON.parse(fs.readFileSync(gieventsResultFile)),
    gidataLoadResults = fs.existsSync(gidataLoadResultFile) && JSON.parse(fs.readFileSync(gidataLoadResultFile)),
    giattrLoadResults = fs.existsSync(giattrResultFile) && JSON.parse(fs.readFileSync(giattrResultFile)),
    htmlResultFile = path.join(__dirname, 'index.html'),
    results,
    resultsTpl = fs.readFileSync(path.join(__dirname, './assets/resultFile.tpl'), {
        encoding: 'utf-8'
    }),
    applyTemplate,
    details = [],
    resultHost,
    resultURL,
    client;

// Get all the spec files
paths = fs.readdirSync(path.join(__dirname, './gui-visualizer/' + 'tests'));

// Master result link prefix host name
resultHost = getCleanPath(config.resultHost || "");
resultHost = resultHost && (resultHost + "/") || "";

for (var i = 0; i < paths.length; i+=1) {
    if (!/^\./.test(paths[i]) &&
            fs.lstatSync(path.join(__dirname, 'gui-visualizer/tests', paths[i])).isDirectory()) {
        resultURL = fs.readdirSync(path.join(__dirname, 'gui-visualizer/tests', paths[i]));
        for (var j = 0; j < resultURL.length; j += 1) {
            if (/result\-(.*)\.json$/i.test(resultURL[j])) {
                client = resultURL[j].split('result-')[1].replace(/\.json$/i, '');
                giattrLoadResults = JSON.parse(fs.readFileSync(path.join(__dirname, 'gui-visualizer/tests',
                    paths[i], resultURL[j])));

                details.push({
                    name: camelCase(paths[i]) + " on " + camelCase(client),
                    total: giattrLoadResults && giattrLoadResults.total,
                    passing: giattrLoadResults && giattrLoadResults.passing,
                    failing: giattrLoadResults && giattrLoadResults.failing,
                    resultFile: resultHost + 
                        path.join('results/gui-visualizer/tests', paths[i], resultURL[j]).replace(/\.json$/i, '.html')
                });
            }
        }
    }
}

details.push({
        name: 'GUI - Events',
        total: gieventsResults && gieventsResults.total,
        passing: gieventsResults && gieventsResults.passing,
        failing: gieventsResults && gieventsResults.failing,
        resultFile: 'gui-listener/results/events-result.json'
    }, {
        name: 'GUI - DataLoad',
        total: gidataLoadResults && gidataLoadResults.total,
        passing: gidataLoadResults && gidataLoadResults.passing,
        failing: gidataLoadResults && gidataLoadResults.failing,
        resultFile: 'gui-listener/results/dataload-result.html'
    });

results = {
    details: details
};
applyTemplate = function(tpl, obj) {
    var templateRE = /\{\{for\s([\s\S]*?)\}\}([\s\S]*?)\{\{for\}\}/,
        keyTpl = /\{\{([\s\S]*?)\}\}/;
    // Apply for template
    var forTpl = templateRE.exec(tpl),
        objectKey = forTpl[1],
        tplStr = forTpl[2],
        i = 0,
        details = results[objectKey],
        detailsLength = details.length,
        parsedTpl = '',
        tag;
    for (; i < detailsLength; i++) {
        parsedTpl += tplStr;
        while (keyTpl.test(parsedTpl)) {
            parsedTpl = parsedTpl.replace(keyTpl, function(match, key) {
                return details[i][key];
            });
        }
    }
    return tpl.replace(templateRE, parsedTpl);
};

resultsTpl = applyTemplate(resultsTpl, results);
fs.writeFileSync(htmlResultFile, resultsTpl);

/*
* Read to version from FroalaCharts JS file and create the result folder according to that
*/
var version = fs.readFileSync((program.testVersion.split(/\.\.\//)[1] ||
    ('fc-versions/' + program.testVersion)) + '/froalacharts.js', {
        encoding: 'utf-8'
    });
version = version.split(/\*?\s?\@version\s?(.*)\n/)[1];

//collate results
//resultFolder = "results/results-" + program.client + "-" + version;
resultFolder = "results/";
makedirp(path.join(resultFolder, "gui-visualizer/", "tests/"));

//cp('-rf', "result.html", resultFolder);
cp('-rf', "gui-visualizer/tests/*", path.join(resultFolder, "gui-visualizer/", "tests/"));

makedirp(path.join(resultFolder, "gui-listener"));
cp('-rf', "gui-listener/results", path.join(resultFolder, "gui-listener/"));

var endTime = (new Date).getTime(),
    duration = endTime - startTime,
    milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

console.log(" ");
console.log("Time taken :" + hours + ":" + minutes + ":" + seconds + "." + milliseconds);
console.log(" ");
