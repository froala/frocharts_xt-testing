
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
return webpackJsonpFusionCharts([2],{

/***/ 111:
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

var _fusioncharts = __webpack_require__(16);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _lib = __webpack_require__(5);

var _realtimecolumn = __webpack_require__(230);

var _realtimecolumn2 = _interopRequireDefault(_realtimecolumn);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _msgloggerLinker = __webpack_require__(171);

var _msgloggerLinker2 = _interopRequireDefault(_msgloggerLinker);

var _alertmanagerLinker = __webpack_require__(170);

var _alertmanagerLinker2 = _interopRequireDefault(_alertmanagerLinker);

var _constructor = __webpack_require__(163);

var _constructor2 = _interopRequireDefault(_constructor);

var _dependencyManager = __webpack_require__(6);

var _realtimecolumnChartAnimation = __webpack_require__(763);

var _realtimecolumnChartAnimation2 = _interopRequireDefault(_realtimecolumnChartAnimation);

var _realtime = __webpack_require__(223);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var convertColor = _lib.graphics.convertColor,
    animationObjStr = _lib.preDefStr.animationObjStr,
    UNDEF = void 0,
    visibleStr = _lib.preDefStr.visibleStr,
    configStr = _lib.preDefStr.configStr,
    getDataset = function getDataset(chart) {
  var canvas = chart.getChildren('canvas')[0],
      vcanvas = canvas.getChildren('vCanvas')[0],
      vcanvasChildren = vcanvas.getChildren(),
      intermediateComponents,
      datasets = [];
  for (var key in vcanvasChildren) {
    if (key === 'dataset') {
      datasets = datasets.concat(vcanvasChildren[key]);
      continue;
    }
    intermediateComponents = vcanvasChildren[key];
    for (var index = 0; index < intermediateComponents.length; index++) {
      if (intermediateComponents[index].getChildren('dataset')) {
        datasets = datasets.concat(intermediateComponents[index].getChildren('dataset'));
      }
    }
  }
  return datasets;
};

function _setData(value, label) {
  var stream = _lib.BLANKSTRING;

  if (value && value.toString || value === _lib.BLANKSTRING || value === 0) {
    stream = 'value=' + value.toString();
  }
  if (label && label.toString || label === _lib.BLANKSTRING) {
    stream = stream + '&label=' + label.toString();
  }
  if (stream) {
    this.feedData(stream);
  }
}

(0, _dependencyManager.addDep)({
  name: 'realtimeColumnChartAnimation',
  type: 'animationRule',
  extension: _realtimecolumnChartAnimation2['default']
});

var RealtimeColumn = function (_MSCartesian) {
  _inherits(RealtimeColumn, _MSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeColumn.getName = function getName() {
    return 'RealtimeColumn';
  };

  function RealtimeColumn() {
    _classCallCheck(this, RealtimeColumn);

    var _this = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _constructor2['default'].addDep(_msgloggerLinker2['default']);
    _constructor2['default'].addDep(_alertmanagerLinker2['default']);

    _this.showRTvalue = true;
    _this.canvasPadding = true;
    _this.isRealTime = true;
    _this.rtManageSpace = true;
    _this.transposeAxis = true;
    _this._setData = _setData;
    _this.eiMethods = _realtime.eiMethods;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeColumn.prototype.getName = function getName() {
    return 'RealtimeColumn';
  };

  RealtimeColumn.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian.prototype.__setDefaultConfig && _MSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'realtimecolumn';
    config.enablemousetracking = true;
  };

  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  RealtimeColumn.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _MSCartesian.prototype.parseChartAttr.call(this, dataObj);
    this.config.drawTrendRegion = 0;
  };

  // Setting the number of categories to be shown.


  RealtimeColumn.prototype._setRealTimeCategories = function _setRealTimeCategories() {
    var iapi = this,
        xAxis = iapi.getChildren('xAxis')[0],
        tempArr = [],
        realTimeConfig = iapi.config.realTimeConfig,
        clear = realTimeConfig && realTimeConfig.clear,
        categories = clear ? UNDEF : iapi.getFromEnv('dataSource').categories && iapi.getFromEnv('dataSource').categories[0] && iapi.getFromEnv('dataSource').categories[0].category,
        catLen = xAxis.getTicksLen(),
        numDisplaySets = realTimeConfig.numDisplaySets;

    // Setting category as per numDisplaySets
    catLen = xAxis.getTicksLen();
    if (catLen < numDisplaySets) {
      tempArr.length = numDisplaySets - catLen;
      categories = categories ? tempArr.concat(categories) : tempArr;
      xAxis.setTickValues(categories);
    } else if (catLen > numDisplaySets) {
      categories.splice(numDisplaySets, catLen - numDisplaySets);
      xAxis.setTickValues(categories);
    }
  };

  // Spacemanagement for real time value


  RealtimeColumn.prototype._realTimeValuePositioning = function _realTimeValuePositioning(availableHeight) {
    var iapi = this,
        components = iapi.getChildren(),
        smartLabel = iapi.getFromEnv('smartLabel'),
        height,
        space,
        config = iapi.config,
        realTimeConfig = config.realTimeConfig || (config.realTimeConfig = {}),
        padding = realTimeConfig.realTimeValuePadding,
        axisConfig = components.xAxis[0].config,
        style = axisConfig.trend.trendStyle,
        attr = realTimeConfig.style = {
      color: convertColor((0, _lib.pluck)(realTimeConfig.realtimeValueFontColor, style.color), (0, _lib.pluck)(axisConfig.trendlineAlpha, 99)),
      fontFamily: (0, _lib.pluck)(realTimeConfig.realtimeValueFont, style.fontFamily),
      fontSize: (0, _lib.pluck)(realTimeConfig.realtimeValueFontSize, style.fontSize),
      fontWeight: (0, _lib.pluck)(realTimeConfig.fontWeight, style.fontWeight),
      lineHeight: (0, _lib.pluckNumber)(style.lineHeight)
    };

    smartLabel.useEllipsesOnOverflow(config.useEllipsesWhenOverflow);
    smartLabel.setStyle(attr);

    // Setting the height to be left for displaying the value.
    realTimeConfig.height = height = smartLabel.getOriSize(_lib.TESTSTR).height;
    realTimeConfig.canvasBottom = config.canvasBottom;
    space = height + padding;

    if (space > availableHeight) {
      space = availableHeight;
    }
    return {
      bottom: space
    };
  };
  /**
   * function to manage all draw draw related jobList
   * this function handle all the draw related jobs like space management,
   * post space management and draw
   */


  RealtimeColumn.prototype.draw = function draw() {
    _MSCartesian.prototype.draw.call(this);
    if (this.showRTvalue && this.config.realTimeConfig.showRTValue) {
      this._drawRealTimeValue();
    }
  };
  // Drwaing the real time value.


  RealtimeColumn.prototype._drawRealTimeValue = function _drawRealTimeValue() {
    var iapi = this,
        chart = iapi.getFromEnv('chart'),
        config = iapi.config,
        dataset = getDataset(chart),
        animationManager = chart.getFromEnv('animationManager'),
        smartLabel = iapi.getFromEnv('smartLabel'),
        realTimeConfig = config.realTimeConfig,
        realtimeValueSeparator = realTimeConfig.realtimeValueSeparator,
        len = dataset.length,
        displayValue = _lib.BLANKSTRING,
        animationObj = iapi.get(configStr, animationObjStr),
        animObj = animationObj.animObj,
        dummyObj = animationObj.dummyObj,
        animationDuration = animationObj.duration,
        canvasBottom = realTimeConfig.canvasBottom,
        height = realTimeConfig.height,
        canvasLeft = config.canvasLeft,
        canvasRight = config.canvasRight,
        style = realTimeConfig.style || {},
        positionX,
        positionY,
        realTimeValueGraphics,
        realTimeValueGraphicsCheck = iapi.getGraphicalElement('realTimeValue'),
        chartChildContainer = iapi.getChildContainer(),
        attr,
        parentLayer = chart.getContainer().parentGroup,
        realTimeValueGroup = chartChildContainer.realTimeValueGroup,
        datasetStore,
        drawn,
        prevData,
        dataDisplayValue,
        i;

    if (realTimeConfig.clear && realTimeValueGraphics) {
      animationManager.setAnimation({
        el: realTimeValueGraphics,
        attr: { text: _lib.BLANKSTRING },
        component: iapi,
        label: 'label'
      });
    }

    if (!realTimeValueGroup) {
      realTimeValueGroup = chart.addChildContainer('realTimeValueGroup', animationManager.setAnimation({
        el: 'group',
        attr: { name: 'realTimeValue' },
        container: parentLayer,
        label: 'group',
        component: chart
      }).insertBefore(chartChildContainer.datalabelsGroup));
    } else {
      for (i = 0; i < len; i++) {
        datasetStore = dataset[i].components.data;
        prevData = datasetStore[datasetStore.length - 1];
        dataDisplayValue = prevData && prevData.config.displayValue;

        displayValue += dataDisplayValue ? dataDisplayValue === UNDEF ? _lib.BLANKSTRING : dataDisplayValue + realtimeValueSeparator : _lib.BLANKSTRING;
      }

      displayValue = displayValue.substring(0, displayValue.length - realtimeValueSeparator.length);
      smartLabel.useEllipsesOnOverflow(config.useEllipsesWhenOverflow);
      smartLabel.setStyle(style);
      positionX = (canvasLeft + canvasRight) / 2;
      positionY = canvasBottom - height / 2;

      attr = {
        x: positionX || 0,
        y: positionY || 0,
        'font-size': style.fontSize,
        'font-weight': style.fontWeight,
        'font-family': style.fontFamily,
        'line-height': style.lineHeight,
        text: displayValue,
        fill: style.color,
        visibility: visibleStr
      };

      realTimeValueGraphics = animationManager.setAnimation({
        el: realTimeValueGraphicsCheck || 'text',
        attr: attr,
        container: realTimeValueGroup,
        label: 'rtValue',
        component: chart
      });
      drawn = true;
      if (!realTimeValueGraphicsCheck) {
        iapi.addGraphicalElement('realTimeValue', realTimeValueGraphics);
      }

      if (realTimeValueGraphics && !drawn) {
        realTimeValueGraphics.show();
        realTimeValueGraphics.animateWith(dummyObj, animObj, attr, animationDuration);
      }
    }
  };

  RealtimeColumn.prototype._hideRealTimeValue = function _hideRealTimeValue() {
    var iapi = this,
        graphics = iapi.getGraphicalElement('realTimeValue');

    graphics && graphics.hide();
  };

  RealtimeColumn.prototype._setRTmenu = function _setRTmenu(showRTmenuItem, useMessageLog) {
    var iapi = this,
        chartMenuTools = iapi.getFromEnv('chartMenuTools'),
        setChartTools = chartMenuTools.set,
        updateChartMenuTools = chartMenuTools.update,
        stopState = false,
        toggle = function toggle() {
      if (stopState) {
        iapi._restartUpdate();
        updateChartMenuTools('Restart Update', 'Stop Update', iapi);
        stopState = false;
      } else {
        iapi._stopUpdate();
        updateChartMenuTools('Stop Update', 'Restart Update', iapi);
        stopState = true;
      }
    },
        toolArray = [{
      'Clear Chart': {
        handler: function handler() {
          iapi._clearChart();
        },
        action: 'click'
      }
    }, {
      'Stop Update': {
        handler: function handler() {
          toggle();
        },
        action: 'click'
      }
    }];

    showRTmenuItem && setChartTools(toolArray);
    useMessageLog && setChartTools([{
      'Show Log': {
        'handler': function handler() {
          iapi.getChildren('messageLogger')[0].show();
        },
        'action': 'click'
      }
    }]);
  };

  RealtimeColumn.prototype._getDataJSON = function _getDataJSON() {
    return this.config.realTimeConfig.legacyUpdateObj || {
      values: []
    };
  };

  /**
   * function to check if the chart specific data is proper is not
   * this fn is define for specific chart types
   * @return {boolean} if JSON data is valid or not
   */


  RealtimeColumn.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {
    var jsonData = this.getFromEnv('dataSource'),
        datasetsJSON = jsonData.dataset,
        dataStreamer = this.getChildren('dataStreamer') && this.getChildren('dataStreamer')[0];
    if (!datasetsJSON) {
      dataStreamer && dataStreamer._stopUpdate();
      return true;
    }
  };

  /**
   * function to check if the chart has the proper data or not
   * @return {boolean} if JSON data is valid or not
   */


  RealtimeColumn.prototype._checkInvalidData = function _checkInvalidData() {
    var iapi = this,
        dataObj = iapi.getFromEnv('dataSource'),
        dataStreamer = iapi.getChildren('dataStreamer') && this.getChildren('dataStreamer')[0];
    // Checking if the chart has proper data
    if (dataObj === {}) {
      dataStreamer && dataStreamer._stopUpdate();
      return true;
    }
  };
  // Function to copy the original data to a different DS for showing tooltip in RT charts.


  RealtimeColumn.prototype._setRTdata = function _setRTdata() {
    var iapi = this,
        datasets = getDataset(iapi),
        i,
        dataRT,
        dataset,
        removeDataArr,
        removeDataArrLen,
        datasetComponents,
        data,
        dataLen,
        len = datasets.length;

    for (i = len; i--;) {
      dataset = datasets[i];
      datasetComponents = dataset.components;
      removeDataArr = datasetComponents.removeDataArr || [];
      removeDataArrLen = removeDataArr.length;
      data = datasetComponents.data;
      dataLen = data.length;
      dataRT = [].concat(removeDataArr, data.slice(removeDataArrLen, dataLen));
      datasetComponents.dataRT = dataRT;
    }
  };
  /**
   * to get multiseries group class defined
   */


  RealtimeColumn.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };
  /**
   * to get Dataset class defined
   */


  RealtimeColumn.prototype.getDSdef = function getDSdef() {
    return _realtimecolumn2['default'];
  };

  RealtimeColumn.prototype._realTimeConfigure = function _realTimeConfigure() {
    _realtime._realTimeConfigure.call(this);
  };

  RealtimeColumn.prototype._stopUpdate = function _stopUpdate(source) {
    _realtime._stopUpdate.call(this, source);
  };

  RealtimeColumn.prototype._restartUpdate = function _restartUpdate() {
    _realtime._restartUpdate.call(this);
  };

  RealtimeColumn.prototype._isUpdateActive = function _isUpdateActive() {
    _realtime._isUpdateActive.call(this);
  };

  RealtimeColumn.prototype._getData = function _getData() {
    _realtime._getData.call(this);
  };

  RealtimeColumn.prototype.realTimeUpdate = function realTimeUpdate(dataObj) {
    _realtime.realTimeUpdate.call(this, dataObj);
  };

  RealtimeColumn.prototype._RTmanageSpace = function _RTmanageSpace() {
    _realtime._RTmanageSpace.call(this);
  };

  RealtimeColumn.prototype.realTimeDraw = function realTimeDraw() {
    var eventArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _realtime.realTimeDraw.call(this, eventArgs);
  };

  RealtimeColumn.prototype.feedData = function feedData(stream) {
    _realtime.feedData.call(this, stream);
  };

  RealtimeColumn.prototype._linearDataParser = function _linearDataParser(responseText) {
    return _realtime._linearDataParser.call(this, responseText);
  };

  RealtimeColumn.prototype._clearChart = function _clearChart(_source) {
    _realtime._clearChart.call(this, _source);
  };

  return RealtimeColumn;
}(_fusioncharts2['default']);

exports['default'] = RealtimeColumn;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._getData = exports.configureAttributes = undefined;

var _lib = __webpack_require__(5);

var _colorBucket = __webpack_require__(143);

var _colorBucket2 = _interopRequireDefault(_colorBucket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function configureAttributes() {
  var iapi = this,
      jsonData = iapi.getFromEnv('dataSource'),
      colorrange = jsonData.colorrange;
  // If color array is present and contains non-zero color elements
  if (colorrange && colorrange.color && colorrange.color.length) {
    (0, _lib.componentFactory)(iapi, _colorBucket2['default'], 'colorRange', 1, [{
      colorRange: colorrange,
      numberFormatter: iapi.getFromEnv('number-formatter')
    }]);
    iapi.addToEnv('colorRange', iapi.getChildren('colorRange') && iapi.getChildren('colorRange')[0]);
  } else {
    iapi.deleteFromEnv('colorRange');
  }
}
function _getData() {
  var iapi = this,
      dataset = iapi.getDatasets(),
      data,
      dataObj;
  if (dataset) {
    dataObj = dataset[0].components.data;
    if (dataObj && dataObj[0]) {
      data = dataObj[0].config;
      return (0, _lib.pluckNumber)(data.setValue, data.itemValue);
    }
  }
}
exports.configureAttributes = configureAttributes;
exports._getData = _getData;

/***/ }),

/***/ 228:
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

var _dependencyManager = __webpack_require__(6);

var _componentInterface2 = __webpack_require__(7);

var _componentInterface3 = _interopRequireDefault(_componentInterface2);

var _bulletAnimation = __webpack_require__(737);

var _bulletAnimation2 = _interopRequireDefault(_bulletAnimation);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var Raphael = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    BLANKSTRING = _lib.BLANK,
    UNDEF = void 0,
    showHoverEffectStr = _lib.preDefStr.showHoverEffectStr,
    SETROLLOVERATTR = 'setRolloverAttr',
    ROUND = _lib.preDefStr.ROUND,
    miterStr = _lib.preDefStr.miterStr,
    BUTT = 'butt',
    PLOTBORDERCOLOR = 'plotBorderColor',
    PLOTGRADIENTCOLOR = 'plotGradientColor',
    colorStrings = _lib.preDefStr.colors,
    SHOWSHADOW = 'showShadow',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    mathAbs = math.abs,
    COLOR_FFFFFF = colorStrings.FFFFFF,
    noneStr = 'none',
    FILLMIXDARK10 = '{dark-10}',
    ROLLOVER = 'DataPlotRollOver',
    SETROLLOUTATTR = 'setRolloutAttr',
    ROLLOUT = 'DataPlotRollOut',
    getDarkColor = _lib.graphics.getDarkColor,
    win = window,
    userAgent = win.navigator.userAgent,
    doc = win.document,
    hasTouch = doc.documentElement.ontouchstart !== UNDEF,
    isIE = /msie/i.test(userAgent) && !win.opera,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    M = 'M',
    L = 'L',
    DECIDE_CRISPENING = {
  'true': UNDEF,
  'false': 'crisp'
},
    EVENTARGS = 'eventArgs',
    GROUPID = 'groupId',
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    PLOTFILLCOLOR_STR = _lib.preDefStr.PLOTFILLCOLOR_STR,
    HTP = hasTouch ? _lib.TOUCH_THRESHOLD_PIXELS : _lib.CLICK_THRESHOLD_PIXELS,
    POINTER = 'pointer';
(0, _dependencyManager.addDep)({
  name: 'bulletAnimation',
  type: 'animationRule',
  extension: _bulletAnimation2['default']
});
/**
 * Creates dataset class for Bullet
 */

var BulletDataset = function (_componentInterface) {
  _inherits(BulletDataset, _componentInterface);

  /**
   * Constructor function to initialise attributes of bullet dataset object
   */
  function BulletDataset() {
    _classCallCheck(this, BulletDataset);

    var _this = _possibleConstructorReturn(this, _componentInterface.call(this));

    _this.addData = function () {
      // Blank fn to Override it's parent method
    };
    _this.removeData = function () {
      // Blank fn to Override it's parent method
    };
    _this.components = {};
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  BulletDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  BulletDataset.prototype.getName = function getName() {
    return 'bullet';
  };
  /**
   * Configure dataset component and parse default values
   * @param  {Object} datasetJSON JSON for dataset configurations
   * @return {boolean} Indicates whether the configuration was successful or not
   */


  BulletDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.config.JSONData = datasetJSON;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        JSONData = dataSet.config.JSONData,
        chartAttr = chart.getFromEnv('dataSource').chart,
        colorM = dataSet.getFromEnv('color-manager'),
        showplotborder,
        plotColor = conf.plotColor = colorM.getColor(PLOTFILLCOLOR_STR),
        plotBorderDash = (0, _lib.pluckNumber)(JSONData.dashed, chartAttr.plotborderdashed),
        plotDashLen,
        plotDashGap,
        isRoundEdges,
        plotFillAlpha,
        dataStore = dataSet.components.data,
        isBar = chart.isBar,
        is3D = chart.config.is3D,
        isStacked = chart.isStacked,
        stack100Percent,
        targetalpha,
        plotAsDot,
        targetCapStyle;

    // Set visibilty of dataset
    dataSet.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, 1) === 1);
    conf.targetCapStyle = targetCapStyle = (0, _lib.pluck)(chartAttr.targetcapstyle, ROUND).toLowerCase();

    if (targetCapStyle !== BUTT && targetCapStyle !== ROUND && targetCapStyle !== 'square' && targetCapStyle !== 'inherit') {
      conf.targetCapStyle = ROUND;
    }

    conf.upperLimit = (0, _lib.pluckNumber)(chartAttr.upperlimit);
    conf.lowerLimit = (0, _lib.pluckNumber)(chartAttr.lowerlimit);

    conf.initAnimation = true;
    showplotborder = conf.showplotborder = (0, _lib.pluckNumber)(chartAttr.showplotborder, 0);
    conf.plotDashLen = plotDashLen = (0, _lib.pluckNumber)(chartAttr.plotborderdashlen, 5);
    conf.plotDashGap = plotDashGap = (0, _lib.pluckNumber)(chartAttr.plotborderdashgap, 4);
    conf.plotfillAngle = (0, _lib.pluckNumber)(360 - chartAttr.plotfillangle, isBar ? 180 : 90);
    conf.plotFillAlpha = plotFillAlpha = (0, _lib.pluck)(JSONData.alpha, chartAttr.plotfillalpha, _lib.HUNDREDSTRING);
    conf.plotColor = plotColor = (0, _lib.pluck)(chartAttr.plotfillcolor, plotColor);
    conf.isRoundEdges = isRoundEdges = (0, _lib.pluckNumber)(chartAttr.useroundedges, 0);
    conf.plotRadius = (0, _lib.pluckNumber)(chartAttr.useRoundEdges, conf.isRoundEdges ? 1 : 0);
    conf.plotFillRatio = (0, _lib.pluck)(JSONData.ratio, chartAttr.plotfillratio);
    conf.plotgradientcolor = (0, _lib.getDefinedColor)(chartAttr.plotgradientcolor, colorM.getColor(PLOTGRADIENTCOLOR));
    // !usePlotGradientColor && (plotgradientcolor = BLANK);
    conf.showPlotBorderOnHover = (0, _lib.pluckNumber)(chartAttr.showplotborderonhover, 0);
    conf.plotBorderAlpha = (0, _lib.pluck)(chartAttr.plotborderalpha, plotFillAlpha, _lib.HUNDREDSTRING);
    conf.plotBorderColor = (0, _lib.pluck)(chartAttr.plotbordercolor, is3D ? COLOR_FFFFFF : colorM.getColor(PLOTBORDERCOLOR));
    conf.plotBorderThickness = showplotborder ? (0, _lib.pluckNumber)(chartAttr.plotborderthickness, 0) : 0;
    conf.plotBorderDashStyle = plotBorderDash ? (0, _lib.getDashStyle)(plotDashLen, plotDashGap) : noneStr;
    conf.showValue = (0, _lib.pluckNumber)(JSONData.showvalue, chartAttr.showvalue, 1);
    conf.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);

    conf.showShadow = isRoundEdges || is3D ? (0, _lib.pluckNumber)(chartAttr.showshadow, 1) : (0, _lib.pluckNumber)(chartAttr.showshadow, colorM.getColor(SHOWSHADOW));
    conf.showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, 0);
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.stack100Percent = stack100Percent = (0, _lib.pluckNumber)(chart.stack100percent, chartAttr.stack100percent, 0);
    conf.definedGroupPadding = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent), 0);
    conf.plotSpacePercent = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent, 20) % 100, 0);
    conf.maxColWidth = (0, _lib.pluckNumber)(isBar ? chartAttr.maxbarheight : chartAttr.maxcolwidth, 50);
    conf.showPercentValues = (0, _lib.pluckNumber)(chartAttr.showpercentvalues, isStacked && stack100Percent ? 1 : 0);
    conf.showPercentInToolTip = (0, _lib.pluckNumber)(chartAttr.showpercentintooltip, isStacked && stack100Percent ? 1 : 0);
    conf.plotPaddingPercent = (0, _lib.pluckNumber)(chartAttr.plotpaddingpercent);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.placeValuesInside = (0, _lib.pluckNumber)(chartAttr.placevaluesinside, 0);

    conf.use3DLighting = (0, _lib.pluckNumber)(chartAttr.use3dlighting, 1);
    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }
    conf.plotAsDot = plotAsDot = (0, _lib.pluckNumber)(chartAttr.plotasdot, 0);
    conf.plotFillPercent = (0, _lib.pluckNumber)(chartAttr.plotfillpercent, plotAsDot ? 25 : 40);
    conf.targetFillPercent = (0, _lib.pluckNumber)(chartAttr.targetfillpercent, 60);
    conf.targetThickness = (0, _lib.pluckNumber)(chartAttr.targetthickness, 3);
    targetalpha = conf.targetalpha = (0, _lib.pluckNumber)(chartAttr.targetalpha, 100);
    conf.targetColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttr.targetcolor, colorM.getColor(PLOTFILLCOLOR_STR)), targetalpha);

    dataSet._setConfigure();
  };

  /**
   * Configure data level attributes
   * @param {Object} newDataset updated JSON data
   */


  BulletDataset.prototype._setConfigure = function _setConfigure(newDataset) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        JSONData = dataSet.config.JSONData,
        setDataArr = newDataset || JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = newDataset && newDataset.data.length || setDataLen,
        chartAttr = chart.getFromEnv('dataSource').chart,
        colorM = dataSet.getFromEnv('color-manager'),
        showplotborder = conf.showplotborder,
        showPlotBorderOnHover = conf.showPlotBorderOnHover,
        plotColor = conf.plotColor,

    // showTooltip = pluckNumber(chartAttr.showtooltip, 1),
    tooltipSepChar = (0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttr.tooltipsepchar, _lib.COMMASPACE)),
        seriesNameInTooltip = (0, _lib.pluckNumber)(chartAttr.seriesnameintooltip, 1),
        formatedVal,
        parserConfig,
        setTooltext,
        seriesname,
        macroIndices,
        tempPlotfillAngle,

    // toolText,
    plotDashLen,
        plotDashGap,
        plotBorderThickness = conf.plotBorderThickness,
        isRoundEdges = conf.isRoundEdges,
        showHoverEffect = conf.showHoverEffect,
        plotfillAngle = conf.plotFillAngle,
        plotFillAlpha,

    // plotRadius,
    plotFillRatio,

    // plotgradientcolor,
    plotBorderAlpha = conf.plotBorderAlpha,
        plotBorderDashStyle,
        initailPlotBorderDashStyle = conf.plotBorderDashStyle,
        setData,
        setValue,
        dataObj,
        config,

    // label,
    colorArr,
        hoverColor,
        hoverAlpha,
        hoverGradientColor,
        hoverRatio,
        hoverAngle,
        hoverBorderColor,
        hoverBorderAlpha,
        hoverBorderThickness,
        hoverBorderDashed,
        hoverBorderDashGap,
        hoverBorderDashLen,
        hoverDashStyle,
        hoverColorArr,
        dataStore = dataSet.components.data,
        toolTipValue,
        setDisplayValue,
        isBar = chart.isBar,
        is3D = chart.config.is3D,
        setDataDashed,
        setDataPlotDashLen,
        setDataPlotDashGap,
        i,
        maxValue = -Infinity,
        minValue = Infinity,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        target,
        hoverAttr,
        outAttr,
        targetHoverThickness,
        targetHoverColor,
        targetHoverAlpha,
        hasTargetHoverMix,
        setTooltextTarget,
        getTooltext = function getTooltext(setTooltext) {
      var toolText;

      if (!conf.showTooltip) {
        toolText = false;
      } else {
        if (formatedVal === null) {
          toolText = false;
        } else if (setTooltext !== UNDEF) {
          macroIndices = [1, 2, 3, 4, 5, 6, 7, 26, 27];
          parserConfig = {
            formattedValue: formatedVal,
            targetValue: config.target,
            targetDataValue: config.toolTipValueTarget
          };
          toolText = (0, _lib.parseTooltext)(setTooltext, macroIndices, parserConfig, setData, chartAttr, JSONData);
        } else {
          if (seriesNameInTooltip) {
            seriesname = (0, _lib.getFirstValue)(JSONData && JSONData.seriesname);
          }
          toolText = seriesname ? seriesname + tooltipSepChar : _lib.BLANK;
          toolText += config.label ? config.label + tooltipSepChar : _lib.BLANK;
        }
      }
      return toolText;
    };

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }

    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      if (newDataset) {
        setData = newDataset && newDataset.data[i];
      } else {
        setData = setDataArr[i];
      }

      dataObj = dataStore[i];

      config = dataObj && dataObj.config;

      if (!dataObj) {
        dataObj = dataStore[i] = {};
      }

      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }

      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);
      config.setValue = setValue = numberFormatter.getCleanValue(setData.value);
      config.target = target = numberFormatter.getCleanValue(setData.target);
      config.setLink = (0, _lib.pluck)(setData.link);
      config.toolTipValue = toolTipValue = numberFormatter.dataLabels(setValue);
      config.toolTipValueTarget = numberFormatter.dataLabels(target);
      config.setDisplayValue = setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      config.displayValue = (0, _lib.pluck)(setData.label, setDisplayValue, toolTipValue);
      setDataDashed = (0, _lib.pluckNumber)(setData.dashed);
      setDataPlotDashLen = (0, _lib.pluckNumber)(setData.dashlen, plotDashLen);
      setDataPlotDashGap = plotDashGap = (0, _lib.pluckNumber)(setData.dashgap, plotDashGap);

      maxValue = mathMax(maxValue, setValue, target);
      minValue = mathMin(minValue, setValue, target);

      config.plotBorderDashStyle = plotBorderDashStyle = setDataDashed === 1 ? (0, _lib.getDashStyle)(setDataPlotDashLen, setDataPlotDashGap) : setDataDashed === 0 ? noneStr : initailPlotBorderDashStyle;

      plotColor = (0, _lib.pluck)(setData.color, conf.plotColor);

      plotFillAlpha = (0, _lib.pluck)(setData.alpha, conf.plotFillAlpha);

      // Setting the angle for plot fill for negative data
      if (setValue < 0 && !isRoundEdges) {
        tempPlotfillAngle = plotfillAngle;
        plotfillAngle = isBar ? 180 - plotfillAngle : 360 - plotfillAngle;
      }

      // Setting the color Array to be applied to the bar/column.
      config.colorArr = colorArr = _lib.graphics.getColumnColor(plotColor, plotFillAlpha, plotFillRatio, plotfillAngle, isRoundEdges, conf.plotBorderColor, plotBorderAlpha.toString(), isBar ? 1 : 0, !!is3D);

      // label = 'getValidValue(parseUnsafeString(pluck (categories[i].tooltext, categories[i].label)))';

      // Parsing the hover effects only if showhovereffect is not 0.
      if (showHoverEffect !== 0) {
        hoverColor = (0, _lib.pluck)(setData.hovercolor, JSONData.hovercolor, chartAttr.plotfillhovercolor, chartAttr.columnhovercolor, plotColor);
        hoverAlpha = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.columnhoveralpha, plotFillAlpha);
        hoverGradientColor = (0, _lib.pluck)(setData.hovergradientcolor, JSONData.hovergradientcolor, chartAttr.plothovergradientcolor, conf.plotgradientcolor);
        !hoverGradientColor && (hoverGradientColor = _lib.BLANK);
        hoverRatio = (0, _lib.pluck)(setData.hoverratio, JSONData.hoverratio, chartAttr.plothoverratio, plotFillRatio);
        hoverAngle = (0, _lib.pluckNumber)(360 - setData.hoverangle, 360 - JSONData.hoverangle, 360 - chartAttr.plothoverangle, plotfillAngle);
        hoverBorderColor = (0, _lib.pluck)(setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, chartAttr.plotfillhovercolor, conf.plotBorderColor);
        hoverBorderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, plotBorderAlpha, plotFillAlpha);
        hoverBorderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, plotBorderThickness);
        hoverBorderDashed = (0, _lib.pluckNumber)(setData.borderhoverdashed, JSONData.borderhoverdashed, chartAttr.plotborderhoverdashed);
        hoverBorderDashGap = (0, _lib.pluckNumber)(setData.borderhoverdashgap, JSONData.borderhoverdashgap, chartAttr.plotborderhoverdashgap, plotDashLen);
        hoverBorderDashLen = (0, _lib.pluckNumber)(setData.borderhoverdashlen, JSONData.borderhoverdashlen, chartAttr.plotborderhoverdashlen, plotDashGap);
        hoverDashStyle = hoverBorderDashed ? (0, _lib.getDashStyle)(hoverBorderDashLen, hoverBorderDashGap) : plotBorderDashStyle;

        /* If no hover effects are explicitly defined and
                     * showHoverEffect is not 0 then hoverColor is set.
                     */
        if (showHoverEffect == 1 && hoverColor === plotColor) {
          hoverColor = getDarkColor(hoverColor, 90);
        }

        // setting the hover color array which is always applied except when showHoverEffect is not 0.
        hoverColorArr = _lib.graphics.getColumnColor(hoverColor, hoverAlpha, hoverRatio, hoverAngle, isRoundEdges, hoverBorderColor, hoverBorderAlpha.toString(), isBar ? 1 : 0, false);
        config.setPlotRolloutAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(colorArr[0]) : [(0, _lib.toRaphaelColor)(colorArr[0]), !conf.use3DLighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle
        };

        config.setPlotRolloverAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(hoverColorArr[0]) : [(0, _lib.toRaphaelColor)(hoverColorArr[0]), !conf.use3DLighting],
          stroke: (0, _lib.toRaphaelColor)(hoverColorArr[1]),
          'stroke-width': showPlotBorderOnHover ? hoverBorderThickness || 1 : hoverBorderThickness,
          'stroke-dasharray': hoverDashStyle
        };
      }

      if (showHoverEffect !== 0 && (showHoverEffect || chartAttr.targethovercolor || chartAttr.targethoveralpha || chartAttr.targethoveralpha === 0 || chartAttr.targethoverthickness || chartAttr.targethoverthickness === 0)) {
        showHoverEffect = true;
        hoverAttr = {};
        outAttr = {};
        targetHoverThickness = (0, _lib.pluckNumber)(chartAttr.targethoverthickness, conf.targetThickness + 2);
        if (conf.targetThickness !== targetHoverThickness) {
          hoverAttr['stroke-width'] = targetHoverThickness;
          outAttr['stroke-width'] = conf.targetThickness;
        }
        targetHoverColor = (0, _lib.pluck)(chartAttr.targethovercolor, FILLMIXDARK10);
        targetHoverAlpha = (0, _lib.pluckNumber)(chartAttr.targethoveralpha, conf.targetalpha);
        if (targetHoverThickness) {
          outAttr.stroke = conf.targetColor;
          hasTargetHoverMix = /\{/.test(targetHoverColor);
          hoverAttr.stroke = (0, _lib.convertColor)(hasTargetHoverMix ? colorM.parseColorMix((0, _lib.pluck)(chartAttr.targetcolor, plotColor), targetHoverColor)[0] : targetHoverColor, targetHoverAlpha);
        }
        // showHoverAnimation = !!pluckNumber(chartAttr.showhoveranimation, 1);
        config.tagetHoverAttr = hoverAttr;
        config.targetOutAttr = outAttr;
      }

      formatedVal = config.toolTipValue;

      // Parsing tooltext against various configurations provided by the user.
      setTooltext = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, JSONData.plottooltext, chartAttr.plottooltext)));
      // if (!showTooltip) {
      //     toolText = false;
      // }
      // else {
      //     if (formatedVal === null) {
      //         toolText = false;
      //     }
      //     else if (setTooltext !== UNDEF) {
      //         macroIndices = [1,2,3,4,5,6,7,26,27];
      //         parserConfig = {
      //             formattedValue : formatedVal,
      //             targetValue : config.target,
      //             targetDataValue : config.toolTipValueTarget
      //         };
      //         toolText = parseTooltext(setTooltext, macroIndices,
      //             parserConfig, setData, chartAttr, JSONData);
      //     }
      //     else {
      //         if (seriesNameInTooltip) {
      //             seriesname = getFirstValue(JSONData && JSONData.seriesname);
      //         }
      //         toolText = seriesname ? seriesname + tooltipSepChar : BLANK;
      //         toolText += label ? label + tooltipSepChar : BLANK;
      //     }
      // }
      config.toolText = getTooltext(setTooltext);
      config.setTooltext = config.toolText;
      tempPlotfillAngle && (plotfillAngle = tempPlotfillAngle);

      setTooltextTarget = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltexttarget, JSONData.targettooltext, chartAttr.targettooltext)));
      config.toolTextTarget = getTooltext(setTooltextTarget);
    }
    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  /**
   * Calculates vertical space management of bullet plot
   * @param {number} availableHeight maximum available height plot can take
   * @return {Object} height needed for bullet plot
   */


  BulletDataset.prototype._manageSpace = function _manageSpace(availableHeight) {
    var dataSet = this,
        conf = dataSet.config,
        dataStore = dataSet.components.data,
        dataObj,
        chart = dataSet.getFromEnv('chart'),
        captionConfig = chart.getChildren('caption')[0].config,

    // components = dataSet.components,
    chartConfig = chart.config,

    // datasetConfig = dataSet.config,
    smartLabel = chart.getFromEnv('smartLabel'),

    // canvasWidth = chartConfig.canvasWidth,
    smartDataLabel,
        style = chartConfig.dataLabelStyle,
        lineHeight = (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12),
        maxAllowedHeight = availableHeight,
        valuePadding = conf.valuePadding,

    // valuePaddingWithRadius,
    heightUsed = 0,

    // heightReducedBottom = 0, heightReducedTop = 0,
    // tickDimension = 0,
    i = 0,
        len = 1,

    // pointerOnOpp = datasetConfig.pointerOnOpp,
    config;

    // setData = setDataArr[i];
    dataObj = dataStore[i];
    config = dataObj && dataObj.config;

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    smartLabel.setStyle(style);

    for (; i < len; i += 1) {
      if (conf.showValue) {
        smartDataLabel = smartLabel.getOriSize(config.toolTipValue);
        // special fix for space string
        /** @todo will be removed when smartLabel will be able to handle it */
        if (config.toolTipValue === _lib.BLANK) {
          smartDataLabel = {
            height: lineHeight
          };
        }

        if (smartDataLabel.height > 0) {
          heightUsed = smartDataLabel.height + valuePadding;
        }

        if (heightUsed > maxAllowedHeight) {
          // extraSpace = heightUsed - maxAllowedHeight;
          heightUsed = maxAllowedHeight;
        }
      }
    }
    captionConfig.widgetValueHeight = heightUsed;
    conf.heightUsed = heightUsed;
    return {
      top: 0,
      bottom: heightUsed
    };
  };

  /**
   * Calculates horizontal space management of bullet plot
   * @param {number} availableWidth maximum available width plot can take
   * @return {Object} width needed for bullet plot
   */


  BulletDataset.prototype._manageSpaceHorizontal = function _manageSpaceHorizontal(availableWidth) {
    var dataSet = this,
        conf = dataSet.config,

    // JSONData = dataSet.JSONData,
    // setDataArr = JSONData.data,
    dataStore = dataSet.components.data,
        dataObj,
        chart = dataSet.getFromEnv('chart'),

    // components = dataSet.components,
    chartConfig = chart.config,

    // datasetConfig = dataSet.config,
    smartLabel = chart.getFromEnv('smartLabel'),

    // canvasWidth = chartConfig.canvasWidth,
    smartDataLabel,
        style = chartConfig.dataLabelStyle,
        lineHeight = (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12),
        maxAllowedWidth = availableWidth,
        valuePadding = conf.valuePadding,

    // valuePaddingWithRadius,
    widthUsed = 0,
        i = 0,
        len = 1,
        config;

    // setData = setDataArr[i];
    dataObj = dataStore[i];
    config = dataObj && dataObj.config;

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    smartLabel.setStyle(style);

    for (; i < len; i += 1) {
      // config = components[i].config;
      if (config && config.displayValue !== BLANKSTRING && config.displayValue !== UNDEF) {
        if (conf.showValue) {
          smartDataLabel = smartLabel.getOriSize(config.displayValue);
          // special fix for space string
          /** @todo will be removed when smartLabel will be able to handle it */
          if (config.displayValue === _lib.BLANK) {
            smartDataLabel = {
              height: lineHeight
            };
          }

          if (smartDataLabel.height > 0) {
            widthUsed = smartDataLabel.width + valuePadding + 2;
          }

          if (widthUsed > maxAllowedWidth) {
            // extraSpace = widthUsed - maxAllowedWidth;
            widthUsed = maxAllowedWidth;
          }
        }
      }
    }
    conf.widthUsed = widthUsed;
    return {
      top: 0,
      right: widthUsed
    };
  };

  /**
   * Update data with new JSON
   * @param {Object} dataObj updated parsd JSON
   * @param {number} index dataset index
   * @param {boolean} draw decides whether to draw datset instantly or not
   */


  BulletDataset.prototype.updateData = function updateData(dataObj, index, draw) {
    var dataSet = this,
        conf = dataSet.config,
        prevMax = conf.maxValue,
        prevMin = conf.prevMin,
        chart = dataSet.getFromEnv('chart'),
        drawManager = dataSet.groupManager || dataSet,
        scale = dataSet.getFromEnv('scale');

    dataSet._setConfigure(dataObj, index);
    dataSet.setMaxMin();

    if (conf.maxValue !== prevMax || conf.minValue !== prevMin) {
      dataSet.config.maxminFlag = true;
    }

    if (draw) {
      chart._setAxisLimits();
      scale.draw();
      drawManager.draw();
    }
  };

  /**
   * Get the max and min of data during real time update
   */


  BulletDataset.prototype.setMaxMin = function setMaxMin() {
    var dataSet = this,
        dataStore = dataSet.components.data,
        conf = dataSet.config,
        i,
        config,
        len = dataStore.length,
        maxValue = -Infinity,
        minValue = +Infinity;

    for (i = 0; i < len; i++) {
      if (!dataStore[i]) {
        continue;
      }
      config = dataStore[i].config;
      maxValue = mathMax(maxValue, config.setValue, config.target);
      minValue = mathMin(minValue, config.setValue, config.target);
    }

    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  /**
   * Draws bullet plot background
   */


  BulletDataset.prototype.draw = function draw() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartAttr = chart.getFromEnv('dataSource').chart,
        chartConfig = chart.config,
        canvas = chart.getChildren('canvas')[0],
        graphics = canvas._graphics,
        config = canvas.config,
        canvasElement = graphics.canvasElement,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        parentContainer = canvas.getContainer('canvasGroup'),
        attr,
        scale = dataSet.getFromEnv('scale'),
        min = scale.getLimit().min,
        max = scale.getLimit().max,
        isHorizontal = chart.isHorizontal,
        getRectXY = function getRectXY(minValue, maxValue) {
      if (!isHorizontal) {
        return {
          x: canvasLeft,
          y: canvasTop + (canvasHeight - maxValue * canvasHeight / (max - min)),
          width: canvasWidth,
          height: (maxValue - minValue) * canvasHeight / (max - min)
        };
      } else if (isHorizontal) {
        return {
          x: canvasLeft + minValue * canvasWidth / (max - min),
          y: canvasTop,
          width: (maxValue - minValue) * canvasWidth / (max - min),
          height: canvasHeight
        };
      }
    },
        angle,
        gaugeFillMix,
        gaugeFillRatio,
        colorRangeGetter,
        colorArray,
        colorM = dataSet.getFromEnv('color-manager'),
        gaugeBorderColor,
        gaugeBorderAlpha,
        showShadow,
        showGaugeBorder,
        gaugeBorderThickness,
        colorObj,
        i,
        count,
        len,
        xyObj,
        color,
        borderColor,
        crColor,
        crAlpha,
        borderAlpha,
        shadowAlpha,
        animationManager = chart.getFromEnv('animationManager'),
        colorRangeElem,
        hideFn = function hideFn() {
      this.hide();
    };

    angle = isHorizontal ? 270 : 180;

    config.colorRangeFillMix = gaugeFillMix = (0, _lib.getFirstDefinedValue)(chartAttr.colorrangefillmix, chartAttr.gaugefillmix, chart.colorRangeFillMix, '{light-10},{dark-10},{light-10},{dark-10}');

    config.colorRangeFillRatio = gaugeFillRatio = (0, _lib.getFirstDefinedValue)(chartAttr.colorrangefillratio, chartAttr.gaugefillratio, chart.colorRangeFillRatio, chartAttr.gaugefillratio, '0,10,80,10');
    // Fetch colorRange from env
    config.colorRangeGetter = colorRangeGetter = chart.getFromEnv('colorRange');

    config.colorArray = colorArray = colorRangeGetter && colorRangeGetter.getColorRangeArr(min, max);

    gaugeBorderColor = (0, _lib.pluck)(chartAttr.colorrangebordercolor, chartAttr.gaugebordercolor, '{dark-20}');

    gaugeBorderAlpha = (0, _lib.pluckNumber)(chartAttr.colorrangeborderalpha, chartAttr.gaugeborderalpha, 100);

    showShadow = (0, _lib.pluckNumber)(chartAttr.showshadow, 1);

    showGaugeBorder = (0, _lib.pluckNumber)(chartAttr.showgaugeborder, chartAttr.showcolorrangeborder, 0);

    config.colorRangeBorderThickness = gaugeBorderThickness = showGaugeBorder ? (0, _lib.pluckNumber)(chartAttr.colorrangeborderthickness, chartAttr.gaugeborderthickness, 2) : 0;

    len = chart.getFromEnv('dataSource').colorrange && colorArray && colorArray.length || 0;

    if (!canvasElement) {
      graphics.canvasElement = canvasElement = {};
      canvasElement.colorRangeElems = [];
    }

    for (i = 0, count = 0; i < len; i += 1) {
      colorObj = colorArray[i];
      xyObj = getRectXY(colorObj.minvalue - min, colorObj.maxvalue - min);
      colorObj.x = xyObj.x;
      colorObj.y = xyObj.y;
      colorObj.width = xyObj.width;
      colorObj.height = xyObj.height;

      color = colorObj.code;

      borderColor = (0, _lib.convertColor)((0, _lib.getColorCodeString)((0, _lib.pluck)(colorObj.bordercolor, color), gaugeBorderColor), (0, _lib.pluckNumber)(colorObj.borderalpha, gaugeBorderAlpha));

      // create the shadow element
      crColor = colorM.parseColorMix(colorObj.code, gaugeFillMix);
      crAlpha = colorM.parseAlphaList(colorObj.alpha, crColor.length);
      borderAlpha = (0, _lib.pluckNumber)(colorObj.borderAlpha, gaugeBorderAlpha);
      shadowAlpha = crAlpha.split(_lib.COMMASTRING);

      shadowAlpha = mathMax.apply(Math, shadowAlpha);
      shadowAlpha = mathMax(gaugeBorderThickness && borderAlpha || 0, shadowAlpha);

      attr = {
        x: xyObj.x,
        y: xyObj.y,
        width: xyObj.width,
        height: xyObj.height,
        r: 0,
        'stroke-width': gaugeBorderThickness,
        stroke: borderColor,
        'fill': (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: crColor.toString(),
            ratio: gaugeFillRatio,
            alpha: crAlpha,
            angle: angle
          }
        })
      };

      // Create/reuse colorRange elements
      colorRangeElem = canvasElement.colorRangeElems && canvasElement.colorRangeElems[i];
      canvasElement.colorRangeElems[i] = colorRangeElem = animationManager.setAnimation({
        el: colorRangeElem || 'rect',
        attr: attr,
        container: parentContainer,
        component: dataSet,
        label: 'backgroundRect'
      });
      canvasElement.colorRangeElems[i].show();

      canvasElement.colorRangeElems[i].shadow({
        apply: showShadow,
        opacity: shadowAlpha / 100
      });
      count++;
    }

    // hide the remaining color range elements
    len = canvasElement.colorRangeElems && canvasElement.colorRangeElems.length;
    for (; count < len; count++) {
      colorRangeElem = canvasElement.colorRangeElems && canvasElement.colorRangeElems[count];
      colorRangeElem && animationManager.setAnimation({
        el: canvasElement.colorRangeElems[count],
        component: dataSet,
        callback: hideFn,
        label: 'backgroundRect'
      });
    }

    dataSet.drawPlot();
  };
  /**
   * Draws bullet plot
   */


  BulletDataset.prototype.drawPlot = function drawPlot() {
    var dataSet = this,
        conf = dataSet.config,
        attr,
        i,
        visible = dataSet.getState('visible'),
        chart = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasRight = chartConfig.canvasRight,
        canvasTop = chartConfig.canvasTop,
        canvasBottom = chartConfig.canvasBottom,
        canvasHeight = chartConfig.canvasHeight,
        canvasWidth = chartConfig.canvasWidth,
        scale = dataSet.getFromEnv('scale'),
        parentContainer = chart.getChildContainer().plotGroup,
        xPos,
        yPos,
        crispBox,
        R = Raphael,
        showTooltip = conf.showTooltip,
        columnWidth,
        height,
        toolText,
        dataStore = dataSet.components.data,
        dataObj,
        setElement,
        setLink,
        setValue,
        eventArgs,
        displayValue,
        groupId,
        config,
        showShadow = conf.showShadow,
        plotBorderThickness = conf.plotBorderThickness,
        plotRadius = conf.plotRadius,
        containerDummy = dataSet.getContainer('container'),
        container,
        trackerContainerDummy = dataSet.getContainer('trackerContainer'),
        trackerContainer,
        targetContainerDummy = dataSet.getContainer('targetContainer'),
        targetContainer,
        trackerTargetContainerDummy = dataSet.getContainer('trackerTargetContainer'),
        trackerTargetContainer,
        dataLabelContainerDummy = dataSet.getContainer('dataLabelContainer'),
        dataLabelContainer,
        shadowContainerDummy = dataSet.getContainer('shadowContainer'),
        shadowContainer,
        shadowTargetContainerDummy = dataSet.getContainer('shadowTargetContainer'),
        shadowTargetContainer,
        trackerLayer = chart.getChildContainer('trackerGroup'),
        colorArr,
        plotBorderDashStyle,
        isNegative = false,
        targetPath,
        targetLength,
        startX,
        endX,
        startY,
        endY,
        initialColumnWidth,
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),
        style = chart.config.dataLabelStyle,
        animationManager = chart.getFromEnv('animationManager'),
        heightUsed = conf.heightUsed,
        lineHeight,
        labelBBox,
        labelWidth,
        isNewTargetElem,
        lowerLimit = conf.lowerLimit,
        base,
        labelAttr,
        targetAttr,
        targetElement,
        trackerConfig,
        showHoverEffect = conf.showHoverEffect,

    // Fired when clicked over the hot elements.
    clickFunc = function clickFunc(setDataArr) {
      var ele = this;
      _lib.plotEventHandler.call(ele, chart, setDataArr);
    },

    // Fired on mouse-in over the hot elements.
    rolloverResponseSetter = function rolloverResponseSetter(elem) {
      return function (data) {
        var ele = this;
        if (ele.data(showHoverEffectStr) !== 0) {
          elem.attr(ele.data(SETROLLOVERATTR));
        }
        _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
      };
    },

    // Fired on mouse-out over the hot elements.
    rolloutResponseSetter = function rolloutResponseSetter(elem) {
      return function (data) {
        var ele = this;
        if (ele.data(showHoverEffectStr) !== 0) {
          elem.attr(ele.data(SETROLLOUTATTR));
        }
        _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
      };
    },
        hideFn = function hideFn() {
      this.hide();
    };
    /*
    * Creating a container group for the graphic element of bar plots if
    * not present and attaching it to its parent group.
    */
    container = animationManager.setAnimation({
      el: containerDummy || 'group',
      attr: {
        name: 'bar'
      },
      component: dataSet,
      container: parentContainer,
      label: 'group'
    });
    if (!containerDummy) {
      container = dataSet.addContainer('container', container);
    }

    dataLabelContainer = animationManager.setAnimation({
      el: dataLabelContainerDummy || 'group',
      attr: {
        name: 'datalabel'
      },
      component: dataSet,
      container: dataLabelsLayer,
      label: 'labelGroup'
    });
    if (!dataLabelContainerDummy) {
      dataLabelContainer = dataSet.addContainer('dataLabelContainer', dataLabelContainer);
    }

    targetContainer = animationManager.setAnimation({
      el: targetContainerDummy || 'group',
      attr: {
        name: 'target'
      },
      container: parentContainer,
      component: dataSet,
      label: 'group'
    });
    if (!targetContainerDummy) {
      targetContainer.trackTooltip(true);
      targetContainer = dataSet.addContainer('targetContainer', targetContainer);
    }

    /*
    * Creating the hot element container group for the column plots if not present
    * and attaching it its parent group.
    */
    trackerContainer = animationManager.setAnimation({
      el: trackerContainerDummy || 'group',
      attr: {
        name: 'bar-hot'
      },
      component: dataSet,
      container: trackerLayer,
      label: 'group'
    });
    if (!trackerContainerDummy) {
      trackerContainer = dataSet.addContainer('trackerContainer', trackerContainer);
      if (!visible) {
        trackerContainer.hide();
      }
    }

    trackerTargetContainer = animationManager.setAnimation({
      el: trackerTargetContainerDummy || 'group',
      attr: {
        name: 'target-hot'
      },
      component: dataSet,
      container: trackerLayer,
      label: 'group'
    });
    if (!trackerTargetContainerDummy) {
      trackerTargetContainer = dataSet.addContainer('trackerTargetContainer', trackerTargetContainer);
      if (!visible) {
        trackerTargetContainer.hide();
      }
    }

    /*
    * Creating the shadow element container group for each plots if not present
    * and attaching it its parent group.
    */
    shadowContainer = animationManager.setAnimation({
      el: shadowContainerDummy || 'group',
      attr: {
        name: 'shadow'
      },
      component: dataSet,
      container: parentContainer,
      label: 'group'
    });
    if (!shadowContainerDummy) {
      // Always sending the shadow group to the back of the plots group.
      shadowContainer = dataSet.addContainer('shadowContainer', shadowContainer.toBack());
      if (!visible) {
        shadowContainer.hide();
      }
    }

    shadowTargetContainer = animationManager.setAnimation({
      el: shadowTargetContainerDummy || 'group',
      attr: {
        name: 'shadow'
      },
      component: dataSet,
      container: parentContainer,
      label: 'group'
    });
    if (!shadowTargetContainerDummy) {
      // Always sending the shadow group to the back of the plots group.
      shadowTargetContainer = dataSet.addContainer('shadowTargetContainer', shadowTargetContainer.toBack());
      if (!visible) {
        shadowTargetContainer.hide();
      }
    }

    // Create plot elements.
    for (i = 0; i < 1; i++) {
      dataObj = dataStore[i];
      config = dataObj && dataObj.config;
      trackerConfig = dataObj.trackerConfig = {};
      setValue = config.setValue;

      setValue < 0 && (isNegative = true);

      setLink = config.setLink;
      colorArr = config.colorArr;

      // isNewElem = false;
      isNewTargetElem = false;

      // Creating the data structure if not present for storing the graphics elements.
      if (!dataObj.graphics) {
        dataStore[i].graphics = {};
      }

      displayValue = config.displayValue;

      if (!chart.isHorizontal) {
        initialColumnWidth = conf.plotFillPercent / 100 * canvasWidth;

        xPos = mathAbs(canvasLeft + canvasRight) / 2 - initialColumnWidth / 2;

        if (conf.plotAsDot) {
          yPos = scale.getPixel(setValue) - initialColumnWidth / 2;
          height = initialColumnWidth;
        } else {
          conf.base = base = lowerLimit && lowerLimit <= setValue && scale.config.axisRange.min >= 0 ? lowerLimit : 0;

          yPos = isNegative ? scale.getPixel(0) : scale.getPixel(setValue);

          height = isNegative ? scale.getPixel(setValue) - scale.getPixel(0) : scale.getPixel(lowerLimit && lowerLimit <= setValue && scale.config.axisRange.min >= 0 ? lowerLimit : 0) - yPos;
        }

        crispBox = R.crispBound(xPos, yPos, initialColumnWidth, height, plotBorderThickness);
        xPos = crispBox.x;
        yPos = crispBox.y;
        columnWidth = crispBox.width;
        height = crispBox.height;

        // Setting the final tooltext.
        toolText = config.toolText === _lib.BLANK ? config.toolTipValue : config.toolText;
        plotBorderDashStyle = config.plotBorderDashStyle;

        // Setting the event arguments.
        trackerConfig.eventArgs = {
          link: setLink,
          value: setValue,
          displayValue: displayValue,
          toolText: toolText
        };

        /*
        * If animation is inactive then ybase position and heightBase of the plots is set to the final
        * values.
        */
        // Setting the attributes for plot drawing.
        attr = {
          x: xPos,
          y: yPos,
          width: columnWidth,
          height: height || 1,
          r: plotRadius,
          ishot: true,
          fill: (0, _lib.toRaphaelColor)(colorArr[0]),
          stroke: (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle,
          'stroke-linejoin': miterStr,
          'visibility': visible
        };

        // todo- remove _ to make it public
        dataObj._xPos = xPos;
        dataObj._yPos = yPos + height;
        dataObj._height = height;
        dataObj._width = columnWidth;

        if (setValue !== null) {
          dataObj.graphics.element && dataObj.graphics.element.show();
          dataObj.graphics.hotElement && dataObj.graphics.hotElement.show();

          if (setLink || showTooltip) {
            // Fix for touch devices.
            if (height < HTP) {
              yPos -= (HTP - height) / 2;
              height = HTP;
            }

            // Setting attributes for the tooltip.
            trackerConfig.attr = {
              x: xPos,
              y: yPos,
              width: columnWidth,
              height: height,
              r: plotRadius,
              cursor: setLink ? POINTER : _lib.BLANK,
              stroke: TRACKER_FILL,
              'stroke-width': plotBorderThickness,
              fill: TRACKER_FILL,
              ishot: true,
              visibility: visible
            };
          }
        }
        /*
        * If the data plots are not present then they are
        * created, else only attributes are set for the
        * existing plots.
        */
        config.elemCreated = dataObj.graphics.element === UNDEF;
        setElement = dataObj.graphics.element = animationManager.setAnimation({
          el: dataObj.graphics.element || 'rect',
          attr: attr,
          container: container,
          component: dataSet,
          callback: setValue !== null ? _lib.stubFN : hideFn,
          label: 'plotRect'
        });
        dataObj.graphics.hotElement && animationManager.setAnimation({
          el: dataObj.graphics.hotElement,
          component: dataSet,
          callback: setValue !== null ? _lib.stubFN : hideFn,
          label: 'rect'
        });

        setElement.shadow({ opacity: showShadow }, shadowContainer).data('BBox', crispBox);
        // Draw target element
        if (config.target) {
          toolText = config.toolTextTarget === _lib.BLANK ? config.toolTipValueTarget : config.toolTextTarget;

          targetLength = conf.targetFillPercent / 100 * canvasWidth;

          startX = (canvasLeft + canvasRight) / 2 - targetLength / 2;
          endX = startX + targetLength;
          startY = endY = scale.getPixel(config.target);

          targetPath = [M, startX, startY, L, endX, endY];

          targetAttr = {
            stroke: conf.targetColor,
            'stroke-width': conf.targetThickness,
            'stroke-linecap': conf.targetCapStyle,
            path: targetPath,
            ishot: true,
            'shape-rendering': DECIDE_CRISPENING[3 < 1]
          };
          dataObj.graphics.targetElement && dataObj.graphics.targetElement.show();
        }

        isNewTargetElem = dataObj.graphics.targetElement === UNDEF;
        targetElement = dataObj.graphics.targetElement = animationManager.setAnimation({
          el: dataObj.graphics.targetElement || 'path',
          attr: targetAttr,
          container: targetContainer,
          component: dataSet,
          callback: config.target ? _lib.stubFN : hideFn,
          label: 'path'
        });

        if (isNewTargetElem) {
          targetElement.click(clickFunc).hover(rolloverResponseSetter(targetElement), rolloutResponseSetter(targetElement));
        }

        targetElement.shadow({ opacity: showShadow }, shadowContainer).data('BBox', crispBox).data(EVENTARGS, eventArgs).data(GROUPID, groupId).data(showHoverEffectStr, showHoverEffect).data(SETROLLOVERATTR, config.tagetHoverAttr).data(SETROLLOUTATTR, config.targetOutAttr);

        if (showTooltip) {
          toolTipController.enableToolTip(targetElement, toolText);
        } else {
          toolTipController.disableToolTip(targetElement);
        }

        lineHeight = parseInt(style.lineHeight, 10);

        yPos = lineHeight > heightUsed ? chartConfig.height - chartConfig.marginBottom - heightUsed + lineHeight / 2 : chartConfig.height - chartConfig.marginBottom - lineHeight / 2;
        yPos -= chartConfig.borderWidth;
        yPos -= (chart._manageActionBarSpace && chart._manageActionBarSpace(config.availableHeight * 0.225) || {}).bottom;

        // Draw Label
        if (displayValue !== BLANKSTRING && displayValue !== UNDEF && conf.showValue) {
          labelAttr = {
            text: displayValue,
            'text-anchor': POSITION_MIDDLE,
            x: canvasWidth / 2 + canvasLeft,
            y: yPos,
            'vertical-align': POSITION_MIDDLE,
            fill: style.color,
            direction: config.textDirection,
            'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
          };
          dataObj.graphics.label && dataObj.graphics.label.show();
        }

        dataObj.graphics.label = animationManager.setAnimation({
          el: dataObj.graphics.label || 'text',
          attr: labelAttr,
          component: dataSet,
          container: dataLabelContainer,
          callback: !!displayValue && conf.showValue ? _lib.stubFN : hideFn,
          label: 'text'
        });

        // Adjusting the chart label if goes out side the chart area
        // we try to keep the label inside viewport
        labelBBox = dataObj.graphics.label.getBBox();
        if (labelBBox.x + chartConfig.marginLeft < 0) {
          labelWidth = labelBBox.width - chartConfig.marginLeft;
          if (chartConfig.width < labelWidth) {
            labelWidth = chartConfig.width - chartConfig.marginLeft;
          }
          labelAttr.x = labelWidth / 2;
          animationManager.setAnimation({
            el: dataObj.graphics.label,
            attr: labelAttr,
            component: dataSet,
            callback: !!displayValue && conf.showValue ? _lib.stubFN : hideFn,
            label: 'text'
          });
        }
      } else {
        height = conf.plotFillPercent / 100 * canvasHeight;

        yPos = mathAbs(canvasTop + canvasBottom) / 2 - height / 2;

        if (conf.plotAsDot) {
          xPos = scale.getPixel(setValue) - height / 2;
          initialColumnWidth = height;
        } else {
          base = lowerLimit && lowerLimit <= setValue && scale.config.axisRange.min >= 0 ? lowerLimit : 0;

          xPos = isNegative ? scale.getPixel(setValue) : scale.getPixel(base);

          initialColumnWidth = isNegative ? scale.getPixel(0) - scale.getPixel(setValue) : scale.getPixel(setValue) - scale.getPixel(base);
        }

        crispBox = R.crispBound(xPos, yPos, initialColumnWidth, height, plotBorderThickness);
        xPos = crispBox.x;
        yPos = crispBox.y;
        columnWidth = crispBox.width;
        height = crispBox.height;

        // Setting the final tooltext.
        toolText = config.toolText === _lib.BLANK ? config.toolTipValue : config.toolText;
        plotBorderDashStyle = config.plotBorderDashStyle;

        // Setting the event arguments.
        trackerConfig.eventArgs = {
          link: setLink,
          value: setValue,
          displayValue: displayValue,
          toolText: !toolText ? '' : toolText
        };

        // Setting the attributes for plot drawing.
        attr = {
          x: xPos,
          y: yPos,
          width: columnWidth || 1,
          height: height,
          r: plotRadius,
          ishot: true,
          fill: (0, _lib.toRaphaelColor)(colorArr[0]),
          stroke: (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle,
          'stroke-linejoin': miterStr,
          'visibility': visible
        };

        if (setValue !== null) {
          dataObj.graphics.element && dataObj.graphics.element.show();
          dataObj.graphics.hotElement && dataObj.graphics.hotElement.show();
          if (setLink || showTooltip) {
            // Fix for touch devices.
            if (height < HTP) {
              yPos -= (HTP - height) / 2;
              height = HTP;
            }

            // Setting attributes for the tooltip.
            trackerConfig.attr = {
              x: xPos,
              y: yPos,
              width: columnWidth,
              height: height,
              r: plotRadius,
              cursor: setLink ? POINTER : _lib.BLANK,
              stroke: TRACKER_FILL,
              'stroke-width': plotBorderThickness,
              fill: TRACKER_FILL,
              ishot: true,
              visibility: visible
            };
          }
        }
        /*
        * If the data plots are not present then they are created,
        * else only attributes are set for the
        * existing plots.
        */
        config.elemCreated = dataObj.graphics.element === UNDEF;
        setElement = dataObj.graphics.element = animationManager.setAnimation({
          el: dataObj.graphics.element || 'rect',
          attr: attr,
          container: container,
          component: dataSet,
          callback: setValue !== null ? _lib.stubFN : hideFn,
          label: 'plotRect'
        });
        dataObj.graphics.hotElement && animationManager.setAnimation({
          el: dataObj.graphics.hotElement,
          component: dataSet,
          callback: setValue !== null ? _lib.stubFN : hideFn,
          label: 'rect'
        });
        // The shadow element is set for the dataplots.
        setElement.shadow({ opacity: showShadow }, shadowContainer).data('BBox', crispBox);

        // Draw target element
        if (config.target) {
          toolText = config.toolTextTarget === _lib.BLANK ? config.toolTipValueTarget : config.toolTextTarget;

          targetLength = conf.targetFillPercent / 100 * canvasHeight;
          startX = endX = scale.getPixel(config.target);

          startY = (canvasTop + canvasBottom) / 2 - targetLength / 2;
          endY = startY + targetLength;

          targetPath = [M, startX, startY, L, endX, endY];

          targetAttr = {
            stroke: conf.targetColor,
            'stroke-width': conf.targetThickness,
            'stroke-linecap': conf.targetCapStyle,
            ishot: true,
            path: targetPath,
            'shape-rendering': DECIDE_CRISPENING[3 < 1]
          };
          dataObj.graphics.targetElement && dataObj.graphics.targetElement.show();
        }

        isNewTargetElem = dataObj.graphics.targetElement === UNDEF;
        targetElement = dataObj.graphics.targetElement = animationManager.setAnimation({
          el: dataObj.graphics.targetElement || 'path',
          attr: targetAttr,
          container: targetContainer,
          component: dataSet,
          callback: config.target ? _lib.stubFN : hideFn,
          label: 'path'
        });
        config.target && (setElement = dataObj.graphics.targetElement);

        if (isNewTargetElem) {
          targetElement.click(clickFunc).hover(rolloverResponseSetter(targetElement), rolloutResponseSetter(targetElement));
        }

        targetElement.shadow({ opacity: showShadow }, shadowContainer).data('BBox', crispBox).data(EVENTARGS, eventArgs).data(GROUPID, groupId).data(showHoverEffectStr, showHoverEffect).data(SETROLLOVERATTR, config.tagetHoverAttr).data(SETROLLOUTATTR, config.targetOutAttr);

        if (showTooltip) {
          toolTipController.enableToolTip(targetElement, toolText);
        } else {
          toolTipController.disableToolTip(targetElement);
        }

        lineHeight = parseInt(style.lineHeight, 10);

        yPos = (canvasTop + canvasHeight) * 0.5;

        // Draw Label
        if (displayValue !== BLANKSTRING && displayValue !== UNDEF && conf.showValue) {
          labelAttr = {
            text: displayValue,
            'text-anchor': POSITION_START,
            x: canvasRight + conf.valuePadding + 2,
            y: yPos,
            'vertical-align': POSITION_TOP,
            fill: style.color,
            direction: config.textDirection,
            'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
          };
          dataObj.graphics.label && dataObj.graphics.label.show();
        }

        dataObj.graphics.label = animationManager.setAnimation({
          el: dataObj.graphics.label || 'text',
          attr: labelAttr,
          component: dataSet,
          container: dataLabelContainer,
          callback: !!displayValue && conf.showValue ? _lib.stubFN : hideFn,
          label: 'text'
        });
        // Adjusting the chart label if goes out side the chart area
        // we try to keep the label inside viewport
        labelBBox = dataObj.graphics.label.getBBox();
        if (labelBBox.x + chartConfig.marginLeft < 0) {
          labelWidth = labelBBox.width - chartConfig.marginLeft;
          if (chartConfig.width < labelWidth) {
            labelWidth = chartConfig.width - chartConfig.marginLeft;
          }
          labelAttr.x = labelWidth / 2;

          animationManager.setAnimation({
            el: dataObj.graphics.label,
            attr: labelAttr,
            component: dataSet,
            callback: !!displayValue && conf.showValue ? _lib.stubFN : hideFn,
            label: 'text'
          });
        }
      }
    }
    dataSet.addJob('trackerDrawID', dataSet.drawTracker.bind(dataSet), _schedular.priorityList.tracker);
  };
  /**
   * Draw tracker of bullet plot
   */


  BulletDataset.prototype.drawTracker = function drawTracker() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        animationManager = dataSet.getFromEnv('animationManager'),
        components = dataSet.components,
        pool = components.pool,
        dataStore = components.data,
        chartConfig = chart.config,
        showHoverEffect = chartConfig.plothovereffect,
        trackerContainer = dataSet.getContainer('trackerContainer'),
        trackerConfig,
        config,
        dataObj,
        setElement,
        hotElemCreated,
        hotElement,
        attr,
        graphics,

    // Fired when clicked over the hot elements.
    clickFunc = function clickFunc(setDataArr) {
      var ele = this;
      _lib.plotEventHandler.call(ele, chart, setDataArr);
    },

    // Fired on mouse-in over the hot elements.
    rolloverResponseSetter = function rolloverResponseSetter(elem) {
      return function (data) {
        var ele = this,
            elData = ele.getData();
        // Check whether the plot is in dragged state or not if
        // drag then dont fire rolloverevent
        if (elData.showHoverEffect !== 0 && elData.draged !== true) {
          elem.attr(ele.getData().setRolloverAttr);
          _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
        }
      };
    },


    // Fired on mouse-out over the hot elements.
    rolloutResponseSetter = function rolloutResponseSetter(elem) {
      return function (data) {
        var ele = this,
            elData = ele.getData();
        // Check whether the plot is in draggedstate or not if drag then dont fire rolloutevent
        if (elData.showHoverEffect !== 0 && elData.draged !== true) {
          elem.attr(ele.getData().setRolloutAttr);
          _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
        }
      };
    };

    // Create tracker elements.
    dataObj = dataStore[0];
    config = dataObj && dataObj.config;
    trackerConfig = dataObj.trackerConfig;
    graphics = dataObj.graphics;

    setElement = graphics.element;
    hotElement = dataObj.graphics.hotElement;
    attr = trackerConfig.attr;
    if (attr) {
      /*
       * If the tooltips are not present then they are created over the hot element,
       * else only attributes are set for the existing tooltips.
       */
      hotElement = dataObj.graphics.hotElement = hotElement || pool && pool.hotElement[0];
      if (!hotElement && pool && pool.hotElement[0]) {
        hotElement = pool.hotElement[0];
        pool.hotElement.splice(0, 1);
      }

      // Create/Reuse hotElement
      hotElement = dataObj.graphics.hotElement = animationManager.setAnimation({
        el: dataObj.graphics.hotElement || 'rect',
        attr: attr,
        container: trackerContainer,
        component: dataSet,
        label: 'plotRect'
      });
    }

    // Hover effects and click function is binded to the hot element if present else the set element.
    if (hotElement || setElement) {
      (hotElement || setElement).data(EVENTARGS, trackerConfig.eventArgs).data(showHoverEffectStr, showHoverEffect).data(SETROLLOVERATTR, config.setPlotRolloverAttr || {}).data(SETROLLOUTATTR, config.setPlotRolloutAttr || {});

      toolTipController.enableToolTip(hotElement || setElement, trackerConfig.eventArgs && trackerConfig.eventArgs.toolText);
    }

    if (hotElemCreated || config.elemCreated) {
      (hotElement || setElement).click(clickFunc).hover(rolloverResponseSetter(setElement), rolloutResponseSetter(setElement));
    }
  };

  /**
   * Calculates data limit of dataset
   * @return {Object} maximum, minimum limit
   */


  BulletDataset.prototype.getDataLimits = function getDataLimits() {
    var dataSet = this,
        config = dataSet.config,
        pointerArr = dataSet.pointerArr && dataSet.pointerArr.pointer,
        colorRange = dataSet.getFromEnv('chart').getFromEnv('dataSource').colorrange,
        colorArr = colorRange && colorRange.color,
        length = pointerArr && pointerArr.length,
        i,
        upperLimit = config.upperLimit,
        lowerLimit = config.lowerLimit,
        maxColorRangeVal,
        minColorRangeVal,
        max = config.maxValue,
        min = config.minValue;

    length = colorArr && colorArr.length;
    // finding max min amongst the color range value
    // but it has a lower priority than upperlimit and lowerlimit
    // set by the user.
    for (i = 0; i < length; i++) {
      maxColorRangeVal = Number(colorArr[i].maxvalue);
      minColorRangeVal = Number(colorArr[i].minvalue);

      upperLimit && maxColorRangeVal > upperLimit && (maxColorRangeVal = upperLimit);
      lowerLimit && minColorRangeVal < lowerLimit && (minColorRangeVal = lowerLimit);

      max = mathMax(max, maxColorRangeVal);
      min = mathMin(min, minColorRangeVal);
    }

    return {
      forceMin: true,
      forceMax: true,
      max: max,
      min: min
    };
  };

  return BulletDataset;
}(_componentInterface3['default']);

exports['default'] = BulletDataset;

/***/ }),

/***/ 229:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathCeil = math.ceil,
    GUTTER_PADDING = 2,
    defaultGaugePaletteOptions = (0, _lib.extend2)({}, _lib.defaultGaugePaletteOptions);
/**
 * Creates SparkChartBase class for spark charts series
 */

var SparkChartBase = function (_SSCartesian) {
  _inherits(SparkChartBase, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SparkChartBase.getName = function getName() {
    return 'SparkChartBase';
  };

  /**
   * Constructor class for SparkChartBase
   */


  function SparkChartBase() {
    _classCallCheck(this, SparkChartBase);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.showBorder = 0;
    _this.chartTopMargin = 3;
    _this.chartRightMargin = 3;
    _this.chartBottomMargin = 3;
    _this.chartLeftMargin = 3;
    _this.canvasborderthickness = 0;
    _this.subTitleFontSizeExtender = 0;
    _this.subTitleFontWeight = 0;
    _this.defaultPaletteOptions = (0, _lib.extend2)((0, _lib.extend2)({}, defaultGaugePaletteOptions), {
      // Store colors now
      paletteColors: [['555555', 'A6A6A6', 'CCCCCC', 'E1E1E1', 'F0F0F0'], ['A7AA95', 'C4C6B7', 'DEDFD7', 'F2F2EE'], ['04C2E3', '66E7FD', '9CEFFE', 'CEF8FF'], ['FA9101', 'FEB654', 'FED7A0', 'FFEDD5'], ['FF2B60', 'FF6C92', 'FFB9CB', 'FFE8EE']],
      // Store other colors
      // ------------- For 2D Chart ---------------//
      // We're storing 5 combinations, as we've 5 defined palettes.
      bgColor: ['FFFFFF', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'],
      bgAngle: [270, 270, 270, 270, 270],
      bgRatio: ['0,100', '0,100', '0,100', '0,100', '0,100'],
      bgAlpha: ['100', '60,50', '40,20', '20,10', '30,30'],

      canvasBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
      canvasBgAngle: [0, 0, 0, 0, 0],
      canvasBgAlpha: ['100', '100', '100', '100', '100'],
      canvasBgRatio: [_lib.BLANKSTRING, _lib.BLANKSTRING, _lib.BLANKSTRING, _lib.BLANKSTRING, _lib.BLANKSTRING],
      canvasBorderColor: ['BCBCBC', 'BEC5A7', '93ADBF', 'C97901', 'FF97B1'],

      toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
      toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'],
      baseFontColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      trendColor: ['666666', '60634E', '415D6F', '845001', '68001B'],
      plotFillColor: ['666666', 'A5AE84', '93ADBF', 'C97901', 'FF97B1'],
      borderColor: ['767575', '545454', '415D6F', '845001', '68001B'],
      borderAlpha: [50, 50, 50, 50, 50],
      periodColor: ['EEEEEE', 'ECEEE6', 'E6ECF0', 'FFF4E6', 'FFF2F5'],

      // Colors for win loss chart
      winColor: ['666666', '60634E', '025B6A', 'A15E01', 'FF97B1'],
      lossColor: ['CC0000', 'CC0000', 'CC0000', 'CC0000', 'CC0000'],
      drawColor: ['666666', 'A5AE84', '93ADBF', 'C97901', 'FF97B1'],
      scorelessColor: ['FF0000', 'FF0000', 'FF0000', 'FF0000', 'FF0000']
    }, false, true);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkChartBase.prototype.getName = function getName() {
    return 'SparkChartBase';
  };
  /**
   * Returns the postion for the caption placement
   * @return {number} extra space needed for caption
   */


  SparkChartBase.prototype._fetchCaptionPos = function _fetchCaptionPos() {
    var extraSpace,
        iapi = this,
        caption = iapi.getChildren('caption')[0],
        captionConfig = caption.config;

    // check if even after placing the caption
    // space available on right.
    // left aligned.
    /** @todo need to optimize this logic */
    if (captionConfig.isOnLeft) {
      extraSpace = -1;
    } else {
      // right aligned
      extraSpace = -1;
    }
    return extraSpace;
  };
  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  SparkChartBase.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _SSCartesian.prototype.parseChartAttr.call(this, dataObj);
    var iapi = this,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        config = iapi.config;
    config.origCanvasLeftMargin = (0, _lib.pluckNumber)(chartAttrs.canvasleftmargin);
    config.origCanvasRightMargin = (0, _lib.pluckNumber)(chartAttrs.canvasrightmargin);
    config.origCanvasTopMargin = (0, _lib.pluckNumber)(chartAttrs.canvastopmargin);
    config.origCanvasBottomMargin = (0, _lib.pluckNumber)(chartAttrs.canvasbottommargin);
  };
  /**
   * Manages space for the chart
   */


  SparkChartBase.prototype._spaceManager = function _spaceManager() {
    var availableWidth,
        availableHeight,
        iapi = this,
        config = iapi.config,
        canvasBaseDepth = config.canvasBaseDepth,
        canvas = iapi.getChildren('canvas')[0],
        canvasBorderWidth = canvas.config.canvasBorderWidth,
        chartBorderWidth = config.borderWidth,
        canvasMarginTop = config.canvasMarginTop,
        canvasMarginBottom = config.canvasMarginBottom,
        canvasMarginLeft = config.canvasMarginLeft,
        canvasMarginRight = config.canvasMarginRight,
        minCanvasHeight = config.minCanvasHeight,
        minCanvasWidth = config.minCanvasWidth,
        height = config.height,
        width = config.width,
        diff,
        heightAdjust = false,
        widthAdjust = false,
        top,
        bottom,
        left,
        right,
        currentCanvasHeight,
        currentCanvasWidth,
        origCanvasTopMargin = config.origCanvasTopMargin,
        origCanvasBottomMargin = config.origCanvasBottomMargin,
        origCanvasLeftMargin = config.origCanvasLeftMargin,
        origCanvasRightMargin = config.origCanvasRightMargin,
        sum;

    iapi._allocateSpace({
      top: chartBorderWidth,
      bottom: chartBorderWidth,
      left: chartBorderWidth,
      right: chartBorderWidth
    });

    // alocate the space for datasets
    availableHeight = config.availableHeight * 0.325;
    iapi._getDSspace && iapi._allocateSpace(iapi._getDSspace(availableHeight));

    iapi._allocateSpace(iapi._manageActionBarSpace && iapi._manageActionBarSpace(config.availableHeight * 0.225) || {});
    config.availableWidth = config.width;
    availableWidth = config.availableWidth * 0.75;
    availableWidth = availableWidth - config.origMarginLeft - config.origMarginRight - config.borderWidth * 2;
    availableWidth = mathMax(config.availableWidth * 0.1, availableWidth);
    // a space manager that manages the space for the tools as well as the captions.
    iapi._manageChartMenuBar(availableWidth);
    // iapi._allocateSpace(iapi._manageCaptionSpacing(availableWidth));

    availableWidth = (config.availableWidth - config.borderWidth * 2) * 0.75;
    // Space management for SparkWinLoss and SparkLine charts
    iapi._placeOpenCloseValues && iapi._allocateSpace(iapi._placeOpenCloseValues(availableWidth));

    iapi._allocateSpace({
      top: canvasBorderWidth,
      bottom: canvasBorderWidth,
      left: canvasBorderWidth,
      right: canvasBorderWidth
    });

    iapi._allocateSpace({
      bottom: canvasBaseDepth
    });

    // Check for minimum canvas width and height
    if (minCanvasHeight > height - canvasMarginTop - canvasMarginBottom) {
      heightAdjust = true;
      diff = config.canvasHeight - minCanvasHeight;
      sum = canvasMarginTop + canvasMarginBottom;
      canvasMarginTop = config.canvasMarginTop = diff * canvasMarginTop / sum;
      canvasMarginBottom = config.canvasMarginBottom = diff * canvasMarginBottom / sum;
    }
    if (minCanvasWidth > width - canvasMarginLeft - canvasMarginRight) {
      widthAdjust = true;
      diff = config.canvasWidth - minCanvasWidth;
      sum = canvasMarginLeft + canvasMarginRight;
      canvasMarginLeft = config.canvasMarginLeft = diff * canvasMarginLeft / sum;
      canvasMarginRight = config.canvasMarginRight = diff * canvasMarginRight / sum;
    }

    // Allocate space for canvas margin only if the margin is less than the margin entered by the user.
    top = canvasMarginTop > config.canvasTop ? canvasMarginTop - config.canvasTop : 0;
    bottom = canvasMarginBottom > height - config.canvasBottom ? canvasMarginBottom + config.canvasBottom - height : 0;
    left = canvasMarginLeft > config.canvasLeft ? canvasMarginLeft - config.canvasLeft : 0;
    right = canvasMarginRight > width - config.canvasRight ? canvasMarginRight + config.canvasRight - width : 0;

    iapi._allocateSpace({
      top: top,
      bottom: bottom,
      left: left,
      right: right
    });

    // Forcing canvas height to its minimum
    if (heightAdjust) {
      sum = origCanvasTopMargin + origCanvasBottomMargin;
      currentCanvasHeight = config.canvasHeight;
      if (currentCanvasHeight > minCanvasHeight) {
        diff = currentCanvasHeight - minCanvasHeight;
        top = diff * origCanvasTopMargin / sum;
        bottom = diff * origCanvasBottomMargin / sum;
      }
      iapi._allocateSpace({
        top: top,
        bottom: bottom
      });
    }

    // Forcing canvas width to its minimum
    if (widthAdjust) {
      sum = origCanvasLeftMargin + origCanvasRightMargin;
      currentCanvasWidth = config.canvasWidth;
      if (currentCanvasWidth > minCanvasWidth) {
        diff = currentCanvasWidth - minCanvasWidth;
        left = diff * origCanvasLeftMargin / sum;
        right = diff * origCanvasRightMargin / sum;
      }
      iapi._allocateSpace({
        left: left,
        right: right
      });
    }

    // Manage canvasMargins
    // If there is user given canvasMargins apply those to the chart
    if (config.origCanvasLeftMargin !== UNDEF) {
      config.canvasWidth = mathMax(config.canvasWidth + config.canvasLeft - config.origCanvasLeftMargin, config.availableWidth * 0.2);

      config.canvasLeft = config.origCanvasLeftMargin;
    }
    canvas.setDimension({
      top: config.canvasTop,
      left: config.canvasLeft,
      width: config.canvasWidth,
      height: config.canvasHeight
    });
  };
  /**
   * Manages space for Caption placement
   * @param {number} availableWidth available width for caption
   * @return {Object} dimension object(width, height)
   */


  SparkChartBase.prototype._manageCaptionSpacing = function _manageCaptionSpacing(availableWidth) {
    var iapi = this,
        chartConfig = iapi.config,
        components = iapi.getChildren(),

    // chartGraphics = iapi.graphics,
    caption = components.caption && components.caption[0],
        subCaption = components.subCaption && components.subCaption[0],
        captionConfig = caption.config,
        subCaptionConfig = subCaption.config,
        captionComponents = caption.components,

    // subCaptionComponents = subCaption.components,
    chartAttrs = iapi.getFromEnv('dataSource').chart,
        SmartLabel = iapi.getFromEnv('smartLabel'),
        titleText = (0, _lib.parseUnsafeString)(chartAttrs.caption),
        subTitleText = (0, _lib.parseUnsafeString)(chartAttrs.subcaption),
        captionPadding = captionConfig.captionPadding = (0, _lib.pluckNumber)(chartAttrs.captionpadding, 2),
        chartMenuBar = components.chartMenuBar,
        chartMenuLogicalSpace = chartMenuBar && chartMenuBar.getLogicalSpace(),
        height = chartConfig.height - (chartMenuLogicalSpace && chartMenuLogicalSpace.height || 0),

    // width = chartConfig.width,
    captionLineHeight = 0,
        subCaptionLineHeight = 0,

    // topGutterWidth = 5,
    canvasBorderThickness = mathMax(components.canvas && components.canvas[0].config.canvasBorderThickness, 0),
        captionHeight = 0,
        allowedHeight = height * 0.7,
        allowedWidth = availableWidth,
        dimensions = {},
        maxCaptionWidth,
        captionObj,
        subCaptionObj,
        capStyle,
        subCapStyle;

    // text below 3px is not properly visible
    if (allowedHeight > 3) {
      if (captionPadding < canvasBorderThickness) {
        captionPadding = canvasBorderThickness + 2;
      }
      captionConfig.captionPadding = subCaptionConfig.captionPadding = captionPadding;

      if (titleText !== _lib.BLANKSTRING) {
        // calculatethe single line's height
        capStyle = captionConfig.style;
        captionLineHeight = captionConfig.captionLineHeight = mathCeil(parseFloat((0, _lib.pluck)(capStyle.fontHeight, capStyle.lineHeight), 10), 12);
        // captionFontSize = subCaptionConfig.captionLineHeight =
        //     pluckNumber(parseInt(capStyle.fontSize, 10), 10);
      }
      if (subTitleText !== _lib.BLANKSTRING) {
        subCapStyle = subCaptionConfig.style;
        subCaptionLineHeight = mathCeil(parseInt((0, _lib.pluck)(subCapStyle.lineHeight, subCapStyle.fontHeight), 10), 12);
        // subCaptionFontSize = pluckNumber(parseInt(subCapStyle.fontSize, 10), 10);
      }

      SmartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
      if (captionLineHeight > 0 || subCaptionLineHeight > 0) {
        SmartLabel.setStyle(capStyle);
        captionObj = SmartLabel.getSmartText(titleText, allowedWidth, height);
        // Forcefully increase width to give a gutter in caption and sub-caption
        if (captionObj.width > 0) {
          captionObj.width += GUTTER_PADDING;
          captionHeight = captionObj.height;
        }
        SmartLabel.setStyle(subCapStyle);
        subCaptionObj = SmartLabel.getSmartText(subTitleText, allowedWidth, height - captionHeight);
        // Force fully increase width to give a gutter in caption and subCaption
        if (subCaptionObj.width > 0) {
          subCaptionObj.width += GUTTER_PADDING;
        }
        captionConfig.captionSubCaptionGap = captionObj.height + 0 + subCaptionLineHeight * 0.2;

        maxCaptionWidth = Math.max(captionObj.width, subCaptionObj.width);
        // Replace the caption and subCaption text with the new wrapped text
        // captionComponents.text = captionObj.text;
        captionConfig.height = captionHeight = captionObj.height;
        captionConfig.width = captionObj.width;
        captionConfig.tooltext && (captionComponents.originalText = captionObj.tooltext);

        // subCaptionComponents.text = subCaptionObj.text;
        subCaptionConfig.height = captionHeight = subCaptionObj.height;
        subCaptionConfig.width = subCaptionObj.width;
        subCaptionConfig.tooltext && (captionComponents.originalText = subCaptionObj.tooltext);

        maxCaptionWidth = Math.max(captionObj.width, subCaptionObj.width);
        captionConfig.captionPadding = captionPadding = mathMin(availableWidth - maxCaptionWidth, captionPadding);
        // Add caption padding, if either caption or sub-caption is to be shown
        if (maxCaptionWidth > 0) {
          maxCaptionWidth = mathMin(availableWidth, maxCaptionWidth + captionPadding);
        }
        captionConfig.maxCaptionWidth = subCaptionConfig.maxCaptionWidth = maxCaptionWidth;

        // totalHeight = totalHeight || canvasBorderThickness;
        if (captionConfig.isOnLeft) {
          dimensions.left = maxCaptionWidth;
        } else {
          dimensions.right = maxCaptionWidth;
        }
      }
    }

    return dimensions;
  };
  /**
   * Calculates caption coordinates
   */


  SparkChartBase.prototype._manageCaptionPosition = function _manageCaptionPosition() {
    var iapi = this,
        chartConfig = iapi.config,
        caption = iapi.getChildren('caption')[0],
        subCaption = iapi.getChildren('subCaption')[0],
        captionConfig = caption.config,
        subCaptionConfig = subCaption.config,
        captionPosition = captionConfig.captionPosition,
        maxWidth = mathMax(captionConfig.width, subCaptionConfig.width),
        borderWidth = chartConfig.borderWidth || 0,
        height = chartConfig.height,
        sparkValues = chartConfig.sparkValues || {},
        openValueWidth = sparkValues.openValueWidth || 0,
        captionPadding = captionConfig.captionPadding,
        captionSubCaptionGap = captionConfig.captionSubCaptionGap;

    switch (captionPosition) {
      case _lib.POSITION_MIDDLE:
        captionConfig.y = (height - (captionConfig.height + subCaptionConfig.height)) / 2 + (captionConfig._offsetHeight || 0) * 0.5;
        break;
      case _lib.POSITION_BOTTOM:
        captionConfig.y = height - (captionConfig.height + subCaptionConfig.height) - chartConfig.marginBottom - borderWidth;
        break;
      default:
        // We put it on top by default
        captionConfig.y = chartConfig.marginTop + borderWidth + (captionConfig._offsetHeight || 0);
        break;
    }

    subCaptionConfig.y = captionConfig.y + captionSubCaptionGap;

    if (captionConfig.isOnLeft) {
      captionConfig.align = subCaptionConfig.align = _lib.POSITION_END;
      captionConfig.x = subCaptionConfig.x = chartConfig.canvasLeft - (borderWidth + openValueWidth + GUTTER_PADDING + captionPadding) + chartConfig.borderWidth;
    } else {
      captionConfig.align = subCaptionConfig.align = _lib.POSITION_START;
      captionConfig.x = subCaptionConfig.x = chartConfig.width - chartConfig.marginRight - maxWidth - borderWidth;
    }
  };

  /**
   * function to parse JSON data for configurations of axis
   * @return {Object} configurations of axes
   */


  SparkChartBase.prototype._feedAxesRawData = function _feedAxesRawData() {
    var output = _SSCartesian.prototype._feedAxesRawData.call(this),
        xAxisConf = output.xAxisConf[0],
        yAxisConf = output.yAxisConf[0],
        chartAttr = this.getFromEnv('chart-attrib'),
        colorM = this.getFromEnv('color-manager'),
        periodLength = (0, _lib.pluckNumber)(chartAttr.periodlength, 0),
        drawConfig = {
      isDraw: 0
    };
    xAxisConf.lines = yAxisConf.lines = xAxisConf.band = yAxisConf.band = drawConfig;
    if (periodLength) {
      xAxisConf.alternateGridColor = (0, _lib.pluck)(chartAttr.periodcolor, colorM.getColor('periodColor'));
      xAxisConf.alternateGridAlpha = (0, _lib.pluck)(chartAttr.periodalpha, 100);
      xAxisConf.showAlternateGridColor = true;
      xAxisConf.categoryDivLinesFromZero = 0;
      xAxisConf.periodLength = periodLength;
      xAxisConf.band = {
        isDraw: 1
      };
    }
    return output;
  };
  /**
   * function to check if the chart specific data is proper is not
   * this fn is define for specific chart types
   * @return {boolean} if JSON data is valid or not
   */


  SparkChartBase.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {
    var jsonData = this.getFromEnv('dataSource'),
        dataset = jsonData.dataset;
    if (!dataset || !dataset.length || !(dataset[0].data && dataset[0].data.length)) {
      return true;
    }
  };

  return SparkChartBase;
}(_fusioncharts2['default']);

exports['default'] = SparkChartBase;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._realTimeConfigure = undefined;

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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _dependencyManager = __webpack_require__(6);

var _realtimeColumnAnimation = __webpack_require__(762);

var _realtimeColumnAnimation2 = _interopRequireDefault(_realtimeColumnAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


(0, _dependencyManager.addDep)({
  name: 'realtimeColumnAnimation',
  type: 'animationRule',
  extension: _realtimeColumnAnimation2['default']
});
/**
 * Real time column dataset class definition
 */

var RealtimeColumnDataset = function (_ColumnDataset) {
  _inherits(RealtimeColumnDataset, _ColumnDataset);

  function RealtimeColumnDataset() {
    _classCallCheck(this, RealtimeColumnDataset);

    return _possibleConstructorReturn(this, _ColumnDataset.apply(this, arguments));
  }

  /**
   * Setting the dataStore as per the numDisplaySets attributes.
   * @param  {boolean} force set true during clear chart
   */
  RealtimeColumnDataset.prototype._realTimeConfigure = function _realTimeConfigure(force) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        datasetStore = dataSet.components.data,
        tempArr = [],
        numDisplaySets = chart.config.realTimeConfig.numDisplaySets,
        catLen;

    catLen = force ? 0 : dataSet.getFromEnv('xAxis').getTicksLen();

    if (catLen < numDisplaySets) {
      tempArr.length = numDisplaySets - catLen;
      dataSet.components.data = tempArr.concat(datasetStore);
    } else if (catLen > numDisplaySets) {
      dataSet.components.data.splice(numDisplaySets, catLen - numDisplaySets);
    }
    dataSet.resetCatPos && dataSet.resetCatPos();
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  RealtimeColumnDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeColumnDataset.prototype.getName = function getName() {
    return 'realtimeColumn';
  };

  return RealtimeColumnDataset;
}(_column2['default']);

var _realTimeConfigure = RealtimeColumnDataset.prototype._realTimeConfigure;
exports._realTimeConfigure = _realTimeConfigure;
exports['default'] = RealtimeColumnDataset;

/***/ }),

/***/ 348:
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

var _fusioncharts = __webpack_require__(222);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _msgloggerLinker = __webpack_require__(171);

var _msgloggerLinker2 = _interopRequireDefault(_msgloggerLinker);

var _alertmanagerLinker = __webpack_require__(170);

var _alertmanagerLinker2 = _interopRequireDefault(_alertmanagerLinker);

var _constructor = __webpack_require__(163);

var _constructor2 = _interopRequireDefault(_constructor);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF;

var Gauge = function (_GaugeWidget) {
  _inherits(Gauge, _GaugeWidget);

  function Gauge() {
    _classCallCheck(this, Gauge);

    var _this = _possibleConstructorReturn(this, _GaugeWidget.call(this));

    _constructor2['default'].addDep(_msgloggerLinker2['default']);
    _constructor2['default'].addDep(_alertmanagerLinker2['default']);
    // this has been added directly to this because in all gauges this type of configurations has been kept in this
    // we have problem in parsing of attribues,correcting of these changes will be taken in that flow change
    _this.chartLeftMargin = 15;
    _this.chartRightMargin = 15;
    _this.chartTopMargin = 10;
    _this.chartBottomMargin = 10;
    _this.minChartHeight = 10;
    _this.minCanvasWidth = 0;
    return _this;
  }

  Gauge.prototype._feedAxesRawData = function _feedAxesRawData() {
    var iapi = this,
        colorM = iapi.getFromEnv('color-manager'),
        dataObj = iapi.getFromEnv('dataSource'),
        chartAttrs = dataObj.chart,
        scaleConf,
        palleteString = _lib.chartPaletteStr.chart2D,
        ticksBelowGauge = (0, _lib.pluckNumber)(chartAttrs.ticksbelowgauge),
        ticksonright = (0, _lib.pluckNumber)(chartAttrs.ticksonright),
        isAxisOpposite = (0, _lib.pluckNumber)(chartAttrs.axisontop, chartAttrs.axisonleft !== UNDEF ? !(0, _lib.pluckNumber)(chartAttrs.axisonleft) : UNDEF, ticksBelowGauge !== UNDEF ? !ticksBelowGauge : UNDEF, ticksonright !== UNDEF ? ticksonright : UNDEF, iapi.isAxisOpposite),
        isAxisReverse = (0, _lib.pluckNumber)(chartAttrs.reverseaxis, iapi.isAxisReverse),
        showTickMarks = (0, _lib.pluckNumber)(chartAttrs.showtickmarks, 1),
        numberFormatter = iapi.getFromEnv('number-formatter'),
        showTickValues = (0, _lib.pluckNumber)(chartAttrs.showtickvalues),
        showLimits;

    if (!showTickValues && showTickValues !== UNDEF) {
      showLimits = false;
    } else if (!showTickMarks && showTickValues === UNDEF) {
      showLimits = false;
    } else {
      showLimits = true;
    }

    scaleConf = {
      isVertical: !iapi.isHorizontal,
      isReverse: iapi.isHorizontal ? isAxisReverse : !isAxisReverse,
      isOpposit: isAxisOpposite,
      outCanfontFamily: (0, _lib.pluck)(chartAttrs.outcnvbasefont, chartAttrs.basefont, 'Verdana,sans'),
      outCanfontSize: (0, _lib.pluckFontSize)(chartAttrs.outcnvbasefontsize, chartAttrs.basefontsize, 10),
      outCancolor: (0, _lib.pluck)(chartAttrs.outcnvbasefontcolor, chartAttrs.basefontcolor, colorM.getColor(palleteString.baseFontColor)).replace(/^#?([a-f0-9]+)/ig, '#$1'),
      useEllipsesWhenOverflow: chartAttrs.useellipseswhenoverflow,
      divLineColor: (0, _lib.pluck)(chartAttrs.vdivlinecolor, colorM.getColor(palleteString.divLineColor)),
      divLineAlpha: (0, _lib.pluck)(chartAttrs.vdivlinealpha, colorM.getColor('divLineAlpha')),
      divLineThickness: (0, _lib.pluckNumber)(chartAttrs.vdivlinethickness, 1),
      divLineIsDashed: Boolean((0, _lib.pluckNumber)(chartAttrs.vdivlinedashed, chartAttrs.vdivlineisdashed, 0)),
      divLineDashLen: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashlen, 4),
      divLineDashGap: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashgap, 2),
      showAlternateGridColor: (0, _lib.pluckNumber)(chartAttrs.showalternatevgridcolor, 0),
      alternateGridColor: (0, _lib.pluck)(chartAttrs.alternatevgridcolor, colorM.getColor('altVGridColor')),
      alternateGridAlpha: (0, _lib.pluck)(chartAttrs.alternatevgridalpha, colorM.getColor('altVGridAlpha')),
      numDivLines: chartAttrs.numvdivlines,
      labelFont: chartAttrs.labelfont,
      labelFontSize: chartAttrs.labelfontsize,
      labelFontColor: chartAttrs.labelfontcolor,
      labelFontAlpha: chartAttrs.labelalpha,
      labelFontBold: chartAttrs.labelfontbold,
      labelFontItalic: chartAttrs.labelfontitalic,
      axisName: chartAttrs.xaxisname,
      axisMinValue: chartAttrs.lowerlimit,
      axisMaxValue: chartAttrs.upperlimit,
      setAdaptiveMin: chartAttrs.setadaptivemin,
      // adjusttm will be internally parsed as adjustdiv
      adjustDiv: chartAttrs.adjusttm,
      labelDisplay: chartAttrs.labeldisplay,
      showLabels: chartAttrs.showlabels,
      rotateLabels: chartAttrs.rotatelabels,
      slantLabel: (0, _lib.pluckNumber)(chartAttrs.slantlabels, chartAttrs.slantlabel),
      labelStep: (0, _lib.pluckNumber)(chartAttrs.labelstep, chartAttrs.xaxisvaluesstep),
      showAxisValues: (0, _lib.pluckNumber)(chartAttrs.showxaxisvalues, chartAttrs.showxaxisvalue),
      showDivLineValues: (0, _lib.pluckNumber)(chartAttrs.showvdivlinevalues, chartAttrs.showvdivlinevalues),
      showZeroPlane: chartAttrs.showvzeroplane,
      zeroPlaneColor: chartAttrs.vzeroplanecolor,
      zeroPlaneThickness: chartAttrs.vzeroplanethickness,
      zeroPlaneAlpha: chartAttrs.vzeroplanealpha,
      showZeroPlaneValue: chartAttrs.showvzeroplanevalue,
      trendlineColor: chartAttrs.trendlinecolor,
      trendlineToolText: chartAttrs.trendlinetooltext,
      trendlineThickness: chartAttrs.trendlinethickness,
      trendlineAlpha: chartAttrs.trendlinealpha,
      showTrendlinesOnTop: chartAttrs.showtrendlinesontop,
      showAxisLine: (0, _lib.pluckNumber)(chartAttrs.showxaxisline, chartAttrs.showaxislines, chartAttrs.drawAxisLines, 0),
      axisLineThickness: (0, _lib.pluckNumber)(chartAttrs.xaxislinethickness, chartAttrs.axislinethickness, 1),
      axisLineAlpha: (0, _lib.pluckNumber)(chartAttrs.xaxislinealpha, chartAttrs.axislinealpha, 100),
      axisLineColor: (0, _lib.pluck)(chartAttrs.xaxislinecolor, chartAttrs.axislinecolor, '#000000'),
      // Tick properties
      majorTMNumber: chartAttrs.majortmnumber,
      majorTMColor: chartAttrs.majortmcolor,
      majorTMAlpha: chartAttrs.majortmalpha,
      majorTMHeight: chartAttrs.majortmheight,
      tickValueStep: chartAttrs.tickvaluestep,
      showTickMarks: chartAttrs.showtickmarks,
      connectTickMarks: chartAttrs.connecttickmarks,
      showTickValues: chartAttrs.showtickvalues,
      majorTMThickness: chartAttrs.majortmthickness,
      upperlimit: numberFormatter.getCleanValue(chartAttrs.upperlimit),
      lowerlimit: numberFormatter.getCleanValue(chartAttrs.lowerlimit),
      reverseScale: chartAttrs.reversescale,
      // Whether to display the Limits
      showLimits: chartAttrs.showlimits || showLimits,
      minorTMNumber: (0, _lib.pluckNumber)(chartAttrs.minortmnumber, iapi.minorTMNumber, 4),
      minorTMColor: chartAttrs.minortmcolor,
      minorTMAlpha: chartAttrs.minortmalpha,
      minorTMHeight: (0, _lib.pluckNumber)(chartAttrs.minortmheight, chartAttrs.minortmwidth),
      minorTMThickness: chartAttrs.minortmthickness,
      // Padding between tick mark start position and gauge
      tickMarkDistance: (0, _lib.pluckNumber)(chartAttrs.tickmarkdistance, chartAttrs.tickmarkgap),
      // Tick value distance
      tickValueDistance: (0, _lib.pluckNumber)(chartAttrs.tickvaluedistance, chartAttrs.displayvaluedistance),
      placeTicksInside: chartAttrs.placeticksinside,
      placeValuesInside: chartAttrs.placevaluesinside,
      upperLimitDisplay: chartAttrs.upperlimitdisplay,
      lowerLimitDisplay: chartAttrs.lowerlimitdisplay,
      drawTickMarkConnector: iapi.isHorizontal ? 1 : 0
    };

    scaleConf.vtrendlines = dataObj.trendpoints;
    return [scaleConf];
  };

  Gauge.prototype._setAxisLimits = function _setAxisLimits() {
    var iapi = this,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        scale = iapi.getChildren('scale')[0],
        minMaxObj;

    minMaxObj = iapi.getChildren('dataset')[0].getDataLimits();
    minMaxObj.max === -Infinity && (minMaxObj.max = 0);
    minMaxObj.min === Infinity && (minMaxObj.min = 0);
    iapi.colorRange && scale.setAxisConfig({
      lowerlimit: (0, _lib.pluckNumber)(chartAttrs.lowerlimit, minMaxObj.forceMin ? minMaxObj.min : UNDEF),
      upperlimit: (0, _lib.pluckNumber)(chartAttrs.upperlimit, minMaxObj.forceMax ? minMaxObj.max : UNDEF)
    });
    scale.setDataLimit(minMaxObj.max, minMaxObj.min);
  };

  Gauge.prototype._getDataJSON = function _getDataJSON() {
    var i = 0,
        len,
        dataObj,
        values = [],
        labels = [],
        toolTexts = [],
        data = this.getChildren('dataset')[0].components.data;

    if (!data || !data.length) {
      len = 0;
    } else {
      len = data.length;
    }

    for (; i < len; i += 1) {
      dataObj = data[i].config;
      values.push(dataObj.itemValue);
      labels.push(dataObj.formatedVal || _lib.BLANK);
      toolTexts.push(dataObj.toolText || _lib.BLANK);
    }

    return {
      values: values,
      labels: labels,
      toolTexts: toolTexts
    };
  };

  Gauge.prototype._postSpaceManagement = function _postSpaceManagement() {
    var iapi = this,
        config = iapi.config,
        canvas = iapi.getChildren('canvas')[0],
        scale = iapi.getChildren('scale')[0],
        isHorizontal = iapi.isHorizontal,
        canvasConf = canvas.config;

    if (isHorizontal) {
      scale.setAxisDimention({
        axisLength: config.canvasWidth,
        y: canvasConf.canvasTop + (scale.config.isOpposit ? 0 : canvasConf.canvasHeight),
        x: canvasConf.canvasLeft
      });
    } else {
      scale.setAxisDimention({
        axisLength: config.canvasHeight,
        x: canvasConf.canvasLeft + (scale.config.isOpposit ? canvasConf.canvasWidth : 0),
        y: canvasConf.canvasTop
      });
    }
  };

  return Gauge;
}(_fusioncharts2['default']);

exports['default'] = Gauge;

/***/ }),

/***/ 349:
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

var _axis = __webpack_require__(201);

var _axis2 = _interopRequireDefault(_axis);

var _lib = __webpack_require__(5);

var _commonApi = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var GaugePolarNumeric = function (_Axis) {
  _inherits(GaugePolarNumeric, _Axis);

  function GaugePolarNumeric() {
    _classCallCheck(this, GaugePolarNumeric);

    return _possibleConstructorReturn(this, _Axis.apply(this, arguments));
  }

  GaugePolarNumeric.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Axis.prototype.__setDefaultConfig.call(this);
    var config = this.config;

    config.majorTMNumber = -1;
    config.adjustDiv = 1;
    config.majorTMHeight = 6;
    config.showTickMarks = 1;
    config.majorTMThickness = 1;
    config.upperlimit = _lib.UNDEF;
    config.lowerlimit = _lib.UNDEF;
    config.minorTMNumber = 4;
    config.minorTMThickness = 1;
    config.tickMarkDistance = 3;
    config.placeTicksInside = 0;
    config.placeValuesInside = 0;
  };

  /**
   * Prepare the axis attributes for use by the chart drawing. It applies default values to the
   * options that are undefined.
   * @param  {Object}  rawAttr The raw attributes to be set
   */


  GaugePolarNumeric.prototype.configureAttributes = function configureAttributes(rawAttr) {
    var axis = this,
        axisConfig = axis.config,
        colorM = axis.getFromEnv('color-manager'),
        axisAttr;

    _Axis.prototype.configureAttributes.call(this, rawAttr);
    axisAttr = axisConfig.rawAttr;

    axisConfig.majorTMColor = (0, _lib.convertColor)((0, _lib.pluck)(axisAttr.majorTMColor, colorM.getColor('tickColor')), (0, _lib.pluckNumber)(axisAttr.majorTMAlpha, 100));
    axisConfig.tickValueStep = (0, _lib.pluckNumber)(axisAttr.tickValueStep, 1);
    axisConfig.tickValueStep = Math.round(axisConfig.tickValueStep);
    if (axisConfig.tickValueStep <= 0) {
      axisConfig.tickValueStep = 1;
    }
    axisConfig.connectTickMarks = axisConfig.showTickMarks ? (0, _lib.pluckNumber)(axisAttr.connectTickMarks, 1) : 0;
    axisConfig.showTickValues = (0, _lib.pluckNumber)(axisAttr.showTickValues, axisConfig.showTickMarks);
    axisConfig.reverseScale = (0, _lib.pluckNumber)(axisAttr.reverseScale, 0) === 1;
    axisConfig.minorTMColor = (0, _lib.convertColor)((0, _lib.pluck)(axisAttr.minorTMColor, axisConfig.majorTMColor), (0, _lib.pluckNumber)(axisAttr.minorTMAlpha, axisConfig.majorTMAlpha, 100));
    axisConfig.minorTMHeight = axisConfig.showTickMarks ? (0, _lib.pluckNumber)(axisAttr.minorTMHeight, Math.round(axisConfig.majorTMHeight / 2)) : 0;
    // Padding between tick mark start position and gauge
    // Tick value distance
    axisConfig.tickValueDistance = (0, _lib.pluckNumber)(axisAttr.tickValueDistance, 0) + 2; // text gutter
    axisConfig.upperLimitDisplay = (0, _lib.parseUnsafeString)(axisAttr.upperLimitDisplay) || '';
    axisConfig.lowerLimitDisplay = (0, _lib.parseUnsafeString)(axisAttr.lowerLimitDisplay) || '';
    axisConfig.drawTickMarkConnector = axisAttr.drawTickMarkConnector || 0;
    axisConfig.numDivLines = axisConfig.majorTMNumber > 0 ? axisConfig.majorTMNumber : axisConfig.numDivLines + 1;
  };

  GaugePolarNumeric.prototype._createContainer = function _createContainer() {
    var axis = this,
        axisConfig = axis.config,
        chart = axis.getLinkedParent(),
        childContainers = chart.getChildContainer(),
        axisBottom = childContainers.axisBottomGroup,
        axisTop = childContainers.axisTopGroup,
        axisLineGroup = void 0,
        axisTrendGroupTop = void 0,
        axisLabelGroup = void 0,
        axisLabelGroupTop = void 0,
        axisTrendGroupBottom = void 0;

    // creating the axis elements group unique throughout the charts
    // axisTrendGroupBottom hold trendContainer bottom of the dataset
    axisTrendGroupBottom = this.createContainer('axisTrendGroupBottom', {
      name: 'dataset-Trend-group-bottom'
    }, axisBottom);
    // axisLineGroup hold the axis line  element
    axisLineGroup = axis.createContainer('axisLineGroup', {
      name: 'axis-Line-group'
    }, axisTop);
    // axisTrendGroupTop hold trendContainer top of the dataset
    axisTrendGroupTop = axis.createContainer('axisTrendGroupTop', {
      name: 'dataset-Trend-group-top'
    }, axisTop);
    // axisLabelGroup hold the label container
    axisLabelGroup = axis.createContainer('axisLabelGroup', {
      name: 'dataset-Label-group'
    }, axisBottom);
    // axisLabelGroup hold the label container
    axisLabelGroupTop = axis.createContainer('axisLabelGroupTop', {
      name: 'dataset-Label-group'
    }, axisTop);

    // creating the container group for every axis there will be
    // note : if new container added add it to hide and show
    // contains all the axis labels

    axisConfig.axisContainer = axis.createGroup('axisContainer', {
      name: 'dataset-axis'
    }, axisLabelGroup);

    axisConfig.axisLabelContainerTop = axis.createGroup('axisLabelContainerTop', {
      name: 'dataset-top-label'
    }, axisLabelGroupTop);

    axisConfig.axisAxisLineContainer = axis.createGroup('axisAxisLineContainer', {
      name: 'axis-line-tick'
    }, axisLineGroup);

    axisConfig.axisTrendContainerTop = axis.createGroup('axisTrendContainerTop', {
      name: 'dataset-axis-trend-top'
    }, axisTrendGroupTop);

    axisConfig.axisTrendContainerBottom = axis.createGroup('axisTrendContainerBottom', {
      name: 'dataset-axis-trend-bottom'
    }, axisTrendGroupBottom);

    // contain trend label elements
    axisConfig.axisTrendLabelContainer = axis.createGroup('axisTrendLabelContainer', {
      name: 'dataset-axis-trend-label'
    }, axisTrendGroupTop);
  };

  GaugePolarNumeric.prototype.allocatePosition = function allocatePosition() {
    var axis = this,
        axisConfig = axis.config;

    axisConfig.drawLabels && axis._parseLabel();
  };
  /**
   * Sets the visible range of the axis. Also sets axis's reference values and re-calculates PVR.
   * @param  {number} minValue The minimum value of the area to be visible
   * @param  {number} maxValue The maximum value of the area to be visible
   * @return {boolean} Whether the visible range of the axis was successfully set or not
   */


  GaugePolarNumeric.prototype.setVisibleConfig = function setVisibleConfig(minValue, maxValue) {
    var axis = this,
        axisConfig = axis.config,
        scale = axis.getScale(),
        domain = void 0;

    if (minValue >= maxValue || minValue < axisConfig.axisRange.min || maxValue > axisConfig.axisRange.max) {
      return false;
    }

    domain = scale.setDomain([minValue, maxValue]).getDomain();
    axisConfig.visibleMin = domain[0];
    axisConfig.visibleMax = domain[1];

    axis.setPosition();

    axis.asyncDraw();

    axis.fireEvent('visiblerangeset', { minValue: minValue, maxValue: maxValue });

    return true;
  };

  GaugePolarNumeric.prototype._adjustNumberFormatter = function _adjustNumberFormatter() {
    if (this) return 0;
  };

  GaugePolarNumeric.prototype.calculateTicksOnLabelMode = function calculateTicksOnLabelMode() {
    if (this) return 0;
  };

  return GaugePolarNumeric;
}(_axis2['default']);

GaugePolarNumeric.prototype.setDataLimit = _commonApi.setDataLimit;
GaugePolarNumeric.prototype._getTrendLineLimits = _commonApi._getTrendLineLimits;
GaugePolarNumeric.prototype._setAxisRange = _commonApi._setAxisRangeNumeric;

exports['default'] = GaugePolarNumeric;

/***/ }),

/***/ 350:
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

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

var _lib = __webpack_require__(5);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _hlineargaugeAnimation = __webpack_require__(735);

var _hlineargaugeAnimation2 = _interopRequireDefault(_hlineargaugeAnimation);

var _dependencyManager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    BLANKSTRING = _lib.BLANK,
    AXISPOSITION_TOP = 1,
    AXISPOSITION_BOTTOM = 3,
    FILLMIXDARK10 = '{dark-10}',
    configStr = _lib.preDefStr.configStr,
    animationObjStr = _lib.preDefStr.animationObjStr,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_BOTTOM = _lib.preDefStr.POSITION_BOTTOM,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_END = _lib.preDefStr.POSITION_END,
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    noneStr = 'none',
    M = 'M',
    L = 'L',
    win = window,
    doc = win.document,
    hasTouch = doc.documentElement.ontouchstart !== UNDEF,
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    POINTER = 'pointer',
    EVENTARGS = 'eventArgs',
    ANIM_EFFECT = 'easeIn',
    textHAlign = {
  right: POSITION_END,
  left: POSITION_START,
  middle: POSITION_MIDDLE,
  start: POSITION_START,
  end: POSITION_END,
  center: POSITION_MIDDLE,
  'undefined': _lib.BLANK,
  BLANK: _lib.BLANK
},

/**
 * Returns the type of touch event
 * @param {Event} event the touch event fired
 * @return {Object} type of touch event raised
 */
getTouchEvent = function getTouchEvent(event) {
  return hasTouch && event.sourceEvent && event.sourceEvent.touches && event.sourceEvent.touches[0] || event;
};

(0, _dependencyManager.addDep)({
  name: 'hlineargaugeAnimation',
  type: 'animationRule',
  extension: _hlineargaugeAnimation2['default']
});
/**
 * Creates the HlineargaugeDataset class
 */

var HlineargaugeDataset = function (_ComponentInterface) {
  _inherits(HlineargaugeDataset, _ComponentInterface);

  /**
   * Constructor function to initialise member variables of HlineargaugeDataset class
   */
  function HlineargaugeDataset() {
    _classCallCheck(this, HlineargaugeDataset);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.config.idMap = {};
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  HlineargaugeDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  HlineargaugeDataset.prototype.getName = function getName() {
    return 'hlineargauge';
  };
  /**
   * Draws the color range of Hlinear Gauge plot as background
   */


  HlineargaugeDataset.prototype._drawBackground = function _drawBackground() {
    var dataset = this,
        iapi = this.getFromEnv('chart'),
        envComponents = iapi.getFromEnv(),
        chartConfig = iapi.config,

    // For proper annotation drawing.
    canvasGroup = iapi.getChildContainer().plotGroup,
        toolTipController = iapi.getFromEnv('toolTipController'),
        width = chartConfig.canvasWidth,
        height = chartConfig.canvasHeight,
        canvasTop = chartConfig.canvasTop,
        canvasLeft = chartConfig.canvasLeft,
        scale = envComponents.scale,
        min = scale.config.axisRange.min,
        max = scale.config.axisRange.max,
        jsonData = iapi.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        trendArray = jsonData.trendpoints && jsonData.trendpoints.point,
        showGaugeBorder = (0, _lib.pluckNumber)(chartAttrs.showgaugeborder, 1),
        gaugeFillMix = (0, _lib.getFirstDefinedValue)(chartAttrs.colorrangefillmix, chartAttrs.gaugefillmix, '{light-10},{dark-20},{light-50},{light-85}'),
        gaugeFillRatio = (0, _lib.getFirstDefinedValue)(chartAttrs.colorrangefillratio, chartAttrs.gaugefillratio, chartAttrs.gaugefillratio, '0,8,84,8'),
        gaugeBorderColor = (0, _lib.pluck)(chartAttrs.colorrangebordercolor, chartAttrs.gaugebordercolor, '{dark-20}'),
        gaugeBorderAlpha = (0, _lib.pluckNumber)(chartAttrs.colorrangeborderalpha, chartAttrs.gaugeborderalpha, 100),
        gaugeBorderThickness = showGaugeBorder ? (0, _lib.pluckNumber)(chartAttrs.colorrangeborderthickness, chartAttrs.gaugeborderthickness, 1) : 0,
        gaugeType = 1,
        colorArray = jsonData.colorrange && envComponents.colorRange && envComponents.colorRange.getColorRangeArr(min, max),
        showShadow = (0, _lib.pluckNumber)(chartAttrs.showshadow, 1),

    // shadow,
    i,
        y,
        len,
        marker,
        orient,
        canvas = iapi.getChildren('canvas')[0],
        colorGrp = canvas.getGraphicalElement('linear'),
        outerRect = canvas.getGraphicalElement('outerRect'),
        getRectXY,
        angle,
        color,
        colorObj,
        borderColor,
        xyObj,
        trendPointConfig,
        trendZoneElem,
        trendZoneElems,
        trendObjElem,
        trendObjElems,
        trendObj,
        animationManager = envComponents.animationManager,
        colorM = envComponents['color-manager'],
        crColor,
        crAlpha,
        borderAlpha,
        shadowAlpha,
        startAngle,
        colorRangeElem,

    // duration = animationObj.duration,
    // dummyObj = animationObj.dummyObj,
    // animObj = animationObj.animObj,
    pointOrientation = {
      top: 1,
      bottom: 3
    },
        attr,
        trendZoneElemsCount = 0,
        trendObjElemsCount = 0,
        markerCount = 0;

    animationManager.setAnimation({
      el: canvasGroup,
      state: 'initial',
      attr: {
        transform: ['T', canvasLeft, canvasTop]
      },
      component: dataset,
      container: iapi.getContainer('parentgroup'),
      dom: 'parentgroup'
    });

    colorGrp = animationManager.setAnimation({
      el: colorGrp || 'group',
      attr: { name: 'colorrange' },
      component: dataset,
      container: canvasGroup,
      label: 'background'
    });
    outerRect = animationManager.setAnimation({
      el: outerRect || 'rect',
      attr: {
        x: 0,
        y: 0,
        width: width,
        height: height,
        stroke: noneStr,
        r: 0
      },
      component: dataset,
      container: canvasGroup
    });
    if (!canvas.getGraphicalElement('linear')) {
      colorGrp = canvas.addGraphicalElement('linear', colorGrp);
      colorGrp.trackTooltip(true);
      // draw the outer rectangle
      canvas.addGraphicalElement('outerRect', outerRect);
    }

    if (gaugeType === 1) {
      // horizontal gauge; left to right;
      getRectXY = function getRectXY(minValue, maxValue) {
        return {
          x: minValue * width / (max - min),
          y: 0,
          width: (maxValue - minValue) * width / (max - min),
          height: height
        };
      };
      angle = 270;
    } else if (gaugeType === 2) {
      // vertical gauge; top to bottom;
      getRectXY = function getRectXY(minValue, maxValue) {
        return {
          x: 0,
          y: minValue * height / (max - min),
          width: width,
          height: (maxValue - minValue) * height / (max - min)
        };
      };
      angle = 180;
    } else if (gaugeType === 3) {
      // horizontal linear gauge; right to left;
      getRectXY = function getRectXY(minValue, maxValue) {
        return {
          x: width - maxValue * width / (max - min),
          y: 0,
          width: (maxValue - minValue) * width / (max - min),
          height: height
        };
      };
      angle = 270;
    } else {
      // vertical linear gauge; bottom to top;
      getRectXY = function getRectXY(minValue, maxValue) {
        return {
          x: 0,
          y: height - maxValue * height / (max - min),
          width: width,
          height: (maxValue - minValue) * height / (max - min)
        };
      };
      angle = 180;
    }

    // if (!graphics.colorRangeElems) {
    //   graphics.colorRangeElems = [];
    // }

    for (i = 0, len = colorArray && colorArray.length; i < len; i += 1) {
      colorObj = colorArray[i];
      xyObj = getRectXY(colorObj.minvalue - min, colorObj.maxvalue - min);
      colorObj.x = xyObj.x;
      colorObj.y = xyObj.y;
      colorObj.width = xyObj.width;
      colorObj.height = xyObj.height;

      color = colorObj.code;
      borderColor = (0, _lib.convertColor)((0, _lib.getColorCodeString)((0, _lib.pluck)(colorObj.bordercolor, color), gaugeBorderColor), (0, _lib.pluckNumber)(colorObj.borderalpha, gaugeBorderAlpha));

      // shadow = showShadow ? (Math.max(colorObj.alpha, gaugeBorderAlpha) / 100) : null;

      // create the shadow element
      crColor = colorM.parseColorMix(colorObj.code, gaugeFillMix);
      crAlpha = colorM.parseAlphaList(colorObj.alpha, crColor.length);
      borderAlpha = (0, _lib.pluckNumber)(colorObj.borderAlpha, gaugeBorderAlpha);
      shadowAlpha = crAlpha.split(_lib.COMMASTRING);

      shadowAlpha = mathMax.apply(Math, shadowAlpha);
      shadowAlpha = mathMax(gaugeBorderThickness && borderAlpha || 0, shadowAlpha);

      attr = {
        x: xyObj.x,
        y: xyObj.y,
        width: xyObj.width,
        height: xyObj.height,
        r: 0,
        'stroke-width': gaugeBorderThickness,
        stroke: borderColor,
        'fill': (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: crColor.toString(),
            ratio: gaugeFillRatio,
            alpha: crAlpha,
            angle: angle
          }
        })
      };
      colorRangeElem = canvas.getGraphicalElement('colorRangeElems') && canvas.getGraphicalElement('colorRangeElems')[i];
      colorRangeElem = animationManager.setAnimation({
        el: colorRangeElem || 'rect',
        attr: attr,
        component: dataset,
        container: colorGrp
      });
      if (!(canvas.getGraphicalElement('colorRangeElems') && canvas.getGraphicalElement('colorRangeElems')[i])) {
        colorRangeElem = canvas.addGraphicalElement('colorRangeElems', colorRangeElem, true, i);
      }

      colorRangeElem.shadow({
        apply: showShadow,
        opacity: shadowAlpha / 100
      });
      colorRangeElem.show();
    }
    if (!xyObj && canvas.getGraphicalElement('colorRangeElems') && canvas.getGraphicalElement('colorRangeElems').length > 0) {
      xyObj = canvas.getGraphicalElement('colorRangeElems')[canvas.getGraphicalElement('colorRangeElems').length - 1].attr();
    }
    if (canvas.getGraphicalElement('colorRangeElems')) {
      while (canvas.getGraphicalElement('colorRangeElems')[i]) {
        canvas.getGraphicalElement('colorRangeElems')[i].shadow(false);
        canvas.getGraphicalElement('colorRangeElems')[i].hide();
        i++;
      }
    }

    if (trendArray) {
      // iapi._configueTrendPoints ();
      trendPointConfig = chartConfig.trendPointConfig;

      // if (!graphics.trendObjElems) {
      //   graphics.trendObjElems = [];
      // }

      // if (!graphics.trendZoneElems) {
      //   graphics.trendZoneElems = [];
      // }

      // if (!graphics.marker) {
      //   graphics.marker = [];
      // }

      for (i = 0, len = trendPointConfig.length; i < len; i += 1) {
        trendObj = trendPointConfig[i];
        xyObj = getRectXY(trendObj.startValue - min, trendObj.endValue - min);

        if (trendObj.isTrendZone) {
          trendZoneElem = canvas.getGraphicalElement('trendZoneElems') && canvas.getGraphicalElement('trendZoneElems')[trendZoneElemsCount];
          trendZoneElem = animationManager.setAnimation({
            el: trendZoneElem || 'rect',
            attr: {
              x: xyObj.x,
              y: xyObj.y,
              width: xyObj.width > 0 ? xyObj.width : 0,
              height: xyObj.height > 0 ? xyObj.height : 0,
              r: 0,
              'stroke-width': 0,
              fill: (0, _lib.toRaphaelColor)({
                FCcolor: {
                  color: trendObj.color,
                  alpha: trendObj.alpha
                }
              })
            },
            component: dataset,
            container: colorGrp,
            label: 'final'
          });
          if (!(canvas.getGraphicalElement('trendZoneElems') && canvas.getGraphicalElement('trendZoneElems')[trendZoneElemsCount])) {
            trendZoneElem = canvas.addGraphicalElement('trendZoneElems', trendZoneElem, true, trendZoneElemsCount);
          }
          trendZoneElem.show();
          toolTipController.enableToolTip(trendZoneElem, trendObj.tooltext);
          trendZoneElemsCount++;
        } else {
          trendObjElem = canvas.getGraphicalElement('trendObjElems') && canvas.getGraphicalElement('trendObjElems')[trendObjElemsCount];
          trendZoneElem = animationManager.setAnimation({
            el: trendZoneElem || 'path',
            attr: {
              stroke: (0, _lib.convertColor)(trendObj.color, trendObj.alpha),
              'stroke-dasharray': trendObj.dashStyle,
              'stroke-width': trendObj.thickness,
              path: [M, xyObj.x, xyObj.y, L, xyObj.x, xyObj.y + xyObj.height]
            },
            component: dataset,
            container: colorGrp,
            label: 'final'
          });
          if (!(canvas.getGraphicalElement('trendObjElems') && canvas.getGraphicalElement('trendObjElems')[trendObjElemsCount])) {
            trendObjElem = canvas.addGraphicalElement('trendObjElems', trendZoneElem, true, trendObjElemsCount);
          }
          trendObjElem.show();
          toolTipController.enableToolTip(trendObjElem, trendObj.tooltext);
          trendObjElemsCount++;
        }

        if (trendObj.useMarker) {
          if (trendObj.showOnTop) {
            orient = POSITION_BOTTOM;
            y = 0;
          } else {
            orient = POSITION_TOP;
            y = height;
          }
          startAngle = pointOrientation[orient] * 90;

          marker = canvas.getGraphicalElement('marker') && canvas.getGraphicalElement('marker')[markerCount];
          marker = animationManager.setAnimation({
            el: marker || 'polypath',
            attr: {
              fill: trendObj.markerColor,
              stroke: trendObj.markerBorderColor,
              polypath: [3, xyObj.x, y, trendObj.markerRadius, startAngle, 0],
              'stroke-width': 1
            },
            component: dataset,
            container: colorGrp,
            label: 'final'
          });
          if (!(canvas.getGraphicalElement('marker') && canvas.getGraphicalElement('marker')[markerCount])) {
            marker = canvas.addGraphicalElement('marker', marker, true, markerCount);
          }
          marker.shadow({
            apply: showShadow
          });
          toolTipController.enableToolTip(marker, trendObj.tooltext);
          marker.show();
          markerCount++;
        }
      }
    }

    // Hiding the unused graphic trendpoint elements if it exists
    trendObjElems = canvas.getGraphicalElement('trendObjElems');
    if (trendObjElems) {
      while (trendObjElems[trendObjElemsCount]) {
        trendObjElems[trendObjElemsCount].hide();
        trendObjElemsCount++;
      }
    }
    trendZoneElems = canvas.getGraphicalElement('trendZoneElems');
    if (trendZoneElems) {
      while (trendZoneElems[trendZoneElemsCount]) {
        trendZoneElems[trendZoneElemsCount].hide();
        trendZoneElemsCount++;
      }
    }
    marker = canvas.getGraphicalElement('marker');
    if (marker) {
      while (marker[markerCount]) {
        marker[markerCount].hide();
        marker[markerCount].shadow(false);
        markerCount++;
      }
    }
  };

  /**
   * Configure thr dataset
   * @param {Object} pointerArrArg consists of pointers data
   */


  HlineargaugeDataset.prototype.configure = function configure(pointerArrArg) {
    this.trimData(pointerArrArg);
    this.config.pointerArr = pointerArrArg;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        jsonData = chart.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        colorM = dataSet.getFromEnv('color-manager'),
        datasetConfig = dataSet.config || (dataSet.config = {}),
        components = dataSet.components || (dataSet.components = {}),
        pointerArr = jsonData.pointers && jsonData.pointers.pointer,
        len = pointerArr && pointerArr.length || 1,
        dataObj,
        data,
        config,
        itemValue,
        i,
        setToolText,
        formatedVal,
        tooltipSepChar,
        setDisplayValue,
        sides,
        dataStore,
        pointOrientation = {
      top: 1,
      right: 0,
      left: 2,
      bottom: 3
    },
        gaugeType = 1,
        orient,
        pointerOnOpp,
        borderColor,
        borderAlpha,
        bgAlpha,
        valueAbovePointer,
        bgColor,
        baseStyle = chart.config.style,
        radius,
        pointerBorderColor,
        pointerBorderHoverAlpha,
        pointerBgHoverAlpha,
        pointerBgHoverColor,
        pointerBorderHoverColor,
        pointerBorderHoverThickness,
        pointerHoverRadius,
        borderWidth,
        showHoverEffect,
        hoverAttr,
        showBorderOnHover,
        showHoverAnimation,
        hasHoberFillMix,
        outAttr,
        hasBorderHoverMix,
        hoverAnimAttr,
        outAnimAttr,
        showBorder,
        fillColor,
        ticksBelowGauge,
        pointerSides,
        chartShowHoverEffect,
        pointerBorderThickness,
        showValue,
        label;

    datasetConfig.valuePadding = (0, _lib.pluckNumber)(chartAttrs.valuepadding, 2);
    datasetConfig.tooltipSepChar = tooltipSepChar = (0, _lib.pluck)(chartAttrs.tooltipsepchar, _lib.COMMASTRING);
    ticksBelowGauge = (0, _lib.pluckNumber)(chartAttrs.ticksbelowgauge, chartAttrs.ticksbelowgraph, 1);
    datasetConfig.axisPosition = ticksBelowGauge ? AXISPOSITION_BOTTOM : AXISPOSITION_TOP;
    datasetConfig.pointerOnOpp = pointerOnOpp = Number(!(0, _lib.pluckNumber)(chartAttrs.pointerontop, ticksBelowGauge, 1));
    datasetConfig.valueabovepointer = valueAbovePointer = (0, _lib.pluckNumber)(chartAttrs.valueabovepointer, !pointerOnOpp, 1);
    datasetConfig.valueInsideGauge = valueAbovePointer === pointerOnOpp ? 1 : 0;
    datasetConfig.showPointerShadow = (0, _lib.pluckNumber)(chartAttrs.showpointershadow, chartAttrs.showshadow, 1);
    datasetConfig.showTooltip = (0, _lib.pluckNumber)(chartAttrs.showtooltip, 1);
    datasetConfig.textDirection = chartAttrs.hasrtltext === '1' ? 'rtl' : _lib.BLANK;
    datasetConfig.showGaugeLabels = (0, _lib.pluckNumber)(chartAttrs.showgaugelabels, 1);
    datasetConfig.colorRangeStyle = {
      fontFamily: baseStyle.inCanfontFamily,
      fontSize: baseStyle.inCanfontSize,
      lineHeight: baseStyle.inCanLineHeight,
      color: baseStyle.inCancolor.replace(/^#?/, '#')
    };
    datasetConfig.showValue = (0, _lib.pluckNumber)(chartAttrs.showvalue, 1);
    datasetConfig.editMode = (0, _lib.pluckNumber)(chartAttrs.editmode, 0);
    datasetConfig.pointerSides = pointerSides = (0, _lib.pluckNumber)(chartAttrs.pointersides, 3);
    datasetConfig.pointerBorderThickness = pointerBorderThickness = (0, _lib.pluckNumber)(chartAttrs.pointerborderthickness);
    datasetConfig.showHoverEffect = chartShowHoverEffect = (0, _lib.pluckNumber)(chartAttrs.showhovereffect, chartAttrs.plothovereffect);
    datasetConfig.upperLimit = (0, _lib.pluckNumber)(chartAttrs.upperlimit);
    datasetConfig.lowerLimit = (0, _lib.pluckNumber)(chartAttrs.lowerlimit);

    if (gaugeType === 1) {
      // horizontal gauge; left to right;
      orient = pointerOnOpp ? POSITION_TOP : POSITION_BOTTOM;
    } else if (gaugeType === 2) {
      // vertical gauge; top to bottom;
      orient = pointerOnOpp ? 'left' : 'right';
    } else if (gaugeType === 3) {
      // horizontal linear gauge; right to left;
      orient = pointerOnOpp ? POSITION_TOP : POSITION_BOTTOM;
    } else {
      // vertical linear gauge; bottom to top;
      orient = pointerOnOpp ? 'left' : 'right';
    }

    datasetConfig.startAngle = pointOrientation[orient] * 90;
    dataStore = components.data || (components.data = []);

    for (i = 0; i < len; i++) {
      data = dataStore[i] || (components.data[i] = {});
      config = data.config || (data.config = {});
      dataObj = pointerArr && pointerArr[i] || {};
      config.itemValue = itemValue = numberFormatter.getCleanValue(dataObj.value);
      config.formatedVal = formatedVal = numberFormatter.dataLabels(itemValue);
      config.setDisplayValue = setDisplayValue = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(dataObj.displayvalue));
      config.setToolText = setToolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(dataObj.tooltext));
      config.id = (0, _lib.pluck)(dataObj.id, 'pointer_' + i);
      config.showHoverEffect = showHoverEffect = (0, _lib.pluckNumber)(dataObj.showhovereffect, chartShowHoverEffect);
      config.showBorder = showBorder = (0, _lib.pluckNumber)(dataObj.showborder, chartAttrs.showplotborder, 1);
      config.borderWidth = borderWidth = showBorder ? (0, _lib.pluckNumber)(dataObj.borderthickness, pointerBorderThickness) : 0;
      config.showValue = showValue = (0, _lib.pluckNumber)(dataObj.showvalue, datasetConfig.showValue);

      // create the displayvalue
      if (!showValue) {
        config.displayValue = BLANKSTRING;
      } else if (setDisplayValue !== UNDEF) {
        config.displayValue = setDisplayValue;
        config.isLabelString = true;
      } else {
        // determine the dispalay value then
        config.displayValue = (0, _lib.getValidValue)(formatedVal, _lib.BLANK);
      }

      config.sides = sides = (0, _lib.pluckNumber)(dataObj.sides, pointerSides);
      if (sides < 3) {
        config.sides = 3;
      }
      config.radius = radius = (0, _lib.pluckNumber)(dataObj.radius, chartAttrs.pointerradius, 10);

      // create the tooltext
      if (setToolText !== UNDEF) {
        config.toolText = (0, _lib.parseTooltext)(setToolText, [1, 2], {
          formattedValue: formatedVal
        }, dataObj, chartAttrs);
        config.isTooltextString = true;
      } else {
        // determine the dispalay value then
        config.toolText = formatedVal === null ? false : label !== UNDEF ? label + tooltipSepChar + formatedVal : formatedVal;
      }

      // Latter used in real time draw
      config.tempToolText = config.toolText;

      config.bgAlpha = bgAlpha = (0, _lib.pluckNumber)(dataObj.alpha, dataObj.bgalpha, chartAttrs.pointerbgalpha, 100);
      config.bgColor = bgColor = (0, _lib.pluck)(dataObj.color, dataObj.bgcolor, chartAttrs.pointerbgcolor, chartAttrs.pointercolor, colorM.getColor('pointerBgColor'));
      config.fillColor = fillColor = (0, _lib.convertColor)(bgColor, bgAlpha);
      config.showBorder = (0, _lib.pluckNumber)(dataObj.showborder, chartAttrs.showplotborder, 1);
      config.borderAlpha = borderAlpha = (0, _lib.pluckNumber)(dataObj.borderalpha, chartAttrs.pointerborderalpha, 100);
      config.borderColor = borderColor = (0, _lib.pluck)(dataObj.bordercolor, chartAttrs.pointerbordercolor, colorM.getColor('pointerBorderColor'));
      config.pointerBorderColor = pointerBorderColor = (0, _lib.convertColor)(borderColor, borderAlpha);
      config.dataLink = (0, _lib.getValidValue)(dataObj.link);
      config.editMode = (0, _lib.pluckNumber)(dataObj.editmode, datasetConfig.editMode);

      if (showHoverEffect !== 0 && (showHoverEffect || dataObj.bghovercolor || chartAttrs.pointerbghovercolor || chartAttrs.plotfillhovercolor || dataObj.bghoveralpha || chartAttrs.pointerbghoveralpha || chartAttrs.plotfillhoveralpha || dataObj.bghoveralpha === 0 || chartAttrs.pointerbghoveralpha === 0 || dataObj.showborderonhover || chartAttrs.showborderonhover || dataObj.showborderonhover === 0 || chartAttrs.showborderonhover === 0 || dataObj.borderhoverthickness || chartAttrs.pointerborderhoverthickness || dataObj.borderhoverthickness === 0 || chartAttrs.pointerborderhoverthickness === 0 || dataObj.borderhovercolor || chartAttrs.pointerborderhovercolor || dataObj.borderhoveralpha || chartAttrs.pointerborderhoveralpha || dataObj.borderhoveralpha === 0 || chartAttrs.pointerborderhoveralpha === 0 || dataObj.hoverradius || chartAttrs.pointerhoverradius || dataObj.hoverradius === 0 || chartAttrs.pointerhoverradius === 0)) {
        showHoverEffect = true;
        pointerBgHoverColor = (0, _lib.pluck)(dataObj.bghovercolor, chartAttrs.pointerbghovercolor, chartAttrs.plotfillhovercolor, FILLMIXDARK10);
        pointerBgHoverAlpha = (0, _lib.pluckNumber)(dataObj.bghoveralpha, chartAttrs.pointerbghoveralpha, chartAttrs.plotfillhoveralpha);
        showBorderOnHover = (0, _lib.pluckNumber)(dataObj.showborderonhover, chartAttrs.showborderonhover);
        if (showBorderOnHover === UNDEF) {
          if (dataObj.borderhoverthickness || dataObj.borderhoverthickness === 0 || dataObj.borderhovercolor || dataObj.borderhoveralpha || dataObj.borderhoveralpha === 0) {
            showBorderOnHover = 1;
          } else {
            showBorderOnHover = showBorder;
          }
        }
        pointerBorderHoverColor = (0, _lib.pluck)(dataObj.borderhovercolor, chartAttrs.pointerborderhovercolor, FILLMIXDARK10);
        pointerBorderHoverAlpha = (0, _lib.pluckNumber)(dataObj.borderhoveralpha, chartAttrs.pointerborderhoveralpha);
        pointerBorderHoverThickness = showBorderOnHover ? (0, _lib.pluckNumber)(dataObj.borderhoverthickness, chartAttrs.pointerborderhoverthickness, borderWidth || 1) : 0;
        pointerHoverRadius = (0, _lib.pluckNumber)(dataObj.hoverradius, chartAttrs.pointerhoverradius, radius + 2);
        showHoverAnimation = !!(0, _lib.pluckNumber)(dataObj.showhoveranimation, chartAttrs.showhoveranimation, 1);
        config.hoverAttr = hoverAttr = {};
        config.outAttr = outAttr = {};
        if (borderWidth !== pointerBorderHoverThickness) {
          hoverAttr['stroke-width'] = pointerBorderHoverThickness;
          outAttr['stroke-width'] = borderWidth;
        }
        outAttr.fill = fillColor;
        hasHoberFillMix = /\{/.test(pointerBgHoverColor);
        pointerBgHoverColor = hasHoberFillMix ? colorM.parseColorMix(bgColor, pointerBgHoverColor)[0] : pointerBgHoverColor;
        hoverAttr.fill = (0, _lib.convertColor)(pointerBgHoverColor, (0, _lib.pluckNumber)(pointerBgHoverAlpha, bgAlpha));
        if (pointerBorderHoverThickness) {
          outAttr.stroke = pointerBorderColor;
          hasBorderHoverMix = /\{/.test(pointerBorderHoverColor);
          hoverAttr.stroke = (0, _lib.convertColor)(hasBorderHoverMix ? colorM.parseColorMix(borderColor, pointerBorderHoverColor)[0] : pointerBorderHoverColor, (0, _lib.pluckNumber)(pointerBorderHoverAlpha, borderAlpha));
        }

        if (pointerHoverRadius) {
          if (showHoverAnimation) {
            hoverAnimAttr = {
              r: pointerHoverRadius
            };
            outAnimAttr = {
              r: radius
            };
          } else {
            hoverAttr.r = pointerHoverRadius;
            outAttr.r = radius;
          }
        }
      }
      config.rolloverProperties = {
        enabled: showHoverEffect,
        hoverAttr: hoverAttr,
        hoverAnimAttr: hoverAnimAttr,
        outAttr: outAttr,
        outAnimAttr: outAnimAttr
      };
    }
  };

  /**
   * Trim the extra data during update
   * @param {Object} pointers consists of new pointers data
   */


  HlineargaugeDataset.prototype.trimData = function trimData(pointers) {
    var dataSet = this,
        prevPointers,
        currPointers;

    prevPointers = dataSet.config.pointerArr && dataSet.config.pointerArr.pointer && dataSet.config.pointerArr.pointer.length;
    currPointers = pointers && pointers.pointer && pointers.pointer.length || 0;

    if (prevPointers > currPointers) {
      dataSet.removeData(prevPointers - currPointers);
    }
  };

  /**
   * Manage space for pointer values
   * @param {number} availableHeight height which can be used
   * @return {Object} returns dimension used (top, bottom)
   */


  HlineargaugeDataset.prototype._manageSpace = function _manageSpace(availableHeight) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        components = dataSet.components,
        chartConfig = chart.config,
        datasetConfig = dataSet.config,
        smartLabel = dataSet.getFromEnv('smartLabel'),
        canvasWidth = chartConfig.canvasWidth,
        smartDataLabel,
        extraSpace,
        style = chartConfig.dataLabelStyle,
        trendStyle = chartConfig.style.trendStyle,
        jsonData = chart.getFromEnv('dataSource'),
        trendArray = jsonData.trendpoints && jsonData.trendpoints.point,
        lineHeight = (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12),
        maxAllowedHeight = availableHeight,
        datasetValuePadding = datasetConfig.valuePadding,
        valueInsideGauge = datasetConfig.valueInsideGauge,
        valuePaddingWithRadius,
        heightUsed = 0,
        heightUsedBottom = 0,
        heightUsedTop = 0,
        valuePadding = 0,
        trendPadding = 0,
        heightReducedBottom = 0,
        heightReducedTop = 0,
        trendPointConfig,
        point,
        trendPaddingWithRadius,
        tickDimension = dataSet.getFromEnv('scale').config.spaceTaken,
        i = 0,
        len = dataSet.config.pointerArr && dataSet.config.pointerArr.pointer && dataSet.config.pointerArr.pointer.length,
        pointerOnOpp = datasetConfig.pointerOnOpp,
        config,
        data = components.data;

    trendArray && chart._configueTrendPoints();
    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    smartLabel.setStyle(style);
    for (; i < len; i += 1) {
      config = data[i].config;
      // Add pointer radius in value-padding
      valuePaddingWithRadius = datasetValuePadding + config.radius * (config.sides <= 3 ? 0.5 : config.sides % 2 ? 1.1 - 1 / config.sides : 1);
      valuePadding = Math.max(valuePadding, valuePaddingWithRadius);

      if (config.showValue && config.displayValue !== BLANKSTRING) {
        if (config.isLabelString) {
          smartDataLabel = smartLabel.getSmartText(config.displayValue, canvasWidth, maxAllowedHeight - valuePadding);
          config.displayValue = smartDataLabel.text;
          smartDataLabel.tooltext && (config.originalText = smartDataLabel.tooltext);
        } else {
          smartDataLabel = smartLabel.getOriSize(config.displayValue);
        }
        // special fix for space string
        /** @todo will be removed when smartLabel will be able to handle it */
        if (config.displayValue === _lib.BLANK) {
          smartDataLabel = {
            height: lineHeight
          };
        }
      }

      if (smartDataLabel && smartDataLabel.height > 0 && !valueInsideGauge) {
        heightUsed = smartDataLabel.height + valuePaddingWithRadius;
      } else {
        heightUsed = valuePaddingWithRadius;
      }
      if (heightUsed > maxAllowedHeight) {
        extraSpace = heightUsed - maxAllowedHeight;
        valuePaddingWithRadius = extraSpace < valuePaddingWithRadius ? valuePaddingWithRadius - extraSpace : 0;
        heightUsed = maxAllowedHeight;
      }
      if (pointerOnOpp) {
        if (datasetConfig.axisPosition === AXISPOSITION_BOTTOM) {
          heightReducedBottom = Math.max(tickDimension.bottom, heightReducedBottom);
          heightUsed = Math.max(tickDimension.bottom, heightUsed);
        }

        heightUsedBottom = Math.max(heightUsedBottom, heightUsed);
      } else {
        if (datasetConfig.axisPosition === AXISPOSITION_TOP) {
          heightReducedTop = Math.max(tickDimension.top, heightReducedTop);
          heightUsed = Math.max(tickDimension.top, heightUsed);
        }

        heightUsedTop = Math.max(heightUsed, heightUsedTop);
      }
      datasetConfig.align = _lib.POSITION_CENTER;
    }
    datasetConfig.currentValuePadding = valuePadding;

    smartLabel.setStyle(trendStyle);
    if (trendArray) {
      trendPointConfig = chartConfig.trendPointConfig;
      for (i = 0, len = trendPointConfig.length; i < len; i += 1) {
        point = trendPointConfig[i];
        if (point && point.displayValue !== BLANKSTRING) {
          // Add pointer radius in value-padding
          trendPaddingWithRadius = datasetValuePadding + point.markerRadius * 0.5;

          trendPadding = Math.max(trendPaddingWithRadius, trendPadding);

          smartDataLabel = smartLabel.getOriSize(point.displayValue);

          if (smartDataLabel.height > 0) {
            heightUsed = smartDataLabel.height + trendPaddingWithRadius;
          }
          if (heightUsed > maxAllowedHeight) {
            extraSpace = heightUsed - maxAllowedHeight;
            trendPaddingWithRadius = extraSpace < trendPaddingWithRadius ? trendPaddingWithRadius - extraSpace : 0;
            heightUsed = maxAllowedHeight;
          }
          if (point.showOnTop) {
            if (datasetConfig.axisPosition === AXISPOSITION_TOP) {
              heightReducedTop = Math.max(tickDimension.top, heightReducedTop);
              heightUsed = Math.max(tickDimension.top, heightUsed);
            }

            heightUsedTop = Math.max(heightUsedTop, heightUsed);
          } else {
            if (datasetConfig.axisPosition === AXISPOSITION_BOTTOM) {
              heightReducedBottom = Math.max(tickDimension.bottom, heightReducedBottom);
              heightUsed = Math.max(tickDimension.bottom, heightUsed);
            }

            heightUsedBottom = Math.max(heightUsed, heightUsedBottom);
          }
        }
      }
      datasetConfig.currentTrendPadding = trendPadding;
    }

    return {
      top: heightUsedTop - heightReducedTop,
      bottom: heightUsedBottom - heightReducedBottom
    };
  };

  /**
   * Draws the pointer plots
   * @param {Object} animation animation object to check whether to animate
   * @param {boolean} isRTupdate check whether it is real time update or general update
   */


  HlineargaugeDataset.prototype.draw = function draw(animation, isRTupdate) {
    var dataSet = this,
        idMap = dataSet.config.idMap,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,

    // chartGraphics = chart.graphics,
    dataLabelsGroup = chart.getChildContainer('datalabelsGroup'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        wGroup = dataSet.getGraphicalElement('tempGroup'),
        scale = dataSet.getFromEnv('scale'),
        animationManager = dataSet.getFromEnv('animationManager'),
        chartData = dataSet.config.pointerArr && dataSet.config.pointerArr.pointer,
        width = chartConfig.canvasWidth,

    // pointer = chartGraphics.pointer,
    height = chartConfig.canvasHeight,
        datasetConfig = dataSet.config,
        pointerY = datasetConfig.pointerOnOpp ? height : 0,
        showPointerShadow = datasetConfig.showPointerShadow,
        showTooltip = datasetConfig.showTooltip,
        min = scale.config.axisRange.min,
        max = scale.config.axisRange.max,
        pxValueFactor = (max - min) / width,
        i = chartData && chartData.length || 1,
        config,
        prevData,
        shadowObj,
        startAngle,
        components = dataSet.components,
        data = components.data,

    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = (animation || animationObj).duration,
    stubEvent = {
      pageX: 0,
      pageY: 0
    },
        pointerDragStart = function pointerDragStart(e) {
      var point = this,
          x = e.data[0];
      if (point.editMode === false) {
        return;
      }

      prevData = chart._getDataJSON();
      point.dragStartX = x;
    },
        pointerDragEnd = function pointerDragEnd() {
      var point = this,
          config = point.config,
          jsVars,
          chartObj = chart.getFromEnv('chartInstance');

      if (point.config.editMode === false) {
        return;
      }

      jsVars = chartObj && chartObj.jsVars;
      jsVars && (jsVars._rtLastUpdatedData = chart._getDataJSON());

      chart.fireChartInstanceEvent('RealTimeUpdateComplete', {
        data: '&value=' + config.updatedValStr,
        updateObject: { values: [config.updatedValStr] },
        prevData: prevData.values,
        source: 'editMode',
        url: null
      });

      try {
        win.FC_ChartUpdated && win.FC_ChartUpdated(chartObj.id);
      } catch (err) {
        setTimeout(function () {
          throw err;
        }, 1);
      }

      if (datasetConfig.showTooltip) {
        toolTipController.enableToolTip(pointer, config.toolText);
      } else {
        toolTipController.disableToolTip(pointer);
      }
    },
        pointerOnDrag = function pointerOnDrag(event) {
      var point = this,
          data = event.data,
          x = data[2],
          touchEvent = hasTouch && getTouchEvent(event) || stubEvent,
          scaleMinMax = scale.getLimit(),
          scaleMin = scaleMinMax.min,
          scaleMax = scaleMinMax.max,
          pointVal = (0, _lib.pluckNumber)(point.itemValue, scaleMin),
          diffX = point.dragStartX - x,
          newVal = pointVal - diffX * pxValueFactor,
          i = 0,
          values = [],
          tempValues = [];

      if (point.editMode === false) {
        return;
      }

      // Flag set for setting click link in edit mode.
      point.drag = true;

      if (newVal < scaleMin) {
        newVal = scaleMin;
      } else if (newVal > scaleMax) {
        newVal = scaleMax;
      }

      for (; i < point.index; i += 1) {
        values.push(_lib.BLANK);
        tempValues.push(_lib.BLANK);
      }
      values.push({ value: newVal });
      tempValues.push(newVal);

      if (pointVal !== newVal && dataSet.updateData({ data: values }, { duration: 0 })) {
        point.updatedValStr = tempValues.join('|');
        point.dragStartX = x || event.pageX || touchEvent.pageX;
      }
    },
        pointer,
        graphics,
        link,
        rolloverProperties,
        eventArgs,
        clickHandler,
        hoverRollOver,
        hoverRollOut,
        pool = dataSet.pool;

    if (animation && animation.duration === 0) {
      chart.state = 'noAnim';
    }
    if (!wGroup) {
      wGroup = dataSet.addGraphicalElement('tempGroup', animationManager.setAnimation({
        el: 'group',
        state: chart.state,
        attr: {
          opacity: 1,
          name: 'tempGroup'
        },
        container: dataLabelsGroup,
        component: dataSet
      }));
      wGroup.trackTooltip(true);
    }

    clickHandler = function clickHandler(graphicData) {
      var ele = this,
          index = ele.data(EVENTARGS).index,
          config = data[index].config;

      if (config.drag === true) {
        config.drag = false;
        return;
      }

      _lib.plotEventHandler.call(ele, chart, graphicData);
    };

    hoverRollOver = function hoverRollOver(data) {
      var ele = this,
          rolloverProperties = ele.data('rolloverProperties');
      if (rolloverProperties.enabled) {
        ele.attr(rolloverProperties.hoverAttr);
        if (rolloverProperties.hoverAnimAttr) {
          ele.animate(rolloverProperties.hoverAnimAttr, 100, ANIM_EFFECT);
        }
      }
      _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
    };

    hoverRollOut = function hoverRollOut(data) {
      var ele = this,
          rolloverProperties = ele.data('rolloverProperties');
      if (rolloverProperties.enabled) {
        ele.attr(rolloverProperties.outAttr);
        if (rolloverProperties.outAnimAttr) {
          ele.animate(rolloverProperties.outAnimAttr, 100, ANIM_EFFECT);
        }
      }
      _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
    };
    while (i--) {
      if (!data[i]) {
        continue;
      }
      config = data[i].config;
      graphics = data[i].graphics || (data[i].graphics = {});
      rolloverProperties = config.rolloverProperties || {};
      startAngle = datasetConfig.startAngle;
      idMap[config.id] = {
        index: i,
        config: config
      };
      /**
                 * @note
                 * The slight increment in starting angle is done to avoid getting
                 * angles in multiples of 90 degree (default starting angle is 270).
                 * Issue is like, cos(270 deg) is not zero but in the range of e-16,
                 * when VML silently fails to render.
                 */
      startAngle += 0.2;

      shadowObj = showPointerShadow ? {
        opacity: Math.max(config.bgAlpha, config.borderAlpha) / 100
      } : false;

      link = config.dataLink;
      eventArgs = {
        index: i,
        link: link,
        value: config.itemValue,
        displayValue: config.displayValue,
        toolText: config.toolText
      };

      pointer = graphics.pointer;
      pointer = animationManager.setAnimation({
        el: pointer || pool && pool.pointer[0] || 'polypath',
        attr: {
          polypath: [config.sides, width * ((0, _lib.pluckNumber)(config.itemValue, min) - min) / (max - min), pointerY || 0, config.radius, startAngle, 0],
          r: config.radius,
          fill: config.fillColor,
          stroke: config.pointerBorderColor,
          ishot: true,
          'stroke-width': config.borderWidth
        },
        css: link || config.editMode ? {
          cursor: POINTER,
          '_cursor': 'hand'
        } : {
          cursor: _lib.BLANK,
          '_cursor': _lib.BLANK
        },
        label: 'pointers',
        container: wGroup,
        component: dataSet
      });
      if (!graphics.pointer) {
        if (pool && pool.pointer[0]) {
          graphics.pointer = pointer;
          pool.pointer.splice(0, 1);
        } else {
          graphics.pointer = pointer.click(clickHandler).hover(hoverRollOver, hoverRollOut);
        }
        pointer.show();
        pointer.drag(pointerOnDrag, pointerDragStart, pointerDragEnd, config, config, data[i]);
      }

      if (!isRTupdate) {
        pointer.shadow(!!shadowObj, shadowObj && shadowObj.opacity).data(EVENTARGS, eventArgs).data('rolloverProperties', rolloverProperties);

        config._startAngle = startAngle;

        if (config.editMode) {
          config.index = i;
          config.editMode = true;
        } else {
          config.editMode = false;
        }
        // pointer.attr({ishot: true});
      }
      if (showTooltip) {
        // pointer.tooltip(config.toolText, null, null, true);
        toolTipController.enableToolTip(pointer, config.toolText);
      } else {
        toolTipController.disableToolTip(pointer);
      }
    }
    dataSet._drawBackground();
    isRTupdate ? dataSet.drawPointerValues(animation) : dataSet._drawWidgetLabel(animation);
  };

  /**
   * Alters the data of the dataset and stores the data to be removed in a different array
   * @param {number} numbers number of data to be removed
   */


  HlineargaugeDataset.prototype.removeData = function removeData(numbers) {
    var dataSet = this,
        data = dataSet.components.data;

    dataSet.removeDataArr || (dataSet.removeDataArr = []);
    dataSet.removeDataArr = dataSet.removeDataArr.concat(data.splice(0, numbers));
  };

  /**
   * draws Widget background(color range) values, trend point values and calls drawPointerValues
   * @param {Object} animation animation object to check whether to animate
   */


  HlineargaugeDataset.prototype._drawWidgetLabel = function _drawWidgetLabel(animation) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        chartConfig = chart.config,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        scale = dataSet.getFromEnv('scale'),
        animationManager = dataSet.getFromEnv('animationManager'),
        canvas = chart.getChildren('canvas')[0],
        dataLabelsGroup = chart.getChildContainer('datalabelsGroup'),
        dataLabelContainer = canvas.getGraphicalElement('dataLabelContainer'),
        min = scale.config.axisRange.min,
        max = scale.config.axisRange.max,
        datasetConfig = dataSet.config,
        textDirection = datasetConfig.textDirection,
        gaugeType = 1,
        // series.gaugeType,
    colorRange = dataSet.getFromEnv('colorRange'),
        jsonData = chart.getFromEnv('dataSource'),
        colorArr = jsonData.colorrange && colorRange && colorRange.getColorRangeArr(min, max),
        colorRangeStyle = datasetConfig.colorRangeStyle || {},
        showvalue = datasetConfig.showvalue,
        colorObj,
        trendArr = chart.getFromEnv('dataSource').trendpoints && chart.getFromEnv('dataSource').trendpoints.point,
        trendPointConfig = chartConfig.trendPointConfig,
        width = chartConfig.canvasWidth,
        height = chartConfig.canvasHeight,
        marginRight = chartConfig.marginRight,
        pointerOnOpp = datasetConfig.pointerOnOpp,
        valueInsideGauge = datasetConfig.valueInsideGauge,
        showGaugeLabels = datasetConfig.showGaugeLabels,
        style = chartConfig.dataLabelStyle,

    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = animationObj.duration,
    colorArrLabel,
        maxWidth,
        truncatedWidth,
        i,
        length,
        getPointerLabelXY,
        getColorLabelXY,
        labelXY,
        nextPointer,
        nextOriText,
        nextSmartText,
        nextXY,
        labelGap,
        isSameLevel = false,
        j,
        labelX,
        labelY,
        smartLabel = dataSet.getFromEnv('smartLabel'),
        smartText,
        testStrObj,
        minWidth,
        // labelX, labelY,
    lineHeight = (0, _lib.pluckNumber)(parseInt(style.fontHeight, 10), parseInt(style.lineHeight, 10), 12),
        labelPadding = datasetConfig.currentValuePadding + lineHeight * 0.5,
        hPad = 4,
        innerLabelPadding = 4,
        oppTrendLabelPadding = datasetConfig.currentTrendPadding + lineHeight * 0.5,
        tempx,
        attr,
        trendObj,
        trendLabelPadding = datasetConfig.currentTrendPadding,
        css = {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle
    },
        dataArr = dataSet.config.pointerArr && dataSet.config.pointerArr.pointer,
        config,
        components = dataSet.components,
        data = components.data,
        value,
        valueCont,
        trendTextElem;

    dataLabelContainer = animationManager.setAnimation({
      el: dataLabelContainer || 'group',
      attr: {
        name: 'label-container'
      },
      container: dataLabelsGroup,
      component: dataSet
    });
    dataLabelsGroup = animationManager.setAnimation({
      el: dataLabelsGroup || 'group',
      state: 'initial',
      attr: {
        transform: ['T', chartConfig.canvasLeft, chartConfig.canvasTop]
      },
      dom: 'datalabel',
      component: dataSet
    });

    !canvas.getGraphicalElement('dataLabelContainer') && (dataLabelContainer = canvas.addGraphicalElement('dataLabelContainer', dataLabelContainer));

    // tempLabelPadding = labelPadding - (lineHeight / 4);
    // if label is below the pointer then we need to add extra pdding to compensate for lineheight.
    labelPadding = valueInsideGauge === pointerOnOpp ? labelPadding - lineHeight / 4 : labelPadding + lineHeight / 4;
    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    smartLabel.setStyle(css);
    testStrObj = smartLabel.getOriSize('W...');
    minWidth = testStrObj.width;
    colorRangeStyle.fontWeight = 'normal';

    if (gaugeType === 1) {
      // horizontal gauge; left to right;
      getPointerLabelXY = dataSet.getPointerLabelXY = function (value, isInside, pointerOnOpp, xsHeight, xsWidth) {
        var y;

        if (pointerOnOpp) {
          y = isInside ? height - xsHeight - labelPadding : height + labelPadding;
        } else {
          y = isInside ? labelPadding : -(labelPadding + xsHeight);
        }

        tempx = (value - min) * width / (max - min);
        tempx + xsWidth > width + marginRight && (tempx = width - xsWidth + marginRight);

        return {
          x: tempx,
          y: y,
          align: POSITION_MIDDLE
        };
      };

      getColorLabelXY = function getColorLabelXY(minvalue, maxvalue) {
        return {
          x: (minvalue - min + (maxvalue - minvalue) / 2) * width / (max - min),
          y: height / 2,
          width: (maxvalue - minvalue) * width / (max - min),
          height: height
        };
      };
    } else if (gaugeType === 2) {
      // vertical gauge; top to bottom;
      getPointerLabelXY = dataSet.getPointerLabelXY = function (value, isInside, pointerOnOpp) {
        var x, align;
        if (pointerOnOpp) {
          if (isInside) {
            align = _lib.POSITION_RIGHT;
            x = width - labelPadding;
          } else {
            align = _lib.POSITION_LEFT;
            x = width + labelPadding;
          }
        } else {
          if (isInside) {
            align = _lib.POSITION_LEFT;
            x = labelPadding;
          } else {
            align = _lib.POSITION_RIGHT;
            x = -labelPadding;
          }
        }
        return {
          x: x,
          y: value * height / (max - min),
          align: align
        };
      };

      getColorLabelXY = function getColorLabelXY(minvalue, maxvalue) {
        return {
          y: (minvalue - min + (maxvalue - minvalue) / 2) * height / (max - min),
          x: width / 2,
          height: (maxvalue - minvalue) * height / (max - min),
          width: width
        };
      };
    } else if (gaugeType === 3) {
      // horizontal linear gauge; right to left;
      getPointerLabelXY = dataSet.getPointerLabelXY = function (value, isInside, pointerOnOpp) {
        var y;
        if (pointerOnOpp) {
          y = isInside ? height - labelPadding : height + labelPadding;
        } else {
          y = isInside ? labelPadding : -labelPadding;
        }
        return {
          x: width - (value - min) * width / (max - min),
          y: y,
          align: POSITION_MIDDLE
        };
      };

      getColorLabelXY = function getColorLabelXY(minvalue, maxvalue) {
        return {
          x: width - (minvalue - min + (maxvalue - minvalue) / 2) * width / (max - min),
          y: height / 2,
          width: (maxvalue - minvalue) * width / (max - min),
          height: height
        };
      };
    } else {
      // vertical linear gauge; bottom to top;
      getPointerLabelXY = dataSet.getPointerLabelXY = function (value, isInside, pointerOnOpp) {
        var x, align;
        if (pointerOnOpp) {
          if (isInside) {
            align = _lib.POSITION_RIGHT;
            x = width - labelPadding;
          } else {
            align = _lib.POSITION_LEFT;
            x = width + labelPadding;
          }
        } else {
          if (isInside) {
            align = _lib.POSITION_LEFT;
            x = labelPadding;
          } else {
            align = _lib.POSITION_RIGHT;
            x = -labelPadding;
          }
        }
        return {
          x: x,
          y: height - value * height / (max - min),
          align: align
        };
      };

      getColorLabelXY = function getColorLabelXY(minvalue, maxvalue) {
        return {
          y: height - (minvalue - min + (maxvalue - minvalue) / 2) * height / (max - min),
          x: width / 2,
          height: (maxvalue - minvalue) * height / (max - min),
          width: width
        };
      };
    }

    if (dataArr && dataArr.length) {
      i = dataArr.length;
      while (i--) {
        if (!data[i]) {
          continue;
        }
        config = data[i].config;

        if (showvalue !== 0 && config.displayValue !== BLANKSTRING) {
          smartText = smartLabel.getOriSize(config.displayValue);
          if (config.setWidth) {
            smartText = smartLabel.getSmartText(config.displayValue, config.setWidth, smartText.height, true);
          }

          labelXY = dataSet.getPointerLabelXY(config.itemValue, valueInsideGauge, pointerOnOpp, smartText.height / 2, smartText.width / 2);

          if (config.isLabelString) {
            isSameLevel = false;
            j = 1;
            while (!isSameLevel) {
              nextPointer = dataArr[i + j];
              if (!nextPointer) {
                break;
              }

              if (nextPointer.isLabelString) {
                isSameLevel = true;
              } else {
                j += 1;
              }
            }

            if (nextPointer) {
              nextOriText = smartLabel.getOriSize(nextPointer.displayValue);
              nextXY = getPointerLabelXY(nextPointer.y, valueInsideGauge, pointerOnOpp, nextOriText.height / 2);

              // calculate the overlapping area's width
              labelGap = nextXY.x - nextOriText.width / 2 - (labelXY.x + smartText.width / 2);
              // get the max width i.e the distance between the pointers
              maxWidth = nextXY.x - labelXY.x;
              if (labelGap < 0) {
                // calculate the truncated width using labelGap (should be -ve)
                truncatedWidth = smartText.width + labelGap;

                // the truncated width cannot be more than max width.
                if (truncatedWidth > maxWidth) {
                  config.setWidth = truncatedWidth = maxWidth;
                }
                if (truncatedWidth > minWidth) {
                  if (config.setWidth && config.setWidth <= truncatedWidth) {
                    nextSmartText = smartLabel.getSmartText(config.displayValue, config.setWidth, smartText.height, true);
                    config.displayValue = nextSmartText.text;
                    nextSmartText.tooltext && (config.originalText = nextSmartText.tooltext);
                  } else {
                    nextSmartText = smartLabel.getSmartText(config.displayValue, truncatedWidth, smartText.height, true);
                    config.displayValue = nextSmartText.text;
                    nextSmartText.tooltext && (config.originalText = nextSmartText.tooltext);
                  }
                } else {
                  nextSmartText = smartLabel.getSmartText(config.displayValue, minWidth, smartText.height, true);
                  config.displayValue = nextSmartText.text;
                  nextSmartText.tooltext && (config.originalText = nextSmartText.tooltext);
                  // since the labelGap was not split equally we have to recalculate
                  // labelGap so that the next label will adjust accordingly.
                  labelGap = labelGap * 2 + minWidth - hPad;
                }

                config.setWidth = null;

                truncatedWidth = nextOriText.width + labelGap - hPad;
                if (truncatedWidth > maxWidth) {
                  nextPointer.setWidth = maxWidth;
                } else if (truncatedWidth > minWidth) {
                  nextPointer.setWidth = truncatedWidth;
                } else {
                  nextPointer.setWidth = minWidth;
                }
              }
            }

            if (config.setWidth) {
              nextSmartText = smartLabel.getSmartText(config.displayValue, config.setWidth, smartText.height, true);
              config.displayValue = nextSmartText.text;
              nextSmartText.tooltext && (config.originalText = nextSmartText.tooltext);
              config.setWidth = null;
            }
          }
        }
      }
    }

    dataSet.drawPointerValues(animation);
    smartLabel.setStyle(colorRangeStyle);

    // Draw the colorRange labels
    if (colorArr && showGaugeLabels) {
      for (i = 0, length = colorArr.length; i < length; i += 1) {
        colorObj = colorArr[i];
        colorArrLabel = (0, _lib.pluck)(colorObj.label, colorObj.name);
        labelXY = getColorLabelXY(colorObj.minvalue, colorObj.maxvalue);
        if (labelXY.width - innerLabelPadding > minWidth && labelXY.height - innerLabelPadding > lineHeight) {
          smartText = smartLabel.getSmartText(colorArrLabel, labelXY.width - innerLabelPadding, labelXY.height - innerLabelPadding);
        } else {
          smartText = smartLabel.getSmartText(colorArrLabel, labelXY.width, labelXY.height);
        }

        attr = {
          'text-anchor': POSITION_MIDDLE,
          'vertical-align': POSITION_MIDDLE,
          x: labelXY.x,
          y: labelXY.y,
          direction: textDirection,
          fill: colorRangeStyle.color,
          text: smartText.text
        };
        valueCont = canvas.getGraphicalElement('colorRangeLabelsCont') && canvas.getGraphicalElement('colorRangeLabelsCont')[i];
        valueCont = animationManager.setAnimation({
          el: valueCont || 'group',
          attr: { name: 'color-range-label' },
          component: dataSet,
          container: dataLabelContainer,
          label: 'final'
        });
        value = canvas.getGraphicalElement('colorRangeLabels') && canvas.getGraphicalElement('colorRangeLabels')[i];
        value = animationManager.setAnimation({
          el: value || 'text',
          attr: attr,
          css: colorRangeStyle,
          component: dataSet,
          container: valueCont,
          label: 'final'
        });
        if (!(canvas.getGraphicalElement('colorRangeLabels') && canvas.getGraphicalElement('colorRangeLabels')[i])) {
          valueCont = canvas.addGraphicalElement('colorRangeLabelsCont', valueCont, true, i);
          value = canvas.addGraphicalElement('colorRangeLabels', value, true, i);
        } else {
          value.show().tooltip(smartText.tooltext);

          toolTipController.enableToolTip(value, smartText.tooltext);
        }
      }
    } else {
      // Setting i to 0 so that any previously existing trendlabels can be hidden.
      i = 0;
    }

    // Hiding the unused colorrangeLabels
    while (canvas.getGraphicalElement('colorRangeLabelsCont') && canvas.getGraphicalElement('colorRangeLabelsCont')[i]) {
      canvas.getGraphicalElement('colorRangeLabelsCont')[i].hide();
      i++;
    }

    // Drawing the display value of trend points
    if (trendArr) {
      for (i = 0, length = trendPointConfig.length; i < length; i += 1) {
        trendObj = trendPointConfig[i];
        trendObj.displayValue = (0, _lib.pluck)(trendObj.displayValue, numberFormatter.dataLabels(trendObj.startValue));
        smartLabel.setStyle(trendObj.style);
        lineHeight = smartLabel.getOriSize('Wg').height;
        smartText = smartLabel.getOriSize(trendObj.displayValue);
        labelXY = getPointerLabelXY(trendObj.startValue, 0, !trendObj.showOnTop);
        if (trendObj.setWidth) {
          smartText = smartLabel.getSmartText(trendObj.displayValue, trendObj.setWidth, smartText.height, true);
        }
        isSameLevel = false;
        j = 1;
        while (!isSameLevel) {
          nextPointer = trendArr[i + j];
          if (!nextPointer) {
            break;
          }

          if (nextPointer.showOnTop === trendObj.showOnTop) {
            isSameLevel = true;
          } else {
            j += 1;
          }
        }
        if (nextPointer) {
          nextOriText = smartLabel.getOriSize(nextPointer.displayValue);
          nextXY = getPointerLabelXY(nextPointer.startValue, 0, !nextPointer.showOnTop);

          // refer to the docs of pointer label drawing above.
          labelGap = nextXY.x - nextOriText.width / 2 - (labelXY.x + smartText.width / 2);
          if (labelGap < 0) {
            maxWidth = nextXY.x - labelXY.x;
            truncatedWidth = smartText.width + labelGap;
            if (truncatedWidth > maxWidth) {
              trendObj.setWidth = truncatedWidth = maxWidth;
            }
            if (truncatedWidth > minWidth) {
              if (trendObj.setWidth && trendObj.setWidth <= truncatedWidth) {
                smartText = smartLabel.getSmartText(trendObj.displayValue, trendObj.setWidth, smartText.height, true);
                trendObj.displayValue = smartText.text;
                smartText.tooltext && (trendObj.originalText = smartText.tooltext);
              } else {
                smartText = smartLabel.getSmartText(trendObj.displayValue, smartText.width + labelGap - hPad, smartText.height, true);
                trendObj.displayValue = smartText.text;
                smartText.tooltext && (trendObj.originalText = smartText.tooltext);
              }
            } else {
              smartText = smartLabel.getSmartText(trendObj.displayValue, minWidth, smartText.height, true);
              trendObj.displayValue = smartText.text;
              smartText.tooltext && (trendObj.originalText = smartText.tooltext);
              labelGap = labelGap * 2 + minWidth - hPad;
            }

            trendObj.setWidth = null;

            truncatedWidth = nextOriText.width + labelGap - hPad;
            if (truncatedWidth > maxWidth) {
              nextPointer.setWidth = maxWidth;
            } else if (truncatedWidth > minWidth) {
              nextPointer.setWidth = truncatedWidth;
            } else {
              nextPointer.setWidth = minWidth;
            }
          }
        }

        if (trendObj.setWidth) {
          smartText = smartLabel.getSmartText(trendObj.displayValue, trendObj.setWidth, smartText.height, true);
          trendObj.displayValue = smartText.text;
          smartText.tooltext && (trendObj.originalText = smartText.tooltext);
          trendObj.setWidth = null;
        }
        labelY = trendObj.showOnTop ? -(trendLabelPadding + smartText.height / 2) : height + oppTrendLabelPadding;
        labelX = trendObj.isTrendZone ? getColorLabelXY(trendObj.startValue, trendObj.endValue).x : labelXY.x;
        trendTextElem = canvas.getGraphicalElement('trendTextElems') && canvas.getGraphicalElement('trendTextElems')[i];
        trendTextElem = animationManager.setAnimation({
          el: trendTextElem || 'text',
          attr: {
            x: labelX,
            y: labelY,
            text: trendObj.displayValue,
            'text-anchor': textHAlign[labelXY.align],
            fill: (0, _lib.convertColor)(trendObj.textColor || colorRangeStyle.color),
            'font-weight': 'normal',
            direction: textDirection,
            opacity: 1,
            title: trendObj.originalText || _lib.BLANK
          },
          container: dataLabelContainer,
          component: dataSet,
          label: 'final'
        });
        if (!(canvas.getGraphicalElement('trendTextElems') && canvas.getGraphicalElement('trendTextElems')[i])) {
          trendTextElem = canvas.addGraphicalElement('trendTextElems', trendTextElem, true, i);
        }
        trendTextElem.show();
      }
    } else {
      // Setting i to 0 so that any previously existing trendlabels can be hidden.
      i = 0;
    }

    // Hiding the unused trendLabels
    while (canvas.getGraphicalElement('trendTextElems') && canvas.getGraphicalElement('trendTextElems')[i]) {
      canvas.getGraphicalElement('trendTextElems')[i].hide();
      i++;
    }
  };

  /**
   * Draw pointer values
   */


  HlineargaugeDataset.prototype.drawPointerValues = function drawPointerValues() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        dataLabelsGroup = chart.getChildContainer('datalabelsGroup'),
        data = dataSet.components.data,
        datasetConfig = dataSet.config,
        pointerOnOpp = datasetConfig.pointerOnOpp,
        valueInsideGauge = datasetConfig.valueInsideGauge,
        textDirection = datasetConfig.textDirection,
        showValue,
        animationManager = dataSet.getFromEnv('animationManager'),
        smartLabel = dataSet.getFromEnv('smartLabel'),
        chartData = dataSet.config.pointerArr && dataSet.config.pointerArr.pointer,
        style = chart.config.dataLabelStyle,
        i = chartData && chartData.length,
        config,
        pointerValue,
        pointerValueCont,

    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = (animation || animationObj).duration,
    chartConfig = chart.config,
        marginLeft = chartConfig.marginLeft,
        css = {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle
    },
        displayValue,
        labelXY,
        halfWidth,
        graphics,
        smartText,
        pool = dataSet.pool,
        attr,
        textCreated;

    if (chart.state === 'initial') {
      animationManager.setAnimation({
        state: 'initial',
        el: dataLabelsGroup,
        attr: { opacity: 1 },
        component: dataSet
      });
    }

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    while (i--) {
      if (!data[i]) {
        continue;
      }
      textCreated = false;
      graphics = data[i].graphics;
      config = data[i].config;
      displayValue = config.displayValue;
      showValue = config.showValue;

      if (showValue !== 0 && displayValue !== BLANKSTRING) {
        smartText = smartLabel.getOriSize(displayValue);
        halfWidth = smartText.width / 2;
        labelXY = dataSet.getPointerLabelXY(config.itemValue, valueInsideGauge, pointerOnOpp, smartText.height / 2, halfWidth);
        // Fix for long decimal numbers moving out of the canvas.
        halfWidth > marginLeft + labelXY.x && (labelXY.x = halfWidth - marginLeft);
        attr = {
          x: labelXY.x,
          y: labelXY.y,
          'text-anchor': textHAlign[labelXY.align],
          title: config.originalText || _lib.BLANK,
          text: displayValue,
          fill: style.color,
          direction: textDirection,
          'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
        };
        pointerValueCont = animationManager.setAnimation({
          el: graphics.pointerValueCont || pool && pool.pointerValueCont[0] || 'group',
          attr: { name: 'label-group' },
          container: dataLabelsGroup,
          component: dataSet,
          label: 'labelGroup'
        });
        pointerValue = animationManager.setAnimation({
          el: graphics.pointerValue || pool && pool.pointerValue[0] || 'text',
          attr: attr,
          css: css,
          container: pointerValueCont,
          component: dataSet,
          label: 'pointerValues'
        });
        if (!graphics.pointerValue) {
          if (pool && pool.pointerValue[0]) {
            pool.pointerValue.splice(0, 1);
            pool.pointerValueCont.splice(0, 1);
          } else {
            textCreated = true;
          }
        }

        graphics.pointerValue = pointerValue;
        graphics.pointerValueCont = pointerValueCont;

        // Applying attr from second time ownwards during update.
        if (!textCreated) {
          pointerValue.show();
        }
      } else {
        graphics.pointerValue && graphics.pointerValue.hide();
        graphics.pointerValueCont && graphics.pointerValueCont.hide();
      }
    }
  };

  /**
   * Sets axis limits
   * @return {Object} object consists of maximum and minimum limit
   */


  HlineargaugeDataset.prototype.getDataLimits = function getDataLimits() {
    var dataSet = this,
        config = dataSet.config,
        jsonData = dataSet.getFromEnv('chart').getFromEnv('dataSource'),
        pointerArr = dataSet.components.data || dataSet.config.pointerArr && dataSet.config.pointerArr.pointer || jsonData.dials && jsonData.dials.dial,
        colorRange = jsonData.colorrange,
        colorArr = colorRange && colorRange.color,
        length = pointerArr && pointerArr.length,
        i,
        pointerMinVal,
        pointerMaxVal,
        upperLimit = config.upperLimit,
        lowerLimit = config.lowerLimit,
        value,
        maxColorRangeVal,
        minColorRangeVal,
        max = -Infinity,
        min = +Infinity;

    // finding max min amongst the pointer value
    for (i = 0; i < length; i++) {
      value = pointerArr[i].value || pointerArr[i].config && pointerArr[i].config.itemValue;
      if (value === _lib.BLANK) {
        continue;
      }
      pointerMaxVal = max = mathMax(max, Number(value));
      pointerMinVal = min = mathMin(min, Number(value));
    }

    length = colorArr && colorArr.length;
    // finding max min amongst the color range value but it has a lower
    // priority than upperlimit and lowerlimit set by the user.
    for (i = 0; i < length; i++) {
      maxColorRangeVal = Number(colorArr[i].maxvalue);
      minColorRangeVal = Number(colorArr[i].minvalue);

      upperLimit && maxColorRangeVal > upperLimit && (maxColorRangeVal = upperLimit);
      lowerLimit && minColorRangeVal < lowerLimit && (minColorRangeVal = lowerLimit);

      max = mathMax(max, maxColorRangeVal);
      min = mathMin(min, minColorRangeVal);
    }

    return {
      forceMin: pointerMinVal !== min,
      forceMax: pointerMaxVal !== max,
      max: max,
      min: min
    };
  };
  /**
   * Function to update the hlinear data via drag mode or realTime update
   * @param {Object} updateObj data object to realTime update
   * @param {Object} updateAnimation animation required for realTime update
   * @return {boolean} return whether new data is empty or not
   */


  HlineargaugeDataset.prototype.updateData = function updateData(updateObj, updateAnimation) {
    if (updateObj === this.config.lastUpdatedObj) {
      return false;
    }

    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        data = dataSet.components.data,
        label,
        toolText,
        showLabel,
        dataArr = dataSet.components.data,
        i = dataArr && dataArr.length || 0,
        j,
        id,
        updateById,
        updateDataMap = {},
        updateObjLength,
        dataObj,
        config,
        formatedValue = null,
        newData = [],
        updateData,
        value,
        animation,
        pointObj;

    updateObj = updateObj.data;
    // use the realtime animation value or the default animation value
    animation = updateAnimation || chart.get(configStr, animationObjStr);
    updateObjLength = updateObj.length;

    // Store the IDs and corresponding data in hashmap.
    for (j = 0; j < updateObjLength; j++) {
      id = updateObj[j].id;
      id && (updateDataMap[id] = updateObj[j]);
    }

    updateById = (0, _keys2['default'])(updateDataMap).length;
    if (i) {
      while (i--) {
        dataObj = {};
        pointObj = {};
        config = data[i].config;

        id = config.id;
        updateData = UNDEF;
        // Check if update is done by ID of pointer or sequentially.
        updateData = updateById ? updateDataMap[id] : updateObj[i];

        if (!updateData) {
          continue;
        }

        value = updateData.value;
        toolText = updateData.tooltext;
        label = updateData.label;
        showLabel = updateData.showlabel;

        if (value !== UNDEF && value !== _lib.BLANK) {
          dataObj.value = pointObj.value = value;
          formatedValue = pointObj.displayvalue = pointObj.tooltext = numberFormatter.dataLabels(pointObj.value);
          pointObj.hasNewData = true;
        } else {
          pointObj.value = config.formatedVal;
        }

        if (label) {
          pointObj.displayvalue = label;
          pointObj.hasNewData = true;
        }

        if (showLabel == '0') {
          pointObj.displayvalue = BLANKSTRING;
          pointObj.hasNewData = true;
        }

        if (toolText) {
          toolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(toolText));
          pointObj.hasNewData = true;
        }

        if (pointObj.hasNewData) {
          newData[i] = pointObj;
          (0, _lib.extend2)(config, {
            itemValue: pointObj.value,
            displayValue: config.displayValue || showLabel == '1' ? pointObj.displayvalue : BLANKSTRING,
            toolText: toolText !== UNDEF ? (0, _lib.parseTooltext)(toolText, [1, 2], {
              formattedValue: formatedValue
            }, dataObj) : config.setToolText ? config.tempToolText : formatedValue
          });
        }
      }

      if (newData.length) {
        // Storing updateObj to skip update if same information is provided sequentially.
        this.config.lastUpdatedObj = updateObj;
        this.draw(animation, true);
      }

      return Boolean(newData.length);
    }
  };

  return HlineargaugeDataset;
}(_componentInterface2['default']);

exports['default'] = HlineargaugeDataset;

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._setDataForId = exports._getDataForId = exports._setData = exports._getData = undefined;

var _lib = __webpack_require__(5);

var _schedular = __webpack_require__(13);

var UNDEFINED = void 0;
function _getData(index, callback) {
  var iapi = this,
      components = iapi.getChildren(),
      dataset = components.dataset,
      data,
      dataObj,
      _helperFn = function _helperFn() {
    dataObj = dataset[0].components.data;
    if (dataObj && dataObj[--index]) {
      data = dataObj[index].config;
      return (0, _lib.pluckNumber)(data.setValue, data.itemValue);
    } else {
      return null;
    }
  };
  if (dataset) {
    if (typeof callback === 'function') {
      iapi.addJob('eiMethods', function () {
        callback(_helperFn());
      }, _schedular.priorityList.postRender);
    } else {
      return _helperFn();
    }
  }
}

function _setData(dialIndex, value) {
  var stream = 'value=',
      i;

  if (dialIndex === UNDEFINED || value === UNDEFINED) {
    return;
  }

  for (i = 1; i < Number(dialIndex); i++) {
    stream += _lib.COMMASTRING;
  }

  if (value.toString) {
    stream += value.toString();
  }

  if (stream) {
    this.feedData(stream);
  }
}

function _getDataForId(id, callback) {
  var iapi = this,
      dataset = iapi.getChildren('dataset')[0],
      idMap = dataset.config.idMap;
  if (typeof callback === 'function') {
    iapi.addJob('eiMethods', function () {
      callback(idMap && idMap[id] && idMap[id].config.itemValue || null);
    }, _schedular.priorityList.postRender);
  } else {
    return idMap && idMap[id] && idMap[id].config.itemValue || null;
  }
}

function _setDataForId(id, value) {
  var iapi = this,
      dataset = iapi.getChildren('dataset')[0],
      idMap = dataset.config.idMap;
  return idMap && idMap[id] && iapi._setData(idMap[id].index + 1, value);
}
exports._getData = _getData;
exports._setData = _setData;
exports._getDataForId = _getDataForId;
exports._setDataForId = _setDataForId;

/***/ }),

/***/ 352:
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

var _bulletLedCommon = __webpack_require__(227);

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _led = __webpack_require__(739);

var _led2 = _interopRequireDefault(_led);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF;

var Vled = function (_LinearGauge) {
  _inherits(Vled, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Vled.getName = function getName() {
    return 'Vled';
  };

  function Vled() {
    _classCallCheck(this, Vled);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.showRTvalue = false;
    _this.canvasPadding = false;
    _this.defaultSeriesType = 'led';
    _this.defaultPlotShadow = 1;

    _this.realtimeEnabled = true;
    _this.chartleftmargin = 15;
    _this.chartrightmargin = 15;
    _this.charttopmargin = 10;
    _this.chartbottommargin = 10;
    _this.showTooltip = 0;
    _this.connectTickMarks = 0;
    _this.isHorizontal = false;
    _this.isAxisOpposite = true;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isAxisReverse = false;
    _this.isRealTime = true;
    _this.colorRange = true;
    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Vled.prototype.getName = function getName() {
    return 'Vled';
  };

  Vled.prototype.configureAttributes = function configureAttributes(dataObj) {
    _LinearGauge.prototype.configureAttributes.call(this, dataObj);
    _bulletLedCommon.configureAttributes.call(this);
  };

  Vled.prototype._getData = function _getData() {
    _bulletLedCommon._getData.call(this);
  };

  Vled.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Vertical LED Gauge';
    config.hasLegend = false;
    config.defaultDatasetType = 'led';
    config.skipCanvasDrawing = true;
    config.majorTMNumber = -1;
    config.majorTMHeight = 6;
    config.showTickMarks = 1;
    config.majorTMThickness = 1;
    config.upperlimit = UNDEF;
    config.lowerlimit = UNDEF;
    config.minorTMNumber = 4;
    config.minorTMThickness = 1;
    config.tickMarkDistance = 3;
    config.placeTicksInside = 0;
    config.placeValuesInside = 0;
  };

  Vled.prototype.getDSdef = function getDSdef() {
    return _led2['default'];
  };

  return Vled;
}(_fusioncharts2['default']);

exports['default'] = Vled;

/***/ }),

/***/ 353:
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

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    BLANKSTRING = _lib.BLANK,
    AXISPOSITION_TOP = 1,
    AXISPOSITION_BOTTOM = 3,
    getLightColor = _lib.graphics.getLightColor,
    gaugeFillColorStr = _lib.preDefStr.gaugeFillColorStr,
    gaugeBorderColorStr = _lib.preDefStr.gaugeBorderColorStr,
    dummyStr = 'dummy',
    FILLMIXDARK10 = '{dark-10}';

/**
 * Base class of thermometer and cylinder dataset
 *
 * @class CylinderThermometerBase
 * @extends {ComponentInterface}
 */

var CylinderThermometerBase = function (_ComponentInterface) {
  _inherits(CylinderThermometerBase, _ComponentInterface);

  function CylinderThermometerBase() {
    _classCallCheck(this, CylinderThermometerBase);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * returns type
   *
   * @return {string} dataset
   * @memberof CylinderThermometerBase
   */
  CylinderThermometerBase.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Returns name
   *
   * @return {string} name
   * @memberof CylinderThermometerBase
   */


  CylinderThermometerBase.prototype.getName = function getName() {
    return 'cylinderThermometerBase';
  };
  /**
   * Function to update the value
   * @param {number} setData : value that will be added
   * @param {boolean} draw : whether to update the visuals also
   */


  CylinderThermometerBase.prototype.setValue = function setValue(setData, draw) {
    if (!setData) {
      return;
    }
    var dataSet = this,
        datasetConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        jsonChartObj = chart.getFromEnv('dataSource').chart,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        value = setData.value,
        formattedValue;

    datasetConfig.value = value = numberFormatter.getCleanValue(value);
    if (value !== null) {
      formattedValue = datasetConfig.formattedValue = numberFormatter.dataLabels(datasetConfig.value);

      if (!datasetConfig.showValue) {
        datasetConfig.displayValue = BLANKSTRING;
      } else {
        // determine the dispalay value then
        datasetConfig.displayValue = setData.label || (0, _lib.getValidValue)(formattedValue, _lib.BLANK);
      }

      if (!datasetConfig.showTooltip) {
        datasetConfig.toolText = BLANKSTRING;
      } else if (jsonChartObj.plottooltext !== UNDEF) {
        datasetConfig.toolText = (0, _lib.parseTooltext)((0, _lib.pluck)(setData.tooltext, jsonChartObj.plottooltext), [1, 2], { formattedValue: formattedValue
        }, {}, jsonChartObj);
      } else {
        // determine the dispalay value then
        datasetConfig.toolText = (0, _lib.pluck)(setData.tooltext, formattedValue === null ? BLANKSTRING : formattedValue);
      }
    } else {
      datasetConfig.displayValue = BLANKSTRING;
      datasetConfig.toolText = BLANKSTRING;
      datasetConfig.formattedValue = null;
    }

    if (draw) {
      dataSet.draw();
    }
  };
  /**
    * Function for parsing all the attributes and value given by the user at chart,dataset and set level
    * @param  {Object} dataSetJson JSON for dataset configurations
    * @return {boolean} Indicates whether the configuration was successful or not
    */


  CylinderThermometerBase.prototype.configure = function configure(dataSetJson) {
    if (!dataSetJson) {
      return false;
    }
    this.setValue(dataSetJson && dataSetJson.data && dataSetJson.data[0]);
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        jsonData = chart.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        datasetConfig = dataSet.config || (dataSet.config = {}),
        colorM = dataSet.getFromEnv('color-manager'),
        chartConfig = chart.config,
        gaugeBorderAlpha,
        showHoverEffect = (0, _lib.pluckNumber)(chartAttrs.showhovereffect),
        plotFillHoverColor,
        gaugeFillAlpha,
        gaugeFillColor;

    datasetConfig.showValue = (0, _lib.pluckNumber)(chartAttrs.showvalue, chartAttrs.showvalues, 1);
    datasetConfig.showTooltip = (0, _lib.pluckNumber)(chartAttrs.showtooltip, 1);
    datasetConfig.valuePadding = (0, _lib.pluckNumber)(chartAttrs.valuepadding, 2);
    datasetConfig.tooltipSepChar = (0, _lib.pluck)(chartAttrs.tooltipsepchar, _lib.COMMASTRING);
    datasetConfig.pointerOnOpp = (0, _lib.pluckNumber)(chartAttrs.pointerontop, 0);
    datasetConfig.axisPosition = (0, _lib.pluckNumber)(chartAttrs.ticksbelowgauge, chartAttrs.ticksbelowgraph, this.ticksbelowgauge, 1) ? AXISPOSITION_BOTTOM : AXISPOSITION_TOP;
    datasetConfig.valueAbovePointer = (0, _lib.pluckNumber)(chartAttrs.valueabovepointer, 1);

    datasetConfig.labelStyle = chartConfig.dataLabelStyle;

    gaugeFillColor = datasetConfig.gaugeFillColor = (0, _lib.pluck)(chartAttrs.gaugefillcolor, chartAttrs.thmfillcolor, chartAttrs.cylfillcolor, colorM.getColor(gaugeFillColorStr));
    gaugeFillAlpha = datasetConfig.gaugeFillAlpha = (0, _lib.pluckNumber)(chartAttrs.gaugefillalpha, chartAttrs.cylfillalpha, chartAttrs.thmfillalpha, _lib.HUNDREDSTRING);

    // Gauge Border properties
    datasetConfig.showGaugeBorder = (0, _lib.pluckNumber)(chartAttrs.showgaugeborder, 1);
    gaugeBorderAlpha = datasetConfig.showGaugeBorder ? (0, _lib.pluckNumber)(chartAttrs.gaugeborderalpha, 40) : 0;
    // We are using 40 for default alpha of Thermometer Gauge Border
    datasetConfig.gaugeBorderColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.gaugebordercolor, colorM.getColor(gaugeBorderColorStr)), gaugeBorderAlpha);
    datasetConfig.gaugeBorderThickness = (0, _lib.pluckNumber)(chartAttrs.gaugeborderthickness, 1);

    // Thermometer Glass color
    datasetConfig.gaugeContainerColor = (0, _lib.pluck)(chartAttrs.thmglasscolor, chartAttrs.cylglasscolor, chart.glasscolor, getLightColor(gaugeFillColor, 30));

    if (showHoverEffect !== 0 && (showHoverEffect || chartAttrs.plotfillhovercolor || chartAttrs.plotfillhoveralpha || chartAttrs.plotfillhoveralpha === 0)) {
      datasetConfig.showHoverEffect = true;

      plotFillHoverColor = (0, _lib.pluck)(chartAttrs.plotfillhovercolor, chartAttrs.cylfillhovercolor, chartAttrs.thmfillhovercolor, FILLMIXDARK10);
      datasetConfig.plotFillHoverAlpha = (0, _lib.pluckNumber)(chartAttrs.plotfillhoveralpha, chartAttrs.cylfillhoveralpha, chartAttrs.thmfillhoveralpha, gaugeFillAlpha);
      datasetConfig.plotFillHoverColor = /\{/.test(plotFillHoverColor) ? colorM.parseColorMix(gaugeFillColor, plotFillHoverColor)[0] : plotFillHoverColor;
    }
    dataSet.setValue(jsonData);
    chart._parseSpecialConfig && chart._parseSpecialConfig();
  };
  /**
   * Fetch space taken by labels
   * @return {number} height taken by data label
   */


  CylinderThermometerBase.prototype._getLabelSpace = function _getLabelSpace() {
    var dataSet = this,
        datasetConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        smartLabel = dataSet.getFromEnv('smartLabel'),
        labelObj;

    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabel.setStyle(datasetConfig.labelStyle); // @todo map datalabel style
    labelObj = smartLabel.getOriSize(datasetConfig.displayValue !== _lib.BLANK ? datasetConfig.displayValue : dummyStr);

    return labelObj.height ? labelObj.height + datasetConfig.valuePadding : 0;
  };
  /**
   * Fetch data limits for scale
   * @return {Object} returns max, min of data limits
   */


  CylinderThermometerBase.prototype.getDataLimits = function getDataLimits() {
    var dataSet = this,
        datasetConfig = dataSet.config,
        min,
        max;
    max = min = datasetConfig.value;

    datasetConfig.maxValue = max;
    datasetConfig.minValue = min;

    return {
      forceMin: true,
      forceMax: true,
      max: max,
      min: min
    };
  };
  /**
   * Updates data during realTime
   */


  CylinderThermometerBase.prototype.updateData = function updateData() {
    var dataSet = this,
        dataObj = arguments[0],
        draw = arguments[2],
        conf = dataSet.config,
        prevMax = conf.maxValue,
        prevMin = conf.prevMin,
        value = conf.value,
        chart = dataSet.getFromEnv('chart'),
        drawManager = dataSet.groupManager || dataSet,
        scale = dataSet.getFromEnv('scale');

    dataSet.setValue(dataObj.data[0]);
    conf.maxValue = value;
    conf.minValue = value;

    if (conf.maxValue !== prevMax || conf.minValue !== prevMin) {
      dataSet.config.maxminFlag = true;
    }

    if (draw) {
      chart._setAxisLimits();
      scale.draw();
      drawManager.draw();
    }
  };
  /**
   * function to set index for the dataset component
   * @param {number} index    index according to the index JSON
   */


  CylinderThermometerBase.prototype.setJSONIndex = function setJSONIndex(index) {
    this.config.index = index;
  };
  /**
   * function to return index for the dataset component
   * @return {number}    index according to the index JSON
   */


  CylinderThermometerBase.prototype.getJSONIndex = function getJSONIndex() {
    return this.config.index || 0;
  };

  return CylinderThermometerBase;
}(_componentInterface2['default']);

exports['default'] = CylinderThermometerBase;

/***/ }),

/***/ 354:
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

var _fusioncharts = __webpack_require__(295);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _chartPaletteColors = __webpack_require__(199);

var defaultPaletteOptions = _interopRequireWildcard(_chartPaletteColors);

var _singleseriesDataset = __webpack_require__(210);

var _singleseriesDataset2 = _interopRequireDefault(_singleseriesDataset);

var _legend = __webpack_require__(107);

var _legend2 = _interopRequireDefault(_legend);

var _legendSpacemanager = __webpack_require__(137);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * Class for Funnel pyramid chart
 * @class FunnelPyramidBase
 * @extends {GaugeBase}
 */
var FunnelPyramidBase = function (_CommonSpaceManager) {
  _inherits(FunnelPyramidBase, _CommonSpaceManager);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  FunnelPyramidBase.getName = function getName() {
    return 'FunnelPyramidBase';
  };
  /**
   * Creates an instance of FunnelPyramidBase.
   * @memberof FunnelPyramidBase
   */


  function FunnelPyramidBase() {
    _classCallCheck(this, FunnelPyramidBase);

    var _this = _possibleConstructorReturn(this, _CommonSpaceManager.call(this));

    _this._createAxes = _lib.stubFN;
    _this.registerFactory('dataset', _singleseriesDataset2['default'], ['vCanvas', 'legend']);
    _this.registerFactory('legend', _legend2['default']);
    return _this;
  }
  /**
   * Sets default configuration
   * @memberof FunnelPyramidBase
   */


  FunnelPyramidBase.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _CommonSpaceManager.prototype.__setDefaultConfig && _CommonSpaceManager.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.showRTvalue = false;
    config.canvasPadding = false;
    config.sliceOnLegendClick = true;
    config.defaultPlotShadow = 1;
    config.subTitleFontSizeExtender = 0;
    config.tooltippadding = 3;
    config.defaultPaletteOptions = defaultPaletteOptions;
    config.drawAnnotations = true;
    config.isDataLabelBold = false;
    config.dontShowLegendByDefault = true;
    config.alignCaptionWithCanvas = 0;
    config.formatnumberscale = 1;
    config.isSingleSeries = true;
    config.hasLegend = true;
    config.decimals = 2;
    config.defaultDatasetType = 'funnelpyramidbaseds';
    config.skipCanvasDrawing = true;
  };
  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  FunnelPyramidBase.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _CommonSpaceManager.prototype.parseChartAttr.call(this, dataObj);
    var iapi = this,
        chartAttrs = iapi.getFromEnv('chart-attrib');
    iapi.config.showLegend = (0, _lib.pluckNumber)(chartAttrs.showlegend, 0);
  };

  // eslint-disable-next-line


  FunnelPyramidBase.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {}
  // overwrite and do nothing


  /**
   * function to calculate and allote space for legend
   */
  ;

  FunnelPyramidBase.prototype._manageLegendSpace = function _manageLegendSpace() {
    _legendSpacemanager._manageLegendSpace.call(this);
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  FunnelPyramidBase.prototype.getName = function getName() {
    return 'FunnelPyramidBase';
  };

  return FunnelPyramidBase;
}(_fusioncharts2['default']);

exports['default'] = FunnelPyramidBase;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(9);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(10);

var _symbol2 = _interopRequireDefault(_symbol);

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

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; }; /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var _lib = __webpack_require__(5);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _pie2d = __webpack_require__(108);

var _funnelpyramidbaseAnimation = __webpack_require__(750);

var _funnelpyramidbaseAnimation2 = _interopRequireDefault(_funnelpyramidbaseAnimation);

var _dependencyManager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    BLANKSTRING = _lib.BLANK,
    showHoverEffectStr = _lib.preDefStr.showHoverEffectStr,
    convertColor = _lib.graphics.convertColor,
    noneStr = 'none',
    PXSTRING = 'px',
    fillStr = 'fill',
    NORMALSTRING = 'normal',
    getLightColor = _lib.graphics.getLightColor,
    math = Math,
    mathRound = math.round,
    mathCeil = math.ceil,
    mathMax = math.max,
    mathMin = math.min,
    mathPow = math.pow,
    mathSqrt = math.sqrt,
    EMPTY_OBJ = {},
    getDarkColor = _lib.graphics.getDarkColor,
    colorStrings = _lib.preDefStr.colors,
    COLOR_000000 = colorStrings.c000000,

// configStr = preDefStr.configStr,
// animationObjStr = preDefStr.animationObjStr,
POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    pathStr = 'path',
    zeroCommaHundredStr = '0,100',
    CRISP = 'crisp',
    win = window,
    userAgent = win.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !win.opera,
    HEXCODE = _lib.regex.hexcode,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    dropHash = _lib.regex.dropHash,
    POINTER = 'pointer',
    EVENTARGS = 'eventArgs',
    isObject = function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
},
    isString = function isString(s) {
  return typeof s === 'string';
},
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    M = 'M',
    A = 'A',
    L = 'L',
    Z = 'Z',
    startsRGBA = _lib.regex.startsRGBA,

/**
 * Handle color operations. The object methods are chainable.
 * @param {string} input The input color in either rbga or hex format
 * @return {Object} returns the member functions needed of class color
 * @private
 */
Color = function Color(input) {
  // declare variables
  var rgba = [],
      result;

  /**
  * Parse the input color to rgba array
  * @param {string} input color string
  * @private
  */
  function init(input) {
    // rgba
    result = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(input);
    if (result) {
      rgba = [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10), parseFloat(result[4])];
    } else {
      // hex
      result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(input);
      if (result) {
        rgba = [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), 1];
      }
    }
  }
  /**
  * Return the color a specified format
  * @param {string} format color format, hex or rgba
  * @return {string} color string
  * @private
  */
  function get(format) {
    var ret;

    // it's NaN if gradient color on a column chart
    if (rgba && !isNaN(rgba[0])) {
      if (format === 'rgb') {
        ret = 'rgb(' + rgba[0] + ',' + rgba[1] + ',' + rgba[2] + ')';
        /** ^
                   * capability to return hex code
                   */
      } else if (format === 'hex') {
        ret = '#' + (COLOR_000000 + (rgba[0] << 16 | rgba[1] << 8 | rgba[2]).toString(16)).slice(-6);
      } else if (format === 'a') {
        /* EOP^ */
        ret = rgba[3];
      } else {
        ret = 'rgba(' + rgba.join(',') + ')';
      }
    } else {
      ret = input;
    }
    return ret;
  }

  /**
   * Brighten the color
   * @param {number} alpha alpha string
   * @return {Object} object instance
   * @private
   */
  function brighten(alpha) {
    if (!isNaN(alpha) && alpha !== 0) {
      var i;
      for (i = 0; i < 3; i++) {
        rgba[i] += parseInt(alpha * 255, 10);

        if (rgba[i] < 0) {
          rgba[i] = 0;
        }
        if (rgba[i] > 255) {
          rgba[i] = 255;
        }
      }
    }
    return this;
  }
  /**
   * Set the color's opacity to a given alpha value
   * @param {number} alpha alpha string
   * @return {Object} object instance
   * @private
   */
  function setOpacity(alpha) {
    rgba[3] = alpha;
    return this;
  }

  // initialize: parse the input
  init(input);

  // public methods
  return {
    get: get,
    brighten: brighten,
    setOpacity: setOpacity
  };
};

(0, _dependencyManager.addDep)({
  name: 'funnelPyramidBaseAnimation',
  type: 'animationRule',
  extension: _funnelpyramidbaseAnimation2['default']
});
/**
 * Creates class FunnelPyramidBaseDataset
 */

var FunnelPyramidBaseDataset = function (_ComponentInterface) {
  _inherits(FunnelPyramidBaseDataset, _ComponentInterface);

  /**
   * Sets the type of the component
   * @return {string} type
   */
  FunnelPyramidBaseDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  FunnelPyramidBaseDataset.prototype.getName = function getName() {
    return 'funnelPyramidBase';
  };
  /**
   * Construction funtion for FunnelPyramidBaseDataset class
   */


  function FunnelPyramidBaseDataset() {
    _classCallCheck(this, FunnelPyramidBaseDataset);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.components = {};
    // Stub for saving all the computed configuration
    // this.removeData = function () {
    //   // Override parent fn
    // };
    _this.utils = function (_context) {
      /**
       * Utility to create associative array with the facility to get non-undefined element in optimized way.
       * O(1) length retrieval
       */
      function ArrayableObj() {
        var _map = [],
            _eLength = 0; // Effective length. Only count of defined element

        // Set a value in associative array
        this.set = function (key, value) {
          _eLength++;
          _map[key] = value;
        };

        // Get an value based on the key
        this.get = function (key) {
          return _map[key];
        };

        // Get the complete array
        this.getAll = function () {
          return _map;
        };

        // Merge with a given array and return a new one. However instance remains immutable.
        this.mergeWith = function (anotherArray) {
          var sArr,
              itemIndex,
              item,
              newArr = _map.slice(0);
          if (anotherArray instanceof Array) {
            sArr = anotherArray;
          } else if (anotherArray instanceof ArrayableObj) {
            sArr = anotherArray.getAll();
          } else {
            return;
          }
          for (itemIndex in sArr) {
            item = sArr[itemIndex];
            if (newArr[itemIndex]) {
              continue;
            }
            newArr[itemIndex] = item;
          }
          return newArr;
        };

        this.getEffectiveLength = function () {
          return _eLength;
        };
      }

      ArrayableObj.prototype.constructor = ArrayableObj;

      /**
       * Matrix that calculates the distribution of the labels.
       * If the distribution is not uniform it calculates a variable factor to make it uniform
       * It calculates the following cases :-
       * a) If the distribution is permitted for one given side, it suggestes chart.alignmentType['default']
       * b) If the distribution exceeds to a given limit it suggestes chart.alignmentType.alternate
       *
       * If the original distribution (non uniform) is like
       * ------------------------------------------------------
       *   4  |  2  |  0  |  0  |  0  |  0  |  0  | 1   |  0  |
       * ------------------------------------------------------
       * After make it uniform it would look like
       * ------------------------------------------------------
       *   1  |  1  |  1  |  1  |  1  |  1  |  0  | 1   |  0  |
       * ------------------------------------------------------
       *
       * If the original distribution array is not sufficient to hold all the elements one more array is
       * introduced.
       * @param {number} length Permitted limit of distribution
       */
      function DistributionMatrix(length) {
        // Allowed length of distribution
        this.distributionLength = length;
        // Represents the recalculated distribution for default side
        this.distributedMatrix = [];
        // Represents the recalculated distribution for alternate side
        this.altDistributedMatrix = [];
        // Represents the normal distribution
        this.nonDistributedMatrix = {};
        // For focefully pushing elements which are need not be distributed, but required to be placed in
        // the final distribution matrix
        this.forcePushObj = {};
        this.flags = {
          exhaustion: false
        };
      }

      DistributionMatrix.prototype.constructor = DistributionMatrix;

      /**
       * Puts items in the matrix to calculate dependency.
       * @param {Object} item Item to be distributed
       * @param {number} rangeBottom distribution index
      */
      DistributionMatrix.prototype.push = function (item, rangeBottom) {
        // Original distribution before recalculation
        this.nonDistributedMatrix[rangeBottom] = this.nonDistributedMatrix[rangeBottom] || [];
        this.nonDistributedMatrix[rangeBottom].push(item);
      };

      /*
       * Forcefully pushes element in already distributed array. The system does not calculate the overall
       * distribution after the data being pushed.
       * @param item {{object}} - object to be forcefully distributed
       * @param index {{int}} - corrosponds to the index of the main array where the element to be placed
      */
      DistributionMatrix.prototype.forcePush = function (item, index) {
        this.forcePushObj[index] = item;
      };

      /*
       * Controls and spread distribution of non-uniform matrix to uniform matrix.
       * Gets called when result is prepared.
       */
      DistributionMatrix.prototype.distribute = function (legendSkip) {
        var datasetStore = _context,
            distributionItems,
            alternateSwitch = true,
            distributedMatrix = new ArrayableObj(),
            alternateDistributedMatrix = new ArrayableObj(),
            orphanMatrix = new ArrayableObj(),
            altOrphanMatrix = new ArrayableObj(),
            flags = this.flags,
            currentMatrix,
            distributionIndexAlt,
            distributionIndex,
            index,
            length,
            currentItem,
            absIndex = 0,
            data = datasetStore.components.data;

        // If there are too many labels even after placing them in alternate size, the system skips label.
        // This behaviour is observable especially with low height. On top of that if legend is positioned
        // at right side, system places labels only one side.
        // This is applied because two side space management
        // cannot be done in this scope.
        if (legendSkip) {
          // If legend is in right side place all the labels in one side
          if (data.length - this.distributionLength > 0) {
            // willMatricsExhaust = true;
            // matricsExhaustionIndex = diff;

            for (distributionIndexAlt in this.nonDistributedMatrix) {
              distributionItems = this.nonDistributedMatrix[distributionIndexAlt];
              for (index = 1; index < distributionItems.length; index++) {
                // Keep only the first element in the block as
                // distribution will not be calculated since
                // labels are skipped.
                currentItem = distributionItems[index];
                currentItem.dontPlot = true;
                currentItem.displayValue = _lib.BLANK;
              }
            }
          }
        } else {
          // If legend is not in right side but possibility of canvas overflow
          if (data.length - 2 * this.distributionLength > 0) {
            // willMatricsExhaust = true;
            // matricsExhaustionIndex = diff;

            for (distributionIndexAlt in this.nonDistributedMatrix) {
              distributionItems = this.nonDistributedMatrix[distributionIndexAlt];
              for (index = 1; index < distributionItems.length - 1; index++) {
                currentItem = distributionItems[index];
                currentItem.dontPlot = true;
                currentItem.displayValue = _lib.BLANK;
              }
            }
          }
        }
        /*
                   * If number of data to be distributed is greater than allowed length (in one side),
                   * alternate distribution happens.
                   * There are few concept here how the skipping is dealt with.
                   * The pyramid plot can have labels or can not. If the plot doesn't associate with a label we call
                   * it a orphan. While calculating the distribution orphans are not considered as their labels won't
                   * occupy any space. Hence these are kept in a separate matrix;
                   * Separately the orphans and non-orphans
                   * create one associative array. But when they are merged they create a complete array.
                   */
        if (data.length > this.distributionLength && !legendSkip) {
          // If data exhausts two matrics, skip labels
          flags.exhaustion = true;
          for (distributionIndexAlt in this.nonDistributedMatrix) {
            distributionItems = this.nonDistributedMatrix[distributionIndexAlt];
            // Alternatively place every item in two different arrays
            for (index = 0, length = distributionItems.length; index < length; index++) {
              currentItem = distributionItems[index];
              if (!currentItem.dontPlot) {
                alternateSwitch ? currentMatrix = distributedMatrix : currentMatrix = alternateDistributedMatrix;
                if (currentMatrix.getEffectiveLength() > parseInt(distributionIndexAlt, 10)) {
                  currentItem.distributionFactor = currentMatrix.getEffectiveLength() - 1 - distributionIndexAlt;
                } else {
                  // currentItem.distributionFactor = 0;
                  currentItem.distributionFactor = 0;
                }
              } else {
                alternateSwitch ? currentMatrix = orphanMatrix : currentMatrix = altOrphanMatrix;
              }
              currentMatrix.set(absIndex++, currentItem);
              alternateSwitch = !alternateSwitch;
            }
          }
          // Forms the complete array in both of the side
          this.distributedMatrix = distributedMatrix.mergeWith(orphanMatrix);
          this.altDistributedMatrix = alternateDistributedMatrix.mergeWith(altOrphanMatrix);
        } else {
          // Distribution happens in one side. Hence data can be accommodated in one side
          for (distributionIndex in this.nonDistributedMatrix) {
            distributionItems = this.nonDistributedMatrix[distributionIndex];
            for (index = 0, length = distributionItems.length; index < length; index++) {
              currentItem = distributionItems[index];
              // Calculating distribution offset
              if (!currentItem.dontPlot) {
                currentMatrix = distributedMatrix;
                if (currentMatrix.getEffectiveLength() > parseInt(distributionIndex, 10)) {
                  currentItem.distributionFactor = currentMatrix.getEffectiveLength() - 1 - distributionIndex;
                } else {
                  currentItem.distributionFactor = 0;
                }
              } else {
                currentMatrix = orphanMatrix;
              }
              currentMatrix.set(absIndex++, currentItem);
            }
          }
          this.distributedMatrix = distributedMatrix.mergeWith(orphanMatrix);
        }
      };

      /*
               * Gets the distributed result.
               * @return {{object}} - {
               *   suggestion :
               *   matrix
               * }
               * Suggestion - suggests what kind of allignment to be taken
               * Matrix - Uniform distribution matrix
               */
      DistributionMatrix.prototype.getDistributedResult = function () {
        var datasetStore = _context,
            chart = datasetStore.getFromEnv('chart'),
            chartConfig = chart.config,
            legend = chart.getFromEnv('legend'),
            conf = datasetStore.config,
            alignmentType = conf.alignmentType,
            suggestion,
            matrix = [],
            isLegendRight = chart.isLegendRight,
            allowedRightX = chartConfig.width - conf.blankSpace;

        if (chartConfig.showLegend && legend.config.width) {
          isLegendRight && (allowedRightX -= legend.config.width + chartConfig.marginRight);
        } else {
          isLegendRight = 0;
        }
        chart.isLegendRight = isLegendRight;

        this.distribute(isLegendRight);

        // When legend is in right side the plot will be in one side with skipped labels.
        if (isLegendRight) {
          suggestion = alignmentType['default'];
          matrix.push(this.distributedMatrix);
        } else {
          suggestion = this.flags.exhaustion ? alignmentType.alternate : alignmentType['default'];

          this.flags.exhaustion ? [].push.call(matrix, this.distributedMatrix, this.altDistributedMatrix) : matrix.push(this.distributedMatrix);
        }
        return {
          'forceMatrix': this.forcePushObj,
          'suggestion': suggestion,
          'matrix': matrix
        };
      };

      return {
        DistributionMatrix: DistributionMatrix,

        setContext: function setContext(context) {
          _context = context;
        },

        invokeHookFns: function invokeHookFns() {
          var fn,
              params = [],
              ctx = _context;

          switch (arguments.length) {
            case 3:
              ctx = arguments[2];
            /* falls through */
            case 2:
              params = arguments[1];
            /* falls through */
            case 1:
              fn = arguments[0];
              break;

            default:
              return;
          }

          fn && typeof fn === 'function' && fn.apply(ctx, params);
        },

        copyProperties: function copyProperties(fromObject, toObject, mappingArray) {
          var index,
              length,
              confArr,
              fromName,
              toName,
              convertFunction,
              defaultValue,
              additionalFn,
              DEFAULT_FN = _lib.stubFN;
          /**
           * Calculates default value of key received
           * @param {number|string} key key value
           * @return {number|string} returns default value of key
           */
          function getDefaultValue(key) {
            var nKey;

            if (typeof key === 'string' && key.indexOf('$') === 0) {
              nKey = key.substring(1);
              return toObject[nKey];
            }

            if (typeof key === 'function') {
              return key.call(_context, toObject);
            }

            return key;
          }

          for (index = 0, length = mappingArray.length; index < length; index++) {
            confArr = mappingArray[index];
            fromName = confArr[0];
            toName = confArr[1];
            convertFunction = confArr[2];
            defaultValue = getDefaultValue(confArr[3]);
            additionalFn = confArr[4] || DEFAULT_FN;

            toObject[toName] = convertFunction(fromObject[fromName], defaultValue);
            additionalFn(toObject);
          }
        },

        sortObjArrByKey: function sortObjArrByKey(objArr, valueKey) {
          return objArr.sort(function (obj1, obj2) {
            return Math.abs(obj2[valueKey]) - Math.abs(obj1[valueKey]);
          });
        },

        getSumValueOfObjArrByKey: function getSumValueOfObjArrByKey(objArr, valueKey) {
          var index,
              length,
              total = 0;

          for (index = 0, length = objArr.length; index < length; index++) {
            total += parseFloat(objArr[index][valueKey], 10);
          }

          return total;
        }
      };
    };
    _this.hide = function (plotArr, currentDsLength) {
      var index,
          animationManager = this.getFromEnv('animationManager'),
          length = plotArr && plotArr.length,
          currentLastElemPath,
          backPath,
          frontPath,

      // topPath,
      silhuettePath,
          lighterHalf,
          darkerHalf,
          centerLight,
          centerLight1,
          toptop,
          topLight,
          topLight1,
          callbackFn = function callbackFn() {
        this.hide();
      },
          plot;

      if (!plotArr || plotArr.length === 0 || currentDsLength >= length) {
        return;
      }
      currentLastElemPath = plotArr[currentDsLength - 1 < 1 && this.type === 'funnel' ? 1 : currentDsLength - 1].getGraphicalElement('graphic').squeezedFormPathObj;
      backPath = currentLastElemPath.back;
      frontPath = currentLastElemPath.front;
      // topPath = currentLastElemPath.top;
      silhuettePath = currentLastElemPath.silhuette;
      lighterHalf = currentLastElemPath.lighterHalf;
      darkerHalf = currentLastElemPath.darkerHalf;
      centerLight = currentLastElemPath.centerLight;
      centerLight1 = currentLastElemPath.centerLight1;
      toptop = currentLastElemPath.top;
      topLight = currentLastElemPath.topLight;
      topLight1 = currentLastElemPath.topLight1;

      currentDsLength = currentDsLength < 2 && this.type === 'funnel' ? 0 : currentDsLength;
      for (index = plotArr.length - 1; index >= currentDsLength; index--) {
        plot = plotArr[index].getGraphicalElement();

        // plot.connector && plot.connector.hide();
        // plot.dataLabel && plot.dataLabel.hide();
        // plot.graphic && plot.graphic.hide();
        if (plot.graphic) {
          plot.graphic.front && frontPath && animationManager.setAnimation({
            el: plot.graphic.front,
            attr: { path: frontPath },
            component: this
          });
          plot.graphic.front && !frontPath && plot.graphic.front.hide();

          plot.graphic.back && backPath && animationManager.setAnimation({
            el: plot.graphic.back,
            attr: { path: backPath },
            component: this
          });

          // plot.graphic.top && topPath && chart.components.animationManager.registerAnimation([{
          //   animType: 'linear',
          //   data: [{
          //     el: plot.graphic.top,
          //     attrs: {
          //       path: topPath
          //     }
          //   }]
          // }], 'plot');

          plot.graphic.funnel2D && silhuettePath && animationManager.setAnimation({
            el: plot.graphic.funnel2D,
            attr: { path: silhuettePath },
            component: this
          });

          plot.graphic.lighterHalf && animationManager.setAnimation({
            el: plot.graphic.lighterHalf,
            attr: { path: lighterHalf },
            callback: callbackFn,
            component: this
          });
          plot.graphic.lighterHalf && !lighterHalf && plot.graphic.lighterHalf.hide();

          plot.graphic.darkerHalf && animationManager.setAnimation({
            el: plot.graphic.darkerHalf,
            attr: { path: darkerHalf },
            callback: callbackFn,
            component: this
          });
          plot.graphic.darkerHalf && !darkerHalf && plot.graphic.darkerHalf.hide();

          plot.graphic.borderElement && animationManager.setAnimation({
            el: plot.graphic.borderElement,
            attr: { path: silhuettePath },
            callback: callbackFn,
            component: this
          });
          plot.graphic.borderElement && !silhuettePath && plot.graphic.borderElement.hide();

          plot.graphic.centerLight && animationManager.setAnimation({
            el: plot.graphic.centerLight,
            attr: { path: centerLight },
            callback: callbackFn,
            component: this
          });
          plot.graphic.centerLight && !centerLight && plot.graphic.centerLight.hide();

          plot.graphic.centerLight1 && animationManager.setAnimation({
            el: plot.graphic.centerLight1,
            attr: { path: centerLight1 },
            callback: callbackFn,
            component: this
          });
          plot.graphic.centerLight1 && !centerLight1 && plot.graphic.centerLight1.hide();

          plot.graphic.toptop && animationManager.setAnimation({
            el: plot.graphic.toptop,
            attr: { path: toptop },
            callback: callbackFn,
            component: this
          });
          plot.graphic.toptop && !toptop && plot.graphic.toptop.hide();

          plot.graphic.topLight && animationManager.setAnimation({
            el: plot.graphic.topLight,
            attr: { path: topLight },
            callback: callbackFn,
            component: this
          });
          plot.graphic.topLight && !topLight && plot.graphic.topLight.hide();

          plot.graphic.topLight1 && animationManager.setAnimation({
            el: plot.graphic.topLight1,
            attr: { path: topLight1 },
            callback: callbackFn,
            component: this
          });
          plot.graphic.topLight1 && !topLight1 && plot.graphic.topLight1.hide();
        }
        plot.trackerObj && plot.trackerObj.hide();
      }
    };
    _this.pyramidFunnelShape = function () {
      // @todo generic fn for pyramid and funnel

      // list of attr that will handled here
      var attrList = {
        y: true,
        R1: true,
        R2: true,
        h: true,
        r3dFactor: true,
        color: true,
        opacity: true,
        fill: true,
        stroke: true,
        strokeColor: true,
        strokeAlpha: true,
        'stroke-width': true
      },

      // FIX for #FWXT-600
      // for zero radius calcPoints return erroneous value
      minRadius = 0.01,
          getArcPath = function getArcPath(endX, endY, rX, rY, isClockWise, isLargeArc) {
        return [A, rX, rY, 0, isLargeArc, isClockWise, endX, endY];
      },


      /**
       * calcPoints method calculates and returns the
       * coordinates of four points of common tangency
       * between the upper and lower ellipses.
       * @param {number} a1          semi-major axis length of the upper ellipse
       * @param {number} b1          semi-minor axis length of the upper ellipse
       * @param {number} h1          height of upper ellipse center
       * @param {number} a2          semi-major axis length of the lower ellipse
       * @param {number} b2          semi-minor axis length of the lower ellipse
       * @param {number} h2          height of lower ellipse center
       * @return {Object}            object holding point instances corresponding
       *                       to the 4 points of tangencies.
      */
      calcPoints = function calcPoints(a1, b1, h1, a2, b2, h2) {
        // calcuating parameters of formula
        var alpha = mathPow(a2, 2) - mathPow(a1, 2),
            beta = -2 * (mathPow(a2, 2) * h1 - mathPow(a1, 2) * h2),
            gamma = mathPow(a1 * b2, 2) + mathPow(a2 * h1, 2) - mathPow(a2 * b1, 2) - mathPow(a1 * h2, 2),
            k = mathSqrt(mathPow(beta, 2) - 4 * alpha * gamma),

        // getting the 2 y-intercepts for there are 2 pairs of tangents
        c1 = (-beta + k) / (2 * alpha),
            c2 = (-beta - k) / (2 * alpha),
            oneHND = 100,
            objPoints,
            c,
            m1,
            m2,
            p1,
            p2,
            p3,
            p4,
            i;

        // but we need only one pair and hence one value of y-intercept
        if (c1 < h2 && c1 > h1) {
          c = c2;
        } else if (c2 < h2 && c2 > h1) {
          c = c1;
        }
        // getting the slopes of the 2 tangents of the selected pair
        m1 = mathSqrt((mathPow(c - h1, 2) - mathPow(b1, 2)) / mathPow(a1, 2));
        m2 = -m1;

        // getting the 4 points of tangency
        // right sided points
        // upper
        p1 = {
          x: mathRound(mathPow(a1, 2) * m1 / (c - h1) * oneHND) / oneHND,
          y: mathRound((mathPow(b1, 2) / (c - h1) + h1) * oneHND) / oneHND
        };
        // lower
        p2 = {
          x: mathRound(mathPow(a2, 2) * m1 / (c - h2) * oneHND) / oneHND,
          y: mathRound((mathPow(b2, 2) / (c - h2) + h2) * oneHND) / oneHND
        };
        // left sided points
        // upper
        p3 = {
          x: mathRound(mathPow(a1, 2) * m2 / (c - h1) * oneHND) / oneHND,
          y: mathRound((mathPow(b1, 2) / (c - h1) + h1) * oneHND) / oneHND
        };
        // lower
        p4 = {
          x: mathRound(mathPow(a2, 2) * m2 / (c - h2) * oneHND) / oneHND,
          y: mathRound((mathPow(b2, 2) / (c - h2) + h2) * oneHND) / oneHND
        };
        // storing in object to be passed as a collection
        objPoints = {
          topLeft: p3,
          bottomLeft: p4,
          topRight: p1,
          bottomRight: p2
        };
        // checking for invalid situations
        for (i in objPoints) {
          if (isNaN(objPoints[i].x) || isNaN(objPoints[i].y)) {
            // The funnel is extremely thin and points of tangencies
            // coincide with ellipse ends
            if (i === 'topLeft' || i === 'bottomLeft') {
              objPoints[i].x = -a1;
            } else {
              objPoints[i].x = a1;
            }
            objPoints[i].y = i === 'bottomRight' || i === 'bottomLeft' ? h2 : h1;
          }
        }
        // object returned
        return objPoints;
      },
          getFunnel3DShapeArgs = function getFunnel3DShapeArgs(x, y, R1, R2, h, r3dFactor, isHollow) {
        var y2 = y + h,
            R3 = R1 * r3dFactor,
            R4 = R2 * r3dFactor,
            shapearge,
            objPoints = calcPoints(R1, R3, y, R2, R4, y2),
            topLeft = objPoints.topLeft,
            bottomLeft = objPoints.bottomLeft,
            topRight = objPoints.topRight,
            bottomRight = objPoints.bottomRight,
            X1 = x + topLeft.x,
            X2 = x + topRight.x,
            X3 = x + bottomLeft.x,
            X4 = x + bottomRight.x,
            y3 = topLeft.y,
            y4 = bottomLeft.y,
            arc1 = getArcPath(X2, y3, R1, R3, 0, 0),
            arc2 = getArcPath(X2, y3, R1, R3, 1, 1),
            arc3 = getArcPath(X3, y4, R2, R4, 1, 0),
            arc4 = getArcPath(X3, y4, R2, R4, 0, 1);

        shapearge = {
          front: [M, X1, y3].concat(arc1, [L, X4, y4], arc3, [Z]),

          back: [M, X1, y3].concat(arc2, [L, X4, y4], arc4, [Z]),
          silhuette: [M, X1, y3].concat(arc2, [L, X4, y4], arc3, [Z])
        };
        if (!isHollow) {
          shapearge.top = [M, X1, y3].concat(arc1, [L, X2, y3], getArcPath(X1, y3, R1, R3, 0, 1), [Z]);
        }

        return shapearge;
      },
          getPyramid3DShapeArgs = function getPyramid3DShapeArgs(x, y, R1, R2, h, r3dFactor, is2D, renderer, isFunnel, isHollow) {
        if (isObject(x)) {
          y = x.y;
          R1 = x.R1;
          R2 = x.R2;
          h = x.h;
          r3dFactor = x.r3dFactor;
          is2D = x.is2D;
          // use3DLighting = x.use3DLighting;
          isHollow = x.isHollow;
          isFunnel = x.isFunnel;
          renderer = x.renderer;
          x = x.x;
        }
        var X1 = x - R1,
            X2 = x + R1,
            X3 = x - R2,
            X4 = x + R2,
            y2 = y + h,
            shapeArgs,
            R3,
            R4,
            lightLength,
            lightLengthH,
            lightLengthH1,
            lightWidth;
        if (is2D) {
          shapeArgs = {
            silhuette: [M, X1, y, L, X2, y, X4, y2, X3, y2, Z]
          };

          if (!isFunnel) {
            // Rounding the x value to remove the thin white gap between following two halfs due
            // to sub-pixel rendering.
            x = Math.round(x);
            shapeArgs.lighterHalf = [M, X1, y, L, x, y, x, y2, X3, y2, Z];
            shapeArgs.darkerHalf = [M, x, y, L, X2, y, X4, y2, x, y2, Z];
          }
        } else if (isFunnel) {
          shapeArgs = getFunnel3DShapeArgs(x, y, R1 || minRadius, R2 || minRadius, h, r3dFactor, isHollow, renderer);
        } else {
          R3 = R1 * r3dFactor;
          R4 = R2 * r3dFactor;
          lightLength = mathMin(5, R1);
          lightLengthH = mathMin(2, 2 * R3);
          lightLengthH1 = mathMin(2, lightLengthH);
          lightWidth = lightLengthH1 / r3dFactor;
          shapeArgs = {
            top: [M, X1, y, L, x, y + R3, X2, y, x, y - R3, Z],
            front: [M, X1, y, L, x, y + R3, X2, y, X4, y2, x, y2 + R4, X3, y2, Z],
            topLight: [M, X1, y + 0.5, L, x, y + R3 + 0.5, x, y + R3 - lightLengthH, X1 + lightWidth, y, Z], // x, y + R3 - lightLengthH, Z],
            topLight1: [M, X2, y + 0.5, L, x, y + R3 + 0.5, x, y + R3 - lightLengthH1, X2 - lightWidth, y, Z], // x, y + R3 - lightLengthH, Z],
            silhuette: [M, X1, y, L, x, y - R3, X2, y, X4, y2, x, y2 + R4, X3, y2, Z],
            centerLight: [M, x, y + R3, L, x, y2 + R4, x - 5, y2 + R4, x - lightLength, y + R3, Z],
            centerLight1: [M, x, y + R3, L, x, y2 + R4, x + 5, y2 + R4, x + lightLength, y + R3, Z]
          };
        }

        return shapeArgs;
      },
          attr = function attr(hash, val) {
        var key,
            value,
            element = this,
            color,
            alpha,
            colorObject,
            shapeChanged = false,
            colorChanged = false,
            lightColor,
            lightColor1,
            darkColor,
            attr3D = this._3dAttr,
            shapeArgs,
            colorDark,
            colorLight,
            zero100STR,
            lightAlphaSTR,
            lightShade,
            slantAngle,
            lightShadeStop;

        // single key-value pair
        if (isString(hash) && defined(val)) {
          key = hash;
          hash = {};
          hash[key] = val;
        }

        // used as a getter: first argument is a string, second is UNDEF
        if (isString(hash)) {
          // if belongs from the list then handle here
          if (attrList[hash]) {
            element = this._3dAttr[hash];
          } else {
            // else leve for the original attr
            element = this._attr(hash);
          }

          // setter
        } else {
          for (key in hash) {
            value = hash[key];

            // if belongs from the list then handle here
            if (attrList[key]) {
              // store the att in attr3D for further use
              attr3D[key] = value;
              // if it is 'fill' or 'lighting3D' the redefine the colors for all the 3 elements
              if (key === fillStr) {
                if (value && value.linearGradient && value.stops && value.stops[0]) {
                  value = value.stops[0][1];
                }

                if (startsRGBA.test(value)) {
                  colorObject = new Color(value);
                  color = colorObject.get('hex');
                  alpha = colorObject.get('a') * 100;
                } else if (value && value.FCcolor) {
                  color = value.FCcolor.color.split(_lib.COMMASTRING)[0];
                  alpha = value.FCcolor.opacity.split(_lib.COMMASTRING)[0];
                } else if (HEXCODE.test(value)) {
                  color = value.replace(dropHash, _lib.HASHSTRING);
                  alpha = (0, _lib.pluckNumber)(attr3D.opacity, 100);
                }
                attr3D.color = color;
                attr3D.opacity = alpha;
                colorChanged = true;
              } else if (key === 'color' || key === 'opacity') {
                attr3D.fill = (0, _lib.toRaphaelColor)(convertColor(attr3D.color, (0, _lib.pluckNumber)(attr3D.opacity, 100)));
                colorChanged = true;
              } else if (key === 'stroke' || key === 'strokeColor' || key === 'strokeAlpha') {
                if (attr3D.is2D) {
                  // stroke is only applicable on 2d shape
                  if (key === 'stroke') {
                    if (value && value.linearGradient && value.stops && value.stops[0]) {
                      value = value.stops[0][1];
                    }

                    if (startsRGBA.test(value)) {
                      colorObject = new Color(value);
                      color = colorObject.get('hex');
                      alpha = colorObject.get('a') * 100;
                    } else if (value && value.FCcolor) {
                      color = value.FCcolor.color.split(_lib.COMMASTRING)[0];
                      alpha = value.FCcolor.opacity.split(_lib.COMMASTRING)[0];
                    } else if (HEXCODE.test(value)) {
                      color = value.replace(dropHash, _lib.HASHSTRING);
                      alpha = (0, _lib.pluckNumber)(attr3D.opacity, 100);
                    }
                    attr3D.strokeColor = color;
                    attr3D.strokeAlpha = alpha;
                  } else {
                    attr3D.stroke = convertColor(attr3D.strokeColor, (0, _lib.pluckNumber)(attr3D.strokeAlpha, 100));
                  }
                  if (attr3D.isFunnel) {
                    this.funnel2D.attr('stroke', attr3D.stroke);
                  } else {
                    this.borderElement.attr('stroke', attr3D.stroke);
                  }
                }
              } else if (key === 'stroke-width') {
                if (attr3D.is2D) {
                  // stroke is only applicable on 2d shape
                  if (attr3D.isFunnel) {
                    this.funnel2D.attr(key, value);
                  } else {
                    this.borderElement.attr(key, value);
                  }
                }
              } else {
                shapeChanged = true;
              }
            } else {
              // else leave for the original attr
              this._attr(key, value);
            }
          }

          if (attr3D.is2D) {
            if (shapeChanged) {
              shapeArgs = getPyramid3DShapeArgs(attr3D.x, attr3D.y, attr3D.R1, attr3D.R2, attr3D.h, attr3D.r3dFactor, attr3D.is2D);
              element.shadowElement.attr({
                path: shapeArgs.silhuette
              });
              if (attr3D.isFunnel) {
                element.funnel2D.attr({
                  path: shapeArgs.silhuette
                });
              } else {
                element.lighterHalf.attr({
                  path: shapeArgs.lighterHalf
                });
                element.darkerHalf.attr({
                  path: shapeArgs.darkerHalf
                });
                element.borderElement.attr({
                  path: shapeArgs.silhuette
                });
              }
            }
            // if color change requared
            if (colorChanged) {
              if (attr3D.isFunnel) {
                element.funnel2D.attr(fillStr, (0, _lib.toRaphaelColor)(convertColor(attr3D.color, (0, _lib.pluckNumber)(attr3D.opacity, 100))));
              } else {
                if (attr3D.use3DLighting === false) {
                  colorDark = colorLight = attr3D.color;
                } else {
                  colorDark = getDarkColor(attr3D.color, 80);
                  colorLight = getLightColor(attr3D.color, 80);
                }
                element.lighterHalf.attr(fillStr, (0, _lib.toRaphaelColor)(convertColor(colorLight, (0, _lib.pluckNumber)(attr3D.opacity, 100))));
                element.darkerHalf.attr(fillStr, (0, _lib.toRaphaelColor)(convertColor(colorDark, (0, _lib.pluckNumber)(attr3D.opacity, 100))));
              }
            }
          } else {
            // if shape changed requared
            if (shapeChanged) {
              shapeArgs = getPyramid3DShapeArgs(attr3D.x, attr3D.y, attr3D.R1, attr3D.R2, attr3D.h, attr3D.r3dFactor, attr3D.is2D);
              element.shadowElement.attr(pathStr, shapeArgs.silhuette);
              if (attr3D.isFunnel) {
                element.front.attr(pathStr, shapeArgs.front);
                element.back.attr(pathStr, shapeArgs.back);
                if (element.toptop && shapeArgs.top) {
                  element.toptop.attr(pathStr, shapeArgs.top);
                }
              } else {
                element.front.attr(pathStr, shapeArgs.front);
                element.toptop.attr(pathStr, shapeArgs.top);
                element.topLight.attr(pathStr, shapeArgs.topLight);
                element.topLight1.attr(pathStr, shapeArgs.topLight1);
                element.centerLight.attr(pathStr, shapeArgs.centerLight);
                element.centerLight1.attr(pathStr, shapeArgs.centerLight1);
              }
            }
            // if color change requared
            if (colorChanged) {
              color = attr3D.color;
              alpha = attr3D.opacity;
              if (attr3D.isFunnel) {
                lightColor = getLightColor(color, 60);
                darkColor = getDarkColor(color, 60);
                element.back.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: darkColor + _lib.COMMASTRING + lightColor + _lib.COMMASTRING + color,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
                    ratio: '0,60,40',
                    angle: 0
                  }
                }));
                element.front.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: color + _lib.COMMASTRING + lightColor + _lib.COMMASTRING + darkColor,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
                    ratio: '0,40,60',
                    angle: 0
                  }
                }));
                if (element.toptop) {
                  element.toptop.attr(fillStr, (0, _lib.toRaphaelColor)({
                    FCcolor: {
                      color: lightColor + _lib.COMMASTRING + darkColor,
                      alpha: alpha + _lib.COMMASTRING + alpha,
                      ratio: zeroCommaHundredStr,
                      angle: -65
                    }
                  }));
                }
              } else {
                lightColor = getLightColor(color, 80);
                lightColor1 = getLightColor(color, 70);
                darkColor = getDarkColor(color, 80);
                zero100STR = zeroCommaHundredStr;
                lightAlphaSTR = '0,' + alpha;
                lightShade = color + _lib.COMMASTRING + lightColor1;
                slantAngle = -45;
                lightShadeStop = 5 / (attr3D.R1 * attr3D.r3dFactor) * 100;
                // slantAngle = - math.atan(1 / attr3D.r3dFactor) / deg2rad

                element.centerLight.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: lightShade,
                    alpha: lightAlphaSTR,
                    ratio: zero100STR,
                    angle: 0
                  }
                }));
                element.centerLight1.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: lightShade,
                    alpha: lightAlphaSTR,
                    ratio: zero100STR,
                    angle: 180
                  }
                }));
                element.topLight.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: lightColor1 + _lib.COMMASTRING + lightColor1 + _lib.COMMASTRING + color + _lib.COMMASTRING + color,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + 0 + _lib.COMMASTRING + 0,
                    ratio: '0,50,' + lightShadeStop + _lib.COMMASTRING + (50 - lightShadeStop),
                    angle: slantAngle
                  }
                }));
                element.topLight1.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: lightColor1 + _lib.COMMASTRING + color + _lib.COMMASTRING + darkColor,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
                    ratio: '0,50,50',
                    angle: 0
                  }
                }));
                element.front.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: color + _lib.COMMASTRING + color + _lib.COMMASTRING + darkColor + _lib.COMMASTRING + darkColor,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
                    ratio: '0,50,0,50',
                    angle: 0
                  }
                }));
                element.toptop.attr(fillStr, (0, _lib.toRaphaelColor)({
                  FCcolor: {
                    color: lightColor + _lib.COMMASTRING + color + _lib.COMMASTRING + darkColor + _lib.COMMASTRING + darkColor,
                    alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
                    ratio: '0,25,30,45',
                    angle: slantAngle
                  }
                }));
              }
            }
          }
        }
        return element;
      },
          shadow = function shadow() {
        var silhuette = this.shadowElement;
        if (shadow) {
          silhuette.shadow.apply(silhuette, arguments);
        }
      },
          normalizeShapes = function normalizeShapes(group, newAttrs) {
        var shapes = ['silhuette', 'lighterHalf', 'darkerHalf', 'centerLight', 'centerLight1', 'front', 'toptop', 'topLight', 'topLight1', 'shadowElement', 'funnel2D', 'back'],
            shapeGElem,
            index,
            shapeName,
            oldAttrs,
            length;

        if (!group) {
          return;
        }

        oldAttrs = group._3dAttr;

        if (oldAttrs.isFunnel === newAttrs.isFunnel && oldAttrs.is2D === newAttrs.is2D && oldAttrs.isHollow === newAttrs.isHollow) {
          return group;
        }

        for (index = 0, length = shapes.length; index < length; index++) {
          shapeName = shapes[index];
          shapeGElem = group[shapeName];

          if (!shapeGElem) {
            continue;
          }
          delete group[shapeName];
          shapeGElem.remove();
        }

        return group;
      },
          animatePathIfPresent = function animatePathIfPresent(datasetStore, parentElem) {
        var chart = datasetStore.getFromEnv('chart');

        return function (elemType, pathArr, nonAnimAttr) {
          var prevEle = parentElem[elemType];

          if (prevEle) {
            // return prevEle.animateWith(dummyAnimElem, dummyAnimObj, {
            //   path: pathArr
            // }, animDuration, animType, datasetStore.postPlotCallback);
            chart.getFromEnv('animationManager').setAnimation({
              el: prevEle,
              attr: { path: pathArr },
              component: datasetStore
            });
            return prevEle;
          }

          nonAnimAttr = nonAnimAttr || EMPTY_OBJ;
          datasetStore.postPlotCallback();
          return chart.getFromEnv('animationManager').setAnimation({
            el: 'path',
            label: 'path',
            attr: (0, _assign2['default'])({ path: pathArr }, nonAnimAttr),
            container: parentElem,
            component: datasetStore
          });
          // renderer.path(pathArr, parentElem).attr(nonAnimAttr);
        };
      };

      return function (x, y, R1, R2, h, r3dFactor, gStr, is2D, renderer, isFunnel, isHollow, use3DLighting) {
        var datasetStore = this,
            chart = datasetStore.getFromEnv('chart'),
            graphicsGroup = chart.getChildContainer().plotGroup,
            _3dAttr,
            Shapeargs,
            Shapeargs2,
            oldLastData = datasetStore.config.oldLastData,
            rect3D,
            squeezedFormPathObj,
            squeezedShapeArgs,
            existingGElement,
            animationType = 'easeIn',
            animOrDraw;

        if (isObject(x)) {
          y = x.y;
          R1 = x.R1;
          R2 = x.R2;
          h = x.h;
          r3dFactor = x.r3dFactor;
          gStr = x.gStr;
          is2D = x.is2D;
          use3DLighting = x.use3DLighting;
          renderer = x.renderer;
          isHollow = x.isHollow;
          isFunnel = x.isFunnel;
          existingGElement = x.graphics;
          x = x.x;
        }
        r3dFactor = (0, _lib.pluckNumber)(r3dFactor, 0.15);
        _3dAttr = {
          x: x,
          y: y,
          R1: R1,
          R2: R2,
          h: h,
          r3dFactor: r3dFactor,
          is2D: is2D,
          use3DLighting: use3DLighting,
          isHollow: isHollow,
          isFunnel: isFunnel,
          renderer: renderer
        };
        // Shapeargs = getPyramid3DShapeArgs(_3dAttr);

        rect3D = normalizeShapes(existingGElement, _3dAttr) || renderer.group(gStr, graphicsGroup);
        rect3D.toFront();

        if ((!rect3D.front && !is2D || !(rect3D.funnel2D || rect3D.lighterHalf) && is2D) && datasetStore.getState('notInitial') && datasetStore.config.prevIs2d === _3dAttr.is2D) {
          Shapeargs2 = getPyramid3DShapeArgs(_3dAttr);
          oldLastData.y = oldLastData.y + oldLastData.h;
          oldLastData.R1 = oldLastData.R2;
          oldLastData.h = 0;
          Shapeargs = getPyramid3DShapeArgs(oldLastData);
        } else {
          Shapeargs = getPyramid3DShapeArgs(_3dAttr);
          datasetStore.getState('notInitial', true);
        }

        squeezedShapeArgs = (0, _assign2['default'])({}, _3dAttr);
        squeezedShapeArgs.y = squeezedShapeArgs.y + squeezedShapeArgs.h;
        squeezedShapeArgs.R1 = squeezedShapeArgs.R2;
        squeezedShapeArgs.h = 0;
        squeezedFormPathObj = getPyramid3DShapeArgs(squeezedShapeArgs);

        rect3D.squeezedFormPathObj = squeezedFormPathObj;

        rect3D.Shapeargs = Shapeargs2 || Shapeargs;

        animOrDraw = animatePathIfPresent(datasetStore, rect3D, animationType);

        rect3D.shadowElement = animOrDraw('shadowElement', Shapeargs.silhuette, {
          fill: TRACKER_FILL,
          stroke: noneStr
        });

        // modify the attr function of the group so that it can handle pyramid attrs
        // store the old function
        rect3D._attr = rect3D._attr || rect3D.attr;
        rect3D.attr = attr;

        // Replace the shadow function with a modified version.
        rect3D.shadow = shadow;

        // store the 3d attr(requared in new attr function to change any related
        //                  attr modiffiaction)
        rect3D._3dAttr = _3dAttr;

        // add the new attr function
        if (isFunnel) {
          // if the drawing is a 2d drawing
          if (is2D) {
            rect3D.funnel2D = animOrDraw('funnel2D', Shapeargs.silhuette);
            Shapeargs2 && (rect3D.funnel2D = animOrDraw('funnel2D', Shapeargs2.silhuette));
          } else {
            rect3D.back = animOrDraw('back', Shapeargs.back, {
              'stroke-width': 0,
              stroke: noneStr
            });

            rect3D.front = animOrDraw('front', Shapeargs.front, {
              'stroke-width': 0,
              stroke: noneStr
            });

            Shapeargs2 && (rect3D.back = animOrDraw('back', Shapeargs2.back, {
              'stroke-width': 0,
              stroke: noneStr
            }));

            Shapeargs2 && (rect3D.front = animOrDraw('front', Shapeargs2.front, {
              'stroke-width': 0,
              stroke: noneStr
            }));

            if (Shapeargs.top) {
              rect3D.toptop = animOrDraw('toptop', Shapeargs.top, {
                'stroke-width': 0,
                stroke: noneStr
              });
              Shapeargs2 && (rect3D.toptop = animOrDraw('toptop', Shapeargs2.top, {
                'stroke-width': 0,
                stroke: noneStr
              }));
            }
          }
        } else {
          // if the drawing is a 2d drawing
          if (is2D) {
            rect3D.lighterHalf = animOrDraw('lighterHalf', Shapeargs.lighterHalf, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.lighterHalf = animOrDraw('lighterHalf', Shapeargs2.lighterHalf, {
              'stroke-width': 0
            }));

            rect3D.darkerHalf = animOrDraw('darkerHalf', Shapeargs.darkerHalf, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.darkerHalf = animOrDraw('darkerHalf', Shapeargs2.darkerHalf, {
              'stroke-width': 0
            }));

            rect3D.borderElement = animOrDraw('borderElement', Shapeargs.silhuette, {
              fill: TRACKER_FILL,
              stroke: noneStr
            });
            Shapeargs2 && (rect3D.borderElement = animOrDraw('borderElement', Shapeargs2.silhuette, {
              fill: TRACKER_FILL,
              stroke: noneStr
            }));
          } else {
            // else it should be 3d

            rect3D.front = animOrDraw('front', Shapeargs.front, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.front = animOrDraw('front', Shapeargs2.front, {
              'stroke-width': 0
            }));

            rect3D.centerLight = animOrDraw('centerLight', Shapeargs.centerLight, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.centerLight = animOrDraw('centerLight', Shapeargs2.centerLight, {
              'stroke-width': 0
            }));

            rect3D.centerLight1 = animOrDraw('centerLight1', Shapeargs.centerLight1, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.centerLight1 = animOrDraw('centerLight1', Shapeargs2.centerLight1, {
              'stroke-width': 0
            }));

            rect3D.toptop = animOrDraw('toptop', Shapeargs.top, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.toptop = animOrDraw('toptop', Shapeargs2.top, {
              'stroke-width': 0
            }));

            rect3D.topLight = animOrDraw('topLight', Shapeargs.topLight, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.topLight = animOrDraw('topLight', Shapeargs2.topLight, {
              'stroke-width': 0
            }));

            rect3D.topLight1 = animOrDraw('topLight1', Shapeargs.topLight1, {
              'stroke-width': 0
            });
            Shapeargs2 && (rect3D.topLight1 = animOrDraw('topLight1', Shapeargs2.topLight1, {
              'stroke-width': 0
            }));
          }
        }

        return rect3D;
      };
    }();

    var utils = _this.utils(_this),
        invokeHookFns = utils.invokeHookFns,
        postInitHookFn = _this.postInitHook;
    invokeHookFns(postInitHookFn);
    return _this;
  }
  /**
   * Trim extra old data compared to new data
   * @param {Object} datasetJSON input JSON data
   */


  FunnelPyramidBaseDataset.prototype.trimData = function trimData(datasetJSON) {
    _pie2d.trimData.call(this, datasetJSON);
  };

  /**
   * Stores the data which are to be removed in removedDataArr during
   * configure
   *
   * @param {any} index index
   * @param {any} stretch how many elements to be deleted
   * @param {any} draw whether to draw after removing
   * @memberof FunnelPyramidBaseDataset
   */


  FunnelPyramidBaseDataset.prototype.removeData = function removeData(index, stretch) {
    var draw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var dataset = this,
        components = dataset.components,
        dataStore = components.data,
        removedDataArr,
        i,
        len;

    stretch = (0, _lib.pluckNumber)(stretch, 1);
    index = (0, _lib.pluckNumber)(index, 0);

    // Store the elements which are no longer required
    removedDataArr = components.removedDataArr = dataStore.splice(index, stretch);
    len = removedDataArr.length;

    for (i = 0; i < len; i++) {
      if (!removedDataArr[i]) {
        removedDataArr.splice(i, 1);
      }
    }

    draw && dataset.asyncDraw();
  };
  /**
   * Removes extra plot elements when number of current data
   * is less than number of previous data
   */


  FunnelPyramidBaseDataset.prototype.removeElements = function removeElements() {
    var dataset = this,
        components = dataset.components,
        removedDataArr = components.removedDataArr,
        i,
        elem,
        graphics,
        point;

    if (!removedDataArr) {
      return;
    }
    for (i = removedDataArr.length - 1; i >= 0; i--) {
      point = removedDataArr[i];
      graphics = point.getGraphicalElement();

      for (elem in graphics) {
        point.removeGraphicalElement(graphics[elem]);
      }

      removedDataArr.splice(i, 1);
    }
  };
  /**
   * Configure dataset
   */


  FunnelPyramidBaseDataset.prototype._configure = function _configure() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        colorManager = datasetStore.getFromEnv('color-manager'),
        chartConfig = chart.config,
        globalStyle = chartConfig.style,
        dataStoreComponent = datasetStore.components,
        datasetConf = datasetStore.config || {},
        jsonDataObj = datasetStore.config.JSONData,
        datasetDataArr = jsonDataObj.data || [],
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {},
        utils = datasetStore.utils(datasetStore),
        invokeHookFns = utils.invokeHookFns,
        copyProperties = utils.copyProperties,
        BLANK_SPACE = 3,
        DEFAULT_LABEL_DISTANCE = 50,
        DEFAULT_BLANK_SPACE = 3,
        configureSpecificsFn = datasetStore.configureSpecifics,
        baseFontColor = colorManager.getColor('baseFontColor');

    // Parse all the attributes common to pyramid and funnel
    copyProperties(chartAttr, datasetConf, [['showlabels', 'showLabels', _lib.pluckNumber, 1], ['showvalues', 'showValues', _lib.pluckNumber, 1], ['plottooltext', 'toolText', _lib.pluck, _lib.BLANK], ['enableslicing', 'enableSlicing', _lib.pluckNumber, 1], ['plotfillalpha', 'plotFillAlpha', _lib.pluckNumber, 100], ['showplotborder', 'showPlotBorder', _lib.pluckNumber, 0], ['plotborderalpha', 'plotBorderAlpha', _lib.pluckNumber, UNDEF], ['plotbordercolor', 'plotBorderColor', _lib.pluck, UNDEF], ['plotborderthickness', 'plotBorderThickness', _lib.pluckNumber, 1], ['showshadow', 'showShadow', _lib.pluckNumber, 1], ['showhovereffect', showHoverEffectStr, _lib.pluckNumber, 0], ['hovercapsepchar', 'hoverCapSepChar', _lib.pluck, _lib.COMMASPACE], ['tooltipsepchar', 'tooltipSepChar', _lib.pluck, '$hoverCapSepChar'], ['labelsepchar', 'labelSepChar', _lib.pluck, '$tooltipSepChar'], ['showpercentintooltip', 'showPercentInToolTip', _lib.pluckNumber, 1], ['showpercentvalues', 'showPercentValues', _lib.pluckNumber, 0], [_lib.BLANK, 'blankSpace', _lib.pluckNumber, BLANK_SPACE], ['labeldistance', 'labelDistance', _lib.pluckNumber, DEFAULT_LABEL_DISTANCE], ['issliced', 'isSliced', _lib.pluckNumber, 0], ['is2d', 'is2d', _lib.pluckNumber, 0], [_lib.BLANK, 'blankSpace', _lib.pluckNumber, DEFAULT_BLANK_SPACE], ['showlabelsatcenter', 'showLabelsAtCenter', _lib.pluckNumber, 0], ['smartlinethickness', 'connectorWidth', _lib.pluckNumber, 1], ['smartlinealpha', 'connectorAlpha', _lib.pluckNumber, 100], ['smartlinecolor', 'rawSmartLineColorCode', _lib.pluck, function () {
      return colorManager.getColor('baseFontColor');
    }], ['labelalpha', 'labelAlpha', _lib.pluckNumber, 100], ['basefont', 'baseFont', _lib.pluck, 'Verdana,sans'], ['basefontsize', 'baseFontSize', _lib.pluckNumber, 10], ['basefontcolor', 'baseFontColor', _lib.pluck, baseFontColor], ['labelfontcolor', 'labelFontColor', _lib.pluck, '$baseFontColor'], ['showtooltip', 'showTooltip', _lib.pluckNumber, 1], ['percentofprevious', 'percentOfPrevious', _lib.pluckNumber, 0], ['animationduration', 'animationDuration', _lib.pluckNumber, 1, function (datasetConf) {
      datasetConf.animationDuration *= 1000;
    }]]);

    datasetConf.connectorColor = convertColor(datasetConf.rawSmartLineColorCode, datasetConf.connectorAlpha);

    // Calculate the line height with the style applied in chart level
    (0, _lib.setLineHeight)(globalStyle);
    // Get only the starting digits from the line height string. This is a temprary property.
    globalStyle.nLineHeight = globalStyle.lineHeight.match(/^\d+/)[0];

    copyProperties(globalStyle, datasetConf, [[_lib.BLANK, 'lineHeight', _lib.pluckNumber, datasetConf.baseFontSize]]);

    // Stores the state when isSliced is set to 1 at dataset level.
    // Used to keep the plot in clicked state.
    if (datasetConf.isSliced) {
      datasetConf.clicked = true;
    }
    // Detele the property as it was created for computation purpose only.
    delete globalStyle.nLineHeight;

    // Call function for specific configuration partucular to a chart.
    invokeHookFns(configureSpecificsFn);

    if (!datasetConf.showLabels && !datasetConf.showValues) {
      // If the labels and values both are disabled, refrain from plotting the datalabels.
      // This is a flag that let the drawing components know about the user choice.
      datasetConf.datalabelDisabled = true;
    } else {
      datasetConf.datalabelDisabled = false;
    }

    // Normalize the data set. This process handles all the parseInt, parseFloat like methods, computes
    // additional keys if necessary
    dataStoreComponent.data = datasetStore.getNormalizeDataSet(datasetDataArr);
  };

  /**
   * Is called during post spacemanagement, it sets the slicing distance by using canvasHeight.
   * Also, does preDrawing calculations required when data is streamlined.
   *
   * @memberof FunnelPyramidBaseDataset
   */


  FunnelPyramidBaseDataset.prototype._preDrawingHook = function _preDrawingHook() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        datasetConf = dataset.config,
        chartConf = chart.config,
        utils = dataset.utils(dataset),
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {},
        heightAllotted = chartConf.canvasHeight,
        copyProperties = utils.copyProperties;

    // Set slicing distance. This parsing cannot be done in configure because
    // it needs canvasHeight, which is calculated after space management of chart
    copyProperties(chartAttr, datasetConf, [[_lib.BLANK, 'slicingDistance', _lib.pluckNumber, heightAllotted * 0.1], ['slicingdistance', 'slicingHeight', _lib.pluckNumber, '$slicingDistance', function () {
      if (datasetConf.slicingHeight > 2 * datasetConf.slicingDistance) {
        datasetConf.slicingDistance = 0;
      } else {
        datasetConf.slicingDistance = datasetConf.slicingHeight;
      }
    }]]);
  };
  /**
   * Checks whether input data is valid or not
   * @param {Object} data input data
   * @return {boolean} returns boolean value whether data is valid or not
   */


  FunnelPyramidBaseDataset.prototype._checkValidData = function _checkValidData(data) {
    var datasetDefStore = this,
        chart = datasetDefStore.getFromEnv('chart');

    if (!(data && data.length)) {
      chart.setChartMessage();
      return false;
    }

    return true;
  };

  /**
   * Add legend items
   */


  FunnelPyramidBaseDataset.prototype.addLegend = function addLegend() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        config,
        legendItem,
        legendItemCounter = 0,
        chartAttr = chart.getFromEnv('dataSource').chart,
        i,
        dataObj,
        data = dataset.components.data || dataset.config.JSONData.data,
        legend = chart.getFromEnv('legend');
    for (i = 0; i < data.length; i += 1) {
      dataObj = data[i];
      dataset.config.legendItemId = dataObj.legendItemId;
      if (dataObj.pseudoPoint) {
        continue;
      }
      // count the number of legenditems
      legendItemCounter++;
      config = {
        type: dataset.getName(),
        label: dataObj.label || dataObj.categoryLabel,
        index: i,
        enabled: (0, _lib.pluckNumber)(chartAttr.includeinlegend, 1),
        legendItemId: dataObj.legendItemId
      };
      legendItem = legend.getItem(dataset.config.legendItemId);
      if (!legendItem) {
        dataset.config.legendItemId = legend.createItem(dataset, {
          click: dataset.legendClick
        });
        dataObj.legendItemId = dataset.config.legendItemId;
        config.legendItemId = dataset.config.legendItemId;
        config.dataset = dataset;
        config.datasetVisible = true;
        legendItem = legend.getItem(dataset.config.legendItemId);
        legendItem.configure(config);
        legendItem.addEventListener('click', dataset.legendClickHandler(dataset, legendItemCounter - 1));
      } else {
        config.legendItemId = dataset.config.legendItemId;
        config.dataset = dataset;
        legendItem.configure(config);
      }
      legendItem.setStateCosmetics('default', {
        symbol: {
          fill: data[i].legendColor
        }
      });
    }
    // remove the extra legend items
    if (legendItemCounter < legend.getChildren().legendItem.length) {
      for (var j = legendItemCounter; j < legend.getChildren().legendItem.length; j++) {
        legendItem = legend.getChildren().legendItem[j];
        legend.disposeItem(legendItem.config.legendItemId);
      }
    }
  };
  /**
   * Normalize dataset
   * @param {Array} dataArr input data
   * @return {Array} returns filtered data
   */


  FunnelPyramidBaseDataset.prototype.getNormalizeDataSet = function getNormalizeDataSet(dataArr) {
    var datasetStore = this,
        dsStore = datasetStore.components.data,
        Point = datasetStore.config.pointInContext,
        chart = datasetStore.getFromEnv('chart'),
        conf = datasetStore.config,
        numberFormatter = datasetStore.getFromEnv('number-formatter'),
        smartLabel = datasetStore.getFromEnv('smartLabel'),
        colorManager = datasetStore.getFromEnv('color-manager'),
        index,
        dataObj,
        filteredData = [],
        refreshedData,
        hasValidPoint,
        highestValue,
        sumValue = 0,
        sum,
        refreshedDataLength,
        dataValue,
        prevValue,
        name,
        smartTextObj,
        noOFSlicedElement = 0,
        pointSliced,
        pValue,
        formatedVal,
        labelText,
        displayValueText,
        displayValue,
        toolText,
        ttValue,
        filteredDataObj,
        showPercentValues = conf.showPercentValues,
        labelSepChar = conf.labelSepChar,
        chartAttr = chart.getFromEnv('dataSource').chart,
        isSliced = conf.isSliced,
        plotColor,
        plotAlpha,
        plotBorderColor,
        plotBorderAlpha,
        pointShadow = {
      apply: conf.showShadow,
      opacity: 1
    },
        tooltipOptions,
        defStyle,
        hoverEffects,
        displayValueArgs,
        plotBorderWidth = conf.plotBorderThickness,
        dataConnectorStyle = conf.dataConnectorStyle = {},
        colorIndexStart = chart.config.PLOT_COLOR_INDEX_START,
        res,
        point,
        counter = 0,
        legendItemId,
        colorApplied,
        labellink,
        legendColor;
    /**
     * Extract the text styles
     * @param {Object} dataObj input data
     * @return {Object} returns parsed style object
     */
    function extractTextStyle(dataObj) {
      var keyMap = {
        'labelfont': 'fontFamily',
        'labelfontcolor': 'color',
        'labelfontsize': 'fontSize',
        'labelfontbold': 'fontWeight',
        'labelfontitalic': 'fontStyle'
      },
          style,
          key;

      for (key in keyMap) {
        if (!(key in dataObj)) {
          continue;
        }

        style = style || {};
        style[keyMap[key]] = dataObj[key];
      }

      if (!style) {
        return style;
      }

      if (style.fontWeight) {
        style.fontWeight = (0, _lib.pluckNumber)(style.fontWeight) ? 'bold' : 'normal';
      }

      if (style.fontStyle) {
        style.fontStyle = (0, _lib.pluckNumber)(style.fontStyle) ? 'italic' : 'normal';
      }

      return style;
    }

    (0, _lib.extend2)(defStyle = conf.style = {}, chart.config.style);

    defStyle.borderDash = noneStr;
    defStyle.borderPadding = 2;
    defStyle.borderRadius = 0;
    defStyle.borderThickness = 1;
    defStyle.color = convertColor(conf.labelFontColor, conf.labelAlpha);
    defStyle.fontFamily = conf.baseFont;
    defStyle.fontSize = conf.baseFontSize + PXSTRING;
    defStyle.fontStyle = NORMALSTRING;
    defStyle.fontWeight = NORMALSTRING;

    dataConnectorStyle.connectorWidth = conf.connectorWidth;
    dataConnectorStyle.connectorColor = conf.connectorColor;

    res = datasetStore.datasetCalculations(dataArr);
    hasValidPoint = res.hasValidPoint;
    refreshedData = res.refreshedData;
    sumValue = res.sumValue;
    // countPoint = res.countPoint;
    highestValue = res.highestValue;

    datasetStore._chartLevelAttr = (0, _lib.parsexAxisStyles)({}, {}, chartAttr, defStyle);

    if (hasValidPoint) {
      conf.sumValue = sumValue;

      sum = numberFormatter.dataLabels(sumValue);
      refreshedDataLength = refreshedData.length;
      smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);

      !conf.streamLinedData && datasetStore.getName() === 'funnel' && (counter = 1);
      for (index = 0; index < refreshedDataLength; index += 1, counter += 1) {
        dataObj = refreshedData[index];
        point = dsStore && dsStore[counter];

        labellink = (0, _lib.pluck)(dataObj.labellink, chartAttr.labellink, UNDEF);
        legendItemId = dataObj.legendItemId;
        dataValue = dataObj.cleanValue;
        prevValue = index ? refreshedData[index - 1].value : dataValue;
        name = (0, _lib.parseUnsafeString)((0, _lib.pluck)(dataObj.label, dataObj.name, BLANKSTRING));

        smartTextObj = smartLabel.getOriSize(name);

        plotAlpha = dataObj.alpha || conf.plotFillAlpha;

        colorApplied = (0, _lib.pluck)(dataObj.color, colorManager.getPlotColor(colorIndexStart++));
        legendColor = convertColor(colorApplied);
        plotColor = convertColor(colorApplied, plotAlpha);

        plotBorderColor = (0, _lib.pluck)(dataObj.bordercolor, conf.plotBorderColor, getLightColor(colorApplied, 25)).split(_lib.COMMASTRING)[0];

        plotBorderAlpha = !conf.showPlotBorder ? _lib.ZEROSTRING : (0, _lib.pluck)(dataObj.borderalpha, conf.plotBorderAlpha, '80');

        pointShadow.opacity = Math.max(plotAlpha, plotBorderAlpha) / 100;

        pointSliced = (0, _lib.pluckNumber)(dataObj.issliced, isSliced);
        if (pointSliced) {
          noOFSlicedElement += 1;
          conf.preSliced = pointSliced;
        }

        if (res.prevPerValReq) {
          sumValue = prevValue;
        }

        pValue = numberFormatter.percentValue(dataValue / sumValue * 100);
        if (!conf.datalabelDisabled) {
          formatedVal = numberFormatter.dataLabels(dataValue) || BLANKSTRING;

          labelText = conf.showLabels === 1 ? name : BLANKSTRING;

          displayValueText = (0, _lib.pluckNumber)(dataObj.showvalue, conf.showValues) === 1 ? showPercentValues === 1 ? pValue : formatedVal : BLANKSTRING;

          displayValue = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(dataObj.displayvalue));

          displayValueArgs = (0, _lib.pluck)(displayValue, name + labelSepChar + (showPercentValues ? pValue : formatedVal), BLANKSTRING);

          if (displayValue) {
            displayValueText = displayValue;
          } else {
            if (displayValueText !== BLANKSTRING && labelText !== BLANKSTRING) {
              displayValueText = labelText + labelSepChar + displayValueText;
            } else {
              displayValueText = (0, _lib.pluck)(labelText, displayValueText) || BLANKSTRING;
            }
          }
        }

        toolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(dataObj.tooltext, conf.toolText)));

        if (toolText !== UNDEF) {
          tooltipOptions = {
            formatedVal: formatedVal,
            name: name,
            pValue: pValue,
            sum: sum,
            sumValue: sum,
            dataValue: dataValue,
            prevValue: prevValue,
            highestValue: highestValue
          };

          toolText = (0, _lib.parseTooltext)(toolText, [1, 2, 3, 7, 14, 24, 25, 37], FunnelPyramidBaseDataset.getTooltipMacroStub(tooltipOptions), dataObj, chartAttr);
        } else {
          ttValue = conf.showPercentInToolTip === 1 ? pValue : formatedVal;
          toolText = name !== BLANKSTRING ? name + conf.tooltipSepChar + ttValue : ttValue;
        }

        hoverEffects = datasetStore.pointHoverOptions(dataObj, {
          color: colorApplied,
          alpha: plotAlpha,
          borderColor: plotBorderColor,
          borderAlpha: plotBorderAlpha,
          borderWidth: plotBorderWidth
        });

        filteredDataObj = {
          displayValue: displayValueText,
          displayValueArgs: displayValueArgs,
          style: (0, _lib.parsexAxisStyles)(dataObj, {}, chartAttr, defStyle, plotColor),
          appliedStyle: extractTextStyle(dataObj),
          name: name,
          categoryLabel: name,
          rawColor: colorApplied,
          rawAlpha: plotAlpha,
          toolText: toolText,
          legendCosmetics: UNDEF,
          legendItemId: legendItemId || datasetStore.components.data && datasetStore.components.data[index] && datasetStore.components.data[index].legendItemId,
          showInLegend: UNDEF,
          y: dataValue,
          shadow: pointShadow,
          smartTextObj: smartTextObj,
          legendColor: legendColor,
          color: plotColor,
          alpha: plotAlpha,
          borderColor: convertColor(plotBorderColor, plotBorderAlpha),
          borderWidth: plotBorderWidth,
          link: (0, _lib.getValidValue)(dataObj.link),
          isSliced: pointSliced,
          doNotSlice: !conf.enableSlicing,
          hoverEffects: hoverEffects.enabled && hoverEffects.options,
          labellink: labellink,
          rolloverProperties: hoverEffects.enabled && hoverEffects.rolloverOptions
        };

        if (!point) {
          point = new Point();
        }
        point.configure(filteredDataObj);

        filteredData[counter] = point;
      }
    }

    if (!conf.streamLinedData && datasetStore.getName() === 'funnel') {
      filteredData[0] = {
        displayValue: _lib.BLANK,
        y: conf.sumValue
      };
    }
    conf.noOFSlicedElement = noOFSlicedElement;
    return filteredData;
  };
  /**
   * Calculates data points and configures
   * @param {Array} dataArr input data
   * @return {Object} returns calculated object with configurations and data array
   */


  FunnelPyramidBaseDataset.prototype.datasetCalculations = function datasetCalculations(dataArr) {
    var datasetStore = this,
        numberFormatter = datasetStore.getFromEnv('number-formatter'),
        index,
        length,
        dataObj,
        itemValue,
        res = {};

    res.refreshedData = [];
    res.sumValue = res.countPoint = 0;
    res.highestValue = Number.NEGATIVE_INFINITY;

    for (index = 0, length = dataArr.length; index < length; index++) {
      dataObj = dataArr[index];

      if (dataObj.vline) {
        // Funnel or pyramid does not use vline. Ignoring the same if user put it mistakenly.
        continue;
      }

      dataObj.cleanValue = itemValue = Math.abs(numberFormatter.getCleanValue(dataObj.value, true));
      if (itemValue !== null) {
        // If a valid value is provided in the configuration
        res.hasValidPoint = true;
        res.highestValue = res.highestValue || itemValue;
        res.refreshedData.push(dataObj);
        res.sumValue += itemValue;
        res.countPoint += 1;
        res.highestValue = Math.max(res.highestValue, res.itemValue);
      }
    }

    return res;
  };
  /**
   * Configure data point hover effects
   * @param {Object} dataObj data point object
   * @param {Object} pointCosmetics styles and cosmetics for particular data object
   * @return {Object} parsed styles and cosmetics
   */


  FunnelPyramidBaseDataset.prototype.pointHoverOptions = function pointHoverOptions(dataObj, pointCosmetics) {
    var datasetStore = this,
        conf = datasetStore.config,
        chart = datasetStore.getFromEnv('chart'),
        hoverEffect = (0, _lib.pluckNumber)(dataObj.showhovereffect, conf.showHoverEffect),
        hoverEffects = {
      enabled: hoverEffect
    },
        rolloverProperties = {},
        highlightColors,
        colorLen,
        index,
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {};

    // Detect whether any of the hover effect attributes are explicitly set or not
    // Enable hover effect when any of the hover attributes are explicitly set
    if (!hoverEffect) {
      hoverEffect = hoverEffects.enabled = (0, _lib.pluck)(dataObj.hovercolor, chartAttr.plotfillhovercolor, dataObj.hoveralpha, chartAttr.plotfillhoveralpha, dataObj.borderhovercolor, chartAttr.plotborderhovercolor, dataObj.borderhoverthickness, chartAttr.plotborderhoverthickness, dataObj.borderhoveralpha, chartAttr.plotborderhoveralpha) !== UNDEF;
    }

    if (hoverEffect) {
      // Parse hover attributes
      hoverEffects.highlight = (0, _lib.pluckNumber)(dataObj.highlightonhover, chartAttr.highlightonhover);
      hoverEffects.color = (0, _lib.pluck)(dataObj.hovercolor, chartAttr.plotfillhovercolor);
      hoverEffects.alpha = (0, _lib.pluck)(dataObj.hoveralpha, chartAttr.plotfillhoveralpha, pointCosmetics.alpha);
      hoverEffects.borderColor = (0, _lib.pluck)(dataObj.borderhovercolor, chartAttr.plotborderhovercolor, pointCosmetics.borderColor);
      hoverEffects.borderThickness = (0, _lib.pluckNumber)(dataObj.borderhoverthickness, chartAttr.plotborderhoverthickness, pointCosmetics.borderWidth);
      hoverEffects.borderAlpha = (0, _lib.pluck)(dataObj.borderhoveralpha, chartAttr.plotborderhoveralpha, pointCosmetics.borderAlpha);

      // If hover effect is enabled but no hover color is provided, just highlight the default color
      if (hoverEffects.highlight !== 0 && hoverEffects.color === UNDEF) {
        hoverEffects.highlight = 1;
      }

      hoverEffects.color = (0, _lib.pluck)(hoverEffects.color, pointCosmetics.color).replace(/,+?$/, _lib.BLANK);

      if (hoverEffects.highlight === 1) {
        highlightColors = hoverEffects.color.split(/\s{0,},\s{0,}/);

        colorLen = highlightColors.length;

        for (index = 0; index < colorLen; index += 1) {
          highlightColors[index] = getLightColor(highlightColors[index], 70);
        }
        hoverEffects.color = highlightColors.join(',');
      }

      rolloverProperties = {
        color: hoverEffects.color,
        alpha: +hoverEffects.alpha,
        borderColor: convertColor(hoverEffects.borderColor, hoverEffects.borderAlpha),
        borderWidth: hoverEffects.borderThickness
      };
    }

    return {
      enabled: hoverEffect,
      options: hoverEffects,
      rolloverOptions: rolloverProperties
    };
  };
  /**
   * Provides tooltip options
   * @param {Object} options congigurations of data points
   * @return {Object} returns tooltip options
   */


  FunnelPyramidBaseDataset.getTooltipMacroStub = function getTooltipMacroStub(options) {
    return {
      formattedValue: options.formatedVal,
      label: options.name,
      percentValue: options.pValue,
      sum: options.sum,
      unformattedSum: options.sumValue
    };
  };

  /**
   * Called during post space management, does pre drawing calculations
  */


  FunnelPyramidBaseDataset.prototype.allocatePosition = function allocatePosition() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        dsConfig = dataset.config;

    // Checks and modify for streamLined data
    dataset._preDrawingHook();

    if (!dsConfig.sumValue) {
      return;
    }

    dsConfig.labelDrawingConfig = dsConfig.labelDrawingConfig || [];
    dsConfig.labelDrawingConfig.length = 0;

    // Store the marginTop and marginBottom before managing space
    dsConfig.psmMargin = {
      top: chartConfig.marginTop,
      bottom: chartConfig.marginBottom
    };

    // Plot area management to decide the drawing area measurement
    dataset.preDrawingSpaceManagement();
  };

  /**
   * Calculates plot spaces before drawing
   */


  FunnelPyramidBaseDataset.prototype.preDrawingSpaceManagement = function preDrawingSpaceManagement() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        chartConf = chart.config,
        caption = chart.getChildren('caption')[0],
        subCaption = chart.getChildren('subCaption')[0],
        capHeight = caption.config.height || 0,
        subCapHeight = subCaption.config.height || 0,
        conf = datasetStore.config,
        showTooltip = conf.showTooltip,
        slicingDistance = conf.slicingDistance,
        canvasHeight,
        canvasMaxWidth,
        chartWorkingHeight = chartConf.height - (chartConf.marginTop + chartConf.marginBottom),
        chartWorkingWidth = chartConf.width - (chartConf.marginRight + chartConf.marginLeft),
        dataArr = datasetStore.components.data,
        length,
        labelDistance,
        showLabelsAtCenter,
        blankSpace = conf.blankSpace,
        i = datasetStore.config.LABEL_PLACEMENT_ITERATOR_INDEX_START,
        upperRadiusFactor = datasetStore.getName() === 'funnel' ? 1 : 0,
        minWidthForChart,
        drawingWillExtend,
        maxWidthForLabel,
        labelMaxUsedWidth,
        hasPoint,
        maxValue,
        valueRadiusIncrementRatio,

    // sumValues = conf.sumValue,
    smartLabel = datasetStore.getFromEnv('smartLabel'),
        totalValue,
        point,
        lineHeight,
        smartTextObj,
        chartDrawingWidth,
        currentValue,
        ratioK,
        currentDiameter,
        labelMaxWidth,
        extraSpace,
        newDiameter = 0,
        lowestRadiusFactor,
        labelMaxW = 0,
        tempSnap,
        labelOverlappingW,
        utils = datasetStore.utils(datasetStore),
        gutter = 5,
        snapOffset,
        invokeHookFns = utils.invokeHookFns,
        labelStyle,
        prePointProcessingHookFn = datasetStore.prePointProcessingHookFn,
        legend = chart.getFromEnv('legend'),
        legendWidth = 0;

    if (chartConf.showLegend && legend.config.legendPos === 'right') {
      legendWidth = legend.config.width + 2 * gutter;
    }

    chartConf.oriCanvasLeft = chart.config.canvasLeft;
    chartConf.oriBottomSpace = chart.config.marginBottom;
    chartConf.oriTopSpace = chart.config.marginTop;
    // outCanvasSpace += chart.config.canvasRight;

    // For Anotation macros store temp conf
    tempSnap = conf._tempSnap = {
      top3DSpace: 0,
      bottom3DSpace: 0,
      topLabelSpace: 0,
      rightLabelSpace: 0
    };

    canvasHeight = chartWorkingHeight - slicingDistance;
    canvasMaxWidth = Math.min(2 * canvasHeight, chartWorkingWidth);

    chartConf.marginTop += slicingDistance / 2;
    chartConf.marginBottom += slicingDistance / 2;

    // Find the label maximun width
    length = dataArr.length;
    labelDistance = conf.labelDistance + blankSpace;
    showLabelsAtCenter = conf.showLabelsAtCenter;

    minWidthForChart = Math.min(canvasMaxWidth, chartWorkingWidth * 0.3);
    drawingWillExtend = chartWorkingWidth - minWidthForChart;
    chartWorkingWidth -= legendWidth;
    maxWidthForLabel = chartWorkingWidth - minWidthForChart - labelDistance;
    labelMaxUsedWidth = 0;
    hasPoint = dataArr[0];
    maxValue = hasPoint && dataArr[0].y ? dataArr[0].y : 1;

    valueRadiusIncrementRatio = 0.8 / maxValue;
    // conf.useSameSlantAngle = 1;

    invokeHookFns(prePointProcessingHookFn, [dataArr]);

    totalValue = conf.totalValue || 0;

    smartLabel.useEllipsesOnOverflow(chartConf.useEllipsesWhenOverflow);

    for (; i < length; i += 1) {
      point = dataArr[i];

      if (point.legendItemId) {
        legend.configureItems && legend.configureItems(point.legendItemId, {
          configuration: {
            fillColor: point.legendColor
          }
        });
      }

      labelStyle = point.style;
      (0, _lib.setLineHeight)(labelStyle);
      lineHeight = (0, _lib.pluckNumber)(mathCeil(parseFloat(labelStyle.lineHeight) + labelStyle.borderPadding + labelStyle.borderThickness + gutter), 10);
      smartLabel.setStyle(labelStyle);
      currentValue = point.y;
      if (showLabelsAtCenter) {
        smartTextObj = smartLabel.getSmartText(point.displayValue, chartWorkingWidth, lineHeight);
      } else {
        currentValue = point.getModifiedCurrentValue && point.getModifiedCurrentValue(totalValue) || currentValue;

        ratioK = point.getRatioK(datasetStore, currentValue, valueRadiusIncrementRatio, totalValue, maxValue);

        currentDiameter = minWidthForChart * ratioK;
        labelMaxWidth = maxWidthForLabel + (minWidthForChart - currentDiameter) / 2;

        smartTextObj = smartLabel.getSmartText(point.displayValue, labelMaxWidth, lineHeight);
        point.displayValue = smartTextObj.text;
        showTooltip && smartTextObj.tooltext && (point.originalText = smartTextObj.tooltext);
        labelMaxUsedWidth = Math.max(labelMaxUsedWidth, smartTextObj.width);
        if (drawingWillExtend > 0) {
          if (smartTextObj.width > 0) {
            extraSpace = labelMaxWidth - smartTextObj.width;
          } else {
            extraSpace = labelMaxWidth + labelDistance;
          }
          newDiameter = 1 / (ratioK + 1) * (currentDiameter + 2 * extraSpace + minWidthForChart);

          drawingWillExtend = Math.min(drawingWillExtend, newDiameter - minWidthForChart);
        }
        totalValue += conf.offsetVal === UNDEF ? point.y : typeof conf.offsetVal === 'function' ? conf.offsetVal(i) : conf.offsetVal;
      }
    }

    if (chartConf.showLegend && legend.config.legendPos === 'right') {
      chart.isLegendRight = true;
      chartConf.marginRight += legendWidth;
      // outCanvasSpace += legendWidth;
    } else {
      chart.isLegendRight = false;
    }

    if (point) {
      lowestRadiusFactor = point.getLowestRadiusFactor(datasetStore, maxValue);
    }
    chartDrawingWidth = minWidthForChart + drawingWillExtend;
    if (chartDrawingWidth > canvasMaxWidth) {
      chartDrawingWidth = canvasMaxWidth;
    }

    totalValue = conf.offsetVal === UNDEF ? 0 : typeof conf.offsetVal === 'function' ? conf.offsetVal() : conf.offsetVal;

    // Now we have the actual drawing width for the
    // funnel and pyramid reiterate through the data and find the
    // max label width
    if (!showLabelsAtCenter) {
      i = datasetStore.config.LABEL_PLACEMENT_ITERATOR_INDEX_START;
      for (length = dataArr.length; i < length; i += 1) {
        point = dataArr[i];
        currentValue = point.y;

        currentValue = point.getModifiedCurrentValue && point.getModifiedCurrentValue(totalValue) || currentValue;

        ratioK = point.getRatioK(datasetStore, currentValue, valueRadiusIncrementRatio, totalValue, maxValue);

        currentDiameter = chartDrawingWidth * ratioK;
        labelMaxWidth = maxWidthForLabel + (minWidthForChart - currentDiameter) / 2 - legendWidth;
        smartTextObj = smartLabel.getSmartText(point.displayValue, labelMaxWidth, lineHeight);
        labelMaxW = mathMax(labelMaxW, currentDiameter * 0.5 + smartTextObj.width + labelDistance);
        totalValue += conf.offsetVal === UNDEF ? point.y : typeof conf.offsetVal === 'function' ? conf.offsetVal() : conf.offsetVal;
      }
    }

    if (labelMaxUsedWidth > 0) {
      tempSnap.rightLabelSpace = chartWorkingWidth - chartDrawingWidth;
      // Keep the chart at center and find extra space required to place the label
      labelOverlappingW = labelMaxW - chartConf.canvasWidth * 0.5;
      if (labelOverlappingW > 0) {
        // Adjust the extra space required to place the label
        chartConf.marginRight += labelOverlappingW;
        chartConf.marginLeft -= labelOverlappingW;
      }

      chartConf.marginRight += tempSnap.rightLabelSpace * 0.5;
      chartConf.marginLeft += tempSnap.rightLabelSpace * 0.5;
    } else {
      labelDistance = 0;
    }

    conf.labelDistance = conf.connectorWidth = labelDistance;

    if ((showLabelsAtCenter || !labelMaxUsedWidth) && canvasMaxWidth < chartWorkingWidth) {
      chartConf.marginLeft += (chartWorkingWidth - canvasMaxWidth - labelDistance) * 0.5;
      chartConf.marginRight += (chartWorkingWidth - canvasMaxWidth - labelDistance) * 0.5;
    }

    if (!conf.is2d) {
      chartConf.marginTop += tempSnap.top3DSpace = chartDrawingWidth * conf.yScale * upperRadiusFactor / 2;
      chartConf.marginBottom += tempSnap.bottom3DSpace = chartDrawingWidth * conf.yScale * lowestRadiusFactor / 2;
    }

    datasetStore.calculatePositionOfPlots();
    snapOffset = capHeight + subCapHeight + gutter;
    if (datasetStore.getName() === 'funnel') {
      if (conf.streamLinedData && dataArr.length < 2) {
        chartConf.gaugeStartX = chartConf.marginLeft;
        chartConf.gaugeStartY = chartConf.marginTop + snapOffset;
        chartConf.gaugeEndX = chartDrawingWidth + chartConf.marginLeft;
        chartConf.gaugeEndY = chartConf.canvasHeight + chartConf.marginTop;
      } else {
        chartConf.gaugeStartX = dataArr[0].plotX - dataArr[1].shapeArgs.R1;
        chartConf.gaugeEndX = dataArr[0].plotX + dataArr[1].shapeArgs.R1;
        chartConf.gaugeStartY = dataArr[0].plotY;
        chartConf.gaugeEndY = dataArr[length - 1].plotY;
      }
    } else {
      chartConf.gaugeStartX = dataArr[length - 1].plotX - dataArr[length - 1].shapeArgs.R2;
      chartConf.gaugeEndX = dataArr[length - 1].plotX + dataArr[length - 1].shapeArgs.R2;
      chartConf.gaugeStartY = dataArr[0].shapeArgs.y;
      chartConf.gaugeEndY = dataArr[length - 1].shapeArgs.y + dataArr[length - 1].shapeArgs.h;
    }
    chartConf.gaugeCenterX = chartConf.canvasCenterX = (chartConf.gaugeStartX + chartConf.gaugeEndX) / 2;
    chartConf.gaugeCenterY = (chartConf.gaugeStartY + chartConf.gaugeEndY) / 2;
    chartConf.plotSemiWidth = (chartConf.canvasWidth - tempSnap.rightLabelSpace) / 2;
  };

  /**
   * Animate plot elements
   * @param {Array} elements plot elements
   * @param {string} subElem type of elements
   * @param {Array} subElemKeys type of elements
   * @param {Object} conditions element attributes to be set for preanimation and postanimation
   * @param {Function} callback animation callback function
   */


  FunnelPyramidBaseDataset.prototype.animateElements = function animateElements(elements, subElem, subElemKeys, conditions /* , callback */) {
    var datasetStore = this,

    // chart = datasetStore.getFromEnv('chart'),
    // animDuration = animationObj.duration,
    // dummyAnimElem = animationObj.dummyObj,
    // dummyAnimObj = animationObj.animObj,
    // isPromiseExecuted = false,
    target,
        index,
        length,
        ele,
        i,
        l;
    /**
     * Promise function
     * @return {undefined} return if already callback executed
     */
    // function promise () {
    //   if (isPromiseExecuted) {
    //     return;
    //   }

    //   callback();
    //   isPromiseExecuted = true;
    // }
    /**
     * Animate plots
     * @param {Object} _t plot element
     * @param {Object} point data object
     */
    function animate(_t, point) {
      var ialpha = (point || {}).alpha;

      ialpha = ialpha === UNDEF ? conditions.post : { opacity: ialpha };
      if (!_t) {
        return;
      }
      // _t.attr(conditions.pre);
      // _t.attr(ialpha);
      datasetStore.getFromEnv('animationManager').setAnimation({
        el: _t,
        attr: ialpha,
        component: datasetStore
      });
      // _t.animateWith(dummyAnimElem, dummyAnimObj, ialpha, animDuration, animType, promise);
    }

    // callback = callback || stubFN;
    subElemKeys = subElemKeys || [];

    for (index = 0, length = elements.length; index < length; index++) {
      ele = elements[index];
      if (!ele) {
        continue;
      }

      if (!subElemKeys.length) {
        target = ele;
        animate(target[subElem], ele.point);
      } else {
        for (i = 0, l = subElemKeys.length; i < l; i++) {
          target = elements[index][subElem][subElemKeys[i]];
          animate(target, ele.point);
        }
      }
    }
  };

  /**
   * Draws individual data labels
   * @param {Object} point data object
   * @param {number} index data index
   */


  FunnelPyramidBaseDataset.prototype.drawIndividualDataLabel = function drawIndividualDataLabel(point, index) {
    var datasetStore = this,
        conf = datasetStore.config,
        animationManager = datasetStore.getFromEnv('animationManager'),
        dataStore = datasetStore.components.data,
        displayValue = point.displayValue,
        plotItem = point.plot || {},
        dataLabel = point.getGraphicalElement('dataLabel'),
        connector = point.getGraphicalElement('connector'),
        labelY = point.labelY,
        labelX = point.labelX,
        style = point.style || {},
        fontSize = (0, _lib.pluckNumber)(parseInt(style.fontSize, 10), conf.baseFontSize),
        lineHeight = conf.lineHeight,
        yShift = fontSize * 0.3,
        yDisplacement = lineHeight * 0.3,
        connectorStartY,
        connectorEndY,
        lastConnectorEndY,
        showLabelsAtCenter = conf.showLabelsAtCenter,
        connectorEndSwitchHistoryY = conf.connectorEndSwitchHistoryY,
        connectorEndX,
        connectorStartX,
        labelDistance = conf.labelDistance,
        blankSpace = conf.blankSpace,
        connectorPath,
        yD,
        streamLinedData = conf.streamLinedData;

    if (!showLabelsAtCenter) {
      connectorStartY = labelY - yShift - point.distributionFactor * lineHeight;
      connectorEndY = labelY - yShift;
      lastConnectorEndY = connectorEndSwitchHistoryY[point.alignmentSwitch];

      if (conf.lastplotY !== UNDEF && lastConnectorEndY !== UNDEF && lastConnectorEndY - connectorEndY < lineHeight) {
        connectorEndY = lastConnectorEndY - lineHeight;
        labelY = connectorEndY;
      }

      point.displayValue && (connectorEndSwitchHistoryY[point.alignmentSwitch] = connectorEndY);
      conf.lastplotY = point.plotY;

      if (conf.labelAlignment === conf.alignmentType.alternate) {
        if (point.alignmentSwitch) {
          connectorEndX = labelX + blankSpace + point.virtualWidth;
          connectorStartX = connectorEndX + labelDistance + point.distributionFactor * conf.globalMinXShift;
        } else {
          connectorEndX = labelX - blankSpace;
          connectorStartX = connectorEndX - (labelDistance - (point.lOverflow || 0)) - point.distributionFactor * conf.globalMinXShift;
        }
      } else {
        connectorEndX = labelX - blankSpace;
        connectorStartX = connectorEndX - (labelDistance - (point.lOverflow || 0)) - point.distributionFactor * conf.globalMinXShift;
      }

      // Drawing the connector for labels
      // Check if the label is not blank and,
      // label is not the first label of Funnel Chart
      if (typeof displayValue !== 'undefined' && displayValue !== BLANKSTRING && !(index === 0 && streamLinedData)) {
        connectorPath = [M, connectorStartX, connectorStartY, L, connectorEndX, connectorEndY];

        animationManager.setAnimation({
          el: connector,
          state: 'transform',
          label: 'connector',
          attr: {
            path: connectorPath,
            'shape-rendering': connectorStartY === connectorEndY && connectorEndY < 1 ? CRISP : _lib.BLANK
          },
          component: datasetStore
        });
        connector.show();
      } else {
        connector && animationManager.setAnimation({
          el: connector,
          component: datasetStore
        });
      }

      if (index === 0 && streamLinedData) {
        yD = labelY + (dataStore[1].plot.dy || 0);
      } else {
        yD = connectorEndY + (plotItem.dy || 0);
      }

      if (displayValue !== BLANKSTRING) {
        animationManager.setAnimation({
          el: dataLabel,
          state: 'transform',
          attr: { transform: ['t', labelX, yD] },
          component: datasetStore,
          label: 'dataLabel'
        });
        dataLabel.show();
      } else {
        dataLabel && animationManager.setAnimation({
          el: dataLabel,
          component: datasetStore
        });
      }
    } else {
      if (index === 0 && streamLinedData) {
        // access to the first plot item
        yD = labelY - yDisplacement + (dataStore[1].plot.distanceAvailed || 0);
      } else {
        yD = labelY - yDisplacement + (plotItem.distanceAvailed || 0);
      }

      if (displayValue !== BLANKSTRING) {
        animationManager.setAnimation({
          el: dataLabel,
          attr: { transform: ['t', labelX, yD] },
          component: datasetStore
        });
        dataLabel.show();
      } else {
        dataLabel && animationManager.setAnimation({
          el: dataLabel,
          component: datasetStore
        });
      }
    }

    dataLabel.attr({ 'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash] });
  };

  /**
   * Draws all labels
   */


  FunnelPyramidBaseDataset.prototype.drawAllLabels = function drawAllLabels() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        animationManager = datasetStore.getFromEnv('animationManager'),
        labelDrawingConfigArr = datasetStore.config.labelDrawingConfig,
        dataLabelsGroup = chart.getChildContainer('datalabelsGroup'),
        removeCSSProps = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'],
        groupLabelCssProps = removeCSSProps,
        groupLabelCss = {},
        conf = datasetStore.config,
        labelDrawingConfig,
        dataLabel,
        connector,
        setLink,
        actions,
        point,
        value,

    // dlElem,
    index,
        length,
        attr;

    // Extract the required css from the list of css (guard for IE)
    for (index = 0, length = groupLabelCssProps.length; index < length; index++) {
      attr = groupLabelCssProps[index];

      if (attr in datasetStore._chartLevelAttr) {
        groupLabelCss[attr] = datasetStore._chartLevelAttr[attr];
      }
    }

    dataLabelsGroup.css(groupLabelCss);

    for (index = labelDrawingConfigArr.length - 1; index > -1; index--) {
      labelDrawingConfig = labelDrawingConfigArr[index];
      point = labelDrawingConfig.point;
      setLink = !!point.link;
      value = point.y;
      labelDrawingConfig.args.cursor = point.labellink ? 'pointer' : '';
      // temporary fix till the time fill is inherited from the parent nodes in VML
      if (labelDrawingConfig.args && labelDrawingConfig.css) {
        labelDrawingConfig.args.fill = labelDrawingConfig.css.color || labelDrawingConfig.css.fill;
      }

      dataLabel = point.getGraphicalElement('dataLabel');
      connector = point.getGraphicalElement('connector');
      if (value === null || value === UNDEF || !point.shapeArgs) {
        if (dataLabel) {
          dataLabel.removeCSS(removeCSSProps);
          dataLabel && animationManager.setAnimation({
            el: dataLabel,
            attr: labelDrawingConfig.args,
            component: datasetStore
          });
          dataLabel && dataLabel.css(labelDrawingConfig.css);
        } else {
          dataLabel = animationManager.setAnimation({
            el: 'text',
            label: 'dataLabel',
            attr: (0, _assign2['default'])({}, labelDrawingConfig.args, labelDrawingConfig.css),
            container: dataLabelsGroup,
            component: datasetStore
          });
          point.addGraphicalElement('dataLabel', dataLabel);
        }

        datasetStore.drawIndividualDataLabel(point, index);
        continue;
      }

      if (!(point.plot && dataLabel)) {
        dataLabel = animationManager.setAnimation({
          el: 'text',
          label: 'dataLabel',
          attr: (0, _assign2['default'])({}, labelDrawingConfig.args, labelDrawingConfig.css),
          container: dataLabelsGroup,
          component: datasetStore
        });
        point.addGraphicalElement('dataLabel', dataLabel);

        if (!conf.showLabelsAtCenter || !(index === 0 && conf.streamLinedData)) {
          connector = animationManager.setAnimation({
            el: 'path',
            container: dataLabelsGroup,
            component: datasetStore,
            label: 'connector'
          });
          point.addGraphicalElement('connector', connector);
        }
      } else {
        dataLabel.removeCSS(removeCSSProps);
        animationManager.setAnimation({
          el: dataLabel,
          attr: labelDrawingConfig.args,
          component: datasetStore
        });
        dataLabel.css(labelDrawingConfig.css);
      }

      dataLabel.tooltip(point.originalText);

      connector && animationManager.setAnimation({
        el: connector,
        attr: {
          'stroke-width': conf.dataConnectorStyle.connectorWidth,
          stroke: conf.dataConnectorStyle.connectorColor,
          ishot: true,
          cursor: setLink ? POINTER : _lib.BLANK,
          transform: labelDrawingConfig.transform
        },
        component: datasetStore
      });
      point.labellink && dataLabel.on('click', _pie2d.labelClickFn.bind(dataLabel, chart, point.labellink));
      actions = labelDrawingConfig.actions;
      !point.doNotSlice && dataLabel.click(actions.click, labelDrawingConfig.context);
      dataLabel.hover(actions.hover[0], actions.hover[1]);

      datasetStore.drawIndividualDataLabel(point, index);
    }
  };

  /**
   * Draws all trackers
   */


  FunnelPyramidBaseDataset.prototype.drawAllTrackers = function drawAllTrackers() {
    var datasetStore = this,
        trackerArgs = datasetStore.config.trackerArgs,
        index,
        length;

    for (index = 0, length = trackerArgs.length; index < length; index++) {
      datasetStore.drawTracker(trackerArgs[index]);
    }
  };
  /**
   * Draws individual trackers
   * @param {Object} set point object
   */


  FunnelPyramidBaseDataset.prototype.drawTracker = function drawTracker(set) {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        renderer = chart.getFromEnv('paper'),
        trackerGroup = chart.getChildContainer('trackerGroup'),
        shapeArgs,
        trackerObj,
        trackerLabel = +new Date(),
        point,
        graphic,
        eventArgs;

    point = set.plot;
    if (!point) {
      return;
    }
    graphic = set.getGraphicalElement('graphic');
    trackerObj = set.getGraphicalElement('trackerObj');

    if (graphic) {
      shapeArgs = graphic.Shapeargs.silhuette;

      eventArgs = {
        link: set.link,
        value: set.y,
        displayValue: set.displayValueArgs,
        categoryLabel: set.categoryLabel,
        dataIndex: point.index || _lib.BLANK,
        toolText: set.toolText
      };
      set.datasetIndex = point.index;
      if (trackerObj) {
        trackerObj.attr({
          path: shapeArgs,
          isTracker: trackerLabel,
          fill: TRACKER_FILL,
          stroke: noneStr,
          transform: 't0,' + (point._startTranslateY || 0),
          ishot: true,
          cursor: point.cursor
        });
      } else {
        trackerObj = renderer.path(shapeArgs, trackerGroup).attr({
          isTracker: trackerLabel,
          fill: TRACKER_FILL,
          stroke: noneStr,
          transform: 't0,' + (point._startTranslateY || 0),
          ishot: true,
          cursor: point.cursor
        });

        set.addGraphicalElement('trackerObj', trackerObj);
      }
      trackerObj.data(EVENTARGS, eventArgs);
      trackerObj.show();
    }
  };
  /**
   * Calculates the data plot coordinates
   * @param {Array} dataArr data points
   * @param {boolean} placeOtherSide whether to put on left side or right side
   */


  FunnelPyramidBaseDataset.prototype.calculatePositionCoordinate = function calculatePositionCoordinate(dataArr, placeOtherSide) {
    var datasetStore = this,
        conf = datasetStore.config,
        maxValue = conf.maxValue,
        is2d = conf.is2d,
        x = conf.x,
        chart = datasetStore.getFromEnv('chart'),
        chartConfig = chart.config,
        y = chartConfig.canvasTop,
        unitHeight = conf.unitHeight,
        drawingRadius = conf.drawingRadius,
        labelDistance = conf.labelDistance,
        showLabelsAtCenter = conf.showLabelsAtCenter,
        isHollow = conf.isHollow,
        fontSize = chartConfig.style.fontSize,
        yShift = fontSize * 0.3,
        yScale = conf.yScale,
        blankSpace = conf.blankSpace,
        lastRadius = conf.lastRadius,
        smartLabel = datasetStore.getFromEnv('smartLabel'),
        index,
        length,
        totalHeight = 0,
        point,
        sliceHeight,
        lastIndex = dataArr.length - 1,
        alignmentSwitchToggle = false,
        distributionOffset = 0,
        labelMeasurement,
        newRadius,
        negativeSpanningDataEnd,
        normalizedLabel,
        lineHeight = conf.lineHeight,
        widthHeightRatio = 0.8 / chartConfig.effCanvasHeight,
        chartWidth = chart.config.width - 2,
        streamlinedData = conf.streamLinedData,

    // Base of the  maximum trimmed label.
    trimmedInfo = {
      flag: false,
      point: UNDEF,
      sLabel: UNDEF,
      setAll: function setAll(flag, point, sLabel) {
        this.flag = flag;
        this.point = point;
        this.sLabel = sLabel;
      }
    },

    // Base of the maximum spanned labels
    largestLabel = {
      point: UNDEF,
      sLabel: UNDEF,
      set: function set(calcFn, predicate) {
        var _calcFn = calcFn,
            _predicate = predicate;
        return function (point, sLabel) {
          var existingLabelSpan, currentLabelSpan;
          if (point.dontPlot) {
            return;
          }

          if (!(this.point && this.sLabel)) {
            this.point = point;
            this.sLabel = sLabel;
            return;
          }
          existingLabelSpan = _calcFn(this.point, this.sLabel);
          currentLabelSpan = _calcFn(point, sLabel);
          if (_predicate(existingLabelSpan, currentLabelSpan)) {
            this.point = point;
            this.sLabel = sLabel;
          }
        };
      }
    },
        leftTrimmedInfo = {},
        rightTrimmedInfo = {},
        lLargestLabel = {},
        rLargestLabel = {},
        extraConnectorSpace,
        xPos,
        slicingGapPosition = conf.slicingGapPosition = {};

    (0, _lib.extend2)(leftTrimmedInfo, trimmedInfo);
    (0, _lib.extend2)(rightTrimmedInfo, trimmedInfo);

    leftTrimmedInfo.setAll = function (flag, point, sLabel) {
      var _point = this.point,
          _sLabel = this.sLabel,
          existingLabelSpan,
          currentLabelSpan;

      this.flag = flag;
      if (!(_point && _sLabel)) {
        this.point = point;
        this.sLabel = sLabel;
        return;
      }
      existingLabelSpan = _point.labelX - (_sLabel.oriTextWidth - _sLabel.width);
      currentLabelSpan = point.labelX - (sLabel.oriTextWidth - sLabel.width);
      if (existingLabelSpan > currentLabelSpan) {
        this.point = point;
        this.sLabel = sLabel;
      }
    };

    // Override the base class method for labels which are kept right
    rightTrimmedInfo.setAll = function (flag, point, sLabel) {
      var _point = this.point,
          _sLabel = this.sLabel,
          existingLabelSpan,
          currentLabelSpan;

      this.flag = flag;
      if (!(_point && _sLabel)) {
        this.point = point;
        this.sLabel = sLabel;
        return;
      }
      existingLabelSpan = _point.labelX + _sLabel.oriTextWidth;
      currentLabelSpan = point.labelX + sLabel.oriTextWidth;
      if (existingLabelSpan < currentLabelSpan) {
        this.point = point;
        this.sLabel = sLabel;
      }
    };

    (0, _lib.extend2)(lLargestLabel, largestLabel);
    (0, _lib.extend2)(rLargestLabel, largestLabel);

    lLargestLabel.set = function () {
      return largestLabel.set.apply(lLargestLabel, [function (point) {
        return point.labelX;
      }, function (existingLabelSpan, currentLabelSpan) {
        return existingLabelSpan > currentLabelSpan;
      }]);
    }();

    rLargestLabel.set = function () {
      return largestLabel.set.apply(rLargestLabel, [function (point, sLabel) {
        return point.labelX + sLabel.oriTextWidth;
      }, function (existingLabelSpan, currentLabelSpan) {
        return existingLabelSpan < currentLabelSpan;
      }]);
    }();

    conf.noOfGap = 0;
    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    for (index = 0, length = dataArr.length; index < length; index++) {
      point = dataArr[index];
      if (!point) {
        continue;
      }
      point.x = index;
      if (point.plot) {
        // @todo correct the slicing here
        point.isSliced = !!point.isSliced || !!conf.isSliced;
      }
      point.isSliced = (0, _lib.pluckNumber)(point.isSliced, conf.isSliced);

      if (index) {
        placeOtherSide && (alignmentSwitchToggle = !alignmentSwitchToggle);

        // code for slicing drawing
        if (point.isSliced) {
          xPos = point.x;
          if (xPos > 1 && !slicingGapPosition[xPos]) {
            slicingGapPosition[xPos] = true;
            conf.noOfGap += 1;
          }
          if (xPos < lastIndex) {
            slicingGapPosition[xPos + 1] = true;
            conf.noOfGap += 1;
          }
        }
        if (!streamlinedData) {
          totalHeight += sliceHeight = unitHeight * dataArr[index].y;
          newRadius = drawingRadius * (1 - totalHeight * widthHeightRatio);
        } else {
          if (conf.useSameSlantAngle == 1) {
            newRadius = maxValue ? drawingRadius * point.y / maxValue : drawingRadius;
          } else {
            newRadius = maxValue ? drawingRadius * mathSqrt(point.y / maxValue) : drawingRadius;
          }
          // Default sliceHeight is set to one, in case its NaN.
          sliceHeight = unitHeight * (dataArr[index - 1].y - point.y) || 1;
        }
        point.shapeArgs = {
          x: x,
          y: y,
          R1: lastRadius,
          R2: newRadius,
          h: sliceHeight || 1,
          r3dFactor: yScale,
          isHollow: isHollow,
          gStr: 'point',
          is2D: is2d,
          renderer: chart.getFromEnv('paper'),
          isFunnel: true
        };

        smartLabel.setStyle(point.style);
        point.oriText = point.displayValue;
        labelMeasurement = labelMeasurement = smartLabel.getSmartText(point.displayValue, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);

        if (showLabelsAtCenter) {
          point.labelAline = POSITION_MIDDLE;
          point.labelX = x;
          point.labelY = (is2d ? y : y + yScale * lastRadius) + sliceHeight / 2 + yShift;
        } else {
          point.labelAline = POSITION_START;
          point.alignmentSwitch = alignmentSwitchToggle;
          point.distributionFactor = point.distributionFactor || 0;

          if (alignmentSwitchToggle) {
            point.labelX = x - (labelDistance + newRadius + blankSpace + labelMeasurement.width);
            point.labelX -= point.distributionFactor * conf.globalMinXShift;
            lLargestLabel.set(point, labelMeasurement);
          } else {
            point.labelX = x + labelDistance + newRadius + blankSpace;
            point.labelX += point.distributionFactor * conf.globalMinXShift;
            rLargestLabel.set(point, labelMeasurement);
          }
          distributionOffset = point.distributionFactor * lineHeight;
          point.labelY = y + yShift + sliceHeight + distributionOffset;
        }
        // Checking text overflow for alternate alignment
        if (placeOtherSide) {
          if (alignmentSwitchToggle && point.labelX < 0) {
            // Left and behind the margin
            negativeSpanningDataEnd = point.labelX + labelMeasurement.width;
            normalizedLabel = smartLabel.getSmartText(point.displayValue, negativeSpanningDataEnd, Number.POSITIVE_INFINITY, true);
            point.labelX = 2;
            point.isLabelTruncated = true;
            point.displayValue = normalizedLabel.text;
            point.virtualWidth = normalizedLabel.maxWidth;
            leftTrimmedInfo.setAll(true, point, normalizedLabel);
          } else if (!alignmentSwitchToggle && point.labelX + labelMeasurement.width > chartWidth) {
            // Right side and spanning the margin
            normalizedLabel = smartLabel.getSmartText(point.displayValue, chartWidth - point.labelX, Number.POSITIVE_INFINITY, true);
            point.isLabelTruncated = true;
            point.displayValue = normalizedLabel.text;
            point.virtualWidth = normalizedLabel.maxWidth;
            rightTrimmedInfo.setAll(true, point, normalizedLabel);
          }
        }
        point.pWidth = point.virtualWidth = point.virtualWidth || labelMeasurement.width;
        y += sliceHeight;
        lastRadius = newRadius;
      } else {
        point.oriText = point.displayValue;
        if (conf.useSameSlantAngle == 1) {
          newRadius = maxValue ? drawingRadius * point.y / maxValue : drawingRadius;
        } else {
          newRadius = maxValue ? drawingRadius * mathSqrt(point.y / maxValue) : drawingRadius;
        }
        if (point.labelWidth > newRadius * 2 && !placeOtherSide) {
          point.labelAline = POSITION_START;
          point.labelX = 0;
        } else {
          point.labelAline = POSITION_MIDDLE;
          point.labelX = x;
        }
        extraConnectorSpace = labelDistance * 2;
        point.displayValue = smartLabel.getSmartText(point.displayValue, newRadius * 2 + extraConnectorSpace, Number.POSITIVE_INFINITY, true).text;
        point.labelY = (is2d ? y : y - yScale * lastRadius) - yShift - blankSpace;
      }
      point.plotX = x;
      point.plotY = y;
    }

    // Recalculate the space one more time. Ideally this should be given by space manager.
    // However in the current scope space manager cannot be called from here.
    datasetStore.findBestPosition(dataArr, {
      'lTrimmedInfo': leftTrimmedInfo,
      'rTrimmedInfo': rightTrimmedInfo,
      'lLargestLabel': lLargestLabel,
      'rLargestLabel': rLargestLabel
    });
  };
  /**
   * Calculates optimum position for labels
   * @param {Array} dataArr data array
   * @param {Object} config data point configuration
   */


  FunnelPyramidBaseDataset.prototype.findBestPosition = function findBestPosition(dataArr, config) {
    var datasetStore = this,
        conf = datasetStore.config,
        chart = datasetStore.getFromEnv('chart'),
        chartConfig = chart.config,
        shift = 0,
        lTrimmedInfo = config.lTrimmedInfo,
        rTrimmedInfo = config.rTrimmedInfo,
        lLargestLabel = config.lLargestLabel,
        rLargestLabel = config.rLargestLabel,
        smartLabel = datasetStore.getFromEnv('smartLabel'),
        trimmedLength,
        sLabel,
        leftXSpace,
        rightXSpace,
        newLabel,
        data,
        index,
        length,
        unfoldWidth = 0,
        overflow,
        streamLinedData = conf.streamLinedData,
        allowedLeftX = conf.blankSpace,
        allowedRightX = chartConfig.width - conf.blankSpace;

    if (lTrimmedInfo.flag && rTrimmedInfo.flag) {
      // If labels are large in both of the sides. No need to shift the system
      return;
    }

    if (rTrimmedInfo.flag) {
      // Only right side labels are large. Shift left
      if (!lLargestLabel.point) {
        return;
      }
      // point = rTrimmedInfo.point;
      sLabel = rTrimmedInfo.sLabel;
      trimmedLength = sLabel.oriTextWidth - sLabel.width;
      leftXSpace = lLargestLabel.point.labelX - allowedLeftX;
      shift = -Math.ceil(Math.min(trimmedLength, leftXSpace));
    } else if (lTrimmedInfo.flag) {
      // Only left side labels are large. Shift right
      if (!rLargestLabel.point) {
        return;
      }
      // point = lTrimmedInfo.point;
      sLabel = lTrimmedInfo.sLabel;
      trimmedLength = sLabel.oriTextWidth - sLabel.width;
      rightXSpace = allowedRightX - (rLargestLabel.point.labelX + rLargestLabel.sLabel.width);
      shift = Math.ceil(Math.min(trimmedLength, rightXSpace));
    }

    // Apply shift to the whole system
    if (!shift) {
      smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
      for (index = 0, length = dataArr.length; index < length; index++) {
        data = dataArr[index];

        if ((overflow = data.labelX + data.pWidth - allowedRightX) > 0) {
          data.lOverflow = overflow;
          data.labelX -= overflow;
          if (chart.isLegendRight) {
            data.displayValue = smartLabel.getSmartText(data.oriText, data.pWidth - overflow, Number.POSITIVE_INFINITY, true).text;
          } else {
            data.lOverflow = overflow;
            data.labelX -= overflow;
          }
        }
      }
      return;
    }

    for (index = 0, length = dataArr.length; index < length; index++) {
      data = dataArr[index];
      if (!index && streamLinedData) {
        data.labelX += shift;
        continue;
      }
      if (data.alignmentSwitch) {
        // left labels
        if (shift < 0) {
          newLabel = smartLabel.getSmartText(data.oriText, data.pWidth, Number.POSITIVE_INFINITY, true);
        } else {
          newLabel = smartLabel.getSmartText(data.oriText, data.pWidth + shift, Number.POSITIVE_INFINITY, true);
        }
        if (data.isLabelTruncated) {
          unfoldWidth = newLabel.width - data.pWidth;
        }
        data.virtualWidth = newLabel.width;
      } else {
        // Labels at right
        if (shift > 0) {
          newLabel = smartLabel.getSmartText(data.oriText, data.pWidth, Number.POSITIVE_INFINITY, true);
        } else {
          newLabel = smartLabel.getSmartText(data.oriText, data.pWidth - shift, Number.POSITIVE_INFINITY, true);
        }
        data.virtualWidth = newLabel.width;
      }
      data.displayValue = newLabel.text;
      data.labelX += shift - unfoldWidth;
      data.shapeArgs && (data.shapeArgs.x += shift);
      unfoldWidth = 0;
    }
  };
  /**
   * Returns data plot
   * @param {number} id data plot id
   * @return {Object} data plot
   */


  FunnelPyramidBaseDataset.prototype.getPlotData = function getPlotData(id) {
    var datasetStore = this,
        data = datasetStore.components.data[id],
        userData = datasetStore.userData || (datasetStore.userData = []),
        props = ['y', 'name', 'color', 'alpha', 'borderColor', 'borderWidth', 'link', 'label', 'displayValue', 'datasetIndex', 'toolText'],
        plotData,
        i,
        prop;

    if (!userData[id]) {
      plotData = userData[id] = {};
      for (i = 0; i < props.length; i++) {
        plotData[prop = props[i]] = data[prop];
      }

      plotData.value = plotData.y;
      plotData.label = plotData.name;

      delete plotData.y;
      delete plotData.name;
    } else {
      plotData = userData[id];
    }

    return plotData;
  };
  // eslint-disable-next-line no-unused-vars
  /**
   * Slice data plots on interaction
   */


  FunnelPyramidBaseDataset.prototype.slice = function slice() {
    var context = this,
        evt = arguments[0],
        datasetStore = context.datasetStore,
        dataItem = context.plotItem,
        index = dataItem.index,
        data = datasetStore.components.data,
        point = data[index],
        graphicalElement = point.getGraphicalElement(),
        chart = datasetStore.getFromEnv('chart'),
        animationManager = datasetStore.getFromEnv('animationManager'),
        conf = datasetStore.config,
        sliced = arguments[3] || conf.clicked,
        slicingDistance = conf.slicingDistance,
        seriesOptionsHalf = slicingDistance / 2,
        i = 0,
        noOFPrevPoint = 0,
        length = data.length,
        transformObj,
        dataObj,
        reflowData,
        itemClicked,
        clickedItemId,
        reflowUpdate,
        dyPrev,
        dyNext,
        dyOld,
        dyNew,
        graphic,
        dataLabel,
        slicingEnd;

    if (conf.sliceLock) {
      return;
    }

    // Flag that informs whether slicing is on-going
    conf.sliceLock = 1;

    if (dataItem) {
      _lib.plotEventHandler.call(graphicalElement.trackerObj, chart, evt, 'dataplotclick');
    }

    // save state
    reflowUpdate = {
      hcJSON: {
        chart: {
          issliced: false
        },
        series: []
      }
    };
    reflowUpdate.hcJSON.series[0] = {
      data: reflowData = []
    };

    sliced = dataItem.sliced = defined(sliced) ? sliced : !dataItem.sliced;

    dyPrev = -seriesOptionsHalf;
    dyNext = seriesOptionsHalf;

    slicingEnd = function slicingEnd() {
      return function () {
        conf.sliceLock = 0;
        /**
                     * SlicingEnd event is usually associated with a pie chart.
                     * In pie charts, on click a certain entity of the pie, the clicked slice is shown distinctly.
                     * The slicing start event is triggered as soon as the particular entity
                     * is clicked when the slicing is finished,
                     * the slicingEnd event is triggered.
                     * @event FusionCharts#slicingEnd
                     * @param {boolean} slicedState Indicates whether the data is sliced or not.
                     * @param {string} data The plot data from the chart to slice.
                     */
        chart.fireChartInstanceEvent('SlicingEnd', {
          slicedState: sliced,
          data: datasetStore.getPlotData(clickedItemId)
        });
      };
    };

    for (i = 0; i < length; i += 1) {
      dataObj = data[i].plot;
      if (!dataObj) {
        continue;
      }

      graphicalElement = data[i].getGraphicalElement();
      if (dataObj !== dataItem) {
        dataObj.sliced = false;
        reflowData[i] = { isSliced: false };
        itemClicked = false;
      } else {
        reflowData[i] = { isSliced: sliced };
        itemClicked = true;
        clickedItemId = i;
      }

      if (graphicalElement.graphic) {
        dyOld = dataObj.dy;
        dyNew = -dyOld;

        if (sliced) {
          if (dataObj.x < dataItem.x) {
            dyNew += dyPrev;
            noOFPrevPoint += 1;
          } else if (dataObj.x == dataItem.x) {
            if (!noOFPrevPoint) {
              dyNew += -seriesOptionsHalf * 0.5;
            } else if (i == length - 1) {
              dyNew += seriesOptionsHalf * 0.5;
            }
          } else {
            dyNew += dyNext;
          }
        }
        // The plot should be sent to ending y position, before invoking
        // next slicing movement, as in the case of rapid slicing interactions.
        graphicalElement.graphic.attr({
          transform: 't0,' + dataObj.dy
        });

        dataObj.dy += dyNew;

        transformObj = { transform: '...t0,' + dyNew };

        // dataItem.distanceAvailed = dyNew;
        /**
                     * SlicingStart event is usually associated with a pie chart.
                     * In pie charts, on click a certain entity of the pie, the clicked slice is shown distinctly.
                     * The slicing start event is triggered as soon as the particular entity is clicked.
                     * @event FusionCharts#slicingStart
                     * @param {boolean} slicedState Indicates whether the data is sliced or not.
                     * @param {string} data The plot data from the chart to slice.
                     */
        itemClicked && chart.fireChartInstanceEvent('SlicingStart', {
          slicedState: !sliced,
          data: datasetStore.getPlotData(clickedItemId)
        });

        // dataObj.graphic.animateWith(dummyAnimElem, dummyAnimObj, transformObj, animDuration, animType,
        //                 itemClicked && slicingEnd(sliced, clickedItemId));
        animationManager.setAnimation({
          el: graphicalElement.graphic,
          attr: transformObj,
          component: datasetStore,
          callback: itemClicked && slicingEnd(sliced, clickedItemId)
        });
        // for labels at center translate the labels
        if (graphicalElement.dataLabel) {
          // dataObj.dataLabel.animateWith(dummyAnimElem, dummyAnimObj, transformObj, animDuration,
          //                   animType);
          animationManager.setAnimation({
            el: graphicalElement.dataLabel,
            attr: transformObj,
            component: datasetStore
          });
        }
        if (graphicalElement.connector) {
          // dataObj.connector.animateWith(dummyAnimElem, dummyAnimObj, transformObj, animDuration,
          //                   animType);
          animationManager.setAnimation({
            el: graphicalElement.connector,
            attr: transformObj,
            component: datasetStore
          });
        }
        // for tracker translate it
        if (graphicalElement.trackerObj) {
          // dataObj.trackerObj.animateWith(dummyAnimElem, dummyAnimObj, transformObj, animDuration,
          //                   animType);
          animationManager.setAnimation({
            el: graphicalElement.trackerObj,
            attr: transformObj,
            component: datasetStore
          });
        }
        // For Funnel streamlinedData, the top label should move with top funnel,
        // characterised by no graphic but with label for the plot. Topmost funnel
        // is not the topmost plot here.
        graphic = data[0].getGraphicalElement('graphic');
        dataLabel = data[0].getGraphicalElement('dataLabel');
        if (i == 1 && !graphic && dataLabel) {
          // data[0].dataLabel.animateWith(dummyAnimElem, dummyAnimObj, transformObj, animDuration,
          //                   animType);
          animationManager.setAnimation({
            el: dataLabel,
            attr: transformObj,
            component: datasetStore
          });
        }
      }
    }
    // After first click delete state
    delete conf.clicked;
  };
  /**
   * Handles legend interactivity
   * @param {Object} plotItem plot object
   */


  FunnelPyramidBaseDataset.prototype.legendClick = function legendClick(plotItem) {
    this.slice.call(plotItem);
  };
  /**
   * Fetch event arguements of legendItems
   * @param {Object} legendItem legend item object of particular data
   * @return {Object} event arguements
   */


  FunnelPyramidBaseDataset.prototype.getEventArgs = function getEventArgs(legendItem) {
    var dataset = this,
        dataStore = dataset.components.data,
        configuration = legendItem.config,
        index = configuration.index,
        dataObj = dataStore[index] || {},
        eventArgs;
    eventArgs = {
      alpha: dataObj.alpha,
      value: dataObj.y,
      color: dataObj.color,
      borderColor: dataObj.borderColor,
      borderWidth: dataObj.borderWidth,
      link: dataObj.link,
      displayValue: dataObj.displayValue,
      datasetIndex: dataObj.datasetIndex,
      toolText: dataObj.toolText,
      label: dataObj.categoryLabel
    };
    return eventArgs;
  };

  return FunnelPyramidBaseDataset;
}(_componentInterface2['default']);

exports['default'] = FunnelPyramidBaseDataset;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._parseCanvasCosmetics = exports._placeOpenCloseValues = undefined;

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

var _fusioncharts = __webpack_require__(229);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _sparkwinloss = __webpack_require__(757);

var _sparkwinloss2 = _interopRequireDefault(_sparkwinloss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var GUTTER_PADDING = 2,
    convertColor = _lib.graphics.convertColor,
    math = Math,
    mathMin = math.min;
/**
 * Calculates space for values
 * @param {number} availableWidth available width for values
 * @return {Object} dimension taken by values(width, height)
 */
function _placeOpenCloseValues(availableWidth) {
  var iapi = this,
      config = iapi.config,
      smartLabel = iapi.getFromEnv('smartLabel'),
      style = config.dataLabelStyle,
      borderThickness = (0, _lib.pluckNumber)(style.borderThickness, 0),
      valuePadding = iapi.config.valuepadding + GUTTER_PADDING + borderThickness,
      openValueWidth = 0,
      closeValueWidth = 0,

  // height = chartConfig.height,
  // width = availableWidth,
  sparkValues = config.sparkValues || {},
      left,
      right;
  smartLabel.useEllipsesOnOverflow(config.useEllipsesWhenOverflow);
  smartLabel.setStyle(style);

  if (sparkValues.openValue && sparkValues.openValue.label) {
    sparkValues.openValue.smartObj = smartLabel.getSmartText(sparkValues.openValue.label);
    openValueWidth = sparkValues.openValue.smartObj.width + valuePadding;
  }
  if (sparkValues.closeValue && sparkValues.closeValue.label) {
    sparkValues.closeValue.smartObj = smartLabel.getSmartText(sparkValues.closeValue.label);
    closeValueWidth += sparkValues.closeValue.smartObj.width + valuePadding;
  }
  if (sparkValues.highValue && sparkValues.highValue.label) {
    sparkValues.highValue.smartObj = smartLabel.getSmartText(sparkValues.highValue.label);
  }
  if (sparkValues.lowValue && sparkValues.lowValue.label) {
    sparkValues.lowValue.smartObj = smartLabel.getSmartText(sparkValues.lowValue.label);
  }
  if (sparkValues.highLowValue && sparkValues.highLowValue.label) {
    sparkValues.highLowValue.smartObj = smartLabel.getSmartText(sparkValues.highLowValue.label);
    closeValueWidth += sparkValues.highLowValue.smartObj.width + valuePadding;
  }

  // Restrict the space to availableWidth
  left = sparkValues.openValueWidth = mathMin(openValueWidth, availableWidth);
  right = sparkValues.closeValueWidth = mathMin(closeValueWidth, availableWidth - left);

  return {
    left: left,
    right: right
  };
}
/**
 * Parse Canvas cosmetics
 */
function _parseCanvasCosmetics() {
  var canvasBorderThickness,
      showCanvasBorder,
      shadow,
      iapi = this,
      config = iapi.config,
      canvasConfig = iapi.getChildren('canvas')[0].config,
      chartAttrs = iapi.getFromEnv('dataSource').chart,
      colorM = iapi.getFromEnv('color-manager');

  canvasConfig.canvasBorderRadius = 0;
  canvasBorderThickness = canvasConfig.canvasBorderThickness = 0;

  showCanvasBorder = canvasConfig.showCanvasBorder = 0;

  canvasConfig.canvasBorderWidth = !showCanvasBorder ? 0 : canvasBorderThickness;
  canvasConfig.canvasBorderColor = convertColor((0, _lib.pluck)(chartAttrs.canvasbordercolor, colorM.getColor('canvasBorderColor')));

  // Make canvas background transparent for sparkWinLoss and sparkLine charts.
  canvasConfig.canBGColor = _lib.COLOR_TRANSPARENT;

  shadow = canvasConfig.shadow = 0;
  canvasConfig.shadowOnCanvasFill = shadow && shadow.enabled;

  // canvas padding
  canvasConfig.origCanvasTopPad = (0, _lib.pluckNumber)(chartAttrs.canvastoppadding, 0);
  canvasConfig.origCanvasBottomPad = (0, _lib.pluckNumber)(chartAttrs.canvasbottompadding, 0);
  canvasConfig.origCanvasLeftPad = (0, _lib.pluckNumber)(chartAttrs.canvasleftpadding, 0);
  canvasConfig.origCanvasRightPad = (0, _lib.pluckNumber)(chartAttrs.canvasrightpadding, 0);

  canvasConfig.canvasPadding = 0;

  config.origCanvasLeftMargin = (0, _lib.pluckNumber)(chartAttrs.canvasleftmargin);
  config.origCanvasRightMargin = (0, _lib.pluckNumber)(chartAttrs.canvasrightmargin);
  config.origCanvasTopMargin = (0, _lib.pluckNumber)(chartAttrs.canvastopmargin);
  config.origCanvasBottomMargin = (0, _lib.pluckNumber)(chartAttrs.canvasbottommargin);
}
/**
 * Creates SparkWinLoss class
 */

var SparkWinLoss = function (_SparkChartBase) {
  _inherits(SparkWinLoss, _SparkChartBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SparkWinLoss.getName = function getName() {
    return 'SparkWinLoss';
  };

  /**
   * Constructor function of class SparkWinLoss
   */


  function SparkWinLoss() {
    _classCallCheck(this, SparkWinLoss);

    var _this = _possibleConstructorReturn(this, _SparkChartBase.call(this));

    _this.canvasBorderThickness = 0;
    _this._placeOpenCloseValues = _placeOpenCloseValues;
    _this._parseCanvasCosmetics = _parseCanvasCosmetics;
    return _this;
  }
  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  SparkWinLoss.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _SparkChartBase.prototype.parseChartAttr.call(this, dataObj);
    this.config.drawTrendRegion = 0;
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkWinLoss.prototype.getName = function getName() {
    return 'SparkWinLoss';
  };
  /**
   * Set default configurations for chart
   */


  SparkWinLoss.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SparkChartBase.prototype.__setDefaultConfig && _SparkChartBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'sparkwinloss Chart';
    config.singleseries = true;
    config.defaultDatasetType = 'sparkwinloss';
    config.enablemousetracking = true;
    config.yRangeMin = -1;
    config.yRangeMax = 1;
  };
  /**
   * Returns Dataset type for Spark Win Loss
   * @return {Class} SparkWinLossDataset class
   */


  SparkWinLoss.prototype.getDSdef = function getDSdef() {
    return _sparkwinloss2['default'];
  };

  return SparkWinLoss;
}(_fusioncharts2['default']);

exports['default'] = SparkWinLoss;
exports._placeOpenCloseValues = _placeOpenCloseValues;
exports._parseCanvasCosmetics = _parseCanvasCosmetics;

/***/ }),

/***/ 357:
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

var _fusioncharts = __webpack_require__(17);

var _fusioncharts2 = __webpack_require__(111);

var _fusioncharts3 = _interopRequireDefault(_fusioncharts2);

var _realtimearea = __webpack_require__(358);

var _realtimearea2 = _interopRequireDefault(_realtimearea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var RealtimeArea = function (_RealtimeColumn) {
  _inherits(RealtimeArea, _RealtimeColumn);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeArea.getName = function getName() {
    return 'RealtimeArea';
  };

  function RealtimeArea() {
    _classCallCheck(this, RealtimeArea);

    var _this = _possibleConstructorReturn(this, _RealtimeColumn.call(this));

    _this.axisPaddingLeft = 0;
    _this.axisPaddingRight = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeArea.prototype.getName = function getName() {
    return 'RealtimeArea';
  };

  RealtimeArea.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _RealtimeColumn.prototype.__setDefaultConfig && _RealtimeColumn.prototype.__setDefaultConfig.call(this);
    _fusioncharts._setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'realtimearea';
    config.enablemousetracking = true;
  };

  RealtimeArea.prototype.getDSdef = function getDSdef() {
    return _realtimearea2['default'];
  };

  return RealtimeArea;
}(_fusioncharts3['default']);

exports['default'] = RealtimeArea;

/***/ }),

/***/ 358:
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

var _area = __webpack_require__(23);

var _area2 = _interopRequireDefault(_area);

var _realtimecolumn = __webpack_require__(230);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Real time area dataset class definition
 */
var RealtimeAreaDataset = function (_AreaDataset) {
  _inherits(RealtimeAreaDataset, _AreaDataset);

  function RealtimeAreaDataset() {
    _classCallCheck(this, RealtimeAreaDataset);

    return _possibleConstructorReturn(this, _AreaDataset.apply(this, arguments));
  }

  /**
   * Setting the dataStore as per the numDisplaySets attributes.
   * @param  {boolean} force set true during clear chart
   */
  RealtimeAreaDataset.prototype._realTimeConfigure = function _realTimeConfigure(force) {
    _realtimecolumn._realTimeConfigure.call(this, force);
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  RealtimeAreaDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeAreaDataset.prototype.getName = function getName() {
    return 'realTimeArea';
  };

  return RealtimeAreaDataset;
}(_area2['default']);

exports['default'] = RealtimeAreaDataset;

/***/ }),

/***/ 359:
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

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _realtimecolumn = __webpack_require__(230);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Real time line dataset class definition
 */
var RealtimeLineDataset = function (_LineDataset) {
  _inherits(RealtimeLineDataset, _LineDataset);

  function RealtimeLineDataset() {
    _classCallCheck(this, RealtimeLineDataset);

    return _possibleConstructorReturn(this, _LineDataset.apply(this, arguments));
  }

  /**
   * Setting the dataStore as per the numDisplaySets attributes.
   * @param  {boolean} force set true during clear chart
   */
  RealtimeLineDataset.prototype._realTimeConfigure = function _realTimeConfigure(force) {
    _realtimecolumn._realTimeConfigure.call(this, force);
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  RealtimeLineDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeLineDataset.prototype.getName = function getName() {
    return 'realtimeLine';
  };

  return RealtimeLineDataset;
}(_line2['default']);

exports['default'] = RealtimeLineDataset;

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(727);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(730);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

var _fusioncharts5 = __webpack_require__(736);

var _fusioncharts6 = _interopRequireDefault(_fusioncharts5);

var _fusioncharts7 = __webpack_require__(738);

var _fusioncharts8 = _interopRequireDefault(_fusioncharts7);

var _fusioncharts9 = __webpack_require__(352);

var _fusioncharts10 = _interopRequireDefault(_fusioncharts9);

var _fusioncharts11 = __webpack_require__(741);

var _fusioncharts12 = _interopRequireDefault(_fusioncharts11);

var _fusioncharts13 = __webpack_require__(742);

var _fusioncharts14 = _interopRequireDefault(_fusioncharts13);

var _fusioncharts15 = __webpack_require__(745);

var _fusioncharts16 = _interopRequireDefault(_fusioncharts15);

var _fusioncharts17 = __webpack_require__(748);

var _fusioncharts18 = _interopRequireDefault(_fusioncharts17);

var _fusioncharts19 = __webpack_require__(752);

var _fusioncharts20 = _interopRequireDefault(_fusioncharts19);

var _fusioncharts21 = __webpack_require__(755);

var _fusioncharts22 = _interopRequireDefault(_fusioncharts21);

var _fusioncharts23 = __webpack_require__(356);

var _fusioncharts24 = _interopRequireDefault(_fusioncharts23);

var _fusioncharts25 = __webpack_require__(759);

var _fusioncharts26 = _interopRequireDefault(_fusioncharts25);

var _fusioncharts27 = __webpack_require__(111);

var _fusioncharts28 = _interopRequireDefault(_fusioncharts27);

var _fusioncharts29 = __webpack_require__(357);

var _fusioncharts30 = _interopRequireDefault(_fusioncharts29);

var _fusioncharts31 = __webpack_require__(764);

var _fusioncharts32 = _interopRequireDefault(_fusioncharts31);

var _fusioncharts33 = __webpack_require__(765);

var _fusioncharts34 = _interopRequireDefault(_fusioncharts33);

var _fusioncharts35 = __webpack_require__(766);

var _fusioncharts36 = _interopRequireDefault(_fusioncharts35);

var _fusioncharts37 = __webpack_require__(767);

var _fusioncharts38 = _interopRequireDefault(_fusioncharts37);

var _fusioncharts39 = __webpack_require__(768);

var _fusioncharts40 = _interopRequireDefault(_fusioncharts39);

var _fusioncharts41 = __webpack_require__(346);

var _fusioncharts42 = _interopRequireDefault(_fusioncharts41);

var _datastreamer = __webpack_require__(775);

var _datastreamer2 = _interopRequireDefault(_datastreamer);

var _fusioncharts43 = __webpack_require__(18);

var _fusioncharts44 = _interopRequireDefault(_fusioncharts43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_fusioncharts44['default'].addDep(_datastreamer2['default']); /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


_fusioncharts44['default'].addDep(_fusioncharts2['default']);
_fusioncharts44['default'].addDep(_fusioncharts4['default']);
_fusioncharts44['default'].addDep(_fusioncharts6['default']);
_fusioncharts44['default'].addDep(_fusioncharts8['default']);
_fusioncharts44['default'].addDep(_fusioncharts10['default']);
_fusioncharts44['default'].addDep(_fusioncharts12['default']);
_fusioncharts44['default'].addDep(_fusioncharts14['default']);
_fusioncharts44['default'].addDep(_fusioncharts16['default']);
_fusioncharts44['default'].addDep(_fusioncharts18['default']);
_fusioncharts44['default'].addDep(_fusioncharts20['default']);
_fusioncharts44['default'].addDep(_fusioncharts22['default']);
_fusioncharts44['default'].addDep(_fusioncharts24['default']);
_fusioncharts44['default'].addDep(_fusioncharts26['default']);
_fusioncharts44['default'].addDep(_fusioncharts28['default']);
_fusioncharts44['default'].addDep(_fusioncharts30['default']);
_fusioncharts44['default'].addDep(_fusioncharts32['default']);
_fusioncharts44['default'].addDep(_fusioncharts34['default']);
_fusioncharts44['default'].addDep(_fusioncharts36['default']);
_fusioncharts44['default'].addDep(_fusioncharts38['default']);
_fusioncharts44['default'].addDep(_fusioncharts40['default']);
_fusioncharts44['default'].addDep(_fusioncharts42['default']);
_fusioncharts44['default'].addFile('fusioncharts.widgets.js');

// var Widgets = function (FC) {
//   return FC;
// };
//
exports['default'] = _fusioncharts44['default'];

/***/ }),

/***/ 727:
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

var _fusioncharts = __webpack_require__(222);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bulb = __webpack_require__(728);

var _bulb2 = _interopRequireDefault(_bulb);

var _lib = __webpack_require__(5);

var _colorBucket = __webpack_require__(143);

var _colorBucket2 = _interopRequireDefault(_colorBucket);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF;

var Bulb = function (_GaugeWidget) {
  _inherits(Bulb, _GaugeWidget);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Bulb.getName = function getName() {
    return 'Bulb';
  };

  function Bulb() {
    _classCallCheck(this, Bulb);

    var _this = _possibleConstructorReturn(this, _GaugeWidget.call(this));

    _this._drawCanvas = function () {
      // Blank fn to Override it's parent method
    };

    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Bulb.prototype.getName = function getName() {
    return 'Bulb';
  };

  /**
   * Configures the colorRange provided as json data
   *
   * @param {any} dataObj - dataObj
   * @memberof Bulb
   */


  Bulb.prototype.configureAttributes = function configureAttributes(dataObj) {
    _GaugeWidget.prototype.configureAttributes.call(this, dataObj);
    var iapi = this,
        jsonData = iapi.getFromEnv('dataSource'),
        colorrange = jsonData.colorrange;
    // componentFactory(iapi, ColorGradient, 'colorRange', 1, [colorrange]);

    (0, _lib.componentFactory)(iapi, _colorBucket2['default'], 'colorRange', 1, [{
      colorRange: colorrange,
      numberFormatter: iapi.getFromEnv('number-formatter')
    }]);

    iapi.addToEnv('colorRange', iapi.getChildren('colorRange')[0]);
  };

  Bulb.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _GaugeWidget.prototype.__setDefaultConfig && _GaugeWidget.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.showRTvalue = false;
    config.canvasPadding = false;
    config.defaultSeriesType = 'bulb';
    config.defaultPlotShadow = 1;
    config.drawAnnotations = true;
    config.charttopmargin = 10;
    config.chartrightmargin = 10;
    config.chartbottommargin = 10;
    config.chartleftmargin = 10;
    config.realtimeEnabled = true;
    config.isRealTime = true;
    config.friendlyName = 'Bulb Gauge';
    config.defaultDatasetType = 'bulb';
    config.placevaluesinside = 0;
    config.hasgaugeoriginx = UNDEF;
    config.gaugeoriginx = UNDEF;
    config.hasgaugeoriginy = UNDEF;
    config.gaugeoriginy = UNDEF;
    config.hasgaugeradius = UNDEF;
    config.gaugeradius = UNDEF;
    config.valuepadding = 2;
    config.showgaugeborder = 0;
    config.showhovereffect = UNDEF;
    config.autoscale = 1;
    config.skipCanvasDrawing = true;
  };

  Bulb.prototype._spaceManager = function _spaceManager() {
    // todo marge _allocateSpace and _spacemanager
    var availableHeight,
        iapi = this,
        config = iapi.config,
        dataset = iapi.getChildren('dataset')[0],
        datasetConfig = dataset.config,
        is3D = iapi.config.is3D,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        showBorder = (0, _lib.pluckNumber)(chartAttrs.showborder, is3D ? 0 : 1),
        chartBorderHorizontal,
        chartBorderVertical,
        minChartWidth = config.minChartWidth,
        minChartHeight = config.minChartHeight,
        chartBorderWidth = config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0;

    if (config.autoscale) {
      datasetConfig.scaleFactor = Bulb._getScaleFactor(datasetConfig.origW, datasetConfig.origH, config.width, config.height);
    } else {
      datasetConfig.scaleFactor = 1;
    }

    if (config.canvasWidth - 2 * chartBorderWidth < minChartWidth) {
      chartBorderVertical = (config.canvasWidth - minChartWidth) / 2;
    }

    if (config.canvasHeight - 2 * chartBorderWidth < minChartHeight) {
      chartBorderHorizontal = (config.canvasHeight - minChartHeight) / 2;
    }

    iapi._allocateSpace({
      top: chartBorderHorizontal || chartBorderWidth,
      bottom: chartBorderHorizontal || chartBorderWidth,
      left: chartBorderVertical || chartBorderWidth,
      right: chartBorderVertical || chartBorderWidth
    });
    iapi._allocateSpace(iapi._manageActionBarSpace && iapi._manageActionBarSpace(config.availableHeight * 0.225) || {});
    //* ***** Manage space
    availableHeight = config.canvasHeight * 0.7;

    // (hasLegend !== false) &&
    //           iapi._allocateSpace(legend._manageLegendPosition(availableHeight));

    // a space manager that manages the space for the tools as well as the captions.
    iapi._manageChartMenuBar(availableHeight);

    dataset._manageSpace && iapi._allocateSpace(dataset._manageSpace(availableHeight));
  };

  Bulb.prototype.allocatePosition = function allocatePosition() {
    var iapi = this,
        chartConfig = iapi.config,
        dataset = iapi.getDatasets()[0],
        conf = dataset.conf,
        radius = void 0,
        canvasHeight = chartConfig.canvasHeight,
        canvasWidth = chartConfig.canvasWidth,
        canvasTop = chartConfig.canvasTop,
        canvasLeft = chartConfig.canvasLeft,
        gaugeOriginX = chartConfig.gaugeoriginx,
        gaugeOriginY = chartConfig.gaugeoriginy,
        gaugeRadius = chartConfig.gaugeradius,
        hasGaugeOriginX = chartConfig.hasgaugeoriginx,
        hasGaugeOriginY = chartConfig.hasgaugeoriginy,
        hasGaugeRadius = chartConfig.hasgaugeradius;

    gaugeOriginX = hasGaugeOriginX !== UNDEF ? gaugeOriginX * conf.scaleFactor : canvasLeft + canvasWidth / 2;

    gaugeOriginY = hasGaugeOriginY !== UNDEF ? gaugeOriginY * conf.scaleFactor : canvasTop + canvasHeight / 2;

    radius = hasGaugeRadius !== UNDEF ? gaugeRadius * conf.scaleFactor : Math.min(canvasWidth / 2, canvasHeight / 2);

    // Setting macros for annotation
    chartConfig.gaugeStartX = gaugeOriginX - radius;
    chartConfig.gaugeEndX = gaugeOriginX + radius;
    chartConfig.gaugeStartY = gaugeOriginY - radius;
    chartConfig.gaugeEndY = gaugeOriginY + radius;
    chartConfig.gaugeCenterX = gaugeOriginX;
    chartConfig.gaugeCenterY = gaugeOriginY;
    chartConfig.gaugeRadius = radius;
  };

  Bulb.prototype._getData = function _getData() {
    var iapi = this,
        dataset = iapi.getChildren('dataset'),
        data,
        dataObj;
    if (dataset) {
      dataObj = dataset[0].components.data;
      if (dataObj && dataObj[0]) {
        data = dataObj[0].config;
        return (0, _lib.pluckNumber)(data.setValue, data.itemValue);
      }
    }
  };
  /**
   * function to calculate post space management calculations
   * calculations like axis dimenetion set, allocate space for xaxis labels,
   * canvas padding etc.
   */
  // eslint-disable-next-line


  Bulb.prototype._postSpaceManagement = function _postSpaceManagement() {
    // overwrite this method and do nothing
  };

  Bulb.prototype.getDSdef = function getDSdef() {
    return _bulb2['default'];
  };

  Bulb._getScaleFactor = function _getScaleFactor(origW, origH, canvasWidth, canvasHeight) {
    var scaleFactor;
    origH = (0, _lib.pluckNumber)(origH, canvasHeight);
    origW = (0, _lib.pluckNumber)(origW, canvasWidth);
    if (!origH || !origW) {
      scaleFactor = 1;
    } else if (origW / canvasWidth == origH / canvasHeight) {
      // Now, if the ratio of original width,height & stage width,height are same
      // In this case, the transformation value would be the same, as the ratio
      // of transformation of width and height is same.
      scaleFactor = canvasWidth / origW;
    } else {
      // If the transformation factors are different, we do a constrained scaling
      // We get the aspect whose delta is on the lower side.
      scaleFactor = Math.min(canvasWidth / origW, canvasHeight / origH);
    }

    return scaleFactor;
  };

  return Bulb;
}(_fusioncharts2['default']);

exports['default'] = Bulb;

/***/ }),

/***/ 728:
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

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _dependencyManager = __webpack_require__(6);

var _bulbAnimation = __webpack_require__(729);

var _bulbAnimation2 = _interopRequireDefault(_bulbAnimation);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    BLANKSTRING = _lib.BLANK,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    showHoverEffectStr = _lib.preDefStr.showHoverEffectStr,
    visibleStr = _lib.preDefStr.visibleStr,
    ROUND = _lib.preDefStr.ROUND,
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    FILLMIXDARK10 = '{dark-10}',
    EVENTARGS = 'eventArgs',
    SETROLLOVERATTR = 'setRolloverAttr',
    SETROLLOUTATTR = 'setRolloutAttr',
    POINTER = 'pointer',
    math = Math,
    getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    mathMin = math.min,
    win = window,
    userAgent = win.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !win.opera,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',

/**
 * Helper function to create a RedRaphael group.
 * @param  {string} groupName                Name of the group to be created.
 * @param  {Element} parentContainer         The parent container in which the group will be appended.
 * @param {Object} dataset The concerned dataset
 * @return {Element}                         The group that was created.
 */
createGroup = function createGroup(groupName, parentContainer, dataset) {
  var animationManager = dataset.getFromEnv('animationManager');
  return animationManager.setAnimation({
    el: 'group',
    attr: { name: groupName },
    container: parentContainer,
    component: dataset,
    label: 'group'
  });
};
(0, _dependencyManager.addDep)({
  name: 'bulbAnimation',
  type: 'animationRule',
  extension: _bulbAnimation2['default']
});
/**
 * Creates dataset class for Bulb
 */

var BulbDataset = function (_ComponentInterface) {
  _inherits(BulbDataset, _ComponentInterface);

  /**
   * Constructor function to initialise attributes of BulbDataset object
   */
  function BulbDataset() {
    _classCallCheck(this, BulbDataset);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.addData = function () {
      // Blank fn to Override it's parent method
    };
    _this.removeData = function () {
      // Blank fn to Override it's parent method
    };
    _this.components = {};
    return _this;
  }

  /**
   * Returns the type of the component
   * @return {string} The type of the component, in this case a dataset.
   */


  BulbDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Returns the name of the component
   * @return {string} The name of the component.
   */


  BulbDataset.prototype.getName = function getName() {
    return 'bulb';
  };
  /**
   * Calculates space management of bulb plot
   * @param {number} availableHeight maximum available height plot can take
   * @return {Object} height needed for bulb plot
   */


  BulbDataset.prototype._manageSpace = function _manageSpace(availableHeight) {
    var dataSet = this,
        conf = dataSet.config,

    // JSONData = dataSet.JSONData,
    // setDataArr = JSONData.data,
    dataStore = dataSet.components.data,
        dataObj,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        smartLabel = dataSet.getFromEnv('smartLabel'),
        smartDataLabel,
        style = chartConfig.dataLabelStyle,
        lineHeight = (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12),
        maxAllowedHeight = availableHeight,
        valuePadding = chartConfig.valuepadding,
        heightUsed = 0,
        config;

    // setData = setDataArr[0];
    dataObj = dataStore[0];
    config = dataObj && dataObj.config;

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    smartLabel.setStyle(style);
    if (config && config.displayValue !== BLANKSTRING && !chartConfig.placevaluesinside) {
      if (conf.showValue) {
        smartDataLabel = smartLabel.getOriSize(config.displayValue);
        // special fix for space string
        /** @todo will be removed when smartLabel will be able to handle it */
        if (config.displayValue === _lib.BLANK) {
          smartDataLabel = {
            height: lineHeight
          };
        }

        if (smartDataLabel.height > 0) {
          heightUsed = smartDataLabel.height + valuePadding;
        }

        if (heightUsed > maxAllowedHeight) {
          heightUsed = maxAllowedHeight;
        }
      }
    }

    conf.heightUsed = heightUsed;
    return {
      top: 0,
      bottom: heightUsed
    };
  };

  /**
   * Configure dataset component and parse default values
   * @param  {Object} datasetJSON JSON for dataset configurations
   * @return {boolean} Indicates whether the configuration was successful or not
   */


  BulbDataset.prototype.configureAttributes = function configureAttributes(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.config.JSONData = datasetJSON;
    var dataSet = this,
        JSONData = dataSet.config.JSONData,
        userConfig = (0, _lib.extend2)({}, JSONData),
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        chartConfig = chart.config,
        chartAttr = chart.getFromEnv('dataSource').chart,
        enableAnimation;

    (0, _lib.parseConfiguration)(userConfig, conf, chart.config, { data: true });

    // is3D = pluckNumber(chartAttr.is3D, 1);

    // conf.autoScale = pluckNumber(chartAttr.autoscale, 1);

    conf.origW = (0, _lib.pluckNumber)(chartAttr.origw, chartConfig.autoscale ? chart.config.origRenderWidth : chartConfig.width || chart.config.origRenderWidth);
    conf.origH = (0, _lib.pluckNumber)(chartAttr.origh, chartConfig.autoscale ? chart.config.origRenderHeight : chartConfig.height || chart.config.origRenderHeight);

    // showTooltip = pluckNumber(chartAttr.showtooltip, 1);
    conf.setToolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttr.plottooltext, UNDEF)));
    conf.useColorNameAsValue = (0, _lib.pluckNumber)(chartAttr.usecolornameasvalue, 0);
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showValue = (0, _lib.pluckNumber)(chartAttr.showvalue, 1);

    dataSet._setConfigure();
  };

  /**
   * Configure data level attributes
   * @param {Object} newDataset updated JSON data
   */


  BulbDataset.prototype._setConfigure = function _setConfigure(newDataset) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        chartConfig = chart.config,
        JSONData = dataSet.config.JSONData,
        setDataArr = newDataset || JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = newDataset && newDataset.data.length || setDataLen,
        jsonData = chart.getFromEnv('dataSource'),
        chartAttr = jsonData.chart,
        colorM = dataSet.getFromEnv('color-manager'),
        showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1),

    // parseUnsafeString = lib.parseUnsafeString,
    tooltipSepChar = (0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttr.tooltipsepchar, _lib.COMMASPACE)),

    // parseTooltext = lib.parseTooltext,
    formatedVal,
        toolText,
        showHoverEffect = chartConfig.showhovereffect,
        dataStore = dataSet.components.data,
        setData,
        setValue,
        dataObj,
        config,
        label,
        setDisplayValue,
        is3D = (0, _lib.pluckNumber)(chartAttr.is3d, 1),
        i,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        colorRangeGetter,
        colorCodeObj,
        gaugeFillAlpha,
        colorName,
        gaugeBorderColorCode,
        gaugeBorderAlpha,
        hasGaugeBorderMix,
        fillColor,
        gaugeBorderColor,
        gaugeBorderThickness,
        gaugeFillHoverColor,
        gaugeFillHoverAlpha,
        showGaugeBorderOnHover,
        gaugeBorderHoverColor,
        gaugeBorderHoverAlpha,
        gaugeBorderHoverThickness,
        is3DOnHover,
        hasHoberFillMix,
        hasBorderHoverMix,
        displayValue,
        getPointColor = function getPointColor(color, alpha, is3D) {
      if (!is3D) {
        return (0, _lib.convertColor)(color, alpha);
      }
      return {
        FCcolor: {
          cx: 0.4,
          cy: 0.4,
          r: '80%',
          color: getLightColor(color, 65) + _lib.COMMASTRING + getLightColor(color, 75) + _lib.COMMASTRING + getDarkColor(color, 65),
          alpha: alpha + _lib.COMMASTRING + alpha + _lib.COMMASTRING + alpha,
          ratio: '0,30,70', // BGRATIOSTRING,
          radialGradient: true
        }
      };
    },
        hoverAttr,
        hoverAnimAttr,
        outAttr;

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }

    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      if (newDataset) {
        setData = newDataset && newDataset.data[i];
      } else {
        setData = setDataArr[i];
      }

      dataObj = dataStore[i];

      config = dataObj && dataObj.config;

      if (!dataObj) {
        dataObj = dataStore[i] = {};
      }

      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }
      config.setValue = setValue = numberFormatter.getCleanValue(setData.value) || 0;
      formatedVal = numberFormatter.dataLabels(setValue);
      setDisplayValue = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(setData.displayvalue));
      // Get colorRange from the env of chart
      config.colorRangeGetter = colorRangeGetter = dataSet.getFromEnv('colorRange');
      colorCodeObj = colorRangeGetter.getColorObj(config.setValue);
      if (colorCodeObj.outOfRange) {
        colorCodeObj = colorRangeGetter.config.defaultObj;
      }
      // colorCodeObj = colorCodeObj.colorObj || colorCodeObj.prevObj || colorCodeObj.nextObj;
      gaugeFillAlpha = (0, _lib.pluckNumber)(chartAttr.gaugefillalpha, colorCodeObj.alpha, 100);
      colorName = (0, _lib.parseUnsafeString)((0, _lib.pluck)(colorCodeObj.label, colorCodeObj.name));
      gaugeBorderColorCode = (0, _lib.pluck)(colorCodeObj.bordercolor, chartAttr.gaugebordercolor, getDarkColor(colorCodeObj.code, 70));
      gaugeBorderAlpha = (0, _lib.pluckNumber)(colorCodeObj.borderalpha, chartAttr.gaugeborderalpha, '90') * gaugeFillAlpha / 100;
      hasGaugeBorderMix = /\{/.test(gaugeBorderColorCode);
      gaugeBorderColorCode = hasGaugeBorderMix ? colorM.parseColorMix((0, _lib.pluck)(colorCodeObj.bordercolor, colorCodeObj.code), gaugeBorderColorCode)[0] : gaugeBorderColorCode;
      config.gaugeBorderColor = gaugeBorderColor = (0, _lib.convertColor)(gaugeBorderColorCode, gaugeBorderAlpha);
      config.gaugeBorderThickness = gaugeBorderThickness = chartConfig.showgaugeborder ? (0, _lib.pluckNumber)(chartAttr.gaugeborderthickness, 1) : 0;
      config.fillColor = fillColor = getPointColor(colorCodeObj.code, gaugeFillAlpha, is3D);

      if (showHoverEffect !== 0 && (showHoverEffect || chartAttr.gaugefillhovercolor || chartAttr.plotfillhovercolor || chartAttr.gaugefillhoveralpha || chartAttr.plotfillhoveralpha || chartAttr.gaugefillhoveralpha === 0 || chartAttr.is3donhover || chartAttr.is3donhover === 0 || chartAttr.showgaugeborderonhover || chartAttr.showgaugeborderonhover === 0 || chartAttr.gaugeborderhovercolor || chartAttr.gaugeborderhoveralpha || chartAttr.gaugeborderhoveralpha === 0 || chartAttr.gaugeborderhoverthickness || chartAttr.gaugeborderhoverthickness === 0)) {
        showHoverEffect = true;
        gaugeFillHoverColor = (0, _lib.pluck)(chartAttr.gaugefillhovercolor, chartAttr.plotfillhovercolor, FILLMIXDARK10);
        gaugeFillHoverAlpha = (0, _lib.pluckNumber)(chartAttr.gaugefillhoveralpha, chartAttr.plotfillhoveralpha);
        showGaugeBorderOnHover = (0, _lib.pluckNumber)(chartAttr.showgaugeborderonhover);
        if (showGaugeBorderOnHover === UNDEF) {
          if (chartAttr.gaugeborderhovercolor || chartAttr.gaugeborderhoveralpha || chartAttr.gaugeborderhoveralpha === 0 || chartAttr.gaugeborderhoverthickness || chartAttr.gaugeborderhoverthickness === 0) {
            showGaugeBorderOnHover = 1;
          } else {
            showGaugeBorderOnHover = chartConfig.showgaugeborder;
          }
        }
        gaugeBorderHoverColor = (0, _lib.pluck)(chartAttr.gaugeborderhovercolor, FILLMIXDARK10);
        gaugeBorderHoverAlpha = (0, _lib.pluckNumber)(chartAttr.gaugeborderhoveralpha);
        gaugeBorderHoverThickness = showGaugeBorderOnHover ? (0, _lib.pluckNumber)(chartAttr.gaugeborderhoverthickness, gaugeBorderThickness || 1) : 0;
        is3DOnHover = !!(0, _lib.pluckNumber)(chartAttr.is3donhover, is3D);
        hoverAttr = {};
        outAttr = {};
        if (gaugeBorderThickness !== gaugeBorderHoverThickness) {
          hoverAttr['stroke-width'] = gaugeBorderHoverThickness;
          outAttr['stroke-width'] = gaugeBorderThickness;
        }
        outAttr.fill = (0, _lib.toRaphaelColor)(fillColor);
        hasHoberFillMix = /\{/.test(gaugeFillHoverColor);
        gaugeFillHoverColor = hasHoberFillMix ? colorM.parseColorMix(colorCodeObj.code, gaugeFillHoverColor)[0] : (0, _lib.pluck)(gaugeFillHoverColor, colorCodeObj.code);
        hoverAttr.fill = (0, _lib.toRaphaelColor)(getPointColor(gaugeFillHoverColor, (0, _lib.pluckNumber)(gaugeFillHoverAlpha, gaugeFillAlpha), is3DOnHover));
        if (gaugeBorderHoverThickness) {
          outAttr.stroke = gaugeBorderColor;
          hasBorderHoverMix = /\{/.test(gaugeBorderHoverColor);
          hoverAttr.stroke = (0, _lib.convertColor)(hasBorderHoverMix ? colorM.parseColorMix(hasGaugeBorderMix ? gaugeFillHoverColor : gaugeBorderColorCode, gaugeBorderHoverColor)[0] : gaugeBorderHoverColor, (0, _lib.pluckNumber)(gaugeBorderHoverAlpha, gaugeBorderAlpha));
        }
      }
      config.setTooltext = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, JSONData.plottooltext, chartAttr.plottooltext)));

      if (!showTooltip) {
        toolText = false;
      } else if (config.setTooltext !== UNDEF) {
        toolText = (0, _lib.parseTooltext)(config.setTooltext, [1, 2], {
          formattedValue: formatedVal
        }, setData, chartAttr);
      } else {
        // Determine the dispalay value then
        toolText = conf.useColorNameAsValue ? colorName : formatedVal === null ? false : label !== UNDEF ? label + tooltipSepChar + formatedVal : formatedVal;
      }
      // Create the displayvalue
      if (setDisplayValue !== UNDEF) {
        displayValue = setDisplayValue;
      } else {
        // Determine the dispalay value then
        displayValue = setData.label || (conf.useColorNameAsValue ? colorName : formatedVal);
      }
      config.toolText = conf.useColorNameAsValue ? colorName : toolText;
      config.displayValue = displayValue;
      config.rolloverProperties = {
        enabled: showHoverEffect,
        hoverAttr: hoverAttr,
        hoverAnimAttr: hoverAnimAttr,
        outAttr: outAttr
      };
      // tempPlotfillAngle && (plotfillAngle = tempPlotfillAngle);
    }
  };

  /**
   * Update data with new JSON
   * @param {Object} dataObj updated parsd JSON
   * @param {number} index dataset index
   * @param {boolean} draw decides whether to draw datset instantly or not
   */


  BulbDataset.prototype.updateData = function updateData(dataObj, index, draw) {
    var dataSet = this;

    dataSet._setConfigure(dataObj, index);

    if (draw) {
      dataSet.asynDraw();
    }
  };

  /**
   * Draw bulb plot
   */


  BulbDataset.prototype.draw = function draw() {
    var dataSet = this,
        dataStore = dataSet.components.data,
        chart = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        conf = dataSet.config,

    // animationObj = chart.get(configStr, animationObjStr),
    animType = 'easeOut',

    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = animationObj.duration,

    chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasHeight = chartConfig.canvasHeight,
        canvasWidth = chartConfig.canvasWidth,
        parentContainer = chart.getChildContainer().plotGroup,
        container = dataSet.getContainer('container'),
        trackerContainer = dataSet.getContainer('trackerContainer'),

    // layers = chart.graphics,
    trackerLayer = chart.getChildContainer('trackerGroup'),
        setValue,
        attr,
        toolText,
        xPos,
        yPos,
        radius,
        bulb,
        bulbCheck,
        dataObj = dataStore[0],
        graphic,
        label,
        labelCheck,
        config = dataObj && dataObj.config,
        gaugeOriginX = chartConfig.gaugeoriginx,
        gaugeOriginY = chartConfig.gaugeoriginy,
        gaugeRadius = chartConfig.gaugeradius,
        hasGaugeOriginX = chartConfig.hasgaugeoriginx,
        hasGaugeOriginY = chartConfig.hasgaugeoriginy,
        hasGaugeRadius = chartConfig.hasgaugeradius,
        labelY,
        vAlign,
        animationManager = dataSet.getFromEnv('animationManager'),
        dataLabelContainer = dataSet.getContainer('dataLabelContainer'),
        style = chart.config.dataLabelStyle,
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),

    // isNewElement = false,
    trackerConfig;
    // css = {
    //     fontFamily: style.fontFamily,
    //     fontSize: style.fontSize,
    //     lineHeight: style.lineHeight,
    //     fontWeight: style.fontWeight,
    //     fontStyle: style.fontStyle
    // };

    if (!container) {
      container = dataSet.addContainer('container', createGroup('bulb', parentContainer, dataSet));
    }
    if (!trackerContainer) {
      trackerContainer = dataSet.addContainer('trackerContainer', createGroup('bulb-hot', trackerLayer, dataSet));
    }

    // Creating the datalabel container if not created
    if (!dataLabelContainer) {
      dataLabelContainer = dataSet.addContainer('dataLabelContainer', animationManager.setAnimation({
        el: 'group',
        attr: { name: 'datalabel' },
        dom: 'labelGroup',
        component: dataSet
      }));
    }

    // Append the container to datalabelslayer
    if (dataLabelsLayer) {
      dataLabelsLayer.appendChild(dataLabelContainer);
    }
    trackerConfig = dataObj.trackerConfig = {};
    setValue = config.setValue;
    toolText = config.toolText;
    trackerConfig.eventArgs = {
      value: setValue,
      displayValue: config.displayValue,
      toolText: !toolText ? '' : toolText
    };
    if (!dataObj.graphics) {
      dataObj.graphics = {};
    }
    gaugeOriginX = hasGaugeOriginX !== UNDEF ? gaugeOriginX * conf.scaleFactor : canvasLeft + canvasWidth / 2;
    // (hasGaugeOriginX !== UNDEF) && (gaugeOriginX *= conf.scaleFactor);
    gaugeOriginY = hasGaugeOriginY !== UNDEF ? gaugeOriginY * conf.scaleFactor : canvasTop + canvasHeight / 2;
    // (hasGaugeOriginY !== UNDEF) && (gaugeOriginY *= conf.scaleFactor);
    xPos = gaugeOriginX;
    yPos = gaugeOriginY;
    radius = hasGaugeRadius !== UNDEF ? gaugeRadius * conf.scaleFactor : mathMin(canvasWidth / 2, canvasHeight / 2);
    // (hasGaugeRadius !== UNDEF) && (radius *= conf.scaleFactor);

    attr = {
      cx: xPos,
      cy: yPos,
      r: radius,
      'stroke-linecap': ROUND,
      stroke: (0, _lib.toRaphaelColor)(config.gaugeBorderColor),
      'stroke-width': config.gaugeBorderThickness,
      fill: (0, _lib.toRaphaelColor)(config.fillColor),
      ishot: true
    };
    bulbCheck = dataObj.graphics.element;
    bulb = animationManager.setAnimation({
      el: bulbCheck || 'circle',
      attr: attr,
      container: container,
      component: dataSet,
      animType: animType,
      dom: 'circle'
    });
    if (!bulbCheck) {
      dataObj.graphics.element = bulb;
    }

    trackerConfig.attr = {
      cx: xPos,
      cy: yPos,
      r: radius,
      cursor: config.setLink ? POINTER : _lib.BLANK,
      stroke: TRACKER_FILL,
      'stroke-width': config.plotBorderThickness,
      fill: TRACKER_FILL,
      ishot: true,
      visibility: visibleStr
    };
    /*
             * If the tooltips are not present then they are created over the hot element,
             * else only attributes are set for the existing tooltips.
             */
    // hotElement = dataObj.graphics.hotElement;
    // if (!hotElement) {
    //     hotElement = dataObj.graphics.hotElement = paper.circle(attr, trackerContainer);
    //     isNewElement = true;
    // }
    // else {
    //     hotElement = dataObj.graphics.hotElement.attr(attr);
    // }

    // hotElement
    //     .data(EVENTARGS, eventArgs)
    //     .data(SETROLLOVERATTR, rolloverProperties.hoverAttr)
    //     .data(SETROLLOUTATTR, rolloverProperties.outAttr)
    //     .tooltip(toolText);

    // if (isNewElement) {
    //     hotElement
    //         .click(clickFunc)
    //         .hover(
    //             rolloverResponseSetter(bulb),
    //             rolloutResponseSetter(bulb)
    //         );
    // }

    graphic = dataObj.graphics;
    labelCheck = graphic.label;

    if (!chartConfig.placevaluesinside) {
      labelY = yPos + radius + chartConfig.valuepadding;
      vAlign = POSITION_TOP;
    } else {
      labelY = yPos;
      vAlign = POSITION_MIDDLE;
    }

    if (config.setValue !== BLANKSTRING && conf.showValue) {
      attr = {
        text: config.displayValue,
        'text-anchor': POSITION_MIDDLE,
        x: gaugeOriginX,
        y: labelY,
        // title: (bulbProperties.originalText || BLANK),
        'vertical-align': vAlign,
        fill: style.color,
        direction: config.textDirection,
        'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
      };

      graphic.label && graphic.label.show();
      label = animationManager.setAnimation({
        el: labelCheck || 'text',
        animType: animType,
        attr: attr,
        dom: 'text',
        container: dataLabelContainer,
        component: dataSet
      });
      if (!labelCheck) {
        graphic.label = label;
      }
      // graphic.label
      //   // .css(css)
      //   .tooltip(toolText);
      toolTipController.enableToolTip(graphic.label, toolText);
    }
    dataSet.addJob('trackerDrawID', dataSet.drawTracker.bind(dataSet), _schedular.priorityList.tracker);
  };
  /**
   * Draw tracker of bulb plot
   */


  BulbDataset.prototype.drawTracker = function drawTracker() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        animationManager = dataSet.getFromEnv('animationManager'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        components = dataSet.components,
        dataStore = components.data,
        chartConfig = chart.config,
        showHoverEffect = chartConfig.plothovereffect,
        trackerContainer = dataSet.getContainer('trackerContainer'),
        trackerConfig,
        config,
        dataObj,
        setElement,
        hotElemCreated = false,
        hotElement,
        hotElementCheck,
        attr,

    // Fired when clicked over the hot elements.
    clickFunc = function clickFunc(setDataArr) {
      var ele = this;
      _lib.plotEventHandler.call(ele, chart, setDataArr);
    },

    // Fired on mouse-in over the hot elements.
    rolloverResponseSetter = function rolloverResponseSetter(elem) {
      return function (data) {
        var ele = this,
            elData = ele.getData();
        // Check whether the plot is in dragged state or not if
        // drag then dont fire rolloverevent
        if (elData.showHoverEffect !== 0 && elData.draged !== true) {
          animationManager.setAnimation({
            el: elem,
            attr: ele.getData().setRolloverAttr,
            component: dataSet
          });
          _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
        }
      };
    },


    // Fired on mouse-out over the hot elements.
    rolloutResponseSetter = function rolloutResponseSetter(elem) {
      return function (data) {
        var ele = this,
            elData = ele.getData();
        // Check whether the plot is in draggedstate or not if drag then dont fire rolloutevent
        if (elData.showHoverEffect !== 0 && elData.draged !== true) {
          animationManager.setAnimation({
            el: elem,
            attr: ele.getData().setRolloutAttr,
            component: dataSet
          });
          _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
        }
      };
    };

    // Create tracker elements.
    dataObj = dataStore[0];
    config = dataObj && dataObj.config;
    trackerConfig = dataObj.trackerConfig;
    setElement = dataObj.graphics.element;
    attr = trackerConfig.attr;
    hotElementCheck = dataObj.graphics.hotElement;
    if (attr) {
      /*
       * If the tooltips are not present then they are created over the hot element,
       * else only attributes are set for the existing tooltips.
       */
      hotElement = animationManager.setAnimation({
        el: hotElementCheck || 'circle',
        attr: attr,
        container: trackerContainer,
        component: dataSet
      });

      if (!hotElementCheck) {
        dataObj.graphics.hotElement = hotElement;
        hotElemCreated = true;
      }

      // Hover effects and click function is binded to the hot element if present else the set element.
      (hotElement || setElement).data(EVENTARGS, trackerConfig.eventArgs).data(showHoverEffectStr, showHoverEffect).data(SETROLLOVERATTR, config.rolloverProperties.hoverAttr || {}).data(SETROLLOUTATTR, config.rolloverProperties.outAttr || {});
      toolTipController.enableToolTip(hotElement || setElement, trackerConfig.eventArgs.toolText);

      if (hotElemCreated || config.elemCreated) {
        (hotElement || setElement).click(clickFunc).hover(rolloverResponseSetter(setElement), rolloutResponseSetter(setElement));
      }
    }
  };

  return BulbDataset;
}(_componentInterface2['default']);

exports['default'] = BulbDataset;

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.dataset.bulb': function initialDatasetBulb() {
    return {
      'circle.appearing': function circleAppearing(inputJSON) {
        return [{
          initialAttr: {
            cx: inputJSON.attr.cx,
            cy: inputJSON.attr.cy,
            r: 0
          },
          slot: 'plot'
        }];
      },
      'circle.updating': function circleUpdating(inputJSON) {
        return [{
          initialAttr: {
            cx: inputJSON.attr.cx,
            cy: inputJSON.attr.cy,
            r: inputJSON.attr.r
          },
          slot: 'plot'
        }];
      },
      'labelGroup.appearing': function labelGroupAppearing() {
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'final'
        }];
      },
      '*': null
    };
  }
};

/***/ }),

/***/ 730:
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

var _colorGradient = __webpack_require__(731);

var _colorGradient2 = _interopRequireDefault(_colorGradient);

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _hlineargauge = __webpack_require__(350);

var _hlineargauge2 = _interopRequireDefault(_hlineargauge);

var _angularHlinearCommon = __webpack_require__(351);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var BLANKSTRING = _lib.BLANK;

var Hlineargauge = function (_LinearGauge) {
  _inherits(Hlineargauge, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Hlineargauge.getName = function getName() {
    return 'Hlineargauge';
  };

  function Hlineargauge() {
    _classCallCheck(this, Hlineargauge);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.showRTvalue = false;
    _this.canvasPadding = false;

    _this.isHorizontal = true;
    _this.isAxisOpposite = false;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isAxisReverse = false;
    _this.minorTMNumber = 4;
    _this.isRealTime = true;
    _this.colorRange = true;
    _this.rtParserModify = true;
    _this.registerFactory('dataset', function (parent) {
      var dataObj = parent.getFromEnv('dataSource'),
          pointers = dataObj.pointers;

      (0, _lib.datasetFactory)(parent, _hlineargauge2['default'], 'dataset', 1, [pointers]);
    }, ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Hlineargauge.prototype.getName = function getName() {
    return 'Hlineargauge';
  };

  Hlineargauge.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var iapi = this,
        config = iapi.config;
    if (!config) {
      config = iapi.config = {};
    }
    config.friendlyName = 'Horizontal Linear Gauge';
    config.hasLegend = false;
    config.defaultDatasetType = 'hlineargauge';
    config.skipCanvasDrawing = true;
  };

  Hlineargauge.prototype.configure = function configure(dataObj) {
    _LinearGauge.prototype.configure.call(this, dataObj);
    var iapi = this,
        jsonData = iapi.getFromEnv('dataSource'),
        colorrange = jsonData.colorrange;
    // If color array is present and contains non-zero color elements
    if (colorrange && colorrange.color && colorrange.color.length) {
      (0, _lib.componentFactory)(iapi, _colorGradient2['default'], 'colorRange', 1, [{
        colorRange: colorrange,
        numberFormatter: iapi.getFromEnv('number-formatter')
      }]);
      iapi.addToEnv('colorRange', iapi.getChildren('colorRange')[0]);
    } else {
      iapi.deleteFromEnv('colorRange');
    }
  };

  Hlineargauge.prototype._configueTrendPoints = function _configueTrendPoints() {
    var iapi = this,
        jsonData = iapi.getFromEnv('dataSource'),
        config = iapi.config,
        style = config.style,
        trendArray = jsonData.trendpoints && jsonData.trendpoints.point,
        trendPointObj,
        i,
        scale = iapi.getFromEnv('scale'),
        scaleConfig = scale.config,
        axisRange = scaleConfig.axisRange,
        max = axisRange.max,
        min = axisRange.min,
        scaleFactor = scaleConfig.scaleFactor || 1,
        colorM = iapi.getFromEnv('color-manager'),
        startValue,
        endValue,
        isTrendZone,
        trendPointConfig = config.trendPointConfig = [],
        chartAttrs = jsonData.chart,
        length = trendArray.length;

    style.trendStyle = {
      fontFamily: style.outCanfontFamily,
      color: style.outCancolor,
      fontSize: style.outCanfontSize
    };

    for (i = 0; i < length; i++) {
      trendPointObj = trendArray[i];
      startValue = (0, _lib.pluckNumber)(trendPointObj.startvalue, trendPointObj.value);
      endValue = (0, _lib.pluckNumber)(trendPointObj.endvalue, startValue);
      isTrendZone = startValue !== endValue;

      if (startValue <= max && startValue >= min && endValue <= max && endValue >= min) {
        trendPointConfig.push({
          startValue: startValue,
          endValue: endValue,
          tooltext: (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(trendPointObj.markertooltext)),
          displayValue: (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(trendPointObj.displayvalue), isTrendZone ? BLANKSTRING : iapi.getFromEnv('number-formatter').scale(startValue)),
          showOnTop: (0, _lib.pluckNumber)(trendPointObj.showontop, chartAttrs.ticksbelowgauge, 1),
          color: (0, _lib.pluck)(trendPointObj.color, colorM.getColor('trendLightColor')),
          textColor: trendPointObj.color,
          alpha: (0, _lib.pluckNumber)(trendPointObj.alpha, 99),
          thickness: (0, _lib.pluckNumber)(trendPointObj.thickness, 1),
          dashStyle: Number(trendPointObj.dashed) ? (0, _lib.getDashStyle)(trendPointObj.dashlen || 2, trendPointObj.dashgap || 2) : _lib.BLANK,
          // Marker properties
          useMarker: (0, _lib.pluckNumber)(trendPointObj.usemarker, 0),
          markerColor: (0, _lib.convertColor)((0, _lib.pluck)(trendPointObj.markercolor, trendPointObj.color, colorM.getColor('trendLightColor')), 100),
          markerBorderColor: (0, _lib.convertColor)((0, _lib.pluck)(trendPointObj.markerbordercolor, trendPointObj.bordercolor, colorM.getColor('trendDarkColor')), 100),
          markerRadius: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.markerradius) * scaleFactor, 5),
          markerToolText: (0, _lib.getFirstValue)(trendPointObj.markertooltext),
          trendValueDistance: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.trendvaluedistance) * scaleFactor, axisRange.tickInterval),
          isTrendZone: isTrendZone
        });
      }
    }

    // Sorting the trend point array because the labels have to
    // be space managed in case of hlineargauge.
    _lib.stableSort && (0, _lib.stableSort)(config.trendPointConfig, function (a, b) {
      return a.startValue - b.startValue;
    });
  };

  Hlineargauge.prototype.allocatePosition = function allocatePosition() {
    var iapi = this,
        chartConfig = iapi.config,
        width = chartConfig.canvasWidth,
        height = chartConfig.canvasHeight;

    // Setting macros for annotation
    chartConfig.gaugeStartX = chartConfig.canvasLeft;
    chartConfig.gaugeEndX = chartConfig.canvasLeft + width;
    chartConfig.gaugeStartY = chartConfig.canvasTop;
    chartConfig.gaugeEndY = chartConfig.canvasTop + height;
    chartConfig.gaugeCenterX = chartConfig.canvasLeft + width / 2;
    chartConfig.gaugeCenterY = chartConfig.canvasTop + height / 2;
  };

  Hlineargauge.prototype._getData = function _getData(index, callback) {
    return _angularHlinearCommon._getData.call(this, index, callback);
  };

  Hlineargauge.prototype._setData = function _setData(dialIndex, value) {
    _angularHlinearCommon._setData.call(this, dialIndex, value);
  };

  Hlineargauge.prototype._getDataForId = function _getDataForId(id, callback) {
    return _angularHlinearCommon._getDataForId.call(this, id, callback);
  };

  Hlineargauge.prototype._setDataForId = function _setDataForId(id, value) {
    _angularHlinearCommon._setDataForId.call(this, id, value);
  };

  return Hlineargauge;
}(_fusioncharts2['default']);

exports['default'] = Hlineargauge;

/***/ }),

/***/ 731:
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

var _stringsLib = __webpack_require__(341);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var sortColorFN = (0, _lib.getComparatorFN)(true, 'minvalue'),
    UNDEF = void 0;

// Class for managing gradient color range

var ColorGradient = function (_ComponentInterface) {
  _inherits(ColorGradient, _ComponentInterface);

  function ColorGradient() {
    _classCallCheck(this, ColorGradient);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  ColorGradient.prototype.getType = function getType() {
    return 'colorComponent';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ColorGradient.prototype.getName = function getName() {
    return 'colorGradient';
  };

  ColorGradient.prototype.configure = function configure(options) {
    var cm = this,
        oldColorArr = cm.colorArr,
        colorManager = cm.getFromEnv('color-manager'),
        numberFormatter = cm.getFromEnv('number-formatter'),
        colorArr = options.colorRange && (0, _lib.extend2)({}, options.colorRange).color,
        defuPaletteOptions = colorManager.getColor('paletteColors'),
        defaultObj,
        colorObj,
        colorObjNext,
        i,
        l,
        temp,
        newColorRange,
        j,
        newMin,
        nextIndex;

    // removing due to defaultAsigned retaining false after update
    delete cm.defaultAsigned;

    if (!(defuPaletteOptions instanceof Array)) {
      defuPaletteOptions = colorManager.getPlotColor(0);
    }
    if (colorArr && colorArr.length > 0) {
      l = colorArr.length - 1;
      // validate all color object
      // remove invalid obj
      for (i = l; i >= 0; i -= 1) {
        colorObj = colorArr[i];
        if (colorObj) {
          colorObj.minvalue = numberFormatter.getCleanValue(colorObj.minvalue);
          colorObj.maxvalue = numberFormatter.getCleanValue(colorObj.maxvalue);

          // for not specified min/max value
          if (colorObj.minvalue === null) {
            if (colorObj.maxvalue !== null) {
              colorObj.minvalue = colorObj.maxvalue;
            } else if (i !== l) {
              // remove invalid color range
              colorArr.splice(i, 1);
            }
          }

          if (colorObj.label !== UNDEF) {
            colorObj.label = (0, _lib.parseUnsafeString)(colorObj.label);
          }

          if (colorObj.name !== UNDEF) {
            colorObj.name = (0, _lib.parseUnsafeString)(colorObj.name);
          }

          if (colorObj.maxvalue !== null) {
            if (colorObj.minvalue > colorObj.maxvalue) {
              // alter the value
              temp = colorObj.minvalue;
              colorObj.minvalue = colorObj.maxvalue;
              colorObj.maxvalue = temp;
            }
          }
        }
      }
      // now sort colors
      colorArr.sort(sortColorFN);

      // Put the default Color if color not given in color Obj
      if (!colorArr[0].code) {
        colorArr[0].code = defuPaletteOptions[0];
      }
      // Put the default Alpha if Alpha not given in color Obj
      if ((0, _lib.getValidValue)(colorArr[0].alpha) === UNDEF) {
        colorArr[0].alpha = _stringsLib.HUNDREDSTRING;
      }
      // now devide overlaping color ranges
      for (i = 0, l = colorArr.length - 1; i < l; i += 1) {
        nextIndex = i + 1;
        colorObj = colorArr[i];
        colorObjNext = colorArr[nextIndex];
        // Put the default Color if color not given in color Obj
        if (!colorObjNext.code) {
          colorObjNext.code = defuPaletteOptions[nextIndex];
        }
        // Put the default Alpha if Alpha not given in color Obj
        if ((0, _lib.getValidValue)(colorObjNext.alpha) === UNDEF) {
          colorObjNext.alpha = _stringsLib.HUNDREDSTRING;
        }
        // if maxColor is null
        if (colorObj.maxvalue === null) {
          colorObj.maxvalue = colorObjNext.minvalue;
        }

        if (colorObj.maxvalue > colorObjNext.minvalue) {
          if (colorObj.maxvalue > colorObjNext.maxvalue) {
            newColorRange = (0, _lib.extend2)(colorObj);
            newColorRange.maxvalue = colorObj.maxvalue;
            newMin = newColorRange.minvalue = colorObjNext.maxvalue;
            // insert newColorRange into proper position
            j = i + 2;
            while (j < l && colorArr[j].minvalue < newMin) {
              j += 1;
            }
            colorArr.splice(j, 0, newColorRange);
            l += 1; // legth increased
          }
          colorObj.maxvalue = colorObjNext.minvalue;
        }
      }
      // if last color has null maxvalue
      colorObj = colorArr[i];
      // if maxColor is null
      if (colorObj.maxvalue === null) {
        colorObj.maxvalue = colorObj.minvalue;
      }
    }

    // If no color array is present, use default color array
    if (!(colorArr && colorArr.length)) {
      if (!defaultObj) {
        defaultObj = {
          code: 'CCCCCC',
          alpha: '100',
          bordercolor: '000000',
          borderalpha: '100'
        };
      }
      colorArr = [defaultObj];
      cm.defaultAsigned = true;
    }

    cm.colorArr = colorArr || oldColorArr;
  };

  ColorGradient.prototype.getColorObj = function getColorObj(value) {
    var colorArr = this.colorArr,
        i = 0,
        l = colorArr.length,
        colorObj,
        nextColorObj,
        returnedObj = {};
    for (; i < l; i += 1) {
      returnedObj.index = i;
      colorObj = colorArr[i];
      nextColorObj = colorArr[i + 1];
      if (value < colorObj.minvalue) {
        returnedObj.nextObj = colorObj;
        return returnedObj;
      }
      if (value >= colorObj.minvalue && value <= colorObj.maxvalue) {
        returnedObj.colorObj = colorObj;
        if (nextColorObj && value == nextColorObj.minvalue) {
          // at the border of two color point
          returnedObj.nextObj = nextColorObj;
          returnedObj.isOnMeetPoint = true;
        }
        return returnedObj;
      }
      returnedObj.prevObj = colorObj;
    }
    returnedObj.index = i - 1;
    return returnedObj;
  };

  ColorGradient.prototype.getColorRangeArr = function getColorRangeArr(minValue, maxValue) {
    var temp,
        colorArr = this.colorArr,
        i,
        l,
        minColorObj,
        lastMaxValue,
        maxColorObj,
        returnArr = [],
        colorObj,
        lastColorObj;
    if (!this.defaultAsigned) {
      if (minValue > maxValue) {
        // Swap
        temp = minValue;
        minValue = maxValue;
        maxValue = temp;
      }
      if (minValue < maxValue) {
        minColorObj = this.getColorObj(minValue);
        maxColorObj = this.getColorObj(maxValue);
        if (minColorObj && maxColorObj) {
          lastMaxValue = minValue;
          i = minColorObj.index;
          l = maxColorObj.index;
          for (; i <= l; i += 1) {
            colorObj = (0, _lib.extend2)({}, colorArr[i]);
            if (colorObj.minvalue !== lastMaxValue) {
              colorObj.minvalue = lastMaxValue;
            }
            returnArr.push(colorObj);
            lastColorObj = colorObj;
            lastMaxValue = colorObj.maxvalue;
          }
          lastColorObj.maxvalue = maxValue;
        }
      }
    }
    return returnArr;
  };

  return ColorGradient;
}(_componentInterface2['default']);

exports['default'] = ColorGradient;

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var canvas = chart.getChildren('canvas')[0];
  (0, _lib.componentFactory)(chart, _gauge2['default'], 'scale', 1, chart._feedAxesRawData());
  chart.getChildren('scale')[0].setLinkedItem('canvas', canvas);
  chart.addToEnv('scale', chart.getChildren('scale')[0]);
};

var _gauge = __webpack_require__(733);

var _gauge2 = _interopRequireDefault(_gauge);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 733:
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

var _gaugePolarNumeric = __webpack_require__(349);

var _gaugePolarNumeric2 = _interopRequireDefault(_gaugePolarNumeric);

var _lib = __webpack_require__(5);

var _diff = __webpack_require__(87);

var _diff2 = _interopRequireDefault(_diff);

var _dependencyManager = __webpack_require__(6);

var _gaugeAnimation = __webpack_require__(734);

var _gaugeAnimation2 = _interopRequireDefault(_gaugeAnimation);

var _linear = __webpack_require__(208);

var _linear2 = _interopRequireDefault(_linear);

var _commonApi = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

(0, _dependencyManager.addDep)({
  name: 'gaugeAnimation',
  type: 'animationRule',
  extension: _gaugeAnimation2['default']
});

var GaugeAxis = function (_GaugePolarNumeric) {
  _inherits(GaugeAxis, _GaugePolarNumeric);

  function GaugeAxis() {
    _classCallCheck(this, GaugeAxis);

    var _this = _possibleConstructorReturn(this, _GaugePolarNumeric.call(this));

    _this.config.scale = new _linear2['default']();
    _this.config.labelMap = [];
    _this.config.prevIntervalArr = [];
    _this.config.prevTicksMap = [];
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  GaugeAxis.prototype.getName = function getName() {
    return 'gaugeAxis';
  };

  GaugeAxis.prototype.getLabelPos = function getLabelPos(value, opt) {
    var axis = this,
        axisConfig = axis.config,
        canvas = axisConfig.canvas,
        chart = axis.getFromEnv('chart'),
        chartConfig = chart.config,
        canvasTop = canvas.canvasTop || chartConfig.canvasTop,
        canvasBottom = canvas.canvasBottom || chartConfig.canvasBottom,
        canvasLeft = canvas.canvasLeft || chartConfig.canvasLeft,
        isVertical = axisConfig.isVertical,
        isOpposit = (0, _lib.pluckNumber)(axisConfig.isOpposit),

    // axisDimention = axisConfig.axisDimention || {},
    canvasRight = canvas.canvasRight || chartConfig.canvasRight,
        axisPadding = axisConfig.labelPadding,

    // axisStartPosition = isVertical ? axisDimention.x : axisDimention.y,
    posObj = {
      x: 0,
      y: 0
    },
        addCategoryPadding;

    if (isVertical) {
      posObj.x = isOpposit ? canvasRight + axisPadding : canvasLeft - axisPadding;
      posObj.y = addCategoryPadding ? axis.getPixel(value, opt) + addCategoryPadding : axis.getPixel(value, opt);
    } else {
      posObj.x = axis.getPixel(value, opt);
      posObj.y = isOpposit ? canvasTop - axisPadding : canvasBottom + axisPadding;

      if (addCategoryPadding) {
        posObj.y += addCategoryPadding;
      }
    }

    return posObj;
  };

  GaugeAxis.prototype._drawComponents = function _drawComponents() {
    var axis = this,
        axisConfig = axis.config;

    axisConfig.drawTick && axis._drawTick();
    axisConfig.drawLabels && axis._drawLabel();
    // axisConfig.drawTrendLines && axis._drawTrendLine();
  };

  GaugeAxis.prototype._drawTick = function _drawTick() {
    var axis = this,
        axisConfig = axis.config,
        axisRange = axisConfig.axisRange,
        increment = axisRange.tickInterval,
        isVertical = axisConfig.isVertical,
        isOpposit = (0, _lib.pluckNumber)(axisConfig.isOpposit),
        drawTick = axisConfig.drawTick,
        drawTickMinor = axisConfig.drawTickMinor,
        placeTicksInside = (0, _lib.pluckNumber)(axisConfig.placeTicksInside),
        canvasDim = axis.getLinkedItem('canvas').getEffectiveDimensions(),
        canvasTop = canvasDim.top,
        canvasBottom = canvasTop + canvasDim.height,
        canvasLeft = canvasDim.left,
        canvasRight = canvasLeft + canvasDim.width,
        max = axisRange.max,
        min = axisRange.min,
        animationManager = axis.getFromEnv('animationManager'),
        numMinorTM = axisConfig.minorTMNumber,
        ticks = axisConfig.ticks,
        ticksLen = ticks.length,
        axisAxisLineContainer = axisConfig.axisAxisLineContainer,
        map = [],
        present,
        path,
        minorTickValues = [],
        lineElement,
        tickElement,
        minorTickObj,
        majorTickObj,
        connectorObj,
        statPix,
        endPixMajor,
        endPixMinor,
        minorTickInterval,
        tickMarkConnecterPath,
        i,
        j,
        tickValue,
        minorTickValue,
        diff,
        removingElement,
        ln,
        getPath = function getPath(value, startPix, endPix) {
      var pxVal = axis.getPixel(value, { wrtVisible: true });

      return isVertical ? ['M', startPix, pxVal, 'L', endPix, pxVal] : ['M', pxVal, startPix, 'L', pxVal, endPix];
    };

    majorTickObj = {
      stroke: axisConfig.majorTMColor,
      'stroke-width': axisConfig.majorTMThickness,
      'stroke-linecap': 'round',
      opacity: 1
    };
    connectorObj = {
      stroke: axisConfig.majorTMColor,
      'stroke-width': axisConfig.majorTMThickness,
      'stroke-linecap': 'round'
    };
    minorTickObj = {
      stroke: axisConfig.minorTMColor,
      'stroke-width': axisConfig.minorTMThickness,
      'stroke-linecap': 'round',
      opacity: 1
    };

    // checking if lines are to be drawn user can decide
    if (axisConfig.lines.isDraw && drawTick) {
      if (isVertical) {
        if (isOpposit) {
          if (!placeTicksInside) {
            statPix = canvasRight + axisConfig.tickMarkDistance;
            endPixMajor = statPix + axisConfig.majorTMHeight;
            endPixMinor = statPix + axisConfig.minorTMHeight;
          } else {
            statPix = canvasRight - axisConfig.tickMarkDistance;
            endPixMajor = statPix - axisConfig.majorTMHeight;
            endPixMinor = statPix - axisConfig.minorTMHeight;
          }
        } else {
          if (!placeTicksInside) {
            statPix = canvasLeft - axisConfig.tickMarkDistance;
            endPixMajor = statPix - axisConfig.majorTMHeight;
            endPixMinor = statPix - axisConfig.minorTMHeight;
          } else {
            statPix = canvasLeft + axisConfig.tickMarkDistance;
            endPixMajor = statPix + axisConfig.majorTMHeight;
            endPixMinor = statPix + axisConfig.minorTMHeight;
          }
        }
      } else {
        if (!isOpposit) {
          if (!placeTicksInside) {
            statPix = canvasBottom + axisConfig.tickMarkDistance;
            endPixMajor = statPix + axisConfig.majorTMHeight;
            endPixMinor = statPix + axisConfig.minorTMHeight;
          } else {
            statPix = canvasBottom - axisConfig.tickMarkDistance;
            endPixMajor = statPix - axisConfig.majorTMHeight;
            endPixMinor = statPix - axisConfig.minorTMHeight;
          }
        } else {
          if (!placeTicksInside) {
            statPix = canvasTop - axisConfig.tickMarkDistance;
            endPixMajor = statPix - axisConfig.majorTMHeight;
            endPixMinor = statPix - axisConfig.minorTMHeight;
          } else {
            statPix = canvasTop + axisConfig.tickMarkDistance;
            endPixMajor = statPix + axisConfig.majorTMHeight;
            endPixMinor = statPix + axisConfig.minorTMHeight;
          }
        }
      }

      if (axisConfig.drawTickMarkConnector) {
        if (isVertical) {
          tickMarkConnecterPath = ['M', statPix, axis.getPixel(min), 'L', statPix, axis.getPixel(max)];
        } else {
          tickMarkConnecterPath = ['M', axis.getPixel(min), statPix, 'L', axis.getPixel(max), statPix];
        }
      } else {
        tickMarkConnecterPath = [];
      }
      connectorObj.path = tickMarkConnecterPath;
      // Drawing of the tick-mark connector
      // reuse the elements if there
      lineElement = axis.getGraphicalElement('axisLinePath');

      present = !!lineElement;

      lineElement = animationManager.setAnimation({
        el: lineElement || 'path',
        attr: connectorObj,
        container: axisAxisLineContainer,
        component: axis,
        label: 'path'
      });

      if (!present) {
        axis.addGraphicalElement('axisLinePath', lineElement);
      }

      for (i = 0; i < ticksLen; i += 1) {
        tickValue = ticks[i];

        path = getPath(tickValue, statPix, endPixMajor);
        majorTickObj.path = path.toString();

        map.push(tickValue);
        tickElement = axis.getGraphicalElement(tickValue);
        present = !!tickElement;
        // reuse the elements if there
        tickElement = animationManager.setAnimation({
          el: tickElement || 'path',
          data: {
            path: path.slice(),
            value: tickValue
          },
          attr: majorTickObj,
          container: axisAxisLineContainer,
          component: axis,
          label: 'path'
        });

        if (!present) {
          axis.addGraphicalElement(tickValue, tickElement);
        }

        if (tickValue !== max && drawTickMinor && i !== ticksLen - 1) {
          minorTickInterval = increment / (numMinorTM + 1);
          for (j = 1; j <= numMinorTM; j++) {
            minorTickValue = tickValue + minorTickInterval * j;
            // condition to check whether extra minor ticks are not drawn
            // in case of disproportionate tick length at the last tick
            if (minorTickValue >= max) {
              break;
            }

            minorTickValues.push(minorTickValue);
          }

          for (j = 0; j < minorTickValues.length; j += 1) {
            minorTickValue = minorTickValues[j];

            path = getPath(minorTickValue, statPix, endPixMinor);
            minorTickObj.path = path.toString();
            map.push(minorTickValue);
            tickElement = axis.getGraphicalElement(minorTickValue);

            present = !!tickElement;

            tickElement = animationManager.setAnimation({
              el: tickElement || 'path',
              data: {
                path: path.slice(),
                value: minorTickValue
              },
              attr: minorTickObj,
              component: axis,
              container: axisAxisLineContainer,
              label: 'path'
            });

            if (!present) {
              axis.addGraphicalElement(minorTickValue, tickElement);
            }
          }
          minorTickValues = [];
        }
      }
      // hiding the extra elements for later use
      diff = (0, _diff2['default'])(axisConfig.prevTicksMap, map);
      for (i = 0, ln = diff.length; i < ln; i++) {
        removingElement = axis.getGraphicalElement(diff[i]);
        if (removingElement) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElement,
            container: axisAxisLineContainer,
            data: {
              value: diff[i],
              path: removingElement.attr('path')
            },
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: 'path'
          }));
        }
      }
      axisConfig.prevTicksMap = map.slice();
    }
  };

  GaugeAxis.prototype.placeAxis = function placeAxis(maxLimit) {
    var axis = this,
        chart = axis.getFromEnv('chart'),
        smartLabel = chart.getFromEnv('smartLabel'),
        axisConfig = axis.config,
        axisRange = axisConfig.axisRange,
        isVertical = axisConfig.isVertical,
        isOpposit = (0, _lib.pluckNumber)(axisConfig.isOpposit),
        labelStyle = axisConfig.labels.style,
        increment = axisRange.tickInterval,
        placeTicksInside = (0, _lib.pluckNumber)(axisConfig.placeTicksInside),
        placeValuesInside = (0, _lib.pluckNumber)(axisConfig.placeValuesInside),
        max = axisRange.max,
        min = axisRange.min,
        upperLimitDisplay,
        lowerLimitDisplay,
        maxTextSize = 0,
        maxTickLength = 0,
        maxText = '',
        ret,
        text,
        i,
        counter,
        leftLimit,
        avalW,
        avalH,
        numDimention,
        dimention,
        intervalWidth,
        tempText,
        maxNumericVal,
        minNumericVal,
        labelLineHeight = axisConfig.labels.style.lineHeight,
        labelObj,
        numberFormatterFn,
        numberFormatter = axis.getFromEnv('number-formatter'),
        upperLimitDisplayDimention,
        lowerLimitDisplayDimention;

    ret = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    if (maxLimit <= 0) {
      return ret;
    }
    axisConfig.labels.isDraw = true;
    axisConfig.labels.drawNumericVal = true;
    axisConfig.labels.drawNormalVal = axisConfig.showTickValues;
    axisConfig.labels.drawLimitVal = axisConfig.showLimits;
    axisConfig.lines.isDraw = true;
    axisConfig.labels.step = axisConfig.tickValueStep;
    axisConfig.labelPadding = 0;

    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabel.setStyle({
      fontSize: labelStyle.fontSize,
      fontFamily: labelStyle.fontFamily,
      lineHeight: labelStyle.lineHeight,
      fontWeight: labelStyle.fontWeight
    });
    if (!axis.components) {
      axis.components = {};
      axis.components.labels = [];
    }
    // measuring the tick length
    if (axisConfig.drawTick && axisConfig.showTickMarks && axisConfig.lines.isDraw) {
      maxLimit -= axisConfig.tickMarkDistance;
      maxTickLength = Math.max(axisConfig.minorTMHeight, axisConfig.majorTMHeight);
      if (!placeTicksInside) {
        if (maxTickLength > maxLimit) {
          axisConfig.lines.isDraw = false;
          leftLimit = maxLimit + axisConfig.tickMarkDistance;
          leftLimit = maxLimit;
        } else {
          if (isVertical) {
            if (isOpposit) {
              ret.right += maxTickLength + axisConfig.tickMarkDistance;
            } else {
              ret.left += maxTickLength + axisConfig.tickMarkDistance;
            }
          } else {
            if (isOpposit) {
              ret.top += maxTickLength + axisConfig.tickMarkDistance;
            } else {
              ret.bottom += maxTickLength + axisConfig.tickMarkDistance;
            }
          }
          leftLimit = maxLimit - maxTickLength;
          if (!placeValuesInside) {
            axisConfig.labelPadding = axisConfig.tickMarkDistance + maxTickLength;
          }
        }
      } else {
        leftLimit = maxLimit + axisConfig.tickMarkDistance;
        if (placeValuesInside) {
          axisConfig.labelPadding = axisConfig.tickMarkDistance + maxTickLength;
        }
      }
    } else {
      axisConfig.lines.isDraw = false;
      leftLimit = maxLimit;
    }

    leftLimit -= axisConfig.tickValueDistance;
    if (axisConfig.drawLabels && (axisConfig.showTickValues || axisConfig.showLimits)) {
      intervalWidth = Math.abs(axis.getPixel(min) - axis.getPixel(min + increment)) / 2;
      axisConfig.labelPadding += axisConfig.tickValueDistance;
      leftLimit -= axisConfig.tickValueDistance;
      // measuring the label dimention
      numberFormatterFn = numberFormatter.scale;
      // calculating the label max width and height
      // TODO : smartly calculate the max width height
      for (i = min + increment, counter = 0; i < max; i += increment) {
        text = '' + numberFormatterFn.call(numberFormatter, (0, _lib.toPrecision)(i, 10));
        numDimention = smartLabel.getOriSize(text);

        axis.components.labels[counter] = {
          config: {
            props: {
              label: {
                attr: {
                  width: numDimention.width,
                  height: numDimention.height,
                  text: text
                }
              }
            }
          }
        };
        counter++;
        if (text.length > maxTextSize) {
          maxText = text;
          maxTextSize = text.length;
        }
      }
      numDimention = smartLabel.getOriSize(maxText);

      if (isVertical) {
        if (numDimention.width > leftLimit) {
          axisConfig.labels.drawNumericVal = false;
          !axisConfig.upperLimitDisplay && !axisConfig.lowerLimitDisplay && (axisConfig.labels.isDraw = false);
          maxText = '';
          numDimention = smartLabel.getOriSize(maxText);
        }
      } else {
        if (numDimention.height > leftLimit) {
          axisConfig.labels.drawNumericVal = false;
          !axisConfig.upperLimitDisplay && !axisConfig.lowerLimitDisplay && (axisConfig.labels.isDraw = false);
          maxText = '';
          numDimention = smartLabel.getOriSize(maxText);
        }
      }

      avalW = isVertical ? leftLimit : intervalWidth;
      avalH = isVertical ? intervalWidth : leftLimit;

      if (axisConfig.showLimits) {
        maxNumericVal = numberFormatterFn.call(numberFormatter, max);
        minNumericVal = numberFormatterFn.call(numberFormatter, min);

        upperLimitDisplay = axisConfig.upperLimitDisplay || '' + maxNumericVal;
        lowerLimitDisplay = axisConfig.lowerLimitDisplay || '' + minNumericVal;
        upperLimitDisplayDimention = smartLabel.getOriSize(upperLimitDisplay);

        if (upperLimitDisplayDimention.width > numDimention.width) {
          tempText = smartLabel.getSmartText(upperLimitDisplay, avalW, avalH);
          if (upperLimitDisplay === maxNumericVal && tempText.text === tempText.oriText || axisConfig.labels.drawNumericVal) {
            maxText = upperLimitDisplay;
            numDimention = upperLimitDisplayDimention;
          }
        }
        lowerLimitDisplayDimention = smartLabel.getOriSize(lowerLimitDisplay);
        if (lowerLimitDisplayDimention.width > numDimention.width) {
          tempText = smartLabel.getSmartText(lowerLimitDisplay, avalW, avalH);
          if (lowerLimitDisplay === minNumericVal && tempText.text === tempText.oriText || axisConfig.labels.drawNumericVal) {
            maxText = lowerLimitDisplay;
          }
        }
        if (maxText === '') {
          if (smartLabel.getOriSize(axisConfig.upperLimitDisplay).width > smartLabel.getOriSize(axisConfig.lowerLimitDisplay).width) {
            maxText = upperLimitDisplay;
          } else {
            maxText = lowerLimitDisplay;
          }
          numDimention = smartLabel.getOriSize(maxText);
        }
      } else {
        axisConfig.labels.drawLimitVal = false;
      }

      if (!isVertical) {
        for (i = min; i <= max; i += increment) {
          dimention = smartLabel.getSmartText(maxText, avalW, avalH);
          if (dimention.text === '') {
            avalW += intervalWidth;
          } else {
            break;
          }
        }
      } else {
        dimention = smartLabel.getSmartText(maxText, avalW, avalH);
      }
      dimention = smartLabel.getSmartText(maxText, avalW, avalH);
      axisConfig.labelMaxW = Math.max(dimention.width, numDimention.width);
      axisConfig.labelMaxH = Math.max(dimention.height, numDimention.height);
      if (!placeValuesInside && axisConfig.labels.isDraw) {
        if (isVertical) {
          axisConfig.labelMaxW = Math.min(axisConfig.labelMaxW, leftLimit);
          if (isOpposit) {
            ret.right += axisConfig.labelMaxW + axisConfig.tickValueDistance;
          } else {
            ret.left += axisConfig.labelMaxW + axisConfig.tickValueDistance;
          }
        } else {
          axisConfig.labelMaxH = Math.min(axisConfig.labelMaxH, leftLimit);
          if (isOpposit) {
            ret.top += axisConfig.labelMaxH + axisConfig.tickValueDistance;
          } else {
            ret.bottom += axisConfig.labelMaxH + axisConfig.tickValueDistance;
          }
        }
      } else {
        axisConfig.labelPadding = -axisConfig.labelPadding;
      }

      if (axisConfig.labels.drawLimitVal) {
        if (labelLineHeight) {
          if (labelLineHeight.indexOf('px') !== -1) {
            labelLineHeight = parseFloat(labelLineHeight.replace('px', ''));
          }
        }

        if (axisConfig.upperLimitDisplay) {
          numDimention = smartLabel.getSmartText(axisConfig.upperLimitDisplay, axisConfig.labelMaxW, axisConfig.labelMaxH + labelLineHeight / 2);
          delete axisConfig.upperLimitDisplay;
        } else {
          text = '' + numberFormatterFn.call(numberFormatter, (0, _lib.toPrecision)(max, 10));
          numDimention = smartLabel.getOriSize(text);
        }
        axis.components.labels[counter] = {
          config: {
            props: {
              label: {
                attr: {
                  width: numDimention.width,
                  height: numDimention.height,
                  text: numDimention.text
                }
              }
            }
          }
        };

        if (axisConfig.lowerLimitDisplay) {
          numDimention = smartLabel.getSmartText(axisConfig.lowerLimitDisplay, axisConfig.labelMaxW, axisConfig.labelMaxH + labelLineHeight / 2);
          delete axisConfig.lowerLimitDisplay;
        } else {
          text = '' + numberFormatterFn.call(numberFormatter, (0, _lib.toPrecision)(min, 10));
          numDimention = smartLabel.getOriSize(text);
        }
        labelObj = {
          config: {
            props: {
              label: {
                attr: {
                  width: numDimention.width,
                  height: numDimention.height,
                  text: numDimention.text
                }
              }
            }
          }
        };
        axis.components.labels.unshift(labelObj);
      }
    } else {
      axisConfig.labels.isDraw = false;
    }
    axisConfig.spaceTaken = ret;
    return ret;
  };

  /**
   * Hides the axis components
   */


  GaugeAxis.prototype.hide = function hide() {
    var axis = this,
        axisConfig = axis.config;

    if (!axisConfig.axisContainer) {
      return;
    }
    axisConfig.axisLabelContainerTop.hide();
    axisConfig.axisContainer.hide();
    axisConfig.axisTrendLabelContainer.hide();
    axisConfig.axisAxisLineContainer.hide();
  };

  /**
   * Hides the axis components
   */


  GaugeAxis.prototype.show = function show() {
    var axis = this,
        axisConfig = axis.config;

    if (!axisConfig.axisContainer) {
      return;
    }
    axisConfig.axisLabelContainerTop.show();
    axisConfig.axisContainer.show();
    axisConfig.axisTrendLabelContainer.show();
    axisConfig.axisAxisLineContainer.show();
  };

  GaugeAxis.prototype._computeTranslation = function _computeTranslation() {
    if (this) return 0;
  };

  return GaugeAxis;
}(_gaugePolarNumeric2['default']);

GaugeAxis.prototype.setAxisDimention = _commonApi.setAxisDimention;
GaugeAxis.prototype.getPixel = _commonApi.getPixel;
GaugeAxis.prototype._parseLabel = _commonApi._parseLabel;
GaugeAxis.prototype._drawLabel = _commonApi._drawLabel;

exports['default'] = GaugeAxis;

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _cartesianAxisAnimation = __webpack_require__(202);

var axisAnimation = function axisAnimation() {
  return {
    'text.appearing': _cartesianAxisAnimation.appearingText,
    'text.updating': _cartesianAxisAnimation.updating,
    'text.disappearing': _cartesianAxisAnimation.disappearingText,
    'path.appearing': _cartesianAxisAnimation.appearingPath,
    'path.updating': _cartesianAxisAnimation.updating,
    'path.disappearing': _cartesianAxisAnimation.disappearingPath
  };
};
exports['default'] = {
  'initial.axis.gaugeAxis': axisAnimation
};

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];
exports['default'] = {
  'initial.dataset.hlineargauge': function initialDatasetHlineargauge() {
    return {
      'parentgroup.initial': function parentgroupInitial(input) {
        return [{
          initialAttr: {
            transform: input.attr.transform
          },
          finalAttr: {
            transform: input.attr.transform
          },
          slot: 'initial'
        }];
      },
      'datalabel.initial': function datalabelInitial(input) {
        return [{
          initialAttr: {
            transform: input.attr.transform
          },
          finalAttr: {
            transform: input.attr.transform
          }
        }];
      },
      'background.appearing': function backgroundAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'background.updating': null,
      'final.appearing': function finalAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'final.updating': null,
      'pointers.appearing': function pointersAppearing(input) {
        var polypathArr = input.attr.polypath.slice(0);
        polypathArr[1] = 0;

        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: {
            polypath: polypathArr
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'pointers.updating': null,
      'pointerValues.appearing': function pointerValuesAppearing() {
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: {
            x: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'pointerValues.updating': null,
      '*': null
    };
  }
};

/***/ }),

/***/ 736:
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

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bulletLedCommon = __webpack_require__(227);

var _bullet = __webpack_require__(228);

var _bullet2 = _interopRequireDefault(_bullet);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    zeroCommaHundredStr = '0,100';

var Vbullet = function (_LinearGauge) {
  _inherits(Vbullet, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Vbullet.getName = function getName() {
    return 'Vbullet';
  };

  function Vbullet() {
    _classCallCheck(this, Vbullet);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.defaultSeriesType = 'bullet';
    _this.gaugeType = 4;
    _this.ticksOnRight = 0;

    _this.hasCanvas = true;
    _this.isHorizontal = false;
    _this.isAxisOpposite = false;
    _this.isAxisReverse = false;
    _this.defaultPaletteOptions = {
      // Store colors now
      paletteColors: [['A6A6A6', 'CCCCCC', 'E1E1E1', 'F0F0F0'], ['A7AA95', 'C4C6B7', 'DEDFD7', 'F2F2EE'], ['04C2E3', '66E7FD', '9CEFFE', 'CEF8FF'], ['FA9101', 'FEB654', 'FED7A0', 'FFEDD5'], ['FF2B60', 'FF6C92', 'FFB9CB', 'FFE8EE']],
      // Store other colors
      // ------------- For 2D Chart ---------------//
      // We're storing 5 combinations, as we've 5 defined palettes.
      bgColor: ['FFFFFF', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'],
      bgAngle: [270, 270, 270, 270, 270],
      bgRatio: [zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr],
      bgAlpha: ['100', '60,50', '40,20', '20,10', '30,30'],

      toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
      toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'],

      baseFontColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      trendColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      plotFillColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      borderColor: ['767575', '545454', '415D6F', '845001', '68001B'],
      borderAlpha: [50, 50, 50, 50, 50]
    };
    _this.showRTvalue = false;
    _this.canvasPadding = false;
    _this.defaultPlotShadow = 1;

    _this.realtimeEnabled = true;
    _this.chartleftmargin = 15;
    _this.chartrightmargin = 15;
    _this.charttopmargin = 10;
    _this.chartbottommargin = 10;
    _this.showTooltip = 0;
    _this.connectTickMarks = 0;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isRealTime = true;
    _this.colorRange = true;
    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Vbullet.prototype.getName = function getName() {
    return 'Vbullet';
  };

  /**
   * function to create component and configure and also configure the chart
   * It creates components which are depend on data and configure them and also configure chart
   * It calls helper function namely, configure
   * @param  {Object} dataObj contains json data of the chart
   */


  Vbullet.prototype.configureAttributes = function configureAttributes(dataObj) {
    _LinearGauge.prototype.configureAttributes.call(this, dataObj);
    _bulletLedCommon.configureAttributes.call(this);
  };
  /**
   * Method to fetch data
   */


  Vbullet.prototype._getData = function _getData() {
    _bulletLedCommon._getData.call(this);
  };

  Vbullet.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Vertical Bullet Gauge';
    config.defaultDatasetType = 'bullet';
    config.singleseries = true;
    config.skipCanvasDrawing = true;
  };

  Vbullet.prototype.getDSdef = function getDSdef() {
    return _bullet2['default'];
  };

  Vbullet.prototype._feedAxesRawData = function _feedAxesRawData() {
    var iapi = this,
        colorM = iapi.getFromEnv('color-manager'),
        dataObj = iapi.getFromEnv('dataSource'),
        chartAttrs = dataObj.chart,
        numberFormatter = iapi.getFromEnv('number-formatter'),
        scaleConf,
        palleteString = _lib.chartPaletteStr.chart2D,
        ticksBelowGraph = (0, _lib.pluckNumber)(chartAttrs.ticksbelowgraph, 1),
        isAxisOpposite = (0, _lib.pluckNumber)(chartAttrs.ticksonright, chartAttrs.axisontop, chartAttrs.axisonleft !== UNDEF ? !(0, _lib.pluckNumber)(chartAttrs.axisonleft) : UNDEF, !ticksBelowGraph, iapi.isAxisOpposite);

    scaleConf = {
      isVertical: !iapi.isHorizontal,
      isReverse: true,
      isOpposit: isAxisOpposite,
      outCanfontFamily: (0, _lib.pluck)(chartAttrs.outcnvbasefont, chartAttrs.basefont, 'Verdana,sans'),
      outCanfontSize: (0, _lib.pluckFontSize)(chartAttrs.outcnvbasefontsize, chartAttrs.basefontsize, 10),
      outCancolor: (0, _lib.pluck)(chartAttrs.outcnvbasefontcolor, chartAttrs.basefontcolor, colorM.getColor(palleteString.baseFontColor)).replace(/^#?([a-f0-9]+)/ig, '#$1'),
      // axisNamePadding: chartAttrs.xaxisnamepadding,
      // axisValuePadding: chartAttrs.labelpadding,
      // axisNameFont: chartAttrs.xaxisnamefont,
      // axisNameFontSize: chartAttrs.xaxisnamefontsize,
      // axisNameFontColor: chartAttrs.xaxisnamefontcolor,
      // axisNameFontBold: chartAttrs.xaxisnamefontbold,
      // axisNameFontItalic: chartAttrs.xaxisnamefontitalic,
      // axisNameBgColor: chartAttrs.xaxisnamebgcolor,
      // axisNameBorderColor: chartAttrs.xaxisnamebordercolor,
      // axisNameAlpha: chartAttrs.xaxisnamealpha,
      // axisNameFontAlpha: chartAttrs.xaxisnamefontalpha,
      // axisNameBgAlpha: chartAttrs.xaxisnamebgalpha,
      // axisNameBorderAlpha: chartAttrs.xaxisnameborderalpha,
      // axisNameBorderPadding: chartAttrs.xaxisnameborderpadding,
      // axisNameBorderRadius: chartAttrs.xaxisnameborderradius,
      // axisNameBorderThickness: chartAttrs.xaxisnameborderthickness,
      // axisNameBorderDashed: chartAttrs.xaxisnameborderdashed,
      // axisNameBorderDashLen: chartAttrs.xaxisnameborderdashlen,
      // axisNameBorderDashGap: chartAttrs.xaxisnameborderdashgap,
      useEllipsesWhenOverflow: chartAttrs.useellipseswhenoverflow,
      divLineColor: (0, _lib.pluck)(chartAttrs.vdivlinecolor, colorM.getColor(palleteString.divLineColor)),
      divLineAlpha: (0, _lib.pluck)(chartAttrs.vdivlinealpha, colorM.getColor('divLineAlpha')),
      divLineThickness: (0, _lib.pluckNumber)(chartAttrs.vdivlinethickness, 1),
      divLineIsDashed: Boolean((0, _lib.pluckNumber)(chartAttrs.vdivlinedashed, chartAttrs.vdivlineisdashed, 0)),
      divLineDashLen: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashlen, 4),
      divLineDashGap: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashgap, 2),
      showAlternateGridColor: (0, _lib.pluckNumber)(chartAttrs.showalternatevgridcolor, 0),
      alternateGridColor: (0, _lib.pluck)(chartAttrs.alternatevgridcolor, colorM.getColor('altVGridColor')),
      alternateGridAlpha: (0, _lib.pluck)(chartAttrs.alternatevgridalpha, colorM.getColor('altVGridAlpha')),
      numDivLines: chartAttrs.numvdivlines,
      labelFont: chartAttrs.labelfont,
      labelFontSize: chartAttrs.labelfontsize,
      labelFontColor: chartAttrs.labelfontcolor,
      labelFontAlpha: chartAttrs.labelalpha,
      labelFontBold: chartAttrs.labelfontbold,
      labelFontItalic: chartAttrs.labelfontitalic,
      axisName: chartAttrs.xaxisname,
      axisMinValue: chartAttrs.lowerlimit,
      axisMaxValue: chartAttrs.upperlimit,
      setAdaptiveMin: chartAttrs.setadaptivexmin,
      // adjusttm will be internally parsed as adjustdiv
      adjustDiv: chartAttrs.adjusttm,
      labelDisplay: chartAttrs.labeldisplay,
      showLabels: chartAttrs.showlabels,
      rotateLabels: chartAttrs.rotatelabels,
      slantLabel: (0, _lib.pluckNumber)(chartAttrs.slantlabels, chartAttrs.slantlabel),
      labelStep: (0, _lib.pluckNumber)(chartAttrs.labelstep, chartAttrs.xaxisvaluesstep),
      showAxisValues: (0, _lib.pluckNumber)(chartAttrs.showxaxisvalues, chartAttrs.showxaxisvalue),
      showDivLineValues: (0, _lib.pluckNumber)(chartAttrs.showvdivlinevalues, chartAttrs.showvdivlinevalues),
      showZeroPlane: chartAttrs.showvzeroplane,
      zeroPlaneColor: chartAttrs.vzeroplanecolor,
      zeroPlaneThickness: chartAttrs.vzeroplanethickness,
      zeroPlaneAlpha: chartAttrs.vzeroplanealpha,
      showZeroPlaneValue: chartAttrs.showvzeroplanevalue,
      trendlineColor: chartAttrs.trendlinecolor,
      trendlineToolText: chartAttrs.trendlinetooltext,
      trendlineThickness: chartAttrs.trendlinethickness,
      trendlineAlpha: chartAttrs.trendlinealpha,
      showTrendlinesOnTop: chartAttrs.showtrendlinesontop,
      showAxisLine: (0, _lib.pluckNumber)(chartAttrs.showxaxisline, chartAttrs.showaxislines, chartAttrs.drawAxisLines, 0),
      axisLineThickness: (0, _lib.pluckNumber)(chartAttrs.xaxislinethickness, chartAttrs.axislinethickness, 1),
      axisLineAlpha: (0, _lib.pluckNumber)(chartAttrs.xaxislinealpha, chartAttrs.axislinealpha, 100),
      axisLineColor: (0, _lib.pluck)(chartAttrs.xaxislinecolor, chartAttrs.axislinecolor, '#000000'),
      // Tick properties
      majorTMNumber: chartAttrs.majortmnumber,
      majorTMColor: chartAttrs.majortmcolor,
      majorTMAlpha: chartAttrs.majortmalpha,
      majorTMHeight: chartAttrs.majortmheight,
      tickValueStep: chartAttrs.tickvaluestep,
      showTickMarks: chartAttrs.showtickmarks,
      connectTickMarks: chartAttrs.connecttickmarks,
      showTickValues: chartAttrs.showtickvalues,
      majorTMThickness: chartAttrs.majortmthickness,
      upperlimit: numberFormatter.getCleanValue(chartAttrs.upperlimit),
      lowerlimit: numberFormatter.getCleanValue(chartAttrs.lowerlimit),
      reverseScale: chartAttrs.reversescale,
      // Whether to display the Limits
      showLimits: (0, _lib.pluckNumber)(chartAttrs.showlimits, chartAttrs.showtickmarks),
      minorTMNumber: (0, _lib.pluckNumber)(chartAttrs.minortmnumber, 0),
      minorTMColor: chartAttrs.minortmcolor,
      minorTMAlpha: chartAttrs.minortmalpha,
      minorTMHeight: (0, _lib.pluckNumber)(chartAttrs.minortmheight, chartAttrs.minortmwidth),
      minorTMThickness: chartAttrs.minortmthickness,
      // Padding between tick mark start position and gauge
      tickMarkDistance: (0, _lib.pluckNumber)(chartAttrs.tickmarkdistance, chartAttrs.tickmarkgap),
      // Tick value distance
      tickValueDistance: (0, _lib.pluckNumber)(chartAttrs.tickvaluedistance, chartAttrs.displayvaluedistance),
      placeTicksInside: chartAttrs.placeticksinside,
      placeValuesInside: chartAttrs.placevaluesinside,
      upperLimitDisplay: chartAttrs.upperlimitdisplay,
      lowerLimitDisplay: chartAttrs.lowerlimitdisplay
    };
    return [scaleConf];
  };

  // _drawCanvas: stubFN


  return Vbullet;
}(_fusioncharts2['default']);

exports['default'] = Vbullet;

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.bullet': function initialDatasetBullet() {
    var component = this,
        conf = component.config,
        chart = component.getFromEnv('chart'),
        scale = component.getFromEnv('scale'),
        yMax = scale.max,
        yMin = scale.min,
        isAllPositiveZero = yMax > 0 && yMin >= 0,
        isAllNegativeZero = yMax <= 0 && yMin < 0,
        yBase = isAllNegativeZero ? yMax : isAllPositiveZero ? yMin : 0,
        yBasePos = scale.yBasePos = scale.getPixel(yBase);
    return {
      'plotRect.appearing': function plotRectAppearing() {
        var isHorizontal = chart.isHorizontal,
            attr;

        if (!conf.plotAsDot) {
          yBasePos = scale.getPixel(conf.base);
        }

        if (isHorizontal) {
          attr = {
            width: 0
          };
        } else {
          attr = {
            height: 0,
            y: yBasePos
          };
        }
        return [{
          initialAttr: function initialAttr() {
            return attr;
          },
          slot: 'middle'
        }];
      },
      'plotRect.updating': null,
      'path.appearing': function pathAppearing() {
        fadeEffect[0].slot = 'middle';
        return fadeEffect;
      },
      'path.updating': null,
      'text.appearing': function textAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'text.updating': null,
      'labelGroup.appearing': function labelGroupAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'labelGroup.updating': null,
      'backgroundRect.appearing': function backgroundRectAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'backgroundRect.updating': null
    };
  }
};

/***/ }),

/***/ 738:
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

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bulletLedCommon = __webpack_require__(227);

var _bullet = __webpack_require__(228);

var _bullet2 = _interopRequireDefault(_bullet);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

var UNDEF,
    GUTTER_PADDING = 2,
    BLANKSTRING = _lib.BLANK,
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_END = _lib.preDefStr.POSITION_END,
    POSITION_BOTTOM = _lib.preDefStr.POSITION_BOTTOM,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    math = Math,
    mathCeil = math.ceil,
    mathMax = math.max,
    zeroCommaHundredStr = '0,100';
/**
 * Class for hbullet chart
 * @class Hbullet
 * @extends {Vbullet}
 */

var Hbullet = function (_LinearGauge) {
  _inherits(Hbullet, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Hbullet.getName = function getName() {
    return 'Hbullet';
  };
  /**
   * Creates an instance of Hbullet.
   * @memberof Hbullet
   */


  function Hbullet() {
    _classCallCheck(this, Hbullet);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.defaultSeriesType = 'hbullet';
    _this.gaugeType = 1;

    _this.defaultCaptionPadding = 5;
    _this.rendererId = 'hbullet';
    _this.isHorizontal = true;
    _this.isAxisOpposite = true;
    _this.rtManageSpace = true;
    _this.ticksOnRight = 0;

    _this.hasCanvas = true;
    _this.isAxisReverse = false;
    _this.defaultPaletteOptions = {
      // Store colors now
      paletteColors: [['A6A6A6', 'CCCCCC', 'E1E1E1', 'F0F0F0'], ['A7AA95', 'C4C6B7', 'DEDFD7', 'F2F2EE'], ['04C2E3', '66E7FD', '9CEFFE', 'CEF8FF'], ['FA9101', 'FEB654', 'FED7A0', 'FFEDD5'], ['FF2B60', 'FF6C92', 'FFB9CB', 'FFE8EE']],
      // Store other colors
      // ------------- For 2D Chart ---------------//
      // We're storing 5 combinations, as we've 5 defined palettes.
      bgColor: ['FFFFFF', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'],
      bgAngle: [270, 270, 270, 270, 270],
      bgRatio: [zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr, zeroCommaHundredStr],
      bgAlpha: ['100', '60,50', '40,20', '20,10', '30,30'],

      toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
      toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'],

      baseFontColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      trendColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      plotFillColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      borderColor: ['767575', '545454', '415D6F', '845001', '68001B'],
      borderAlpha: [50, 50, 50, 50, 50]
    };
    _this.showRTvalue = false;
    _this.canvasPadding = false;
    _this.defaultPlotShadow = 1;

    _this.realtimeEnabled = true;
    _this.chartleftmargin = 15;
    _this.chartrightmargin = 15;
    _this.charttopmargin = 10;
    _this.chartbottommargin = 10;
    _this.showTooltip = 0;
    _this.connectTickMarks = 0;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isRealTime = true;
    _this.colorRange = true;
    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Hbullet.prototype.getName = function getName() {
    return 'HbulletBase';
  };
  /**
   * Sets default configuration
   * @memberof Hbullet
   */


  Hbullet.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Horizontal Bullet Gauge';
    config.defaultDatasetType = 'bullet';
    config.singleseries = true;
    config.skipCanvasDrawing = true;
  };
  /**
   * Manage space during real time update
   * @memberof Hbullet
   */


  Hbullet.prototype._RTmanageSpace = function _RTmanageSpace() {
    var iapi = this,
        config = iapi.config,
        scale = iapi.getChildren('scale')[0],
        dataset = iapi.getChildren('dataset')[0],
        diff,
        currentLabelSpace;

    currentLabelSpace = dataset._manageSpaceHorizontal(config.oriCanvasWidth * 0.7);

    diff = currentLabelSpace.right - config.labelSpace.right;

    iapi._allocateSpace({
      right: diff
    });

    scale.setAxisDimention({
      axisLength: config.canvasWidth
    });

    config.labelSpace = currentLabelSpace;
  };

  /**
   * function to create component and configure and also configure the chart
   * It creates components which are depend on data and configure them and also configure chart
   * It calls helper function namely, configure
   * @param  {Object} dataObj contains json data of the chart
   */


  Hbullet.prototype.configureAttributes = function configureAttributes(dataObj) {
    _LinearGauge.prototype.configureAttributes.call(this, dataObj);
    _bulletLedCommon.configureAttributes.call(this);
  };
  /**
   * Method to fetch data
   */


  Hbullet.prototype._getData = function _getData() {
    _bulletLedCommon._getData.call(this);
  };
  /**
   * calculate and allote space for various components
   * every components are get notified with maximum space and then components return
   * the available space.
   * @memberof Hbullet
   */


  Hbullet.prototype._spaceManager = function _spaceManager() {
    var availableWidth,
        availableHeight,
        iapi = this,
        config = iapi.config,
        canvas = iapi.getChildren('canvas')[0],
        dataset = iapi.getChildren('dataset')[0],
        scale = iapi.getChildren('scale')[0],
        is3D = iapi.config.is3D,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        showBorder = (0, _lib.pluckNumber)(chartAttrs.showborder, is3D ? 0 : 1),
        chartBorderHorizontal,
        chartBorderVertical,
        minChartWidth = config.minChartWidth,
        minChartHeight = config.minChartHeight,
        chartBorderWidth = config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0;

    //* ***** Manage space

    if (config.canvasWidth - 2 * chartBorderWidth < minChartWidth) {
      chartBorderVertical = (config.canvasWidth - minChartWidth) / 2;
    }

    if (config.canvasHeight - 2 * chartBorderWidth < minChartHeight) {
      chartBorderHorizontal = (config.canvasHeight - minChartHeight) / 2;
    }

    iapi._allocateSpace({
      top: chartBorderHorizontal || chartBorderWidth,
      bottom: chartBorderHorizontal || chartBorderWidth,
      left: chartBorderVertical || chartBorderWidth,
      right: chartBorderVertical || chartBorderWidth
    });

    availableWidth = config.canvasWidth * 0.7;

    iapi._allocateSpace(scale.placeAxis(config.availableHeight));

    iapi._allocateSpace(iapi._manageActionBarSpace && iapi._manageActionBarSpace(config.availableHeight * 0.225) || {});
    config.oriCanvasWidth = config.canvasWidth;

    config.labelSpace = dataset._manageSpaceHorizontal(availableWidth);
    dataset._manageSpace && iapi._allocateSpace(config.labelSpace);

    availableHeight = config.canvasHeight * 0.225;
    // a space manager that manages the space for the tools as well as the captions.
    iapi._manageChartMenuBar(availableHeight);

    config.oriCanvasWidth -= mathMax(iapi.getChildren('subCaption')[0].config.width || 0, iapi.getChildren('caption')[0].config.width || 0);

    availableHeight = config.canvasHeight * 0.325;
    canvas.setDimension({
      top: config.canvasTop,
      left: config.canvasLeft,
      width: config.canvasWidth,
      height: config.canvasHeight
    });
  };
  /**
   * function to
   * @param  {number} availableHeight available hieght to alocate
   * @param  {number} availableWidth  available width to alocate
   * @return {Object} dimensions
   * @memberof Hbullet
   */


  Hbullet.prototype._manageCaptionSpacing = function _manageCaptionSpacing() {
    var iapi = this,
        chartConfig = iapi.config,
        caption = iapi.getChildren('caption')[0],
        subCaption = iapi.getChildren('subCaption')[0],
        captionConfig = caption.config,
        subCaptionConfig = subCaption.config,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        SmartLabel = iapi.getFromEnv('smartLabel'),
        titleText = (0, _lib.parseUnsafeString)(chartAttrs.caption),
        subTitleText = (0, _lib.parseUnsafeString)(chartAttrs.subcaption),
        captionPadding = (0, _lib.pluckNumber)(chartAttrs.captionpadding, 2),
        height = chartConfig.height,
        width = chartConfig.width,
        captionLineHeight = 0,
        subCaptionLineHeight = 0,
        captionHeight = 0,
        allowedHeight = height * 0.7,
        allowedWidth = width * 0.7,
        dimensions = {},
        maxCaptionWidth,
        captionObj,
        subCaptionObj,
        capStyle,
        subCapStyle;

    // text below 3px is not properly visible
    if (allowedHeight > 3) {
      captionConfig.captionPadding = subCaptionConfig.captionPadding = captionPadding;

      if (titleText !== BLANKSTRING) {
        // calculatethe single line's height
        capStyle = captionConfig.style;
        captionLineHeight = captionConfig.captionLineHeight = mathCeil(parseFloat((0, _lib.pluck)(capStyle.fontHeight, capStyle.lineHeight), 10), 12);
        // captionFontSize = subCaptionConfig.captionLineHeight =
        //     pluckNumber(parseInt(capStyle.fontSize, 10), 10);
      }
      if (subTitleText !== BLANKSTRING) {
        subCapStyle = subCaptionConfig.style;
        subCaptionLineHeight = mathCeil(parseInt((0, _lib.pluck)(subCapStyle.lineHeight, subCapStyle.fontHeight), 10), 12);
        // subCaptionFontSize = pluckNumber(parseInt(subCapStyle.fontSize, 10), 10);
      }

      if (captionLineHeight > 0 || subCaptionLineHeight > 0) {
        SmartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
        SmartLabel.setStyle(capStyle);
        captionObj = SmartLabel.getSmartText(titleText, allowedWidth, height);
        // Forcefully increase width to give a gutter in caption and sub-caption
        if (captionObj.width > 0) {
          captionObj.width += GUTTER_PADDING;
          captionHeight = captionObj.height;
        }
        SmartLabel.setStyle(subCapStyle);
        subCaptionObj = SmartLabel.getSmartText(subTitleText, allowedWidth, height - captionHeight);
        // Force fully increase width to give a gutter in caption and subCaption
        if (subCaptionObj.width > 0) {
          subCaptionObj.width += GUTTER_PADDING;
        }
        captionConfig.captionSubCaptionGap = captionObj.height + 0 + subCaptionLineHeight * 0.2;

        maxCaptionWidth = Math.max(captionObj.width, subCaptionObj.width);
        // Replace the caption and subCaption text with the new wrapped text
        captionConfig.text = captionObj.text;
        captionConfig.height = captionHeight = captionObj.height;
        captionConfig.width = captionObj.width;
        captionConfig.tooltext && (captionConfig.originalText = captionObj.tooltext);

        subCaptionConfig.text = subCaptionObj.text;
        subCaptionConfig.height = captionHeight = subCaptionObj.height;
        subCaptionConfig.width = subCaptionObj.width;
        subCaptionConfig.tooltext && (captionConfig.originalText = subCaptionObj.tooltext);

        maxCaptionWidth = Math.max(captionObj.width, subCaptionObj.width);
        // Add caption padding, if either caption or sub-caption is to be shown
        if (maxCaptionWidth > 0) {
          maxCaptionWidth = maxCaptionWidth + captionPadding;
        }
        captionConfig.maxCaptionWidth = subCaptionConfig.maxCaptionWidth = maxCaptionWidth;

        // totalHeight = totalHeight || canvasBorderThickness;
        if (captionConfig.isOnLeft) {
          dimensions.left = maxCaptionWidth;
        } else {
          dimensions.right = maxCaptionWidth;
        }
      }
    }

    if (captionConfig.isOnLeft) {
      captionConfig.align = subCaptionConfig.align = POSITION_END;
    } else {
      captionConfig.align = subCaptionConfig.align = POSITION_START;
    }

    return dimensions;
  };
  /**
   * function to calculate caption width and height
   * @memberof Hbullet
   */


  Hbullet.prototype._manageCaptionPosition = function _manageCaptionPosition() {
    var iapi = this,
        chartConfig = iapi.config,
        caption = iapi.getChildren('caption')[0],
        subCaption = iapi.getChildren('subCaption')[0],
        captionConfig = caption.config,
        subCaptionConfig = subCaption.config,
        captionPosition = captionConfig.captionPosition,
        maxWidth = mathMax(captionConfig.width, subCaptionConfig.width),
        borderWidth = chartConfig.borderWidth || 0,

    // height = chartConfig.height,
    captionSubCaptionGap = captionConfig.captionSubCaptionGap;

    switch (captionPosition) {
      case POSITION_MIDDLE:
        captionConfig.y = (chartConfig.canvasTop + chartConfig.canvasHeight) * 0.5;
        break;
      case POSITION_BOTTOM:
        captionConfig.y = chartConfig.canvasBottom - (captionConfig.height + subCaptionConfig.height);
        break;
      default:
        // We put it on top by default
        captionConfig.y = chartConfig.canvasTop;
        break;
    }

    subCaptionConfig.y = captionConfig.y + captionSubCaptionGap;

    if (captionConfig.isOnLeft) {
      // captionConfig.align = subCaptionConfig.align = POSITION_END;
      captionConfig.x = subCaptionConfig.x = chartConfig.marginLeft + maxWidth + borderWidth;
    } else {
      // captionConfig.align = subCaptionConfig.align = POSITION_START;
      captionConfig.x = subCaptionConfig.x = chartConfig.width - chartConfig.marginRight - maxWidth - borderWidth;
    }
  };
  /**
   * This method parse all the attributes which are associated with axis compoenents.
   * So that axis compoenents can be configured
   * @return {Object} contains axes config
   * @memberof Hbullet
   */


  Hbullet.prototype._feedAxesRawData = function _feedAxesRawData() {
    var iapi = this,
        colorM = iapi.getFromEnv('color-manager'),
        numberFormatter = iapi.getFromEnv('number-formatter'),
        dataObj = iapi.getFromEnv('dataSource'),
        chartAttrs = dataObj.chart,
        scaleConf,
        palleteString = _lib.chartPaletteStr.chart2D,
        ticksBelowGraph = (0, _lib.pluckNumber)(chartAttrs.ticksbelowgraph, 1),
        isAxisOpposite = (0, _lib.pluckNumber)(chartAttrs.ticksonright, chartAttrs.axisontop, chartAttrs.axisonleft !== UNDEF ? !(0, _lib.pluckNumber)(chartAttrs.axisonleft) : UNDEF, !ticksBelowGraph, iapi.isAxisOpposite);

    scaleConf = {
      isVertical: !iapi.isHorizontal,
      isReverse: false,
      isOpposit: isAxisOpposite,
      outCanfontFamily: (0, _lib.pluck)(chartAttrs.outcnvbasefont, chartAttrs.basefont, 'Verdana,sans'),
      outCanfontSize: (0, _lib.pluckFontSize)(chartAttrs.outcnvbasefontsize, chartAttrs.basefontsize, 10),
      outCancolor: (0, _lib.pluck)(chartAttrs.outcnvbasefontcolor, chartAttrs.basefontcolor, colorM.getColor(palleteString.baseFontColor)).replace(/^#?([a-f0-9]+)/ig, '#$1'),
      // axisNamePadding: chartAttrs.xaxisnamepadding,
      // axisValuePadding: chartAttrs.labelpadding,
      // axisNameFont: chartAttrs.xaxisnamefont,
      // axisNameFontSize: chartAttrs.xaxisnamefontsize,
      // axisNameFontColor: chartAttrs.xaxisnamefontcolor,
      // axisNameFontBold: chartAttrs.xaxisnamefontbold,
      // axisNameFontItalic: chartAttrs.xaxisnamefontitalic,
      // axisNameBgColor: chartAttrs.xaxisnamebgcolor,
      // axisNameBorderColor: chartAttrs.xaxisnamebordercolor,
      // axisNameAlpha: chartAttrs.xaxisnamealpha,
      // axisNameFontAlpha: chartAttrs.xaxisnamefontalpha,
      // axisNameBgAlpha: chartAttrs.xaxisnamebgalpha,
      // axisNameBorderAlpha: chartAttrs.xaxisnameborderalpha,
      // axisNameBorderPadding: chartAttrs.xaxisnameborderpadding,
      // axisNameBorderRadius: chartAttrs.xaxisnameborderradius,
      // axisNameBorderThickness: chartAttrs.xaxisnameborderthickness,
      // axisNameBorderDashed: chartAttrs.xaxisnameborderdashed,
      // axisNameBorderDashLen: chartAttrs.xaxisnameborderdashlen,
      // axisNameBorderDashGap: chartAttrs.xaxisnameborderdashgap,
      useEllipsesWhenOverflow: chartAttrs.useellipseswhenoverflow,
      divLineColor: (0, _lib.pluck)(chartAttrs.vdivlinecolor, colorM.getColor(palleteString.divLineColor)),
      divLineAlpha: (0, _lib.pluck)(chartAttrs.vdivlinealpha, colorM.getColor('divLineAlpha')),
      divLineThickness: (0, _lib.pluckNumber)(chartAttrs.vdivlinethickness, 1),
      divLineIsDashed: Boolean((0, _lib.pluckNumber)(chartAttrs.vdivlinedashed, chartAttrs.vdivlineisdashed, 0)),
      divLineDashLen: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashlen, 4),
      divLineDashGap: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashgap, 2),
      showAlternateGridColor: (0, _lib.pluckNumber)(chartAttrs.showalternatevgridcolor, 0),
      alternateGridColor: (0, _lib.pluck)(chartAttrs.alternatevgridcolor, colorM.getColor('altVGridColor')),
      alternateGridAlpha: (0, _lib.pluck)(chartAttrs.alternatevgridalpha, colorM.getColor('altVGridAlpha')),
      numDivLines: chartAttrs.numvdivlines,
      labelFont: chartAttrs.labelfont,
      labelFontSize: chartAttrs.labelfontsize,
      labelFontColor: chartAttrs.labelfontcolor,
      labelFontAlpha: chartAttrs.labelalpha,
      labelFontBold: chartAttrs.labelfontbold,
      labelFontItalic: chartAttrs.labelfontitalic,
      axisName: chartAttrs.xaxisname,
      axisMinValue: chartAttrs.lowerlimit,
      axisMaxValue: chartAttrs.upperlimit,
      setAdaptiveMin: chartAttrs.setadaptivexmin,
      // adjusttm will be internally parsed as adjustdiv
      adjustDiv: chartAttrs.adjusttm,
      labelDisplay: chartAttrs.labeldisplay,
      showLabels: chartAttrs.showlabels,
      rotateLabels: chartAttrs.rotatelabels,
      slantLabel: (0, _lib.pluckNumber)(chartAttrs.slantlabels, chartAttrs.slantlabel),
      labelStep: (0, _lib.pluckNumber)(chartAttrs.labelstep, chartAttrs.xaxisvaluesstep),
      showAxisValues: (0, _lib.pluckNumber)(chartAttrs.showxaxisvalues, chartAttrs.showxaxisvalue),
      showDivLineValues: (0, _lib.pluckNumber)(chartAttrs.showvdivlinevalues, chartAttrs.showvdivlinevalues),
      showZeroPlane: chartAttrs.showvzeroplane,
      zeroPlaneColor: chartAttrs.vzeroplanecolor,
      zeroPlaneThickness: chartAttrs.vzeroplanethickness,
      zeroPlaneAlpha: chartAttrs.vzeroplanealpha,
      showZeroPlaneValue: chartAttrs.showvzeroplanevalue,
      trendlineColor: chartAttrs.trendlinecolor,
      trendlineToolText: chartAttrs.trendlinetooltext,
      trendlineThickness: chartAttrs.trendlinethickness,
      trendlineAlpha: chartAttrs.trendlinealpha,
      showTrendlinesOnTop: chartAttrs.showtrendlinesontop,
      showAxisLine: (0, _lib.pluckNumber)(chartAttrs.showxaxisline, chartAttrs.showaxislines, chartAttrs.drawAxisLines, 0),
      axisLineThickness: (0, _lib.pluckNumber)(chartAttrs.xaxislinethickness, chartAttrs.axislinethickness, 1),
      axisLineAlpha: (0, _lib.pluckNumber)(chartAttrs.xaxislinealpha, chartAttrs.axislinealpha, 100),
      axisLineColor: (0, _lib.pluck)(chartAttrs.xaxislinecolor, chartAttrs.axislinecolor, '#000000'),
      // Tick properties
      majorTMNumber: chartAttrs.majortmnumber,
      majorTMColor: chartAttrs.majortmcolor,
      majorTMAlpha: chartAttrs.majortmalpha,
      majorTMHeight: chartAttrs.majortmheight,
      tickValueStep: chartAttrs.tickvaluestep,
      showTickMarks: chartAttrs.showtickmarks,
      connectTickMarks: chartAttrs.connecttickmarks,
      showTickValues: chartAttrs.showtickvalues,
      majorTMThickness: chartAttrs.majortmthickness,
      upperlimit: numberFormatter.getCleanValue(chartAttrs.upperlimit),
      lowerlimit: numberFormatter.getCleanValue(chartAttrs.lowerlimit),
      reverseScale: chartAttrs.reversescale,
      // Whether to display the Limits
      showLimits: (0, _lib.pluckNumber)(chartAttrs.showlimits, chartAttrs.showtickmarks),
      minorTMNumber: (0, _lib.pluckNumber)(chartAttrs.minortmnumber, 0),
      minorTMColor: chartAttrs.minortmcolor,
      minorTMAlpha: chartAttrs.minortmalpha,
      minorTMHeight: (0, _lib.pluckNumber)(chartAttrs.minortmheight, chartAttrs.minortmwidth),
      minorTMThickness: chartAttrs.minortmthickness,
      // Padding between tick mark start position and gauge
      tickMarkDistance: (0, _lib.pluckNumber)(chartAttrs.tickmarkdistance, chartAttrs.tickmarkgap),
      // Tick value distance
      tickValueDistance: (0, _lib.pluckNumber)(chartAttrs.tickvaluedistance, chartAttrs.displayvaluedistance),
      placeTicksInside: chartAttrs.placeticksinside,
      placeValuesInside: chartAttrs.placevaluesinside,
      upperLimitDisplay: chartAttrs.upperlimitdisplay,
      lowerLimitDisplay: chartAttrs.lowerlimitdisplay
    };

    return [scaleConf];
  };
  /**
   * get dataset defination
   * @return {Object} The dataset defination
   */


  Hbullet.prototype.getDSdef = function getDSdef() {
    return _bullet2['default'];
  };
  /**
   * Returns the postion for the caption placement.
   * @return {number} extraspace
   * @memberof Hbullet
   */


  Hbullet.prototype._fetchCaptionPos = function _fetchCaptionPos() {
    var extraSpace,
        iapi = this,
        caption = iapi.getChildren('caption')[0],
        captionConfig = caption.config;

    // check if even after placing the caption
    // space available on right.
    // left aligned.
    if (captionConfig.align === POSITION_END) {
      extraSpace = 0;
    } else {
      // right aligned
      extraSpace = -1;
    }
    return extraSpace;
  };

  return Hbullet;
}(_fusioncharts2['default']);

exports['default'] = Hbullet;

/***/ }),

/***/ 739:
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

var _bullet = __webpack_require__(228);

var _bullet2 = _interopRequireDefault(_bullet);

var _dependencyManager = __webpack_require__(6);

var _ledAnimation = __webpack_require__(740);

var _ledAnimation2 = _interopRequireDefault(_ledAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var BLANKSTRING = _lib.BLANK,

// add the tools thats are requared
colorStrings = _lib.preDefStr.colors,
    getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    COLOR_000000 = colorStrings.c000000,
    showHoverEffectStr = _lib.preDefStr.showHoverEffectStr,
    BUTT = 'butt',
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    ledColorRangeFillMixStr = '{light-10},{dark-10},{light-10},{dark-10}',
    ledColorRangeFillRatioStr = '0,10,80,10',
    win = window,
    userAgent = win.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !win.opera,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    math = Math,
    mathRound = math.round,
    mathMax = math.max,
    dropHash = _lib.regex.dropHash,

// isArray = lib.isArray,
SETROLLOVERATTR = 'setRolloverAttr',
    SETROLLOUTATTR = 'setRolloutAttr',
    EVENTARGS = 'eventArgs',
    UNDEF,
    M = 'M',
    L = 'L',
    Z = 'Z';
(0, _dependencyManager.addDep)({
  name: 'ledAnimation',
  type: 'animationRule',
  extension: _ledAnimation2['default']
});
/**
 * Creates the LedDataset class for led plot
 */

var LedDataset = function (_BulletDataset) {
  _inherits(LedDataset, _BulletDataset);

  function LedDataset() {
    _classCallCheck(this, LedDataset);

    return _possibleConstructorReturn(this, _BulletDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  LedDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  LedDataset.prototype.getName = function getName() {
    return 'led';
  };
  /**
   * Draw Led plot
   */


  LedDataset.prototype.draw = function draw() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        chartAttr = chart.getFromEnv('dataSource').chart,
        chartConfig = chart.config,

    // chartGraphics = chart.graphics,
    canvas = chart.getChildren('canvas')[0],
        graphics = canvas._graphics,
        config = canvas.config,

    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = animationObj.duration,

    canvasBorderElement = graphics.canvasBorderElement,
        canvasElement = graphics.canvasElement,
        canvasElementPath = graphics.canvasElementPath,
        canvasHotElement = graphics.canvasHotElement,
        canvasLeft = chartConfig.canvasLeft,
        canvasRight = chartConfig.canvasRight,
        canvasTop = chartConfig.canvasTop,
        canvasBottom = chartConfig.canvasBottom,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        parentContainer = chart.getChildContainer().plotGroup,
        scale = dataSet.getFromEnv('scale'),
        min = scale.getLimit().min,
        max = scale.getLimit().max,
        isAxisReverse = (0, _lib.pluckNumber)(chart.getFromEnv('dataSource').chart.reverseaxis, chart.isAxisReverse),
        isHorizontal = chart.isHorizontal,
        getRectXY = function getRectXY(minValue, maxValue) {
      if (isAxisReverse && !isHorizontal) {
        return {
          x: canvasLeft,
          y: canvasTop + minValue * canvasHeight / (max - min),
          width: canvasWidth,
          height: (maxValue - minValue) * canvasHeight / (max - min)
        };
      } else if (!isAxisReverse && !isHorizontal) {
        return {
          x: canvasLeft,
          y: canvasTop + (canvasHeight - maxValue * canvasHeight / (max - min)),
          width: canvasWidth,
          height: (maxValue - minValue) * canvasHeight / (max - min)
        };
      } else if (isAxisReverse && isHorizontal) {
        return {
          x: canvasLeft + (canvasWidth - maxValue * canvasWidth / (max - min)),
          y: canvasTop,
          width: (maxValue - minValue) * canvasWidth / (max - min),
          height: canvasHeight
        };
      } else if (!isAxisReverse && isHorizontal) {
        return {
          x: canvasLeft + minValue * canvasWidth / (max - min),
          y: canvasTop,
          width: (maxValue - minValue) * canvasWidth / (max - min),
          height: canvasHeight
        };
      }
    },
        angle = 180,
        gaugeFillMix,
        gaugeFillRatio,
        colorArray,
        colorM = dataSet.getFromEnv('color-manager'),
        gaugeBorderColor,
        gaugeBorderAlpha,
        showShadow,
        showGaugeBorder,
        gaugeBorderThickness,
        colorObj,
        i,
        len,
        xyObj,
        color,
        borderColor,
        crColor,
        crAlpha,
        borderAlpha,
        shadowAlpha,
        useSameFillColor,
        useSameFillBgColor,
        ledGap,
        ledSize,
        gaugeFillColor,
        LEDlength,
        sizeGapSum,
        remaningLength,
        valueDistance,
        halfBorderWidth,
        x1,
        y1,
        x2,
        y2,
        noOfLED,
        extraSpace,
        LEDGapStartX,
        LEDGapStartY,
        pathCommand,
        colorRangeGetter,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        animationManager = chart.getFromEnv('animationManager'),
        useSameFillColorCode,
        lastColor,
        value,
        colorIndex,
        showHoverEffect = conf.showHoverEffect,

    // Fired when clicked over the hot elements.
    clickFunc = function clickFunc(data) {
      var ele = this;
      _lib.plotEventHandler.call(ele, chart, data);
    },
        rolloverResponseSetter = function rolloverResponseSetter(colorRangeElems) {
      var i = 0,
          len,
          elem,
          ele;

      return function () {
        ele = this;
        if (ele.data(showHoverEffectStr) !== 0) {
          for (i = 0, len = colorRangeElems.length; i < len; i += 1) {
            elem = colorRangeElems[i];
            elem.attr(ele.data(SETROLLOVERATTR)[i]);
          }
        }
      };
    },
        rolloutResponseSetter = function rolloutResponseSetter(colorRangeElems) {
      var i = 0,
          len,
          elem,
          ele;

      return function () {
        ele = this;
        if (ele.data(showHoverEffectStr) !== 0) {
          for (i = 0, len = colorRangeElems.length; i < len; i += 1) {
            elem = colorRangeElems[i];
            elem.attr(ele.data(SETROLLOUTATTR)[i]);
          }
        }
      };
    },
        setRolloverAttr = [],
        setRolloutAttr = [],
        trackerContainer = dataSet.getContainer('trackerContainer'),
        trackerLayer = chart.getChildContainer('trackerGroup'),
        setLink,
        eventArgs,
        LEDDrawn = 0,
        perLEDValueLength,
        lastX,
        lastY,
        colorLED,
        colorLedLengthPX,
        colorLEDLength,
        isNewElement = false,
        attr;

    if (!trackerContainer) {
      trackerContainer = dataSet.addContainer('trackerContainer', animationManager.setAnimation({
        el: 'group',
        attr: { name: 'led-hot' },
        container: trackerLayer,
        component: dataSet
      }));
    }

    showGaugeBorder = (0, _lib.pluckNumber)(chartAttr.showgaugeborder, 1);
    gaugeBorderColor = (0, _lib.pluck)(chartAttr.gaugebordercolor, chart.gaugeBorderColor, '333333');
    gaugeBorderThickness = showGaugeBorder ? (0, _lib.pluckNumber)(chartAttr.gaugeborderthickness, chart.gaugeBorderThickness, 2) : 0;
    gaugeBorderAlpha = (0, _lib.pluck)(chartAttr.gaugeborderalpha, _lib.HUNDREDSTRING);
    // Gauge fill color
    config.gaugeFillColor = gaugeFillColor = (0, _lib.pluck)(chartAttr.gaugefillcolor, chartAttr.ledbgcolor, COLOR_000000);
    // Whether to use same fill color?
    useSameFillColor = (0, _lib.pluckNumber)(chartAttr.usesamefillcolor, 0);
    // Same color for back ground
    useSameFillBgColor = (0, _lib.pluckNumber)(chartAttr.usesamefillbgcolor, useSameFillColor);

    conf.ledGap = ledGap = (0, _lib.pluckNumber)(chartAttr.ledgap, 2);
    conf.ledSize = ledSize = (0, _lib.pluckNumber)(chartAttr.ledsize, 2);
    // plotHoverEffect = pluckNumber(chartAttr.showhovereffect, 0);

    config.colorRangeFillMix = gaugeFillMix = (0, _lib.getFirstDefinedValue)(chartAttr.colorrangefillmix, chartAttr.gaugefillmix, chart.colorRangeFillMix, ledColorRangeFillMixStr);

    config.colorRangeFillRatio = gaugeFillRatio = (0, _lib.getFirstDefinedValue)(chartAttr.colorrangefillratio, chartAttr.gaugefillratio, chart.colorRangeFillRatio, chartAttr.gaugefillratio, ledColorRangeFillRatioStr);

    // paletteIndex = 0;
    // Get the colorRange from env of dataset
    config.colorRangeGetter = colorRangeGetter = dataSet.getFromEnv('colorRange');

    config.colorArray = colorArray = colorRangeGetter && colorRangeGetter.getColorRangeArr(min, max);

    gaugeBorderColor = (0, _lib.pluck)(gaugeBorderColor, COLOR_000000).replace(dropHash, _lib.HASHSTRING);

    gaugeBorderAlpha = (0, _lib.pluckNumber)(chartAttr.colorrangeborderalpha, chartAttr.gaugeborderalpha, 100);

    showShadow = (0, _lib.pluckNumber)(chartAttr.showshadow, 1);

    showGaugeBorder = (0, _lib.pluckNumber)(chartAttr.showgaugeborder, 1);

    config.colorRangeBorderThickness = gaugeBorderThickness = showGaugeBorder ? (0, _lib.pluckNumber)(chartAttr.colorrangeborderthickness, chartAttr.gaugeborderthickness, 2) : 0;

    LEDlength = !isHorizontal ? canvasHeight : canvasWidth;

    sizeGapSum = ledGap + ledSize || 1;
    remaningLength = LEDlength - ledSize;
    valueDistance = max - min;

    halfBorderWidth = gaugeBorderThickness / 2;
    x1 = canvasLeft - halfBorderWidth;
    y1 = canvasTop - halfBorderWidth;
    x2 = canvasLeft + canvasWidth + halfBorderWidth;
    y2 = canvasTop + canvasHeight + halfBorderWidth;

    noOfLED = parseInt(remaningLength / sizeGapSum, 10) + 1;
    extraSpace = remaningLength % sizeGapSum;
    // devide the extra space amont all the LED
    ledSize += extraSpace / noOfLED;
    conf.sizeGapSum = sizeGapSum = ledSize + ledGap;

    conf.perLEDValueLength = perLEDValueLength = valueDistance / noOfLED;

    LEDGapStartX = canvasLeft;
    LEDGapStartY = canvasTop;

    setLink = (0, _lib.pluck)(chartAttr.clickurl);

    if (!canvasElement) {
      graphics.canvasElement = canvasElement = {};
      canvasElement.colorRangeElems = [];
    }

    value = numberFormatter.getCleanValue(chart.getFromEnv('dataSource').value);

    if (useSameFillColor || useSameFillBgColor) {
      for (i = 0, len = colorArray.length; i < len; i += 1) {
        if (value >= colorArray[i].minvalue && value <= colorArray[i].maxvalue) {
          useSameFillColorCode = colorArray[i].code || colorM.getPlotColor(i);
          colorIndex = i;
          break;
        }
      }
    }

    colorArray && colorArray.length > 0 && (lastColor = colorArray[0].code || colorM.getPlotColor(0));

    lastX = isAxisReverse ? canvasRight : canvasLeft;
    lastY = isAxisReverse ? canvasTop : canvasBottom;

    for (i = 0, len = colorArray && colorArray.length; i < len; i += 1) {
      colorObj = colorArray[i];
      xyObj = getRectXY(colorObj.minvalue - min, colorObj.maxvalue - min);
      colorLED = mathRound((colorObj.maxvalue - min) / perLEDValueLength);
      colorLEDLength = colorLED - LEDDrawn;
      LEDDrawn = colorLED;
      colorLedLengthPX = colorLEDLength * sizeGapSum;

      if (!isHorizontal && !isAxisReverse) {
        xyObj.height = colorLedLengthPX - ledGap;
        xyObj.y = lastY - xyObj.height;
        lastY -= colorLedLengthPX;
      } else if (!isHorizontal && isAxisReverse) {
        xyObj.height = colorLedLengthPX - ledGap;
        xyObj.y = lastY;
        lastY += colorLedLengthPX;
      } else if (isHorizontal && !isAxisReverse) {
        xyObj.width = colorLedLengthPX - ledGap;
        xyObj.x = lastX;
        lastX += colorLedLengthPX;
      } else if (isHorizontal && isAxisReverse) {
        xyObj.width = colorLedLengthPX - ledGap;
        xyObj.x = lastX - xyObj.width;
        lastX -= colorLedLengthPX;
      }

      colorObj.x = xyObj.x;
      colorObj.y = xyObj.y;
      colorObj.width = xyObj.width;
      colorObj.height = xyObj.height;

      if (useSameFillColor) {
        color = useSameFillColorCode;
      } else if (useSameFillBgColor && i > colorIndex) {
        color = lastColor;
      } else {
        color = lastColor = colorObj.code || colorM.getPlotColor(i);
      }

      borderColor = (0, _lib.convertColor)((0, _lib.getColorCodeString)((0, _lib.pluck)(colorObj.bordercolor, color), gaugeBorderColor), (0, _lib.pluckNumber)(colorObj.borderalpha, gaugeBorderAlpha));

      // shadow = showShadow ? (Math.max(colorObj.alpha, gaugeBorderAlpha) / 100) : null;

      // create the shadow element
      crColor = colorM.parseColorMix(colorObj.code, gaugeFillMix);
      crAlpha = colorM.parseAlphaList(colorObj.alpha, crColor.length);
      borderAlpha = (0, _lib.pluckNumber)(colorObj.borderAlpha, gaugeBorderAlpha);
      shadowAlpha = crAlpha.split(_lib.COMMASTRING);

      shadowAlpha = mathMax.apply(Math, shadowAlpha);
      shadowAlpha = mathMax(gaugeBorderThickness && borderAlpha || 0, shadowAlpha);

      attr = {
        x: xyObj.x,
        y: xyObj.y,
        width: xyObj.width < 0 ? 0 : xyObj.width,
        height: xyObj.height < 0 ? 0 : xyObj.height,
        r: 0,
        'stroke-width': 0,
        stroke: borderColor,
        'fill': (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: color,
            ratio: gaugeFillRatio,
            alpha: crAlpha,
            angle: angle
          }
        })
      };
      canvasElement.colorRangeElems[i] = animationManager.setAnimation({
        el: canvasElement.colorRangeElems[i] || 'rect',
        attr: attr,
        container: parentContainer,
        component: dataSet,
        label: 'plotBackground'
      }).toBack();
      canvasElement.colorRangeElems[i].show();

      canvasElement.colorRangeElems[i].shadow({
        apply: showShadow,
        opacity: shadowAlpha / 100
      });

      setRolloverAttr.push({
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: getDarkColor((0, _lib.pluck)(color, COLOR_000000), 80) + _lib.COMMASTRING + getLightColor((0, _lib.pluck)(color, COLOR_000000), 80),
            alpha: (0, _lib.pluckNumber)(colorObj.alpha, 100),
            angle: isHorizontal ? 90 : 0
          }
        })
      });

      setRolloutAttr.push({
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: (0, _lib.pluck)(color, COLOR_000000),
            alpha: (0, _lib.pluckNumber)(colorObj.alpha, 100)
          }
        })
      });
    }

    // Hide the extra colors
    for (len = canvasElement.colorRangeElems.length; i < len; i++) {
      canvasElement.colorRangeElems[i].hide();
    }

    eventArgs = {
      link: setLink,
      value: value
    };

    attr = {
      x: canvasLeft,
      y: canvasTop,
      width: canvasWidth,
      height: canvasHeight,
      'stroke-width': 0,
      fill: TRACKER_FILL,
      ishot: true
    };

    if (!canvasHotElement) {
      canvasHotElement = graphics.canvasHotElement = animationManager.setAnimation({
        el: 'rect',
        attr: attr,
        container: trackerContainer,
        component: dataSet
      });
      isNewElement = true;
    } else {
      animationManager.setAnimation({
        el: canvasHotElement,
        attr: attr,
        container: trackerContainer,
        component: dataSet
      });
    }

    canvasHotElement.data(EVENTARGS, eventArgs).data(showHoverEffectStr, showHoverEffect).data(SETROLLOVERATTR, setRolloverAttr).data(SETROLLOUTATTR, setRolloutAttr);

    if (isNewElement) {
      if (setLink) {
        canvasHotElement.click(clickFunc);
      }
      canvasHotElement.hover(rolloverResponseSetter(canvasElement.colorRangeElems), rolloutResponseSetter(canvasElement.colorRangeElems));
    }

    if (isHorizontal) {
      LEDGapStartX += sizeGapSum - ledGap / 2;
    } else {
      LEDGapStartY += sizeGapSum - ledGap / 2;
    }

    pathCommand = [];

    attr = {
      path: [M, x1, y1, L, x2, y1, x2, y2, x1, y2, Z],
      stroke: (0, _lib.convertColor)(gaugeBorderColor, gaugeBorderAlpha),
      'stroke-width': gaugeBorderThickness,
      'stroke-linecap': BUTT
    };

    if (!canvasBorderElement) {
      graphics.canvasBorderElement = animationManager.setAnimation({
        el: 'path',
        attr: attr,
        container: parentContainer,
        component: dataSet,
        label: 'plotBackground'
      }).shadow({
        apply: showShadow
      }).toBack();
    } else {
      animationManager.setAnimation({
        el: canvasBorderElement,
        attr: attr,
        component: dataSet
      });
    }

    // Draw the path for the gap
    for (i = 1; i < noOfLED; i += 1) {
      if (isHorizontal) {
        pathCommand.push(M, LEDGapStartX, LEDGapStartY, L, LEDGapStartX, LEDGapStartY + canvasHeight);
        LEDGapStartX += sizeGapSum;
      } else {
        pathCommand.push(M, LEDGapStartX, LEDGapStartY, L, LEDGapStartX + canvasWidth, LEDGapStartY);
        LEDGapStartY += sizeGapSum;
      }
    }

    attr = {
      path: pathCommand,
      stroke: (0, _lib.convertColor)(gaugeFillColor, 100),
      'stroke-width': ledGap,
      'stroke-linecap': BUTT
    };

    if (!canvasElementPath) {
      graphics.canvasElementPath = animationManager.setAnimation({
        el: 'path',
        attr: attr,
        container: parentContainer,
        component: dataSet,
        label: 'plotBackground'
      });
    } else {
      animationManager.setAnimation({
        el: canvasElementPath,
        attr: attr,
        component: dataSet
      });
    }
    dataSet.drawShade();
  };
  /**
   * Draw led shade which simulates the off leds
   */


  LedDataset.prototype.drawShade = function drawShade() {
    var dataSet = this,
        conf = dataSet.config,
        dataStore = dataSet.components.data,
        chart = dataSet.getFromEnv('chart'),
        chartAttr = chart.getFromEnv('dataSource').chart,
        animationManager = chart.getFromEnv('animationManager'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasHeight = chartConfig.canvasHeight,
        canvasWidth = chartConfig.canvasWidth,
        parentContainer = chart.getChildContainer().plotGroup,
        container = dataSet.getContainer('container'),
        gaugeFillColor,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        setValue,
        yPos,
        isAxisReverse = conf.isAxisReverse = (0, _lib.pluckNumber)(chartAttr.reverseaxis, chart.isaxisreverse),
        isHorizontal = conf.isHorizontal = chart.isHorizontal,
        attr,
        dataObj = dataStore[0],
        graphic = dataObj.graphics,
        config = dataObj && dataObj.config,
        dataLabelContainer = dataSet.getContainer('dataLabelContainer'),
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),
        canvas = chart.getChildren('canvas')[0],
        style = chart.config.dataLabelStyle,
        heightUsed = conf.heightUsed,
        lineHeight,
        labelBBox,
        labelWidth,
        setTooltext,
        lightedLed,
        lightedLedLength,
        height,
        width,
        scale = dataSet.getFromEnv('scale'),
        min = scale.getLimit().min;

    gaugeFillColor = chart.getChildren('canvas')[0].config.gaugeFillColor;

    if (!container) {
      container = dataSet.addContainer('container', animationManager.setAnimation({
        el: 'group',
        attr: { name: 'shade' },
        container: parentContainer,
        component: dataSet
      }));
    }

    // Creating the dataLabel container group if not present and appending it to its parent.
    if (!dataLabelContainer) {
      dataLabelContainer = dataSet.addContainer('dataLabelContainer', animationManager.setAnimation({
        el: 'group',
        attr: {
          name: 'datalabel'
        },
        container: dataLabelsLayer,
        component: dataSet,
        label: 'labelGroup'
      }));
    }

    setValue = numberFormatter.getCleanValue(config.setValue);

    if (!dataObj.graphics) {
      dataObj.graphics = {};
    }

    lightedLed = (setValue - min) / conf.perLEDValueLength;
    lightedLedLength = mathRound(lightedLed) * conf.sizeGapSum - conf.ledGap;

    height = Math.ceil(canvasHeight - lightedLedLength);
    width = Math.ceil(canvasWidth - lightedLedLength);

    if (isAxisReverse && !isHorizontal) {
      attr = {
        x: canvasLeft,
        y: canvasTop + lightedLedLength,
        width: canvasWidth,
        height: height,
        r: 0,
        'stroke-width': 0,
        fill: (0, _lib.convertColor)(gaugeFillColor, 50)
      };
    } else if (!isAxisReverse && !isHorizontal) {
      attr = {
        x: canvasLeft,
        y: canvasTop,
        width: canvasWidth,
        height: height,
        r: 0,
        'stroke-width': 0,
        fill: (0, _lib.convertColor)(gaugeFillColor, 50)
      };
    } else if (!isAxisReverse && isHorizontal) {
      attr = {
        x: canvasLeft + lightedLedLength,
        y: canvasTop,
        width: width,
        height: canvasHeight,
        r: 0,
        'stroke-width': 0,
        fill: (0, _lib.convertColor)(gaugeFillColor, 50)
      };
    } else if (isAxisReverse && isHorizontal) {
      attr = {
        x: canvasLeft,
        y: canvasTop,
        width: width,
        height: canvasHeight,
        r: 0,
        'stroke-width': 0,
        fill: (0, _lib.convertColor)(gaugeFillColor, 50)
      };
    }

    dataObj.graphics.element = animationManager.setAnimation({
      el: dataObj.graphics.element || 'rect',
      attr: attr,
      container: container,
      component: dataSet,
      label: 'plotRect'
    });

    setTooltext = config.setTooltext === _lib.BLANK || config.setTooltext === UNDEF ? config.toolTipValue : config.setTooltext;

    if (conf.showTooltip) {
      toolTipController.enableToolTip(canvas._graphics.canvasHotElement, setTooltext);
    } else {
      toolTipController.disableToolTip(canvas._graphics.canvasHotElement);
    }

    lineHeight = parseInt(style.lineHeight, 10);

    yPos = lineHeight > heightUsed ? chartConfig.height - chartConfig.marginBottom - heightUsed + lineHeight / 2 : chartConfig.height - chartConfig.marginBottom - lineHeight / 2;

    yPos -= chartConfig.borderWidth;

    yPos -= (chart._manageActionBarSpace && chart._manageActionBarSpace(config.availableHeight * 0.225) || {}).bottom;
    graphic = dataObj.graphics;

    if (config.displayValue !== BLANKSTRING && config.displayValue !== UNDEF && conf.showValue) {
      attr = {
        text: config.displayValue,
        'text-anchor': POSITION_MIDDLE,
        x: canvasWidth / 2 + canvasLeft,
        y: yPos,
        'vertical-align': POSITION_MIDDLE,
        fill: style.color,
        direction: config.textDirection,
        'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
      };

      if (!graphic.label) {
        graphic.label = animationManager.setAnimation({
          el: 'text',
          attr: attr,
          container: dataLabelContainer,
          component: dataSet,
          label: 'text'
        });
      } else {}
      // graphic.label.animateWith(dummyObj, animObj, {
      //   x: canvasWidth / 2 + canvasLeft,
      //   y: yPos
      // }, animationDuration, animType);

      // graphic.label.attr({
      //   text: config.displayValue,
      //   'text-anchor': POSITION_MIDDLE,
      //   'vertical-align': POSITION_MIDDLE,
      //   fill: style.color,
      //   direction: config.textDirection,
      //   'text-bound': [style.backgroundColor, style.borderColor,
      //     style.borderThickness, style.borderPadding,
      //     style.borderRadius, style.borderDash]
      // });

      // graphic.label
      //     .attr(attr);
      // Adjusting the chart label if goes out side the chart area
      // we try to keep the label inside viewport
      labelBBox = graphic.label.getBBox();
      if (labelBBox.x + chartConfig.marginLeft < 0) {
        labelWidth = labelBBox.width - chartConfig.marginLeft;
        if (chartConfig.width < labelWidth) {
          labelWidth = chartConfig.width - chartConfig.marginLeft;
        }
        attr = {
          x: labelWidth / 2
        };

        animationManager.setAnimation({
          el: graphic.label,
          attr: attr,
          component: dataSet,
          label: 'text'
        });

        // graphic.label.animateWith(dummyObj, animObj, attr, animationDuration, animType);
      }
    }
  };

  return LedDataset;
}(_bullet2['default']);

exports['default'] = LedDataset;

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.led': function initialDatasetLed() {
    var component = this,
        conf = component.config,
        chart = component.getFromEnv('chart'),
        chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasHeight = chartConfig.canvasHeight,
        canvasWidth = chartConfig.canvasWidth;
    return {
      'plotRect.appearing': function plotRectAppearing() {
        var attr,
            isAxisReverse = conf.isAxisReverse,
            isHorizontal = conf.isHorizontal;

        if (isAxisReverse && !isHorizontal) {
          attr = {
            y: canvasTop,
            height: canvasHeight
          };
        } else if (!isAxisReverse && !isHorizontal) {
          attr = {
            height: canvasHeight
          };
        } else if (!isAxisReverse && isHorizontal) {
          attr = {
            x: canvasLeft,
            width: canvasWidth
          };
        } else if (isAxisReverse && isHorizontal) {
          attr = {
            width: canvasWidth
          };
        }

        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: attr,
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'plotRect.updating': null,
      'text.appearing': function textAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'text.updating': null,
      'labelGroup.appearing': function labelGroupAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'labelGroup.updating': null,
      'plotBackground.appearing': function plotBackgroundAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'plotBackground.updating': null
    };
  }
};

/***/ }),

/***/ 741:
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

var _fusioncharts = __webpack_require__(352);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * Class for Hled chart
 * @class Hled
 * @extends {Vled}
 */
var Hled = function (_Vled) {
  _inherits(Hled, _Vled);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Hled.getName = function getName() {
    return 'Hled';
  };
  /**
  * Creates an instance of Hled.
  * @memberof Hled
  */


  function Hled() {
    _classCallCheck(this, Hled);

    var _this = _possibleConstructorReturn(this, _Vled.call(this));

    _this.defaultSeriesType = 'led';
    _this.defaultPlotShadow = 1;

    _this.realtimeEnabled = true;
    _this.chartleftmargin = 15;
    _this.chartrightmargin = 15;
    _this.charttopmargin = 10;
    _this.chartbottommargin = 10;
    _this.showTooltip = 0;
    _this.connectTickMarks = 0;
    _this.isHorizontal = true;
    _this.isAxisOpposite = false;
    return _this;
  }
  /**
   * Sets default configuration
   * @memberof Hled
   */


  Hled.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Vled.prototype.__setDefaultConfig && _Vled.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Vertical LED Gauge';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Hled.prototype.getName = function getName() {
    return 'Hled';
  };

  return Hled;
}(_fusioncharts2['default']);

exports['default'] = Hled;

/***/ }),

/***/ 742:
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

var _thermometer = __webpack_require__(743);

var _thermometer2 = _interopRequireDefault(_thermometer);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    gaugeFillColorStr = _lib.preDefStr.gaugeFillColorStr,
    gaugeBorderColorStr = _lib.preDefStr.gaugeBorderColorStr,
    convertColor = _lib.graphics.convertColor,
    getLightColor = _lib.graphics.getLightColor,
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
};

var Thermometer = function (_LinearGauge) {
  _inherits(Thermometer, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Thermometer.getName = function getName() {
    return 'Thermometer';
  };

  function Thermometer() {
    _classCallCheck(this, Thermometer);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.showRTvalue = false;
    _this.canvasPadding = false;
    _this.defaultPaletteOptions = (0, _lib.extend2)((0, _lib.extend2)({}, _lib.defaultGaugePaletteOptions), {
      gaugeBorderColor: ['545454', '60634E', '415D6F', '845001', '68001B'],
      gaugeFillColor: ['999999', 'ADB68F', 'A2C4C8', 'FDB548', 'FF7CA0'],
      periodColor: ['EEEEEE', 'ECEEE6', 'E6ECF0', 'FFF4E6', 'FFF2F5']
    }, false, true);

    _this.isHorizontal = false;
    _this.isAxisOpposite = true;
    _this.hasCanvas = true;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isAxisReverse = false;
    _this.isRealTime = true;
    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Thermometer.prototype.getName = function getName() {
    return 'Thermometer';
  };

  Thermometer.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Horizontal Linear Gauge';
    config.hasLegend = false;
    config.defaultDatasetType = 'thermometer';
    config.animationeffect = 'easeOut';
    config.skipCanvasDrawing = true;
  };

  Thermometer.prototype._getData = function _getData() {
    var iapi = this,
        dataset = iapi.getChildren('dataset');

    if (dataset && dataset[0]) {
      return dataset[0].config.value;
    }
  };

  // todo: this function need to be removed once the flow is proper


  Thermometer.prototype._parseSpecialConfig = function _parseSpecialConfig() {
    var iapi = this,
        chartConfig = iapi.config,
        dataObj = iapi.getFromEnv('dataSource'),
        chartOptions = dataObj.chart,
        numberFormatter = iapi.getFromEnv('number-formatter'),
        colorM = iapi.getFromEnv('color-manager'),
        gaugeBorderAlpha;

    chartConfig.use3DLighting = (0, _lib.pluckNumber)(chartOptions.use3dlighting, 1);
    chartConfig.thmOriginX = (0, _lib.pluckNumber)(chartOptions.thmoriginx, chartOptions.gaugeoriginx);
    chartConfig.thmOriginY = (0, _lib.pluckNumber)(chartOptions.thmoriginy, chartOptions.gaugeoriginy);
    chartConfig.thmBulbRadius = (0, _lib.pluckNumber)(numberFormatter.getCleanValue(chartOptions.thmbulbradius, true));
    chartConfig.thmHeight = (0, _lib.pluckNumber)(numberFormatter.getCleanValue((0, _lib.pluckNumber)(chartOptions.thmheight, chartOptions.gaugeheight), true));

    chartConfig.origW = (0, _lib.pluckNumber)(chartOptions.origw);
    chartConfig.origH = (0, _lib.pluckNumber)(chartOptions.origh);

    // set the falg whether the measurements are defined by user or not
    chartConfig.xDefined = defined(chartConfig.thmOriginX);
    chartConfig.yDefined = defined(chartConfig.thmOriginY);
    chartConfig.rDefined = defined(chartConfig.thmBulbRadius);
    chartConfig.hDefined = defined(chartConfig.thmHeight);

    chartConfig.gaugeFillColor = (0, _lib.pluck)(chartOptions.gaugefillcolor, chartOptions.thmfillcolor, colorM.getColor(gaugeFillColorStr));
    chartConfig.gaugeFillAlpha = (0, _lib.pluckNumber)(chartOptions.gaugefillalpha, chartOptions.thmfillalpha, _lib.HUNDREDSTRING);

    // Gauge Border properties
    chartConfig.showGaugeBorder = (0, _lib.pluckNumber)(chartOptions.showgaugeborder, 1);
    gaugeBorderAlpha = chartConfig.showGaugeBorder ? (0, _lib.pluckNumber)(chartOptions.gaugeborderalpha, 40) : 0;
    // We are using 40 for default alpha of Thermometer Gauge Border
    chartConfig.gaugeBorderColor = convertColor((0, _lib.pluck)(chartOptions.gaugebordercolor, colorM.getColor(gaugeBorderColorStr)), gaugeBorderAlpha);
    chartConfig.gaugeBorderThickness = (0, _lib.pluckNumber)(chartOptions.gaugeborderthickness, 1);

    // Thermometer Glass color
    chartConfig.gaugeContainerColor = (0, _lib.pluck)(chartOptions.thmglasscolor, getLightColor(chartConfig.gaugeFillColor, 30));
  };

  Thermometer.prototype.allocatePosition = function allocatePosition() {
    var iapi = this,
        chartConfig = iapi.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasRight = chartConfig.canvasRight,
        canvasTop = chartConfig.canvasTop,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        canvasBottom = chartConfig.canvasBottom;

    // Setting macros for annotation
    chartConfig.gaugeStartX = canvasLeft;
    chartConfig.gaugeEndX = canvasRight;
    chartConfig.gaugeStartY = canvasTop;
    chartConfig.gaugeEndY = canvasBottom;
    chartConfig.gaugeCenterX = canvasLeft + canvasWidth * 0.5;
    chartConfig.gaugeCenterY = canvasTop + canvasHeight * 0.5;
    chartConfig.gaugeRadius = canvasWidth * 0.5;
  };

  Thermometer.prototype.getDSdef = function getDSdef() {
    return _thermometer2['default'];
  };

  return Thermometer;
}(_fusioncharts2['default']);

exports['default'] = Thermometer;

/***/ }),

/***/ 743:
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

var _dependencyManager = __webpack_require__(6);

var _thermometerAnimation = __webpack_require__(744);

var _thermometerAnimation2 = _interopRequireDefault(_thermometerAnimation);

var _cylinderthermometerbase = __webpack_require__(353);

var _cylinderthermometerbase2 = _interopRequireDefault(_cylinderthermometerbase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    configStr = _lib.preDefStr.configStr,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    EVENTARGS = 'eventArgs',
    topLightGlowAlphaStr = '40,0',
    topLightGlowRatioStr = '0,80',
    topLightGlowRStr = '70%',
    bulbBorderLightRStr = '50%',
    bulbBorderLightAlphaStr = '0,50',
    bulbBorderLightRatioStr = '78,30',
    bulbTopLightAlphaStr = '60,0',
    bulbTopLightRatioStr = '0,30',
    bulbCenterLightAlphaStr = '80,0',
    bulbCenterLightRatioStr = '0,70',
    cylLeftLightAlphaStr = '50,0',
    cylLeftLightRatioStr = '0,80',
    cylRightLightAlphaStr = '50,0,0',
    cylRightLightRatioStr = '0,40,60',
    HUNDREDPERCENT = '100%',
    zeroCommaHundredStr = '0,100',
    M = 'M',
    A = 'A',
    L = 'L',
    Z = 'Z',
    cos50 = 0.643,
    sin50 = 0.766,
    win = window,
    userAgent = win.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !win.opera,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    getScaleFactor = function getScaleFactor(origW, origH, canvasWidth, canvasHeight) {
  var scaleFactor;
  origH = (0, _lib.pluckNumber)(origH, canvasHeight);
  origW = (0, _lib.pluckNumber)(origW, canvasWidth);
  if (!origH || !origW) {
    scaleFactor = 1;
  } else if (origW / canvasWidth == origH / canvasHeight) {
    // Now, if the ratio of original width,height & stage width,height are same
    // In this case, the transformation value would be the same, as the ratio
    // of transformation of width and height is same.
    scaleFactor = canvasWidth / origW;
  } else {
    // If the transformation factors are different, we do a constrained scaling
    // We get the aspect whose delta is on the lower side.
    scaleFactor = Math.min(canvasWidth / origW, canvasHeight / origH);
  }

  return scaleFactor;
},
    isValidValue = function isValidValue(value, axisMin, axisMax) {
  var val = (0, _lib.pluckNumber)(value, 0),
      min = (0, _lib.pluckNumber)(axisMin, 0),
      max = (0, _lib.pluckNumber)(axisMax, 1);
  if (val >= min && val <= max) {
    return val;
  } else return min;
};
(0, _dependencyManager.addDep)({
  name: 'thermometerAnimation',
  type: 'animationRule',
  extension: _thermometerAnimation2['default']
});
/**
 * Creates ThermometerDataset class
 */

var ThermometerDataset = function (_CylinderThermometerB) {
  _inherits(ThermometerDataset, _CylinderThermometerB);

  /**
   * Constructor function for ThermometerDataset class
   */
  function ThermometerDataset() {
    _classCallCheck(this, ThermometerDataset);

    var _this = _possibleConstructorReturn(this, _CylinderThermometerB.call(this));

    _this.addData = function () {
      // Blank fn to Override it's parent method
    };
    _this.removeData = function () {
      // Blank fn to Override it's parent method
    };
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ThermometerDataset.prototype.getName = function getName() {
    return 'thermometer';
  };

  /**
   * Returns the type of the component
   * @return {string} The type of the component, in this case a dataset.
   */


  ThermometerDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Manage space taken by plot
   * @return {Object} returns dimension taken by plot (top, right, left, bottom)
   */


  ThermometerDataset.prototype._manageSpace = function _manageSpace() {
    var ds = this,
        chart = ds.getFromEnv('chart'),
        chartConfig = chart.config,
        chartWidth = chartConfig.width,
        chartHeight = chartConfig.height,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        canvasLeft = chartConfig.canvasLeft,
        canvasRight = chartConfig.canvasRight,
        canvasTop = chartConfig.canvasTop,
        xDefined = chartConfig.xDefined,
        yDefined = chartConfig.yDefined,
        rDefined = chartConfig.rDefined,
        hDefined = chartConfig.hDefined,
        thmOriginX = chartConfig.thmOriginX,
        thmOriginY = chartConfig.thmOriginY,
        thmBulbRadius = chartConfig.thmBulbRadius,
        thmHeight = chartConfig.thmHeight,
        scaleFactor = getScaleFactor(chartConfig.origW, chartConfig.origH, chartWidth, chartHeight),
        top = 0,
        bottom = 0,
        left = 0,
        right = 0,
        thmCylenderRight,
        thmhalfWidth,
        centerPos,
        thmWidth,
        bulbHeight,
        measure,
        canvasLeftShift;

    // manage the space for the datalabels

    measure = ds._getLabelSpace();
    // canvasBottom += measure;
    canvasHeight -= measure;
    bottom += measure;

    // manage the thermometer space

    /* First calculate the radius */

    // if Not defined the radius then calculate it.
    if (!rDefined) {
      thmBulbRadius = Math.min(canvasWidth / 2, (0, _lib.pluckNumber)(thmHeight, canvasHeight) * 0.13);
      rDefined = true;
    } else {
      thmBulbRadius = thmBulbRadius * scaleFactor;
    }

    // store the effective radius
    chartConfig.effectiveR = thmBulbRadius;

    // bulbDiameter = thmBulbRadius * 2;
    thmhalfWidth = thmBulbRadius * cos50;
    thmWidth = 2 * thmhalfWidth;
    bulbHeight = thmBulbRadius * (1 + sin50);

    // add the space for the top glass effect
    top += thmhalfWidth;
    canvasTop += thmhalfWidth;
    canvasHeight -= thmhalfWidth;
    /* Calculate the x */

    // if x is user defined
    if (xDefined) {
      thmOriginX = thmOriginX * scaleFactor;
      canvasLeftShift = thmOriginX - thmhalfWidth - canvasLeft;
    } else {
      // else, place the gauge at the center
      centerPos = (canvasRight - canvasLeft) / 2;
      // now as per the center position calculate the extra left gap
      canvasLeftShift = centerPos - thmhalfWidth;
      // check whether we have space to put the gauge at center
      thmCylenderRight = canvasLeftShift + thmWidth;
      if (thmCylenderRight > canvasWidth) {
        canvasLeftShift = canvasWidth - thmWidth;
      }
    }
    left += canvasLeftShift;
    canvasLeft += canvasLeftShift;
    canvasWidth -= canvasLeftShift;

    // to make the canvas width same as thermometer's cylinder width increase the right padding
    right += canvasWidth - thmWidth;

    if (yDefined) {
      thmOriginY = thmOriginY * scaleFactor;
    }

    if (!hDefined) {
      // if height is not defined
      if (yDefined) {
        // if y is defined then adjust thermometer height is available space
        thmHeight = thmOriginY - canvasTop;
      } else {
        thmHeight = Math.max(canvasHeight - bulbHeight, 3 * thmBulbRadius);
        thmOriginY = canvasTop + thmHeight;
      }
    } else {
      // height is defined
      thmHeight = thmHeight * scaleFactor;
      if (yDefined) {
        // if both are defined, adjust the top to accomodate this
        top += thmOriginY - thmHeight - canvasTop;
      } else {
        thmOriginY = canvasTop + thmHeight;
      }
    }
    // finally adjust the bottom to accomodate y and height
    bottom += canvasTop + canvasHeight - thmOriginY;

    return {
      top: top,
      bottom: bottom,
      left: left,
      right: right
    };
  };
  /**
   * Draws plot
   * @memberof ThermometerDataset
   */


  ThermometerDataset.prototype.draw = function draw() {
    var dataSet = this,
        dsConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),
        trackerLayer = chart.getChildContainer('trackerGroup'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        scale = dataSet.getFromEnv('scale'),
        parentContainer = chart.getChildContainer().plotGroup,
        chartConfig = chart.get(configStr),
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasHeight = chartConfig.canvasHeight,
        r = chartConfig.effectiveR || 10,
        cylinderWidthHalf = r * cos50,
        use3DLighting = chartConfig.use3DLighting,
        x = canvasLeft + cylinderWidthHalf,
        y = canvasTop - cylinderWidthHalf,
        h = canvasHeight,
        scaleTop = cylinderWidthHalf,
        bulbCenterDistance = r * sin50,
        scaleY = y + scaleTop,
        y1 = scaleY + h,
        y2 = y1 + bulbCenterDistance,
        value = isValidValue(dsConfig.value, scale.getLimit().min, scale.getLimit().max),
        thmPos = scale.getPixel(value),
        topRoundR = cylinderWidthHalf * 0.33,
        y4 = y + topRoundR,
        y6 = thmPos,
        lCylWidthHalf = cylinderWidthHalf * 0.9,
        topRoundRDistance = cylinderWidthHalf - topRoundR,
        lR = r + lCylWidthHalf - cylinderWidthHalf,
        x1 = x - cylinderWidthHalf,
        x2 = x + cylinderWidthHalf,
        x3 = x - topRoundRDistance,
        x4 = x + topRoundRDistance,
        lx1 = x - lCylWidthHalf,
        lx2 = x + lCylWidthHalf,
        l1Distance = cylinderWidthHalf * 0.6,
        l1x = parseInt(x - l1Distance, 10),
        l2x = x + cylinderWidthHalf / 2,
        ly = dsConfig.thmBaseY = y2 - Math.abs(Math.sqrt(lR * lR - lCylWidthHalf * lCylWidthHalf)),
        containerDummy = dataSet.getContainer('container'),
        fluidDummy = dataSet.getGraphicalElement('fluid'),
        topLightGlowDummy = dataSet.getGraphicalElement('topLightGlow'),
        topLightDummy = dataSet.getGraphicalElement('topLight'),
        labelDummy = dataSet.getGraphicalElement('label'),
        label,
        container,
        fluid,
        topLightGlow,
        topLight,
        dataLabelContainerDummy = dataSet.getContainer('dataLabelContainer'),
        canvasBorderElementDummy = dataSet.getGraphicalElement('canvasBorderElement'),
        bulbBorderLightDummy = dataSet.getGraphicalElement('bulbBorderLight'),
        bulbTopLightDummy = dataSet.getGraphicalElement('bulbTopLight'),
        bulbCenterLightDummy = dataSet.getGraphicalElement('bulbCenterLight'),
        trackerContainerDummy = dataSet.getContainer('trackerContainer'),
        cylLeftLightDummy = dataSet.getGraphicalElement('cylLeftLight'),
        cylRightLightDummy = dataSet.getGraphicalElement('cylRightLight'),
        cylLeftLight1Dummy = dataSet.getGraphicalElement('cylLeftLight1'),
        cylRightLight1Dummy = dataSet.getGraphicalElement('cylRightLight1'),
        hotElementDummy = dataSet.getGraphicalElement('hotElement'),
        dataLabelContainer,
        canvasBorderElement,
        bulbBorderLight,
        bulbTopLight,
        bulbCenterLight,
        trackerContainer,
        cylLeftLight,
        cylRightLight,
        cylLeftLight1,
        cylRightLight1,
        hotElement,
        gaugeFillColor = getDarkColor(dsConfig.gaugeFillColor, use3DLighting ? 70 : 80),
        gaugeFillAlpha = dsConfig.gaugeFillAlpha,
        conColor = dsConfig.gaugeContainerColor,
        darkConColor = getDarkColor(conColor, 80),
        lightConColor = getLightColor(conColor, 80),
        gaugeBorderThickness = dsConfig.gaugeBorderThickness,
        gaugeBorderColor = dsConfig.gaugeBorderColor,
        thPath,
        bulbPathType1,
        showHoverEffect = dsConfig.showHoverEffect,
        plotFillHoverAlpha = dsConfig.plotFillHoverAlpha,
        plotFillHoverColor = dsConfig.plotFillHoverColor,
        animationManager = dataSet.getFromEnv('animationManager'),
        eventArgs,
        style = chart.config.dataLabelStyle,
        canvasBorderElementAttr,
        topLightAttr,
        hotElementAttr,
        topLightGlowAttr,
        bulbBorderLightAttr,
        bulbTopLightAttr,
        bulbCenterLightAttr,
        cylLeftLightAttr,
        cylRightLightAttr,
        cylLeftLight1Attr,
        cylRightLight1Attr,
        hideElemAnimArr = [],
        hideFn = function hideFn() {
      this.hide();
    },
        hideAnimFn = function hideAnimFn() {
      var i = 0;
      for (; i < hideElemAnimArr.length; i++) {
        hideElemAnimArr[i] && animationManager.setAnimation({
          el: hideElemAnimArr[i],
          attr: {
            opacity: 0
          },
          component: dataSet,
          callback: hideFn
        });
      }
    },
        fluidAttr = dsConfig.fluidAttr;

    if (!fluidAttr) {
      fluidAttr = dsConfig.fluidAttr = {};
    }

    if (showHoverEffect) {
      fluidAttr.hover = {
        fill: (0, _lib.convertColor)(getDarkColor(plotFillHoverColor, use3DLighting ? 70 : 80), plotFillHoverAlpha)
      };
    }

    fluidAttr.out = {
      fill: (0, _lib.convertColor)(gaugeFillColor, gaugeFillAlpha)
    };

    thPath = [M, x3, y, A, topRoundR, topRoundR, 0, 0, 0, x1, y4, L, x1, y1, A, r, r, 0, 1, 0, x2, y1, L, x2, y4, A, topRoundR, topRoundR, 0, 0, 0, x4, y, Z];

    eventArgs = {
      value: dsConfig.value,
      displayValue: dsConfig.displayValue,
      toolText: dsConfig.toolText
    };

    fluidAttr.out.path = [M, lx1, ly, A, lR, lR, 0, 1, 0, lx2, ly, L, lx2, y6, lx1, y6, Z];
    fluidAttr.out['stroke-width'] = 0;

    canvasBorderElementAttr = {
      'stroke-width': gaugeBorderThickness,
      stroke: gaugeBorderColor,
      path: thPath
    };

    topLightAttr = {
      path: [M, lx1, scaleY, L, lx2, scaleY],
      stroke: (0, _lib.convertColor)(gaugeFillColor, 40)
    };

    hotElementAttr = {
      path: thPath
    };

    container = animationManager.setAnimation({
      el: containerDummy || 'group',
      attr: {
        name: 'thermometer'
      },
      container: parentContainer,
      component: dataSet,
      dom: 'group'
    });

    canvasBorderElement = animationManager.setAnimation({
      el: canvasBorderElementDummy || 'path',
      attr: canvasBorderElementAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });

    fluid = animationManager.setAnimation({
      el: fluidDummy || 'path',
      attr: fluidAttr.out,
      container: container,
      component: dataSet,
      label: 'plot'
    });

    topLight = animationManager.setAnimation({
      el: topLightDummy || 'path',
      attr: topLightAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });

    if (use3DLighting) {
      topLightGlowAttr = {
        path: [M, lx1, scaleY, L, lx2, scaleY, lx2, y4, lx1, y4, Z],
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: gaugeFillColor + _lib.COMMASTRING + gaugeFillColor,
            alpha: topLightGlowAlphaStr,
            ratio: topLightGlowRatioStr,
            radialGradient: true,
            cx: 0.5,
            cy: 1,
            r: topLightGlowRStr
          }
        })
      };

      topLightGlow = animationManager.setAnimation({
        el: topLightGlowDummy || 'path',
        attr: topLightGlowAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      // draw the light effect for the bulb
      bulbPathType1 = [M, x1, y1, A, r, r, 0, 0, 1, x2, y1, A, r, r, 0, 0, 0, x1, y1, A, r, r, 0, 1, 0, x2, y1, Z];

      bulbBorderLightAttr = {
        path: bulbPathType1,
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            cx: 0.5,
            cy: 0.5,
            r: bulbBorderLightRStr,
            color: darkConColor + _lib.COMMASTRING + lightConColor,
            alpha: bulbBorderLightAlphaStr,
            ratio: bulbBorderLightRatioStr,
            radialGradient: true
          }
        })
      };

      bulbBorderLight = animationManager.setAnimation({
        el: bulbBorderLightDummy || 'path',
        attr: bulbBorderLightAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      bulbTopLightAttr = {
        path: bulbPathType1,
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            cx: 0.3,
            cy: 0.1,
            r: HUNDREDPERCENT,
            color: lightConColor + _lib.COMMASTRING + darkConColor,
            alpha: bulbTopLightAlphaStr,
            ratio: bulbTopLightRatioStr,
            radialGradient: true
          }
        })
      };

      bulbTopLight = animationManager.setAnimation({
        el: bulbTopLightDummy || 'path',
        attr: bulbTopLightAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      bulbCenterLightAttr = {
        path: bulbPathType1,
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            cx: 0.25,
            cy: 0.7,
            r: HUNDREDPERCENT,
            color: lightConColor + _lib.COMMASTRING + darkConColor,
            alpha: bulbCenterLightAlphaStr,
            ratio: bulbCenterLightRatioStr,
            radialGradient: true
          }
        })
      };

      bulbCenterLight = animationManager.setAnimation({
        el: bulbCenterLightDummy || 'path',
        attr: bulbCenterLightAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      cylLeftLightAttr = {
        path: [M, x, y, L, x3, y, A, topRoundR, topRoundR, 0, 0, 0, x1, y4, L, x1, y1, x, y1, Z],
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: lightConColor + _lib.COMMASTRING + darkConColor,
            alpha: cylLeftLightAlphaStr,
            ratio: cylLeftLightRatioStr,
            angle: 0
          }
        })
      };

      cylLeftLight = animationManager.setAnimation({
        el: cylLeftLightDummy || 'path',
        attr: cylLeftLightAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      cylRightLightAttr = {
        path: [M, x1, y, L, x4, y, A, topRoundR, topRoundR, 0, 0, 1, x2, y4, L, x2, y1, x1, y1, Z],
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor,
            alpha: cylRightLightAlphaStr,
            ratio: cylRightLightRatioStr,
            angle: 180
          }
        })
      };

      cylRightLight = animationManager.setAnimation({
        el: cylRightLightDummy || 'path',
        attr: cylRightLightAttr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      cylLeftLight1Attr = {
        path: [M, l1x, y4, L, x1, y4, x1, y1, l1x, y1, Z],
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: lightConColor + _lib.COMMASTRING + darkConColor,
            alpha: bulbTopLightAlphaStr,
            ratio: zeroCommaHundredStr,
            angle: 180
          }
        })
      };

      cylLeftLight1 = animationManager.setAnimation({
        el: cylLeftLight1Dummy || 'path',
        attr: cylLeftLight1Attr,
        container: container,
        component: dataSet,
        dom: 'path'
      });

      cylRightLight1Attr = {
        path: [M, l1x - 0.01, y4, L, l2x, y4, l2x, y1, l1x - 0.01, y1, Z],
        'stroke-width': 0,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: lightConColor + _lib.COMMASTRING + darkConColor,
            alpha: bulbTopLightAlphaStr,
            ratio: zeroCommaHundredStr,
            angle: 0
          }
        })
      };

      cylRightLight1 = animationManager.setAnimation({
        el: cylRightLight1Dummy || 'path',
        attr: cylRightLight1Attr,
        container: container,
        component: dataSet,
        dom: 'path'
      });
    } else {
      hideElemAnimArr = [];
      hideElemAnimArr.push(topLightGlow);
      hideElemAnimArr.push(bulbBorderLight);
      hideElemAnimArr.push(bulbTopLight);
      hideElemAnimArr.push(bulbCenterLight);
      hideElemAnimArr.push(cylLeftLight);
      hideElemAnimArr.push(cylRightLight);
      hideElemAnimArr.push(cylLeftLight1);
      hideElemAnimArr.push(cylRightLight1);
      hideAnimFn();
    }

    trackerContainer = animationManager.setAnimation({
      el: trackerContainerDummy || 'group',
      attr: {
        name: 'col-hot'
      },
      container: trackerLayer,
      component: dataSet,
      dom: 'group'
    });

    hotElementAttr.stroke = hotElementAttr.fill = TRACKER_FILL;
    hotElementAttr.ishot = true;
    hotElement = animationManager.setAnimation({
      el: hotElementDummy || 'path',
      attr: hotElementAttr,
      container: trackerContainer,
      component: dataSet,
      dom: 'path'
    });

    hotElement.click(function (setDataArr) {
      var ele = this;
      _lib.plotEventHandler.call(ele, chart, setDataArr);
    }).hover(function (data) {
      var ele = this;
      if (dsConfig.showHoverEffect) {
        dataSet.getGraphicalElement('fluid') && dataSet.getGraphicalElement('fluid').attr(fluidAttr.hover);
      }
      _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
    }, function (data) {
      var ele = this;
      if (dsConfig.showHoverEffect) {
        dataSet.getGraphicalElement('fluid') && dataSet.getGraphicalElement('fluid').attr(fluidAttr.out);
      }
      _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
    });

    if (!containerDummy) {
      dataSet.addContainer('container', container);
      dataSet.addContainer('trackerContainer', trackerContainer);
      dataSet.addGraphicalElement('canvasBorderElement', canvasBorderElement);
      dataSet.addGraphicalElement('fluid', fluid);
      dataSet.addGraphicalElement('topLight', topLight);
      dataSet.addGraphicalElement('topLightGlow', topLightGlow);
      dataSet.addGraphicalElement('bulbBorderLight', bulbBorderLight);
      dataSet.addGraphicalElement('bulbTopLight', bulbTopLight);
      dataSet.addGraphicalElement('bulbCenterLight', bulbCenterLight);
      dataSet.addGraphicalElement('cylLeftLight', cylLeftLight);
      dataSet.addGraphicalElement('cylRightLight', cylRightLight);
      dataSet.addGraphicalElement('cylLeftLight1', cylLeftLight1);
      dataSet.addGraphicalElement('cylRightLight1', cylRightLight1);
      dataSet.addGraphicalElement('hotElement', hotElement);
    }
    if (!dsConfig.toolText) {
      toolTipController.disableToolTip(hotElement);
    } else {
      toolTipController.enableToolTip(hotElement, dsConfig.toolText);
    }
    hotElement.data(EVENTARGS, eventArgs);

    dataLabelContainer = animationManager.setAnimation({
      el: dataLabelContainerDummy || 'group',
      attr: {
        name: 'datalabel'
      },
      container: dataLabelsLayer,
      component: dataSet,
      label: 'labelGroup'
    });

    if (!dataLabelContainerDummy) {
      dataSet.addContainer('dataLabelContainer', dataLabelContainer);
    }
    if (dsConfig.showValue) {
      label = animationManager.setAnimation({
        el: labelDummy || 'text',
        attr: {
          text: dsConfig.displayValue,
          x: x,
          y: y2 + r + (dsConfig.valuePadding || 0),
          'text-anchor': POSITION_MIDDLE,
          'vertical-align': POSITION_TOP,
          fill: style.color,
          'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
        },
        container: dataLabelContainer,
        component: dataSet,
        dom: 'text'
      });

      if (!labelDummy) {
        dataSet.addGraphicalElement('label', label);
      }
      label.show();
    }
  };

  return ThermometerDataset;
}(_cylinderthermometerbase2['default']);

exports['default'] = ThermometerDataset;

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.thermometer': function initialDatasetThermometer() {
    var component = this,
        conf = component.config;
    return {
      'plot.appearing': function plotAppearing(input) {
        var pathArr = input.attr.path.slice(0);
        pathArr[13] = pathArr[15] = conf.thmBaseY;
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: {
            path: pathArr
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'plot.updating': null,
      'text.appearing': function textAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'text.updating': null,
      'labelGroup.appearing': function labelGroupAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'labelGroup.updating': null,
      'path.appearing': function pathAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'path.updating': null
    };
  }
};

/***/ }),

/***/ 745:
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

var _fusioncharts = __webpack_require__(92);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cylinder = __webpack_require__(746);

var _cylinder2 = _interopRequireDefault(_cylinder);

var _vledDataset = __webpack_require__(91);

var _vledDataset2 = _interopRequireDefault(_vledDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

var getLightColor = _lib.graphics.getLightColor,
    convertColor = _lib.graphics.convertColor,
    colorStrings = _lib.preDefStr.colors,
    COLOR_FFFFFF = colorStrings.FFFFFF,
    gaugeFillColorStr = _lib.preDefStr.gaugeFillColorStr,
    gaugeBorderColorStr = _lib.preDefStr.gaugeBorderColorStr,
    UNDEFINED,
    defined = function defined(obj) {
  return obj !== UNDEFINED && obj !== null;
};
/**
 * Class for cylinder chart
 * @class Cylinder
 * @extends {Thermometer}
 */

var Cylinder = function (_LinearGauge) {
  _inherits(Cylinder, _LinearGauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Cylinder.getName = function getName() {
    return 'Cylinder';
  };
  /**
   * Creates an instance of Cylinder.
   * @memberof Cylinder
   */


  function Cylinder() {
    _classCallCheck(this, Cylinder);

    var _this = _possibleConstructorReturn(this, _LinearGauge.call(this));

    _this.defaultPaletteOptions = (0, _lib.extend2)((0, _lib.extend2)({}, _lib.defaultGaugePaletteOptions), {
      gaugeBorderColor: ['545454', '60634E', '415D6F', '845001', '68001B'],
      gaugeFillColor: ['CCCCCC', 'ADB68F', 'E1F5FF', 'FDB548', 'FF7CA0'],
      periodColor: ['EEEEEE', 'ECEEE6', 'E6ECF0', 'FFF4E6', 'FFF2F5']
    }, false, true);
    _this.glasscolor = COLOR_FFFFFF;
    _this.showRTvalue = false;
    _this.canvasPadding = false;
    _this.isHorizontal = false;
    _this.isAxisOpposite = true;
    _this.hasCanvas = true;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isAxisReverse = false;
    _this.isRealTime = true;
    _this.registerFactory('dataset', _vledDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Cylinder.prototype.getName = function getName() {
    return 'Cylinder';
  };
  /**
   * Sets default configuration
   * @memberof Cylinder
   */


  Cylinder.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _LinearGauge.prototype.__setDefaultConfig && _LinearGauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'cylinder';
    config.hasLegend = false;
    config.skipCanvasDrawing = true;
  };
  /**
   * To parse special configuration
   * @memberof Cylinder
   */


  Cylinder.prototype._parseSpecialConfig = function _parseSpecialConfig() {
    var iapi = this,
        chartConfig = iapi.config,
        dataObj = iapi.getFromEnv('dataSource'),
        chartOptions = dataObj.chart,
        numberFormatter = iapi.getFromEnv('number-formatter'),
        colorM = iapi.getFromEnv('color-manager'),
        gaugeBorderAlpha;

    chartConfig.use3DLighting = (0, _lib.pluckNumber)(chartOptions.use3dlighting, 1);
    chartConfig.gaugeOriginX = (0, _lib.pluckNumber)(chartOptions.thmoriginx, chartOptions.cyloriginx, chartOptions.gaugeoriginx);
    chartConfig.gaugeOriginY = (0, _lib.pluckNumber)(chartOptions.thmoriginy, chartOptions.cyloriginy, chartOptions.gaugeoriginy);
    chartConfig.gaugeRadius = (0, _lib.pluckNumber)(numberFormatter.getCleanValue((0, _lib.pluckNumber)(chartOptions.thmbulbradius, chartOptions.cylradius, chartOptions.gaugeradius), true));
    chartConfig.gaugeHeight = (0, _lib.pluckNumber)(numberFormatter.getCleanValue((0, _lib.pluckNumber)(chartOptions.thmheight, chartOptions.cylheight, chartOptions.gaugeheight), true));

    chartConfig.origW = (0, _lib.pluckNumber)(chartOptions.origw);
    chartConfig.origH = (0, _lib.pluckNumber)(chartOptions.origh);

    // set the falg whether the measurements are defined by user or not
    chartConfig.xDefined = defined(chartConfig.gaugeOriginX);
    chartConfig.yDefined = defined(chartConfig.gaugeOriginY);
    chartConfig.rDefined = defined(chartConfig.gaugeRadius);
    chartConfig.hDefined = defined(chartConfig.gaugeHeight);

    chartConfig.gaugeFillColor = (0, _lib.pluck)(chartOptions.gaugefillcolor, chartOptions.cylfillcolor, colorM.getColor(gaugeFillColorStr));
    chartConfig.gaugeFillAlpha = (0, _lib.pluckNumber)(chartOptions.gaugefillalpha, chartOptions.cylfillalpha, _lib.HUNDREDSTRING);

    chartConfig.gaugeYScale = (0, _lib.pluckNumber)(chartOptions.cylyscale, chartOptions.gaugeyscale, 30);

    if (chartConfig.gaugeYScale > 50 || chartConfig.gaugeYScale < 0) {
      chartConfig.gaugeYScale = 30;
    }
    chartConfig.gaugeYScale = chartConfig.gaugeYScale / 100;

    // Gauge Border properties
    chartConfig.showGaugeBorder = (0, _lib.pluckNumber)(chartOptions.showgaugeborder, 1);
    gaugeBorderAlpha = chartConfig.showGaugeBorder ? (0, _lib.pluckNumber)(chartOptions.gaugeborderalpha, 40) : 0;
    // We are using 40 for default alpha of cylender Gauge Border
    chartConfig.gaugeBorderColor = convertColor((0, _lib.pluck)(chartOptions.gaugebordercolor, colorM.getColor(gaugeBorderColorStr)), gaugeBorderAlpha);
    chartConfig.gaugeBorderThickness = (0, _lib.pluckNumber)(chartOptions.gaugeborderthickness, 1);

    // Thermometer Glass color
    chartConfig.gaugeContainerColor = (0, _lib.pluck)(chartOptions.cylglasscolor, getLightColor(chartConfig.gaugeFillColor, 30));
  };
  /**
   * Fucntion that returns dataset
   * @return {Object} dataset
   * @memberof Cylinder
   */


  Cylinder.prototype.getDSdef = function getDSdef() {
    return _cylinder2['default'];
  };

  return Cylinder;
}(_fusioncharts2['default']);

exports['default'] = Cylinder;

/***/ }),

/***/ 746:
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

var _cylinderthermometerbase = __webpack_require__(353);

var _cylinderthermometerbase2 = _interopRequireDefault(_cylinderthermometerbase);

var _dependencyManager = __webpack_require__(6);

var _cylinderAnimation = __webpack_require__(747);

var _cylinderAnimation2 = _interopRequireDefault(_cylinderAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var A = 'A',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    convertColor = _lib.graphics.convertColor,
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    getDarkColor = _lib.graphics.getDarkColor,
    win = window,
    userAgent = win.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !win.opera,
    Z = 'Z',
    HUNDREDPERCENT = '100%',
    zeroCommaHundredStr = '0,100',
    topLightGlowAlphaStr = '40,0',
    btnBorderLightAlphaStr = '50,50,50,50,50,70,50,50',
    btnBorderLightRatioStr = '0,15,0,12,0,15,43,15',
    backAlphaStr = '30,30,30,30,30,30,30,30',
    backRatioStr = '0,15,43,15,0,12,0,15',
    frontRatioStr = '0,15,0,12,0,15,43,15',
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    M = 'M',
    L = 'L',
    EVENTARGS = 'eventArgs',
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    getLightColor = _lib.graphics.getLightColor,
    getScaleFactor = function getScaleFactor(origW, origH, canvasWidth, canvasHeight) {
  var scaleFactor;
  origH = (0, _lib.pluckNumber)(origH, canvasHeight);
  origW = (0, _lib.pluckNumber)(origW, canvasWidth);
  if (!origH || !origW) {
    scaleFactor = 1;
  } else if (origW / canvasWidth == origH / canvasHeight) {
    // Now, if the ratio of original width,height & stage width,height are same
    // In this case, the transformation value would be the same, as the ratio
    // of transformation of width and height is same.
    scaleFactor = canvasWidth / origW;
  } else {
    // If the transformation factors are different, we do a constrained scaling
    // We get the aspect whose delta is on the lower side.
    scaleFactor = Math.min(canvasWidth / origW, canvasHeight / origH);
  }

  return scaleFactor;
},
    isValidValue = function isValidValue(value, axisMin, axisMax) {
  var val = (0, _lib.pluckNumber)(value, 0),
      min = (0, _lib.pluckNumber)(axisMin, 0),
      max = (0, _lib.pluckNumber)(axisMax, 1);
  if (val >= min && val <= max) {
    return val;
  } else return min;
};
(0, _dependencyManager.addDep)({
  name: 'cylinderAnimation',
  type: 'animationRule',
  extension: _cylinderAnimation2['default']
});
/**
 * Creates dataset class for Cylinder
 */

var CylinderDataset = function (_CylinderThermometerB) {
  _inherits(CylinderDataset, _CylinderThermometerB);

  function CylinderDataset() {
    _classCallCheck(this, CylinderDataset);

    return _possibleConstructorReturn(this, _CylinderThermometerB.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  CylinderDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  CylinderDataset.prototype.getName = function getName() {
    return 'cylinder';
  };
  /**
   * Calculates space management of cylinder plot
   * @return {Object} dimension(top, bottom, left, right) needed for cylinder plot
   */


  CylinderDataset.prototype._manageSpace = function _manageSpace() {
    var ds = this,
        chart = ds.getFromEnv('chart'),
        chartConfig = chart.config,
        chartWidth = chartConfig.width,
        chartHwight = chartConfig.height,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasRight = chartConfig.canvasRight,
        xDefined = chartConfig.xDefined,
        yDefined = chartConfig.yDefined,
        rDefined = chartConfig.rDefined,
        hDefined = chartConfig.hDefined,
        gaugeOriginX = chartConfig.gaugeOriginX,
        gaugeOriginY = chartConfig.gaugeOriginY,
        gaugeRadius = chartConfig.gaugeRadius,
        gaugeHeight = chartConfig.gaugeHeight,
        gaugeYScale = chartConfig.gaugeYScale,
        scaleFactor = getScaleFactor(chartConfig.origW, chartConfig.origH, chartWidth, chartHwight),
        top = 0,
        bottom = 0,
        left = 0,
        right = 0,
        gaugeRight,
        centerPos,
        gaugeDiameter,
        gaugeYfactor,
        measure,
        canvasLeftShift;

    // manage the space for the datalabels

    measure = ds._getLabelSpace();
    canvasHeight -= measure;
    bottom += measure;

    // lightX = r * 0.85,
    //  x5 = x - lightX,
    //  x6 = x + lightX,
    //  lightY = Math.sqrt((1 - ((lightX * lightX) / (r * r))) * r2 * r2),

    // manage the thermometer space

    /* First calculate the radius */

    // if Not defined the radius then calculate it.
    if (!rDefined) {
      gaugeRadius = mathMax(mathMin(canvasWidth, canvasHeight * 1.2) / 2, 5);
    } else {
      gaugeRadius = gaugeRadius * scaleFactor;
    }

    // store the effective radius
    chartConfig.effectiveR = gaugeRadius;
    gaugeDiameter = gaugeRadius * 2;
    gaugeYfactor = gaugeRadius * gaugeYScale;

    top += gaugeYfactor;
    canvasTop += gaugeYfactor;
    bottom += gaugeYfactor;
    canvasHeight -= 2 * gaugeYfactor;

    /* Calculate the x */

    // if x is user defined
    if (xDefined) {
      gaugeOriginX = gaugeOriginX * scaleFactor;
      canvasLeftShift = gaugeOriginX - gaugeRadius - canvasLeft;
    } else {
      // else, place the gauge at the center
      centerPos = (canvasRight - canvasLeft) / 2;
      // now as per the center position calculate the extra left gap
      canvasLeftShift = centerPos - gaugeRadius;
      // check whether we have space to put the gauge at center
      gaugeRight = canvasLeftShift + gaugeDiameter;
      if (gaugeRight > canvasWidth) {
        canvasLeftShift = canvasWidth - gaugeDiameter;
      }
    }
    left += canvasLeftShift;
    canvasLeft += canvasLeftShift;
    canvasWidth -= canvasLeftShift;

    // to make the canvas width same as gauge's cylinder width increase the right padding
    right += canvasWidth - gaugeDiameter;

    if (yDefined) {
      gaugeOriginY = gaugeOriginY * scaleFactor;
    }

    if (!hDefined) {
      // if height is not defined
      if (yDefined) {
        // if y is defined then adjust thermometer height is available space
        gaugeHeight = gaugeOriginY - canvasTop;
      } else {
        gaugeHeight = canvasHeight;
        gaugeOriginY = canvasTop + gaugeHeight;
      }
    } else {
      // height is defined
      gaugeHeight = gaugeHeight * scaleFactor;
      if (yDefined) {
        // if both are defined, adjust the top to accomodate this
        top += gaugeOriginY - gaugeHeight - canvasTop;
      } else {
        gaugeOriginY = canvasTop + gaugeHeight;
      }
    }
    // finally adjust the bottom to accomodate y and height
    bottom += canvasTop + canvasHeight - gaugeOriginY;

    return {
      top: top,
      bottom: bottom + 8, // space for thick border at the glass bottom
      left: left,
      right: right
    };
  };
  /**
   * Draws Cylinder plot
   */


  CylinderDataset.prototype.draw = function draw() {
    var dataSet = this,
        dsConfig = dataSet.config,
        iapi = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        trackerLayer = iapi.getChildContainer('trackerGroup'),
        parentContainer = iapi.getChildContainer().plotGroup,
        fluidTop = dataSet.getGraphicalElement('fluidTop'),
        fluid = dataSet.getGraphicalElement('fluid'),
        cylinterTop = dataSet.getGraphicalElement('cylinterTop'),
        frontLight1 = dataSet.getGraphicalElement('frontLight1'),
        frontLight = dataSet.getGraphicalElement('frontLight'),
        front = dataSet.getGraphicalElement('front'),
        back = dataSet.getGraphicalElement('back'),
        btnBorderLight = dataSet.getGraphicalElement('btnBorderLight'),
        btnBorder1 = dataSet.getGraphicalElement('btnBorder1'),
        btnBorder = dataSet.getGraphicalElement('btnBorder'),
        label = dataSet.getGraphicalElement('label'),
        dataLabelsLayer = iapi.getChildContainer('datalabelsGroup'),
        dataLabelContainerDummy = dataSet.getContainer('dataLabelContainer'),
        dataLabelContainer = void 0,
        trackerContainer = dataSet.getContainer('trackerContainer'),
        hotElement = dataSet.getGraphicalElement('hotElement'),
        scale = dataSet.getFromEnv('scale'),
        chartConfig = iapi.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasHeight = chartConfig.canvasHeight,
        r = chartConfig.effectiveR || 40,
        value = isValidValue(dsConfig.value, scale.getLimit().min, scale.getLimit().max),
        gaugePos = scale.getPixel(value),
        x = canvasLeft + r,
        y = canvasTop,
        h = canvasHeight,
        style = iapi.config.dataLabelStyle,
        fluidColor = dsConfig.gaugeFillColor,
        fluidDarkColor = getDarkColor(fluidColor, 70),
        fluidLightColor = getLightColor(fluidColor, 70),
        fluidEdgeColor = getDarkColor(fluidDarkColor, 90),
        fluidAlpha = chartConfig.gaugeFillAlpha,
        fluidStroke = 3,


    // Thermometer Glass color
    gaugeContainerColor = dsConfig.gaugeContainerColor,
        darkConColor = getDarkColor(gaugeContainerColor, 80),
        darkConColor1 = getDarkColor(gaugeContainerColor, 90),
        lightConColor = getLightColor(gaugeContainerColor, 80),
        r3dFactor = chartConfig.gaugeYScale,
        containerDummy = dataSet.getContainer('container'),
        animationManager = dataSet.getFromEnv('animationManager'),
        container = void 0,
        r2 = r * r3dFactor,
        fluidStrHF = fluidStroke / 2,
        r3 = r - fluidStrHF,
        y2 = dsConfig.cylBase = y + h,
        y3 = gaugePos,
        x1 = x - r,
        x2 = x + r,
        x3 = x1 + fluidStrHF,
        x4 = x2 - fluidStrHF,
        xBt1 = x1 - 2,
        xBt2 = x2 + 2,
        rBt1 = r + 2,
        rBt2 = r2 + 2,
        yBt1 = y2 + 4,
        yBt2 = yBt1 + 0.001,
        lightX = r * 0.85,
        x5 = x - lightX,
        x6 = x + lightX,
        lightY = Math.sqrt((1 - lightX * lightX / (r * r)) * r2 * r2),
        y4 = y + lightY,
        y5 = y2 + lightY,
        y6 = y - 1,
        use3DLighting = chartConfig.use3DLighting,
        topColorStr = void 0,
        topStrokeStr = void 0,
        showHoverEffect = dsConfig.showHoverEffect,
        plotFillHoverAlpha = dsConfig.plotFillHoverAlpha,
        plotFillHoverColor = dsConfig.plotFillHoverColor,
        fluidHoverDarkColor = void 0,
        fluidHoverLightColor = void 0,
        fluidHoverEdgeColor = void 0,

    // todo: all attributes need to be parsed and ready during configuration
    eventArgs = void 0,
        fluidAttr = dsConfig.fluidAttr,
        backColor = void 0,
        frontColor = void 0,
        fluidFill = void 0,
        borderColor = convertColor(darkConColor, 50),
        btnBorderAttr = { 'stroke-width': 4 },
        btnBorder1Attr = { 'stroke-width': 4 },
        btnBorderLightAttr = { 'stroke-width': 0 },
        backAttr = { 'stroke-width': 1 },
        fluidTopAttr = { 'stroke-width': 2 },
        frontAttr = { 'stroke-width': 1 },
        frontLightAttr = { 'stroke-width': 0 },
        frontLight1Attr = { 'stroke-width': 0 },
        cylinterTopAttr = { 'stroke-width': 2 },
        hotElementAttr = {
      stroke: TRACKER_FILL,
      fill: TRACKER_FILL,
      ishot: true
    },
        dataLabelContainerAttr = {},
        labelAttr = void 0;

    if (!fluidAttr) {
      fluidAttr = dsConfig.fluidAttr = {};
    }

    fluidAttr['stroke-width'] = 0;
    eventArgs = {
      value: dsConfig.value,
      displayValue: dsConfig.displayValue,
      toolText: dsConfig.toolText
    };

    // Set attributes for 3d lighting
    if (use3DLighting) {
      backColor = lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor1 + _lib.COMMASTRING + darkConColor1 + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor;
      fluidFill = (0, _lib.toRaphaelColor)({
        FCcolor: {
          cx: 0.5,
          cy: 0,
          r: HUNDREDPERCENT,
          color: fluidLightColor + _lib.COMMASTRING + fluidDarkColor,
          alpha: fluidAlpha + _lib.COMMASTRING + fluidAlpha,
          ratio: zeroCommaHundredStr,
          radialGradient: true
        }
      });

      topColorStr = (0, _lib.toRaphaelColor)({
        FCcolor: {
          cx: 0.5,
          cy: 0.7,
          r: HUNDREDPERCENT,
          color: fluidLightColor + _lib.COMMASTRING + fluidDarkColor,
          alpha: fluidAlpha + _lib.COMMASTRING + fluidAlpha,
          ratio: zeroCommaHundredStr,
          radialGradient: true
        }
      });
      topStrokeStr = convertColor(fluidLightColor, fluidAlpha);
      frontColor = lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor;

      // Set attribute for front light left
      frontLightAttr.path = [M, x1, y2, A, r, r2, 1, 0, 0, x5, y5, L, x5, y4, A, r, r2, 0, 0, 1, x1, y, Z];
      frontLightAttr.fill = (0, _lib.toRaphaelColor)({
        FCcolor: {
          color: frontColor,
          alpha: topLightGlowAlphaStr,
          ratio: zeroCommaHundredStr,
          angle: 0
        }
      });

      // Set attribute for front light right
      frontLight1Attr.path = [M, x6, y5, A, r, r2, 0, 0, 0, x2, y2, L, x2, y, A, r, r2, 1, 0, 0, x6, y4, Z];
      frontLight1Attr.fill = (0, _lib.toRaphaelColor)({
        FCcolor: {
          color: frontColor,
          alpha: topLightGlowAlphaStr,
          ratio: zeroCommaHundredStr,
          angle: 180
        }
      });
    } else {
      backColor = lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor;
      topColorStr = fluidFill = convertColor(fluidDarkColor, fluidAlpha);
      topStrokeStr = convertColor(fluidEdgeColor);
      frontColor = darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + darkConColor;
    }
    // set attributes for fluid fill
    fluidAttr.bodyOut = {
      fill: fluidFill
    };
    fluidAttr.topOut = {
      stroke: topStrokeStr,
      fill: topColorStr
    };
    // create hover attributes
    if (showHoverEffect) {
      fluidHoverDarkColor = getDarkColor(plotFillHoverColor, 70);
      fluidHoverLightColor = getLightColor(plotFillHoverColor, 70);
      fluidHoverEdgeColor = getDarkColor(fluidHoverDarkColor, 90);

      if (use3DLighting) {
        fluidAttr.bodyHover = {
          fill: (0, _lib.toRaphaelColor)({
            FCcolor: {
              cx: 0.5,
              cy: 0,
              r: HUNDREDPERCENT,
              color: fluidHoverLightColor + _lib.COMMASTRING + fluidHoverDarkColor,
              alpha: plotFillHoverAlpha + _lib.COMMASTRING + plotFillHoverAlpha,
              ratio: zeroCommaHundredStr,
              radialGradient: true
            }
          })
        };

        fluidAttr.topHover = {
          stroke: convertColor(fluidHoverLightColor, plotFillHoverAlpha),
          fill: (0, _lib.toRaphaelColor)({
            FCcolor: {
              cx: 0.5,
              cy: 0.7,
              r: HUNDREDPERCENT,
              color: fluidHoverLightColor + _lib.COMMASTRING + fluidHoverDarkColor,
              alpha: plotFillHoverAlpha + _lib.COMMASTRING + plotFillHoverAlpha,
              ratio: zeroCommaHundredStr,
              radialGradient: true
            }
          })
        };
      } else {
        fluidAttr.bodyHover = {
          fill: convertColor(fluidHoverDarkColor, plotFillHoverAlpha)
        };
        fluidAttr.topHover = {
          stroke: convertColor(fluidHoverEdgeColor),
          fill: convertColor(fluidHoverDarkColor, plotFillHoverAlpha)
        };
      }
    }

    // Set attrinbute of fluid
    fluidAttr.fill = fluidFill;
    fluidAttr.path = [M, x1, y2, A, r, mathMax(r2, 1), 0, 0, 0, x2, y2, L, x2, y3, A, r, mathMax(r2, 1), 0, 0, 1, x1, y3, Z];

    // Set attribute of fluid top
    fluidTopAttr.fill = topColorStr;
    fluidTopAttr.stroke = topStrokeStr;
    fluidTopAttr.path = [M, x3, y3, A, r3, r2, 0, 0, 0, x4, y3, L, x4, y3, A, r3, r2, 0, 0, 0, x3, y3, Z];

    // Set attribute for btnBorder
    btnBorderAttr.stroke = convertColor(darkConColor, 80);
    btnBorderAttr.path = [M, xBt1, yBt1, A, rBt1, rBt2, 0, 0, 0, xBt2, yBt1, L, xBt2, yBt2, A, rBt1, rBt2, 0, 0, 0, xBt1, yBt2, Z];

    // Set attribute for btnBorder1
    btnBorder1Attr.stroke = borderColor;
    btnBorder1Attr.path = [M, x1, yBt1, A, r, r2, 0, 0, 0, x2, yBt1, L, x2, yBt2, A, r, r2, 0, 0, 0, x1, yBt2, Z];

    // Set attribute for btnBorderLight
    btnBorderLightAttr.path = [M, x1, y2, A, r, r2, 0, 0, 0, x2, y2, A, r, r2, 0, 0, 0, x1, y2, Z];
    btnBorderLightAttr.fill = (0, _lib.toRaphaelColor)({
      FCcolor: {
        color: lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + lightConColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + fluidDarkColor + _lib.COMMASTRING + darkConColor + _lib.COMMASTRING + lightConColor,
        alpha: btnBorderLightAlphaStr,
        ratio: btnBorderLightRatioStr,
        angle: 0
      }
    });

    // Set attribute for back element
    backAttr.path = [M, x1, y2, A, r, r2, 0, 0, 0, x2, y2, L, x2, y, A, r, r2, 0, 0, 0, x1, y, Z];
    backAttr.stroke = borderColor;
    backAttr.fill = (0, _lib.toRaphaelColor)({
      FCcolor: {
        color: backColor,
        alpha: backAlphaStr,
        ratio: backRatioStr,
        angle: 0
      }
    });

    // Set attribute for front element
    frontAttr.path = [M, x1, y2, A, r, r2, 0, 0, 0, x2, y2, L, x2, y, A, r, r2, 0, 0, 1, x1, y, Z];
    frontAttr.stroke = borderColor;
    frontAttr.fill = (0, _lib.toRaphaelColor)({
      FCcolor: {
        color: frontColor,
        alpha: backAlphaStr,
        ratio: frontRatioStr,
        angle: 0
      }
    });

    // Set attribute for cylinder top
    cylinterTopAttr.stroke = convertColor(darkConColor, 40);
    cylinterTopAttr.path = [M, x1, y6, A, r, r2, 0, 0, 0, x2, y6, L, x2, y6, A, r, r2, 0, 0, 0, x1, y6, Z];

    hotElementAttr.path = [M, x1, y2, x1, yBt1 + 4, A, r, r2, 0, 0, 0, x2, yBt1 + 4, L, x2, y2, x2, y, A, r, r2, 0, 0, 0, x1, y, Z];

    // Set the opacity of dataLabelContainer according to showValue value
    dataLabelContainerAttr.opacity = dsConfig.showValue ? 1 : 0;

    // Label Attributes
    labelAttr = {
      text: dsConfig.displayValue,
      x: x,
      y: y2 + r2 + (dsConfig.valuePadding || 0) + 8, // glass bottom extra thick border
      'text-anchor': POSITION_MIDDLE,
      'vertical-align': POSITION_TOP,
      fill: style.color,
      'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
    };

    // Create/Reuse container
    container = animationManager.setAnimation({
      el: containerDummy || 'group',
      attr: { name: 'cylinder' },
      container: parentContainer,
      component: dataSet,
      dom: 'group'
    });
    // Create/Reuse btnBorder element
    btnBorder = animationManager.setAnimation({
      el: btnBorder || 'path',
      attr: btnBorderAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse btnBorder1 element
    btnBorder1 = animationManager.setAnimation({
      el: btnBorder1 || 'path',
      attr: btnBorder1Attr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse btnBorderLight element
    btnBorderLight = animationManager.setAnimation({
      el: btnBorderLight || 'path',
      attr: btnBorderLightAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse back element
    back = animationManager.setAnimation({
      el: back || 'path',
      attr: backAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse fluid element
    fluid = animationManager.setAnimation({
      el: fluid || 'path',
      attr: fluidAttr,
      container: container,
      component: dataSet,
      label: 'plotFluid'
    });
    // Create/Reuse fluidTop element
    fluidTop = animationManager.setAnimation({
      el: fluidTop || 'path',
      attr: fluidTopAttr,
      container: container,
      component: dataSet,
      label: 'plotFluidTop'
    });
    // Create/Reuse front element
    front = animationManager.setAnimation({
      el: front || 'path',
      attr: frontAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse frontLight element
    frontLight = animationManager.setAnimation({
      el: frontLight || 'path',
      attr: frontLightAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse frontLight1 element
    frontLight1 = animationManager.setAnimation({
      el: frontLight1 || 'path',
      attr: frontLight1Attr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse cylinderTop element
    cylinterTop = animationManager.setAnimation({
      el: cylinterTop || 'path',
      attr: cylinterTopAttr,
      container: container,
      component: dataSet,
      dom: 'path'
    });
    // Create/Reuse trackerContainer element
    trackerContainer = animationManager.setAnimation({
      el: trackerContainer || 'group',
      container: trackerLayer,
      component: dataSet,
      dom: 'group'
    });
    // Create/Reuse dataLabelContainer
    dataLabelContainer = animationManager.setAnimation({
      el: dataLabelContainerDummy || 'group',
      attr: dataLabelContainerAttr,
      container: dataLabelsLayer,
      component: dataSet,
      label: 'labelGroup'
    });
    // Create/Reuse label
    label = animationManager.setAnimation({
      el: label || 'text',
      attr: labelAttr,
      container: dataLabelContainer,
      component: dataSet,
      dom: 'text'
    });
    // Create/Reuse hotElement
    hotElement = animationManager.setAnimation({
      el: hotElement || 'path',
      attr: hotElementAttr,
      container: trackerContainer,
      component: dataSet,
      dom: 'path'
    });

    // Add to _graphics of dataset if container is not present
    if (!containerDummy) {
      dataSet.addContainer('container', container);
      dataSet.addGraphicalElement('btnBorder', btnBorder);
      dataSet.addGraphicalElement('btnBorder1', btnBorder1);
      dataSet.addGraphicalElement('btnBorderLight', btnBorderLight);
      dataSet.addGraphicalElement('back', back);
      dataSet.addGraphicalElement('fluid', fluid);
      dataSet.addGraphicalElement('fluidTop', fluidTop);
      dataSet.addGraphicalElement('front', front);
      dataSet.addGraphicalElement('frontLight', frontLight);
      dataSet.addGraphicalElement('frontLight1', frontLight1);
      dataSet.addGraphicalElement('cylinterTop', cylinterTop);
      dataSet.addContainer('trackerContainer', trackerContainer);
      dataSet.addGraphicalElement('hotElement', hotElement);
    }

    // If dataLabelContainer is not present previously, add to _containers of dataset
    if (!dataLabelContainerDummy) {
      dataSet.addContainer('dataLabelContainer', dataLabelContainer);
      dataSet.addGraphicalElement('label', label);
    }

    // Attach event handlers
    hotElement.click(function (setDataArr) {
      var ele = this;
      _lib.plotEventHandler.call(ele, iapi, setDataArr);
    }).hover(function (data) {
      var ele = this;
      if (dsConfig.showHoverEffect) {
        dataSet.getGraphicalElement('fluid') && dataSet.getGraphicalElement('fluid').attr(fluidAttr.bodyHover);
        dataSet.getGraphicalElement('fluidTop') && dataSet.getGraphicalElement('fluidTop').attr(fluidAttr.topHover);
      }
      _lib.plotEventHandler.call(ele, iapi, data, ROLLOVER);
    }, function (data) {
      var ele = this;
      if (dsConfig.showHoverEffect) {
        dataSet.getGraphicalElement('fluid') && dataSet.getGraphicalElement('fluid').attr(fluidAttr.bodyOut);
        dataSet.getGraphicalElement('fluidTop') && dataSet.getGraphicalElement('fluidTop').attr(fluidAttr.topOut);
      }
      _lib.plotEventHandler.call(ele, iapi, data, ROLLOUT);
    }).data(EVENTARGS, eventArgs);

    // Add/Remove tooltip
    if (!dsConfig.toolText) {
      toolTipController.disableToolTip(hotElement);
    } else {
      toolTipController.enableToolTip(hotElement, dsConfig.toolText);
    }
  };

  return CylinderDataset;
}(_cylinderthermometerbase2['default']);

exports['default'] = CylinderDataset;

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.cylinder': function initialDatasetCylinder() {
    var component = this,
        conf = component.config;
    return {
      'plotFluid.appearing': function plotFluidAppearing(input) {
        var pathArr = input.attr.path.slice(0);
        pathArr[13] = pathArr[21] = pathArr[2];
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: {
            path: pathArr
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'plotFluid.updating': null,
      'plotFluidTop.appearing': function plotFluidTopAppearing(input) {
        var pathArr = input.attr.path.slice(0);
        pathArr[2] = pathArr[10] = pathArr[13] = pathArr[21] = conf.cylBase;
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: {
            path: pathArr
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'plotFluidTop.updating': null,
      'text.appearing': function textAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'text.updating': null,
      'labelGroup.appearing': function labelGroupAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'labelGroup.updating': null,
      'path.appearing': function pathAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'path.updating': null
    };
  }
};

/***/ }),

/***/ 748:
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

var _fusioncharts = __webpack_require__(354);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _funnel = __webpack_require__(749);

var _funnel2 = _interopRequireDefault(_funnel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * Class for Funnel chart
 * @class Funnel
 * @extends {FunnelPyramidBase}
 */
var Funnel = function (_FunnelPyramidBase) {
  _inherits(Funnel, _FunnelPyramidBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Funnel.getName = function getName() {
    return 'Funnel';
  };
  /**
   * Creates an instance of Funnel.
   * @memberof Funnel
   */


  function Funnel() {
    _classCallCheck(this, Funnel);

    var _this = _possibleConstructorReturn(this, _FunnelPyramidBase.call(this));

    _this.useSortedData = true;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Funnel.prototype.getName = function getName() {
    return 'funnel';
  };
  /**
   * Sets default configuration
   * @memberof Funnel
   */


  Funnel.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _FunnelPyramidBase.prototype.__setDefaultConfig && _FunnelPyramidBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Funnel Chart';
    config.defaultDatasetType = 'funnel';
    config.enablemousetracking = true;
  };
  /**
   * Configures Attributes of chart
   *
   * @memberof Funnel
   */


  Funnel.prototype.configureAttributes = function configureAttributes() {
    _FunnelPyramidBase.prototype.configureAttributes.call(this);
    var chart = this,
        dataSource = chart.getFromEnv('dataSource'),
        streamLinedData = +(typeof dataSource.chart.streamlineddata === 'undefined' ? 1 : dataSource.chart.streamlineddata);

    chart.config.PLOT_COLOR_INDEX_START = streamLinedData ? -1 : 0;
  };
  /**
   * This method return the dataset definations for this chart
   * @return {Object} dataset
   * @memberof Funnel
   */


  Funnel.prototype.getDSdef = function getDSdef() {
    return _funnel2['default'];
  };

  return Funnel;
}(_fusioncharts2['default']);

exports['default'] = Funnel;

/***/ }),

/***/ 749:
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

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

var _lib = __webpack_require__(5);

var _funnelpyramidbase = __webpack_require__(355);

var _funnelpyramidbase2 = _interopRequireDefault(_funnelpyramidbase);

var _schedular = __webpack_require__(13);

var _funnelPoint = __webpack_require__(751);

var _funnelPoint2 = _interopRequireDefault(_funnelPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_END = _lib.preDefStr.POSITION_END,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    textHAlign = {
  right: POSITION_END,
  left: POSITION_START,
  middle: POSITION_MIDDLE,
  start: POSITION_START,
  end: POSITION_END,
  center: POSITION_MIDDLE,
  'undefined': _lib.BLANK,
  BLANK: _lib.BLANK
},
    POINTER = 'pointer';
/**
 * Creates dataset class for Funnel
 */

var FunnelDataset = function (_FunnelPyramidBaseDat) {
  _inherits(FunnelDataset, _FunnelPyramidBaseDat);

  /**
   * Constructor function to initialise attributes of Funnel dataset object
   */
  function FunnelDataset() {
    _classCallCheck(this, FunnelDataset);

    var _this = _possibleConstructorReturn(this, _FunnelPyramidBaseDat.call(this));

    _this.config.pointInContext = _funnelPoint2['default'];
    _this.config.LABEL_PLACEMENT_ITERATOR_INDEX_START = 1;
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  FunnelDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  FunnelDataset.prototype.getName = function getName() {
    return 'funnel';
  };

  /**
   * Configure dataset component and parse default values
   * @param  {Object} datasetJSON JSON for dataset configurations
   * @return {boolean} Indicates whether the configuration was successful or not
   */


  FunnelDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.config.JSONData = datasetJSON;
    var datasetDefStore = this,
        chart = datasetDefStore.getFromEnv('chart'),
        numberFormatter = datasetDefStore.getFromEnv('number-formatter'),
        utils = datasetDefStore.utils(datasetDefStore),
        sortObjArrByKey = utils.sortObjArrByKey,
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {},
        data = datasetDefStore.config.JSONData.data,
        streamLinedData,
        index,
        dsItem,
        length;

    if (!datasetDefStore._checkValidData(data)) {
      return;
    }

    for (index = 0, length = data.length; index < length; index++) {
      dsItem = data[index];
      if (dsItem && dsItem.value !== UNDEF) {
        dsItem.value = numberFormatter.getCleanValue(dsItem.value, true);
      }
    }

    streamLinedData = +(chartAttr.streamlineddata === UNDEF ? 1 : chartAttr.streamlineddata);
    datasetDefStore.config.JSONData.data = !streamLinedData ? data : sortObjArrByKey(data, 'value');
    /**
     * configure the data before calling addlegend so that the legenditems of
     * removed datas do not get drawn
     */
    datasetDefStore._configure();
    !!streamLinedData && (datasetDefStore.components.data[0].pseudoPoint = true);
    chart.config.showLegend && datasetDefStore.addLegend();
  };

  /**
   * Configure specific attributes
   */


  FunnelDataset.prototype.configureSpecifics = function configureSpecifics() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        datasetConf = datasetStore.config,
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {},
        utils = datasetStore.utils(datasetStore),
        copyProperties = utils.copyProperties;

    // Properties specific to the funnel only
    copyProperties(chartAttr, datasetConf, [['streamlineddata', 'streamLinedData', _lib.pluckNumber, 1], ['funnelyscale', 'yScale', _lib.pluckNumber, UNDEF, function (datasetConf) {
      var ys = datasetConf.yScale;
      datasetConf.yScale = ys >= 0 && ys <= 40 ? ys / 200 : 0.2;
    }], ['usesameslantangle', 'useSameSlantAngle', _lib.pluckNumber, function (datasetConf) {
      return datasetConf.streamLinedData ? 0 : 1;
    }], ['ishollow', 'isHollow', _lib.pluckNumber, UNDEF, function (datasetConf) {
      var isHollow = datasetConf.isHollow;

      if (isHollow === UNDEF) {
        datasetConf.isHollow = datasetConf.streamLinedData ? 1 : 0;
      }
    }]]);
  };
  /**
   * Process data before drawing to calculate space management
   * @param {Array} pointsArr data points
   */


  FunnelDataset.prototype.prePointProcessingHookFn = function prePointProcessingHookFn(pointsArr) {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        chartConf = chart.config,
        conf = datasetStore.config,
        chartWorkingWidth = chartConf.canvasWidth,
        smartLabel = chart.getFromEnv('smartLabel'),
        nonStreamLinedData = !conf.streamLinedData,
        point,
        lineHeight,
        smartTextObj,
        origHeight;

    point = pointsArr[0];
    // Wrapping the first label to the whole drawing width
    point && (point.pseudoPoint = true);
    if (point && point.displayValue) {
      smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
      smartLabel.setStyle(point.style);
      (0, _lib.setLineHeight)(point.style);
      lineHeight = parseFloat(point.style.lineHeight.match(/^\d+/)[0] || conf.lineHeight, 10);
      origHeight = smartLabel.getOriSize(point.displayValue).height;
      smartTextObj = smartLabel.getSmartText(point.displayValue, chartWorkingWidth, origHeight);
      point.displayValue = smartTextObj.text;
      smartTextObj.tooltext && (point.originalText = smartTextObj.tooltext);
      point.labelWidth = smartLabel.getOriSize(smartTextObj.text).width;
      // Reducing the chart height to place the top most label
      chartConf.marginTop += lineHeight + 4;
    }

    conf.totalValue = nonStreamLinedData ? pointsArr[0].y - pointsArr[1].y : 0;
    conf.offsetVal = function (i) {
      return nonStreamLinedData ? -(pointsArr[i + 1] && pointsArr[i + 1].y || 0) : point.y;
    };
  };

  /**
   * Process data array to normalise
   * @param {Array} dataArr data array
   * @return {Object} processed calculated dataobject
   */


  FunnelDataset.prototype.datasetCalculations = function datasetCalculations(dataArr) {
    var datasetStore = this,
        conf = datasetStore.config,
        numberFormatter = datasetStore.getFromEnv('number-formatter'),
        index,
        length,
        dataObj,
        itemValue,
        res = {},
        isStreamLinedData = conf.streamLinedData,
        percentOfPrevious = conf.percentOfPrevious;

    res.highestValue = Number.NEGATIVE_INFINITY;
    res.refreshedData = [];
    res.sumValue = res.countPoint = 0;

    for (index = 0, length = dataArr.length; index < length; index++) {
      dataObj = dataArr[index];

      if (dataObj.vline) {
        // Funnel or pyramid does not use vline. Ignoring the same if user put it mistakenly.
        continue;
      }

      dataObj.cleanValue = itemValue = Math.abs(numberFormatter.getCleanValue(dataObj.value, true));

      if (itemValue !== null) {
        // If a valid value is provided in the configuration
        res.hasValidPoint = true;
        res.highestValue = res.highestValue || itemValue;
        res.refreshedData.push(dataObj);
        res.sumValue += itemValue;
        res.countPoint += 1;
        res.highestValue = Math.max(res.highestValue, itemValue);
      }
    }

    if (isStreamLinedData) {
      res.sumValue = res.highestValue;
      percentOfPrevious && (res.prevPerValReq = true);
    }

    return res;
  };

  /**
   * Calculates plot values
   *
   * @memberof FunnelDataset
   */


  FunnelDataset.prototype.calculatePositionOfPlots = function calculatePositionOfPlots() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        chartConfig = chart.config,
        conf = datasetStore.config,
        utils = datasetStore.utils(datasetStore),
        getSumValueOfObjArrByKey = utils.getSumValueOfObjArrByKey,
        DistributionMatrix = utils.DistributionMatrix,
        calculatePositionCoordinate = datasetStore.calculatePositionCoordinate,
        psmMargin = conf.psmMargin,
        dataStore = datasetStore.components.data,
        index,
        length,
        plotObj,
        unitHeight,
        streamLinedData = conf.streamLinedData,
        heightAllotted,
        widthAllotted,
        drawingRadius,
        section = 2,
        dataStoreLength = dataStore.length,
        maxDataValue = conf.maxValue = dataStore[0].y,
        minDataValue = conf.minValue = dataStore[dataStoreLength - 1].y,
        mvMockNonStreamLine,
        alignmentType,
        uh,
        distributionKey,
        currentSliceHeight = 0,
        blockLabelLenFromOffset,
        blockLenFromOffset = 0,
        lineHeight = conf.lineHeight,
        mFloorFn = Math.floor,
        distributedResult,
        dMatrix,
        adMatrix,
        curr,
        ele,
        forceKeys,
        fKey,
        distributionMatrix;

    if (!conf.sumValue) {
      return;
    }

    datasetStore.postPlotCallback = _lib.stubFN;

    chartConfig.canvasTop += chartConfig.marginTop - psmMargin.top;
    chartConfig.effCanvasHeight = heightAllotted = chartConfig.canvasHeight - (chartConfig.marginTop + chartConfig.marginBottom) + (psmMargin.top + psmMargin.bottom);
    chartConfig.effCanvasWidth = widthAllotted = chartConfig.width - (chartConfig.marginLeft + chartConfig.marginRight);
    drawingRadius = conf.drawingRadius = widthAllotted / section;
    conf.x = drawingRadius + chartConfig.canvasLeft;

    if (streamLinedData && dataStoreLength < 2) {
      // datasetStore.hide(datasetStore.components.data, dataStoreLength);
      return;
    }

    if (!streamLinedData) {
      uh = unitHeight = maxDataValue ? heightAllotted / maxDataValue : heightAllotted;
    } else {
      unitHeight = heightAllotted / (maxDataValue - minDataValue);
      mvMockNonStreamLine = getSumValueOfObjArrByKey(dataStore, 'value');
      uh = mvMockNonStreamLine ? heightAllotted / mvMockNonStreamLine : heightAllotted;
    }

    conf.unitHeight = unitHeight;
    conf.lastRadius = drawingRadius;

    // For funnel no x shift calculation required since the shape of the funnel causes the labels to be
    // placed in non overlapping fashion
    conf.globalMinXShift = 0;

    // Defines how to align the labels of the chart.
    alignmentType = conf.alignmentType = {};

    // Default alignment is labels placing in the right side of the pyramid, and chart is left aligned
    alignmentType['default'] = 1;
    alignmentType.alternate = 2;

    // Length of distribution matrix is how many labels ca be placed at one
    // side of the pyramid without overlapping
    distributionMatrix = new DistributionMatrix(mFloorFn(heightAllotted / lineHeight));

    for (index = 0, length = dataStoreLength; index < length; index++) {
      plotObj = dataStore[index];

      if (!streamLinedData && index === 0 || !streamLinedData && index === length - 1) {
        // For non streamedlineData the first element contains the total hence continue
        distributionMatrix.forcePush(plotObj, index);
        continue;
      }
      currentSliceHeight = plotObj.y * uh;
      // Effective length of the current slice from the top of pyramid drawing
      blockLenFromOffset += plotObj.y * uh;
      blockLabelLenFromOffset = blockLenFromOffset - currentSliceHeight + currentSliceHeight / 2;
      distributionKey = mFloorFn(blockLabelLenFromOffset / lineHeight);
      distributionMatrix.push(plotObj, distributionKey);
    }

    distributedResult = distributionMatrix.getDistributedResult();

    // Alternatively merge the data after distribution
    dataStore.length = 0;
    if (distributedResult.matrix[1] === UNDEF) {
      [].push.apply(dataStore, distributedResult.matrix[0]);
    } else {
      dMatrix = distributedResult.matrix[0];
      adMatrix = distributedResult.matrix[1];
      length = Math.max(dMatrix.length, adMatrix.length);
      for (index = 0; index < length; index++) {
        ele = dMatrix[index];
        curr = adMatrix[index];
        dataStore.push(ele || curr);
      }
    }

    // Placing the elements to be forced in distribution matrix
    forceKeys = (0, _keys2['default'])(distributedResult.forceMatrix);
    if (forceKeys.length > 0) {
      for (fKey in distributedResult.forceMatrix) {
        [].splice.apply(dataStore, [parseInt(fKey, 10), 0].concat(distributedResult.forceMatrix[fKey]));
      }
    }

    switch (distributedResult.suggestion) {
      case alignmentType['default']:
        calculatePositionCoordinate.call(datasetStore, dataStore, false);
        break;

      case alignmentType.alternate:
        conf.labelAlignment = alignmentType.alternate;
        // 1st section for left labels, 2nd sector for chart itself, 3rd section for right label
        section = 3;
        drawingRadius = widthAllotted / section;
        chartConfig.canvasLeft = chartConfig.canvasWidth / 2 - drawingRadius;
        conf.x = chartConfig.canvasLeft + drawingRadius;
        // lastRadius = drawingRadius;
        calculatePositionCoordinate.call(datasetStore, dataStore, true);
        break;
    }
  };
  /**
   * Draws funnel plot
   */


  FunnelDataset.prototype.draw = function draw() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        conf = datasetStore.config,
        trackerArgs = datasetStore.config.trackerArgs = [],
        dataStore = datasetStore.components.data,
        index,
        length,
        dlGroup = chart.getChildContainer('datalabelsGroup'),
        streamLinedData = conf.streamLinedData,
        dataStoreLength = dataStore.length,
        mMinFn = Math.min,
        slicingDistance,
        noOfGap,
        halfDistance,
        plotItems = [],
        postPlotCallbackInitiated;

    datasetStore.config.labelDrawingConfig = datasetStore.config.labelDrawingConfig || [];
    datasetStore.config.labelDrawingConfig.length = 0;

    if (!conf.sumValue) {
      return;
    }

    datasetStore.rolloverResponseSetter = function (graphic, elemHoverAttr) {
      return function (data) {
        var ele = this;
        graphic.attr(elemHoverAttr);
        _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
      };
    };

    datasetStore.rolloutResponseSetter = function (graphic, elemUnHoverAttr) {
      return function (data) {
        var ele = this;
        graphic.attr(elemUnHoverAttr);
        _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
      };
    };

    datasetStore.animateFunction = function (group) {
      return function () {
        group.attr({
          opacity: 1
        });
      };
    };

    slicingDistance = conf.slicingDistance;
    halfDistance = slicingDistance / 2;

    if (streamLinedData && dataStoreLength < 2) {
      datasetStore.hide(datasetStore.components.data, dataStoreLength);
      return;
    }

    for (index = 0, length = dataStore.length; index < length; index++) {
      dataStore[index] && dataStore[index].shapeArgs && (dataStore[index].shapeArgs.renderer = chart.getFromEnv('paper'));
    }
    noOfGap = conf.noOfGap;
    if (noOfGap) {
      conf.perGapDistance = mMinFn(halfDistance * 1.5, slicingDistance / noOfGap);
      conf.distanceAvailed = halfDistance;
    }

    index = dataStore.length;

    if (conf.alreadyPlotted) {
      datasetStore.postPlotCallback = function () {
        if (postPlotCallbackInitiated) {
          return;
        }

        postPlotCallbackInitiated = true;

        datasetStore.animateFunction(dlGroup)();
      };
    }

    while (index--) {
      plotItems.push(datasetStore.drawIndividualPlot(dataStore[index], index));
    }
    conf.oldLastData = (0, _assign2['default'])({}, dataStore[dataStore.length - 1].shapeArgs);
    datasetStore.hide(datasetStore.components.data, dataStoreLength);
    !conf.alreadyPlotted && datasetStore.animateElements(plotItems, 'graphic', [], {
      pre: { opacity: 0 },
      post: { opacity: 100 }
    }, datasetStore.animateFunction(dlGroup));

    conf.connectorEndSwitchHistoryY = {};

    index = dataStore.length;
    while (index--) {
      trackerArgs.push(dataStore[index]);
    }

    datasetStore.addJob('labelDrawID', datasetStore.drawAllLabels.bind(datasetStore), _schedular.priorityList.label);

    datasetStore.addJob('trackerDrawID', datasetStore.drawAllTrackers.bind(datasetStore), _schedular.priorityList.tracker);

    // Remove elements of unused data
    datasetStore.removeElements();
    conf.alreadyPlotted = true;
    conf.prevIs2d = conf.is2d;
  };

  /**
   * Draws individual plot graphics
   * @param {Object} point data point object
   * @param {number} index data point object
   * @return {Object} individual pointItem object
   */


  FunnelDataset.prototype.drawIndividualPlot = function drawIndividualPlot(point, index) {
    var datasetStore = this,
        toolTipController = datasetStore.getFromEnv('toolTipController'),
        conf = datasetStore.config,
        value = point.y,
        displayValue = point.displayValue,
        chartSliced = conf.isSliced,
        labelAlign = point.labelAline,
        css = point.appliedStyle,
        parentCSS = point.style,
        textDirection = _lib.BLANK,
        Point = conf.pointInContext,

    // data = datasetStore.components.data,
    chart = datasetStore.getFromEnv('chart'),
        trackerGroup = chart.getChildContainer('trackerGroup'),
        sliced,
        plotItem = point.plot,
        translateXY,
        setLink = !!point.link,
        graphic,
        tempConfig,
        trackerObj,
        distanceAvailed = conf.distanceAvailed,

    // legend = datasetStore.getFromEnv('legend'),
    labelDrawingConfigArr = datasetStore.config.labelDrawingConfig,
        animationManager = datasetStore.getFromEnv('animationManager'),
        setRolloutAttr,
        setRolloverAttr,
        setRolloverProperties,
        sliceContext,
        pointFill,
        labelDrawingConfig,
        textDrawingArgs;

    // In case of streamlinedData = 0, the first plot is not configured
    if (!(point instanceof _funnelPoint2['default'])) {
      tempConfig = point;
      point = new Point();
      point.configure(tempConfig);
      datasetStore.components.data[index] = point;
    }
    // If all plots are sliced, then set flag to false, to make the first
    // slicing click on any of the plots will make it sliced.
    sliced = chartSliced ? 1 : point.isSliced;

    pointFill = css && css.color || parentCSS && parentCSS.color || datasetStore._chartLevelAttr.color;

    textDrawingArgs = {
      text: displayValue,
      ishot: true,
      direction: textDirection,
      cursor: setLink ? POINTER : _lib.BLANK,
      x: 0,
      y: 0,
      fill: pointFill,
      'text-anchor': textHAlign[labelAlign]
    };

    if (value === null || value === UNDEF || !point.shapeArgs) {
      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };

      return;
    }

    graphic = point.getGraphicalElement('graphic');
    trackerObj = point.getGraphicalElement('trackerObj');

    if (!plotItem) {
      point.shapeArgs.graphics = plotItem;

      point.plot = plotItem = {};
      graphic = datasetStore.pyramidFunnelShape(point.shapeArgs).attr({
        fill: point.color,
        'stroke-width': point.borderWidth,
        stroke: point.borderColor
      });
      trackerObj = animationManager.setAnimation({
        el: 'path',
        container: trackerGroup,
        component: datasetStore
      });

      point.addGraphicalElement('graphic', graphic);
      point.addGraphicalElement('trackerObj', trackerObj);

      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };
    } else {
      point.shapeArgs.graphics = graphic;
      graphic = datasetStore.pyramidFunnelShape(point.shapeArgs);
      point.addGraphicalElement('graphic', graphic);

      graphic = animationManager.setAnimation({
        el: graphic,
        attrs: {
          fill: point.color,
          'stroke-width': point.borderWidth,
          stroke: point.borderColor
        },
        component: datasetStore
      });

      point.addGraphicalElement('graphic', graphic);
      graphic.show();

      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };
    }

    if (conf.showTooltip) {
      toolTipController.enableToolTip(trackerObj, point.toolText);
    } else {
      toolTipController.disableToolTip(trackerObj);
    }

    plotItem.value = value;
    plotItem.displayValue = displayValue;
    plotItem.sliced = !!sliced;
    plotItem.cursor = setLink ? POINTER : _lib.BLANK;
    plotItem.x = point.x;
    plotItem.index = index;

    // Hover consmetics
    setRolloutAttr = setRolloverAttr = {};
    if (point.hoverEffects) {
      setRolloutAttr = {
        color: point.rawColor,
        opacity: point.rawAlpha,
        'stroke-width': point.borderWidth,
        stroke: point.borderColor
      };

      setRolloverProperties = point.rolloverProperties;

      setRolloverAttr = {
        color: setRolloverProperties.color,
        opacity: setRolloverProperties.alpha,
        'stroke-width': setRolloverProperties.borderWidth,
        stroke: setRolloverProperties.borderColor
      };
    }

    sliceContext = {
      datasetStore: datasetStore,
      plotItem: plotItem
    };

    trackerObj.unclick(datasetStore.slice);
    !point.doNotSlice && trackerObj.click(datasetStore.slice, sliceContext);

    trackerObj.mouseup(datasetStore.plotMouseUp, plotItem);

    trackerObj.hover(datasetStore.rolloverResponseSetter(graphic, setRolloverAttr), datasetStore.rolloutResponseSetter(graphic, setRolloutAttr));

    labelDrawingConfig.context = sliceContext;
    labelDrawingConfig.actions = {
      click: datasetStore.slice,
      hover: [datasetStore.rolloverResponseSetter(graphic, setRolloverAttr), datasetStore.rolloutResponseSetter(graphic, setRolloutAttr)]
    };

    plotItem.dy = 0;

    if (conf.noOfGap) {
      if (distanceAvailed) {
        plotItem._startTranslateY = translateXY = 't0,' + distanceAvailed;
        plotItem.dy = plotItem.distanceAvailed = distanceAvailed;
      }

      if (conf.slicingGapPosition[point.x]) {
        conf.distanceAvailed -= conf.perGapDistance;
      }
    } else {
      plotItem._startTranslateY = translateXY = 't0,' + 0;
    }

    animationManager.setAnimation({
      el: graphic,
      attr: {
        transform: translateXY
      },
      component: datasetStore
    });

    labelDrawingConfig.transform = translateXY;
    return plotItem;
  };
  /**
  *Method that returns the handler for legend interaction
  * @param {Object} dataset the funnel dataset
  * @param {number} legendItemIndex index of the legend-item clicked
  * @return {Function} the handler
  */
  // eslint-disable-next-line


  FunnelDataset.prototype.legendClickHandler = function legendClickHandler(dataset, legendItemIndex) {
    return function () {
      var plotItems = dataset.components.data,
          plotItem = plotItems[legendItemIndex + 1].plot;
      dataset.legendClick({ datasetStore: dataset, plotItem: plotItem }, true, false);
    };
  };
  /**
   * Calculates parser configuration for tooltip
   * @param {Object} options configuration object
   * @return {Object} parserConfig for tooltip
   */


  FunnelDataset.prototype.getTooltipMacroStub = function getTooltipMacroStub(options) {
    var datasetStore = this,
        conf = datasetStore.config,
        numberFormatter = datasetStore.getFromEnv('number-formatter'),
        base = datasetStore.__base__,
        baseStub,
        percentOfPrevValue;

    if (conf.streamLinedData) {
      percentOfPrevValue = conf.percentOfPrevious ? options.pValue : numberFormatter.percentValue(options.dataValue / options.prevValue * 100);
    }

    baseStub = base.getTooltipMacroStub(options);
    baseStub.percentValue = conf.percentOfPrevious ? numberFormatter.percentValue(options.dataValue / options.highestValue * 100) : options.pValue;
    baseStub.percentOfPrevValue = percentOfPrevValue;

    return baseStub;
  };

  return FunnelDataset;
}(_funnelpyramidbase2['default']);

exports['default'] = FunnelDataset;

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var fadeIn = {
  initialAttr: {
    opacity: 0
  },
  finalAttr: {
    opacity: 1
  },
  slot: 'final'
},
    effect = function effect() {
  return {
    'connector.appearing': function connectorAppearing() {
      return [fadeIn];
    },
    'connector.transform': function connectorTransform(input) {
      return [{
        initialAttr: {
          path: input.attr.path
        },
        finalAttr: {
          path: input.attr.path
        }
      }];
    },
    'dataLabel.appearing': function dataLabelAppearing() {
      return [fadeIn];
    },
    'dataLabel.transform': function dataLabelTransform(input) {
      return [{
        initialAttr: {
          transform: input.attr.transform
        },
        finalAttr: {
          transform: input.attr.transform
        }
      }];
    },
    'path.appearing': function pathAppearing() {
      return [(0, _assign2['default'])({}, fadeIn, { slot: 'plot' })];
    }
  };
};
exports['default'] = {
  'initial.dataset.funnel': effect,
  'initial.dataset.pyramid': effect
};

/***/ }),

/***/ 751:
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

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF;

var FunnelPoint = function (_ComponentInterface) {
  _inherits(FunnelPoint, _ComponentInterface);

  function FunnelPoint() {
    _classCallCheck(this, FunnelPoint);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Configures an instance of FunnelPoint.
   * @param {any} [options={}]
   * @memberof FunnelPoint
   */
  FunnelPoint.prototype.configure = function configure() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var key in options) {
      this[key] = options[key];
    }
    this.upperRadiusFactor = 1;
  };
  /**
   * Returns value after modifying
   *
   * @returns {any}
   * @memberof FunnelPoint
   */
  // eslint-disable-next-line


  FunnelPoint.prototype.getModifiedCurrentValue = function getModifiedCurrentValue() {
    return UNDEF;
  };

  // eslint-disable-next-line


  FunnelPoint.prototype.getRatioK = function getRatioK(context, currentValue, valueRadiusIncrementRatio, totalValue, maxValue) {
    var point = this,
        conf = context.config,

    // pointConfig = point.config,
    nonStreamlinedData = !conf.streamLinedData,
        useSameSlantAngle = conf.useSameSlantAngle;

    return nonStreamlinedData ? 0.2 + valueRadiusIncrementRatio * totalValue : point.y ? useSameSlantAngle ? point.y / maxValue : Math.sqrt(point.y / maxValue) : 1;
  };

  FunnelPoint.prototype.getLowestRadiusFactor = function getLowestRadiusFactor(context, maxValue) {
    var point = this,
        conf = context.config,

    // pointConfig = point.config,
    nonStreamlinedData = !conf.streamLinedData,
        useSameSlantAngle = conf.useSameSlantAngle;

    return nonStreamlinedData ? 0.2 : point.y ? useSameSlantAngle ? point.y / maxValue : Math.sqrt(point.y / maxValue) : 1;
  };

  return FunnelPoint;
}(_componentInterface2['default']);

exports['default'] = FunnelPoint;

/***/ }),

/***/ 752:
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

var _fusioncharts = __webpack_require__(354);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _pyramid = __webpack_require__(753);

var _pyramid2 = _interopRequireDefault(_pyramid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * Class for Pyramid chart
 * @class Pyramid
 * @extends {FunnelPyramidBase}
 */
var Pyramid = function (_FunnelPyramidBase) {
  _inherits(Pyramid, _FunnelPyramidBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pyramid.getName = function getName() {
    return 'Pyramid';
  };
  /**
  * Creates an instance of Pyramid.
  * @memberof Pyramid
  */


  function Pyramid() {
    _classCallCheck(this, Pyramid);

    var _this = _possibleConstructorReturn(this, _FunnelPyramidBase.call(this));

    _this.useSortedData = false;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Pyramid.prototype.getName = function getName() {
    return 'Pyramid';
  };
  /**
  * Sets default configuration
  * @memberof Pyramid
  */


  Pyramid.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _FunnelPyramidBase.prototype.__setDefaultConfig && _FunnelPyramidBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Funnel Chart';
    config.defaultDatasetType = 'pyramid';
  };
  /**
   * Configures Attributes of chart
   *
   * @memberof Funnel
   */


  Pyramid.prototype.configureAttributes = function configureAttributes() {
    _FunnelPyramidBase.prototype.configureAttributes.call(this);
    this.config.PLOT_COLOR_INDEX_START = 0;
  };
  /**
  * This method return the dataset definations for this chart
  * @return {Object} dataset
  * @memberof Pyramid
  */


  Pyramid.prototype.getDSdef = function getDSdef() {
    return _pyramid2['default'];
  };

  return Pyramid;
}(_fusioncharts2['default']);

exports['default'] = Pyramid;

/***/ }),

/***/ 753:
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

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _lib = __webpack_require__(5);

var _funnelpyramidbase = __webpack_require__(355);

var _funnelpyramidbase2 = _interopRequireDefault(_funnelpyramidbase);

var _schedular = __webpack_require__(13);

var _pyramidPoint = __webpack_require__(754);

var _pyramidPoint2 = _interopRequireDefault(_pyramidPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_END = _lib.preDefStr.POSITION_END,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    POINTER = 'pointer',
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    textHAlign = {
  right: POSITION_END,
  left: POSITION_START,
  middle: POSITION_MIDDLE,
  start: POSITION_START,
  end: POSITION_END,
  center: POSITION_MIDDLE,
  'undefined': _lib.BLANK,
  BLANK: _lib.BLANK
};
/**
 * Creates PyramidDataset class
 */

var PyramidDataset = function (_FunnelPyramidBaseDat) {
  _inherits(PyramidDataset, _FunnelPyramidBaseDat);

  /**
   * Constructor function of PyramidDataset class
   */
  function PyramidDataset() {
    _classCallCheck(this, PyramidDataset);

    var _this = _possibleConstructorReturn(this, _FunnelPyramidBaseDat.call(this));

    _this.preDrawingHook = function () {
      // Not required
    };
    _this.config.pointInContext = _pyramidPoint2['default'];
    _this.config.LABEL_PLACEMENT_ITERATOR_INDEX_START = 0;
    return _this;
  } /**
    * Sets the type of the component
    * @return {string} type
    */


  PyramidDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  PyramidDataset.prototype.getName = function getName() {
    return 'pyramid';
  };
  /**
    * Configures Dataset by parsing attribute values
    * @param  {Object} datasetJSON JSON for dataset configurations
    * @return {boolean} Indicates whether the configuration was successful or not
    */


  PyramidDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.config.JSONData = datasetJSON;
    var datasetDefStore = this,
        chartConfig = datasetDefStore.getFromEnv('chartConfig');

    if (!datasetDefStore._checkValidData(datasetDefStore.config.JSONData.data)) {
      return;
    }
    /**
     * update the data before calling addlegend so that the legenditems of
     * removed datas do not get drawn
     */
    datasetDefStore._configure();
    chartConfig.showLegend && datasetDefStore.addLegend();
  };
  /**
   * Configure specific attributes for pyramid
   */


  PyramidDataset.prototype.configureSpecifics = function configureSpecifics() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        datasetConf = datasetStore.config,
        chartAttr = chart.getFromEnv('dataSource') ? chart.getFromEnv('dataSource').chart : {},
        utils = datasetStore.utils(datasetStore),
        copyProperties = utils.copyProperties;

    copyProperties(chartAttr, datasetConf, [['pyramidyscale', 'yScale', _lib.pluckNumber, UNDEF, function (datasetConf) {
      var ys = datasetConf.yScale;
      datasetConf.yScale = ys >= 0 && ys <= 40 ? ys / 200 : 0.2;
    }], ['use3dlighting', 'use3DLighting', _lib.pluckNumber, 1]]);
  };

  /**
   * Calculates plot position during space management
   *
   * @memberof PyramidDataset
   */


  PyramidDataset.prototype.calculatePositionOfPlots = function calculatePositionOfPlots() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        chartConfig = chart.config,
        conf = datasetStore.config,
        utils = datasetStore.utils(datasetStore),
        DistributionMatrix = utils.DistributionMatrix,
        calculatePositionCoordinate = datasetStore.calculatePositionCoordinate,
        psmMargin = conf.psmMargin,
        dataStore = datasetStore.components.data,
        index,
        length,
        plotObj,
        unitHeight,
        heightAllotted,
        widthAllotted,
        drawingRadius,
        section = 2,
        dataStoreLength = dataStore.length,
        alignmentType,
        distributionKey,
        currentSliceHeight = 0,
        blockLabelLenFromOffset,
        blockLenFromOffset = 0,
        lineHeight = conf.lineHeight,
        mFloorFn = Math.floor,
        distributedResult,
        dMatrix,
        adMatrix,
        curr,
        ele,
        distributionMatrix,
        inclination;

    datasetStore.postPlotCallback = _lib.stubFN;

    chartConfig.canvasTop += chartConfig.marginTop - psmMargin.top;
    chartConfig.effCanvasHeight = heightAllotted = chartConfig.canvasHeight - (chartConfig.marginTop + chartConfig.marginBottom) + (psmMargin.top + psmMargin.bottom);
    chartConfig.effCanvasWidth = widthAllotted = chartConfig.width - (chartConfig.marginLeft + chartConfig.marginRight);
    drawingRadius = conf.drawingRadius = widthAllotted / section;
    conf.x = drawingRadius + chartConfig.canvasLeft;

    inclination = Math.atan(widthAllotted / 2 / heightAllotted);

    conf.unitHeight = unitHeight = heightAllotted / conf.sumValue;
    conf.lastRadius = 0;

    // For funnel no x shift calculation required since the shape of the funnel causes the labels to be
    // placed in non overlapping fashion
    conf.globalMinXShift = Math.floor(lineHeight / Math.cos(inclination));

    // Defines how to align the labels of the chart.
    alignmentType = conf.alignmentType = {};

    // Default alignment is labels placing in the right side of the pyramid, and chart is left aligned
    alignmentType['default'] = 1;
    alignmentType.alternate = 2;

    // Length of distribution matrix is how many labels ca be placed at one
    // side of the pyramid without overlapping
    distributionMatrix = new DistributionMatrix(mFloorFn(heightAllotted / lineHeight));

    for (index = 0, length = dataStoreLength; index < length; index++) {
      plotObj = dataStore[index];

      currentSliceHeight = plotObj.y * unitHeight;
      // Effective length of the current slice from the top of pyramid drawing
      blockLenFromOffset += plotObj.y * unitHeight;
      blockLabelLenFromOffset = blockLenFromOffset - currentSliceHeight + currentSliceHeight / 2;
      distributionKey = mFloorFn(blockLabelLenFromOffset / lineHeight);
      distributionMatrix.push(plotObj, distributionKey);
    }

    distributedResult = distributionMatrix.getDistributedResult();

    // Alternatively merge the data after distribution
    dataStore.length = 0;
    if (distributedResult.matrix[1] === UNDEF) {
      [].push.apply(dataStore, distributedResult.matrix[0]);
    } else {
      dMatrix = distributedResult.matrix[0];
      adMatrix = distributedResult.matrix[1];
      length = Math.max(dMatrix.length, adMatrix.length);
      for (index = 0; index < length; index++) {
        ele = dMatrix[index];
        curr = adMatrix[index];
        dataStore.push(ele || curr);
      }
    }

    switch (distributedResult.suggestion) {
      case alignmentType['default']:
        calculatePositionCoordinate.call(datasetStore, dataStore, false);
        break;

      case alignmentType.alternate:
        conf.labelAlignment = alignmentType.alternate;
        // 1st section for left labels, 2nd sector for chart itself, 3rd section for right label
        section = 3;
        conf.drawingRadius = drawingRadius = widthAllotted / section;
        chartConfig.canvasLeft = chartConfig.canvasWidth / 2 - drawingRadius;
        conf.x = chartConfig.canvasLeft + drawingRadius;
        calculatePositionCoordinate.call(datasetStore, dataStore, true);
        break;
    }
  };
  /**
   * Draws the pyramid plots
   */


  PyramidDataset.prototype.draw = function draw() {
    var datasetStore = this,
        chart = datasetStore.getFromEnv('chart'),
        conf = datasetStore.config,
        trackerArgs = datasetStore.config.trackerArgs = [],
        dataStore = datasetStore.components.data,
        index,
        length,
        dataStoreLength = dataStore.length,
        mMinFn = Math.min,
        slicingDistance,
        noOfGap,
        halfDistance,
        plotItems = [],
        postPlotCallbackInitiated;

    if (!conf.sumValue) {
      return;
    }

    datasetStore.config.labelDrawingConfig = datasetStore.config.labelDrawingConfig || [];
    datasetStore.config.labelDrawingConfig.length = 0;

    datasetStore.rolloverResponseSetter = function (graphic, elemHoverAttr) {
      return function (data) {
        var ele = this;
        graphic.attr(elemHoverAttr);
        _lib.plotEventHandler.call(ele, chart, data, ROLLOVER);
      };
    };

    datasetStore.rolloutResponseSetter = function (graphic, elemUnHoverAttr) {
      return function (data) {
        var ele = this;
        graphic.attr(elemUnHoverAttr);
        _lib.plotEventHandler.call(ele, chart, data, ROLLOUT);
      };
    };

    datasetStore.animateFunction = function (group) {
      return function () {
        group.attr({
          opacity: 1
        });
      };
    };

    slicingDistance = conf.slicingDistance;
    halfDistance = slicingDistance / 2;

    for (index = 0, length = dataStore.length; index < length; index++) {
      dataStore[index] && dataStore[index].shapeArgs && (dataStore[index].shapeArgs.renderer = chart.getFromEnv('paper'));
    }
    noOfGap = conf.noOfGap;
    if (noOfGap) {
      conf.perGapDistance = mMinFn(halfDistance * 1.5, slicingDistance / noOfGap);
      conf.distanceAvailed = halfDistance;
    }
    // dlGroup.trackTooltip(true);
    index = dataStore.length;

    if (conf.alreadyPlotted) {
      datasetStore.postPlotCallback = function () {
        if (postPlotCallbackInitiated) {
          return;
        }

        postPlotCallbackInitiated = true;
      };
    }

    while (index--) {
      plotItems.push(datasetStore.drawIndividualPlot(dataStore[index], index));
    }
    conf.oldLastData = (0, _assign2['default'])({}, dataStore[dataStore.length - 1].shapeArgs);
    datasetStore.hide(datasetStore.components.draw, dataStoreLength);

    conf.connectorEndSwitchHistoryY = {};

    index = dataStore.length;
    while (index--) {
      trackerArgs.push(dataStore[index]);
    }

    datasetStore.addJob('labelDrawID', datasetStore.drawAllLabels.bind(datasetStore), _schedular.priorityList.label);

    datasetStore.addJob('trackerDrawID', datasetStore.drawAllTrackers.bind(datasetStore), _schedular.priorityList.tracker);

    datasetStore.removeElements();
    conf.alreadyPlotted = true;
    conf.prevIs2d = conf.is2d;
  };
  /**
   * Calculates the data plot coordinates
   * @param {Array} dataArr data points
   * @param {boolean} placeOtherSide whether to put on left side or right side
   */


  PyramidDataset.prototype.calculatePositionCoordinate = function calculatePositionCoordinate(dataArr, placeOtherSide) {
    var datasetStore = this,
        conf = datasetStore.config,
        is2d = conf.is2d,
        x = conf.x,

    // plotItemArr = datasetStore.graphics.plotItems || [],
    chart = datasetStore.getFromEnv('chart'),
        chartConfig = chart.config,
        y = chartConfig.canvasTop,
        unitHeight = conf.unitHeight,
        labelDistance = conf.labelDistance,
        showLabelsAtCenter = conf.showLabelsAtCenter,
        fontSize = chartConfig.style.fontSize,
        yShift = fontSize * 0.3,
        yScale = conf.yScale,
        blankSpace = conf.blankSpace,
        lastRadius = conf.lastRadius,
        smartLabel = datasetStore.getFromEnv('smartLabel'),
        index,
        length,
        point,
        sliceHeight,
        lastIndex = dataArr.length - 1,
        alignmentSwitchToggle = false,
        distributionOffset = 0,
        labelMeasurement,
        newRadius,
        negativeSpanningDataEnd,
        normalizedLabel,
        lineHeight = conf.lineHeight,
        totalValues = 0,

    // Base of the  maximum trimmed label.
    trimmedInfo = {
      flag: false,
      point: UNDEF,
      sLabel: UNDEF,
      setAll: function setAll(flag, point, sLabel) {
        this.flag = flag;
        this.point = point;
        this.sLabel = sLabel;
      }
    },

    // Base of the maximum spanned labels
    largestLabel = {
      point: UNDEF,
      sLabel: UNDEF,
      set: function set(calcFn, predicate) {
        var _calcFn = calcFn,
            _predicate = predicate;
        return function (point, sLabel) {
          var existingLabelSpan, currentLabelSpan;
          if (point.dontPlot) {
            return;
          }

          if (!(this.point && this.sLabel)) {
            this.point = point;
            this.sLabel = sLabel;
            return;
          }
          existingLabelSpan = _calcFn(this.point, this.sLabel);
          currentLabelSpan = _calcFn(point, sLabel);
          if (_predicate(existingLabelSpan, currentLabelSpan)) {
            this.point = point;
            this.sLabel = sLabel;
          }
        };
      }
    },
        leftTrimmedInfo = {},
        rightTrimmedInfo = {},
        lLargestLabel = {},
        rLargestLabel = {},
        xPos,
        chartWidth = chart.config.width - 2,
        slicingGapPosition = conf.slicingGapPosition = {};

    (0, _lib.extend2)(leftTrimmedInfo, trimmedInfo);
    (0, _lib.extend2)(rightTrimmedInfo, trimmedInfo);

    leftTrimmedInfo.setAll = function (flag, point, sLabel) {
      var _point = this.point,
          _sLabel = this.sLabel,
          existingLabelSpan,
          currentLabelSpan;

      this.flag = flag;
      if (!(_point && _sLabel)) {
        this.point = point;
        this.sLabel = sLabel;
        return;
      }
      existingLabelSpan = _point.labelX - (_sLabel.oriTextWidth - _sLabel.width);
      currentLabelSpan = point.labelX - (sLabel.oriTextWidth - sLabel.width);
      if (existingLabelSpan > currentLabelSpan) {
        this.point = point;
        this.sLabel = sLabel;
      }
    };

    // Override the base class method for labels which are kept right
    rightTrimmedInfo.setAll = function (flag, point, sLabel) {
      var _point = this.point,
          _sLabel = this.sLabel,
          existingLabelSpan,
          currentLabelSpan;

      this.flag = flag;
      if (!(_point && _sLabel)) {
        this.point = point;
        this.sLabel = sLabel;
        return;
      }
      existingLabelSpan = _point.labelX + _sLabel.oriTextWidth;
      currentLabelSpan = point.labelX + sLabel.oriTextWidth;
      if (existingLabelSpan < currentLabelSpan) {
        this.point = point;
        this.sLabel = sLabel;
      }
    };

    (0, _lib.extend2)(lLargestLabel, largestLabel);
    (0, _lib.extend2)(rLargestLabel, largestLabel);

    lLargestLabel.set = function () {
      return largestLabel.set.apply(lLargestLabel, [function (point) {
        return point.labelX;
      }, function (existingLabelSpan, currentLabelSpan) {
        return existingLabelSpan > currentLabelSpan;
      }]);
    }();

    rLargestLabel.set = function () {
      return largestLabel.set.apply(rLargestLabel, [function (point, sLabel) {
        return point.labelX + sLabel.oriTextWidth;
      }, function (existingLabelSpan, currentLabelSpan) {
        return existingLabelSpan < currentLabelSpan;
      }]);
    }();

    conf.noOfGap = 0;
    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    for (index = 0, length = dataArr.length; index < length; index++) {
      point = dataArr[index];
      if (!point) {
        continue;
      }
      point.x = index;
      if (point.plot) {
        point.isSliced = !!point.isSliced || !!conf.isSliced;
      }
      point.isSliced = (0, _lib.pluckNumber)(point.isSliced, conf.isSliced);

      placeOtherSide && (alignmentSwitchToggle = !alignmentSwitchToggle);

      if (point.isSliced) {
        xPos = point.x;
        if (xPos && !slicingGapPosition[xPos]) {
          slicingGapPosition[xPos] = true;
          conf.noOfGap += 1;
        }
        if (xPos < lastIndex) {
          slicingGapPosition[xPos + 1] = true;
          conf.noOfGap += 1;
        }
      }

      smartLabel.setStyle(point.style);
      point.oriText = point.displayValue;
      labelMeasurement = labelMeasurement = smartLabel.getSmartText(point.displayValue, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);

      totalValues += point.y;
      newRadius = conf.drawingRadius * totalValues / conf.sumValue;
      sliceHeight = unitHeight * point.y;
      point.shapeArgs = {
        x: x,
        y: y,
        R1: lastRadius,
        R2: newRadius,
        h: sliceHeight,
        r3dFactor: yScale,
        gStr: 'point',
        is2D: is2d,
        use3DLighting: !!conf.use3DLighting,
        renderer: datasetStore.getFromEnv('paper')
      };

      if (showLabelsAtCenter) {
        point.labelAline = POSITION_MIDDLE;
        point.labelX = x;
        point.labelY = (is2d ? y : y + yScale * lastRadius) + sliceHeight / 2 + yShift;
      } else {
        point.labelAline = POSITION_START;
        point.alignmentSwitch = alignmentSwitchToggle;
        point.distributionFactor = point.distributionFactor || 0;

        if (alignmentSwitchToggle) {
          point.labelX = x - (labelDistance + (newRadius + lastRadius) / 2 + blankSpace + labelMeasurement.width);
          point.labelX -= point.distributionFactor * conf.globalMinXShift;
          lLargestLabel.set(point, labelMeasurement);
        } else {
          point.labelX = x + labelDistance + (newRadius + lastRadius) / 2 + blankSpace;
          point.labelX += point.distributionFactor * conf.globalMinXShift;
          rLargestLabel.set(point, labelMeasurement);
        }
        distributionOffset = point.distributionFactor * lineHeight;

        point.labelY = y + yShift + sliceHeight / 2 + distributionOffset;
      }

      // Checking text overflow for alternate alignment
      if (placeOtherSide) {
        if (alignmentSwitchToggle && point.labelX < 0) {
          // Left and behind the margin
          negativeSpanningDataEnd = point.labelX + labelMeasurement.width;
          normalizedLabel = smartLabel.getSmartText(point.displayValue, negativeSpanningDataEnd, Number.POSITIVE_INFINITY, true);
          point.labelX = 2;
          point.isLabelTruncated = true;
          point.displayValue = normalizedLabel.text;
          point.virtualWidth = normalizedLabel.maxWidth;
          leftTrimmedInfo.setAll(true, point, normalizedLabel);
        } else if (!alignmentSwitchToggle && point.labelX + labelMeasurement.width > chartWidth) {
          // Right side and spanning the margin
          normalizedLabel = smartLabel.getSmartText(point.displayValue, chartWidth - point.labelX, Number.POSITIVE_INFINITY, true);
          point.isLabelTruncated = true;
          point.displayValue = normalizedLabel.text;
          point.virtualWidth = normalizedLabel.maxWidth;
          rightTrimmedInfo.setAll(true, point, normalizedLabel);
        }

        point.pWidth = point.virtualWidth || labelMeasurement.width;
        distributionOffset = point.distributionFactor * lineHeight;
        point.labelY = y + yShift + sliceHeight / 2 + distributionOffset;
      }

      y += sliceHeight;
      point.plotX = x;
      point.plotY = y - sliceHeight / 2;
      lastRadius = newRadius;
      point.virtualWidth = point.virtualWidth || labelMeasurement.width;
    }

    // Recalculate the space one more time. Ideally this should be given by space manager.
    // However in the current scope space manager cannot be called from here.
    datasetStore.findBestPosition(dataArr, {
      'lTrimmedInfo': leftTrimmedInfo,
      'rTrimmedInfo': rightTrimmedInfo,
      'lLargestLabel': lLargestLabel,
      'rLargestLabel': rLargestLabel
    });
  };
  /**
   * Draws individual data plots
   * @param {Object} point data object
   * @param {number} index data index
   * @return {Object} plot item object
   */


  PyramidDataset.prototype.drawIndividualPlot = function drawIndividualPlot(point, index) {
    var datasetStore = this,
        conf = datasetStore.config,
        toolTipController = datasetStore.getFromEnv('toolTipController'),

    // plotItems = datasetStore.graphics.plotItems,
    value = point.y,
        displayValue = point.displayValue,
        chartSliced = conf.isSliced,
        textDirection = _lib.BLANK,
        chart = datasetStore.getFromEnv('chart'),
        animationManager = datasetStore.getFromEnv('animationManager'),

    //  data = datasetStore.components.data,
    trackerGroup = chart.getChildContainer('trackerGroup'),
        dataLabelsGroup = chart.getChildContainer('datalabelsGroup'),
        graphicsGroup = chart.getChildContainer().plotGroup,
        sliced,
        plotItem = point.plot,
        translateXY,
        setLink = !!point.link,
        graphic,
        tempConfig,
        trackerObj,
        Point = conf.pointInContext,
        distanceAvailed = conf.distanceAvailed,
        setRolloutAttr,
        labelAlign = point.labelAline,
        css = point.appliedStyle,
        parentCSS = point.style,
        setRolloverAttr,
        setRolloverProperties,
        sliceContext,

    // legend = datasetStore.getFromEnv('legend'),
    textDrawingArgs,
        labelDrawingConfigArr = datasetStore.config.labelDrawingConfig,
        pointFill,
        labelDrawingConfig;

    // In case of streamlinedData = 0, the first plot is not configured
    if (!(point instanceof _pyramidPoint2['default'])) {
      tempConfig = point;
      point = new Point();
      point.configure(tempConfig);
      datasetStore.components.data[index] = point;
    }

    if (conf.prevIs2d && conf.prevIs2d !== conf.is2d) {
      animationManager.setAnimation({
        el: graphicsGroup,
        attr: { opacity: 1 },
        component: datasetStore
      });
      animationManager.setAnimation({
        el: dataLabelsGroup,
        attr: { opacity: 1 },
        component: datasetStore
      });
    }

    pointFill = css && css.color || parentCSS && parentCSS.color || datasetStore._chartLevelAttr.color;
    sliced = chartSliced ? 1 : point.isSliced;

    textDrawingArgs = {
      text: displayValue,
      ishot: true,
      direction: textDirection,
      cursor: setLink ? POINTER : _lib.BLANK,
      x: 0,
      y: 0,
      fill: pointFill,
      'text-anchor': textHAlign[labelAlign]
    };

    if (value === null || value === UNDEF || !point.shapeArgs) {
      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };

      return;
    }

    graphic = point.getGraphicalElement('graphic');
    trackerObj = point.getGraphicalElement('trackerObj');

    if (!plotItem) {
      point.shapeArgs.graphics = plotItem;

      point.plot = plotItem = {};
      graphic = datasetStore.pyramidFunnelShape(point.shapeArgs);
      trackerObj = animationManager.setAnimation({
        el: 'path',
        container: trackerGroup,
        component: datasetStore
      });

      animationManager.setAnimation({
        el: graphic,
        attr: {
          fill: point.color,
          'stroke-width': point.borderWidth,
          stroke: point.borderColor
        },
        component: datasetStore
      });

      point.addGraphicalElement('graphic', graphic);
      point.addGraphicalElement('trackerObj', trackerObj);

      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };
    } else {
      point.shapeArgs.graphics = graphic;
      graphic = datasetStore.pyramidFunnelShape(point.shapeArgs);
      point.addGraphicalElement('graphic', graphic);

      animationManager.setAnimation({
        el: graphic,
        attr: {
          fill: point.color,
          'stroke-width': point.borderWidth,
          stroke: point.borderColor
        },
        component: datasetStore
      });
      graphic.show();

      labelDrawingConfigArr[index] = labelDrawingConfig = {
        args: textDrawingArgs,
        css: css,
        point: point
      };
    }

    if (conf.showTooltip) {
      toolTipController.enableToolTip(trackerObj, point.toolText);
    } else {
      toolTipController.disableToolTip(trackerObj);
    }

    plotItem.value = value;
    plotItem.displayValue = displayValue;
    plotItem.sliced = !!sliced;
    plotItem.cursor = setLink ? POINTER : _lib.BLANK;
    plotItem.x = point.x;
    plotItem.index = index;

    // Hover consmetics
    setRolloutAttr = setRolloverAttr = {};
    if (point.hoverEffects) {
      setRolloutAttr = {
        color: point.rawColor,
        opacity: point.rawAlpha,
        'stroke-width': point.borderWidth,
        stroke: point.borderColor
      };

      setRolloverProperties = point.rolloverProperties;

      setRolloverAttr = {
        color: setRolloverProperties.color,
        opacity: setRolloverProperties.alpha,
        'stroke-width': setRolloverProperties.borderWidth,
        stroke: setRolloverProperties.borderColor
      };
    }

    sliceContext = {
      datasetStore: datasetStore,
      plotItem: plotItem
    };

    trackerObj.unclick(datasetStore.slice);
    !point.doNotSlice && trackerObj.click(datasetStore.slice, sliceContext);

    trackerObj.mouseup(datasetStore.plotMouseUp, plotItem);

    trackerObj.hover(datasetStore.rolloverResponseSetter(graphic, setRolloverAttr), datasetStore.rolloutResponseSetter(graphic, setRolloutAttr));

    labelDrawingConfig.context = sliceContext;
    labelDrawingConfig.actions = {
      click: datasetStore.slice,
      hover: [datasetStore.rolloverResponseSetter(graphic, setRolloverAttr), datasetStore.rolloutResponseSetter(graphic, setRolloutAttr)]
    };

    plotItem.dy = 0;

    if (conf.noOfGap) {
      if (distanceAvailed) {
        plotItem._startTranslateY = translateXY = 't0,' + distanceAvailed;
        plotItem.dy = plotItem.distanceAvailed = distanceAvailed;
      }

      if (conf.slicingGapPosition[point.x]) {
        conf.distanceAvailed -= conf.perGapDistance;
      }
    } else {
      plotItem._startTranslateY = translateXY = 't0,' + 0;
    }

    animationManager.setAnimation({
      el: graphic,
      attr: { transform: translateXY },
      component: datasetStore
    });
    labelDrawingConfig.transform = translateXY;
    return plotItem;
  };
  /**
  *Method that returns the handler for legend interaction
  * @param {Object} dataset the pyramid dataset
  * @param {number} legendItemIndex index of the legend-item clicked
  * @return {Function} the handler
  */
  // eslint-disable-next-line


  PyramidDataset.prototype.legendClickHandler = function legendClickHandler(dataset, legendItemIndex) {
    return function () {
      var plotItems = dataset.components.data,
          plotItem = plotItems[legendItemIndex].plot;
      dataset.legendClick({ datasetStore: dataset, plotItem: plotItem }, true, false);
    };
  };
  /**
   * Provides tooltip options
   * @param {Object} options congigurations of data points
   * @return {Object} returns tooltip options
   */


  PyramidDataset.prototype.getTooltipMacroStub = function getTooltipMacroStub(options) {
    var datasetStore = this,
        conf = datasetStore.config,
        numberFormatter = datasetStore.getFromEnv('number-formatter'),
        base = datasetStore.__base__,
        baseStub,
        percentOfPrevValue;

    percentOfPrevValue = conf.percentOfPrevious ? options.pValue : numberFormatter.percentValue(options.dataValue / options.prevValue * 100);
    baseStub = base.getTooltipMacroStub(options);
    baseStub.percentValue = conf.percentOfPrevious ? numberFormatter.percentValue(options.dataValue / options.highestValue * 100) : options.pValue;
    baseStub.percentOfPrevValue = percentOfPrevValue;

    return baseStub;
  };

  return PyramidDataset;
}(_funnelpyramidbase2['default']);

exports['default'] = PyramidDataset;

/***/ }),

/***/ 754:
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

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var PyramidPoint = function (_ComponentInterface) {
  _inherits(PyramidPoint, _ComponentInterface);

  function PyramidPoint() {
    _classCallCheck(this, PyramidPoint);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Consfigures the point
   *
   * @param {any} [options={}]
   * @memberof PyramidPoint
   */
  PyramidPoint.prototype.configure = function configure() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var key in options) {
      this[key] = options[key];
    }
    this.upperRadiusFactor = 0;
  };

  PyramidPoint.prototype.getModifiedCurrentValue = function getModifiedCurrentValue(totalValue) {
    return totalValue + this.y / 2;
  };

  // eslint-disable-next-line


  PyramidPoint.prototype.getRatioK = function getRatioK(context, currentValue) {
    var conf = context.config;
    return currentValue ? currentValue / conf.sumValue : 1;
  };

  // eslint-disable-next-line


  PyramidPoint.prototype.getLowestRadiusFactor = function getLowestRadiusFactor() {
    return 1;
  };

  return PyramidPoint;
}(_componentInterface2['default']);

exports['default'] = PyramidPoint;

/***/ }),

/***/ 755:
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

var _fusioncharts = __webpack_require__(229);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _sparkcolumn = __webpack_require__(756);

var _sparkcolumn2 = _interopRequireDefault(_sparkcolumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var convertColor = _lib.graphics.convertColor,
    math = Math,
    mathMax = math.max;
/**
 * Creates SparkColumn class
 */

var SparkColumn = function (_SparkChartBase) {
  _inherits(SparkColumn, _SparkChartBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SparkColumn.getName = function getName() {
    return 'SparkColumn';
  };

  /**
   * Constructor function of SparkColumn class
   */


  function SparkColumn() {
    _classCallCheck(this, SparkColumn);

    var _this = _possibleConstructorReturn(this, _SparkChartBase.call(this));

    _this.canvasborderthickness = 1;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkColumn.prototype.getName = function getName() {
    return 'SparkColumn';
  };
  /**
   * Set default configurations for chart
   */


  SparkColumn.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SparkChartBase.prototype.__setDefaultConfig && _SparkChartBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'sparkcolumn Chart';
    config.singleseries = false;
    config.defaultDatasetType = 'sparkcolumn';
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * Returns Class SparkColumnDataset
   * @return {Class} SparkColumnDataset class
   */


  SparkColumn.prototype.getDSdef = function getDSdef() {
    return _sparkcolumn2['default'];
  };
  /**
   * Configure default canvas cosmetics
   */


  SparkColumn.prototype._parseCanvasCosmetics = function _parseCanvasCosmetics() {
    var canvasBorderThickness,
        canBGAlpha,
        showCanvasBorder,
        shadow,
        iapi = this,
        config = iapi.config,
        canvasConfig = iapi.getChildren('canvas')[0].config,
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        colorM = iapi.getFromEnv('color-manager'),
        is3D = iapi.config.is3D,
        oriCanvasBorderThickness,
        palleteString = is3D ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D,
        isRoundEdges = canvasConfig.isRoundEdges = (0, _lib.pluckNumber)(chartAttrs.useroundedges, 0),
        showAxisLine = (0, _lib.pluckNumber)(chartAttrs.showxaxisline, chartAttrs.showyaxisline, 0),
        hideAxisLine = showAxisLine ? 0 : 1;

    canvasConfig.canvasBorderRadius = (0, _lib.pluckNumber)(chartAttrs.plotborderradius, isRoundEdges ? 2 : 0);

    showCanvasBorder = canvasConfig.showCanvasBorder = Boolean((0, _lib.pluckNumber)(chartAttrs.showcanvasborder, hideAxisLine, canvasBorderThickness, isRoundEdges ? 0 : 1));

    // Storing original canvasBorderThickness for future reference
    oriCanvasBorderThickness = canvasConfig.oriCanvasBorderThickness = mathMax((0, _lib.pluckNumber)(chartAttrs.canvasborderthickness, isRoundEdges ? 0 : (0, _lib.pluckNumber)(iapi.canvasborderthickness, 1), 0));

    canvasBorderThickness = canvasConfig.canvasBorderWidth = iapi.is3D ? 0 : showCanvasBorder ? oriCanvasBorderThickness : 0;

    canvasConfig.canvasBorderColor = convertColor((0, _lib.pluck)(chartAttrs.canvasbordercolor, colorM.getColor('canvasBorderColor')), (0, _lib.pluck)(chartAttrs.canvasborderalpha, colorM.getColor('canvasBorderAlpha')));
    canBGAlpha = canvasConfig.canBGAlpha = (0, _lib.pluck)(chartAttrs.canvasbgalpha, colorM.getColor('canvasBgAlpha'));

    canvasConfig.canBGColor = {
      FCcolor: {
        color: (0, _lib.pluck)(chartAttrs.canvasbgcolor, colorM.getColor(palleteString.canvasBgColor)),
        alpha: (0, _lib.pluck)(chartAttrs.canvasbgalpha, 100),
        angle: (0, _lib.pluck)(chartAttrs.canvasbgangle, 0),
        ratio: (0, _lib.pluck)(chartAttrs.canvasbgratio)
      }
    };

    shadow = canvasConfig.shadow = (0, _lib.pluckNumber)(chartAttrs.showshadow, isRoundEdges, 0) && isRoundEdges ? {
      enabled: true,
      opacity: canBGAlpha / 100
    } : 0;
    canvasConfig.shadowOnCanvasFill = shadow && shadow.enabled;

    // borderThickness = pluckNumber(chartAttrs.showborder, 1) ? pluckNumber(chartAttrs.borderthickness, 1) : 0;
    // chart margins
    config.origMarginTop = (0, _lib.pluckNumber)(chartAttrs.charttopmargin, 3);
    config.origMarginLeft = (0, _lib.pluckNumber)(chartAttrs.chartleftmargin, 3);
    config.origMarginBottom = (0, _lib.pluckNumber)(chartAttrs.chartbottommargin, 3);
    config.origMarginRight = (0, _lib.pluckNumber)(chartAttrs.chartrightmargin, 3);

    config.origCanvasLeftMargin = (0, _lib.pluckNumber)(chartAttrs.canvasleftmargin);
    config.origCanvasRightMargin = (0, _lib.pluckNumber)(chartAttrs.canvasrightmargin);
    config.origCanvasTopMargin = (0, _lib.pluckNumber)(chartAttrs.canvastopmargin);
    config.origCanvasBottomMargin = (0, _lib.pluckNumber)(chartAttrs.canvasbottommargin);

    // canvas padding
    canvasConfig.canvasPadding = (0, _lib.pluckNumber)(chartAttrs.canvaspadding, 0);

    canvasConfig.origCanvasTopPad = (0, _lib.pluckNumber)(chartAttrs.canvastoppadding, 0);
    canvasConfig.origCanvasBottomPad = (0, _lib.pluckNumber)(chartAttrs.canvasbottompadding, 0);
    canvasConfig.origCanvasLeftPad = (0, _lib.pluckNumber)(chartAttrs.canvasleftpadding, 0);
    canvasConfig.origCanvasRightPad = (0, _lib.pluckNumber)(chartAttrs.canvasrightpadding, 0);
  };

  return SparkColumn;
}(_fusioncharts2['default']);

exports['default'] = SparkColumn;

/***/ }),

/***/ 756:
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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    getLightColor = _lib.graphics.getLightColor,
    math = Math,
    mathMin = math.min,

// mathRound = math.round,
getColumnColor = _lib.graphics.getColumnColor;
/**
 * Creates class SparkColumnDataset
 */

var SparkColumnDataset = function (_ColumnDataset) {
  _inherits(SparkColumnDataset, _ColumnDataset);

  function SparkColumnDataset() {
    _classCallCheck(this, SparkColumnDataset);

    return _possibleConstructorReturn(this, _ColumnDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  SparkColumnDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkColumnDataset.prototype.getName = function getName() {
    return 'sparkColumn';
  };
  /**
   * Configures data level attribute settings
   * @param {Object} newDataset newly added dataset object
   */


  SparkColumnDataset.prototype._setConfigure = function _setConfigure(newDataset) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartAttr = chart.getFromEnv('dataSource').chart,
        conf = dataSet.config,
        chartConfig = chart.config,
        JSONData = dataSet.config.JSONData,
        setDataArr = newDataset || JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        xAxis = dataSet.getFromEnv('xAxis'),
        catLen = xAxis.getTicksLen(),
        len = newDataset && newDataset.data.length || mathMin(catLen, setDataLen),
        showHoverEffect = chartConfig.plothovereffect,
        colorM = dataSet.getFromEnv('color-manager'),
        isRoundEdges = chartConfig.useroundedges,
        plotFillColor,
        color,
        borderColor,
        hoverColor,
        hoverAlpha,
        hoverGradientColor,
        hoverBorderColor,
        hoverBorderAlpha,
        borderThickness,
        config,
        plotFillAlpha,
        plotBorderAlpha,
        plotBorderColor,
        highColor,
        lowColor,
        highBorderColor,
        lowBorderColor,
        highDisplayValue,
        lowDisplayValue,
        macroIndices,
        parserConfig,
        setData,
        dataObj,
        colorArr,
        hoverColorArr,
        i,
        cLen,
        cInd,
        dataStore,
        maxValue,
        minValue;

    conf.plotgradientcolor = _lib.BLANKSTRING;
    conf.showvalues = (0, _lib.pluckNumber)(JSONData.showvalues, chartAttr.showvalues, 0);
    conf.showShadow = (0, _lib.pluckNumber)(chartAttr.showshadow, 0);

    // this.__base__._setConfigure.call(this);
    _ColumnDataset.prototype._setConfigure.call(this);

    dataStore = dataSet.components.data;
    maxValue = conf.maxValue;
    minValue = conf.minValue;

    plotFillColor = (0, _lib.pluck)(chartAttr.plotfillcolor, colorM.getColor('plotFillColor'));
    plotFillAlpha = (0, _lib.pluck)(chartAttr.plotfillalpha, _lib.HUNDREDSTRING);
    plotBorderAlpha = (0, _lib.pluck)(chartAttr.plotborderalpha, _lib.HUNDREDSTRING);
    plotBorderColor = (0, _lib.pluck)(chartAttr.plotbordercolor, plotFillColor);

    // Fill Color for high column and low column
    highColor = (0, _lib.pluck)(chartAttr.highcolor, '000000');
    lowColor = (0, _lib.pluck)(chartAttr.lowcolor, '000000');
    highBorderColor = (0, _lib.pluck)(chartAttr.highbordercolor, chartAttr.plotbordercolor, highColor);
    lowBorderColor = (0, _lib.pluck)(chartAttr.lowbordercolor, chartAttr.plotbordercolor, lowColor);
    // conf.plotBorderThickness = borderThickness = pluckNumber(chartAttr.showplotborder, 0) ?
    //         pluckNumber(chartAttr.plotborderthickness, 1) : 0;

    // Loop through datastore and change the cosmetics
    for (i = 0; i < len; i++) {
      // Original data provided by user
      setData = setDataArr[i];
      // Parsed data previously
      dataObj = dataStore[i];
      config = dataObj.config;
      colorArr = null;

      color = plotFillColor;
      borderColor = plotBorderColor;

      // Max value
      if (config.setValue == maxValue) {
        color = highColor;
        borderColor = highBorderColor;
        highDisplayValue = config.displayValue;
      }
      // Min value
      if (dataObj.config.setValue == minValue) {
        color = lowColor;
        borderColor = lowBorderColor;
        lowDisplayValue = config.displayValue;
      }

      // Setting the color Array to be applied to the bar/column.
      config.colorArr = colorArr = getColumnColor(color + _lib.COMMASTRING + conf.plotgradientcolor, plotFillAlpha, '0', '90', isRoundEdges, borderColor, plotBorderAlpha, 0, 0);

      // Parsing the hover effects only if showhovereffect is not 0.
      if (showHoverEffect !== 0 && colorArr) {
        hoverColor = hoverAlpha = UNDEF;
        // Max value
        if (config.setValue == maxValue) {
          hoverColor = chartAttr.highhovercolor;
          hoverAlpha = chartAttr.highhoveralpha;
        }
        // Min value
        if (dataObj.config.setValue == minValue) {
          hoverColor = chartAttr.lowhovercolor;
          hoverAlpha = chartAttr.lowhoveralpha;
        }

        hoverColor = (0, _lib.pluck)(setData.hovercolor, JSONData.hovercolor, hoverColor, chartAttr.plotfillhovercolor, chartAttr.columnhovercolor, colorArr[0].FCcolor.color);

        hoverColor = hoverColor.split(/\s{0,},\s{0,}/);

        cLen = hoverColor.length;
        for (cInd = 0; cInd < cLen; cInd++) {
          hoverColor[cInd] = getLightColor(hoverColor[cInd], 70);
        }

        hoverColor = hoverColor.join(',');

        hoverAlpha = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, hoverAlpha, chartAttr.plotfillhoveralpha, chartAttr.columnhoveralpha, plotFillAlpha);

        hoverGradientColor = (0, _lib.pluck)(setData.hovergradientcolor, JSONData.hovergradientcolor, chartAttr.plothovergradientcolor, conf.plotgradientcolor);
        !hoverGradientColor && (hoverGradientColor = _lib.BLANKSTRING);

        hoverBorderColor = (0, _lib.pluck)(setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, conf.plotbordercolor);
        hoverBorderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, chartAttr.plotfillhoveralpha, plotBorderAlpha, plotFillAlpha);
        // hoverBorderThickness = pluckNumber(setData.borderhoverthickness,
        //               JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, borderThickness);

        /* If no hover effects are explicitly defined and
                   * showHoverEffect is not 0 then hoverColor is set.
                   */
        if (showHoverEffect == 1 && hoverColor === colorArr[0].FCcolor.color) {
          hoverColor = getLightColor(hoverColor, 70);
        }
        // setting the hover color array which is always applied except when showHoverEffect is not 0.
        hoverColorArr = getColumnColor(hoverColor + _lib.COMMASTRING + hoverGradientColor, hoverAlpha, '0', '90', isRoundEdges, hoverBorderColor, hoverBorderAlpha.toString(), 0, 0);

        config.setRolloutAttr = {
          fill: (0, _lib.toRaphaelColor)(colorArr[0]),
          stroke: borderThickness && (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': borderThickness
        };
        config.setRolloverAttr = {
          fill: (0, _lib.toRaphaelColor)(hoverColorArr[0]),
          stroke: borderThickness && (0, _lib.toRaphaelColor)(hoverColorArr[1]),
          'stroke-width': borderThickness
        };
      }
      config._x = i;
      config._y = config.setValue;
    }
    for (i = 0; i < len; i++) {
      var _dataObj = dataStore[i],
          _config = _dataObj.config;
      if (_config.setTooltext !== UNDEF) {
        macroIndices = [56, 57, 60, 61];
        parserConfig = {
          highValue: highDisplayValue,
          highDataValue: highDisplayValue,
          lowValue: lowDisplayValue,
          lowDataValue: lowDisplayValue
        };
        _config.toolText = (0, _lib.parseTooltext)(_config.setTooltext, macroIndices, parserConfig, setData, chartAttr, JSONData);
        _config.finalTooltext = _config.setTooltext = _config.toolText;
      }
    }
  };

  return SparkColumnDataset;
}(_column2['default']);

exports['default'] = SparkColumnDataset;

/***/ }),

/***/ 757:
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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _dependencyManager = __webpack_require__(6);

var _sparkwinlossAnimation = __webpack_require__(758);

var _sparkwinlossAnimation2 = _interopRequireDefault(_sparkwinlossAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    getLightColor = _lib.graphics.getLightColor,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    GUTTER_PADDING = 2,
    drawSparkValues = function drawSparkValues() {
  var dataSet = this,
      chart = dataSet.getFromEnv('chart'),
      chartConf = chart.config,
      style = chartConf.dataLabelStyle,
      valuePadding = chartConf.valuepadding + GUTTER_PADDING,
      dataLabelContainer = dataSet.getContainer('labelGroup'),
      sparkValues = chartConf.sparkValues || (chartConf.sparkValues = {}),
      closeValue = dataSet.getGraphicalElement('closeValue'),
      animationManager = dataSet.getFromEnv('animationManager'),
      textAttr = {
    'class': 'fusioncharts-label',
    'text-anchor': _lib.POSITION_END,
    fill: style.color,
    'font-size': style.fontSize,
    'font-weight': style.fontWeight,
    'font-style': style.fontStyle,
    'font-family': style.fontFamily,
    visibility: 'visible'
  },
      attr = {
    x: 0,
    y: 0
  };

  // Spark values are not visible due to the clip-rect,
  // so removing clip-rect in order to make spark labels visible
  chart.getChildContainer('datalabelsGroup').attr({
    'clip-rect': null
  });

  attr.y = chartConf.canvasHeight * 0.5 + chartConf.canvasTop;
  textAttr['text-anchor'] = _lib.POSITION_START;
  attr.x = chartConf.canvasWidth + chartConf.canvasLeft + valuePadding;
  if (sparkValues.closeValue && sparkValues.closeValue.label) {
    dataSet.addGraphicalElement('closeValue', animationManager.setAnimation({
      el: closeValue || 'text',
      attr: {
        text: sparkValues.closeValue.label,
        x: attr.x,
        y: attr.y,
        fill: sparkValues.closeValue.color || textAttr.fill,
        'text-anchor': _lib.POSITION_START,
        'line-height': style.lineHeight,
        'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
        visibility: 'visible'
      },
      container: dataLabelContainer,
      component: dataSet,
      dom: 'text'
    }));
    attr.x += sparkValues.closeValue.smartObj && sparkValues.closeValue.smartObj.width + GUTTER_PADDING + valuePadding || 0;
  }
  dataSet.labelDrawn = true;
};
(0, _dependencyManager.addDep)({
  name: 'sparkwinlossAnimation',
  type: 'animationRule',
  extension: _sparkwinlossAnimation2['default']
});
/**
 * Creates class for SparkWinLossDataset
 */

var SparkWinLossDataset = function (_ColumnDataset) {
  _inherits(SparkWinLossDataset, _ColumnDataset);

  /**
   * Constructor funtion of SparkWinLossDataset class
   */
  function SparkWinLossDataset() {
    _classCallCheck(this, SparkWinLossDataset);

    var _this = _possibleConstructorReturn(this, _ColumnDataset.call(this));

    _this.drawLabel = drawSparkValues;
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  SparkWinLossDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkWinLossDataset.prototype.getName = function getName() {
    return 'sparkWinLoss';
  };
  /**
   * Configures data level attribute settings
   * @param {Object} newDataset newly added dataset object
   * @param {number} newIndex index of newly added dataset
   */


  SparkWinLossDataset.prototype._setConfigure = function _setConfigure(newDataset, newIndex) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        conf = dataSet.config,
        JSONData = dataSet.config.JSONData,
        setDataArr = newDataset || JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        xAxis = dataSet.getFromEnv('xAxis'),
        catLen = xAxis.getTicksLen(),
        len = newDataset && newDataset.data.length || mathMin(catLen, setDataLen),
        chartAttr = chart.getFromEnv('dataSource').chart,
        colorM = dataSet.getFromEnv('color-manager'),
        index = dataSet.index || dataSet.positionIndex,
        showplotborder = chartConfig.showplotborder,
        plotColor = conf.plotColor = colorM.getPlotColor(index),
        plotFillColor = (0, _lib.pluck)(chartAttr.plotfillcolor, colorM.getColor('plotFillColor')),
        winColor = (0, _lib.pluck)(chartAttr.wincolor, colorM.getColor('winColor')),
        lossColor = (0, _lib.pluck)(chartAttr.losscolor, colorM.getColor('lossColor')),
        drawColor = (0, _lib.pluck)(chartAttr.drawcolor, colorM.getColor('drawColor')),
        scorelessColor = (0, _lib.pluck)(chartAttr.scorelesscolor, colorM.getColor('scorelessColor')),
        winHoverColor = chartAttr.winhovercolor,
        lossHoverColor = chartAttr.losshovercolor,
        drawHoverColor = chartAttr.drawhovercolor,
        scoreLessHoverColor = chartAttr.scorelesshovercolor,
        numWon = 0,
        numLost = 0,
        numDraw = 0,
        tempPlotfillAngle,

    // toolText,
    plotDashLen,
        plotDashGap,
        plotBorderThickness = chartConfig.plotborderthickness,
        isRoundEdges = chartConfig.isroundedges,
        showHoverEffect = chartConfig.plothovereffect,
        plotfillAngle = conf.plotfillangle,
        plotFillAlpha,

    // plotRadius,
    plotFillRatio,

    // plotgradientcolor,
    plotBorderAlpha,
        plotBorderDashStyle,
        initailPlotBorderDashStyle = conf.plotBorderDashStyle,
        setData,
        setValue,
        dataObj,
        config,
        colorArr,
        hoverColor,
        hoverAlpha,
        hoverGradientColor,
        hoverRatio,
        hoverAngle,
        hoverBorderColor,
        hoverBorderAlpha,
        hoverBorderThickness,
        hoverBorderDashed,
        hoverBorderDashGap,
        hoverBorderDashLen,
        hoverDashStyle,
        hoverColorArr,

    // getDashStyle = lib.getDashStyle,
    dataStore = dataSet.components.data,

    // definedGroupPadding,
    isBar = chart.isBar,
        is3D = chart.is3D,

    // isStacked = chart.isStacked,
    // stack100Percent,
    // enableAnimation,
    setDataDashed,
        setDataPlotDashLen,
        setDataPlotDashGap,
        i,
        maxValue = conf.maxValue || -Infinity,
        minValue = conf.minValue || +Infinity,
        showPlotBorder,
        tempIndex;

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }

    _ColumnDataset.prototype._setConfigure.call(this);

    conf.plotgradientcolor = '';
    showPlotBorder = conf.showPlotBorder = (0, _lib.pluckNumber)(chartAttr.showplotborder, 0);
    conf.plotborderalpha = plotBorderAlpha = showPlotBorder ? (0, _lib.pluck)(chartAttr.plotborderalpha, plotFillAlpha, _lib.HUNDREDSTRING) : 0;
    conf.showTooltip = 0;
    chartConfig.showtooltip = 0;
    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      if (newDataset) {
        setData = newDataset && newDataset.data[i];

        if (newIndex !== UNDEF) {
          tempIndex = newIndex + i;
          dataObj = dataStore[tempIndex];
        } else {
          tempIndex = dataStore.length - len + i;
          dataObj = dataStore[tempIndex];
        }
      } else {
        dataObj = dataStore[i];
        setData = setDataArr[i];
      }

      config = dataObj && dataObj.config;

      if (!dataObj) {
        dataObj = dataStore[i] = {};
      }

      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }

      switch ((setData.value || '').toLowerCase()) {
        case 'w':
          plotColor = (0, _lib.pluck)(setData.color, winColor, plotFillColor);
          hoverColor = (0, _lib.pluck)(setData.hovercolor, winHoverColor, plotColor);
          config.setValue = setValue = 1;
          numWon += 1;
          break;
        case 'l':
          plotColor = (0, _lib.pluck)(setData.color, lossColor, plotFillColor);
          hoverColor = (0, _lib.pluck)(setData.hovercolor, lossHoverColor, plotColor);
          config.setValue = setValue = -1;
          numLost += 1;
          break;
        case 'd':
          plotColor = (0, _lib.pluck)(setData.color, drawColor, plotFillColor);
          hoverColor = (0, _lib.pluck)(setData.hovercolor, drawHoverColor, plotColor);
          config.setValue = setValue = 0.1;
          numDraw += 1;
          break;
        default:
          config.setValue = setValue = null;
      }
      if (setData.scoreless == 1) {
        plotColor = (0, _lib.pluck)(setData.color, scorelessColor, plotFillColor);
        hoverColor = (0, _lib.pluck)(setData.hovercolor, scoreLessHoverColor, setData.color, scorelessColor, hoverColor);
      }

      config.toolText = false;
      // config.showValue = pluckNumber(setData.showvalue, conf.showValues);
      config.setLink = (0, _lib.pluck)(setData.link);
      // config.toolTipValue = toolTipValue = yAxis.dataLabels(setValue);
      config.setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      // config.displayValue = pluck(setDisplayValue, toolTipValue);
      setDataDashed = (0, _lib.pluckNumber)(setData.dashed);
      setDataPlotDashLen = (0, _lib.pluckNumber)(setData.dashlen, plotDashLen);
      setDataPlotDashGap = plotDashGap = (0, _lib.pluckNumber)(setData.dashgap, conf.plotDashGap);

      if (setValue !== null) {
        maxValue = mathMax(maxValue, setValue);
        minValue = mathMin(minValue, setValue);
      }

      config.plotBorderDashStyle = plotBorderDashStyle = setDataDashed === 1 ? (0, _lib.getDashStyle)(setDataPlotDashLen, setDataPlotDashGap) : setDataDashed === 0 ? 'none' : initailPlotBorderDashStyle;

      plotFillAlpha = (0, _lib.pluck)(setData.alpha, conf.plotfillalpha);
      plotBorderAlpha = (0, _lib.pluck)(setData.alpha, conf.plotborderalpha, plotFillAlpha).toString();
      // Setting the angle for plot fill for negative data
      if (setValue < 0 && !isRoundEdges) {
        tempPlotfillAngle = conf.plotfillAngle;
        plotfillAngle = isBar ? 180 - plotfillAngle : 360 - plotfillAngle;
      }

      // Setting the color Array to be applied to the bar/column.
      config.colorArr = colorArr = _lib.graphics.getColumnColor(plotColor + ',' + conf.plotgradientcolor, plotFillAlpha, plotFillRatio = conf.plotfillratio, plotfillAngle, isRoundEdges, conf.plotbordercolor, plotBorderAlpha, isBar ? 1 : 0, !!is3D);

      config.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(xAxis.getLabel((0, _lib.pluckNumber)(tempIndex - len, i)).label));

      // Parsing the hover effects only if showhovereffect is not 0.
      if (showHoverEffect !== 0) {
        hoverColor = (0, _lib.pluck)(setData.hovercolor, JSONData.hovercolor, chartAttr.plotfillhovercolor, chartAttr.columnhovercolor, plotColor);
        hoverAlpha = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.columnhoveralpha, plotFillAlpha);
        hoverGradientColor = (0, _lib.pluck)(setData.hovergradientcolor, JSONData.hovergradientcolor, chartAttr.plothovergradientcolor, conf.plotgradientcolor);
        !hoverGradientColor && (hoverGradientColor = '');
        hoverRatio = (0, _lib.pluck)(setData.hoverratio, JSONData.hoverratio, chartAttr.plothoverratio, plotFillRatio);
        hoverAngle = (0, _lib.pluckNumber)(360 - setData.hoverangle, 360 - JSONData.hoverangle, 360 - chartAttr.plothoverangle, plotfillAngle);
        hoverBorderColor = (0, _lib.pluck)(setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, conf.plotbordercolor);
        hoverBorderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, plotBorderAlpha, plotFillAlpha);
        hoverBorderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, plotBorderThickness);
        hoverBorderDashed = (0, _lib.pluckNumber)(setData.borderhoverdashed, JSONData.borderhoverdashed, chartAttr.plotborderhoverdashed);
        hoverBorderDashGap = (0, _lib.pluckNumber)(setData.borderhoverdashgap, JSONData.borderhoverdashgap, chartAttr.plotborderhoverdashgap, plotDashLen);
        hoverBorderDashLen = (0, _lib.pluckNumber)(setData.borderhoverdashlen, JSONData.borderhoverdashlen, chartAttr.plotborderhoverdashlen, plotDashGap);
        hoverDashStyle = hoverBorderDashed ? (0, _lib.getDashStyle)(hoverBorderDashLen, hoverBorderDashGap) : plotBorderDashStyle;

        /* If no hover effects are explicitly defined and
                   * showHoverEffect is not 0 then hoverColor is set.
                   */
        if (showHoverEffect == 1 && hoverColor === plotColor) {
          hoverColor = getLightColor(hoverColor, 70);
        }
        // setting the hover color array which is always applied except when showHoverEffect is not 0.
        hoverColorArr = _lib.graphics.getColumnColor(hoverColor + ',' + hoverGradientColor, hoverAlpha, hoverRatio, hoverAngle, isRoundEdges, hoverBorderColor, hoverBorderAlpha.toString(), isBar ? 1 : 0, !!is3D);

        config.setRolloutAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(colorArr[0]) : [(0, _lib.toRaphaelColor)(colorArr[0]), !chartConfig.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle
        };
        config.setRolloverAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(hoverColorArr[0]) : [(0, _lib.toRaphaelColor)(hoverColorArr[0]), !chartConfig.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(hoverColorArr[1]),
          'stroke-width': hoverBorderThickness,
          'stroke-dasharray': hoverDashStyle
        };
      }

      // formatedVal = config.toolTipValue;

      // config.toolText = toolText;
      // config.setTooltext = toolText;
      tempPlotfillAngle && (plotfillAngle = tempPlotfillAngle);

      tempIndex++;
      config._x = i;
      config._y = setValue;
    }

    conf.maxValue = 1;
    conf.minValue = -1;

    if ((0, _lib.pluckNumber)(chartAttr.showvalue, 1) == 1) {
      chartConfig.sparkValues = {
        closeValue: {}
      };
      chartConfig.sparkValues.closeValue.label = numWon + '-' + numLost + (numDraw > 0 ? '-' + numDraw : _lib.BLANKSTRING);
    } else {
      chartConfig.sparkValues = UNDEF;
    }
  };

  return SparkWinLossDataset;
}(_column2['default']);

exports['default'] = SparkWinLossDataset;

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _columnAnimation = __webpack_require__(89);

var _columnAnimation2 = _interopRequireDefault(_columnAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  dataset: {
    'initial.dataset.sparkWinLoss': _columnAnimation2['default']['initial.dataset.column']
  }
}; // import { animHelperFN } from '../lib';

/***/ }),

/***/ 759:
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

var _fusioncharts = __webpack_require__(229);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _sparkline = __webpack_require__(760);

var _sparkline2 = _interopRequireDefault(_sparkline);

var _fusioncharts3 = __webpack_require__(356);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates SparkChartBase class
 */
var SparkLine = function (_SparkChartBase) {
  _inherits(SparkLine, _SparkChartBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SparkLine.getName = function getName() {
    return 'SparkLine';
  };

  /**
   * Constructor function of SparkChartBase class
   */


  function SparkLine() {
    _classCallCheck(this, SparkLine);

    var _this = _possibleConstructorReturn(this, _SparkChartBase.call(this));

    _this.showValues = 0;
    _this._parseCanvasCosmetics = _fusioncharts3._parseCanvasCosmetics;
    _this._placeOpenCloseValues = _fusioncharts3._placeOpenCloseValues;
    _this.defaultPlotShadow = 0;
    _this.axisPaddingLeft = 0;
    _this.axisPaddingRight = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkLine.prototype.getName = function getName() {
    return 'SparkLine';
  };
  /**
   * Set default configurations for chart
   */


  SparkLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SparkChartBase.prototype.__setDefaultConfig && _SparkChartBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'SparkLine Chart';
    config.singleseries = true;
    config.defaultDatasetType = 'sparkline';
    config.showvalues = 0;
    config.enablemousetracking = true;
  };
  /**
   * Returns SparkLineDataset class
   * @return {Class} SparkLineDataset class
   */


  SparkLine.prototype.getDSdef = function getDSdef() {
    return _sparkline2['default'];
  };

  return SparkLine;
}(_fusioncharts2['default']);

exports['default'] = SparkLine;

/***/ }),

/***/ 760:
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

var _sparklineAnimation = __webpack_require__(761);

var _sparklineAnimation2 = _interopRequireDefault(_sparklineAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEF,
    getLightColor = _lib.graphics.getLightColor,
    parseColor = _lib.graphics.parseColor,
    GUTTER_PADDING = 2,
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    drawSparkValues = function drawSparkValues() {
  var dataSet = this,
      chart = dataSet.getFromEnv('chart'),
      chartConf = chart.config,
      style = chartConf.dataLabelStyle,
      valuePadding = chartConf.valuepadding + GUTTER_PADDING,
      dataLabelContainer = dataSet.getContainer('labelGroup'),
      animationManager = dataSet.getFromEnv('animationManager'),
      closeValueCheck = dataSet.getGraphicalElement('closeValue'),
      closeValue,
      openValueCheck = dataSet.getGraphicalElement('openValue'),
      openValue,
      startBracesCheck = dataSet.getGraphicalElement('startBraces'),
      startBraces,
      highValueCheck = dataSet.getGraphicalElement('highValue'),
      highValue,
      separatorCheck = dataSet.getGraphicalElement('separator'),
      separator,
      lowValueCheck = dataSet.getGraphicalElement('lowValue'),
      lowValue,
      endBracesCheck = dataSet.getGraphicalElement('endBraces'),
      endBraces,
      sparkValues = chartConf.sparkValues || (chartConf.sparkValues = {}),
      SmartLabel = dataSet.getFromEnv('smartLabel'),
      animObj = chart.get('config', 'animationObj'),
      animType = animObj.animType,
      START_BRACES = '[',
      END_BRACES = ']',
      SEPARATER = '|',
      textAttr = {
    'class': 'fusioncharts-label',
    'text-anchor': _lib.POSITION_END,
    fill: style.color,
    'font-size': style.fontSize,
    'font-weight': style.fontWeight,
    'font-style': style.fontStyle,
    'font-family': style.fontFamily,
    visibility: 'visible'
  },
      attr = {
    x: 0,
    y: 0
  };

  // Spark values are not visible due to the clip-rect,
  // so removing clip-rect in order to make spark labels visible
  chart.getChildContainer('datalabelsGroup').attr({
    'clip-rect': null
  });

  attr.y = chartConf.canvasHeight * 0.5 + chartConf.canvasTop;
  // openValue
  attr.x = chartConf.canvasLeft - valuePadding;
  if (sparkValues.openValue && sparkValues.openValue.label || openValue) {
    openValue = animationManager.setAnimation({
      el: openValueCheck || 'text',
      animType: animType,
      state: 'appearing',
      container: dataLabelContainer,
      attr: {
        text: sparkValues.openValue.label,
        x: attr.x,
        y: attr.y,
        fill: sparkValues.openValue.color || textAttr.fill,
        'text-anchor': _lib.POSITION_END,
        'line-height': style.lineHeight,
        'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
        visibility: 'visible'
      },
      label: 'label',
      component: dataSet
    });
    if (!openValueCheck) {
      dataSet.addGraphicalElement('openValue', openValue);
    }
  }

  // closeValue
  textAttr['text-anchor'] = _lib.POSITION_START;
  attr.x = chartConf.canvasWidth + chartConf.canvasLeft + valuePadding;
  if (sparkValues.closeValue && sparkValues.closeValue.label || closeValue) {
    closeValue = animationManager.setAnimation({
      el: closeValueCheck || 'text',
      animType: animType,
      container: dataLabelContainer,
      state: 'appearing',
      attr: {
        text: sparkValues.closeValue.label,
        x: attr.x,
        y: attr.y,
        fill: sparkValues.closeValue.color || textAttr.fill,
        'text-anchor': _lib.POSITION_START,
        'line-height': style.lineHeight,
        'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!closeValueCheck) {
      dataSet.addGraphicalElement('closeValue', closeValue);
    }
    attr.x += sparkValues.closeValue.smartObj && sparkValues.closeValue.smartObj.width + GUTTER_PADDING + valuePadding || 0;
  }

  // High-low value
  if (sparkValues.highLowValue && sparkValues.highLowValue.label || highValue) {
    if (sparkValues.highLowValue && sparkValues.highLowValue.label === _lib.BLANKSTRING) {
      SEPARATER = START_BRACES = END_BRACES = _lib.BLANKSTRING;
    }

    SmartLabel.useEllipsesOnOverflow(chartConf.useEllipsesWhenOverflow);
    SmartLabel.setStyle(style);
    startBraces = animationManager.setAnimation({
      el: startBracesCheck || 'text',
      state: 'appearing',
      container: dataLabelContainer,
      animType: animType,
      attr: {
        text: START_BRACES,
        x: attr.x,
        y: attr.y,
        'text-anchor': _lib.POSITION_START,
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!startBracesCheck) {
      dataSet.addGraphicalElement('startBraces', startBraces);
    }

    attr.x += SmartLabel.getSmartText(START_BRACES).width;
    highValue = animationManager.setAnimation({
      el: highValueCheck || 'text',
      state: 'appearing',
      container: dataLabelContainer,
      animType: animType,
      attr: {
        text: sparkValues.highValue.label,
        x: attr.x,
        y: attr.y,
        'text-anchor': _lib.POSITION_START,
        fill: sparkValues.highValue.color || textAttr.fill,
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!highValueCheck) {
      dataSet.addGraphicalElement('highValue', highValue);
    }

    attr.x += SmartLabel.getSmartText(sparkValues.highValue.label).width;

    separator = animationManager.setAnimation({
      el: separatorCheck || 'text',
      state: 'appearing',
      container: dataLabelContainer,
      animType: animType,
      attr: {
        text: SEPARATER,
        x: attr.x,
        y: attr.y,
        'text-anchor': _lib.POSITION_START,
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!separatorCheck) {
      dataSet.addGraphicalElement('separator', separator);
    }

    attr.x += SmartLabel.getSmartText(SEPARATER).width;

    lowValue = animationManager.setAnimation({
      el: lowValueCheck || 'text',
      container: dataLabelContainer,
      state: 'appearing',
      animType: animType,
      attr: {
        text: sparkValues.lowValue.label,
        x: attr.x,
        y: attr.y,
        'text-anchor': _lib.POSITION_START,
        fill: sparkValues.lowValue.color || textAttr.fill,
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!lowValueCheck) {
      dataSet.addGraphicalElement('lowValue', lowValue);
    }
    attr.x += SmartLabel.getSmartText(sparkValues.lowValue.label).width;
    endBraces = animationManager.setAnimation({
      el: endBracesCheck || 'text',
      state: 'appearing',
      container: dataLabelContainer,
      animType: animType,
      attr: {
        text: END_BRACES,
        x: attr.x,
        y: attr.y,
        'text-anchor': _lib.POSITION_START,
        visibility: 'visible'
      },
      dom: 'label',
      component: dataSet
    });
    if (!endBracesCheck) {
      dataSet.addGraphicalElement('endBraces', endBraces);
    }
  }

  dataSet.labelDrawn = true;
};
(0, _dependencyManager.addDep)({
  name: 'sparklineAnimation',
  type: 'animationRule',
  extension: _sparklineAnimation2['default']
});
/**
 * Creates class SparkLineDataset
 */

var SparkLineDataset = function (_LineDataset) {
  _inherits(SparkLineDataset, _LineDataset);

  function SparkLineDataset() {
    _classCallCheck(this, SparkLineDataset);

    return _possibleConstructorReturn(this, _LineDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  SparkLineDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SparkLineDataset.prototype.getName = function getName() {
    return 'sparkLine';
  };
  /**
   * Constructor function of SparkLineDataset class
   * @param {Object} datasetJSON data object
   */


  SparkLineDataset.prototype.configure = function configure(datasetJSON) {
    _LineDataset.prototype.configure.call(this, datasetJSON);
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),

    // parseUnsafeString = lib.parseUnsafeString,
    conf = dataSet.config,
        JSONData = dataSet.config.JSONData,
        chartAttr = chart.getFromEnv('dataSource').chart;

    // Line configuration attributes parsing
    conf.linethickness = (0, _lib.pluckNumber)(JSONData.linethickness, chartAttr.linethickness, 1);
  };
  /**
   * Configures data level attribute settings
   * @param {Object} newDataset newly added dataset object
   */


  SparkLineDataset.prototype._setConfigure = function _setConfigure(newDataset) {
    _LineDataset.prototype._setConfigure.call(this);
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),

    // parseUnsafeString = lib.parseUnsafeString,
    conf = dataSet.config,
        JSONData = dataSet.config.JSONData,
        chartAttr = chart.getFromEnv('dataSource').chart,
        setDataArr = newDataset || JSONData.data,
        setData,
        dataObj,
        xAxis = dataSet.getFromEnv('xAxis'),
        len = newDataset && newDataset.data.length || xAxis.getTicksLen(),
        colorM = dataSet.getFromEnv('color-manager'),
        chartConf = chart.config,
        dataStore,

    // dataLabelStyle = chartConf.dataLabelStyle,
    config,
        i,

    // Fill Color for high, low, open and close (SparkLine Charts)
    openColor = parseColor((0, _lib.pluck)(chartAttr.opencolor, '0099FF')),
        closeColor = parseColor((0, _lib.pluck)(chartAttr.closecolor, '0099FF')),
        highColor = parseColor((0, _lib.pluck)(chartAttr.highcolor, '00CC00')),
        lowColor = parseColor((0, _lib.pluck)(chartAttr.lowcolor, 'CC0000')),
        anchorColor = parseColor((0, _lib.pluck)(chartAttr.anchorcolor, colorM.getColor('plotFillColor'))),

    // Whether to show anchors for open, close, high & low
    showOpenAnchor = (0, _lib.pluckNumber)(chartAttr.showopenanchor, chartAttr.drawanchors, chartAttr.showanchors, 1),
        showCloseAnchor = (0, _lib.pluckNumber)(chartAttr.showcloseanchor, chartAttr.drawanchors, chartAttr.showanchors, 1),
        showHighAnchor = (0, _lib.pluckNumber)(chartAttr.showhighanchor, chartAttr.drawanchors, chartAttr.showanchors, 1),
        showLowAnchor = (0, _lib.pluckNumber)(chartAttr.showlowanchor, chartAttr.drawanchors, chartAttr.showanchors, 1),
        anchorAlpha = (0, _lib.pluckNumber)(chartAttr.anchoralpha, 100),
        showAnchors = (0, _lib.pluckNumber)(chartAttr.drawanchors, chartAttr.showanchors, 0),
        defAnchorAlpha = showAnchors ? (0, _lib.pluckNumber)(chartAttr.anchoralpha, 100) : 0,
        lineColor = (0, _lib.pluck)(chartAttr.linecolor, colorM.getColor('plotFillColor')),
        sparkValues,
        hasValidValue,
        highValue,
        lowValue,
        pointAnchorAlpha,
        highDisplayValue,
        lowDisplayValue,
        openDisplayValue,
        macroIndices,
        parserConfig,
        closeDisplayValue;

    dataStore = dataSet.components.data;

    highValue = conf.maxValue;
    lowValue = conf.minValue;
    conf.shadow = {
      opacity: (0, _lib.pluckNumber)(chartAttr.showshadow, 0) ? conf.alpha / 100 : 0
    };

    // openValue
    dataObj = dataStore[0];
    config = dataObj.config;
    config.anchorProps.bgColor = (0, _lib.pluck)(dataObj.anchorbgcolor, openColor);
    config.anchorProps.enabled = !!showOpenAnchor;
    config.anchorProps.bgAlpha = showOpenAnchor ? pointAnchorAlpha : 0;
    // Apply appropriate hover efffects on openValue
    if (config.anchorProps.enabled && config.hoverEffects) {
      config.hoverEffects.anchorColor = (0, _lib.pluck)(chartAttr.openhovercolor, chartAttr.anchorhovercolor, chartAttr.plotfillhovercolor, getLightColor(openColor, 70));
      config.hoverEffects.anchorBgAlpha = (0, _lib.pluckNumber)(chartAttr.openhoveralpha, chartAttr.anchorhoveralpha, chartAttr.plotfillhoveralpha, 100);
    }
    openDisplayValue = config.displayValue;

    // closeValue
    dataObj = dataStore[len - 1];
    config = dataObj.config;
    config.anchorProps.bgColor = (0, _lib.pluck)(dataObj.anchorbgcolor, closeColor);
    config.anchorProps.enabled = !!showCloseAnchor;
    config.anchorProps.bgAlpha = showCloseAnchor ? pointAnchorAlpha : 0;
    // Apply appropriate hover efffects on openValue
    if (config.anchorProps.enabled && config.hoverEffects) {
      config.hoverEffects.anchorColor = (0, _lib.pluck)(chartAttr.closehovercolor, chartAttr.anchorhovercolor, chartAttr.plotfillhovercolor, getLightColor(closeColor, 70));
      config.hoverEffects.anchorBgAlpha = (0, _lib.pluckNumber)(chartAttr.closehoveralpha, chartAttr.anchorhoveralpha, chartAttr.plotfillhoveralpha, 100);
    }
    closeDisplayValue = config.displayValue;

    for (i = 0; i < len; i++) {
      dataObj = dataStore[i];
      config = dataObj.config;
      setData = setDataArr[i];

      pointAnchorAlpha = (0, _lib.pluckNumber)(setData.anchorbgalpha, anchorAlpha);
      conf.maxRadius = -Infinity;
      // Skipp color parsing for open and close values
      if (i !== 0 && i !== len - 1) {
        config.anchorProps.bgColor = (0, _lib.pluck)(setData.anchorbgcolor, anchorColor);
        config.anchorProps.bgAlpha = (0, _lib.pluckNumber)(setData.anchorbgalpha, defAnchorAlpha);
        config.hoverEffects.anchorColor = parseColor((0, _lib.pluck)(chartAttr.anchorhovercolor, chartAttr.plotfillhovercolor, getLightColor(lineColor, 70)));
        config.hoverEffects.anchorBgAlpha = (0, _lib.pluckNumber)(chartAttr.lowhoveralpha, chartAttr.anchorhoveralpha, chartAttr.plotfillhoveralpha, 100);
      }

      config.anchorProps.radius = (0, _lib.pluckNumber)(chartAttr.anchorradius, setData.anchorradius, 2);
      config.anchorProps.borderThickness = 0;
      config.hoverEffects.anchorBorderThickness = 0;
      config.hoverEffects.anchorRadius = (0, _lib.pluckNumber)(chartAttr.anchorhoverradius, chartAttr.anchorradius, setData.anchorradius, 3);
      conf.maxRadius = Math.max(config.anchorProps.radius + config.anchorProps.borderThickness / 2, conf.maxRadius);

      if (config.setValue === lowValue) {
        config.anchorProps.bgColor = (0, _lib.pluck)(setData.anchorbgcolor, lowColor);
        config.hoverEffects.anchorColor = (0, _lib.pluck)(chartAttr.lowhovercolor, chartAttr.anchorhovercolor, chartAttr.plotfillhovercolor, getLightColor(lowColor, 70));
        config.hoverEffects.anchorBgAlpha = (0, _lib.pluckNumber)(chartAttr.lowhoveralpha, chartAttr.anchorhoveralpha, chartAttr.plotfillhoveralpha, 100);
        config.anchorProps.enabled = !!showLowAnchor;
        config.anchorProps.bgAlpha = showLowAnchor ? pointAnchorAlpha : 0;
        lowDisplayValue = config.displayValue;
      }
      if (config.setValue === highValue) {
        config.anchorProps.bgColor = (0, _lib.pluck)(setData.anchorbgcolor, highColor);
        config.hoverEffects.anchorColor = (0, _lib.pluck)(chartAttr.highhovercolor, chartAttr.anchorhovercolor, chartAttr.plotfillhovercolor, getLightColor(highColor, 70));
        config.hoverEffects.anchorBgAlpha = (0, _lib.pluckNumber)(chartAttr.highhoveralpha, chartAttr.anchorhoveralpha, chartAttr.plotfillhoveralpha, 100);
        config.anchorProps.enabled = !!showHighAnchor;
        config.anchorProps.bgAlpha = showHighAnchor ? pointAnchorAlpha : 0;
        highDisplayValue = config.displayValue;
      }
      if (defined(config.setValue)) {
        hasValidValue = 1;
      }
      config._x = i;
      config._y = config.setValue;
    }

    sparkValues = chartConf.sparkValues = {
      openValue: {
        color: openColor
      },
      closeValue: {
        color: closeColor
      },
      highValue: {
        color: highColor
      },
      lowValue: {
        color: lowColor
      },
      highLowValue: {}
    };

    if (hasValidValue) {
      sparkValues.openValue.label = (0, _lib.pluckNumber)(chartAttr.showopenvalue, 1) ? openDisplayValue : _lib.BLANKSTRING;
      sparkValues.closeValue.label = (0, _lib.pluckNumber)(chartAttr.showclosevalue, 1) ? closeDisplayValue : _lib.BLANKSTRING;
      if ((0, _lib.pluckNumber)(chartAttr.showhighlowvalue, 1)) {
        // Store complete high, low label to label for the space manager.
        sparkValues.highLowValue.label = '[' + highDisplayValue + ' | ' + lowDisplayValue + ']';
        // Store high, low label separately to render the labels
        // Using different color style.
        sparkValues.highValue.label = highDisplayValue;
        sparkValues.lowValue.label = lowDisplayValue;
      }
    }

    for (i = 0; i < len; i++) {
      var _dataObj = dataStore[i],
          _config = _dataObj.config;
      if (_config.setTooltext !== UNDEF) {
        macroIndices = [54, 55, 56, 57, 58, 59, 60, 61];
        parserConfig = {
          openValue: sparkValues.openValue.label,
          openDataValue: sparkValues.openValue.label,
          closeValue: sparkValues.closeValue.label,
          closeDataValue: sparkValues.closeValue.label,
          highValue: sparkValues.highValue.label,
          highDataValue: sparkValues.highValue.label,
          lowValue: sparkValues.lowValue.label,
          lowDataValue: sparkValues.lowValue.label
        };
        _config.toolText = (0, _lib.parseTooltext)(_config.setTooltext, macroIndices, parserConfig, setData, chartAttr, JSONData);
        _config.finalTooltext = _config.setTooltext = _config.toolText;
      }
    }
  };
  /**
   * Draws graphics of sparkline
   */


  SparkLineDataset.prototype.draw = function draw() {
    var dataSet = this;

    _LineDataset.prototype.draw.call(this);

    dataSet._drawSparkValues();
  };
  /**
   * Draws spark values
   */


  SparkLineDataset.prototype._drawSparkValues = function _drawSparkValues() {
    var dataSet = this;

    drawSparkValues.call(dataSet);
  };

  return SparkLineDataset;
}(_line2['default']);

exports['default'] = SparkLineDataset;

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _lineAnimation = __webpack_require__(25);

var _lineAnimation2 = _interopRequireDefault(_lineAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.sparkLine': _lineAnimation2['default']['initial.dataset.line']
};

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _columnAnimation = __webpack_require__(89);

var _columnAnimation2 = _interopRequireDefault(_columnAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.realtimeColumn': _columnAnimation2['default']['initial.dataset.column']
};

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.chartAPI.RealtimeColumn': function initialChartAPIRealtimeColumn() {
    return {
      '*': null
    };
  }
};

/***/ }),

/***/ 764:
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

var _fusioncharts = __webpack_require__(17);

var _fusioncharts2 = __webpack_require__(111);

var _fusioncharts3 = _interopRequireDefault(_fusioncharts2);

var _realtimeline = __webpack_require__(359);

var _realtimeline2 = _interopRequireDefault(_realtimeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var RealtimeLine = function (_RealtimeColumn) {
  _inherits(RealtimeLine, _RealtimeColumn);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeLine.getName = function getName() {
    return 'RealtimeLine';
  };

  function RealtimeLine() {
    _classCallCheck(this, RealtimeLine);

    var _this = _possibleConstructorReturn(this, _RealtimeColumn.call(this));

    _this.axisPaddingLeft = 0;
    _this.axisPaddingRight = 0;
    _this.zeroplanethickness = 1;
    _this.zeroplanealpha = 40;
    _this.showzeroplaneontop = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeLine.prototype.getName = function getName() {
    return 'RealtimeLine';
  };

  RealtimeLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _RealtimeColumn.prototype.__setDefaultConfig && _RealtimeColumn.prototype.__setDefaultConfig.call(this);
    _fusioncharts._setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'realtimeline';
    config.zeroplanethickness = 1;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.enablemousetracking = true;
    config.enablemousetracking = true;
  };

  RealtimeLine.prototype.getDSdef = function getDSdef() {
    return _realtimeline2['default'];
  };

  return RealtimeLine;
}(_fusioncharts3['default']);

exports['default'] = RealtimeLine;

/***/ }),

/***/ 765:
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

var _fusioncharts = __webpack_require__(17);

var _fusioncharts2 = __webpack_require__(357);

var _fusioncharts3 = _interopRequireDefault(_fusioncharts2);

var _realtimearea = __webpack_require__(358);

var _realtimearea2 = _interopRequireDefault(_realtimearea);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var RealtimeStackedArea = function (_RealtimeArea) {
  _inherits(RealtimeStackedArea, _RealtimeArea);

  function RealtimeStackedArea() {
    _classCallCheck(this, RealtimeStackedArea);

    return _possibleConstructorReturn(this, _RealtimeArea.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeStackedArea.getName = function getName() {
    return 'RealtimeStackedArea';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeStackedArea.prototype.getName = function getName() {
    return 'RealtimeStackedArea';
  };

  RealtimeStackedArea.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _RealtimeArea.prototype.__setDefaultConfig && _RealtimeArea.prototype.__setDefaultConfig.call(this);
    _fusioncharts._setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'realtimearea';
    config.isstacked = true;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  RealtimeStackedArea.prototype.getDSdef = function getDSdef() {
    return _realtimearea2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} <dataset group class>     dataset group class
   */


  RealtimeStackedArea.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return RealtimeStackedArea;
}(_fusioncharts3['default']);

exports['default'] = RealtimeStackedArea;

/***/ }),

/***/ 766:
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

var _fusioncharts = __webpack_require__(111);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var RealtimeStackedColumn = function (_RealtimeColumn) {
  _inherits(RealtimeStackedColumn, _RealtimeColumn);

  function RealtimeStackedColumn() {
    _classCallCheck(this, RealtimeStackedColumn);

    return _possibleConstructorReturn(this, _RealtimeColumn.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeStackedColumn.getName = function getName() {
    return 'RealtimeStackedColumn';
  };

  RealtimeStackedColumn.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _RealtimeColumn.prototype.__setDefaultConfig && _RealtimeColumn.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.isstacked = true;
    config.enablemousetracking = true;
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeStackedColumn.prototype.getName = function getName() {
    return 'RealtimeStackedColumn';
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} <dataset group class>     dataset group class
   */


  RealtimeStackedColumn.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return RealtimeStackedColumn;
}(_fusioncharts2['default']);

exports['default'] = RealtimeStackedColumn;

/***/ }),

/***/ 767:
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

var _fusioncharts = __webpack_require__(17);

var _fusioncharts2 = __webpack_require__(111);

var _fusioncharts3 = _interopRequireDefault(_fusioncharts2);

var _realtimeline = __webpack_require__(359);

var _realtimeline2 = _interopRequireDefault(_realtimeline);

var _fusioncharts4 = __webpack_require__(70);

var _cartesianAxisDualY = __webpack_require__(214);

var _cartesianAxisDualY2 = _interopRequireDefault(_cartesianAxisDualY);

var _combiDualYDataset = __webpack_require__(44);

var _combiDualYDataset2 = _interopRequireDefault(_combiDualYDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0;

var RealtimeLineDy = function (_RealtimeColumn) {
  _inherits(RealtimeLineDy, _RealtimeColumn);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  RealtimeLineDy.getName = function getName() {
    return 'RealtimeLineDy';
  };

  function RealtimeLineDy() {
    _classCallCheck(this, RealtimeLineDy);

    var _this = _possibleConstructorReturn(this, _RealtimeColumn.call(this));

    _this.isRealTime = true;
    _this.axisPaddingLeft = 0;
    _this.isDual = true;
    _this.axisPaddingRight = 0;
    _this.registerFactory('axis', _cartesianAxisDualY2['default'], ['canvas']);
    _this.registerFactory('dataset', _combiDualYDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  RealtimeLineDy.prototype.getName = function getName() {
    return 'RealtimeLineDy';
  };

  RealtimeLineDy.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _RealtimeColumn.prototype.__setDefaultConfig && _RealtimeColumn.prototype.__setDefaultConfig.call(this);
    _fusioncharts._setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.defaultDatasetType = 'RealtimeLine';
    config.zeroplanethickness = 1;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.enablemousetracking = true;
    config.isdual = true;
  };

  /**
   * function to parse JSON data for configurations of axis
   * @return {Object} configurations of axes
   */


  RealtimeLineDy.prototype._feedAxesRawData = function _feedAxesRawData() {
    return _fusioncharts4._feedAxesRawData.call(this);
  };
  /**
   * function to calculate post space management calculations
   * calculations like axis dimenetion set, allocate space for xaxis labels,
   * canvas padding etc.
   */


  RealtimeLineDy.prototype._postSpaceManagement = function _postSpaceManagement() {
    _fusioncharts4._postSpaceManagement.call(this);
  };

  RealtimeLineDy.prototype.getDSdef = function getDSdef() {
    return _realtimeline2['default'];
  };
  /**
   * function to return dataset type applicable for this chart
   * @return  {string}        dataset type applicable for this chart
   */


  RealtimeLineDy.prototype.getDSType = function getDSType() {
    return 'RealtimeLine';
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} <dataset group class>     dataset group class
   */


  RealtimeLineDy.prototype.getDSGroupdef = function getDSGroupdef() {
    return UNDEF;
  };

  return RealtimeLineDy;
}(_fusioncharts3['default']);

exports['default'] = RealtimeLineDy;

/***/ }),

/***/ 768:
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

var _angularHlinearCommon = __webpack_require__(351);

var _colorBucket = __webpack_require__(143);

var _colorBucket2 = _interopRequireDefault(_colorBucket);

var _fusioncharts = __webpack_require__(348);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _polarGaugeAxis = __webpack_require__(769);

var _polarGaugeAxis2 = _interopRequireDefault(_polarGaugeAxis);

var _angularGaugeDataset = __webpack_require__(772);

var _angularGaugeDataset2 = _interopRequireDefault(_angularGaugeDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    BLANK = '',
    math = Math,
    mathMin = math.min,
    mathPI = math.PI,
    deg2rad = mathPI / 180,
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
};

var AngularGauge = function (_Gauge) {
  _inherits(AngularGauge, _Gauge);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  AngularGauge.getName = function getName() {
    return 'AngularGauge';
  };

  function AngularGauge() {
    _classCallCheck(this, AngularGauge);

    var _this = _possibleConstructorReturn(this, _Gauge.call(this));

    _this.isHorizontal = true;
    _this.isAxisOpposite = false;
    _this.isRealTime = true;
    _this.drawPlotlines = false;
    _this.drawPlotBands = false;
    _this.isAxisReverse = false;
    _this.colorRange = true;
    _this.defaultPaletteOptions = (0, _lib.extend2)((0, _lib.extend2)({}, _lib.defaultGaugePaletteOptions), {
      dialColor: ['999999,ffffff,999999', 'ADB68F,F3F5DD,ADB68F', 'A2C4C8,EDFBFE,A2C4C8', 'FDB548,FFF5E8,FDB548', 'FF7CA0,FFD1DD,FF7CA0'],
      dialBorderColor: ['999999', 'ADB68F', 'A2C4C8', 'FDB548', 'FF7CA0'],
      pivotColor: ['999999,ffffff,999999', 'ADB68F,F3F5DD,ADB68F', 'A2C4C8,EDFBFE,A2C4C8', 'FDB548,FFF5E8,FDB548', 'FF7CA0,FFD1DD,FF7CA0'],
      pivotBorderColor: ['999999', 'ADB68F', 'A2C4C8', 'FDB548', 'FF7CA0']
    }, false, true);
    _this.rtParserModify = true;
    _this._setCategories = function () {
      // Override fn
    };
    _this.registerFactory('dataset', _angularGaugeDataset2['default'], ['axis']);
    _this.registerFactory('axis', _polarGaugeAxis2['default'], ['canvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  AngularGauge.prototype.getName = function getName() {
    return 'AngularGauge';
  };

  AngularGauge.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Gauge.prototype.__setDefaultConfig && _Gauge.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Angular Gauge';
    config.hasLegend = false;
    config.defaultDatasetType = 'angulargauge';
    config.animationeffect = 'easeOut';
    config.skipCanvasDrawing = true;
  };

  AngularGauge.prototype.configureAttributes = function configureAttributes(dataObj) {
    _Gauge.prototype.configureAttributes.call(this, dataObj);
    var iapi = this,
        jsonData = iapi.getFromEnv('dataSource'),
        colorrange = jsonData.colorrange;
    // If color array is present and contains non-zero color items
    if (colorrange && colorrange.color && colorrange.color.length) {
      // componentFactory(iapi, ColorGradient, 'colorRange', 1, [colorrange]);
      (0, _lib.componentFactory)(iapi, _colorBucket2['default'], 'colorRange', 1, [{
        colorRange: colorrange,
        numberFormatter: iapi.getFromEnv('number-formatter')
      }]);
      iapi.addToEnv('colorRange', iapi.getChildren('colorRange')[0]);
    } else {
      // If colorRange is not present delete colorRange from env
      iapi.deleteFromEnv('colorRange');
    }
  };

  AngularGauge.prototype._spaceManager = function _spaceManager() {
    var iapi = this,
        availableWidth,
        availableHeight,
        config = iapi.config,
        dataSet = iapi.getChildren('dataset')[0],
        scale = iapi.getFromEnv('scale'),
        axisConfig = scale.config,
        dataObject = dataSet.components.data[0],
        chart = iapi,
        jsonData = chart.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        datasetConfig = dataSet.config,
        scaleFactor = datasetConfig.scaleFactor,
        yPosExtra = 0,
        yNegExtra = 0,
        radius = 0,
        centerX = 0,
        centerY = 0,
        compositPivotRadius = datasetConfig.pivotRadius,
        labelFontSize = config.dataLabels.style.fontSize,
        displayValueLineHeight = config.dataLabels.style.lineHeight,
        displayValueCount = config.displayValueCount,
        chartBorderWidth = config.borderWidth,
        minChartWidth = config.minChartWidth,
        minChartHeight = config.minChartHeight,
        radiusDeduce = 0,
        gaugeSpacingObj,
        innerRadiusFactor,
        pivotRadius,
        axisSpace,
        chartBorderHorizontal,
        chartBorderVertical;
    //* ***** Manage space
    if (config.canvasWidth - 2 * chartBorderWidth < minChartWidth) {
      chartBorderVertical = (config.canvasWidth - minChartWidth) / 2;
    }

    if (config.canvasHeight - 2 * chartBorderWidth < minChartHeight) {
      chartBorderHorizontal = (config.canvasHeight - minChartHeight) / 2;
    }

    iapi._allocateSpace({
      top: chartBorderHorizontal || chartBorderWidth,
      bottom: chartBorderHorizontal || chartBorderWidth,
      left: chartBorderVertical || chartBorderWidth,
      right: chartBorderVertical || chartBorderWidth
    });

    // availableHeight = config.canvasHeight * 0.225;
    // iapi._allocateSpace(iapi._manageCaptionSpacing(availableHeight));

    if (config.autoScale) {
      config.scaleFactor = scaleFactor = AngularGauge._getScaleFactor(datasetConfig.origW, datasetConfig.origH, config.width, config.height);
    } else {
      config.scaleFactor = scaleFactor = 1;
    }
    labelFontSize = labelFontSize.replace(/px/i, BLANK);
    displayValueLineHeight = displayValueLineHeight.replace(/px/i, BLANK);
    if (/^\d+\%$/.test(datasetConfig.gaugeinnerradius)) {
      innerRadiusFactor = parseInt(datasetConfig.gaugeinnerradius, 10) / 100;
    } else {
      innerRadiusFactor = 0.7;
    }

    pivotRadius = compositPivotRadius = (0, _lib.pluckNumber)((0, _lib.getValidValue)(chartAttrs.pivotradius) * scaleFactor, 5);
    datasetConfig.pivotRadius = pivotRadius;
    compositPivotRadius = Math.max(compositPivotRadius, datasetConfig.rearExtension * scaleFactor);

    if (dataObject.config && dataObject.config.rearextension) {
      compositPivotRadius = Math.max(compositPivotRadius, dataObject.config.rearextension * scaleFactor);
    }
    datasetConfig.compositPivotRadius = compositPivotRadius;

    yPosExtra = displayValueCount * displayValueLineHeight + 2 + pivotRadius;
    if (!datasetConfig.valueBelowPivot) {
      yNegExtra = yPosExtra;
      yPosExtra = 0;
    }

    datasetConfig.gaugeOuterRadius = (0, _lib.pluckNumber)(Math.abs((0, _lib.getValidValue)(chartAttrs.gaugeouterradius) * scaleFactor));
    // Asume gauge inner radius to be a default of 70% of gauge outer radius
    datasetConfig.gaugeInnerRadius = (0, _lib.pluckNumber)(Math.abs((0, _lib.getValidValue)(chartAttrs.gaugeinnerradius) * scaleFactor), datasetConfig.gaugeOuterRadius * innerRadiusFactor);

    availableWidth = config.canvasWidth * 0.7;
    availableHeight = config.canvasHeight * 0.7;
    // TODO space management to be done
    // iapi._allocateSpace(scale.placeAxis(mathMin(availableWidth, availableHeight)));
    axisSpace = scale.placeAxis(mathMin(availableWidth, availableHeight));

    availableHeight = config.canvasHeight * 0.7;
    iapi._manageChartMenuBar(availableHeight);

    gaugeSpacingObj = AngularGauge._angularGaugeSpaceManager(datasetConfig.gaugeStartAngle, datasetConfig.gaugeEndAngle, config.canvasWidth, config.canvasHeight, datasetConfig.gaugeOuterRadius, (0, _lib.pluckNumber)((0, _lib.getValidValue)(chartAttrs.gaugeoriginx) * scaleFactor - config.canvasLeft), (0, _lib.pluckNumber)((0, _lib.getValidValue)(chartAttrs.gaugeoriginy) * scaleFactor - config.canvasTop), Math.max(compositPivotRadius + axisConfig.polarPadding, labelFontSize), yPosExtra, yNegExtra);

    radius = gaugeSpacingObj.radius = (0, _lib.pluckNumber)(gaugeSpacingObj.radius, gaugeSpacingObj.maxRadius);
    datasetConfig.gaugeOriginX = gaugeSpacingObj.centerX + config.canvasLeft;
    datasetConfig.gaugeOriginY = gaugeSpacingObj.centerY + config.canvasTop;
    centerX = gaugeSpacingObj.centerX;
    centerY = gaugeSpacingObj.centerY;
    /*
      When axis space on left is less than axis space on top then check
      if distance between center and axis space is greater than distance
      between radius and axis space left, then the radius must be deduced by
      axis space left else it must be deduced by axis space top.
    */
    if (axisSpace.left < axisSpace.top) {
      if (centerX - axisSpace.left >= radius - axisSpace.left && centerY - axisSpace.top >= radius - axisSpace.left) {
        radiusDeduce = axisSpace.left;
      } else {
        radiusDeduce = axisSpace.top;
      }
      /*
        When axis space on left is greater or equal to axis space on top then check
        if distance between center and axis space is greater than distance between
        radius and axis space top, then radius must be deduced by axis space top else
        it must be deduced by axis space left.
       */
    } else {
      if (centerX - axisSpace.left >= radius - axisSpace.top && centerY - axisSpace.top >= radius - axisSpace.top) {
        radiusDeduce = axisSpace.top;
      } else {
        radiusDeduce = axisSpace.left;
      }
    }
    radiusDeduce += 2 * scale.config.polarPadding;
    // reduce the outer radius
    !datasetConfig.gaugeOuterRadius && (datasetConfig.gaugeOuterRadius = gaugeSpacingObj.radius - radiusDeduce);

    if (datasetConfig.gaugeInnerRadius === UNDEF) {
      datasetConfig.gaugeInnerRadius = datasetConfig.gaugeOuterRadius * innerRadiusFactor;
    }
    scale.setAxisConfig({
      centerX: datasetConfig.gaugeOriginX,
      centerY: datasetConfig.gaugeOriginY,
      radius: gaugeSpacingObj.radius || datasetConfig.gaugeOuterRadius,
      gaugeOuterRadius: datasetConfig.gaugeOuterRadius,
      gaugeInnerRadius: datasetConfig.gaugeInnerRadius,
      scaleFactor: scaleFactor

    });
  };

  /**
   * Parses and stores macro values during post space management
   *
   * @memberof AngularGauge
   */


  AngularGauge.prototype.allocatePosition = function allocatePosition() {
    var iapi = this,
        config = iapi.config,
        datasetConfig = iapi.getChildren('dataset')[0].config;

    // For annotations
    config.gaugeStartX = config.canvasLeft;
    config.gaugeStartY = config.canvasTop;
    config.gaugeEndX = config.canvasRight;
    config.gaugeEndY = config.canvasBottom;
    config.gaugeCenterX = datasetConfig.gaugeOriginX;
    config.gaugeCenterY = datasetConfig.gaugeOriginY;
    config.gaugeStartAngle = datasetConfig.gaugeStartAngle / deg2rad;
    config.gaugeEndAngle = datasetConfig.gaugeEndAngle / deg2rad;
  };

  AngularGauge.prototype._feedAxesRawData = function _feedAxesRawData() {
    var iapi = this,
        colorM = iapi.getFromEnv('color-manager'),
        dataObj = iapi.getFromEnv('dataSource'),
        chartAttrs = dataObj.chart,
        scaleConf,
        numberFormatter = iapi.getFromEnv('number-formatter'),
        palleteString = _lib.chartPaletteStr.chart2D,
        isAxisOpposite = (0, _lib.pluckNumber)(chartAttrs.axisontop, chartAttrs.axisonleft, chartAttrs.ticksbelowgauge !== UNDEF ? !chartAttrs.ticksbelowgauge : UNDEF, iapi.isAxisOpposite),
        isAxisReverse = (0, _lib.pluckNumber)(chartAttrs.reverseaxis, iapi.isAxisReverse);

    scaleConf = {
      isVertical: !iapi.isHorizontal,
      isReverse: isAxisReverse,
      isOpposit: isAxisOpposite,
      outCanfontFamily: (0, _lib.pluck)(chartAttrs.outcnvbasefont, chartAttrs.basefont, 'Verdana,sans'),
      outCanfontSize: (0, _lib.pluckFontSize)(chartAttrs.outcnvbasefontsize, chartAttrs.basefontsize, 10),
      outCancolor: (0, _lib.pluck)(chartAttrs.outcnvbasefontcolor, chartAttrs.basefontcolor, colorM.getColor(palleteString.baseFontColor)).replace(/^#?([a-f0-9]+)/ig, '#$1'),
      useEllipsesWhenOverflow: chartAttrs.useellipseswhenoverflow,
      divLineColor: (0, _lib.pluck)(chartAttrs.vdivlinecolor, colorM.getColor(palleteString.divLineColor)),
      divLineAlpha: (0, _lib.pluck)(chartAttrs.vdivlinealpha, colorM.getColor('divLineAlpha')),
      divLineThickness: (0, _lib.pluckNumber)(chartAttrs.vdivlinethickness, 1),
      divLineIsDashed: Boolean((0, _lib.pluckNumber)(chartAttrs.vdivlinedashed, chartAttrs.vdivlineisdashed, 0)),
      divLineDashLen: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashlen, 4),
      divLineDashGap: (0, _lib.pluckNumber)(chartAttrs.vdivlinedashgap, 2),
      showAlternateGridColor: (0, _lib.pluckNumber)(chartAttrs.showalternatevgridcolor, 0),
      alternateGridColor: (0, _lib.pluck)(chartAttrs.alternatevgridcolor, colorM.getColor('altVGridColor')),
      alternateGridAlpha: (0, _lib.pluck)(chartAttrs.alternatevgridalpha, colorM.getColor('altVGridAlpha')),
      numDivLines: chartAttrs.numvdivlines,
      labelFont: chartAttrs.labelfont,
      labelFontSize: chartAttrs.labelfontsize,
      labelFontColor: chartAttrs.labelfontcolor,
      labelFontAlpha: chartAttrs.labelalpha,
      labelFontBold: chartAttrs.labelfontbold,
      labelFontItalic: chartAttrs.labelfontitalic,
      axisName: chartAttrs.xaxisname,
      axisMinValue: chartAttrs.lowerlimit,
      axisMaxValue: chartAttrs.upperlimit,
      setAdaptiveMin: chartAttrs.setadaptivemin,
      // adjusttm will be internally parsed as adjustdiv
      adjustDiv: chartAttrs.adjusttm,
      labelDisplay: chartAttrs.labeldisplay,
      showLabels: chartAttrs.showlabels,
      rotateLabels: chartAttrs.rotatelabels,
      slantLabel: (0, _lib.pluckNumber)(chartAttrs.slantlabels, chartAttrs.slantlabel),
      labelStep: (0, _lib.pluckNumber)(chartAttrs.labelstep, chartAttrs.xaxisvaluesstep),
      showAxisValues: (0, _lib.pluckNumber)(chartAttrs.showxaxisvalues, chartAttrs.showxaxisvalue),
      showDivLineValues: (0, _lib.pluckNumber)(chartAttrs.showvdivlinevalues, chartAttrs.showvdivlinevalues),
      showZeroPlane: chartAttrs.showvzeroplane,
      zeroPlaneColor: chartAttrs.vzeroplanecolor,
      zeroPlaneThickness: chartAttrs.vzeroplanethickness,
      zeroPlaneAlpha: chartAttrs.vzeroplanealpha,
      showZeroPlaneValue: chartAttrs.showvzeroplanevalue,
      trendlineColor: chartAttrs.trendlinecolor,
      trendlineToolText: chartAttrs.trendlinetooltext,
      trendlineThickness: chartAttrs.trendlinethickness,
      trendlineAlpha: chartAttrs.trendlinealpha,
      showTrendlinesOnTop: chartAttrs.showtrendlinesontop,
      showAxisLine: (0, _lib.pluckNumber)(chartAttrs.showxaxisline, chartAttrs.showaxislines, chartAttrs.drawAxisLines, 0),
      axisLineThickness: (0, _lib.pluckNumber)(chartAttrs.xaxislinethickness, chartAttrs.axislinethickness, 1),
      axisLineAlpha: (0, _lib.pluckNumber)(chartAttrs.xaxislinealpha, chartAttrs.axislinealpha, 100),
      axisLineColor: (0, _lib.pluck)(chartAttrs.xaxislinecolor, chartAttrs.axislinecolor, '#000000'),
      // Tick properties
      majorTMNumber: chartAttrs.majortmnumber,
      majorTMColor: chartAttrs.majortmcolor,
      majorTMAlpha: chartAttrs.majortmalpha,
      majorTMHeight: chartAttrs.majortmheight,
      tickValueStep: chartAttrs.tickvaluestep,
      showTickMarks: chartAttrs.showtickmarks,
      connectTickMarks: chartAttrs.connecttickmarks,
      showTickValues: chartAttrs.showtickvalues,
      majorTMThickness: chartAttrs.majortmthickness,
      upperlimit: numberFormatter.getCleanValue(chartAttrs.upperlimit),
      lowerlimit: numberFormatter.getCleanValue(chartAttrs.lowerlimit),
      reverseScale: chartAttrs.reversescale,
      // Whether to display the Limits
      showLimits: chartAttrs.showlimits,
      minorTMNumber: chartAttrs.minortmnumber,
      minorTMColor: chartAttrs.minortmcolor,
      minorTMAlpha: chartAttrs.minortmalpha,
      minorTMHeight: (0, _lib.pluckNumber)(chartAttrs.minortmheight, chartAttrs.minortmwidth),
      minorTMThickness: chartAttrs.minortmthickness,
      // Padding between tick mark start position and gauge
      tickMarkDistance: (0, _lib.pluckNumber)(chartAttrs.tickmarkdistance, chartAttrs.tickmarkgap),
      // Tick value distance
      tickValueDistance: (0, _lib.pluckNumber)(chartAttrs.tickvaluedistance, chartAttrs.displayvaluedistance),
      placeTicksInside: chartAttrs.placeticksinside,
      placeValuesInside: chartAttrs.placevaluesinside,
      upperLimitDisplay: chartAttrs.upperlimitdisplay,
      lowerLimitDisplay: chartAttrs.lowerlimitdisplay,
      ticksBelowGauge: chartAttrs.ticksbelowgauge,
      ticksBelowGraph: chartAttrs.ticksbelowgraph,
      trendValueDistance: chartAttrs.trendvaluedistance
    };
    scaleConf.trendPoints = dataObj.trendpoints;
    return [scaleConf];
  };

  AngularGauge._angularGaugeSpaceManager = function _angularGaugeSpaceManager(startAngle, endAngle, canvasW, canvasH, radius, centerX, centerY, compositPivotRadius, yPosExtra, yNegExtra) {
    var rediusDefined = defined(radius),
        centerXDefined = defined(centerX),
        centerYDefined = defined(centerY),
        PI2 = Math.PI * 2,
        PI = Math.PI,
        PIby2 = Math.PI / 2,
        PI3by2 = PI + PIby2,
        calculatedRadus,
        returnObj = {
      radius: radius,
      centerX: centerX,
      centerY: centerY
    },
        leftX,
        topY,
        rightX,
        bottomY,
        pivotCalRequard = false,
        startX,
        startY,
        endX,
        endY,
        tempRadius,
        resultantEnd,
        range,
        positiveLength,
        negativeLength,
        scale,
        startAbs = startAngle % PI2;

    if (startAbs < 0) {
      startAbs += PI2;
    }
    compositPivotRadius = compositPivotRadius || 0;
    if (compositPivotRadius && compositPivotRadius < canvasW / 2 && compositPivotRadius < canvasH / 2) {
      pivotCalRequard = true;
    }
    if (yPosExtra > canvasH / 2) {
      // max half height will be setteled
      yPosExtra = canvasH / 2;
    }
    if (yNegExtra > canvasH / 2) {
      // max half height will be setteled
      yNegExtra = canvasH / 2;
    }
    startX = Math.cos(startAngle);
    startY = Math.sin(startAngle);
    endX = Math.cos(endAngle);
    endY = Math.sin(endAngle);
    leftX = Math.min(startX, endX, 0);
    rightX = Math.max(startX, endX, 0);
    topY = Math.min(startY, endY, 0);
    bottomY = Math.max(startY, endY, 0);
    if (!rediusDefined || !centerXDefined || !centerYDefined) {
      scale = endAngle - startAngle;
      resultantEnd = startAbs + scale;
      if (resultantEnd > PI2 || resultantEnd < 0) {
        rightX = 1;
      }
      if (scale > 0) {
        if (startAbs < PIby2 && resultantEnd > PIby2 || resultantEnd > PI2 + PIby2) {
          bottomY = 1;
        }
        if (startAbs < PI && resultantEnd > PI || resultantEnd > PI2 + PI) {
          leftX = -1;
        }
        if (startAbs < PI3by2 && resultantEnd > PI3by2 || resultantEnd > PI2 + PI3by2) {
          topY = -1;
        }
      } else {
        if (startAbs > PIby2 && resultantEnd < PIby2 || resultantEnd < -PI3by2) {
          bottomY = 1;
        }
        if (startAbs > PI && resultantEnd < PI || resultantEnd < -PI) {
          leftX = -1;
        }
        if (startAbs > PI3by2 && resultantEnd < PI3by2 || resultantEnd < -PIby2) {
          topY = -1;
        }
      }
      // now decide the x, y and radius
      if (!centerXDefined) {
        range = rightX - leftX;
        tempRadius = canvasW / range;
        centerX = -tempRadius * leftX;
        calculatedRadus = tempRadius;
        if (pivotCalRequard) {
          if (canvasW - centerX < compositPivotRadius) {
            centerX = canvasW - compositPivotRadius;
            positiveLength = canvasW - centerX;
            negativeLength = -centerX;
            calculatedRadus = leftX ? Math.min(positiveLength / rightX, negativeLength / leftX) : positiveLength / rightX;
          } else if (centerX < compositPivotRadius) {
            centerX = compositPivotRadius;
            positiveLength = canvasW - centerX;
            negativeLength = -centerX;
            calculatedRadus = leftX ? Math.min(positiveLength / rightX, negativeLength / leftX) : positiveLength / rightX;
          }
        }
        returnObj.centerX = centerX;
      } else if (!rediusDefined) {
        positiveLength = canvasW - centerX;
        negativeLength = -centerX;
        calculatedRadus = leftX ? Math.min(positiveLength / rightX, negativeLength / leftX) : positiveLength / rightX;
      }

      if (!centerYDefined) {
        range = bottomY - topY;
        tempRadius = canvasH / range;
        centerY = -tempRadius * topY;
        if (pivotCalRequard) {
          if (canvasH - centerY < compositPivotRadius) {
            centerY = canvasH - compositPivotRadius;
            positiveLength = canvasH - centerY;
            negativeLength = -centerY;
            calculatedRadus = Math.min(calculatedRadus, topY ? Math.min(positiveLength / bottomY, negativeLength / topY) : positiveLength / bottomY);
          } else if (centerY < compositPivotRadius) {
            centerY = compositPivotRadius;
            positiveLength = canvasH - centerY;
            negativeLength = -centerY;
            calculatedRadus = Math.min(calculatedRadus, topY ? Math.min(positiveLength / bottomY, negativeLength / topY) : positiveLength / bottomY);
          }
        }
        // yAxisExtra
        if (canvasH - centerY < yPosExtra) {
          centerY = canvasH - yPosExtra;
          positiveLength = canvasH - centerY;
          negativeLength = -centerY;
          calculatedRadus = Math.min(calculatedRadus, topY ? Math.min(positiveLength / bottomY, negativeLength / topY) : positiveLength / bottomY);
        } else if (centerY < yNegExtra) {
          centerY = yNegExtra;
          positiveLength = canvasH - centerY;
          negativeLength = -centerY;
          calculatedRadus = Math.min(calculatedRadus, topY ? Math.min(positiveLength / bottomY, negativeLength / topY) : positiveLength / bottomY);
        }
        calculatedRadus = Math.min(calculatedRadus, tempRadius);
        returnObj.centerY = centerY;
      } else if (!rediusDefined) {
        positiveLength = canvasH - centerY;
        negativeLength = -centerY;
        calculatedRadus = Math.min(calculatedRadus, topY ? Math.min(positiveLength / bottomY, negativeLength / topY) : positiveLength / bottomY);
      }
      returnObj.maxRadius = calculatedRadus;
      if (returnObj.maxRadius <= 0) {
        returnObj.maxRadius = Math.min(canvasW / 2, canvasH / 2);
      }
    }
    return returnObj;
  };

  AngularGauge._getScaleFactor = function _getScaleFactor(origW, origH, canvasWidth, canvasHeight) {
    var scaleFactor;
    origH = (0, _lib.pluckNumber)(origH, canvasHeight);
    origW = (0, _lib.pluckNumber)(origW, canvasWidth);
    if (!origH || !origW) {
      scaleFactor = 1;
    } else if (origW / canvasWidth == origH / canvasHeight) {
      // Now, if the ratio of original width,height & stage width,height are same
      // In this case, the transformation value would be the same, as the ratio
      // of transformation of width and height is same.
      scaleFactor = canvasWidth / origW;
    } else {
      // If the transformation factors are different, we do a constrained scaling
      // We get the aspect whose delta is on the lower side.
      scaleFactor = Math.min(canvasWidth / origW, canvasHeight / origH);
    }

    return scaleFactor;
  };

  AngularGauge.prototype._getData = function _getData(index, callback) {
    return _angularHlinearCommon._getData.call(this, index, callback);
  };

  AngularGauge.prototype._setData = function _setData(dialIndex, value) {
    _angularHlinearCommon._setData.call(this, dialIndex, value);
  };

  AngularGauge.prototype._getDataForId = function _getDataForId(id, callback) {
    return _angularHlinearCommon._getDataForId.call(this, id, callback);
  };

  AngularGauge.prototype._setDataForId = function _setDataForId(id, value) {
    _angularHlinearCommon._setDataForId.call(this, id, value);
  };

  return AngularGauge;
}(_fusioncharts2['default']);

exports['default'] = AngularGauge;

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  (0, _lib.componentFactory)(chart, _polarNumeric2['default'], 'scale', 1, chart._feedAxesRawData());
  chart.addToEnv('scale', chart.getChildren('scale')[0]);
};

var _polarNumeric = __webpack_require__(770);

var _polarNumeric2 = _interopRequireDefault(_polarNumeric);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 770:
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

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _gaugePolarNumeric = __webpack_require__(349);

var _gaugePolarNumeric2 = _interopRequireDefault(_gaugePolarNumeric);

var _lib = __webpack_require__(5);

var _polarUtil = __webpack_require__(93);

var _diff = __webpack_require__(87);

var _diff2 = _interopRequireDefault(_diff);

var _dependencyManager = __webpack_require__(6);

var _assign3 = __webpack_require__(54);

var _assign4 = _interopRequireDefault(_assign3);

var _polarNumericAnimation = __webpack_require__(771);

var _polarNumericAnimation2 = _interopRequireDefault(_polarNumericAnimation);

var _linear = __webpack_require__(208);

var _linear2 = _interopRequireDefault(_linear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    POSITION_MIDDLE = _lib.preDefStr.POSITION_MIDDLE,
    POSITION_START = _lib.preDefStr.POSITION_START,
    POSITION_TOP = _lib.preDefStr.POSITION_TOP,
    POSITION_BOTTOM = _lib.preDefStr.POSITION_BOTTOM,
    POSITION_END = _lib.preDefStr.POSITION_END,
    BLANKSTRING = '',
    GUTTER_PADDING = 5,
    M = 'M',
    L = 'L',
    math = Math,
    pi = math.PI,
    pi2 = 2 * pi,
    MINOR_TICK = '_minorTick',
    MAJOR_TICK = '_majorTick',
    LABEL_ID = '_label',
    TRENDLINE_ID = '_trendLine',
    TRENDLABEL_ID = '_trendLabel',
    TRENDMARKER_ID = '_marker';

(0, _dependencyManager.addDep)({
  name: 'polarNumericAnimation',
  type: 'animationRule',
  extension: _polarNumericAnimation2['default']
});

var PolarGaugeAxis = function (_GaugePolarNumeric) {
  _inherits(PolarGaugeAxis, _GaugePolarNumeric);

  function PolarGaugeAxis() {
    _classCallCheck(this, PolarGaugeAxis);

    var _this = _possibleConstructorReturn(this, _GaugePolarNumeric.call(this));

    _this.config.scale = new _linear2['default']();
    _this.config.prevIntervalArrMajor = [];
    _this.config.prevIntervalArrMinor = [];
    _this.config.prevIntervalArrLabel = [];
    _this.config.prevIntervalArrTrendLine = [];
    _this.config.prevIntervalArrTrendLabel = [];
    _this.config.prevIntervalArrTrendMarker = [];
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  PolarGaugeAxis.prototype.getName = function getName() {
    return 'polarNumeric';
  };
  /**
   * Function set the starting point for drawing the axis and the axis drawing width/height
   * @param {Object} data Contains the x, y, length and whether the axis is drawn on the opposite side
   */


  PolarGaugeAxis.prototype.setAxisDimention = function setAxisDimention() {
    var axis = this,
        scale = axis.getScale(),
        axisConfig = axis.config,
        startAngle = axisConfig.startAngle || pi2 / 2,
        totalAngle = axisConfig.totalAngle || pi2 / 2,
        endAngle = startAngle + totalAngle,
        rangeArr = void 0,

    // category = axisConfig.tickValues.tickValue || [],
    // anglePerSlice = totalAngle / (category.length || 1),
    axisDimention = axisConfig.axisDimention || (axisConfig.axisDimention = {});

    axisDimention.centerX = axisConfig.centerX;
    axisDimention.centerY = axisConfig.centerY;
    axisDimention.axisLength = pi2;

    // endAngle -= anglePerSlice;
    rangeArr = [startAngle, endAngle];
    scale.setRange(rangeArr);
  };

  PolarGaugeAxis.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _GaugePolarNumeric.prototype.__setDefaultConfig.call(this);
    var config = this.config;

    config.trendPoints = UNDEF;
    config.ticksBelowGauge = UNDEF;
    config.ticksBelowGraph = UNDEF;
    config.trendValueDistance = UNDEF;
  };

  /**
   * Prepare the axis attributes for use by the chart drawing. It applies default values to the
   * options that are undefined.
   * @param  {Object}  rawAttr The raw attributes to be set
   */


  PolarGaugeAxis.prototype.configureAttributes = function configureAttributes(rawAttr) {
    var axis = this,
        axisConfig = axis.config,
        axisAttr;

    _GaugePolarNumeric.prototype.configureAttributes.call(this, rawAttr);
    axisAttr = axisConfig.rawAttr;

    axisConfig.upperLimitDisplay = axisAttr.upperLimitDisplay || '';
    axisConfig.lowerLimitDisplay = axisAttr.lowerLimitDisplay || '';
    axisConfig.polarPadding = 4;
  };

  PolarGaugeAxis.prototype._drawComponents = function _drawComponents() {
    var axis = this,
        axisConfig = axis.config;

    axisConfig.drawTick && axis._drawTick();
    axisConfig.drawLabels && axis._drawLabel();
    axisConfig.drawTrendLines && axis._drawTrendLine();
  };

  PolarGaugeAxis.prototype.getAngle = function getAngle(value) {
    var axis = this,
        angle,
        axisScale = axis.getScale();
    angle = axisScale.getRangeValue(value);
    return angle;
  };

  PolarGaugeAxis.prototype.placeAxis = function placeAxis(maxLimit) {
    var axis = this,
        axisConfig = axis.config,
        chart = axis.getFromEnv('chart'),
        smartLabel = chart.getFromEnv('smartLabel'),
        axisRange = axisConfig.axisRange,
        labelStyle = axisConfig.labels.style,
        increment = axisRange.tickInterval,
        upperLimitDisplay = axisConfig.upperLimitDisplay,
        lowerLimitDisplay = axisConfig.lowerLimitDisplay,
        max = axisRange.max,
        min = axisRange.min,
        maxTextSize = 0,
        maxText,
        i,
        counter,
        text,
        numberFormatterFn,
        textWidthBuffer,
        numberFormatter = chart.getFromEnv('number-formatter'),
        numDimention,
        ret,
        leftLimit;

    ret = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabel.setStyle({
      fontSize: labelStyle.fontSize,
      fontFamily: labelStyle.fontFamily,
      lineHeight: labelStyle.lineHeight,
      fontWeight: labelStyle.fontWeight
    });

    if (!axis.components) {
      axis.components = {};
      axis.components.labels = [];
    }
    axisConfig.labels.isDraw = 1;
    axisConfig.labels.drawNormalVal = 1;
    axisConfig.labels.drawLimitVal = 1;
    axisConfig.lines.isDraw = 1;
    axisConfig.labels.step = axisConfig.tickValueStep;
    axisConfig.labelPadding = 0;

    leftLimit = maxLimit;
    if (axisConfig.drawLabels && axisConfig.showTickValues && leftLimit > 0) {
      axisConfig.labelPadding += axisConfig.tickValueDistance;
      leftLimit -= axisConfig.tickValueDistance;
      // measuring the label dimention
      numberFormatterFn = numberFormatter.scale;
      // calculating the label max width and height
      // TODO : smartly calculate the max width height
      for (i = min, counter = 0; i <= max; i += increment) {
        text = '' + numberFormatterFn.call(numberFormatter, (0, _lib.toPrecision)(i, 10));
        numDimention = smartLabel.getOriSizeImprove(text, true);

        axis.components.labels[counter] = {
          config: {
            props: {
              label: {
                attr: {
                  width: numDimention.width,
                  height: numDimention.height
                }
              }
            }
          }
        };
        counter++;
        if (text.length > maxTextSize) {
          maxText = text;
          maxTextSize = text.length;
        }
      }
      numDimention = smartLabel.getOriSizeImprove(maxText, true);
      if (numDimention.width > maxLimit / 2) {
        axisConfig.labels.isDraw = false;
        return ret;
      }
      if (axisConfig.showLimits) {
        // update numDimension if any displayvalue is given and has bigger dimensions than maxlimit value.
        if (upperLimitDisplay || lowerLimitDisplay) {
          textWidthBuffer = smartLabel.getOriSizeImprove(upperLimitDisplay, true);
          // if the width of the upperlimitdisplay is greater then the width
          // of the maxText then set maxText as upperlimitdisplay and update numDimention
          if (textWidthBuffer.width > numDimention.width) {
            maxText = upperLimitDisplay;
            maxTextSize = textWidthBuffer.width;

            numDimention = textWidthBuffer;
          }
          textWidthBuffer = smartLabel.getOriSizeImprove(lowerLimitDisplay, true);
          // if the width of the lowerlimitdisplay is greater then the width
          // of the maxText then set maxText as lowerlimitdisplay and update numDimention
          if (textWidthBuffer.width > numDimention.width) {
            maxText = lowerLimitDisplay;
            maxTextSize = textWidthBuffer.width;
            numDimention = textWidthBuffer;
          }
        }
      } else {
        axisConfig.labels.drawLimitVal = false;
      }
      numDimention = smartLabel.getOriSize(maxText);
      axisConfig.labelMaxW = numDimention.width;
      if (axisConfig.labelMaxW > maxLimit / 2) {
        axisConfig.labelMaxW = maxLimit / 2;
      }
      axisConfig.labelMaxH = numDimention.height;
      if (!axisConfig.placeValuesInside) {
        ret.right += axisConfig.labelMaxW + axisConfig.tickValueDistance;
        ret.left += axisConfig.labelMaxW + axisConfig.tickValueDistance;
        ret.top += axisConfig.labelMaxH + axisConfig.tickValueDistance;
        ret.bottom += axisConfig.labelMaxH + axisConfig.tickValueDistance;
      } else {
        axisConfig.labelPadding = -axisConfig.labelPadding;
      }
    } else {
      axisConfig.labels.isDraw = false;
    }

    return ret;
  };

  /**
   * Parses the label attributes and calculates position
   *
   * @memberof PolarGaugeAxis
   */


  PolarGaugeAxis.prototype._parseLabel = function _parseLabel() {
    var axis = this,
        axisConfig = axis.config,
        chart = axis.getFromEnv('chart'),
        axisRange = axisConfig.axisRange,
        axisScale = axis.getScale(),
        smartLabel = chart.getFromEnv('smartLabel'),
        increment,
        labelStore,
        labelConf,
        labels = axisConfig.labels,
        style = labels.style,
        axisPadding = axisConfig.labelPadding || 0,
        isUpperlimitAdjusted = false,
        radius = axisConfig.radius,
        gaugeOuterRadius = (0, _lib.pluckNumber)(axisConfig.gaugeOuterRadius, radius),
        gaugeInnerRadius = (0, _lib.pluckNumber)(axisConfig.gaugeInnerRadius, radius),
        centerX = axisConfig.centerX,
        centerY = axisConfig.centerY,
        placeValuesInside = axisConfig.placeValuesInside,
        axisValueMaxH = axisConfig.labelMaxH,
        axisValueMaxW = axisConfig.labelMaxW,
        i,
        max = axisRange.max,
        min = axisRange.min,
        counter = 0,
        tempText,
        theta,
        text,
        loopMin,
        loopMax,
        labelLineHeight,
        numberFormatterFn,
        numberFormatter = chart.getFromEnv('number-formatter'),
        axisAttrObj,
        getPos;

    if (style.lineHeight) {
      labelLineHeight = style.lineHeight;
      if (labelLineHeight.indexOf('px') !== -1) {
        labelLineHeight = labelLineHeight.replace('px', '');
        labelLineHeight = parseFloat(labelLineHeight);
      }
    }
    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabel.setStyle({
      fontSize: style.fontSize,
      fontFamily: style.fontFamily,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight
    });

    if (axisConfig.labels.isDraw) {
      labelStore = axis.components.labels;

      loopMin = min;
      loopMax = max;
      // Common style attribute for both axis
      // initialize the increment by taking account the label step
      axisConfig.labels.step ? increment = axisRange.tickInterval * axisConfig.labels.step : increment = axisRange.tickInterval;
      for (i = loopMin, counter = 0; i <= loopMax; i += increment) {
        theta = axisScale.getRangeValue(i);
        // if values are not limit value and label drawing is off other
        // than limit increment it and continue
        if (!axisConfig.labels.drawNormalVal && !(axisConfig.labels.drawLimitVal && (i === min || i === max))) {
          continue;
        }
        if (!axisConfig.labels.drawNormalVal && !(i === min || i === max)) {
          continue;
        }
        // if value are limit value but limit value are not mean to be drawn
        if (!axisConfig.labels.drawLimitVal && (i === min || i === max)) {
          continue;
        }
        // if value is zero and show zero plane is off
        if (axisConfig.showZeroPlaneValue === 0 && axisConfig.showZeroPlane === 0 && i === 0) {
          continue;
        }

        // make the attribute ready to use
        // y-axis
        numberFormatterFn = numberFormatter.scale;
        if (i === min && axisConfig.lowerLimitDisplay) {
          tempText = smartLabel.getSmartText(axisConfig.lowerLimitDisplay, axisValueMaxW, axisValueMaxH);
          text = tempText.text;
        } else if (i === max && axisConfig.upperLimitDisplay) {
          tempText = smartLabel.getSmartText(axisConfig.upperLimitDisplay, axisValueMaxW, axisValueMaxH);
          text = tempText.text;
        } else {
          text = numberFormatterFn.call(numberFormatter, (0, _lib.toPrecision)(i, 10));
        }
        if (placeValuesInside) {
          getPos = (0, _polarUtil.polarToCartesian)(gaugeInnerRadius + axisPadding - axisConfig.polarPadding, theta);
        } else {
          getPos = (0, _polarUtil.polarToCartesian)(gaugeOuterRadius + axisPadding + axisConfig.polarPadding, theta);
        }
        getPos.x += centerX;
        getPos.y += centerY;
        axisAttrObj = {
          fill: style.color,
          'line-height': labelLineHeight,
          'text': text,
          'x': getPos.x,
          'y': getPos.y
        };
        if (getPos.x > centerX - 10 && getPos.x < centerX + 10 && getPos.y < centerY) {
          axisAttrObj['text-anchor'] = POSITION_MIDDLE;
          axisAttrObj['text-valign'] = placeValuesInside ? POSITION_TOP : POSITION_BOTTOM;
        } else if (getPos.x > centerX - 10 && getPos.x < centerX + 10 && getPos.y < centerY) {
          axisAttrObj['text-anchor'] = POSITION_MIDDLE;
          axisAttrObj['text-valign'] = placeValuesInside ? POSITION_BOTTOM : POSITION_TOP;
        } else if (getPos.x < centerX) {
          axisAttrObj['text-anchor'] = placeValuesInside ? POSITION_START : POSITION_END;
          axisAttrObj['text-valign'] = 'center';
        } else {
          axisAttrObj['text-anchor'] = placeValuesInside ? POSITION_END : POSITION_START;
          axisAttrObj['text-valign'] = 'center';
        }

        labelConf = labelStore[counter] = labelStore[counter] || {
          config: {
            props: {
              label: {
                attr: {}
              }
            }
          }
        };

        labelConf.config.props.label.attr = (0, _assign4['default'])(labelConf.config.props.label.attr, axisAttrObj);

        counter += 1;
        if (!isUpperlimitAdjusted && i < max && i + increment > max) {
          i = max - increment;
          isUpperlimitAdjusted = true;
        }
      }
    }
  };

  /**
   * Draws the axis labels
   *
   * @memberof PolarGaugeAxis
   */


  PolarGaugeAxis.prototype._drawLabel = function _drawLabel() {
    var axis = this,
        axisConfig = axis.config,
        chart = axis.getFromEnv('chart'),
        axisRange = axisConfig.axisRange,
        increment,
        labels = axisConfig.labels,
        style = labels.style,
        i,
        max = axisRange.max,
        min = axisRange.min,
        axisContainer = axisConfig.axisLabelContainerTop,
        textlabels = axis.getGraphicalElement('labels'),
        counter = 0,
        textElement,
        loopMin,
        loopMax,
        animationManager = chart.getFromEnv('animationManager'),
        css = {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle,
      lineHeight: style.lineHeight
    },
        axisAttrObj,
        tickValues = [],
        tickValue,
        intervalArrLabel,
        ln,
        diff,
        removingElement,
        textElementCheck,
        presentIn = function presentIn(containingArray) {
      return function (element) {
        containingArray.includes(element);
      };
    };
    // Set visibility of axisContainer and apply css.
    axisContainer.show();
    axisContainer.css(css);
    // checking if labels are to be drawn user can decide or can be decided by axis placeAxis function
    if (axisConfig.labels.isDraw) {
      loopMin = min;
      loopMax = max;
      // Common style attribute for both axis
      // initialize the increment by taking account the label step
      axisConfig.labels.step ? increment = axisRange.tickInterval * axisConfig.labels.step : increment = axisRange.tickInterval;

      // main loop where the drawing starts
      for (i = loopMin, counter = 0; i <= loopMax; i += increment) {
        tickValue = i;
        tickValues.push(tickValue);
      }
      intervalArrLabel = tickValues.filter(presentIn(axisConfig.prevIntervalArrLabel));
      diff = (0, _diff2['default'])(axisConfig.prevIntervalArrLabel, intervalArrLabel);
      for (i = 0, ln = diff.length; i < ln; i++) {
        removingElement = axis.getGraphicalElement('' + diff[i] + LABEL_ID);
        if (removingElement) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElement,
            container: axisContainer,
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: 'text'
          }));
        }
      }
      axisConfig.prevIntervalArrLabel = tickValues.slice();
      for (i = loopMin, counter = 0; i <= loopMax; i += increment) {
        // if values are not limit value and label drawing is off other
        // than limit increment it and continue
        if (!axisConfig.labels.drawNormalVal && !(axisConfig.labels.drawLimitVal && (i === min || i === max))) {
          continue;
        }
        if (!axisConfig.labels.drawNormalVal && !(i === min || i === max)) {
          continue;
        }
        // if value are limit value but limit value are not mean to be drawn
        if (!axisConfig.labels.drawLimitVal && (i === min || i === max)) {
          continue;
        }
        // if value is zero and show zero plane is off
        if (axisConfig.showZeroPlaneValue === 0 && axisConfig.showZeroPlane === 0 && i === 0) {
          continue;
        }

        // check if extra label element is present don't draw it just use it by changing the attributes
        textElementCheck = axis.getGraphicalElement('' + i + LABEL_ID);

        axisAttrObj = axis.components.labels[counter].config.props.label.attr;
        // create/reuse text element
        textElement = animationManager.setAnimation({
          el: textElementCheck || 'text',
          attr: axisAttrObj,
          container: axisContainer,
          component: axis,
          label: 'text'
        });

        // Add to _graphics of axis if not present previously
        if (!textElementCheck) {
          axis.addGraphicalElement('' + i + LABEL_ID, textElement);
        }
        counter += 1;
      }
    } else {
      // hiding the extra elements which can be used later
      // Also check if textlabels exist or not
      if (textlabels && textlabels[counter]) {
        for (i = counter; i < textlabels.length; i++) {
          animationManager.setAnimation({
            el: textlabels[i],
            attr: {
              text: ''
            },
            component: axis,
            label: 'text'
          });
        }
      }
    }
  };

  PolarGaugeAxis.prototype._drawTick = function _drawTick() {
    var axis = this,
        axisConfig = axis.config,
        axisRange = axisConfig.axisRange,
        increment = axisRange.tickInterval,
        drawTick = axisConfig.drawTick,
        axisScale = axis.getScale(),
        thetaMajor,
        thetaMinor,
        drawTickMinor = axisConfig.drawTickMinor,
        chart = axis.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),
        max = axisRange.max,
        min = axisRange.min,
        radius = axisConfig.radius,
        centerX = axisConfig.centerX,
        centerY = axisConfig.centerY,
        gaugeOuterRadius = (0, _lib.pluckNumber)(axisConfig.gaugeOuterRadius, radius),
        gaugeInnerRadius = (0, _lib.pluckNumber)(axisConfig.gaugeInnerRadius, radius),
        plotLine = axis.getGraphicalElement('tick'),
        numMinorTM = axisConfig.minorTMNumber,
        counter = 0,
        isUpperlimitAdjusted = false,
        lineElement,
        getLimit,
        minorTickObj,
        majorTickObj,
        statPix,
        endPixMajor,
        endPixMinor,
        minorTickInterval,
        loopMin,
        loopMax,
        i,
        ii,
        j,
        k,
        minorV,
        tickGroup,
        diff,
        tempObj,
        tickValue,
        tickValues = [],
        minorTickValues = [],
        intervalArrMajor = [],
        intervalArrMinor = [],
        majorTickCheck,
        minorTickCheck,
        removingElement,
        ln,
        presentIn = function presentIn(containingArray) {
      return function (element) {
        containingArray.includes(element);
      };
    };

    tickGroup = axisConfig.axisAxisLineContainer;
    majorTickObj = {
      stroke: axisConfig.majorTMColor,
      'stroke-width': axisConfig.majorTMThickness,
      'stroke-linecap': 'round'
    };
    minorTickObj = {
      stroke: axisConfig.minorTMColor,
      'stroke-width': axisConfig.minorTMThickness,
      'stroke-linecap': 'round'
    };

    // Set visibility of tickGroup
    tickGroup.show();

    // checking if lines are to be drawn user can decide
    if (axisConfig.lines.isDraw && drawTick) {
      // intelligently calculate the loop max and loop min from the visual active dataset
      // get the visible configuration means the value between the dataset is visible
      getLimit = this.getVisibleConfig();
      // calculate the loopMin loopMax with padding of three increment units in pixel
      loopMin = min + increment * math.floor((getLimit.minValue - increment * 3 - min) / increment);
      loopMax = min + increment * math.floor((getLimit.maxValue + increment * 3 - min) / increment);
      // if the loopMin or loopMax cross the min and max limit of data then adjust it
      loopMin = loopMin < min ? min : loopMin;
      loopMax = loopMax > max ? max : loopMax;

      for (i = loopMin; i <= loopMax; i += increment) {
        tickValue = i;
        tickValues.push(tickValue);
      }
      intervalArrMajor = tickValues.filter(presentIn(axisConfig.prevIntervalArrMajor));
      diff = (0, _diff2['default'])(axisConfig.prevIntervalArrMajor, intervalArrMajor);
      for (i = 0, ln = diff.length; i < ln; i++) {
        removingElement = axis.getGraphicalElement('' + diff[i] + MAJOR_TICK);
        if (removingElement) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElement,
            container: tickGroup,
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: 'path'
          }));
        }
      }
      axisConfig.prevIntervalArrMajor = tickValues.slice();

      for (i = loopMin, counter = 0, ii = 0; i <= loopMax, ii < tickValues.length; i += increment, ii++) {
        tickValue = tickValues[ii];
        thetaMajor = axisScale.getRangeValue(i);
        if (!axisConfig.placeTicksInside) {
          statPix = (0, _polarUtil.polarToCartesian)(gaugeOuterRadius, thetaMajor);
          endPixMajor = (0, _polarUtil.polarToCartesian)(gaugeOuterRadius - axisConfig.majorTMHeight, thetaMajor);
        } else {
          statPix = (0, _polarUtil.polarToCartesian)(gaugeInnerRadius, thetaMajor);
          endPixMajor = (0, _polarUtil.polarToCartesian)(gaugeInnerRadius + axisConfig.majorTMHeight, thetaMajor);
        }
        statPix.x += centerX;
        statPix.y += centerY;
        endPixMajor.x += centerX;
        endPixMajor.y += centerY;
        majorTickObj.path = 'M' + statPix.x + ' ' + statPix.y + 'L' + endPixMajor.x + ' ' + endPixMajor.y;
        tempObj = (0, _assign2['default'])({}, majorTickObj);
        majorTickCheck = axis.getGraphicalElement('' + tickValues[ii] + MAJOR_TICK);
        lineElement = animationManager.setAnimation({
          el: majorTickCheck || 'path',
          attr: tempObj,
          container: tickGroup,
          component: axis,
          label: 'path'
        });
        if (!majorTickCheck) {
          axis.addGraphicalElement('' + tickValues[ii] + MAJOR_TICK, lineElement);
        }
        counter += 1;
        if (i < max && drawTickMinor) {
          minorTickInterval = increment / (Number(numMinorTM) + 1);
          for (j = 1; j <= numMinorTM; j += 1) {
            minorV = i + minorTickInterval * j;
            minorTickValues.push(minorV);
          }
          axisConfig.prevIntervalArrMinor[ii] = axisConfig.prevIntervalArrMinor[ii] || [];
          intervalArrMinor = minorTickValues.filter(presentIn(axisConfig.prevIntervalArrMinor[ii]));
          diff = (0, _diff2['default'])(axisConfig.prevIntervalArrMinor[ii], intervalArrMinor);
          for (k = 0, ln = diff.length; k < ln; k++) {
            removingElement = axis.getGraphicalElement('' + diff[k] + MINOR_TICK);
            if (removingElement) {
              axis._spliceGraphicalElement(animationManager.setAnimation({
                el: removingElement,
                container: tickGroup,
                callback: function callback() {
                  this.remove();
                },
                component: axis,
                label: 'path'
              }));
            }
          }
          axisConfig.prevIntervalArrMinor[ii] = minorTickValues;
          for (j = 0; j < minorTickValues.length; j += 1) {
            minorV = minorTickValues[j];
            thetaMinor = axisScale.getRangeValue(minorV);
            if (!axisConfig.placeTicksInside) {
              statPix = (0, _polarUtil.polarToCartesian)(gaugeOuterRadius, thetaMinor);
              endPixMinor = (0, _polarUtil.polarToCartesian)(gaugeOuterRadius - axisConfig.minorTMHeight, thetaMinor);
            } else {
              statPix = (0, _polarUtil.polarToCartesian)(gaugeInnerRadius, thetaMinor);
              endPixMinor = (0, _polarUtil.polarToCartesian)(gaugeInnerRadius + axisConfig.minorTMHeight, thetaMinor);
            }
            statPix.x += centerX;
            statPix.y += centerY;
            endPixMinor.x += centerX;
            endPixMinor.y += centerY;
            minorTickObj.path = 'M' + statPix.x + ' ' + statPix.y + 'L' + endPixMinor.x + ' ' + endPixMinor.y;
            tempObj = (0, _assign2['default'])({}, minorTickObj);

            // reuse the elements if there
            minorTickCheck = axis.getGraphicalElement('' + minorTickValues[j] + MINOR_TICK);

            lineElement = animationManager.setAnimation({
              el: minorTickCheck || 'path',
              attr: tempObj,
              container: tickGroup,
              component: axis,
              label: 'path'
            });
            if (!minorTickCheck) {
              axis.addGraphicalElement('' + minorTickValues[j] + MINOR_TICK, lineElement);
            }
            counter += 1;
          }
        }
        if (!isUpperlimitAdjusted && i < max && i + increment > max) {
          i = max - increment;
          isUpperlimitAdjusted = true;
        }
      }
      plotLine = axis.getGraphicalElement('tick');
      // hiding the extra elements for later use
      if (plotLine && plotLine[counter]) {
        for (i = counter; i < plotLine.length; i++) {
          animationManager.setAnimation({
            el: plotLine[i],
            attr: {
              path: []
            },
            component: axis,
            label: 'path'
          });
        }
      }
      axis.addGraphicalElement('tick', plotLine);
      // axis.graphics.tick = plotLine;
    } else {
      // hiding the extra elements for later use
      if (plotLine && plotLine[counter]) {
        for (i = counter; i < plotLine.length; i++) {
          animationManager.setAnimation({
            el: plotLine[i],
            attr: {
              path: []
            },
            component: axis,
            label: 'path'
          });
        }
      }
    }
  };

  PolarGaugeAxis.prototype._drawTrendLine = function _drawTrendLine() {
    var axis = this,
        axisConfig = axis.config,
        axisRange = axisConfig.axisRange,
        toolTipController = axis.getFromEnv('toolTipController'),
        max = axisRange.max,
        axisScale = axis.getScale(),
        theta,
        min = axisRange.min,
        canvas = axisConfig.canvas,
        chart = axis.getFromEnv('chart'),
        chartConfig = chart.config,
        smartLabel = chart.getFromEnv('smartLabel'),
        colorM = chart.getFromEnv('color-manager'),
        animationManager = chart.getFromEnv('animationManager'),
        scaleFactor = axisConfig.scaleFactor,
        centerX = axisConfig.centerX || 0,
        centerY = axisConfig.centerY || 0,
        canvasWidth = canvas.canvasWidth || chartConfig.canvasWidth,
        style = axisConfig.trend.trendStyle,
        axisTrendContainerTop = axisConfig.axisTrendContainerTop,
        axisTrendContainerBottom = axisConfig.axisTrendContainerBottom,
        axisTrendLabelContainer = axisConfig.axisTrendLabelContainer,
        css = {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle
    },
        numberFormatter = chart.getFromEnv('number-formatter'),
        trendPoints = axisConfig.trendPoints,
        deg2rad = math.PI / 180,
        trendText = {},
        i,
        iLim,
        trendElement,
        trendElemenCheck,
        trendLabelElementCheck,
        trendLabelElement,
        isTrendZone,
        axisDrawingAttrObj = {},
        axisMarkerAttrObj = {},
        axisTextAttrObj = {},
        trendPointObj,
        startValue,
        endValue,
        AttrList,
        sides,
        limitingValue,
        limitingNegValue,
        trendOuterRadius,
        trendInnerRadius,
        startPoints,
        startPoints1,
        startX,
        startY,
        startX1,
        startY1,
        trendEndAngle,
        trendStartAngle,
        textValue,
        cosTh,
        sinTh,
        trendTextWidth,
        textRadius,
        align,
        trendTextHeight,
        stHeight,
        trendMarkerElement,
        trendMarkerCheck,
        trendValues = [],
        idStart,
        intervalArrTrend = [],
        diff,
        removingElement,
        removingElementLabel,
        removingElementMarker,
        ln,
        presentIn = function presentIn(containingArray) {
      return function (element) {
        return containingArray.includes(element);
      };
    };
    // get the trend line object
    if (trendPoints) {
      // if trendline object is present iterate through the object to draw
      smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
      smartLabel.setStyle(css);
      for (i = 0, iLim = trendPoints.point.length; i < iLim; i += 1) {
        trendPointObj = trendPoints.point[i];
        trendValues.push(trendPointObj.startvalue + '_' + trendPointObj.endvalue + '_' + i);
      }
      intervalArrTrend = trendValues.filter(presentIn(axisConfig.prevIntervalArrTrendLine));
      diff = (0, _diff2['default'])(axisConfig.prevIntervalArrTrendLine, intervalArrTrend);

      for (i = 0, ln = diff.length; i < ln; i++) {
        removingElement = axis.getGraphicalElement('' + diff[i] + TRENDLINE_ID);
        removingElementLabel = axis.getGraphicalElement('' + diff[i] + TRENDLABEL_ID);
        removingElementMarker = axis.getGraphicalElement('' + diff[i] + TRENDMARKER_ID);
        startValue = (0, _lib.pluckNumber)(trendPointObj.startvalue, trendPointObj.value);
        endValue = (0, _lib.pluckNumber)(trendPointObj.endvalue, startValue);
        isTrendZone = startValue !== endValue;
        if (removingElement) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElement,
            container: isTrendZone ? axisTrendContainerBottom : axisTrendContainerTop,
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: isTrendZone ? 'ringpath' : 'path'
          }));
        }
        if (removingElementLabel) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElementLabel,
            container: axisTrendLabelContainer,
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: 'text'
          }));
        }
        if (removingElementMarker) {
          axis._spliceGraphicalElement(animationManager.setAnimation({
            el: removingElementMarker,
            container: axisTrendContainerTop,
            callback: function callback() {
              this.remove();
            },
            component: axis,
            label: 'polypath'
          }));
        }
      }
      axisConfig.prevIntervalArrTrendLine = trendValues.slice();
      for (i = 0, iLim = trendPoints.point.length; i < iLim; i += 1) {
        trendPointObj = trendPoints.point[i];
        idStart = trendPointObj.startvalue + '_' + trendPointObj.endvalue + '_' + i;
        startValue = (0, _lib.pluckNumber)(trendPointObj.startvalue, trendPointObj.value);
        endValue = (0, _lib.pluckNumber)(trendPointObj.endvalue, startValue);
        theta = axisScale.getRangeValue(startValue);
        isTrendZone = startValue !== endValue;

        if (startValue <= max && startValue >= min && endValue <= max && endValue >= min) {
          AttrList = {
            startValue: startValue,
            endValue: endValue,
            tooltext: (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(trendPointObj.markertooltext)),
            displayValue: (0, _lib.getValidValue)((0, _lib.parseUnsafeString)(trendPointObj.displayvalue), isTrendZone ? BLANKSTRING : numberFormatter.scale(startValue)),
            showOnTop: (0, _lib.pluckNumber)(trendPointObj.showontop, axisConfig.ticksBelowGauge, axisConfig.ticksBelowGraph, 1),
            color: (0, _lib.pluck)(trendPointObj.color, colorM.getColor('trendLightColor')),
            alpha: (0, _lib.pluckNumber)(trendPointObj.alpha, 99),
            thickness: (0, _lib.pluckNumber)(trendPointObj.thickness, 1),
            dashStyle: trendPointObj.dashed ? (0, _lib.getDashStyle)(trendPointObj.dashlen || 2, trendPointObj.dashgap || 2) : '',
            // Marker properties
            useMarker: (0, _lib.pluckNumber)(trendPointObj.usemarker, 0),
            markerColor: (0, _lib.convertColor)((0, _lib.pluck)(trendPointObj.markercolor, trendPointObj.color, colorM.getColor('trendLightColor')), 100),
            markerBorderColor: (0, _lib.convertColor)((0, _lib.pluck)(trendPointObj.markerbordercolor, trendPointObj.bordercolor, colorM.getColor('trendDarkColor')), 100),
            markerRadius: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.markerradius) * scaleFactor, 5),
            markerToolText: (0, _lib.getFirstValue)(trendPointObj.markertooltext),
            trendValueDistance: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.trendvaluedistance, axisConfig.trendValueDistance) * scaleFactor, axisConfig.tickValueDistance),
            // calcullated
            isTrendZone: isTrendZone,

            // extra for angular gauge
            valueInside: (0, _lib.pluckNumber)(trendPointObj.valueinside, axisConfig.placeValuesInside, 0),
            showBorder: (0, _lib.pluckNumber)(trendPointObj.showborder, 1),
            borderColor: (0, _lib.convertColor)((0, _lib.pluck)(trendPointObj.bordercolor, trendPointObj.color, colorM.getColor('trendDarkColor')), (0, _lib.pluckNumber)(trendPointObj.borderalpha, trendPointObj.alpha, 100)),
            radius: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.radius) * scaleFactor),
            innerRadius: (0, _lib.pluckNumber)((0, _lib.pluckNumber)(trendPointObj.innerradius) * scaleFactor)

          };
          sides = 3;
          limitingValue = Math.cos(89.99 * deg2rad);
          limitingNegValue = -limitingValue;
          trendOuterRadius = (0, _lib.pluckNumber)(AttrList.radius, axisConfig.gaugeOuterRadius);
          trendInnerRadius = (0, _lib.pluckNumber)(AttrList.innerRadius, isTrendZone ? Math.max(axisConfig.gaugeInnerRadius - 15, 0) : axisConfig.gaugeInnerRadius);
          startPoints = (0, _polarUtil.polarToCartesian)(trendOuterRadius, theta);
          startPoints1 = (0, _polarUtil.polarToCartesian)(trendInnerRadius, theta);
          startPoints.x += centerX;
          startPoints.y += centerY;
          startPoints1.x += centerX;
          startPoints1.y += centerY;
          startX = startPoints.x;
          startY = startPoints.y;
          startX1 = startPoints1.x;
          startY1 = startPoints1.y;
          trendEndAngle = axis.getAngle(endValue);
          trendStartAngle = axis.getAngle(startValue);
          if (isTrendZone) {
            // If start angle > end angle then swap the two for intended
            // behavior.
            if (trendStartAngle > trendEndAngle) {
              trendStartAngle += trendEndAngle;
              trendEndAngle = trendStartAngle - trendEndAngle;
              trendStartAngle = trendStartAngle - trendEndAngle;
            }

            axisDrawingAttrObj = {
              fill: (0, _lib.convertColor)(AttrList.color, AttrList.alpha),
              'stroke-width': AttrList.showBorder ? AttrList.thickness : 0,
              stroke: AttrList.borderColor,
              'stroke-dasharray': AttrList.dashStyle,
              ringpath: [centerX, centerY, trendOuterRadius, trendInnerRadius, trendStartAngle, trendEndAngle]
            };
          } else {
            axisDrawingAttrObj = {
              'stroke-width': AttrList.showBorder ? AttrList.thickness : 0,
              stroke: AttrList.borderColor,
              'stroke-linecap': 'round',
              'stroke-dasharray': AttrList.dashStyle,
              path: [M, startX, startY, L, startX1, startY1]
            };
          }
          // if it has marker then add it
          if (AttrList.useMarker) {
            axisMarkerAttrObj = {
              fill: AttrList.markerColor,
              'stroke-width': 1,
              stroke: AttrList.markerBorderColor,
              polypath: [sides, startX, startY, AttrList.markerRadius, (-trendStartAngle + Math.PI) / deg2rad, 0]
            };
          } else {
            axisMarkerAttrObj = {};
          }
          // draw the text if any
          if (AttrList.displayValue !== BLANKSTRING) {
            textValue = (AttrList.endValue + AttrList.startValue) / 2;
            trendEndAngle = axis.getAngle(textValue);
            cosTh = Math.cos(trendEndAngle);
            sinTh = Math.sin(trendEndAngle);
            trendTextWidth = smartLabel.getOriSize(AttrList.displayValue).width;
            if (AttrList.valueInside) {
              textRadius = trendInnerRadius - 2 - AttrList.trendValueDistance;
              align = cosTh > limitingValue ? POSITION_END : cosTh < limitingNegValue ? POSITION_START : POSITION_MIDDLE;
            } else {
              textRadius = trendOuterRadius + 2 + AttrList.trendValueDistance;
              align = cosTh > limitingValue ? POSITION_START : cosTh < limitingNegValue ? POSITION_END : POSITION_MIDDLE;
            }
            startX = centerX + textRadius * cosTh;
            startY = centerY + textRadius * sinTh;

            trendTextHeight = smartLabel.getOriSize(AttrList.displayValue).height;
            trendText = smartLabel.getSmartText(AttrList.displayValue, canvasWidth, trendTextHeight);

            // check whether the text goes out of canvas on basis of it's width and
            // draw text accordingly by re-calculating it's x-coordinate
            startX = canvasWidth < startX + trendTextWidth ? canvasWidth - trendTextWidth - GUTTER_PADDING : startX < trendTextWidth ? trendTextWidth + GUTTER_PADDING : startX;
            // check whether the startX goes out of canvas
            if (trendTextWidth > canvasWidth) {
              startX = canvasWidth / 2;
            }

            axisTextAttrObj = {
              fill: trendPointObj.color || style.color,
              text: trendText.text,
              'text-anchor': align,
              'vertical-align': POSITION_TOP,
              'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
              x: startX,
              y: startY
            };

            // adjust with the bbox
            stHeight = trendText.height;
            // set the text Y
            if (cosTh > limitingValue || cosTh < limitingNegValue) {
              startY += -(stHeight / 2) + stHeight * 0.4 * sinTh * (AttrList.valueInside ? -1 : 1);
            } else {
              if (AttrList.valueInside) {
                startY += -(sinTh < 0 ? 0 : stHeight);
              } else {
                startY += -(sinTh > 0 ? 0 : stHeight);
              }
            }

            axisTextAttrObj.y = startY;
          } else {
            axisTextAttrObj = {
              text: BLANKSTRING
            };
          }
          // reuse the elements if there
          trendElemenCheck = axis.getGraphicalElement(idStart + TRENDLINE_ID);
          trendLabelElementCheck = axis.getGraphicalElement(idStart + TRENDLABEL_ID);
          trendMarkerCheck = axis.getGraphicalElement(idStart + TRENDMARKER_ID);
          // Create/Reuse trend element
          trendElement = isTrendZone ? animationManager.setAnimation({
            el: trendElemenCheck || 'ringpath',
            attr: axisDrawingAttrObj,
            container: axisTrendContainerBottom,
            component: axis,
            label: 'ringpath'
          }) : animationManager.setAnimation({
            el: trendElemenCheck || 'path',
            attr: axisDrawingAttrObj,
            container: axisTrendContainerTop,
            component: axis,
            label: 'path'
          });
          trendElement.show();

          // Create/reuse label
          trendLabelElement = animationManager.setAnimation({
            el: trendLabelElementCheck || 'text',
            attr: axisTextAttrObj,
            container: axisTrendLabelContainer,
            component: axis,
            label: 'text'
          });
          trendLabelElement.css(css);
          trendLabelElement.show();

          // Create/Reuse marker element
          trendMarkerElement = animationManager.setAnimation({
            el: trendMarkerCheck || 'polypath',
            attr: axisMarkerAttrObj,
            container: axisTrendContainerTop,
            component: axis,
            label: 'polypath'
          });
          trendMarkerElement.show();

          // Attach tooltip if applicable
          if (axisConfig.showTooltip && trendText.oriText) {
            trendLabelElement.trackTooltip(true);
          } else {
            trendLabelElement.trackTooltip(false);
          }
          trendMarkerElement.trackTooltip(axisConfig.showTooltip && AttrList.markerToolText !== '');
          trendMarkerElement.tooltip(AttrList.markerToolText);
          toolTipController.enableToolTip(trendLabelElement, trendText.oriText);
          if (!trendElemenCheck) {
            axis.addGraphicalElement(idStart + TRENDLINE_ID, trendElement);
          }
          if (!trendElemenCheck) {
            axis.addGraphicalElement(idStart + TRENDLABEL_ID, trendLabelElement);
          }
          if (!trendMarkerCheck) {
            axis.addGraphicalElement(idStart + TRENDMARKER_ID, trendMarkerElement);
          }
        }
      }
    }
  };

  return PolarGaugeAxis;
}(_gaugePolarNumeric2['default']);

exports['default'] = PolarGaugeAxis;

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _polarAxisAnimation = __webpack_require__(231);

var _polarAxisAnimation2 = _interopRequireDefault(_polarAxisAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.axis.polarNumeric': function initialAxisPolarNumeric() {
    return {
      'path.appearing': _polarAxisAnimation2['default'],
      'text.appearing': _polarAxisAnimation2['default'],
      'polypath.appearing': _polarAxisAnimation2['default'],
      'ringpath.appearing': _polarAxisAnimation2['default'],
      '*': null
    };
  }
};

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var dataObj = chart.getFromEnv('dataSource'),
      pointers = dataObj.pointers || dataObj.dials;

  if (!pointers) {
    dataObj.dials = pointers = {
      dial: [{
        value: 0
      }]
    };
  }
  (0, _lib.datasetFactory)(chart, _angulargauge2['default'], 'dataset', 1, [pointers]);
};

var _lib = __webpack_require__(5);

var _angulargauge = __webpack_require__(773);

var _angulargauge2 = _interopRequireDefault(_angulargauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 773:
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

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

var _lib = __webpack_require__(5);

var _hlineargauge = __webpack_require__(350);

var _hlineargauge2 = _interopRequireDefault(_hlineargauge);

var _dependencyManager = __webpack_require__(6);

var _angularAnimation = __webpack_require__(774);

var _angularAnimation2 = _interopRequireDefault(_angularAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var R = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    math = Math,
    mathAbs = math.abs,
    mathATan2 = math.atan2,
    mathPI = math.PI,
    math2PI = 2 * mathPI,
    mathMax = math.max,
    BLANKSTRING = '',
    PXSTRING = 'px',
    NORMALSTRING = 'normal',
    deg2rad = mathPI / 180,
    UNDEF = void 0,
    FILLMIXDARK10 = '{dark-10}',
    M = 'M',
    L = 'L',
    Z = 'Z',
    animationObjStr = 'animationObj',
    configStr = 'config',
    POINTER = 'pointer',
    EVENTARGS = 'eventArgs',
    doc = window.document,
    hasTouch = doc.documentElement.ontouchstart !== UNDEF,
    ANIM_EFFECT = 'linear',
    getTouchEvent = function getTouchEvent(event) {
  return hasTouch && event.sourceEvent && event.sourceEvent.touches && event.sourceEvent.touches[0] || event;
},
    isString = function isString(s) {
  return typeof s === 'string';
},
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    getAttrFunction = function getAttrFunction() {
  var rotationStr = 'angle';

  return function (hash, val, animation) {
    var key,
        value,
        element = this,
        attr3D = this._Attr,
        cx = R.vml ? -1.5 : 0,
        // correction of -1.5 has to be added for VML.
    cy = R.vml ? -1.5 : 0,
        red;

    if (!attr3D) {
      attr3D = element._Attr = {};
    }

    // single key-value pair
    if (isString(hash) && defined(val)) {
      key = hash;
      hash = {};
      hash[key] = val;
    }

    // used as a getter: first argument is a string, second is undefined
    // And also if first argument is undefined it should return the all attrs object.
    if (isString(hash) || hash === UNDEF) {
      // if belongs from the list then handle here
      if (hash == rotationStr) {
        element = element._Attr[hash];
      } else {
        // else leve for the original attr
        element = element._attr(hash);
      }

      // setter
    } else {
      for (key in hash) {
        value = hash[key];
        // if belongs from the list then handle here
        if (key === rotationStr) {
          attr3D[key] = value;
          red = value * deg2rad;
          attr3D.tooltipPos[0] = attr3D.cx + attr3D.toolTipRadius * Math.cos(red);
          attr3D.tooltipPos[1] = attr3D.cy + attr3D.toolTipRadius * Math.sin(red);
          attr3D.prevValue = value;

          if (animation && animation.duration) {
            element.animate({
              transform: 'R' + value + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy
            }, animation.duration, ANIM_EFFECT);
          } else {
            element.attr({ transform: 'R' + value + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy });
          }
        } else {
          // else leave for the original attr
          element._attr(key, value);
        }
      }
    }
    return element;
  };
};
(0, _dependencyManager.addDep)({
  name: 'angularAnimation',
  type: 'animationRule',
  extension: _angularAnimation2['default']
});
/**
 * Creates dataset class for Angular Gauge
 */

var AngularGaugeDataset = function (_HlineargaugeDataset) {
  _inherits(AngularGaugeDataset, _HlineargaugeDataset);

  /**
   * Constructor function to initialise attributes of AngularGaugeDataset object
   */
  function AngularGaugeDataset() {
    _classCallCheck(this, AngularGaugeDataset);

    var _this = _possibleConstructorReturn(this, _HlineargaugeDataset.call(this));

    _this.components = {};
    _this.config.idMap = {};
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  AngularGaugeDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  AngularGaugeDataset.prototype.getName = function getName() {
    return 'angularGauge';
  };
  /**
   * Configure dataset component and parse default values
   * @param  {Object} pointerArrArg JSON for dataset configurations
   * @return {boolean} Indicates whether the configuration was successful or not
   */


  AngularGaugeDataset.prototype.configure = function configure(pointerArrArg) {
    if (!pointerArrArg) {
      return false;
    }
    this.trimData(pointerArrArg);
    this.config.pointerArr = pointerArrArg;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        jsonData = chart.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        pointer = jsonData.pointers || jsonData.dials,
        pointerArr = pointer.pointer || pointer.dial,
        data = dataSet.components.data || (dataSet.components.data = []),
        scale = dataSet.getFromEnv('scale'),
        colorM = dataSet.getFromEnv('color-manager'),
        datasetConfig = dataSet.config || (dataSet.config = {}),
        scaleAngle = (0, _lib.pluckNumber)(chartAttrs.gaugescaleangle, 180),
        startAngle = (0, _lib.pluckNumber)(chartAttrs.gaugestartangle),
        endAngle = (0, _lib.pluckNumber)(chartAttrs.gaugeendangle),
        startDefined = defined(startAngle),
        tempAngle,

    // arc on 360deg is not possable SVG limitation so reduce the scale
    circleHandler = _lib.hasSVG ? 0.001 : 0.01,
        endDefined = defined(endAngle),
        showGaugeBorder,
        pvColor,
        scaleOnResize,
        showValue,
        pointShowValue,
        valueY,
        dataLabelsStyle,
        fontBdrColor,
        i,
        config,
        ln;

    chartConfig.displayValueCount = 0;
    for (i = 0, ln = pointerArr.length; i < ln; i += 1) {
      data[i] = data[i] || (data[i] = {});
      config = data[i].config || (data[i].config = {});
      config.basewidth = pointerArr[i].basewidth;
      config.color = pointerArr[i].color;
      config.alpha = pointerArr[i].alpha;
      config.bgcolor = pointerArr[i].bgcolor;
      config.borderalpha = pointerArr[i].borderalpha;
      config.bordercolor = pointerArr[i].bordercolor;
      config.borderthickness = pointerArr[i].borderthickness;
      config.editmode = pointerArr[i].editmode;
      config.id = (0, _lib.pluck)(pointerArr[i].id, 'dial' + i);
      config.link = pointerArr[i].link;
      config.radius = pointerArr[i].radius;
      config.rearextension = pointerArr[i].rearextension;
      config.showvalue = pointerArr[i].showvalue;
      config.tooltext = pointerArr[i].tooltext;
      config.topwidth = pointerArr[i].topwidth;
      config.value = pointerArr[i].value;
      config.valuex = pointerArr[i].valuex;
      config.valuey = pointerArr[i].valuey;
      config.baseradius = pointerArr[i].baseradius;
      config.displayvalue = pointerArr[i].displayvalue;

      showValue = datasetConfig.showValue = (0, _lib.pluckNumber)(chartAttrs.showvalue, chartAttrs.showrealtimevalue, 0);
      pointShowValue = (0, _lib.pluckNumber)(config.showvalue, showValue);
      valueY = (0, _lib.pluckNumber)((0, _lib.getValidValue)(config.valuey));
      if (pointShowValue && !defined(valueY)) {
        chartConfig.displayValueCount += 1;
      }
    }
    /*
             *All angle should be in range of -360 to 360 of traditional methode
             *At the end convert them in computer graphics methode
             * relation among them is [scaleAngle = startAngle - endAngle;]
             */
    if (scaleAngle > 360 || scaleAngle < -360) {
      scaleAngle = scaleAngle > 0 ? 360 : -360;
    }
    if (endAngle > 360 || endAngle < -360) {
      endAngle = endAngle % 360;
    }
    if (startAngle > 360 || startAngle < -360) {
      startAngle = startAngle % 360;
    }
    // booth defined
    if (startDefined && endDefined) {
      // override the scale
      scaleAngle = startAngle - endAngle;
      // validate scale and EndAngle
      if (scaleAngle > 360 || scaleAngle < -360) {
        scaleAngle = scaleAngle % 360;
        endAngle = startAngle - scaleAngle;
      }
    } else if (startDefined) {
      // StartAngle Defined
      // derive endAngle
      endAngle = startAngle - scaleAngle;
      // if derived end angle cross the limit
      if (endAngle > 360 || endAngle < -360) {
        endAngle = endAngle % 360;
        startAngle += endAngle > 0 ? -360 : 360;
      }
    } else if (endDefined) {
      // endAngle Defined
      // derive StartAngle
      startAngle = endAngle + scaleAngle;
      // if derived start angle cross the limit
      if (startAngle > 360 || startAngle < -360) {
        startAngle = startAngle % 360;
        endAngle += startAngle > 0 ? -360 : 360;
      }
    } else {
      // booth will be derived
      if (scaleAngle === 360) {
        startAngle = 180;
        endAngle = -180;
      } else if (scaleAngle === -360) {
        startAngle = -180;
        endAngle = -180;
      } else {
        tempAngle = scaleAngle / 2;
        startAngle = 90 + tempAngle;
        endAngle = startAngle - scaleAngle;
      }
    }
    // Full 360 can't be drawn by arc[limitation]
    if (Math.abs(scaleAngle) === 360) {
      scaleAngle += scaleAngle > 0 ? -circleHandler : circleHandler;
      endAngle = startAngle - scaleAngle;
    }

    // convert all the angles into clockwise cordinate
    endAngle = 360 - endAngle;
    startAngle = 360 - startAngle;
    scaleAngle = -scaleAngle;

    // if start angle cross the limit
    if (startAngle > 360 || endAngle > 360) {
      startAngle -= 360;
      endAngle -= 360;
    }
    // convert into red
    datasetConfig.gaugeStartAngle = startAngle = startAngle * deg2rad;
    datasetConfig.gaugeEndAngle = endAngle = endAngle * deg2rad;
    datasetConfig.gaugeScaleAngle = scaleAngle = scaleAngle * deg2rad;
    datasetConfig.upperLimit = (0, _lib.pluckNumber)(chartAttrs.upperlimit);
    datasetConfig.lowerLimit = (0, _lib.pluckNumber)(chartAttrs.lowerlimit);

    // set axis configure
    scale.setAxisConfig({
      startAngle: startAngle,
      totalAngle: -scaleAngle
    });
    scaleOnResize = (0, _lib.pluckNumber)(chartAttrs.scaleonresize, 1);

    datasetConfig.origW = (0, _lib.pluckNumber)(chartAttrs.origw, scaleOnResize ? chart.config.origRenderWidth : chartConfig.width);
    datasetConfig.origH = (0, _lib.pluckNumber)(chartAttrs.origh, scaleOnResize ? chart.config.origRenderHeight : chartConfig.height);
    chartConfig.showtooltip = (0, _lib.pluckNumber)(chartAttrs.showtooltip, 1);
    // Whether to auto-scale itself with respect to previous size
    chartConfig.autoScale = (0, _lib.pluckNumber)(chartAttrs.autoscale, 1);
    datasetConfig.rearExtension = (0, _lib.pluckNumber)(pointer.rearextension, 0);
    datasetConfig.gaugeinnerradius = chartAttrs.gaugeinnerradius;
    // gaugeOuterRadius does not have any default value.
    datasetConfig.valueBelowPivot = (0, _lib.pluckNumber)(chartAttrs.valuebelowpivot, 0);
    datasetConfig.showShadow = (0, _lib.pluckNumber)(chartAttrs.showshadow, 1);
    showGaugeBorder = (0, _lib.pluckNumber)(chartAttrs.showgaugeborder, 1);
    datasetConfig.gaugeFillMix = (0, _lib.getFirstDefinedValue)(chartAttrs.colorrangefillmix, chartAttrs.gaugefillmix, chart.colorRangeFillMix, '{light-10},{light-70},{dark-10}');
    datasetConfig.gaugeFillRatio = (0, _lib.getFirstDefinedValue)(chartAttrs.colorrangefillratio, chartAttrs.gaugefillratio, chart.colorRangeFillRatio, chartAttrs.gaugefillratio);
    if (datasetConfig.gaugeFillRatio === UNDEF) {
      datasetConfig.gaugeFillRatio = ',6';
    } else if (datasetConfig.gaugeFillRatio !== _lib.BLANK) {
      // Append a comma before the ratio
      datasetConfig.gaugeFillRatio = _lib.COMMASTRING + datasetConfig.gaugeFillRatio;
    }
    datasetConfig.gaugeBorderColor = (0, _lib.pluck)(chartAttrs.gaugebordercolor, '{dark-20}');
    datasetConfig.gaugeBorderThickness = showGaugeBorder ? (0, _lib.pluckNumber)(chartAttrs.gaugeborderthickness, 1) : 0;
    datasetConfig.gaugeBorderAlpha = (0, _lib.pluckNumber)(chartAttrs.gaugeborderalpha, 100);

    // Gauge Border properties

    // Parse the color, alpha and ratio array for each color range arc.
    pvColor = colorM.parseColorMix((0, _lib.pluck)(chartAttrs.pivotfillcolor, chartAttrs.pivotcolor, chartAttrs.pivotbgcolor, colorM.getColor('pivotColor')), (0, _lib.pluck)(chartAttrs.pivotfillmix, '{light-10},{light-30},{dark-20}'));
    datasetConfig.pivotFillAlpha = colorM.parseAlphaList((0, _lib.pluck)(chartAttrs.pivotfillalpha, _lib.HUNDREDSTRING), pvColor.length);
    datasetConfig.pivotFillRatio = colorM.parseRatioList((0, _lib.pluck)(chartAttrs.pivotfillratio, _lib.ZEROSTRING), pvColor.length);
    datasetConfig.pivotFillColor = pvColor.join();
    datasetConfig.pivotFillAngle = (0, _lib.pluckNumber)(chartAttrs.pivotfillangle, 0);
    datasetConfig.isRadialGradient = (0, _lib.pluck)(chartAttrs.pivotfilltype, 'radial').toLowerCase() == 'radial';
    // Pivot border properties
    datasetConfig.showPivotBorder = (0, _lib.pluckNumber)(chartAttrs.showpivotborder, 0);
    datasetConfig.pivotBorderThickness = (0, _lib.pluckNumber)(chartAttrs.pivotborderthickness, 1);
    datasetConfig.pivotBorderColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.pivotbordercolor, colorM.getColor('pivotBorderColor')), datasetConfig.showPivotBorder == 1 ? (0, _lib.pluck)(chartAttrs.pivotborderalpha, _lib.HUNDREDSTRING) : _lib.ZEROSTRING);
    chartConfig.dataLabels = chartConfig.dataLabels || {};
    fontBdrColor = (0, _lib.getFirstValue)(chartAttrs.valuebordercolor, BLANKSTRING);
    fontBdrColor = fontBdrColor ? (0, _lib.convertColor)(fontBdrColor, (0, _lib.pluckNumber)(chartAttrs.valueborderalpha, chartAttrs.valuealpha, 100)) : BLANKSTRING;
    dataLabelsStyle = chartConfig.dataLabels.style = {
      fontFamily: (0, _lib.pluck)(chartAttrs.valuefont, chartConfig.style.inCanfontFamily),
      fontSize: (0, _lib.pluck)(chartAttrs.valuefontsize, parseInt(chartConfig.style.inCanfontSize, 10)) + PXSTRING,
      color: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.valuefontcolor, chartConfig.style.inCancolor), (0, _lib.pluckNumber)(chartAttrs.valuefontalpha, chartAttrs.valuealpha, 100)),
      fontWeight: (0, _lib.pluckNumber)(chartAttrs.valuefontbold) ? 'bold' : NORMALSTRING,
      fontStyle: (0, _lib.pluckNumber)(chartAttrs.valuefontitalic) ? 'italic' : NORMALSTRING,
      border: fontBdrColor || chartAttrs.valuebgcolor ? (0, _lib.pluckNumber)(chartAttrs.valueborderthickness, 1) + 'px solid' : UNDEF,
      borderColor: fontBdrColor,
      borderThickness: (0, _lib.pluckNumber)(chartAttrs.valueborderthickness, 1),
      borderPadding: (0, _lib.pluckNumber)(chartAttrs.valueborderpadding, 2),
      borderRadius: (0, _lib.pluckNumber)(chartAttrs.valueborderradius, 0),
      backgroundColor: chartAttrs.valuebgcolor ? (0, _lib.convertColor)(chartAttrs.valuebgcolor, (0, _lib.pluckNumber)(chartAttrs.valuebgalpha, chartAttrs.valuealpha, 100)) : BLANKSTRING,
      borderDash: (0, _lib.pluckNumber)(chartAttrs.valueborderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(chartAttrs.valueborderdashlen, 4), (0, _lib.pluckNumber)(chartAttrs.valueborderdashgap, 2)) : _lib.BLANK
    };
    (0, _lib.setLineHeight)(dataLabelsStyle);
  };

  /**
   * Trim extra previous data on update
   * @param {Object} pointers JSON input data
   */


  AngularGaugeDataset.prototype.trimData = function trimData(pointers) {
    var dataSet = this,
        prevPointers,
        currPointers;

    prevPointers = dataSet.components.data && dataSet.components.data.length;
    currPointers = pointers.dial && pointers.dial.length || 0;

    if (prevPointers > currPointers) {
      dataSet.removeData(prevPointers - currPointers);
    }
  };

  /**
   * Draws background graphics
   */


  AngularGaugeDataset.prototype._drawBackground = function _drawBackground() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        canvas = chart.getChildren('canvas')[0],
        dsConfig = dataSet.config,
        scale = dataSet.getFromEnv('scale'),
        colorM = dataSet.getFromEnv('color-manager'),
        scaleRange = scale.config.axisRange,
        colorRangeGetter = dataSet.getFromEnv('colorRange'),
        plotContainer = chart.getChildContainer('plotGroup'),
        dataLabelContainer = chart.getChildContainer('datalabelsGroup'),
        animationManager = dataSet.getFromEnv('animationManager'),
        gaugeOuterRadius = dsConfig.gaugeOuterRadius,
        gaugeInnerRadius = dsConfig.gaugeInnerRadius,
        gaugeFillRatio = dsConfig.gaugeFillRatio,
        gaugeBorderColor = dsConfig.gaugeBorderColor,
        gaugeBorderThickness = dsConfig.gaugeBorderThickness,
        gaugeBorderAlpha = dsConfig.gaugeBorderAlpha,
        gaugeFillMix = dsConfig.gaugeFillMix,
        x = dsConfig.gaugeOriginX,
        y = dsConfig.gaugeOriginY,
        startAngle = dsConfig.gaugeStartAngle,
        showShadow = dsConfig.showShadow,
        minValue = scaleRange.min,
        maxValue = scaleRange.max,
        colorRange = colorRangeGetter ? colorRangeGetter.getColorRangeArr(minValue, maxValue) : [],
        i = 0,
        ln = colorRange.length,
        colorObj,
        currentEndAngle,
        lastAngle = startAngle,
        nextAngle,
        crColor,
        crAlpha,
        crRatio,
        shadowAlpha,
        borderColor,
        borderAlpha,
        fcColorObj,
        bandGroupDummy = dataSet.getContainer('bandGroup'),
        bandGroup,
        pointGroupDummy = dataSet.getContainer('pointGroup'),
        pointGroup,
        pivotElem,
        pivotElemDummy,
        bandElemDummy,
        bandElem,
        count = 0,
        hideFn = function hideFn() {
      this.hide();
    };

    // create/reuse bandgroup element
    bandGroup = animationManager.setAnimation({
      el: bandGroupDummy || 'group',
      attr: {
        name: 'bandGroup'
      },
      container: plotContainer,
      component: dataSet,
      dom: 'group'
    });
    if (!bandGroupDummy) {
      bandGroup = dataSet.addContainer('bandGroup', bandGroup);
    }

    // create/reuse pointGroup element
    pointGroup = animationManager.setAnimation({
      el: pointGroupDummy || 'group',
      attr: {
        name: 'pointGroup',
        transform: 't' + x + _lib.COMMASTRING + y
      },
      container: dataLabelContainer,
      component: dataSet,
      dom: 'group'
    });
    if (!pointGroupDummy) {
      dataSet.addContainer('pointGroup', pointGroup);
    }

    // draw all color Bands
    for (; i < ln; i += 1) {
      colorObj = colorRange[i];

      currentEndAngle = scale.getAngle(Math.min(colorObj.maxvalue, maxValue));

      // Parse the color, alpha and ratio array for each color range arc.
      crColor = colorM.parseColorMix(colorObj.code, gaugeFillMix);
      crAlpha = colorM.parseAlphaList(colorObj.alpha, crColor.length);
      crRatio = colorM.parseRatioList(gaugeInnerRadius / gaugeOuterRadius * 100 + gaugeFillRatio, crColor.length);

      borderColor = colorObj.bordercolor;
      borderAlpha = (0, _lib.pluckNumber)(colorObj.borderAlpha, gaugeBorderAlpha);
      // Set border propeties
      // Which border color to use - between actual color and color mix specified?
      if (borderColor && borderColor.indexOf('{') == -1) {
        borderColor = (0, _lib.convertColor)(borderColor, borderAlpha);
      } else {
        borderColor = colorM.parseColorMix(colorObj.code, (0, _lib.pluck)(borderColor, gaugeBorderColor))[0];
      }
      borderColor = (0, _lib.convertColor)(borderColor, borderAlpha);
      // create the shadow element
      shadowAlpha = crAlpha.split(_lib.COMMASTRING);
      shadowAlpha = mathMax.apply(Math, shadowAlpha);
      shadowAlpha = showShadow ? mathMax(borderAlpha || 0, shadowAlpha) : 0;

      // If start angle > end angle then swap the two for intended
      // behavior.
      nextAngle = currentEndAngle;
      if (lastAngle > currentEndAngle) {
        lastAngle += currentEndAngle;
        currentEndAngle = lastAngle - currentEndAngle;
        lastAngle = lastAngle - currentEndAngle;
      }
      colorObj._startAngle = lastAngle;
      colorObj._endAngle = currentEndAngle;
      bandElemDummy = canvas.getGraphicalElement('bands') && canvas.getGraphicalElement('bands')[i];
      // Create/reuse bandElements
      bandElem = animationManager.setAnimation({
        el: bandElemDummy || 'ringpath',
        attr: {
          ringpath: [x, y, gaugeOuterRadius, gaugeInnerRadius, lastAngle, currentEndAngle],
          fill: (0, _lib.toRaphaelColor)({
            FCcolor: {
              cx: x,
              cy: y,
              r: gaugeOuterRadius,
              gradientUnits: 'userSpaceOnUse',
              color: crColor.join(),
              alpha: crAlpha,
              ratio: crRatio,
              radialGradient: true
            }
          }),
          'stroke-width': gaugeBorderThickness,
          stroke: borderColor
        },
        container: bandGroup,
        component: dataSet,
        label: 'plotBackground'
      });
      bandElem.shadow({
        apply: showShadow,
        opacity: shadowAlpha / 100
      });

      if (!bandElemDummy) {
        canvas.addGraphicalElement('bands', bandElem, true);
      }

      lastAngle = nextAngle;
      count += 1;
    }
    ln = canvas.getGraphicalElement('bands') && canvas.getGraphicalElement('bands').length;
    // Hide extra band elements
    for (i = count; i < ln; i++) {
      colorObj = colorRange[i] || dsConfig.oldColorArr[i];
      colorObj && animationManager.setAnimation({
        el: canvas.getGraphicalElement('bands')[i],
        attr: {
          ringpath: [x, y, gaugeOuterRadius, gaugeInnerRadius, colorObj._startAngle, colorObj._startAngle]
        },
        component: dataSet,
        callback: hideFn,
        label: 'plotBackground'
      });
    }

    // Store the old color array to be used for disappearing animation
    dsConfig.oldColorArr = colorRange;
    fcColorObj = dsConfig.isRadialGradient ? {
      color: dsConfig.pivotFillColor,
      alpha: dsConfig.pivotFillAlpha,
      ratio: dsConfig.pivotFillRatio,
      radialGradient: true,
      angle: dsConfig.pivotFillAngle,
      cx: 0.5,
      cy: 0.5,
      r: '50%'
    } : {
      color: dsConfig.pivotFillColor,
      alpha: dsConfig.pivotFillAlpha,
      ratio: dsConfig.pivotFillRatio,
      radialGradient: false,
      angle: dsConfig.pivotFillAngle
    };
    pivotElemDummy = dataSet.getGraphicalElement('pivot');
    // Now draw the pivot
    pivotElem = animationManager.setAnimation({
      el: pivotElemDummy || 'circle',
      attr: {
        cx: x,
        cy: y,
        r: dsConfig.pivotRadius,
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: fcColorObj
        }),
        'stroke-width': dsConfig.pivotBorderThickness,
        stroke: dsConfig.pivotBorderColor
      },
      container: dataLabelContainer,
      component: dataSet,
      label: 'pivot'
    });
    pivotElem.shadow({
      apply: showShadow
    });

    if (!pivotElemDummy) {
      pivotElem = dataSet.addGraphicalElement('pivot', pivotElem);
    }
  };

  /**
   * Alters the data of the dataset and stores the data to be removed in a different array
   * @param {number} numbers number of data to be removed
   */


  AngularGaugeDataset.prototype.removeData = function removeData(numbers) {
    var dataSet = this,
        i,
        animationManager = dataSet.getFromEnv('animationManager'),
        callBackFn = function callBackFn() {
      this.remove();
    },
        data = dataSet.components.data;

    for (i = 0; i < numbers; i++) {
      animationManager.setAnimation({
        el: data[i].graphics.pointersPath,
        attr: {
          opacity: 0
        },
        callback: callBackFn,
        component: dataSet
      });
      animationManager.setAnimation({
        el: data[i].graphics.pointersTpath,
        attr: {
          opacity: 0
        },
        callback: callBackFn,
        component: dataSet
      });
      animationManager.setAnimation({
        el: data[i].graphics.dataLabel,
        attr: {
          opacity: 0
        },
        callback: callBackFn,
        component: dataSet
      });
    }

    dataSet.removeDataArr || (dataSet.removeDataArr = []);
    dataSet.removeDataArr = dataSet.removeDataArr.concat(data.splice(0, numbers));
  };

  /**
   * Draw plot graphics
   * @param {boolean} animation determines whether to animate plot(dial) or not
   */


  AngularGaugeDataset.prototype.draw = function draw(animation) {
    this._drawBackground();
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        toolTipController = dataSet.getFromEnv('toolTipController'),
        idMap = dataSet.config.idMap,
        chartConfig = chart.config,
        jsonData = chart.getFromEnv('dataSource'),
        chartAttrs = jsonData.chart,
        data = dataSet.components.data,
        datasetConfig = dataSet.config,
        renderer = datasetConfig,
        NumberFormatter = dataSet.getFromEnv('number-formatter'),
        colorM = dataSet.getFromEnv('color-manager'),
        scale = dataSet.getFromEnv('scale'),
        animationManager = dataSet.getFromEnv('animationManager'),
        x = Number(datasetConfig.gaugeOriginX),
        y = Number(datasetConfig.gaugeOriginY),
        startAngle = datasetConfig.gaugeStartAngle,
        endAngle = datasetConfig.gaugeEndAngle,
        showShadow = datasetConfig.showShadow,
        showTooltip = chartConfig.showtooltip,
        // (options.tooltip.enabled !== false),
    scaleRange = scale.config.axisRange,
        minValue = scaleRange.min,
        maxValue = scaleRange.max,
        pGroup = dataSet.getContainer('pointGroup'),
        dataLabelsGroup = dataSet.getLinkedParent().getChildContainer('datalabelsGroup'),
        valueRange = maxValue - minValue,
        angleRange = endAngle - startAngle,
        angleValueFactor = valueRange / angleRange,
        editMode,
        showHoverEffect = (0, _lib.pluckNumber)(chartAttrs.showhovereffect),
        showValue = dataSet.showValue = (0, _lib.pluckNumber)(chartAttrs.showvalue, chartAttrs.showrealtimevalue, 0),
        i = 0,
        style = chartConfig.dataLabels.style,
        css = {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle
    },
        scaleFactor = chartConfig.scaleFactor,
        lineHeight = (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12),
        isBelow = datasetConfig.valueBelowPivot,
        labelCounter = 0,
        hasHoverSizeChange,
        hoverFill,
        hoverAttr,
        outAttr,
        point,
        radius,
        baseWidth,
        topWidth,
        baseRadius,
        rearExtension,
        baseWidthHF,
        topWidthHF,
        ln = data && data.length,
        rotation,
        graphic,
        prevData,
        stubEvent = {
      pageX: 0,
      pageY: 0
    },
        attrFN = getAttrFunction(startAngle, endAngle),
        chartPosition,
        getClickArcTangent = function getClickArcTangent(x, y, center, ref) {
      return mathATan2(y - center[1] - ref.top, x - center[0] - ref.left);
    },
        dialDragStart = function dialDragStart(e) {
      var point = data[this.pos],
          pointConfig = point.config || {},
          startX = e.data[0],
          startY = e.data[1];
      if (!pointConfig.editMode) {
        return;
      }
      // For update previous value is retaining due to closure
      x = Number(datasetConfig.gaugeOriginX);
      y = Number(datasetConfig.gaugeOriginY);
      chartPosition = (0, _lib.getPosition)(chart.getFromEnv('chart-container'));
      // Record the angle of point of drag start with respect
      // to starting angle.
      chartConfig.rotationStartAngle = getClickArcTangent(startX, startY, [x, y], chartPosition);
      pointConfig.dragStartY = pointConfig.value;
      prevData = chart._getDataJSON();
    },
        dialDragEnd = function dialDragEnd() {
      var point = data[this.pos],
          chartObj = chart.getFromEnv('chartInstance'),
          jsVars;

      if (!point.config.editMode) {
        return;
      }
      jsVars = chartObj && chartObj.jsVars;
      jsVars && (jsVars._rtLastUpdatedData = chart._getDataJSON());
      chart.fireChartInstanceEvent('RealTimeUpdateComplete', {
        data: '&value=' + point.updatedValStr,
        updateObject: { values: [point.updatedValStr] },
        prevData: prevData.values,
        source: 'editMode',
        url: null
      });

      try {
        window.FC_ChartUpdated && window.FC_ChartUpdated(chartObj.id);
      } catch (err) {
        setTimeout(function () {
          throw err;
        }, 1);
      }
    },
        dialDragHandler = function dialDragHandler(event) {
      var point = data[this.pos],
          touchEvent = hasTouch && getTouchEvent(event) || stubEvent,
          newAngle,
          angleDelta,
          angleDelta2,
          newVal,
          newVal2,
          values,
          startX = event.data[2],
          startY = event.data[3],
          i,
          len;

      if (!point.config.editMode) {
        return;
      }

      // set a flag to determine that drag is happened
      chartConfig.fromDrag = true;

      // For update previous value is retaining due to closure
      x = Number(datasetConfig.gaugeOriginX);
      y = Number(datasetConfig.gaugeOriginY);
      minValue = scaleRange.min;
      maxValue = scaleRange.max;
      startAngle = datasetConfig.gaugeStartAngle;
      endAngle = datasetConfig.gaugeEndAngle;
      valueRange = maxValue - minValue;
      angleRange = endAngle - startAngle;
      angleValueFactor = valueRange / angleRange;
      newAngle = getClickArcTangent(startX, startY, [x, y], chartPosition);

      angleDelta = chartConfig.rotationStartAngle - newAngle;
      angleDelta2 = angleDelta < 0 ? math2PI + angleDelta : angleDelta - math2PI;
      newVal = point.config.dragStartY - angleDelta * angleValueFactor;
      newVal2 = point.config.dragStartY - angleDelta2 * angleValueFactor;

      if ((newVal < minValue || newVal > maxValue) && newVal2 >= minValue && newVal2 <= maxValue) {
        newVal = newVal2;
      }

      if (newVal < minValue) {
        newVal = mathAbs(newVal2 - maxValue) < mathAbs(newVal - minValue) ? maxValue : minValue;
      } else if (newVal > maxValue) {
        newVal = mathAbs(newVal - maxValue) < mathAbs(newVal2 - minValue) ? maxValue : minValue;
      }

      point.config.updatedValStr = newVal + _lib.BLANK;
      point.config.updatedVal = newVal;
      values = [];
      i = 0;
      len = point.config.index;

      for (; i < len; i += 1) {
        values.push(_lib.BLANK);
      }

      values.push({ value: newVal,
        animation: {
          duration: 0,
          transposeAnimDuration: 0,
          initAnimDuration: 0
        } });

      if (point.config.y !== newVal && dataSet.updateData({ data: values })) {
        point.config.updatedValStr = values.join('|');
        point.config.dragStartX = x || event.pageX || touchEvent.pageX;
      }
    },
        link,
        eventArgs,
        rolloverProperties,
        pathComand,
        hoverRadius,
        baseHoverWidth,
        baseHoverWidthHF,
        topHoverWidth,
        topHoverWidthHF,
        rearHoverExtension,
        clickHandler,
        angleValue,
        pointConfig,
        itemValue,
        formatedValue,
        displayValue,
        pointShowValue,
        valueY,
        setToolText,
        bgColor,
        bgAlpha,
        dialFill,
        borderColor,
        borderalpha,
        dialBorderColor,
        borderThickness,
        showDialHoverEffect,
        borderHoverColor,
        borderHoverAlpha,
        borderHoverThickness,
        hasBorderHoverMix,
        bgHoverColor,
        bgHoverAlpha,
        hasHoberFillMix,
        compositPivotRadius,
        pivotRadius,
        valueX,
        toolText,
        displayValueArgs,
        lastY,
        labelY,
        labelX,
        pointersTpathString,
        pointersPathString,
        dataGraphics,
        cx = R.vml ? -1.5 : 0,
        // correction of -1.5 has to be added for VML.
    cy = R.vml ? -1.5 : 0,
        freshDraw;

    compositPivotRadius = pivotRadius = datasetConfig.pivotRadius;
    if (renderer.dataById === UNDEF) {
      renderer.dataById = {};
    }

    if (animation && animation.duration === 0) {
      chart.getFromEnv('animationManager').setAnimationState('dialDrag');
    }

    clickHandler = function clickHandler(data) {
      var ele = this;
      // Checking if click is fired from drag or not
      if (chartConfig.fromDrag) {
        chartConfig.fromDrag = false;
        return;
      }
      _lib.plotEventHandler.call(ele, chart, data);
    };

    // fix for null or no data
    // gauge will show the dial at min value
    if (!ln) {
      ln = 0;
    }

    if (showHoverEffect !== 0 && (showHoverEffect || chartAttrs.dialborderhovercolor || chartAttrs.dialborderhoveralpha || chartAttrs.dialborderhoveralpha === 0 || chartAttrs.dialborderhoverthickness || chartAttrs.dialborderhoverthickness === 0 || chartAttrs.dialbghovercolor || chartAttrs.plotfillhovercolor || chartAttrs.dialbghoveralpha || chartAttrs.plotfillhoveralpha || chartAttrs.dialbghoveralpha === 0)) {
      showHoverEffect = 1;
    }
    for (; i < ln; i += 1) {
      point = data[i];
      point.config = point.config || {};
      pointConfig = point.config;
      point.config.index = i;
      idMap[pointConfig.id] = {
        index: i,
        config: point.config
      };
      freshDraw = false;

      if (pointConfig.id !== UNDEF) {
        renderer.dataById[pointConfig.id] = {
          index: i,
          point: point
        };
      }
      dataGraphics = data[i].graphics || (data[i].graphics = {});
      itemValue = NumberFormatter.getCleanValue(pointConfig.value);
      // Set precision for handling decimal upto 10 place.
      itemValue = Number((0, _lib.toPrecision)(itemValue, 10));
      rearExtension = (0, _lib.pluckNumber)(pointConfig.rearextension, 0) * scaleFactor;
      compositPivotRadius = Math.max(compositPivotRadius, rearExtension * scaleFactor);
      formatedValue = NumberFormatter.dataLabels(itemValue);
      displayValue = (0, _lib.getValidValue)(pointConfig.displayvalue, formatedValue, BLANKSTRING);
      pointShowValue = (0, _lib.pluckNumber)(pointConfig.showvalue, showValue);
      valueY = (0, _lib.pluckNumber)((0, _lib.getValidValue)(pointConfig.valuey) * scaleFactor);
      valueX = (0, _lib.pluckNumber)((0, _lib.getValidValue)(pointConfig.valuex) * scaleFactor);
      pointConfig.itemValue = itemValue;
      pointConfig.formatedVal = formatedValue;

      setToolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(pointConfig.tooltext, point.hovertext)));
      if (setToolText) {
        setToolText = (0, _lib.parseTooltext)(setToolText, [1, 2], {
          formattedValue: formatedValue
        }, point, chartAttrs);
      } else {
        setToolText = displayValue;
      }
      bgColor = (0, _lib.pluck)(pointConfig.color, pointConfig.bgcolor, colorM.getColor('dialColor'));
      bgAlpha = (0, _lib.pluckNumber)(pointConfig.alpha, point.bgalpha, 100);
      dialFill = (0, _lib.toRaphaelColor)({
        FCcolor: {
          color: bgColor,
          alpha: bgAlpha,
          angle: 90
        }
      });
      borderColor = (0, _lib.pluck)(pointConfig.bordercolor, colorM.getColor('dialBorderColor'));
      borderalpha = (0, _lib.pluckNumber)(pointConfig.borderalpha, 100);
      dialBorderColor = (0, _lib.convertColor)(borderColor, borderalpha);
      borderThickness = (0, _lib.pluckNumber)(pointConfig.borderthickness, 1);
      radius = (0, _lib.pluckNumber)(pointConfig.radius) * scaleFactor;
      baseWidth = (0, _lib.pluckNumber)((0, _lib.pluckNumber)(pointConfig.basewidth * scaleFactor, pivotRadius * 1.6));
      topWidth = (0, _lib.pluckNumber)(pointConfig.topwidth, 0) * scaleFactor;
      baseRadius = (0, _lib.pluckNumber)(pointConfig.baseradius, 0);
      editMode = (0, _lib.pluckNumber)(pointConfig.editmode, chartAttrs.editmode, 0);
      link = (0, _lib.pluck)(pointConfig.link, BLANKSTRING);
      toolText = setToolText;
      pointConfig.toolText = toolText;
      displayValueArgs = (0, _lib.pluck)(displayValue, BLANKSTRING);
      displayValue = pointShowValue ? (0, _lib.pluck)(displayValue, _lib.BLANK) : BLANKSTRING;
      showDialHoverEffect = (0, _lib.pluckNumber)(point.showhovereffect, showHoverEffect);
      if (showDialHoverEffect !== 0 && (showDialHoverEffect || point.borderhovercolor || point.borderhoveralpha || point.borderhoveralpha === 0 || point.borderhoverthickness || point.borderhoverthickness === 0 || point.bghovercolor || point.bghoveralpha || point.bghoveralpha === 0)) {
        showDialHoverEffect = true;
        outAttr = {};
        hoverAttr = {};
        borderHoverColor = (0, _lib.pluck)(point.borderhovercolor, chartAttrs.dialborderhovercolor, FILLMIXDARK10);
        borderHoverAlpha = (0, _lib.pluckNumber)(point.borderhoveralpha, chartAttrs.dialborderhoveralpha, borderalpha);
        borderHoverThickness = (0, _lib.pluckNumber)(point.borderhoverthickness, chartAttrs.dialborderhoverthickness, borderThickness);

        if (borderHoverThickness) {
          outAttr.stroke = dialBorderColor;
          hasBorderHoverMix = /\{/.test(borderHoverColor);
          hoverAttr.stroke = (0, _lib.convertColor)(hasBorderHoverMix ? colorM.parseColorMix(borderColor, borderHoverColor)[0] : borderHoverColor, borderHoverAlpha);
        }
        if (borderHoverThickness !== borderThickness) {
          hoverAttr['stroke-width'] = borderHoverThickness;
          outAttr['stroke-width'] = borderThickness;
        }

        bgHoverColor = (0, _lib.pluck)(point.bghovercolor, chartAttrs.dialbghovercolor, chartAttrs.plotfillhovercolor, FILLMIXDARK10);
        bgHoverAlpha = (0, _lib.pluckNumber)(point.bghoveralpha, chartAttrs.dialbghoveralpha, chartAttrs.plotfillhoveralpha, bgAlpha);
        outAttr.fill = dialFill;
        hasHoberFillMix = /\{/.test(bgHoverColor);

        bgHoverColor = hasHoberFillMix ? colorM.parseColorMix(bgColor, bgHoverColor).join() : bgHoverColor;
        hoverFill = {
          FCcolor: {
            color: bgHoverColor,
            alpha: bgHoverAlpha,
            angle: 90
          }
        };
        hoverAttr.fill = (0, _lib.toRaphaelColor)(hoverFill);
      }
      // Parse data related attributed
      rolloverProperties = pointConfig.rolloverProperties = {
        enabled: showDialHoverEffect,
        hasHoverSizeChange: hasHoverSizeChange,
        hoverRadius: (0, _lib.pluckNumber)(hoverRadius * scaleFactor),
        baseHoverWidth: (0, _lib.pluckNumber)(baseHoverWidth * scaleFactor, pivotRadius * 1.6),
        topHoverWidth: (0, _lib.pluckNumber)(topHoverWidth * scaleFactor),
        rearHoverExtension: (0, _lib.pluckNumber)(rearHoverExtension * scaleFactor),
        hoverFill: hoverFill,
        hoverAttr: hoverAttr,
        outAttr: outAttr
      };
      radius = (0, _lib.pluckNumber)(radius, (Number(datasetConfig.gaugeOuterRadius) + Number(datasetConfig.gaugeInnerRadius)) / 2);
      baseWidthHF = baseWidth / 2;
      topWidthHF = topWidth / 2;

      // set the tooltip pos
      pointConfig.tooltipPos = [x, y];
      link = pointConfig.editMode ? UNDEF : pointConfig.link;
      pathComand = [M, radius, -topWidthHF, L, radius, topWidthHF, -rearExtension, baseWidthHF, -rearExtension, -baseWidthHF, Z];
      if (rolloverProperties.hasHoverSizeChange) {
        rolloverProperties.outAttr.path = pathComand;
        hoverRadius = (0, _lib.pluckNumber)(rolloverProperties.hoverRadius, radius);
        baseHoverWidth = rolloverProperties.baseHoverWidth;
        baseHoverWidthHF = baseHoverWidth / 2;
        topHoverWidth = rolloverProperties.topHoverWidth;
        topHoverWidthHF = topHoverWidth / 2;
        rearHoverExtension = rolloverProperties.rearHoverExtension;
        rolloverProperties.hoverAttr.path = [M, hoverRadius, -topHoverWidthHF, L, hoverRadius, topHoverWidthHF, -rearHoverExtension, baseHoverWidthHF, -rearHoverExtension, -baseHoverWidthHF, Z];
      }

      eventArgs = {
        link: pointConfig.link,
        value: itemValue,
        displayValue: displayValueArgs,
        toolText: toolText
      };
      if (itemValue >= minValue && itemValue <= maxValue) {
        angleValue = (itemValue - minValue) / valueRange * angleRange;
        rotation = (startAngle + angleValue) / deg2rad;
      }

      // graphics.pointers[i].remove()
      if (!dataGraphics.pointersTpath) {
        if (topWidth) {
          pointersPathString = pathComand;
          pointersTpathString = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        } else {
          // Render using trianglepath
          pointersPathString = ['M', 0, 0];
          pointersTpathString = [radius, topWidthHF, -rearExtension, baseWidthHF, -rearExtension, -baseWidthHF, 0, baseRadius, baseRadius];
        }
        dataGraphics.pointersPath = animationManager.setAnimation({
          el: 'path',
          attr: {
            path: pointersPathString,
            transform: 'R' + rotation + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy
          },
          container: pGroup,
          component: dataSet,
          label: 'dialPath'
        });
        dataGraphics.pointersTpath = animationManager.setAnimation({
          el: 'trianglepath',
          attr: {
            trianglepath: pointersTpathString,
            transform: 'R' + rotation + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy
          },
          container: pGroup,
          component: dataSet,
          label: 'dialPath'
        });

        freshDraw = true;
      } else {
        if (topWidth) {
          animationManager.setAnimation({
            el: dataGraphics.pointersPath,
            attr: {
              path: pathComand,
              transform: 'R' + rotation + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy
            },
            component: dataSet,
            label: 'dialPath'
          });
          dataGraphics.pointersTpath._attr({
            trianglepath: [0, 0, 0, 0, 0, 0, 0, 0, 0]
          });
        } else {
          // Render using trianglepath
          animationManager.setAnimation({
            el: dataGraphics.pointersTpath,
            attr: {
              trianglepath: [radius, topWidthHF, -rearExtension, baseWidthHF, -rearExtension, -baseWidthHF, 0, baseRadius, baseRadius],
              transform: 'R' + rotation + _lib.COMMASTRING + cx + _lib.COMMASTRING + cy
            },
            component: dataSet,
            dom: 'trianglepath'
          });
          dataGraphics.pointersPath._attr({
            path: 'M00'
          });
        }
      }
      // Render using path if topWidth present
      if (topWidth) {
        graphic = dataGraphics.pointersPath;
      } else {
        graphic = dataGraphics.pointersTpath;
      }
      if (!dataGraphics.pointersPath._attr) {
        dataGraphics.pointersPath._attr = dataGraphics.pointersPath.attr;
        dataGraphics.pointersPath.attr = attrFN;
      }
      if (!dataGraphics.pointersTpath._attr) {
        dataGraphics.pointersTpath._attr = dataGraphics.pointersTpath.attr;
        dataGraphics.pointersTpath.attr = attrFN;
      }

      graphic._attr({
        fill: dialFill,
        stroke: dialBorderColor,
        ishot: true,
        'stroke-width': borderThickness
      })
      // .hover(hoverRollOver, hoverRollOut)
      .data(EVENTARGS, eventArgs);
      // .data('rolloverProperties', rolloverProperties);

      if (baseWidth || topWidth || borderThickness) {
        graphic.shadow({ apply: showShadow });
      }

      graphic._Attr = {
        tooltipPos: pointConfig.tooltipPos,
        cx: x,
        cy: y,
        toolTipRadius: radius - rearExtension,
        color: pointConfig.color
      };
      if (freshDraw) {
        rotation = startAngle / deg2rad;
      }

      pointConfig.index = i;
      pointConfig.editMode = editMode;
      graphic.css({
        cursor: editMode || link ? POINTER : 'default',
        '_cursor': editMode ? 'hand' : 'default'
      }).attr({
        ishot: true
      });
      dataGraphics.pointersPath.pos = i;
      dataGraphics.pointersTpath.pos = i;
      if (freshDraw) {
        dataGraphics.pointersPath.on('dragstart', dialDragStart);
        dataGraphics.pointersPath.on('dragmove', dialDragHandler);
        dataGraphics.pointersPath.on('dragend', dialDragEnd);

        dataGraphics.pointersTpath.on('dragstart', dialDragStart);
        dataGraphics.pointersTpath.on('dragmove', dialDragHandler);
        dataGraphics.pointersTpath.on('dragend', dialDragEnd);

        dataGraphics.pointersPath.click(clickHandler);
        dataGraphics.pointersTpath.click(clickHandler);
      }

      pointConfig.y = itemValue;

      if (showTooltip && toolText !== _lib.BLANK) {
        toolTipController.enableToolTip(graphic, toolText);
        graphic.trackTooltip(true);
      } else {
        toolTipController.disableToolTip(graphic);
        graphic.trackTooltip(false);
      }
      // Draw widgets labels
      if (defined(displayValue) && displayValue !== _lib.BLANK) {
        lastY = y + (isBelow ? lineHeight / 2 + pivotRadius + 2 : -(lineHeight / 2) - pivotRadius - 2);
        labelY = valueY;
        labelX = (0, _lib.pluckNumber)(valueX, x);
        if (!defined(labelY)) {
          labelY = isBelow ? lastY + lineHeight * labelCounter : lastY - lineHeight * labelCounter;
        }
        dataGraphics.dataLabel = animationManager.setAnimation({
          el: dataGraphics.dataLabel || 'text',
          attr: {
            x: labelX,
            y: labelY,
            direction: chartConfig.textDirection,
            text: displayValue,
            title: point.originalText || _lib.BLANK,
            fill: style.color,
            'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash]
          },
          css: css,
          container: dataLabelsGroup,
          component: dataSet,
          dom: 'text'
        });
        dataGraphics.dataLabel.show();
        labelCounter += 1;
      } else {
        dataGraphics.dataLabel && dataGraphics.dataLabel.hide();
      }
    }
  };

  /**
   * Updates data with new JSON
   * @param {Object} updateObj [description]
   * @return {boolean} determines whether on update draw is called or not
   */


  AngularGaugeDataset.prototype.updateData = function updateData(updateObj) {
    var dataSet,
        chart,
        data,
        label,
        toolText,
        dataArr,
        i,
        j,
        id,
        updateById,
        updateObjLength,
        updateData,
        updateDataMap = {},
        value,
        animation;

    if (updateObj === this.config.lastUpdatedObj) {
      return false;
    }

    dataSet = this;
    chart = dataSet.getFromEnv('chart');
    data = dataSet.components.data;
    dataArr = dataSet.components.data;
    i = dataArr && dataArr.length || 0;

    updateObj = updateObj.data;
    updateObjLength = updateObj.length;
    // use the realtime animation value or the default animation value

    // Store the IDs and corresponding data in hashmap.
    for (j = 0; j < updateObjLength; j++) {
      id = updateObj[j].id;
      id && (updateDataMap[id] = updateObj[j]);
    }

    updateById = (0, _keys2['default'])(updateDataMap).length;
    if (i) {
      while (i--) {
        // dataObj = {};
        // pointObj = {};
        // config = data[i].config;

        id = data[i].id;
        updateData = UNDEF;
        // Check if update is done by ID of pointer or sequentially.
        updateData = updateById ? updateDataMap[id] : updateObj[i];
        if (!updateData) {
          continue;
        }
        animation = updateData.animation || chart.get(configStr, animationObjStr);
        value = updateData.value;
        toolText = updateData.tooltext;
        label = updateData.label;
        // showLabel = updateData.showlabel;
        data[i].config.value = (0, _lib.pluckNumber)(value, data[i].config.value, 0);
        data[i].config.tooltext = (0, _lib.pluck)(toolText, data[i].config.value);
        data[i].config.displayvalue = label;
      }

      this.config.lastUpdatedObj = updateObj;
      this.draw(animation);

      return true;
    }
  };

  return AngularGaugeDataset;
}(_hlineargauge2['default']);

exports['default'] = AngularGaugeDataset;

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dependencyManager = __webpack_require__(6);

var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.angularGauge': function initialDatasetAngularGauge() {
    var component = this,
        conf = component.config,
        R = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
        deg2rad = Math.PI / 180,
        cx = R.vml ? -1.5 : 0,
        // correction of -1.5 has to be added for VML.
    cy = R.vml ? -1.5 : 0,
        COMMASTRING = ',';
    return {
      'dialPath.appearing': function dialPathAppearing() {
        var attr,
            rotation,
            startAngle = conf.gaugeStartAngle;

        rotation = startAngle / deg2rad;
        attr = {
          transform: 'R' + rotation + COMMASTRING + cx + COMMASTRING + cy
        };

        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'initial'
        }, {
          initialAttr: attr,
          finalAttr: {
            opacity: 1
          },
          slot: 'middle'
        }];
      },
      'dialPath.updating': null,
      'text.appearing': function textAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'text.updating': null,
      'pivot.appearing': function pivotAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'pivot.updating': null,
      'plotBackground.appearing': function plotBackgroundAppearing() {
        fadeEffect[0].slot = 'initial';
        return fadeEffect;
      },
      'plotBackground.updating': null
    };
  }
};

/***/ }),

/***/ 775:
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

var _ajax = __webpack_require__(80);

var _ajax2 = _interopRequireDefault(_ajax);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var MS_MULTIPLIER = 1000;

var UNDEF = void 0,
    THRESHOLD_MS = 10,

/**
 * Function to initialize the the DataStreamer class
 * @param {Object} chart The chart object
 */
initializeDataStreamer = function initializeDataStreamer(chart) {
  chart.registerFactory('dataStreamer', function () {
    if (DataStreamer && chart.config.realtimeEnabled) {
      (0, _lib.componentFactory)(chart, DataStreamer, 'dataStreamer', 1);
      chart.getChildren('dataStreamer')[0].configure();
    }
  });
},
    dataStreamerExt = {};
/**
 * Class for DataStreamer
 */

var DataStreamer = function (_ComponentInterface) {
  _inherits(DataStreamer, _ComponentInterface);

  function DataStreamer() {
    _classCallCheck(this, DataStreamer);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  DataStreamer.prototype.getType = function getType() {
    return 'dataStreamer';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  DataStreamer.prototype.getName = function getName() {
    return 'dataStreamer';
  };
  /**
   * This function is to compact the routine of clearing and re-applying a timeout
   *
   * @example
   * to = resetTimeout(theFunction, 500, to);
   *
   * @param {Function} fn funstion to executes on a timeout
   * @param {number} ms timeout in mili second
   * @param {number} id timeout ID
   * @return {number} timeout ID
   */


  DataStreamer.resetTimeout = function resetTimeout(fn, ms, id) {
    clearTimeout(id);
    return setTimeout(fn, ms);
  };

  /**
   * Function to configure the dataStreamer class instance
   * @param {Object} chartObj The chart instance
   */


  DataStreamer.prototype.configure = function configure() {
    var dataStreamer = this,
        config = dataStreamer.config,
        refreshMs,
        updateMs,
        chartObj,
        chart = dataStreamer.getLinkedParent(),
        realTimeConfig,
        chartAttr = chart.getFromEnv('dataSource') && chart.getFromEnv('dataSource').chart;
    chartObj = chart.getFromEnv('chartInstance');
    realTimeConfig = chart.config.realTimeConfig;
    config.clearMs = realTimeConfig.clearInterval * MS_MULTIPLIER;
    config.updateMs = updateMs = realTimeConfig.updateInterval * MS_MULTIPLIER;
    config.refreshMs = refreshMs = realTimeConfig.refreshInterval * MS_MULTIPLIER;

    dataStreamer.addEvents();

    if (refreshMs < updateMs) {
      config.refreshMs = updateMs;
    }
    config.dataStamp = chartAttr.datastamp;
    dataStreamer.config.chartObj = chartObj;
    chartObj.jsVars && (chartObj.jsVars._rtLastUpdatedData = null); // remove data cache
    // clear all timeouts
    config._toRealtimeUpdate && (config._toRealtimeUpdate = clearTimeout(config._toRealtimeUpdate));
    config._toRealtimeDraw && (config._toRealtimeDraw = clearTimeout(config._toRealtimeDraw));
    config._toClearChart && (config._toClearChart = clearTimeout(config._toClearChart));
    config._rtAjaxLatencyStart = null; // clear latency claculations
    config._rtAjaxLatency = null;
  };

  /**
   * Function to dispose the dataStreamer object
   */


  DataStreamer.prototype._dispose = function _dispose() {
    var dataStreamer = this,
        config = dataStreamer.config;

    config._toRealtimeUpdate && (config._toRealtimeUpdate = clearTimeout(config._toRealtimeUpdate));
    config._toRealtimeDraw && (config._toRealtimeDraw = clearTimeout(config._toRealtimeDraw));
    config._toClearChart && (config._toClearChart = clearTimeout(config._toClearChart));
    _ComponentInterface.prototype._dispose.call(this);
  };

  /**
   * Function which manages the entire real time ajax calls and feeding data to chart
   */


  DataStreamer.prototype.processRealtimeStateChange = function processRealtimeStateChange() {
    var dataStreamer = this,
        config = dataStreamer.config,
        chartObj = dataStreamer.config.chartObj,
        state = chartObj.__state,
        chart = dataStreamer.getLinkedParent(),
        chartConfig = chart.config,
        realtimeEnabled = chartConfig.realtimeEnabled,
        dataStamp = config.dataStamp,
        firstAjaxReq,
        updateMs = config.updateMs,
        clearMs = config.clearMs,
        refreshMs = config.refreshMs,
        dataUrl = chartConfig.realTimeConfig.dataStreamURL,
        ajaxObj,
        _clearChart,
        requestData;

    // In case data was set during construction, both the state-change capture events can happen to be fired before
    // even them being registered. Hence, a special check is made here.
    if (state.dataSetDuringConstruction && !config.rtStateChanged && config.rtPreInit === UNDEF) {
      if (chartObj.dataReady()) {
        config.rtStateChanged = true;
        config.rtPreInit = true;
      } else {
        config.rtPreInit = false;
      }
    }

    // If the data has not changed then the realtime initialization should not be repeated.
    if (!config.rtStateChanged) {
      return;
    }
    // reset the state changed flag to indicate that drawcomplete will re-work upon next state change.
    config.rtStateChanged = false;

    // Initialize the realtime framework.

    // In case process happens before load
    if (!chart) {
      return;
    }
    ajaxObj = config._rtAjaxObj;

    _clearChart = function clearChart() {
      chart._clearChart && chart._clearChart();
      if (clearMs) {
        config._toClearChart = setTimeout(_clearChart, clearMs);
      }
    };

    requestData = function requestData() {
      var url = dataUrl;
      // append anti-cache querystring to url (a random number)
      url += (dataUrl.indexOf('?') === -1 ? '?num=' : '&num=') + Math.random();
      // append data stamp to the url
      dataStamp && (url += '&dataStamp=' + dataStamp);
      config.url = url;
      // If xhr object is open, then abort it. Probably because previous request did not return on time.
      ajaxObj.open && ajaxObj.abort();
      ajaxObj.get(url); // fetch the URL.
      config._rtAjaxLatencyStart = new Date();
    };

    if (updateMs <= 0) {
      config._toRealtimeUpdate = clearTimeout(config._toRealtimeUpdate);
      ajaxObj && ajaxObj.abort();
    } else if (updateMs < THRESHOLD_MS) {
      // validate whether refreshinterval is less than threshold.
      updateMs = THRESHOLD_MS;
    }

    config._toClearChart = clearTimeout(config._toClearChart);
    if (clearMs > 0) {
      if (clearMs < THRESHOLD_MS) {
        clearMs = THRESHOLD_MS;
      }
      config._toClearChart = setTimeout(_clearChart, clearMs);
    }

    config._rtStaticRefreshMS = updateMs;

    if (realtimeEnabled) {
      if (config._rtPaused === UNDEF) {
        config._rtPaused = false;
      }
      config._rtDataUrl = dataUrl;
      config.lastSetValues = null;
      // eslint-disable-next-line new-cap
      ajaxObj = config._rtAjaxObj || (config._rtAjaxObj = new _ajax2['default']());

      ajaxObj.onSuccess = function () {
        var responseText = config.responseText = arguments[0],
            feedData = chart.feedData,
            updateObj = chart._linearDataParser(responseText);

        if (chartObj.disposed) {
          return;
        }

        // Update latency timer
        config._rtAjaxLatencyStart && (config._rtAjaxLatency = new Date() - config._rtAjaxLatencyStart || 0);

        if (chartObj.isActive() && feedData && realtimeEnabled && dataUrl) {
          dataStamp = updateObj.dataStamp ? updateObj.dataStamp : null;

          // try {
          //
          //   win.FC_ChartUpdated && win.FC_ChartUpdated(event.sender.id);
          //
          // } catch (err) {
          //   setTimeout(function () {
          //     throw err;
          //   }, 1);
          // }
          chart.realTimeUpdate(updateObj);
          if (firstAjaxReq) {
            config._toRealtimeDraw = DataStreamer.resetTimeout(dataStreamer._rtDraw.bind(dataStreamer), refreshMs - (new Date() - firstAjaxReq), config._toRealtimeDraw);
            firstAjaxReq = 0;
          }
          if (!config._rtPaused) {
            if (config._rtAjaxLatency >= updateMs) {
              config._rtAjaxLatency = updateMs - 1;
            }
            // re-issue realtime update.
            config._toRealtimeUpdate = setTimeout(requestData, updateMs - config._rtAjaxLatency);
          }
        } else {
          config._toRealtimeUpdate = clearTimeout(config._toRealtimeUpdate);
        }
      };

      ajaxObj.onError = function () {
        var resp = arguments[0],
            wrapper = arguments[1],
            url = arguments[3];
        // Update latency timer
        config._rtAjaxLatencyStart && (config._rtAjaxLatency = new Date() - config._rtAjaxLatencyStart);

        /**
         * This event is raised where there is an error in performing a real-time chart data update using
         * `dataStreamUrl` attribute.
         *
         * @event FusionCharts#realTimeUpdateError
         * @group chart-realtime
         *
         * @param {number} source - Nature of data load request. Presently its value is 'XmlHttprequest'.
         * @param {string} url - URL of the data source.
         * @param {object} xmlHttpReqestObject - The object which has fetched data.
         * @param {string} httpStatus - A number which denotes the HTTP status number when the error was raised.
         * For example, the status will be ``404`` for URL not found.
         */
        chart.fireChartInstanceEvent('realTimeUpdateError', {
          source: 'XmlHttpRequest',
          url: url,
          xmlHttpRequestObject: wrapper.xhr,
          error: resp,
          httpStatus: wrapper.xhr && wrapper.xhr.status ? wrapper.xhr.status : -1,
          networkLatency: config._rtAjaxLatency
        });

        // Upon error, based on whether chart is alive and kicking, re-request the data or abandon realtime
        // calls.
        config._toRealtimeUpdate = chartObj.isActive() ? setTimeout(requestData, updateMs) : clearTimeout(config._toRealtimeUpdate);
      };

      // This is the first (initial) realtime update request to be sent.
      if (!config._rtPaused) {
        config._toRealtimeUpdate = DataStreamer.resetTimeout(requestData, updateMs, config._toRealtimeUpdate);
        firstAjaxReq = new Date();
      }
    }
  };

  /**
   * Function to trigger update the visuals of the chart
   */


  DataStreamer.prototype._rtDraw = function _rtDraw() {
    var dataStreamer = this,
        config = dataStreamer.config,
        redrawLatency,
        refreshMs = config.refreshMs,
        chart = dataStreamer.getLinkedParent(),
        eventArgs = {
      data: config.responseText,
      source: 'XmlHttpRequest',
      url: config.url,
      networkLatency: config._rtAjaxLatency
    };

    redrawLatency = dataStreamer.getFromEnv('realtimeDrawingLatency') || 0;
    chart.realTimeDraw(eventArgs);
    if (!config._rtPaused) {
      if (redrawLatency >= refreshMs) {
        redrawLatency = redrawLatency - 1;
      }
      config._toRealtimeDraw = setTimeout(dataStreamer._rtDraw.bind(this), refreshMs - redrawLatency);
    }
  };

  /**
   * Function to stop the realTime update
   */


  DataStreamer.prototype._stopUpdate = function _stopUpdate() {
    var dataStreamer = this,
        config = dataStreamer.config;
    clearTimeout(config._toRealtimeUpdate);
    clearTimeout(config._toRealtimeDraw);
    clearTimeout(config._toClearChart);
    config._rtAjaxObj && config._rtAjaxObj.abort();
    config._rtPaused = true;
  };

  /**
   * Function to restart the realTime update
   */


  DataStreamer.prototype._restartUpdate = function _restartUpdate() {
    var dataStreamer = this,
        config = dataStreamer.config;

    if (config._rtDataUrl && config._rtPaused) {
      config._rtPaused = false;
      config.rtStateChanged = true;
      dataStreamer.processRealtimeStateChange();
    }
  };

  /**
   * Function to add event listners
   */


  DataStreamer.prototype.addEvents = function addEvents() {
    var dataStreamer = this,
        chart = dataStreamer.getLinkedParent(),
        config = dataStreamer.config;
    if (!config.eventsAdded) {
      dataStreamer.addExtEventListener('renderComplete', function () {
        if (config) {
          config.rtPreInit === UNDEF && (config.rtPreInit = false);
          config._rtPaused && delete config._rtPaused;
          if (!config.rtStateChanged) {
            config.rtStateChanged = true;
            // If the event happens to happen while rendering is inprogress, we need to force process.
            dataStreamer.processRealtimeStateChange.apply(dataStreamer, arguments);
          }
        }
      }, chart.getFromEnv('chartInstance'));

      dataStreamer.addExtEventListener('dataUpdated', function () {
        if (config) {
          config.rtPreInit === UNDEF && (config.rtPreInit = false);
          config._rtPaused && delete config._rtPaused;
          if (!config.rtStateChanged) {
            config.rtStateChanged = true;
            // If the event happens to happen while rendering is inprogress, we need to force process.
            dataStreamer.processRealtimeStateChange.apply(dataStreamer, arguments);
          }
        }
      }, chart.getFromEnv('chartInstance'));

      dataStreamer.addExtEventListener('drawComplete', function () {
        dataStreamer.processRealtimeStateChange();
      }, chart.getFromEnv('chartInstance'));
    }
    config.eventsAdded = true;
  };

  return DataStreamer;
}(_componentInterface2['default']);

/**
 * Wrapper method to provide FusionCHarts to dataStreamer
 *
 * @param {any} FusionCharts The FusionCharts class
 */


function dataStreamer(FusionCharts) {
  // Adding event listner for realTime charts
  FusionCharts.addEventListener('instantiated', function (event) {
    var component = event.sender;

    if (component.getType() === 'chartAPI') {
      initializeDataStreamer(component);
    }
  });
}

dataStreamerExt = {
  extension: dataStreamer,
  name: 'DataStreamer',
  type: 'extension',
  requiresFusionCharts: true
};

exports['default'] = dataStreamerExt;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var dataObj = chart.getFromEnv('dataSource'),
      value = dataObj.value,
      target = dataObj.target,
      DSClass,
      dataOnlyArr = [],
      datasetJSON = {};

  dataOnlyArr.push({
    value: value,
    target: target
  });
  datasetJSON.data = dataOnlyArr;

  DSClass = chart.getDSdef();
  (0, _lib.datasetFactory)(chart, DSClass, 'dataset', 1, [datasetJSON]);
};

var _lib = __webpack_require__(5);

/***/ }),

/***/ 92:
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

var _fusioncharts = __webpack_require__(348);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _gaugeAxis = __webpack_require__(732);

var _gaugeAxis2 = _interopRequireDefault(_gaugeAxis);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var LinearGauge = function (_Gauge) {
  _inherits(LinearGauge, _Gauge);

  /**
   * constructor fn
   */
  function LinearGauge() {
    _classCallCheck(this, LinearGauge);

    var _this = _possibleConstructorReturn(this, _Gauge.call(this));

    _this.registerFactory('axis', _gaugeAxis2['default']);
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static\
   * @return {string} The name of the chart extension
   */


  LinearGauge.getName = function getName() {
    return 'AxisGaugeBase';
  };
  /**
   * Function to parse chart specific configurations
   */


  LinearGauge.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Gauge.prototype.__setDefaultConfig.call(this);
  };

  LinearGauge.prototype._spaceManager = function _spaceManager() {
    var spaceForActionBar,
        actionBarSpace,
        iapi = this,
        config = iapi.config,
        dataset = iapi.getChildren('dataset')[0],
        scale = iapi.getChildren('scale')[0],
        is3D = iapi.config.is3D,
        canvas = iapi.getChildren('canvas')[0],
        chartAttrs = iapi.getFromEnv('dataSource').chart,
        showBorder = (0, _lib.pluckNumber)(chartAttrs.showborder, is3D ? 0 : 1),
        isHorizontal = iapi.isHorizontal,
        minChartWidth = config.minChartWidth,
        minChartHeight = config.minChartHeight,
        chartBorderWidth = config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0,
        chartBorderVertical,
        chartBorderHorizontal;

    if (config.canvasWidth - 2 * chartBorderWidth < minChartWidth) {
      chartBorderVertical = (config.canvasWidth - minChartWidth) / 2;
    }

    if (config.canvasHeight - 2 * chartBorderWidth < minChartHeight) {
      chartBorderHorizontal = (config.canvasHeight - minChartHeight) / 2;
    }

    iapi._allocateSpace({
      top: chartBorderHorizontal || chartBorderWidth,
      bottom: chartBorderHorizontal || chartBorderWidth,
      left: chartBorderVertical || chartBorderWidth,
      right: chartBorderVertical || chartBorderWidth
    });

    spaceForActionBar = config.availableHeight * 0.225;
    actionBarSpace = iapi._manageActionBarSpace && iapi._manageActionBarSpace(spaceForActionBar) || {};
    iapi._allocateSpace(actionBarSpace);

    if (isHorizontal) {
      iapi._allocateSpace(scale.placeAxis(config.availableHeight));
    } else {
      iapi._allocateSpace(scale.placeAxis(config.availableWidth));
    }

    // iapi._allocateSpace(iapi._manageCaptionSpacing(config.availableHeight * 0.4));
    iapi._manageChartMenuBar(config.availableHeight * 0.4);

    dataset._manageSpace && iapi._allocateSpace(dataset._manageSpace(config.availableHeight));

    scale.setAxisConfig({
      drawPlotlines: iapi.drawPlotlines,
      drawPlotBands: iapi.drawPlotBands
    });
    canvas.setDimension({
      top: config.canvasTop,
      left: config.canvasLeft,
      width: config.canvasWidth,
      height: config.canvasHeight
    });
  };

  return LinearGauge;
}(_fusioncharts2['default']);

exports['default'] = LinearGauge;

/***/ })

},[726])["default"];
});
//# sourceMappingURL=fusioncharts.widgets.js.map