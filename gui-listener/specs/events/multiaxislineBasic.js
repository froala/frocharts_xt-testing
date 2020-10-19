module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "00:00s",
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "1",
                "datasetName": "Speed",
                "displayValue": "",
                "toolText": "Speed, 00:00s, 1",
                "value": "1"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "00:00s",
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "1",
                "datasetName": "Speed",
                "displayValue": "",
                "toolText": "Speed, 00:00s, 1",
                "value": "1"
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
                "categoryLabel": "00:00s",
                "dataIndex": "0",
                "dataValue": "1",
                "datasetIndex": "1",
                "datasetName": "Speed",
                "displayValue": "",
                "toolText": "Speed, 00:00s, 1",
                "value": "1"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-243-caption",
                "vmltarget": ".raphael-group-234-caption"
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
        type: 'multiaxisline',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Power Generator",
                "xaxisname": "Time",
                "showvalues": "0",
                "divlinealpha": "100",
                "numvdivlines": "4",
                "vdivlinealpha": "0",
                "showalternatevgridcolor": "1",
                "alternatevgridalpha": "5",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "00:00s"
                }, {
                    "label": "00:04s"
                }, {
                    "label": "00:08s"
                }, {
                    "label": "00:12s"
                }, {
                    "label": "00:16s"
                }, {
                    "label": "00:20s"
                }]
            }],
            "axis": [{
                "title": "Power",
                "titlepos": "left",
                "tickwidth": "10",
                "divlineisdashed": "1",
                "dataset": [{
                    "seriesname": "Power [W]",
                    "data": [{
                        "value": "6"
                    }, {
                        "value": "26"
                    }, {
                        "value": "16"
                    }, {
                        "value": "27"
                    }, {
                        "value": "28"
                    }, {
                        "value": "33"
                    }]
                }]
            }, {
                "title": "Temp.",
                "titlepos": "left",
                "numdivlines": "14",
                "tickwidth": "10",
                "divlineisdashed": "1",
                "dataset": [{
                    "seriesname": "Temperature",
                    "data": [{
                        "value": "296"
                    }, {
                        "value": "311"
                    }, {
                        "value": "336"
                    }, {
                        "value": "371"
                    }, {
                        "value": "389"
                    }, {
                        "value": "393"
                    }]
                }]
            }, {
                "title": "Speed[RPM]",
                "titlepos": "RIGHT",
                "axisonleft": "0",
                "numdivlines": "10",
                "tickwidth": "10",
                "divlineisdashed": "1",
                "dataset": [{
                    "seriesname": "Speed",
                    "data": [{
                        "value": "1"
                    }, {
                        "value": "11"
                    }, {
                        "value": "36"
                    }, {
                        "value": "49"
                    }, {
                        "value": "68"
                    }, {
                        "value": "88"
                    }]
                }]
            }]
        }
    }
}