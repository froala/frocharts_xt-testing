// Unable to find element raphael-group-2-dataset path in chart
module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "label": "CEO",
                "toolText": "CEO"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
               "label": "CEO",
                "toolText": "CEO"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-2-dataset path",
                "vmltarget": ".raphael-group-2-dataset shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
               "label": "CEO",
                "toolText": "CEO"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-68-caption",
                "vmltarget": ".raphael-group-68-caption"
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
        type: 'multilevelpie',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "palette": "2",
                "piefillalpha": "34",
                "pieborderthickness": "3",
                "hoverfillcolor": "FDCEDA",
                "piebordercolor": "FFFFFF",
                "basefontsize": "9",
                "usehovercolor": "1",
                "caption": "Organization Chart",
                "animation": "0"
            },
            "category": [{
                "label": "CEO",
                "fillcolor": "DBFF6C",
                "category": [{
                    "label": "CTO",
                    "fillcolor": "DBFF6C",
                    "category": [{
                        "label": "Proj. Manager",
                        "category": [{
                            "label": "Design"
                        }, {
                            "label": "Coding"
                        }, {
                            "label": "Validate"
                        }]
                    }, {
                        "label": "Q & A Manager",
                        "category": [{
                            "label": "Testing Team"
                        }]
                    }, {
                        "label": "Architect",
                        "category": [{
                            "label": "Study"
                        }, {
                            "label": "Design"
                        }]
                    }]
                }, {
                    "label": "CFO",
                    "fillcolor": "FBE299",
                    "category": [{
                        "label": "Payables",
                        "hovertext": "Accounts Payable Team",
                        "category": [{
                            "label": "Salary",
                            "hovertext": "Team for salary accounts maintenance and upkeep"
                        }, {
                            "label": "Purchase"
                        }, {
                            "label": "Other",
                            "hovertext": "Other Payments"
                        }]
                    }, {
                        "label": "Receivables",
                        "hovertext": "Accounts Receivables Team",
                        "category": [{
                            "label": "SW1",
                            "hovertext": "Online Software Receipts Accounts"
                        }, {
                            "label": "SW2",
                            "hovertext": "Physical Software Receipts Accounts"
                        }, {
                            "label": "SER1",
                            "hovertext": "Services Collection"
                        }, {
                            "label": "SER2",
                            "hovertext": "Services Collection (Physical)"
                        }, {
                            "label": "OTR",
                            "hovertext": "Subscription and Other Collections"
                        }]
                    }]
                }, {
                    "label": "CIO",
                    "fillcolor": "DAEDFC",
                    "link": "Details.asp?CIO",
                    "category": [{
                        "label": "PR",
                        "hovertext": "PR Team",
                        "category": [{
                            "label": "Packaging",
                            "hovertext": "Packaging Staff"
                        }, {
                            "label": "Inv Rel.",
                            "hovertext": "Investor Relations Upkeep"
                        }, {
                            "label": "Marketing",
                            "hovertext": "Marketing & Sales"
                        }]
                    }, {
                        "label": "HR",
                        "hovertext": "HR Team",
                        "category": [{
                            "label": "Selection",
                            "hovertext": "Selection of Candidates"
                        }, {
                            "label": "Deploying",
                            "hovertext": "Deploying at required site"
                        }]
                    }]
                }]
            }]
        }
    }
}