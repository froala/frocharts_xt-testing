// Error in svgtarget raphael-group-2-dataset

module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "start": "02/04/2007",
                "end": "02/10/2007",
                "processId": "__FCDPID__0",
                "sourceType": "task",
                "toolText": "Purchased, 3.2%"
            }
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "start": "02/04/2007",
                "end": "02/10/2007",
                "processId": "__FCDPID__0",
                "sourceType": "task",
                "toolText": "Purchased, 3.2%"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-117-caption",
                "vmltarget": ".raphael-group-104-caption"
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
        type: 'gantt',
        renderAt: 'chart-container',
        width: 600,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "dateformat": "mm/dd/yyyy",
                "caption": "Project Gantt",
                "subcaption": "From 1st Feb 2007 - 31st Aug 2007",
                "animation": "0"
            },
            "categories": [{
                "category": [{
                    "start": "02/01/2007",
                    "end": "03/01/2007",
                    "label": "Feb"
                }, {
                    "start": "03/01/2007",
                    "end": "04/01/2007",
                    "label": "Mar"
                }, {
                    "start": "04/01/2007",
                    "end": "05/01/2007",
                    "label": "Apr"
                }, {
                    "start": "05/01/2007",
                    "end": "06/01/2007",
                    "label": "May"
                }, {
                    "start": "06/01/2007",
                    "end": "07/01/2007",
                    "label": "Jun"
                }, {
                    "start": "07/01/2007",
                    "end": "08/01/2007",
                    "label": "Jul"
                }, {
                    "start": "08/01/2007",
                    "end": "09/01/2007",
                    "label": "Aug"
                }]
            }],
            "processes": {
                "fontsize": "12",
                "isbold": "1",
                "align": "right",
                "process": [{
                    "label": "Identify Customers"
                }, {
                    "label": "Survey 50 Customers"
                }, {
                    "label": "Interpret Requirements"
                }, {
                    "label": "Study Competition"
                }, {
                    "label": "Documentation of features"
                }, {
                    "label": "Brainstorm concepts"
                }, {
                    "label": "Design & Code"
                }, {
                    "label": "Testing / QA"
                }, {
                    "label": "Documentation of product"
                }, {
                    "label": "Global Release"
                }]
            },
            "tasks": {
                "task": [{
                    "start": "02/04/2007",
                    "end": "02/10/2007"
                }, {
                    "start": "02/08/2007",
                    "end": "02/19/2007"
                }, {
                    "start": "02/19/2007",
                    "end": "03/02/2007"
                }, {
                    "start": "02/24/2007",
                    "end": "03/02/2007"
                }, {
                    "start": "03/02/2007",
                    "end": "03/21/2007"
                }, {
                    "start": "03/21/2007",
                    "end": "04/06/2007"
                }, {
                    "start": "04/06/2007",
                    "end": "07/21/2007"
                }, {
                    "start": "07/21/2007",
                    "end": "08/19/2007"
                }, {
                    "start": "07/28/2007",
                    "end": "08/24/2007"
                }, {
                    "start": "08/24/2007",
                    "end": "08/27/2007"
                }]
            }
        }
    }
}