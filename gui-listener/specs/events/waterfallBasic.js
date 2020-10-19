module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "420000",
                "datasetIndex": "1",
                "datasetName": "undefined",
                "displayValue": "$420K",
                "toolText": "Bi v2, $420K",
                "value": "420000"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "420000",
                "datasetIndex": "1",
                "datasetName": "undefined",
                "displayValue": "$420K",
                "toolText": "Bi v2, $420K",
                "value": "420000"
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
                "dataIndex": "0",
                "dataValue": "420000",
                "datasetIndex": "1",
                "datasetName": "undefined",
                "displayValue": "$420K",
                "toolText": "Bi v2, $420K",
                "value": "420000"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-83-caption",
                "vmltarget": ".raphael-group-83-caption"
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
        type: 'waterfall2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales By Prduct",
                "subcaption": "For the year 2006",
                "xaxisname": "Product",
                "yaxisname": "Sales",
                "numberprefix": "$",
                "showvalues": "1",
                "connectordashed": "1",
                "animation": "0"
            },
            "data": [{
                "label": "Bi v2",
                "value": "420000"
            }, {
                "label": "Real v3.2",
                "value": "810000"
            }, {
                "label": "Business Division Sales",
                "issum": "1"
            }, {
                "label": "FusionCharts",
                "value": "910000"
            }, {
                "label": "IS v2",
                "value": "720000"
            }, {
                "label": "PS v3",
                "value": "550000"
            }]
        }
    }
}