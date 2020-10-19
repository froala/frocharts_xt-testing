module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "26",
                "displayValue": "Services, 26%",
                "categoryLabel": "Services",
                "toolText": "Services, 26%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataIndex": "0",
                "dataValue": "26",
                "displayValue": "Services, 26%",
                "categoryLabel": "Services",
                "toolText": "Services, 26%"
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
                "dataIndex": "0",
                "dataValue": "26",
                "displayValue": "Services, 26%",
                "categoryLabel": "Services",
                "toolText": "Services, 26%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-26-caption",
                "vmltarget": ".raphael-group-20-caption"
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
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'doughnut2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Company Revenue",
                "showpercentagevalues": "1",
                "animation": "0"
            },
            "data": [{
                "label": "Services",
                "value": "26"
            }, {
                "label": "Hardware",
                "value": "32"
            }, {
                "label": "Software",
                "value": "42"
            }]
        }
    }
}