
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
return webpackJsonpFusionCharts([8],{

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(915);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(18);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts4['default'].addDep(_fusioncharts2['default']);
_fusioncharts4['default'].addFile('fusioncharts.stackedcolumn2dspline.js');

exports['default'] = _fusioncharts4['default'];

/***/ }),

/***/ 915:
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

var _msspline = __webpack_require__(45);

var _msspline2 = _interopRequireDefault(_msspline);

var _cartesian = __webpack_require__(21);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _combiDualYDataset = __webpack_require__(44);

var _combiDualYDataset2 = _interopRequireDefault(_combiDualYDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var UNDEFINED = void 0;
/**
 * class definition for StackedColumn2DSpline chart API
 */

var StackedColumn2DSpline = function (_MSCombi2D) {
  _inherits(StackedColumn2DSpline, _MSCombi2D);

  /**
   * constructor fn
   */
  function StackedColumn2DSpline() {
    _classCallCheck(this, StackedColumn2DSpline);

    var _this = _possibleConstructorReturn(this, _MSCombi2D.call(this));

    _this.registerFactory('dataset', _combiDualYDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  StackedColumn2DSpline.prototype.getName = function getName() {
    return 'StackedColumn2DSpline';
  };

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  StackedColumn2DSpline.getName = function getName() {
    return 'StackedColumn2DSpline';
  };

  /**
   * parse defualt configuration of the chart
   */


  StackedColumn2DSpline.prototype.__setDefaultConfig = function __setDefaultConfig() {
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


  StackedColumn2DSpline.prototype.getDSdef = function getDSdef(name) {
    return name === 'spline' ? _msspline2['default'] : _column2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  StackedColumn2DSpline.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column' ? _cartesian2['default'] : UNDEFINED;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  StackedColumn2DSpline.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'spline' ? 'spline' : 'column';
  };

  return StackedColumn2DSpline;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn2DSpline;

/***/ })

},[914])["default"];
});
//# sourceMappingURL=fusioncharts.stackedcolumn2dspline.js.map