module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bubbles",
                "dataIndex": "0",
                "index": "0",
                "value": "0.3",
                "x": "30",
                "y": "0.3",
                "z": "116",
                "displayValue": "",
                "toolText": "Bubbles, $30, $0.3, $116"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bubbles",
                "dataIndex": "0",
                "index": "0",
                "value": "0.3",
                "x": "30",
                "y": "0.3",
                "z": "116",
                "displayValue": "",
                "toolText": "Bubbles, $30, $0.3, $116"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot circle",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bubbles",
                "dataIndex": "0",
                "index": "0",
                "value": "0.3",
                "x": "30",
                "y": "0.3",
                "z": "116",
                "displayValue": "",
                "toolText": "Bubbles, $30, $0.3, $116"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-88-caption",
                "vmltarget": ".raphael-group-90-caption"
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
        type: 'bubble',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "3",
                "caption": "Sample Caption",
                "numberprefix": "$",
                "is3d": "1",
                "xaxismaxvalue": "100",
                "showplotborder": "0",
                "xaxisname": "Stickiness",
                "yaxisname": "Cost Per Service",
                "chartrightmargin": "30",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "0%",
                    "x": "0"
                }, {
                    "label": "20%",
                    "x": "20",
                    "showverticalline": "1"
                }, {
                    "label": "40%",
                    "x": "40",
                    "showverticalline": "1"
                }, {
                    "label": "60%",
                    "x": "60",
                    "showverticalline": "1"
                }, {
                    "label": "80%",
                    "x": "80",
                    "showverticalline": "1"
                }, {
                    "label": "100%",
                    "x": "100",
                    "showverticalline": "1"
                }]
            }],
            "dataset": [{
                "seriesname": "Bubbles",
                "data": [{
                    "x": "30",
                    "y": ".3",
                    "z": "116",
                    "name": "Traders"
                }, {
                    "x": "3",
                    "y": "3.5",
                    "z": "99",
                    "name": "Farmers"
                }, {
                    "x": "8",
                    "y": "2.1",
                    "z": "33",
                    "name": "Individuals"
                }, {
                    "x": "62",
                    "y": "2.5",
                    "z": "72",
                    "name": "Medium Business Houses"
                }, {
                    "x": "78",
                    "y": "2.3",
                    "z": "55",
                    "name": "Corporate Group A"
                }, {
                    "x": "75",
                    "y": "1.4",
                    "z": "58",
                    "name": "Corporate Group C"
                }, {
                    "x": "97",
                    "y": "3.7",
                    "z": "80",
                    "name": "HNW Individuals"
                }, {
                    "x": "50",
                    "y": "4.5",
                    "z": "105",
                    "name": "Small Business Houses"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "2.5",
                    "istrendzone": "0",
                    "displayvalue": "Median Cost",
                    "color": "0372AB"
                }]
            }],
            "vtrendlines": [{
                "line": [{
                    "startvalue": "0",
                    "endvalue": "60",
                    "istrendzone": "1",
                    "displayvalue": "Potential Wins",
                    "color": "663333",
                    "alpha": "10"
                }, {
                    "startvalue": "60",
                    "endvalue": "100",
                    "istrendzone": "1",
                    "displayvalue": "Cash Cows",
                    "color": "990099",
                    "alpha": "5"
                }]
            }]
        }
    }
}