<html>
<head>
    <meta charset="utf-8">
    <script type="text/javascript">

        var chartJSONData = {},jserror = {},width,height, timeSeriesData, timeSeriesSchema;
        <% data.forEach(function(data){ %>
            chartJSONData["<%= data.id %>"] = "<%= data.chartData %>";
            chartJSONData["<%= data.id %>_chartType"] = "<%= data.type %>";
            chartJSONData["<%= data.id %>_width"] = "<%= data.width %>";
            chartJSONData["<%= data.id %>_height"] = "<%= data.height %>";
            chartJSONData["<%= data.id %>_data-id"] = "<%= data.tsDataId %>";
            chartJSONData["<%= data.id %>_schema-id"] = "<%= data.tsSchemaId %>";
            jserror["<%= data.id %>"] = [];
            jserror["<%= data.id %>"].push({"jsErrorInBase":"<%= data.jsErrorInBase %>"});
            jserror["<%= data.id %>"].push({"jsErrorInTarget":"<%= data.jsErrorInTarget %>"});
        <% }); %>
        chartJSONData["ip"] = "<%= config.ip %>";
        chartJSONData["baseline"] = "<%= config.baseline %>";
        chartJSONData["testversion"] = "<%= config.testVersion %>";
        timeSeriesData = "<%= JSON.stringify(timeSeriesData) %>";
        timeSeriesSchema = "<%= JSON.stringify(timeSeriesSchema) %>";

        var lightBox = function (data) {
            var lb = this;
                lb.lboxEle = document.getElementsByClassName('lightbox')[0],
                lb.innerEle = document.getElementsByClassName('lightbox-wrapper')[0],
                lb.img = document.getElementsByClassName('display-img')[0],
                lb.json = document.getElementsByClassName('display-json')[0];
                lb.tmpDiv = document.createElement("div");
                lb.tsDataDiv = document.createElement("div");
                lb.tsSchemaDiv = document.createElement("div");
                lb.typeDiv = document.createElement("div");
                lb.widthDiv = document.createElement("div");
                lb.heightDiv = document.createElement("div");
                lb.versionDiv = document.getElementById("base-version");
                lb.versionDivSecond = document.getElementById("target-version");
                lb.lboxEle.onclick = function (e) {
                    if (e.target === lb.lboxEle) {
                        lb.hide();
                    }
                }
                document.onkeydown = function (e) {
                    if (e.keyCode === 27) {
                        lb.hide();
                    }
                }
        };
        lightBox.prototype.getData = function (id) {
            this.tmpDiv.innerHTML = chartJSONData[id];
            this.typeDiv.innerHTML = chartJSONData[id+"_chartType"];
            this.widthDiv.innerHTML = chartJSONData[id+"_width"];
            this.heightDiv.innerHTML = chartJSONData[id+"_height"];
            this.tsDataDiv.innerHTML = timeSeriesData;
            this.tsSchemaDiv.innerHTML = timeSeriesSchema;
            this.tsDataDiv.innerHTML = JSON.stringify(JSON.parse(this.tsDataDiv.innerHTML)[chartJSONData[id+"_data-id"]]);
            this.tsSchemaDiv.innerHTML = JSON.stringify(JSON.parse(this.tsSchemaDiv.innerHTML)[chartJSONData[id+"_schema-id"]]);
            document.getElementById('width').value = chartJSONData[id+"_width"];
            document.getElementById('height').value = chartJSONData[id+"_height"];
            document.getElementById('base-version').style.width = parseInt(chartJSONData[id+"_width"]) + 15;
            document.getElementById('base-version').style.height = parseInt(chartJSONData[id+"_height"]) + 35;
            document.getElementById('target-version').style.width = parseInt(chartJSONData[id+"_width"]) + 15;
            document.getElementById('target-version').style.height = parseInt(chartJSONData[id+"_height"]) + 35;
            document.getElementById('target-version').style.display = 'inline-block';
            var data = JSON.stringify(JSON.parse(this.tmpDiv.innerHTML), null, 4);
            return data;
        }
        lightBox.prototype.show = function () {
            this.lboxEle.style.display = 'block';
        };
        lightBox.prototype.hide = function () {
            this.lboxEle.style.display = 'none';
        };
        lightBox.prototype.update = function (id, image, version_base, version_target) {
            this.show();
            this.json.value = this.getData(id);
            // this.versionDiv.id = version_base;
            this.versionDiv.data = chartJSONData["ip"];
            this.versionDiv.src = chartJSONData["ip"]+"/gui-visualizer/chart-sampler.html";
            // this.versionDivSecond.id = version_target;
            this.versionDivSecond.data = chartJSONData["ip"];
            this.versionDivSecond.src = chartJSONData["ip"]+"/gui-visualizer/chart-sampler.html";
        };
        lightBox.prototype.showJsError = function(id,version){ /*This method use to display js error in alert box*/
            var data;
            if(version == "jsErrorInBase"){
                data= jserror[id][0][version];
            }
            else{
                data= jserror[id][1][version];
            }
            alert(data);
        }

        var lBox;

        function pageReady () {
            var ctrlKey = false,
                anchorEle = document.getElementsByClassName('img-link'),
                len = anchorEle.length,
                jsErrorEle = document.getElementsByClassName('JsError'),
                lenOfjsErrorEle = jsErrorEle.length;

            lBox = new lightBox();

            document.onkeydown = function (e) {
                if (e.ctrlKey || e.keyCode == 224) {
                    ctrlKey = true;
                } else {
                    ctrlKey = false;
                }
                if (e.keyCode === 27) {
                    lBox.hide();
                }
            };

            document.onclick = function (e) {
                ctrlKey = false;
            };

            while (len-- ) {
                anchorEle[len].onclick = function (e) {
                    var url = this.href.split('?'),
                        width = "<%= data.width %>",
                        baseVersion = "<%= config.baseline %>",
                        targetVersion = "<%= config.testVersion %>",
                        str = this.previousSibling.innerHTML,
                        version_base = baseVersion.substring(baseVersion.lastIndexOf("/")+1, baseVersion.length),
                        version_target = targetVersion.substring(targetVersion.lastIndexOf("/")+1, targetVersion.length);
                    if (ctrlKey) {
                        ctrlKey = false;
                        window.open(url[0], '_blank');
                    } else {
                        lBox.update(url[1], url[0], version_base, version_target);
                    }
                    return false;
                };
            }
            while (lenOfjsErrorEle-- ) {
                jsErrorEle[lenOfjsErrorEle].onclick = function (e) {
                    var url = this.href.split('?'),
                        version,
                        id = url[1];
                    /jsErrorInBase\b/.test(url[0]) && (version = "jsErrorInBase"); // check JsError is throw or not in base version 
                    /jsErrorInTarget\b/.test(url[0]) && (version = "jsErrorInTarget"); // check JsError is throw or not in target version
                    lBox.showJsError(id,version);
                    return false;
                };
            }
        }

        function updateCharts() {
            document.getElementById('base-version').contentWindow.update();
            document.getElementById('target-version').contentWindow.update();
        }

        function renderCharts() {
            var width = document.getElementById('width').value,
            height = document.getElementById('height').value;
            document.getElementById('base-version').contentWindow.drawChart(width, height);
            document.getElementById('target-version').contentWindow.drawChart(width, height);
        }

        function resizeCharts() {
            var width = document.getElementById('width').value,
            height = document.getElementById('height').value;
            document.getElementById('base-version').style.width = document.getElementById('target-version').style.width = width;
            document.getElementById('base-version').style.height = document.getElementById('target-version').style.height = height;
            document.getElementById('base-version').contentWindow.resize(width, height);
            document.getElementById('target-version').contentWindow.resize(width, height);
        }

    </script>

    <style type="text/css">

        img {
            width: 100%;
            height: auto;
        }
        .container {
            overflow: hidden;
            border: 1px solid red;
            padding: 5px;
            margin: 5px;
        }
        .img-wraper {
          float: left;
          width: 33.0%;
          box-sizing: border-box;
        }

        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width:100vw;
            height:100vh;
            border: none;
            background-color: #fff;
            display: none;
            overflow: scroll;
        }
        .lightbox-wrapper {
            white-space: nowrap;
            overflow: scroll;
        }
        .chart-container {
            overflow-x: scroll;
            width: 100vw;
        }
        .display-img {
            
        }
        iframe {
            display: inline-block;
            border: none;
        }
        .display-json-parent {
            width: 100%;
            height: 100%;
        }
        .display-json {
            width: 100%;
            height: 50%;
        }
        .test-case {
            font-size: 16px;
            font-weight: bold;
            float: left;
        }
        .view-json {
            color: #0000f9;
        }
        .framepos {
            position: relative;
            display: inline-block;
        }
        .title {
            position: relative;
            display: inline-block;
        }
        #testTitle {
            margin-left:30%
        }
        .buttons {
            margin:10
            padding: 10px;
            background-color: white;
            color: black;
            border-radius: 5px;
            border: 1px solid grey;
        }
        button, input{
            padding: 10px;
            background-color: white;
            color: black;
            border-radius: 5px;
            border: 3px solid grey;
            margin: 10px;
            cursor: pointer;
            font-weight: bolder;
        }
        input{
            cursor: text;
        }
        body {
            margin: 0;
            padding: 0;
            overflow: scroll;
        }
    </style>
</head>
<body onload='pageReady()'>
    <h3>Tests</h3>
    <div>
        <% data.forEach(function(data){ %>
        <div class="container" > 
            <h4 > <%= data.id %>[&nbsp;<%= data.description %>&nbsp;]</h4>
            <div class="img-wraper"><% if(data.jsErrorInBase.length>0){ %><a href='jsErrorInBase?<%= data.id%>' class='JsError' style="text-decoration: none;" ><span style="color:#ff0000;font-size:18px;">&nbsp;&#8855;</span></a><% } %><div class="version" style="visibility:hidden"><%= config.baseline %></div><a href='<%= data.refpath %>?<%= data.id %>' class='img-link' ><img src='<%= data.refpath %>' /></a></div>
            <div class="img-wraper"><% if(data.jsErrorInTarget.length>0){ %><a href='jsErrorInTarget?<%= data.id%>' class='JsError' style="text-decoration: none;" ><span style="color:#ff0000;font-size:18px;">&nbsp;&#8855;</span></a><% } %><div class="version" style="visibility:hidden"><%= config.testVersion %></div><a href='<%= data.snapshot %>?<%= data.id %>' class='img-link' ><img src='<%= data.snapshot %>' /></a></div>
            <div class="img-wraper"><a href='<%= data.diff %>?<%= data.id %>' class='img-link' ><img src='<%= data.diff %>' /></a></div>
        </div>
        <% }); %>
    </div>
    <div class="lightbox">
        <div class='lightbox-wrapper'>
            <div class="chart-container">
                <div class="framepos"><iframe id="base-version" scrolling="no"></iframe></div>
                <div class="framepos"><iframe id="target-version" scrolling="no"></iframe></div>
            </div>
            <div class="buttons"><button onclick="updateCharts()">Update</button><button onclick="renderCharts()">Render</button><button
                    onclick="resizeCharts()">Resize</button><input type="text" id="width" style="width:50px;"><input
                    type="text" id="height" style="width:50px;"></div>
            <div class="display-json-parent"><textarea class="display-json"></textarea></div>
        </div>
    </div>
</body>
</html>
