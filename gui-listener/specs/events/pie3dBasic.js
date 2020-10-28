module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "285040",
                "displayValue": "$285K",
                "categoryLabel": "Food",
                "toolText": "Food, $285K"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "285040",
                "displayValue": "$285K",
                "categoryLabel": "Food",
                "toolText": "Food, $285K"
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
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataIndex": "0",
                "dataValue": "285040",
                "displayValue": "$285K",
                "categoryLabel": "Food",
                "toolText": "Food, $285K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-103-caption",
                "vmltarget": ".raphael-group-103-caption"
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
        type: 'pie3d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'pie3d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of revenue by product categories",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "startingAngle": "20",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "showLegend": "1",
                "decimals": "1",
                "enableChartMouseMoveEvent": "1",
                "animation": "0"
            },
            "data": [{
                "label": "Food",
                "value": "285040"
            }, {
                "label": "Apparels",
                "value": "146330"
            }, {
                "label": "Electronics",
                "value": "105070"
            }, {
                "label": "Household",
                "value": "49100"
            }]
        }
    }
}