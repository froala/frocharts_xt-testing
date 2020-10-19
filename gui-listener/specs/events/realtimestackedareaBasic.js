module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Client A",
                "dataIndex": "28",
                "dataValue": "45",
                "displayValue": "45%",
                "categoryLabel": "2 mins ago",
                "toolText": "Client A, 2 mins ago, 45%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Client A",
                "dataIndex": "28",
                "dataValue": "45",
                "displayValue": "45%",
                "categoryLabel": "2 mins ago",
                "toolText": "Client A, 2 mins ago, 45%"
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
                "datasetName": "Client A",
                "dataIndex": "28",
                "dataValue": "45",
                "displayValue": "45%",
                "categoryLabel": "2 mins ago",
                "toolText": "Client A, 2 mins ago, 45%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-106-caption",
                "vmltarget": ".raphael-group-97-caption"
            }]
        },
        "rendered": {
            "triggered": false,
            "params": "noparams"
        },
        "initialized": {
            "triggered": false,
            "params": {
                "width": "550",
                "height": "350"
            }
        },
        "dataloaded": {
            "triggered": false,
            "params": "noparams"
        },
        "rendercomplete": {
            "triggered": false,
            "params": "noparams"
        }
    },
    "data": {
        type: 'realtimestackedarea',
        renderAt: 'chart-container',
        width: '400',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Realtime Server Load",
                "yaxismaxvalue": "100",
                "numdisplaysets": "30",
                "showrealtimevalue": "1",
                "datastreamurl": "testfiles/StockPrice.php",
                "refreshinterval": "2",
                "numbersuffix": "%",
                "labeldisplay": "rotate",
                "slantlabels": "1",
                "showlabels": "1",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "2 mins ago"
                }, {
                    "label": "1 min ago"
                }]
            }],
            "dataset": [{
                "color": "009900",
                "seriesname": "Client A",
                "data": [{
                    "value": "45"
                }, {
                    "value": "67"
                }]
            }, {
                "color": "ffff00",
                "seriesname": "Client B (with values)",
                "data": [{
                    "value": "55"
                }, {
                    "value": "72"
                }]
            }, {
                "color": "0099cc",
                "seriesname": "Client C",
                "data": [{
                    "value": "40"
                }, {
                    "value": "62"
                }]
            }]
        }
    }
}