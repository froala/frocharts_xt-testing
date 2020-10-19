module.exports = {
    "events": {
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "2006",
                "dataIndex": "0",
                "dataValue": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot circle",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "2006",
                "dataIndex": "0",
                "dataValue": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
            }
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "2006",
                "dataIndex": "0",
                "dataValue": "27400",
                "displayValue": "",
                "categoryLabel": "Jan",
                "toolText": "2006, Jan, $27.4K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-105-caption",
                "vmltarget": ".raphael-group-94-caption"
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
        type: 'realtimelinedy',
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
                "numdisplaysets": "3 ",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Jan"
                }, {
                    "label": "Feb"
                }, {
                    "label": "Mar"
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
                }]
            }, {
                "seriesname": "2005",
                "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }]
            }]
        }
    }
}