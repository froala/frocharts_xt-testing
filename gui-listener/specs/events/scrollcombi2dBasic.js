module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "2006",
                "dataIndex": "0",
                "value": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "2006",
                "dataIndex": "0",
                "value": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
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
                "datasetName": "2006",
                "dataIndex": "0",
                "value": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-164-caption",
                "vmltarget": ".raphael-group-159-caption"
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
        type: 'scrollcombi2d',
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
                "numvisibleplot": "8",
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
                "renderas": "Area",
                "showplotborder": "0",
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
            }, {
                "seriesname": "2004",
                "renderas": "Line",
                "linethickness": "3",
                "data": [{
                    "value": "7000"
                }, {
                    "value": "10500"
                }, {
                    "value": "9500"
                }, {
                    "value": "10000"
                }, {
                    "value": "9000"
                }, {
                    "value": "8800"
                }, {
                    "value": "9800"
                }, {
                    "value": "15700"
                }, {
                    "value": "16700"
                }, {
                    "value": "14900"
                }, {
                    "value": "12900"
                }, {
                    "value": "8800"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "22000",
                    "color": "#91C728",
                    "displayvalue": "Target",
                    "showontop": "1"
                }]
            }]
        }
    }
}