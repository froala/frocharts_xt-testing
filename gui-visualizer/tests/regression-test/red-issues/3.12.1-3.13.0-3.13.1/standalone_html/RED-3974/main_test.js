var skuColorArr = {};
var allSkuColorArr = [];
skuColorArr['new'] = [];
skuColorArr['new'][0] = "#4292c6";
skuColorArr['new'][1] = "#08306b,#08519c,#2171b5,#4292c6,#6baed6,#9ecae1,#c6dbef,#deebf7,#f7fbff";

skuColorArr['tss'] = [];
skuColorArr['tss'][0] = "#807dba";
skuColorArr['tss'][1] = "#3f007d,#54278f,#6a51a3,#807dba,#9e9ac8,#bcbddc,#dadaeb,#efedf5,#fcfbfd";

skuColorArr['ts9'] = [];
skuColorArr['ts9'][0] = "#fd8d3c";
skuColorArr['ts9'][1] = "#7f2704,#a63603,#d94801,#f16913,#fd8d3c,#fdae6b,#fdd0a2,#fee6ce,#fff5eb";

skuColorArr['upgrade'] = [];
skuColorArr['upgrade'][0] = "#fb6a4a";
skuColorArr['upgrade'][1] = "#67000d,#a50f15,#cb181d,#ef3b2c,#fb6a4a,#fc9272,#fcbba1,#fee0d2,#fff5f0";

skuColorArr['actvn'] = [];
skuColorArr['actvn'][0] = "#41ab5d";
skuColorArr['actvn'][1] = "#00441b,#006d2c,#238b45,#41ab5d,#74c476,#a1d99b,#c7e9c0,#e5f5e0,#f7fcf5";

skuColorArr['revenue'] = [];
skuColorArr['revenue'][0] = "#02818a";
skuColorArr['revenue'][1] = "#014636,#016c59,#02818a,#3690c0,#67a9cf,#a6bddb,#d0d1e6,#ece2f0,#fff7fb";

allSkuColorArr = [skuColorArr['new'][0], skuColorArr['tss'][0], skuColorArr['ts9'][0], skuColorArr['upgrade'][0], skuColorArr['actvn'][0], skuColorArr['revenue'][0]];

function GetSKUColorCode(pSKU) {
    return skuColorArr[pSKU][0];
}

function GetSKUColorRange(pSKU) {
    return skuColorArr[pSKU][1];
}


function RenderTE9SparkLine(pContainerID, pLineColour, pData)
{

    FusionCharts.ready(function() {
        var sparkchart = new FusionCharts({
            type: 'sparkcolumn',
            renderAt: pContainerID,
            width: '150',
            height: '70',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "chartTopMargin": "2",
                    "chartBottomMargin": "2",
                    "chartRightMargin": "100",
                    "showBorder": "0",
                    "canvasBorderThickness": "0",
                    "bgColor": "#ffffff",
                    "theme": "hulk-light",
                    "plotFillColor": pLineColour,
                    "highColor": pLineColour,
                    "lowColor": pLineColour,
                    "showHoverEffect": "0",
                    "showToolTipShadow": "0",
                    "toolTipBorderColor": "#999999",
                    "toolTipColor": "#FFFFFF",
                    "toolTipBgColor": "#999999",
                    "toolTipBgAlpha": "80",
                    "borderThickness": "0",
                    "plottooltext": "<b>$label : $dataValue</b>"
                },
                "dataset": [{
                        "data": pData
                    }]
            }
        })
                .render();
    });
}

function CalculatePercentage(pAchieved, pTarget) {

    var pPercentage = 0;

    if (pAchieved == 0 || pTarget == 0)
        return pPercentage;

    pPercentage = (pAchieved / pTarget) * 100;

    return pPercentage.toFixed(2);
}


function NumberFormat(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    var z = 0;
    var len = String(x1).length;
    var num = parseInt((len / 2) - 1);

    while (rgx.test(x1))
    {
        if (z > 0)
        {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        else
        {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
            rgx = /(\d+)(\d{2})/;
        }
        z++;
        num--;
        if (num == 0)
        {
            break;
        }
    }
    return x1 + x2;
}

//divZoneWiseEarningChart
var zonewisecharts;

function RenderZoneWiseEarningChart(pCategory, pData)
{
    FusionCharts.ready(function() {
        zonewisecharts = new FusionCharts({
            type: 'mscolumn2d',
            renderAt: 'divZoneWiseEarningChart',
            width: '98%',
            height: '300',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "xAxisname": "Zones",
                    "yAxisName": "Actvn Value(in Cr.)",
                    "numberPrefix": "",
                    "plotFillAlpha": "85",
                    //Cosmetics
                    "paletteColors": allSkuColorArr.toString(),
                    "baseFontColor": "#333333",
                    "baseFont": "Helvetica Neue,Arial",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "13",
                    "subcaptionFontBold": "0",
                    "showBorder": "0",
                    "bgColor": "#ffffff",
                    "showShadow": "0",
                    "canvasBgColor": "#ffffff",
                    "canvasBorderAlpha": "0",
                    "divlineAlpha": "100",
                    "divlineColor": "#999999",
                    "divlineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineGapLen": "1",
                    "divLineColor": "#efefef",
                    "usePlotGradientColor": "0",
                    "showplotborder": "0",
                    "valueFontColor": "#555555",
                    "placeValuesInside": "0",
                    "showHoverEffect": "1",
                    "rotateValues": "0",
                    "showXAxisLine": "1",
                    "xAxisLineThickness": "1",
                    "xAxisLineColor": "#999999",
                    "showAlternateHGridColor": "0",
                    "legendBgAlpha": "0",
                    "legendBorderAlpha": "0",
                    "legendShadow": "0",
                    "legendItemFontSize": "10",
                    "legendItemFontColor": "#666666",
                    "transposeAxis": "1",
                    "drawCrossLine": "1",
                    "crossLineColor": "#DEDEDE",
                    "crossLineAlpha": "100"
                },
                "categories": pCategory,
                "dataset": pData,
                /*"trendlines": [{
                 "line": [{
                 "startvalue": "22.5",
                 "color": "#0075c2",
                 "displayvalue": "TE9{br}Avg",
                 "valueOnRight": "1",
                 "thickness": "1",
                 "showBelow": "1",
                 "tooltext": "TE9 Average  : Rs. 22.6Cr "
                 }, {
                 "startvalue": "10.3",
                 "color": "#1aaf5d",
                 "displayvalue": "TSS{br}Avg",
                 "valueOnRight": "1",
                 "thickness": "1",
                 "showBelow": "1",
                 "tooltext": "TSS Average  : Rs. 10.3Cr"
                 }]
                 }]*/
            }
        }
        );
        zonewisecharts.render();
    });
}

function onChangeChartType(pChartType) {
    zonewisecharts.chartType(pChartType);
}

function CreateJSONForChart(jsonData, cat_arr, dataset_arr) {
    //getting category Array
    var temp_cat_arr = jsonData['category'];
    cat_arr[0] = {};
    cat_arr[0]['category'] = [];
    var index = 0;
    for (x in temp_cat_arr) {
        cat_arr[0]['category'][index] = {};
        cat_arr[0]['category'][index]['label'] = temp_cat_arr[x];
        index++;
    }

    //creating data array
    var temp_sub_cat = jsonData['sub_category'];
    var temp_dataset_arr = {};
    index = 0;
    for (x in temp_sub_cat) {
        temp_dataset_arr[temp_sub_cat[x]] = {};
        temp_dataset_arr[temp_sub_cat[x]]['seriesname'] = temp_sub_cat[x];
        temp_dataset_arr[temp_sub_cat[x]]['data'] = [];
    }

    //console.log(temp_dataset_arr);

    var temp_data = jsonData['data'];
    for (x in temp_data) {
        tmp_obj = temp_data[x];
        for (y in tmp_obj) {
            temp_dataset_arr[y]['data'].push({"value": tmp_obj[y]});
        }
    }

    index = 0;
    for (x in temp_dataset_arr) {
        dataset_arr[index] = {};
        dataset_arr[index] = temp_dataset_arr[x];
        index++;
    }
}

