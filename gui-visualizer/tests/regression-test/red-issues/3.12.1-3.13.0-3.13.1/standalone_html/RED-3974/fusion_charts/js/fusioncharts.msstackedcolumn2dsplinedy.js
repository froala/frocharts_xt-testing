
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
return webpackJsonpFusionCharts([7],{

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(908);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(18);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts4['default'].addDep(_fusioncharts2['default']);
_fusioncharts4['default'].addFile('fusioncharts.msstackedcolumn2dsplinedy.js');

exports['default'] = _fusioncharts4['default'];

/***/ }),

/***/ 908:
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

var _fusioncharts = __webpack_require__(335);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _msspline = __webpack_require__(45);

var _msspline2 = _interopRequireDefault(_msspline);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _msstackedcolumnSplineDataset = __webpack_require__(909);

var _msstackedcolumnSplineDataset2 = _interopRequireDefault(_msstackedcolumnSplineDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * class definition for MSStackedColumn2DSplineDy chart api
 */
var MSStackedColumn2DSplineDy = function (_MSStackedColumn2DLin) {
  _inherits(MSStackedColumn2DSplineDy, _MSStackedColumn2DLin);

  /**
   * constructor fn
   */
  function MSStackedColumn2DSplineDy() {
    _classCallCheck(this, MSStackedColumn2DSplineDy);

    var _this = _possibleConstructorReturn(this, _MSStackedColumn2DLin.call(this));

    _this.stack100percent = 0;
    _this.hasLineSet = true;
    _this.lineset = true;
    _this.registerFactory('dataset', _msstackedcolumnSplineDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  MSStackedColumn2DSplineDy.prototype.getName = function getName() {
    return 'MSStackedColumn2DSplineDy';
  };

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  MSStackedColumn2DSplineDy.getName = function getName() {
    return 'MSStackedColumn2DSplineDy';
  };

  /**
   * This sets the default configuration
   * @memberof MSStackedColumn2DSplineDy
   */


  MSStackedColumn2DSplineDy.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSStackedColumn2DLin.prototype.__setDefaultConfig && _MSStackedColumn2DLin.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.sDefaultDatasetType = 'spline';
    config.friendlyName = 'Multi-series Dual Y-Axis Stacked Column and Line Chart';
    config.defaultDatasetType = 'column';
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  MSStackedColumn2DSplineDy.prototype.getDSdef = function getDSdef(name) {
    return name === 'spline' ? _msspline2['default'] : _column2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  MSStackedColumn2DSplineDy.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return MSStackedColumn2DSplineDy;
}(_fusioncharts2['default']);

exports['default'] = MSStackedColumn2DSplineDy;

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var jsonData = chart.getFromEnv('dataSource'),
      dataset = jsonData.dataset,
      splineSets = jsonData.lineset || [],
      splinesetStartIndex = void 0,
      indices = void 0,
      canvas = chart.getChildren('canvas')[0],
      vCanvas = canvas.getChildren('vCanvas')[1];

  if (!dataset && splineSets.length === 0) {
    chart.setChartMessage();
    return;
  }
  (0, _msstackedcolumnDataset2['default'])(chart);
  splinesetStartIndex = chart.config._lastDatasetIndex + 1;
  if (splineSets && splineSets.length) {
    indices = _map2['default'].call(_fill2['default'].call(Array(splineSets.length), splinesetStartIndex), function (n, j) {
      return n + j;
    });
    (0, _lib.datasetFactory)(vCanvas, chart.getDSdef('spline'), 'dataset_spline', splineSets.length, splineSets, indices);
  } else {
    removeLineSet(vCanvas);
  }
};

var _msstackedcolumnDataset = __webpack_require__(217);

var _msstackedcolumnDataset2 = _interopRequireDefault(_msstackedcolumnDataset);

var _lib = __webpack_require__(5);

var _fill = __webpack_require__(139);

var _fill2 = _interopRequireDefault(_fill);

var _map = __webpack_require__(27);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var removeLineSet = function removeLineSet(component) {
  var lineSet = component.getChildren('dataset_line'),
      i = void 0;
  for (i = lineSet && lineSet.length - 1; i > -1; i--) {
    lineSet[i].remove();
  }
};
/**
 * function to  create dataset, groupmaneger.
 * assign dataset to group manager.
 * @param {Object} chart Chart API
 **/

/***/ })

},[907])["default"];
});
//# sourceMappingURL=fusioncharts.msstackedcolumn2dsplinedy.js.map