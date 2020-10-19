module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataValue": "58.65",
                "value": "58.65",
                "columnId": "Mon",
                "rowId": "Google",
                "toolText": "<b>Value: </b>68<br/><b>Percentage: </b>58.65%"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataValue": "58.65",
                "value": "58.65",
                "columnId": "Mon",
                "rowId": "Google",
                "toolText": "<b>Value: </b>68<br/><b>Percentage: </b>58.65%"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot rect",
                "vmltarget": ".raphael-group-3-hot shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "undefined",
                "dataValue": "58.65",
                "value": "58.65",
                "columnId": "Mon",
                "rowId": "Google",
                "toolText": "<b>Value: </b>68<br/><b>Percentage: </b>58.65%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-114-caption",
                "vmltarget": ".raphael-group-112-caption"
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
        type: 'heatmap',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Weekly Percentage",
                "subcaption": "In percentage",
                "animation": "0"
            },
            "rows": {
                "row": [{
                    "id": "Google",
                    "label": "Google US"
                }, {
                    "id": "Yahoo",
                    "label": "Yahoo US"
                }, {
                    "id": "Microsoft",
                    "label": "Microsoft US"
                }]
            },
            "columns": {
                "column": [{
                    "id": "MON",
                    "label": "Monday"
                }, {
                    "id": "TUE",
                    "label": "Tuesday"
                }, {
                    "id": "WED",
                    "label": "Wednesday"
                }, {
                    "id": "THU",
                    "label": "Thursday"
                }, {
                    "id": "FRI",
                    "label": "Friday"
                }]
            },
            "dataset": [{
                "data": [{
                    "rowid": "Yahoo",
                    "columnid": "Mon",
                    "value": "0"
                }, {
                    "rowid": "Yahoo",
                    "columnid": "Tue",
                    "value": "71"
                }, {
                    "rowid": "Yahoo",
                    "columnid": "Wed",
                    "value": "70"
                }, {
                    "rowid": "Yahoo",
                    "columnid": "Thu",
                    "value": "3"
                }, {
                    "rowid": "Yahoo",
                    "columnid": "Fri",
                    "value": "79"
                }, {
                    "rowid": "Google",
                    "columnid": "Mon",
                    "value": "68"
                }, {
                    "rowid": "Google",
                    "columnid": "Tue",
                    "value": "5"
                }, {
                    "rowid": "Google",
                    "columnid": "Wed",
                    "value": "95"
                }, {
                    "rowid": "Google",
                    "columnid": "Thu",
                    "value": "-10"
                }, {
                    "rowid": "Google",
                    "columnid": "Fri",
                    "value": "55.98"
                }, {
                    "rowid": "Microsoft",
                    "columnid": "Mon",
                    "value": "98"
                }, {
                    "rowid": "Microsoft",
                    "columnid": "Tue",
                    "value": "8"
                }, {
                    "rowid": "Microsoft",
                    "columnid": "Wed",
                    "value": "123"
                }, {
                    "rowid": "Microsoft",
                    "columnid": "Thu",
                    "value": "79"
                }, {
                    "rowid": "Microsoft",
                    "columnid": "Fri",
                    "value": "39"
                }]
            }],
            "colorrange": {
                "mapbypercent": "1",
                "gradient": "1",
                "minvalue": "0",
                "code": "00CCFF",
                "startlabel": "Poor",
                "endlabel": "Good",
                "color": [{
                    "code": "66ADD9",
                    "maxvalue": "30",
                    "label": "BAD"
                }, {
                    "code": "F2CF63",
                    "maxvalue": "70",
                    "label": "AVERAGE"
                }, {
                    "code": "D99036",
                    "maxvalue": "100"
                }]
            }
        }
    }
}