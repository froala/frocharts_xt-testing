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
                "svgtarget": ".raphael-group-13-top-Side path",
                "vmltarget": ".raphael-group-13-top-Side shape"
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
                "svgtarget": ".raphael-group-80-caption",
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
        type: 'doughnut3d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'doughnut3d',
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