module.exports = {
    "events": {
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "50",
                "displayValue": "",
                "categoryLabel": "AC - Central",
                "toolText": "At Home, AC - Central, 50"
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
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "50",
                "displayValue": "",
                "categoryLabel": "AC - Central",
                "toolText": "At Home, AC - Central, 50"
            }
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "At Home",
                "dataIndex": "0",
                "dataValue": "50",
                "displayValue": "",
                "categoryLabel": "AC - Central",
                "toolText": "At Home, AC - Central, 50"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-102-caption",
                "vmltarget": ".raphael-group-95-caption"
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
        type: 'errorline',
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
                "errorbarcolor": "ff0000",
                "errorbarthickness": "2",
                "errorbarwidth": "20",
                "canvaspadding": "",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "AC - Central"
                }, {
                    "label": "AC - Window"
                }, {
                    "label": "Heat Pump"
                }, {
                    "label": "Coffee Machine"
                }, {
                    "label": "Dish Washer"
                }]
            }],
            "dataset": [{
                "seriesname": "At Home",
                "data": [{
                    "value": "50",
                    "errorvalue": "10"
                }, {
                    "value": "-100",
                    "errorvalue": "12"
                }, {
                    "value": "120",
                    "errorvalue": "19"
                }, {
                    "value": "90",
                    "errorvalue": "11"
                }, {
                    "value": "-98",
                    "errorvalue": "15"
                }]
            }, {
                "seriesname": "In Office",
                "data": [{
                    "value": "-11",
                    "errorvalue": "15"
                }, {
                    "value": "60",
                    "errorvalue": "13"
                }, {
                    "value": "-12",
                    "errorvalue": "16"
                }, {
                    "value": "40",
                    "errorvalue": "15.8"
                }, {
                    "value": "70",
                    "errorvalue": "17"
                }]
            }]
        }
    }
}