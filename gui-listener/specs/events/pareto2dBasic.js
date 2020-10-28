module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "910000",
                "displayValue": "$910K",
                "categoryLabel": "Feb",
                "toolText": "Feb, $910K"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "910000",
                "displayValue": "$910K",
                "categoryLabel": "Feb",
                "toolText": "Feb, $910K"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot rect",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "910000",
                "displayValue": "$910K",
                "categoryLabel": "Feb",
                "toolText": "Feb, $910K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-146-caption",
                "vmltarget": ".raphael-group-144-caption"
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
        type: 'pareto2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'pareto2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly Revenue",
                "xaxisname": "Month",
                "yaxisname": "Revenue",
                "numberprefix": "$",
                "showvalues": "1",
                "animation": "0"
            },
            "data": [{
                "label": "Jan",
                "value": "420000"
            }, {
                "label": "Feb",
                "value": "910000"
            }, {
                "label": "Mar",
                "value": "720000"
            }, {
                "label": "Apr",
                "value": "550000"
            }, {
                "label": "May",
                "value": "810000"
            }, {
                "label": "Jun",
                "value": "510000"
            }, {
                "label": "Jul",
                "value": "680000"
            }, {
                "label": "Aug",
                "value": "620000"
            }, {
                "label": "Sep",
                "value": "610000"
            }, {
                "label": "Oct",
                "value": "490000"
            }, {
                "label": "Nov",
                "value": "530000"
            }, {
                "label": "Dec",
                "value": "330000"
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "700000",
                    "color": "009933",
                    "displayvalue": "Target"
                }]
            }]
        }
    }
}