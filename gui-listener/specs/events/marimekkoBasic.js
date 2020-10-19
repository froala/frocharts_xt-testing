module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "A",
                "dataIndex": "0",
                "dataValue": "39.50471698113208",
                "displayValue": "",
                "link": "undefined",
                "toolText": "A, Desktop, 39.5%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "A",
                "dataIndex": "0",
                "dataValue": "39.50471698113208",
                "displayValue": "",
                "link": "undefined",
                "toolText": "A, Desktop, 39.5%"
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
                "datasetName": "A",
                "dataIndex": "0",
                "dataValue": "39.50471698113208",
                "displayValue": "",
                "link": "undefined",
                "toolText": "A, Desktop, 39.5%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-92-caption",
                "vmltarget": ".raphael-group-89-caption"
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
        type: 'marimekko',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'marimekko',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "showvalues": "0",
                "caption": "Market Share Analysis",
                "subcaption": "2009",
                "numberprefix": "$",
                "xaxisname": "Market Segment",
                "yaxisname": "Market Share",
                "legendcaption": "Manufacturer",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Desktop"
                }, {
                    "label": "Laptop"
                }, {
                    "label": "Notebook"
                }]
            }],
            "dataset": [{
                "seriesname": "A",
                "data": [{
                    "value": "335000"
                }, {
                    "value": "225100"
                }, {
                    "value": "164200"
                }]
            }, {
                "seriesname": "B",
                "data": [{
                    "value": "215000"
                }, {
                    "value": "198000"
                }, {
                    "value": "120000"
                }]
            }, {
                "seriesname": "C",
                "data": [{
                    "value": "298000"
                }, {
                    "value": "109300"
                }, {
                    "value": "153600"
                }]
            }]
        }
    }
}