module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "Index 1",
                "datasetName": "Series 1",
                "dataValue": "9",
                "value": "9",
                "displayValue": "",
                "toolText": "Series 1, Index 1, 9"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "Index 1",
                "datasetName": "Series 1",
                "dataValue": "9",
                "value": "9",
                "displayValue": "",
                "toolText": "Series 1, Index 1, 9"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot circle",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "categoryLabel": "Index 1",
                "datasetName": "Series 1",
                "dataValue": "9",
                "value": "9",
                "displayValue": "",
                "toolText": "Series 1, Index 1, 9"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-97-caption",
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
        type: 'radar',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Radar Chart",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Index 1"
                }, {
                    "label": "Index 2"
                }, {
                    "label": "Index 3"
                }, {
                    "label": "Index 4"
                }, {
                    "label": "Index 5"
                }, {
                    "label": "Index 6"
                }, {
                    "label": "Index 7"
                }, {
                    "label": "Index 8"
                }, {
                    "label": "Index 9"
                }, {
                    "label": "Index 10"
                }, {
                    "label": "Index 11"
                }]
            }],
            "dataset": [{
                "seriesname": "Series 1",
                "data": [{
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "7"
                }, {
                    "value": "8"
                }, {
                    "value": "8"
                }, {
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "7"
                }, {
                    "value": "8"
                }]
            }, {
                "seriesname": "Series 2",
                "data": [{
                    "value": "5"
                }, {
                    "value": "3"
                }, {
                    "value": "2"
                }, {
                    "value": "4"
                }, {
                    "value": "5"
                }, {
                    "value": "9"
                }, {
                    "value": "5"
                }, {
                    "value": "3"
                }, {
                    "value": "2"
                }, {
                    "value": "4"
                }, {
                    "value": "5"
                }]
            }]
        }
    }
}