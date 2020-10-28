module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Revenue",
                "dataIndex": "0",
                "value": "1700000",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $1.7M"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Revenue",
                "dataIndex": "0",
                "value": "1700000",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $1.7M"
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
                "datasetName": "Revenue",
                "dataIndex": "0",
                "value": "1700000",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $1.7M"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-173-caption",
                "vmltarget": ".raphael-group-146-caption"
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
        type: 'scrollcombidy2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales Volume",
                "pyaxisname": "Revenue",
                "syaxisname": "Quantity",
                "showvalues": "0",
                "numberprefix": "$",
                "numvisibleplot": "8",
                "useroundedges": "1",
                "palette": "4",
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
                "seriesname": "Quantity",
                "parentyaxis": "S",
                "data": [{
                    "value": "340"
                }, {
                    "value": "120"
                }, {
                    "value": "280"
                }, {
                    "value": "270"
                }, {
                    "value": "430"
                }, {
                    "value": "240"
                }, {
                    "value": "230"
                }, {
                    "value": "310"
                }, {
                    "value": "430"
                }, {
                    "value": "180"
                }, {
                    "value": "260"
                }, {
                    "value": "200"
                }]
            }, {
                "seriesname": "Revenue",
                "data": [{
                    "value": "1700000"
                }, {
                    "value": "610000"
                }, {
                    "value": "1420000"
                }, {
                    "value": "1350000"
                }, {
                    "value": "2140000"
                }, {
                    "value": "1210000"
                }, {
                    "value": "1130000"
                }, {
                    "value": "1560000"
                }, {
                    "value": "2120000"
                }, {
                    "value": "900000"
                }, {
                    "value": "1320000"
                }, {
                    "value": "1010000"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "2100000",
                    "color": "009933",
                    "displayvalue": "Target"
                }]
            }]
        }
    }
}