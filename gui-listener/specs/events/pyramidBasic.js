module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "Suyama",
                "dataValue": "14000",
                "displayValue": "Suyama, $14K",
                "toolText": "Suyama, 3.17%",
                "value": "14000"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "Suyama",
                "dataValue": "14000",
                "displayValue": "Suyama, $14K",
                "toolText": "Suyama, 3.17%",
                "value": "14000"
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
                "categoryLabel": "Suyama",
                "dataValue": "14000",
                "displayValue": "Suyama, $14K",
                "toolText": "Suyama, 3.17%",
                "value": "14000"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-107-caption",
                "vmltarget": ".raphael-group-107-caption"
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
        type: 'pyramid',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales distribution by Employee",
                "subcaption": "Jan 07 - Jul 07",
                "numberprefix": "$",
                "animation": "0"
            },
            "data": [{
                "label": "Buchanan",
                "value": "20000"
            }, {
                "label": "Callahan",
                "value": "49000"
            }, {
                "label": "Davolio",
                "value": "63000"
            }, {
                "label": "Dodsworth",
                "value": "41000"
            }, {
                "label": "Fuller",
                "value": "74000"
            }, {
                "label": "King",
                "value": "49000"
            }, {
                "label": "Leverling",
                "value": "77000"
            }, {
                "label": "Peacock",
                "value": "54000"
            }, {
                "label": "Suyama",
                "value": "14000"
            }]
        }
    }
}