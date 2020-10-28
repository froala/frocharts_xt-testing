module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "78.9",
                "value": "78.9",
                "displayValue": "$78.9K",
                "toolText": "$78.9K"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "78.9",
                "value": "78.9",
                "displayValue": "$78.9K",
                "toolText": "$78.9K"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-2-dataset rect",
                "vmltarget": ".raphael-group-2-dataset shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "78.9",
                "value": "78.9",
                "displayValue": "$78.9K",
                "toolText": "$78.9K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-36-caption",
                "vmltarget": ".raphael-group-30-caption"
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
        type: 'hbullet',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "lowerlimit": "0",
                "upperlimit": "100",
                "caption": "Revenue",
                "subcaption": "US $ (1,000s)",
                "numberprefix": "$",
                "numbersuffix": "K",
                "showvalue": "1",
                "animation": "0"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "50",
                    "color": "A6A6A6"
                }, {
                    "minvalue": "50",
                    "maxvalue": "75",
                    "color": "CCCCCC"
                }, {
                    "minvalue": "75",
                    "maxvalue": "100",
                    "color": "E1E1E1"
                }]
            },
            "value": "78.9",
            "target": "80"
        }
    }
}