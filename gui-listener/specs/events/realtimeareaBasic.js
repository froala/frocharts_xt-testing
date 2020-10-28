module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Processor A",
                "dataIndex": "8",
                "dataValue": "50",
                "displayValue": "50%",
                "categoryLabel": "2 mins ago",
                "toolText": "Processor A, 2 mins ago, 50%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Processor A",
                "dataIndex": "8",
                "dataValue": "50",
                "displayValue": "50%",
                "categoryLabel": "2 mins ago",
                "toolText": "Processor A, 2 mins ago, 50%"
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
                "datasetName": "Processor A",
                "dataIndex": "8",
                "dataValue": "50",
                "displayValue": "50%",
                "categoryLabel": "2 mins ago",
                "toolText": "Processor A, 2 mins ago, 50%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-88-caption",
                "vmltarget": ".raphael-group-81-caption"
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
        type: 'realtimearea',
        renderAt: 'chart-container',
        width: '400',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Realtime chart",
                "showrealtimevalue": "0",
                "datastreamurl": "testfiles/StockPrice.asp?l=10&u=20",
                "refreshinterval": "2",
                "yaxismaxvalue": "100",
                "numdisplaysets": "10",
                "labeldisplay": "rotate",
                "numbersuffix": "%",
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
                "color": "00dd00",
                "seriesname": "Processor A",
                "alpha": "100",
                "anchoralpha": "0",
                "linethickness": "2",
                "data": [{
                    "value": "50"
                }, {
                    "value": "70"
                }]
            }, {
                "color": "ff5904",
                "seriesname": "Processor B",
                "alpha": "100",
                "anchoralpha": "0",
                "linethickness": "2",
                "data": [{
                    "value": "45"
                }, {
                    "value": "67"
                }]
            }]
        }
    }
}