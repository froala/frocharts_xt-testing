module.exports = {
    "events": {
        "dataplotrollover": {
            "triggered": false,
            "params": {
                "dataValue": "65",
                "link": "undefined",
                "value": "65",
                "displayValue": "",
                "toolText": "65"
            }
        },
        "dataplotclick": {
            "triggered": false,
            "params": {
                "dataValue": "65",
                "link": "undefined",
                "value": "65",
                "displayValue": "",
                "toolText": "65"
            },
            "actions": [{
                "type": "click",
                "svgtarget": ".raphael-group-19-pointers path",
                "vmltarget": ".raphael-group-15-pointers shape"
            }]
        },
        "dataplotrollout": {
            "triggered": false,
            "params": {
                "dataValue": "65",
                "link": "undefined",
                "value": "65",
                "displayValue": "",
                "toolText": "65"
            },
            "actions": [{
                "type": "moveToObject",
                "svgtarget": ".raphael-group-100-caption",
                "vmltarget": ".raphael-group-92-caption"
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
        type: 'angulargauge',
        renderAt: 'chart-container',
        width: 400,
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Speedometer",
                "bgcolor": "FFFFFF",
                "upperlimit": "100",
                "lowerlimit": "0",
                "showlimits": "1",
                "basefontcolor": "666666",
                "majortmnumber": "11",
                "majortmcolor": "666666",
                "majortmheight": "8",
                "minortmnumber": "5",
                "minortmcolor": "666666",
                "minortmheight": "3",
                "pivotradius": "20",
                "showgaugeborder": "0",
                "gaugeouterradius": "100",
                "gaugeinnerradius": "90",
                "gaugeoriginx": "170",
                "gaugeoriginy": "170",
                "gaugescaleangle": "320",
                "displayvaluedistance": "10",
                "placevaluesinside": "1",
                "gaugefillmix": "",
                "pivotfillmix": "{F0EFEA}, {BEBCB0}",
                "pivotbordercolor": "BEBCB0",
                "pivotfillratio": "80,20",
                "animation": "0"
            },
            "colorrange": {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "80",
                    "code": "00FF00",
                    "alpha": "0"
                }, {
                    "minvalue": "80",
                    "maxvalue": "100",
                    "name": "Danger",
                    "code": "FF0000",
                    "alpha": "50"
                }]
            },
            "dials": {
                "dial": [{
                    "value": "65",
                    "bordercolor": "FFFFFF",
                    "bgcolor": "bebcb0, f0efea, bebcb0",
                    "borderalpha": "0",
                    "basewidth": "10",
                    "topwidth": "3"
                }]
            },
            "annotations": {
                "groups": [{
                    "xpos": "170",
                    "ypos": "170",
                    "fillratio": "10,125,254",
                    "fillpattern": "radial",
                    "items": [{
                        "type": "circle",
                        "xpos": "0",
                        "ypos": "0",
                        "radius": "150",
                        "bordercolor": "bebcb0",
                        "fillasgradient": "1",
                        "fillcolor": "f0efea, bebcb0",
                        "fillratio": "85,15"
                    }, {
                        "type": "circle",
                        "xpos": "0",
                        "ypos": "0",
                        "radius": "120",
                        "fillcolor": "bebcb0, f0efea",
                        "fillratio": "85,15"
                    }, {
                        "type": "circle",
                        "xpos": "0",
                        "color": "FFFFFF",
                        "ypos": "0",
                        "radius": "100",
                        "bordercolor": "f0efea"
                    }]
                }]
            }
        }
    }
}