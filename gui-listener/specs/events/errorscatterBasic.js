module.exports = {
    "events": {
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Dataset 1",
                "dataIndex": "0",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Dataset 1, 20, 20"
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
                "datasetName": "Dataset 1",
                "dataIndex": "0",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Dataset 1, 20, 20"
            }
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Dataset 1",
                "dataIndex": "0",
                "displayValue": "",
                "categoryLabel": "undefined",
                "toolText": "Dataset 1, 20, 20"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-79-caption",
                "vmltarget": ".raphael-group-77-caption"
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
        type: 'errorscatter',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "1",
                "caption": "Please select the required points from chart below",
                "yaxisname": "Value",
                "xaxisname": "Load (TPS)",
                "showlegend": "1",
                "shownames": "1",
                "xaxismaxvalue": "100",
                "xaxisminvalue": "0",
                "submitdataasxml": "1",
                "errorbarcolor": "000000",
                "errorbarthickness": "3",
                "errorbarwidth": "20",
                "valuepadding": "40",
                "usehorizontalerrorbar": "0",
                "drawquadrant": "0",
                "halferrorbar": "0",
                "animation": "0"
            },
            "categories": [{
                "verticallinecolor": "AA6666",
                "verticallinethickness": "1",
                "category": [{
                    "label": "20",
                    "x": "15",
                    "showverticalline": "1"
                }, {
                    "label": "30",
                    "x": "25",
                    "showverticalline": "1"
                }, {
                    "label": "40",
                    "x": "35",
                    "showverticalline": "1"
                }, {
                    "label": "50",
                    "x": "45",
                    "showverticalline": "1"
                }, {
                    "label": "60",
                    "x": "55",
                    "showverticalline": "1"
                }]
            }],
            "dataset": [{
                "id": "DS1",
                "seriesname": "Dataset 1",
                "color": "ff5904",
                "plotborderthickness": "0",
                "showplotborder": "1",
                "usehorizontalerrorbar": "1",
                "drawline": "0",
                "data": [{
                    "id": "S1",
                    "x": "20",
                    "y": "20",
                    "errorvalue": "15",
                    "usehorizontalerrorbar": "1"
                }, {
                    "id": "S2",
                    "x": "30",
                    "y": "70",
                    "errorvalue": "50",
                    "usehorizontalerrorbar": ""
                }, {
                    "id": "S3",
                    "x": "40",
                    "y": "40",
                    "errorvalue": "21",
                    "usehorizontalerrorbar": "0"
                }, {
                    "id": "S4",
                    "x": "50",
                    "y": "50",
                    "errorvalue": "10",
                    "usehorizontalerrorbar": ""
                }, {
                    "id": "S5",
                    "x": "60",
                    "y": "60",
                    "errorvalue": "11",
                    "usehorizontalerrorbar": "0"
                }]
            }]
        }
    }
}