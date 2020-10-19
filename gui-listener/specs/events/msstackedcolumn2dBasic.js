module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product<br/>A",
                "dataIndex": "0",
                "value": "30",
                "displayValue": "$30M",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $30M"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Product<br/>A",
                "dataIndex": "0",
                "value": "30",
                "displayValue": "$30M",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $30M"
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
                "datasetName": "Product<br/>A",
                "dataIndex": "0",
                "value": "30",
                "displayValue": "$30M",
                "categoryLabel": "2001",
                "toolText": "Product A, 2001, $30M"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-157-caption",
                "vmltarget": ".raphael-group-154-caption"
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
        type: 'msstackedcolumn2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        type: 'msstackedcolumn2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Break-up of Annual Revenue",
                "subcaption": "In Million $",
                "xaxisname": "Year",
                "yaxisname": "Sales in M$",
                "numdivlines": "3",
                "numberprefix": "$",
                "numbersuffix": "M",
                "showsum": "1",
                "animation": "0"
            },
            "categories": [{
                "font": "Arial",
                "fontsize": "12",
                "fontcolor": "000000",
                "category": [{
                    "label": "2001"
                }, {
                    "label": "2002"
                }, {
                    "label": "2003"
                }, {
                    "label": "2004"
                }, {
                    "label": "2005"
                }]
            }],
            "dataset": [{
                "dataset": [{
                    "seriesname": "Product A",
                    "color": "AFD8F8",
                    "data": [{
                        "value": "30"
                    }, {
                        "value": "26"
                    }, {
                        "value": "29"
                    }, {
                        "value": "31"
                    }, {
                        "value": "34"
                    }]
                }, {
                    "seriesname": "Product B",
                    "color": "F6BD0F",
                    "data": [{
                        "value": "21"
                    }, {
                        "value": "28"
                    }, {
                        "value": "39"
                    }, {
                        "value": "41"
                    }, {
                        "value": "24"
                    }]
                }]
            }, {
                "dataset": [{
                    "seriesname": "Service A",
                    "color": "8BBA00",
                    "data": [{
                        "value": "27"
                    }, {
                        "value": "25"
                    }, {
                        "value": "28"
                    }, {
                        "value": "26"
                    }, {
                        "value": "10"
                    }]
                }, {
                    "seriesname": "Service B",
                    "color": "A66EDD",
                    "data": [{
                        "value": "17"
                    }, {
                        "value": "15"
                    }, {
                        "value": "18"
                    }, {
                        "value": "16"
                    }, {
                        "value": "10"
                    }]
                }, {
                    "seriesname": "Service C",
                    "color": "F984A1",
                    "data": [{
                        "value": "12"
                    }, {
                        "value": "17"
                    }, {
                        "value": "16"
                    }, {
                        "value": "15"
                    }, {
                        "value": "12"
                    }]
                }]
            }]
        }
    }
}