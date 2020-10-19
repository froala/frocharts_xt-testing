module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "38.42",
                "datasetIndex": "0",
                "datasetName": "undefined"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "38.42",
                "datasetIndex": "0",
                "datasetName": "undefined"
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
                "dataValue": "38.42",
                "datasetIndex": "0",
                "datasetName": "undefined"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-94-caption",
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
        type: 'sparkcolumn',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Cisco",
                "canvasleftmargin": "110",
                "animation": "0"
            },
            "dataset": [{
                "data": [{
                    "value": "38.42"
                }, {
                    "value": "41.43"
                }, {
                    "value": "34.78"
                }, {
                    "value": "40.67"
                }, {
                    "value": "44.12"
                }, {
                    "value": "38.45"
                }, {
                    "value": "40.71"
                }, {
                    "value": "49.90"
                }, {
                    "value": "40.12"
                }, {
                    "value": "34.91"
                }, {
                    "value": "42.02"
                }, {
                    "value": "35.21"
                }, {
                    "value": "43.31"
                }, {
                    "value": "40.21"
                }, {
                    "value": "40.54"
                }, {
                    "value": "40.90"
                }, {
                    "value": "54.21"
                }, {
                    "value": "41.90"
                }, {
                    "value": "33.43"
                }, {
                    "value": "46.73"
                }, {
                    "value": "50.42"
                }, {
                    "value": "40.74"
                }, {
                    "value": "42.31"
                }, {
                    "value": "50.39"
                }, {
                    "value": "51.10"
                }, {
                    "value": "44.84"
                }, {
                    "value": "51.64"
                }, {
                    "value": "47.62"
                }, {
                    "value": "39.61"
                }, {
                    "value": "35.13"
                }]
            }]
        }
    }
}