module.exports = {
    "events": {
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "14",
                "displayValue": "",
                "categoryLabel": "Central AC",
                "toolText": "At Home, Central AC, 14"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot rect",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "14",
                "displayValue": "",
                "categoryLabel": "Central AC",
                "toolText": "At Home, Central AC, 14"
            }
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "14",
                "displayValue": "",
                "categoryLabel": "Central AC",
                "toolText": "At Home, Central AC, 14"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-114-caption",
                "vmltarget": ".raphael-group-91-caption"
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
        type: 'errorbar2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "2",
                "xaxisname": "Appliance",
                "yaxisname": "Life Span (yr)",
                "caption": "Life Span Chart of Appliances",
                "subcaption": "(With Error Values)",
                "showvalues": "0",
                "halferrorbar": "0",
                "errorbarcolor": "666666",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Central AC"
                }, {
                    "label": "Window AC"
                }, {
                    "label": "Pump"
                }, {
                    "label": "Tea Maker"
                }, {
                    "label": "Washer"
                }]
            }],
            "dataset": [{
                "seriesname": "At Home",
                "data": [{
                    "value": "14",
                    "errorvalue": "2"
                }, {
                    "value": "9",
                    "errorvalue": "1.5"
                }, {
                    "value": "15",
                    "errorvalue": "3"
                }, {
                    "value": "6",
                    "errorvalue": "1.8"
                }, {
                    "value": "10",
                    "errorvalue": "1.2"
                }]
            }, {
                "seriesname": "In Office",
                "data": [{
                    "value": "11",
                    "errorvalue": "1"
                }, {
                    "value": "6",
                    "errorvalue": "0.5"
                }, {
                    "value": "12",
                    "errorvalue": "2"
                }, {
                    "value": "4",
                    "errorvalue": "0.8"
                }, {
                    "value": "7",
                    "errorvalue": "1"
                }]
            }]
        }
    }
}