module.exports = {
    "events": {
        "chartrollover": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            }
        },
        "chartclick": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-8-graphic rect",
                "vmltarget": ".raphael-group-8-graphic shape"
            }]
        },
        "chartrollout": {
            "triggered": false,
            "params": {
                "dataValue": "2452",
                "value": "2452",
                "displayValue": "2,452 ltrs.",
                "toolText": "2,452 ltrs."
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-48-caption",
                "vmltarget": ".raphael-group-46-caption"
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
        type: 'hled',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Noise Level Indicator",
                "lowerlimit": "0",
                "upperlimit": "120",
                "lowerlimitdisplay": "Low",
                "upperlimitdisplay": "High",
                "palette": "1",
                "numbersuffix": "dB",
                "chartrightmargin": "20",
                "animation": "0"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "60",
                    "code": "FF0000"
                }, {
                    "minvalue": "60",
                    "maxvalue": "90",
                    "code": "FFFF00"
                }, {
                    "minvalue": "90",
                    "maxvalue": "120",
                    "code": "00FF00"
                }]
            },
            "value": "102"
        }
    }
}