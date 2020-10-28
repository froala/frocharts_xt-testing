module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "Purchased",
                "dataValue": "12342",
                "value": "12342",
                "displayValue": "Purchased, 12.34K",
                "toolText": "Purchased, 3.2%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "Purchased",
                "dataValue": "12342",
                "value": "12342",
                "displayValue": "Purchased, 12.34K",
                "toolText": "Purchased, 3.2%"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot path",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "categoryLabel": "Purchased",
                "dataValue": "12342",
                "value": "12342",
                "displayValue": "Purchased, 12.34K",
                "toolText": "Purchased, 3.2%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-37-caption",
                "vmltarget": ".raphael-group-37-caption"
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
        type: 'funnel',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Conversion Ratio",
                "subcaption": "May 2007",
                "animation": "0"
            },
            "data": [{
                "label": "Website Visits",
                "value": "385634"
            }, {
                "label": "Downloads",
                "value": "175631"
            }, {
                "label": "Interested to buy",
                "value": "84564"
            }, {
                "label": "Contract finalized",
                "value": "35654"
            }, {
                "label": "Purchased",
                "value": "12342"
            }]
        }
    }
}