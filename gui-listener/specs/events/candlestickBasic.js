module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "undefined",
                "dataIndex": "0",
                "datasetIndex": "0",
                "value": "0.5899999999999999",
                "datasetName": "undefined",
                "displayValue": "",
                "toolText": "<b>Open:</b> $24.6<br/><b>Close:</b> $25.19<br/><b>High:</b> $25.24<br/><b>Low:</b> $24.58<br/><b>Volume:</b> $17.86M"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "undefined",
                "dataIndex": "0",
                "datasetIndex": "0",
                "value": "0.5899999999999999",
                "datasetName": "undefined",
                "displayValue": "",
                "toolText": "<b>Open:</b> $24.6<br/><b>Close:</b> $25.19<br/><b>High:</b> $25.24<br/><b>Low:</b> $24.58<br/><b>Volume:</b> $17.86M"
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
                "categoryLabel": "undefined",
                "dataIndex": "0",
                "datasetIndex": "0",
                "value": "0.5899999999999999",
                "datasetName": "undefined",
                "displayValue": "",
                "toolText": "<b>Open:</b> $24.6<br/><b>Close:</b> $25.19<br/><b>High:</b> $25.24<br/><b>Low:</b> $24.58<br/><b>Volume:</b> $17.86M"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-263-caption",
                "vmltarget": ".raphael-group-199-caption"
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
        type: 'candlestick',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "numpdivlines": "5",
                "caption": "XYZ - 3 Months",
                "numberprefix": "$",
                "bearbordercolor": "E33C3C",
                "bearfillcolor": "E33C3C",
                "bullbordercolor": "1F3165",
                "pyaxisname": "Price",
                "vyaxisname": "Volume (In Millions)",
                "volumeheightpercent": "20",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "2006",
                    "x": "1",
                    "showline": "1"
                }]
            }],
            "dataset": [{
                "data": [{
                    "open": "24.6",
                    "high": "25.24",
                    "low": "24.58",
                    "close": "25.19",
                    "x": "1",
                    "volume": "17856350"
                }, {
                    "open": "24.36",
                    "high": "24.58",
                    "low": "24.18",
                    "close": "24.41",
                    "x": "2",
                    "volume": "3599252"
                }, {
                    "open": "24.63",
                    "high": "24.66",
                    "low": "24.11",
                    "close": "24.95",
                    "x": "3",
                    "volume": "74685351"
                }, {
                    "open": "24.53",
                    "high": "24.84",
                    "low": "24.01",
                    "close": "24.95",
                    "x": "4",
                    "volume": "49236987"
                }, {
                    "open": "24.84",
                    "high": "24.94",
                    "low": "24.56",
                    "close": "24.93",
                    "x": "5",
                    "volume": "18247006"
                }, {
                    "open": "24.96",
                    "high": "25.03",
                    "low": "24.58",
                    "close": "24.89",
                    "x": "6",
                    "volume": "67419690"
                }, {
                    "open": "25.25",
                    "high": "25.46",
                    "low": "25.11",
                    "close": "25.13",
                    "x": "7",
                    "volume": "95517555"
                }, {
                    "open": "25.27",
                    "high": "25.37",
                    "low": "25.0999",
                    "close": "25.18",
                    "x": "8",
                    "volume": "83656552"
                }, {
                    "open": "25.33",
                    "high": "25.43",
                    "low": "25.06",
                    "close": "25.16",
                    "x": "9",
                    "volume": "42177624"
                }, {
                    "open": "25.38",
                    "high": "25.51",
                    "low": "25.23",
                    "close": "25.38",
                    "x": "10",
                    "volume": "40668662"
                }, {
                    "open": "25.2",
                    "high": "25.78",
                    "low": "25.07",
                    "close": "25.09",
                    "x": "11",
                    "volume": "78602232"
                }, {
                    "open": "25.66",
                    "high": "25.8",
                    "low": "25.35",
                    "close": "25.37",
                    "x": "12",
                    "volume": "10338104"
                }, {
                    "open": "25.77",
                    "high": "25.97",
                    "low": "25.54",
                    "close": "25.72",
                    "x": "13",
                    "volume": "38067037"
                }, {
                    "open": "26.31",
                    "high": "26.35",
                    "low": "25.81",
                    "close": "25.83",
                    "x": "14",
                    "volume": "52104215"
                }, {
                    "open": "26.23",
                    "high": "26.6",
                    "low": "26.2",
                    "close": "26.35",
                    "x": "15",
                    "volume": "46274157"
                }]
            }],
            "trendset": [{
                "name": "Simple Moving Average",
                "color": "0099FF",
                "thickness": "0.5",
                "alpha": "100",
                "includeinlegend": "1",
                "data": [{
                    "x": "1",
                    "value": "24.6"
                }, {
                    "x": "2",
                    "value": "24.69"
                }, {
                    "x": "3",
                    "value": "24.89"
                }, {
                    "x": "4",
                    "value": "24.92"
                }, {
                    "x": "5",
                    "value": "25.2"
                }, {
                    "x": "6",
                    "value": "25.1"
                }, {
                    "x": "7",
                    "value": "25.17"
                }, {
                    "x": "8",
                    "value": "25.2"
                }, {
                    "x": "9",
                    "value": "25.2"
                }, {
                    "x": "10",
                    "value": "25.31"
                }, {
                    "x": "11",
                    "value": "25.28"
                }, {
                    "x": "12",
                    "value": "25.52"
                }, {
                    "x": "13",
                    "value": "25.7"
                }, {
                    "x": "14",
                    "value": "25.9"
                }, {
                    "x": "15",
                    "value": "26"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "24.2",
                    "color": "0372AB",
                    "displayvalue": "S1",
                    "thickness": "0.5",
                    "dashed": "1",
                    "dashlen": "2",
                    "dashgap": "2"
                }, {
                    "startvalue": "23.35",
                    "color": "0372AB",
                    "displayvalue": "S2",
                    "thickness": "0.5",
                    "dashed": "1",
                    "dashlen": "2",
                    "dashgap": "2"
                }, {
                    "startvalue": "28.2",
                    "color": "0372AB",
                    "displayvalue": "R2",
                    "thickness": "0.5",
                    "dashed": "1",
                    "dashlen": "2",
                    "dashgap": "2"
                }, {
                    "startvalue": "27.65",
                    "color": "0372AB",
                    "displayvalue": "R1",
                    "thickness": "0.5",
                    "dashed": "1",
                    "dashlen": "2",
                    "dashgap": "2"
                }]
            }],
            "vtrendlines": [{
                "line": [{
                    "startvalue": "10",
                    "endvalue": "13",
                    "color": "FF5904",
                    "displayvalue": "Results Impact",
                    "istrendzone": "1",
                    "alpha": "10"
                }]
            }]
        }
    }
}