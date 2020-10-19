
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @version 3.13.0-alpha.2
 *
 * @attributions (infers respective third-party copyrights)
 * Raphael 2.1.0 (modified as 'Red Raphael') <http://raphaeljs.com/license.html>
 * JSON v2 <http://www.JSON.org/js.html>
 * Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FusionCharts", [], factory);
	else if(typeof exports === 'object')
		exports["FusionCharts"] = factory();
	else
		root["FusionCharts"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpFusionCharts([3],{

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _stringify = __webpack_require__(36);

var _stringify2 = _interopRequireDefault(_stringify);

var _lib = __webpack_require__(5);

var _fusioncharts = __webpack_require__(331);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _zoomline = __webpack_require__(706);

var _zoomline2 = _interopRequireDefault(_zoomline);

var _zoomlineDataset = __webpack_require__(708);

var _zoomlineDataset2 = _interopRequireDefault(_zoomlineDataset);

var _schedular = __webpack_require__(13);

var _scrollApis = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var userAgent = window.navigator.userAgent,
    doc = window.doc,
    isIE = /msie/i.test(userAgent) && !window.opera,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    // invisible but clickable
toFloat = window.parseFloat,
    PIPE = '|',
    PX = 'px',
    toInt = window.parseInt,
    BLANK = '',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    mathCeil = math.ceil,
    mathFloor = math.floor,
    fireMouseEvent = function fireMouseEvent(eventName, domElement, mouseEventInit) {
  var event;
  if (!domElement || !eventName) {
    return;
  }

  if (!mouseEventInit) {
    mouseEventInit = {};
  }
  if (mouseEventInit.originalEvent) {
    mouseEventInit = mouseEventInit.originalEvent;
  }
  // map touch event for touch devices
  if (mouseEventInit.touches) {
    mouseEventInit = mouseEventInit.touches[0];
  }

  if (domElement.dispatchEvent) {
    if (MouseEvent) {
      // for FireFox, chrome and opera. NOT confirmed in Safari
      // Creates a MouseEvent object.
      event = new MouseEvent(eventName, {
        bubbles: !!mouseEventInit.bubbles,
        cancelable: !!mouseEventInit.cancelable,
        clientX: mouseEventInit.clientX || mouseEventInit.pageX && mouseEventInit.pageX - doc.body.scrollLeft - doc.documentElement.scrollLeft || 0,
        clientY: mouseEventInit.clientY || mouseEventInit.pageY && mouseEventInit.pageY - doc.body.scrollTop - doc.documentElement.scrollTop || 0,
        screenX: mouseEventInit.screenX || 0,
        screenY: mouseEventInit.screenY || 0,
        pageX: mouseEventInit.pageX || 0,
        pageY: mouseEventInit.pageY || 0
      });
    } else if (doc.createEvent) {
      // for IE support.
      event = doc.createEvent('HTMLEvents');
      event.initEvent(eventName, !!mouseEventInit.bubbles, !!mouseEventInit.cancelable);
    }
    event.eventName = eventName;
    event && domElement.dispatchEvent(event);
  } else if (doc.createEventObject && domElement.fireEvent) {
    event = doc.createEventObject();
    event.eventType = eventName;
    event.eventName = eventName;
    // trigger the event forcefully.
    domElement.fireEvent('on' + eventName, event);
  }
},
    _isWithinCanvas = function _isWithinCanvas(e, chart) {
  var chartConfig = chart.get('config'),
      mousePos = (0, _lib.getMouseCoordinate)(chart.get('linkedItems', 'container'), e, chart),

  /* converts the original mouse event toa Fusion Charts event( that has chartX, chartY, pageX and pageY as
          its property) */
  chartX = mousePos.chartX,
      chartY = mousePos.chartY,
      minX = chartConfig.canvasLeft,
      minY = chartConfig.canvasTop,
      maxX = chartConfig.canvasLeft + chartConfig.canvasWidth,
      maxY = chartConfig.canvasHeight + chartConfig.canvasTop;
  // default value of the flag.
  mousePos.insideCanvas = false;

  // store the original event as well
  mousePos.originalEvent = e;
  // return true if within the canvas
  if (chartX > minX && chartX < maxX && chartY > minY && chartY < maxY) {
    // set the flag to be TRUE if triggered within the canvas area.
    mousePos.insideCanvas = true;
  }
  return mousePos;
};

var ZoomLine = function (_MSLine) {
  _inherits(ZoomLine, _MSLine);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  ZoomLine.getName = function getName() {
    return 'ZoomLine';
  };

  /**
   * Function to state if inputOptions are to be used for this charts
   * @return {Array} value
   */


  ZoomLine.includeInputOptions = function includeInputOptions() {
    return ['DragZoomIn', 'DragPin', 'ZoomResetButton', 'ZoomOutButton', 'ZoomInButton', 'DbTapZoom'];
  };

  function ZoomLine() {
    _classCallCheck(this, ZoomLine);

    var _this = _possibleConstructorReturn(this, _MSLine.call(this));

    _this.canvasborderthickness = 1;
    _this.zoomX = true;
    _this.hasScroll = true;
    _this.eiMethods = {
      /**
       * Zooms ZoomLine chart one level out
       * @group chart-zoomline:zoom-1
       *
       */
      zoomOut: function zoomOut(callback) {
        var chart = this.apiInstance,
            canvas = chart.getChildren && chart.getChildren('canvas')[0],
            inputManager = canvas && canvas.getChildren('inputManager'),
            asyncRender = chart && chart.getFromEnv('chartInstance').args.asyncRender,
            output;

        inputManager = inputManager && inputManager[0];
        if (!chart || !inputManager) {
          return;
        }

        if (asyncRender) {
          chart.addJob('eiMethods', function () {
            output = inputManager.zoomOut();
            if (typeof callback === 'function') {
              callback(output);
            }
          }, _schedular.priorityList.postRender);
        } else {
          return inputManager.zoomOut();
        }
      },

      /**
       * Zooms ZoomLine chart to a range of data.
       *
       * @group chart-zoomline:zoom-2
       *
       *
       * @param {number} startIndex The index of the dataset from which it needs to be zoomed into.
       * @param {number} endIndex the index of the dataset until which it needs to be zoomed into.
       */
      zoomTo: function zoomTo(startIndex, endIndex, callback) {
        var chartInstance = this,
            chart = chartInstance.apiInstance,
            canvas = chart.getChildren && chart.getChildren('canvas')[0],
            inputManager = canvas && canvas.getChildren('inputManager'),
            asyncRender = chartInstance.args.asyncRender,
            output;

        if (startIndex === undefined || endIndex === undefined) {
          return;
        }
        inputManager = inputManager && inputManager[0];

        if (!chart || !inputManager) {
          return;
        }

        if (asyncRender || callback) {
          chart.addJob('eiMethods', function () {
            output = inputManager.zoomTo(startIndex, endIndex);
            if (typeof callback === 'function') {
              callback(output);
            }
          }, _schedular.priorityList.postRender);
        } else {
          return inputManager.zoomTo(startIndex, endIndex);
        }
      },

      /**
       * Reset all zoom, pan and pin actions that has been done on ZoomLine chart.
       *
       * @group chart-zoomline:zoom-3
       *
       */
      resetChart: function resetChart() {
        var chart = this.apiInstance,
            canvas = chart.getChildren && chart.getChildren('canvas')[0],
            inputManager = canvas && canvas.getChildren('inputManager'),
            asyncRender = chart.getFromEnv('chartInstance').args.asyncRender,
            _helperFn = function _helperFn() {
          inputManager.resetChart();
        };

        inputManager = inputManager && inputManager[0];

        if (!chart || !inputManager) {
          return;
        }

        if (asyncRender) {
          chart.addJob('eiMethods', _helperFn, _schedular.priorityList.postRender);
        } else {
          _helperFn();
        }
      },

      /**
       * Switches between zoom and pin mode. This function does not work when `allowPinMode` is set to `0` in
       * chart XML or JSON.
       *
       * Zoom Line charts can have either a zoom mode or a pin mode. Zoom mode lets you select a section of the
       * chart by dragging mouse cursor across the canvas and the chart zooms in on the selected section. In pin
       * mode, the selected portion can be dragged around to compare with the rest of the chart. Zoom mode and pin
       * mode can be toggled by clicking a button on the top right corner of the chart. This function lets you
       * switch between zoom mode and pin mode programmatically.
       *
       * @group chart-zoomline:zoom-4
       *
       * @fires FusionCharts#zoomModeChanged
       *
       * @param {boolean} yes Boolean value to be `true` if zoom mode needs to be activated, `false` to activate
       * pin mode.
       */
      setZoomMode: function setZoomMode(yes) {
        var chart = this.apiInstance,
            asyncRender = chart.getFromEnv('chartInstance').args.asyncRender,
            canvas = chart.getChildren && chart.getChildren('canvas')[0],
            inputManager = canvas && canvas.getChildren('inputManager');

        inputManager = inputManager && inputManager[0];

        if (!chart || !inputManager) {
          return;
        }

        if (asyncRender) {
          chart.addJob('eiMethods', function () {
            inputManager.setZoomMode(yes);
          }, _schedular.priorityList.postRender);
        } else {
          inputManager.setZoomMode(yes);
        }
      },

      /**
       * Returns the index of the first visible point on canvas of ZoomLine chart
       * @group chart-zoomline:view-1
       * @return {number}
       */
      getViewStartIndex: function getViewStartIndex(callback) {
        var chart = this.apiInstance,
            axis,
            minValue,
            startIndex;

        if (callback) {
          chart.addJob('eiMethods', function () {
            if (typeof callback === 'function') {
              axis = chart.getChildren('xAxis')[0];
              minValue = axis.getVisibleConfig().minValue;
              startIndex = Math.ceil(minValue);
              // Math.ceil(x) = -0, where -1<x<0 hence checking is done for 0
              callback(startIndex === 0 ? 0 : startIndex);
            }
          }, _schedular.priorityList.postRender);
        } else {
          axis = chart.getChildren('xAxis')[0];
          minValue = axis.getVisibleConfig().minValue;
          startIndex = Math.ceil(minValue);
          // Math.ceil(x) = -0, where -1<x<0 hence checking is done for 0
          return startIndex === 0 ? 0 : startIndex;
        }
      },

      /**
       * Returns the index of the last visible point on canvas of ZoomLine chart
       * @group chart-zoomline:view-2
       * @return {number}
       */
      getViewEndIndex: function getViewEndIndex(callback) {
        var chart = this.apiInstance,
            axis,
            maxValue;

        if (callback) {
          chart.addJob('eiMethods', function () {
            if (typeof callback === 'function') {
              axis = chart.getChildren('xAxis')[0];
              maxValue = axis.getVisibleConfig().maxValue;
              callback(Math.floor(maxValue));
            }
          }, _schedular.priorityList.postRender);
        } else {
          axis = chart.getChildren('xAxis')[0];
          maxValue = axis.getVisibleConfig().maxValue;
          return Math.floor(maxValue);
        }
      }
    };
    _this.eiMethods.scrollTo = _scrollApis.scrollTo;
    _this.registerFactory('dataset', _zoomlineDataset2['default'], ['vCanvas']);
    return _this;
  }

  ZoomLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSLine.prototype.__setDefaultConfig && _MSLine.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Zoomable and Panable Multi-series Line Chart';
    config.defaultDatasetType = 'zoomline';
    config.showValues = 0;
    config.zeroplanethickness = 1;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.enablemousetracking = true;
    config.skipAttr = true;
    config.showvalues = 0;
    // config.animation = 0;
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ZoomLine.prototype.getName = function getName() {
    return 'ZoomLine';
  };
  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  ZoomLine.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _MSLine.prototype.parseChartAttr.call(this, dataObj);
    var jsonData = dataObj || this.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart;

    if (Number(chartAttrs.usecrossline) || chartAttrs.usecrossline === _lib.UNDEF) {
      this.config.useCrossline = 1;
      this.config.drawTrendRegion = 0;
    } else {
      this.config.useCrossline = 0;
      this.config.drawTrendRegion = 0;
    }
  };

  ZoomLine.prototype.getInputConfigurations = function getInputConfigurations() {
    var iapi = this,
        config = iapi.config,
        hookFn = function hookFn(dsi, dei) {
      var info = config.viewPortConfig;

      info.dsi = dsi;
      info.dei = dei;
      iapi.updateManager();
    },

    // Store all the input components and their properties in an array
    inputComponents = {
      dragZoomIn: {
        scaleX: true,
        scaleY: false,
        drawButton: false,
        boxStyle: {
          stroke: config.zoomPaneStroke,
          fill: config.zoomPaneFill,
          'stroke-width': 0
        },
        skipGraphics: true
      },
      zoomResetButton: {
        hookFn: hookFn
      },
      zoomOutButton: {
        hookFn: hookFn
      },
      zoomInButton: {
        tooltext: config.btnZoomInToolText,
        stepzoom: config.stepZoom,
        skipGraphics: true
      },
      dragPin: {
        orientation: 'horizontal',
        attr: {
          stroke: config.zoomPaneStroke,
          fill: config.zoomPaneFill,
          'stroke-width': 0
        },
        pinAttr: {
          'stroke-width': 0,
          stroke: 'none',
          fill: config.pinPaneFill,
          'shape-rendering': 'crisp',
          ishot: true
        },
        strokeWidth: 0,
        tooltext: config.showToolBarButtonTooltext && config.btnSwitchToPinModeTooltext || BLANK
      },
      dbTapZoom: {
        stepzoom: config.stepZoom
      }
    };

    return inputComponents;
  };

  ZoomLine.prototype._setCategories = function _setCategories() {
    var iapi = this,
        config = iapi.config,
        dataObj = iapi.getFromEnv('dataSource'),
        chartDef = dataObj.chart || {},
        xAxis = iapi.getChildren('xAxis'),
        tempArr,
        data,
        j,
        len,
        cdm = config.cdm,
        cdmchar = config.cdmchar,
        category = dataObj.categories && dataObj.categories[0].category || [];

    config.cdm = cdm = (0, _lib.pluckNumber)(chartDef.compactdatamode, 0);
    config.cdmchar = cdmchar = (0, _lib.pluck)(chartDef.dataseparator, PIPE);

    if (cdm || typeof category === 'string') {
      if (category.split) {
        tempArr = category.split(cdmchar);
        data = [];
        for (j = 0, len = tempArr.length; j < len; j += 1) {
          data.push({
            label: tempArr[j]
          });
        }
        iapi.config.categories = dataObj.categories[0].category = data;
      }
    }
    xAxis[0].setAxisPadding(0, 0);
    xAxis[0].setTickValues(data || category);
  };

  ZoomLine.prototype.isWithinCanvas = function isWithinCanvas(e, chart) {
    return _isWithinCanvas.call(this, e, chart);
  };

  ZoomLine.prototype.highlightPoint = function highlightPoint(showHover, cx, cy, point, index, toolText) {
    var chart = this,
        chartConfig = chart.config,
        animationManager = chart.getFromEnv('animationManager'),
        chartComponents = chart.components,
        chartGraphics = chart.graphics,
        isHover = Number(showHover),
        trackerCheck = chartGraphics.tracker,
        tracker,
        datasetObj = chartComponents.dataset[index],
        datasetConfig = datasetObj && datasetObj.config,
        radius = datasetObj && datasetConfig.zoomedRadius || 0,
        hoverCosmetics = datasetObj && datasetConfig.hoverCosmetics,
        fill = hoverCosmetics && hoverCosmetics.fill,
        borderColor = hoverCosmetics && hoverCosmetics.borderColor,
        borderThickness = hoverCosmetics && hoverCosmetics.borderThickness,

    // attach the callbacks for the click and hover interactions for the hovering element.
    plotEventHandlerCallback = {
      'click': function click(e) {
        _lib.plotEventHandler.call(this, chart, e);
      },
      'hoverIn': function hoverIn(e) {
        _lib.plotEventHandler.call(this, chart, e, 'dataplotRollover');
      },
      'hoverOut': function hoverOut(e) {
        _lib.plotEventHandler.call(this, chart, e, 'dataplotRollout');
      }
    };

    if (!trackerCheck) {
      // in case the tracker element is not created. Attach the callbacks for click and hovering effects.
      tracker = chartGraphics.tracker = animationManager.setAnimation({
        el: 'circle',
        attr: {
          cx: 0,
          cy: 0,
          r: radius,
          fill: isHover ? fill : TRACKER_FILL,
          stroke: isHover ? borderColor : TRACKER_FILL,
          'stroke-width': isHover ? borderThickness : 0,
          'clip-rect': chartConfig.canvasLeft + ',' + chartConfig.canvasTop + ',' + chartConfig.canvasWidth + ',' + chartConfig.canvasHeight
        },
        container: chartGraphics.trackerGroup,
        component: chart
      }).click(plotEventHandlerCallback.click).trackTooltip(true).hover(plotEventHandlerCallback.hoverIn, plotEventHandlerCallback.hoverOut);
    }
    // Attach the required information for the hovering element.
    point && tracker.data('eventArgs', {
      x: point.x,
      y: point.y,
      tooltip: point.tooltip,
      link: point.link
    });

    /* store the hovered point as last visible point. This is required to avoid redaundant calls if the same
          point is hovered. */
    chartConfig.lastHoveredPoint = point;
    tracker.tooltip(toolText).transform('t' + (cx + chartConfig.canvasLeft) + ',' + (cy + chartConfig.canvasTop));
    /* on first mouse move the element is created and on the next mouse move the tooltip is shown.
          In order give the effect of displaying the tooltip once hovered, another mouseMove event is
          fired forcefully */
    point && fireMouseEvent('mouseover', tracker && tracker.node, chartConfig.lastMouseEvent);
  };

  ZoomLine.prototype.configureAttributes = function configureAttributes(dataObj) {
    _MSLine.prototype.configureAttributes.call(this, dataObj);
    var style,
        iapi = this,
        jsonData = iapi.getFromEnv('dataSource'),
        chartDef = jsonData.chart || {},
        colorManager = iapi.getFromEnv('color-manager'),
        canvasBorderColor = colorManager.getColor('canvasBorderColor'),
        config;
    // The base configure fn above creates a dummy chart object if there is no chart object in json data.
    config = iapi.config;
    style = config.style;

    config.stepZoom = 400 / (100 - (0, _lib.pluckNumber)(chartDef.stepzoom, 25));
    if (config.stepZoom <= 2) {
      config.stepZoom = 1.9;
    }
    // overwrite the existing chart configurations.
    // Copy and prepare some configurations for zoom charts
    (0, _lib.extend2)(config, {
      useRoundEdges: (0, _lib.pluckNumber)(chartDef.useroundedges, 0),
      // animation: false,
      zoomType: 'x',
      canvasPadding: (0, _lib.pluckNumber)(chartDef.canvaspadding, 0),
      scrollColor: (0, _lib.getFirstColor)((0, _lib.pluck)(chartDef.scrollcolor, colorManager.getColor('altHGridColor'))),
      scrollShowButtons: !!(0, _lib.pluckNumber)(chartDef.scrollshowbuttons, 1),
      scrollHeight: (0, _lib.pluckNumber)(chartDef.scrollheight, 16) || 16,
      scrollBarFlat: (0, _lib.pluckNumber)(chartDef.flatscrollbars, 0),
      allowPinMode: (0, _lib.pluckNumber)(chartDef.allowpinmode, 1),
      skipOverlapPoints: (0, _lib.pluckNumber)(chartDef.skipoverlappoints, 1),
      showToolBarButtonTooltext: (0, _lib.pluckNumber)(chartDef.showtoolbarbuttontooltext, 1),
      btnResetChartTooltext: (0, _lib.pluck)(chartDef.btnresetcharttooltext, 'Reset Chart'),
      btnZoomOutTooltext: (0, _lib.pluck)(chartDef.btnzoomouttooltext, 'Zoom out one level'),
      btnSwitchToZoomModeTooltext: (0, _lib.pluck)(chartDef.btnswitchtozoommodetooltext, '<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom ' + 'into it for detailed view'),
      btnSwitchToPinModeTooltext: (0, _lib.pluck)(chartDef.btnswitchtopinmodetooltext, '<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare ' + 'with the rest of the view'),
      /**
               *  @note pinPaneStroke related attribute parsing is unused in
               * present JS ZoomLine implementation.
               pinPaneStrokeWidth: pluckNumber(chartDef.pinpaneborderthickness, 1),
               pinPaneStroke: convertColor(pluck(chartDef.pinpanebordercolor,
               canvasBorderColor), pluckNumber(chartDef.pinpaneborderalpha, 15)),
               */
      pinPaneFill: (0, _lib.convertColor)((0, _lib.pluck)(chartDef.pinpanebgcolor, canvasBorderColor), (0, _lib.pluckNumber)(chartDef.pinpanebgalpha, 15)),
      zoomPaneFill: (0, _lib.convertColor)((0, _lib.pluck)(chartDef.zoompanebgcolor, '#b9d5f1'), (0, _lib.pluckNumber)(chartDef.zoompanebgalpha, 30)),
      zoomPaneStroke: (0, _lib.convertColor)((0, _lib.pluck)(chartDef.zoompanebordercolor, '#3399ff'), (0, _lib.pluckNumber)(chartDef.zoompaneborderalpha, 80)),
      showPeakData: (0, _lib.pluckNumber)(chartDef.showpeakdata, 0),
      maxPeakDataLimit: (0, _lib.pluckNumber)(chartDef.maxpeakdatalimit, chartDef.maxpeaklimit, null),
      minPeakDataLimit: (0, _lib.pluckNumber)(chartDef.minpeakdatalimit, chartDef.minpeaklimit, null),
      crossline: {
        enabled: (0, _lib.pluckNumber)(chartDef.showcrossline, 1),
        line: {
          'stroke-width': (0, _lib.pluckNumber)(chartDef.crosslinethickness, 1),
          'stroke': (0, _lib.getFirstColor)((0, _lib.pluck)(chartDef.crosslinecolor, '#000000')),
          'stroke-opacity': (0, _lib.pluckNumber)(chartDef.crosslinealpha, 20) / 100
        },
        labelEnabled: (0, _lib.pluckNumber)(chartDef.showcrosslinelabel, chartDef.showcrossline, 1),
        labelstyle: {
          fontSize: toFloat(chartDef.crosslinelabelsize) ? toFloat(chartDef.crosslinelabelsize) + PX : style.outCanfontSize,
          fontFamily: (0, _lib.pluck)(chartDef.crosslinelabelfont, style.outCanfontFamily)
        },
        valueEnabled: (0, _lib.pluckNumber)(chartDef.showcrosslinevalues, chartDef.showcrossline, 1),
        valuestyle: {
          fontSize: toFloat(chartDef.crosslinevaluesize) ? toFloat(chartDef.crosslinevaluesize) + PX : style.inCanfontSize,
          fontFamily: (0, _lib.pluck)(chartDef.crosslinevaluefont, style.inCanvasStyle.fontFamily)
        }
      },
      useCrossline: (0, _lib.pluckNumber)(chartDef.usecrossline, 1),
      tooltipSepChar: (0, _lib.pluck)(chartDef.tooltipsepchar, ', '),
      showTerminalValidData: (0, _lib.pluckNumber)(chartDef.showterminalvaliddata, 0)
      // cdmchar: pluck(chartDef.dataseparator, PIPE),
      // cdm: pluckNumber(chartDef.compactdatamode, 0)
    });
  };

  ZoomLine.prototype.getValuePixel = function getValuePixel(px) {
    var chart = this,
        chartConfig = chart.config,
        info = chartConfig.viewPortConfig;
    return info.ddsi + mathFloor(px / info.ppp);
  };

  /**
   * Returns the dataset array
   * @return {Array} array of dataset objects
   */


  ZoomLine.prototype.getDatasets = function getDatasets() {
    var iapi = this,
        dataSetArr = [];

    iapi.iterateComponents(function (child) {
      if (child.getType && child.getType() === 'dataset') {
        dataSetArr.push(child);
      }
    });
    return dataSetArr;
  };

  ZoomLine.prototype.__preDraw = function __preDraw() {
    var seriesItemConf,
        ppp,
        ppl,

    // visw,
    // visx,
    // yminValue,
    // ymin,
    // pinclip,
    // tAtt,
    // pingroup,
    // datalayer,
    iapi = this,
        animationManager = iapi.getFromEnv('animationManager'),
        iapiGraphics = iapi.graphics,

    // todo: containerelement should be a part of graphics components.
    // containerElem = iapiGraphics.container || iapi.container,
    iapiConfig = iapi.config,
        chartDef = iapi.getFromEnv('dataSource').chart,
        cdm = iapiConfig.cdm,
        xAxis = iapi.getChildren('xAxis')[0],

    // listeners = iapiComponents.eventListeners || (iapiComponents.eventListeners = []),
    // containerElem = iapi.container,
    info = iapiConfig.viewPortConfig,
        canvasConfig = iapi.getChildren('canvas')[0].config,
        canvasPadding = mathMax(canvasConfig.canvasPadding, canvasConfig.canvasPaddingLeft, canvasConfig.canvasPaddingRight),
        yAxis = iapi.getChildren('yAxis')[0],
        datasetGroup = iapi.getChildContainer('plotGroup'),
        canvasHeight = iapiConfig.canvasHeight,
        chartAttrs = iapi.getFromEnv('dataSource').chart,

    // borderWidth = iapiConfig.borderWidth || (iapiConfig.borderWidth = pluckNumber(chartAttrs.showborder,
    //             1) ? pluckNumber(chartAttrs.borderthickness, 1) : 0),
    // allowpin = iapiConfig.allowPinMode,
    clen = xAxis.getTicksLen(),

    // Validate and parse the data display indices and also calculate
    // initial pixels-per-point.
    dsi = toInt((0, _lib.pluckNumber)(chartDef.displaystartindex, 1), 10) - 1,
        dei = toInt((0, _lib.pluckNumber)(chartDef.displayendindex, clen || 2), 10) - 1,
        overFlowingMarkerWidth = 0,
        dataSetArr,
        j;

    dataSetArr = iapi.getDatasets();

    j = dataSetArr.length;

    iapiConfig.borderWidth = (0, _lib.pluckNumber)(chartAttrs.showborder, 1) ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0;

    iapiConfig.updateAnimDuration = 500; // default animation durations.
    // the origin of the container element should coincide with the origin(top-left) of the canvas area.

    iapiConfig.status = 'zoom';
    // set the maximum scaleX and scaleY.
    iapiConfig.maxZoomLimit = (0, _lib.pluckNumber)(chartDef.maxzoomlimit, 1000);

    // stores the different visual configurations for a historical reference.
    iapiConfig.viewPortHistory = [];

    (ppp = (0, _lib.pluckNumber)(chartDef.pixelsperpoint, 15)) < 1 && (ppp = 1);
    (ppl = (0, _lib.pluckNumber)(chartDef.pixelsperlabel, chartDef.xaxisminlabelwidth, xAxis.getAxisConfig('labels').rotation ? 20 : 60)) < ppp && (ppl = ppp);
    // start index must be positive and less than end. last index must
    // not be greater than category count.
    (dsi < 0 || dsi >= (clen - 1 || 1)) && (dsi = 0);
    (dei <= dsi || dei > (clen - 1 || 1)) && (dei = clen - 1 || 1);
    // Set initial zoom information
    info = iapiConfig.viewPortConfig = (0, _lib.extend2)(iapiConfig.viewPortConfig, {
      // cnd: pluckNumber(chartDef.connectnulldata, 0), // connectNullData
      amrd: (0, _lib.pluckNumber)(chartDef.anchorminrenderdistance, 20), // anchor render distance
      nvl: (0, _lib.pluckNumber)(chartDef.numvisiblelabels, 0), // num visible labels
      cdm: cdm, // compact data mode
      oppp: ppp, // original pixels per point
      oppl: ppl, // original pixels per label
      dsi: dsi, // dislay start index
      dei: dei, // display end index
      vdl: dei - dsi, // visible display length
      // dmax: legacyYAxisConf.max = dmax, // max value of all data
      // dmin: legacyYAxisConf.min = dmin, // min value of all data
      // dsecondarymax : secondaryYAxisConf.max = dsecondarymax,
      // dsecondarymin : secondaryYAxisConf.min = dsecondarymin,
      clen: clen, // category length and data length

      // Internal variables required for zoom state.
      offset: 0, // (internal) drawing offset for smooth scroll,
      step: 1, // (internal) default stepping or skipping,
      llen: 0, // (internal) number of labels
      alen: 0, // (internal) length of anchors already drawn
      ddsi: dsi, // (internal) dynamic display start as per scroll
      ddei: dei, // (internal) dynamic display end as per scroll
      ppc: 0 // (internal) pixels per category
    });

    if (!info.clen) {
      return;
    }
    // calculate the overflowing markers width
    while (j--) {
      seriesItemConf = dataSetArr[j].config;
      overFlowingMarkerWidth = mathMax(overFlowingMarkerWidth, seriesItemConf.drawanchors && (seriesItemConf.anchorradius || 0) + (Number(seriesItemConf.anchorborderthickness) || 0) || 0);
    }

    iapiConfig.overFlowingMarkerWidth = overFlowingMarkerWidth;
    canvasPadding = iapiConfig.canvasPadding = mathMax(overFlowingMarkerWidth, canvasPadding);

    // Do a check whether user has initially zoomed. That would
    // mean to keep zoomOut button visible and also to create a
    // fake first zoom level.
    iapiConfig._prezoomed = info.dei - info.dsi < info.clen - 1;
    // Set the visual dimensions of plot inside canvas.
    iapiConfig._visw = iapiConfig.canvasWidth - canvasPadding * 2;
    iapiConfig._visx = iapiConfig.canvasLeft + canvasPadding;
    iapiConfig._visout = -(iapiConfig.height + canvasHeight + 1e3);

    // Get the y-axis pixel value ratio, other y-axis related values and store for later use.
    // iapiConfig._ypvr = (yAxis && yAxis.getPVR()) || 0;
    iapiConfig._yminValue = yAxis.getLimit().min;
    iapiConfig._ymin = yAxis.getPixel(iapiConfig._yminValue);

    // Clip the dataset layer to required dimension. This layer will be
    // scrolled by the scroller
    // Increase the clipping region to acomodate overflowing anchors
    // datalayer = datasetGroup.attr('clip-rect', [visx - overFlowingMarkerWidth,
    //   canvasTop, visw + (overFlowingMarkerWidth * 2), canvasHeight]);
    iapiGraphics.scroll || (iapiGraphics.scroll = animationManager.setAnimation({
      el: 'group',
      component: iapi,
      attr: {
        name: 'scroll'
      }
    }).insertAfter(datasetGroup));
    this.updateManager();
  };

  ZoomLine.prototype.resetZoom = function resetZoom() {
    var iapi = this,
        iapiConfig = iapi.config,
        history = iapiConfig.viewPortHistory,
        origInfo = history[0];

    // cannot reset twice!
    if (!history.length) {
      return false;
    }

    history.length = 0; // clear history
    if (iapi.zoomTo(origInfo.dsi, origInfo.dei, origInfo)) {
      /**
       * This event is fired whenever the zoom history is cleared on a ZoomLine chart.
       *
       * @event FusionCharts#zoomReset
       * @group chart-zoomline:zoom
       */
      iapi.fireChartInstanceEvent('zoomReset', iapi._zoomargs, [iapi.getFromEnv('chartInstance').id]);
    }

    return true;
  };

  ZoomLine.prototype.zoomOut = function zoomOut() {
    var lastinfo,
        origInfo,
        iapi = this,
        iapiConfig = iapi.config,
        history = iapiConfig.viewPortHistory,
        dsi,
        dei,
        args;
    lastinfo = history.pop(); // access the last history
    origInfo = history[0] || iapiConfig.viewPortConfig;
    if (lastinfo) {
      dsi = lastinfo.dsi;
      dei = lastinfo.dei;
    } else {
      // If zoom level is less than 1, it is equivalent to reset.
      // But, in case chart was initially zoomed, we need to zoom out
      // to full view.
      if (iapiConfig._prezoomed) {
        dsi = 0;
        dei = origInfo.clen - 1;
      }
    }
    /* info.lskip = lastinfo.lskip;
          info.step = lastinfo.step;
          iapi.components.xAxis[0].setAxisConfig({
              'labelStep': info.lskip + 1
          }); */
    args = iapi.zoomTo(dsi, dei, lastinfo);
    if (args) {
      /**
       * This event is fired when user zooms out on a ZoomLine chart.
       *
       * @event FusionCharts#zoomedOut
       * @group chart-zoomline:zoom
       *
       * @param {number} level - Indicates to which zoom level the user has zoomed out to. `1` indicates that
       * the chart has been completely zoomed out.
       *
       * @param {number} startIndex - The data start index that is in view for the zoomed out level
       * @param {string} startLabel - The label of the data of the starting item in view.
       * @param {number} endIndex - The data end index that is in view for the zoomed out level
       * @param {string} endLabel - The label of the data of the last item in view.
       */
      iapi.fireChartInstanceEvent('zoomedout', args);
    }

    return true;
  };

  ZoomLine.prototype.zoomRangePixels = function zoomRangePixels(pxs, pxe) {
    var chart = this,
        chartConfig = chart.config,
        info = chartConfig.viewPortConfig,
        ppp = info.ppp,
        start = info.ddsi,
        dsi,
        dei;

    dsi = start + mathFloor(pxs / ppp);
    dei = start + mathFloor(pxe / ppp);
    info.dsi = dsi;
    info.dei = dei;
    chart.updateManager();
  };

  ZoomLine.prototype._createLayers = function _createLayers() {
    var iapi = this;
    _MSLine.prototype._createLayers.call(this);
    iapi.__preDraw();
  };

  ZoomLine.prototype.getValue = function getValue(point) {
    var chart = this,
        chartConfig = chart.config,
        viewPortConfig = chartConfig.viewPortConfig,

    // the pixel wrt original canvas size
    origpixel = chart.getOriginalPositions(point.x, point.y, point.x, point.y),
        origX = origpixel[0],
        origY = origpixel[1],
        xAxis = chart.getChildren('xAxis')[0],
        yAxis = chart.getChildren('yAxis')[0],
        xaxisRange = xAxis.config.axisRange,
        yaxisRange = yAxis.config.axisRange,
        minX = xaxisRange.min,
        maxX = xaxisRange.max,
        maxY = yaxisRange.max,
        minY = yaxisRange.min,

    // calcualte the Pixel to Value Ratios.
    xPVR = chartConfig.canvasWidth * viewPortConfig.scaleX / (maxX - minX),
        yPVR = chartConfig.canvasHeight * viewPortConfig.scaleY / (maxY - minY);

    return {
      x: minX + (origX - chartConfig.canvasLeft) / xPVR,
      y: maxY - (origY - chartConfig.canvasTop) / yPVR
    };
  };

  ZoomLine.prototype.getOriginalPositions = function getOriginalPositions(x1, y1, x2, y2) {
    var newW,
        newH,
        newX,
        newY,
        chart = this,
        chartConfig = chart.config,
        viewPortConfig = chartConfig.viewPortConfig,
        oldScaleX = viewPortConfig.scaleX,
        oldScaleY = viewPortConfig.scaleY,

    // coodinates of the visual canvas origin wrt to original canvas.
    oldX = viewPortConfig.x,
        oldY = viewPortConfig.y,
        xMin = mathMin(x1, x2),
        xMax = mathMax(x1, x2),
        yMin = mathMin(y1, y2),
        yMax = mathMax(y1, y2);

    // Right Bottom limit boundary
    xMax = xMax > chartConfig.canvasWidth ? chartConfig.canvasWidth : xMax;
    yMax = yMax > chartConfig.canvasHeight ? chartConfig.canvasHeight : yMax;
    // Left Top Limit Boundary
    xMin = xMin < 0 ? 0 : xMin;
    yMin = yMin < 0 ? 0 : yMin;
    // update the dimensions wrt to initial viewPort configurations.
    newW = (xMax - xMin) / oldScaleX;
    newH = (yMax - yMin) / oldScaleY;
    newX = oldX + xMin / oldScaleX;
    newY = oldY + yMin / oldScaleY;
    // converts to the coordinates wrt original image
    return [newX, newY, newW, newH];
  };

  ZoomLine.prototype.updateManager = function updateManager() {
    var i,
        labelStep,
        stepValue,
        chart = this,
        scaleX,
        dataSets = this.getDatasets(),
        len = dataSets.length,
        chartConfig = chart.config,
        info = chartConfig.viewPortConfig,

    // ypvr = chartConfig._ypvr,
    visW = chartConfig._visw,
        xAxis = chart.getChildren('xAxis')[0],
        getPixelX = function getPixelX() {
      return xAxis.getPixel.apply(xAxis, arguments);
    },

    // labels = chart.xlabels,
    cssLabel = xAxis.getAxisConfig('labels').style,

    // labelGroup = labels.group,
    // textDirection = chartConfig.textDirection,
    oppp,
        // target pixels-per-point
    vdl,
        // visible display length
    ppl,
        // num visible labels
    ppp,
        // current pixels-per-point
    step,
        // stepping on vdl to reach target ppp
    lskip,
        norm,
        // normalizer of vdl to allow smooth scrolling
    dsi,
        // display start index
    dei,
        // display end index
    ddsi,
        // dynamic dsi post normalization
    ddei,
        nvl,
        visibleExtremes;

    if (chartConfig.legendClicked) {
      for (i = 0; i < len; i += 1) {
        dataSets[i].draw();
      }
      return;
    }
    // Use default config if none has been provided else extend current
    // state.
    !info && (info = chartConfig.viewPortConfig);

    // Calculate stepping values here. This is required so that the
    // number of anchors can be recalculated prior to updating plot.
    oppp = info.oppp;
    nvl = ppl = info.nvl;
    dsi = info.dsi;
    dei = info.dei;
    vdl = info.vdl = dei - dsi;
    ppl = info.ppl = nvl ? visW / nvl : info.oppl;
    // Calculate label and anchor stepping.
    step = info.step = (ppp = info.ppp = visW / vdl) < oppp ? mathCeil(oppp / ppp) : 1;
    lskip = info.lskip = mathCeil(mathMax(ppl, toFloat(cssLabel.lineHeight)) / ppp / step);

    ddsi = info.dsi;
    ddei = info.dei;
    info.offset = 0;
    norm = info.norm = ddsi % step;

    // normalize the indices
    info.ddsi = ddsi = ddsi - norm;
    info.ddei = ddei = ddei + 2 * step - norm;
    // info.pvr = ypvr;
    info._ymin = chartConfig._ymin;
    info._yminValue = chartConfig._yminValue;
    info.x = (getPixelX(ddsi) - getPixelX(xAxis.getLimit().min) + info.offset) / info.scaleX;
    // once the visible labels are exceeding the category length.
    if (ddei - ddsi > xAxis.getTicksLen()) {
      info.scaleX = 1;
    } else {
      // info.scaleX = chartConfig.canvasWidth / (mathRound((ddei - ddsi + 1)/ (step)) * 0.5 * ppl);
      info.scaleX = xAxis.getTicksLen() / Math.abs(ddei - ddsi - step - 0.9);
    }
    visibleExtremes = xAxis.getVisibleConfig();

    stepValue = Math.ceil((visibleExtremes.maxValue - visibleExtremes.minValue + 1) / nvl);
    scaleX = chartConfig.viewPortConfig && chartConfig.viewPortConfig.scaleX;
    labelStep = Math.max(Math.round(xAxis.getAxisConfig('labelStep') / scaleX), nvl ? stepValue : lskip * step);
    xAxis.setLabelConfig({
      step: labelStep
    });

    if (window.FC_DEV_ENVIRONMENT && window.jQuery) {
      if (FusionCharts['debugger'].enable()) {
        this.debug = this.debug || (window.jQuery('#fc-zoominfo').length || window.jQuery('body').append('<pre id="fc-zoominfo">'), window.jQuery('#fc-zoominfo').css({
          position: 'absolute',
          left: '10px',
          top: '0',
          'pointer-events': 'none',
          opacity: 0.7,
          width: '250px',
          zIndex: '999',
          border: '1px solid #cccccc',
          'box-shadow': '1px 1px 3px #cccccc',
          background: '#ffffff'
        }));
        this.debug.text((0, _stringify2['default'])(info, 0, 2));
      } else {
        this.debug && window.jQuery('#fc-zoominfo').remove();
        delete this.debug;
      }
    }
  };
  /**
   * Function to calculate the step of label and anchor.
   */


  ZoomLine.prototype.calculateStep = function calculateStep() {
    var chart = this,
        chartConfig = chart.config,
        info = chartConfig.viewPortConfig,
        visW = chartConfig._visw,
        oppp,
        // target pixels-per-point
    vdl,
        // visible display length
    ppp,
        // current pixels-per-point
    dsi,
        // display start index
    dei,
        // display end index
    nvl;
    // Use default config if none has been provided else extend current
    // state.
    !info && (info = chartConfig.viewPortConfig);

    // Calculate stepping values here. This is required so that the
    // number of anchors can be recalculated prior to updating plot.
    oppp = info.oppp;
    nvl = info.nvl;
    dsi = info.dsi;
    dei = info.dei;
    vdl = info.vdl = dei - dsi;
    info.ppl = nvl ? visW / nvl : info.oppl;
    // Calculate label and anchor stepping.
    info.step = (ppp = info.ppp = visW / vdl) < oppp ? mathCeil(oppp / ppp) : 1;
  };

  ZoomLine.prototype.getParsedLabel = function getParsedLabel(index) {
    var xlabels = this.xlabels;
    return xlabels.parsed[index] || (xlabels.parsed[index] = (0, _lib.parseUnsafeString)(xlabels.data[index] || BLANK));
  };

  ZoomLine.prototype._setAxisScale = function _setAxisScale() {
    var xAxis = this.getChildren('xAxis')[0];

    xAxis.setScrollType('always');
  };

  ZoomLine.prototype.getDSdef = function getDSdef() {
    return _zoomline2['default'];
  };

  return ZoomLine;
}(_fusioncharts2['default']);

exports['default'] = ZoomLine;

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(345);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(709);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

var _crosslineZoomline = __webpack_require__(711);

var _crosslineZoomline2 = _interopRequireDefault(_crosslineZoomline);

var _fusioncharts5 = __webpack_require__(18);

var _fusioncharts6 = _interopRequireDefault(_fusioncharts5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts6['default'].addDep(_fusioncharts2['default']);
_fusioncharts6['default'].addDep(_fusioncharts4['default']);
_fusioncharts6['default'].addDep(_crosslineZoomline2['default']);
_fusioncharts6['default'].addFile('fusioncharts.zoomline.js');

exports['default'] = _fusioncharts6['default'];

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _lib = __webpack_require__(5);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _dependencyManager = __webpack_require__(6);

var _zoomlineAnimation = __webpack_require__(707);

var _zoomlineAnimation2 = _interopRequireDefault(_zoomlineAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var POINTER = 'pointer',
    DEFAULT_CURSOR = 'default',
    DATAPLOTCLICK = 'dataplotclick',
    HTP = _lib.hasTouch ? _lib.TOUCH_THRESHOLD_PIXELS : _lib.CLICK_THRESHOLD_PIXELS;
(0, _dependencyManager.addDep)({
  name: 'zoomlineAnimation',
  type: 'animationRule',
  extension: _zoomlineAnimation2['default']
});

var ZoomLineDataset = function (_LineDataset) {
  _inherits(ZoomLineDataset, _LineDataset);

  function ZoomLineDataset() {
    _classCallCheck(this, ZoomLineDataset);

    return _possibleConstructorReturn(this, _LineDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  ZoomLineDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ZoomLineDataset.prototype.getName = function getName() {
    return 'zoomLine';
  };

  ZoomLineDataset.prototype._setConfigure = function _setConfigure(newDataset, newIndex) {
    var dataSet = this,
        conf = dataSet.config,
        cdef = dataSet.getFromEnv('chart').getFromEnv('dataSource').chart,
        JSONData = dataSet.config.JSONData;
    conf.drawanchors = (0, _lib.pluckNumber)(cdef.drawanchors, cdef.showanchors, 1);
    conf.anchorradius = (0, _lib.pluckNumber)(JSONData.anchorradius, cdef.anchorradius, conf.linethickness + 2);
    _LineDataset.prototype._setConfigure.call(this, newDataset, newIndex);
  };

  ZoomLineDataset.prototype.configureAttributes = function configureAttributes(datasetJSON) {
    _LineDataset.prototype.configureAttributes.call(this, datasetJSON);
    var pgsw,
        conf,
        pin = {},
        dataSet = this,
        cdef = dataSet.getFromEnv('chart').getFromEnv('dataSource').chart;
    // no animation is supported.
    conf = dataSet.config;
    // pin line graphics is same as main graphics except a few changes
    pgsw = conf.linethickness + (0, _lib.pluckNumber)(cdef.pinlinethicknessdelta, 1);
    pin['stroke-width'] = pgsw > 0 && pgsw || 0;
    pin['stroke-dasharray'] = [3, 2];
    pin.stroke = (0, _lib.hashify)(conf.linecolor);
    pin['stroke-opacity'] = conf.alpha / 100;
    pin['stroke-linejoin'] = conf['stroke-linejoin'] = 'round';
    pin['stroke-linecap'] = conf['stroke-linecap'] = 'round';

    conf.pin = pin;
    // animation is disabled in zoomline charts.
    conf.animation = false;
    conf.transposeanimduration = 0;
    conf.defaultPadding = {
      left: 0,
      right: 0
    };
  };

  /**
   * Function to skip label drawing of zoomline chart
   * @return {Object} to avoid linting error
   */


  ZoomLineDataset.prototype.drawLabel = function drawLabel() {
    return this;
  };

  ZoomLineDataset.prototype.isWithinShape = function isWithinShape(pointObj, pX, x, y) {
    var anchorProps, config, radius, borderThickness, dataset, dataStore, dragTolerance, xPos, yPos, dx, dy, diff, hoverEffects;

    if (!pointObj) {
      return;
    }

    anchorProps = pointObj.config.anchorProps;
    config = pointObj.config;
    borderThickness = anchorProps.borderThickness;
    dataset = this;
    dataStore = dataset.components.data;
    dragTolerance = (0, _lib.pluckNumber)(config.dragTolerance, 0);

    xPos = pointObj._xPos;
    yPos = pointObj._yPos;

    if (yPos !== null) {
      hoverEffects = pointObj.config.hoverEffects;
      radius = Math.max(anchorProps.radius, hoverEffects && hoverEffects.anchorRadius || 0, HTP) + borderThickness / 2;
      dx = x - xPos;
      dy = y - yPos;
      diff = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

      if (diff <= radius || diff <= dragTolerance) {
        return {
          pointIndex: pX,
          hovered: true,
          pointObj: dataStore[pX]
        };
      } else {
        return false;
      }
    }
  };

  ZoomLineDataset.prototype.hideAllAnchors = function hideAllAnchors() {
    var dataset = this,
        dataStore = dataset.components.data,
        dsLen = dataStore.length,
        dataObj,
        i,
        ii;

    for (i = 0, ii = dsLen; i < ii; i++) {
      dataObj = dataStore[i];
      if (dataObj && dataObj.graphics) {
        dataObj.graphics.element && dataObj.graphics.element.hide();
      }
    }
  };

  ZoomLineDataset.prototype._firePlotEvent = function _firePlotEvent(eventType, plotIndex, e) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        components = dataset.components,
        dataStore = components.dataRT || components.data,
        toolTipController = dataset.getFromEnv('toolTipController'),
        data = dataStore[plotIndex],
        setElement = data.graphics.element,
        toolTip = dataset.config.currentToolTip,

    // originalEvent = e.originalEvent,
    style = chart.getFromEnv('paper').canvas.style,
        noCrossline = !chart.config.useCrossline,
        config,
        eventArgs,
        setLink;

    if (setElement) {
      config = data.config;
      setLink = config.setLink;
      eventArgs = config.eventArgs;
      switch (eventType) {
        case 'mouseover':
          noCrossline && dataset._decideTooltipType(plotIndex, e);
          dataset._rolloverResponseSetter(chart, data, e);
          setLink && (style.cursor = POINTER);
          break;
        case 'mouseout':
          toolTipController.hide(toolTip);
          dataset._rolloutResponseSetter(chart, data, e);
          setLink && (style.cursor = DEFAULT_CURSOR);
          break;
        case 'click':
          _lib.plotEventHandler.call(setElement, chart, e, DATAPLOTCLICK, eventArgs);
          break;
        case 'mousemove':
          noCrossline && dataset._decideTooltipType(plotIndex, e);
      }
    }
  };
  /**
   * calculate min and max position to scroll
   */


  ZoomLineDataset.prototype.calculateScrollRange = function calculateScrollRange() {
    var dataSet = this,
        conf = dataSet.config,
        xAxis = dataSet.getFromEnv('xAxis'),
        catLen = xAxis.getTicksLen(),
        step = dataSet.getFromEnv('chartConfig').viewPortConfig.step;

    conf.scrollMinVal = Math.max(Math.round(xAxis.getVisibleConfig().minValue), 0) - step;
    conf.scrollMaxVal = Math.min(Math.round(xAxis.getVisibleConfig().maxValue) + 1, catLen) + step;

    conf.scrollMinValForLabel = Math.max(Math.round(xAxis.getVisibleConfig().minValue), 0) - step;
    conf.scrollMaxValForLabel = Math.min(Math.round(xAxis.getVisibleConfig().maxValue) + 1, catLen) + step;
  };

  return ZoomLineDataset;
}(_line2['default']);

exports['default'] = ZoomLineDataset;

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _lineAnimation = __webpack_require__(25);

var _lineAnimation2 = _interopRequireDefault(_lineAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.zoomLine': _lineAnimation2['default']['initial.dataset.line']
};

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var jsonData = chart.getFromEnv('dataSource'),
      chartDef = jsonData.chart || {},
      cdm = void 0,
      cdmchar = void 0,
      chartConfig = chart.config,
      datasetsJSON = jsonData.dataset,
      dataSet = void 0,
      children = chart.getChildren(),
      canvas = children.canvas[0],
      i = void 0,
      data = void 0,
      j = void 0,
      tempArr = void 0,
      len = void 0,
      datasetParent = canvas.getChildren('vCanvas')[0];

  chartConfig.cdm = cdm = (0, _lib.pluckNumber)(chartDef.compactdatamode, 0);
  chartConfig.cdmchar = cdmchar = (0, _lib.pluck)(chartDef.dataseparator, PIPE);

  if (!datasetsJSON) {
    chart.setChartMessage();
  }

  for (i = 0; i < datasetsJSON.length; i++) {
    dataSet = datasetsJSON[i];
    if (cdm) {
      if (dataSet.data && dataSet.data.split) {
        tempArr = dataSet.data.split(cdmchar);
        data = [];
        for (j = 0, len = tempArr.length; j < len; j++) {
          data.push({
            value: tempArr[j]
          });
        }
        dataSet.data = data;
      }
    }
  }
  (0, _lib.datasetFactory)(datasetParent, chart.getDSdef(), 'dataset', datasetsJSON.length, datasetsJSON);

  chart.iterateComponents(function (child) {
    if (child.getType && child.getType() === 'dataset') {
      child.createPinElem && child.addEventListener('createpinelements', child.createPinElem);
    }
  });
};

var _lib = __webpack_require__(5);

var PIPE = '|';
/**
 * this is simple dataset factory. It instantiate multiseries
 * @param {Object} chart chart API
 */

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(345);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(70);

var _cartesianAxisDualY = __webpack_require__(214);

var _cartesianAxisDualY2 = _interopRequireDefault(_cartesianAxisDualY);

var _zoomlineDualYDataset = __webpack_require__(710);

var _zoomlineDualYDataset2 = _interopRequireDefault(_zoomlineDualYDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var ZoomLineDy = function (_ZoomLine) {
  _inherits(ZoomLineDy, _ZoomLine);

  /**
   * constructor fn
   */
  function ZoomLineDy() {
    _classCallCheck(this, ZoomLineDy);

    var _this = _possibleConstructorReturn(this, _ZoomLine.call(this));

    _this.registerFactory('axis', _cartesianAxisDualY2['default'], ['canvas']);
    _this.registerFactory('dataset', _zoomlineDualYDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  ZoomLineDy.getName = function getName() {
    return 'ZoomLineDy';
  };

  /**
   * Function to state if inputOptions are to be used for this charts
   * @return {Boolean} value
   */


  ZoomLineDy.includeInputOptions = function includeInputOptions() {
    return ['DragZoomIn', 'DragPin', 'ZoomResetButton', 'ZoomOutButton', 'ZoomInButton'];
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  ZoomLineDy.prototype.getName = function getName() {
    return 'ZoomLineDy';
  };

  ZoomLineDy.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ZoomLine.prototype.__setDefaultConfig && _ZoomLine.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Zoomable and Panable Multi-series Dual-axis Line Chart';
    config.defaultDatasetType = 'zoomline';
    config.isdual = true;
  };

  ZoomLineDy.prototype._feedAxesRawData = function _feedAxesRawData() {
    return _fusioncharts3._feedAxesRawData.call(this);
  };

  ZoomLineDy.prototype._postSpaceManagement = function _postSpaceManagement() {
    _fusioncharts3._postSpaceManagement.call(this);
  };

  return ZoomLineDy;
}(_fusioncharts2['default']);

exports['default'] = ZoomLineDy;

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var jsonData = chart.getFromEnv('dataSource'),
      chartDef = jsonData.chart || {},
      cdm = void 0,
      cdmchar = void 0,
      chartConfig = chart.config,
      datasetsJSON = jsonData.dataset,
      dataSet = void 0,
      children = chart.getChildren(),
      canvas = children.canvas[0],
      i = void 0,
      data = void 0,
      j = void 0,
      tempArr = void 0,
      len = void 0,
      datasetJSON = void 0,
      parentyaxis = void 0,
      indices1 = [],
      indices2 = [],
      confArr1 = [],
      confArr2 = [],
      vCanvasArr = canvas.getChildren('vCanvas');

  chartConfig.cdm = cdm = (0, _lib.pluckNumber)(chartDef.compactdatamode, 0);
  chartConfig.cdmchar = cdmchar = (0, _lib.pluck)(chartDef.dataseparator, PIPE);

  if (!datasetsJSON) {
    chart.setChartMessage();
  }

  for (i = 0; i < datasetsJSON.length; i++) {
    dataSet = datasetsJSON[i];
    if (cdm) {
      if (dataSet.data && dataSet.data.split) {
        tempArr = dataSet.data.split(cdmchar);
        data = [];
        for (j = 0, len = tempArr.length; j < len; j++) {
          data.push({
            value: tempArr[j]
          });
        }
        dataSet.data = data;
      }
    }
  }
  for (i = 0; i < datasetsJSON.length; i++) {
    datasetJSON = datasetsJSON[i];
    parentyaxis = datasetJSON.parentyaxis || '';
    if (parentyaxis.toLowerCase() === 's') {
      confArr2.push(datasetJSON);
      indices2.push(i);
    } else {
      confArr1.push(datasetJSON);
      indices1.push(i);
    }
  }
  if (confArr1.length) {
    (0, _lib.datasetFactory)(vCanvasArr[0], chart.getDSdef(), 'dataset_line', confArr1.length, confArr1, indices1);
  } else {
    removeDataset(vCanvasArr[0]);
  }
  if (confArr2.length) {
    (0, _lib.datasetFactory)(vCanvasArr[1], chart.getDSdef(), 'dataset_line', confArr2.length, confArr2, indices2);
  } else {
    removeDataset(vCanvasArr[1]);
  }

  chart.iterateComponents(function (child) {
    if (child.getType && child.getType() === 'dataset') {
      child.createPinElem && child.addEventListener('createpinelements', child.createPinElem);
    }
  });
};

var _lib = __webpack_require__(5);

var PIPE = '|',

/**
 * function to remove component if name is matched with value in set
 * @param  {Object} component from where it would iterate
 * @param  {Array} set        criteria; if matched then remove
 */
removeDataset = function removeDataset(component) {
  component && component.iterateComponents(function (child) {
    if (child.getType() === 'dataset') {
      child.remove();
    }
  });
};
/**
 * this is simple dataset factory. It instantiate multiseries
 * @param {Object} chart chart API
 */

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(262);

var _from2 = _interopRequireDefault(_from);

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _lib = __webpack_require__(5);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var BLANK = '',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    UNDEF = void 0,
    scale = void 0,
    boxHeight = 0,
    // Height of text
_top = void 0,
    plotOut = void 0,
    hasTouch = 'ontouchstart' in window,
    CANVAS = 'canvas',
    chartExclusionList = {
  'zoomlinedy': true,
  'zoomline': true
},

/**
 * Helper function to create a RedRaphael group.
 * @param  {string} groupName                Name of the group to be created.
 * @param  {Element} parentContainer         The parent container in which the group will be appended.
 * @param {Object} dataset The concerned dataset
 * @return {Element}                         The group that was created.
 */
createGroup = function createGroup(groupName, parentContainer, crossLine) {
  var animationManager = crossLine.getFromEnv('animationManager');
  return animationManager.setAnimation({
    el: 'group',
    attr: { name: groupName },
    container: parentContainer,
    state: 'appearing',
    component: crossLine,
    label: 'group'
  });
},

/*
* Calculates the position of nearest UNDEF (unoccupied) element.
* @param: pos { int} The position from where the reference to be calculated
* @return: { Object} { absValue: { int}, noScaleSide: { scale}}
*/
nearestUndefined = function nearestUndefined(pos) {
  var i,
      diff,
      _scale,
      nearest = {},
      lowest = Number.POSITIVE_INFINITY;

  for (i = 0; i < this.length; i++) {
    diff = this[i] - pos;
    diff < 0 ? _scale = scale.NEG : _scale = scale.POS;
    diff = Math.abs(diff);

    if (diff <= lowest) {
      lowest = diff;
      nearest.absValue = diff;
      nearest.noScaleSide = _scale;
    }
  }

  return nearest;
},

/**
 * returns event handlers
 */
getHandler = function getHandler(_this) {
  return {
    onMouseOut: function onMouseOut() {
      _this.hide();
      _this.position = UNDEF;
    },
    onMouseDown: function onMouseDown() {
      !hasTouch && _this.hide();
      _this._mouseIsDown = true;
    },
    onMouseUp: function onMouseUp() {
      !hasTouch && _this.hide();
      delete _this._mouseIsDown;
    },
    onMouseMove: function onMouseMove(e) {
      var residue, info, line,
      // plotX,
      step, chart, xAxis, chartConfig, canvasLeft, axisDimention,
      // labelStep = xAxis.getAxisConfig('labelStep'),
      x, xAxisVisible,
      // cdm = chart.config.cdm,
      // bridge code.
      /* bridgePixel = cdm ? (xAxis.getPixel(0) - xAxis.getPixel(axisMin)) / info.scaleX :
          axisDimention.x - canvasLeft, */
      bridgePixel, pos;
      if (_this.disabled || _this._mouseIsDown && !hasTouch) {
        return;
      }

      info = _this.getZoomInfo();
      line = _this.getGraphicalElement('line');
      // plotX = _this.left;
      step = info.step;
      chart = _this.chart;
      xAxis = chart.getChildren('xAxis')[0];
      chartConfig = chart.get('config');
      canvasLeft = chartConfig.canvasLeft;
      axisDimention = xAxis.getAxisConfig('axisDimention');
      // labelStep = xAxis.getAxisConfig('labelStep');
      x = (0, _lib.getMouseCoordinate)(_this.container, e, chart).chartX;
      xAxisVisible = xAxis.getVisibleConfig();
      // cdm = chart.config.cdm;
      // bridge code.
      /* bridgePixel = cdm ? (xAxis.getPixel(0) - xAxis.getPixel(axisMin)) / info.scaleX :
          axisDimention.x - canvasLeft */
      bridgePixel = axisDimention.x - canvasLeft;

      // x = (x += (stepw / 2) + info.offset) - x % (stepw);
      pos = (pos = _this.getDataIndexFromPixel(Math.round(x))) + ((residue = pos % step) > step / 2 ? step - residue : -residue);
      x = xAxis.getPixel(pos, {
        wrtVisible: true
      }) - bridgePixel - canvasLeft;
      // x -= info.offset;
      line.transform(['T', Math.round(x), 0]);
      _this.hidden && chartConfig.crossline.enabled !== 0 && _this.show();
      // Donot show the crossline out of canvas area.
      (pos < xAxisVisible.minValue || pos > xAxisVisible.maxValue) && _this.hide();
      if (pos !== _this.position || _this.hidden) {
        _this.position = pos;
        _this.lineX = x;
        _this.updateLabels();
      }
    }
  };
};

var CrossLine = function (_ComponentInterface) {
  _inherits(CrossLine, _ComponentInterface);

  function CrossLine() {
    _classCallCheck(this, CrossLine);

    var _this2 = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this2.config.handlers = getHandler(_this2);
    return _this2;
  }

  CrossLine.prototype.configureAttributes = function configureAttributes(options) {
    this.config.options = options;
  };

  CrossLine.prototype.draw = function draw() {
    // Create the tracker for cross-hair. This is needed for mouse
    // tracking.
    var i = void 0,
        ii = void 0,
        plot = void 0,
        plotColor = void 0,
        attrObj = {},
        crossLine = this,
        labelPadding = 2.5,
        chart = crossLine.getFromEnv('chart'),
        chartComponents = chart.getFromEnv(),
        numberFormatter = chartComponents['number-formatter'],
        chartConfig = chart.config,
        plotX = crossLine.left = chartConfig._visx,
        plotY = crossLine.top = chartConfig.canvasTop,
        plotH = crossLine.height = chartConfig.canvasHeight,
        plotO = crossLine._visout = chartConfig._visout,
        plots = [],
        animationManager = crossLine.getFromEnv('animationManager'),
        groupValue = void 0,
        fetchedLine = crossLine.getGraphicalElement('line'),
        line = void 0,
        options = crossLine.config.options,
        labelStyle = options.labelstyle,
        valueStyle = options.valuestyle,
        pyaxis = chart.getChildren('yAxis')[0],
        pYAxisLimits = pyaxis.getLimit(),
        syaxis = chart.getChildren('yAxis')[1],
        sYAxisLimits = syaxis && syaxis.getLimit(),
        fetchedLabels = crossLine.getGraphicalElement('labels'),
        labels = [],
        positionLabel = void 0,
        groupLabel = void 0,
        fetchedPositionLabel = crossLine.getGraphicalElement('positionLabel'),
        containerElem = crossLine.getLinkedParent().getChildContainer('crosslineBottom'),
        callbackLabel = function callbackLabel() {
      this.remove();
    },
        callbackValue = function callbackValue() {
      this.remove();
    };

    chart.iterateComponents(function (child) {
      if (child.getType && child.getType() === 'dataset' && !child.getState('removed')) {
        plots.push(child);
      }
    });
    crossLine.plots = plots;

    crossLine.width = chartConfig._visw;
    // Create the Value inside data layer where the cross-line elements will play around.
    groupValue = crossLine.group;
    // group = crossLine.group = paper.group('crossline-labels', datalayer);
    if (!(groupValue = crossLine.getContainer('valueGroup'))) {
      groupValue = crossLine.addContainer('valueGroup', createGroup('crossline-value-group', containerElem, crossLine)).insertAfter(chart.getChildContainer('plotGroup'));
    }
    if (!(groupLabel = crossLine.getContainer('labelGroup'))) {
      groupLabel = crossLine.addContainer('labelGroup', createGroup('crossline-label-group', containerElem, crossLine));
      groupLabel.insertBefore(chart.getChildContainer('plotGroup'));
    }
    // Store chart's container to be use by mouseMove event
    // to calculate the mouse coordinates.
    crossLine.container = containerElem;

    groupValue.attr({
      transform: ['T', plotX, chartConfig._ymin]
    }).css(valueStyle);

    // Cross-line obviously needs a line.
    line = animationManager.setAnimation({
      el: fetchedLine || 'path',
      container: containerElem,
      attr: (0, _lib.extend2)({
        path: ['M', plotX, plotY, 'l', 0, plotH]
      }, options.line)
    }).toBack();
    if (!fetchedLine) {
      crossLine.addGraphicalElement('line', line, false);
    }

    // add the category label
    if (options.labelEnabled) {
      attrObj.x = plotO;
      attrObj.y = plotY + plotH + (chartConfig.scrollHeight || 0) + labelPadding;
      attrObj['vertical-align'] = 'top';
      attrObj.direction = chartConfig.textDirection;
      attrObj.text = BLANK;
    }
    positionLabel = animationManager.setAnimation({
      el: fetchedPositionLabel || 'text',
      attr: options.labelEnabled && attrObj,
      css: options.labelEnabled && labelStyle,
      container: groupLabel,
      callback: !options.labelEnabled && callbackLabel
    });

    if (!fetchedPositionLabel && options.labelEnabled) {
      crossLine.addGraphicalElement('positionLabel', positionLabel, false);
    }
    // initially hidden
    crossLine.hide();
    crossLine.ppixelRatio = -(pyaxis.config.axisDimention.axisLength / pyaxis.getVisibleLength());
    crossLine.spixelRatio = syaxis && -(syaxis.config.axisDimention.axisLength / syaxis.getVisibleLength());
    crossLine.yminValue = chartConfig._yminValue;
    crossLine.pyaxisminvalue = pYAxisLimits.min;
    crossLine.pyaxismaxvalue = pYAxisLimits.max;
    crossLine.syaxisminvalue = sYAxisLimits && sYAxisLimits.min;
    crossLine.syaxismaxvalue = sYAxisLimits && sYAxisLimits.max;
    crossLine.positionLabels = chartConfig.xlabels || {
      data: [],
      parsed: []
    };
    crossLine.chart = chart;
    i = 0;
    if (options.valueEnabled) {
      for (ii = plots.length; i < ii; i += 1) {
        plot = plots[i];
        plotColor = (0, _lib.hashify)(plot.config.linecolor);

        attrObj.x = 0;
        attrObj.y = plotO;
        attrObj.fill = plotColor;
        attrObj.direction = chartConfig.textDirection;
        attrObj.text = BLANK;
        attrObj['text-bound'] = valueStyle['text-bound'];
        attrObj.lineHeight = valueStyle.lineHeight;

        labels[i] = animationManager.setAnimation({
          el: fetchedLabels && fetchedLabels[i] || 'text',
          container: groupValue,
          attr: attrObj
        });
        !(fetchedLabels && fetchedLabels[i]) && crossLine.addGraphicalElement('labels', labels[i], true);
      }
      crossLine.numberFormatter = numberFormatter;
    }
    for (ii = fetchedLabels && fetchedLabels.length; i < ii; i++) {
      animationManager.setAnimation({
        el: fetchedLabels[i],
        component: crossLine,
        callback: callbackValue
      });
      fetchedLabels.splice(i, 1);
    }
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  CrossLine.prototype.getType = function getType() {
    return 'crossline';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  CrossLine.prototype.getName = function getName() {
    return 'crossLine';
  };

  // Open closed function to access chart variables.


  CrossLine.prototype.getZoomInfo = function getZoomInfo() {
    return this.getFromEnv('chartConfig').viewPortConfig;
  };

  CrossLine.prototype.getDataIndexFromPixel = function getDataIndexFromPixel(px) {
    var xAxis = this.getFromEnv('chart').getChildren('xAxis')[0];
    return Math.round(xAxis.getValue(px, {
      wrtVisible: true
    }));
  };

  CrossLine.prototype.getPositionLabel = function getPositionLabel(index) {
    var xAxis = this.getFromEnv('chart').getChildren('xAxis')[0],
        text = xAxis.getLabel(index);
    return text && text.label || BLANK;
  };

  CrossLine.prototype.disable = function disable(state) {
    if (state !== UNDEF) {
      this.disabled = !!state;
      if (this.disabled && this.visible) {
        this.hide();
      }
    }
    return this.disabled;
  };

  CrossLine.prototype.updateLabels = function updateLabels() {
    var crossline = this,
        labelPadding = 2.5,
        animationManager = crossline.getFromEnv('animationManager'),
        labels = crossline.getGraphicalElement('labels'),
        positionLabel = crossline.getGraphicalElement('positionLabel'),
        plots = crossline.plots,
        visw = crossline.width,
        position = crossline.position,
        x = crossline.lineX,
        flooredX = Math.floor(x),
        dummyText = crossline.dummyText,
        numberFormatter = crossline.numberFormatter,
        pYAxisMinValue = crossline.pyaxisminvalue,
        pYAxisMaxValue = crossline.pyaxismaxvalue,
        sYAxisMinValue = crossline.syaxisminvalue,
        sYAxisMaxValue = crossline.syaxismaxvalue,
        verticalLimits = getVerticalLimits(crossline);
    plotOut = crossline._visout;
    if (labels) {
      if (!dummyText) {
        dummyText = crossline.dummyText = crossline.getFromEnv('paper').text().hide();
      }

      // First set text so that we get correct value of boundingBox
      dummyText.attr({
        text: numberFormatter.yAxis('0')
      });
      dummyText && verticalLimits.init(dummyText.getBBox().height, labels.length);

      labels.forEach(function (label, i) {
        if (plots[i].getState('removed')) {
          return;
        }
        var plot = plots[i],
            value = plot.components.data[position] && plot.components.data[position].config.setValue,
            labelYPos,
            yAxis = plot.config.parentYAxis;
        if (value === UNDEF || !plot.getState('visible') || (yAxis ? value > sYAxisMaxValue || value < sYAxisMinValue : value > pYAxisMaxValue || value < pYAxisMinValue)) {
          labelYPos = plotOut;
        } else {
          labelYPos = yAxis ? (value - sYAxisMinValue) * crossline.spixelRatio : (value - pYAxisMinValue) * crossline.ppixelRatio;
        }
        verticalLimits.occupy(labelYPos, label);
      });
    }

    labels && labels.forEach(function (label, i) {
      if (plots[i].getState('removed')) {
        return;
      }
      var plot = plots[i],
          GUTTER = 10,
          value = plot.components.data[position] && plot.components.data[position].config.setValue,
          bBox,
          labelWidth,
          halfLabelWidth,
          adjustedHalfLabelWidth,

      // labelHeight,
      _xPos,
          _yPos,
          text = numberFormatter[plot.config.parentYAxis ? 'sYAxis' : 'yAxis'](value);

      // Only defined and valid texts are shown on the labels.
      if (text) {
        label.attr({
          text: text
        });

        // Now calculate boundingBox and label positions
        bBox = label.getBBox();
        labelWidth = bBox && bBox.width;
        halfLabelWidth = labelWidth && labelWidth * 0.5;
        adjustedHalfLabelWidth = halfLabelWidth && halfLabelWidth + GUTTER;
        // labelHeight = bBox && bBox.height;
        _yPos = label.calcY;
        _xPos = mathMax(0, mathMin(flooredX, visw));
        _yPos !== UNDEF && _xPos !== UNDEF && animationManager.setAnimation({
          el: label,
          attr: {
            x: _xPos,
            y: _yPos,
            'text-anchor': x <= adjustedHalfLabelWidth && 'start' || x + adjustedHalfLabelWidth >= visw && 'end' || 'middle',
            'text-bound': ['rgba(255,255,255,0.8)', 'rgba(0,0,0,0.2)', 1, labelPadding]
          },
          component: crossline
        });
      } else {
        // In case of UNDEF text labels, the label is transfered to out of visual. One way of hiding it.
        label.attr({
          x: -visw
        });
      }
    });

    positionLabel && animationManager.setAnimation({
      el: positionLabel,
      attr: {
        x: x + crossline.left,
        text: crossline.getPositionLabel(position),
        'text-bound': ['rgba(255,255,255,1)', 'rgba(0,0,0,1)', 1, labelPadding]
      },
      component: crossline
    });
  };

  CrossLine.prototype.show = function show() {
    if (!this.disabled) {
      this.hidden = false;
      var valueGroup = this.getContainer('valueGroup'),
          positionLabel = this.getGraphicalElement('positionLabel'),
          line = this.getGraphicalElement('line');
      valueGroup && valueGroup.show();
      positionLabel && positionLabel.show();
      line && line.show();
    }
  };

  CrossLine.prototype.hide = function hide() {
    this.hidden = true;
    var valueGroup = this.getContainer('valueGroup'),
        positionLabel = this.getGraphicalElement('positionLabel'),
        line = this.getGraphicalElement('line');
    valueGroup && valueGroup.hide();
    positionLabel && positionLabel.hide();
    line && line.hide();
  };

  CrossLine.prototype.dispose = function dispose() {
    var crossline = this,
        key;

    // delete all the properties in crossline object
    for (key in crossline) {
      crossline.hasOwnProperty(key) && delete crossline[key];
    }
  };

  return CrossLine;
}(_componentInterface2['default']);

function getVerticalLimits(crossline) {
  /*
   * This controls the overlapping of the crosshair labels if the plots are close.
   * This calculates the space to display the labels at the before it is plotted in DOM.
   * The buleprint of the algorithm is like:
   * When the labels position is being calculated.
   * a) Place the label if the position is not occupied
   * b) If the position is occupied find the neares unoccupied space
   * c) If the unoccupied space is downwards place it there
   * d) If the unoccupied space is upwards move the whole system up and place it in the next available
   * down position
   */
  var yminValue = crossline.yminValue,
      chart = crossline.getFromEnv('chart'),
      pyaxis = chart.getChildren('yAxis')[0],
      _bottom = pyaxis.getPixel(yminValue),
      margin = 2,
      oMatrix = void 0,
      result = {},
      sections = void 0;
  scale = {};
  _top = crossline.height * -1;
  /*
   * An enum to determine whether the actions (shift / unoccupied position) is in the left side
   * or right side.
   * >----------------I----------------<
   * I is the reference index from which the actions are calculated.
   * Anypoint left to I is scale.NEG otherwise scale.POS
   */
  try {
    Object.defineProperty(scale, 'POS', {
      enumerable: false,
      configurable: false,
      get: function get() {
        return 1;
      }
    });

    Object.defineProperty(scale, 'NEG', {
      enumerable: false,
      configurable: false,
      get: function get() {
        return -1;
      }
    });
  } catch (e) {
    // For almighty IE8
    scale.POS = 1;
    scale.NEG = -1;
  }

  try {
    Object.defineProperty(result, 'top', {
      enumerable: false,
      configurable: false,
      get: function get() {
        return _top;
      }
    });

    Object.defineProperty(result, 'bottom', {
      enumerable: false,
      configurable: false,
      get: function get() {
        return _bottom;
      }
    });
  } catch (e) {
    // IE-8
    result.top = _top;
    result.bottom = _bottom;
  }

  /*
   * Initialize the limiting system
   * @param height { int} - label height
   * @param labelCount { int} - total no of labels
   */
  result.init = function (height) {
    var i,
        defaultValue = 0;

    boxHeight = height + margin;
    _top += boxHeight / 2;
    sections = Math.floor(Math.abs(_top) / boxHeight);

    // if (sections >= labelCount) {
    //   isSpaceEnough = true;
    // }
    oMatrix = new OccupancyMatrix(sections);
    for (i = 0; i < sections; i++) {
      oMatrix.pos.push(defaultValue);
    }
  };

  /*
   * Occupy one section in the vertical scale
   * @param pos { int} - value from data config
   * @param label { object} - label object
   */
  result.occupy = function (pos, label) {
    var passedSections = Math.floor(Math.abs(_top - pos) / boxHeight);
    oMatrix && oMatrix.attachShift(pos, passedSections, label);
  };

  return result;
}
// Attachable label can be positioned / attached anywhere along the y axis.
// If its position is changed via shifting or providing index it auto calculates the y.

var AttachableLabel = function () {
  function AttachableLabel() {
    _classCallCheck(this, AttachableLabel);

    this.y = 0; // Absolute position
    this.lRef = UNDEF; // Label object itself
    this.__shift = 0; // Inner properties to calculate y. Indicate relative shift.
    this.__index = 0; // Inner properties to calculate y. Indicate absolute index.
  }

  AttachableLabel.prototype.applyShift = function applyShift(shiftApplied) {
    this.__shift = shiftApplied;
    // Shift applied, now calculate the y
    this.lRef.calcY = this.y += shiftApplied * boxHeight;
  };

  AttachableLabel.prototype.applyDirectIndex = function applyDirectIndex(newIndex) {
    this.__index = newIndex;
    // Index changed along the sections of y axis. now calculate the y
    this.lRef.calcY = this.y = _top - newIndex * boxHeight * -1;
  };

  return AttachableLabel;
}();
/**
  * Keeps a matrix of lables plotted virtually alreday, (not actually in DOM) and
  * controls the overlapping by shifting or suggesting indexes.
  * This class when initialized, is itself an array containg the plotted labels.
  * There is an holes array which is of same length and keeps track of the unoccupied position.
  * These two are closely related and relate like
  *  -------------------------
  * |   |   | l1 |   |   | l2 |  Is the occupency matrix itself
  *  -------------------------
  *  ---------------
  * | 0 | 1 | 3 | 4 | Would be the holes.
  *  ---------------
  * @param: count { int} - size of the matrix. Generally be the size of the sections
  */


var OccupancyMatrix = function () {
  function OccupancyMatrix(count) {
    _classCallCheck(this, OccupancyMatrix);

    this.holes = (0, _from2['default'])(Array(count).keys());
    this.pos = [];
  }
  /*
  * Recalculate the state of unoccupied positions freshly.
  * Removes the state before it was called
  */


  OccupancyMatrix.prototype.repositionHoles = function repositionHoles() {
    var i,
        index = 0,
        pos = this.pos,
        value;

    this.holes.length = 0;
    for (i = 0; i < pos.length; i++) {
      value = pos[i];
      !value && (this.holes[index++] = i);
    }
  };

  /*
  * Possition the labels and attach the shidt information along with calculeatedY on the labels.
  * @param: value { int} - value of the labels, inthis case y position of the labels
  * @param: index { int} - the section where it would fit normally, calculated based on his value only.
  * @param: label { object} - the label object, which is to be attached. label.calcY is injected
  *                          after calculating it correctly.
  */


  OccupancyMatrix.prototype.attachShift = function attachShift(value, index, label) {
    var indexVal,
        pos = this.pos,
        length = pos.length,
        nearestUndefIndex,
        tempArr,
        attachedLabel,
        _index,
        calibratedIndex,
        nearestOffset;

    if (value === plotOut) {
      // Plot outside if label is not visible
      label.calcY = plotOut;
      return;
    } else {
      calibratedIndex = index > length - 1 ? length - 1 : index; // If the plot value is too low
      indexVal = pos[calibratedIndex];
    }
    attachedLabel = new AttachableLabel(); // Create a new label which is attachable
    attachedLabel.y = value;
    attachedLabel.lRef = label;

    if (!indexVal) {
      // If the position is unoccupied, go ahead and occupy it
      attachedLabel.applyDirectIndex(calibratedIndex);
      pos.splice(calibratedIndex, 1, attachedLabel);
      this.holes.splice(this.holes.indexOf(calibratedIndex), 1); // Update the occupancy matrix.
      return;
    }

    // If position is occupied, the label needs to be opsitioned down or up
    nearestOffset = nearestUndefined.call(this.holes, calibratedIndex);
    // Get the absolute nearest index
    nearestUndefIndex = calibratedIndex + nearestOffset.absValue * nearestOffset.noScaleSide;

    if (nearestOffset.noScaleSide === scale.POS) {
      // If labels to be attached down the y axis
      attachedLabel.applyDirectIndex(nearestUndefIndex);
      pos.splice(nearestUndefIndex, 1, attachedLabel);
      this.holes.splice(this.holes.indexOf(nearestUndefIndex), 1);
      return nearestUndefIndex;
    }

    if (nearestOffset.noScaleSide === scale.NEG) {
      // If the labels to be aattached is up the y axis we need the shift of sections and
      // then put it down
      tempArr = pos.splice(nearestUndefIndex + 1, pos.length - 1); // Section to be shifted
      pos.pop();
      tempArr.forEach(function (element) {
        // Shift the system of attachable lable
        element && element.applyShift(-1);
      });
      [].push.apply(pos, tempArr);
      _index = nearestUndefIndex;
      // Find the nearest  unoccupied position after shifting the index
      while (true) {
        if (!pos[_index]) {
          break;
        }
        _index++;
      }
      // This is an dummy insert for recalculation of holes since the whole system has changed.
      pos.push(0);
      this.repositionHoles();
      // After recalculation get the nearest unoocupied position again since there might be better
      // place to push the new label
      nearestOffset = nearestUndefined.call(this.holes, _index);
      _index += nearestOffset.absValue * nearestOffset.noScaleSide;
      attachedLabel.applyDirectIndex(_index);
      // Add the label where it was suggested
      pos.splice(_index, 1, attachedLabel);
      this.repositionHoles();
      return pos.length - 1;
    }
  };

  return OccupancyMatrix;
}();

exports['default'] = {
  extension: function extension(Fusioncharts) {
    Fusioncharts.addEventListener('instantiated', function (event) {
      if (event.sender.getName() === CANVAS) {
        var canvas = event.sender,
            handlers = void 0,
            crosslineOptions = void 0,
            crosslineCount = void 0;

        canvas.registerFactory('crossLineManager-zoomline', function () {
          var chart = event.sender.getFromEnv('chart'),
              chartName = chart && chart.getName(),
              crossline = void 0;
          if (chartName && chartExclusionList[chartName.toLowerCase()]) {
            crosslineOptions = chart.config.crossline;
            if (crosslineOptions && crosslineOptions.enabled !== 0 && chart.config.useCrossline === 1) {
              crosslineCount = 1;
            } else {
              crosslineOptions && (crosslineOptions.enabled = 0);
              crosslineCount = 0;
            }

            (0, _lib.componentFactory)(canvas, CrossLine, 'crossLine', crosslineCount, [crosslineOptions]);
            if (crosslineCount) {
              crossline = canvas.getChildren('crossLine')[0];
              handlers = crossline.config.handlers;

              // attach mouse and touch event handlers
              crossline.addExtEventListener('mousemove', handlers.onMouseMove, canvas);
              crossline.addExtEventListener('dragstart', handlers.onMouseDown, canvas);
              crossline.addExtEventListener('dragend', handlers.onMouseUp, canvas);
              crossline.addExtEventListener('mouseout', handlers.onMouseOut, canvas);
              crossline.addExtEventListener('touchstart', handlers.onMouseMove, canvas);
            }
          }
        });
      }
    });
  },
  name: 'crossline-manager',
  type: 'extension',
  requiresFusionCharts: true
};

/***/ })

},[705])["default"];
});
//# sourceMappingURL=fusioncharts.zoomline.js.map