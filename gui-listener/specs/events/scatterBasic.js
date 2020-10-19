module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Server 1",
                "dataIndex": "0",
                "x": "21",
                "y": "2.4",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Server 1, 21, 2.4"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Server 1",
                "dataIndex": "0",
                "x": "21",
                "y": "2.4",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Server 1, 21, 2.4"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot circle",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Server 1",
                "dataIndex": "0",
                "x": "21",
                "y": "2.4",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Server 1, 21, 2.4"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-158-caption",
                "vmltarget": ".raphael-group-156-caption"
            }]
        },
        "initialized": {
            "triggered": false,
            "params": {
                "width": "400",
                "height": "400"
            }
        },
        "dataloaded": {
            "triggered": false,
            "params": "noparams"
        },
        "rendered": {
            "triggered": false,
            "params": "noparams"
        },
        "rendercomplete": {
            "triggered": false,
            "params": "noparams"
        }
    },
    "data": {
        type: 'scatter',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "2",
                "caption": "Server Performance",
                "yaxisname": "Response Time (sec)",
                "xaxisname": "Server Load (TPS)",
                "xaxismaxvalue": "100",
                "xaxisminvalue": "20",
                "yaxismaxvalue": "7",
                "animation": "0"
            },
            "categories": [{
                "verticallinecolor": "#666666",
                "verticallinethickness": "1",
                "category": [{
                    "label": "20",
                    "x": "20",
                    "showverticalline": "1"
                }, {
                    "label": "30",
                    "x": "30",
                    "showverticalline": "1"
                }, {
                    "label": "40",
                    "x": "40",
                    "showverticalline": "1"
                }, {
                    "label": "50",
                    "x": "50",
                    "showverticalline": "1"
                }, {
                    "label": "60",
                    "x": "60",
                    "showverticalline": "1"
                }, {
                    "label": "70",
                    "x": "70",
                    "showverticalline": "1"
                }, {
                    "label": "80",
                    "x": "80",
                    "showverticalline": "1"
                }, {
                    "label": "90",
                    "x": "90",
                    "showverticalline": "1"
                }, {
                    "label": "100",
                    "x": "100",
                    "showverticalline": "0"
                }]
            }],
            "dataset": [{
                "drawline": "1",
                "seriesname": "Server 1",
                "color": "#009900",
                "anchorsides": "3",
                "anchorradius": "4",
                "anchorbgcolor": "#D5FFD5",
                "anchorbordercolor": "#009900",
                "data": [{
                    "y": "2.4",
                    "x": "21"
                }, {
                    "y": "3.5",
                    "x": "32"
                }, {
                    "y": "2.5",
                    "x": "43"
                }, {
                    "y": "4.1",
                    "x": "48"
                }, {
                    "y": "3.5",
                    "x": "50"
                }, {
                    "y": "4.6",
                    "x": "56"
                }, {
                    "y": "4.8",
                    "x": "59"
                }, {
                    "y": "4.9",
                    "x": "73"
                }, {
                    "y": "4.6",
                    "x": "89"
                }, {
                    "y": "4.2",
                    "x": "93"
                }]
            }, {
                "seriesname": "Server 2",
                "color": "#0000FF",
                "anchorsides": "4",
                "anchorradius": "4",
                "anchorbgcolor": "#C6C6FF",
                "anchorbordercolor": "#0000FF",
                "data": [{
                    "y": "1.4",
                    "x": "23"
                }, {
                    "y": "1.5",
                    "x": "29"
                }, {
                    "y": "1.5",
                    "x": "33"
                }, {
                    "y": "1.1",
                    "x": "41"
                }, {
                    "y": "1.5",
                    "x": "47"
                }, {
                    "y": "1.6",
                    "x": "49"
                }, {
                    "y": "1.8",
                    "x": "51"
                }, {
                    "y": "1.9",
                    "x": "53"
                }, {
                    "y": "1.6",
                    "x": "57"
                }, {
                    "y": "1.2",
                    "x": "58"
                }, {
                    "y": "1.9",
                    "x": "61"
                }, {
                    "y": "1.1",
                    "x": "63"
                }, {
                    "y": "1.9",
                    "x": "64"
                }, {
                    "y": "1.7",
                    "x": "71"
                }, {
                    "y": "1.1",
                    "x": "77"
                }, {
                    "y": "1.3",
                    "x": "79"
                }, {
                    "y": "1.7",
                    "x": "83"
                }, {
                    "y": "1.8",
                    "x": "89"
                }, {
                    "y": "1.9",
                    "x": "91"
                }, {
                    "y": "1.0",
                    "x": "93"
                }]
            }],
            "vtrendlines": [{
                "line": [{
                    "startvalue": "20",
                    "endvalue": "65",
                    "alpha": "5",
                    "color": "#00FF00"
                }, {
                    "startvalue": "65",
                    "endvalue": "75",
                    "alpha": "15",
                    "color": "#FFFF00"
                }, {
                    "startvalue": "75",
                    "endvalue": "100",
                    "alpha": "15",
                    "color": "#FF0000"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "5.2",
                    "displayvalue": "Check",
                    "linethickness": "2",
                    "color": "FF0000",
                    "valueonright": "1",
                    "dashed": "1",
                    "dashgap": "5"
                }]
            }]
        }
    }
}