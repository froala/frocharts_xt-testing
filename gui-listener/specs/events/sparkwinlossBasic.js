module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "0",
                "datasetName": "undefined",
                "toolText": ""
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "0",
                "datasetName": "undefined",
                "toolText": ""
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-33-columns rect",
                "vmltarget": ".raphael-group-33-columns shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "0",
                "datasetName": "undefined",
                "toolText": ""
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-48-caption",
                "vmltarget": ".raphael-group-48-caption"
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
        type: 'sparkwinloss',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Yankees",
                "subcaption": "Current season",
                "animation": "0"
            },
            "dataset": [{
                "data": [{
                    "value": "W"
                }, {
                    "value": "W"
                }, {
                    "value": "D"
                }, {
                    "value": "L"
                }, {
                    "value": "W"
                }, {
                    "value": "W"
                }, {
                    "value": "L"
                }, {
                    "value": "L"
                }, {
                    "value": "W"
                }, {
                    "value": "L"
                }, {
                    "value": "W",
                    "scoreless": "1"
                }, {
                    "value": "L"
                }, {
                    "value": "W"
                }, {
                    "value": "W"
                }]
            }]
        }
    }
}