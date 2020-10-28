module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "27400",
                "datasetIndex": "0",
                "datasetName": "2006",
                "displayValue": "",
                "toolText": "2006, Jan, $27.4K",
                "value": "27400"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "27400",
                "datasetIndex": "0",
                "datasetName": "2006",
                "displayValue": "",
                "toolText": "2006, Jan, $27.4K",
                "value": "27400"
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
                "dataIndex": "0",
                "dataValue": "27400",
                "datasetIndex": "0",
                "datasetName": "2006",
                "displayValue": "",
                "toolText": "2006, Jan, $27.4K",
                "value": "27400"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-130-caption",
                "vmltarget": ".raphael-group-123-caption"
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
        type: 'msstepline',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Business Results 2005 v 2006",
                "xaxisname": "Month",
                "yaxisname": "Revenue",
                "showvalues": "0",
                "numberprefix": "$",
                "drawverticaljoints": "1",
                "useforwardsteps": "1",
                "linedashed": "0",
                "numdivlines": "1",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Jan"
                }, {
                    "label": "Feb"
                }, {
                    "label": "Mar"
                }, {
                    "label": "Apr"
                }, {
                    "label": "May"
                }, {
                    "label": "Jun"
                }, {
                    "label": "Jul"
                }, {
                    "label": "Aug"
                }, {
                    "label": "Sep"
                }, {
                    "label": "Oct"
                }, {
                    "label": "Nov"
                }, {
                    "label": "Dec"
                }]
            }],
            "dataset": [{
                "seriesname": "2006",
                "data": [{
                    "value": "27400"
                }, {
                    "value": "29800"
                }, {
                    "value": "25800"
                }, {
                    "value": "26800"
                }, {
                    "value": "29600"
                }, {
                    "value": "32600"
                }, {
                    "value": "31800"
                }, {
                    "value": "36700"
                }, {
                    "value": "29700"
                }, {
                    "value": "31900"
                }, {
                    "value": "34800"
                }, {
                    "value": "24800"
                }]
            }, {
                "seriesname": "2005",
                "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }, {
                    "value": "11000"
                }, {
                    "value": "9800"
                }, {
                    "value": "11800"
                }, {
                    "value": "19700"
                }, {
                    "value": "21700"
                }, {
                    "value": "21900"
                }, {
                    "value": "22900"
                }, {
                    "value": "20800"
                }]
            }]
        }
    }
}