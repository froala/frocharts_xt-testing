
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
return webpackJsonpFusionCharts([1],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var canvas = void 0;
  (0, _lib.componentFactory)(chart, _canvas3d2['default'], 'canvas', chart.config.showVolumeChart ? 2 : 1);
  canvas = chart.getChildren('canvas');
  if (canvas) {
    for (var i = 0, len = canvas.length; i < len; i++) {
      canvas[i].configure();
      (0, _lib.componentFactory)(canvas[i], _axisRefComponent2['default'], 'axisRefVisualCartesian');
    }
  }
};

var _canvas3d = __webpack_require__(635);

var _canvas3d2 = _interopRequireDefault(_canvas3d);

var _axisRefComponent = __webpack_require__(209);

var _axisRefComponent2 = _interopRequireDefault(_axisRefComponent);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 136:
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

var _dependencyManager = __webpack_require__(6);

var _column3dManagerAnimation = __webpack_require__(638);

var _column3dManagerAnimation2 = _interopRequireDefault(_column3dManagerAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


(0, _dependencyManager.addDep)({
  name: 'column3dManagerAnimation',
  type: 'animationRule',
  extension: _column3dManagerAnimation2['default']
});
/**
 * ColumnMultiSeriesgroup basically manages all the position of multiseries columns side by side.
 * suppose multiseries column chart contains 2 dataset now what will be the column width and
 * position to accomodate all the columns. This manager conveys the column width and position
 * for every column plots to its children
 */

var Column3dGroup = function (_ComponentInterface) {
  _inherits(Column3dGroup, _ComponentInterface);

  /**
   * Sets the type of the component
   * @return {string} type
   */
  /**
   * constructor function this class
   */
  function Column3dGroup() {
    _classCallCheck(this, Column3dGroup);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.setState('visible', true);
    return _this;
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */


  Column3dGroup.prototype.getType = function getType() {
    return 'group';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  Column3dGroup.prototype.getName = function getName() {
    return 'column3d';
  };
  /**
   * function to calculate maximum canvas padding is required by the children of this manager
   * @return {Object} contains dimension required
   */


  Column3dGroup.prototype.getCanvasPadding = function getCanvasPadding() {
    var manager = this,
        dim,
        key,
        returnDimension = {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    };

    manager._mapChildren(function (child) {
      dim = child.getCanvasPadding && child.getCanvasPadding() || {};
      for (key in dim) {
        if (dim.hasOwnProperty(key)) {
          returnDimension[key] = Math.max(dim[key], returnDimension[key]);
        }
      }
    });
    return returnDimension;
  };
  /**
   * Create child containers
   */


  Column3dGroup.prototype.createContainer = function createContainer() {
    var manager = this,
        animationManager = manager.getFromEnv('animationManager'),
        key = void 0,
        parent = manager.getLinkedParent(),
        pContainer = void 0,
        parentChildContainers = parent.getChildContainer();

    for (key in parentChildContainers) {
      pContainer = parentChildContainers[key];

      !manager.getChildContainer(key) && manager.addChildContainer(key, animationManager.setAnimation({
        el: 'group',
        attr: {
          name: 'manager' + key
        },
        container: pContainer,
        component: manager,
        label: 'group'
      }));
    }
  };
  /**
   * Draws container for 3d plots
   */


  Column3dGroup.prototype.draw3DContainer = function draw3DContainer() {
    var manager = this,
        animationManager = manager.getFromEnv('animationManager'),
        container = manager.getChildContainer('plotGroup3d'),
        xAxis = manager.getFromEnv('xAxis'),
        ii = xAxis.getTicksLen(),
        i,
        plotNegativeGroup = container && container.negative,
        plotPositiveGroup = container && container.positive,
        parentContainer = this.getLinkedParent().getChildContainer().columnVcanvasGroup;

    // Create plotGroup3d group
    !manager.getChildContainer('plotGroup3d') && manager.addChildContainer('plotGroup3d', animationManager.setAnimation({
      el: 'group',
      attr: {
        name: '3d-plots'
      },
      container: parentContainer,
      component: manager,
      label: 'group'
    }));
    container = manager.getChildContainer('plotGroup3d');
    manager.addToEnv('plotGroup3d', container);

    // Create plotNegativeGroup
    plotNegativeGroup = container.negative = animationManager.setAnimation({
      el: plotNegativeGroup || 'group',
      attr: {
        name: 'negative-values'
      },
      container: container,
      component: manager,
      label: 'group'
    });

    // Create plotPositivegroup
    plotPositiveGroup = container.positive = animationManager.setAnimation({
      el: plotPositiveGroup || 'group',
      attr: {
        name: 'positive-values'
      },
      container: container,
      component: manager,
      label: 'group'
    });

    // Create zeroPlane group
    container.zeroPlane = animationManager.setAnimation({
      el: container.zeroPlane || 'group',
      attr: {
        name: 'zero-plane'
      },
      container: container,
      component: manager,
      label: 'group'
    }).insertBefore(container.positive);
    // Create Negative group array for data plots having Negative value, if not present.
    if (!(container.negativeGroupArray = container.negativeGroupArray = plotNegativeGroup.data('categoryplots'))) {
      plotNegativeGroup.data('categoryplots', new Array(ii));
      container.negativeGroupArray = plotNegativeGroup.data('categoryplots');
    }

    // Create Positive group array for data plots having Positive value, if not present.
    if (!(container.positiveGroupAarray = container.positiveGroupAarray = plotPositiveGroup.data('categoryplots'))) {
      plotPositiveGroup.data('categoryplots', new Array(ii));
      container.positiveGroupAarray = plotPositiveGroup.data('categoryplots');
    }

    for (i = 0; i < ii; i++) {
      /*
      * Create seperate group for each data plot having Negative value, if not present.
      * Store the group in Negative group array
      */
      container.negativeGroupArray[i] = animationManager.setAnimation({
        el: container.negativeGroupArray[i] || 'group',
        attr: {
          name: 'negative-group-' + i
        },
        container: plotNegativeGroup,
        component: manager,
        label: 'group'
      });

      /*
      * Create seperate group for each data plot having Positive value, if not present.
      * Store the group in Positive group array
      */
      container.positiveGroupAarray[i] = animationManager.setAnimation({
        el: container.positiveGroupAarray[i] || 'group',
        attr: {
          name: 'positive-group-' + i
        },
        container: plotPositiveGroup,
        component: manager,
        label: 'group'
      });
    }
  };
  /**
   * Draws zero plane
   */


  Column3dGroup.prototype.drawZeroPlane = function drawZeroPlane() {
    var manager = this,
        chart = manager.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),
        isBar = chart.isBar,
        chartConfig = chart.config,
        use3DLighting = chartConfig.use3dlighting,
        container = manager.getChildContainer('plotGroup3d'),
        yAxis = manager.getFromEnv('yAxis'),
        yAxisMaxmin = yAxis.getLimit(),
        yMax = yAxisMaxmin.max,
        yMin = yAxisMaxmin.min,
        zeroPlane = manager.getGraphicalElement('zeroplane'),
        zeroplaneAttr = {},
        xDepth = chartConfig.xDepth,
        yDepth = chartConfig.yDepth,
        yBasePos = yAxis.getPixel(yAxis.getAxisBase()),
        MINWIDTH = 1,
        data,
        attr,
        zeroPlaneGroup;

    if (yMin < 0 && yMax >= 0) {
      !manager.graphics && (manager.graphics = {});
      zeroPlaneGroup = container.zeroPlane;
      zeroplaneAttr.fill = chartConfig.zeroPlaneColor;
      zeroplaneAttr.noGradient = !use3DLighting;
      zeroplaneAttr.stroke = chartConfig.zeroPlaneBorderColor || 'none';
      zeroplaneAttr['stroke-width'] = chartConfig.zeroPlaneShowBorder ? 1 : 0;
      zeroplaneAttr.x = isBar ? yBasePos - xDepth : chartConfig.canvasLeft - xDepth;
      zeroplaneAttr.y = isBar ? chartConfig.canvasTop + yDepth : yBasePos + yDepth;
      zeroplaneAttr.width = isBar ? MINWIDTH : chartConfig.canvasWidth;
      zeroplaneAttr.height = isBar ? chartConfig.canvasHeight : MINWIDTH;
      zeroplaneAttr.xDepth = xDepth;
      zeroplaneAttr.yDepth = yDepth;

      // If zeroPlane is present, show it.
      if (zeroPlane) {
        zeroPlane.show();
        zeroPlane._.cubetop();
        zeroPlane._.cubeside();
      }
      data = {
        el: zeroPlane || 'cubepath',
        attr: zeroplaneAttr,
        container: zeroPlaneGroup,
        component: manager,
        label: 'zeroPlane'
      };
    } else {
      if (zeroPlane) {
        if (isBar) {
          attr = {
            x: yBasePos - yDepth
          };
        } else {
          attr = {
            y: yBasePos + yDepth
          };
        }
        data = {
          el: zeroPlane,
          attr: attr,
          component: manager,
          callback: function callback() {
            zeroPlane.hide();
            zeroPlane._.cubetop.hide();
            zeroPlane._.cubeside.hide();
          },
          container: container,
          label: 'zeroPlane'
        };
      }
    }

    data && manager.addGraphicalElement('zeroplane', animationManager.setAnimation(data));
  };
  /**
   * function call sync draw of its children
   */


  Column3dGroup.prototype.draw = function draw() {
    this.createContainer();
    this.draw3DContainer();
    this.drawZeroPlane();
  };
  /**
   * function to accomodate the changes of its child and notify its parent for further action if its needed
   * @param  {Object} updateInfo is an object with the informations about the changes in its child
   */


  Column3dGroup.prototype.childChanged = function childChanged() {
    var updateInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var manager = this,
        config = manager.config,
        parent = manager.getLinkedParent(),
        range = void 0,
        count = 0,
        prevVisiblity = manager.getState('visible'),
        changeInfo = {},
        informParent = void 0;
    // get the number of visible children
    manager._mapChildren(function (child) {
      if (child.getState('visible')) {
        count++;
      }
    });
    // set the manager visiblity according to number of children visible
    manager.setState('visible', !!count);
    // if the visiblity state changed then parent inform flag set to true
    prevVisiblity !== !!count && (informParent = true);
    // if the managers data limit get changed then also inform the parent
    if (updateInfo.dataLimitChanged !== false) {
      range = manager.getDataLimits();
      if (range.min !== config.range.min || range.max !== config.range.max) {
        config.range.min = range.min;
        config.range.max = range.max;
        changeInfo.dataLimitChanged = true;
        informParent = true;
      }
    }
    // if the axis value got changed then inform parent
    // right now we do not change value padding on any type of update
    // if (updateInfo.paddingChanged !== false) {
    //   padding = manager.getAxisValuePadding();
    //   if (padding.left !== config.padding.left || padding.right !== config.padding.right) {
    //     config.padding.left = padding.left;
    //     config.padding.right = padding.right;
    //     changeInfo.paddingChanged = true;
    //     informParent = true;
    //   }
    // }
    if (informParent) {
      parent.childChanged && parent.childChanged(changeInfo);
    } else {
      manager.asyncDraw();
    }
  };
  /**
   * function to get value for axis padding from is children
   * @return {Object} with left and right member
   */


  Column3dGroup.prototype.getAxisValuePadding = function getAxisValuePadding() {
    var paddingObj = {},
        axisPaddingLeft = -Infinity,
        axisPaddingRight = -Infinity;
    this._mapChildren(function (child) {
      if (child.getState('removed')) {
        return;
      }
      paddingObj = child.getAxisValuePadding && child.getAxisValuePadding() || {};
      axisPaddingLeft = Math.max(axisPaddingLeft, paddingObj.left || -Infinity);
      axisPaddingRight = Math.max(axisPaddingRight, paddingObj.right || -Infinity);
    });

    if (axisPaddingLeft === -Infinity) {
      axisPaddingLeft = 0;
    }
    if (axisPaddingRight === -Infinity) {
      axisPaddingRight = 0;
    }
    if (!this.config.padding) {
      this.config.padding = {};
      this.config.padding.left = axisPaddingLeft;
      this.config.padding.right = axisPaddingRight;
    }
    return {
      left: axisPaddingLeft,
      right: axisPaddingRight
    };
  };
  /**
   * function to get data limits from its child datasets
   * return minimun and maximum value among the datasets limit
   * @param {boolean} allVisible  whether consider all the datasets are visible or not
   * @return {Object}             [min, max]
   */


  Column3dGroup.prototype.getDataLimits = function getDataLimits(allVisible) {
    var manager = this,
        min = +Infinity,
        max = -Infinity,
        maxminObj = void 0,
        numOfColumns = 0,
        getMaxMin = function getMaxMin(_maxminObj) {
      max = Math.max(max, _maxminObj.max);
      min = Math.min(min, _maxminObj.min);
    };

    manager._mapChildren(function (child) {
      if (child.getState('removed')) {
        return;
      }
      if (child.getState('visible') === false) {
        if (allVisible) {
          maxminObj = child.getDataLimits(allVisible);
          getMaxMin(maxminObj);
        }
        return;
      }
      numOfColumns++;
      maxminObj = child.getDataLimits(allVisible);
      getMaxMin(maxminObj);
    });
    if (!numOfColumns) {
      manager.setState('visible', false);
    } else {
      manager.setState('visible', true);
    }
    if (!this.config.range) {
      this.config.range = {};
      this.config.range.min = this.config.dataMin;
      this.config.range.max = this.config.dataMax;
    }
    return { max: max, min: min };
  };
  /**
   * it return the status of dataset visiblity
   * @return {boolean} returns the visiblity status of dataset
   */


  Column3dGroup.prototype.isVisible = function isVisible() {
    return !this.isNotVisible;
  };

  return Column3dGroup;
}(_componentInterface2['default']);

exports['default'] = Column3dGroup;

/***/ }),

/***/ 211:
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

var _canvas3dAxisRefCartesian = __webpack_require__(105);

var _canvas3dAxisRefCartesian2 = _interopRequireDefault(_canvas3dAxisRefCartesian);

var _multiseries3dDataset = __webpack_require__(212);

var _multiseries3dDataset2 = _interopRequireDefault(_multiseries3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for MSCartesian3D
 */
var MSCartesian3D = function (_MSCartesian) {
  _inherits(MSCartesian3D, _MSCartesian);

  /**
   * constructor fn
   */
  function MSCartesian3D() {
    _classCallCheck(this, MSCartesian3D);

    var _this = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _this.registerFactory('canvas', _canvas3dAxisRefCartesian2['default']);
    _this.registerFactory('dataset', _multiseries3dDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  MSCartesian3D.getName = function getName() {
    return 'MSCartesian3D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSCartesian3D.prototype.getName = function getName() {
    return 'MSCartesian3D';
  };
  /**
   * Sets default configuration of chart elements
   */


  MSCartesian3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian.prototype.__setDefaultConfig && _MSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.showplotborder = 0;
    config.drawcrosslineontop = 0;
  };

  return MSCartesian3D;
}(_fusioncharts2['default']);

exports['default'] = MSCartesian3D;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var jsonData = chart.getFromEnv('dataSource'),
      datasetsJSON = jsonData.dataset,
      children = chart.getChildren(),
      canvas = children.canvas[0],
      vCanvas = void 0,
      datasetParent = vCanvas = canvas.getChildren('vCanvas')[0],
      DsGroupClass = void 0,
      DSClass = void 0,
      dsType = chart.config.defaultDatasetType || '',
      groupManager = void 0,
      groupManager3d = void 0;

  if (!datasetsJSON) {
    chart.setChartMessage();
  }

  (0, _lib.componentFactory)(vCanvas, _column2['default'], 'datasetGroup_' + dsType);
  groupManager3d = vCanvas.getChildren('datasetGroup_' + dsType)[0];

  DsGroupClass = chart.getDSGroupdef();
  (0, _lib.componentFactory)(groupManager3d, DsGroupClass, 'datasetGroup_' + dsType);
  groupManager = groupManager3d.getChildren('datasetGroup_' + dsType);
  groupManager && (datasetParent = groupManager[0]);
  DSClass = chart.getDSdef();

  (0, _lib.datasetFactory)(datasetParent, DSClass, 'dataset', datasetsJSON.length, datasetsJSON);
};

var _lib = __webpack_require__(5);

var _column = __webpack_require__(136);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 213:
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

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _bar2d = __webpack_require__(138);

var _dependencyManager = __webpack_require__(6);

var _bar3dAnimation = __webpack_require__(646);

var _bar3dAnimation2 = _interopRequireDefault(_bar3dAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

(0, _dependencyManager.addDep)({
  name: 'bar3DAnimation',
  type: 'animationRule',
  extension: _bar3dAnimation2['default']
});
/**
 * representing bar3d dataset
 */

var Bar3DDataset = function (_Column3DDataset) {
  _inherits(Bar3DDataset, _Column3DDataset);

  function Bar3DDataset() {
    _classCallCheck(this, Bar3DDataset);

    return _possibleConstructorReturn(this, _Column3DDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  Bar3DDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Bar3DDataset.prototype.getName = function getName() {
    return 'bar3D';
  };
  /**
   * Helper function of _getHoveredPlot().
   * @param {number} pX index of column
   * @param {number} chartX x co-ordinate
   * @param {number} chartY y co-ordinate
   * @return {Object}        hovered information
   */


  Bar3DDataset.prototype._checkPointerOverColumn = function _checkPointerOverColumn(pX, chartX, chartY) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        showPlotBorder = chartConfig.showplotborder,
        dataStore = dataset.components.data,
        pointObj = dataStore[pX],
        pY,
        dx,
        dy,
        hovered,
        zDepth = 5,
        xPos,
        yPos,
        width,
        height;

    if (!pointObj) {
      return;
    }

    pY = pointObj.config.setValue;

    // if (chartConfig.isstacked && ((pY < 0 && dataset.valueLook) || (pY > 0 && !dataset.valueLook))) {
    //   return;
    // }

    plotBorderThickness = showPlotBorder ? plotBorderThickness : 0;

    if (pY !== null) {
      yPos = pointObj._yPos;
      height = pointObj._height + zDepth;
      xPos = pointObj._xPos - zDepth;
      width = pointObj._width + zDepth;
      dx = chartX - xPos;
      dy = chartY - yPos;
      hovered = dx >= 0 && dx <= width + plotBorderThickness && dy >= 0 && dy <= height + plotBorderThickness;
      if (pY >= 0) {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      } else {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      }
      if (hovered) {
        return {
          pointIndex: pX,
          hovered: hovered,
          pointObj: dataStore[pX]
        };
      }
    }
  };
  /**
   * Function that return the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
   */


  Bar3DDataset.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        isBar = chart.isBar,
        xAxis = dataset.getFromEnv('xAxis'),
        x,
        pX;
    x = xAxis.getValue(isBar ? chartY : chartX);
    pX = Math.round(x);
    // Checking for overlap between two cosecutive column plots along x-axis
    return pX - x > 0 ? dataset._checkPointerOverColumn(pX, chartX, chartY) || dataset._checkPointerOverColumn(pX - 1, chartX, chartY) : dataset._checkPointerOverColumn(pX + 1, chartX, chartY) || dataset._checkPointerOverColumn(pX, chartX, chartY);
  };
  /**
   * Function to draw label for every data plot.
   * It calculates where to draw the label for data plot.
   */


  Bar3DDataset.prototype.drawLabel = function drawLabel() {
    _bar2d.drawLabel.call(this);
  };

  return Bar3DDataset;
}(_column3d2['default']);

exports['default'] = Bar3DDataset;

/***/ }),

/***/ 215:
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

var _pie2d = __webpack_require__(108);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _fusioncharts = __webpack_require__(131);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _lib = __webpack_require__(5);

var _animationManager = __webpack_require__(164);

var _animationManager2 = _interopRequireDefault(_animationManager);

var _caption = __webpack_require__(198);

var _caption2 = _interopRequireDefault(_caption);

var _subCaption = __webpack_require__(299);

var _subCaption2 = _interopRequireDefault(_subCaption);

var _background = __webpack_require__(300);

var _background2 = _interopRequireDefault(_background);

var _pieDataset = __webpack_require__(653);

var _pieDataset2 = _interopRequireDefault(_pieDataset);

var _legend = __webpack_require__(107);

var _legend2 = _interopRequireDefault(_legend);

var _legendSpacemanager = __webpack_require__(137);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    mathPI = math.PI,
    mathRound = math.round,
    deg2rad = mathPI / 180,
    rad2deg = 180 / mathPI,
    convertColor = _lib.graphics.convertColor,

/**
 * Slices the dataset
 * @param {Object} dataset The dataset on which to perform the slicing operation
 * @param {number} index The index of the data within the dataset which will be sliced
 * @param {boolean} slice If true, the dataset is sliced out. Else, the dataset is sliced in.
 *
 * @return {boolean} Returns the slicing state of the data at the given index after slicing
 */
performSlicing = function performSlicing(dataset, index, slice) {
  var sliceVal = !!slice,

  /**
   * If the user as not explicitly provided the slice parameter OR if the provided slice
   * parameter is not the same as the present slice state of the given data plot, the data plot
   * is eligible for slicing.
   *
   * @param {Object} dataPlot The dataplot which needs to be checked for slicing eligibility
   *
   * @return {boolean} Whether the given data plot will slice or not
   */
  willSlice = function willSlice(dataPlot) {
    return sliceVal !== dataPlot.config.sliced || typeof slice === 'undefined';
  },
      data = void 0,
      dataConfig = void 0,
      output = void 0,
      selectedDataPlot = void 0;

  if (!dataset) {
    return output;
  }

  // Extract the all data from the dataset
  data = dataset.components && dataset.components.data || [];
  // Check if dataset is reversed and adjust the user's given index accordingly
  index = dataset.config.reversePlotOrder ? data.length - index - 1 : index;
  selectedDataPlot = data[index];

  if (selectedDataPlot) {
    dataConfig = selectedDataPlot.config;
    // If the data is eligible for slicing, slice it. Else, return the present slice state of the
    // data plot
    if (willSlice(selectedDataPlot)) {
      output = dataset.plotGraphicClick.call(selectedDataPlot.graphics.element);
    } else {
      output = dataConfig.sliced;
    }
  }

  return output;
};

var Pie2D = function (_CommonAPI) {
  _inherits(Pie2D, _CommonAPI);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pie2D.getName = function getName() {
    return 'Pie2D';
  };

  function Pie2D() {
    _classCallCheck(this, Pie2D);

    var _this = _possibleConstructorReturn(this, _CommonAPI.call(this));

    _this.defaultSeriesType = 'pie';
    _this.defaultPlotShadow = 1;
    _this.reverseLegend = 1;
    _this.defaultPaletteOptions = undefined;
    _this.alignCaptionWithCanvas = 0;
    _this.sliceOnLegendClick = true;
    _this.dontShowLegendByDefault = true;
    _this.defaultZeroPlaneHighlighted = false;
    _this.hasCanvas = true;
    _this.eiMethods = /** @lends FusionCharts# */{
      /**
       * Pie charts have slices that can be clicked to slice in and out.
       * Checks whether a particular wedge of Pie or Doughnut chart is sliced-out or sliced-in.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {number} index - The index of the data corresponding to the pie/doughnut slice.
       * @return {boolean} - The sliced state of the pie/doughnut wedge. Returns `true` if it's sliced out,
       * or `false` if it's sliced in.
       *
       * @example
       * // Render a pie 2d chart with some data in sliced out state, provide data index
       * // in an input textfield and get the sliced state of the pie on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Get the sliced state of a pie returned when clicked on a button
       *     // (with an id pie-sliced-state). It picks the data index from
       *     // an input textfield (with id pie-data-index).
       *     document.getElementById("pie-sliced-state").onclick = function () {
       *         var dataIndex = document.getElementById("pie-data-index").value,
       *             slicedState = chart.isPlotItemSliced(dataIndex);
       *     };
       * });
       */
      isPlotItemSliced: function isPlotItemSliced(index) {
        var data,
            config,
            apiInstance = this.apiInstance,
            dataset = apiInstance && apiInstance.getDatasets();

        return dataset && (dataset = dataset[0]) && (data = dataset.components.data) && data[index] && (config = data[index].config) && config.sliced;
      },

      addData: function addData() {
        var apiInstance = this.apiInstance,
            dataset = apiInstance && apiInstance.getDatasets();
        return dataset && (dataset = dataset[0]) && dataset.addData.apply(dataset, arguments);
      },

      removeData: function removeData() {
        var apiInstance = this.apiInstance,
            dataset = apiInstance && apiInstance.getDatasets();
        return dataset && (dataset = dataset[0]) && dataset.removeData.apply(dataset, arguments);
      },

      updateData: function updateData() {
        var apiInstance = this.apiInstance,
            dataset = apiInstance && apiInstance.getDatasets();
        return dataset && (dataset = dataset[0]) && dataset.updateData.apply(dataset, arguments);
      },
      /**
       * Pie charts have slices. These slices can be clicked by users to slice in or slice out.
       * Slices a pie/doughnut wedge to in / out state. In absence of the optional second parameter, it
       * toggles the sliced state of the pie. The second parameter only enforces a specific sliced state.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {number} index - The index of the data corresponding to the pie/doughnut slice.
       * @param {boolean=} [slice] - Gives direction to chart on what is the required sliced state. For
       * `true`, it slices out, if in sliced-in state. Or else, maintains it's sliced-out state. And
       * vice-versa.
       * @param {Function} [callback] - If the chart is in asyncRender mode, the callback function
       * is invoked with the result of the slicing operation.
       *
       * @return {boolean} - The final sliced state of the pie/doughnut wedge. Returns `true` if it's
       * sliced out, or `false` if it's sliced in. If the chart is in asyncRender mode, this method
       * returns `undefined` and instead the callback provided is invoked with the result of the
       * slicing operation.
       *
       * @fires FusionCharts#slicingStart
       * @fires FusionCharts#slicingEnd
       *
       * @example
       * // Render a pie 2d chart, provide data index in an input textfield
       * // and toggle the sliced state of the pie on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Toggle the sliced state of the pie when clicked on a button
       *     // (with an id pie-sliced-state). It picks the data index from
       *     // an input textfield (with id pie-data-index).
       *     document.getElementById("pie-sliced-state").onclick = function () {
       *         var dataIndex = document.getElementById("pie-data-index").value;
       *         chart.slicePlotItem(dataIndex);
       *     };
       * });
       */
      slicePlotItem: function slicePlotItem(index, slice, callback) {
        var fcInstance = this,
            apiInstance = fcInstance.apiInstance,
            asyncRender = fcInstance.args.asyncRender;

        if (asyncRender) {
          apiInstance.addJob('eiMethods-slice-plot', function () {
            var slicingResult = performSlicing(apiInstance.getDatasets()[0], index, slice);
            return typeof callback === 'function' && callback(slicingResult);
          }, _schedular.priorityList.postRender);
        } else {
          return performSlicing(apiInstance.getDatasets()[0], index, slice);
        }
      },
      /**
       * Rotates the pie/doughnut chart to a specific angle or by a specific angle. The mode of
       * operation is controlled by the optional second parameter. Even the first parameter is optional,
       * in absence of which, the chart doesn't rotate and simply returns the current starting angle
       * of the pie/doughnut chart.
       *
       * Starting angle of a pie/doughnut chart is the angle at which the starting face of the first data is
       * aligned to. Each pie is drawn in counter clock-wise direction.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {degrees=} [angle=0] - The angle by which to rotate the entire pie/doughnut chart.
       * @param {boolean=} [relative=false] - Specify whether the angle being set is relative to the current
       * angle or with respect to absolute 0.
       * @return {degrees} - The final state of the starting angle of the chart.
       *
       * @example
       * // Render a pie 2d chart and rotate the chart by 90 degrees on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Assign the functionality of rotating the chart by 90 degrees when clicked on
       *     // a button (with an id rotate-chart).
       *     document.getElementById("rotate-chart").onclick = function () {
       *         chart.startingAngle(90, true);
       *     };
       * });
       */
      startingAngle: function startingAngle(angle, relative, callback) {
        var chart = this.apiInstance,
            asyncRender = chart.getFromEnv('chartInstance').args.asyncRender,
            output;

        if (callback || asyncRender) {
          chart.addJob('eiMethods-start-angle', function () {
            output = chart._startingAngle(angle, relative);
            if (typeof callback === 'function') {
              callback(output);
            }
          }, _schedular.priorityList.postRender);
        } else {
          return chart._startingAngle(angle, relative);
        }
      }
    };
    _this.registerFactory('dataset', _pieDataset2['default'], ['vCanvas', 'legend']);
    _this.registerFactory('legend', _legend2['default']);
    return _this;
  }

  Pie2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _CommonAPI.prototype.__setDefaultConfig && _CommonAPI.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.formatnumberscale = 1;
    config.isSingleSeries = true;
    config.friendlyName = 'Pie Chart';
    config.defaultDatasetType = 'Pie2D';
    config.plotborderthickness = 1;
    config.decimals = 2;
    config.alphaanimation = 0;
    config.singletonPlaceValue = true;
    config.usedataplotcolorforlabels = 0;
    config.enableslicing = _lib.ONESTRING;
    config.skipCanvasDrawing = true;
  };

  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  Pie2D.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _CommonAPI.prototype.parseChartAttr.call(this, dataObj);
    var iapi = this,
        chartAttrs = iapi.getFromEnv('chart-attrib');
    iapi.config.showLegend = (0, _lib.pluckNumber)(chartAttrs.showlegend, 0);
  };
  /**
   * function to create component and configure and also configure the chart
   * It creates components which are depend on data and configure them and also configure chart
   * It calls helper function namely, configure
   * @param  {Object} dataObj contains json data of the chart
   */


  Pie2D.prototype.configureAttributes = function configureAttributes(dataObj) {
    var iapi = this,
        chartConfig = iapi.config,
        toolTipController;
    iapi.parseChartAttr(dataObj);
    iapi.createComponent(dataObj);
    iapi.config.skipConfigureIteration.axis = true;

    iapi.configureChildren();
    // after configure chart calls its async draw
    iapi.asyncDraw();
    // @TODO this is not proper place to invoking this fn
    // as configureAttributes fn is copied from the mscartesian to
    // override the parent configureAttributes fn, this _createToolBox
    // fn invoking is still here.
    iapi._createToolBox();
    toolTipController = iapi.getFromEnv('toolTipController');
    toolTipController.setStyle({ 'bgColor': convertColor(chartConfig.tooltipbgcolor || 'EEE', chartConfig.tooltipbgalpha || 100),
      'rawBgColor': (chartConfig.tooltipbgcolor || 'EEE').replace(/^#?([a-f0-9]+)/ig, '#$1'),
      'fontColor': (chartConfig.tooltipcolor || chartConfig.basefontcolor || '000').replace(/^#?([a-f0-9]+)/ig, '#$1'),
      'borderColor': convertColor(chartConfig.tooltipbordercolor || '666', chartConfig.tooltipborderalpha || 100),
      'rawBorderColor': (chartConfig.tooltipbordercolor || '666').replace(/^#?([a-f0-9]+)/ig, '#$1'),
      'bgAlpha': (0, _lib.pluckNumber)(chartConfig.tooltipbgalpha, 100),
      'borderThickness': (0, _lib.pluckNumber)(chartConfig.tooltipborderthickness, 1),
      'showToolTipShadow': (0, _lib.pluckNumber)(chartConfig.showtooltipshadow || 0),
      'borderRadius': (0, _lib.pluckNumber)(chartConfig.tooltipborderradius, 0),
      'font-size': chartConfig.basefontsize || 10,
      'font-family': chartConfig.basefont || this.getFromEnv('style').inCanfontFamily,
      'padding': (0, _lib.pluckNumber)(chartConfig.tooltippadding || 3),
      'borderAlpha': (0, _lib.pluckNumber)(chartConfig.tooltipborderalpha, 100) });
  };
  /**
   * Create child components of chart
   * @param {Object} dataObj User input json
   */


  Pie2D.prototype.createComponent = function createComponent() {
    var iapi = this,
        animationManager = void 0,

    // animationObj = chartInstance.args.animation,
    skipConfigureIteration = void 0;

    skipConfigureIteration = iapi.config.skipConfigureIteration = {};
    (0, _lib.componentFactory)(iapi, _animationManager2['default'], 'animationManager');
    animationManager = iapi.getChildren('animationManager')[0];
    if (iapi.getFromEnv('animationManager')) {
      animationManager.setAnimationState('update');
    } else {
      animationManager.setAnimationState('initial');
      // eslint-disable-next-line
      iapi.addExtEventListener('animationComplete', function (e, o) {
        if (o.currAnimState === 'initial' || o.currAnimState === 'update') {
          iapi.fireChartInstanceEvent('internal.animationComplete');
        }
      }, animationManager);
    }
    animationManager.configure();
    iapi.addToEnv('animationManager', animationManager);

    (0, _lib.componentFactory)(iapi, _caption2['default'], 'caption');
    skipConfigureIteration.caption = true;
    (0, _lib.componentFactory)(iapi, _subCaption2['default'], 'subCaption');
    skipConfigureIteration.subCaption = true;
    (0, _lib.componentFactory)(iapi, _background2['default'], 'background');
    skipConfigureIteration.background = true;
    skipConfigureIteration.canvas = true;
    // Create dynamic components like message logger
    iapi._createConfigurableComponents && iapi._createConfigurableComponents();

    // Update alert manager
    if (iapi.config.realtimeEnabled) {
      iapi._realTimeConfigure && iapi._realTimeConfigure();
      // if (AlertManagerClass) {
      //   componentFactory(iapi, AlertManagerClass, 'alertManager');
      // }
    }
  };
  /**
   * function to calculate post space management calculations
   * calculations like axis dimenetion set, allocate space for xaxis labels,
   * canvas padding etc.
   * As pie charts do not have axis and canvas so this api will override the parent api
   */
  // eslint-disable-next-line


  Pie2D.prototype._postSpaceManagement = function _postSpaceManagement() {
    this.config.showLegend && this.getChildren('legend') && this.getChildren('legend')[0].postSpaceManager();
  };

  /**
   * function to check if the chart specific data is proper is not
   * this fn is define for specific chart types
   * @return {boolean} if JSON data is valid or not
   */
  // eslint-disable-next-line


  Pie2D.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {
    // this fn will override
  };

  Pie2D.prototype._spaceManager = function _spaceManager() {
    var chart = this,
        chartConfig = chart.config,
        dataSet = chart.getChildren('dataset')[0],
        data = dataSet.components.data,
        conf = dataSet.config,
        legend = chart.getFromEnv('legend'),
        colorM = chart.getFromEnv('color-manager'),
        SmartLabel = chart.getFromEnv('smartLabel'),
        textWidthArr = [],
        length = conf.dataLabelCounter,
        labelMaxW = 0,
        fcJSONChart = chart.getFromEnv('dataSource').chart,
        manageLabelOverflow = (0, _lib.pluckNumber)(fcJSONChart.managelabeloverflow, 0),
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        slicingDistance = !conf.preSliced && chartConfig.allPlotSliceEnabled === _lib.ZEROSTRING && (fcJSONChart.showlegend !== _lib.ONESTRING || fcJSONChart.interactivelegend === _lib.ZEROSTRING) ? 0 : mathAbs((0, _lib.pluckNumber)(userGivenSlicingDist, 20)),
        pieRadius = (0, _lib.pluckNumber)(fcJSONChart.pieradius, 0),
        enableSmartLabels = (0, _lib.pluckNumber)(fcJSONChart.enablesmartlabels, fcJSONChart.enablesmartlabel, 1),
        skipOverlapLabels = enableSmartLabels ? (0, _lib.pluckNumber)(fcJSONChart.skipoverlaplabels, fcJSONChart.skipoverlaplabel, 1) : 0,
        isSmartLineSlanted = (0, _lib.pluckNumber)(fcJSONChart.issmartlineslanted, 1),
        labelDistance = length ? (0, _lib.pluckNumber)(fcJSONChart.labeldistance, fcJSONChart.nametbdistance, 5) : slicingDistance,
        smartLabelClearance = (0, _lib.pluckNumber)(fcJSONChart.smartlabelclearance, 5),
        width = chartConfig.width,
        height = chartConfig.height,
        actionBarHeight = (chart._manageActionBarSpace(height * 0.225) || {}).bottom,
        chartWorkingWidth = width - (chartConfig.marginRight + chartConfig.marginLeft),
        chartWorkingHeight = height - (chartConfig.marginTop + chartConfig.marginBottom) - (actionBarHeight ? actionBarHeight + chartConfig.marginBottom : 0),
        minOfWH = mathMin(chartWorkingHeight, chartWorkingWidth),
        smartLineColor = (0, _lib.pluck)(fcJSONChart.smartlinecolor, colorM.getColor('plotFillColor')),
        smartLineAlpha = (0, _lib.pluckNumber)(fcJSONChart.smartlinealpha, 100),
        smartLineThickness = (0, _lib.pluckNumber)(fcJSONChart.smartlinethickness, 0.7),
        dataLabelOptions = conf.dataLabelOptions = dataSet._parseDataLabelOptions(),
        style = dataLabelOptions.style,
        lineHeight = length ? (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12) : 0,
        // 2px padding
    pieMinRadius = pieRadius === 0 ? minOfWH * 0.15 : pieRadius,
        pieMinDia = 2 * pieMinRadius,
        legendSpace = {
      bottom: 0,
      right: 0
    },
        captionSpace,
        pieYScale = conf.pieYScale,
        pieSliceDepth = conf.pieSliceDepth,
        textObj,
        avaiableMaxpieSliceDepth,
        totalSpaceReq;
    // Old code for placeValuesInside
    // placeLabelsInside = pluckNumber ((FCchartName === 'doughnut2d') ? 0 : fcJSONChart.placevaluesinside),

    dataLabelOptions.connectorWidth = smartLineThickness;
    dataLabelOptions.connectorPadding = (0, _lib.pluckNumber)(fcJSONChart.connectorpadding, 5);
    dataLabelOptions.connectorColor = convertColor(smartLineColor, smartLineAlpha);

    // If smart label is on and there is a label defined only then modify the label distance
    if (length) {
      if (enableSmartLabels) {
        labelDistance = smartLabelClearance;
      }
      labelDistance += slicingDistance;
    }
    // Include label
    totalSpaceReq = pieMinDia + (lineHeight + labelDistance) * 2;

    // Provide at least single line height space for caption.
    // a space manager that manages the space for the tools as well as the captions.
    captionSpace = chart._manageChartMenuBar(totalSpaceReq < chartWorkingHeight ? chartWorkingHeight - totalSpaceReq : chartWorkingHeight / 2);
    chartWorkingHeight -= (captionSpace.top || 0) + (captionSpace.bottom || 0);

    if (conf.showLegend) {
      chart.config.hasLegend = true;
      if ((0, _lib.pluck)(fcJSONChart.legendposition, _lib.POSITION_BOTTOM).toLowerCase() !== _lib.POSITION_RIGHT) {
        legendSpace = legend._manageLegendPosition(chartWorkingHeight / 2);
        chartWorkingHeight -= legendSpace.bottom;
      } else {
        legendSpace = legend._manageLegendPosition(chartWorkingHeight / 2);
        chartWorkingWidth -= legendSpace.right;
      }
    }
    chart._allocateSpace(legendSpace);
    // Now get the max width required for all display text
    // set the style
    SmartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    if (length !== 1) {
      // Fix for single data in Pie makes pie very small in size.
      for (; length--;) {
        SmartLabel.setStyle(data[length].config.style || chartConfig.dataLabelStyle);
        textWidthArr[length] = textObj = SmartLabel.getOriSize(data[length].config.displayValue);
        labelMaxW = mathMax(labelMaxW, textObj.width);
      }
    }
    // If redius not supplyed then auto calculate it
    if (pieRadius === 0) {
      pieMinRadius = chart._stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius);
    } else {
      conf.slicingDistance = slicingDistance;
      conf.pieMinRadius = pieMinRadius;
      dataLabelOptions.distance = labelDistance;
    }
    avaiableMaxpieSliceDepth = chartWorkingHeight - 2 * (pieMinRadius * pieYScale + lineHeight);
    conf.managedPieSliceDepth = pieSliceDepth > avaiableMaxpieSliceDepth ? pieSliceDepth - avaiableMaxpieSliceDepth : conf.pieSliceDepth;
    dataLabelOptions.isSmartLineSlanted = isSmartLineSlanted;
    dataLabelOptions.enableSmartLabels = enableSmartLabels;
    dataLabelOptions.skipOverlapLabels = skipOverlapLabels;
    dataLabelOptions.manageLabelOverflow = manageLabelOverflow;
  };
  // manages the spaces when no radius is given.


  Pie2D.prototype._stubRadius = function _stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius) {
    var chart = this,
        dataSet = chart.getChildren('dataset')[0],
        conf = dataSet.config,
        fcJSONChart = chart.getFromEnv('dataSource').chart,
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        dataLabelOptions = conf.dataLabelOptions || (conf.dataLabelOptions = dataSet._parseDataLabelOptions()),
        availableRadius = 0,

    // Slicing distance can not be less then the MINSLICINGDIST (10)
    MINSLICINGDIST = 10,
        shortFall;
    availableRadius = mathMin(chartWorkingWidth / 2 - labelMaxW - slicingDistance, chartWorkingHeight / 2 - lineHeight) - labelDistance;
    if (availableRadius >= pieMinRadius) {
      // there has space for min width
      pieMinRadius = availableRadius;
    } else if (!userGivenSlicingDist) {
      /** @todo smartyfy Labels */
      // If slicing distance is not given by the user, adjust slicing distance based on pie radius.
      shortFall = pieMinRadius - availableRadius;
      // Now reduce the pie slicing distance, but restrict the minimum slicing distance to 10 pixels.
      slicingDistance = labelDistance = mathMax(mathMin(labelDistance - shortFall, slicingDistance), MINSLICINGDIST);
    }
    conf.slicingDistance = slicingDistance;
    conf.pieMinRadius = pieMinRadius;
    dataLabelOptions.distance = labelDistance;

    return pieMinRadius;
  };

  Pie2D.prototype._startingAngle = function _startingAngle(angle, relative) {
    var ang,
        chart = this,
        dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,

    // Angle is differently handled in Pie2D and Pie3D. So, angles is converted
    // accordingly to the same base. Its radian in 2D while in degrees in 3D.
    // Moreover, sense of positive angle is opposite in the two.
    currentAngle = (ang = seriesData.startAngle) * -rad2deg + (-1 * ang < 0 ? 360 : 0);
    if (!isNaN(angle)) {
      if (!(seriesData.singletonCase || seriesData.isRotating)) {
        angle += relative ? currentAngle : 0;
        seriesData.startAngle = -angle * deg2rad;
        dataSet._rotate(angle);
        currentAngle = angle;
      }
    }
    // Angle normalised in the range of [0, 360]
    return mathRound(((currentAngle %= 360) + (currentAngle < 0 ? 360 : 0)) * 100) / 100;
  };

  /**
   * function to calculate and allote space for legend
   */


  Pie2D.prototype._manageLegendSpace = function _manageLegendSpace() {
    _legendSpacemanager._manageLegendSpace.call(this);
  };

  Pie2D.prototype.getDSdef = function getDSdef() {
    return _pie2d2['default'];
  };

  return Pie2D;
}(_fusioncharts2['default']);

exports['default'] = Pie2D;

/***/ }),

/***/ 218:
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

var _fusioncharts = __webpack_require__(211);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _area = __webpack_require__(23);

var _area2 = _interopRequireDefault(_area);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _combiDualY3dDataset = __webpack_require__(333);

var _combiDualY3dDataset2 = _interopRequireDefault(_combiDualY3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEFINED = void 0,
    HUNDREDSTRING = '100',
    SEVENTYSTRING = '70';
/**
 * Class to render mscombi3d chart
 * @class MSCombi3D
 * @extends {MSCartesian3D}
 */

var MSCombi3D = function (_MSCartesian3D) {
  _inherits(MSCombi3D, _MSCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSCombi3D.getName = function getName() {
    return 'MSCombi3D';
  };

  /**
   * Creates an instance of MSCombi3D.
   * @memberof MSCombi3D
   */


  function MSCombi3D() {
    _classCallCheck(this, MSCombi3D);

    var _this = _possibleConstructorReturn(this, _MSCartesian3D.call(this));

    _this.defaultPlotShadow = 1;
    _this.registerFactory('dataset', _combiDualY3dDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSCombi3D.prototype.getName = function getName() {
    return 'MSCombi3D';
  };

  /**
   * Sets default configuration of chart elements
   * @memberof MSCombi3D
   */


  MSCombi3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian3D.prototype.__setDefaultConfig && _MSCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = 'Multi-series 3D Combination Chart';
    config.defaultDatasetType = 'column3d';
    config.showplotborder = 0;
    config.enablemousetracking = true;

    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEFINED;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEFINED;
    config.anchorbgalpha = HUNDREDSTRING;
    config.anchorimagealpha = HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEFINED;
    config.anchorbordercolor = UNDEFINED;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEFINED;
    config.linealpha = HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
  };

  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  MSCombi3D.prototype.getDSdef = function getDSdef(name) {
    return name === 'area' ? _area2['default'] : name === 'line' ? _line2['default'] : _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  MSCombi3D.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column3d' ? _column2['default'] : UNDEFINED;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  MSCombi3D.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'area' ? 'area' : name && name.toLowerCase() === 'line' ? 'line' : 'column3d';
  };

  return MSCombi3D;
}(_fusioncharts2['default']);

exports['default'] = MSCombi3D;

/***/ }),

/***/ 315:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _canvas3dAxisRefCartesian = __webpack_require__(105);

var _canvas3dAxisRefCartesian2 = _interopRequireDefault(_canvas3dAxisRefCartesian);

var _singleseries3dDataset = __webpack_require__(637);

var _singleseries3dDataset2 = _interopRequireDefault(_singleseries3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class SSCartesian3D
 */
var SSCartesian3D = function (_SSCartesian) {
  _inherits(SSCartesian3D, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SSCartesian3D.getName = function getName() {
    return 'SSCartesian3D';
  };
  /**
   * Constructor function for SSCartesian3D class
   */


  function SSCartesian3D() {
    _classCallCheck(this, SSCartesian3D);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.registerFactory('canvas', _canvas3dAxisRefCartesian2['default']);
    _this.registerFactory('dataset', _singleseries3dDataset2['default'], ['vCanvas']);
    return _this;
  }

  /**
   * Sets the name of the component
   * @return {string} name
   */


  SSCartesian3D.prototype.getName = function getName() {
    return 'SSCartesian3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  SSCartesian3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig && _SSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.hasLegend = false;
    config.showplotborder = 0;
    config.drawcrosslineontop = 0;
  };

  return SSCartesian3D;
}(_fusioncharts2['default']);

exports['default'] = SSCartesian3D;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._setCategories = undefined;

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

var _fusioncharts = __webpack_require__(70);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _pareto = __webpack_require__(321);

var _paretoline = __webpack_require__(322);

var _paretoAxis = __webpack_require__(649);

var _paretoAxis2 = _interopRequireDefault(_paretoAxis);

var _lib = __webpack_require__(5);

var _paretoDataset = __webpack_require__(650);

var _paretoDataset2 = _interopRequireDefault(_paretoDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var NINETYSTRING = _lib.preDefStr.NINETYSTRING;
/**
 * Set categories to Axis
 */
function _setCategories2() {
  var iapi = this,
      dataObj = iapi.getFromEnv('dataSource'),
      dataset = dataObj.dataset,
      numberFormatter = iapi.getFromEnv('number-formatter'),
      xAxis = iapi.getChildren('xAxis'),
      data = dataObj.data || dataset && dataset[0].data || [],
      catArr = [],
      datum,
      dataLen = data.length,
      i,
      vLine = {};

  // iterate all data and remove null and vlines
  for (i = dataLen - 1; i >= 0; i--) {
    datum = data[i];
    if (datum.vline === 'true' || datum.vline === '1' || datum.vline === 1 || datum.vline === true) {
      vLine[i] = datum;
      data.splice(i, 1);
    } else if (numberFormatter.getCleanValue(datum.value, true) === null) {
      data.splice(i, 1);
    }
  }

  // Sort the original data
  data.sort(function (a, b) {
    return numberFormatter.getCleanValue(b.value, true) - numberFormatter.getCleanValue(a.value, true);
  });

  // clone the sorted data for categories
  catArr = data.slice();
  // add the v lines
  for (i in vLine) {
    catArr.splice(i, 0, vLine[i]);
  }
  xAxis[0].setTickValues(catArr);
}

/**
 * Creates class for  Pareto2D
 */

var Pareto2D = function (_MSDyBaseCartesian) {
  _inherits(Pareto2D, _MSDyBaseCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pareto2D.getName = function getName() {
    return 'Pareto2D';
  };
  /**
   * Constructor function for class Pareto2D
   */


  function Pareto2D() {
    _classCallCheck(this, Pareto2D);

    var _this = _possibleConstructorReturn(this, _MSDyBaseCartesian.call(this));

    _this.isPercentage = true;
    _this.registerFactory('axis', _paretoAxis2['default'], ['canvas']);
    _this.registerFactory('dataset', _paretoDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Pareto2D.prototype.getName = function getName() {
    return 'Pareto2D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Pareto2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSDyBaseCartesian.prototype.__setDefaultConfig && _MSDyBaseCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.singleseries = true;
    config.hasLegend = false;
    config.defaultDatasetType = 'column';
    config.plotfillalpha = NINETYSTRING;
    config.enablemousetracking = true;
  };
  /**
   * parse defualt configuration of the chart
   */


  Pareto2D.prototype._setCategories = function _setCategories() {
    _setCategories2.call(this);
  };
  /**
   * function to check if the chart specific data is proper is not
   * this fn is define for specific chart types
   * @return {boolean} if JSON data is valid or not
   */


  Pareto2D.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {
    var jsonData = this.getFromEnv('dataSource'),
        data = jsonData.data;
    if (!data || !data.length) {
      return true;
    }
  };
  /**
   * This method return the dataset definations for this charts
   * @param {string} name Name of dataset class
   * @return {Class}       Pareto dataset
   */


  Pareto2D.prototype.getDSdef = function getDSdef(name) {
    return name === 'column' ? _pareto.ParetoColumnDataset : _paretoline.ParetoLineDataset;
  };
  /**
   * Overrides parent fn
   */


  Pareto2D.prototype.getDSGroupdef = function getDSGroupdef() {
    // this fn overrides
  };

  return Pareto2D;
}(_fusioncharts2['default']);

exports['default'] = Pareto2D;
exports._setCategories = _setCategories2;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ParetoColumnDataset = undefined;

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var PLOTBORDERCOLOR = 'plotBorderColor',
    PLOTGRADIENTCOLOR = 'plotGradientColor',
    SHOWSHADOW = 'showShadow',
    UNDEF = void 0,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    HUNDREDSTRING = '100',
    convertColor = _lib.graphics.convertColor,
    getLightColor = _lib.graphics.getLightColor;

var ParetoColumnDataset = function (_ColumnDataset) {
  _inherits(ParetoColumnDataset, _ColumnDataset);

  function ParetoColumnDataset() {
    _classCallCheck(this, ParetoColumnDataset);

    return _possibleConstructorReturn(this, _ColumnDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  ParetoColumnDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ParetoColumnDataset.prototype.getName = function getName() {
    return 'paretoColumn';
  };

  ParetoColumnDataset.prototype.configureAttributes = function configureAttributes(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.config.JSONData = datasetJSON;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        xAxis = dataSet.getFromEnv('xAxis'),
        JSONData = conf.JSONData,
        setDataArr = JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = setDataLen,
        chartAttr = dataSet.getFromEnv('chart-attrib'),
        colorM = dataSet.getFromEnv('color-manager'),
        index = dataSet.index || dataSet.positionIndex,
        showplotborder,
        plotColor = colorM.getPlotColor(index),
        plotBorderDash = (0, _lib.pluckNumber)(JSONData.dashed, chartAttr.plotborderdashed),
        usePlotGradientColor = (0, _lib.pluckNumber)(chartAttr.useplotgradientcolor, 1),
        showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1),
        yAxisName = (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
        xAxisName = (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
        formatedVal,
        parserConfig,
        setTooltext,
        macroIndices,
        tempPlotfillAngle,
        toolText,
        plotDashLen,
        plotDashGap,
        plotBorderThickness,
        isRoundEdges,
        showHoverEffect,
        plotfillAngle,
        plotFillAlpha,
        plotFillRatio,
        plotgradientcolor,
        plotBorderAlpha,
        plotBorderColor,
        plotBorderDashStyle,
        initailPlotBorderDashStyle,
        setData,
        setValue,
        dataObj,
        config,
        colorArr,
        dataStore = dataSet.components.data,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        setDisplayValue,
        is3D = chart.config.is3D,
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
        enableAnimation,
        setDataDashed,
        setDataPlotDashLen,
        setDataPlotDashGap,
        i,
        maxValue = -Infinity,
        minValue = +Infinity,
        displayValue,
        displayValuePercent,
        sumValue = 0,
        value,
        catObj,
        cleanArr = [],
        cumulativeSumValue = 0,
        useDataPlotColorForLabels,
        tooltipSepChar = conf.tootipSepChar = (0, _lib.pluck)(chartAttr.tooltipsepchar, ', ');

    conf.defaultPadding = {
      left: 0.5,
      right: 0.5
    };
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showShadow = isRoundEdges || is3D ? (0, _lib.pluckNumber)(chartAttr.showshadow, 1) : (0, _lib.pluckNumber)(chartAttr.showshadow, colorM.getColor(SHOWSHADOW));
    conf.useDataPlotColorForLabels = useDataPlotColorForLabels = (0, _lib.pluckNumber)(chartAttr.usedataplotcolorforlabels, 0);
    conf.use3dlineshift = (0, _lib.pluckNumber)(chartAttr.use3dlineshift, chart.use3dlineshift);

    showplotborder = conf.showplotborder = (0, _lib.pluckNumber)(chartAttr.showplotborder, is3D ? 0 : 1);
    conf.plotDashLen = plotDashLen = (0, _lib.pluckNumber)(chartAttr.plotborderdashlen, 5);
    conf.plotDashGap = plotDashGap = (0, _lib.pluckNumber)(chartAttr.plotborderdashgap, 4);
    conf.plotfillangle = plotfillAngle = (0, _lib.pluckNumber)(360 - chartAttr.plotfillangle, 90);
    conf.plotfillalpha = plotFillAlpha = (0, _lib.pluck)(chartAttr.plotfillalpha, HUNDREDSTRING);
    conf.plotColor = plotColor;
    conf.isRoundEdges = isRoundEdges = (0, _lib.pluckNumber)(chartAttr.useroundedges, 0);
    conf.plotRadius = (0, _lib.pluckNumber)(chartAttr.useRoundEdges, conf.isRoundEdges ? 1 : 0);
    conf.plotfillratio = plotFillRatio = (0, _lib.pluck)(chartAttr.plotfillratio);
    conf.plotgradientcolor = plotgradientcolor = (0, _lib.getDefinedColor)(chartAttr.plotgradientcolor, colorM.getColor(PLOTGRADIENTCOLOR));
    !usePlotGradientColor && (plotgradientcolor = '');
    conf.plotborderalpha = plotBorderAlpha = showplotborder && !is3D ? (0, _lib.pluck)(chartAttr.plotborderalpha, plotFillAlpha, HUNDREDSTRING) : 0;
    conf.plotbordercolor = plotBorderColor = (0, _lib.pluck)(chartAttr.plotbordercolor, is3D ? '#ffffff' : colorM.getColor(PLOTBORDERCOLOR));
    conf.plotborderthickness = plotBorderThickness = (0, _lib.pluckNumber)(chartAttr.plotborderthickness, 1);
    conf.plotBorderDashStyle = initailPlotBorderDashStyle = plotBorderDash ? (0, _lib.getDashStyle)(plotDashLen, plotDashGap) : 'none';
    conf.showValues = (0, _lib.pluckNumber)(chartAttr.showvalues, 1);
    conf.definedGroupPadding = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent), 0);
    conf.plotSpacePercent = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent, 20) % 100, 0);
    conf.maxcolwidth = (0, _lib.pluckNumber)(chartAttr.maxcolwidth, 50);
    conf.plotpaddingpercent = (0, _lib.pluckNumber)(chartAttr.plotpaddingpercent);
    conf.placevaluesinside = (0, _lib.pluckNumber)(chartAttr.placevaluesinside, 0);
    conf.use3dlighting = (0, _lib.pluckNumber)(chartAttr.use3dlighting, 1);
    conf.parentYAxis = 0;

    dataSet.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, 1) === 1);
    dataSet.setState('dirty', true);

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }
    // Get the sum value and create the clean Array of value
    for (i = 0; i < len; i++) {
      value = mathAbs(numberFormatter.getCleanValue(setDataArr[i].value));
      sumValue += value;
      cleanArr[i] = (0, _lib.extend2)({}, setDataArr[i]);
      cleanArr[i].value = value;
    }
    // Sort the clean Array of values
    cleanArr.sort(function (a, b) {
      return b.value - a.value;
    });

    conf.imageCount = 0;
    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      setData = cleanArr[i];
      dataObj = dataStore[i];
      if (!dataObj) {
        dataObj = dataStore[i] = {
          graphics: {}
        };
      }
      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }
      setValue = mathAbs(numberFormatter.getCleanValue(setData.value));
      if (setValue === null) {
        continue;
      }
      config = dataObj && dataObj.config;
      catObj = xAxis.getLabel(i);
      config.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(catObj.label)));
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.setValue = setValue;
      config.setLink = (0, _lib.pluck)(setData.link);
      config.setDisplayValue = setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      cumulativeSumValue += config.setValue;
      displayValue = numberFormatter.dataLabels(setValue);

      config.shadow = {
        opacity: conf.showShadow ? plotFillAlpha / 100 : 0
      };

      setDataDashed = (0, _lib.pluckNumber)(setData.dashed);
      setDataPlotDashLen = (0, _lib.pluckNumber)(setData.dashlen, plotDashLen);
      setDataPlotDashGap = plotDashGap = (0, _lib.pluckNumber)(setData.dashgap, plotDashGap);

      config.plotBorderDashStyle = plotBorderDashStyle = setDataDashed === 1 ? (0, _lib.getDashStyle)(setDataPlotDashLen, setDataPlotDashGap) : setDataDashed === 0 ? 'none' : initailPlotBorderDashStyle;
      plotColor = colorM.getPlotColor(i);
      plotColor = (0, _lib.pluck)(setData.color, plotColor);
      plotFillRatio = (0, _lib.pluck)(setData.ratio, conf.plotfillratio);
      plotFillAlpha = (0, _lib.pluck)(setData.alpha, conf.plotfillalpha);

      plotBorderAlpha = (0, _lib.pluck)(setData.alpha, conf.plotborderalpha);
      // Setting the angle for plot fill for negative data
      if (setValue < 0 && !isRoundEdges) {
        tempPlotfillAngle = plotfillAngle;
        plotfillAngle = 360 - plotfillAngle;
      }

      // Setting the color Array to be applied to the bar/column.
      config.colorArr = colorArr = _lib.graphics.getColumnColor(plotColor + ',' + plotgradientcolor, plotFillAlpha, plotFillRatio, plotfillAngle, isRoundEdges, plotBorderColor, plotBorderAlpha.toString(), 0, !!is3D);
      if (showHoverEffect !== 0) {
        hoverColor = (0, _lib.pluck)(setData.hovercolor, chartAttr.plotfillhovercolor, chartAttr.columnhovercolor, plotColor);
        hoverAlpha = (0, _lib.pluck)(setData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.columnhoveralpha, plotFillAlpha);
        hoverGradientColor = (0, _lib.pluck)(setData.hovergradientcolor, chartAttr.plothovergradientcolor, plotgradientcolor);
        !hoverGradientColor && (hoverGradientColor = '');
        hoverRatio = (0, _lib.pluck)(setData.hoverratio, chartAttr.plothoverratio, plotFillRatio);
        hoverAngle = (0, _lib.pluckNumber)(360 - setData.hoverangle, 360 - JSONData.hoverangle, 360 - chartAttr.plothoverangle, plotfillAngle);
        hoverBorderColor = (0, _lib.pluck)(setData.borderhovercolor, chartAttr.plotborderhovercolor, plotBorderColor);
        hoverBorderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, chartAttr.plotfillhoveralpha, plotBorderAlpha, plotFillAlpha);
        hoverBorderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, plotBorderThickness);
        hoverBorderDashed = (0, _lib.pluckNumber)(setData.borderhoverdashed, chartAttr.plotborderhoverdashed);
        hoverBorderDashGap = (0, _lib.pluckNumber)(setData.borderhoverdashgap, chartAttr.plotborderhoverdashgap, plotDashLen);
        hoverBorderDashLen = (0, _lib.pluckNumber)(setData.borderhoverdashlen, chartAttr.plotborderhoverdashlen, plotDashGap);
        hoverDashStyle = hoverBorderDashed ? (0, _lib.getDashStyle)(hoverBorderDashLen, hoverBorderDashGap) : plotBorderDashStyle;

        /* If no hover effects are explicitly defined and
                       * showHoverEffect is not 0 then hoverColor is set.
                       */
        if (showHoverEffect == 1 && hoverColor === plotColor) {
          hoverColor = getLightColor(hoverColor, 70);
        }

        // setting the hover color array which is always applied except
        // when showHoverEffect is not 0.
        hoverColorArr = _lib.graphics.getColumnColor(hoverColor + ',' + hoverGradientColor, hoverAlpha, hoverRatio, hoverAngle, isRoundEdges, hoverBorderColor, hoverBorderAlpha.toString(), 0, !!is3D);

        config.setRolloutAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(colorArr[0]) : [(0, _lib.toRaphaelColor)(colorArr[0]), !conf.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle
        };
        config.setRolloverAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(hoverColorArr[0]) : [(0, _lib.toRaphaelColor)(hoverColorArr[0]), !conf.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(hoverColorArr[1]),
          'stroke-width': hoverBorderThickness,
          'stroke-dasharray': hoverDashStyle
        };
      }

      useDataPlotColorForLabels && xAxis.updateTicksValues(i, {
        labelfontcolor: convertColor(plotColor)
      });
      config.originalPlotColor = plotColor;
      config.displayValue = (0, _lib.pluck)(setDisplayValue, displayValue);
      setTooltext = config.setTooltext = config.origToolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, chartAttr.plottooltext)));
      config.toolTipValue = numberFormatter.dataLabels(setValue, conf.parentYAxis);
      config._x = i;
      config._y = setValue;

      formatedVal = config.toolTipValue;
      maxValue = mathMax(maxValue, setValue);
      minValue = mathMin(minValue, setValue);
      // Parsing tooltext against various configurations provided by the user.
      if (!showTooltip) {
        toolText = false;
      } else {
        if (!conf.showTooltip) {
          toolText = false;
        } else if (setTooltext !== UNDEF) {
          parserConfig = {
            formattedValue: formatedVal,
            label: config.label,
            yaxisName: yAxisName,
            xaxisName: xAxisName,
            cumulativeValue: cumulativeSumValue,
            cumulativeDataValue: numberFormatter.dataLabels(cumulativeSumValue),
            cumulativePercentValue: displayValuePercent,
            sum: numberFormatter.dataLabels(sumValue),
            unformattedSum: sumValue
          };
          macroIndices = [1, 2, 3, 5, 6, 7, 20, 21, 22, 23, 24, 25];
          toolText = (0, _lib.parseTooltext)(setTooltext, macroIndices, parserConfig, setData, chartAttr);
        } else {
          // determine the dispalay value then
          toolText = config.label ? config.label + tooltipSepChar : '';
        }
        config.toolText = toolText;
      }
      config.toolText = toolText;
      config.tooltext = setTooltext;
      config.setTooltext = toolText;
      tempPlotfillAngle && (plotfillAngle = tempPlotfillAngle);
    }
    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  return ParetoColumnDataset;
}(_column2['default']);

exports.ParetoColumnDataset = ParetoColumnDataset;

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ParetoLineDataset = undefined;

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

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var PLOTBORDERCOLOR = 'plotBorderColor',
    SHOWSHADOW = 'showShadow',
    UNDEF = void 0,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    HUNDREDSTRING = '100';

var ParetoLineDataset = function (_LineDataset) {
  _inherits(ParetoLineDataset, _LineDataset);

  function ParetoLineDataset() {
    _classCallCheck(this, ParetoLineDataset);

    return _possibleConstructorReturn(this, _LineDataset.apply(this, arguments));
  }

  ParetoLineDataset.prototype.configureAttributes = function configureAttributes(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.config.JSONData = datasetJSON;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        xAxis = dataSet.getFromEnv('xAxis'),
        JSONData = conf.JSONData,
        setDataArr = JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = setDataLen,
        chartAttr = dataSet.getFromEnv('chart-attrib'),
        colorM = dataSet.getFromEnv('color-manager'),
        showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1),
        yAxisName = (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
        xAxisName = (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
        formatedVal,
        parserConfig,
        setTooltext,
        macroIndices,
        toolText,
        isRoundEdges,
        setData,
        setValue,
        dataObj,
        config,
        dataStore = dataSet.components.data,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        is3D = chart.config.is3D,
        enableAnimation,
        lineDashStyle,
        i,
        maxValue = -Infinity,
        minValue = +Infinity,
        displayValuePercent,
        sumValue = 0,
        value,
        catObj,
        cleanArr = [],
        cumulativeSumValue = 0,
        tooltipSepChar = conf.tootipSepChar = (0, _lib.pluck)(chartAttr.tooltipsepchar, ', '),
        anchorProps;

    conf.defaultPadding = {
      left: 0.5,
      right: 0.5
    };
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showShadow = isRoundEdges || is3D ? (0, _lib.pluckNumber)(chartAttr.showshadow, 1) : (0, _lib.pluckNumber)(chartAttr.showshadow, colorM.getColor(SHOWSHADOW));
    conf.useDataPlotColorForLabels = (0, _lib.pluckNumber)(chartAttr.usedataplotcolorforlabels, 0);
    conf.use3dlineshift = (0, _lib.pluckNumber)(chartAttr.use3dlineshift, chart.use3dlineshift);

    conf.linecolor = (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.linecolor, colorM.getColor(PLOTBORDERCOLOR)));
    conf.linethickness = (0, _lib.pluckNumber)(chartAttr.linethickness, 2);
    conf.linealpha = (0, _lib.pluck)(chartAttr.linealpha, HUNDREDSTRING);
    conf.linedashed = (0, _lib.pluckNumber)(chartAttr.linedashed, 0);
    conf.linedashlen = (0, _lib.pluckNumber)(JSONData.linedashlen, chartAttr.linedashlen, 5);
    conf.linedashgap = (0, _lib.pluckNumber)(JSONData.linedashgap, chartAttr.linedashgap, 4);
    lineDashStyle = (0, _lib.getDashStyle)(conf.linedashlen, conf.linedashgap);
    conf.lineDashStyle = conf.linedashed ? lineDashStyle : 'none';
    conf.drawanchors = (0, _lib.pluckNumber)(chartAttr.drawanchors, chartAttr.showanchors);
    conf.anchorbgcolor = (0, _lib.pluck)(chartAttr.anchorbgcolor, colorM.getColor('anchorBgColor'));
    conf.anchorbordercolor = (0, _lib.pluck)(chartAttr.anchorbordercolor, conf.linecolor);
    conf.anchorradius = (0, _lib.pluckNumber)(chartAttr.anchorradius, 3);
    conf.anchoralpha = (0, _lib.pluck)(chartAttr.anchoralpha);
    conf.anchorbgalpha = (0, _lib.pluck)(chartAttr.anchorbgalpha, 100);
    conf.anchorborderthickness = (0, _lib.pluck)(chartAttr.anchorborderthickness, 1);
    conf.anchorsides = (0, _lib.pluck)(chartAttr.anchorsides, 0);
    // Anchor image cosmetics attributes
    conf.anchorimageurl = (0, _lib.pluck)(chartAttr.anchorimageurl);
    conf.anchorimagealpha = (0, _lib.pluckNumber)(chartAttr.anchorimagealpha, 100);
    conf.anchorimagescale = (0, _lib.pluckNumber)(chartAttr.anchorimagescale, 100);
    conf.anchorimagepadding = (0, _lib.pluckNumber)(chartAttr.anchorimagepadding, 1);
    conf.anchorstartangle = (0, _lib.pluckNumber)(chartAttr.anchorstartangle, 90);
    conf.parentYAxis = 1;
    conf.valuePosition = (0, _lib.pluck)(chartAttr.valueposition, 'auto');
    conf.showvalues = conf.showValues = (0, _lib.pluckNumber)(chartAttr.showlinevalues, chartAttr.showvalues, 1);

    dataSet.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, 1) === 1);
    dataSet.setState('dirty', true);

    conf.shadow = {
      opacity: conf.showShadow ? conf.linealpha / 100 : 0
    };

    conf.showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1);
    conf.maxRadius = -Infinity;

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }
    // Get the sum value and create the clean Array of value
    for (i = 0; i < len; i++) {
      value = mathAbs(numberFormatter.getCleanValue(setDataArr[i].value));
      sumValue += value;
      cleanArr[i] = (0, _lib.extend2)({}, setDataArr[i]);
      cleanArr[i].value = value;
    }
    // Sort the clean Array of values
    cleanArr.sort(function (a, b) {
      return b.value - a.value;
    });

    conf.imageCount = 0;
    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      setData = cleanArr[i];
      dataObj = dataStore[i];
      if (!dataObj) {
        dataObj = dataStore[i] = {
          graphics: {}
        };
      }
      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }
      setValue = mathAbs(numberFormatter.getCleanValue(setData.value));
      if (setValue === null) {
        continue;
      }
      config = dataObj && dataObj.config;
      catObj = xAxis.getLabel(i);
      config.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(catObj.label)));
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.setValue = setValue;
      config.setLink = (0, _lib.pluck)(setData.link);
      config.setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      cumulativeSumValue += config.setValue;

      setValue = config.setValue = cumulativeSumValue / sumValue * 100;
      displayValuePercent = numberFormatter.percentValue(setValue);
      config.toolTipValue = displayValuePercent;
      config.displayValue = displayValuePercent;
      config.valuePosition = (0, _lib.pluck)(setData.valueposition, conf.valuePosition);
      config.anchorProps = this._parseAnchorProperties(i, cleanArr);
      config.hoverEffects = this._parseHoverEffectOptions(dataObj);
      anchorProps = config.anchorProps;
      conf.maxRadius = Math.max(conf.maxRadius, anchorProps.radius + anchorProps.borderThickness / 2);
      config._x = i;
      config._y = setValue;
      // setTooltext = config.setTooltext = getValidValue(parseUnsafeString(
      //     pluck(setData.cumulativeplottooltext, chartAttr.cumulativeplottooltext)));

      formatedVal = config.toolTipValue;
      maxValue = mathMax(maxValue, setValue);
      minValue = mathMin(minValue, setValue);
      // Parsing tooltext against various configurations provided by the user.
      if (!showTooltip) {
        toolText = false;
      } else {
        if (!conf.showTooltip) {
          toolText = false;
        } else if (setTooltext !== UNDEF) {
          parserConfig = {
            formattedValue: formatedVal,
            label: config.label,
            yaxisName: yAxisName,
            xaxisName: xAxisName,
            cumulativeValue: cumulativeSumValue,
            cumulativeDataValue: numberFormatter.dataLabels(cumulativeSumValue),
            cumulativePercentValue: displayValuePercent,
            sum: numberFormatter.dataLabels(sumValue),
            unformattedSum: sumValue
          };
          macroIndices = [1, 2, 3, 5, 6, 7, 20, 21, 22, 23, 24, 25];
          toolText = (0, _lib.parseTooltext)(setTooltext, macroIndices, parserConfig, setData, chartAttr);
        } else {
          // determine the dispalay value then
          toolText = config.label ? config.label + tooltipSepChar : '';
        }
        config.toolText = toolText;
      }
      config.toolText = toolText;
      config.tooltext = setTooltext;
      config.setTooltext = toolText;
    }
    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  return ParetoLineDataset;
}(_line2['default']);

exports.ParetoLineDataset = ParetoLineDataset;

/***/ }),

/***/ 324:
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

var _fusioncharts = __webpack_require__(215);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _pie3d = __webpack_require__(325);

var _pie3d2 = _interopRequireDefault(_pie3d);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathPI = math.PI;

var Pie3D = function (_Pie2D) {
  _inherits(Pie3D, _Pie2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pie3D.getName = function getName() {
    return 'Pie3D';
  };

  function Pie3D() {
    _classCallCheck(this, Pie3D);

    // this.fireGroupEvent = true;
    var _this = _possibleConstructorReturn(this, _Pie2D.call(this));

    _this.defaultPlotShadow = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Pie3D.prototype.getName = function getName() {
    return 'Pie3D';
  };

  Pie3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2D.prototype.__setDefaultConfig && _Pie2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = '3D Pie Chart';
    config.defaultDatasetType = 'Pie3D';
    config.plotborderthickness = 0.1;
    config.alphaanimation = 0;
  };

  // Pie2D (base) has defaultPlotShadow, but 3d does not.


  Pie3D.prototype.animate = function animate() {
    var i,
        point,
        graphic,
        pointGraphics,
        pointConfig,
        element,
        args,
        up,
        start,
        end,
        chart = this,
        chartComponents = chart.components,
        dataSet = chartComponents.dataset[0],
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        plotItems = dataSetComponents.data,
        len = plotItems.length,
        alphaAnim = dataSetConfig.alphaAnimation,
        animationObj = chart.get('config', 'animationObj'),
        animationDuration = animationObj.duration || 0,
        mainElm = animationObj.dummyObj,
        animObj = animationObj.animObj,
        animType = animationObj.animType;

    if (!alphaAnim) {
      for (i = 0; i < len; i++) {
        point = plotItems[i];
        pointGraphics = point.graphics;
        pointConfig = point.config;
        args = pointConfig.shapeArgs;
        up = 2 * mathPI;
        element = pointGraphics.element;

        // start values
        if (element) {
          element.attr({
            sAngle: up,
            eAngle: up
          });

          start = args.sAngle;
          end = args.eAngle;

          /* Raphael animation do not support start and end attributes.
                      * Since the attribute setting for Pie3D goes through attrFN
                      * method of Pie3DManager, we can safely use some unused
                      * attributes for pie3D to pass through Raphael animation module
                      * and trap the attributes to convert to start and end in attrFN */
          graphic.animateWith(mainElm, animObj, {
            cx: start - up,
            cy: end - up
          }, animationDuration, animType);
        }
      }
    }
  };
  // manages the spaces when no radius is given.


  Pie3D.prototype._stubRadius = function _stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius) {
    var chart = this,
        dataSet = chart.getChildren('dataset')[0],
        conf = dataSet.config,
        fcJSONChart = dataSet.config,
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        dataLabelOptions = conf.dataLabelOptions || (conf.dataLabelOptions = dataSet._parseDataLabelOptions()),
        availableRadius = 0,

    // Slicing distance can not be less then the MINSLICINGDIST (10)
    MINSLICINGDIST = 10,
        pieYScale = conf.pieYScale,
        pieSliceDepth = conf.pieSliceDepth,
        shortFall;
    chartWorkingHeight -= pieSliceDepth;
    availableRadius = mathMin(chartWorkingWidth / 2 - labelMaxW - slicingDistance, (chartWorkingHeight / 2 - lineHeight) / pieYScale) - labelDistance;

    if (availableRadius >= pieMinRadius) {
      // there has space for min width
      pieMinRadius = availableRadius;
    } else if (!userGivenSlicingDist) {
      /** @todo smartyfy Labels */
      // If slicing distance is not given by the user, adjust slicing distance based on pie radius.
      shortFall = pieMinRadius - availableRadius;
      // Now reduce the pie slicing distance, but restrict the minimum slicing distance to 10 pixels.
      slicingDistance = labelDistance = mathMax(mathMin(labelDistance - shortFall, slicingDistance), MINSLICINGDIST);
    }
    conf.slicingDistance = slicingDistance;
    conf.pieMinRadius = pieMinRadius;
    dataLabelOptions.distance = labelDistance;

    return pieMinRadius;
  };

  Pie3D.prototype._startingAngle = function _startingAngle(angle, relative) {
    var ang,
        chart = this,
        dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,

    // Angle is differently handled in Pie2D and Pie3D. So, angles is converted
    // accordingly to the same base. Its radian in 2D while in degrees in 3D.
    // Moreover, sense of positive angle is opposite in the two.
    currentAngle = (ang = seriesData.startAngle) + (ang < 0 ? 360 : 0);

    if (!isNaN(angle)) {
      if (!(seriesData.singletonCase || seriesData.isRotating)) {
        angle += relative ? currentAngle : 0;
        dataSet._rotate(angle);
        currentAngle = angle;
      }
    }
    // Angle normalised in the range of [0, 360]
    return mathRound(((currentAngle %= 360) + (currentAngle < 0 ? 360 : 0)) * 100) / 100;
  };

  Pie3D.prototype.getDSdef = function getDSdef() {
    return _pie3d2['default'];
  };

  return Pie3D;
}(_fusioncharts2['default']);

exports['default'] = Pie3D;

/***/ }),

/***/ 325:
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

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

var _pie2d = __webpack_require__(108);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _lib = __webpack_require__(5);

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _doughnut2d = __webpack_require__(326);

var _pie3dAnimation = __webpack_require__(327);

var _pie3dAnimation2 = _interopRequireDefault(_pie3dAnimation);

var _dependencyManager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Raphael = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    win = window,
    UNDEF = void 0,
    HIDDEN = 'hidden',
    docMode8 = window.document.documentMode === 8,
    VISIBLE = docMode8 ? 'visible' : '',
    COMMASTRING = ',',
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    EVENTARGS = 'eventArgs',
    GROUPID = 'groupId',
    POINTER = 'pointer',
    elementStr = _lib.preDefStr.elementStr,
    M = 'M',
    L = 'L',
    V = 'v',
    A = 'A',
    Z = 'Z',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    mathAbs = math.abs,
    mathCeil = math.ceil,
    mathSin = math.sin,
    mathATan2 = math.atan2,
    mathCos = math.cos,
    mathFloor = math.floor,
    mathRound = math.round,
    pi = math.PI,
    pi2 = 2 * pi,
    piBy2 = pi / 2,
    pi3By2 = pi + piBy2,
    getAbsScaleAngle = function getAbsScaleAngle(start, end) {
  return (start > end ? pi2 : 0) + end - start;
},
    getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    convertColor = _lib.graphics.convertColor,
    map = function map(arr, fn) {
  var results = [],
      i = 0,
      len = arr.length;

  for (; i < len; i++) {
    results[i] = fn.call(arr[i], arr[i], i, arr);
  }
  return results;
},
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    isObject = function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
},
    isString = function isString(s) {
  return typeof s === 'string';
},
    pInt = function pInt(s, mag) {
  return parseInt(s, mag || 10);
},
    pie3DCacheColorStore = {
  lighting3D: {},
  lighting2D: {}
},
    getClickArcTangent = function getClickArcTangent(x, y, center, ref, pieYScale) {
  return mathATan2((y - center[1] - ref.top) / pieYScale, x - center[0] - ref.left);
},
    plotRollOver = function plotRollOver(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      animationManager = chart.getFromEnv('animationManager'),
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      dataSetComponents = dataSet.components,
      data = dataSetComponents.data[index],
      setGraphics = data.graphics,
      setConfig = data.config,
      element = setGraphics.element,
      hoverEffects = setConfig.hoverEffects;
  if (!dataSetConfig.isRotating) {
    _lib.plotEventHandler.call(element, chart, e, ROLLOVER);
    hoverEffects.enabled && animationManager.setAnimation({
      el: element,
      attr: hoverEffects,
      component: dataSet
    });
  }
  chartConfig.isHovered = true;
},
    plotRollOut = function plotRollOut(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      animationManager = chart.getFromEnv('animationManager'),
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      dataSetComponents = dataSet.components,
      data = dataSetComponents.data[index],
      setGraphics = data.graphics,
      setConfig = data.config,
      element = setGraphics.element;

  if (!dataSetConfig.isRotating) {
    _lib.plotEventHandler.call(element, chart, e, ROLLOUT);
    animationManager.setAnimation({
      el: element,
      attr: {
        color: setConfig.color.color.split(',')[0],
        alpha: setConfig._3dAlpha,
        borderWidth: setConfig.borderWidth,
        borderColor: setConfig.borderColor
      },
      component: dataSet
    });
  }
  chartConfig.isHovered = false;
},
    plotDragStart = function plotDragStart(evt) {
  var plotItem = this.data('plotItem'),
      chart = plotItem.chart,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      angle,
      x = evt.data[0],
      y = evt.data[1];

  dataSetConfig.isRightClicked = !!(!_lib.touchEnabled && evt.button !== 0 && evt.button !== 1);
  if (!dataSetConfig.enableRotation || dataSetConfig.isRightClicked) {
    return;
  }

  dataSetConfig.isRotating = false;
  angle = getClickArcTangent.call(evt, x, y, dataSetConfig.center, dataSetConfig.chartPosition = (0, _lib.getPosition)(dataSet.getFromEnv('chart-container')), dataSetConfig.pieYScale);
  dataSetConfig.dragStartAngle = angle;
  dataSetConfig._lastAngle = -dataSetConfig.startAngle;
  dataSetConfig.startingAngleOnDragStart = dataSetConfig.startAngle;
},
    plotDragEnd = function plotDragEnd(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      animationManager = chart.getFromEnv('animationManager'),
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      dataSetComponents = dataSet.components,
      data = dataSetComponents.data[index],
      setGraphics = data.graphics,
      setConfig = data.config,
      element = setGraphics.element,
      startingAng = dataSetConfig.startAngle;
  // save state
  /* reflowUpdate = {
      hcJSON: {
          series: [ {
              startAngle: startingAng
          }]
      }
  }; */
  /* if (!chart.disposed) {
      extend2 (chart.logic.chartInstance.jsVars._reflowData,
                  reflowUpdate, true);
  } */

  if (dataSetConfig.isRightClicked) {
    return;
  }
  if (dataSetConfig.isRotating) {
    /* The events mouseup, dragend and click are raised in order. In order
      * to update the flag isRotating to false post click event, setTimeout
      * called, to take immediate effect, is programmed to update the flag.
      * Thus, the flag gets updated post the series of events, in effect.
      * NB: Click event is subscribed conditionally.
      */
    setTimeout(function () {
      dataSetConfig.isRotating = false;
    }, 0);
    /**
             * @event FusionCharts#rotationEnd
             * @group chart:pie-slice
             *
             * @param { number} startingAngle - The initial angle. (desc)
             * @param { number} changeInAngle - It is the difference between the starting angle and the starting
             * angle on the drag start.
             */
    chart.fireChartInstanceEvent('rotationEnd', {
      startingAngle: (0, _lib.normalizeAngle)(startingAng, true),
      changeInAngle: startingAng - dataSetConfig.startingAngleOnDragStart
    });
    // if not hovered on this plot and rotation End then undo hovereffect from plot
    !chartConfig.isHovered && animationManager.setAnimation({
      el: element,
      attr: {
        color: setConfig.color.color.split(',')[0],
        alpha: setConfig._3dAlpha,
        borderWidth: setConfig.borderWidth,
        borderColor: setConfig.borderColor
      },
      component: dataSet
    });
  } else {
    dataSet.plotGraphicClick.call(this, e);
  }
},
    plotDragMove = function plotDragMove(evt) {
  var plotItem = this.data('plotItem'),
      chart = plotItem.chart,
      evtData = evt.data,
      dx = evtData[0],
      dy = evtData[1],
      x = evtData[2],
      y = evtData[3],
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      angle,
      currentTime,
      deltaAngle;

  if (isNaN(dx) || isNaN(dy) || !dataSetConfig.enableRotation || dataSetConfig.singletonCase || dataSetConfig.isRightClicked) {
    return;
  }

  angle = getClickArcTangent.call(evt, x, y, dataSetConfig.center, dataSetConfig.chartPosition, dataSetConfig.pieYScale);

  if (dataSetConfig.dragStartAngle !== angle && !dataSetConfig.isRotating) {
    dataSetConfig.isRotating = true;
    /**
     * This event is fired when a pie or doughnut chart's rotation is triggered.
     *
     * @event FusionCharts#rotationStart
     * @group chart:pie-slice
     * @param { number} startingAngle - This indicates the angle from where rotation started.
     */
    chart.fireChartInstanceEvent('rotationStart', { startingAngle: (0, _lib.normalizeAngle)(dataSetConfig.startAngle, true) });
  }

  deltaAngle = angle - dataSetConfig.dragStartAngle;

  dataSetConfig.dragStartAngle = angle;
  dataSetConfig.moveDuration = 0;

  dataSetConfig._lastAngle += deltaAngle * 180 / pi;
  currentTime = new Date().getTime();

  if (!dataSetConfig._lastTime || dataSetConfig._lastTime + dataSetConfig.timerThreshold < currentTime) {
    if (!dataSetConfig._lastTime) {
      dataSet._rotate();
    }
    dataSetConfig.timerId = setTimeout(function () {
      if (!chart.disposed || !chart.disposing) {
        dataSet._rotate();
      }
    }, dataSetConfig.timerThreshold);
    dataSetConfig._lastTime = currentTime;
  }
},
    elementZSortFn = function elementZSortFn(a, b) {
  var centerAngleDiff = a._conf.index - b._conf.index || a._conf.cIndex - b._conf.cIndex || a._conf.isStart - b._conf.isStart || a._conf.si - b._conf.si;
  // !centerAngleDiff && console.log("aaa");
  return centerAngleDiff;
},
    getStartIndex = function getStartIndex(array) {
  var l,
      i,
      startsAtFrontHalf,
      startIndex = array[0] && array[0]._conf.index,
      atFrontHalf,
      index;

  startsAtFrontHalf = startIndex <= pi;
  for (i = 1, l = array.length; i < l; i += 1) {
    index = array[i]._conf.index;
    atFrontHalf = index <= pi;
    if (atFrontHalf !== startsAtFrontHalf || index < startIndex) {
      return i;
    }
  }
  return 0;
},

/*
 * Pie Helper Functions.
 */
sortArrayByPoint = function sortArrayByPoint(a, b) {
  return a.point.value - b.point.value;
},
    sortArrayByAngle = function sortArrayByAngle(a, b) {
  return a.angle - b.angle;
},
    alignments = ['start', 'start', 'end', 'end'],
    alignCenter = 'middle',
    ySign = [-1, 1, 1, -1],
    xSign = [1, 1, -1, -1],
    attrKeyList = {
  // block following attribute
  stroke: true,
  strokeWidth: true,
  'stroke-width': true,
  dashstyle: true,
  'stroke-dasharray': true,
  translateX: true,
  translateY: true,
  'stroke-opacity': true,
  fill: true,
  'fill-opacity': true,
  opacity: true,
  // attribute that has direct effect
  transform: true,
  ishot: true,
  cursor: true,
  sAngle: true,
  eAngle: true,
  color: true,
  alpha: true,
  borderColor: true,
  borderAlpha: true,
  borderWidth: true,
  rolloverProps: true,
  showBorderEffect: true,
  positionIndex: true,
  cx: true,
  cy: true,
  radiusYFactor: true,
  r: true,
  innerR: true
},
    attrFN = function attrFN(hash, val) {
  var key,
      value,
      slice = this,
      confObject = slice._confObject,
      commonAttr = {},
      elements = confObject.elements,
      x,
      updateShape,
      updateColor,
      Pie3DManager = confObject.Pie3DManager,
      applyCommonAttr;

  // single key-value pair
  if (isString(hash) && defined(val)) {
    key = hash;
    hash = {};
    hash[key] = val;
  }

  // used as a getter: first argument is a string, second is undefined
  if (!hash || isString(hash)) {
    if (attrKeyList[hash]) {
      slice = confObject[hash];
    } else {
      slice = slice._attr(hash);
    }
    // setter
  } else {
    for (key in hash) {
      value = hash[key];

      // if belongs from the list then handle here
      if (attrKeyList[key]) {
        // store the att in confObject for further use
        confObject[key] = value;
        if (key === 'ishot' || key === 'cursor' || key === 'transform' || key === 'opacity' || key === 'fill-opacity') {
          commonAttr[key] = value;
          applyCommonAttr = true;
        } else if (key === 'sAngle' || key === 'eAngle' || key === 'cx' || key === 'cy' || key === 'radiusYFactor' || key === 'r' || key === 'innerR') {
          updateShape = true;
        } else if (key === 'color' || key === 'alpha' || key === 'borderColor' || key === 'borderAlpha' || key === 'borderWidth') {
          updateColor = true;
        }
      } else {
        // else leve for the original attr
        slice._attr(key, value);
      }
    }

    // if paths need to be updated
    if (updateShape) {
      Pie3DManager._setSliceShape(confObject);
      // refreash the drawinh for proper z lavel for elements
      Pie3DManager.refreshDrawing();
    }
    // if colors need to be updated
    // If the shape got changed, then also cange the color
    if (updateColor || updateShape) {
      Pie3DManager._setSliceCosmetics(confObject);
    }
    // apply common attributes
    if (applyCommonAttr) {
      // other elements
      for (x in elements) {
        elements[x].attr(commonAttr);
      }
      // main element
      slice._attr(commonAttr);
    }
  }
  return slice;
},
    onFN = function onFN(eventType, handler) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].on(eventType, handler);
  }
  return slice._on(eventType, handler);
},
    onDragFN = function onDragFN(dragStart, dragMove, dragEnd) {
  var element,
      slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      navigator = win.navigator,
      ua = navigator.userAgent.toLowerCase(),
      isAndroid = ua.indexOf('android') > -1;
  for (element in elements) {
    if (isAndroid) {
      if (element === 'topBorder' || element === 'frontOuter' || element === 'startSlice' || element === 'endSlice') {
        elements[element].drag(dragStart, dragMove, dragEnd);
      }
    } else {
      elements[element].drag(dragStart, dragMove, dragEnd);
    }
  }
  return slice._drag(dragStart, dragMove, dragEnd);
},
    hideFN = function hideFN() {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].hide();
  }
  return slice._hide();
},
    showFN = function showFN() {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].show();
  }
  return slice._show();
},
    destroyFN = function destroyFN() {
  var confObject = this._confObject,
      elements = confObject.elements,
      x;
  // other elements
  for (x in elements) {
    elements[x].destroy();
  }
  if (_lib.hasSVG) {
    // destory other element
    // TODO: Check whether this clip elements are not destroying from else where
    confObject.clipTop.destroy();
    confObject.clipOuterFront.destroy();
    confObject.clipOuterBack.destroy();
    if (confObject.clipOuterFront1) {
      confObject.clipOuterFront1.destroy();
    }
    if (confObject.clipInnerFront) {
      confObject.clipInnerFront.destroy();
    }
    if (confObject.clipInnerBack) {
      confObject.clipInnerBack.destroy();
    }
  }
  // main element
  return this._destroy();
},
    tooltipFN = function tooltipFN(tooltext) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;
  // other elements
  for (element in elements) {
    elements[element].tooltip(tooltext);
    // toolTipController.enableToolTip(element, tooltext);
  }
  // main element
  return slice._tooltip(tooltext);
},
    dataFN = function dataFN(key, value) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;
  if (value === UNDEF) {
    return slice._data(key);
  } else {
    // other elements
    for (element in elements) {
      elements[element].data(key, value);
    }
    // main element
    return slice._data(key, value);
  }
},
    si = 0; // slice index
(0, _dependencyManager.addDep)({
  name: 'pie3dAnimation',
  type: 'animationRule',
  extension: _pie3dAnimation2['default']
});

var Pie3DDataset = function (_Pie2DDataset) {
  _inherits(Pie3DDataset, _Pie2DDataset);

  function Pie3DDataset() {
    _classCallCheck(this, Pie3DDataset);

    return _possibleConstructorReturn(this, _Pie2DDataset.apply(this, arguments));
  }

  Pie3DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2DDataset.prototype.__setDefaultConfig && _Pie2DDataset.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.setBorderWidth = UNDEF;
    config.alphaanimation = 0;
    config.showBorderEffect = UNDEF;
  };

  Pie3DDataset.prototype.placeDataLabels = function placeDataLabels(isRotating) {
    var attr,

    // prevTextPos,
    dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        plotOptions = dataSet.config,
        plotItems = dataSet.components.data,
        piePlotOptions = plotOptions.piePlotOptions,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasWidth = chartConfig.canvasWidth,
        cx = canvasLeft + chartConfig.canvasWidth * 0.5,
        cy = canvasTop + chartConfig.canvasHeight * 0.5,
        smartLabel = chart.getFromEnv('smartLabel'),
        dataLabelsOptions = plotOptions.dataLabelOptions,
        style = dataLabelsOptions.style,
        lineHeight = (0, _lib.pluckNumber)(mathCeil(parseFloat(style.lineHeight)), 12),
        placeInside = (0, _lib.getFirstValue)(dataLabelsOptions.placeInside, false),
        skipOverlapLabels = dataLabelsOptions.skipOverlapLabels,
        manageLabelOverflow = dataLabelsOptions.manageLabelOverflow,
        connectorPadding = dataLabelsOptions.connectorPadding,
        distanceOption = dataLabelsOptions.distance,
        connectorWidth = dataLabelsOptions.connectorWidth,
        remainingHeight,

    // divide the points into quarters for anti collision
    quarters = [[], // top right
    [], // bottom right
    [], // bottom left
    [] // top left
    ],

    // todo remove the dupliace variables.
    plotLeft = canvasLeft,
        plotTop = canvasTop,
        plotWidth = canvasWidth,
        labelFontSize = parseInt(style.fontSize, 10),
        labelHeight = labelFontSize,
        halfLabelHeight = labelHeight / 2,
        xDisplacement = [connectorPadding, connectorPadding, -connectorPadding, -connectorPadding],
        isSmartLineSlanted = dataLabelsOptions.isSmartLineSlanted,
        align,
        i,
        labelWidth,
        j,
        oriY,
        maxYmayHave,
        spaceRequired,
        length,
        k,
        sliced,
        x1,
        x2,
        x3,
        x4,
        y1,
        y2,
        y3,
        points,
        point,
        angle,
        excess,
        excessArr,
        dataLabel,
        dataLabelCheck,
        quarter,
        transX,
        transY,
        smartLabelObj,
        pointConfig,
        pointGraphics,
        connector,
        connectorPath,
        outside = distanceOption > 0,
        center = plotOptions.center || (plotOptions.center = [cx, cy, piePlotOptions.size, piePlotOptions.innerSize || 0]),
        centerY = center[1],
        centerX = center[0],
        radius = center[2],
        radiusY = center[4],
        dataLabelsRadius = plotOptions.labelsRadius,
        dataLabelsRadiusY = mathRound(plotOptions.labelsRadiusY * 100) / 100,
        maxLabels = plotOptions.maxLabels,
        enableSmartLabels = plotOptions.enableSmartLabels,
        labelQuardentHeight,
        maxQuardentLabel,
        pieSliceDepthHalf = plotOptions.pieSliceDepth / 2,
        _textCss,
        _textAttrs,
        animationManager = chart.getFromEnv('animationManager'),
        dataLabelContainer = dataSet.getContainer('label-group');

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    // save the world if there is no labels to be placed.
    if (!plotOptions.dataLabelCounter) {
      return;
    }
    if (!isRotating) {
      // do not set the style every time
      // Do it for first time
      smartLabel.setStyle(style);
    }
    // arrange points for detection collision
    // Creates an array of quarter containing labels of each quarter
    // if there has only one label the draw it inside
    if (plotItems.length == 1) {
      point = plotItems[0];
      pointGraphics = point.graphics;
      pointConfig = point.config;
      _textAttrs = pointConfig._textAttrs;
      _textCss = pointConfig._textCss;
      dataLabel = pointGraphics.label;
      connector = pointGraphics.connector;
      pointConfig.slicedTranslation = [plotLeft, plotTop];
      if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
        _textAttrs.visibility = VISIBLE;
        _textAttrs['text-anchor'] = alignCenter;
        _textAttrs.x = centerX;
        _textAttrs.y = centerY + halfLabelHeight - 2;

        _textAttrs._x = centerX;
      }

      _textCss.cursor = pointConfig.labellink ? 'pointer' : '';
      dataLabel = pointGraphics.label = animationManager.setAnimation({
        el: pointGraphics.label || 'text',
        attr: _textAttrs,
        css: _textCss,
        label: 'label',
        container: dataLabelContainer,
        component: dataSet
      });

      dataLabel.on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).on('click', _pie2d.labelClickFn.bind(dataLabel, chart, point.config.labellink)).hover(plotRollOver, plotRollOut);

      if (_textAttrs._x) {
        dataLabel.x = _textAttrs._x;
        delete _textAttrs.x;
      }
      dataLabel.data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);

      if (_textAttrs.visibility === VISIBLE) {
        dataLabel.show();
      }

      if (connector) {
        connector.hide();
      }
    } else {
      if (placeInside) {
        (0, _lib.fcEach)(plotItems, function (point) {
          var slicedTranslation, transX, transY;

          pointGraphics = point.graphics;
          pointConfig = point.config;
          _textAttrs = pointConfig._textAttrs;
          dataLabel = pointGraphics.label;
          if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
            angle = pointConfig.angle;
            y3 = centerY + center[6] * mathSin(angle) + halfLabelHeight - 2;
            x3 = centerX + center[5] * mathCos(angle);
            _textAttrs._x = x3;
            _textAttrs._y = y3;
            if (pointConfig.sliced) {
              slicedTranslation = point.slicedTranslation;
              transX = slicedTranslation[0] - plotLeft;
              transY = slicedTranslation[1] - plotTop;
              x3 = x3 + transX;
              y3 = y3 + transY;
            }
            _textAttrs.visibility = VISIBLE;
            _textAttrs.align = alignCenter;
            _textAttrs.x = x3;
            _textAttrs.y = y3;
          }
          _textCss.cursor = pointConfig.labellink ? 'pointer' : '';
          dataLabel = pointGraphics.label = animationManager.setAnimation({
            el: pointGraphics.label || 'text',
            attr: _textAttrs,
            css: _textCss,
            label: 'label',
            container: dataLabelContainer,
            component: dataSet
          });

          dataLabel.data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);

          if (_textAttrs.visibility === VISIBLE) {
            dataLabel.show();
          }

          dataLabel.x = _textAttrs._x;
          dataLabel._x = _textAttrs._x;
          dataLabel._y = _textAttrs._y;
        });
      } else {
        // outside
        (0, _lib.fcEach)(plotItems, function (point) {
          pointGraphics = point.graphics;
          pointConfig = point.config;
          _textCss = pointConfig._textCss;
          _textAttrs = pointConfig._textAttrs;
          if (!(_textAttrs.text = pointConfig.displayValue)) {
            return;
          }
          pointGraphics = point.graphics;
          if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
            dataLabel = pointGraphics.label;
            connector = pointGraphics.connector;
            connector && connector.show();
            dataLabel && dataLabel.show();
          }

          dataLabel = pointGraphics.label;

          angle = pointConfig.angle;

          if (angle < 0) {
            angle = pi2 + angle;
          }
          // Calculate top right quarter labels
          if (angle >= 0 && angle < piBy2) {
            quarter = 1;
          } else
            // Calculate bottom right quarter labels
            if (angle < pi) {
              quarter = 2;
            } else
              // Calculate bottom left quarter labels
              if (angle < pi3By2) {
                quarter = 3;
              } else {
                // Calculate bottom left quarter labels
                quarter = 0;
              }
          // Now put labels according to each quarter
          quarters[quarter].push({
            point: point,
            angle: angle
          });

          /* dataLabel = pointGraphics.label;
          if (dataLabel) {
              angle = pointConfig.angle;
               if (angle < 0) {
                  angle = pi2 + angle;
              }
              // Calculate top right quarter labels
              if (angle >= 0 && angle < piBy2) {
                  quarter = 1;
              } else
              // Calculate bottom right quarter labels
              if (angle < pi) {
                  quarter = 2;
              } else
              // Calculate bottom left quarter labels
              if (angle < (pi3By2)) {
                  quarter = 3;
              }
              // Calculate bottom left quarter labels
              else {
                  quarter = 0;
              }
              // Now put labels according to each quarter
              quarters[quarter].push ( {
                  point : point,
                  angle : angle
              });
          } */
        });

        i = 4;
        // if excess then remove the low value slice first
        while (i--) {
          if (skipOverlapLabels) {
            // Find labels can fit into the quarters or not
            excess = quarters[i].length - maxLabels;
            if (excess > 0) {
              quarters[i].sort(sortArrayByPoint); // sort by point.y
              // remove extra data form the array
              // which labels can not be fitted into the quarters
              excessArr = quarters[i].splice(0, excess);
              // hide all removed labels
              for (j = 0, length = excessArr.length; j < length; j += 1) {
                point = excessArr[j].point;
                pointGraphics = point.graphics;
                if (pointGraphics.label) {
                  animationManager.setAnimation({
                    el: pointGraphics.label,
                    attr: { 'visibility': HIDDEN },
                    component: dataSet
                  });
                }
                if (pointGraphics.connector) {
                  animationManager.setAnimation({
                    el: pointGraphics.connector,
                    attr: { visibility: HIDDEN },
                    component: dataSet
                  });
                }
              }
            }
          }
          // now we sort the data labels by its label angle
          quarters[i].sort(sortArrayByAngle);
        }

        maxQuardentLabel = mathMax(quarters[0].length, quarters[1].length, quarters[2].length, quarters[3].length);
        labelQuardentHeight = mathMax(mathMin(maxQuardentLabel, maxLabels) * labelHeight, dataLabelsRadiusY + labelHeight);

        // reverse 1st and 3rd quardent points
        quarters[1].reverse();
        quarters[3].reverse();
        smartLabel.setStyle(style);
        k = 4;
        while (k--) {
          points = quarters[k];
          length = points.length;

          if (!skipOverlapLabels) {
            if (length > maxLabels) {
              labelHeight = labelQuardentHeight / length;
            } else {
              labelHeight = labelFontSize;
            }
            halfLabelHeight = labelHeight / 2;
          }

          // 1st pass
          // place all labels at 1st quarter

          // calculate the total available space to put labels
          spaceRequired = length * labelHeight;
          // calculate the remaining height
          remainingHeight = labelQuardentHeight;
          // place all child point
          for (i = 0; i < length; i += 1, spaceRequired -= labelHeight) {
            // Get the y position of the label (radius where data label is to draw)
            oriY = mathAbs(labelQuardentHeight * mathSin(points[i].angle));
            if (remainingHeight < oriY) {
              oriY = remainingHeight;
            } else if (oriY < spaceRequired) {
              oriY = spaceRequired;
            }
            remainingHeight = (points[i].oriY = oriY) - labelHeight;
          }

          // 2nd pass (reverse)
          align = alignments[k];
          // place all labels at 1st quarter
          maxYmayHave = labelQuardentHeight - (length - 1) * labelHeight;
          remainingHeight = 0;

          // place all child point
          for (i = points.length - 1; i >= 0; i -= 1, maxYmayHave += labelHeight) {
            point = points[i].point;
            pointGraphics = point.graphics;
            pointConfig = point.config;
            _textAttrs = pointConfig._textAttrs;
            _textCss = pointConfig._textCss;

            if (pointConfig.y === null || !_textAttrs.text) {
              continue;
            }
            angle = points[i].angle;
            sliced = pointConfig.sliced;
            dataLabel = pointGraphics.label;

            oriY = mathAbs(labelQuardentHeight * mathSin(angle));

            if (oriY < remainingHeight) {
              oriY = remainingHeight;
            } else if (oriY > maxYmayHave) {
              oriY = maxYmayHave;
            }

            remainingHeight = oriY + labelHeight;

            y1 = (oriY + points[i].oriY) / 2;
            x1 = centerX + xSign[k] * dataLabelsRadius * mathCos(math.asin(y1 / labelQuardentHeight));

            y1 *= ySign[k];
            y1 += centerY;

            y2 = centerY + radiusY * mathSin(angle);
            x2 = centerX + radius * mathCos(angle);

            // Relation: centerX <= connectorStartX <= connectorEndX (for right half and vice
            // versa for left half)
            (k < 2 && x1 < x2 || k > 1 && x1 > x2) && (x1 = x2);

            x3 = x1 + xDisplacement[k];
            y3 = y1 + halfLabelHeight - 2;
            x4 = x3 + xDisplacement[k];

            _textAttrs._x = x4;

            if (manageLabelOverflow) {
              labelWidth = k > 1 ? x4 - canvasLeft : canvasLeft + plotWidth - x4;
              smartLabel.setStyle(pointConfig.style);
              lineHeight = (0, _lib.pluckNumber)(mathCeil(parseFloat(pointConfig.style.lineHeight)), 12) + (mathCeil(parseFloat(pointConfig.style.border), 12) * 2 || 0);
              smartLabelObj = smartLabel.getSmartText(pointConfig.displayValue, labelWidth, lineHeight);
              _textAttrs.text = smartLabelObj.text;
              _textAttrs.tooltip = smartLabelObj.tooltext;
            }

            // shift the labels at front pieSliceDepthHalf
            if (angle < pi) {
              y1 += pieSliceDepthHalf;
              y2 += pieSliceDepthHalf;
              y3 += pieSliceDepthHalf;
            }
            _textAttrs._y = y3;
            // dataLabel.y = y3;
            if (sliced) {
              transX = pointConfig.transX;
              transY = pointConfig.transY;
              x3 = x3 + transX;
              x1 = x1 + transX;
              x2 = x2 + transX;
              y2 = y2 + transY;
              x4 = x4 + transX;
            }
            _textAttrs.visibility = VISIBLE;
            _textAttrs['text-anchor'] = align;
            _textAttrs.x = x4;
            _textAttrs.y = y1;
            _textAttrs.opacity = 1;

            _textCss.cursor = pointConfig.labellink ? 'pointer' : '';
            dataLabelCheck = pointGraphics.label;
            dataLabel = animationManager.setAnimation({
              el: dataLabelCheck || 'text',
              attr: _textAttrs,
              css: _textCss,
              container: dataLabelContainer,
              component: dataSet,
              label: 'label'
            });
            dataLabel.data('textPos', {
              x: x4,
              y: y1
            }).data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);
            if (!dataLabelCheck) {
              // asssign events on label only on initial creation
              pointGraphics.label = dataLabel;
              dataLabel.on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).on('click', _pie2d.labelClickFn.bind(dataLabel, chart, point.config.labellink)).hover(plotRollOver, plotRollOut);
            }

            dataLabel.x = _textAttrs._x;
            // storing original x value
            // to use while slicing in (IE Issue original x get changed form animate)
            dataLabel._x = _textAttrs._x;
            dataLabel.y = _textAttrs._y;

            if (_textAttrs.tooltip) {
              dataLabel.tooltip(_textAttrs.tooltip);
              delete _textAttrs.tooltip;
            }
            // draw the connector
            // draw the connector
            if (outside && connectorWidth && enableSmartLabels) {
              connector = pointGraphics.connector;
              // if (!pointConfig.connectorPath) {
              //   isNewElem = true;
              // }
              pointConfig.connectorPath = connectorPath = [M, x2, y2, // base
              L, isSmartLineSlanted ? x1 : x2, y1, // first break, next to the label
              x3, y1 // end of the string at the label
              ];

              attr = {
                path: connectorPath,
                'stroke-width': connectorWidth,
                stroke: dataLabelsOptions.connectorColor || '#606060',
                opacity: 1,
                visibility: VISIBLE
              };
              if (connector) {
                animationManager.setAnimation({
                  el: connector,
                  attr: attr,
                  label: 'connector',
                  component: dataSet
                });
              }
            }
          }
        }
      }
    }
  };

  Pie3DDataset.prototype._parsePie3DOptions = function _parsePie3DOptions() {
    var dataSet = this,
        conf = dataSet.config;
    return {
      size: 2 * conf.pieMinRadius,
      slicedOffset: conf.slicingDistance,
      allowPointSelect: true,
      cursor: POINTER,
      innerSize: dataSet.type === 'pie3d' ? 0 : _doughnut2d._getInnerSize.call(dataSet)
    };
  };
  // Some border properties of PIE3D varies from that of its 2d counter part


  Pie3DDataset.prototype._parseBorderConfig = function _parseBorderConfig(setColor, setAlpha, dataJSON) {
    var dataSet = this,
        conf = dataSet.config,
        pieBorderColor = conf.pieBorderColor,
        chartAttr = dataSet.getFromEnv('chart-attrib'),

    // each slice border color
    setPlotBorderColor = (0, _lib.pluck)(dataJSON.bordercolor, pieBorderColor),

    // each slice border alpha
    setPlotBorderAlpha = (0, _lib.pluck)(dataJSON.borderalpha, chartAttr.plotborderalpha, chartAttr.pieborderalpha);

    setPlotBorderColor = (0, _lib.pluck)(setPlotBorderColor, getLightColor(setColor, 90)).split(COMMASTRING)[0];
    setPlotBorderAlpha = chartAttr.showplotborder == _lib.ZEROSTRING ? _lib.ZEROSTRING : (0, _lib.pluck)(setPlotBorderAlpha, setAlpha, '80');
    return {
      setPlotBorderColor: setPlotBorderColor,
      setPlotBorderAlpha: setPlotBorderAlpha
    };
  };
  // Initialising the pie3D manager class.


  Pie3DDataset.prototype._initPie3dManager = function _initPie3dManager() {
    var i,
        point,
        dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        precision = 1000,
        total = 0,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        dataLabelOptions = dataSetConfig.dataLabelOptions,
        pie3DOptions = dataSetConfig.pie3DOptions = dataSet._parsePie3DOptions(),
        startingAngle = (0, _lib.pluck)(dataSetConfig.startAngle, 0) % pi2,
        fontSize,
        managedPieSliceDepth = dataSetConfig.managedPieSliceDepth,
        slicedOffset = dataSetConfig.slicedOffset = pie3DOptions.slicedOffset,
        plotWidth = chartConfig.canvasWidth,
        plotHeight = chartConfig.canvasHeight,
        positions = [chartConfig.canvasLeft + plotWidth * 0.5, chartConfig.canvasTop + plotHeight * 0.5 - managedPieSliceDepth * 0.5],
        start,
        pointConfig,
        end,
        angle,
        lastEnd,
        maxEnd,
        data = dataSetComponents.data,
        fraction,
        smallestSize = mathMin(plotWidth, plotHeight),
        isPercent,
        radiusX,
        // the x component of the radius vector for a given point
    radiusY,
        labelDistance = dataLabelOptions.distance,
        pieYScale = dataSetConfig.pieYScale,
        slicedOffsetY = dataSetConfig.slicedOffsetY || (dataSetConfig.slicedOffsetY = slicedOffset * dataSetConfig.pieYScale),
        pie3DManager = dataSet.getFromEnv('pie3DManager');

    // get positions - either an integer or a percentage string must be given
    positions.push(2 * dataSetConfig.pieMinRadius, pie3DOptions.innerSize || 0);

    positions = map(positions, function (length, i) {
      isPercent = /%$/.test(length);
      return isPercent ?
      // i == 0: centerX, relative to width
      // i == 1: centerY, relative to height
      // i == 2: size, relative to smallestSize
      // i == 4: innerSize, relative to smallestSize
      [plotWidth, plotHeight - managedPieSliceDepth, smallestSize, smallestSize][i] * pInt(length) / 100 : length;
    });

    // convert all diameter into radius
    positions[2] /= 2;
    positions[3] /= 2;
    // Add the ry
    positions.push(positions[2] * pieYScale);
    // centerRadiusX
    positions.push((positions[2] + positions[3]) / 2);
    // centerRadiusY
    positions.push(positions[5] * pieYScale);

    // utility for getting the x value from a given y, used for anticollision logic in data labels
    dataSet.getX = function (y, left) {
      angle = math.asin((y - positions[1]) / (positions[2] + labelDistance));

      return positions[0] + (left ? -1 : 1) * (mathCos(angle) * (positions[2] + labelDistance));
    };

    // set center for later use
    dataSetConfig.center = positions;

    // get the total sum
    (0, _lib.fcEach)(data, function (point) {
      total += point.config.y;
    });

    dataSetConfig.labelsRadius = positions[2] + labelDistance;
    dataSetConfig.labelsRadiusY = dataSetConfig.labelsRadius * pieYScale;
    dataSetConfig.quadrantHeight = (plotHeight - managedPieSliceDepth) / 2;
    dataSetConfig.quadrantWidth = plotWidth / 2;

    lastEnd = startingAngle;

    lastEnd = mathRound(lastEnd * precision) / precision;
    maxEnd = lastEnd + pi2;

    fontSize = (0, _lib.pluckNumber)(parseInt(dataLabelOptions.style.fontSize, 10), 10) + 4; // 2px padding
    dataSetConfig.maxLabels = mathFloor(dataSetConfig.quadrantHeight / fontSize); // max labels per quarter
    dataSetConfig.labelFontSize = fontSize;
    dataSetConfig.connectorPadding = (0, _lib.pluckNumber)(dataLabelOptions.connectorPadding, 5);
    dataSetConfig.isSmartLineSlanted = (0, _lib.pluck)(dataLabelOptions.isSmartLineSlanted, true);
    dataSetConfig.connectorWidth = (0, _lib.pluckNumber)(dataLabelOptions.connectorWidth, 1);
    dataSetConfig.enableSmartLabels = dataLabelOptions.enableSmartLabels;
    if (!pie3DManager) {
      pie3DManager = new Pie3DManager(chart);
      dataSet.attachChild(pie3DManager, 'pie3DManager', false);
      dataSet.addToEnv('pie3DManager', pie3DManager);
      // enabling the tooltip options for slices as it is the parent group being used by the pie3dmanager
      chart.getChildContainer().datalabelsGroup.trackTooltip(true);
    }
    dataSet._configurePie3DManager();

    // each (data, function (point) {
    for (i = data.length - 1; i >= 0; i -= 1) {
      point = data[i];
      pointConfig = point.config;
      // set start and end angle
      start = lastEnd;
      fraction = total ? pointConfig.y / total : 0;

      lastEnd = mathRound((lastEnd + fraction * pi2) * precision) / precision;
      if (lastEnd > maxEnd) {
        lastEnd = maxEnd;
      }
      end = lastEnd;

      // set the shape
      pointConfig.shapeArgs = {
        sAngle: mathRound(start * precision) / precision,
        eAngle: mathRound(end * precision) / precision
      };

      // center for the sliced out slice
      pointConfig.centerAngle = angle = (end + start) / 2 % pi2;
      // TODO: slicedTranslation is implemented as string
      pointConfig.slicedTranslation = [mathRound(mathCos(angle) * slicedOffset), mathRound(mathSin(angle) * slicedOffsetY)];

      // set the anchor point for tooltips
      radiusX = mathCos(angle) * positions[2];
      dataSetConfig.radiusY = radiusY = mathSin(angle) * positions[4];
      pointConfig.tooltipPos = [positions[0] + radiusX * 0.7, positions[1] + radiusY // changed to reducr mouce on tooltip condition
      ];

      // API properties
      pointConfig.percentage = fraction * 100;
      pointConfig.total = total;
    }
  };

  Pie3DDataset.prototype._configurePie3DManager = function _configurePie3DManager() {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        data = dataSetComponents.data;

    if (pie3DManager) {
      pie3DManager.configure(dataSetConfig.pieSliceDepth, data.length === 1, dataSetConfig.use3DLighting, false);
    }
  };

  Pie3DDataset.prototype.allocatePosition = function allocatePosition() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        dataSetConfig = dataset.config,
        plotData = dataset.components.data,
        i,
        precision = 1000,
        dataObj,
        startingAngle = (0, _lib.pluck)(dataSetConfig.startAngle, 0) % pi2,
        lastEnd = startingAngle,
        start,
        end,
        point,
        fraction,
        isPercent,
        pie3DOptions = dataSetConfig.pie3DOptions = dataset._parsePie3DOptions(),
        pieYScale = dataSetConfig.pieYScale,
        managedPieSliceDepth = dataSetConfig.managedPieSliceDepth,
        plotWidth = chartConfig.canvasWidth,
        plotHeight = chartConfig.canvasHeight,
        smallestSize = mathMin(plotWidth, plotHeight),
        positions = [chartConfig.canvasLeft + plotWidth * 0.5, chartConfig.canvasTop + plotHeight * 0.5 - managedPieSliceDepth * 0.5],
        total = 0,
        maxEnd,
        len = plotData.length;

    // get positions - either an integer or a percentage string must be given
    positions.push(2 * dataSetConfig.pieMinRadius, pie3DOptions.innerSize || 0);

    positions = map(positions, function (length, i) {
      isPercent = /%$/.test(length);
      return isPercent ?
      // i == 0: centerX, relative to width
      // i == 1: centerY, relative to height
      // i == 2: size, relative to smallestSize
      // i == 4: innerSize, relative to smallestSize
      [plotWidth, plotHeight - managedPieSliceDepth, smallestSize, smallestSize][i] * pInt(length) / 100 : length;
    });

    // convert all diameter into radius
    positions[2] /= 2;
    positions[3] /= 2;
    // Add the ry
    positions.push(positions[2] * pieYScale);
    // centerRadiusX
    positions.push((positions[2] + positions[3]) / 2);
    // centerRadiusY
    positions.push(positions[5] * pieYScale);

    dataSetConfig.center = positions;
    // get the total sum
    (0, _lib.fcEach)(plotData, function (point) {
      total += point.config.y;
    });
    lastEnd = mathRound(lastEnd * precision) / precision;
    maxEnd = lastEnd + pi2;
    for (i = plotData.length - 1; i >= 0; i -= 1) {
      point = plotData[i];
      start = lastEnd;
      fraction = total ? point.config.y / total : 0;

      lastEnd = mathRound((lastEnd + fraction * pi2) * precision) / precision;
      if (lastEnd > maxEnd) {
        lastEnd = maxEnd;
      }
      end = lastEnd;

      // set the shape
      point.config.shapeArgs = {
        sAngle: mathRound(start * precision) / precision,
        eAngle: mathRound(end * precision) / precision
      };
    }

    for (i = 0; i < len; i++) {
      dataObj = plotData[i];
      dataset.parsePlotAttributes(dataObj, i);
      dataset.parseLabelAttributes(dataObj, i);
    }
  };

  Pie3DDataset.prototype.parsePlotAttributes = function parsePlotAttributes(set, index) {
    var positions,
        pieYScale,
        dataSet = this,
        dataSetComponents = dataSet.components,
        dataSetConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        plotData = dataSetComponents.data,
        dataLabelOptions = dataSetConfig.dataLabelOptions,
        style = dataLabelOptions.style,
        slicedOffset = dataSetConfig.slicingDistance,
        slicedOffsetY = dataSetConfig.slicedOffsetY || (dataSetConfig.slicedOffsetY = slicedOffset * dataSetConfig.pieYScale),
        enableRotation = !!dataSetConfig.enableRotation,
        showBorderEffect = dataSetConfig.showBorderEffect,
        dataLength = plotData.length,
        colorLabelFromPoint = dataSetConfig.usePerPointLabelColor,
        textDirection = chartConfig.textDirection,
        eventArgs,
        plotItem,
        val,
        displayValue,
        setLink,
        sliced,
        isHot,
        angle,
        connectorWidth,
        shapeArgs,
        toolText,
        setConfig,
        dataLabel,
        connector,
        i = index,
        isTranspose,
        _textAttrs,
        _textCss,
        setElAttr,
        connectorAttr,
        setElCosmetics = {},
        prevPositions,
        dataLabelStyle = chartConfig.dataLabelStyle;

    positions = dataSetConfig.center;
    prevPositions = dataSetConfig.prevPositions || positions;
    pieYScale = dataSetConfig.pieYScale;
    setConfig = set.config;
    if (!(_textAttrs = setConfig._textAttrs)) {
      _textAttrs = setConfig._textAttrs = {};
    }

    val = setConfig.y;
    displayValue = setConfig.displayValue;
    sliced = setConfig.sliced;
    shapeArgs = setConfig.shapeArgs;
    angle = setConfig.centerAngle;
    toolText = setConfig.toolText;
    setLink = !!setConfig.link;
    style = setConfig.style;
    isHot = setLink || enableRotation || !setConfig.doNotSlice;

    if (val === null || val === UNDEF) {
      // todo: update null data.
      return;
    }

    setElAttr = {
      sAngle: shapeArgs.sAngle,
      eAngle: shapeArgs.eAngle,
      r: !isTranspose ? positions[2] : prevPositions[2],
      innerR: !isTranspose ? positions[3] : prevPositions[3],
      cx: !isTranspose ? positions[0] : prevPositions[0],
      cy: !isTranspose ? positions[1] : prevPositions[1],
      radiusYFactor: pieYScale,
      opacity: 1
    };

    if (displayValue !== UNDEF) {
      // If data label cosmetics exists.
      if (style) {
        if (!(_textCss = setConfig._textCss)) {
          _textCss = setConfig._textCss = {};
        }
        _textCss.fontFamily = style.fontFamily;
        _textCss.fontSize = style.fontSize;
        _textCss.lineHeight = style.lineHeight;
        _textCss.fontWeight = style.fontWeight;
        _textCss.fontStyle = style.fontStyle;
      } else if (setConfig._textCss) {
        /* If there was a perviously applied cosmetics for a data Object, need to restore the chart
        Label styling to it. */
        dataLabel && dataLabel.removeCSS();
        delete setConfig._textCss;
        _textCss = UNDEF;
      }

      setConfig.style = style || (style = dataLabelStyle);
      _textAttrs.text = displayValue;
      _textAttrs.fill = (colorLabelFromPoint ? (0, _lib.toRaphaelColor)(setConfig.color) : style.color) || '#000000';
      _textAttrs['text-bound'] = [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash];
      _textAttrs.direction = textDirection;
      _textAttrs.lineHeight = style.lineHeight;

      if (!dataLabel) {
        _textAttrs.ishot = isHot;
      } else {
        if (_textCss) {
          delete _textCss.fontFamily;
          delete _textCss.fontSize;
          delete _textCss.lineHeight;
          delete _textCss.fontWeight;
          delete _textCss.fontStyle;
          _textCss = UNDEF;
        }

        delete _textAttrs.ishot;
      }
      if (dataLabelOptions.distance > 0 && (connectorWidth = dataLabelOptions.connectorWidth) && dataLabelOptions.enableSmartLabels) {
        connectorAttr = {
          'stroke-width': connectorWidth,
          stroke: dataLabelOptions.connectorColor || '#606060',
          cursor: setLink ? POINTER : '',
          opacity: 1,
          ishot: isHot
        };
      }
    }

    setConfig.plotItem = plotItem = {
      chart: chart,
      index: i,
      seriesData: dataSetConfig,
      value: val,
      angle: setConfig.angle = angle,
      link: setConfig.link,
      shapeArgs: shapeArgs,
      slicedX: sliced && !dataSetConfig.singletonCase ? mathCos(angle) * slicedOffset : 0,
      slicedY: sliced && !dataSetConfig.singletonCase ? mathSin(angle) * slicedOffsetY : 0,
      sliced: sliced,
      labelText: displayValue,
      name: setConfig.name,
      percentage: setConfig.percentage,
      toolText: toolText,
      originalIndex: dataLength - i - 1,
      style: setConfig.style,
      // graphic: setElement,
      transX: setConfig.transX = mathCos(angle) * slicedOffset,
      transY: setConfig.transY = mathSin(angle) * slicedOffsetY,
      slicedTranslation: setConfig.slicedTranslation = 't' + setConfig.transX + ',' + setConfig.transY,
      label: dataLabel,
      connector: connector
    };

    setConfig.eventArgs = eventArgs = {
      index: dataSetConfig.reversePlotOrder ? i : dataLength - 1 - i,
      link: setConfig.link,
      value: setConfig.y,
      displayValue: setConfig.displayValueArgs,
      categoryLabel: setConfig.categoryLabel,
      isSliced: setConfig.sliced,
      toolText: setConfig.toolText
    };

    setElCosmetics = {
      color: setConfig.color.color.split(',')[0],
      alpha: setConfig._3dAlpha,
      borderWidth: setConfig.borderWidth,
      borderColor: setConfig.borderColor,
      borderAlpha: setConfig.borderConfig.setPlotBorderAlpha
    };

    (0, _lib.extend2)(setElAttr, setElCosmetics);

    setElAttr.cursor = setLink ? POINTER : '';
    setElAttr.showBorderEffect = showBorderEffect;

    setElAttr.transform = 't' + plotItem.slicedX + ',' + plotItem.slicedY;
    _textAttrs.plotItem = plotItem;
    _textAttrs[EVENTARGS] = eventArgs;

    setConfig.props = {
      element: {
        attr: setElAttr
      },
      connector: {
        attr: connectorAttr
      },
      label: {
        attr: _textAttrs,
        css: _textCss
      }
    };
  };

  Pie3DDataset.prototype.draw = function draw() {
    var positions,
        pieYScale,
        dataSet = this,
        dataSetComponents = dataSet.components,
        dataSetConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        animationManager = chart.getFromEnv('animationManager'),

    // state,
    plotData = dataSetComponents.data,
        pie3DManager,
        dataLabelOptions = dataSetConfig.dataLabelOptions,
        style = dataLabelOptions.style,
        slicedOffset = dataSetConfig.slicingDistance,
        slicedOffsetY = dataSetConfig.slicedOffsetY || (dataSetConfig.slicedOffsetY = slicedOffset * dataSetConfig.pieYScale),
        enableRotation = !!dataSetConfig.enableRotation,
        showBorderEffect = dataSetConfig.showBorderEffect,
        dataLength = plotData.length,
        colorLabelFromPoint = dataSetConfig.usePerPointLabelColor,
        textDirection = chartConfig.textDirection,
        eventArgs,
        plotItem,
        set,
        val,
        valueTotal = dataSetConfig.valueTotal,
        displayValue,
        setLink,
        sliced,
        isHot,
        angle,
        connectorWidth,
        shapeArgs,
        toolText,
        setConfig,
        setGraphics,
        dataLabel,
        removeDataArr = dataSetComponents.removeDataArr || [],
        connector,
        visible = dataSet.getState('visible'),
        i,

    // callBackCalled = false,
    // datasetGraphics = dataSet.graphics,
    // dataLabelContainer = datasetGraphics.dataLabelContainer,
    dataLabelContainer = dataSet.getContainer('labelGroup'),
        plotGroup,
        isTranspose,
        setElement,
        _textAttrs,
        _textCss,
        setElAttr,
        connectorAttr,
        isnewElem,
        element,
        sliceElements,
        setElCosmetics = {},
        prevPositions,
        toolTipController = dataSet.getFromEnv('toolTipController'),
        showDataLabels = function showDataLabels() {
      dataLabelContainer.show();
      dataSet.placeDataLabels(false);
    },
        dataLabelStyle = chartConfig.dataLabelStyle;

    if (!dataSet.getContainer('pie-groups')) {
      dataSet._createContainer();
    }
    dataLabelContainer = dataSet.getContainer('label-group');
    plotGroup = dataSet.getContainer('plot-group');

    animationManager.setAnimation({
      el: dataLabelContainer,
      attr: { css: dataLabelStyle },
      component: dataSet,
      label: 'labelcontainer',
      callback: function callback() {
        // hide all groups if dataset is not visible.
        if (!visible || !valueTotal) {
          dataLabelContainer.hide();
          plotGroup.hide();
        } else {
          dataLabelContainer.show();
          plotGroup.show();
        }
      }
    });

    // does the initialising tasks and calculations before the actual rendering.
    dataSet._initPie3dManager();
    pie3DManager = dataSet.getFromEnv('pie3DManager');
    // Remove extra plots
    removeDataArr.length && dataSet.remove();

    positions = dataSetConfig.center;
    prevPositions = dataSetConfig.prevPositions || positions;
    pieYScale = dataSetConfig.pieYScale;

    // Spare the world if no data has been sent
    if (!(plotData && dataLength)) {
      plotData = [];
    }

    i = -1;
    while (++i < dataLength) {
      set = plotData[i];
      setConfig = set.config;
      if (!(_textAttrs = setConfig._textAttrs)) {
        _textAttrs = setConfig._textAttrs = {};
      }

      setGraphics = set.graphics;
      val = setConfig.y;
      displayValue = setConfig.displayValue;
      sliced = setConfig.sliced;
      shapeArgs = setConfig.shapeArgs;
      angle = setConfig.centerAngle;
      toolText = setConfig.toolText;
      setLink = !!setConfig.link;
      style = setConfig.style;
      isHot = setLink || enableRotation || !setConfig.doNotSlice;

      if (val === null || val === UNDEF) {
        // todo: update null data.
        continue;
      }

      setElement = setGraphics.element;
      dataLabel = setGraphics.label;
      connector = setGraphics.connector;
      setElAttr = {
        sAngle: shapeArgs.sAngle,
        eAngle: shapeArgs.eAngle,
        r: !isTranspose ? positions[2] : prevPositions[2],
        innerR: !isTranspose ? positions[3] : prevPositions[3],
        cx: !isTranspose ? positions[0] : prevPositions[0],
        cy: !isTranspose ? positions[1] : prevPositions[1],
        radiusYFactor: pieYScale,
        opacity: 1
      };
      // create the element if not available.
      if (!setElement) {
        isnewElem = true;
        // pick from the pool (maintained by Pie3dManager).
        setElement = setGraphics.element = pie3DManager.useSliceFromPool();
        if (!setElement) {
          setElement = setGraphics.element = pie3DManager.createSlice().drag(plotDragMove, plotDragStart, plotDragEnd).mouseover(plotRollOver).mouseout(plotRollOut).attr({
            ishot: isHot
          });
        }
      } else {
        isnewElem = false;
      }
      if (displayValue !== UNDEF) {
        // If data label cosmetics exists.
        if (style) {
          if (!(_textCss = setConfig._textCss)) {
            _textCss = setConfig._textCss = {};
          }
          _textCss.fontFamily = style.fontFamily;
          _textCss.fontSize = style.fontSize;
          _textCss.lineHeight = style.lineHeight;
          _textCss.fontWeight = style.fontWeight;
          _textCss.fontStyle = style.fontStyle;
        } else if (setConfig._textCss) {
          /* If there was a perviously applied cosmetics for a data Object, need to restore the chart
          Label styling to it. */
          dataLabel && dataLabel.removeCSS();
          delete setConfig._textCss;
          _textCss = UNDEF;
        }

        setConfig.style = style || (style = dataLabelStyle);
        _textAttrs.text = displayValue;
        _textAttrs.fill = (colorLabelFromPoint ? (0, _lib.toRaphaelColor)(setConfig.color) : style.color) || '#000000';
        _textAttrs['text-bound'] = [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash];
        _textAttrs.direction = textDirection;
        _textAttrs.lineHeight = style.lineHeight;

        if (!dataLabel) {
          _textAttrs.ishot = isHot;
        } else {
          if (_textCss) {
            animationManager.setAnimation({
              el: dataLabel,
              attr: { css: _textCss },
              component: dataSet
            });
            delete _textCss.fontFamily;
            delete _textCss.fontSize;
            delete _textCss.lineHeight;
            delete _textCss.fontWeight;
            delete _textCss.fontStyle;
            _textCss = UNDEF;
          }

          delete _textAttrs.ishot;
        }
        if (dataLabelOptions.distance > 0 && (connectorWidth = dataLabelOptions.connectorWidth) && dataLabelOptions.enableSmartLabels) {
          connectorAttr = {
            'stroke-width': connectorWidth,
            stroke: dataLabelOptions.connectorColor || '#606060',
            cursor: setLink ? POINTER : '',
            opacity: 1,
            ishot: isHot
            // path: 'M 0 0 l 0 0'
          };
          dataLabelContainer.show();
          connector = setGraphics.connector = animationManager.setAnimation({
            el: setGraphics.connector || 'path',
            attr: connectorAttr,
            container: dataLabelContainer,
            label: 'connector',
            component: dataSet
          }).show().on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).hover('plotRollOver', plotRollOver);
        }
      }

      // --when all values of the dataplots are 0--
      if (!valueTotal) {
        dataLabel && dataLabel.hide();
        connector && connector.hide();
      } else {
        dataLabel && dataLabel.show();
        connector && connector.show();
      }

      plotItem = {
        chart: chart,
        index: i,
        seriesData: dataSetConfig,
        value: val,
        angle: setConfig.angle = angle,
        link: setConfig.link,
        shapeArgs: shapeArgs,
        slicedX: sliced && !dataSetConfig.singletonCase ? mathCos(angle) * slicedOffset : 0,
        slicedY: sliced && !dataSetConfig.singletonCase ? mathSin(angle) * slicedOffsetY : 0,
        sliced: sliced,
        labelText: displayValue,
        name: setConfig.name,
        percentage: setConfig.percentage,
        toolText: toolText,
        originalIndex: dataLength - i - 1,
        style: setConfig.style,
        graphic: setElement,
        transX: setConfig.transX = mathCos(angle) * slicedOffset,
        transY: setConfig.transY = mathSin(angle) * slicedOffsetY,
        slicedTranslation: setConfig.slicedTranslation = 't' + setConfig.transX + ',' + setConfig.transY,
        label: dataLabel,
        connector: connector
      };

      eventArgs = {
        index: dataSetConfig.reversePlotOrder ? i : dataLength - 1 - i,
        link: setConfig.link,
        value: setConfig.y,
        displayValue: setConfig.displayValueArgs,
        categoryLabel: setConfig.categoryLabel,
        isSliced: setConfig.sliced,
        toolText: setConfig.toolText
      };

      setElCosmetics = {
        color: setConfig.color.color.split(',')[0],
        alpha: setConfig._3dAlpha,
        borderWidth: setConfig.borderWidth,
        borderColor: setConfig.borderColor,
        borderAlpha: setConfig.borderConfig.setPlotBorderAlpha
      };

      if (isnewElem) {
        (0, _lib.extend2)(setElAttr, setElCosmetics);
      }

      setElement.data(GROUPID, i).data('plotItem', plotItem).data(EVENTARGS, eventArgs);

      setElement.data(GROUPID, i).data('plotItem', plotItem).data(EVENTARGS, eventArgs);

      setElAttr.cursor = setLink ? POINTER : '';
      setElAttr.showBorderEffect = showBorderEffect;

      toolTipController.enableToolTip(setElement, toolText);
      sliceElements = setElement._confObject.elements;
      for (element in sliceElements) {
        toolTipController.enableToolTip(sliceElements[element], toolText);
      }
      setElAttr.transform = 't' + plotItem.slicedX + ',' + plotItem.slicedY;
      _textAttrs.plotItem = plotItem;
      _textAttrs[EVENTARGS] = eventArgs;

      animationManager.setAnimation({
        el: setElement,
        attr: setElAttr,
        component: dataSet,
        label: 'slice',
        state: isnewElem ? 'appearing' : 'updating'
      });

      connector && connector.data('plotItem', plotItem).data(EVENTARGS, eventArgs);
    }

    showDataLabels();
    // Marking dataSet drawn
    dataSet.drawn = true;
    // Savinf prev positions
    dataSetConfig.prevPositions = positions.slice(0);
  };

  Pie3DDataset.prototype.remove = function remove() {
    var dataSet = this,
        conf = dataSet.config,
        components = dataSet.components,
        animationManager = dataSet.getFromEnv('animationManager'),
        removeDataArr = components.removeDataArr || [],
        pool = dataSet.pool = dataSet.pool = [],
        len = removeDataArr.length,
        pie3DManager = this.getFromEnv('pie3DManager'),
        removeData,
        ele,
        graphics,
        i,
        elem,
        hideFn = function hideFn(graphic, type) {
      return function () {
        if (type === elementStr) {
          pie3DManager.removeSlice(graphic.element);
          delete graphic.element;
        } else {
          graphic[type].hide();
        }
      };
    },
        startAngle = conf.startAngle,
        positions = conf.center;
    for (i = 0; i < len; i++) {
      removeData = removeDataArr[0];
      graphics = removeData.graphics;
      for (ele in graphics) {
        elem = graphics[ele];
        if (!pool[ele]) {
          pool[ele] = [];
        }
        if (ele === elementStr) {
          animationManager.setAnimation({
            el: elem,
            attr: {
              sAngle: -startAngle,
              eAngle: -startAngle + 0.01,
              r: positions[2],
              innerR: positions[3],
              cx: positions[0],
              cy: positions[1]
            },
            component: dataSet,
            callback: hideFn(graphics, ele)
          });
        } else {
          animationManager.setAnimation({
            el: elem,
            attr: {
              opacity: 0
            },
            component: dataSet,
            callback: hideFn(graphics, ele)
          });
        }
      }
      removeDataArr.splice(0, 1);
    }
  };

  Pie3DDataset.prototype._rotate = function _rotate(setAngle) {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        animationManager = dataSet.getFromEnv('animationManager'),
        dataSetComponents = dataSet.components,
        data = dataSetComponents.data,
        slicedOffset = dataSetConfig.slicedOffset,
        slicedOffsetY = dataSetConfig.slicedOffsetY,
        startingAngle = dataSetConfig.startAngle,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        angle;

    setAngle = !isNaN(setAngle) ? setAngle : -dataSetConfig._lastAngle;

    angle = (setAngle - startingAngle) % 360;

    dataSetConfig.startAngle = (0, _lib.pluckNumber)(setAngle, dataSetConfig.startAngle) % 360;

    angle = -(angle * pi) / 180;

    if (pie3DManager) {
      pie3DManager.rotate(angle);
    }

    (0, _lib.fcEach)(data, function (point) {
      var slicedTranslation = [],
          pointGraphics = point.graphics,
          pointConfig = point.config,
          element = pointGraphics.element,
          args = pointConfig.shapeArgs,
          newAngleArgs = {
        sAngle: args.sAngle += angle,
        eAngle: args.eAngle += angle
      },
          pointAngle = pointConfig.angle = (0, _lib.normalizeAngle)((newAngleArgs.sAngle + newAngleArgs.eAngle) / 2),
          sliced = pointConfig.sliced,
          cosAngle = mathCos(pointAngle),
          sinAngle = mathSin(pointAngle);

      // set the  slicedTranslation
      slicedTranslation = pointConfig.slicedTranslation = [mathRound(cosAngle * slicedOffset), mathRound(sinAngle * slicedOffsetY)];

      pointConfig.transX = slicedTranslation[0];
      pointConfig.transY = slicedTranslation[1];
      pointConfig.slicedX = sliced ? mathCos(angle) * slicedOffset : 0;
      pointConfig.slicedY = sliced ? mathSin(angle) * slicedOffsetY : 0;

      if (element && sliced) {
        animationManager.setAnimation({
          el: element,
          attr: { transform: 't' + slicedTranslation[0] + ',' + slicedTranslation[1] },
          component: dataSet
        });
      }
    });

    dataSet.placeDataLabels(true, data);
  };

  Pie3DDataset.prototype.foldingFn = function foldingFn() {
    var conf = this.config,
        startAngle = conf.startAngle;
    return {
      sAngle: -startAngle,
      eAngle: -startAngle + 0.01
    };
  };
  /**
   * Returns the type of the component
   * @return {string} type of component
   */


  Pie3DDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Returns the name of the component
   * @return {string} name of component
   */


  Pie3DDataset.prototype.getName = function getName() {
    return 'pie3d';
  };

  return Pie3DDataset;
}(_pie2d2['default']);

// **** pie3d manager ***** //
// set the new animatable properites


if (Raphael._availableAnimAttrs && Raphael._availableAnimAttrs.cx) {
  // assuming that cx is also numaric type
  Raphael._availableAnimAttrs.innerR = Raphael._availableAnimAttrs.depth = Raphael._availableAnimAttrs.radiusYFactor = Raphael._availableAnimAttrs.sAngle = Raphael._availableAnimAttrs.eAngle = Raphael._availableAnimAttrs.cx;
}

// Pie 3D point class

var Pie3DManager = function (_ComponentInterface) {
  _inherits(Pie3DManager, _ComponentInterface);

  function Pie3DManager(chart) {
    _classCallCheck(this, Pie3DManager);

    var _this2 = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    var manager = _this2;
    manager.config = {};
    manager.linkedItems = {
      chart: chart
    };
    return _this2;
  }
  /**
   * Returns the type of the component
   * @return {string} type of component
   */


  Pie3DManager.prototype.getType = function getType() {
    return 'pie3DManager';
  };
  /**
   * Returns the name of the component
   * @return {string} name of component
   */


  Pie3DManager.prototype.getName = function getName() {
    return 'pie3d';
  };
  /**
   * This function create a new 3d slice and return that for futher use
   * @return {slice} an raphael like composite object that can be used as a slice element
   * TODO: update slice color depending upon angle
   * TODO: For proper z-index create 2 back outer element for larger (>180 deg) slices
   * TODO: Optimize ***** the element creation, instead of outer1, back and from for all elements,
   * create few extra element per manager, which will act as outer1, back / front (inner / outer wall) for
   *  slices, who has both. Because, at max 1 slice can have outer1 and only 2 slice can have
   *   back and front both
   */


  Pie3DManager.prototype.createSlice = function createSlice() {
    var manager = this,
        renderer = manager.renderer,
        returnElement = void 0,
        confObject = {
      elements: {},
      Pie3DManager: manager
    },
        slicingWallsArr = manager.slicingWallsArr,
        elements = confObject.elements,
        renderingPath = _lib.hasSVG ? 'litepath' : 'path';

    // create elements
    returnElement = renderer[renderingPath](manager.getContainer('topGroup'));
    // store the _confObject reference
    returnElement._confObject = confObject;
    confObject.thisElement = returnElement;

    // modify few core function

    returnElement._destroy = returnElement.destroy;
    returnElement.destroy = destroyFN;

    returnElement._show = returnElement.show;
    returnElement.show = showFN;

    returnElement._hide = returnElement.hide;
    returnElement.hide = hideFN;

    returnElement._on = returnElement.on;
    returnElement.on = onFN;

    returnElement._drag = returnElement.drag;
    returnElement.drag = onDragFN;

    returnElement._attr = returnElement.attr;
    returnElement.attr = attrFN;

    returnElement._tooltip = returnElement.tooltip;
    returnElement.tooltip = tooltipFN;

    returnElement._data = returnElement.data;
    returnElement.data = dataFN;

    // add the element to the store
    manager.pointElemStore.push(returnElement);

    elements.topBorder = renderer[renderingPath](manager.getContainer('topGroup'));
    elements.bottom = renderer[renderingPath](manager.getContainer('bottomBorderGroup')).attr({
      'stroke-width': 0
    });
    elements.bottomBorder = renderer[renderingPath](manager.getContainer('bottomBorderGroup'));
    elements.frontOuter = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup')).attr({
      'stroke-width': 0
    });
    elements.backOuter = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup')).attr({
      'stroke-width': 0
    });
    elements.startSlice = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup'));
    elements.endSlice = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup'));
    elements.frontOuter1 = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup')).attr({
      'stroke-width': 0
    });

    // update config object for proper z order
    elements.frontOuter._conf = {
      si: si,
      isStart: 0.5
    };
    elements.frontOuter1._conf = {
      si: si,
      isStart: 0.5
    };
    elements.startSlice._conf = {
      si: si,
      isStart: 0
    };
    elements.endSlice._conf = {
      si: si,
      isStart: 1
    };
    elements.backOuter._conf = {
      si: si,
      isStart: 0.4
    };
    slicingWallsArr.push(elements.startSlice, elements.frontOuter1, elements.frontOuter, elements.backOuter, elements.endSlice);
    if (manager.isDoughnut) {
      // innerFront
      elements.frontInner = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup')).attr({
        'stroke-width': 0
      });
      elements.backInner = renderer[renderingPath](manager.getContainer('slicingWallsFrontGroup')).attr({
        'stroke-width': 0
      });

      elements.backInner._conf = {
        si: si,
        isStart: 0.5
      };

      elements.frontInner._conf = {
        si: si,
        isStart: 0.4
      };
      slicingWallsArr.push(elements.frontInner, elements.backInner);
    }

    si += 1;
    return returnElement;
  };

  Pie3DManager.prototype.refreshDrawing = function refreshDrawing() {
    var slicingWallsArr = this.slicingWallsArr,
        x = 0,
        sWall = void 0,
        ln = slicingWallsArr.length,
        startIndex = void 0,
        lastElem2 = void 0,
        lastElem3 = void 0,
        index = void 0,
        frontGroup = this.getContainer('slicingWallsFrontGroup'),
        backGroup = this.getContainer('slicingWallsBackGroup');

    // sort the slicing walls for z-placing
    slicingWallsArr.sort(elementZSortFn);
    // find the index which cross the pi line
    startIndex = getStartIndex(slicingWallsArr);

    for (; x < ln; x += 1, startIndex += 1) {
      if (startIndex === ln) {
        startIndex = 0;
      }
      sWall = slicingWallsArr[startIndex];
      index = sWall._conf.index;
      if (index < piBy2) {
        frontGroup.appendChild(sWall);
      } else if (index <= pi) {
        if (lastElem2) {
          sWall.insertBefore(lastElem2);
        } else {
          frontGroup.appendChild(sWall);
        }
        lastElem2 = sWall;
      } else if (index <= pi3By2) {
        if (lastElem3) {
          sWall.insertBefore(lastElem3);
        } else {
          backGroup.appendChild(sWall);
        }
        lastElem3 = sWall;
      } else {
        backGroup.appendChild(sWall);
      }
    }
  };

  Pie3DManager.prototype.configure = function configure(depth, hasOnePoint, use3DLighting, isDoughnut) {
    var manager = this,
        dataSet = manager.getLinkedParent(),
        renderer = manager.getFromEnv('paper'),
        seriesGroup = dataSet.getContainer('plot-group');
    if (isObject(depth)) {
      depth = depth.depth;
      hasOnePoint = depth.hasOnePoint;
      use3DLighting = depth.use3DLighting;
      isDoughnut = depth.isDoughnut;
    }
    // @todo: need to have pie to daughnut transpose

    // add the values to the instance
    if (!manager.renderer) {
      manager.renderer = renderer;
    }
    manager.hasOnePoint = hasOnePoint;
    manager.use3DLighting = use3DLighting;
    manager.isDoughnut = isDoughnut;
    manager.depth = depth;

    // create required groups
    // TODO: if required create bottom side group
    !manager.getContainer('bottomBorderGroup') && manager.addContainer('bottomBorderGroup', renderer.group('bottom-border', seriesGroup));

    // @todo: need to have animate with for dept
    manager.getContainer('bottomBorderGroup').attr({
      transform: 't0,' + depth
    });
    !manager.getContainer('slicingWallsBackGroup') && manager.addContainer('slicingWallsBackGroup', renderer.group('slicingWalls-back-Side', seriesGroup));
    !manager.getContainer('slicingWallsFrontGroup') && manager.addContainer('slicingWallsFrontGroup', renderer.group('slicingWalls-front-Side', seriesGroup));
    !manager.getContainer('topGroup') && manager.addContainer('topGroup', renderer.group('top-Side', seriesGroup));

    // if arrays are not availabel the create the m for first time
    !manager.pointElemStore && (manager.pointElemStore = []);
    !manager.slicingWallsArr && (manager.slicingWallsArr = []);

    // few reusable code
    manager.moveCmdArr = [M];
    manager.lineCmdArr = [L];
    manager.closeCmdArr = [Z];

    manager.colorObjs = [];
  };

  Pie3DManager.prototype._parseSliceColor = function _parseSliceColor(color, alpha, pointConf) {
    var manager = this,
        dark1,
        dark2,

    // dark3,
    dark4,
        dark5,
        dark6,
        light1,
        light2,
        light3,
        light4,

    // light5,
    light6,
        alpha1,
        colorStr1,
        colorStr2,
        alphaStr1,
        alphaStr2,
        alphaStr3,
        colorStr3,
        colorStr4,
        colorStr5,
        alphaFactor = 3,
        lighting3D = manager.use3DLighting,
        cacheStore = lighting3D ? pie3DCacheColorStore.lighting3D : pie3DCacheColorStore.lighting2D,
        colorsObj,
        radiusYFactor = pointConf.radiusYFactor,
        cx = pointConf.cx,
        cy = pointConf.cy,
        rx = pointConf.r,
        ry = rx * radiusYFactor,
        innerRx = pointConf.innerR || 0,
        rightX = cx + rx,
        leftX = cx - rx,
        rightInnerX = cx + innerRx,
        leftInnerX = cx - innerRx;
    if (~color.indexOf('rgb')) {
      color = _lib.graphics.rawRGBtoHEX(color);
    }
    alpha = alpha || 100;
    alpha1 = alpha / 2;

    // check in cacheStore
    if (cacheStore[color] && cacheStore[color][alpha]) {
      // if found return the color
      colorsObj = cacheStore[color][alpha];
    } else {
      // create the color components
      if (!cacheStore[color]) {
        cacheStore[color] = {};
      }
      if (!cacheStore[color][alpha]) {
        cacheStore[color][alpha] = {};
      }
      colorsObj = cacheStore[color][alpha];

      if (lighting3D) {
        dark1 = getDarkColor(color, 80);
        dark2 = getDarkColor(color, 75);
        light1 = getLightColor(color, 85);
        light2 = getLightColor(color, 70);
        light3 = getLightColor(color, 40);

        light4 = getLightColor(color, 50);
        // light5 = getLightColor(color, 30);
        light6 = getLightColor(color, 65);
        // dark3 = getDarkColor(color, 85);
        dark4 = getDarkColor(color, 69);
        dark5 = getDarkColor(color, 75);
        dark6 = getDarkColor(color, 95);
      } else {
        alphaFactor = 10;
        dark1 = getDarkColor(color, 90);
        dark2 = getDarkColor(color, 87);
        light1 = getLightColor(color, 93);
        light2 = getLightColor(color, 87);
        light3 = getLightColor(color, 80);

        light6 = light4 = getLightColor(color, 85);
        // light5 = getLightColor(color, 80);
        dark6 = getDarkColor(color, 85);
        // dark3 = dark6;
        dark4 = getDarkColor(color, 75);
        dark5 = getDarkColor(color, 80);
      }
      colorStr1 = dark2 + COMMASTRING + light1 + COMMASTRING + light2 + COMMASTRING + light1 + COMMASTRING + dark2;
      alphaStr1 = alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha;
      colorStr2 = dark2 + COMMASTRING + color + COMMASTRING + light1 + COMMASTRING + color + COMMASTRING + dark2;
      alphaStr2 = alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1;
      colorStr3 = dark2 + COMMASTRING + color + COMMASTRING + light3 + COMMASTRING + color + COMMASTRING + dark2;
      colorStr4 = dark5 + COMMASTRING + light1 + COMMASTRING + light4 + COMMASTRING + light1 + COMMASTRING + dark4;
      colorStr5 = 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF';
      alphaStr3 = 0 + COMMASTRING + alpha1 / alphaFactor + COMMASTRING + alpha / alphaFactor + COMMASTRING + alpha1 / alphaFactor + COMMASTRING + 0;

      if (_lib.hasSVG) {
        colorsObj.top = {
          FCcolor: {
            gradientUnits: 'userSpaceOnUse',
            radialGradient: true,
            color: light6 + COMMASTRING + dark6,
            alpha: alpha + COMMASTRING + alpha,
            ratio: '0,100'
          }
        };
      } else {
        colorsObj.top = {
          FCcolor: {
            gradientUnits: 'objectBoundingBox',
            color: light2 + COMMASTRING + light2 + COMMASTRING + light1 + COMMASTRING + dark2,
            alpha: alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha,
            angle: -72,
            ratio: '0,8,15,77'
          }
        };
      }

      colorsObj.frontOuter = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr4,
          alpha: alphaStr1,
          angle: 0,
          ratio: '0,20,15,15,50'
        }
      };
      colorsObj.backOuter = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr3,
          alpha: alphaStr2,
          angle: 0,
          ratio: '0,62,8,8,22'
        }
      };
      colorsObj.frontInner = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr2,
          alpha: alphaStr2,
          angle: 0,
          ratio: '0,25,5,5,65'
        }
      };
      colorsObj.backInner = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr1,
          alpha: alphaStr1,
          angle: 0,
          ratio: '0,62,8,8,22'
        }
      };
      colorsObj.topBorder = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr5,
          alpha: alphaStr3,
          angle: 0,
          ratio: '0,20,15,15,50'
        }
      };
      colorsObj.topInnerBorder = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr5,
          alpha: alphaStr3,
          angle: 0,
          ratio: '0,50,15,15,20'
        }
      };
      colorsObj.bottom = (0, _lib.toRaphaelColor)(convertColor(color, alpha1));
      /** TODO will be changed w. r. t. angle */
      colorsObj.startSlice = (0, _lib.toRaphaelColor)(convertColor(dark1, alpha));
      colorsObj.endSlice = (0, _lib.toRaphaelColor)(convertColor(dark1, alpha));
    }

    // check if non color attributes match, else apply them
    if (colorsObj.cx !== cx || colorsObj.cy !== cy || colorsObj.rx !== rx || colorsObj.radiusYFactor !== radiusYFactor || colorsObj.innerRx !== innerRx) {
      // appaly positional properties in colors
      if (_lib.hasSVG) {
        colorsObj.top.FCcolor.cx = cx;
        colorsObj.top.FCcolor.cy = cy;
        colorsObj.top.FCcolor.r = rx;
        colorsObj.top.FCcolor.fx = cx - 0.3 * rx;
        colorsObj.top.FCcolor.fy = cy + ry * 1.2;
      }
      colorsObj.topBorder.FCcolor.x1 = colorsObj.backOuter.FCcolor.x1 = colorsObj.frontOuter.FCcolor.x1 = leftX;
      colorsObj.topBorder.FCcolor.x2 = colorsObj.backOuter.FCcolor.x2 = colorsObj.frontOuter.FCcolor.x2 = rightX;
      colorsObj.topInnerBorder.FCcolor.x1 = colorsObj.backInner.FCcolor.x1 = colorsObj.frontInner.FCcolor.x1 = leftInnerX;
      colorsObj.topInnerBorder.FCcolor.x2 = colorsObj.backInner.FCcolor.x2 = colorsObj.frontInner.FCcolor.x2 = rightInnerX;

      // Set positional attributes in color Object
      colorsObj.cx = cx;
      colorsObj.cy = cy;
      colorsObj.rx = rx;
      colorsObj.radiusYFactor = radiusYFactor;
      colorsObj.innerRx = innerRx;
    }

    return colorsObj;
  };

  // eslint-disable-next-line


  Pie3DManager.prototype.allocatePosition = function allocatePosition() {};

  Pie3DManager.prototype.rotate = function rotate(angle) {
    var manager = this,
        pointElemStore = manager.pointElemStore,
        x = 0,
        ln = pointElemStore.length,
        point,
        confObject;
    if (!manager.hasOnePoint) {
      for (; x < ln; x += 1) {
        point = pointElemStore[x];
        confObject = point._confObject;
        confObject.sAngle += angle;
        confObject.eAngle += angle;
        manager._setSliceShape(confObject);
      }
      manager.refreshDrawing();
    }
  };

  Pie3DManager.prototype.removeSlice = function removeSlice(slice) {
    var manager = this,
        pointElemStore = manager.pointElemStore,
        confObject = slice._confObject,
        elements = confObject.elements,
        slicingWallsArr = manager.slicingWallsArr,
        x,
        ln = pointElemStore.length,
        point,
        wallElement;
    // remove the slice from the point store
    for (x = ln - 1; x >= 0; x -= 1) {
      point = pointElemStore[x];
      if (point === slice) {
        pointElemStore.splice(x, 1);
      }
    }
    // remove the side elements from the side wall arr
    ln = slicingWallsArr.length;
    for (x = ln - 1; x >= 0; x -= 1) {
      wallElement = slicingWallsArr[x];
      if (wallElement === elements.startSlice || wallElement === elements.frontOuter1 || wallElement === elements.frontOuter || wallElement === elements.backInner || wallElement === elements.endSlice) {
        slicingWallsArr.splice(x, 1);
      }
    }

    // hide corrosponding elements
    slice.hide && slice.hide();

    // store the element in pool for future reuse
    if (!manager._slicePool) {
      manager._slicePool = [];
    }
    manager._slicePool.push(slice);

    manager.refreshDrawing();
  };

  Pie3DManager.prototype.useSliceFromPool = function useSliceFromPool() {
    var manager = this,
        slicePool = manager._slicePool || (manager._slicePool = []),
        slicingWallsArr = manager.slicingWallsArr,
        newSlice = false,
        elements;
    if (slicePool.length) {
      newSlice = slicePool.shift();
      // restore the element in point store
      manager.pointElemStore.push(newSlice);
      // show the slice
      newSlice.show();
      // push the side walls in to the side wall array
      elements = newSlice._confObject.elements;
      slicingWallsArr.push(elements.startSlice, elements.frontOuter1, elements.frontOuter);

      elements.backInner && slicingWallsArr.push(elements.backInner);
      slicingWallsArr.push(elements.endSlice);
    }
    return newSlice;
  };
  // This function do the z-index management

  // @todo: needs to be optimize


  Pie3DManager.prototype._setSliceShape = function _setSliceShape(pointConf, doNotApply) {
    var Pie3DManager = this,
        getArcPath = function getArcPath(startX, startY, endX, endY, rX, rY, isClockWise, isLargeArc) {
      return startX == endX && startY == endY ? [] : [A, rX, rY, 0, isLargeArc, isClockWise, endX, endY];
    },
        startOri = pointConf.sAngle,
        endOri = pointConf.eAngle,
        start = (0, _lib.normalizeAngle)(startOri),
        end = (0, _lib.normalizeAngle)(endOri),
        scaleAngle,
        startCos,
        startSin,
        endCos,
        endSin,
        startOuterX,
        startOuterY,
        startOuterTopClipX,
        startOuterTopClipY,
        endOuterTopClipX,
        endOuterTopClipY,
        startInnerX,
        startInnerY,
        endInnerX,
        endInnerY,
        startInnerY1,
        endInnerY1,
        borderThickness = 1,
        isDoughnut = Pie3DManager.isDoughnut,
        radiusYFactor = pointConf.radiusYFactor,
        cx = pointConf.cx,
        cy = pointConf.cy,
        rx = pointConf.r,
        ry = rx * radiusYFactor,
        topCliprx = rx + (_lib.hasSVG ? -borderThickness : 2),
        topClipry = ry + (_lib.hasSVG ? -borderThickness : 2),
        innerRx = pointConf.innerR || 0,
        innerRy = innerRx * radiusYFactor,
        depth = Pie3DManager.depth,
        depthY = depth + cy,
        rightX = cx + rx,
        leftX = cx - rx,
        rightInnerX = cx + innerRx,
        leftInnerX = cx - innerRx,
        topY = cy - ry,
        bottomY = depthY + ry,
        clipPathforNoClip = [M, leftInnerX, topY, L, leftInnerX, bottomY, Z],
        elements = pointConf.elements,
        startOuterY1,
        endOuterX,
        endOuterY,
        endOuterY1,
        tempArr1,
        tempArr2,
        tempArr3,
        tempArr4,
        tempArr5,
        tempArr6,
        moveCmdArr,
        lineCmdArr,
        closeCmdArr,
        centerPoint,
        leftPoint,
        topPoint,
        rightPoint,
        bottomPoint,
        leftDepthPoint,
        rightDepthPoint,
        leftInnerPoint,
        rightInnerPoint,
        leftInnerDepthPoint,
        rightInnerDepthPoint,
        pathAttrString = 'path',
        middleAngle = (start + end) / 2,
        // not applicable for the slices that are crossing the 0deg
    frontOuterIndex,
        BackOuterIndex,
        crossed2Pi = start > end;

    startCos = mathCos(start);
    startSin = mathSin(start);
    endCos = mathCos(end);
    endSin = mathSin(end);

    startOuterX = cx + rx * startCos;
    startOuterY = cy + ry * startSin;
    startOuterTopClipX = cx + topCliprx * startCos;
    startOuterTopClipY = cy + topClipry * startSin;
    startOuterY1 = startOuterY + depth;
    endOuterX = cx + rx * endCos;
    endOuterY = cy + ry * endSin;
    endOuterTopClipX = cx + topCliprx * endCos;
    endOuterTopClipY = cy + topClipry * endSin;
    endOuterY1 = endOuterY + depth;

    if (isDoughnut) {
      // doughnut like slice
      startInnerX = cx + innerRx * startCos;
      startInnerY = cy + innerRy * startSin;
      startInnerY1 = startInnerY + depth;
      endInnerX = cx + innerRx * endCos;
      endInnerY = cy + innerRy * endSin;
      endInnerY1 = endInnerY + depth;
      pointConf.startSlice = [M, startOuterX, startOuterY, L, startOuterX, startOuterY1, startInnerX, startInnerY1, startInnerX, startInnerY, Z];
      pointConf.endSlice = [M, endOuterX, endOuterY, L, endOuterX, endOuterY1, endInnerX, endInnerY1, endInnerX, endInnerY, Z];
    } else {
      pointConf.startSlice = [M, startOuterX, startOuterY, L, startOuterX, startOuterY1, cx, depthY, cx, cy, Z];
      pointConf.endSlice = [M, endOuterX, endOuterY, L, endOuterX, endOuterY1, cx, depthY, cx, cy, Z];
    }

    if (_lib.hasSVG) {
      scaleAngle = getAbsScaleAngle(start, end);
      // create the clip for top and bottom
      if (!isDoughnut) {
        pointConf.clipTopPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterX, endOuterY, L, cx, cy, Z]];
      } else {
        pointConf.clipTopPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterX, endOuterY, L, endInnerX, endInnerY, A, innerRx, innerRy, 0, scaleAngle > pi ? 1 : 0, 0, startInnerX, startInnerY, Z]];
      }

      pointConf.clipOuterFrontPath1 = [clipPathforNoClip];

      pointConf.clipTopBorderPath = [[M, startOuterTopClipX, startOuterTopClipY, A, topCliprx, topClipry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterTopClipX, endOuterTopClipY, L, endOuterX, endOuterY, endOuterX, endOuterY + borderThickness, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 0, startOuterX, startOuterY + borderThickness, L, startOuterX, startOuterY, Z]];

      if (startOri != endOri) {
        if (start > end) {
          // crossed the 0 deg line
          if (start < pi) {
            // crossed the 180 deg line also
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterFrontPath1 = [[M, leftX, cy, A, rx, ry, 0, 0, 0, startOuterX, startOuterY, V, depth, A, rx, ry, 0, 0, 1, leftX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, rightX, cy, A, rx, ry, 0, 1, 0, leftX, cy, V, depth, A, rx, ry, 0, 1, 1, rightX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerBackPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 1, 0, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 1, 1, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, rightInnerX, cy + depth, Z, M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY, V, depth, A, innerRx, innerRy, 0, 0, 1, leftInnerX, cy + depth, Z]];
            }
          } else if (end > pi) {
            // crossed the 180 deg line also
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 1, 1, leftX, cy, V, depth, A, rx, ry, 0, 1, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, leftX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, leftX, cy + depth, Z, M, rightX, cy, A, rx, ry, 0, 0, 0, startOuterX, startOuterY, V, depth, A, rx, ry, 0, 0, 1, rightX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 1, 1, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 1, 0, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerBackPath = [[M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, leftInnerX, cy + depth, Z, M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY, V, depth, A, innerRx, innerRy, 0, 0, 1, rightInnerX, cy + depth, Z]];
            }
          } else {
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, rightX, cy, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerBackPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, rightInnerX, cy, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
            }
          }
        } else if (start < pi) {
          if (end > pi) {
            // crossed the 180 deg line only
            pointConf.clipOuterFrontPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, leftX, cy, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            pointConf.clipOuterBackPath = [[M, leftX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, leftX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
              pointConf.clipInnerBackPath = [[M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, leftInnerX, cy + depth, Z]];
            }
          } else {
            // haven't crossed any thing
            pointConf.clipOuterFrontPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            pointConf.clipOuterBackPath = [clipPathforNoClip];

            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];

              pointConf.clipInnerBackPath = [clipPathforNoClip];
            }
          }
        } else {
          // haven't crossed any thing
          pointConf.clipOuterFrontPath = [clipPathforNoClip];
          pointConf.clipOuterBackPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
          if (isDoughnut) {
            pointConf.clipInnerFrontPath = [clipPathforNoClip];

            pointConf.clipInnerBackPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
          }
        }
      } else {
        // zero Pie
        pointConf.clipOuterFrontPath = pointConf.clipOuterBackPath = pointConf.clipInnerBackPath = pointConf.clipInnerFrontPath = [clipPathforNoClip];
      }

      pathAttrString = 'litepath';
      pointConf.clipBottomBorderPath = pointConf.clipTopPath;
      pointConf.startSlice = [pointConf.startSlice];
      pointConf.endSlice = [pointConf.endSlice];
    } else {
      // for VML
      moveCmdArr = Pie3DManager.moveCmdArr;
      lineCmdArr = Pie3DManager.lineCmdArr;
      closeCmdArr = Pie3DManager.closeCmdArr;
      centerPoint = [cx, cy];
      leftPoint = [leftX, cy];
      topPoint = [cx, topY];
      rightPoint = [rightX, cy];
      bottomPoint = [cx, cy + ry];
      leftDepthPoint = [leftX, depthY];
      rightDepthPoint = [rightX, depthY];
      leftInnerPoint = [leftInnerX, cy];
      rightInnerPoint = [rightInnerX, cy];
      leftInnerDepthPoint = [leftInnerX, depthY];
      rightInnerDepthPoint = [rightInnerX, depthY];
      pointConf.clipOuterFrontPath1 = [];
      if (startOri != endOri) {
        if (start > end) {
          // crossed the 0 deg line
          if (start < pi) {
            // crossed the 180 deg line also
            tempArr1 = getArcPath(startOuterX, startOuterY, leftX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(leftX, cy, rightX, cy, rx, ry, 1, 0);
            tempArr5 = getArcPath(rightX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat(leftPoint, tempArr3, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath1 = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr5, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3, tempArr5);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(rightInnerX, cy, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr6 = getArcPath(leftInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr4, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr6, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr, moveCmdArr, [endInnerX, endInnerY], tempArr2, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else if (end > pi) {
            // crossed the 180 deg line also
            tempArr1 = getArcPath(startOuterX, startOuterY, rightX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(rightX, cy, leftX, cy, rx, ry, 1, 0);
            tempArr5 = getArcPath(leftX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr3, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr, moveCmdArr, leftPoint, tempArr5, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3, tempArr5);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(leftInnerX, cy, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr6 = getArcPath(rightInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr4, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr6, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr, moveCmdArr, [endInnerX, endInnerY], tempArr2, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);

              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else {
            tempArr1 = getArcPath(startOuterX, startOuterY, rightX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(rightX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr3, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(rightInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerFrontPath = moveCmdArr.concat([endInnerX, endInnerY], tempArr2, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr4, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          }
        } else if (start < pi) {
          if (end > pi) {
            // crossed the 180 deg line only
            tempArr1 = getArcPath(startOuterX, startOuterY, leftX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(leftX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat(leftPoint, tempArr3, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(leftInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat([endInnerX, endInnerY], tempArr2, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr4, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else {
            // haven't crossed any thing
            tempArr1 = getArcPath(startOuterX, startOuterY, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY]);
            pointConf.clipTopBorderPath = pointConf.clipOuterBackPath.concat(tempArr1);
            pointConf.clipOuterFrontPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat([endInnerX, endInnerY]);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2);
              pointConf.clipInnerFrontPath = pointConf.clipInnerBackPath.concat(tempArr2, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          }
        } else {
          // haven't crossed any thing
          tempArr1 = getArcPath(startOuterX, startOuterY, endOuterX, endOuterY, rx, ry, 1, 0);
          pointConf.clipOuterFrontPath = moveCmdArr.concat([startOuterX, startOuterY]);
          pointConf.clipTopBorderPath = pointConf.clipOuterFrontPath.concat(tempArr1);
          pointConf.clipOuterBackPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
          if (isDoughnut) {
            tempArr2 = getArcPath(endInnerX, endInnerY, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
            pointConf.clipInnerFrontPath = moveCmdArr.concat([endInnerX, endInnerY]);
            pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, closeCmdArr);
            pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(pointConf.clipInnerFrontPath, tempArr2);
            pointConf.clipInnerBackPath = pointConf.clipInnerFrontPath.concat(tempArr2, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
          } else {
            pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
          }
        }
        // enlarge the bounded box so that the gradient works perfactly
        tempArr1 = moveCmdArr.concat(leftPoint, lineCmdArr, rightPoint);
        tempArr2 = moveCmdArr.concat(topPoint, lineCmdArr, bottomPoint);
        pointConf.clipTopPath = pointConf.clipTopPath.concat(tempArr1, tempArr2);
        pointConf.clipOuterFrontPath = pointConf.clipOuterFrontPath.concat(tempArr1);
        pointConf.clipOuterFrontPath1 = pointConf.clipOuterFrontPath1.concat(tempArr1);
        pointConf.clipOuterBackPath = pointConf.clipOuterBackPath.concat(tempArr1);

        if (isDoughnut) {
          tempArr2 = moveCmdArr.concat(leftInnerPoint, lineCmdArr, rightInnerPoint);
          pointConf.clipInnerFrontPath = pointConf.clipInnerFrontPath.concat(tempArr2);
          pointConf.clipInnerBackPath = pointConf.clipInnerBackPath.concat(tempArr2);
        }
      } else {
        // zero Pie
        pointConf.clipTopPath = pointConf.clipOuterFrontPath = pointConf.clipOuterBackPath = [];
        if (isDoughnut) {
          pointConf.clipInnerFrontPath = pointConf.clipInnerBackPath = [];
        }
      }

      pointConf.clipBottomBorderPath = pointConf.clipTopBorderPath;
    }

    // now apply the changes
    if (!doNotApply) {
      elements.startSlice._conf.index = start;
      elements.endSlice._conf.index = end;
      elements.backOuter._conf.index = BackOuterIndex = crossed2Pi && (start <= pi3By2 || end > pi3By2) || start <= pi3By2 && end > pi3By2 ? pi3By2 : start > pi ? start : end;

      elements.frontOuter._conf.index = frontOuterIndex = end <= piBy2 ? end : start > end || start <= piBy2 ? piBy2 : start;
      elements.frontOuter1._conf.index = start;
      elements.frontOuter1._conf.cIndex = pi;
      if (start > end) {
        elements.backOuter._conf.cIndex = start < pi3By2 ? pi3By2 : pi2;
        elements.startSlice._conf.cIndex = start < pi ? (start + pi) / 2 : (start + pi2) / 2;
        elements.endSlice._conf.cIndex = elements.frontOuter._conf.cIndex = 0;
      } else {
        elements.backOuter._conf.cIndex = elements.startSlice._conf.cIndex = elements.endSlice._conf.cIndex = elements.frontOuter._conf.cIndex = middleAngle;
      }

      if (scaleAngle > pi) {
        elements.frontOuter1.show().attr(pathAttrString, pointConf.clipOuterFrontPath1);
      } else {
        elements.frontOuter1.hide();
      }
      pointConf.thisElement._attr(pathAttrString, pointConf.clipTopPath);
      elements.bottom.attr(pathAttrString, pointConf.clipTopPath);
      elements.bottomBorder.attr(pathAttrString, pointConf.clipBottomBorderPath);

      elements.topBorder && elements.topBorder.attr(pathAttrString, pointConf.clipTopBorderPath);
      elements.frontOuter.attr(pathAttrString, pointConf.clipOuterFrontPath);
      elements.backOuter.attr(pathAttrString, pointConf.clipOuterBackPath);

      if (isDoughnut) {
        elements.backInner.attr(pathAttrString, pointConf.clipInnerBackPath);
        elements.frontInner.attr(pathAttrString, pointConf.clipInnerFrontPath);
        elements.backInner._conf.index = BackOuterIndex;
        elements.frontInner._conf.index = frontOuterIndex;
        if (start > end) {
          elements.backInner._conf.cIndex = pi2;
          elements.frontInner._conf.cIndex = 0;
        } else {
          elements.backInner._conf.cIndex = elements.frontInner._conf.cIndex = middleAngle;
        }
      }

      if (Pie3DManager.hasOnePoint) {
        elements.startSlice.hide();
        elements.endSlice.hide();
      } else {
        elements.startSlice.attr(pathAttrString, pointConf.startSlice).show();
        elements.endSlice.attr(pathAttrString, pointConf.endSlice).show();
      }
    }
  };

  Pie3DManager.prototype._setSliceCosmetics = function _setSliceCosmetics(pointConf) {
    var manager = this,
        topElement = pointConf.thisElement,
        showBorderEffect = pointConf.showBorderEffect,
        elements = pointConf.elements,
        colorObj,
        borderColor = convertColor(pointConf.borderColor, (0, _lib.pluckNumber)(pointConf.borderAlpha, pointConf.alpha)),
        borderWidth = pointConf.borderWidth,
        topAttrObj;
    if (!pointConf.color) {
      return;
    }
    // in case of hover, color is color object, have property color containing values
    pointConf.color = pointConf.color.color ? pointConf.color.color : pointConf.color;
    colorObj = manager._parseSliceColor(pointConf.color, pointConf.alpha, pointConf);
    if (_lib.hasSVG) {
      topAttrObj = { fill: (0, _lib.toRaphaelColor)(colorObj.top), 'stroke-width': 0 };

      if (showBorderEffect) {
        elements.topBorder.show().attr({
          fill: (0, _lib.toRaphaelColor)(colorObj.topBorder),
          'stroke-width': 0
        });
      } else {
        elements.topBorder.hide();
        topAttrObj.stroke = borderColor;
        topAttrObj['stroke-width'] = borderWidth;
      }

      // top
      topElement._attr(topAttrObj);
    } else {
      topElement._attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.top),
        'stroke-width': 0
      });
      // top border
      elements.topBorder.attr({
        stroke: borderColor,
        'stroke-width': borderWidth
      });
    }

    // bottom
    elements.bottom.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.bottom)
    });

    // bottom
    elements.bottomBorder.attr({
      stroke: borderColor,
      'stroke-width': borderWidth
    });

    elements.frontOuter.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.frontOuter)
    });
    elements.frontOuter1.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.frontOuter)
    });

    // outerback
    elements.backOuter.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.backOuter)
    });

    // startSlice
    // whenAtBack
    elements.startSlice.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.startSlice),
      stroke: borderColor,
      'stroke-width': borderWidth
    });

    // endSlice
    // whenAtBack
    elements.endSlice.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.endSlice),
      stroke: borderColor,
      'stroke-width': borderWidth
    });
    if (manager.isDoughnut) {
      // innerFront
      elements.frontInner.attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.frontInner)
      });

      elements.backInner.attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.backInner)
      });
    }
  };

  return Pie3DManager;
}(_componentInterface2['default']);

exports['default'] = Pie3DDataset;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._getInnerSize = undefined;

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

var _pie2d = __webpack_require__(108);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _dependencyManager = __webpack_require__(6);

var _lib = __webpack_require__(5);

var _doughnut2dAnimation = __webpack_require__(654);

var _doughnut2dAnimation2 = _interopRequireDefault(_doughnut2dAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var COMMASTRING = ',',
    _getInnerSize2 = function _getInnerSize2() {
  var innerradius,
      dataSet = this,
      chart = dataSet.getFromEnv('chart'),
      dataSetConfig = dataSet.config,
      chartAttr = chart.getFromEnv('dataSource').chart,
      doughnutRadius = dataSetConfig.doughnutradius,
      use3DLighting = (0, _lib.pluckNumber)(chartAttr.use3dlighting, 1),
      radius3D = use3DLighting ? (0, _lib.pluckNumber)(chartAttr.radius3d, chartAttr['3dradius'], 50) : 100,
      innerpercentR,
      diff50Percent,
      radius3Dpercent,
      pointConfig,
      poin2nd,
      ratioStr,
      x,
      point,
      data,
      length,
      pieMinRadius = dataSetConfig.pieMinRadius;
  if (radius3D > 100) {
    radius3D = 100;
  }
  if (radius3D < 0) {
    radius3D = 0;
  }
  /*
   * Decide inner radius
   */
  if (/%/.test(doughnutRadius)) {
    doughnutRadius = Number(doughnutRadius.split('%')[0]) / 100;
    innerradius = pieMinRadius * doughnutRadius;
  } else if (doughnutRadius <= 0 || doughnutRadius >= pieMinRadius) {
    innerradius = pieMinRadius / 2;
  } else {
    innerradius = (0, _lib.pluckNumber)(doughnutRadius);
  }

  dataSetConfig.innerRadius = innerradius;
  // hcJSON.plotOptions.pie3d.innerSize = hcJSON.plotOptions.pie.innerSize = 2 * innerradius;

  /*
    * Create doughnut type 3d lighting
    */
  if (radius3D > 0 && _lib.hasSVG) {
    // Radial gradient is not supported in VML
    innerpercentR = parseInt(innerradius / pieMinRadius * 100, 10);
    diff50Percent = (100 - innerpercentR) / 2;
    radius3Dpercent = parseInt(diff50Percent * radius3D / 100, 10);
    poin2nd = 2 * (diff50Percent - radius3Dpercent);
    ratioStr = innerpercentR + COMMASTRING + radius3Dpercent + COMMASTRING + poin2nd + COMMASTRING + radius3Dpercent;
    // Loop for all points
    if (dataSet && (data = dataSet.components.data)) {
      for (x = 0, length = data.length; x < length; x += 1) {
        point = data[x];
        pointConfig = point.config;
        if (pointConfig.color) {
          pointConfig.color.ratio = ratioStr;
          if (pointConfig.hoverEffects && pointConfig.hoverEffects.color) {
            pointConfig.hoverEffects.color.ratio = ratioStr;
          }
        }
      }
    }
  }
  return innerradius * 2;
};

var Doughnut2DDataset = function (_Pie2DDataset) {
  _inherits(Doughnut2DDataset, _Pie2DDataset);

  function Doughnut2DDataset() {
    _classCallCheck(this, Doughnut2DDataset);

    var _this = _possibleConstructorReturn(this, _Pie2DDataset.call(this));

    (0, _dependencyManager.addDep)({
      name: 'doughnut2dAnimation',
      type: 'animationRule',
      extension: _doughnut2dAnimation2['default']
    });
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  Doughnut2DDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Doughnut2DDataset.prototype.getName = function getName() {
    return 'doughnut2D';
  };

  Doughnut2DDataset.prototype.configureAttributes = function configureAttributes(dataObj) {
    _Pie2DDataset.prototype.configureAttributes.call(this, dataObj);
    var dataset = this,
        conf = dataset.config,
        chartConfig = dataset.getFromEnv('chartConfig');
    conf.doughnutradius = (0, _lib.pluck)(chartConfig.doughnutradius, conf.doughnutradius, '50%');
  };

  Doughnut2DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2DDataset.prototype.__setDefaultConfig && _Pie2DDataset.prototype.__setDefaultConfig.call(this);
    this.config.doughnutradius = '50%';
  };

  Doughnut2DDataset.prototype._parsePiePlotOptions = function _parsePiePlotOptions() {
    var dataSet = this,
        piePlotOptions = _Pie2DDataset.prototype._parsePiePlotOptions.call(this);

    piePlotOptions.innerSize = dataSet._getInnerSize();
    return piePlotOptions;
  };

  Doughnut2DDataset.prototype._getInnerSize = function _getInnerSize() {
    return _getInnerSize2.call(this);
  };

  Doughnut2DDataset.prototype.allocatePosition = function allocatePosition() {
    this.config.innerSize = this._getInnerSize();
    _Pie2DDataset.prototype.allocatePosition.call(this);
  };

  return Doughnut2DDataset;
}(_pie2d2['default']);

exports._getInnerSize = _getInnerSize2;
exports['default'] = Doughnut2DDataset;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.dataset.pie3d': function initialDatasetPie3d() {
    return {
      'group.appearing': function groupAppearing(inputJSON) {
        if (inputJSON.attr.name === 'plots') {
          return [{
            initialAttr: {
              opacity: '0'
            },
            finalAttr: {
              opacity: '1'
            },
            slot: 'plot'
          }];
        } else {
          return [{
            initialAttr: {
              opacity: '1'
            },
            finalAttr: {
              opacity: '1'
            },
            slot: 'final'
          }];
        }
      },
      'slice.appearing': [{
        initialAttr: {
          opacity: '1'
        },
        slot: 'plot'
      }],
      'label.updating': [{
        initialAttr: {
          opacity: '1'
        },
        finalAttr: {
          opacity: '1'
        },
        slot: 'final'
      }],
      'label.appearing': [{
        initialAttr: {
          opacity: '0'
        },
        finalAttr: {
          opacity: '1'
        },
        slot: 'final'
      }],
      'connector.updating': function connectorUpdating(inputJSON) {
        return [{
          initialAttr: {
            path: inputJSON.el.attr('path') || inputJSON.attr.path,
            opacity: inputJSON.el.attr('opacity')
          },
          finalAttr: {
            path: inputJSON.attr.path
          },
          slot: 'final'
        }];
      },
      'connector.appearing': function connectorAppearing(inputJSON) {
        var initialAttr = void 0;
        if (typeof inputJSON.el === 'string') {
          initialAttr = { opacity: '0' };
        } else {
          initialAttr = {
            path: inputJSON.attr.path,
            opacity: '0'
          };
        }
        return [{
          initialAttr: initialAttr,
          slot: 'final'
        }];
      },
      'connector-sliced.updating': function connectorSlicedUpdating(inputJSON) {
        return [{
          initialAttr: {
            path: inputJSON.el.attr('path')
          },
          finalAttr: {
            path: inputJSON.attr.path
          },
          slot: 'plot'
        }];
      },
      'label-sliced.updating': function labelSlicedUpdating(inputJSON) {
        return [{
          initialAttr: {
            x: inputJSON.el.attr('x'),
            y: inputJSON.el.attr('y')
          },
          slot: 'plot'
        }];
      },
      '*': null
    };
  }
};

/***/ }),

/***/ 328:
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

var _fusioncharts = __webpack_require__(211);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class MSColumn3D
 */
var MSColumn3D = function (_MSCartesian3D) {
  _inherits(MSColumn3D, _MSCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSColumn3D.getName = function getName() {
    return 'MSColumn3D';
  };
  /**
   * Constructor function for class MSColumn3D
   */


  function MSColumn3D() {
    _classCallCheck(this, MSColumn3D);

    // Default shadow is visible for 3D variant of MSColumn2D chart
    var _this = _possibleConstructorReturn(this, _MSCartesian3D.call(this));

    _this.defaultPlotShadow = 1;
    //  this.fireGroupEvent = true;
    // this.creditLabel = creditLabel;
    _this.defaultZeroPlaneHighlighted = false;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSColumn3D.prototype.getName = function getName() {
    return 'MSColumn3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  MSColumn3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian3D.prototype.__setDefaultConfig && _MSCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = 'Multi-series 3D Column Chart';
    config.defaultDatasetType = 'column3d';
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };

  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  MSColumn3D.prototype.getDSdef = function getDSdef() {
    return _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object}       Multiseries column group definition
   */


  MSColumn3D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };

  return MSColumn3D;
}(_fusioncharts2['default']);

exports['default'] = MSColumn3D;

/***/ }),

/***/ 329:
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

var _fusioncharts = __webpack_require__(106);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bar2d = __webpack_require__(138);

var _bar2d2 = _interopRequireDefault(_bar2d);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _multiseriesDataset = __webpack_require__(90);

var _multiseriesDataset2 = _interopRequireDefault(_multiseriesDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * Class for MSBar2d chart
 * @class MSBar2D
 * @extends {MSBarCartesian}
 */
var MSBar2D = function (_MSBarCartesian) {
  _inherits(MSBar2D, _MSBarCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSBar2D.getName = function getName() {
    return 'MSBar2D';
  };
  /**
   * Creates an instance of MSBar2D.
   * @memberof MSBar2D
   */


  function MSBar2D() {
    _classCallCheck(this, MSBar2D);

    var _this = _possibleConstructorReturn(this, _MSBarCartesian.call(this));

    _this.isBar = true;
    _this.registerFactory('dataset', _multiseriesDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSBar2D.prototype.getName = function getName() {
    return 'MSBar2D';
  };

  /**
   * This method return the dataset definations for this charts
   * @return {Object} dataset
   */


  MSBar2D.prototype.getDSdef = function getDSdef() {
    return _bar2d2['default'];
  };
  /** This method return the dataset-group definations for this charts
    * @return {Object} dataset group **/


  MSBar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };
  /**
   * Function to create dataset of MSBar2D chart.
   * @memberof MSBar2D
   */


  MSBar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBarCartesian.prototype.__setDefaultConfig && _MSBarCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Multi-series Bar Chart';
    config.hasLegend = true;
    config.defaultDatasetType = 'bar2d';
  };

  return MSBar2D;
}(_fusioncharts2['default']);

exports['default'] = MSBar2D;

/***/ }),

/***/ 330:
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

var _fusioncharts = __webpack_require__(659);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _bar3d = __webpack_require__(213);

var _bar3d2 = _interopRequireDefault(_bar3d);

var _multiseries3dDataset = __webpack_require__(212);

var _multiseries3dDataset2 = _interopRequireDefault(_multiseries3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class MSBar3D
 */
var MSBar3D = function (_MSBarCartesian3D) {
  _inherits(MSBar3D, _MSBarCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSBar3D.getName = function getName() {
    return 'MSBar3D';
  };
  /**
   * Constructor function for MSBar3D
   */


  function MSBar3D() {
    _classCallCheck(this, MSBar3D);

    var _this = _possibleConstructorReturn(this, _MSBarCartesian3D.call(this));

    _this.defaultSeriesType = 'bar3d';
    // this.fireGroupEvent = true;
    _this.defaultPlotShadow = 1;
    _this.isBar = true;
    _this.defaultZeroPlaneHighlighted = false;
    _this.registerFactory('dataset', _multiseries3dDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSBar3D.prototype.getName = function getName() {
    return 'MSBar3D';
  };

  /**
   * parse defualt configuration of the chart
   */


  MSBar3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBarCartesian3D.prototype.__setDefaultConfig && _MSBarCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = 'Multi-series 3D Bar Chart';
    config.hasLegend = true;
    config.defaultDatasetType = 'bar3d';
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  MSBar3D.prototype.getDSdef = function getDSdef() {
    return _bar3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object}       Multiseries column group definition
   */


  MSBar3D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };

  return MSBar3D;
}(_fusioncharts2['default']);

exports['default'] = MSBar3D;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

exports['default'] = function (chart) {
  var jsonData = chart.getFromEnv('dataSource'),
      datasetsJSON = jsonData.dataset,
      children = chart.getChildren(),
      canvas = children.canvas[0],
      vCanvasArr = canvas.getChildren('vCanvas'),
      vCanvas = vCanvasArr[0],
      svCanvas = vCanvasArr[1],
      datasetJSON = void 0,
      isdual = chart.getFromEnv('chartConfig').isdual,
      i = void 0,
      canvasDatasetsDef = {
    vCanvasDatasetsDef0: {},
    vCanvasDatasetsDef1: {}
  },
      manager3D = void 0,
      datasetsDef = void 0,
      datasetDef = void 0,
      DsGroupClass = void 0,
      dsType = void 0,
      parentyaxis = void 0,
      relatedVCanvas = void 0,
      relatedPrevDatasetMap = void 0,
      prevDatasetMap = {
    vCanvas0: {},
    vCanvas1: {}
  };

  if (!datasetsJSON) {
    chart.setChartMessage();
  }

  for (i = 0; i < datasetsJSON.length; i++) {
    datasetJSON = datasetsJSON[i];
    parentyaxis = datasetJSON.parentyaxis || '';
    if (parentyaxis.toLowerCase() === 's' && isdual) {
      dsType = (0, _lib.pluck)(datasetJSON.renderas, chart.config.sDefaultDatasetType);
      relatedVCanvas = svCanvas;
      relatedPrevDatasetMap = prevDatasetMap.vCanvas1;
      datasetsDef = canvasDatasetsDef.vCanvasDatasetsDef1;
    } else {
      dsType = (0, _lib.pluck)(datasetJSON.renderas, chart.config.defaultDatasetType);
      relatedVCanvas = vCanvas;
      relatedPrevDatasetMap = prevDatasetMap.vCanvas0;
      datasetsDef = canvasDatasetsDef.vCanvasDatasetsDef0;
    }
    dsType = chart.getDSType(dsType);
    DsGroupClass = chart.getDSGroupdef(dsType, parentyaxis);
    if (DsGroupClass) {
      (0, _lib.componentFactory)(relatedVCanvas, _column2['default'], MULTISERIESCOLUMNMANAGER3D);
      manager3D = relatedVCanvas.getChildren(MULTISERIESCOLUMNMANAGER3D)[0];
      relatedPrevDatasetMap[manager3D.getName()] = true;
      (0, _lib.componentFactory)(manager3D, DsGroupClass, MULTISERIESCOLUMNMANAGER);
      relatedPrevDatasetMap[DsGroupClass.getName().toLowerCase()] = true;
    }
    relatedPrevDatasetMap[dsType.toLowerCase()] = true;
    if (datasetsDef[dsType]) {
      datasetsDef[dsType].conf.push(datasetJSON);
      datasetsDef[dsType].indices.push(i);
    } else {
      datasetsDef[dsType] = {};
      datasetsDef[dsType].indices = [i];
      datasetsDef[dsType].classDef = chart.getDSdef(dsType);
      datasetsDef[dsType].conf = [datasetJSON];
      datasetsDef[dsType].pYAxis = parentyaxis.toLowerCase();
      datasetsDef[dsType].parent = DsGroupClass ? manager3D.getChildren(MULTISERIESCOLUMNMANAGER)[0] : relatedVCanvas;
    }
  }
  for (var key in canvasDatasetsDef) {
    if (canvasDatasetsDef.hasOwnProperty(key)) {
      datasetsDef = canvasDatasetsDef[key];
      for (dsType in datasetsDef) {
        if (datasetsDef.hasOwnProperty(dsType)) {
          datasetDef = datasetsDef[dsType];
          if (datasetDef.parent.getType() === 'group') {
            datasetDef.parent.configure(datasetDef.conf);
          }
          (0, _lib.datasetFactory)(datasetDef.parent, datasetDef.classDef, 'dataset_' + dsType, datasetDef.conf.length, datasetDef.conf, datasetDef.indices);
        }
      }
    }
  }

  (0, _datasetFactory.removeComponents)(vCanvasArr[0], (0, _keys2['default'])(prevDatasetMap.vCanvas0));
  (0, _datasetFactory.removeComponents)(vCanvasArr[1], (0, _keys2['default'])(prevDatasetMap.vCanvas1));
};

var _column = __webpack_require__(136);

var _column2 = _interopRequireDefault(_column);

var _lib = __webpack_require__(5);

var _datasetFactory = __webpack_require__(320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MULTISERIESCOLUMNMANAGER = 'multiseriesColumnManager',
    MULTISERIESCOLUMNMANAGER3D = 'multiseriesColumnManager3D';
/**
 * function to  create dataset, groupmaneger.
 * assign dataset to group manager.
 * @param {Object} chart Chart API
 **/

/***/ }),

/***/ 334:
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

var _fusioncharts = __webpack_require__(675);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _combiDualY3dDataset = __webpack_require__(333);

var _combiDualY3dDataset2 = _interopRequireDefault(_combiDualY3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEFINED = void 0,
    HUNDREDSTRING = '100',
    SEVENTYSTRING = '70';
/**
 * Creates class for MSColumn3DLineDy
 */

var MSColumn3DLineDy = function (_MSDybaseCartesian3D) {
  _inherits(MSColumn3DLineDy, _MSDybaseCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSColumn3DLineDy.getName = function getName() {
    return 'MSColumn3DLineDy';
  };
  /**
   * Constructor function of MSColumn3DLineDy class
   */


  function MSColumn3DLineDy() {
    _classCallCheck(this, MSColumn3DLineDy);

    var _this = _possibleConstructorReturn(this, _MSDybaseCartesian3D.call(this));

    _this.defaultPlotShadow = 1;
    _this.isDual = true;
    _this.registerFactory('dataset', _combiDualY3dDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSColumn3DLineDy.prototype.getName = function getName() {
    return 'MSColumn3DLineDy';
  };
  /**
   * Sets default configuration of chart elements
   */


  MSColumn3DLineDy.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSDybaseCartesian3D.prototype.__setDefaultConfig && _MSDybaseCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.sDefaultDatasetType = 'line';
    config.friendlyName = 'Multi-series 3D Column and Line Chart';
    config.defaultDatasetType = 'column3d';
    config.use3dlineshift = 1;
    config.isdual = true;
    config.showplotborder = 0;
    config.enablemousetracking = true;

    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEFINED;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEFINED;
    config.anchorbgalpha = HUNDREDSTRING;
    config.anchorimagealpha = HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEFINED;
    config.anchorbordercolor = UNDEFINED;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEFINED;
    config.linealpha = HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  MSColumn3DLineDy.prototype.getDSdef = function getDSdef(name) {
    return name === 'line' ? _line2['default'] : _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  MSColumn3DLineDy.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };

  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  MSColumn3DLineDy.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'line' ? 'line' : 'column3d';
  };

  return MSColumn3DLineDy;
}(_fusioncharts2['default']);

exports['default'] = MSColumn3DLineDy;

/***/ }),

/***/ 338:
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

var _fusioncharts = __webpack_require__(142);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _scatter = __webpack_require__(109);

var _scatter2 = _interopRequireDefault(_scatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0;

var Scatter = function (_ScatterBase) {
  _inherits(Scatter, _ScatterBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Scatter.getName = function getName() {
    return 'Scatter';
  };

  function Scatter() {
    _classCallCheck(this, Scatter);

    var _this = _possibleConstructorReturn(this, _ScatterBase.call(this));

    _this.isXY = true;

    _this.defaultZeroPlaneHighlighted = false;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Scatter.prototype.getName = function getName() {
    return 'Scatter';
  };

  Scatter.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScatterBase.prototype.__setDefaultConfig && _ScatterBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Scatter Chart';
    config.hasLegend = true;
    config.allowreversexaxis = true;
    config.enablemousetracking = true;
  };

  Scatter.prototype.getDSdef = function getDSdef() {
    return _scatter2['default'];
  };
  // This method return the dataset-group definations for this charts


  Scatter.prototype.getDSGroupdef = function getDSGroupdef() {
    return UNDEF;
  };

  return Scatter;
}(_fusioncharts2['default']);

exports['default'] = Scatter;

/***/ }),

/***/ 56:
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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var math = Math,
    mathRound = math.round,
    createGroup = function createGroup(groupName, paper, parentContainer) {
  return paper.group(groupName, parentContainer);
};
/**
 * Creates class for Column3DDataset
 */

var Column3DDataset = function (_ColumnDataset) {
  _inherits(Column3DDataset, _ColumnDataset);

  /**
   * Constructor function of Column3DDataset class to initiate
   */
  function Column3DDataset() {
    _classCallCheck(this, Column3DDataset);

    var _this = _possibleConstructorReturn(this, _ColumnDataset.call(this));

    _this.setContainerVisibility = _lib.stubFN;
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  Column3DDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Column3DDataset.prototype.getName = function getName() {
    return 'column3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Column3DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ColumnDataset.prototype.__setDefaultConfig && _ColumnDataset.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.use3dlighting = _lib.UNDEF;
  };
  /**
   * function to create group for dataset
   */


  Column3DDataset.prototype.createContainer = function createContainer() {
    var dataset = this,
        parent = dataset.getLinkedParent(),
        paper = dataset.getFromEnv('paper');

    !dataset.getContainer('labelGroup') && dataset.addContainer('labelGroup', createGroup('label-group', paper, parent.getChildContainer('vcanvasLabelGroup')).attr('class', 'fusioncharts-datalabels')).attr('opacity', 1);
  };

  /**
   * function to check if given x,y coordiante is over a column plot or not
   * @param  {number} pX     index of column
   * @param  {number} chartX x co-ordinate
   * @param  {number} chartY y co-ordinate
   * @return {Object}        hovered information
   */


  Column3DDataset.prototype._checkPointerOverColumn = function _checkPointerOverColumn(pX, chartX, chartY) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        showPlotBorder = chartConfig.showplotborder,
        dataStore = dataset.components.data,
        pointObj = dataStore[pX],
        pY,
        dx,
        dy,
        hovered,
        halfPlotBorderThickness,
        zDepth = 10,
        xPos,
        yPos,
        width,
        height;

    if (!pointObj) {
      return;
    }

    pY = pointObj.config.setValue;
    //  if (chartConfig.isstacked && ((pY < 0 && dataset.valueLook) || (pY > 0 && !dataset.valueLook))) {
    //    return;
    //  }

    plotBorderThickness = showPlotBorder ? plotBorderThickness : 0;
    halfPlotBorderThickness = plotBorderThickness / 2;

    halfPlotBorderThickness = halfPlotBorderThickness % 2 === 0 ? halfPlotBorderThickness + 1 : mathRound(halfPlotBorderThickness);

    if (pY !== null) {
      xPos = pointObj._xPos - zDepth;
      width = pointObj._width + zDepth;
      yPos = pointObj._yPos;
      height = pointObj._height + zDepth;

      dx = chartX - xPos + halfPlotBorderThickness;
      dy = chartY - yPos + halfPlotBorderThickness;

      hovered = dx >= 0 && dx <= width + plotBorderThickness && dy >= 0 && dy <= height + plotBorderThickness;

      if (pY >= 0) {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      } else {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      }

      if (hovered) {
        return {
          pointIndex: pX,
          hovered: hovered,
          pointObj: dataStore[pX]
        };
      }
    }
  };

  /**
   * Function that retunr the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
   */


  Column3DDataset.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        isBar = chart.isBar,
        xAxis = dataset.getFromEnv('xAxis'),
        x,
        pX;

    x = xAxis.getValue(isBar ? chartY : chartX);
    pX = Math.round(x);
    // Checking for overlap between two cosecutive column plots along x-axis
    return pX - x > 0 ? dataset._checkPointerOverColumn(pX, chartX, chartY) || dataset._checkPointerOverColumn(pX - 1, chartX, chartY) : dataset._checkPointerOverColumn(pX + 1, chartX, chartY) || dataset._checkPointerOverColumn(pX, chartX, chartY);
  };

  return Column3DDataset;
}(_column2['default']);

exports['default'] = Column3DDataset;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(593);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(634);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

var _fusioncharts5 = __webpack_require__(639);

var _fusioncharts6 = _interopRequireDefault(_fusioncharts5);

var _fusioncharts7 = __webpack_require__(644);

var _fusioncharts8 = _interopRequireDefault(_fusioncharts7);

var _fusioncharts9 = __webpack_require__(647);

var _fusioncharts10 = _interopRequireDefault(_fusioncharts9);

var _fusioncharts11 = __webpack_require__(648);

var _fusioncharts12 = _interopRequireDefault(_fusioncharts11);

var _fusioncharts13 = __webpack_require__(319);

var _fusioncharts14 = _interopRequireDefault(_fusioncharts13);

var _fusioncharts15 = __webpack_require__(651);

var _fusioncharts16 = _interopRequireDefault(_fusioncharts15);

var _fusioncharts17 = __webpack_require__(215);

var _fusioncharts18 = _interopRequireDefault(_fusioncharts17);

var _fusioncharts19 = __webpack_require__(324);

var _fusioncharts20 = _interopRequireDefault(_fusioncharts19);

var _fusioncharts21 = __webpack_require__(655);

var _fusioncharts22 = _interopRequireDefault(_fusioncharts21);

var _fusioncharts23 = __webpack_require__(656);

var _fusioncharts24 = _interopRequireDefault(_fusioncharts23);

var _fusioncharts25 = __webpack_require__(71);

var _fusioncharts26 = _interopRequireDefault(_fusioncharts25);

var _fusioncharts27 = __webpack_require__(328);

var _fusioncharts28 = _interopRequireDefault(_fusioncharts27);

var _fusioncharts29 = __webpack_require__(329);

var _fusioncharts30 = _interopRequireDefault(_fusioncharts29);

var _fusioncharts31 = __webpack_require__(330);

var _fusioncharts32 = _interopRequireDefault(_fusioncharts31);

var _fusioncharts33 = __webpack_require__(216);

var _fusioncharts34 = _interopRequireDefault(_fusioncharts33);

var _fusioncharts35 = __webpack_require__(331);

var _fusioncharts36 = _interopRequireDefault(_fusioncharts35);

var _fusioncharts37 = __webpack_require__(660);

var _fusioncharts38 = _interopRequireDefault(_fusioncharts37);

var _fusioncharts39 = __webpack_require__(662);

var _fusioncharts40 = _interopRequireDefault(_fusioncharts39);

var _fusioncharts41 = __webpack_require__(663);

var _fusioncharts42 = _interopRequireDefault(_fusioncharts41);

var _fusioncharts43 = __webpack_require__(664);

var _fusioncharts44 = _interopRequireDefault(_fusioncharts43);

var _fusioncharts45 = __webpack_require__(665);

var _fusioncharts46 = _interopRequireDefault(_fusioncharts45);

var _fusioncharts47 = __webpack_require__(666);

var _fusioncharts48 = _interopRequireDefault(_fusioncharts47);

var _fusioncharts49 = __webpack_require__(332);

var _fusioncharts50 = _interopRequireDefault(_fusioncharts49);

var _fusioncharts51 = __webpack_require__(140);

var _fusioncharts52 = _interopRequireDefault(_fusioncharts51);

var _fusioncharts53 = __webpack_require__(218);

var _fusioncharts54 = _interopRequireDefault(_fusioncharts53);

var _fusioncharts55 = __webpack_require__(672);

var _fusioncharts56 = _interopRequireDefault(_fusioncharts55);

var _fusioncharts57 = __webpack_require__(673);

var _fusioncharts58 = _interopRequireDefault(_fusioncharts57);

var _fusioncharts59 = __webpack_require__(674);

var _fusioncharts60 = _interopRequireDefault(_fusioncharts59);

var _fusioncharts61 = __webpack_require__(219);

var _fusioncharts62 = _interopRequireDefault(_fusioncharts61);

var _fusioncharts63 = __webpack_require__(334);

var _fusioncharts64 = _interopRequireDefault(_fusioncharts63);

var _fusioncharts65 = __webpack_require__(676);

var _fusioncharts66 = _interopRequireDefault(_fusioncharts65);

var _fusioncharts67 = __webpack_require__(335);

var _fusioncharts68 = _interopRequireDefault(_fusioncharts67);

var _fusioncharts69 = __webpack_require__(141);

var _fusioncharts70 = _interopRequireDefault(_fusioncharts69);

var _fusioncharts71 = __webpack_require__(678);

var _fusioncharts72 = _interopRequireDefault(_fusioncharts71);

var _fusioncharts73 = __webpack_require__(221);

var _fusioncharts74 = _interopRequireDefault(_fusioncharts73);

var _fusioncharts75 = __webpack_require__(679);

var _fusioncharts76 = _interopRequireDefault(_fusioncharts75);

var _fusioncharts77 = __webpack_require__(336);

var _fusioncharts78 = _interopRequireDefault(_fusioncharts77);

var _fusioncharts79 = __webpack_require__(337);

var _fusioncharts80 = _interopRequireDefault(_fusioncharts79);

var _fusioncharts81 = __webpack_require__(338);

var _fusioncharts82 = _interopRequireDefault(_fusioncharts81);

var _fusioncharts83 = __webpack_require__(683);

var _fusioncharts84 = _interopRequireDefault(_fusioncharts83);

var _fusioncharts85 = __webpack_require__(340);

var _fusioncharts86 = _interopRequireDefault(_fusioncharts85);

var _centerLabelAdpater = __webpack_require__(693);

var _centerLabelAdpater2 = _interopRequireDefault(_centerLabelAdpater);

var _logoAdapter = __webpack_require__(696);

var _logoAdapter2 = _interopRequireDefault(_logoAdapter);

var _crosslineAdapter = __webpack_require__(342);

var _crosslineAdapter2 = _interopRequireDefault(_crosslineAdapter);

var _multicanvasCrosslineManager = __webpack_require__(343);

var _multicanvasCrosslineManager2 = _interopRequireDefault(_multicanvasCrosslineManager);

var _mouseTracker_crossline = __webpack_require__(344);

var _mouseTracker_crossline2 = _interopRequireDefault(_mouseTracker_crossline);

var _fusioncharts87 = __webpack_require__(18);

var _fusioncharts88 = _interopRequireDefault(_fusioncharts87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// export * from './mantle/renderer-javascript/charts-zoomline.js';

// eslint-disable-next-line
_fusioncharts88['default'].addDep(_logoAdapter2['default']); /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */

_fusioncharts88['default'].addDep(_crosslineAdapter2['default']);
_fusioncharts88['default'].addDep(_multicanvasCrosslineManager2['default']);
_fusioncharts88['default'].addDep(_centerLabelAdpater2['default']);
_fusioncharts88['default'].addDep(_fusioncharts26['default']);
_fusioncharts88['default'].addDep(_fusioncharts36['default']);
_fusioncharts88['default'].addDep(_fusioncharts34['default']);
_fusioncharts88['default'].addDep(_fusioncharts12['default']);
_fusioncharts88['default'].addDep(_fusioncharts10['default']);
_fusioncharts88['default'].addDep(_fusioncharts2['default']);
_fusioncharts88['default'].addDep(_fusioncharts6['default']);
_fusioncharts88['default'].addDep(_fusioncharts8['default']);
_fusioncharts88['default'].addDep(_fusioncharts30['default']);
_fusioncharts88['default'].addDep(_fusioncharts32['default']);
_fusioncharts88['default'].addDep(_fusioncharts18['default']);
_fusioncharts88['default'].addDep(_fusioncharts20['default']);
_fusioncharts88['default'].addDep(_fusioncharts22['default']);
_fusioncharts88['default'].addDep(_fusioncharts24['default']);
_fusioncharts88['default'].addDep(_fusioncharts82['default']);
_fusioncharts88['default'].addDep(_fusioncharts84['default']);
_fusioncharts88['default'].addDep(_fusioncharts4['default']);
_fusioncharts88['default'].addDep(_fusioncharts28['default']);
_fusioncharts88['default'].addDep(_fusioncharts52['default']);
_fusioncharts88['default'].addDep(_fusioncharts54['default']);
_fusioncharts88['default'].addDep(_fusioncharts62['default']);
_fusioncharts88['default'].addDep(_fusioncharts40['default']);
_fusioncharts88['default'].addDep(_fusioncharts42['default']);
_fusioncharts88['default'].addDep(_fusioncharts50['default']);
_fusioncharts88['default'].addDep(_fusioncharts44['default']);
_fusioncharts88['default'].addDep(_fusioncharts46['default']);
_fusioncharts88['default'].addDep(_fusioncharts38['default']);
_fusioncharts88['default'].addDep(_fusioncharts48['default']);
_fusioncharts88['default'].addDep(_fusioncharts56['default']);
_fusioncharts88['default'].addDep(_fusioncharts58['default']);
_fusioncharts88['default'].addDep(_fusioncharts60['default']);
_fusioncharts88['default'].addDep(_fusioncharts66['default']);
_fusioncharts88['default'].addDep(_fusioncharts68['default']);
_fusioncharts88['default'].addDep(_fusioncharts64['default']);
_fusioncharts88['default'].addDep(_fusioncharts14['default']);
_fusioncharts88['default'].addDep(_fusioncharts16['default']);
_fusioncharts88['default'].addDep(_fusioncharts70['default']);
_fusioncharts88['default'].addDep(_fusioncharts72['default']);
_fusioncharts88['default'].addDep(_fusioncharts74['default']);
_fusioncharts88['default'].addDep(_fusioncharts76['default']);
_fusioncharts88['default'].addDep(_fusioncharts78['default']);
_fusioncharts88['default'].addDep(_fusioncharts80['default']);
_fusioncharts88['default'].addDep(_fusioncharts86['default']);
_fusioncharts88['default'].addDep(_mouseTracker_crossline2['default']);
_fusioncharts88['default'].addFile('fusioncharts.charts.js');

exports['default'] = _fusioncharts88['default'];
// var Charts = function (FC) {
//   return FC;
// };
//
// export default Charts;

/***/ }),

/***/ 593:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Class for single series column charts and who depend on this class
 * @type {class}
 */
var Column2D = function (_SSCartesian) {
  _inherits(Column2D, _SSCartesian);

  function Column2D() {
    _classCallCheck(this, Column2D);

    return _possibleConstructorReturn(this, _SSCartesian.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Column2D.getName = function getName() {
    return 'Column2D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  Column2D.prototype.getName = function getName() {
    return 'Column2D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Column2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig.call(this);
    this.config.friendlyName = 'Column Chart';
    this.config.singleseries = true;
    this.config.defaultDatasetType = 'column';
    this.config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  Column2D.prototype.getDSdef = function getDSdef() {
    return _column2['default'];
  };

  return Column2D;
}(_fusioncharts2['default']);

exports['default'] = Column2D;

/***/ }),

/***/ 634:
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

var _fusioncharts = __webpack_require__(315);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class Column3D
 */
var Column3D = function (_SSCartesian3D) {
  _inherits(Column3D, _SSCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Column3D.getName = function getName() {
    return 'Column3D';
  };
  /**
   * Constructor function of Column3D class
   */


  function Column3D() {
    _classCallCheck(this, Column3D);

    var _this = _possibleConstructorReturn(this, _SSCartesian3D.call(this));

    _this.defaultPlotShadow = 1;
    _this.defaultZeroPlaneHighlighted = false;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Column3D.prototype.getName = function getName() {
    return 'Column3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Column3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian3D.prototype.__setDefaultConfig && _SSCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.hasLegend = false;
    config.singleseries = true;
    config.friendlyName = '3D Column Chart';
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  Column3D.prototype.getDSdef = function getDSdef() {
    return _column3d2['default'];
  };

  return Column3D;
}(_fusioncharts2['default']);

exports['default'] = Column3D;

/***/ }),

/***/ 635:
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

var _canvas = __webpack_require__(104);

var _canvas2 = _interopRequireDefault(_canvas);

var _lib = __webpack_require__(5);

var _dependencyManager = __webpack_require__(6);

var _canvas3dAnimation = __webpack_require__(636);

var _canvas3dAnimation2 = _interopRequireDefault(_canvas3dAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var R = (0, _dependencyManager.getDep)('redraphael', 'plugin'),
    canvasBaseColor3DStr = 'canvasBaseColor3D',
    canvasBGAlphaStr = 'canvasBgAlpha',
    clipCanvasStr = 'clip-canvas',
    clipCanvasInitStr = 'clip-canvas-init',
    getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    COMMA = ',',
    MAX_MITER_LINEJOIN = 2,
    ROUND = _lib.preDefStr.ROUND,
    miterStr = _lib.preDefStr.miterStr,
    math = Math,
    mathMax = math.max,
    Raphael = R,
    NONE = 'none',
    M = 'M',
    L = 'L',
    Z = 'Z',
    V = 'V',
    getAngle = _lib.graphics.getAngle,
    chartPaletteStr = {
  chart2D: {
    bgColor: 'bgColor',
    bgAlpha: 'bgAlpha',
    bgAngle: 'bgAngle',
    bgRatio: 'bgRatio',
    canvasBgColor: 'canvasBgColor',
    canvasBaseColor: 'canvasBaseColor',
    divLineColor: 'divLineColor',
    legendBgColor: 'legendBgColor',
    legendBorderColor: 'legendBorderColor',
    toolTipbgColor: 'toolTipbgColor',
    toolTipBorderColor: 'toolTipBorderColor',
    baseFontColor: 'baseFontColor',
    anchorBgColor: 'anchorBgColor'
  },
  chart3D: {
    bgColor: 'bgColor3D',
    bgAlpha: 'bgAlpha3D',
    bgAngle: 'bgAngle3D',
    bgRatio: 'bgRatio3D',
    canvasBgColor: 'canvasBgColor3D',
    canvasBaseColor: canvasBaseColor3DStr,
    divLineColor: 'divLineColor3D',
    divLineAlpha: 'divLineAlpha3D',
    legendBgColor: 'legendBgColor3D',
    legendBorderColor: 'legendBorderColor3D',
    toolTipbgColor: 'toolTipbgColor3D',
    toolTipBorderColor: 'toolTipBorderColor3D',
    baseFontColor: 'baseFontColor3D',
    anchorBgColor: 'anchorBgColor3D'
  }
},
    hideFn = function hideFn() {
  this.hide();
},

// for hiding cubepath
hide3dBaseFn = function hide3dBaseFn(el) {
  return function () {
    el.hide();
    el._.cubeside.hide();
    el._.cubetop.hide();
  };
},

// for showing cubepath
show3dBaseFn = function show3dBaseFn() {
  this.show();
  this._.cubeside.show();
  this._.cubetop.show();
};

(0, _dependencyManager.addDep)({
  name: 'canvas3dAnimation',
  type: 'animationRule',
  extension: _canvas3dAnimation2['default']
});
/**
 * Canvas is responsible for create the groups where the chart is going to render.
 * Canvas has also ability to add input buttons, all input components have to be added to
 * canvas to activate them. Ex. ZoomIn,ZoomOut etc Button in zoomscatter chart.
 * Before adding any input component to canvas it is required to attach axes to canvas,
 * so that input components can recognize what axis is zoomable or pannable.
 */

var Canvas3d = function (_Canvas) {
  _inherits(Canvas3d, _Canvas);

  function Canvas3d() {
    _classCallCheck(this, Canvas3d);

    return _possibleConstructorReturn(this, _Canvas.apply(this, arguments));
  }

  /**
   * Sets the name of the component
   * @return {string} name
   */
  Canvas3d.prototype.getName = function getName() {
    return 'canvas';
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  Canvas3d.prototype.getType = function getType() {
    return 'canvas';
  };
  /**
   * Draws canvas3d
   */


  Canvas3d.prototype.drawCanvas = function drawCanvas() {
    if (this.getFromEnv('chart').isBar) {
      this.drawCanvas3dBar();
    } else {
      this.drawCanvas3dColumn();
    }
  };
  /**
   * Draws the 3d canvas for column
   */


  Canvas3d.prototype.drawCanvas3dColumn = function drawCanvas3dColumn() {
    var canvas = this,
        chart = canvas.getFromEnv('chart'),
        jsonData = chart.getFromEnv('dataSource'),
        canvasConfig = canvas.config,
        chartConfig = chart.config,
        canvasLeft = canvasConfig.canvasLeft,
        canvasTop = canvasConfig.canvasTop,
        canvasWidth = canvasConfig.canvasWidth,
        canvasHeight = canvasConfig.canvasHeight,
        chartAttrs = jsonData.chart,
        animationManager = canvas.getFromEnv('animationManager'),
        colorM = chart.getFromEnv('color-manager'),
        canvasBorderElementCheck = canvas.getGraphicalElement('canvasBorderElement'),
        canvasBorderElement,
        canvasElement,
        canvasElementCheck = canvas.getGraphicalElement('canvasElement'),
        config = canvas.config,
        clip = config.clip = {},
        canvasGroup = canvas.getContainer('canvasGroup'),
        canvasBg,
        canvasBgCheck = canvas.getGraphicalElement('canvasBg'),
        canvas3DBase,
        canvas3DBaseCheck = canvas.getGraphicalElement('canvas3DBase'),
        path,
        MAX_MITER_LINEJOIN = 2,
        attr,
        NONE = 'none',
        clipCanvasStr = 'clip-canvas',
        clipCanvasInitStr = 'clip-canvas-init',
        miterStr = _lib.preDefStr.miterStr,
        canvasBGAlphaStr = 'canvasBgAlpha',
        getDarkColor = _lib.graphics.getDarkColor,
        getLightColor = _lib.graphics.getLightColor,
        getAngle = _lib.graphics.getAngle,
        mathMax = Math.max,
        canvasBaseColor3DStr = 'canvasBaseColor3D',
        ROUND = _lib.preDefStr.ROUND,
        COMMA = ',',
        M = 'M',
        L = 'L',
        H = 'H',
        Z = 'Z',
        x,
        y,
        w,
        h,
        zw,
        zh,
        clipCanvas,
        dsGroup = chart.getChildContainer('plotGroup'),
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),


    // animationObj = chart.get(configStr, animationObjStr),
    // animType = animationObj.animType,
    // animObj = animationObj.animObj,
    // dummyObj = animationObj.dummyObj,
    // animationDuration = animationObj.duration,

    canvas3dbaselineCheck = canvas.getGraphicalElement('canvas3dbaseline'),
        canvas3dbaseline,
        canvasBgColor = config.canvasBgColor,
        showCanvasBg = config.showCanvasBG = Boolean((0, _lib.pluckNumber)(chartAttrs.showcanvasbg, 1)),
        canvasBgDepth = chartConfig.canvasBgDepth,
        showCanvasBase = chartConfig.showCanvasBase,
        canvasBaseDepth = chartConfig.canvasBaseDepth,
        canvasBaseColor3D = config.canvasBaseColor3D = (0, _lib.pluck)(chartAttrs.canvasbasecolor, colorM.getColor(canvasBaseColor3DStr)),
        use3DLighting = config.use3DLighting = (0, _lib.pluckNumber)(chartAttrs.use3dlighting, 1),
        palleteString = chartPaletteStr.chart3D,
        canvasBorderRadius = config.canvasBorderRadius = (0, _lib.pluckNumber)(chartAttrs.plotborderradius, 0),
        canvasBorderWidth = 0,
        borderWHlf = canvasBorderWidth * 0.5,
        canvasBorderColor = config.canvasBorderColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.canvasbordercolor, colorM.getColor(_lib.canvasBorderColorStr))),
        canBGAlpha = config.canBGAlpha = (0, _lib.pluck)(chartAttrs.canvasbgalpha, colorM.getColor(canvasBGAlphaStr)),
        canBGColor = config.canBGColor = (0, _lib.pluck)(chartAttrs.canvasbgcolor, colorM.getColor(palleteString.canvasBgColor)),
        xDepth = chartConfig.xDepth,
        yDepth = chartConfig.yDepth,

    // 2 px extra xDepth and yDepth in 3d chart's base
    canvasBasePadding = chartConfig.canvasBasePadding || 2;

    if (use3DLighting) {
      canvasBgColor = config.canvasBgColor = {
        FCcolor: {
          color: getDarkColor(canBGColor, 85) + _lib.COMMASTRING + getLightColor(canBGColor, 55),
          alpha: canBGAlpha + _lib.COMMASTRING + canBGAlpha,
          ratio: _lib.BGRATIOSTRING,
          angle: getAngle(chartConfig.width - (chartConfig.marginLeft + chartConfig.marginRight), chartConfig.height - (chartConfig.marginTop + chartConfig.marginBottom), 1)
        }
      };
    } else {
      canvasBgColor = config.canvasBgColor = (0, _lib.convertColor)(canBGColor, canBGAlpha);
    }

    canBGColor = canBGColor.split(_lib.COMMASTRING)[0];
    canBGAlpha = canBGAlpha.split(_lib.COMMASTRING)[0];

    xDepth = config.xDepth = 10;
    yDepth = config.yDepth = 10;

    attr = {
      x: canvasLeft - borderWHlf,
      y: canvasTop - borderWHlf,
      width: canvasWidth + canvasBorderWidth,
      height: canvasHeight + canvasBorderWidth,
      r: canvasBorderRadius,
      'stroke-width': canvasBorderWidth,
      stroke: canvasBorderColor,
      'stroke-linejoin': canvasBorderWidth > MAX_MITER_LINEJOIN ? ROUND : miterStr
    };

    canvasBorderElement = animationManager.setAnimation({
      el: canvasBorderElementCheck || 'rect',
      attr: attr,
      component: canvas,
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvasBorderElementCheck) {
      canvas.addGraphicalElement('canvasBorderElement', canvasBorderElement);
    }

    // create a clip-rect to clip canvas for later use
    clip[clipCanvasStr] = [mathMax(0, canvasLeft - xDepth), mathMax(0, canvasTop), mathMax(1, canvasWidth + xDepth), mathMax(1, canvasHeight + yDepth)];
    clip[clipCanvasInitStr] = [mathMax(0, canvasLeft - xDepth), mathMax(0, canvasTop - yDepth), 1, mathMax(1, canvasHeight + yDepth * 2)];

    clipCanvas = clip[clipCanvasStr].slice(0);
    animationManager.setAnimation({
      el: dsGroup,
      attr: { 'clip-rect': clipCanvas },
      component: canvas
    });

    animationManager.setAnimation({
      el: dataLabelsLayer,
      attr: { 'clip-rect': clipCanvas },
      component: canvas
    });

    attr = {
      x: canvasLeft,
      y: canvasTop,
      width: canvasWidth,
      height: canvasHeight,
      r: canvasBorderRadius,
      'stroke-width': 0,
      'stroke': NONE,
      fill: (0, _lib.toRaphaelColor)(canvasBgColor)
    };

    canvasElement = animationManager.setAnimation({
      el: canvasElementCheck || 'rect',
      attr: attr,
      component: canvas,
      label: 'canvas',
      callback: showCanvasBg ? _lib.stubFN : hideFn,
      container: canvasGroup
    });
    if (!canvasElementCheck) {
      canvas.addGraphicalElement('canvasElement', canvasElement);
    }

    path = [M, canvasLeft + canvasWidth, COMMA, canvasTop, L, canvasLeft + canvasWidth + canvasBgDepth, COMMA, canvasTop + canvasBgDepth * 1.2, COMMA, canvasLeft + canvasWidth + canvasBgDepth, COMMA, canvasTop + canvasHeight - canvasBgDepth, COMMA, canvasLeft + canvasWidth, COMMA, canvasTop + canvasHeight, Z];

    // Horizontal 3D Base
    canvasBg = animationManager.setAnimation({
      el: canvasBgCheck || 'path',
      attr: {
        'path': path,
        'stroke-width': 0,
        'stroke': NONE,
        fill: (0, _lib.toRaphaelColor)(canvasBgColor)
      },
      component: canvas,
      label: 'canvas',
      callback: showCanvasBg ? _lib.stubFN : hideFn,
      container: canvasGroup
    });
    if (!canvasBgCheck) {
      canvas.addGraphicalElement('canvasBg', canvasBg);
    }

    if (showCanvasBg) {
      canvasBg.show();
      canvasElement.show();
    }

    x = canvasLeft - xDepth - canvasBasePadding;
    y = canvasTop + canvasHeight + yDepth + canvasBasePadding;
    w = canvasWidth;
    h = canvasBaseDepth;
    zw = xDepth + canvasBasePadding;
    zh = yDepth + canvasBasePadding;

    // if (!canvas3DBase) {
    canvas3DBase = animationManager.setAnimation({
      el: canvas3DBaseCheck || 'cubepath',
      component: canvas,
      index: 0,
      attr: {
        cubepath: [x, y, w, h, zw, zh],
        'stroke': NONE,
        'stroke-width': 0,
        'fill': canvasBaseColor3D.replace(_lib.dropHash, _lib.HASHSTRING),
        noGradient: !use3DLighting
      },
      callback: showCanvasBase ? _lib.stubFN : hide3dBaseFn(canvas3DBaseCheck),
      label: 'canvas',
      container: canvasGroup
    });

    if (!canvas3DBaseCheck) {
      canvas.addGraphicalElement('canvas3DBase', canvas3DBase);
    }

    canvas3dbaseline = animationManager.setAnimation({
      el: canvas3dbaselineCheck || 'path',
      attr: {
        'path': [M, canvasLeft, canvasTop + canvasHeight, H, canvasWidth + canvasLeft],
        stroke: R.tintshade(canvasBaseColor3D.replace(_lib.dropHash, _lib.HASHSTRING), 0.05).rgba
      },
      component: canvas,
      callback: showCanvasBase ? _lib.stubFN : hideFn,
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvas3dbaselineCheck) {
      canvas.addGraphicalElement('canvas3dbaseline', canvas3dbaseline);
    }

    if (showCanvasBase) {
      show3dBaseFn.call(canvas3DBase);
      canvas3dbaseline.show();
    }
  };
  /**
   * Draws the 3d canvas for bar
   */


  Canvas3d.prototype.drawCanvas3dBar = function drawCanvas3dBar() {
    var canvas = this,
        chart = canvas.getFromEnv('chart'),
        jsonData = chart.getFromEnv('dataSource'),
        chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        chartAttrs = jsonData.chart,
        colorM = chart.getFromEnv('color-manager'),
        canvasBorderElement,
        canvasBorderElementCheck = canvas.getGraphicalElement('canvasBorderElement'),
        canvasElementCheck = canvas.getGraphicalElement('canvasElement'),
        canvasElement,
        config = canvas.config,
        clip = config.clip = {},
        canvasGroup = canvas.getContainer('canvasGroup'),
        canvasBg,
        canvasBgCheck = canvas.getGraphicalElement('canvasBg'),
        canvas3DBase,
        canvas3DBaseCheck = canvas.getGraphicalElement('canvas3DBase'),
        attr,
        path,
        x,
        y,
        w,
        h,
        zw,
        zh,
        clipCanvas,
        dsGroup = chart.getChildContainer('plotGroup'),
        dataLabelsLayer = chart.getChildContainer('datalabelsGroup'),
        animationManager = canvas.getFromEnv('animationManager'),
        canvas3dbaseline,
        canvas3dbaselineCheck = canvas.getGraphicalElement('canvas3dbaseline'),
        canvasBgColor = config.canvasBgColor,
        showCanvasBg = config.showCanvasBG = Boolean((0, _lib.pluckNumber)(chartAttrs.showcanvasbg, 1)),
        canvasBgDepth = chartConfig.canvasBgDepth,
        showCanvasBase = chartConfig.showCanvasBase,
        canvasBaseDepth = chartConfig.canvasBaseDepth,
        canvasBaseColor3D = config.canvasBaseColor3D = (0, _lib.pluck)(chartAttrs.canvasbasecolor, colorM.getColor(canvasBaseColor3DStr)),
        use3DLighting = config.use3DLighting = (0, _lib.pluckNumber)(chartAttrs.use3dlighting, 1),
        palleteString = chartPaletteStr.chart3D,
        canvasBorderRadius = config.canvasBorderRadius = (0, _lib.pluckNumber)(chartAttrs.plotborderradius, 0),
        canvasBorderWidth = config.canvasBorderWidth = 0,
        borderWHlf = canvasBorderWidth * 0.5,
        canvasBorderColor = config.canvasBorderColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.canvasbordercolor, colorM.getColor(_lib.canvasBorderColorStr))),
        canBGAlpha = config.canBGAlpha = (0, _lib.pluck)(chartAttrs.canvasbgalpha, colorM.getColor(canvasBGAlphaStr)),
        canBGColor = config.canBGColor = (0, _lib.pluck)(chartAttrs.canvasbgcolor, colorM.getColor(palleteString.canvasBgColor)),
        xDepth = config.xDepth,
        yDepth = config.yDepth;
    if (use3DLighting) {
      canvasBgColor = config.canvasBgColor = {
        FCcolor: {
          color: getDarkColor(canBGColor, 85) + COMMA + getLightColor(canBGColor, 55),
          alpha: canBGAlpha + COMMA + canBGAlpha,
          ratio: _lib.BGRATIOSTRING,
          angle: getAngle(chartConfig.width - (chartConfig.marginLeft + chartConfig.marginRight), chartConfig.height - (chartConfig.marginTop + chartConfig.marginBottom), 1)
        }
      };
    } else {
      canvasBgColor = config.canvasBgColor = (0, _lib.convertColor)(canBGColor, canBGAlpha);
    }

    canBGColor = canBGColor.split(COMMA)[0];
    canBGAlpha = canBGAlpha.split(COMMA)[0];

    xDepth = config.xDepth = 5;
    yDepth = config.yDepth = 5;

    attr = {
      x: canvasLeft - borderWHlf,
      y: canvasTop - borderWHlf,
      width: canvasWidth + canvasBorderWidth,
      height: canvasHeight + canvasBorderWidth,
      r: canvasBorderRadius,
      'stroke-width': canvasBorderWidth,
      stroke: canvasBorderColor,
      'stroke-linejoin': canvasBorderWidth > MAX_MITER_LINEJOIN ? ROUND : miterStr
    };

    canvasBorderElement = animationManager.setAnimation({
      el: canvasBorderElementCheck || 'rect',
      attr: attr,
      container: canvasGroup,
      label: 'canvas',
      component: canvas
    });
    if (!canvasBorderElementCheck) {
      canvas.addGraphicalElement('canvasBorderElement', canvasBorderElement);
    }

    // create a clip-rect to clip canvas for later use
    clip[clipCanvasStr] = [mathMax(0, canvasLeft - xDepth), mathMax(0, canvasTop), mathMax(1, canvasWidth + xDepth), mathMax(1, canvasHeight + yDepth)];
    clip[clipCanvasInitStr] = [mathMax(0, canvasLeft - xDepth), mathMax(0, canvasTop - yDepth), 1, mathMax(1, canvasHeight + yDepth * 2)];

    clipCanvas = clip[clipCanvasStr].slice(0);
    animationManager.setAnimation({
      el: dsGroup,
      attr: { 'clip-rect': clipCanvas },
      component: canvas
    });

    animationManager.setAnimation({
      el: dataLabelsLayer,
      attr: { 'clip-rect': clipCanvas },
      component: canvas
    });

    attr = {
      x: canvasLeft,
      y: canvasTop,
      width: canvasWidth,
      height: canvasHeight,
      r: canvasBorderRadius,
      'stroke-width': 0,
      'stroke': NONE,
      fill: (0, _lib.toRaphaelColor)(canvasBgColor)
    };

    canvasElement = animationManager.setAnimation({
      el: canvasElementCheck || 'rect',
      attr: attr,
      component: canvas,
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvasElementCheck) {
      canvas.addGraphicalElement('canvasElement', canvasElement);
    }

    // Vertical 3D Base
    path = [M, canvasLeft, COMMA, canvasTop, L, canvasLeft + canvasBgDepth * 1.2, COMMA, canvasTop - canvasBgDepth, COMMA, canvasLeft + canvasWidth - canvasBgDepth, COMMA, canvasTop - canvasBgDepth, COMMA, canvasLeft + canvasWidth, COMMA, canvasTop, Z];
    // if (!canvasBg) {
    canvasBg = animationManager.setAnimation({
      el: canvasBgCheck || 'path',
      attr: {
        'path': path,
        'stroke-width': 0,
        'stroke': NONE,
        fill: (0, _lib.toRaphaelColor)(canvasBgColor)
      },
      component: canvas,
      callback: showCanvasBg ? _lib.stubFN : hideFn,
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvasBgCheck) {
      canvas.addGraphicalElement('canvasBg', canvasBg);
    }

    // Show canvas background if showCanvasBg is enabled
    if (showCanvasBg) {
      canvasElement.show();
      canvasBg.show();
    }

    x = canvasLeft - xDepth - canvasBaseDepth - 1;
    y = canvasTop + yDepth + 1;
    w = canvasBaseDepth;
    h = canvasHeight;
    zw = xDepth + 1;
    zh = yDepth + 1;
    canvas3DBase = animationManager.setAnimation({
      el: canvas3DBaseCheck || 'cubepath',
      attr: {
        'cubepath': [x, y, w, h, zw, zh],
        'stroke': NONE,
        'stroke-width': 0,
        'fill': canvasBaseColor3D.replace(_lib.dropHash, _lib.HASHSTRING),
        noGradient: !use3DLighting
      },
      component: canvas,
      callback: showCanvasBase ? _lib.stubFN : hide3dBaseFn(canvas3DBaseCheck),
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvas3DBaseCheck) {
      canvas.addGraphicalElement('canvas3DBase', canvas3DBase);
    }

    canvas3dbaseline = animationManager.setAnimation({
      el: canvas3dbaselineCheck || 'path',
      attr: {
        'path': [M, canvasLeft, canvasTop, V, canvasHeight + canvasTop],
        stroke: Raphael.tintshade(canvasBaseColor3D.replace(_lib.dropHash, _lib.HASHSTRING), 0.05).rgba
      },
      component: canvas,
      callback: showCanvasBase ? _lib.stubFN : hideFn,
      label: 'canvas',
      container: canvasGroup
    });
    if (!canvas3dbaselineCheck) {
      canvas.addGraphicalElement('canvas3dbaseline', canvas3dbaseline);
    }

    // Show canvas base if showCanvasBase is enabled
    if (showCanvasBase) {
      canvas3dbaseline.show();
      show3dBaseFn.call(canvas3DBase);
    }
  };

  return Canvas3d;
}(_canvas2['default']);

exports['default'] = Canvas3d;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var animationObject = {
  initialAttr: {
    opacity: 0
  },
  finalAttr: {
    opacity: 1
  },
  slot: 'initial'
};

exports['default'] = {
  'initial.canvas.canvas': {
    'canvas.appearing': [animationObject]
  }
};

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var children = chart.getChildren(),
      canvas = children.canvas[0],
      datasetParent = canvas.getChildren('vCanvas')[0],
      dataObj = chart.getFromEnv('dataSource'),
      dataset = dataObj.dataset,
      dsType = chart.config.defaultDatasetType || '',
      data = dataObj.data || dataset && dataset[0].data,
      DSClass = void 0,
      datasetJSON = void 0,
      groupManager3d = void 0;

  datasetJSON = _dataSegregator(data);

  if (!(data && data.length !== 0)) {
    chart.setChartMessage();
    return;
  }
  (0, _lib.componentFactory)(datasetParent, _column2['default'], 'datasetGroup_' + dsType);
  groupManager3d = datasetParent.getChildren('datasetGroup_' + dsType)[0];

  DSClass = chart.getDSdef();
  (0, _lib.datasetFactory)(groupManager3d, DSClass, 'dataset', 1, [datasetJSON]);
};

var _lib = __webpack_require__(5);

var _column = __webpack_require__(136);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TRUE_STRING = 'true',
    ONE_STRING = '1',

/**
 * Filters data
 * @param {Array} data user input data
 * @return {Object} filtered data array
 */
_dataSegregator = function _dataSegregator(data) {
  var dataOnlyArr = [];

  (0, _lib.fcEach)(data, function (datum) {
    if (!(datum.vline === TRUE_STRING || datum.vline === true || datum.vline === 1 || datum.vline === ONE_STRING)) {
      dataOnlyArr.push(datum);
    }
  });
  return {
    data: dataOnlyArr
  };
};
/**
 * Create dataset for 3d charts
 * @param {Object} chart Chart API
 */

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.group.column3d': function initialGroupColumn3d() {
    return {
      'zeroPlane.appearing': function zeroPlaneAppearing() {
        return [{
          initialAttr: {
            opacity: 0
          },
          finalAttr: {
            opacity: 1
          },
          slot: 'axis'
        }];
      }
    };
  }
};

/***/ }),

/***/ 639:
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

var _fusioncharts = __webpack_require__(640);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bar2d = __webpack_require__(138);

var _bar2d2 = _interopRequireDefault(_bar2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * chart API of the Bar2Dn chart
 */
var Bar2D = function (_SSBarCartesian) {
  _inherits(Bar2D, _SSBarCartesian);

  /**
   * constructor fn
   */
  function Bar2D() {
    _classCallCheck(this, Bar2D);

    var _this = _possibleConstructorReturn(this, _SSBarCartesian.call(this));

    _this.isBar = true;
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  Bar2D.getName = function getName() {
    return 'Bar2D';
  };

  /**
   * Sets the type of the component
   * @return {string} type
   */


  Bar2D.prototype.getType = function getType() {
    return 'chartAPI';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Bar2D.prototype.getName = function getName() {
    return 'Bar2D';
  };
  /**
   * This set the default configuration for this chart
   */


  Bar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSBarCartesian.prototype.__setDefaultConfig.call(this);
    this.config.friendlyName = 'Bar Chart';
    this.config.singleseries = true;
    this.config.defaultDatasetType = 'bar2d';
    this.config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {class} bar2d dataset definitions
   */


  Bar2D.prototype.getDSdef = function getDSdef() {
    return _bar2d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   */


  Bar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    // this fn overrides
  };

  return Bar2D;
}(_fusioncharts2['default']);

exports['default'] = Bar2D;

/***/ }),

/***/ 640:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(106);

var BarCartesianMethods = _interopRequireWildcard(_fusioncharts3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */

/**
 * This class is base class for single series bar charts.
 */
var SSBarCartesian = function (_SSCartesian) {
  _inherits(SSBarCartesian, _SSCartesian);

  function SSBarCartesian() {
    _classCallCheck(this, SSBarCartesian);

    return _possibleConstructorReturn(this, _SSCartesian.apply(this, arguments));
  }

  /**
   * Sets the name of the component
   * @return {string} name
   */
  SSBarCartesian.prototype.getName = function getName() {
    return 'SSBarCartesian';
  };
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  SSBarCartesian.getName = function getName() {
    return 'SSBarCartesian';
  };

  /**
   * This method create axis compoenents and attach with chart and linked with canvas.
   */


  SSBarCartesian.prototype._createAxes = function _createAxes() {
    BarCartesianMethods._createAxes.call(this);
  };
  /**
   * This method parse all the attributes which are associated with axis compoenents.
   * So that axis compoenents can be configured
   * @return { Object } contains axes config
   */


  SSBarCartesian.prototype._feedAxesRawData = function _feedAxesRawData() {
    return BarCartesianMethods._feedAxesRawData.call(this);
  };
  /**
   * This method first assigns the entire area of the chart to canvas. Then every component (for example toolbox,
   * caption etc) is asked to allocate its own space. Once every compoenent has had its space allocated, the canvas is
   * assigned the remaining space.
   */


  SSBarCartesian.prototype._spaceManager = function _spaceManager() {
    BarCartesianMethods._spaceManager.call(this);
  };
  /**
   * This function is adjusting value padding depending upon data and axis labels and set dimention to axis
   */


  SSBarCartesian.prototype._postSpaceManagement = function _postSpaceManagement() {
    BarCartesianMethods._postSpaceManagement.call(this);
  };

  return SSBarCartesian;
}(_fusioncharts2['default']);

exports['default'] = SSBarCartesian;

/***/ }),

/***/ 644:
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

var _fusioncharts = __webpack_require__(645);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bar3d = __webpack_require__(213);

var _bar3d2 = _interopRequireDefault(_bar3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for Bar3D
 */
var Bar3D = function (_SSBarCartesian3D) {
  _inherits(Bar3D, _SSBarCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Bar3D.getName = function getName() {
    return 'Bar3D';
  };
  /**
   * Constructor function for Bar3D class
   */


  function Bar3D() {
    _classCallCheck(this, Bar3D);

    var _this = _possibleConstructorReturn(this, _SSBarCartesian3D.call(this));

    _this.defaultPlotShadow = 1;
    _this.fireGroupEvent = true;

    _this.isBar = true;
    _this.defaultZeroPlaneHighlighted = false;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Bar3D.prototype.getName = function getName() {
    return 'Bar3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Bar3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSBarCartesian3D.prototype.__setDefaultConfig && _SSBarCartesian3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.singleseries = true;
    config.friendlyName = '3D Bar Chart';
    config.defaultDatasetType = 'bar3d';
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object} dataset class for bar2d
   */


  Bar3D.prototype.getDSdef = function getDSdef() {
    return _bar3d2['default'];
  };

  return Bar3D;
}(_fusioncharts2['default']);

exports['default'] = Bar3D;

/***/ }),

/***/ 645:
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

var _fusioncharts = __webpack_require__(315);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(106);

var msBarCartesianAPI = _interopRequireWildcard(_fusioncharts3);

var _fusioncharts4 = __webpack_require__(211);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for SSBarCartesian3D
 */
var SSBarCartesian3D = function (_SSCartesian3D) {
  _inherits(SSBarCartesian3D, _SSCartesian3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SSBarCartesian3D.getName = function getName() {
    return 'SSBarCartesian3D';
  };
  /**
   * Constructor function of SSBarCartesian3D class
   */


  function SSBarCartesian3D() {
    _classCallCheck(this, SSBarCartesian3D);

    var _this = _possibleConstructorReturn(this, _SSCartesian3D.call(this));

    _this._drawCanvas = _fusioncharts4._drawCanvas;
    for (var methodName in msBarCartesianAPI) {
      if (methodName !== 'default') {
        continue;
      }
      _this[methodName] = msBarCartesianAPI[methodName];
    }
    // this._createAxes = _createAxes;
    // this._feedAxesRawData = _feedAxesRawData;
    // this._spaceManager = _spaceManager;
    // this._postSpaceManagement = _postSpaceManagement;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  SSBarCartesian3D.prototype.getName = function getName() {
    return 'SSBarCartesian3D';
  };
  /**
   * This method parse all the attributes which are associated with axis compoenents.
   * So that axis compoenents can be configured.
   * @return {Object} configurations of axes
   */


  SSBarCartesian3D.prototype._feedAxesRawData = function _feedAxesRawData() {
    return msBarCartesianAPI._feedAxesRawData.call(this);
  };
  /**
   * This method first assigns the entire area of the chart to canvas. Then every component (for example toolbox,
   * caption etc) is asked to allocate its own space. Once every compoenent has had its space allocated, the canvas is
   * assigned the remaining space.
   */


  SSBarCartesian3D.prototype._spaceManager = function _spaceManager() {
    msBarCartesianAPI._spaceManager.call(this);
  };
  /**
   * This function is adjusting value padding depending upon data and axis labels and set dimention to axis
   */


  SSBarCartesian3D.prototype._postSpaceManagement = function _postSpaceManagement() {
    msBarCartesianAPI._postSpaceManagement.call(this);
  };

  return SSBarCartesian3D;
}(_fusioncharts2['default']);

exports['default'] = SSBarCartesian3D;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _barAnimation = __webpack_require__(317);

var _barAnimation2 = _interopRequireDefault(_barAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.bar3D': _barAnimation2['default']['initial.dataset.bar2D']
};

/***/ }),

/***/ 647:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _area = __webpack_require__(23);

var _area2 = _interopRequireDefault(_area);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    SEVENTYSTRING = _lib.preDefStr.SEVENTYSTRING;

var Area2D = function (_SSCartesian) {
  _inherits(Area2D, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Area2D.getName = function getName() {
    return 'Area2D';
  };

  function Area2D() {
    _classCallCheck(this, Area2D);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.defaultPlotShadow = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Area2D.prototype.getName = function getName() {
    return 'Area2D';
  };

  Area2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig && _SSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Area Chart';
    config.singleseries = true;
    config.defaultDatasetType = 'area';
    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEF;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEF;
    config.anchorbgalpha = _lib.HUNDREDSTRING;
    config.anchorimagealpha = _lib.HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEF;
    config.anchorbordercolor = UNDEF;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEF;
    config.linealpha = _lib.HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
    config.enablemousetracking = true;
    config.defaultcrosslinethickness = 1;
  };
  // This method return the dataset definations for this charts


  Area2D.prototype.getDSdef = function getDSdef() {
    return _area2['default'];
  };
  // // This method return the dataset-group definations for this charts
  // getDSGroupdef (name) {
  //   return UNDEF;
  // }


  return Area2D;
}(_fusioncharts2['default']);

exports['default'] = Area2D;

/***/ }),

/***/ 648:
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

var _fusioncharts = __webpack_require__(52);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    SEVENTYSTRING = _lib.preDefStr.SEVENTYSTRING;

var Line = function (_SSCartesian) {
  _inherits(Line, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Line.getName = function getName() {
    return 'Line';
  };

  function Line() {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.defaultPlotShadow = 1;
    _this.axisPaddingLeft = 0;
    _this.axisPaddingRight = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Line.prototype.getName = function getName() {
    return 'Line';
  };

  Line.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig && _SSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Line Chart';
    config.singleseries = true;
    config.defaultDatasetType = 'line';
    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEF;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEF;
    config.anchorbgalpha = _lib.HUNDREDSTRING;
    config.anchorimagealpha = _lib.HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEF;
    config.anchorbordercolor = UNDEF;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEF;
    config.linealpha = _lib.HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
    config.zeroplanethickness = 1;
    config.enablemousetracking = true;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.defaultcrosslinethickness = 1;
  };
  // This method return the dataset definations for this charts


  Line.prototype.getDSdef = function getDSdef() {
    return _line2['default'];
  };
  // // This method return the dataset-group definations for this charts
  // getDSGroupdef (name) {
  //   return UNDEF;
  // }


  return Line;
}(_fusioncharts2['default']);

exports['default'] = Line;

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var children = void 0,
      chartAttr = chart.getFromEnv('chart-attrib'),
      showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1),
      canvas = chart.getChildren('canvas')[0],
      axisRefVisualCartesian = canvas.getChildren('axisRefVisualCartesian')[0],
      zoomObj = {
    zoomable: true,
    pannable: true
  },
      config = chart._feedAxesRawData(),
      yAxes = void 0,
      xAxis = void 0,
      redraw = function redraw() {
    return axisRefVisualCartesian.asyncDraw();
  };

  (0, _lib.componentFactory)(chart, _category2['default'], 'xAxis', 1, config.xAxisConf);
  children = chart.getChildren();
  xAxis = children.xAxis[0];

  axisRefVisualCartesian.setLinkedItem(xAxis.getId(), xAxis);
  canvas.attachAxis(xAxis, false, chart.zoomX ? zoomObj : {});
  xAxis.setLinkedItem('canvas', canvas);

  (0, _lib.componentFactory)(chart, _numeric2['default'], 'yAxis', showCumulativeLine ? 2 : 1, config.yAxisConf);
  yAxes = chart.getChildren('yAxis');

  yAxes && yAxes[1] && yAxes[1].setAxisConfig({
    isPercent: true,
    drawLabels: true,
    drawPlotLines: true,
    drawAxisName: true,
    drawAxisLine: true,
    drawPlotBands: true,
    drawTrendLines: true,
    drawTrendLabels: true
  });

  _forEach2['default'].call(yAxes, function (axis) {
    if (axis.getState('removed') !== true) {
      axis.setLinkedItem('canvas', canvas);
      axisRefVisualCartesian.setLinkedItem(axis.getId(), axis);
      canvas.attachAxis(axis, true, chart.zoomY ? zoomObj : {});
      axisRefVisualCartesian.setLinkedItem(axis.getId(), axis);
      axisRefVisualCartesian.addExtEventListener('visiblerangeset', redraw, axis);
    } else {
      canvas.detachAxis(axis);
    }
  });
  chart._setCategories();
};

var _numeric = __webpack_require__(69);

var _numeric2 = _interopRequireDefault(_numeric);

var _category = __webpack_require__(88);

var _category2 = _interopRequireDefault(_category);

var _lib = __webpack_require__(5);

var _forEach = __webpack_require__(37);

var _forEach2 = _interopRequireDefault(_forEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var children = chart.getChildren(),
      chartAttr = chart.getFromEnv('chart-attrib'),
      canvas = children.canvas[0],
      datasetParent = canvas.getChildren('vCanvas'),
      dataObj = chart.getFromEnv('dataSource'),
      dataset = dataObj.dataset,
      showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1),
      data = dataObj.data || dataset && dataset[0].data,
      DSClass = void 0,
      groupManager3d = void 0,
      datasetJSON = void 0;

  datasetJSON = {
    data: data
  };

  if (!(data && data.length !== 0)) {
    chart.setChartMessage();
    return;
  }
  DSClass = chart.getDSdef('column');

  if (chart.config.is3D) {
    (0, _lib.componentFactory)(datasetParent[0], _column2['default'], 'datasetGroup_column');
    groupManager3d = datasetParent[0].getChildren('datasetGroup_column')[0];
  }

  (0, _lib.datasetFactory)(groupManager3d || datasetParent[0], DSClass, 'dataset', 1, [datasetJSON]);
  if (showCumulativeLine) {
    DSClass = chart.getDSdef('line');
    (0, _lib.datasetFactory)(datasetParent[1], DSClass, 'dataset', 1, [datasetJSON], [1]);
  }
};

var _column = __webpack_require__(136);

var _column2 = _interopRequireDefault(_column);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 651:
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

var _fusioncharts = __webpack_require__(319);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _lib = __webpack_require__(5);

var _pareto3d = __webpack_require__(652);

var _paretoline = __webpack_require__(322);

var _canvas3dAxisRefCartesian = __webpack_require__(105);

var _canvas3dAxisRefCartesian2 = _interopRequireDefault(_canvas3dAxisRefCartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for  Pareto3D
 */
var Pareto3D = function (_Pareto2D) {
  _inherits(Pareto3D, _Pareto2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pareto3D.getName = function getName() {
    return 'Pareto3D';
  };
  /**
   * Constructor function for class Pareto3D
   */


  function Pareto3D() {
    _classCallCheck(this, Pareto3D);

    var _this = _possibleConstructorReturn(this, _Pareto2D.call(this));

    _this.fireGroupEvent = true;
    _this.defaultPlotShadow = 1;
    _this.isPercentage = true;
    _this.registerFactory('canvas', _canvas3dAxisRefCartesian2['default']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Pareto3D.prototype.getName = function getName() {
    return 'Pareto3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  Pareto3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pareto2D.prototype.__setDefaultConfig && _Pareto2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = '3D Pareto Chart';
    config.singleseries = true;
    config.hasLegend = false;
    config.defaultDatasetType = 'column3d';
    config.plotfillalpha = _lib.preDefStr.NINETYSTRING;
    config.use3dlineshift = 1;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param {string} name Name of dataset class
   * @return {Class}       Pareto dataset
   */


  Pareto3D.prototype.getDSdef = function getDSdef(name) {
    return name === 'column' ? _pareto3d.ParetoColumn3DDataset : _paretoline.ParetoLineDataset;
  };

  return Pareto3D;
}(_fusioncharts2['default']);

exports['default'] = Pareto3D;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ParetoColumn3DDataset = undefined;

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

var _pareto = __webpack_require__(321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var math = Math,
    mathRound = math.round,

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
    state: 'appearing',
    component: dataset,
    label: 'group'
  });
};

var ParetoColumn3DDataset = function (_ParetoColumnDataset) {
  _inherits(ParetoColumn3DDataset, _ParetoColumnDataset);

  function ParetoColumn3DDataset() {
    _classCallCheck(this, ParetoColumn3DDataset);

    return _possibleConstructorReturn(this, _ParetoColumnDataset.apply(this, arguments));
  }

  /**
   * function to check if given x,y coordiante is over a column plot or not
   * @param  {number} pX     index of column
   * @param  {number} chartX x co-ordinate
   * @param  {number} chartY y co-ordinate
   * @return {Object}        hovered information
   */
  ParetoColumn3DDataset.prototype._checkPointerOverColumn = function _checkPointerOverColumn(pX, chartX, chartY) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        showPlotBorder = chartConfig.showplotborder,
        dataStore = dataset.components.data,
        pointObj = dataStore[pX],
        pY,
        dx,
        dy,
        hovered,
        halfPlotBorderThickness,
        zDepth = 10,
        xPos,
        yPos,
        width,
        height;

    if (!pointObj) {
      return;
    }

    pY = pointObj.config.setValue;
    //  if (chartConfig.isstacked && ((pY < 0 && dataset.valueLook) || (pY > 0 && !dataset.valueLook))) {
    //    return;
    //  }

    plotBorderThickness = showPlotBorder ? plotBorderThickness : 0;
    halfPlotBorderThickness = plotBorderThickness / 2;

    halfPlotBorderThickness = halfPlotBorderThickness % 2 === 0 ? halfPlotBorderThickness + 1 : mathRound(halfPlotBorderThickness);

    if (pY !== null) {
      xPos = pointObj._xPos - zDepth;
      width = pointObj._width + zDepth;
      yPos = pointObj._yPos;
      height = pointObj._height + zDepth;

      dx = chartX - xPos + halfPlotBorderThickness;
      dy = chartY - yPos + halfPlotBorderThickness;

      hovered = dx >= 0 && dx <= width + plotBorderThickness && dy >= 0 && dy <= height + plotBorderThickness;

      if (pY >= 0) {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      } else {
        hovered = hovered ? chartX + chartY - (xPos + yPos) - zDepth > 0 : false;
        hovered = hovered ? chartX + chartY - (xPos + yPos + width + height) + zDepth < 0 : false;
      }

      if (hovered) {
        return {
          pointIndex: pX,
          hovered: hovered,
          pointObj: dataStore[pX]
        };
      }
    }
  };

  /**
   * Function that retunr the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
   */


  ParetoColumn3DDataset.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        xAxis = dataset.getFromEnv('xAxis'),
        x,
        pX;

    x = xAxis.getValue(chartX);
    pX = Math.round(x);
    // Checking for overlap between two cosecutive column plots along x-axis
    return pX - x > 0 ? dataset._checkPointerOverColumn(pX, chartX, chartY) || dataset._checkPointerOverColumn(pX - 1, chartX, chartY) : dataset._checkPointerOverColumn(pX + 1, chartX, chartY) || dataset._checkPointerOverColumn(pX, chartX, chartY);
  };
  /**
   * function to create group for dataset
   */


  ParetoColumn3DDataset.prototype.createContainer = function createContainer() {
    var dataset = this,
        parent = dataset.getLinkedParent();

    !dataset.getContainer('labelGroup') && dataset.addContainer('labelGroup', createGroup('label-group', parent.getChildContainer('vcanvasLabelGroup'), dataset).attr('class', 'fusioncharts-datalabels'));
  };

  return ParetoColumn3DDataset;
}(_pareto.ParetoColumnDataset);

exports.ParetoColumn3DDataset = ParetoColumn3DDataset;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var dataObj = chart.getFromEnv('dataSource'),
      dataset = dataObj.dataset,
      data = dataObj.data || dataset && dataset[0].data,
      DSClass = void 0,
      datasetJSON = void 0;

  datasetJSON = _dataSegregator(data);

  if (!(data && data.length !== 0)) {
    chart.setChartMessage();
    return;
  }
  DSClass = chart.getDSdef();
  (0, _lib.datasetFactory)(chart, DSClass, 'dataset', 1, [datasetJSON]);
};

var _lib = __webpack_require__(5);

var TRUE_STRING = 'true',
    ONE_STRING = '1',

/**
  * Seggregates the original data to data and vline.
  * @param {Object} data  Original data used for seggregation.
  * @return {Object}  JSON data to be used further by the child components, e.g. dataSet.
 */
_dataSegregator = function _dataSegregator(data) {
  var dataOnlyArr = [];

  (0, _lib.fcEach)(data, function (datum) {
    if (!(datum.vline === TRUE_STRING || datum.vline === true || datum.vline === 1 || datum.vline === ONE_STRING)) {
      dataOnlyArr.push(datum);
    }
  });
  return {
    catData: [],
    data: dataOnlyArr
  };
};
/**
 * function to  create dataset.
 * assign dataset to vCanvas.
 * @param {Object} chart chart API
 **/

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pie2dAnimation = __webpack_require__(323);

var _pie2dAnimation2 = _interopRequireDefault(_pie2dAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.doughnut2D': _pie2dAnimation2['default']['initial.dataset.pie2D']
};

/***/ }),

/***/ 655:
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

var _fusioncharts = __webpack_require__(215);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _doughnut2d = __webpack_require__(326);

var _doughnut2d2 = _interopRequireDefault(_doughnut2d);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }
// import CenterLabel from '../components/centerlabel';


var Doughnut2D = function (_Pie2D) {
  _inherits(Doughnut2D, _Pie2D);

  function Doughnut2D() {
    _classCallCheck(this, Doughnut2D);

    return _possibleConstructorReturn(this, _Pie2D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Doughnut2D.getName = function getName() {
    return 'Doughnut2D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  Doughnut2D.prototype.getName = function getName() {
    return 'Doughnut2D';
  };

  Doughnut2D.prototype.configureAttributes = function configureAttributes(dataObj) {
    _Pie2D.prototype.configureAttributes.call(this, dataObj);
    var iapi = this,
        conf = iapi.config,
        chartAttrs = iapi.getFromEnv('chart-attrib');
    // dataset = iapi.getChildren('dataset')[0],
    // centerLabel;
    conf.doughnutradius = (0, _lib.pluck)(chartAttrs.doughnutradius, '50%');
    // if (!(centerLabel = iapi.getChildren('centerLabel'))) {
    //   centerLabel = iapi.attachChild(new CenterLabel(), 'centerLabel', false);
    //   iapi.addToEnv('centerLabel', centerLabel);
    //   centerLabel.setLinkedItem('dataset', dataset);
    // }
  };

  Doughnut2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2D.prototype.__setDefaultConfig && _Pie2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Doughnut Chart';
    config.defaultDatasetType = 'Doughnut2D';
    config.singletonPlaceValue = false;
  };

  Doughnut2D.prototype.getDSdef = function getDSdef() {
    return _doughnut2d2['default'];
  };

  return Doughnut2D;
}(_fusioncharts2['default']);

exports['default'] = Doughnut2D;

/***/ }),

/***/ 656:
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

var _fusioncharts = __webpack_require__(324);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _doughnut3d = __webpack_require__(657);

var _doughnut3d2 = _interopRequireDefault(_doughnut3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Doughnut3D = function (_Pie3D) {
  _inherits(Doughnut3D, _Pie3D);

  function Doughnut3D() {
    _classCallCheck(this, Doughnut3D);

    return _possibleConstructorReturn(this, _Pie3D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Doughnut3D.getName = function getName() {
    return 'Doughnut3D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  Doughnut3D.prototype.getName = function getName() {
    return 'Doughnut3D';
  };

  Doughnut3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie3D.prototype.__setDefaultConfig && _Pie3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = '3D Doughnut Chart';
    config.defaultDatasetType = 'Doughnut3D';
    config.singletonPlaceValue = false;
  };

  Doughnut3D.prototype.getDSdef = function getDSdef() {
    return _doughnut3d2['default'];
  };

  return Doughnut3D;
}(_fusioncharts2['default']);

exports['default'] = Doughnut3D;

/***/ }),

/***/ 657:
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

var _pie3d = __webpack_require__(325);

var _pie3d2 = _interopRequireDefault(_pie3d);

var _doughnut3dAnimation = __webpack_require__(658);

var _doughnut3dAnimation2 = _interopRequireDefault(_doughnut3dAnimation);

var _dependencyManager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

(0, _dependencyManager.addDep)({
  name: 'doughnut3dAnimation',
  type: 'animationRule',
  extension: _doughnut3dAnimation2['default']
});

var Doughnut3DDataset = function (_Pie3DDataset) {
  _inherits(Doughnut3DDataset, _Pie3DDataset);

  function Doughnut3DDataset() {
    _classCallCheck(this, Doughnut3DDataset);

    return _possibleConstructorReturn(this, _Pie3DDataset.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  Doughnut3DDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Doughnut3DDataset.prototype.getName = function getName() {
    return 'doughnut3D';
  };

  Doughnut3DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie3DDataset.prototype.__setDefaultConfig && _Pie3DDataset.prototype.__setDefaultConfig.call(this);
    this.config.doughnutradius = '50%';
  };

  Doughnut3DDataset.prototype._configurePie3DManager = function _configurePie3DManager() {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        data = dataSetComponents.data;

    if (pie3DManager) {
      pie3DManager.configure(dataSetConfig.pieSliceDepth, data.length === 1, dataSetConfig.use3DLighting, true);
    }
  };

  return Doughnut3DDataset;
}(_pie3d2['default']);

exports['default'] = Doughnut3DDataset;

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pie3dAnimation = __webpack_require__(327);

var _pie3dAnimation2 = _interopRequireDefault(_pie3dAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.doughnut3D': _pie3dAnimation2['default']['initial.dataset.pie3d']
};

/***/ }),

/***/ 659:
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

var _fusioncharts = __webpack_require__(106);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _canvas3dAxisRefCartesian = __webpack_require__(105);

var _canvas3dAxisRefCartesian2 = _interopRequireDefault(_canvas3dAxisRefCartesian);

var _multiseries3dDataset = __webpack_require__(212);

var _multiseries3dDataset2 = _interopRequireDefault(_multiseries3dDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class MSBarCartesian3D
 */
var MSBarCartesian3D = function (_MSBarCartesian) {
  _inherits(MSBarCartesian3D, _MSBarCartesian);

  /**
   * constructor fn
   */
  function MSBarCartesian3D() {
    _classCallCheck(this, MSBarCartesian3D);

    var _this = _possibleConstructorReturn(this, _MSBarCartesian.call(this));

    _this.registerFactory('canvas', _canvas3dAxisRefCartesian2['default']);
    _this.registerFactory('dataset', _multiseries3dDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  MSBarCartesian3D.getName = function getName() {
    return 'MSBarCartesian3D';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSBarCartesian3D.prototype.getName = function getName() {
    return 'MSBarCartesian3D';
  };

  /**
   * parse defualt configuration of the chart
   */


  MSBarCartesian3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBarCartesian.prototype.__setDefaultConfig && _MSBarCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.showplotborder = 0;
  };

  return MSBarCartesian3D;
}(_fusioncharts2['default']);

exports['default'] = MSBarCartesian3D;

/***/ }),

/***/ 660:
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

var _fusioncharts = __webpack_require__(216);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedArea2D = function (_MSArea) {
  _inherits(StackedArea2D, _MSArea);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedArea2D.getName = function getName() {
    return 'StackedArea2D';
  };

  function StackedArea2D() {
    _classCallCheck(this, StackedArea2D);

    var _this = _possibleConstructorReturn(this, _MSArea.call(this));

    _this.showsum = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedArea2D.prototype.getName = function getName() {
    return 'StackedArea2D';
  };

  StackedArea2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSArea.prototype.__setDefaultConfig && _MSArea.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Stacked Area Chart';
    config.plotfillalpha = _lib.HUNDREDSTRING;
    config.isstacked = 1;
  };

  /** This method return the dataset-group definations for this charts **/


  StackedArea2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedArea2D;
}(_fusioncharts2['default']);

exports['default'] = StackedArea2D;

/***/ }),

/***/ 662:
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

var _fusioncharts = __webpack_require__(71);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedColumn2D = function (_MSColumn2D) {
  _inherits(StackedColumn2D, _MSColumn2D);

  function StackedColumn2D() {
    _classCallCheck(this, StackedColumn2D);

    return _possibleConstructorReturn(this, _MSColumn2D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn2D.getName = function getName() {
    return 'StackedColumn2D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn2D.prototype.getName = function getName() {
    return 'StackedColumn2D';
  };

  StackedColumn2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSColumn2D.prototype.__setDefaultConfig && _MSColumn2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Stacked Column Chart';
    config.isstacked = true;
  };

  /** This method return the dataset definations for this charts **/


  StackedColumn2D.prototype.getDSdef = function getDSdef() {
    return _column2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  StackedColumn2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedColumn2D;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn2D;

/***/ }),

/***/ 663:
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

var _fusioncharts = __webpack_require__(328);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for StackedColumn3D
 */
var StackedColumn3D = function (_MSColumn3D) {
  _inherits(StackedColumn3D, _MSColumn3D);

  function StackedColumn3D() {
    _classCallCheck(this, StackedColumn3D);

    return _possibleConstructorReturn(this, _MSColumn3D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn3D.getName = function getName() {
    return 'StackedColumn3D';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn3D.prototype.getName = function getName() {
    return 'StackedColumn3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  StackedColumn3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSColumn3D.prototype.__setDefaultConfig && _MSColumn3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = '3D Stacked Column Chart';
    //  config.showplotborder = 0;
    config.maxbarheight = 50;
    config.enablemousetracking = true;
    config.isstacked = true;
  };

  /**
   * This method return the dataset definations for this charts
   * @return {Object} Column Dataset definition
   */


  StackedColumn3D.prototype.getDSdef = function getDSdef() {
    return _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {Object}       Multiseries column group definition
   */


  StackedColumn3D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedColumn3D;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn3D;
//  export { _mouseEvtHandler };

/***/ }),

/***/ 664:
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

var _fusioncharts = __webpack_require__(329);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedBar2D = function (_MSBar2D) {
  _inherits(StackedBar2D, _MSBar2D);

  function StackedBar2D() {
    _classCallCheck(this, StackedBar2D);

    return _possibleConstructorReturn(this, _MSBar2D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedBar2D.getName = function getName() {
    return 'StackedBar2D';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedBar2D.prototype.getName = function getName() {
    return 'StackedBar2D';
  };

  StackedBar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBar2D.prototype.__setDefaultConfig && _MSBar2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Stacked Bar Chart';
    config.enablemousetracking = true;
    config.maxbarheight = 50;
    config.isstacked = true;
  };
  /** This method return the dataset-group definations for this charts **/


  StackedBar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedBar2D;
}(_fusioncharts2['default']);

exports['default'] = StackedBar2D;

/***/ }),

/***/ 665:
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

var _fusioncharts = __webpack_require__(330);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _bar3d = __webpack_require__(213);

var _bar3d2 = _interopRequireDefault(_bar3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class StackedBar3D
 */
var StackedBar3D = function (_MSBar3D) {
  _inherits(StackedBar3D, _MSBar3D);

  function StackedBar3D() {
    _classCallCheck(this, StackedBar3D);

    return _possibleConstructorReturn(this, _MSBar3D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedBar3D.getName = function getName() {
    return 'StackedBar3D';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedBar3D.prototype.getName = function getName() {
    return 'StackedBar3D';
  };
  /**
   * parse defualt configuration of the chart
   */


  StackedBar3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBar3D.prototype.__setDefaultConfig && _MSBar3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = '3D Stacked Bar Chart';
    config.enablemousetracking = true;
    config.maxbarheight = 50;
    config.isstacked = true;
  };

  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} Multiseries bar group definition
   * @memberof StackedBar3D
   */


  StackedBar3D.prototype.getDSdef = function getDSdef() {
    return _bar3d2['default'];
  };

  /**
   * This method return the dataset-group definations for this charts
   * @return {Object}       Multiseries column group definition
   */


  StackedBar3D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedBar3D;
}(_fusioncharts2['default']);

exports['default'] = StackedBar3D;

/***/ }),

/***/ 666:
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

var _marimekko = __webpack_require__(667);

var _marimekko2 = _interopRequireDefault(_marimekko);

var _marimekko3 = __webpack_require__(669);

var _marimekko4 = _interopRequireDefault(_marimekko3);

var _multiseriesDataset = __webpack_require__(90);

var _multiseriesDataset2 = _interopRequireDefault(_multiseriesDataset);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * class for Marimekko chartAPI
 */
var Marimekko = function (_MSCartesian) {
  _inherits(Marimekko, _MSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Marimekko.getName = function getName() {
    return 'Marimekko';
  };

  /**
   * Constructor funtion for Marimekko chartAPI
   */


  function Marimekko() {
    _classCallCheck(this, Marimekko);

    var _this = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _this.isValueAbs = true;
    _this.distributedColumns = true;
    _this.stack100percent = true;
    _this.isStacked = true;
    _this.showsum = 1;
    _this.registerFactory('dataset', function (chart) {
      (0, _multiseriesDataset2['default'])(chart);
      var children = chart.getChildren(),
          canvas = children.canvas[0],
          vCanvas = canvas.getChildren('vCanvas')[0],
          dsType = chart.config.defaultDatasetType || '',
          manager = vCanvas.getChildren('datasetGroup_' + dsType)[0];

      manager.addToEnv('categories', chart.getFromEnv('dataSource').categories);
    }, ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  Marimekko.prototype.getName = function getName() {
    return 'Marimekko';
  };

  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  Marimekko.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    _MSCartesian.prototype.parseChartAttr.call(this, dataObj);
    this.config.showXAxisPercentValues = (0, _lib.pluckNumber)(dataObj.chart && dataObj.chart.showxaxispercentvalues, 1);
  };

  /**
   * Set default chart configuration
   */


  Marimekko.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian.prototype.__setDefaultConfig && _MSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Marimekko Chart';
    config.defaultDatasetType = 'marimekko';
    config.isstacked = true;
    config.showpercentvalues = 0;
    config.usepercentdistribution = 1;
    config.showsum = 1;
    config.enablemousetracking = true;
  };

  /**
   * This method return the dataset definations for this charts
   * @return {Object} Column dataset definition
   */


  Marimekko.prototype.getDSdef = function getDSdef() {
    return _marimekko2['default'];
  };

  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} Multiseries column group definition
   */


  Marimekko.prototype.getDSGroupdef = function getDSGroupdef() {
    return _marimekko4['default'];
  };

  return Marimekko;
}(_fusioncharts2['default']);

exports['default'] = Marimekko;

/***/ }),

/***/ 667:
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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _lib = __webpack_require__(5);

var _marimekkoAnimation = __webpack_require__(668);

var _marimekkoAnimation2 = _interopRequireDefault(_marimekkoAnimation);

var _dependencyManager = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var dropHash = _lib.regex.dropHypeash,
    math = Math,
    mathRound = math.round,
    mathAbs = math.abs,
    getLightColor = _lib.graphics.getLightColor;
(0, _dependencyManager.addDep)({
  name: 'marimekkoAnimation',
  type: 'animationRule',
  extension: _marimekkoAnimation2['default']
});
/**
 * class for Marimekko dataset
 */

var MarimekkoDataset = function (_ColumnDataset) {
  _inherits(MarimekkoDataset, _ColumnDataset);

  /**
   * Constructor function of MarimekkoDataset
   */
  function MarimekkoDataset() {
    _classCallCheck(this, MarimekkoDataset);

    var _this = _possibleConstructorReturn(this, _ColumnDataset.call(this));

    _this.config.groupName = 'column';
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  MarimekkoDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MarimekkoDataset.prototype.getName = function getName() {
    return 'marimekko';
  };
  /**
   * Function to configure the dataset
   * @param  {Object} datasetJSON JSON for dataset configurations
   */


  MarimekkoDataset.prototype.configure = function configure(datasetJSON) {
    (0, _lib.fcEach)(datasetJSON.data, function (obj) {
      if (obj) {
        obj.value = mathAbs(obj.value);
      }
    });

    _ColumnDataset.prototype.configure.call(this, datasetJSON);
  };

  /**
   * Function to register datasets in the internal data store of legend class.
   */


  MarimekkoDataset.prototype._addLegend = function _addLegend() {
    var dataset = this,
        strokeColor,
        fillColor,
        config,
        legendItem,
        conf = dataset.config,
        legend = dataset.getFromEnv('legend'),
        color = conf.legendSymbolColor;
    strokeColor = getLightColor(color, 60).replace(dropHash, _lib.HASHSTRING);
    fillColor = {
      FCcolor: {
        color: color,
        angle: 0,
        ratio: '0',
        alpha: '100'
      }
    };
    config = {
      enabled: conf.includeInLegend,
      type: dataset.type,
      label: (0, _lib.getFirstValue)(dataset.config.JSONData.seriesname)
    };
    if (conf.includeinlegend) {
      legendItem = legend.getItem(dataset.config.legendItemId);
      if (!legendItem) {
        dataset.config.legendItemId = legend.createItem(dataset);
        legendItem = legend.getItem(dataset.config.legendItemId);
        dataset.addExtEventListener('click', function () {
          dataset.legendInteractivity(legendItem);
        }, legendItem);
      }
      legendItem.configure(config);
      legendItem.setStateCosmetics('default', {
        symbol: {
          fill: (0, _lib.toRaphaelColor)(fillColor),
          stroke: (0, _lib.toRaphaelColor)(strokeColor)
        }
      });
      // check if dataset is initiallyhidden
      if (!dataset.getState('visible')) {
        legendItem.setLegendState('hidden');
      }
    } else if (dataset.config.legendItemId) {
      legend.disposeItem(dataset.config.legendItemId);
    }
  };

  /**
   * Function returns the nearest dataset index
   * @param {number} searchElementIndex The derived search index as per the mouse postion
   * @param {Array} arr Has the information about each stack
   * @return {number} The found dataset index
   */


  MarimekkoDataset.prototype.searchIndex = function searchIndex(searchElementIndex, arr) {
    var dataset = this,

    // chart = dataset.chart,
    xAxis = dataset.getFromEnv('xAxis'),
        minIndex = 0,
        len = arr.length - 1,
        maxIndex = len,
        currentIndex,
        currentElementIndex;

    while (minIndex <= maxIndex) {
      currentIndex = Math.round((minIndex + maxIndex) / 2) || 0;
      currentElementIndex = xAxis.getPixel(arr[currentIndex].x) + arr[currentIndex].columnWidth / 2;

      if (currentElementIndex < searchElementIndex) {
        minIndex = currentIndex + 1;
      } else if (currentElementIndex > searchElementIndex) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }
    return minIndex;
  };

  /**
   * Allocates positions and parses attributes of plot during post spacemanagement
   *
   * @memberof MarimekkoDataset
   */


  MarimekkoDataset.prototype.allocatePosition = function allocatePosition() {
    this.getLinkedParent()._setStackDimensions();
    _ColumnDataset.prototype.allocatePosition.call(this);
  };
  /**
   * Function that return the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
  */


  MarimekkoDataset.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        groupManager = dataset.getLinkedParent(),
        stackConf = groupManager.getstackConf(),

    // chart = dataset.chart,
    chartConfig = dataset.getFromEnv('chartConfig'),
        configManager = groupManager.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        showPlotBorder = chartConfig.showplotborder,
        len = stackConf.length - 1,
        halfPlotBorderThickness,
        xPos,
        returnValue,
        datasetIndex;

    plotBorderThickness = showPlotBorder ? plotBorderThickness : 0;
    halfPlotBorderThickness = plotBorderThickness / 2;
    halfPlotBorderThickness = halfPlotBorderThickness % 2 === 0 ? halfPlotBorderThickness + 1 : Math.round(halfPlotBorderThickness);
    xPos = chartX + halfPlotBorderThickness;
    datasetIndex = returnValue && configManager.datasetIndex || dataset.searchIndex(xPos, stackConf);
    // save dataIndex to prevent unnecessary search
    configManager.datasetIndex || (configManager.datasetIndex = datasetIndex);
    // Checking for overlap between two cosecutive column plots along x-axis
    returnValue = dataset._checkPointerOverColumn(datasetIndex, chartX, chartY);
    // delete dataIndex
    returnValue ? delete configManager.datasetIndex : dataset.index === len && delete configManager.datasetIndex;

    return returnValue;
  };

  /**
   * Over-writting the function
   * @return {Object} returning the this object to avoid lint error
   */


  MarimekkoDataset.prototype.setColumnPosition = function setColumnPosition() {
    return this;
  };

  /**
   * Setting the width, xPos of the individual column data such that the corresponding stacks share a common boundary
   * @param {number} xPos The pre-calculated x position
   * @param {number} yPos The pre-calculated y position
   * @param {number} height The pre-calculated height position
   * @param {number} width The pre-calculated width position
   * @param {number} index The index of the data
   * @return {Object} the calculated xPos, yPos, width and height
   */


  MarimekkoDataset.prototype.fineTunePlotDimension = function fineTunePlotDimension(xPos, yPos, height, width, index) {
    var dataSet = this,
        parent = dataSet.getLinkedParent(),
        stackConf = parent.getstackConf(),
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        canvasConfig = chart.getChildren('canvas')[0].config,
        canvasBorderWidth = canvasConfig.canvasBorderWidth,
        hasValidCanvasBorder = canvasBorderWidth > 0,
        canvasRight = canvasConfig.canvasRight,
        canvasTop = canvasConfig.canvasTop,
        canvasLeft = canvasConfig.canvasLeft;

    // if there is no stackConf then return the pre-calculated position
    if (!stackConf.length) {
      return {
        xPos: xPos,
        yPos: yPos,
        width: width,
        height: height
      };
    }
    width = stackConf[index].columnWidth;
    xPos -= width / 2;
    if (parseInt(yPos) <= canvasTop) {
      height -= canvasTop - yPos - +hasValidCanvasBorder;
      yPos = canvasTop - +hasValidCanvasBorder;
    }

    if (plotBorderThickness <= 1) {
      // in case xPos is right of canvas-left position -
      // normalize
      if (mathRound(xPos) <= canvasLeft) {
        width += xPos;
        xPos = canvasLeft - plotBorderThickness / 2 + +!!plotBorderThickness - +hasValidCanvasBorder;
        width -= xPos;
      }
      // in case plot exceeds canvas-right position -
      // normalize width
      if (mathRound(xPos + width) >= canvasRight) {
        width = canvasRight - xPos + plotBorderThickness / 2 - +!!plotBorderThickness + +hasValidCanvasBorder;
      }
    }

    return {
      xPos: xPos,
      yPos: yPos,
      width: width,
      height: height
    };
  };

  return MarimekkoDataset;
}(_column2['default']);

exports['default'] = MarimekkoDataset;

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _sign = __webpack_require__(116);

var _sign2 = _interopRequireDefault(_sign);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  'initial.dataset.marimekko': function initialDatasetMarimekko() {
    var component = this,
        chart = component.getFromEnv('chart'),
        yDepth = chart.config.yDepth || 0,
        yAttrKey = 'y',
        hAttrKey = 'height',
        yAxis = component.getFromEnv('yAxis');
    return {
      'rect.appearing': function rectAppearing(inputJSON) {
        // appearing animation for the data plots.
        var zeroPos = yAxis.getPixel(yAxis.getAxisBase()) + (chart.isBar ? -yDepth : yDepth),
            actualFinalAttr = inputJSON.attr,
            yAttrVal,
            hAttrVal,
            yBasePos,
            endPosWRT0;

        // Store final y and h for later use
        yAttrVal = actualFinalAttr[yAttrKey];
        hAttrVal = actualFinalAttr[hAttrKey];
        endPosWRT0 = (0, _sign2['default'])(yAttrVal + hAttrVal / 2 - zeroPos);
        yBasePos = yAttrVal + hAttrVal;
        return [{
          initialAttr: function initialAttr() {
            var initialAttr = {};
            // Replace the y and h with initial positions
            initialAttr[yAttrKey] = yBasePos;
            initialAttr[hAttrKey] = 0;
            return initialAttr;
          },
          slot: 'plot',
          startEnd: function startEnd() {
            return _lib.animHelperFN.getTimeByValue({ start: 0, end: 0.6 }, {
              startPx: zeroPos,
              endPx: endPosWRT0 === 1 ? component.config.yAxisMaxPixel : component.config.yAxisMinPixel
            }, {
              startPx: yBasePos,
              endPx: endPosWRT0 === 1 ? actualFinalAttr[yAttrKey] + actualFinalAttr[hAttrKey] : actualFinalAttr[yAttrKey]
            });
          },
          effect: 'linear'
        }];
      },
      'group.appearing': function groupAppearing(inputJSON) {
        if (inputJSON.attr.name === 'label-group') {
          return [{
            initialAttr: {
              opacity: 0
            },
            finalAttr: {
              opacity: 1
            },
            slot: 'final'
          }];
        } else {
          return [{
            initialAttr: {
              opacity: 1
            },
            finalAttr: {
              opacity: 1
            },
            slot: 'final'
          }];
        }
      },
      '*': null
    };
  }
};

/***/ }),

/***/ 669:
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

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var createGroup = function createGroup(groupName, parentContainer, manager) {
  var animationManager = manager.getFromEnv('animationManager');
  return animationManager.setAnimation({
    el: 'group',
    attr: { name: groupName },
    container: parentContainer,
    component: manager,
    dom: 'group'
  });
};
/**
 * class for marimekko group manager
 */

var MarimekkoStackgroup = function (_CartesianStackgroup) {
  _inherits(MarimekkoStackgroup, _CartesianStackgroup);

  function MarimekkoStackgroup() {
    _classCallCheck(this, MarimekkoStackgroup);

    return _possibleConstructorReturn(this, _CartesianStackgroup.apply(this, arguments));
  }

  /**
   * Sets the type of the component
   * @return {string} type
   */
  MarimekkoStackgroup.prototype.getType = function getType() {
    return 'group';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  MarimekkoStackgroup.prototype.getName = function getName() {
    return 'marimekkoStackgroup';
  };

  /**
   * Function to return the stackConf of groupmanager
   * @return {Object} configurations
   */


  MarimekkoStackgroup.prototype.getstackConf = function getstackConf() {
    return this.config.stackConf;
  };
  /**
   * function to calculate plot position, max and min of manager in case a of stacked dataset
   */


  MarimekkoStackgroup.prototype._setStackPosition = function _setStackPosition() {
    _CartesianStackgroup.prototype._setStackPosition.call(this);
    var manager = this,
        config = manager.config,
        stackPercentValues,
        stackConf = config.stackConf || (config.stackConf = []),
        stackSumValue = config.stackValues,
        positionStackConfig,
        sumValue = 0,
        sumPercent = 0,
        k,
        len,
        x,
        xAxis = manager.getFromEnv('xAxis'),
        range = xAxis.getVisibleConfig(),
        xMin = range.minValue,
        xMax = range.maxValue,
        diff = xMax - xMin,
        tempX = xMin;
    for (k = 0, len = stackSumValue.length; k < len; k++) {
      sumValue += stackSumValue[k] && stackSumValue[k].positive || 0;
    }
    config.totalSumValue = sumValue;
    stackPercentValues = manager.getStackSumPercent();
    for (k = 0, len = stackSumValue.length; k < len; k++) {
      if (!(positionStackConfig = stackConf[k])) {
        positionStackConfig = stackConf[k] = {};
      }
      sumPercent = sumPercent + stackPercentValues[k] / 100;
      x = stackPercentValues[k] / 100 * diff / 2 + tempX;
      tempX = sumPercent * diff + xMin;
      positionStackConfig.x = x;
      xAxis.updateTicksValues(k, { x: x });
    }
  };
  /**
   * This function returns an array containing the percent values of individual stack
   * @return {Array} conatains the total value of each stack in percentage
   */


  MarimekkoStackgroup.prototype.getStackSumPercent = function getStackSumPercent() {
    var manager = this,
        config = manager.config,
        stackSumValue = config.stackValues,
        totalSumValue = config.totalSumValue,
        i,
        numberFormatter = manager.getFromEnv('number-formatter'),
        categories = manager.getFromEnv('categories')[0].category,
        setUserWidth = config.setUserWidth,
        arr = [];
    for (i = 0; i < stackSumValue.length; i++) {
      if (setUserWidth) {
        arr[i] = numberFormatter.getCleanValue(categories[i].widthpercent);
      } else {
        arr[i] = (stackSumValue[i] && stackSumValue[i].positive || 0) / totalSumValue * 100;
      }
    }
    return arr;
  };

  /**
   * Draw function of group manager
   */


  MarimekkoStackgroup.prototype.draw = function draw() {
    _CartesianStackgroup.prototype.draw.call(this);
    this.drawLabel();
  };

  /**
   * Function to create container for labels
   */


  MarimekkoStackgroup.prototype.createContainer = function createContainer() {
    _CartesianStackgroup.prototype.createContainer.call(this);
    var manager = this,
        parent = manager.getLinkedParent();

    !manager.getContainer('commonLabelContainer') && manager.addContainer('commonLabelContainer', createGroup('manager-commonLabelContainer', parent.getChildContainer('vcanvasLabelGroup'), manager));
  };

  /**
   * This function draws the cumulative percentage labels appearing at bottom right of the stack
   */


  MarimekkoStackgroup.prototype.drawLabel = function drawLabel() {
    var manager = this,
        config = manager.config,
        smartLabel = manager.getFromEnv('smartLabel'),
        animationManager = manager.getFromEnv('animationManager'),
        stackPercentValues = manager.getStackSumPercent(),
        chartAttr = manager.getFromEnv('chart-attrib'),
        jsonData,
        datasets = manager.getChildren('dataset'),
        dataset,
        data,
        stackConf = config.stackConf,
        xPos,
        yPos,
        index,
        commonLabelContainer = manager.getContainer('commonLabelContainer'),
        numberFormatter = manager.getFromEnv('number-formatter'),
        percentValue = 0,
        formatedPercentValue,
        attr,
        chartConfig = manager.getFromEnv('chartConfig'),
        canvasBottom = chartConfig.canvasBottom,
        xAxis = manager.getFromEnv('xAxis'),
        inCanvasStyle = manager.getFromEnv('style'),
        style = chartConfig.dataLabelStyle,
        length = stackPercentValues.length,
        bBoxObj,
        labelEle,
        labelEleCheck,
        sumValues = config.stackValues,
        borderColor,
        bgColor,
        borderThickness,
        showXAxisPercentValues = chartConfig.showXAxisPercentValues,
        labels = manager.getGraphicalElement('commonLabels') || [],
        prevLabelLen = labels.length,
        i,
        j;

    smartLabel.setStyle(style);
    if (showXAxisPercentValues) {
      bgColor = (0, _lib.pluck)(style.backgroundColor, '#ffffff');
      borderColor = (0, _lib.pluck)(style.borderColor === _lib.BLANKSTRING ? '#' + inCanvasStyle.inCancolor : style.borderColor, '#000000');
      borderThickness = (0, _lib.pluck)(style.borderThickness, 1);
      for (index = 0; index < length - 1; index++) {
        if (!sumValues[index]) {
          continue;
        }
        percentValue += stackPercentValues[index];
        formatedPercentValue = numberFormatter.percentValue(percentValue);
        xPos = xAxis.getPixel(stackConf[index].x) + stackConf[index].columnWidth / 2;
        yPos = canvasBottom;
        labelEleCheck = labels[index];
        if (sumValues[index].positive === sumValues[index].negative) {
          formatedPercentValue = '';
          if (labelEleCheck) {
            labelEleCheck.hide();
          }
          continue;
        }
        attr = {
          text: formatedPercentValue,
          fill: style.color,
          'text-bound': [bgColor, borderColor, borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
          'line-height': style.lineHeight,
          visibility: _lib.visibleStr
        };

        bBoxObj = smartLabel.getOriSize(formatedPercentValue);

        yPos = yPos - bBoxObj.height / 2 - borderThickness;
        attr.x = xPos;
        attr.y = yPos;
        labelEleCheck && labelEleCheck.show();
        labelEle = animationManager.setAnimation({
          el: labelEleCheck || 'text',
          container: commonLabelContainer,
          attr: attr,
          dom: 'text',
          component: manager
        });
        if (!labelEleCheck) {
          manager.addGraphicalElement('commonLabels', labelEle, true);
        }
      }

      for (var _i = index; _i < prevLabelLen; _i++) {
        labels[_i].hide();
      }
    }
    for (i = 0; i < datasets.length; i++) {
      dataset = datasets[i];
      data = dataset.components.data;
      jsonData = dataset.config.JSONData;
      for (j = 0; j < data.length; j++) {
        data[j].config.finalTooltext = (0, _lib.parseTooltext)(data[j].config.toolText, [111], { xAxisPercentValue: stackPercentValues[j].toPrecision(4) + '%' }, data, chartAttr, jsonData);
      }
    }
  };

  /**
   * Helper function for determining the xPos of sumLabel
   * @param {number} index The index of the sumLabel
   * @return {number} x-position
   */


  MarimekkoStackgroup.prototype._getXpos = function _getXpos(index) {
    var manager = this,
        xAxis = manager.getFromEnv('xAxis');
    return xAxis.getPixel(manager.config.stackConf[index].x);
  };

  /**
   * Function to set column width and position of all the stacks
   */


  MarimekkoStackgroup.prototype._setStackDimensions = function _setStackDimensions() {
    var manager = this,
        config = manager.config,
        k,
        stackSumValue = config.stackValues,
        categories = manager.getFromEnv('categories')[0].category,
        catObj,
        setUserWidth,
        len,
        sum = 0,
        positionStackConfig,
        numberFormatter = manager.getFromEnv('number-formatter'),
        percentValue,
        stackPercentValues = manager.getStackSumPercent(),
        canvasWidth = manager.getFromEnv('canvasConfig').canvasWidth,
        stackConf = config.stackConf || (config.stackConf = []);
    for (k = 0; k < categories.length; k++) {
      catObj = categories[k];
      if (catObj.widthpercent) {
        sum += numberFormatter.getCleanValue(catObj.widthpercent);
      }
    }
    if (sum === 100) {
      setUserWidth = config.setUserWidth = 1;
    }
    for (k = 0, len = stackSumValue.length; k < len; k++) {
      if (!(positionStackConfig = stackConf[k])) {
        positionStackConfig = stackConf[k] = {};
      }
      if (setUserWidth) {
        percentValue = numberFormatter.getCleanValue(catObj.widthpercent) / 100;
      } else {
        percentValue = stackPercentValues[k] / 100;
      }
      positionStackConfig.columnWidth = percentValue * canvasWidth;
    }
  };

  return MarimekkoStackgroup;
}(_cartesian2['default']);

exports['default'] = MarimekkoStackgroup;

/***/ }),

/***/ 672:
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

var _fusioncharts = __webpack_require__(218);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class MSColumnLine3D
 */
var MSColumnLine3D = function (_MSCombi3D) {
  _inherits(MSColumnLine3D, _MSCombi3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSColumnLine3D.getName = function getName() {
    return 'MSColumnLine3D';
  };
  /**
   * Creates constructor function for MSColumnLine3D class
   */


  function MSColumnLine3D() {
    _classCallCheck(this, MSColumnLine3D);

    var _this = _possibleConstructorReturn(this, _MSCombi3D.call(this));

    _this.defaultPlotShadow = 1;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSColumnLine3D.prototype.getName = function getName() {
    return 'MSColumnLine3D';
  };
  /**
   * Sets default configuration of chart elements
   */


  MSColumnLine3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCombi3D.prototype.__setDefaultConfig && _MSCombi3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = 'Multi-series Column and Line Chart';
    config.use3dlineshift = 1;
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  MSColumnLine3D.prototype.getDSdef = function getDSdef(name) {
    return name === 'line' ? _line2['default'] : _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  MSColumnLine3D.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column3d' ? _column2['default'] : undefined;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  MSColumnLine3D.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'line' ? 'line' : 'column3d';
  };

  return MSColumnLine3D;
}(_fusioncharts2['default']);

exports['default'] = MSColumnLine3D;

/***/ }),

/***/ 673:
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

var _fusioncharts = __webpack_require__(140);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEFINED = void 0;

var StackedColumn2DLine = function (_MSCombi2D) {
  _inherits(StackedColumn2DLine, _MSCombi2D);

  function StackedColumn2DLine() {
    _classCallCheck(this, StackedColumn2DLine);

    return _possibleConstructorReturn(this, _MSCombi2D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn2DLine.getName = function getName() {
    return 'StackedColumn2DLine';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn2DLine.prototype.getName = function getName() {
    return 'StackedColumn2DLine';
  };

  StackedColumn2DLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCombi2D.prototype.__setDefaultConfig && _MSCombi2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Stacked Column and Line Chart';
    config.defaultDatasetType = 'column';
    config.isstacked = true;
    config.stack100percent = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  StackedColumn2DLine.prototype.getDSdef = function getDSdef(name) {
    return name === 'line' ? _line2['default'] : _column2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  StackedColumn2DLine.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column' ? _cartesian2['default'] : UNDEFINED;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  StackedColumn2DLine.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'line' ? 'line' : 'column';
  };

  return StackedColumn2DLine;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn2DLine;

/***/ }),

/***/ 674:
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

var _fusioncharts = __webpack_require__(218);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column3d = __webpack_require__(56);

var _column3d2 = _interopRequireDefault(_column3d);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for StackedColumn3DLine
 */
var StackedColumn3DLine = function (_MSCombi3D) {
  _inherits(StackedColumn3DLine, _MSCombi3D);

  function StackedColumn3DLine() {
    _classCallCheck(this, StackedColumn3DLine);

    return _possibleConstructorReturn(this, _MSCombi3D.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn3DLine.getName = function getName() {
    return 'StackedColumn3DLine';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn3DLine.prototype.getName = function getName() {
    return 'StackedColumn3DLine';
  };
  /**
   * Sets default configuration of chart elements
   */


  StackedColumn3DLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCombi3D.prototype.__setDefaultConfig && _MSCombi3D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.friendlyName = 'Stacked 3D Column and Line Chart';
    config.use3dlineshift = 1;
    config.isstacked = true;
    config.stack100percent = 0;
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  StackedColumn3DLine.prototype.getDSdef = function getDSdef(name) {
    return name === 'line' ? _line2['default'] : _column3d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  StackedColumn3DLine.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column' ? _cartesian2['default'] : undefined;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  StackedColumn3DLine.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'line' ? 'line' : 'column';
  };

  return StackedColumn3DLine;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn3DLine;

/***/ }),

/***/ 675:
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

var _fusioncharts = __webpack_require__(70);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _canvas3dAxisRefCartesian = __webpack_require__(105);

var _canvas3dAxisRefCartesian2 = _interopRequireDefault(_canvas3dAxisRefCartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for MSDybaseCartesian3D
 */
var MSDybaseCartesian3D = function (_MSDyBaseCartesian) {
  _inherits(MSDybaseCartesian3D, _MSDyBaseCartesian);

  /**
   * constructor fn
   */
  function MSDybaseCartesian3D() {
    _classCallCheck(this, MSDybaseCartesian3D);

    var _this = _possibleConstructorReturn(this, _MSDyBaseCartesian.call(this));

    _this.registerFactory('canvas', _canvas3dAxisRefCartesian2['default']);
    return _this;
  }
  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  MSDybaseCartesian3D.getName = function getName() {
    return 'MSDybaseCartesian3D';
  };
  /**
   * Sets default configuration
   * @memberof MSDybaseCartesian3D
   */


  MSDybaseCartesian3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSDyBaseCartesian.prototype.__setDefaultConfig && _MSDyBaseCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSDybaseCartesian3D.prototype.getName = function getName() {
    return 'MSDybaseCartesian3D';
  };

  return MSDybaseCartesian3D;
}(_fusioncharts2['default']);

exports['default'] = MSDybaseCartesian3D;

/***/ }),

/***/ 676:
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

var _fusioncharts = __webpack_require__(334);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates class for StackedColumn3DLineDy
 */
var StackedColumn3DLineDy = function (_MSColumn3DLineDy) {
  _inherits(StackedColumn3DLineDy, _MSColumn3DLineDy);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn3DLineDy.getName = function getName() {
    return 'StackedColumn3DLineDy';
  };
  /**
   * Constructor function of StackedColumn3DLineDy class
   */


  function StackedColumn3DLineDy() {
    _classCallCheck(this, StackedColumn3DLineDy);

    var _this = _possibleConstructorReturn(this, _MSColumn3DLineDy.call(this));

    _this.defaultSecondaryDataset = 'line';
    _this.isDual = true;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn3DLineDy.prototype.getName = function getName() {
    return 'StackedColumn3DLineDy';
  };
  /**
   * Sets default configuration of chart elements
   */


  StackedColumn3DLineDy.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSColumn3DLineDy.prototype.__setDefaultConfig && _MSColumn3DLineDy.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.is3D = true;
    config.sDefaultDatasetType = 'line';
    config.friendlyName = 'Stacked 3D Column and Line Chart';
    config.defaultDatasetType = 'column3d';
    config.use3dlineshift = 1;
    config.isdual = true;
    config.isstacked = true;
    config.showplotborder = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  StackedColumn3DLineDy.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedColumn3DLineDy;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn3DLineDy;

/***/ }),

/***/ 678:
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

var _fusioncharts = __webpack_require__(141);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Creates ScrollStackedColumn2D class
 */
var ScrollStackedColumn2D = function (_ScrollColumn2D) {
  _inherits(ScrollStackedColumn2D, _ScrollColumn2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  ScrollStackedColumn2D.getName = function getName() {
    return 'ScrollStackedColumn2D';
  };

  /**
   * Constructor fn of ScrollStackedColumn2D class
   */


  function ScrollStackedColumn2D() {
    _classCallCheck(this, ScrollStackedColumn2D);

    var _this = _possibleConstructorReturn(this, _ScrollColumn2D.call(this));

    _this.canvasborderthickness = 1;
    _this.avgScrollPointWidth = 75;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ScrollStackedColumn2D.prototype.getName = function getName() {
    return 'ScrollStackedColumn2D';
  };
  /**
   * Sets default chart configuration
   */


  ScrollStackedColumn2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScrollColumn2D.prototype.__setDefaultConfig && _ScrollColumn2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Scrollable Stacked Column Chart';
    config.isstacked = true;
  };
  /**
   * Return Dataset Group class
   * @return {Class} CartesianStackGroup class
   */


  ScrollStackedColumn2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return ScrollStackedColumn2D;
}(_fusioncharts2['default']);

exports['default'] = ScrollStackedColumn2D;

/***/ }),

/***/ 679:
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

var _fusioncharts = __webpack_require__(221);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _line = __webpack_require__(12);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Creates ScrollLine2D class
 */
var ScrollLine2D = function (_ScrollArea2D) {
  _inherits(ScrollLine2D, _ScrollArea2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  ScrollLine2D.getName = function getName() {
    return 'ScrollLine2D';
  };

  /**
   * Constructor fn of ScrollLine2D class
   */


  function ScrollLine2D() {
    _classCallCheck(this, ScrollLine2D);

    var _this = _possibleConstructorReturn(this, _ScrollArea2D.call(this));

    _this.canvasborderthickness = 1;
    _this.avgScrollPointWidth = 75;
    _this.defaultPlotShadow = 1;
    _this.binSize = 0;
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  ScrollLine2D.prototype.getName = function getName() {
    return 'ScrollLine2D';
  };

  /**
   * Sets default chart configuration
   */


  ScrollLine2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScrollArea2D.prototype.__setDefaultConfig && _ScrollArea2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Scrollable Multi-series Line Chart';
    config.defaultDatasetType = 'line';
    config.zeroplanethickness = 1;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.enablemousetracking = true;
    config.defaultcrosslinethickness = 1;
  };

  /** This method return the dataset definations for this charts **/


  ScrollLine2D.prototype.getDSdef = function getDSdef() {
    return _line2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  ScrollLine2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return undefined;
  };

  return ScrollLine2D;
}(_fusioncharts2['default']);

exports['default'] = ScrollLine2D;

/***/ }),

/***/ 683:
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

var _fusioncharts = __webpack_require__(338);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bubble = __webpack_require__(684);

var _bubble2 = _interopRequireDefault(_bubble);

var _bubble3 = __webpack_require__(686);

var _bubble4 = _interopRequireDefault(_bubble3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Bubble = function (_Scatter) {
  _inherits(Bubble, _Scatter);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, _Scatter.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Bubble.getName = function getName() {
    return 'Bubble';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  Bubble.prototype.getName = function getName() {
    return 'Bubble';
  };

  Bubble.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Scatter.prototype.__setDefaultConfig && _Scatter.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Bubble Chart';
    config.enablemousetracking = true;
  };

  // This method return the dataset definations for this charts


  Bubble.prototype.getDSdef = function getDSdef() {
    return _bubble2['default'];
  };

  Bubble.prototype.getDSGroupdef = function getDSGroupdef() {
    return _bubble4['default'];
  };

  return Bubble;
}(_fusioncharts2['default']);

exports['default'] = Bubble;

/***/ }),

/***/ 684:
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

var _scatter = __webpack_require__(109);

var _scatter2 = _interopRequireDefault(_scatter);

var _lib = __webpack_require__(5);

var _kdtree = __webpack_require__(110);

var _kdtree2 = _interopRequireDefault(_kdtree);

var _dependencyManager = __webpack_require__(6);

var _bubbleAnimation = __webpack_require__(685);

var _bubbleAnimation2 = _interopRequireDefault(_bubbleAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,

// ROLLOUT = 'DataPlotRollOut',
// hot/tracker threshold in pixels
HTP = _lib.hasTouch ? _lib.TOUCH_THRESHOLD_PIXELS : _lib.CLICK_THRESHOLD_PIXELS,

// add the tools thats are requared
EVENTARGS = 'eventArgs',

// visibleStr = preDefStr.visibleStr,
SETROLLOVERATTR = _lib.preDefStr.setRolloverAttrStr,
    SETROLLOUTATTR = _lib.preDefStr.setRolloutAttrStr,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,

// mathPow = math.pow,
getLightColor = _lib.graphics.getLightColor;
// defined = function (obj) {
//   return obj !== UNDEF && obj !== null;
// };

(0, _dependencyManager.addDep)({
  name: 'bubbleAnimation',
  type: 'animationRule',
  extension: _bubbleAnimation2['default']
});

var BubbleDataset = function (_ScatterDataset) {
  _inherits(BubbleDataset, _ScatterDataset);

  /**
   * constructor function this class
   */
  function BubbleDataset() {
    _classCallCheck(this, BubbleDataset);

    var _this = _possibleConstructorReturn(this, _ScatterDataset.call(this));

    _this.components = {};
    return _this;
  }
  /**
   * Sets the type of the component
   * @return {string} type
   */


  BubbleDataset.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  BubbleDataset.prototype.getName = function getName() {
    return 'bubble';
  };

  BubbleDataset.prototype.configureAttributes = function configureAttributes(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.config.JSONData = datasetJSON;
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        rawDataObj = chart.getFromEnv('dataSource'),
        chartAttr = rawDataObj.chart,
        JSONData = dataset.config.JSONData,
        conf = dataset.config,
        setDataArr = JSONData.data || [],
        len,
        i,
        dataObj,
        dataStore,
        HUNDREDSTRING = '100',
        setColor,
        setAlpha,
        colorM = dataset.getFromEnv('color-manager'),
        index = dataset.index,
        numberFormatter = dataset.getFromEnv('number-formatter'),

    // regressionObj,
    tooltipSepChar = (0, _lib.pluck)((0, _lib.parseUnsafeString)(chartAttr.tooltipsepchar), ', '),
        formatedVal,
        enableAnimation,
        setData,
        config,
        toolText,
        hoverEffects,
        seriesname,
        parserConfig,
        macroIndices,
        label,
        setDisplayValue,
        BLANKSTRING = '',
        isHoverColorString,
        hColorsLoop,
        hColorsLen,
        infMin = -Infinity,
        infMax = +Infinity,
        xMax = infMin,
        xMin = infMax,
        yMax = infMin,
        yMin = infMax,
        zMax = infMin,
        zMin = infMax,
        colorObj,
        highLight,
        quickEnabled,
        getPointColor = _lib.graphics.getPointColor,
        highlightColors;
    conf.seriesname = (0, _lib.parseUnsafeString)(JSONData.seriesname);
    conf.includeinlegend = (0, _lib.pluckNumber)(JSONData.includeinlegend, conf.seriesname ? 1 : 0);
    conf.anchorBgColor = (0, _lib.getFirstColor)((0, _lib.pluck)(JSONData.color, JSONData.plotfillcolor, chartAttr.plotfillcolor, colorM.getPlotColor(index)));
    conf.showPlotBorder = (0, _lib.pluckNumber)(JSONData.showplotborder, chartAttr.showplotborder, 1);
    conf.anchorBorderThickness = conf.showPlotBorder ? (0, _lib.pluckNumber)(JSONData.plotborderthickness, chartAttr.plotborderthickness, 1) : 0;
    conf.anchorBorderColor = (0, _lib.getFirstColor)((0, _lib.pluck)(JSONData.plotbordercolor, chartAttr.plotbordercolor, '666666'));
    conf.plotFillAlpha = (0, _lib.pluck)(JSONData.plotfillalpha, JSONData.bubblefillalpha, chartAttr.plotfillalpha, HUNDREDSTRING);
    conf.plotBorderAlpha = (0, _lib.pluck)(JSONData.plotborderalpha, chartAttr.plotborderalpha, '95');
    conf.negativeColor = (0, _lib.pluck)(chartAttr.negativecolor, 'FF0000');
    conf.is3D = (0, _lib.pluckNumber)(chartAttr.use3dlighting, JSONData.is3D, chartAttr.is3D) !== 0;
    conf.bubbleScale = (0, _lib.pluckNumber)(chartAttr.bubblescale, 1);
    conf.minBubbleRadius = (0, _lib.pluckNumber)(chartAttr.minbubbleradius);
    conf.clipBubbles = (0, _lib.pluckNumber)(chartAttr.clipbubbles, 1);
    // conf.showRegressionLine = pluckNumber(JSONData.showregressionline, chartAttr.showregressionline, 0);
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.transposeAnimation = (0, _lib.pluckNumber)(chartAttr.transposeanimation, enableAnimation);
    conf.transposeAnimDuration = (0, _lib.pluckNumber)(chartAttr.transposeanimduration, 0.2) * 1000;
    conf.seriesNameInTooltip = (0, _lib.pluckNumber)(chartAttr.seriesnameintooltip, 1);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showValues = conf.showvalues = (0, _lib.pluckNumber)(JSONData.showvalues, chartAttr.showvalues, 0);
    dataStore = dataset.components.data = dataset.components.data || (dataset.components.data = []);
    len = setDataArr.length;
    conf.fillColor = conf.is3d ? (0, _lib.toRaphaelColor)(getPointColor(conf.anchorBgColor, conf.plotFillAlpha)) : (0, _lib.toRaphaelColor)({
      color: conf.anchorBgColor,
      alpha: conf.plotFillAlpha
    });
    conf.strokeColor = (0, _lib.toRaphaelColor)({
      color: conf.anchorBorderColor,
      alpha: conf.plotFillAlpha
    });
    for (i = 0; i < len; i++) {
      setData = setDataArr[i];
      dataObj = dataStore[i] = dataStore[i] || (dataStore[i] = {});
      !dataObj.graphics && (dataObj.graphics = {});
      config = dataObj.config = {};
      config.x = numberFormatter.getCleanValue(setData.x);
      config.y = numberFormatter.getCleanValue(setData.y);
      config.z = numberFormatter.getCleanValue(setData.z, true);
      config.setValue = {
        x: config.x,
        y: config.y,
        z: config.z
      };
      config._x = config.x;
      config._y = config.y;
      config._z = config.z;
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.anchorProps = {};
      label = config.label = config.x;
      config.setLink = (0, _lib.getValidValue)(setData.link);
      conf.max = zMax = mathMax(zMax, config.z || 0);
      conf.min = zMin = mathMin(zMin, config.z || 0);
      config.is3D = (0, _lib.pluckNumber)(setData.is3D, conf.is3D) !== 0;
      xMax = mathMax(xMax, config.x);
      xMin = mathMin(xMin, config.x);
      yMax = mathMax(yMax, config.y);
      yMin = mathMin(yMin, config.y);
      setColor = config.color = (0, _lib.getFirstColor)((0, _lib.pluck)(setData.color, setData.z < 0 ? conf.negativeColor : conf.anchorBgColor));
      setAlpha = config.alpha = (0, _lib.pluck)(setData.alpha, conf.plotFillAlpha);
      config.colorObj = colorObj = config.is3D ? getPointColor(setColor, setAlpha) : {
        color: setColor,
        alpha: setAlpha
      };
      config.setDisplayValue = setDisplayValue = (0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.displayvalue, setData.name, setData.label));
      formatedVal = config.formatedVal = config.y === null ? config.y : numberFormatter.dataLabels(config.y);
      config.displayValue = (0, _lib.pluck)(setDisplayValue, config.formatedVal);
      config.setTooltext = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, JSONData.plottooltext, chartAttr.plottooltext)));
      // Initial tooltext parsing
      if (!conf.showTooltip) {
        toolText = false;
      } else {
        if (formatedVal === null) {
          toolText = false;
        } else if (config.setTooltext !== UNDEF) {
          macroIndices = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 118];
          parserConfig = {
            yDataValue: formatedVal,
            xDataValue: numberFormatter.xAxis(label),
            yaxisName: (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
            xaxisName: (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
            zDataValue: numberFormatter.dataLabels(config.z)
          };
          toolText = (0, _lib.parseTooltext)(config.setTooltext, macroIndices, parserConfig, setData, chartAttr, JSONData);
        } else {
          if (conf.seriesNameInTooltip) {
            seriesname = (0, _lib.getFirstValue)(JSONData && JSONData.seriesname);
          }
          toolText = seriesname ? seriesname + tooltipSepChar : BLANKSTRING;
          toolText += label ? numberFormatter.xAxis(label) + tooltipSepChar : BLANKSTRING;
          toolText += formatedVal;
          toolText += setData.z ? tooltipSepChar + numberFormatter.dataLabels(setData.z) : BLANKSTRING;
        }
      }
      config.toolText = toolText;
      // conf.showRegressionLine && pointValueWatcher(config.x, config.y, regressionObj);

      hoverEffects = config.hoverEffects = {};
      // Hover attributes parsing
      if (conf.showHoverEffect !== 0) {
        quickEnabled = hoverEffects.enabled = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.bubblehoveralpha, setData.hovercolor, JSONData.hovercolor, JSONData.bubblehovercolor, chartAttr.bubblehovercolor, setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, setData.hoverscale, JSONData.bubblehoverscale, chartAttr.bubblehoverscale, setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, setData.negativehovercolor, JSONData.negativeColor, chartAttr.negativecolor, setData.is3donhover, chartAttr.plotfillhovercolor, JSONData.is3donhover, chartAttr.is3donhover, UNDEF) !== UNDEF;

        hoverEffects.negativeColor = (0, _lib.pluck)(setData.negativehovercolor, JSONData.negativehovercolor, chartAttr.negativehovercolor, conf.negativeColor);

        hoverEffects.is3D = (0, _lib.pluckNumber)(setData.is3donhover, JSONData.is3donhover, chartAttr.is3donhover, config.is3D);
        hoverEffects.color = (0, _lib.pluck)(setData.hovercolor, JSONData.hovercolor, JSONData.bubblehovercolor, chartAttr.plotfillhovercolor, chartAttr.bubblehovercolor, config.is3D ? colorObj.FCcolor.color : setColor);
        hoverEffects.color = hoverEffects.negativeColor && setData.z < 0 ? hoverEffects.negativeColor : hoverEffects.color;
        hoverEffects.scale = (0, _lib.pluck)(setData.hoverscale, JSONData.hoverscale, JSONData.bubblehoverscale, chartAttr.bubblehoverscale, 1);
        hoverEffects.color = (0, _lib.getFirstColor)(hoverEffects.color);
        hoverEffects.alpha = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.bubblehoveralpha, setAlpha);
        hoverEffects.borderColor = (0, _lib.pluck)(setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, conf.anchorBorderColor);
        hoverEffects.borderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, hoverEffects.alpha, conf.plotBorderAlpha);

        hoverEffects.borderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, conf.anchorBorderThickness);
        hoverEffects.color = hoverEffects.is3D ? getPointColor(hoverEffects.color, hoverEffects.alpha) : {
          FCcolor: {
            color: hoverEffects.color,
            alpha: hoverEffects.alpha
          }
        };

        if (quickEnabled && conf.showHoverEffect) {
          highLight = 0;
        } else {
          highLight = conf.showHoverEffect;
        }

        if (highLight === 1) {
          isHoverColorString = typeof hoverEffects.color === 'string';

          highlightColors = isHoverColorString ? hoverEffects.color.split(/\s{0,},\s{0,}/) : hoverEffects.color.FCcolor.color.split(/\s{0,},\s{0,}/);

          hColorsLen = highlightColors.length;
          for (hColorsLoop = 0; hColorsLoop < hColorsLen; hColorsLoop++) {
            highlightColors[hColorsLoop] = getLightColor(highlightColors[hColorsLoop], 70);
          }

          if (isHoverColorString) {
            hoverEffects.color = highlightColors.join(',');
          } else {
            hoverEffects.color.FCcolor.color = highlightColors.join(',');
          }
        }

        if (quickEnabled === false) {
          hoverEffects.enabled = Boolean(conf.showHoverEffect);
        }
      } else {
        hoverEffects.enabled = false;
      }
    }
    conf.xMax = xMax;
    conf.xMin = xMin;
    conf.yMin = yMin;
    conf.yMax = yMax;
    // conf.regressionData = conf.showRegressionLine &&
    // this.getRegressionLineSeries(regressionObj, conf.showYOnX, len);
    dataset.setState('dirty', true);
    dataset.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, !Number(JSONData.initiallyhidden), 1) === 1);
    chart.config.showLegend && dataset._addLegend();
    dataset.setState('dirty', true);
  };
  /*
   * Using kdtree algo for searching
  */


  BubbleDataset.prototype._getHoveredPlot = function _getHoveredPlot(x, y) {
    var res = this.config.dataTree.getNeighbour({
      x: x,
      y: y
    }, true, 'circle');
    // searching neighbour from Kdtree with basic search flag on
    if (res) {
      return {
        pointIndex: res.index || res.i,
        hovered: true,
        pointObj: res.data
      };
    }
  };

  BubbleDataset.prototype._addLegend = function _addLegend() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        legend = chart.getChildren('legend')[0],
        legendItem,
        config;
    if (conf.includeinlegend) {
      config = {
        enabled: conf.includeInLegend,
        anchorSide: 1,
        type: dataset.type,
        label: conf.seriesname
      };
      legendItem = legend.getItem(dataset.config.legendItemId);
      if (!legendItem) {
        dataset.config.legendItemId = legend.createItem(dataset);
        legendItem = legend.getItem(dataset.config.legendItemId);
        dataset.addExtEventListener('click', function () {
          dataset.legendInteractivity(legendItem);
        }, legendItem);
      } else {
        legendItem.configure({ style: legend.config.itemStyle,
          hiddenStyle: legend.config.itemHiddenStyle,
          datasetVisible: legend.config.datasetVisible,
          hoverStyle: legend.config.itemHoverStyle });
      }
      legendItem.configure(config);
      legendItem.setStateCosmetics('default', {
        symbol: {
          fill: conf.fillColor,
          stroke: conf.strokeColor
        }
      });
      // check if dataset is initiallyhidden
      if (!dataset.getState('visible')) {
        legendItem.setLegendState('hidden');
      }
    } else if (dataset.config.legendItemId) {
      legend.disposeItem(dataset.config.legendItemId);
    }
  };

  BubbleDataset.prototype.getBubbleRadius = function getBubbleRadius(zValue) {
    var dataset = this,
        mathSqrt = math.sqrt,
        dsConfig = dataset.config,
        bubbleScale = dsConfig.bubbleScale,
        minBubbleRadius = dsConfig.minBubbleRadius,
        chartConfig = dataset.getFromEnv('chartConfig'),

    // chartConfig = chart.config,
    // to have diameter of the largest bubble as 25% of the smaller of the two dimensions of
    // canvas
    radiusLimit = mathMin(chartConfig.canvasHeight, chartConfig.canvasWidth) / 8,
        chartLimits = this.getLinkedParent().getDataLimitRange(),
        zMax = chartLimits.zMax,
        sqrtMaxZ = mathSqrt(zMax),
        sqrtBubbleZ = mathSqrt(zValue),
        bubbleRadius;

    // calculating radius with scaling
    bubbleRadius = mathRound(sqrtBubbleZ * radiusLimit / sqrtMaxZ) * bubbleScale || 0;
    // In case minimum radius for bubble is defined we have to honor it
    if (minBubbleRadius) {
      bubbleRadius = mathMax(bubbleRadius, minBubbleRadius);
    }

    return bubbleRadius;
  };

  // Create pixel coordinates for the plots


  BubbleDataset.prototype.createCoordinates = function createCoordinates() {
    var dataset = this,
        dsComponents = dataset.components,
        dsData = dsComponents.data,
        yAxis = dataset.getFromEnv('yAxis'),
        yBase = yAxis.getAxisBase(),
        yBasePos = yAxis.getPixel(yBase),
        xAxis = dataset.getFromEnv('xAxis'),
        isVertical = xAxis.config.isVertical,
        dataObj,
        config,
        previousY,
        i,
        Px,
        Py,
        Pb,
        len = dsData.length,
        dataStore = dsComponents.data;

    for (i = 0; i < len; i++) {
      dataObj = dataStore[i];
      config = dataObj && dataObj.config;

      if (dataObj === UNDEF) {
        continue;
      }

      previousY = config._b;
      Px = xAxis.getPixel(config._x);
      Py = yAxis.getPixel(config._y);

      Pb = previousY ? yAxis.getPixel(previousY) : yBasePos;

      if (dataset.getName() === 'bubble') {
        config.r = dataset.getBubbleRadius(config._z);
      }

      if (isVertical) {
        config._Px = Py;
        config._Py = Px;
        config._Pby = Py;
        config._Pbx = Pb;
      } else {
        config._Px = Px;
        config._Py = Py;
        config._Pby = Pb;
        config._Pbx = Px;
      }
    }
  };

  /**
   * Parses the bubble attributes and calculates position
   *
   * @param {any} set
   * @param {any} index
   * @memberof BubbleDataset
   */


  BubbleDataset.prototype.parsePlotAttributes = function parsePlotAttributes(set, index) {
    var dataset = this,
        JSONData = dataset.config.JSONData,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        conf = dataset.config,
        bubbleRadius,
        yPos,
        xPos,
        i = index,
        config,
        visible = dataset.getState('visible'),
        toolText,
        isTooltip = conf.showTooltip,
        x,
        y,
        z,
        setLink,
        displayValue,
        hoverEffects = {},
        setRolloutAttr,
        eventArgs,
        borderThickness = conf.anchorBorderThickness,
        kdTreeArr = [];

    config = set.config;
    x = (0, _lib.pluckNumber)(config.x, i);
    y = config.y;
    z = config.z;
    setLink = config.setLink;
    displayValue = config.displayValue;
    toolText = config.toolText;
    config.finalTooltext = config.toolText;
    hoverEffects = config.hoverEffects;

    if (y !== null) {
      eventArgs = config.eventArgs || (config.eventArgs = {});

      eventArgs.index = i;
      eventArgs.link = setLink;
      eventArgs.value = y;
      eventArgs.y = y;
      eventArgs.x = x;
      eventArgs.z = z;
      eventArgs.displayValue = displayValue;
      eventArgs.toolText = toolText;
      eventArgs.id = dataset.userID;
      eventArgs.datasetIndex = dataset.index || 0;
      eventArgs.datasetName = JSONData.seriesname;
      eventArgs.visible = visible;

      yPos = config._Py;
      xPos = config._Px;

      bubbleRadius = config.r;

      kdTreeArr.push({
        x: xPos,
        y: yPos,
        r: bubbleRadius
      });

      setRolloutAttr = config.setRolloutAttr = {
        fill: (0, _lib.toRaphaelColor)(config.colorObj),
        'stroke-width': conf.anchorBorderThickness,
        stroke: (0, _lib.toRaphaelColor)({
          color: conf.anchorBorderColor,
          alpha: conf.plotBorderAlpha
        }),
        r: bubbleRadius
      };

      if (hoverEffects.enabled !== false) {
        config.setRolloverAttr = {
          fill: (0, _lib.toRaphaelColor)(hoverEffects.color),
          'stroke-width': hoverEffects.borderThickness,
          stroke: (0, _lib.toRaphaelColor)({
            color: hoverEffects.borderColor,
            alpha: hoverEffects.borderAlpha
          }),
          r: bubbleRadius * hoverEffects.scale
        };
      }
      config.props = {
        element: {
          attr: {
            cx: xPos,
            cy: visible ? yPos : chartConfig.canvasBottom + bubbleRadius,
            r: bubbleRadius || 0,
            fill: (0, _lib.toRaphaelColor)(config.colorObj),
            'stroke-width': conf.anchorBorderThickness,
            ishot: !isTooltip,
            'visibility': visible,
            stroke: setRolloutAttr.stroke
          }
        }
      };

      config.trackerConfig || (config.trackerConfig = {});

      config.trackerConfig.trackerRadius = mathMax(bubbleRadius + (borderThickness || 0 / 2), HTP);

      set._xPos = xPos;
      set._yPos = yPos;
    }
  };

  /**
   * Parses plot and label attributes during post space management
   *
   * @memberof BubbleDataset
   */


  BubbleDataset.prototype.allocatePosition = function allocatePosition() {
    var dataset = this,
        set,
        i,
        ln,
        xPos,
        yPos,
        plotConfig,
        r,
        setDataArr = dataset.components.data,
        kdTreeArr = [];

    dataset.createCoordinates();
    for (i = 0, ln = setDataArr.length; i < ln; i += 1) {
      set = setDataArr[i];
      dataset.parsePlotAttributes(set, i);
      dataset.parseLabelAttributes(set, i);
      if (set) {
        plotConfig = set.config;
        xPos = plotConfig._Px;
        yPos = plotConfig._Py;
        r = plotConfig.r || 0;
        // Pushing object to custom array that will be required for K-D Tree Search Algorithm
        // (in integer format)
        kdTreeArr.push({
          x: xPos,
          y: yPos,
          index: i,
          data: set,
          r: r
        });
      }
    }

    // Building KdTree
    this.config.dataTree = new _kdtree2['default']().buildKdTree(kdTreeArr);
  };

  BubbleDataset.prototype.drawPlots = function drawPlots() {
    var dataset = this,
        setElem,
        setElemCheck,
        hotElem,
        animationManager = dataset.getFromEnv('animationManager'),
        set,
        i,
        ln,
        config,
        setDataArr = dataset.components.data,
        containers = dataset.getContainer(),
        visible = dataset.getState('visible'),
        dataLabelContainer = dataset.getContainer('labelGroup'),
        animCallBack = function animCallBack() {
      if (visible === false) {
        containers.plotGroup.hide();
        containers.commonElemsGroup.hide();
        dataLabelContainer && dataLabelContainer.hide();
        dataset._containerHidden = true;
      }
    },
        y,
        hoverEffects = {},
        label;

    for (i = 0, ln = setDataArr.length; i < ln; i += 1) {
      set = setDataArr[i];
      config = set.config;
      y = config.y;
      setElem = set.graphics.element;
      hoverEffects = config.hoverEffects;
      hotElem = set.graphics.hotElement;
      label = set.graphics.label;

      if (y !== null) {
        setElemCheck = set.graphics.element;
        // creation of the plots
        setElem = animationManager.setAnimation({
          el: setElemCheck || 'circle',
          attr: config.props.element.attr,
          label: 'circle',
          callback: animCallBack,
          component: dataset,
          container: containers.plotGroup
        });
        if (!setElemCheck) {
          set.graphics.element = setElem;
        }
        setElem.show();

        // Set the anchorRadius and anchorHoverRadius to bubble radius
        setElem.data('hoverEnabled', hoverEffects.enabled).data(SETROLLOVERATTR, config.setRolloverAttr).data(SETROLLOUTATTR, config.setRolloutAttr).data('anchorRadius', config.r).data('anchorHoverRadius', config.r);

        setElem && setElem.data(EVENTARGS, config && config.eventArgs);
      } else {
        setElem && setElem.hide();
        hotElem && hotElem.hide();
        label && label.hide();
      }
      setElem && (setElem.isDrawn = true);
    }
  };

  BubbleDataset.prototype.getDataLimits = function getDataLimits() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,
        conf = dataset.config,
        maxValue = conf.yMax,
        minValue = conf.yMin,
        infMin = -Infinity,
        infMax = +Infinity,
        transposeAxis = chartConfig.transposeAxis,
        xMin = conf.xMin,
        xMax = conf.xMax,
        zMax = conf.max,
        zMin = conf.min;

    if (dataset.getState('visible') === false && transposeAxis) {
      maxValue = infMin;
      minValue = infMax;
      xMin = infMax;
      xMax = infMin;
    }
    return {
      max: maxValue,
      min: minValue,
      xMin: xMin,
      xMax: xMax,
      zMax: zMax,
      zMin: zMin
    };
  };

  return BubbleDataset;
}(_scatter2['default']);

exports['default'] = BubbleDataset;

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.dataset.bubble': function initialDatasetBubble() {
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
      'group.appearing': function groupAppearing(inputJSON) {
        if (inputJSON.attr.name === 'label-group') {
          return [{
            initialAttr: {
              opacity: 0
            },
            finalAttr: {
              opacity: 1
            },
            slot: 'final'
          }];
        } else {
          return [{
            initialAttr: {
              opacity: 1
            },
            finalAttr: {
              opacity: 1
            },
            slot: 'final'
          }];
        }
      },
      '*': null
    };
  }
};

/***/ }),

/***/ 686:
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

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var BubbleDatasetGroup = function (_ComponentInterface) {
  _inherits(BubbleDatasetGroup, _ComponentInterface);

  /**
   * constructor function this class
   */
  function BubbleDatasetGroup() {
    _classCallCheck(this, BubbleDatasetGroup);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.setState('visible', true);
    return _this;
  }
  /**
   * Create child containers
   */


  BubbleDatasetGroup.prototype.createContainer = function createContainer() {
    var manager = this,
        key = void 0,
        animationManager = manager.getFromEnv('animationManager'),
        parent = manager.getLinkedParent(),
        pContainer = void 0,
        parentChildContainers = parent.getChildContainer();

    for (key in parentChildContainers) {
      pContainer = parentChildContainers[key];

      !manager.getChildContainer(key) && manager.addChildContainer(key, animationManager.setAnimation({
        el: 'group',
        attr: { name: 'manager-' + key },
        component: manager,
        container: pContainer
      }));
    }
  };

  /**
   * function call sync draw of its children
   */


  BubbleDatasetGroup.prototype.draw = function draw() {
    this.createContainer();
  };

  BubbleDatasetGroup.prototype.getDataLimitRange = function getDataLimitRange() {
    var vcanvas = this,
        children = vcanvas.getChildren(),
        i,
        key,
        child,
        len,
        limits,
        zMax = -Infinity,
        zMin = +Infinity,
        xMax = -Infinity,
        xMin = +Infinity;

    for (key in children) {
      if (children.hasOwnProperty(key)) {
        child = children[key];
        if (child instanceof Array) {
          len = child.length;
          for (i = 0; i < len; i++) {
            limits = child[i].getDataLimits();
            xMax = Math.max(xMax, limits.xMax || -Infinity);
            xMin = Math.min(xMin, limits.xMin || +Infinity);
            zMax = Math.max(zMax, limits.zMax || -Infinity);
            zMin = Math.min(zMin, limits.zMin || +Infinity);
          }
        }
      }
    }

    zMax = zMax === -Infinity ? 0 : zMax;
    zMin = zMin === +Infinity ? 0 : zMin;
    return {
      xMax: xMax,
      xMin: xMin,
      zMax: zMax,
      zMin: zMin
    };
  };

  /**
   * function to accomodate the changes of its child and notify its parent for further action if its needed
   * @param  {Object} updateInfo is an object with the informations about the changes in its child
   */


  BubbleDatasetGroup.prototype.childChanged = function childChanged() {
    var updateInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var manager = this,
        config = manager.config,
        parent = manager.getLinkedParent(),
        range = void 0,
        padding = void 0,
        changeInfo = {},
        ifInformParent = void 0;

    if (updateInfo.hide !== false || updateInfo.show !== false) {
      manager._mapChildren(function (child) {
        child.setState('dirty', true);
      });
      ifInformParent = true;
    }
    if (updateInfo.dataLimitChanged !== false) {
      range = manager.getDataLimits();
      if (range.min !== config.range.min || range.max !== config.range.max) {
        config.range.min = range.min;
        config.range.max = range.max;
        changeInfo.dataLimitChanged = true;
        ifInformParent = true;
      }
    }
    if (updateInfo.paddingChanged !== false) {
      padding = manager.getAxisValuePadding();
      if (padding.left !== config.padding.left || padding.right !== config.padding.right) {
        config.padding.left = padding.left;
        config.padding.right = padding.right;
        changeInfo.paddingChanged = true;
        ifInformParent = true;
      }
    }
    if (ifInformParent) {
      parent.childChanged && parent.childChanged(changeInfo);
    } else {
      manager.asyncDraw();
    }
  };
  /**
   * function to get value for axis padding from is children
   * @return {Object} with left and right member
   */


  BubbleDatasetGroup.prototype.getAxisValuePadding = function getAxisValuePadding() {
    var paddingObj = {},
        axisPaddingLeft = -Infinity,
        axisPaddingRight = -Infinity;
    this._mapChildren(function (child) {
      if (child.getState('removed') || child.getState('visible') === false) {
        return;
      }
      paddingObj = child.getAxisValuePadding && child.getAxisValuePadding() || {};
      axisPaddingLeft = Math.max(axisPaddingLeft, paddingObj.left || -Infinity);
      axisPaddingRight = Math.max(axisPaddingRight, paddingObj.right || -Infinity);
    });
    if (axisPaddingLeft === -Infinity) {
      axisPaddingLeft = 0;
    }
    if (axisPaddingRight === -Infinity) {
      axisPaddingRight = 0;
    }
    if (!this.config.padding) {
      this.config.padding = {};
      this.config.padding.left = axisPaddingLeft;
      this.config.padding.right = axisPaddingRight;
    }
    return {
      left: axisPaddingLeft,
      right: axisPaddingRight
    };
  };
  /**
   * function to calculate maximum canvas padding is required by the children of this manager
   * @return {Object} contains dimension required
   */


  BubbleDatasetGroup.prototype.getCanvasPadding = function getCanvasPadding() {
    var manager = this,
        dim,
        key,
        returnDimension = {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0
    };
    manager._mapChildren(function (child) {
      if (child.getState('removed')) {
        return;
      }
      dim = child.getCanvasPadding && child.getCanvasPadding() || {};
      for (key in dim) {
        if (dim.hasOwnProperty(key)) {
          returnDimension[key] = Math.max(dim[key], returnDimension[key]);
        }
      }
    });
    return returnDimension;
  };
  /**
   * function to get data limits from its child datasets
   * return minimun and maximum value among the datasets limit
   * @return {Object} [min, max]
   */


  BubbleDatasetGroup.prototype.getDataLimits = function getDataLimits() {
    var manager = this,
        chart = manager.getFromEnv('chart'),
        infMin = -Infinity,
        infMax = +Infinity,
        max = infMin,
        min = infMax,
        xMin = infMax,
        xMax = infMin,
        maxminObj,
        xMaxValue,
        xMinValue,
        getMaxMin = function getMaxMin(_maxminObj) {
      xMaxValue = (0, _lib.pluck)(_maxminObj.xMax, infMin);
      xMinValue = (0, _lib.pluck)(_maxminObj.xMin, infMax);
      max = Math.max(max, _maxminObj.max);
      min = Math.min(min, _maxminObj.min);
      xMax = Math.max(xMax, xMaxValue);
      xMin = Math.min(xMin, xMinValue);
    };

    manager._mapChildren(function (child) {
      if (!child.getDataLimits || child.getState('removed')) {
        return;
      }
      maxminObj = child.getDataLimits();
      getMaxMin(maxminObj);
    });

    max === -Infinity && (max = 0);
    min === +Infinity && (min = 0);
    if (!this.config.range) {
      this.config.range = {};
      this.config.range.min = min;
      this.config.range.max = max;
      this.config.range.xMin = xMin;
      this.config.range.xMax = xMax;
    }
    chart.config.yMax = max;
    chart.config.yMin = min;

    return { min: min, max: max, xMin: xMin, xMax: xMax };
  };
  /**
   * it return the status of dataset visiblity
   * @return {boolean} returns the visiblity status of dataset
   */


  BubbleDatasetGroup.prototype.isVisible = function isVisible() {
    return !this.isNotVisible;
  };

  BubbleDatasetGroup.prototype.getType = function getType() {
    return 'manager';
  };

  BubbleDatasetGroup.prototype.getName = function getName() {
    return 'BubbleGroupManager';
  };

  BubbleDatasetGroup.prototype.remove = function remove() {
    var manager = this;
    manager._mapChildren(function (child) {
      if (!child.getState('removed')) {
        child.remove();
      }
    });
    _ComponentInterface.prototype.remove.call(this);
  };

  return BubbleDatasetGroup;
}(_componentInterface2['default']);

exports['default'] = BubbleDatasetGroup;

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(9);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(10);

var _symbol2 = _interopRequireDefault(_symbol);

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; }; /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var _centerLabelExtension = __webpack_require__(694);

var _centerLabelExtension2 = _interopRequireDefault(_centerLabelExtension);

var _lib = __webpack_require__(5);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Checks if component is of type chart
 * @param {Object} component - Checks if paramter is of type chart
 * @return {boolean} Returns if component is of type chart
 */
var isDoughnut2D = function isDoughnut2D(component) {
  return component.getName() === 'Doughnut2D';
},
    isMultiLevelPie = function isMultiLevelPie(component) {
  return component.getName() === 'MultilevelPie';
},
    isChartAPI = function isChartAPI(component) {
  return component.getType() === 'chartAPI';
},
    isDataset = function isDataset(component) {
  return component.getType() === 'dataset';
},
    UNDEF = void 0;

/**
 * Sets the center label in Dougnut 2D chart. The label cosmetics are configurable via the second
 * optional parameter, which accepts a host of related properties.
 *
 * > Available on `doughnut` chart only.
 *
 * @group chart:pie-center-label
 *
 * @param {string} labelText - The text to be displayed at doughnut center.
 * @param {Object} [options] - The optional parameter that holds a host of configurable params
 * with most them being cosmetic properties of the center label. The properties are case sensitive.
 *
 * {string} [options.font] - Sets the font face of the label.
 * {string} [options.fontSize] - Defines the font size of the label.
 * {boolean} [options.bold] - Specifies of whether the label be bold.
 * {boolean} [options.italic] - Specifies of whether the label be in italic.
 * {hexcolor} [options.color] - Sets the color of the label text.
 * {alpha} [options.alpha] - Sets the opacity of the label text.
 * {hexcolor} [options.hoverColor] - Sets the hover color of the label text.
 * {alpha} [options.hoverAlpha] - Sets the hover opacity of the label text.
 * {hexcolor} [options.bgColor] - Sets the color of the label background.
 * {alpha} [options.bgAlpha] - Sets the opacity of the label background.
 * {hexcolor} [options.borderColor] - Sets the color of the label background border.
 * {alpha} [options.borderAlpha] - Sets the opacity of the label background border.
 * {number} [options.borderThickness] - Sets the thickness of the label background border.
 * {number} [options.borderRadius] - Sets the radius for rounded label background.
 * {number} [options.padding] - The padding between extremities of the label and inner periphery
 * of the doughnut. For rectangular label background, it's relative to any of the 4 corners. While for
 * circular background, it's the gap between the 2 concentric circles, background border and inner
 * periphery.
 * {number} [options.textPadding] - For rectangular label background, it's the gutter between
 * the text and the background border. While for circular background, it's the minimum space between
 * the background border and the containing circle of the text.
 * {string} [options.toolText] - Sets the tooltext for the label.
 *
 * @fires FusionCharts#centerLabelChanged
 *
 * @example
 * // Render a doughnut 2d chart and set center label with some
 * // configuring params on click of a button
 * FusionCharts.ready(function () {
 *     var chart = new FusionCharts({
 *         type: "doughnut2d",
 *         renderAt: "chart-container",
 *         dataSource: "data.json",
 *         dataFormat: "jsonurl"
 *     }).render();
 *
 *     // Assign the functionality of setting the center label when clicked on
 *     // a button (with an id set-center-label).
 *     document.getElementById("set-center-label").onclick = function () {
 *         chart.centerLabel("The central label", {bold: true, toolText: "center label tooltext"});
 *     };
 * });
 */
function centerLabel(labelText, options) {
  var chart = this.apiInstance,
      asyncRender = chart.getFromEnv('chartInstance').args.asyncRender,
      dataset = chart.getChildren('dataset')[0],
      children = dataset.getChildren(),
      centerLabelComp = children.centerLabel && children.centerLabel[0],
      chartConfig = chart.config,
      _helperFn = function _helperFn() {
    var seriesData = chart.getDatasets()[0],
        config = seriesData.config,
        piePlotOptions = config.piePlotOptions,
        innerSize = piePlotOptions.innerSize,
        centerLabelConfig,
        key;
    centerLabelConfig = centerLabelComp.config;

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      options = centerLabelConfig;
    } else {
      // Create the config cosmetics object from those obtained
      // from argument and default values
      for (key in centerLabelConfig) {
        options[key] === UNDEF && (options[key] = centerLabelConfig[key]);
      }
      centerLabelConfig = (0, _assign2['default'])(centerLabelConfig, options);
    }
    options.label = labelText;
    centerLabelConfig.label = labelText;
    seriesData.centerLabelConfig = centerLabelConfig;

    innerSize && centerLabelComp && centerLabelComp.draw(labelText || '');
  };
  if (centerLabelComp === UNDEF) {
    (0, _lib.componentFactory)(dataset, _centerLabelExtension2['default'], 'centerLabel', 1, [chartConfig]);
    centerLabelComp = children.centerLabel && children.centerLabel[0];
  }

  if (asyncRender) {
    chart.addJob('eiMethods-center-lebel', _helperFn, _schedular.priorityList.postRender);
  } else {
    _helperFn();
  }
}

exports['default'] = {
  extension: function extension(FusionCharts) {
    var isApplicableChart;
    FusionCharts.addEventListener('instantiated', function (event) {
      var component = event.sender;
      !isApplicableChart && (isApplicableChart = isChartAPI(component) && (isDoughnut2D(component) || isMultiLevelPie(component)));
      if (isApplicableChart && isDataset(component)) {
        component.registerFactory('centerLabel', function () {
          var chartConfig = component.getFromEnv('chartConfig'),
              chartInstance = component.getFromEnv('chartInstance'),
              hasCenterLabel = !!(chartConfig.centerlabel || chartConfig.defaultcenterlabel);
          chartInstance.centerLabel = centerLabel;
          (0, _lib.componentFactory)(component, _centerLabelExtension2['default'], 'centerLabel', hasCenterLabel ? 1 : 0, [chartConfig]);
          isApplicableChart = UNDEF;
        });
      }
    });
  },
  name: 'CenterLabelExtension',
  type: 'extension',
  requiresFusionCharts: true
};

/***/ }),

/***/ 694:
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

var _lib = __webpack_require__(5);

var _dependencyManager = __webpack_require__(6);

var _centerLabelAnimation = __webpack_require__(695);

var _centerLabelAnimation2 = _interopRequireDefault(_centerLabelAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    docMode8 = window.document.documentMode === 8,
    HIDDEN = 'hidden',
    VISIBLE = docMode8 ? 'visible' : '';

function replaceMacros(text, macrosArr, valuesArr) {
  if (text) {
    var i = macrosArr.length || 0,
        regExpression;
    while (i--) {
      regExpression = new RegExp(macrosArr[i], 'gi');
      text = text.replace(regExpression, valuesArr[i]);
    }
  }
  return text;
}
(0, _dependencyManager.addDep)({
  name: 'centerLabelAnimation',
  type: 'animationRule',
  extension: _centerLabelAnimation2['default']
});

var CenterLabel = function (_ComponentInterface) {
  _inherits(CenterLabel, _ComponentInterface);

  function CenterLabel() {
    _classCallCheck(this, CenterLabel);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Sets the name of the component
   * @return {string} name
   */
  CenterLabel.prototype.getName = function getName() {
    return 'centerLabel';
  };
  /**
   * Sets the type of the component
   * @return {string} type
   */


  CenterLabel.prototype.getType = function getType() {
    return 'centerLabel';
  };

  CenterLabel.prototype.configure = function configure(config) {
    var chartAttr = this.getFromEnv('chart-attrib'),
        numberFormatter = this.getFromEnv('number-formatter'),
        dataLabelStyle = config.dataLabelStyle,
        centerLabel = this;

    centerLabel.config = {
      label: (0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttr.defaultcenterlabel, '')),
      font: (0, _lib.pluck)(chartAttr.centerlabelfont, dataLabelStyle.fontFamily),
      fontSize: (0, _lib.pluckNumber)(chartAttr.centerlabelfontsize, parseInt(dataLabelStyle.fontSize, 10)),

      color: (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.centerlabelcolor, chartAttr.valuefontcolor, config.style.inCanvasStyle.color, '555555')),
      alpha: (0, _lib.pluckNumber)(chartAttr.centerlabelalpha, 100),

      bold: (0, _lib.pluckNumber)(chartAttr.centerlabelbold, dataLabelStyle.fontWeight),
      italic: (0, _lib.pluckNumber)(chartAttr.centerlabelitalic, dataLabelStyle.style),

      bgColor: (0, _lib.pluck)(chartAttr.centerlabelbgcolor, ''),
      bgAlpha: (0, _lib.pluckNumber)(chartAttr.centerlabelbgalpha, 100),

      borderColor: (0, _lib.pluck)(chartAttr.centerlabelbordercolor, dataLabelStyle.borderColor),
      borderAlpha: (0, _lib.pluckNumber)(chartAttr.centerlabelborderalpha, 100),

      borderThickness: (0, _lib.pluckNumber)(chartAttr.centerlabelborderthickness, dataLabelStyle.borderThickness),
      borderRadius: (0, _lib.pluckNumber)(chartAttr.centerlabelborderradius, dataLabelStyle.borderRadius),

      textPadding: (0, _lib.pluckNumber)(chartAttr.centerlabeltextpadding, dataLabelStyle.borderPadding),
      padding: (0, _lib.pluckNumber)(chartAttr.centerlabelpadding, 2),

      bgOval: (0, _lib.pluckNumber)(chartAttr.centerlabelbgoval, 0),
      shadow: (0, _lib.pluckNumber)(chartAttr.showcenterlabelshadow, 0),
      // getFirstColor(pluck(chartAttr.centerlabelhovercolor, chartAttr.centerlabelcolor, '555555')),
      hoverColor: chartAttr.centerlabelhovercolor && (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.centerlabelhovercolor)),
      hoverAlpha: (0, _lib.pluckNumber)(chartAttr.centerlabelhoveralpha),

      toolText: (0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttr.centerlabeltooltext, _lib.BLANKSTRING))
    };

    centerLabel.addExtEventListener('datasetrollover', function (event) {
      var dataJSON = event.sender.getFromEnv('dataSource'),
          data = event.data,
          label = (0, _lib.pluck)(replaceMacros(dataJSON.chart.centerlabel, ['\\$value', '\\$percentValue', '\\$displayValue', '\\$label'], [numberFormatter.scale(data.value), data.pValue, data.displayValue, data.label]), '');
      centerLabel.draw(label, false);
    }, this.getFromEnv('chart').getDatasets()[0]);

    centerLabel.addExtEventListener('datasetrollout', function (event) {
      var centerlabel = event.sender.config.label,
          label = (0, _lib.pluck)(centerlabel, '');
      centerLabel.draw(label, false);
    }, this.getFromEnv('chart').getDatasets()[0]);
  };
  /**
   * function to draw label on given co-ordinate.
   * it may take optional label text if it is required.
   * In case of specific label text when it is needed; for example:
   * custom label text on hover on a plot we can set optional label text
   * @param  {string} labelText String to show as centerlabel
   */


  CenterLabel.prototype.draw = function draw(labelText) {
    var centerLabel = this,
        chart = centerLabel.getFromEnv('chart'),
        cx = chart.config.canvasLeft + chart.config.canvasWidth * 0.5,
        cy = chart.config.canvasTop + chart.config.canvasHeight * 0.5,
        dx = chart.getDatasets()[0].config.innerSize,
        dy = chart.getDatasets()[0].config.innerSize,
        dataSet = chart.getDatasets()[0],
        seriesData = dataSet.config,
        labelConfig = this.config,
        animationManager = centerLabel.getFromEnv('animationManager'),
        smartLabel = centerLabel.getFromEnv('smartLabel'),
        centerLabelGraphics = this.getGraphicalElement('centerLabel'),
        centerLabelBgGraphics = this.getGraphicalElement('centerLabelBg'),
        grp = chart.getChildContainer('plotGroup'),
        labelPadding = labelConfig.padding,
        textpadding = labelConfig.textPadding * 2,
        cssObj = {
      fontFamily: labelConfig.font,
      fontSize: labelConfig.fontSize + 'px',
      lineHeight: 1.2 * labelConfig.fontSize + 'px',
      fontWeight: labelConfig.bold ? 'bold' : '',
      fontStyle: labelConfig.italic ? 'italic' : ''
    },
        txtW = (dx * 0.5 - labelPadding) * 1.414 - textpadding,
        txtH = (dy * 0.5 - labelPadding) * 1.414 - textpadding,
        smartLabelObj,
        toolTipController = centerLabel.getFromEnv('toolTipController');

    labelText = (0, _lib.pluck)(labelText, labelConfig.label);
    smartLabel.setStyle(cssObj);
    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabelObj = smartLabel.getSmartText(labelText, txtW, txtH);
    if (!centerLabelGraphics) {
      labelConfig.bgOval && (centerLabelBgGraphics = animationManager.setAnimation({
        el: 'circle',
        attr: {
          cx: cx,
          cy: cy,
          r: dx * 0.5 - labelPadding
        },
        container: grp,
        component: centerLabel
      }));
      centerLabelGraphics = animationManager.setAnimation({
        el: 'text',
        container: grp,
        component: centerLabel
      });
      this.addGraphicalElement('centerLabel', centerLabelGraphics);
      centerLabel.addEventListener('mouseover', function () {
        centerLabel._centerLabelRollover(chart);
      });
      centerLabel.addEventListener('mouseout', function () {
        centerLabel._centerLabelRollout(chart);
      });
      centerLabel.addEventListener('click', function () {
        centerLabel._centerLabelClick(chart);
      });
      // TODO: Fix reference issue
      // centerLabelGraphics.chart = chart;
    } else {
      centerLabelGraphics.attr('text') !== labelText && centerLabel.centerLabelChange(labelText);
    }

    if (labelText) {
      centerLabelGraphics = animationManager.setAnimation({
        el: centerLabelGraphics,
        component: centerLabel,
        state: 'initial',
        css: cssObj,
        attr: {
          x: cx,
          y: cy,
          text: smartLabelObj.text,
          visibility: VISIBLE,
          direction: chart.config.textDirection,
          // title: labelConfig.toolText ? '' : smartLabelObj.tooltext || '',
          fill: (0, _lib.toRaphaelColor)({
            FCcolor: {
              color: labelConfig.color,
              alpha: labelConfig.alpha
            }
          }),
          'text-bound': labelConfig.bgOval ? 'none' : [(0, _lib.toRaphaelColor)({
            FCcolor: {
              color: labelConfig.bgColor,
              alpha: labelConfig.bgAlpha
            }
          }), (0, _lib.toRaphaelColor)({
            FCcolor: {
              color: labelConfig.borderColor,
              alpha: labelConfig.borderAlpha
            }
          }), labelConfig.borderThickness, labelConfig.textPadding, labelConfig.borderRadius]
        },
        dom: 'text'
      });
      toolTipController.enableToolTip(centerLabelGraphics, labelConfig.toolText || smartLabelObj.tooltext);

      if (labelConfig.bgOval) {
        centerLabelBgGraphics && animationManager.setAnimation({
          el: centerLabelBgGraphics,
          attr: {
            visibility: VISIBLE,
            fill: (0, _lib.hashify)(labelConfig.bgColor),
            'fill-opacity': labelConfig.bgAlpha / 100,
            stroke: (0, _lib.hashify)(labelConfig.borderColor),
            'stroke-width': labelConfig.borderThickness,
            'stroke-opacity': labelConfig.borderAlpha / 100
          },
          component: centerLabel
        });
      }
    } else {
      animationManager.setAnimation({
        el: centerLabelGraphics,
        attr: { 'visibility': HIDDEN },
        component: centerLabel
      });
      centerLabelBgGraphics && animationManager.setAnimation({
        el: centerLabelBgGraphics,
        attr: { 'visibility': HIDDEN },
        component: centerLabel
      });
    }

    seriesData.lastCenterLabelConfig = labelConfig;
    seriesData.centerLabelConfig = labelConfig;
  };

  /**
   * helper function to draw
   * when element is present but text is changed then this function is excuted
   * @param  {text} labelText label text
   */


  CenterLabel.prototype.centerLabelChange = function centerLabelChange(labelText) {
    var centerLabelapi = this,
        chart = centerLabelapi.getFromEnv('chart'),
        chartConfig = chart.config,
        chartInstance = centerLabelapi.getFromEnv('chartInstance'),
        ref = chartInstance.ref,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: centerLabelapi.getFromEnv('chart-container'),
      centerLabelText: labelText
    };
    /**
    * This event is fired on change of label at center of doughnut 2D.
    *
    * > Available on `doughnut` chart only.
    *
    * @group chart:pie-center-label
    * @event FusionCharts#centerLabelChanged
    *
    * @param {string} centerLabelText - is the text for display at center label
    * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
    * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
    * @param {string} container - is the DOM element where the chart is being rendered.
    * @param {numeric|percent} height - height of the chart
    * @param {numeric|percent} width - width of the chart
    * @param {string} id - is the chart id
    * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
    * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
    * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
    * pixels
    * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
    * pixels
    * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
    */
    chart.fireChartInstanceEvent('centerLabelChanged', eventArgs);
  };

  /**
   * callback function on mouse over event
   * @param {Object} chart - Takes chart object as input
   */


  CenterLabel.prototype._centerLabelRollover = function _centerLabelRollover(chart) {
    var chartConfig = chart.config,
        chartInstance = chart.getFromEnv('chartInstance'),
        ref = chartInstance.ref,
        labelConfig = this.config,
        cLabel = this,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: this.getFromEnv('chart-container'),
      centerLabelText: labelConfig && labelConfig.label
    };
    /**
     * This event is fired on mouse rollover on label at center of doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelRollover
     *
     * @param {string} centerLabelText - is the text for display at center label
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.getFromEnv('paper').attr('text') && chart.fireChartInstanceEvent('centerLabelRollover', eventArgs, UNDEF, cLabel.hoverOnCenterLabel.bind(cLabel, chart));
  };
  /**
   * callback function on mouse out event
   * @param {Object} chart - Takes chart object as input
   */


  CenterLabel.prototype._centerLabelRollout = function _centerLabelRollout(chart) {
    var chartConfig = chart.config,
        cLabel = this,
        chartInstance = chart.getFromEnv('chartInstance'),
        ref = chartInstance.ref,
        labelConfig = this.config,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: this.getFromEnv('chart-container'),
      centerLabelText: labelConfig && labelConfig.label
    };
    /**
     * This event is fired on mouse rollout from label at center of
     * doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelRollout
     *
     * @param {string} centerLabelText - is the text for display at center label
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.getFromEnv('paper').attr('text') && chart.fireChartInstanceEvent('centerLabelRollout', eventArgs, UNDEF, cLabel.hoverOffCenterLabel.bind(cLabel, chart));
  };
  /**
   * callback function on mouse click event
   * @param {Object} chart - Takes chart object as input
   */


  CenterLabel.prototype._centerLabelClick = function _centerLabelClick(chart) {
    var chartConfig = chart.config,
        chartInstance = chart.getFromEnv('chartInstance'),
        ref = chartInstance.ref,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: this.getFromEnv('chart-container')
    },
        labelConfig = void 0;
    labelConfig = this.config;
    eventArgs.centerLabelText = labelConfig && labelConfig.label;
    /**
     * This event is fired on click on label at center of doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelClick
     *
     * @param {string} centerLabelText - is the text for display at center label.
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked.
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.getFromEnv('paper').attr('text') && chart.fireChartInstanceEvent('centerLabelClick', eventArgs);
  };
  /**
   * callback function to centerLabelRollover event
   * @param {Object} chart - Takes chart object as input
   */


  CenterLabel.prototype.hoverOnCenterLabel = function hoverOnCenterLabel(chart) {
    var dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,
        labelConfig = seriesData.lastCenterLabelConfig;

    if (labelConfig.hoverColor || labelConfig.hoverAlpha) {
      this.getGraphicalElement('centerLabel').attr({ fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.hoverColor || labelConfig.color,
            alpha: labelConfig.hoverAlpha || labelConfig.alpha
          }
        })
      });
    }
  };
  /**
   * callback function to centerLabelRollout event
   * @param {Object} chart - Takes chart object as input
   */


  CenterLabel.prototype.hoverOffCenterLabel = function hoverOffCenterLabel(chart) {
    var dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,
        labelConfig = seriesData.lastCenterLabelConfig;

    if (labelConfig.hoverColor || labelConfig.hoverAlpha) {
      this.getGraphicalElement('centerLabel').attr({ fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.color,
            alpha: labelConfig.alpha
          }
        })
      });
    }
  };

  return CenterLabel;
}(_componentInterface2['default']);

exports['default'] = CenterLabel;

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  'initial.centerLabel.centerLabel': function initialCenterLabelCenterLabel() {
    return {
      'text.initial': function textInitial(input) {
        return [{
          initialAttr: {
            x: input.attr.x,
            y: input.attr.y
          }
        }];
      }
    };
  }
};

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _logoExtension = __webpack_require__(697);

var _logoExtension2 = _interopRequireDefault(_logoExtension);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Checks if component is of type chart
 * @param {Object} component Checks if paramter is of type chart
 * @param {Object} componentName The name of the component to be checked against
 * @return {boolean} Returns if component is of type chart
 */
var isRequiredComponent = function isRequiredComponent(component, componentName) {
  return component.getType() === componentName;
};
exports['default'] = {
  extension: function extension(FusionCharts) {
    FusionCharts.addEventListener('instantiated', function (event) {
      var component = event.sender;
      if (isRequiredComponent(component, 'chartAPI')) {
        component.registerFactory('logo', function (chartComponent) {
          var chartAttrs = chartComponent.getFromEnv('chart-attrib'),
              logoURL = (0, _lib.getValidValue)(chartAttrs.logourl, '');
          (0, _lib.componentFactory)(chartComponent, _logoExtension2['default'], 'logo', logoURL ? 1 : 0, [chartAttrs]);
        });
      }
    });
  },
  name: 'LogoExtension',
  type: 'extension',
  requiresFusionCharts: true
};

/***/ }),

/***/ 697:
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

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var NONE = 'none',
    UNDEF = void 0,
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POINTER = 'pointer',
    TL = 'tl',
    NORMAL = 'normal',
    LOGOROLLOUT = 'LogoRollout',
    LOGOROLLOVER = 'LogoRollover',
    LOGOCLICK = 'LogoClick',
    LOGOLOADED = 'LogoLoaded',
    LOGOLOADERROR = 'LogoLoadError',
    defaultPosition = {
  vAlign: POSITION_TOP,
  hAlign: POSITION_LEFT
},
    pointerCSS = {
  'link': {
    cursor: POINTER,
    '_cursor': POINTER
  },
  'normal': {
    cursor: 'default',
    '_cursor': NORMAL
  }
},
    position = {
  tr: {
    vAlign: POSITION_TOP,
    hAlign: POSITION_RIGHT
  },
  bl: {
    vAlign: POSITION_BOTTOM,
    hAlign: POSITION_LEFT
  },
  br: {
    vAlign: POSITION_BOTTOM,
    hAlign: POSITION_RIGHT
  },
  cc: {
    vAlign: POSITION_MIDDLE,
    hAlign: POSITION_MIDDLE
  }
},
    isVML = !!(window.SVGAngle || document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')),
    getHandler = function getHandler(logo) {
  var config = logo.config;
  return {
    load: function load() {
      var logoImageAttr = void 0,
          chartLogoImage = logo.getGraphicalElement('logoImage'),
          chartConfig = logo.getFromEnv('chartConfig'),
          chartBorderWidth = chartConfig.borderWidth || 0,
          chart = logo.getFromEnv('chart'),
          chartHeight = chartConfig.height,
          chartWidth = chartConfig.width,
          logoPosition = config.logoPosition,
          logoScale = config.logoScale,
          logoLeftMargin = config.logoLeftMargin,
          logoTopMargin = config.logoTopMargin,
          logoURL = config.logoURL,
          logoAlpha = config.logoAlpha,
          logoPositionSTR = config.logoPositionSTR,
          logoLink = config.logoLink;
      // set chartLogoImage visiblity on
      chartLogoImage.show();
      // calculate image attribute
      logoImageAttr = (0, _lib.setImageDisplayMode)(NONE, logoPosition.vAlign, logoPosition.hAlign, logoScale, chartBorderWidth, chartWidth, chartHeight, chartLogoImage._.RefImg);

      /*
      * In VML, RedRphael looks for attribute 'w' & 'h' instead of width and height. As
      * same type of rendering is also used for background image but the issue could not be
      * replicated for bgImage, it is best to keep this small change tied to logo image only.
      */
      if (isVML) {
        logoImageAttr.w = logoImageAttr.width || 0;
        logoImageAttr.h = logoImageAttr.height || 0;
      }
      logoImageAttr.transform = 'T' + logoLeftMargin + ',' + logoTopMargin;
      chartLogoImage.attr(logoImageAttr);

      // raise event of logo load
      /**
       * This event is fired when external logo added to the chart using `logoURL` attribute has
       * finished loading.
       *
       * To know more about external logos, see
       * {@tutorial configuring-your-chart-loading-external-logos}
       *
       * @see FusionCharts#event:logoRollover
       * @see FusionCharts#event:logoRollout
       * @see FusionCharts#event:logoClick
       * @see FusionCharts#event:logoLoadError
       *
       * @event FusionCharts#logoLoaded
       * @group chart:logo
       * @tutorial configuring-your-chart-loading-external-logos
       *
       * @param {string} logoURL - is the URL of the logo image.
       * @param {number} logoAlpha - is the value of the alpha
       *                 of the logo image.
       * @param {string} logoPosition - is the position of the chart
       *                  logo.
       * @param {number} logoScale - is the value of scaling for
       *                 logo image.
       * @param {string} logoLink - is the URL linked to the logo
       *                 which on clicking will be taken to the
       *                 URL link.
       */
      chart.fireChartInstanceEvent(LOGOLOADED, {
        logoURL: logoURL,
        logoAlpha: logoAlpha,
        logoPosition: logoPositionSTR,
        logoScale: logoScale,
        logoLink: logoLink
      });
    },
    error: function error(e) {
      var logoURL = config.logoURL,
          logoAlpha = config.logoAlpha,
          logoPositionSTR = config.logoPositionSTR,
          logoScale = config.logoScale,
          logoLink = config.logoLink,
          chart = logo.getFromEnv('chart');
      /**
       * This event is fired when there was an error in loading external logo added to the chart
       * using `logoURL` attribute.
       *
       * To know more about external logos, see
       * {@tutorial configuring-your-chart-loading-external-logos}
       *
       * @see FusionCharts#event:logoRollover
       * @see FusionCharts#event:logoRollout
       * @see FusionCharts#event:logoClick
       * @see FusionCharts#event:logoLoaded
       *
       * @event FusionCharts#logoLoadError
       * @group chart:logo
       * @tutorial configuring-your-chart-loading-external-logos
       *
       * @param {string} logoURL - is the URL of the logo image.
       * @param {number} logoAlpha - is the value of the alpha of the logo image.
       * @param {string} logoPosition - is the position of the chart logo.
       * @param {number} logoScale - is the value of scaling for logo image.
       * @param {string} logoLink - is the URL linked to the logo which on clicking will be taken to
       * the URL link.
       * @param {string} error - is the error message.
       */

      chart.fireChartInstanceEvent(LOGOLOADERROR, {
        logoURL: logoURL,
        logoAlpha: logoAlpha,
        logoPosition: logoPositionSTR,
        logoScale: logoScale,
        logoLink: logoLink,
        error: e
      });
    },
    mouseover: function mouseover(e) {
      var chartInstance = logo.getFromEnv('chartInstance'),
          cord = (0, _lib.getMouseCoordinate)(chartInstance.ref, e),
          chart = logo.getFromEnv('chart'),
          logoURL = config.logoURL,
          logoAlpha = config.logoAlpha,
          logoPositionSTR = config.logoPositionSTR,
          logoScale = config.logoScale,
          logoLink = config.logoLink;

      /**
       * This event is fired when the mouse is hovered over external logo added to the chart using
       * `logoURL` attribute.
       *
       * To know more about external logos, see
       * {@tutorial configuring-your-chart-loading-external-logos}
       *
       * @see FusionCharts#event:logoRollout
       * @see FusionCharts#event:logoClick
       * @see FusionCharts#event:logoLoaded
       * @see FusionCharts#event:logoLoadError
       *
       * @event FusionCharts#logoRollover
       * @group chart:logo
       * @tutorial configuring-your-chart-loading-external-logos
       *
       * @param {string} logoURL - The URL of the logo image.
       * @param {number} logoAlpha - The value of the alpha
       *                 of the logo image.
       * @param {string} logoPosition - The position of the
       *                 logo.
       * @param {number} logoScale - The value of scaling of
       *                  the logo image.
       * @param {string} logoLink - The URL linked to the logo
       *               which on clicking will be taken to the
       *               URL link.
       * @param {number} chartX - The relative X-Cordinate
       *                 to screen where the mouse was
       *                 hovered over the logo.
       * @param {number} chartY - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered over the logo.
       * @param {number} pageX - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered over the logo.
       * @param {number} pageY - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered over the logo.
       */
      chart.fireChartInstanceEvent(LOGOROLLOVER, {
        logoURL: logoURL,
        logoAlpha: logoAlpha,
        logoPosition: logoPositionSTR || TL,
        logoScale: logoScale,
        logoLink: logoLink,
        chartX: cord.chartX,
        chartY: cord.chartY,
        pageX: cord.pageX,
        pageY: cord.pageY
      });
    },
    mouseout: function mouseout(e) {
      var chartInstance = logo.getFromEnv('chartInstance'),
          cord = (0, _lib.getMouseCoordinate)(chartInstance.ref, e),
          chart = logo.getFromEnv('chart'),
          logoURL = config.logoURL,
          logoAlpha = config.logoAlpha,
          logoPositionSTR = config.logoPositionSTR,
          logoScale = config.logoScale,
          logoLink = config.logoLink;
      // raise event of logo load
      /**
       * This event is fired when the mouse is moved outside external logo added to the chart
       * using `logoURL` attribute.
       *
       * To know more about external logos, see
       * {@tutorial configuring-your-chart-loading-external-logos}
       *
       * @see FusionCharts#event:logoRollover
       * @see FusionCharts#event:logoClick
       * @see FusionCharts#event:logoLoaded
       * @see FusionCharts#event:logoLoadError
       *
       * @event FusionCharts#logoRollout
       * @group chart:logo
       * @tutorial configuring-your-chart-loading-external-logos
       *
       * @param {string} logoURL - The URL of the logo image.
       * @param {number} logoAlpha - The value of the alpha
       *                 of the logo image.
       * @param {string} logoPosition - The position of the
       *                 logo.
       * @param {string} logoScale - The value of scaling for
       *                  logo image.
       * @param {string} logoLink - The URL linked to the
       *                 logo which on clicking will be taken
       *                 to the URL link.
       * @param {number} chartX - The relative X-Cordinate
       *                 to screen where the mouse was
       *                 hovered out of logo image.
       * @param {number} chartY - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered out of the logo image.
       * @param {number} pageX - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered out of the logo image.
       * @param {number} pageY - The relative Y-Cordinate
       *                 to screen where the mouse was
       *                 hovered out of the logo image.
       */
      chart.fireChartInstanceEvent(LOGOROLLOUT, {
        logoURL: logoURL,
        logoAlpha: logoAlpha,
        logoPosition: logoPositionSTR || TL,
        logoScale: logoScale,
        logoLink: logoLink,
        chartX: cord.chartX,
        chartY: cord.chartY,
        pageX: cord.pageX,
        pageY: cord.pageY
      });
    },
    click: function click(e) {
      var chartInstance = logo.getFromEnv('chartInstance'),
          cord = (0, _lib.getMouseCoordinate)(chartInstance.ref, e),
          chart = logo.getFromEnv('chart'),
          logoURL = config.logoURL,
          logoAlpha = config.logoAlpha,
          logoPositionSTR = config.logoPositionSTR,
          logoScale = config.logoScale,
          logoLink = config.logoLink;

      /**
       * This event is fired when the mouse is clicked on external logo added to the chart using
       * `logoURL` attribute. For touch devices, this event is fired when user taps on the logo.
       *
       * To know more about external logos, see
       * {@tutorial configuring-your-chart-loading-external-logos}
       *
       * @see FusionCharts#event:logoRollover
       * @see FusionCharts#event:logoRollout
       * @see FusionCharts#event:logoLoaded
       * @see FusionCharts#event:logoLoadError
       *
       * @event FusionCharts#logoClick
       * @group chart:logo
       * @tutorial configuring-your-chart-loading-external-logos
       *
       * @param {string} logoURL - The URL of the logo image.
       * @param {number} logoAlpha - The value of the alpha of the logo image.
       * @param {string} logoPosition - The position of the position of the logo.
       * @param {number} logoScale - The value of scaling for logo image.
       * @param {string} logoLink - The URL linked to the logo which on clicking will be taken to
       * the URL link.
       * @param {number} chartX - The relative X-Cordinate to screen where the mouse was hovered
       * out of the chart logo.
       * @param {number} chartY - The relative Y-Cordinate to screen where the mouse was hovered
       * out of the chart logo.
       * @param {number} pageX - The relative Y-Cordinate to screen where the mouse was hovered
       * out of the chart logo.
       * @param {number} pageY - is the relative Y-Cordinate to screen where the mouse was hovered
       * out of the chart logo.
       */
      chart.fireChartInstanceEvent(LOGOCLICK, {
        logoURL: logoURL,
        logoAlpha: logoAlpha,
        logoPosition: logoPositionSTR || TL,
        logoScale: logoScale,
        logoLink: logoLink,
        chartX: cord.chartX,
        chartY: cord.chartY,
        pageX: cord.pageX,
        pageY: cord.pageY
      }, UNDEF, config.linkClickFN);
    }
  };
};
/**
 * class definition for logo component
 */

var Logo = function (_ComponentInterface) {
  _inherits(Logo, _ComponentInterface);

  /**
   * constructor fn
   */
  function Logo() {
    _classCallCheck(this, Logo);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    var logo = _this;
    logo.config._context = {};
    logo.config.handler = getHandler(logo);
    logo.config.linkClickFN = function () {
      var logoLink = logo.config.logoLink;
      logoLink && logo.getFromEnv('linkClickFN').call({
        link: logoLink
      }, logo);
    };
    return _this;
  }
  /**
   * function to configure this logo component
   * @param {Object} conf given configuration object refernce
   */


  Logo.prototype.configureAttributes = function configureAttributes() {
    var logo = this,
        config = logo.config,
        chartAttrs = logo.getFromEnv('chart-attrib');
    config.logoURL = (0, _lib.getValidValue)(chartAttrs.logourl, '');
    config.logoPositionSTR = (0, _lib.pluck)(chartAttrs.logoposition, TL).toLowerCase();
    config.logoPosition = position[config.logoPositionSTR] || defaultPosition;
    config.logoAlpha = (0, _lib.pluckNumber)(chartAttrs.logoalpha, 100);
    config.logoLink = (0, _lib.getValidValue)(chartAttrs.logolink);
    config.logoScale = (0, _lib.pluckNumber)(chartAttrs.logoscale, 100);
    config.logoLeftMargin = (0, _lib.pluckNumber)(chartAttrs.logoleftmargin, 0);
    config.logoTopMargin = (0, _lib.pluckNumber)(chartAttrs.logotopmargin, 0);
    logo.setState('dirty', true);
  };
  /**
   * function to check if the context of logo component is chanegd or not
   * if changed then it will return staus true. It is for further infomormation to redraw a logo
   * @return {boolean} status of context change
   */


  Logo.prototype._contextChanged = function _contextChanged() {
    var logo = this,
        config = logo.config,
        chartConfig = logo.getFromEnv('chartConfig'),
        chartBorderWidth = chartConfig.borderWidth,
        chartWidth = chartConfig.width,
        chartHeight = chartConfig.height,
        status = void 0;
    if (chartBorderWidth !== config._context.chartBorderWidth) {
      config._context.chartBorderWidth = chartBorderWidth;
      status = true;
    }
    if (chartWidth !== config._context.chartWidth) {
      config._context.chartWidth = chartWidth;
      status = true;
    }
    if (chartHeight !== config._context.chartHeight) {
      config._context.chartHeight = chartHeight;
      status = true;
    }
    return status;
  };
  /**
   * draw logoImage logo url is given and fire various events
   */


  Logo.prototype.draw = function draw() {
    var logo = this,
        config = logo.config,
        animationManager = logo.getFromEnv('animationManager'),
        chartLogoImage = logo.getGraphicalElement('logoImage'),
        logoGroup = logo.getLinkedParent().getChildContainer('logoGroup'),
        logoAlpha = config.logoAlpha,
        logoURL = config.logoURL,
        logoLink = config.logoLink,
        isNotRemoved = !logo.getState('removed'),
        isContextChanged = logo._contextChanged();
    // check whether redraw is required or not.
    // if logo is not disposing and not re-configured
    // and the context was not changed then do not re-draw
    if (isNotRemoved && !(logo.getState('dirty') || isContextChanged)) {
      return;
    }
    // whether logourl is set and component is not disposing
    if (logoURL && isNotRemoved) {
      chartLogoImage = animationManager.setAnimation({
        el: chartLogoImage || 'image',
        attr: {
          opacity: logoAlpha * 0.01 || 1,
          src: logoURL
        },
        component: logo,
        container: logoGroup
      });
      // when no logo inamge is created previously
      if (!logo.getGraphicalElement('logoImage')) {
        // if previously logo image is not created previously then the image element will be created
        // with opacity 0 (zero) so that it would get a fade in effect
        // and add the logoimage as a graphical element
        logo.addGraphicalElement('logoImage', chartLogoImage);
        // add onload and onerror event
        chartLogoImage.on('load', config.handler.load);
        chartLogoImage.on('error', config.handler.error);

        // create event for LogoClick, LogoRollover & LogoRollout
        chartLogoImage.click(config.handler.click);
        chartLogoImage.mouseover(config.handler.mouseover);
        chartLogoImage.mouseout(config.handler.mouseout);
      }
      // set mouse pointer css base on the logolink is present or not
      chartLogoImage.css(pointerCSS[logoLink ? 'link' : 'normal']);
    }
  };

  return Logo;
}(_componentInterface2['default']);

exports['default'] = Logo;

/***/ })

},[592])["default"];
});
//# sourceMappingURL=fusioncharts.charts.js.map