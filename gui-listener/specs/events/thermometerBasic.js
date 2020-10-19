module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "-40",
                "value": "-40",
                "displayValue": "-40Â° C",
                "toolText": "-40Â° C"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "-40",
                "value": "-40",
                "displayValue": "-40Â° C",
                "toolText": "-40Â° C"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-2-dataset path",
                "vmltarget": ".raphael-group-2-dataset shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "-40",
                "value": "-40",
                "displayValue": "-40Â° C",
                "toolText": "-40Â° C"
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
        type: 'thermometer',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Temperature Monitor",
                "palette": "4",
                "lowerlimit": "-50",
                "upperlimit": "10",
                "numbersuffix": "° C",
                "animation": "0"
            },
            "value": "-40"
        }
    }
}