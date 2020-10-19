module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product A Sales",
                "dataIndex": "0",
                "dataValue": "230",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Product A Sales, Jan, 230"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product A Sales",
                "dataIndex": "0",
                "dataValue": "230",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Product A Sales, Jan, 230"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot path",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product A Sales",
                "dataIndex": "0",
                "dataValue": "230",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "Product A Sales, Jan, 230"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-290-caption",
                "vmltarget": ".raphael-group-284-caption"
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
        type: 'mscolumn3dlinedy',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'mscolumn3dlinedy',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Product Sales & Downloads",
                "showvalues": "0",
                "pyaxisname": "Sales",
                "syaxisname": "Total Downloads",
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
                "seriesname": "Product A Sales",
                "data": [{
                    "value": "230"
                }, {
                    "value": "245"
                }, {
                    "value": "250"
                }, {
                    "value": "245"
                }, {
                    "value": "350"
                }, {
                    "value": "330"
                }, {
                    "value": "360"
                }, {
                    "value": "340"
                }, {
                    "value": "230"
                }, {
                    "value": "220"
                }, {
                    "value": "200"
                }, {
                    "value": "190"
                }]
            }, {
                "seriesname": "Product B Sales",
                "data": [{
                    "value": "130"
                }, {
                    "value": "145"
                }, {
                    "value": "50"
                }, {
                    "value": "115"
                }, {
                    "value": "190"
                }, {
                    "value": "130"
                }, {
                    "value": "160"
                }, {
                    "value": "140"
                }, {
                    "value": "130"
                }, {
                    "value": "120"
                }, {
                    "value": "140"
                }, {
                    "value": "80"
                }]
            }, {
                "seriesname": "Total Downloads",
                "parentyaxis": "S",
                "data": [{
                    "value": "13000"
                }, {
                    "value": "14500"
                }, {
                    "value": "5000"
                }, {
                    "value": "11500"
                }, {
                    "value": "10000"
                }, {
                    "value": "13000"
                }, {
                    "value": "16000"
                }, {
                    "value": "14000"
                }, {
                    "value": "13000"
                }, {
                    "value": "12000"
                }, {
                    "value": "9000"
                }, {
                    "value": "10000"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "300",
                    "color": "91C728",
                    "displayvalue": "Target",
                    "showontop": "1"
                }]
            }]
        }
    }
}