module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-8-graphic path",
                "vmltarget": ".raphael-group-8-graphic shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-47-caption",
                "vmltarget": ".raphael-group-47-caption"
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
        type: 'cylinder',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Diesel Tank Status",
                "palette": "3",
                "lowerlimit": "0",
                "upperlimit": "4000",
                "numbersuffix": " ltrs.",
                "bgcolor": "FFFFFF",
                "animation": "0"
            },
            "value": "2452"
        }
    }
}