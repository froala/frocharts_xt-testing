module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bakersfield Central",
                "dataIndex": "0",
                "dataValue": "15123",
                "displayValue": true,
                "categoryLabel": "Mon",
                "toolText": "Bakersfield Central, Mon, 15.12K"
            }
        },
        "rendered": {
            "triggered": false,
            "params": "noparams"
        },
        "initialized": {
            "triggered": false,
            "params": {
                "width": "550",
                "height": "350"
            }
        },
        "dataloaded": {
            "triggered": false,
            "params": "noparams"
        },
        "rendercomplete": {
            "triggered": false,
            "params": "noparams"
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bakersfield Central",
                "dataIndex": "0",
                "dataValue": "15123",
                "displayValue": true,
                "categoryLabel": "Mon",
                "toolText": "Bakersfield Central, Mon, 15.12K"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-3-hot circle",
				"vmltarget": ".raphael-group-3-hot"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "datasetIndex": "0",
                "datasetName": "Bakersfield Central",
                "dataIndex": "0",
                "dataValue": "15123",
                "displayValue": true,
                "categoryLabel": "Mon",
                "toolText": "Bakersfield Central, Mon, 15.12K"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".fusioncharts-caption",
				"vmltarget": ".fusioncharts-caption"
            }]
        }
    },
    "data": {
        type: 'msline',
        renderAt: 'chart-container',
        width: '550',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Number of visitors last week",
                "subCaption": "Bakersfield Central vs Los Angeles Topanga",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "paletteColors": "#0075c2,#1aaf5d",
                "bgcolor": "#ffffff",
                "showBorder": "0",
                "showShadow": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "showAxisLines": "0",
                "showAlternateHGridColor": "0",
                "divlineThickness": "1",
                "divLineDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "xAxisName": "Day",
                "animation": "0",
                "showValues": "0"
            },
            "categories": [{
                "category": [{
                    "label": "Mon"
                }, {
                    "label": "Tue"
                }, {
                    "label": "Wed"
                }, {
                    "vline": "true",
                    "lineposition": "0",
                    "color": "#6baa01",
                    "labelHAlign": "center",
                    "labelPosition": "0",
                    "label": "National holiday",
                    "dashed": "1"
                }, {
                    "label": "Thu"
                }, {
                    "label": "Fri"
                }, {
                    "label": "Sat"
                }, {
                    "label": "Sun"
                }]
            }],
            "dataset": [{
                "seriesname": "Bakersfield Central",
                "data": [{
                    "value": "15123"
                }, {
                    "value": "14233"
                }, {
                    "value": "25507"
                }, {
                    "value": "9110"
                }, {
                    "value": "15529"
                }, {
                    "value": "20803"
                }, {
                    "value": "19202"
                }]
            }, {
                "seriesname": "Los Angeles Topanga",
                "data": [{
                    "value": "13400"
                }, {
                    "value": "12800"
                }, {
                    "value": "22800"
                }, {
                    "value": "12400"
                }, {
                    "value": "15800"
                }, {
                    "value": "19800"
                }, {
                    "value": "21800"
                }]
            }],
            "trendlines": [{
                "line": [{
                    "startvalue": "17022",
                    "color": "#6baa01",
                    "valueOnRight": "1",
                    "displayvalue": "Average"
                }]
            }]
        }
    }
}
