module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "92",
                "value": "92",
                "displayValue": "92%",
                "toolText": "92%."
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "92",
                "value": "92",
                "displayValue": "92%",
                "toolText": "92%."
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-22-scale path",
                "vmltarget": ".raphael-group-16-scale shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "92",
                "value": "92",
                "displayValue": "92%",
                "toolText": "92%."
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-58-caption",
                "vmltarget": ".raphael-group-50-caption"
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
        type: 'hlineargauge',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Feedback Gauge",
                "lowerlimit": "0",
                "upperlimit": "100",
                "lowerlimitdisplay": "Bad",
                "upperlimitdisplay": "Good",
                "palette": "1",
                "numbersuffix": "%",
                "chartrightmargin": "20",
                "animation": "0"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "75",
                    "code": "FF654F",
                    "label": "Bad"
                }, {
                    "minvalue": "75",
                    "maxvalue": "90",
                    "code": "F6BD0F",
                    "label": "Moderate"
                }, {
                    "minvalue": "90",
                    "maxvalue": "100",
                    "code": "8BBA00",
                    "label": "Good"
                }]
            },
            "pointers": {
                "pointer": [{
                    "value": "92"
                }]
            }
        }
    }
}