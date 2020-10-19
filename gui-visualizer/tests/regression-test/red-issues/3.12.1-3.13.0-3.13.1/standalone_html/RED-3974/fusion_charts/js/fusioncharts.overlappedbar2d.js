
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
return webpackJsonpFusionCharts([12],{

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(906);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(18);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts4['default'].addDep(_fusioncharts2['default']);
_fusioncharts4['default'].addFile('fusioncharts.overlappedbar2d.js');

exports['default'] = _fusioncharts4['default'];

/***/ }),

/***/ 906:
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

var _multiseriesDataset = __webpack_require__(90);

var _multiseriesDataset2 = _interopRequireDefault(_multiseriesDataset);

var _column = __webpack_require__(384);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * class definition for overlapped bar chart API
 */
var OverlappedBar2D = function (_MSBarCartesian) {
  _inherits(OverlappedBar2D, _MSBarCartesian);

  /**
   * constructor fn
   */
  function OverlappedBar2D() {
    _classCallCheck(this, OverlappedBar2D);

    var _this = _possibleConstructorReturn(this, _MSBarCartesian.call(this));

    _this.isBar = true;
    _this.registerFactory('dataset', _multiseriesDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * parse defualt configuration of the chart
   * @memberof OverlappedBar2D
   */


  OverlappedBar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBarCartesian.prototype.__setDefaultConfig && _MSBarCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.friendlyName = 'Multi-series Bar Chart';
    config.hasLegend = true;
    config.defaultDatasetType = 'bar2d';
  };
  /**
   * Sets the name of the component
   * @return {string} name
   */


  OverlappedBar2D.prototype.getName = function getName() {
    return 'OverlappedBar2D';
  };

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  OverlappedBar2D.getName = function getName() {
    return 'OverlappedBar2D';
  };

  /**
   * This method return the dataset definations for this charts
   * @return {class} overlappedbar dataset class definition
   */


  OverlappedBar2D.prototype.getDSdef = function getDSdef() {
    return _bar2d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {class} manager API for overlap column
   */


  OverlappedBar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };

  return OverlappedBar2D;
}(_fusioncharts2['default']);

exports['default'] = OverlappedBar2D;

/***/ })

},[905])["default"];
});
//# sourceMappingURL=fusioncharts.overlappedbar2d.js.map