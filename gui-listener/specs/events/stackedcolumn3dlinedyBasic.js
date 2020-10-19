module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product A",
                "dataIndex": "0",
                "dataValue": "25601",
                "displayValue": "",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $25.6K"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product A",
                "dataIndex": "0",
                "dataValue": "25601",
                "displayValue": "",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $25.6K"
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
                "datasetName": "Product A",
                "dataIndex": "0",
                "dataValue": "25601",
                "displayValue": "",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $25.6K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-170-caption",
                "vmltarget": ".raphael-group-164-caption"
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
        type: 'stackedcolumn3dlinedy',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'stackedcolumn3dlinedy',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "2",
                "caption": "Sales Chart",
                "showvalues": "0",
                "numberprefix": "$",
                "pyaxisname": "Sales",
                "syaxisname": "Quantity",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "2001"
                }, {
                    "label": "2002"
                }, {
                    "label": "2003"
                }, {
                    "label": "2004"
                }, {
                    "label": "2005"
                }]
            }],
            "dataset": [{
                "seriesname": "Product A",
                "data": [{
                    "value": "25601"
                }, {
                    "value": "20148"
                }, {
                    "value": "17372"
                }, {
                    "value": "35407"
                }, {
                    "value": "38105"
                }]
            }, {
                "seriesname": "Product B",
                "data": [{
                    "value": "57401"
                }, {
                    "value": "41941"
                }, {
                    "value": "45263"
                }, {
                    "value": "117320"
                }, {
                    "value": "114845"
                }]
            }, {
                "seriesname": "Quantity",
                "parentyaxis": "S",
                "data": [{
                    "value": "4500"
                }, {
                    "value": "4483"
                }, {
                    "value": "4283"
                }, {
                    "value": "7755"
                }, {
                    "value": "9263"
                }]
            }]
        }
    }
}