module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "categoryLabel": "2008",
                "dataIndex": "0",
                "datasetIndex": "0",
                "maxDisplayValue": "259",
                "maximum": "259",
                "median": "89",
                "medianDisplayValue": "89",
                "minimum": "35",
                "minDisplayValue": "35",
                "q1": "60",
                "q3": "137",
                "toolText": "<b>Maximum: </b>259<br/><b>Q3: </b>137<br/><b>Median: </b>89<br/><b>Q1: </b>60<br/><b>Minimum: </b>35"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "categoryLabel": "2008",
                "dataIndex": "0",
                "datasetIndex": "0",
                "maxDisplayValue": "259",
                "maximum": "259",
                "median": "89",
                "medianDisplayValue": "89",
                "minimum": "35",
                "minDisplayValue": "35",
                "q1": "60",
                "q3": "137",
                "toolText": "<b>Maximum: </b>259<br/><b>Q3: </b>137<br/><b>Median: </b>89<br/><b>Q1: </b>60<br/><b>Minimum: </b>35"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-53-lowerBox rect",
                "vmltarget": ".raphael-group-52-lowerBox shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "categoryLabel": "2008",
                "dataIndex": "0",
                "datasetIndex": "0",
                "maxDisplayValue": "259",
                "maximum": "259",
                "median": "89",
                "medianDisplayValue": "89",
                "minimum": "35",
                "minDisplayValue": "35",
                "q1": "60",
                "q3": "137",
                "toolText": "<b>Maximum: </b>259<br/><b>Q3: </b>137<br/><b>Median: </b>89<br/><b>Q1: </b>60<br/><b>Minimum: </b>35"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-193-caption",
                "vmltarget": ".raphael-group-165-caption"
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
        type: 'boxandwhisker2d',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Visits to a Website",
                "subcaption": "In three years",
                "useroundedges": "1",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "label": "2008"
                }, {
                    "label": "2009"
                }, {
                    "label": "2010"
                }]
            }],
            "dataset": [{
                "seriesname": "January",
                "lowerboxcolor": "019FAA",
                "upperboxcolor": "D4DFFF",
                "data": [{
                    "value": "60,133,35,67,89,137,259"
                }, {
                    "value": "139,197,175,114,39,67,191"
                }, {
                    "value": "200,107,197,239,53,26,97"
                }]
            }, {
                "seriesname": "February",
                "lowerboxcolor": "2A5F55",
                "upperboxcolor": "D47F00",
                "data": [{
                    "value": "160,303,125,137,69,107,39"
                }, {
                    "value": "139,167,255,74,59,187,151"
                }, {
                    "value": "160,137,57,209,153,126,277"
                }]
            }]
        }
    }
}