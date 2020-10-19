
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
return webpackJsonpFusionCharts([11],{

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(899);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(18);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts4['default'].addDep(_fusioncharts2['default']);
_fusioncharts4['default'].addFile('fusioncharts.overlappedcolumn2d.js');

exports['default'] = _fusioncharts4['default'];

/***/ }),

/***/ 899:
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

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _column3 = __webpack_require__(384);

var _column4 = _interopRequireDefault(_column3);

var _multiseriesDataset = __webpack_require__(90);

var _multiseriesDataset2 = _interopRequireDefault(_multiseriesDataset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


/**
 * Class for multiseries column charts and who depend on this class
 * @type {class}
 */
var OverlappedColumn2D = function (_MSCartesian) {
  _inherits(OverlappedColumn2D, _MSCartesian);

  /**
   * constructor function of this class
   */
  function OverlappedColumn2D() {
    _classCallCheck(this, OverlappedColumn2D);

    var _this = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _this.eiMethods = {};
    _this.registerFactory('dataset', _multiseriesDataset2['default'], ['vCanvas']);
    return _this;
  }
  /**
   * Sets the name of the component
   * @return {string} name
   */


  OverlappedColumn2D.prototype.getName = function getName() {
    return 'OverlappedColumn2D';
  };

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */


  OverlappedColumn2D.getName = function getName() {
    return 'OverlappedColumn2D';
  };

  /**
   * parse defualt configuration of the chart
   */


  OverlappedColumn2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian.prototype.__setDefaultConfig.call(this);
    this.config.friendlyName = 'Multi-series Overlapped Column Chart';
    this.config.defaultDatasetType = 'column';
    this.config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  OverlappedColumn2D.prototype.getDSdef = function getDSdef() {
    return _column2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @return {class} manager API for overlap column
   */


  OverlappedColumn2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column4['default'];
  };

  return OverlappedColumn2D;
}(_fusioncharts2['default']);

exports['default'] = OverlappedColumn2D;

/***/ })

},[898])["default"];
});
//# sourceMappingURL=fusioncharts.overlappedcolumn2d.js.map