module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Revenue",
                "dataIndex": "0",
                "dataValue": "170",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $170"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Revenue",
                "dataIndex": "0",
                "dataValue": "170",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $170"
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
                "dataValue": "170",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Revenue, Jan, $170"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-133-caption",
                "vmltarget": ".raphael-group-129-caption"
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
        type: 'mscombidy2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'mscombidy2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales Volume",
                "pyaxisname": "Revenue",
                "syaxisname": "Quantity",
                "showvalues": "0",
                "numberprefix": "$",
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
                "seriesname": "Revenue",
                "data": [{
                    "value": "170"
                }, {
                    "value": "610"
                }, {
                    "value": "142"
                }, {
                    "value": "135"
                }, {
                    "value": "214"
                }, {
                    "value": "121"
                }, {
                    "value": "113"
                }, {
                    "value": "156"
                }, {
                    "value": "212"
                }, {
                    "value": "900"
                }, {
                    "value": "132"
                }, {
                    "value": "101"
                }]
            }, {
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
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "2100000",
                    "color": "#009933",
                    "displayvalue": "Target"
                }]
            }]
        }
    }
}