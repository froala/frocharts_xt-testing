module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "12",
                "value": "12",
                "displayValue": "12%",
                "toolText": "12%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "12",
                "value": "12",
                "displayValue": "12%",
                "toolText": "12%"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-2-dataset circle",
                "vmltarget": ".raphael-group-15-pointers shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "12",
                "value": "12",
                "displayValue": "12%",
                "toolText": "12%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-10-caption",
                "vmltarget": ".raphael-group-10-caption"
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
        type: 'bulb',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Freezer Compartment Temperature",
                "upperlimit": "100",
                "lowerlimit": "0",
                "numbersuffix": "%",
                "animation": "0"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "15",
                    "label": "Low",
                    "code": "00FF00"
                }, {
                    "minvalue": "15",
                    "maxvalue": "35",
                    "label": "Medium",
                    "code": "FFFF00"
                }, {
                    "minvalue": "35",
                    "maxvalue": "100",
                    "label": "High",
                    "code": "FF0000"
                }]
            },
            "value": "12"
        }
    }
}