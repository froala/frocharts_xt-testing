var page = require('webpage').create();

if (phantom.args[1] === 'events') var spec = JSON.parse(phantom.args[2]);

// To support logging of phantomjs
page.onConsoleMessage = function(msg) {
    console.log(msg);
    if (phantom.args[3] && msg.slice(msg.indexOf('event') + 5,
            msg.indexOf('opts')).trim() == phantom.args[3]) phantom.exit(0);
    if (msg.indexOf('dataloadprocend') != '-1') phantom.exit(0);
};

// Open the link
page.open(phantom.args[0], function(status) {

    setTimeout(function() {

        if (phantom.args[1] === 'dataload') {
            page.evaluate(function() {
                if (FusionCharts.items.myChartId.options.dataSource != '') console.log(document.URL.slice(document.URL.indexOf('/dataload/') + 10, -5) + "!^!" + "true!^!dataloadprocend");
            });
        }
        for (var i in spec) {

            if (spec[i]['actions']) {

                for (var j = 0; j < spec[i]['actions'].length; j++) {

                    var target = spec[i]['actions'][j]['target'];
                    if (typeof target === 'string') {

                        var actionElement = page.evaluate(function(target) {
                            return document.getElementById(target).getBoundingClientRect();
                        }, target);
                        spec[i]['actions'][j]['target'] = [actionElement.left, actionElement.top];
                    }
                    page.sendEvent(spec[i]['actions'][j].type,
                        spec[i]['actions'][j].target[0],
                        spec[i]['actions'][j].target[1]
                    );
                }
            }
        }
    }, 500);
});

// 5 second timeout 

setTimeout(function() {
    phantom.exit(0);
}, 5000);
