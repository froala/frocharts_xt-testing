
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
		define("FusionChartsTooltip", [], factory);
	else if(typeof exports === 'object')
		exports["FusionChartsTooltip"] = factory();
	else
		root["FusionChartsTooltip"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(10);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(16);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20)('wks');
var uid = __webpack_require__(11);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(20)('keys');
var uid = __webpack_require__(11);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(1);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(15);
var LIBRARY = __webpack_require__(14);
var wksExt = __webpack_require__(23);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.getSuggestiveRotation = exports.extent = exports.normalizeAngle = exports.safeMin = exports.safeMax = exports.PROJECT_VERSION = exports.trimString = exports.datasetFactory = exports.componentFactory = exports.dropHash = exports.BGRATIOSTRING = exports.VISIBLE = exports.touchEnabled = exports.MOUSEMOVE = exports.MOUSEOUT = exports.FIT = exports.FILL = exports.TILE = exports.COMMA = exports.animationObjStr = exports.configStr = exports.ROUND = exports.BLANK = exports.POINTER = exports.HAND = exports.BOLD = exports.NORMAL = exports.mathRound = exports.mathAbs = exports.animHelperFN = exports.xssEncode = exports.MathExt = exports.defaultGaugePaletteOptions = exports.crispBound = exports.hasAttribDefs = exports.setAttribDefs = exports.parseConfiguration = exports.attribDefs = exports.canvasBorderColorStr = exports.defined = exports.pInt = exports.attrTypeBool = exports.canvasBGAlphaStr = exports.attrTypeNum = exports.DASH_DEF = exports.chartPaletteStr = exports.TRACKER_FILL = exports.capitalizeString = exports.handleContainerResize = exports.getContainerBackgroundColor = exports.appliedCSS = exports.graphics = exports.convertColor = exports.pseudoEval = exports.executeJS = exports.componentConfigurer = exports.componentDispose = exports.createDialog = exports.chartAPI = exports.axisLabelAdder = exports.getDashStyle = exports.createTrendLine = exports.getAxisLimits = exports.supportedStyle = undefined;
exports.parsexAxisStyles = exports.setLineHeight = exports.setImageDisplayMode = exports.getLinkAction = exports.lineHeightFactor = exports.isIE = exports.CREDIT_REGEX = exports.hasSVG = exports.stableSort = exports.stubFN = exports.preDefStr = exports.getCripValues = exports.getCrispValue = exports.isArray = exports.getImageURL = exports.regReplaceEscape = exports.regescape = exports.getSentenceCase = exports.CREDIT_STRING = exports.CREDIT_HREF = exports.hasTouch = exports.toPrecision = exports.parseTooltext = exports.parseUnsafeString = exports.parsePointValue = exports.getFirstAlpha = exports.fastTrim = exports.gradientify = exports.rgbaToHex = exports.toRaphaelColor = exports.clampNumber = exports.pluckColor = exports.getColorCodeString = exports.getFirstColor = exports.getFirstValue = exports.getDefinedColor = exports.fcEach = exports.bindSelectionEvent = exports.getViewPortDimension = exports.getPosition = exports.getValidValue = exports.pluckFontSize = exports.getComparatorFN = exports.dehashify = exports.hashify = exports.createElement = exports.getFirstDefinedValue = exports.pluckNumber = exports.pluck = exports.imprint = exports.deltend = exports.extend2 = exports.getTouchEvent = exports.getMouseCoordinate = exports.getEventCoordinate = exports.plotEventHandler = exports.regex = exports.CLICK_THRESHOLD_PIXELS = exports.TOUCH_THRESHOLD_PIXELS = exports.visibleStr = exports.hiddenStr = exports.TEXTANCHOR = exports.COMMASPACE = exports.PXSTRING = exports.HUNDREDSTRING = exports.SHAPE_RECT = exports.FC_CONFIG_STRING = exports.POSITION_END = exports.POSITION_START = exports.POSITION_MIDDLE = exports.POSITION_CENTER = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_RIGHT = exports.POSITION_TOP = exports.STRINGUNDEFINED = exports.DECIMALSTRING = exports.ONESTRING = exports.TESTSTR = exports.SAMPLESTRING = exports.ZEROSTRING = exports.COMMASTRING = exports.OBJECTSTRING = exports.STRINGSTRING = exports.BREAKSTRING = exports.HASHSTRING = exports.COLOR_TRANSPARENT = exports.COLOR_WHITE = exports.COLOR_GLASS = exports.COLOR_BLACK = exports.BLANKSTRING = exports.UNDERSCORE = exports.UNDEF = exports.BLANKSTRINGPLACEHOLDER = exports.getLineHeightFactor = exports.setLineHeightFactor = exports.getEmptyConstractor = exports.addInterActiveEvtName = exports.isInterActiveEvt = exports.setVCanvas = undefined;

var _iterator = __webpack_require__(27);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(36);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; }; /* ?
                                                                                                                                                                                                                                                                                                                                         // metascript to check license status for creditLabel
                                                                                                                                                                                                                                                                                                                                         var licenseActive = (!global.licensed + " &&"),
                                                                                                                                                                                                                                                                                                                                         resellerLicenseText = "'" + (global.resellerLicense ? 'FusionCharts XT - Only For Resale': 'FusionCharts XT Trial')
                                                                                                                                                                                                                                                                                                                                                                +"' ||";

                                                                                                                                                                                                                                                                                                                                         */
/**
 * @private
 * @module fusioncharts.renderer.javascript.lib
 * @requires fusioncharts.renderer.javascript.polyfill
 * @requires fusioncharts.renderer.javascript
 * @requires ../../../../vendors/svgtocanvas/build/svgdecanvo-fusioncharts.js
 * @requires fusioncharts.renderer.javascript.lib-attr
 */
/* global escape: false */

var _package = __webpack_require__(73);

var _package2 = _interopRequireDefault(_package);

var _libAttr = __webpack_require__(74);

var _domEvent = __webpack_require__(75);

var _domEvent2 = _interopRequireDefault(_domEvent);

var _raphael = __webpack_require__(39);

var _raphael2 = _interopRequireDefault(_raphael);

var _eventApi = __webpack_require__(76);

var _schedular = __webpack_require__(40);

var _schedular2 = _interopRequireDefault(_schedular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PROJECT_VERSION = _package2['default'].version;

var win = window,
    lib = {},

// fcGlobal = {},
BGRATIOSTRING,

// The default value for stroke-dash attribute.
DASH_DEF = 'none',

// eslint-disable-next-line no-empty-function
EMPTYFN = function EMPTYFN() {},
    getEmptyConstractor = function getEmptyConstractor() {
  // eslint-disable-next-line no-empty-function
  return function () {};
},
    doc = win.document,
    nav = win.navigator,
    hasSVG = Boolean(win.SVGAngle || doc.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')),
    isIE = /msie/i.test(nav.userAgent) && !win.opera,
    attrTypeNum = 1,
    attrTypeBool = 2,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_CENTER = 'center',
    UNDEF,
    BLANKSTRINGPLACEHOLDER = '#BLANK#',
    SAMPLESTRING = 'Ay0',
    COLOR_BLACK = '000000',
    COLOR_GLASS = 'rgba(255, 255, 255, 0.3)',
    COLOR_WHITE = 'FFFFFF',
    COLOR_TRANSPARENT = 'rgba(0,0,0,0)',
    HASHSTRING = '#',
    BREAKSTRING = '<br />',
    STRINGSTRING = 'string',
    OBJECTSTRING = 'object',
    BLANK = '',
    prevPageX,
    prevPageY,
    BLANKSTRING = BLANK,
    COMMASTRING = ',',
    COMMA = ',',
    RStr = 'r',
    COLON = ':',
    HYPHEN = '-',
    ZEROSTRING = '0',
    MOUSEOUT = 'mouseout',
    MOUSEMOVE = 'mousemove',
    TESTSTR = 'Ag',
    ONESTRING = '1',
    DECIMALSTRING = '.',
    STRINGUNDEFINED = 'undefined',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_MIDDLE = 'middle',
    POSITION_START = 'start',
    POSITION_END = 'end',
    FC_CONFIG_STRING = '_FCconf',
    SHAPE_RECT = 'rect',
    HUNDREDSTRING = '100',
    VISIBLE = 'visible',

// SEVENTYSTRING = '70',
// NINETYSTRING = '90',
PXSTRING = 'px',
    COMMASPACE = ', ',
    TEXTANCHOR = 'text-anchor',
    canvasBGAlphaStr = 'canvasBgAlpha',

// AUTOSTRING = 'auto',
ROUND = 'round',

// PERCENTAGESTRING = '%',
// PLOTFILLCOLOR_STR = 'plotFillColor',
UNDERSCORE = '_',
    NORMAL = 'normal',
    BOLD = 'bold',
    POINTER = 'pointer',
    HAND = POINTER,
    TILE = 'tile',
    FILL = 'fill',
    FIT = 'fit',

// DEFAULT = 'default',
CREDIT_HREF = 'http://www.fusioncharts.com?BS=FCHSEvalMark&utm_source=FCS_trial' + '&pver=' + escape(PROJECT_VERSION),
    CREDIT_STRING = /* ?=resellerLicenseText */'',
    canvasBorderColorStr = 'canvasBorderColor',
    TOUCH_THRESHOLD_PIXELS = 15,
    CLICK_THRESHOLD_PIXELS = 5,


// defaultFontStr = 'Verdana,sans',
lineHeightFactor = 1.2,

// line = 'line',
// bar = 'bar',
// column = 'column',
// volume = 'volume',
configStr = 'config',
    animationObjStr = 'animationObj',

// showHoverEffectStr = 'showHoverEffect',
hiddenStr = 'hidden',
    visibleStr = 'visible',
    toFloat = parseFloat,
    CREDIT_REGEX = /fusioncharts\.com|fusioncharts\.github\.io$/i,

// Regular Expressions
breakPlaceholder = /\{br\}\s*/ig,
    stripWhitespace = /\s+/g,
    dropHash = /^#?/,
    startsRGBA = /^rgba/i,
    cleanColorCode = /[#\s]/ig,
    hexcode = /^#?[0-9a-f]{6}/i,
    validhexcolor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
    mathAbs = Math.abs,
    mathPow = Math.pow,
    mathRound = Math.round,
    EPSILON = mathPow(2, -24),
    objectToStrFn = Object.prototype.toString,
    touchEnabled = 'ontouchstart' in doc,
    hasTouch = touchEnabled && !(nav.maxTouchPoints || nav.msMaxTouchPoints),
    creditLabel = /* ?=licenseActive */!CREDIT_REGEX.test(win.location.hostname),
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    stubEvent = {
  pageX: 0,
  pageY: 0
},
    M = 'M',
    l = 'l',
    Z = 'Z',
    gaugePaletteColors = ['8BBA00', 'F6BD0F', 'FF654F', 'AFD8F8', 'FDB398', 'CDC309', 'B1D0D2', 'FAD1B9', 'B8A79E', 'D7CEA5', 'C4B3CE', 'E9D3BE', 'EFE9AD', 'CEA7A2', 'B2D9BA'],
    defaultGaugePaletteOptions = {
  paletteColors: [gaugePaletteColors, gaugePaletteColors, gaugePaletteColors, gaugePaletteColors, gaugePaletteColors],

  bgColor: ['CBCBCB,E9E9E9', 'CFD4BE,F3F5DD', 'C5DADD,EDFBFE', 'A86402,FDC16D', 'FF7CA0,FFD1DD'],
  bgAngle: [270, 270, 270, 270, 270],
  bgRatio: ['0,100', '0,100', '0,100', '0,100', '0,100'],
  bgAlpha: ['50,50', '60,50', '40,20', '20,10', '30,30'],

  toolTipBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
  toolTipBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'],
  baseFontColor: ['555555', '60634E', '025B6A', 'A15E01', '68001B'],

  tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
  trendDarkColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
  trendLightColor: ['f1f1f1', 'F3F5DD', 'EDFBFE', 'FFF5E8', 'FFD1DD'],

  pointerBorderColor: ['545454', '60634E', '415D6F', '845001', '68001B'],
  pointerBgColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

  canvasBgColor: ['FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF'],
  canvasBgAngle: [0, 0, 0, 0, 0],
  canvasBgAlpha: ['100', '100', '100', '100', '100'],
  canvasBgRatio: ['', '', '', '', ''],
  canvasBorderColor: ['545454', '545454', '415D6F', '845001', '68001B'],
  canvasBorderAlpha: [100, 100, 100, 90, 100],

  altHGridColor: ['EEEEEE', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
  altHGridAlpha: [50, 35, 10, 20, 15],
  altVGridColor: ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
  altVGridAlpha: [10, 20, 10, 15, 10],

  borderColor: ['767575', '545454', '415D6F', '845001', '68001B'],
  borderAlpha: [50, 50, 50, 50, 50],
  legendBgColor: ['ffffff', 'ffffff', 'ffffff', 'ffffff', 'ffffff'],
  legendBorderColor: ['545454', '545454', '415D6F', '845001', 'D55979'],
  plotFillColor: ['767575', 'D8DCC5', '99C4CD', 'DEC49C', 'FEC1D0'],
  plotBorderColor: ['999999', '8A8A8A', '6BA9B6', 'C1934D', 'FC819F'],
  msgLogColor: ['717170', '7B7D6D', '92CDD6', '965B01', '68001B'],

  TrendLightShadeOffset: 30
},
    xssEncode = function xssEncode(s) {
  if (s === null || typeof s === 'undefined' || typeof s.toString !== 'function') {
    return '';
  }

  // do we convert to numerical or html entity?
  s = s.toString().replace(/&/g, '&amp;').replace(/\'/g, '&#39;') // no HTML equivalent as &apos is not cross browser supported
  .replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return s;
},
    MathExt = {
  /**
   * Returns the number of decimal places provided
   * in the given number.
   *  @param  {number} num Number for which we've to find the decimal places.
   *  @return {number}     Number of decimal places found.
   */
  numDecimals: function numDecimals(num) {
    // Fix for upperLimits or lowerLimits given in decimal
    num = toPrecision(num, 10);
    // Absolute value (to avoid floor disparity for negative num)
    num = Math.abs(num);
    // Get decimals
    var decimal = toPrecision(num - Math.floor(num), 10),

    // Number of decimals
    numDecimals = String(decimal).length - 2;
    // For integral values
    numDecimals = numDecimals < 0 ? 0 : numDecimals;
    // Return the length of string minus '0.'
    return numDecimals;
  },
  /**
   * toRadians method converts angle from degrees to radians
   * @param  {number} angle The numeric value of the angle in degrees
   * @return {number}       The numeric value of the angle in radians
   */
  toRadians: function toRadians(angle) {
    return angle / 180 * Math.PI;
  },
  /**
   * toDegrees method converts angle from radians to degrees
   * @param  {number} angle The numeric value of the angle in radians
   * @return {number}       The numeric value of the angle in degrees
   */
  toDegrees: function toDegrees(angle) {
    return angle / Math.PI * 180;
  },
  /**
   * flashToStandardAngle method converts angles from Flash angle to normal angles (0-360).
   *  @param  {number}  ang Angle to be converted
   *  @return {number}      Converted angle
   */
  flashToStandardAngle: function flashToStandardAngle(ang) {
    return -1 * ang;
  },
  /**
   * standardToFlashAngle method converts angles from normal angle to Flash angles
   *  @param  {number} ang Angle to be converted
   *  @return {number}     Converted angle
   */
  standardToFlashAngle: function standardToFlashAngle(ang) {
    return -1 * ang;
  },
  /**
   * flash180ToStandardAngle method changes a Flash angle (-180Â° to 180Â°) into standard
   * angle (0Â° to 360Â° CCW) wrt the positive x-axis using angle input.
   * @param  {number} ang Angle in degrees (-180Â° to 180Â°).
   * @return {number}     Angle in degrees (0Â° to 360Â° CCW).
   */
  flash180ToStandardAngle: function flash180ToStandardAngle(ang) {
    var a = 360 - ((ang %= 360) < 0 ? ang + 360 : ang);
    return a == 360 ? 0 : a;
  },
  /**
   * getAngularPoint method calculates a point at a given angle
   * and radius from the given point.
   *  @param {number} fromX    From point's X co-ordinate
   *  @param {number} fromY    From point's Y co-ordinate
   *  @param {number} distance How much distance (pixels) from current point?
   *  @param {number} angle    At what angle (degrees - standard) from current point
   *
   * @return {Object}          Object containing the x and y values with respect to given input
   */
  getAngularPoint: function getAngularPoint(fromX, fromY, distance, angle) {
    // Convert the angle into radians
    angle = angle * (Math.PI / 180);
    var xPos = fromX + distance * Math.cos(angle),
        yPos = fromY - distance * Math.sin(angle);
    return {
      x: xPos,
      y: yPos
    };
  },
  /**
   * remainderOf method calculates the remainder in
   * a division to the nearest twip.
   * @param   {number} a   dividend in a division
   * @param   {number} b   divisor in a division
   *
   * @return  {number}     Remainder in the division rounded to the nearest twip.
   */
  remainderOf: function remainderOf(a, b) {
    return Math.ceil(a % b);
  },
  /**
   * boundAngle method converts any angle in degrees
   * to its equivalent in the range of 0 to 360 degrees.
   * @param  {number} angle Angle in degrees to be procesed. Can take negetive values.
   * @return {number}       Equivalent non-negetive angle in degrees less than or equal to
   *                        360 degrees.
   */
  boundAngle: function boundAngle(angle) {
    if (angle >= 0) {
      return MathExt.prototype.remainderOf(angle, 360);
    } else {
      return 360 - MathExt.prototype.remainderOf(Math.abs(angle), 360);
    }
  },
  /**
   * toNearestTwip method converts a numeric value by
   * rounding it to the nearest twip value ( one twentieth
   * of a pixel ) for propermost rendering in flash.
   * @param  {number} num Number to rounded
   *
   * @return {number}     Number rounded upto 2 decimal places and
   *                      second significant digit right of decimal
   *                      point, if exists at all is 5.
   */
  toNearestTwip: function toNearestTwip(num) {
    var n = num,
        s = n < 0 ? -1 : 1,
        k = Math.abs(n),
        r = Math.round(k * 100),
        b = Math.floor(r / 5),
        t = Number(String(r - b * 5)),
        m = t > 2 ? b * 5 + 5 : b * 5;
    return s * (m / 100);
  },
  /**
   * roundUp method is used to format trailing decimal
   * places to the required precision, with default base 2.
   * @param  {number} num  number to be formatted
   * @param  {number} base number of precision digits
   * @return {number}      formatted number
   * @private
   */
  roundUp: function roundUp(num, base) {
    // precise to number of decimal places
    base = !base ? 2 : base;
    var factor = Math.pow(10, base);
    num *= factor;
    num = Math.round(Number(String(num)));
    num /= factor;
    return num;
  }
},
    pi2 = math.PI * 2,

/**
 * Helper function for pie chart. Helps in converting negative angles to positive ones
 * @param  {angle} The required angle to be normalised
 * @param  {inDegrees} If the given angle is in degree or radian
 * @return {Number} The normalised angle
 */
normalizeAngle = function normalizeAngle(angle, inDegrees) {
  var fullCycle = inDegrees ? 360 : pi2;
  angle = (angle || 0) % fullCycle;
  return angle < 0 ? fullCycle + angle : angle;
},
    canvasBaseColor3DStr = 'canvasBaseColor3D',
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
    supportedStyle = {
  font: 'font',
  fontFamily: 'font-family',
  'font-family': 'font-family',
  fontWeight: 'font-weight',
  'font-weight': 'font-weight',
  fontSize: 'font-size',
  'font-size': 'font-size',
  lineHeight: 'line-height',
  'line-height': 'line-height',
  textDecoration: 'text-decoration',
  'text-decoration': 'text-decoration',
  color: 'color',
  whiteSpace: 'white-space',
  'white-space': 'white-space',
  padding: 'padding',
  margin: 'margin',
  background: 'background',
  backgroundColor: 'background-color',
  'background-color': 'background-color',
  backgroundImage: 'background-image',
  'background-image': 'background-image',
  backgroundPosition: 'background-position',
  'background-position': 'background-position',
  backgroundPositionLeft: 'background-position-left',
  'background-position-left': 'background-position-left',
  backgroundPositionTop: 'background-position-top',
  'background-position-top': 'background-position-top',
  backgroundRepeat: 'background-repeat',
  'background-repeat': 'background-repeat',
  border: 'border',
  borderColor: 'border-color',
  'border-color': 'border-color',
  borderStyle: 'border-style',
  'border-style': 'border-style',
  borderThickness: 'border-thickness',
  'border-thickness': 'border-thickness',
  borderTop: 'border-top',
  'border-top': 'border-top',
  borderTopColor: 'border-top-color',
  'border-top-color': 'border-top-color',
  borderTopStyle: 'border-top-style',
  'border-top-style': 'border-top-style',
  borderTopThickness: 'border-top-thickness',
  'border-top-thickness': 'border-top-thickness',
  borderRight: 'border-right',
  'border-right': 'border-right',
  borderRightColor: 'border-right-color',
  'border-right-color': 'border-right-color',
  borderRightStyle: 'border-right-style',
  'border-right-style': 'border-right-style',
  borderRightThickness: 'border-right-thickness',
  'border-right-thickness': 'border-right-thickness',
  borderBottom: 'border-bottom',
  'border-bottom': 'border-bottom',
  borderBottomColor: 'border-bottom-color',
  'border-bottom-color': 'border-bottom-color',
  borderBottomStyle: 'border-bottom-style',
  'border-bottom-style': 'border-bottom-style',
  borderBottomThickness: 'border-bottom-thickness',
  'border-bottom-thickness': 'border-bottom-thickness',
  borderLeft: 'border-left',
  'border-left': 'border-left',
  borderLeftColor: 'border-left-color',
  'border-left-color': 'border-left-color',
  borderLeftStyle: 'border-left-style',
  'border-left-Style': 'border-left-style',
  borderLeftThickness: 'border-left-thickness',
  'border-left-thickness': 'border-left-thickness'
},
    supportsTouch = 'createTouch' in doc,


// The devices which both touch and pointer.
supportsOnlyTouch = supportsTouch && !(win.navigator.maxTouchPoints || win.navigator.msMaxTouchPoints),
    crispFixer = hasSVG ? 0 : 0.5,


/**
 * This method takes in the given below parameters and returns crisped dimentions
 * @param {number} x xPos of the rectangle
 * @param {number} y yPos of the rectangle
 * @param {number} w width of the rectangle
 * @param {number} h height of the rectangle
 * @param {number} s stroke width of the rectangle
 * @return {Object}
 */
crispBound = function crispBound() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var isStacked = arguments[6];

  // if width or height is less than 1 px then no crisping will be done
  // as crisping may result in 0 width/height
  if (h < 1 || w < 1) {
    return {
      x: x,
      y: y,
      'width': w,
      'height': h,
      'stroke-width': s
    };
  }
  // if stroke width is greater than height or width then set it
  // to the minimum of the two so that further calculations do not
  // end up with a negative value
  if (s >= w / 2 || s >= h / 2) {
    s = Math.floor(Math.min(w, h) / 2) || s;
  }
  var x1 = x,
      y1 = y,
      x2 = x + w,
      s2 = s / 2,
      isOdd = s % 2,
      y2 = y + h;

  if (options.top) {
    // include the top edge
    y1 = Math.round(y1) + s2 - crispFixer;
  } else {
    if (isOdd) {
      // if stroke width is odd then bring it to nearest decimal of 5
      // so that when stroke width is added it becomes an integer
      y1 = Math.floor(y1) + 0.5 - crispFixer;
    } else {
      y1 = Math.round(y1) - crispFixer;
    }
  }
  if (options.bottom) {
    // include the bottom edge
    y2 = Math.round(y2) - s2 - crispFixer;
  } else {
    if (isStacked && options.top) {
      // make the top edge of the below plot intersect with the top edge of
      // the above plot in case of stacked column, so that the borders overlap
      // the border between the two plots do not appear thick
      y2 = Math.round(y2) + s2 - crispFixer;
    } else {
      if (isOdd) {
        y2 = Math.floor(y2) + 0.5 - crispFixer;
      } else {
        y2 = Math.round(y2) - crispFixer;
      }
    }
  }
  if (options.left) {
    // include the left edge
    x1 = Math.round(x1) + s2 - crispFixer;
  } else {
    if (isStacked && options.right) {
      // make the right edge of the left plot intersect with the left edge of
      // the right plot in case of stacked bar, so that the borders overlap
      // the border between the two plots do not appear thick
      x1 = Math.round(x1) - s2 - crispFixer;
    } else {
      if (isOdd) {
        // if stroke width is odd then bring it to nearest decimal of 5
        // so that when stroke width is added it becomes an integer
        x1 = Math.floor(x1) + 0.5 - crispFixer;
      } else {
        x1 = Math.round(x1) - crispFixer;
      }
    }
  }
  if (options.right) {
    // include the right edge
    x2 = Math.round(x2) - s2 - crispFixer;
  } else {
    if (isOdd) {
      // if stroke width is odd then bring it to nearest decimal of 5
      // so that when stroke width is added it becomes an integer
      x2 = Math.floor(x2) + 0.5 - crispFixer;
    } else {
      x2 = Math.round(x2) - crispFixer;
    }
  }
  return {
    x: x1,
    y: y1,
    'width': Math.abs(x2 - x1),
    'height': Math.abs(y2 - y1),
    'stroke-width': s
  };
},
    rgbaToHex = function rgbaToHex(rgb) {
  rgb = rgb.replace('rgba(', BLANKSTRING).split(',');
  return '#' + (COLOR_BLACK + (rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16)).slice(-6);
},
    animHelperFN = {
  getTimeByValue: function getTimeByValue(timeRange, pixelRange, plotRange) {
    var timePixelRatio = (timeRange.end - timeRange.start) / (pixelRange.endPx - pixelRange.startPx);
    return {
      start: timeRange.start + timePixelRatio * (plotRange.startPx - pixelRange.startPx),
      end: timeRange.start + timePixelRatio * (plotRange.endPx - pixelRange.startPx)
    };
  },
  animByIndex: function animByIndex(i, len, mul, startIn, endIn, totalInc) {
    var start = (i + (startIn || 0)) / len * (mul || 1),
        end = (i + (endIn || 0)) / len * (mul || 1),
        lim = (mul || 1) + (totalInc || 0);
    lim > 1 && (lim = 1);
    lim && start > lim && (start = lim);
    lim && end > lim && (end = lim);
    return {
      start: start + (totalInc || 0),
      end: end + (totalInc || 0)
    };
  },
  animByWeight: function animByWeight(i, len, weight, mul, shift) {
    mul = mul || 1;
    len--;
    shift = shift || 0;
    return {
      start: i / len * weight * mul + shift,
      end: i / len * weight * mul + weight + shift
    };
  },
  isAttrDiff: function isAttrDiff(a, b) {
    var key,
        valA,
        valB,
        toStringArr = [].toString;
    a.attrs && (a = a.attrs);
    for (key in b) {
      if (!b.hasOwnProperty(key)) {
        continue;
      }
      if (Array.isArray(a) || Array.isArray(b)) {
        valA = toStringArr.call(valA);
        valB = toStringArr.call(valB);
      } else {
        valA = a[key] && a[key].toString();
        valB = b[key] && b[key].toString();
      }
      if (valA !== valB) {
        return true;
      }
    }
    return false;
  }
},


/**
 * This function is used to create html DOM
 *
 * @param {string} tagName the name of the HTML tag
 * @param {Object} attributes Object contain all attribute name and value
 * @param {DOMobject} parentElement parent node of the newly created element
 */
createElement = function createElement(tagName, attributes, parentElement) {
  var elem = doc.createElement(tagName),
      x;
  // apply all attribute
  for (x in attributes) {
    elem.setAttribute(x, attributes[x]);
  }
  // append in parent element
  parentElement && parentElement.appendChild && parentElement.appendChild(elem);
  return elem;
},

// lib = global.hcLib || (fcGlobal.hcLib = {}),
// interactiveEvents = {
//   'mousedown': true
// },
// SvgDeCanvo = lib.SvgDeCanvo,
/**
 * Check whether an object is Array or not
 * @type Boolean
 * @param {Object} subject is the variable that is
 * tested for Array identity check
 */
isArray = function () {
  // Use compiler's own isArray when available
  if (Array.isArray) {
    return Array.isArray;
  }

  // Retain references to variables for performance optimization
  var objectToStringFn = Object.prototype.toString,
      arrayToStringResult = objectToStringFn.call([]);

  return function (subject) {
    return objectToStringFn.call(subject) === arrayToStringResult;
  };
}(),

/**
 * This function ensures that the event object always has pageX and pageY irrespective of the
 * browser. Older IE browsers do not support pageXY.
 *
 * @param {MouseEvent} event
 * @return {MouseEvent} This function updates the events `pageX` and `pageY` properties when
 * they're missing and also returns the same event for the sexy programming styles.
 */
getEventCoordinate = function () {
  return function (event) {
    // If `pageX` is UNDEF, it is certain that we need to fallback to `clientX`.
    // There is no point separately checking for `pageY`.
    if (event.pageX === UNDEF) {
      // We store reference to body while accessing so that future references are fast.
      event.pageX = event.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
      event.pageY = event.clientY + doc.body.scrollTop + doc.documentElement.scrollTop;
    }
    return event;
  };
}(),
    getViewPortDimension = function () {
  var pw = 'innerWidth',
      ph = 'innerHeight',
      docEl = doc.documentElement || doc.body,
      vpEl = docEl;

  if (!('innerWidth' in win)) {
    pw = 'clientWidth';
    ph = 'clientHeight';
  } else {
    vpEl = win;
  }

  return function () {
    return {
      width: vpEl[pw],
      height: vpEl[ph],
      scrollTop: docEl.scrollTop,
      scrollLeft: docEl.scrollLeft
    };
  };
}(),

/**
 * This function call multylevel js function given as STR
 */
limitedEvalParser = function () {
  var DOT = '.',
      windowPropIdentifier = /^@window_/g;

  return function (expr, args, multipleParams) {
    var pattern = expr.replace(/\[[\'\"]/g, DOT).replace(/[\'\"]\]/g, BLANK) // remove all quotations.
    // replace all opening '[' with identifier that it is a
    // variable in global scope.
    .replace(/\[/g, '.@window_').replace(/\]/g, BLANK),
        // romove all closing ']'
    tokens = pattern.split(DOT),
        obj = win,
        boxObj,
        windowProp,
        tokenEx = BLANK,
        token,
        l,
        i;

    l = tokens.length;
    for (i = 0; i < l; i += 1) {
      token = tokens[i];
      boxObj = obj;
      if (token.match(windowPropIdentifier)) {
        windowProp = win[token.replace(windowPropIdentifier, BLANK)];
        obj = obj[windowProp];
      } else if (obj === UNDEF || obj === null) {
        // eslint-disable-next-line no-throw-literal
        throw (tokenEx || token).replace(windowPropIdentifier, BLANK) + ' is not defined';
      } else {
        obj = obj[token];
      }
      tokenEx = token;
    }

    if (obj && (typeof obj.call === 'function' || obj === win.alert)) {
      if (obj === win.alert) {
        // for IE6 bug
        obj(args);
      } else {
        multipleParams ? obj.apply(boxObj, args.split('-')) : obj.call(boxObj, args);
      }
    } else if (tokenEx === 'void') {
      return void args;
    } else {
      setTimeout(function () {
        // eslint-disable-next-line no-throw-literal
        throw token.replace(windowPropIdentifier, BLANK) + '() is not a function';
      }, 0);
    }
  };
}(),
    toRaphaelColor = function () {
  var cache = {};

  return function (obj) {
    obj = obj || this;
    var o = obj && obj.FCcolor || obj,
        colors = o.color,
        ratio = o.ratio,
        angle = o.angle,
        opacities = o.alpha,
        r = o.r,
        cx = o.cx,
        cy = o.cy,
        fx = o.fx,
        fy = o.fy,
        units = o.gradientUnits,
        x1 = o.x1,
        y1 = o.y1,
        x2 = o.x2,
        y2 = o.y2,
        radialGradient = o.radialGradient,
        opacity = 1,
        str,
        i,
        l,
        color,
        hash;

    if (typeof obj === 'string') {
      return cache[hash = '~' + obj] || (cache[hash] = obj.replace(/^#?([a-f0-9]{3,6})/ig, '#$1'));
    }

    colors = colors || BLANK;

    if (!colors) {
      return str;
    }

    hash = [colors, opacities, ratio, angle, r, cx, cy, units, fx, fy, x1, x2, y1, y2, radialGradient].join(UNDERSCORE).replace(/[\(\)\s,\xb0#]/g, UNDERSCORE);
    if (cache[hash]) {
      return cache[hash];
    }

    ratio = ratio && (ratio + BLANK).split(COMMA) || [];
    opacities = (opacities || opacities === 0) && (opacities + BLANK).split(COMMA) || [];

    if (colors = colors.split(COMMA)) {
      str = BLANK;
      if (colors.length === 1) {
        color = colors[0].replace(/^#?([a-f0-9]{3,6})/ig, '$1');
        if (opacities.length) {
          str = 'rgba(' + hexToRgb(color).join(COMMA) + ',' + toFloat(opacities[0]) * 0.01 + ')';
        } else {
          str = color.replace(/^#?([a-f0-9]{3,6})/ig, '#$1');
        }
      } else {
        for (i = 0, l = colors.length; i < l; i++) {
          color = colors[i].replace(/^#?([a-f0-9]{3,6})/ig, '$1');
          if (!isNaN(ratio[i])) {
            ratio[i] = toFloat(ratio[i]);
            color += COLON + ratio[i];
            if (!isNaN(ratio[i + 1])) {
              ratio[i + 1] = toFloat(ratio[i + 1]) + ratio[i];
            }
          }
          if (!isNaN(opacities[i]) && opacities[i] !== BLANK) {
            opacity = opacities[i] * 0.01;
          }
          colors[i] = 'rgba(' + hexToRgb(color).join(COMMA) + ',' + opacity + ')';
          if (!isNaN(ratio[i])) {
            if (ratio[i] === ratio[i - 1]) {
              ratio[i] += 0.001;
            }
            colors[i] = colors[i] + COLON + ratio[i];
          }
        }
        str += colors.join(HYPHEN);

        if (r !== UNDEF || fx !== UNDEF || cx !== UNDEF || o.radialGradient) {
          str = 'xr(' + [fx, fy, r, cx, cy, units].join(',') + ')' + str;
        } else {
          str = HYPHEN + str;
          if (x1 !== UNDEF || y1 !== UNDEF || x2 !== UNDEF || y2 !== UNDEF) {
            str = '(' + [x1, y1, x2, y2, units].join(',') + ')' + str;
          }
          if (angle === UNDEF) {
            angle = 0;
          }
          str = 360 - toFloat(angle) % 360 + str;
        }
      }
    }
    return cache[hash] = str;
  };
}(),
    gradientify = function () {
  return function () {
    var attr = '';

    return attr;
  };
}(),
    symbolStr = {
  circle: 'circle',
  triangle: 'triangle',
  square: 'square',
  diamond: 'diamond',
  poly: 'poly_',
  spoke: 'spoke_'
},

/*
 *manager to add axis labels
 */
axisLabelAdder = function () {
  var TEXTPOSITION = {
    top: {
      align: 'center',
      verticalAlign: 'top',
      textAlign: 'center'
    },
    right: {
      align: 'right',
      verticalAlign: 'middle',
      textAlign: 'left'
    },
    bottom: {
      align: 'center',
      verticalAlign: 'bottom',
      textAlign: 'center'
    },
    left: {
      align: 'left',
      verticalAlign: 'middle',
      textAlign: 'right'
    }
  },
      alphaRetriveRegx = /([^\,^\s]+)\)$/g,
      labelAdder = function labelAdder(defaultSeries, FCchartObj) {
    var labelStep;
    /** @todo add all series type for which the axis will be like bar(xChanged position) */
    if (/^(bar|bar3d)$/.test(defaultSeries)) {
      this.isBar = true;
      this.yPos = 'bottom';
      this.yOppPos = 'top';
      this.xPos = 'left';
      this.xOppPos = 'right';
    }
    // steping attr
    labelStep = parseInt(FCchartObj.labelstep, 10);
    this.labelStep = labelStep > 1 ? labelStep : 1;
    this.showLabel = pluckNumber(FCchartObj.showlabels, FCchartObj.shownames, 1);
    this.config.is3D = /3d$/.test(defaultSeries);
  };

  labelAdder.prototype = {
    isBar: false,
    yPos: 'left',
    yOppPos: 'right',
    xPos: 'bottom',
    xOppPos: 'top',
    // Note: linecolor must be in rgba str
    addAxisGridLine: function addAxisGridLine(axisObj, value, text, width, dashStyle, lineColor, zIndex, isXxis) {
      var hasText = text !== '',
          hasVisibleLine = !!(width > 0 || lineColor.match(alphaRetriveRegx)[1] > 0),
          axisPos,
          textAttrs,
          gridLine;
      if (hasText || hasVisibleLine) {
        if (!hasVisibleLine) {
          lineColor = COLOR_TRANSPARENT;
          width = 0.1;
        }
        gridLine = {
          isGrid: true,
          width: width,
          dashStyle: dashStyle,
          color: lineColor,
          value: value,
          zIndex: zIndex === UNDEF ? 2 : zIndex
        };
        if (hasText) {
          axisPos = axisObj.opposite ? isXxis ? this.xOppPos : this.yOppPos : isXxis ? this.xPos : this.yPos;
          textAttrs = TEXTPOSITION[axisPos];
          gridLine.label = {
            text: text,
            style: axisObj.labels.style,
            textAlign: textAttrs.textAlign,
            align: textAttrs.align,
            verticalAlign: textAttrs.verticalAlign,
            rotation: 0,
            x: 0,
            y: 0
          };
        }
        axisObj.plotLines.push(gridLine);
      }
      return gridLine;
    },
    addAxisAltGrid: function addAxisAltGrid(axisObj, currentValue) {
      if (!this.config.is3D) {
        var lastValue = pluckNumber(axisObj._lastValue, axisObj.min),
            altGrid = pluck(axisObj._altGrid, false);
        if (altGrid) {
          axisObj.plotBands.push({
            isGrid: true,
            color: axisObj.alternateGridColor,
            to: currentValue,
            from: lastValue,
            zIndex: 1
          });
        }
        axisObj._lastValue = currentValue;
        axisObj._altGrid = !altGrid;
      }
    },
    addXaxisCat: function addXaxisCat(axisObj, value, index, label, data, catObj, chartObj, dataColor) {
      var axisPosition = axisObj.opposite ? this.xOppPos : this.xPos,
          textAttrs = TEXTPOSITION[axisPosition],
          gridLine = {
        isGrid: true,
        isDataLabel: true,
        width: 0.1,
        color: COLOR_TRANSPARENT,
        value: value,
        label: {
          text: label,
          link: pluck(data.labellink, catObj.link, chartObj.labellink),
          style: parsexAxisStyles(data, catObj, chartObj, axisObj.labels.style, dataColor),
          textAlign: textAttrs.textAlign,
          align: textAttrs.align,
          verticalAlign: textAttrs.verticalAlign,
          rotation: 0,
          x: 0,
          y: 0
        }
      };

      if (index % this.labelStep !== 0) {
        gridLine.stepped = true;
        gridLine.label.style = axisObj.steppedLabels.style;
      }
      axisObj.plotLines.push(gridLine);
    },
    addVline: function addVline(axisObj, dataObj, index, hcObj) {
      // Extract attributes
      var conf = hcObj[FC_CONFIG_STRING],
          isBar = conf.isBar,
          divlineStyle = conf.divlineStyle,
          label = parseUnsafeString(dataObj.label),
          showLabelBorder = Boolean(pluckNumber(dataObj.showlabelborder, conf.showVLineLabelBorder, 1)),
          showLabelBackground = Boolean(pluckNumber(dataObj.showlabelbackground, 1)),
          labelHAlign = pluck(dataObj.labelhalign, isBar ? POSITION_LEFT : POSITION_CENTER),
          labelVAlign = pluck(dataObj.labelvalign, isBar ? POSITION_MIDDLE : POSITION_BOTTOM).toLowerCase(),

      // TODO: Need to calculate in px, to set y
      labelPosition = pluckNumber(dataObj.labelposition, 0),
          linePosition = pluckNumber(dataObj.lineposition, 0.5),
          showVLines = pluckNumber(dataObj.showvlines, conf.showVLines, 1),
          alpha = pluckNumber(dataObj.alpha, conf.vLineAlpha, 80),
          color = pluck(dataObj.color, conf.vLineColor).replace(/^#?/, '#'),
          bgColor = showLabelBackground ? pluck(dataObj.labelbgcolor, conf.vLineLabelBgColor, '333333').replace(/^#?/, '#') : BLANK,
          labelColor = pluck(dataObj.labelcolor, conf.vLineLabelColor, dataObj.color, conf.vLineColor).replace(/^#?/, '#'),
          thickness = pluckNumber(dataObj.thickness, conf.vLineThickness, 1),
          halfThickness = thickness * 0.5,
          isDashed = Boolean(Number(pluck(dataObj.dashed, 0))),
          dashLen = pluckNumber(dataObj.dashlen, 5),
          dashGap = pluckNumber(dataObj.dashgap, 2),
          smartLabel = conf.smartLabel,
          fontSizeInt = parseInt(divlineStyle.fontSize, 10),
          y = fontSizeInt + 2,
          x = 0,
          smartText,
          labelRotation = pluckNumber(dataObj.rotatelabel, conf.rotateVLineLabels) ? 270 : 0;

      linePosition = linePosition < 0 || linePosition > 1 ? 0.5 : linePosition;
      labelPosition = labelPosition < 0 || labelPosition > 1 ? 0 : labelPosition;
      smartLabel.setStyle(divlineStyle);
      smartText = smartLabel.getOriSize(label);

      color = convertColor(color, showVLines ? alpha : '0');

      if (!isBar) {
        switch (labelVAlign) {
          case POSITION_TOP:
            y = -smartText.height * 0.5 + 1;
            // TODO retain this line for future reference
            // y -= smartText.height + 2 + (plotBorderWidth || 1) *
            //     (1 - labelPosition) + labelPosition;
            break;
          case POSITION_MIDDLE:
            y = 0;
            // TODO retain this line for future reference
            // y -= (smartText.height * 0.5) + plotBorderWidth * (1 - labelPosition * 2);
            break;
          default:
            y = smartText.height * 0.5;
          // TODO retain this line for future reference
          // y += (plotBorderWidth - pbwMod2) * labelPosition;
        }
        switch (labelHAlign) {
          case POSITION_LEFT:
            x += thickness;
            break;
          case POSITION_RIGHT:
            x -= thickness + 1;
            break;
        }
      } else {
        switch (labelVAlign) {
          case POSITION_TOP:
            y -= smartText.height + halfThickness + 2;
            break;
          case POSITION_MIDDLE:
            y -= smartText.height * 0.5 + 1;
            break;
          default:
            y += halfThickness;
        }

        if (!dataObj.labelhalign) {
          x -= smartText.width * labelPosition;
        }
      }

      axisObj.plotLines.push({
        isVline: true,
        color: color,
        width: thickness,
        value: index - 1 + linePosition,
        zIndex: pluckNumber(dataObj.showontop, conf.showVLinesOnTop) ? 5 : 3, // extra for js charts
        dashStyle: isDashed ? getDashStyle(dashLen, dashGap) : DASH_DEF,
        label: {
          text: label,
          align: isBar ? POSITION_LEFT : POSITION_CENTER,
          offsetScale: labelPosition,
          rotation: labelRotation,
          y: y,
          x: x,
          textAlign: labelHAlign,
          backgroundColor: bgColor,
          borderWidth: showVLines && showLabelBorder ? 1 : 0,
          borderType: showVLines && showLabelBorder ? 'solid' : BLANK,
          borderColor: showVLines && showLabelBorder ? labelColor : BLANK,
          backgroundOpacity: showVLines && showLabelBackground ? pluck(dataObj.labelbgalpha, conf.vLineLabelBgAlpha) / 100 : 0,
          style: {
            color: showVLines ? labelColor : color,
            fontSize: divlineStyle.fontSize,
            fontFamily: divlineStyle.fontFamily,
            lineHeight: divlineStyle.lineHeight,
            backgroundColor: bgColor
          }
        }
      });
    }
  };
  labelAdder.prototype.constructor = labelAdder;
  return labelAdder;
}(),


/*
 * parser for tooltip macros
 *
 */
parseTooltext = function () {
  var macroList = [{ // 0- cleanValue
    regex: /((^|[^\\])((\\)\\)*\$cleanvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cleanvalue))/ig,
    argIndex: 2,
    argKey: 'cleanvalue'
  }, { // 1- dataValue
    regex: /((^|[^\\])((\\)\\)*\$datavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datavalue))/ig,
    argIndex: 2,
    argKey: 'formattedValue'
  }, { // 2- value
    regex: /((^|[^\\])((\\)\\)*\$value)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$value))/ig,
    argIndex: 3,
    argKey: 'value'
  }, { // 3- label
    regex: /((^|[^\\])((\\)\\)*\$label)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$label))/ig,
    argIndex: 2,
    argKey: 'label'
  }, { // 4- seriesName
    regex: /((^|[^\\])((\\)\\)*\$seriesname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$seriesname))/ig,
    argIndex: 5,
    argKey: 'seriesname'
  }, { // 5- yAxisName
    regex: /((^|[^\\])((\\)\\)*\$yaxisname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yaxisname))/ig,
    argIndex: 2,
    argKey: 'yaxisName'
  }, { // 6- xAxisName
    regex: /((^|[^\\])((\\)\\)*\$xaxisname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxisname))/ig,
    argIndex: 2,
    argKey: 'xaxisName'
  }, { // 7- displayValue
    regex: /((^|[^\\])((\\)\\)*\$displayvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$displayvalue))/ig,
    argIndex: 3,
    argKey: 'displayvalue'
  }, { // 8- xDataValue
    regex: /((^|[^\\])((\\)\\)*\$xdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xdatavalue))/ig,
    argIndex: 2,
    argKey: 'xDataValue'
  }, { // 9- yDataValue
    regex: /((^|[^\\])((\\)\\)*\$ydatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$ydatavalue))/ig,
    argIndex: 2,
    argKey: 'yDataValue'
  }, { // 10- xValue
    regex: /((^|[^\\])((\\)\\)*\$xvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xvalue))/ig,
    argIndex: 3,
    argKey: 'x'
  }, { // 11- yValue
    regex: /((^|[^\\])((\\)\\)*\$yvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$yvalue))/ig,
    argIndex: 3,
    argKey: 'y'
  }, { // 12- zValue
    regex: /((^|[^\\])((\\)\\)*\$zvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zvalue))/ig,
    argIndex: 3,
    argKey: 'z'
  }, { // 13- name
    regex: /((^|[^\\])((\\)\\)*\$name)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$name))/ig,
    argIndex: 3,
    argKey: 'name'
  }, { // 14- percentValue
    regex: /((^|[^\\])((\\)\\)*\$percentValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentValue))/ig,
    argIndex: 2,
    argKey: 'percentValue'
  }, { // 15- startValue
    regex: /((^|[^\\])((\\)\\)*\$startValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startValue))/ig,
    argIndex: 2,
    argKey: 'startValue'
  }, { // 16- startDataValue
    regex: /((^|[^\\])((\\)\\)*\$startDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$startDataValue))/ig,
    argIndex: 2,
    argKey: 'startDataValue'
  }, { // 17- endValue
    regex: /((^|[^\\])((\\)\\)*\$endValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endValue))/ig,
    argIndex: 2,
    argKey: 'endValue'
  }, { // 18- endDataValue
    regex: /((^|[^\\])((\\)\\)*\$endDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$endDataValue))/ig,
    argIndex: 2,
    argKey: 'endDataValue'
  }, { // 19- axisName
    regex: /((^|[^\\])((\\)\\)*\$axisName)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$axisName))/ig,
    argIndex: 2,
    argKey: 'axisName'
  }, { // 20- cumulativeValue
    regex: /((^|[^\\])((\\)\\)*\$cumulativevalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativevalue))/ig,
    argIndex: 2,
    argKey: 'cumulativeValue'
  }, { // 21- cumulativeDataValue
    regex: /((^|[^\\])((\\)\\)*\$cumulativedatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativedatavalue))/ig,
    argIndex: 2,
    argKey: 'cumulativeDataValue'
  }, { // 22- cumulativePercentValue
    regex: /((^|[^\\])((\\)\\)*\$cumulativePercentValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativePercentValue))/ig,
    argIndex: 2,
    argKey: 'cumulativePercentValue'
  }, { // 23- cumulativePercentDataValue
    regex: /((^|[^\\])((\\)\\)*\$cumulativepercentdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$cumulativepercentdatavalue))/ig,
    argIndex: 2,
    argKey: 'cumulativePercentDataValue'
  }, { // 24- sum
    regex: /((^|[^\\])((\\)\\)*\$sum)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sum))/ig,
    argIndex: 2,
    argKey: 'sum'
  }, { // 25- unformattedSum
    regex: /((^|[^\\])((\\)\\)*\$unformattedsum)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsum))/ig,
    argIndex: 2,
    argKey: 'unformattedSum'
  },
  // widgets
  { // 26- targetValue
    regex: /((^|[^\\])((\\)\\)*\$targetvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetvalue))/ig,
    argIndex: 2,
    argKey: 'targetValue'
  }, { // 27- targetDataValue
    regex: /((^|[^\\])((\\)\\)*\$targetdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$targetdatavalue))/ig,
    argIndex: 2,
    argKey: 'targetDataValue'
  }, { // 28- processName
    regex: /((^|[^\\])((\\)\\)*\$processname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$processname))/ig,
    argIndex: 2,
    argKey: 'processName'
  }, { // 29- start
    regex: /((^|[^\\])((\\)\\)*\$start)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$start))/ig,
    argIndex: 2,
    argKey: 'start'
  }, { // 30- end
    regex: /((^|[^\\])((\\)\\)*\$end)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$end))/ig,
    argIndex: 2,
    argKey: 'end'
  }, { // 31- percentComplete
    regex: /((^|[^\\])((\\)\\)*\$percentcomplete)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentcomplete))/ig,
    argIndex: 2,
    argKey: 'percentComplete'
  }, { // 32- taskPercentComplete
    regex: /((^|[^\\])((\\)\\)*\$taskpercentcomplete)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskpercentcomplete))/ig,
    argIndex: 2,
    argKey: 'taskPercentComplete'
  }, { // 33- taskStartDate
    regex: /((^|[^\\])((\\)\\)*\$taskstartdate)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskstartdate))/ig,
    argIndex: 2,
    argKey: 'taskStartDate'
  }, { // 34- taskEndDate
    regex: /((^|[^\\])((\\)\\)*\$taskenddate)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$taskenddate))/ig,
    argIndex: 2,
    argKey: 'taskEndDate'
  }, { // 35- taskLabel
    regex: /((^|[^\\])((\\)\\)*\$tasklabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tasklabel))/ig,
    argIndex: 2,
    argKey: 'taskLabel'
  }, { // 36- date
    regex: /((^|[^\\])((\\)\\)*\$date)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$date))/ig,
    argIndex: 2,
    argKey: 'date'
  }, { // 37- percentOfPrevValue
    regex: /((^|[^\\])((\\)\\)*\$percentofprevvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentofprevvalue))/ig,
    argIndex: 2,
    argKey: 'percentOfPrevValue'
  },
  // maps
  { // 38- sName
    regex: /((^|[^\\])((\\)\\)*\$sname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$sname))/ig,
    argIndex: 2,
    argKey: 'sName'
  }, { // 39- lName
    regex: /((^|[^\\])((\\)\\)*\$lname)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lname))/ig,
    argIndex: 2,
    argKey: 'lName'
  }, { // 40- fromId
    regex: /((^|[^\\])((\\)\\)*\$fromid)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromid))/ig,
    argIndex: 2,
    argKey: 'fromId'
  }, { // 41- fromLabel
    regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
    argIndex: 2,
    argKey: 'fromLabel'
  }, { // 42- toId
    regex: /((^|[^\\])((\\)\\)*\$toid)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toid))/ig,
    argIndex: 2,
    argKey: 'toId'
  }, { // 43- toLabel
    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
    argIndex: 2,
    argKey: 'toLabel'
  },
  // Power Charts
  { // 44- fromXValue
    regex: /((^|[^\\])((\\)\\)*\$fromxvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxvalue))/ig,
    argIndex: 2,
    argKey: 'fromXValue'
  }, { // 45- fromYValue
    regex: /((^|[^\\])((\\)\\)*\$fromyvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromyvalue))/ig,
    argIndex: 2,
    argKey: 'fromYValue'
  }, { // 46- fromXDataValue
    regex: /((^|[^\\])((\\)\\)*\$fromxdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromxdatavalue))/ig,
    argIndex: 2,
    argKey: 'fromXDataValue'
  }, { // 47- fromYDataValue
    regex: /((^|[^\\])((\\)\\)*\$fromydatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromydatavalue))/ig,
    argIndex: 2,
    argKey: 'fromYDataValue'
  }, { // 48- fromLabel
    regex: /((^|[^\\])((\\)\\)*\$fromlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromlabel))/ig,
    argIndex: 2,
    argKey: 'fromLabel'
  }, { // 49- toXValue
    regex: /((^|[^\\])((\\)\\)*\$toxvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxvalue))/ig,
    argIndex: 2,
    argKey: 'toXValue'
  }, { // 50- toYValue
    regex: /((^|[^\\])((\\)\\)*\$toyvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toyvalue))/ig,
    argIndex: 2,
    argKey: 'toYValue'
  }, { // 51- toXDataValue
    regex: /((^|[^\\])((\\)\\)*\$toxdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toxdatavalue))/ig,
    argIndex: 2,
    argKey: 'toXDataValue'
  }, { // 52- toYDataValue
    regex: /((^|[^\\])((\\)\\)*\$toydatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toydatavalue))/ig,
    argIndex: 2,
    argKey: 'toYDataValue'
  }, { // 53- toLabel
    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
    argIndex: 2,
    argKey: 'toLabel'
  },
  // Spark Charts
  { // 54- openValue
    regex: /((^|[^\\])((\\)\\)*\$openvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$openvalue))/ig,
    argIndex: 2,
    argKey: 'openValue'
  }, { // 55- closeValue
    regex: /((^|[^\\])((\\)\\)*\$closevalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closevalue))/ig,
    argIndex: 2,
    argKey: 'closeValue'
  }, { // 56- highValue
    regex: /((^|[^\\])((\\)\\)*\$highvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highvalue))/ig,
    argIndex: 2,
    argKey: 'highValue'
  }, { // 57- lowValue
    regex: /((^|[^\\])((\\)\\)*\$lowvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowvalue))/ig,
    argIndex: 2,
    argKey: 'lowValue'
  }, { // 58- openDataValue
    regex: /((^|[^\\])((\\)\\)*\$opendatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$opendatavalue))/ig,
    argIndex: 2,
    argKey: 'openDataValue'
  }, { // 59- closeDataValue
    regex: /((^|[^\\])((\\)\\)*\$closedatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$closedatavalue))/ig,
    argIndex: 2,
    argKey: 'closeDataValue'
  }, { // 60- highDataValue
    regex: /((^|[^\\])((\\)\\)*\$highdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$highdatavalue))/ig,
    argIndex: 2,
    argKey: 'highDataValue'
  }, { // 61- lowDataValue
    regex: /((^|[^\\])((\\)\\)*\$lowdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$lowdatavalue))/ig,
    argIndex: 2,
    argKey: 'lowDataValue'
  }, { // 62 - maxValue
    regex: /((^|[^\\])((\\)\\)*\$maxvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxvalue))/ig,
    argIndex: 2,
    argKey: 'maxValue'
  }, { // 63 - maxDataValue
    regex: /((^|[^\\])((\\)\\)*\$maxdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$maxdatavalue))/ig,
    argIndex: 2,
    argKey: 'maxDataValue'
  }, { // 64 - minValue
    regex: /((^|[^\\])((\\)\\)*\$minvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$minvalue))/ig,
    argIndex: 2,
    argKey: 'minValue'
  }, { // 65 - minDataValue
    regex: /((^|[^\\])((\\)\\)*\$mindatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mindatavalue))/ig,
    argIndex: 2,
    argKey: 'minDataValue'
  }, { // 66 - Q1
    regex: /((^|[^\\])((\\)\\)*\$q1)/ig,
    argIndex: 2,
    argKey: 'Q1'
  }, { // 67 - unformattedQ1
    regex: /((^|[^\\])((\\)\\)*\$unformattedQ1)/ig,
    argIndex: 2,
    argKey: 'unformattedQ1'
  }, { // 68 - Q3
    regex: /((^|[^\\])((\\)\\)*\$q3)/ig,
    argIndex: 2,
    argKey: 'Q3'
  }, { // 69 - unformattedQ3
    regex: /((^|[^\\])((\\)\\)*\$unformattedQ3)/ig,
    argIndex: 2,
    argKey: 'unformattedQ3'
  }, { // 70 - median
    regex: /((^|[^\\])((\\)\\)*\$median)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$median))/ig,
    argIndex: 2,
    argKey: 'median'
  }, { // 71 - unformattedMedian
    regex: /((^|[^\\])((\\)\\)*\$unformattedMedian)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMedian))/ig,
    argIndex: 2,
    argKey: 'unformattedMedian'
  }, { // 72 - SD
    regex: /((^|[^\\])((\\)\\)*\$SD)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$SD))/ig,
    argIndex: 2,
    argKey: 'SD'
  }, { // 73 - unformattedSD
    regex: /((^|[^\\])((\\)\\)*\$unformattedsd)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedsd))/ig,
    argIndex: 2,
    argKey: 'unformattedsd'
  }, { // 74 - QD
    regex: /((^|[^\\])((\\)\\)*\$QD)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$QD))/ig,
    argIndex: 2,
    argKey: 'QD'
  }, { // 75 - unformattedQD
    regex: /((^|[^\\])((\\)\\)*\$unformattedQD)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedQD))/ig,
    argIndex: 2,
    argKey: 'unformattedQD'
  }, { // 76 - MD
    regex: /((^|[^\\])((\\)\\)*\$MD)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$MD))/ig,
    argIndex: 2,
    argKey: 'MD'
  }, { // 77 - unformattedMD
    regex: /((^|[^\\])((\\)\\)*\$unformattedMD)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMD))/ig,
    argIndex: 2,
    argKey: 'unformattedMD'
  }, { // 78 - mean
    regex: /((^|[^\\])((\\)\\)*\$mean)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$mean))/ig,
    argIndex: 2,
    argKey: 'mean'
  }, { // 79 - unformattedMean
    regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
    argIndex: 2,
    argKey: 'unformattedMean'
  }, { // 80 - unformattedMean
    regex: /((^|[^\\])((\\)\\)*\$unformattedMean)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$unformattedMean))/ig,
    argIndex: 2,
    argKey: 'unformattedMean'
  }, { // 81 - volumeValue
    regex: /((^|[^\\])((\\)\\)*\$volumeValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeValue))/ig,
    argIndex: 2,
    argKey: 'volumeValue'
  }, { // 82 - volumeDataValue
    regex: /((^|[^\\])((\\)\\)*\$volumeDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$volumeDataValue))/ig,
    argIndex: 2,
    argKey: 'volumeDataValue'
  }, { // 83 - fromXValue
    regex: /((^|[^\\])((\\)\\)*\$fromXValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXValue))/ig,
    argIndex: 2,
    argKey: 'fromXValue'
  }, { // 84 - fromYValue
    regex: /((^|[^\\])((\\)\\)*\$fromYValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYValue))/ig,
    argIndex: 2,
    argKey: 'fromYValue'
  }, { // 85 - fromXDataValue
    regex: /((^|[^\\])((\\)\\)*\$fromXDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromXDataValue))/ig,
    argIndex: 2,
    argKey: 'fromXDataValue'
  }, { // 86 - fromYDataValue
    regex: /((^|[^\\])((\\)\\)*\$fromYDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromYDataValue))/ig,
    argIndex: 2,
    argKey: 'fromYDataValue'
  }, { // 87 - fromLabel
    regex: /((^|[^\\])((\\)\\)*\$fromLabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$fromLabel))/ig,
    argIndex: 2,
    argKey: 'fromLabel'
  }, { // 88 - toXValue
    regex: /((^|[^\\])((\\)\\)*\$toXValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXValue))/ig,
    argIndex: 2,
    argKey: 'toXValue'
  }, { // 89 - toYValue
    regex: /((^|[^\\])((\\)\\)*\$toYValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYValue))/ig,
    argIndex: 2,
    argKey: 'toYValue'
  }, { // 90 - toXDataValue
    regex: /((^|[^\\])((\\)\\)*\$toXDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toXDataValue))/ig,
    argIndex: 2,
    argKey: 'toXDataValue'
  }, { // 91 - toYDataValue
    regex: /((^|[^\\])((\\)\\)*\$toYDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$toYDataValue))/ig,
    argIndex: 2,
    argKey: 'toYDataValue'
  }, { // 92 - toLabel
    regex: /((^|[^\\])((\\)\\)*\$tolabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tolabel))/ig,
    argIndex: 2,
    argKey: 'toLabel'
  }, { // 93 - tlLabel
    regex: /((^|[^\\])((\\)\\)*\$tlLabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlLabel))/ig,
    argIndex: 5,
    argKey: 'tlLabel'
  }, { // 94 - trLabel
    regex: /((^|[^\\])((\\)\\)*\$trlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trlabel))/ig,
    argIndex: 5,
    argKey: 'trLabel'
  }, { // 95 - blLabel
    regex: /((^|[^\\])((\\)\\)*\$bllabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$bllabel))/ig,
    argIndex: 5,
    argKey: 'blLabel'
  }, { // 96 - brLabel
    regex: /((^|[^\\])((\\)\\)*\$brlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brlabel))/ig,
    argIndex: 5,
    argKey: 'brLabel'
  }, { // 97 - rowLabel
    regex: /((^|[^\\])((\\)\\)*\$rowlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$rowlabel))/ig,
    argIndex: 5,
    argKey: 'rowLabel'
  }, { // 98 - columnLabel
    regex: /((^|[^\\])((\\)\\)*\$columnlabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$columnlabel))/ig,
    argIndex: 5,
    argKey: 'columnLabel'
  }, { // 99 - errorValue
    regex: /((^|[^\\])((\\)\\)*\$errorvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorvalue))/ig,
    argIndex: 2,
    argKey: 'errorValue'
  }, { // 100 - errorDataValue
    regex: /((^|[^\\])((\\)\\)*\$errordatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errordatavalue))/ig,
    argIndex: 2,
    argKey: 'errorDataValue'
  }, { // 101 - errorPercentValue
    regex: /((^|[^\\])((\\)\\)*\$errorpercentvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentvalue))/ig,
    argIndex: 2,
    argKey: 'errorPercentValue'
  }, { // 102 - errorPercentDataValue
    regex: /((^|[^\\])((\\)\\)*\$errorpercentdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$errorpercentdatavalue))/ig,
    argIndex: 2,
    argKey: 'errorPercentDataValue'
  }, { // 103 - horizontalErrorValue
    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorValue))/ig,
    argIndex: 2,
    argKey: 'horizontalErrorValue'
  }, { // 104 - horizontalErrorDataValue
    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorDataValue))/ig,
    argIndex: 2,
    argKey: 'horizontalErrorDataValue'
  }, { // 105 - verticalErrorValue
    regex: /((^|[^\\])((\\)\\)*\$verticalErrorValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorValue))/ig,
    argIndex: 2,
    argKey: 'verticalErrorValue'
  }, { // 106 - verticalErrorDataValue
    regex: /((^|[^\\])((\\)\\)*\$verticalErrorDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorDataValue))/ig,
    argIndex: 2,
    argKey: 'verticalErrorDataValue'
  }, { // 107 - horizontalErrorPercent
    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercent)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentValue))/ig,
    argIndex: 2,
    argKey: 'horizontalErrorPercentValue'
  }, { // 108 - horizontalErrorPercentDataValue
    regex: /((^|[^\\])((\\)\\)*\$horizontalErrorPercentDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$horizontalErrorPercentDataValue))/ig,
    argIndex: 2,
    argKey: 'horizontalErrorPercentDataValue'
  }, { // 109 - verticalErrorPercent
    regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercent)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentValue))/ig,
    argIndex: 2,
    argKey: 'verticalErrorPercentValue'
  }, { // 110 - verticalErrorPercentDataValue
    regex: /((^|[^\\])((\\)\\)*\$verticalErrorPercentDataValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$verticalErrorPercentDataValue))/ig,
    argIndex: 2,
    argKey: 'verticalErrorPercentDataValue'
  },
  // Mactros that are added later
  { // 111- xAxisPercentValue
    regex: /((^|[^\\])((\\)\\)*\$xaxispercentvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$xaxispercentvalue))/ig,
    argIndex: 2,
    argKey: 'xAxisPercentValue'
  }, { // 112- percentDataValue
    regex: /((^|[^\\])((\\)\\)*\$percentdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$percentdatavalue))/ig,
    argIndex: 2,
    argKey: 'percentDataValue'
  }, { // 113- trType
    regex: /((^|[^\\])((\\)\\)*\$trType)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$trType))/ig,
    argIndex: 4,
    argKey: 'trtype'
  }, { // 114- tlType
    regex: /((^|[^\\])((\\)\\)*\$tlType)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$tlType))/ig,
    argIndex: 4,
    argKey: 'tltype'
  }, { // 115- brType
    regex: /((^|[^\\])((\\)\\)*\$brType)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$brType))/ig,
    argIndex: 4,
    argKey: 'brtype'
  }, { // 116- blType
    regex: /((^|[^\\])((\\)\\)*\$blType)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$blType))/ig,
    argIndex: 4,
    argKey: 'bltype'
  }, { // 117- colorRangeLabel
    regex: /((^|[^\\])((\\)\\)*\$colorRangeLabel)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$colorRangeLabel))/ig,
    argIndex: 5,
    argKey: 'colorRangeLabel'
  }, { // 118- zDataValue
    regex: /((^|[^\\])((\\)\\)*\$zdatavalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$zdatavalue))/ig,
    argIndex: 2,
    argKey: 'zDataValue'
  }, { // 119- sValue
    regex: /((^|[^\\])((\\)\\)*\$svalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$svalue))/ig,
    argIndex: 3,
    argKey: 'svalue'
  }, { // 120- positiveErrorValue
    regex: /((^|[^\\])((\\)\\)*\$positiveErrorValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$positiveErrorValue))/ig,
    argIndex: 2,
    argKey: 'positiveErrorValue'
  }, { // 121- negativeErrorValue
    regex: /((^|[^\\])((\\)\\)*\$negativeErrorValue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$negativeErrorValue))/ig,
    argIndex: 2,
    argKey: 'negativeErrorValue'
  }, { // 122- datasValue
    regex: /((^|[^\\])((\\)\\)*\$datasvalue)/ig,
    escapeRegex: /((^|[^\\])((\\)\\)*\\(\$datasvalue))/ig,
    argIndex: 2,
    argKey: 'formattedsValue'
  }],
      defAllMacroIndices = [],
      replaceConstant = '$2$4',
      escapeReplaceStr = '$2$4$5',
      i,
      l = macroList.length;

  // preaper defApplyAllArr
  for (i = 0; i < l; i += 1) {
    defAllMacroIndices.push(i);
  }

  return function () {
    var returnText = arguments[0],
        ApplicableMacroIndices = arguments[1],
        replaceStr,
        argObj,
        macroObj,
        i,
        l;
    if (!isArray(ApplicableMacroIndices)) {
      ApplicableMacroIndices = defAllMacroIndices;
    }
    if (returnText) {
      l = ApplicableMacroIndices.length;
      for (i = 0; i < l; i += 1) {
        macroObj = macroList[ApplicableMacroIndices[i]];
        if (macroObj) {
          replaceStr = regReplaceEscape(getValidValue((argObj = arguments[macroObj.argIndex]) && argObj[macroObj.argKey], BLANK) + BLANK);
          returnText = returnText.replace(macroObj.regex, replaceConstant + (macroObj.parsingMethod ? macroObj.parsingMethod(replaceStr) : replaceStr));
          returnText = returnText.replace(macroObj.escapeRegex, escapeReplaceStr);
        }
      }
    }
    return returnText;
  };
}(),


// /////// *********Linear Axis Min Max module****** ////////////
getAxisLimits = function () {
  var getDivisibleRange, numDecimals, isRangeDivisible;
  getDivisibleRange = function getDivisibleRange(yMin, yMax, numDivLines, interval, interceptRange) {
    // Get the range division for current yMin, yMax and numDivLines
    var range = Math.abs(yMax - yMin),
        rangeDiv = range / (numDivLines + 1),
        checkLimit;
    // Now, the range is not divisible
    if (!isRangeDivisible(range, numDivLines, interval)) {
      // We need to get new rangeDiv which can be equally distributed.
      // If intercept range is set to true
      if (interceptRange) {
        // Re-adjust interval so that gap is not much (conditional)
        // Condition check limit based on value
        checkLimit = interval > 1 ? 2 : 0.5;
        if (Number(rangeDiv) / Number(interval) < checkLimit) {
          // Decrease power of ten to get closer rounding
          interval = interval / 10;
        }
      }
      // Adjust range division based on new interval
      rangeDiv = (Math.floor(rangeDiv / interval) + 1) * interval;
      // Get new range
      range = rangeDiv * (numDivLines + 1);
    }
    // Return range
    return range;
  };

  /**
     * numDecimals method returns the number of decimal places provided
     * in the given number.
     * @param num Number for which we've to find the decimal places.
     * @return Number of decimal places found.
     */
  numDecimals = function numDecimals(num) {
    // Absolute value (to avoid floor disparity for negative num)
    num = Math.abs(num);
    // Convert to string and find the position of dot.
    var strNum = String(num),
        decimals = 0,
        dotPos = strNum.indexOf(DECIMALSTRING);
    // See if the number has decimal at all
    if (dotPos != -1) {
      // Find the position of decimal.
      decimals = strNum.length - dotPos - 1;
    }
    // Return the number of decimal digits
    return decimals;
  };
  /**
     * isRangeDivisible method helps us judge whether the given range is
     * perfectly divisible for specified y-interval, numDivLines, yMin and yMax.
     * To check that, we divide the given range into (numDivLines+1) section.
     * If the decimal places of this division value is <= that of interval,
     * that means, this range fits in our purpose. We return a boolean value
     * accordingly.
     * @param range  Range of y-axis (Max - Min). Absolute value
     * @param numDivLines Number of div lines to be plotted.
     * @param interval Y-axis Interval (power of ten).
     * @return   Boolean value indicating whether this range is divisible
     *      by the given number of div lines.
     */
  isRangeDivisible = function isRangeDivisible(range, numDivLines, interval) {
    // Get range division
    var rangeDiv = range / (numDivLines + 1);
    // Now, if the decimal places of rangeDiv and interval do not match,
    // it's not divisible, else it's divisible
    if (numDecimals(rangeDiv) > numDecimals(interval)) {
      return false;
    } else {
      return true;
    }
  };

  /**
     * getAxisLimits method helps calculate the axis limits based
     * on the given maximum and minimum value.
     * @param maxValue  Maximum numerical value present in data
     * @param minValue  Minimum numerical value present in data
     * @param stopMaxAtZero Flag indicating whether maximum value can
     *       be less than 0.
     * @param setMinAsZero Whether to set the lower limit as 0 or a greater
     * appropriate value (when dealing with positive numbers)
     */

  return function (maxValue, minValue, yAxisMaxValue, yAxisMinValue, stopMaxAtZero, setMinAsZero, numDivLines, adjustDiv) {
    // write the variable which are added as an param in as object
    var yMaxGiven,
        yMinGiven,
        yMax,
        yMin,
        range,
        interval,
        maxPowerOfTen,
        minPowerOfTen,
        powerOfTen,
        yInterval,
        rangePowerOfTen,
        rangeInterval,
        yTopBound,
        yLowerBound,
        deltaRange,
        found,
        adjInterval,
        rangeD,
        nextRange,
        rangeDiv,
        mf,
        smallArm,
        extSmallArm,
        i,
        adjRange,
        divLines,

    // bigArm,
    divInterval,
        extBigArm,
        addToRange = 0,
        evalNumDivlines;
    // First check if both maxValue and minValue are proper numbers.
    // Else, set defaults as 90,0
    maxValue = isNaN(maxValue) === true || maxValue === UNDEF ? 0.1 : maxValue;
    minValue = isNaN(minValue) === true || minValue === UNDEF ? 0 : minValue;
    // Or, if only 0 data is supplied
    if (maxValue === minValue && maxValue === 0) {
      maxValue = 0.1;
    }
    // Defaults for stopMaxAtZero and setMinAsZero
    stopMaxAtZero = typeof stopMaxAtZero === 'undefined' ? true : stopMaxAtZero;
    setMinAsZero = typeof setMinAsZero === 'undefined' ? true : setMinAsZero;
    // Get the maximum power of 10 that is applicable to maxvalue
    // The Number = 10 to the power maxPowerOfTen + x (where x is another number)
    // For e.g., in 99 the maxPowerOfTen will be 1 = 10^1 + 89
    // And for 102, it will be 2 = 10^2 + 2
    maxPowerOfTen = Math.floor(Math.log(Math.abs(maxValue)) / Math.LN10);
    // Get the minimum power of 10 that is applicable to maxvalue
    minPowerOfTen = Math.floor(Math.log(Math.abs(minValue)) / Math.LN10);
    // Find which powerOfTen (the max power or the min power) is bigger
    // It is this which will be multiplied to get the y-interval
    powerOfTen = Math.max(minPowerOfTen, maxPowerOfTen);
    yInterval = Math.pow(10, powerOfTen);
    // For accomodating smaller range values (so that scale doesn't represent too large an interval
    if (Math.abs(maxValue) / yInterval < 2 && Math.abs(minValue) / yInterval < 2) {
      powerOfTen--;
      yInterval = Math.pow(10, powerOfTen);
    }
    // If the y_interval of min and max is way more than that of range.
    // We need to reset the y-interval as per range
    rangePowerOfTen = Math.floor(Math.log(maxValue - minValue) / Math.LN10);
    rangeInterval = Math.pow(10, rangePowerOfTen);
    // Now, if rangeInterval is 10 times less than y_interval, we need to re-set
    // the limits, as the range is too less to adjust the axis for max,min.
    // We do this only if range is greater than 0 (in case of 1 data on chart).
    if (maxValue - minValue > 0 && yInterval / rangeInterval >= 10) {
      yInterval = rangeInterval;
      powerOfTen = rangePowerOfTen;
    }
    // Calculate the y-axis upper limit
    yTopBound = (Math.floor(maxValue / yInterval) + 1) * yInterval;
    // Calculate the y-axis lower limit
    // yLowerBound;
    // Delta in range
    // deltaRange;
    // If the min value is less than 0
    if (minValue < 0) {
      // Then calculate by multiplying negative numbers with y-axis interval
      yLowerBound = -1 * ((Math.floor(Math.abs(minValue / yInterval)) + 1) * yInterval);
    } else {
      // Else, simply set it to 0.
      if (setMinAsZero) {
        yLowerBound = 0;
      } else {
        yLowerBound = Math.floor(Math.abs(minValue / yInterval) - 1) * yInterval;
        // Now, if minValue>=0, we keep x_lowerBound to 0 - as for values like minValue 2
        // lower bound goes negative, which is not required.
        yLowerBound = yLowerBound < 0 ? 0 : yLowerBound;
      }
    }
    // MaxValue cannot be less than 0 if stopMaxAtZero is set to true
    if (stopMaxAtZero && maxValue <= 0) {
      yTopBound = 0;
    }
    // Now, we need to make a check as to whether the user has provided an upper limit
    // and lower limit.
    // Code before JSlint: if (yAxisMaxValue == null || yAxisMaxValue == UNDEF || yAxisMaxValue == BLANK)
    if (!yAxisMaxValue && yAxisMaxValue !== 0) {
      yMaxGiven = false;
    } else {
      yMaxGiven = true;
    }
    if (!yAxisMinValue && yAxisMinValue !== 0) {
      yMinGiven = false;
    } else {
      yMinGiven = true;
    }
    // If he has provided it and it is valid, we leave it as the upper limit
    // Else, we enforced the value calculate by us as the upper limit.
    if (yMaxGiven === false || yMaxGiven === true && Number(yAxisMaxValue) < maxValue && maxValue - Number(yAxisMaxValue) > EPSILON) {
      yMax = yTopBound;
    } else {
      yMax = Number(yAxisMaxValue);
    }
    // Now, we do the same for y-axis lower limit
    if (yMinGiven === false || yMinGiven === true && Number(yAxisMinValue) > minValue && Number(yAxisMinValue) - minValue > EPSILON) {
      yMin = yLowerBound;
    } else {
      yMin = Number(yAxisMinValue);
    }
    // Store axis range
    range = Math.abs(yMax - yMin);
    // Store interval
    interval = yInterval;
    // }

    /**
     * There can be four cases of yMin, yMax.
     * 1. User doesn't specify either. (our program calculates it).
     * 2. User specifies both in XML. (which our program still validates)
     * 3. User specifies only yMin. (we provide missing data)
     * 4. User specifies only yMax. (we provide missing data)
     *
     * Apart from this, the user can specify numDivLines (which if not specified takes a
     * default value of 4). Also, the user can specify adjustDiv (which can be 1 or 0).
     * adjustDiv works in all four cases (1,2,3,4).
     * Case 1 is modified to occur as under now: User doesn't specify either yMin or yMax
     * and adjustDiv is set to true (by default). If the user doesn't specify either yMin or
     * yMax, but adjustDiv is set to false, it doesn't appear as Case 1. However, if adjustDiv
     * is set to true and yMin,yMax is automatically calculated by FusionCharts, we adjust the
     * calculated yMin,yMax so that the given number of div lines can be well adjusted within.
     *
     * In case 2,3,4, we adjust numDivLines so that they space up equally based on the interval
     * and decimals required.
     *
     * So, the difference between Case 1 and Case 2,3,4 is that in Case 1, we adjust limits
     * to accomodate specified number of div lines. In Case 2,3,4, we adjust numDivLines to
     * accomodate within the given limits (y-axis range).
     *
     * numDivLines is always our primary focus when calculating them in all cases. In Case 1,
     * it's kept constant as center of calculation. In Case 2, it's modified to get a best
     * value.
     *
     * Now, for case 1, we can have three sub cases:
     * 1.1. yMax, yMin >=0
     * 1.2. yMin, yMax <=0
     * 1.3. yMax > 0 and yMin <0.
     * Case 1.1 and 1.2 are simple, as we just need to adjust the range between two positive
     * or two negative numbers such that the range can be equally divided into (numDivLines+1)
     * division.
     * Case 1.3 is tricky, as here, we additionally need to make sure that 0 plane is included
     * as a division.
     * We use two different methods to solved Case 1.1,1.2 and Case 1.3.
     * Note that in all Cases (1.1, 1.2 & 1.3), we adjust the auto-calculated yMax and yMin
     * to get best div line value. We do NOT adjust numDivLines here.
     */
    // Check condition for case 1 first - limits not specified and adjustDiv is true
    if (yMinGiven === false && yMaxGiven === false && adjustDiv) {
      // Means neither chart max value nor min value has been specified and adjustDiv is true
      // Now, if it's case 1.3 (yMax > 0 & yMin <0)
      if (yMax > 0 && yMin < 0) {
        // Case 1.3
        /**
         * Here, in this case, we start by generating the best fit range
         * for the given yMin, yMax, numDivLines and interval. We generate
         * range by adding sequential increments (rangeDiv * (ND+1) * interval).
         * Interval has been adjusted to smaller interval for larger values.
         * Now, for each divisible range generated by the program, we adjust the
         * yMin and yMax to check if 0 can land as a division in between them on
         * a proper distance.
         * We divide the y-axis range into two parts - small arm and big arm.
         * Say y-axis range is from 1 to -5. So, small arm is 1 and big arm is -5.
         * Or, if its from 16 to -3, small arm is -3 and big arm is 16.
         * Now, we try and get a value for extended small arm, which is multiple
         * of rangeDiv. Say chart min,max is 16,-3. So range becomes 19.
         * Let's assume numDivLines to be 2. So for 2 numDivLines, we get closest
         * adjusted range value as 21. Delta range = 21 - 19 (original range) = 2
         * Also, range division value = 21 / (ND + 1) = 21 / 3 = 7
         * We now get values for extended small arm as i*range division, where i
         * runs from 1 to (numDivLines+1)/2. We go only halfway as it's the smaller
         * arm and so cannot extend to a division beyond half way - else it would have
         * been the bigger arm.
         * So, first extended small arm = -7 * 1 = -7.
         * We get the difference between extended small arm and original small arm.
         * In this case it's 7 - 3 = 4 (all absolute values now - to avoid sign disparities).
         * We see that delta arm > delta range. So, we ignore this range and get a new range.
         * So, next range comes as = prev Range (21) + (numDivLines + 1)*interval
         * = 21 + (2+1)*1 = 24
         * Since the increment is sequential as a multiplication factor of
         * (numDivLines + 1)*interval, it is also a valid divisible range.
         * So we again check whether 0 can appear as a division. In this case, we
         * get rangeDiv as 8 and extended smaller arm as 8. For this extended smaller
         * arm, we get bigger arm as 16. Both of these are divisible by rangeDiv. That
         * means, this range can include 0 as division line. So, we store it and proceed.
         */
        // Flag to indicate whether we've found the perfect range or not.
        found = false;
        // We re-calculate the interval to get smaller increments for large values.
        // For example, for 300 to -100 (with ND as 2), if we do not adjust interval, the min
        // max come as -200, 400. But with adjusted intervals, it comes as -150, 300, which is
        // more appropriate.
        adjInterval = interval > 10 ? interval / 10 : interval;
        // Get the first divisible range for the given yMin, yMax, numDivLines and interval.
        // We do not intercept and adjust interval for this calculation here.
        rangeD = getDivisibleRange(yMin, yMax, numDivLines, adjInterval, false);
        // Now, deduct delta range from nextRange initially, so that in while loop,
        // there's a unified statement for increment instead of 2 checks.
        nextRange = rangeD - (numDivLines + 1) * adjInterval;

        // Now, we need to search for a range which is divisible in (numDivLines+1)
        // segments including 0. Run a while loop till that is found.
        while (found === false) {
          // Get range
          nextRange = nextRange + (numDivLines + 1) * adjInterval;
          // If it's divisible for the given range and adjusted interval, proceed
          if (isRangeDivisible(nextRange, numDivLines, adjInterval)) {
            // Delta Range
            deltaRange = nextRange - range;
            // Range division
            rangeDiv = nextRange / (numDivLines + 1);
            // Get the smaller arm of axis
            smallArm = Math.min(Math.abs(yMin), yMax);
            // Bigger arm of axis.
            // bigArm = range - smallArm;
            // Get the multiplication factor (if smaller arm is negative, set -1);
            mf = smallArm == Math.abs(yMin) ? -1 : 1;
            // If num div lines ==0, we do not calculate anything
            if (numDivLines === 0) {
              // Set flag to true to exit loop
              found = true;
            } else {
              // Now, we need to make sure that the smaller arm of axis is a multiple
              // of rangeDiv and the multiplied result is greater than smallArm.
              for (i = 1; i <= Math.floor((numDivLines + 1) / 2); i++) {
                // Get extended small arm
                extSmallArm = rangeDiv * i;
                // If extension is more than original intended delta, we move to next
                // value of loop as this range is smaller than our intended range
                if (extSmallArm - smallArm > deltaRange) {
                  // Iterate to next loop value
                  continue;
                }
                // Else if extended arm is greater than smallArm, we do the 0 div test
                if (extSmallArm > smallArm) {
                  // Get extended big arm
                  extBigArm = nextRange - extSmallArm;
                  // Check whether for this range, 0 can come as a div
                  // By checking whether both extBigArm and extSmallArm
                  // are perfectly divisible by rangeDiv
                  if (extBigArm / rangeDiv == Math.floor(extBigArm / rangeDiv) && extSmallArm / rangeDiv == Math.floor(extSmallArm / rangeDiv)) {
                    // Store in global containers
                    range = nextRange;
                    yMax = mf == -1 ? extBigArm : extSmallArm;
                    yMin = mf == -1 ? -extSmallArm : -extBigArm;
                    // Set found flag to true to exit loop
                    found = true;
                  }
                } else {
                  // Iterate to next loop value, as we need the arm to be greater
                  // than original value.
                  continue;
                }
              }
            }
          }
        }
      } else {
        // Case 1.1 or 1.2
        // In this case, we first get apt divisible range based on yMin, yMax,
        // numDivLines and the calculated interval. Thereby, get the difference
        // between original range and new range and store as delta.
        // If yMax>0, add this delta to yMax. Else substract from yMin.
        // Get the adjusted divisible range
        adjRange = getDivisibleRange(yMin, yMax, numDivLines, interval, true);
        // Get delta (Calculated range minus original range)
        deltaRange = adjRange - range;
        // Update global range storage
        range = adjRange;
        // Now, add the change in range to yMax, if yMax > 0, else deduct from yMin
        if (yMax > 0) {
          yMax = yMax + deltaRange;
        } else {
          yMin = yMin - deltaRange;
        }
      }
    } else {
      //  Here, we've to handle the following cases
      //  2. User specifies both yMin, yMax in XML. (which our program still validates)
      //  3. User specifies only yMin. (we provide yMax)
      //  4. User specifies only yMax. (we provide yMin)
      //  Now, for each of these, there can be two cases. If the user has opted to
      //  adjust div lines or not. If he has opted to adjustDiv, we calculate the best
      //  possible number of div lines for the given range. If not, we simply divide
      //  the given (or semi-calculated) axis limits by the number of div lines.
      if (adjustDiv) {
        // We iterate from given numDivLines to 0,
        // Count helps us keep a counter of how many div lines we've checked
        // For the sake of optimization, we check only 25 div lines values
        // From (numDivLines to 0) and (numDivLines to (25-numDivLines))
        // We do it in a yoyo order - i.e., if numDivLines is set as 5,
        // we first check 6 and then 4. Next would be (8,3), (9,2), (10,1),
        // (11, (no value here, as we do not check for 0), 12, 13, 14, 15, 16,
        // 17,18,19,20. So, in this way, we check for 25 possible numDivLines and
        // see if any one them fit in. If yes, we store that value. Else, we set it
        // as 0 (indicating no div line feasible for the given value).
        // Perform only if numDivLines>0
        evalNumDivlines = function evalNumDivlines(numDivLines, range, interval) {
          var counter = 0,
              multiplyFactor = 1,
              divLines;

          while (1) {
            // Increment,Decrement numDivLines
            divLines = numDivLines + counter * multiplyFactor;
            // Cannot be 0
            divLines = divLines === 0 ? 1 : divLines;
            // Check whether this number of numDivLines satisfy our requirement
            if (isRangeDivisible(range, divLines, interval)) {
              // Exit loop
              break;
            }
            // Each counter comes twice: one for + count, one for - count
            counter = multiplyFactor == -1 || counter > numDivLines ? ++counter : counter;
            if (counter > 25) {
              // We do not go beyond 25 count to optimize.
              // If the loop comes here, it means that divlines
              // counter is not able to achieve the target.
              // So, we assume no div lines are possible and exit.
              divLines = 0;
              break;
            }
            // Switch to increment/decrement mode. If counter
            multiplyFactor = counter <= numDivLines ? multiplyFactor * -1 : 1;
          }
          return divLines;
        };

        if (numDivLines > 0) {
          divLines = evalNumDivlines(numDivLines, range, interval);
          if (divLines === 0) {
            divLines = evalNumDivlines(numDivLines, range + 1, interval);
            addToRange = 1;
          }
          // Store the value in params
          numDivLines = divLines;
        }
      }
    }
    // Set flags pertinent to zero plane
    // if (yMax > 0 && yMin < 0)
    // {
    //  zeroPRequired = true;
    // } else
    // {
    //  zeroPRequired = false;
    // }
    // Div interval
    divInterval = (yMax - yMin + addToRange) / (numDivLines + 1);
    /* //Flag to keep a track whether zero plane is included
     zeroPIncluded = false;
     //We now need to store all the div line segments in the array this.divLines
     //We include yMin and yMax too in div lines to render in a single loop
     var divLineValue = yMin - divInterval;
     //Keeping a count of div lines
     var count = 0;
     while (count <= (numDivLines + 1))
     {
     //Converting to string and back to number to avoid Flash's rounding problems.
     divLineValue = Number (String (divLineValue + divInterval));
     //Check whether zero plane is included
     zeroPIncluded = (divLineValue == 0) ? true : zeroPIncluded;
     //Add the div line to this.divLines
     this.divLines [count] = this.returnDataAsDivLine (divLineValue);
     //Based on yAxisValueStep, we need to hide required div line values
     if (count % yAxisValuesStep == 0)
     {
     divLines [count].showValue = true;
     } else
     {
     divLines [count].showValue = false;
     }
     //Increment counter
     count ++;
     }
     //Now, the array this.divLines contains all the divisional values. But, it might
     //not contain 0 value in Case 2,3,4 (i.e., when the user manually sets things).
     //So, if zero plane is required but not included, we include it.
     if (zeroPRequired == true && zeroPIncluded == false)
     {
     //Include zero plane at the right place in the array.
     divLines.push (returnDataAsDivLine (0));
     //Now, sort on value so that 0 automatically appears at right place
     divLines.sortOn ('value', Array.NUMERIC);
     //Also increase numDivLines
     numDivLines ++;
     }
     //We finally have the sorted div lines in this.divLines  */

    // ////fix of error in renderer for infinite loop

    return {
      Max: yMax,
      Min: yMin,
      Range: range,
      interval: interval,
      divGap: divInterval
    };
  };
}(),

// HC compatiable JSON to Show a message in Chart
// store blank Chart to show message
// /special configuration
/** @todo have to check whether style for text are applicable in FC or not
 //then we have to implement the font style also */
createDialog = function () {
  var api = function api(container, text, chartObj) {
    var smartLabel = chartObj.jsVars && chartObj.jsVars.smartLabel,
        chartWidth = container.offsetWidth,
        chartHeight = container.offsetHeight,
        chart = this.chart,
        title = this.title,
        imgStyle = chartObj._chartMessageImageStyle,
        // styles for image as chart msg
    strObj = getImageURL(text),
        smartText;

    title.y = chartHeight / 2;
    title.x = chartWidth / 2;

    // Clear previous title and background image if any, in order to ignore the cache.
    chart.bgSWF = title.text = UNDEF;
    text = strObj.string;

    // If the chart message string is an URL to image set the URL and other properties as
    // chart background image.
    if (strObj.image) {
      chart.bgSWF = text;
      chart.bgImageHAlign = imgStyle.imageHAlign;
      chart.bgImageVAlign = imgStyle.imageVAlign;
      chart.bgImageScale = imgStyle.imageScale;
      chart.bgSWFAlpha = imgStyle.imageAlpha;
    } else if (text !== UNDEF) {
      if (smartLabel) {
        setLineHeight(title.style);
        smartLabel.setStyle(title.style);
        smartText = smartLabel.getSmartText(parseUnsafeString(text), chartWidth, chartHeight);
        title.text = smartText.text;
      } else {
        title.text = parseUnsafeString(text);
      }
      title.verticalAlign = 'middle';
    }

    title.style = chartObj._chartMessageStyle;

    delete chartObj._chartMessageImageStyle;
    delete chartObj._chartMessageStyle;
  };

  api.prototype = { // jsonstructutr for a blank chart which will be used to show a messege
    chart: {
      events: {},
      margin: [0, 0, 0, 0],
      backgroundColor: {
        FCcolor: {
          alpha: 0
        }
      }
    },
    credits: {
      href: CREDIT_HREF,
      text: CREDIT_STRING,
      enabled: creditLabel
    },
    legend: {
      enabled: false
    },
    title: {
      text: '',
      style: {
        fontFamily: 'Verdana,sans',
        fontSize: '10px',
        color: '#666666'
      }
    },
    plotOptions: {
      series: {}
    },
    series: [{}],
    exporting: {
      enabled: false
    },
    nativeMessage: true
  };

  return api.prototype.constructor = api;
}(),


// [zone][!inverse][start < end]
trendLineLabelPositionHoriz = {
  'true': {
    'true': {
      'true': POSITION_CENTER,
      'false': POSITION_CENTER
    },
    'false': {
      'true': POSITION_CENTER,
      'false': POSITION_CENTER
    }
  },
  'false': {
    // Relative value position: start < end
    'true': {
      // Axis oppositality
      'true': POSITION_RIGHT,
      'false': POSITION_LEFT
    },
    'false': {
      // Axis oppositality
      'true': POSITION_LEFT,
      'false': POSITION_RIGHT
    }
  }
},

// Function to insart trend Line
/** @todo
 * - pading will be added as per axis label padding
 * - have to import style
 * - have to optimize
 * - implement tooltip on trendlines
 */
createTrendLine = function () {
  return function (trendObj, axis, hcConf, isDY, isBar, isVtrend, isInverse) {
    var x,
        trendStyle = hcConf.trendStyle,
        z,
        l,
        m,
        trendLineObj,
        isOpp,
        isZone,
        displayvalue,
        trendLabelObj,
        toolText,
        labelColor,
        axisObj,
        width,
        trendStartValue,
        trendEndValue,

    // slopeDirection,
    slopeDirectionHoriz,
        max,
        min,
        axisIndex,
        trendLines,
        NFMethodName = isVtrend ? 'xAxis' : 'dataLabels';

    if (isVtrend ? !hcConf.showVLines : !hcConf.showTrendlines) {
      return;
    }
    for (x = 0, l = trendObj.length; x < l; x += 1) {
      trendLines = trendObj[x];
      if (trendLines && trendLines.line) {
        for (z = 0, m = trendLines.line.length; z < m; z += 1) {
          trendLineObj = trendLines.line[z];

          trendStartValue = hcConf.numberFormatter.getCleanValue(pluck(trendLineObj.startvalue, trendLineObj.value, 0));
          trendEndValue = hcConf.numberFormatter.getCleanValue(pluck(trendLineObj.endvalue, pluck(trendLineObj.startvalue, trendLineObj.value, 0)));

          // check which axis object will be added
          if (isVtrend) {
            axisObj = axis;
          } else if (isDY && trendLineObj.parentyaxis && /^s$/i.test(trendLineObj.parentyaxis)) {
            axisObj = axis[1];
            axisIndex = 1;
          } else {
            axisObj = axis[0];
          }
          max = axisObj.max;
          min = axisObj.min;
          // isOpp variable needs to be re-evaluated in each iteration
          // as trendlines might be of different axis.
          isOpp = false;
          if (max >= trendStartValue && max >= trendEndValue && min <= trendStartValue && min <= trendEndValue) {
            // for secondary y axis we have to place its trendlines on right
            // by default. attribute valueonleft for secondary y axis is not
            // documented. So its usage at this moment will be a hack
            if (isDY && trendLineObj.parentyaxis && /^s$/i.test(trendLineObj.parentyaxis)) {
              isOpp = pluck(trendLineObj.valueonleft, hcConf.trendlineValuesOnOpp) !== ONESTRING;
            } else if (!isDY) {
              // But for any DY axis chart trendlines should not be placed on
              // right.
              isOpp = pluck(trendLineObj.valueonright, hcConf.trendlineValuesOnOpp) === ONESTRING;
            }

            /* isOpp = (trendLineObj.valueonright === ONESTRING ||
                             (trendLineObj.parentyaxis && /^s$/i.test(trendLineObj.parentyaxis))) ? true : false; */

            // Calculate from input values whether the object would
            // be trendline or trendzone
            isZone = Boolean(pluckNumber(trendLineObj.istrendzone, isVtrend ? 1 : 0));

            // if there has a display value the create it
            if (!(isVtrend ? hcConf.showVLineLabels : hcConf.showTrendlineLabels)) {
              displayvalue = BLANK;
            } else {
              displayvalue = parseUnsafeString(pluck(trendLineObj.displayvalue, hcConf.numberFormatter[NFMethodName](isOpp ? trendEndValue : trendStartValue, axisIndex)));
            }

            if (displayvalue) {
              // slopeDirection = (trendStartValue > trendEndValue);
              slopeDirectionHoriz = trendStartValue < trendEndValue;
              trendLabelObj = {
                text: displayvalue,
                textAlign: isBar ? POSITION_CENTER : isOpp ? POSITION_LEFT : POSITION_RIGHT,
                align: isBar ? trendLineLabelPositionHoriz[isZone][!isInverse][slopeDirectionHoriz] : isOpp ? POSITION_RIGHT : POSITION_LEFT,
                /* verticalAlign: isBar ? POSITION_BOTTOM :
                 trendLineLabelPosition[isZone][!isInverse][slopeDirection][isOpp], */
                verticalAlign: isBar ? POSITION_BOTTOM : POSITION_MIDDLE,
                rotation: 0,
                x: 0,
                y: 0, // isBar ? halfFontSize : 2,
                style: trendStyle
              };
              labelColor = pluck(trendLineObj.color, hcConf.trendlineColor);
              trendLineObj.alwaysVisible = isZone; // always show zones (even if 0 width)
              if (labelColor) {
                trendLabelObj.style = (0, _raphael2['default'])({}, trendStyle);
                trendLabelObj.style.color = convertColor(labelColor, pluckNumber(trendLineObj.alpha, 100));
              }
            } else {
              trendLabelObj = UNDEF;
            }
            // add options for tooltext
            toolText = getValidValue(parseUnsafeString(pluck(trendLineObj.tooltext, trendLines.tooltext, hcConf.trendLineToolText)));
            toolText = parseTooltext(toolText, [7, 15, 16, 17, 18, 19], {
              startValue: trendStartValue,
              startDataValue: hcConf.numberFormatter[NFMethodName](trendStartValue, axisIndex),
              endValue: trendEndValue,
              endDataValue: hcConf.numberFormatter[NFMethodName](trendEndValue, axisIndex),
              axisName: axisObj.title && axisObj.title.text
            }, trendLineObj);

            width = pluckNumber(trendLineObj.thickness, hcConf.trendlineThickness, 1);

            if (isZone) {
              axisObj.plotBands.push({
                isTrend: true,
                color: convertColor(pluck(trendLineObj.color, hcConf.trendlineColor), pluck(trendLineObj.alpha, hcConf.trendlineAlpha, 40)),
                from: trendStartValue,
                to: trendEndValue,
                label: trendLabelObj,
                // for 3d series never will be on top
                zIndex: !hcConf.config.is3D && pluck(trendLineObj.showontop, hcConf.showTrendlinesOnTop) === ONESTRING ? 5 : 3,
                tooltext: toolText,
                alwaysVisible: trendLineObj.alwaysVisible
              });
            } else {
              axisObj.plotLines.push({
                isTrend: true,
                color: convertColor(pluck(trendLineObj.color, hcConf.trendlineColor, hcConf.trendlineColor), pluck(trendLineObj.alpha, hcConf.trendlineAlpha, 99)),
                value: trendStartValue,
                to: trendEndValue,
                width: width,
                dashStyle: pluck(trendLineObj.dashed, hcConf.trendlinesAreDashed) == ONESTRING ? getDashStyle(pluckNumber(trendLineObj.dashlen, hcConf.trendlinesDashLen), pluckNumber(trendLineObj.dashgap, hcConf.trendlinesDashGap)) : DASH_DEF,
                label: trendLabelObj,
                // for 3d series never will be on top
                zIndex: !hcConf.config.is3D && pluck(trendLineObj.showontop, hcConf.showTrendlinesOnTop) === ONESTRING ? 5 : 3,
                tooltext: toolText
              });
            }
          }
        }
      }
    }
  };
}(),
    chartAPI,
    interActiveEvtList = {
  click: true,
  dragstart: true,
  dragmove: true,
  dragend: true,
  dblclick: true,
  mousedown: true,
  mousemove: true,
  mouseout: true,
  mouseover: true,
  mouseup: true,
  touchstart: true,
  touchmove: true,
  touchend: true,
  touchcancel: true
},
    regex = {
  stripWhitespace: stripWhitespace,
  dropHash: dropHash,
  startsRGBA: startsRGBA,
  cleanColorCode: cleanColorCode,
  breakPlaceholder: breakPlaceholder,
  hexcode: hexcode
},
    preDefStr = {
  // Please set the color key in capitals without hash when adding new color string
  colors: {
    B90000: 'B90000',
    FFFFFF: 'FFFFFF',
    AAAAAA: 'AAAAAA',
    c000000: '000000'
  },
  BLANK: '',
  DATASET: 'dataset',
  NORMALSTRING: 'normal',
  PX: 'px',
  INPUT: 'input',
  LABEL: 'label',
  BLANKSPACE: ' ',
  COMMA: ',',
  OBJECTBOUNDINGBOX: 'objectBoundingBox',
  GROUPID: 'groupId',
  EVENTARGS: 'eventArgs',
  CIRCLE: 'circle',
  POLYGON: 'polygon',
  SPOKE: 'spoke',
  RECTANGLE: 'rectangle',
  ROLLOUT: 'rollout',
  ROLLOVER: 'rollover',
  DATAPLOTCLICK: 'dataplotclick',
  defaultFontStr: 'Verdana,sans',
  line: 'line',
  bar: 'bar',
  column: 'column',
  volume: 'volume',
  HUNDREDSTRING: '100',
  SEVENTYSTRING: '70',
  NINETYSTRING: '90',
  AUTOSTRING: 'auto',
  configStr: 'config',
  animationObjStr: 'animationObj',
  showHoverEffectStr: 'showHoverEffect',
  hiddenStr: 'hidden',
  visibleStr: 'visible',

  columnStr: 'columns',
  barStr: 'bars',
  barHotStr: 'bar-hot',
  colHotStr: 'col-hot',
  shadowStr: 'shadow',
  dataLabelStr: 'datalabel',
  errorBarStr: 'errorBar',
  errorHotStr: 'error-hot',
  errorShadowStr: 'error-shadow',

  negativeValueStr: 'negative-values',
  positiveValueStr: 'positive-values',
  zeroPlaneStr: 'zero-plane',
  categoryPlotsStr: 'categoryplots',
  noneStr: 'none',
  setRolloverAttrStr: 'setRolloverAttr',
  setRolloutAttrStr: 'setRolloutAttr',
  elementStr: 'element',
  hotElementStr: 'hotElement',
  strokeWidthStr: 'stroke-width',
  strokeDashStr: 'stroke-dasharray',
  strokeLineJoinStr: 'stroke-linejoin',
  miterStr: 'miter',
  visiblilityStr: 'visibility',
  ROUND: 'round',
  PERCENTAGESTRING: '%',
  pStr: 'p',
  sStr: 's',
  divLineAlpha3DStr: 'divLineAlpha3D',
  divLineAlphaStr: 'divLineAlpha',
  altVGridColorStr: 'altVGridColor',
  altVGridAlphaStr: 'altVGridAlpha',
  altHGridColorStr: 'altHGridColor',
  altHGridAlphaStr: 'altHGridAlpha',
  PLOTFILLCOLOR_STR: 'plotFillColor',
  UNDERSCORE: UNDERSCORE,
  gaugeFillColorStr: 'gaugeFillColor',
  gaugeBorderColorStr: 'gaugeBorderColor',
  NORMAL: 'normal',
  BOLD: 'bold',
  POINTER: 'pointer',
  DEFAULT: 'default',

  POSITION_MIDDLE: 'middle',
  POSITION_START: 'start',
  POSITION_TOP: 'top',
  POSITION_BOTTOM: 'bottom',
  POSITION_END: 'end'
},
    graphics = {
  parseAlpha: parseAlpha,
  convertColor: convertColor,
  getDarkColor: getDarkColor,
  getLightColor: getLightColor,
  mapSymbolName: mapSymbolName,
  getColumnColor: getColumnColor,
  getPointColor: getPointColor,
  getAngle: getAngle,
  parseColor: parseColor,
  getValidColor: getValidColor,
  HSBtoRGB: HSBtoRGB,
  RGBtoHSB: RGBtoHSB,
  RGBtoHex: RGBtoHex,
  rawRGBtoHEX: rawRGBtoHEX,
  HEXtoRGB: hexToRgb,
  getCubePathOutline: getCubePathOutline
},
    appliedCSS = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'],
    handleContainerResize = function () {
  var store = {},
      intervalId,
      localGlobal,
      trackResize = function trackResize() {
    var item,
        itemObj,
        itemVar,
        parentEle,
        count = 0,
        ref,
        s,
        offW,
        INTERVALMS = parseInt(localGlobal.core.options.resizeTrackingInterval, 10) || 300,
        jsVars = {},
        storeContainerSize = function storeContainerSize() {
      jsVars.itemVar._containerOffsetW = jsVars.parentEle.offsetWidth;
      jsVars.itemVar._containerOffsetH = jsVars.parentEle.offsetHeight;
    },
        offH;

    for (item in store) {
      count += 1;
      itemObj = store[item];
      itemVar = itemObj.jsVars;
      ref = itemObj.ref;

      if (!itemObj.disposed && (parentEle = ref && ref.parentNode) && (s = ref.style) && (/\%/g.test(s.width) || /\%/g.test(s.height))) {
        offW = parentEle.offsetWidth;
        offH = parentEle.offsetHeight;

        if (!itemVar.resizeLocked && (offW && itemVar._containerOffsetW !== offW || offH && itemVar._containerOffsetH !== offH)) {
          itemObj.resizeTo && itemObj.resizeTo();

          // Store the parent container dimensions to jsVars
          jsVars.itemVar = itemVar;
          jsVars.parentEle = parentEle;
          setTimeout(storeContainerSize, 1);
        }
      } else {
        delete store[item];
        count -= 1;
      }
    }

    if (!count) {
      intervalId = clearTimeout(intervalId);
    } else {
      intervalId = setTimeout(trackResize, INTERVALMS);
    }
  };

  return function (sender, container, fcGlobal) {
    var vars = sender.jsVars,
        element = container || sender.ref && sender.ref.parentNode || {};

    localGlobal = fcGlobal;

    vars._containerOffsetW = element.parentNode.offsetWidth;
    vars._containerOffsetH = element.parentNode.offsetHeight;
    store[sender.id] = sender;

    if (!intervalId) {
      intervalId = setTimeout(trackResize, parseInt(fcGlobal.core.options.resizeTrackingInterval, 10) || 300);
    }
  };
}(),

/**
 * The function will return the maximum comparable value in the input array while ignoring undefined,
 * NaN and null values. Strings  are compared in their natural order (i.e. '3' > '20' BUT 3 < 20).
 *
 * This function also accepts an optional accessor function whose return value is used to determine
 * the value using which the max will be determined.
 *
 * @param {Array} arr array in which to searched
 * @param {Function} [fn] a function which will return the value to be checked
 * @return max value
 */
safeMax = function safeMax() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fn = arguments[1];

  var len = arr.length,
      i = -1,
      val,
      maxVal;
  if (typeof fn === 'function') {
    while (++i < len) {
      val = fn(arr[i], i, arr);
      // loose checking with null is applicable here to filter out null and undefined.
      // self comparision is applicable here for NaN
      // eslint-disable-next-line
      if (val != null && val >= val) {
        maxVal = val;
        while (++i < len) {
          val = fn(arr[i], i, arr);
          // eslint-disable-next-line
          if (val != null && val > maxVal) {
            maxVal = val;
          }
        }
      }
    }
  } else {
    while (++i < len) {
      val = arr[i];
      // eslint-disable-next-line
      if (val != null && val >= val) {
        maxVal = val;
        while (++i < len) {
          val = arr[i];
          // eslint-disable-next-line
          if (val != null && val > maxVal) {
            maxVal = val;
          }
        }
      }
    }
  }
  return maxVal;
},

/**
 * The function will return the maximum comparable value in the input array while ignoring undefined,
 * NaN and null values. Strings  are compared in their natural order (i.e. '3' > '20' BUT 3 < 20).
 *
 * This function also accepts an optional accessor function whose return value is used to determine
 * the value using which the max will be determined.
 *
 * @param {Array} arr array in which to searched
 * @param {Function} [fn] a function which will return the value to be checked
 * @return min value
 */
safeMin = function safeMin() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fn = arguments[1];

  var len = arr.length,
      i = -1,
      val,
      minVal;
  if (typeof fn === 'function') {
    while (++i < len) {
      val = fn(arr[i], i, arr);
      // loose checking with null is applicable here to filter out null and undefined.
      // self comparision is applicable here for NaN
      // eslint-disable-next-line
      if (val != null && val <= val) {
        minVal = val;
        while (++i < len) {
          val = fn(arr[i], i, arr);
          // eslint-disable-next-line
          if (val != null && val < minVal) {
            minVal = val;
          }
        }
      }
    }
  } else {
    while (++i < len) {
      val = arr[i];
      // eslint-disable-next-line
      if (val != null && val <= val) {
        minVal = val;
        while (++i < len) {
          val = arr[i];
          // eslint-disable-next-line
          if (val != null && val < minVal) {
            minVal = val;
          }
        }
      }
    }
  }
  return minVal;
},

/**
 * The function will give an array with max and min value as first and last element respectively
 * It uses safeMax and safeMin internally
 * @param {Array} arr array in which to searched
 * @param {Function} [fn] a function which will return the value to be checked
 * @return an array with first value as min and last value as max
 */
extent = function extent() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fn = arguments[1];

  var maxVal = safeMax(arr, fn),
      minVal = safeMin(arr, fn);
  return [minVal, maxVal];
};

function defined(obj) {
  return typeof obj !== 'undefined' && obj !== null;
}

function pInt(s, mag) {
  return parseInt(s, mag || 10);
}

function getContainerBackgroundColor(chart) {
  var options = chart.options,
      color = options.containerBackgroundColor,
      opacity = options.containerBackgroundOpacity;

  if (defined(chart.jsVars.transparent)) {
    opacity = chart.jsVars.transparent ? 0 : 1;
  } else {
    opacity = parseFloat(opacity);
    if (opacity < 0) {
      opacity = 0;
    } else if (opacity > 1) {
      opacity = 1;
    }
  }

  if (!color) {
    color = '#ffffff';
  }

  if (isIE && !hasSVG) {
    return opacity ? color : 'transparent';
  } else {
    color = color.replace(/^#?([a-f0-9]+)/ig, '$1');
    color = hexToRgb(color);
    color[3] = opacity.toString();
    return 'rgba(' + color.join(',') + ')';
  }
}

function hashify(color) {
  return color && color.replace(/^#?([a-f0-9]+)/ig, '#$1') || 'none';
}

function addElScrollEvent(eveObj) {
  eveObj.data && (eveObj.data.elScroll = false);
}

// this function is to get the x y coordinate of element hovered
function getPosition(el, chart) {
  var pos = {
    top: 0,
    left: 0
  },
      elNode,
      position,
      chartConfig = chart && chart.config,

  // toolTipController = chart.getFromEnv('toolTipController'),
  eventListeners = chart && (chart.eventListeners || (chart.eventListeners = [])),
      isEvntAdded = chart && (chartConfig.isEvntAdded || (chartConfig.isEvntAdded = false));

  if (el) {
    pos.top = el.offsetTop;
    pos.left = el.offsetLeft;
    // get the parent node
    elNode = el;
    // get Element scroll position
    while ((elNode = elNode.parentNode) && elNode.tagName !== 'BODY') {
      position = win.getComputedStyle(elNode).getPropertyValue('position');
      if (/fixed/.test(position)) {
        if (chart) {
          chartConfig.itemFixed = true;
          // toolTipController.enableFixedPosition();
        }
      }
      pos.top -= elNode.scrollTop || 0;
      pos.left -= elNode.scrollLeft || 0;
      // add event to parent
      chart && !isEvntAdded && eventListeners.push(_domEvent2['default'].listen(elNode, 'scroll', addElScrollEvent, chartConfig));
    }
    // checking scroll for body and html
    while (elNode) {
      pos.top -= elNode.scrollTop || 0;
      pos.left -= elNode.scrollLeft || 0;
      elNode = elNode.parentNode;
    }
    // get element offset position\
    el = el.offsetParent;
    while (el) {
      pos.top += el.offsetTop;
      pos.left += el.offsetLeft;
      el = el.offsetParent;
    }
    // get window scroll position
    pos.top += win.pageYOffset || win.scrollY || doc.documentElement.scrollTop;
    pos.left += win.pageXOffset || win.scrollX || doc.documentElement.scrollLeft;

    chart && !isEvntAdded && eventListeners.push(_domEvent2['default'].listen(win, 'resize', addElScrollEvent, chartConfig));
    chart && !isEvntAdded && eventListeners.push(_domEvent2['default'].listen(win, 'scroll', addElScrollEvent, chartConfig));
    chart && !isEvntAdded && (chartConfig.isEvntAdded = true);
  }

  return pos;
}

/**
 * Sets a given number to a given lower bound or upper bound if the number exceeds those bounds
 * @param {number} number The number to be clamped
 * @param {number} [lowerBound=-Infinity] The upper bound at which to clamp the number
 * @param {number} [upperBound=Infinity] The lower bound at which to clamp the number
 * @return {number} The clamped number
 */
function clampNumber(number) {
  var lowerBound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
  var upperBound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  if (number <= lowerBound) {
    return lowerBound;
  } else if (number >= upperBound) {
    return upperBound;
  } else {
    return number;
  }
}

function pluckNumber() {
  var arg, i, l;

  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    } else if (isNaN(arg = Number(arg))) {
      continue;
    }
    return arg;
  }
  return UNDEF;
}

function getTouchEvent(event) {
  var e = event && (event.sourceEvent || event.originalEvent || event);
  return touchEnabled && e && e.touches && e.touches[0] || e || stubEvent;
}

function fcEach(obj, fn, scope, data) {
  var i;

  if (!scope) {
    scope = obj;
  }

  if (!data) {
    data = {};
  }

  if (isArray(obj)) {
    for (i = 0; i < obj.length; i += 1) {
      if (fn.call(scope, obj[i], i, obj, data) === false) {
        return i;
      }
    }
  } else if (!(obj === null || obj === UNDEF)) {
    for (i in obj) {
      if (fn.call(scope, obj[i], i, obj, data) === false) {
        return i;
      }
    }
  }
}

function selectionEventHandler(evt) {
  var config = evt.data,
      chart = config.chart,
      animationManager = chart.getFromEnv('animationManager'),
      state = evt.state,
      event = getEventCoordinate(getTouchEvent(evt.originalEvent)),
      tgt = event.target || event.originalTarget || event.srcElement || event.relatedTarget || event.fromElement,
      canvas = chart.getChildren('canvas')[0],
      resizeBoxCheck,
      resizeBox = resizeBoxCheck = canvas.getGraphicalElement('resizeBox'),
      layerX = config.layerX = event.pageX - config.chartPosLeft,
      layerY = config.layerY = event.pageY - config.chartPosTop,
      dx = layerX - config.ox,
      dy = layerY - config.oy,
      bBox = config.bBox,
      x = config.ox,
      y = config.oy,
      zoomX = config.zoomX,
      zoomY = config.zoomY,
      canvasY = config.canvasY,
      canvasX = config.canvasX,
      canvasW = config.canvasW,
      canvasH = config.canvasH,
      canvasX2 = config.canvasX2,
      canvasY2 = config.canvasY2,
      strokeWidth = config.strokeWidth,
      attr = config.attr,
      container = this,
      chartPosition,
      selectionData;

  switch (state) {
    case 'start':
      // DragStart
      // Recalculate the container position and store it in the conf.
      chartPosition = getPosition(container);
      config.chartPosLeft = chartPosition.left;
      config.chartPosTop = chartPosition.top;
      layerX = event.pageX - config.chartPosLeft;
      layerY = event.pageY - config.chartPosTop;
      config.oy = layerY;
      config.ox = layerX;
      config.allowMove = false;
      attr.x = 0;
      attr.y = 0;
      attr.height = 0;
      attr.width = 0;
      resizeBox = canvas.addGraphicalElement('resizeBox', animationManager.setAnimation({
        el: resizeBoxCheck || 'rect',
        attr: attr,
        container: chart.getChildContainer('trackerGroup')
      })).show();
      if (!resizeBoxCheck) {
        canvas.addGraphicalElement('resizeBox', resizeBox);
      }

      if (layerX > canvasX && layerX < canvasX2 && layerY > canvasY && layerY < canvasY2) {
        config.allowMove = true;
      }
      // do not receive event if the clicked target element is marked as
      // hot
      if (tgt && tgt.ishot) {
        config.allowMove = false;
      }
      break;

    case 'end':
      // DragEnd
      bBox = resizeBox.getBBox();
      selectionData = {
        chart: chart,
        selectionLeft: bBox.x,
        selectionTop: bBox.y,
        selectionHeight: bBox.height,
        selectionWidth: bBox.width,
        originalEvent: evt.originalEvent
      };
      if (config.isDragged) {
        config.selectionEnd && config.selectionEnd(selectionData);
        config.isDragged = 0;
      }
      resizeBox.hide();

      delete config.oy;
      delete config.ox;
      break;

    default:
      // DragMove
      if (!config.allowMove) {
        return;
      }
      dx = layerX - config.ox;
      dy = layerY - config.oy;
      bBox = config.bBox;
      x = config.ox;
      y = config.oy;

      if (!config.isDragged) {
        selectionData = {
          chart: chart,
          selectionLeft: (zoomX ? mathMin(x, x + dx) : canvasX) + strokeWidth * 0.5,
          selectionTop: (zoomY ? mathMin(y, y + dy) : canvasY) + strokeWidth * 0.5,
          selectionHeight: 0,
          selectionWidth: 0,
          originalEvent: evt.originalEvent
        };
        config.selectionStart && config.selectionStart(selectionData);
        config.isDragged = 1;
      }

      dx = -(x - mathMin(x - (x - mathMax(x + dx, canvasX)), canvasX2));
      dy = -(y - mathMin(y - (y - mathMax(y + dy, canvasY)), canvasY2));
      animationManager.setAnimation({
        el: resizeBox,
        attr: {
          x: (zoomX ? mathMin(x, x + dx) : canvasX) + strokeWidth * 0.5,
          y: (zoomY ? mathMin(y, y + dy) : canvasY) + strokeWidth * 0.5,
          width: zoomX ? mathAbs(dx) : canvasW,
          height: zoomY ? mathAbs(dy) : canvasH
        }
      });

      break;
  }
}
function onXYCanvasClick(event) {
  var config = event.data,
      e = event.originalEvent,
      tgt = e.target || e.originalTarget || e.srcElement || e.relatedTarget || e.fromElement,
      eventType = e.type,
      layerX = e.layerX,
      layerY = e.layerY;

  if (layerX === UNDEF) {
    layerX = e.pageX - config.chartPosLeft;
    layerY = e.pageY - config.chartPosTop;
  }

  if (eventType === 'mousedown') {
    tgt.ishot = layerX > config.canvasX && layerX < config.canvasX2 && layerY > config.canvasY && layerY < config.canvasY2;
  }
  if (eventType === 'mouseup') {
    setTimeout(function () {
      tgt.ishot = false;
    }, 1);
  }
}

/**
 * Capitalizes first letter of a word
 */
function capitalizeString(str, all) {
  // eslint-disable-next-line no-unused-vars
  return str ? str.replace(all ? /(^|\s)([a-z])/g : /(^|\s)([a-z])/, function (m, p1, p2) {
    return p1 + p2.toUpperCase();
  }) : str;
}

function getFirstValue() {
  var arg, i, l;
  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    }
    return arg;
  }
  return BLANK;
}

function bindSelectionEvent(chart, config) {
  config = config || {};
  var chartConfig = chart.config,
      container = chart.getFromEnv('chart-container'),
      zoomType = chartConfig.zoomType,
      attr = (0, _raphael2['default'])({}, config.attr || {}),
      strokeWidth = attr['stroke-width'] = pluckNumber(attr.strokeWidth, attr['stroke-width'], 1),
      eventListeners = chart.eventListeners || (chart.eventListeners = []),
      chartPosition = getPosition(container, chart);

  config = (0, _raphael2['default'])({
    chart: chart,
    zoomX: /x/.test(zoomType),
    zoomY: /y/.test(zoomType),
    canvasY: chartConfig.canvasTop,
    canvasX: chartConfig.canvasLeft,
    canvasW: chartConfig.canvasWidth,
    canvasH: chartConfig.canvasHeight,
    canvasX2: chartConfig.canvasLeft + chartConfig.canvasWidth,
    canvasY2: chartConfig.canvasTop + chartConfig.canvasHeight,
    strokeWidth: strokeWidth,
    chartPosLeft: chartPosition.left,
    chartPosTop: chartPosition.top,
    attr: attr
  }, config);

  attr.stroke = getFirstValue(attr.stroke, 'rgba(51,153,255,0.8)');
  attr.fill = getFirstValue(attr.fill, 'rgba(185,213,241,0.3)');
  attr.ishot = true;

  if (container) {
    _domEvent2['default'].unlisten(container, 'pointerdrag', selectionEventHandler);
    eventListeners.push(_domEvent2['default'].listen(container, 'pointerdrag', selectionEventHandler, config));
  }

  if (chartConfig.link) {
    _domEvent2['default'].unlisten(chart.getFromEnv('chart-container'), 'mouseup mousedown', onXYCanvasClick);
    eventListeners.push(_domEvent2['default'].listen(chart.getFromEnv('chart-container'), 'mouseup mousedown', onXYCanvasClick, config));
  }
}

function regescape(text) {
  return text && text.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

function regReplaceEscape(text) {
  return text && text.replace(/\$/g, '$$$$');
}

/**
 * Checks if a value sent as argument is 'valid' as per valid input
 * standards.
 * @param {any} arg The value to be checked
 * @param {any} value is the default value returned.
 * @return {any} If 'arg' is valid returns 'arg'. Else returns 'value'.
 */
function getValidValue(arg, value) {
  return !arg && arg !== false && arg !== 0 ? value : arg;
}

/**
 *  Return the defColor if color is UNDEF other wise always returns the color even if color
 *  is a blank string
 *  @param {string} color The color string to be checked
 *  @param {string} defColor The default color string
 *  @return {string} A valid color
 */
function getDefinedColor(color, defColor) {
  return !color && color !== 0 && color !== BLANK ? defColor : color;
}

/**
 * Returns the first argument that is a 'valid' value or undefined.
 * @return {number|undefined} A valid value from the arguents passed into it or undefined.
 */
function pluck() {
  var arg, i, l;
  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    }
    return arg;
  }
  return UNDEF;
}

/**
 * Returns x,y coordinate WRT chart and page of mouse or touch
 * @param {Object} chart container ele
 * @param {Object} event data
 */
function getMouseCoordinate(el, event, chart) {
  var customEvent = getEventCoordinate(getTouchEvent(event)),
      pageX = global._fullScreenMode ? customEvent.clientX : customEvent.pageX,
      pageY = global._fullScreenMode ? customEvent.clientY : customEvent.pageY,
      chartConfig = chart && chart.config,
      pos,
      eType = event.type,
      itemFixed = chartConfig && chartConfig.itemFixed,
      winY = itemFixed ? win.pageYOffset || win.scrollY || doc.documentElement.scrollTop : 0,
      winX = itemFixed ? win.pageXOffset || win.scrollX || doc.documentElement.scrollLeft : 0;

  if (chartConfig && chartConfig.elScroll) {
    pos = chartConfig.posOb;
  } else {
    chartConfig && (chartConfig.elScroll = true);
    pos = getPosition(el, UNDEF, chart);
    chartConfig && (chartConfig.posOb = pos);
  }

  // fix for touch devices
  if (eType === 'touchend') {
    isNaN(pageX) && (pageX = prevPageX);
    isNaN(pageY) && (pageY = prevPageY);
  } else if (eType === 'touchmove' || eType === 'touchstart') {
    prevPageX = pageX;
    prevPageY = pageY;
  }

  return {
    chartX: pageX - pos.left - winX,
    chartY: pageY - pos.top - winY,
    pageX: pageX,
    pageY: pageY
  };
}

/**
 * Handle data plot click event
 * @param {Object} chart
 * @param {Object} event data
 * @param Sting event name
 */
function plotEventHandler(chart) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var eventName = arguments[2];
  var eventArguments = arguments[3];

  var eventType = event.type,
      coordinate = getMouseCoordinate(chart.getFromEnv('chart-container'), event, chart),
      eventArgs = this.data('eventArgs') || eventArguments,
      args = (0, _raphael2['default'])(coordinate, eventArgs),
      fireGroupEvent = chart.fireGroupEvent,
      id = this.data('groupId'),

  // eslint-disable-next-line no-unused-vars
  cancelHover = function cancelHover(c, a) {
    event.FusionChartsPreventEvent = true;
    // Hack for IE as the global event object gets overwritten
    // causing the FusionChartsPreventEvent to be UNDEF.
    if (isIE && a.toolText && lib.toolTip) {
      lib.toolTip.preventTooltip();
    }
  },
      minTimeForNextClick = 400,
      lastClickTimeStamp;

  if ('index' in args && !('dataIndex' in args)) {
    args.dataIndex = args.index;
  }
  if ('value' in args && !('dataValue' in args)) {
    args.dataValue = args.value;
  }
  eventName = pluck(eventName, 'dataplotclick').toLowerCase();
  // preventDefault in DataPlotRollOver
  if (eventName === 'dataplotrollover') {
    event.FusionChartsPreventEvent = false;
    if (fireGroupEvent) {
      /**
       * @event FusionCharts#dataplotRollOver
       *
       * @param {number} chartX - x-coordinate of the pointer relative to the chart.
       * @param {number} chartY - y-coordinate of the pointer relative to the chart.
       * @param {number} pageX - x-coordinate of the pointer relative to the page.
       * @param {number} pageY - y-coordinate of the pointer relative to the page.
       * @param {number} datasetIndex - The position of the dataset in order of its definition in source
       * data.
       * @param {string} datasetName - The `seriesName` of the dataset.
       * @param {number} dataIndex - The position of the data-plot in order of its definition in source
       * dataset.
       * @param {number} dataValue - The value of the data-plot that trigerred this event
       * @param {string} displayValue - The `displayValue` attribute that has been set for the data-plot.
       * @param {string} categoryLabel - The x-axis label that corresponds to the data-plot
       * @param {string} toolText - The tooltext that is displayed when hovered over the data-plot
       */
      (0, _eventApi.raiseEventGroup)(id, eventName, args, chart.getFromEnv('chartInstance'), UNDEF, UNDEF, cancelHover);
    } else {
      chart.fireChartInstanceEvent(eventName, args, UNDEF, UNDEF, cancelHover);
    }
  } else {
    if (fireGroupEvent && eventName !== 'dataplotclick') {
      /**
       * @event FusionCharts#dataplotRollOut
       *
       * @param {number} chartX - x-coordinate of the pointer relative to the chart.
       * @param {number} chartY - y-coordinate of the pointer relative to the chart.
       * @param {number} pageX - x-coordinate of the pointer relative to the page.
       * @param {number} pageY - y-coordinate of the pointer relative to the page.
       * @param {number} datasetIndex - The position of the dataset in order of its definition in source
       * data.
       * @param {string} datasetName - The `seriesName` of the dataset.
       * @param {number} dataIndex - The position of the data-plot in order of its definition in source
       * dataset.
       * @param {number} dataValue - The value of the data-plot that trigerred this event
       * @param {string} displayValue - The `displayValue` attribute that has been set for the data-plot.
       * @param {string} categoryLabel - The x-axis label that corresponds to the data-plot
       * @param {string} toolText - The tooltext that is displayed when hovered over the data-plot
       */
      (0, _eventApi.raiseEventGroup)(id, eventName, args, chart.getFromEnv('chartInstance'));
    } else {
      /**
       * @event FusionCharts#dataplotClick
       *
       * @param {number} chartX - x-coordinate of the pointer relative to the chart.
       * @param {number} chartY - y-coordinate of the pointer relative to the chart.
       * @param {number} pageX - x-coordinate of the pointer relative to the page.
       * @param {number} pageY - y-coordinate of the pointer relative to the page.
       * @param {number} datasetIndex - The position of the dataset in order of its definition in source
       * data.
       * @param {string} datasetName - The `seriesName` of the dataset.
       * @param {number} dataIndex - The position of the data-plot in order of its definition in source
       * dataset.
       * @param {number} dataValue - The value of the data-plot that trigerred this event
       * @param {string} displayValue - The `displayValue` attribute that has been set for the data-plot.
       * @param {string} categoryLabel - The x-axis label that corresponds to the data-plot
       * @param {string} toolText - The tooltext that is displayed when hovered over the data-plot
       */
      chart.fireChartInstanceEvent(eventName, args);
    }
  }
  if ((eventType === 'click' || eventType === 'mouseup' || eventType === 'touchend') && /click/i.test(eventName)) {
    if (supportsTouch && !supportsOnlyTouch) {
      //
      // In chrome of hybrid touch devices (touch + mouse), click is getting fired twice for single touch
      // To prevent cancle click within very sort time
      //
      lastClickTimeStamp = new Date().getTime();
      if (this.lastClickTimeStamp && lastClickTimeStamp - this.lastClickTimeStamp < minTimeForNextClick) {
        event && (event.originalEvent || event).preventDefault();
        return;
      }

      // store current time stamp
      this.lastClickTimeStamp = lastClickTimeStamp;
    }

    chart.getFromEnv('linkClickFN') && chart.getFromEnv('linkClickFN').call({
      link: args.link
    }, chart);
  }
}

function getLightColor(color, offsetPercent) {
  offsetPercent = offsetPercent < 0 || offsetPercent > 100 ? 100 : offsetPercent;
  offsetPercent = offsetPercent / 100;
  // Removing spaces and # form color
  color = color.replace(cleanColorCode, BLANK);
  var sourceclrRGB = parseInt(color, 16),

  // Converting color in R B G
  R = Math.floor(sourceclrRGB / 65536),
      G = Math.floor((sourceclrRGB - R * 65536) / 256),
      B = sourceclrRGB - R * 65536 - G * 256;
  return (COLOR_BLACK + (256 - (256 - R) * offsetPercent << 16 | 256 - (256 - G) * offsetPercent << 8 | 256 - (256 - B) * offsetPercent).toString(16)).slice(-6);
}

function dehashify(color) {
  return color && color.replace(/^#?([a-f0-9]+)/ig, '$1') || 'none';
}

/**
 * Returns the first argument that is a 'valid' value even blankstring.
 */
function getFirstDefinedValue() {
  var arg, i, l;
  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0 && arg != BLANK) {
      continue;
    }
    return arg;
  }
  return UNDEF;
}

/**
 * Returns the first number in the argument array.
 *
 * @note
 * The expression here is same as getValidValue with isNaN check
 * added to it.
 */
function pluckFontSize() {
  var arg, i, l;

  for (i = 0, l = arguments.length; i < l; i += 1) {
    arg = arguments[i];
    if (!arg && arg !== false && arg !== 0) {
      continue;
    } else if (isNaN(arg = Number(arg))) {
      continue;
    }
    return arg < 1 ? 1 : arg;
  }
  return 1;
}

function parsePointValue(value, abs) {
  /** @todo optimize further. */
  value = !value && value !== false && value !== 0 ? NaN : Number(value);
  return isNaN(value) ? null : abs ? mathAbs(value) : value;
}

function parseUnsafeString(str) {
  /** @todo use to string method if its not a string */
  if (typeof str === 'string') {
    return str.replace(breakPlaceholder, BREAKSTRING);
  } else {
    return BLANK;
  }
}

function getFirstColor(color, index) {
  color = color.split(COMMA)[index || 0];
  color = color.replace(stripWhitespace, BLANK);
  if (color == BLANK) {
    color = COLOR_BLACK;
  }
  return color.replace(dropHash, HASHSTRING);
}

function getDarkColor(color, offsetPercent) {
  offsetPercent = offsetPercent < 0 || offsetPercent > 100 ? 100 : offsetPercent;
  offsetPercent = offsetPercent / 100;
  // Removing spaces and # form color
  color = color.replace(cleanColorCode, BLANK);
  var sourceclrRGB = parseInt(color, 16),

  // Converting color in R B G
  R = Math.floor(sourceclrRGB / 65536),
      G = Math.floor((sourceclrRGB - R * 65536) / 256),
      B = sourceclrRGB - R * 65536 - G * 256;
  return (COLOR_BLACK + (R * offsetPercent << 16 | G * offsetPercent << 8 | B * offsetPercent).toString(16)).slice(-6);
}

function getColorCodeString(color, fillString) {
  var returnString = '',
      colorEntry,
      len,
      i = 0,
      fillArray = fillString.split(COMMA);
  for (len = fillArray.length; i < len; i += 1) {
    colorEntry = fillArray[i].split('-');
    if (colorEntry.length === 2) {
      if (colorEntry[0].indexOf('dark') !== '-1') {
        returnString += getLightColor(color, 100 - parseInt(colorEntry[1], 10)) + COMMA;
      } else {
        returnString += getDarkColor(color, 100 - parseInt(colorEntry[1], 10)) + COMMA;
      }
    } else {
      returnString += fillArray[i] + COMMA;
    }
  }
  return returnString.substring(0, returnString.length - 1);
}

function trimString(str) {
  str = str.replace(/^\s\s*/, '');
  var ws = /\s/,
      i = str.length;

  while (ws.test(str.charAt(i -= 1))) {/* jshint noempty:false */}
  return str.slice(0, i + 1);
}

function pluckColor(color) {
  if (!getValidValue(color)) {
    return UNDEF;
  }
  color = color.split(COMMA)[0];
  color = color.replace(stripWhitespace, BLANK);
  if (color == BLANK) {
    color = COLOR_BLACK;
  }
  return color.replace(dropHash, HASHSTRING);
}

function getFirstAlpha(alpha) {
  alpha = parseInt(alpha, 10);
  if (isNaN(alpha) || alpha > 100 || alpha < 0) {
    alpha = 100;
  }
  return alpha;
}

function getSentenceCase(name) {
  name = name || BLANK;
  return name.charAt(0).toUpperCase() + name.substr(1);
}

function getCrispValue(position, distance, borderthickness) {
  var normalizer = borderthickness % 2 / 2,
      newposition = mathRound(position + normalizer) - normalizer,
      newdistance = mathRound(position + distance + normalizer) - normalizer - newposition;
  return { position: newposition, distance: newdistance };
}
/**
 * Trims a long string at lightning fast speed of less than an ms!
 *
 * @param {string} str The string to be trimmed.
 * @return {string} The trimmed string
 */
function fastTrim(str) {
  // @TODO: need to verify the speed of this trim. Also why we should not add polyfil of String.trim
  str = str.replace(/^\s\s*/, '');
  var ws = /\s/,
      i = str.length;
  while (ws.test(str.charAt(i -= 1))) {/* empty loop to get the last non-space char */}
  return str.slice(0, i + 1);
}
// helper for deltend
function clean(obj1, obj2) {
  var item;
  // check whether obj2 is an array
  // if array then iterate through it's index
  //* *** MOOTOOLS precution
  if (obj2 instanceof Array) {
    for (item = obj2.length - 1; item >= 0; item -= 1) {
      if (_typeof(obj2[item]) !== 'object') {
        if (obj2[item] === true && obj1 && obj1.splice) {
          obj1.splice(item, 1);
        }
      } else {
        if (objectToStrFn.call(obj2[item]) === objectToStrFn.call(obj1[item])) {
          clean(obj1[item], obj2[item]);
        }
      }
    }
  } else {
    for (item in obj2) {
      if (_typeof(obj2[item]) !== 'object') {
        if (obj2[item] === true && obj1 && obj1.splice) {
          obj1.splice(item, 1);
        }
      } else {
        if (objectToStrFn.call(obj2[item]) === objectToStrFn.call(obj1[item])) {
          clean(obj1[item], obj2[item]);
        }
      }
    }
  }
  return obj1;
}
// special function to perform deleted extend
function deltend(obj1, obj2) {
  // if any of the arguments is not object then return back
  if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' || (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') {
    return null;
  }
  clean(obj1, obj2);
  return obj1;
}

function imprint(obj1, obj2, ignoreNull) {
  var item;

  if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' || obj1 === null) {
    obj1 = obj2;
    return obj2;
  }

  if ((typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object' || obj2 === null) {
    return obj1;
  }

  for (item in obj2) {
    if (obj1[item] === UNDEF || !ignoreNull && obj1[item] === null) {
      obj1[item] = obj2[item];
    }
  }

  return obj1;
}

function getLinkedChartDataJSON(linkedDataId, FCDataObj) {
  var linkedDataJSON = {
    'chart': {}
  },
      index,
      FcJSON = FCDataObj;

  linkedDataId = linkedDataId.toLowerCase();
  if (FcJSON.linkeddata) {
    for (index = 0; index < FcJSON.linkeddata.length; index += 1) {
      if (FcJSON.linkeddata[index].id.toLowerCase() === linkedDataId) {
        linkedDataJSON = FcJSON.linkeddata[index].linkedchart || FcJSON.linkeddata[index].linkedmap;
      }
    }
  }
  return linkedDataJSON;
}

function executeJS(strLink, multipleParams) {
  var dashPos;
  // We remove blank spaces between 'j' and '-' if any
  strLink = strLink.replace(/^j\s*\-/i, 'j-');

  dashPos = strLink.indexOf('-', 2);
  // If no arguments, just call the link
  if (dashPos === -1) {
    limitedEvalParser(strLink.slice(2));
  } else {
    // There could be multiple parameters.
    // We just pass them as a single string to JS method.
    limitedEvalParser(strLink.substr(2, dashPos - 2).replace(/\s/g, BLANK), strLink.slice(dashPos + 1), multipleParams);
  }
}

function pseudoEval(executionString) {
  var
  // Splitting the function and its parameters
  split1 = executionString.split('('),

  // Getting all the parameters of the function
  params = split1.pop().split(')')[0],

  // Separating the parameters.
  param = params.split(','),
      len = param.length,
      i,
      fnStr,
      fn = split1[0];

  fnStr = 'j-' + fn;
  for (i = 0; i < len; i++) {
    // First replacing any blank spaces before the parameter, after the parameter, followed by the quotes.
    fnStr += '-' + param[i].replace(/\s*/, BLANK).replace(/\s*$/, BLANK).replace(/[\'|\"]/g, BLANK);
  }
  executeJS(fnStr, true);
}

function getLinkAction(dataObj) {
  var secureLink = function secureLink(link) {
    return link;
  };

  return function (chart) {
    var chartAttrs = dataObj.chart || dataObj.map || {},
        unescapeLinks = pluckNumber(chartAttrs.unescapelinks, 1),
        clickURLOverridesPlotLinks = pluckNumber(chartAttrs.clickurloverridesplotlinks, 0),
        clickedEntity = this.entity || UNDEF,
        clickedEntityBox = this.entityBox || UNDEF,
        pointLink = getFirstValue(this.link, BLANK),
        chartConfig = chart.config,
        chartLink = chartConfig && chartConfig.link || BLANK,
        strLink = clickURLOverridesPlotLinks ? pluck(chartLink, pointLink) : pluck(pointLink, chartLink),
        originalLink = strLink,
        dashPos,
        frameDetails,
        commaPos,
        linkURL,
        delimiter,
        linkType,
        linkedDataId,
        linkedData,
        alias,
        firstBreak;
    // We continue only if the link is not empty
    if (strLink !== UNDEF) {
      // first we decode the link
      // And we trim the link
      if (unescapeLinks) {
        strLink = win.decodeURIComponent ? win.decodeURIComponent(strLink) : win.unescape(strLink);
      }

      strLink = strLink.replace(/^\s+/, BLANK).replace(/\s+$/, BLANK);

      if (strLink.search(/^[a-z]*\s*[\-\:]\s*/i) !== -1) {
        delimiter = strLink.split(/\s*[\-\:]\s*/)[0].toLowerCase();
        firstBreak = delimiter.length;
      }

      // Now based on what the first character in the link is (N, F, P, S, J)
      // And (NEWCHART, JAVASCRIPT:)
      // we invoke the link.
      _schedular2['default'].addJob(function () {
        var popupWin;
        switch (delimiter) {
          case 'j':
            executeJS(strLink);
            break;

          case 'javascript':
            // remove 'javascript:' prefix and evaluate expression.
            pseudoEval(strLink.replace(/^javascript\s*\:/i, BLANK));
            break;

          case 'n':
            strLink.replace(/^n\s*\-/i, 'n-');
            win.open(secureLink(strLink.slice(2), unescapeLinks));
            break;

          case 'f':
            strLink = strLink.replace(/^f\s*\-/i, 'f-');

            // strLink.slice(dashPos+1) indicates arguments if any
            // strLink.substr(2, dashPos-2) indicates link
            dashPos = strLink.indexOf('-', 2);
            // If no arguments, just call the link
            if (dashPos !== -1) {
              frameDetails = strLink.substr(2, dashPos - 2);
              if (frameDetails && win.frames[frameDetails]) {
                win.frames[frameDetails].location = secureLink(strLink.slice(dashPos + 1), unescapeLinks);
              } else {
                win.open(secureLink(strLink.slice(dashPos + 1), unescapeLinks), frameDetails);
              }
            } else {
              win.open(secureLink(strLink.slice(2), unescapeLinks));
            }
            break;

          case 'p':
            strLink = strLink.replace(/p\s*\-/i, 'p-');
            dashPos = strLink.indexOf('-', 2);
            commaPos = strLink.indexOf(COMMA, 2);
            if (dashPos === -1) {
              dashPos = 1;
            }

            linkURL = secureLink(strLink.slice(dashPos + 1), unescapeLinks);
            popupWin = win.open(linkURL, strLink.substr(2, commaPos - 2), strLink.substr(commaPos + 1, dashPos - commaPos - 1));

            popupWin && popupWin.focus();
            break;

          case 'newchart':
          case 'newmap':
            // Linked chart. if alias found
            if (strLink.charAt(firstBreak) === ':') {
              // find next '-'
              dashPos = strLink.indexOf('-', firstBreak + 1);
              alias = strLink.substring(firstBreak + 1, dashPos);
              firstBreak = dashPos;
            }

            // Find the second dash position
            dashPos = strLink.indexOf('-', firstBreak + 1);

            // Figure out whether the sub-linked chart is xml or url
            linkType = strLink.substring(firstBreak + 1, dashPos).toLowerCase();

            switch (linkType) {
              case 'xmlurl':
              case 'jsonurl':
                linkedData = strLink.substring(dashPos + 1, strLink.length);
                break;
              case 'xml':
              case 'json':
                // Extract linked data identifier
                linkedDataId = strLink.substring(dashPos + 1, strLink.length);
                // Get the data for the linked chart
                linkedData = getLinkedChartDataJSON(linkedDataId, dataObj);
                // If linkedData is empty string, it means
                // data identifier or linked data was not found.
                linkType = 'json';
                break;
            }
            /**
                             * Clicking the data plot of a parent chart opens the linked items associated with it.
                             * `LinkedChartInvoked` event is triggered after the
                             * {@link FusionCharts#event:linkedItemOpened}event.
                             *
                             * A parent chart may have more than one linked chart associated with it.
                             * The child linked charts may have linked charts of their own. Clicking on the data
                             * plot items of any of these child linked charts which have other linked charts
                             * associated with them fires the `linkedChartInvoked` event.
                             *
                             * @event FusionCharts#linkedChartInvoked
                             * @group linked-charts
                             * @private
                             *
                             * @param {string} alias It is the type of the chart invoked.For example, a data plot
                             * item in a column2d chart might invoke another column2d chart or a pie chart.
                             * @param {string} linkType Indicates whether the linked data is in JSON or XML format.
                             * @param {Object} data  Contains the data related to the linkedchart to be opened.
                             */
            chart.fireChartInstanceEvent('linkedChartInvoked', {
              alias: alias,
              linkType: linkType.toUpperCase(),
              data: linkedData,
              clickedEntity: clickedEntity,
              clickedEntityBox: clickedEntityBox
            });
            break;

          default:
            win.location.href = secureLink(strLink, unescapeLinks);
            break;
        }
        /**
                     * FusionCharts  allows you to configure the data plot items to respond to user's click
                     * interaction by specifying the `link` attribute on the data item. You can configure it to
                     * perform various actions on click such as:
                     *
                     * - open an url
                     * - call a JavaScript function
                     * - drill-down to a new chart.
                     *
                     * Other than data-plots, links can be applied to the entire chart using the  attribute
                     * `clickUrl`, on chart external-logo and a number of other  objects.
                     *
                     * @event FusionCharts#linkClicked
                     * @group chart
                     *
                     * @param {string} linkProvided - This will contain the link which contains the newchart-xml-id
                     * of the XML of the linked chart item
                     * @param {string} linkInvoked - This will contain the link which contains the newchart-xml-id
                     * of the XML of the linked chart item
                     * @param {Object} linkAction - Indicates what the link click will do. In case of opening a new
                     * chart it is 'newchart'.
                     */
        chart.fireChartInstanceEvent('linkClicked', {
          linkProvided: originalLink,
          linkInvoked: strLink,
          linkAction: delimiter && delimiter.toLowerCase()
        });
      }, _schedular.priorityList.chartEvents);
    }
  };
}

/**
 * getImageURL determine whether the argument string is an image URL or simply a string
 * and returns an object having two properties image: boolean and string: string
 * if the string begins with "i-" then the string is an URL to image and also if the
 * string starts with "\\i-" it assumes its a string which starts with "i-" and so on
 * if the string starts with "\\\\i-" it return the string starts with "\i-"
 *
 * @param  str The string to image url or a simple string.
 * @return Object containing the boolean value image and string containing string.
 */
function getImageURL(str) {
  var strObj = {
    image: false
  };
  if (str !== UNDEF) {
    // Remove the white space at the beginning and end of the string.
    str = str.replace(/^\s+/, BLANK).replace(/\s+$/, BLANK);
    // Check whether the string start with "i-"
    if (/^i\s*[\-]\s*/i.test(str)) {
      // Remove "i-" at the beginning of the string and make image as true
      strObj.image = true;
      strObj.string = str.replace(/^i\s*[\-]\s*/i, BLANK);
    } else {
      // Remove single "\" at the beginning
      strObj.string = str.replace(/^\\/, BLANK);
    }
  }
  return strObj;
}

// GRAPHICS FUNCTION
function getAlpha(alpha, multiplyer) {
  alpha = Number(alpha);
  alpha = isNaN(alpha) ? 100 : alpha;
  if (multiplyer !== UNDEF) {
    alpha = alpha * multiplyer / 100;
  }
  return alpha % 101;
}

function getPointColor(color, alpha) {
  var colorObj, innerColor, outerColor;

  color = getFirstColor(color);
  alpha = getFirstAlpha(alpha);
  innerColor = getLightColor(color, 70);
  outerColor = getDarkColor(color, 50);
  colorObj = {
    FCcolor: {
      gradientUnits: 'objectBoundingBox',
      cx: 0.4,
      cy: 0.4,
      r: '100%',
      color: innerColor + COMMASTRING + outerColor,
      alpha: alpha + COMMASTRING + alpha,
      ratio: BGRATIOSTRING,
      radialGradient: true
    }
  };

  return colorObj;
}

function parseAlpha(alpha, length, multiplyer) {
  var alphaArr = alpha.split(COMMA),
      x;
  if (multiplyer !== UNDEF) {
    multiplyer = pluckNumber(multiplyer.split(COMMA)[0]);
  }
  alphaArr[0] = getAlpha(alphaArr[0], multiplyer);
  for (x = 1; x < length; x += 1) {
    alphaArr[x] = alphaArr[0] * getAlpha(alphaArr[x], multiplyer) / 100;
  }
  return alphaArr.join(COMMA);
}

// reduce gradient color take only first color
// converts color to compatable color format
//* *** rgba must be rgbs(r,g,b,a) format
/** @todo have to optimize
 Deprecated and may need reduction of logic. */
function convertColor(color, alpha, rgba) {
  var R = 0,
      G = 0,
      B = 0,
      colorStr,
      tempArr;

  if (rgba && rgba.match(startsRGBA)) {
    tempArr = rgba.split(COMMA);
    R = tempArr[0].slice(tempArr[0].indexOf('(') + 1);
    G = tempArr[1];
    B = tempArr[2];
    if (!alpha && alpha !== 0) {
      alpha = parseInt(tempArr[3].slice(0, tempArr[3].indexOf(')')) * 100, 10);
    }
  }
  if (color) {
    if (color.match(startsRGBA)) {
      tempArr = color.split(COMMA);
      R = tempArr[0].slice(tempArr[0].indexOf('(') + 1);
      G = tempArr[1];
      B = tempArr[2];
    } else {
      colorStr = color.replace(cleanColorCode, BLANK).split(COMMA)[0];
      switch (colorStr.length) {
        case 3:
          colorStr = colorStr.charAt(0) + colorStr.charAt(0) + colorStr.charAt(1) + colorStr.charAt(1) + colorStr.charAt(2) + colorStr.charAt(2);
          break;
        case 6:
          break;
        default:
          colorStr = (colorStr + COLOR_WHITE).slice(0, 6);
          break;
      }
      R = parseInt(colorStr.slice(0, 2), 16);
      G = parseInt(colorStr.slice(2, 4), 16);
      B = parseInt(colorStr.slice(4, 6), 16);
    }
  }

  if (!alpha && alpha !== 0) {
    alpha = 100;
  }
  if (typeof alpha === 'string') {
    alpha = alpha.split(COMMA)[0];
  }
  alpha = parseInt(alpha, 10) / 100;
  return 'rgba(' + R + COMMA + G + COMMA + B + COMMA + alpha + ')';
}

/**
 * hexToRgb method convert one hexColor string to HSB color
 * values.And return the value in an array, where the index value
 * containes Hue, saturaion and Brightness value of the provided
 * HexColor respectively.
 *
 * @param  sourceColor The hexadecimal Color string value.
 * @return  Array The HSB color values in respective order.
 */
function hexToRgb(sourceColor) {
  var sourceClrRGB = parseInt(sourceColor, 16),
      r = Math.floor(sourceClrRGB / 65536),
      g = Math.floor((sourceClrRGB - r * 65536) / 256),
      b = Math.floor(sourceClrRGB - r * 65536 - g * 256);

  return [r, g, b];
}

// Returns a color code including # before it
function parseColor(color) {
  return color.replace(cleanColorCode, BLANK).replace(dropHash, HASHSTRING);
}

// Returns a valid color or UNDEF
function getValidColor(color) {
  return validhexcolor.test(parseColor(color)) && color;
}

function getCubePathOutline(cubePathComand) {
  var w = cubePathComand[2] || 0,
      zw = cubePathComand[4] || 0,
      zh = cubePathComand[5] || 0;

  return [M, cubePathComand[0] || 0, cubePathComand[1] || 0, l, zw, -zh, w, 0, 0, cubePathComand[3] || 0, -zw, zh, -w, 0, Z];
}
/**
 * HSBtoRGB methods takes an array of HSB color values and convert them
 * RGB color values and return an array conatining the Red,Green and
 * Blue color value of the provided HSB color.
 *
 * @param   hsb Array The array of Hue,Saturation and Brightness property
 * of a color.
 *
 * @return  Array The Array of RGB color value of the specified color.
 */
function HSBtoRGB(hsb) {
  var h = hsb[0],
      s = hsb[1],
      v = hsb[2],
      r = 0,
      g = 0,
      b = 0,
      rgb = [],
      tempS = s / 100,
      tempV = v / 100,
      hi = Math.floor(h / 60) % 6,
      f = h / 60 - Math.floor(h / 60),
      p = tempV * (1 - tempS),
      q = tempV * (1 - f * tempS),
      t = tempV * (1 - (1 - f) * tempS);

  switch (hi) {
    case 0:
      r = tempV;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = tempV;
      b = p;
      break;
    case 2:
      r = p;
      g = tempV;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = tempV;
      break;
    case 4:
      r = t;
      g = p;
      b = tempV;
      break;
    case 5:
      r = tempV;
      g = p;
      b = q;
      break;
  }

  rgb = [mathRound(r * 255), mathRound(g * 255), mathRound(b * 255)];
  return rgb;
}

/**
 * RGBtoHSB methods takes an array of RGB color values and convert them
 * HSB color values and return an array conatining the Hue,Saturation and
 * Brightness of the specified RGB color.
 *
 * @param   rgb Array The array of RGB color values respective.The 0 index contains
 * Red color value, 1 index contains the Green color value and the
 * 2nd or the last index conatins the blue color value.
 *
 * @return  Array Color value array containing the Hue, Saturation and brightness of
 * The provided Color.
 */
function RGBtoHSB(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      max = Math.max(Math.max(r, g), b),
      min = Math.min(Math.min(r, g), b),
      hue = 0,
      saturation = 0;

  // get Hue
  if (max == min) {
    hue = 0;
  } else if (max == r) {
    hue = (60 * (g - b) / (max - min) + 360) % 360;
  } else if (max == g) {
    hue = 60 * (b - r) / (max - min) + 120;
  } else if (max == b) {
    hue = 60 * (r - g) / (max - min) + 240;
  }

  // get Saturation
  if (max === 0) {
    saturation = 0;
  } else {
    saturation = (max - min) / max;
  }

  return [mathRound(hue), mathRound(saturation * 100), mathRound(max / 255 * 100)];
}

/**
 * RGBtoHex methods takes an array of RGB color values and convert them to
 * a hexadecimal color value.And return the string.
 *
 * @param   rgb Array The array of RGB color values respective.The 0 index contains
 * Red color value, 1 index contains the Green color value and the
 * 2nd or the last index conatins the blue color value.
 *
 * @return  String The hexadecimal color string of the provided RGB value.
 */
function RGBtoHex(rgb) {
  return (COLOR_BLACK + (rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16)).slice(-6);
}

/**
 * RGBtoHex methods takes a string of RGB / RGBA color values and convert them to
 * a hexadecimal color value.And return the string.
 *
 * @param  rawRgb string of RGB / RGBA color values
 *
 * @return  String The hexadecimal color string of the provided RGB value.
 */
function rawRGBtoHEX(rawRgb) {
  var arr = rawRgb.match(/[\d+]+/g),
      rgb;

  rgb = arr.splice(0, 3);
  return (COLOR_BLACK + (rgb[0] << 16 | rgb[1] << 8 | rgb[2]).toString(16)).slice(-6);
}

// map FusionCharts anchor sides to HC anchor symbol
// anchorside > 4 will show the down triangle
function mapSymbolName(num, isSpoke) {
  var x = symbolStr.circle;
  num = parsePointValue(num);
  if (num >= 3) {
    x = (isSpoke ? symbolStr.spoke : symbolStr.poly) + num;
  }
  return x;
}

// helper fnction for draw3Drect
function getAngle(width, height, type) {
  var angle = Math.atan(height / width) * 180 / Math.PI;
  if (type == 2) {
    angle = 180 - angle;
  } else if (type == 3) {
    angle += 180;
  } else if (type == 4) {
    angle = 360 - angle;
  }
  return angle;
}

/** @todo send the color and alpha as rray so that they don't need split */
// this function create the column color depending upon the configuration
function getColumnColor(setColor, setAlpha, ratio, angle, isRoundEdges, bdColor, bdAlpha, isBar, is3D) {
  var bgColor, borderColor, colorArr, alphaArr, bdColorArr, color, alpha, bdAlphaArr;
  colorArr = setColor.split(COMMA);
  alphaArr = setAlpha.split(COMMA);
  bdColorArr = bdColor.split(COMMA);
  bdAlphaArr = bdAlpha.split(COMMA);
  // remove extra comma if there at the end.
  setColor = setColor.replace(/\s/g, BLANK).replace(/\,$/, BLANK);
  if (is3D) {
    bgColor = {
      FCcolor: {
        color: colorArr[0],
        alpha: alphaArr[0]
      }
    };
  } else if (isRoundEdges) {
    color = colorArr[0];
    alpha = alphaArr[0];
    bgColor = {
      FCcolor: {
        // [ColorExt.getDarkColor(this.color, 0.75),
        // ColorExt.getLightColor(this.color, 0.25),
        // ColorExt.getDarkColor(this.color, 0.8),
        // ColorExt.getLightColor(this.color, 0.65),
        // ColorExt.getDarkColor(this.color, 0.8)]
        color: getDarkColor(color, 75) + COMMA + getLightColor(color, 10) + COMMA + getDarkColor(color, 90) + COMMA + getLightColor(color, 55) + COMMA + getDarkColor(color, 80),
        alpha: alpha + COMMA + alpha + COMMA + alpha + COMMA + alpha + COMMA + alpha,
        ratio: '0,11,14,57,18',
        angle: isBar ? '90' : '0'
      }
    };
    bdColorArr = [getDarkColor(color, 70)];
  } else {
    setAlpha = parseAlpha(setAlpha, colorArr.length);
    bgColor = {
      FCcolor: {
        color: setColor,
        alpha: setAlpha,
        ratio: ratio,
        angle: isBar ? -angle : angle
      }
    };
  }
  borderColor = {
    FCcolor: {
      color: bdColorArr[0],
      alpha: bdAlphaArr[0]
    }
  };

  return [bgColor, borderColor];
}

function toPrecision(obj, value) {
  var tenPow = mathPow(10, value);
  return mathRound(obj * tenPow) / tenPow;
}

// Function to convert FC dash style to HC dash style
function getDashStyle(len, gap, apply) {
  return apply || apply === UNDEF ? [len, gap] : DASH_DEF;
}

/**
 * Sets the line height of a style object based upon its font-size. The present method does not touch DOM and
 * hence not accurate.
 *
 * @param {Object} styleObj
 * @param {number=} [baseFontSize]
 * @return {string} The line height calculated from the style object.
 */
function setLineHeight(styleObj, baseFontSize) {
  if ((typeof styleObj === 'undefined' ? 'undefined' : _typeof(styleObj)) !== 'object') {
    return BLANK;
  }

  // When the font size is specified recalculate line height
  if (styleObj.fontSize || styleObj['font-size']) {
    // Detect line height from font-size
    if (!styleObj.fontSize && styleObj['font-size']) {
      styleObj.fontSize = styleObj['font-size'];
      delete styleObj['font-size'];
    }
    styleObj.lineHeight = (parseFloat(styleObj.fontSize) || baseFontSize || 10) * getLineHeightFactor() + 'px';

    // Delete hyphen notation line height
    delete styleObj['line-height'];
  }
  // In case the hyphen notation is used, move it to camelCase notation
  if (!styleObj.lineHeight && styleObj['line-height']) {
    styleObj.lineHeight = styleObj['line-height'];
    delete styleObj['line-height'];
  }

  return styleObj.lineHeight;
}

function parsexAxisStyles(data, catObj, FCChartObj, style, dataColor) {
  // data label border color
  var fontBdrColor = getFirstValue(data.labelbordercolor, catObj.bordercolor, FCChartObj.labelbordercolor, BLANK),
      bgColor = pluck(data.labelbgcolor, catObj.bgcolor, FCChartObj.labelbgcolor),
      borderThickness = pluckNumber(data.labelborderthickness, catObj.borderthickness, FCChartObj.labelborderthickness, 1),
      defColor = pluckNumber(FCChartObj.usedataplotcolorforlabels, 0) ? dataColor || style.color : style.color,
      styleObj;

  fontBdrColor = fontBdrColor ? convertColor(fontBdrColor, pluckNumber(data.labelborderalpha, catObj.borderalpha, FCChartObj.labelborderalpha, data.labelalpha, catObj.alpha, FCChartObj.labelalpha, 100)) : BLANK;

  styleObj = {
    fontFamily: pluck(data.labelfont, catObj.font, FCChartObj.labelfont, style.fontFamily),
    fontSize: pluck(data.labelfontsize, catObj.fontsize, FCChartObj.labelfontsize, parseInt(style.fontSize, 10)) + PXSTRING,
    color: convertColor(pluck(data.labelfontcolor, catObj.fontcolor, FCChartObj.labelfontcolor, defColor), pluckNumber(data.labelfontalpha, catObj.fontalpha, FCChartObj.labelfontalpha, data.labelalpha, catObj.alpha, FCChartObj.labelalpha, 100)),
    fontWeight: pluckNumber(data.labelfontbold, catObj.fontbold, FCChartObj.labelfontbold) ? 'bold' : 'normal',
    fontStyle: pluckNumber(data.labelfontitalic, catObj.fontitalic, FCChartObj.labelfontitalic) ? 'italic' : 'normal',
    // Set border as empty string when not required,
    // since IE will stop js execution if it is UNDEF or null.
    border: fontBdrColor || bgColor ? borderThickness + 'px solid' : BLANK,
    borderColor: fontBdrColor,
    borderThickness: borderThickness,
    borderPadding: pluckNumber(data.labelborderpadding, catObj.borderpadding, FCChartObj.labelborderpadding, 2),
    borderRadius: pluckNumber(data.labelborderradius, catObj.borderradius, FCChartObj.labelborderradius, 0),
    backgroundColor: bgColor ? convertColor(bgColor, pluckNumber(data.labelbgalpha, catObj.bgalpha, FCChartObj.labelbgalpha, data.labelalpha, catObj.alpha, FCChartObj.labelalpha, 100)) : BLANK,
    borderDash: pluckNumber(data.labelborderdashed, catObj.borderdashed, FCChartObj.labelborderdashed, 0) ? getDashStyle(pluckNumber(data.labelborderdashlen, catObj.borderdashlen, FCChartObj.labelborderdashlen, 4), pluckNumber(data.labelborderdashgap, catObj.borderdashgap, FCChartObj.labelborderdashgap, 2)) : DASH_DEF
  };

  // set the line height
  styleObj.lineHeight = setLineHeight(styleObj);

  return styleObj;
}

/**
 * BG Image align attribute managing function
 */
function setImageDisplayMode(bgImageDisplayMode, bgImageVAlign, bgImageHAlign, bgImageScale, chartBorderWidth, chartWidth, chartHeight, imageEle) {
  var imageWidth = imageEle.width * (bgImageScale / 100),
      imageHeight = imageEle.height * (bgImageScale / 100),
      alignImage = {},
      imgAspectRatio,
      cAspectRatio,
      scaleFactor,
      xCount,
      yCount,

  // Consider the borderthickness and find out chart width and height
  cWidth = chartWidth - chartBorderWidth * 2,
      cHeight = chartHeight - chartBorderWidth * 2,
      alignObj,

  // Function to align the image
  // returns x y position of the image
  getImageAlignment = function getImageAlignment(bgImageVAlign, bgImageHAlign, imageWidth, imageHeight, chartWidth, chartHeight) {
    var alignObj = {};
    switch (bgImageVAlign) {
      case 'top':
        alignObj.y = chartBorderWidth;
        break;
      case 'bottom':
        alignObj.y = chartHeight - imageHeight - chartBorderWidth;
        break;
      case 'middle':
        alignObj.y = (chartHeight - imageHeight) / 2;
        break;
    }

    switch (bgImageHAlign) {
      case 'left':
        alignObj.x = chartBorderWidth;
        break;
      case 'right':
        alignObj.x = chartWidth - imageWidth - chartBorderWidth;
        break;
      case 'middle':
        alignObj.x = (chartWidth - imageWidth) / 2;
        break;
    }
    return alignObj;
  };

  switch (bgImageDisplayMode) {
    case 'center':
      alignImage.width = imageWidth;
      alignImage.height = imageHeight;
      alignImage.y = chartHeight / 2 - imageHeight / 2;
      alignImage.x = chartWidth / 2 - imageWidth / 2;
      break;

    case 'stretch':
      // Stretch Display Mode
      alignImage.width = chartWidth - chartBorderWidth * 2;
      alignImage.height = chartHeight - chartBorderWidth * 2;
      alignImage.y = chartBorderWidth;
      alignImage.x = chartBorderWidth;
      break;

    case 'tile':
      // Tile Display Mode
      alignImage.width = imageWidth;
      alignImage.height = imageHeight;
      alignImage.tileInfo = {};
      alignImage.tileInfo.xCount = xCount = Math.ceil(cWidth / imageWidth);
      alignImage.tileInfo.yCount = yCount = Math.ceil(cHeight / imageHeight);

      alignObj = getImageAlignment(bgImageVAlign, bgImageHAlign, imageWidth * xCount, imageHeight * yCount, chartWidth, chartHeight);

      alignImage.y = alignObj.y;
      alignImage.x = alignObj.x;
      break;

    case 'fit':
      // Fit Display Mode

      // Original image's aspect ratio.
      imgAspectRatio = imageWidth / imageHeight;
      // Chart's background aspect ratio
      cAspectRatio = cWidth / cHeight;
      scaleFactor = imgAspectRatio > cAspectRatio ? cWidth / imageWidth : cHeight / imageHeight;

      alignImage.width = imageWidth * scaleFactor;
      alignImage.height = imageHeight * scaleFactor;

      alignObj = getImageAlignment(bgImageVAlign, bgImageHAlign, alignImage.width, alignImage.height, chartWidth, chartHeight);

      alignImage.y = alignObj.y;
      alignImage.x = alignObj.x;
      break;

    case 'fill':
      // Fill Display Mode

      // Original image's aspect ratio.
      imgAspectRatio = imageWidth / imageHeight;
      // Chart's background aspect ratio
      cAspectRatio = cWidth / cHeight;
      // Find out scale factor
      scaleFactor = imgAspectRatio > cAspectRatio ? cHeight / imageHeight : cWidth / imageWidth;

      alignImage.width = imageWidth * scaleFactor;
      alignImage.height = imageHeight * scaleFactor;

      alignObj = getImageAlignment(bgImageVAlign, bgImageHAlign, alignImage.width, alignImage.height, chartWidth, chartHeight);

      alignImage.y = alignObj.y;
      alignImage.x = alignObj.x;

      break;

    default:
      // None
      // In none mode image only need alignment.
      alignObj = getImageAlignment(bgImageVAlign, bgImageHAlign, imageWidth, imageHeight, chartWidth, chartHeight);

      alignImage.width = imageWidth;
      alignImage.height = imageHeight;
      alignImage.y = alignObj.y;
      alignImage.x = alignObj.x;
  }

  return alignImage;
}

/** *************  Image Export Function Start  ******************/

/** *************  Image Export Function End  ********************/

function componentDispose() {
  var fcObj = this,
      childComponents,
      item,
      itemName,
      length,
      i,
      graphicComponents,
      graphicObj,
      graphics,
      group,
      groupEle,
      followerEle,
      nthItem;

  // childGraphics;
  if (fcObj && fcObj !== win) {
    // solve circular component chain
    fcObj.disposing = true;

    // delete the child compenents
    childComponents = fcObj.components;
    // if componenet exist dispose them first
    if (childComponents) {
      for (itemName in childComponents) {
        item = childComponents[itemName];
        // if component is an array, dispose all array elements
        if (item instanceof Array) {
          length = item.length;
          for (i = 0; i < length; i++) {
            nthItem = item[i];
            if (nthItem && !fcObj.disposing) {
              if (nthItem.dispose) {
                nthItem.dispose();
              } else {
                componentDispose.call(nthItem);
              }
            }
          }
        } else {
          if (item && !item.disposing) {
            if (item.dispose) {
              item.dispose();
            } else {
              componentDispose.call(item);
            }
          }
        }
      }
    }

    // temp code
    graphicComponents = fcObj.graphics;
    for (graphics in graphicComponents) {
      graphicObj = graphicComponents[graphics];
      if (graphicObj) {
        if (graphicObj.hide) {
          graphicObj.hide();
          if (graphicObj.followers && graphicObj.followers[0]) {
            followerEle = graphicObj.followers[0].el;
            followerEle && followerEle.hide && followerEle.hide();
          }
        } else {
          for (group in graphicObj) {
            groupEle = graphicObj[group];
            groupEle.hide && groupEle.hide();
          }
        }
      }
    }

    // delete the reamaining things
    for (itemName in fcObj) {
      delete fcObj[itemName];
    }
  }
}

function componentSortFn(a, b) {
  return (a.pIndex || 0) - (b.pIndex || 0);
}

function componentConfigurer(parent) {
  var components,
      component,
      tempComponentArr = [],
      i,
      l,
      key,
      customConfigFn,
      executedCustomConfigList = {};
  parent = parent || this;
  components = parent.components;
  // create a temp array of components to make a ordered list
  for (key in components) {
    component = components[key];
    // It is an array of component
    if (component instanceof Array) {
      l = component.length;
      for (i = 0; i < l; i += 1) {
        tempComponentArr.push(component[i]);
      }
    } else {
      tempComponentArr.push(component);
    }
  }
  // sort teh temp array as per priority / order
  tempComponentArr.sort(componentSortFn);
  // configure components as per their order
  l = tempComponentArr.length;
  for (i = 0; i < l; i += 1) {
    component = tempComponentArr[i];
    customConfigFn = component.customConfigFn;
    // todo - remove this check.
    if (customConfigFn === null) {
      continue;
    }
    if (customConfigFn && parent[customConfigFn]) {
      if (!executedCustomConfigList[customConfigFn]) {
        parent[customConfigFn]();
        executedCustomConfigList[customConfigFn] = true;
      }
    } else if (component.configure) {
      component.configure();
    }
  }
}

function isInterActiveEvt(name) {
  return !!interActiveEvtList[name];
}

function addInterActiveEvtName(name) {
  if (name && name.toLowerCase) {
    interActiveEvtList[name.toLowerCase()] = true;
  }
}

function comparatorAsc(a, b) {
  return a - b;
}

function comparatorDesc(a, b) {
  return b - a;
}

function getComparatorFN(isASC, key) {
  if (isASC) {
    return key ? function (a, b) {
      return a[key] - b[key];
    } : comparatorAsc;
  } else {
    return key ? function (a, b) {
      return b[key] - a[key];
    } : comparatorDesc;
  }
}

lib.lineHeightFactor = 1.2;
/**
 * Sets the internal line-height calculation factor
 * @param {number} factor
 * @memberOf FusionCharts~
 * @private
 */
function setLineHeightFactor(factor) {
  factor = toFloat(factor);

  if (!factor || factor < 0) {
    return;
  }
  lib.lineHeightFactor = factor;
}

function getLineHeightFactor() {
  return lib.lineHeightFactor;
}

/*
 * Utility method that sorts an object array and keeping the order of equal items.
 * ECMA script standard does not specify the behavior when items are equal.
 */
function stableSort(arr, sortFunction) {
  var length = arr.length,
      i;

  // Add index to each item
  for (i = 0; i < length; i++) {
    arr[i].ssI = i; // stable sort index
  }

  arr.sort(function (a, b) {
    var sortValue = sortFunction(a, b);
    return sortValue === 0 ? a.ssI - b.ssI : sortValue;
  });

  // Remove index from items
  for (i = 0; i < length; i++) {
    delete arr[i].ssI; // stable sort index
  }
}

function setVCanvas(iapi, datasetObj, datasetJSON) {
  var conf,
      parentYAxis,
      vCanvasArr = iapi.components.canvas.components.vCanvasArr;

  conf = datasetObj.config;
  if (iapi.isDual) {
    conf.parentYAxis = parentYAxis = pluck(datasetJSON.parentyaxis && datasetJSON.parentyaxis.toLowerCase(), 'p') === 's' ? 1 : 0;
  } else {
    conf.parentYAxis = parentYAxis = 0;
  }
  datasetObj.attachVcanvas(vCanvasArr[parentYAxis]);
  // datasetObj.setLinkedItem('vcanvas', vCanvasArr[parentYAxis]);
  // datasetObj.listenToVcanvas && datasetObj.listenToVcanvas();
  // conf.virtualCanvas = vCanvasArr[parentYAxis];

  // if (storeDS) {
  //   vCanvasArr[parentYAxis].addDataset(datasetObj);
  // }
}

function getSuggestiveRotation() {
  var arg, angle, x, y;

  arg = arguments[0];
  if (arguments.length === 1) {
    angle = arg.angle;
    x = arg.x;
    y = arg.y;
  } else {
    angle = arg;
    x = arguments[1];
    y = arguments[2];
  }

  angle = angle || 0;

  return RStr + angle + COMMA + x + COMMA + y;
}
/**
 * This method creates / update existing all childs of given type
 * If existing no of components are higher than what required now, then it will remove the extra components
 * Similarly will create new instance if required extra
 * @param { component } parent The parent on which these children will be created
 * @param  { Class } ChildClass The class definition of the child that will be created
 * @param  { string } childType type name by which the children will be attached to the parent
 * @param  { number } [count=1] How many children needs to be created
 * @param  { Array } [configArr=undefined] Array of configration objects of all these children
 */
var componentFactory = function componentFactory(parent, ChildClass, childType) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var configArr = arguments[4];

  if (parent && ChildClass && childType) {
    var typedChildren = parent.getChildren(childType) || [],
        i = void 0,
        ll = void 0,
        childInstance = void 0;
    for (i = 0; i < count; i += 1) {
      // Update existing one if availabel elese create new one
      if (typedChildren && typedChildren[i] && !typedChildren[i].getState('removed')) {
        childInstance = typedChildren[i];
      } else {
        childInstance = new ChildClass();
        parent.attachChild(childInstance, childType);
      }
      if (configArr && configArr.length > i && childInstance.configure) {
        childInstance.configure(configArr[i]);
      }
    }
    // Remove all extra components
    ll = typedChildren && typedChildren.length;
    if (i < ll) {
      for (; i < ll; i += 1) {
        typedChildren[i] && typedChildren[i].remove && typedChildren[i].remove();
      }
    }
  }
},

/**
 * This method creates / update existing all datasets of given type
 * If existing no of components are higher than what required now, then it will remove the extra components
 * Similarly will create new instance if required extra
 * @param { component } parent The parent on which these datasets will be created
 * @param  { Class } DataSetClass The class definition of the dataset that will be created
 * @param  { string } dataSetType type name by which the datasets will be attached to the parent
 * @param  { number } [count=1] How many datasets needs to be created
 * @param  { Array } [configArr=undefined] Array of configration objects of all these datasets
 * @param  { Array } [indices=[]] Array of indices for all datasets
 */
datasetFactory = function datasetFactory(parent, DataSetClass, dataSetType) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var configArr = arguments[4];
  var indices = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (parent && DataSetClass && dataSetType) {
    var typedDataset = parent.getChildren(dataSetType) || [],
        i = void 0,
        ll = void 0,
        dsInstance = void 0;
    for (i = 0; i < count; i += 1) {
      // Update existing one if availabel elese create new one
      if (typedDataset && typedDataset[i] && !typedDataset[i].getState('removed')) {
        dsInstance = typedDataset[i];
      } else {
        dsInstance = new DataSetClass();
        parent.attachChild(dsInstance, dataSetType);
      }
      dsInstance.config._childIndex = i;
      dsInstance.setState('_total', count);
      dsInstance.setJSONIndex && dsInstance.setJSONIndex(indices[i] || i);
      if (configArr && configArr.length > i && dsInstance.configure) {
        dsInstance.configure(configArr[i]);
      }
    }
    // Remove all extra datasets
    ll = typedDataset && typedDataset.length;
    if (i < ll) {
      for (; i < ll; i += 1) {
        typedDataset[i] && typedDataset[i].remove && typedDataset[i].remove();
      }
    }
  }
};

exports.setVCanvas = setVCanvas;
exports.isInterActiveEvt = isInterActiveEvt;
exports.addInterActiveEvtName = addInterActiveEvtName;
exports.getEmptyConstractor = getEmptyConstractor;
exports.setLineHeightFactor = setLineHeightFactor;
exports.getLineHeightFactor = getLineHeightFactor;
exports.BLANKSTRINGPLACEHOLDER = BLANKSTRINGPLACEHOLDER;
exports.UNDEF = UNDEF;
exports.UNDERSCORE = UNDERSCORE;
exports.BLANKSTRING = BLANKSTRING;
exports.COLOR_BLACK = COLOR_BLACK;
exports.COLOR_GLASS = COLOR_GLASS;
exports.COLOR_WHITE = COLOR_WHITE;
exports.COLOR_TRANSPARENT = COLOR_TRANSPARENT;
exports.HASHSTRING = HASHSTRING;
exports.BREAKSTRING = BREAKSTRING;
exports.STRINGSTRING = STRINGSTRING;
exports.OBJECTSTRING = OBJECTSTRING;
exports.COMMASTRING = COMMASTRING;
exports.ZEROSTRING = ZEROSTRING;
exports.SAMPLESTRING = SAMPLESTRING;
exports.TESTSTR = TESTSTR;
exports.ONESTRING = ONESTRING;
exports.DECIMALSTRING = DECIMALSTRING;
exports.STRINGUNDEFINED = STRINGUNDEFINED;
exports.POSITION_TOP = POSITION_TOP;
exports.POSITION_RIGHT = POSITION_RIGHT;
exports.POSITION_BOTTOM = POSITION_BOTTOM;
exports.POSITION_LEFT = POSITION_LEFT;
exports.POSITION_CENTER = POSITION_CENTER;
exports.POSITION_MIDDLE = POSITION_MIDDLE;
exports.POSITION_START = POSITION_START;
exports.POSITION_END = POSITION_END;
exports.FC_CONFIG_STRING = FC_CONFIG_STRING;
exports.SHAPE_RECT = SHAPE_RECT;
exports.HUNDREDSTRING = HUNDREDSTRING;
exports.PXSTRING = PXSTRING;
exports.COMMASPACE = COMMASPACE;
exports.TEXTANCHOR = TEXTANCHOR;
exports.hiddenStr = hiddenStr;
exports.visibleStr = visibleStr;
exports.TOUCH_THRESHOLD_PIXELS = TOUCH_THRESHOLD_PIXELS;
exports.CLICK_THRESHOLD_PIXELS = CLICK_THRESHOLD_PIXELS;
exports.regex = regex;
exports.plotEventHandler = plotEventHandler;
exports.getEventCoordinate = getEventCoordinate;
exports.getMouseCoordinate = getMouseCoordinate;
exports.getTouchEvent = getTouchEvent;
exports.extend2 = _raphael2['default'];
exports.deltend = deltend;
exports.imprint = imprint;
exports.pluck = pluck;
exports.pluckNumber = pluckNumber;
exports.getFirstDefinedValue = getFirstDefinedValue;
exports.createElement = createElement;
exports.hashify = hashify;
exports.dehashify = dehashify;
exports.getComparatorFN = getComparatorFN;
exports.pluckFontSize = pluckFontSize;
exports.getValidValue = getValidValue;
exports.getPosition = getPosition;
exports.getViewPortDimension = getViewPortDimension;
exports.bindSelectionEvent = bindSelectionEvent;
exports.fcEach = fcEach;
exports.getDefinedColor = getDefinedColor;
exports.getFirstValue = getFirstValue;
exports.getFirstColor = getFirstColor;
exports.getColorCodeString = getColorCodeString;
exports.pluckColor = pluckColor;
exports.clampNumber = clampNumber;
exports.toRaphaelColor = toRaphaelColor;
exports.rgbaToHex = rgbaToHex;
exports.gradientify = gradientify;
exports.fastTrim = fastTrim;
exports.getFirstAlpha = getFirstAlpha;
exports.parsePointValue = parsePointValue;
exports.parseUnsafeString = parseUnsafeString;
exports.parseTooltext = parseTooltext;
exports.toPrecision = toPrecision;
exports.hasTouch = hasTouch;
exports.CREDIT_HREF = CREDIT_HREF;
exports.CREDIT_STRING = CREDIT_STRING;
exports.getSentenceCase = getSentenceCase;
exports.regescape = regescape;
exports.regReplaceEscape = regReplaceEscape;
exports.getImageURL = getImageURL;
exports.isArray = isArray;
exports.getCrispValue = getCrispValue;
exports.getCripValues = getCrispValue;
exports.preDefStr = preDefStr;
exports.stubFN = EMPTYFN;
exports.stableSort = stableSort;
exports.hasSVG = hasSVG;
exports.CREDIT_REGEX = CREDIT_REGEX;
exports.isIE = isIE;
exports.lineHeightFactor = lineHeightFactor;
exports.getLinkAction = getLinkAction;
exports.setImageDisplayMode = setImageDisplayMode;
exports.setLineHeight = setLineHeight;
exports.parsexAxisStyles = parsexAxisStyles;
exports.supportedStyle = supportedStyle;
exports.getAxisLimits = getAxisLimits;
exports.createTrendLine = createTrendLine;
exports.getDashStyle = getDashStyle;
exports.axisLabelAdder = axisLabelAdder;
exports.chartAPI = chartAPI;
exports.createDialog = createDialog;
exports.componentDispose = componentDispose;
exports.componentConfigurer = componentConfigurer;
exports.executeJS = executeJS;
exports.pseudoEval = pseudoEval;
exports.convertColor = convertColor;
exports.graphics = graphics;
exports.appliedCSS = appliedCSS;
exports.getContainerBackgroundColor = getContainerBackgroundColor;
exports.handleContainerResize = handleContainerResize;
exports.capitalizeString = capitalizeString;
exports.TRACKER_FILL = TRACKER_FILL;
exports.chartPaletteStr = chartPaletteStr;
exports.DASH_DEF = DASH_DEF;
exports.attrTypeNum = attrTypeNum;
exports.canvasBGAlphaStr = canvasBGAlphaStr;
exports.attrTypeBool = attrTypeBool;
exports.pInt = pInt;
exports.defined = defined;
exports.canvasBorderColorStr = canvasBorderColorStr;
exports.attribDefs = _libAttr.attribDefs;
exports.parseConfiguration = _libAttr.parseConfiguration;
exports.setAttribDefs = _libAttr.setAttribDefs;
exports.hasAttribDefs = _libAttr.hasAttribDefs;
exports.crispBound = crispBound;
exports.defaultGaugePaletteOptions = defaultGaugePaletteOptions;
exports.MathExt = MathExt;
exports.xssEncode = xssEncode;
exports.animHelperFN = animHelperFN;
exports.mathAbs = mathAbs;
exports.mathRound = mathRound;
exports.NORMAL = NORMAL;
exports.BOLD = BOLD;
exports.HAND = HAND;
exports.POINTER = POINTER;
exports.BLANK = BLANK;
exports.ROUND = ROUND;
exports.configStr = configStr;
exports.animationObjStr = animationObjStr;
exports.COMMA = COMMA;
exports.TILE = TILE;
exports.FILL = FILL;
exports.FIT = FIT;
exports.MOUSEOUT = MOUSEOUT;
exports.MOUSEMOVE = MOUSEMOVE;
exports.touchEnabled = touchEnabled;
exports.VISIBLE = VISIBLE;
exports.BGRATIOSTRING = BGRATIOSTRING;
exports.dropHash = dropHash;
exports.componentFactory = componentFactory;
exports.datasetFactory = datasetFactory;
exports.trimString = trimString;
exports.PROJECT_VERSION = PROJECT_VERSION;
exports.safeMax = safeMax;
exports.safeMin = safeMin;
exports.normalizeAngle = normalizeAngle;
exports.extent = extent;
exports.getSuggestiveRotation = getSuggestiveRotation;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(14);
var $export = __webpack_require__(29);
var redefine = __webpack_require__(32);
var hide = __webpack_require__(2);
var has = __webpack_require__(1);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(50);
var setToStringTag = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(57);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(15);
var ctx = __webpack_require__(48);
var hide = __webpack_require__(2);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(21);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(56).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(53)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(34);
var hiddenKeys = __webpack_require__(21).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.merge = undefined;

var _iterator = __webpack_require__(27);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(36);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

exports['default'] = function (obj1, obj2, skipUndef, shallow) {
    var item;
    // if none of the arguments are object then return back
    if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' && (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') {
        return null;
    }

    if ((typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object' || obj2 === null) {
        return obj1;
    }

    if (typeof obj1 === 'undefined') {
        obj1 = obj2 instanceof Array ? [] : {};
    }
    if (shallow) {
        // Copy all methods and properties of the object passed in parameter
        // to the object to which this function is attached.
        for (item in obj2) {
            obj1[item] = obj2[item];
        }
    } else {
        merge(obj1, obj2, skipUndef);
    }
    return obj1;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
var UNDEF = void 0,
    arrayToStr = '[object Array]',
    objectToStr = '[object Object]',
    checkCyclicRef = function checkCyclicRef(obj, parentArr) {
    var i = parentArr.length,
        bIndex = -1;

    while (i--) {
        if (obj === parentArr[i]) {
            bIndex = i;
            return bIndex;
        }
    }

    return bIndex;
},
    merge = function merge(obj1, obj2, skipUndef, tgtArr, srcArr) {
    var item, srcVal, tgtVal, str, cRef;
    // check whether obj2 is an array
    // if array then iterate through it's index
    //* *** MOOTOOLS precution
    if (!srcArr) {
        tgtArr = [obj1];
        srcArr = [obj2];
    } else {
        tgtArr.push(obj1);
        srcArr.push(obj2);
    }

    if (obj2 instanceof Array) {
        for (item = 0; item < obj2.length; item += 1) {
            try {
                srcVal = obj1[item];
                tgtVal = obj2[item];
            } catch (e) {
                continue;
            }

            if ((typeof tgtVal === 'undefined' ? 'undefined' : _typeof(tgtVal)) !== 'object') {
                if (!(skipUndef && tgtVal === UNDEF)) {
                    obj1[item] = tgtVal;
                }
            } else {
                if (srcVal === null || (typeof srcVal === 'undefined' ? 'undefined' : _typeof(srcVal)) !== 'object') {
                    srcVal = obj1[item] = tgtVal instanceof Array ? [] : {};
                }
                cRef = checkCyclicRef(tgtVal, srcArr);
                if (cRef !== -1) {
                    srcVal = obj1[item] = tgtArr[cRef];
                } else {
                    merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                }
            }
        }
    } else {
        for (item in obj2) {
            try {
                srcVal = obj1[item];
                tgtVal = obj2[item];
            } catch (e) {
                continue;
            }

            if (tgtVal !== null && (typeof tgtVal === 'undefined' ? 'undefined' : _typeof(tgtVal)) === 'object') {
                // Fix for issue BUG: FWXT-602
                // IE < 9 Object.prototype.toString.call(null) gives
                // '[object Object]' instead of '[object Null]'
                // that's why null value becomes Object in IE < 9
                str = Object.prototype.toString.call(tgtVal);
                if (str === objectToStr) {
                    if (srcVal === null || (typeof srcVal === 'undefined' ? 'undefined' : _typeof(srcVal)) !== 'object') {
                        srcVal = obj1[item] = {};
                    }
                    cRef = checkCyclicRef(tgtVal, srcArr);
                    if (cRef !== -1) {
                        srcVal = obj1[item] = tgtArr[cRef];
                    } else {
                        merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                    }
                } else if (str === arrayToStr) {
                    if (srcVal === null || !(srcVal instanceof Array)) {
                        srcVal = obj1[item] = [];
                    }
                    cRef = checkCyclicRef(tgtVal, srcArr);
                    if (cRef !== -1) {
                        srcVal = obj1[item] = tgtArr[cRef];
                    } else {
                        merge(srcVal, tgtVal, skipUndef, tgtArr, srcArr);
                    }
                } else {
                    obj1[item] = tgtVal;
                }
            } else {
                obj1[item] = tgtVal;
            }
        }
    }
    return obj1;
};
/**
 * Function extend one object's properties with another one
 * @param    {Object} obj1 The object that will be extend
 * @param    {Objcet} obj2 The object, properties of which will be extended into the first one.
 * @param    {boolean} skipUndef Whether to skip the properties with undefined value
 * @param    {boolean} shallow whether it will be a shallow copy or deep copy
 * @return {Object} return the extend object
 */
exports.merge = merge;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */
/**
 * Scheduler component responsible for the execution of jobs in a priority basis.
 * @private
 * @module fusioncharts.renderer.javascript.schedular
 */

var jobList = [],
    pausedList = {},
    priorityJobList = [],
    jobByID = {},
    jobCount = 0,
    minElapsedMsThreshold = 15,
    lastJobExecutedAt,
    win = window,
    minMsThreshold = 16,
    schedular = {},
    priorityList = {
  instant: 1,
  render: 1,
  chartEvents: 1,
  configure: 2,
  chartClick: 2,
  draw: 3,
  label: 4,
  animation: 5,
  entitydraw: 5,
  tracker: 6,
  kdTree: 6,
  postRender: 7
},
    jobFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  setTimeout(callback, minMsThreshold);
},


/**
* This function is used to execute the registerted jobs, called from executeFrame
* @param  {boolean} sameThreadCall         Used to determine if the function is called from the
*                                          same reqFrame or a differnt one
* @param  {boolean} fullFrameExecutionDone Used to determine if any fullFrame job is executed
*                                          in the current frame
* @return {Object}                         Determines whether any job is executed or not, and
*                                          if the job is a fullFrame job.
*/
executeJobs = function executeJobs(sameThreadCall, fullFrameExecutionDone) {
  var jobObj,
      jobFound = false,
      fullFrameJob,
      actualJobExecuted;

  while (!jobFound) {
    if (jobObj = jobList[0]) {
      fullFrameJob = jobObj.fullFrameJob;
      if (sameThreadCall) {
        if (fullFrameExecutionDone && fullFrameJob) {
          return false;
        }
      }
      jobList.splice(0, 1);
      priorityJobList[jobObj.priority] -= 1;
      if (jobByID[jobObj.jobID] && !jobObj.executed) {
        actualJobExecuted = jobFound = true;
        !sameThreadCall && jobList.length > 0 && jobFrame(executeFrame);
        jobObj.job();
        jobObj.executed = true;
        delete jobByID[jobObj.jobID];
      }
    } else {
      jobFound = true;
    }
  }
  return {
    jobFound: actualJobExecuted,
    fullFrameJob: fullFrameJob
  };
},


/**
* This function is called in each requestFrame
*/
executeFrame = function executeFrame() {
  var startTime, nextJobDetails, fullFrameExecutionDone, sameThreadCall;
  lastJobExecutedAt = startTime = new Date().getTime();
  // Calling multiple functions in a single frame if the time of execution for the prev fn is
  // less than 15ms
  do {
    nextJobDetails = executeJobs(sameThreadCall, fullFrameExecutionDone);
    sameThreadCall = true;
    fullFrameExecutionDone = fullFrameExecutionDone || nextJobDetails.fullFrameJob;
  } while (nextJobDetails.jobFound && new Date().getTime() - startTime < minElapsedMsThreshold);
};

/**
 * This function is used to add a new job to the schedular
 * @param  {Function} job          The actual fucntion(job) to be executed.
 * @param  {number}   priority     The priority of the job same as cpu job scheduling
 * @param  {boolean}  fullFrameJob If set to true, then only this job will be executed in a single
 *                                 requestFrame. Other jobs with fullFrameJob set to true will be
 *                                 executed in the next requestFrame. But a non-fullFrameJob and a
 *                                 fullFrameJob can be executed in a single requestFrame if time
 *                                 permits.
 * @param  {boolean}  addToTop     If two jobs with same priority are set to be executed then it
 *                                 is executed as FIFO. But if addToTop is set to true then the
 *                                 second job is executed before the first job.
 * @return {number}                A unique job id.
 */
schedular.addJob = function (job, priority, fullFrameJob, addToTop) {
  var jobID,
      jobObj,
      i,
      timeElapsed,
      position = 0,
      loopLimit = addToTop ? priority - 1 : priority;

  if (typeof job === 'function') {
    jobID = 'JOB_' + ++jobCount + '_' + (priority || 1);
    // Creating custom job object.
    jobObj = {
      job: job,
      priority: priority,
      fullFrameJob: fullFrameJob,
      jobID: jobID
    };
  } else {
    // Applicable during resuming a paused job.
    jobObj = job;
  }

  // Getting the postion where the job is to be added in the jobList array.
  for (i = 0; i <= loopLimit; i++) {
    position += priorityJobList[i] || 0;
  }

  jobList.splice(position, 0, jobObj);

  jobByID[jobID] = jobObj;
  // Incrementing the priority list array as per the job priority.
  priorityJobList[priority] = (priorityJobList[priority] || 0) + 1;
  // If this is the first job, then start the job frame
  if (jobList.length === 1) {
    // If it is a full frame job then make sure the diffefrence between the previous job and the current job is
    // atleast 15ms
    if (jobList[0].fullFrameJob) {
      timeElapsed = new Date().getTime() - lastJobExecutedAt;
      setTimeout(executeFrame, timeElapsed > minElapsedMsThreshold ? 0 : minElapsedMsThreshold - timeElapsed);
    } else {
      setTimeout(executeFrame, 0);
    }
  }
  return jobID;
};

/**
 * This function is used to remove a registered job
 * @param {number} jobID The unique job id
 */
schedular.removeJob = function (jobID) {
  if (jobByID[jobID]) {
    delete jobByID[jobID];
  }
};
/**
 * This function is used to update an existing job if found with the job id else will create a new job.
 * Note when the existing job is getting updated, the priority, fullframejob and addtotop has no effect (remains unchanged).
 * @param {string}    jobID        The ID of the job that will be updated
 * @param  {Function} job          The actual fucntion(job) to be executed.
 * @param  {number}   priority     The priority of the job same as cpu job scheduling
 * @param  {boolean}  fullFrameJob If set to true, then only this job will be executed in a single
 *                                 requestFrame. Other jobs with fullFrameJob set to true will be
 *                                 executed in the next requestFrame. But a non-fullFrameJob and a
 *                                 fullFrameJob can be executed in a single requestFrame if time
 *                                 permits.
 * @param  {boolean}  addToTop     If two jobs with same priority are set to be executed then it
 *                                 is executed as FIFO. But if addToTop is set to true then the
 *                                 second job is executed before the first job.
 * @return {number}                A unique job id.
 */
schedular.updateJob = function (jobID, job, priority, fullFrameJob, addToTop) {
  if (jobByID[jobID]) {
    jobByID[jobID].job = job;
    return jobID;
  } else {
    return this.addJob(job, priority, fullFrameJob, addToTop);
  }
};
/**
 * This function is used to pause a scheduled job.
 * @param  {number}  jobID The unique job id
 * @return {boolean}       Returns false if the given job ID is not found. Else it deletes the
 *                         job and returns undefined.
 */
schedular.pauseExecution = function (jobID) {
  if (jobByID[jobID]) {
    pausedList[jobByID[jobID]] = jobByID[jobID];
    delete jobByID[jobID];
  } else {
    return false;
  }
};

/**
 * This function is used to resume a scheduled job.
 * @param  {number}   jobID The unique job id
 * @return {boolean}       Returns false if the given job ID could not be found. Else, it
 *                         executes the job and returns undefined
 */
schedular.resumeExecution = function (jobID) {
  var jobObj = pausedList[jobID];
  if (jobObj) {
    schedular.addJob(jobObj);
    delete pausedList[jobID];
  } else {
    return false;
  }
};

exports['default'] = schedular;
exports.priorityList = priorityList;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tooltipController = __webpack_require__(42);

var _tooltipController2 = _interopRequireDefault(_tooltipController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _tooltipController2['default']; /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tooltipComponent = __webpack_require__(43);

var _tooltipComponent2 = _interopRequireDefault(_tooltipComponent);

var _lib = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var TOOL_TIP_KEY = '__FC_tooltipText',
    MOVE_HANDLER = '__FC_onTooltipMove',
    OUT_HANDLER = '__FC_onTooltipOut',
    doc = window.document,
    hasTouch = doc.documentElement.ontouchstart !== undefined;

var moveHandler = function moveHandler(toolTip, controller, event) {
  if (hasTouch) {
    return;
  }
  var universeBounds = controller.universe.getBoundingClientRect(),
      mousePointerWidthOffset = 11,
      mousePointerHeightOffset = 11,
      x = event.clientX,
      y = event.clientY;

  // Adjust for the offset of the container. This will position the tooltip exactly under the
  // mouse pointer
  x -= universeBounds.left;
  y -= universeBounds.top;

  // Now shift the tooltip such that is displays slightly to the left of and to the bottom of the
  // mouse pointer
  x += mousePointerWidthOffset;
  y += mousePointerHeightOffset;

  ToolTipController._draw.call(controller, x, y, this.data(TOOL_TIP_KEY), toolTip);
},
    outHandler = function outHandler(toolTip) {
  ToolTipController._hide(toolTip);
};

/**
 * Serves as the backbone of all tooltips associated with a given container. This container is
 * considered to be its "universe". The ToolTipController is always instantiated with a universe.
 * The controller automatically creates and removes tooltips of the appropriate type, as required.
 *
 * The ToolTipController is capable of instantiating two kinds of tooltips, implicit and explicit.
 * * Implicit tooltips are those that are left to the ToolTipController to control.
 * * Explicit tooltips are those which are controlled by the instantiator. The instantiator
 * explicitly draws and hides tooltips by using the ToolTipController.
 * @class
 */

var ToolTipController = function () {
  /**
   * Instantiates the class with its universe and its pool of tooltips.
   * @param  {HTMLELement} universe The HTML element in which the tooltip elements will be created.
   */
  function ToolTipController(universe) {
    _classCallCheck(this, ToolTipController);

    this.universe = universe;
    this.config = {};
    // this.isFixed = false;
    this.toolTips = {
      implicit: [],
      explicit: []
    };
  }

  /**
   * Creates an instance of a specific type of tooltip
   * @param  {string}  toolTipType The type of tooltip to be created, either implicit or explicit
   * @return {ToolTip}             The created tooltip
   * @private
   */


  ToolTipController.prototype._createToolTip = function _createToolTip(toolTipType) {
    var toolTip = void 0;

    toolTip = new _tooltipComponent2['default'](this.universe);
    this.toolTips[toolTipType].push(toolTip);

    return toolTip;
  };

  /**
   * Enable an implicit tooltip on a given Raphael element
   * @param  {Object} element The Raphael element on which to enable the implicit tooltip
   * @param  {string} text    The text to display in the implicit tooltip
   *
   * @return {Object} An instance of ToolTipController
   */


  ToolTipController.prototype.enableToolTip = function enableToolTip(element, text) {
    var ref = this,
        type = 'implicit',
        tooltipImplicitArray = ref.toolTips[type],
        length = tooltipImplicitArray.length,
        toolTip = void 0;

    // If there is no text then simply return.
    //
    // If the element is already assigned an implicit tooltip then
    // no need to assign a new tooltip instead update the tooltip data
    // and show current data.
    // show(text) is used to update the tooltip text in current position instantly
    // and element.data(TOOL_TIP_KEY, text) is used to set the data in the tooltip
    // so that on mouse movement the current text is able to display.
    if (!text) {
      ref.disableToolTip(element);
      return ref;
    } else if (element.data(TOOL_TIP_KEY)) {
      if (length > 0) {
        toolTip = tooltipImplicitArray[length - 1];
        toolTip.setUniverse(this.universe);
        toolTip.getData('active') && toolTip.show(text);
      }

      element.data(TOOL_TIP_KEY, text);
      element.on('mousemove', element.data(MOVE_HANDLER));
      element.on('mouseout', element.data(OUT_HANDLER));
      // mouseover is applicable only for touch devices
      hasTouch && element.on('mouseover', function (e) {
        return ref.draw(e, text, toolTip);
      });
      return ref;
    }

    toolTip = ref._getAvailableToolTip('implicit');

    ref.disableToolTip(element);

    element.data(TOOL_TIP_KEY, text);
    element.data(MOVE_HANDLER, moveHandler.bind(element, toolTip, ref));
    element.data(OUT_HANDLER, outHandler.bind(element, toolTip, ref));

    element.on('mousemove', element.data(MOVE_HANDLER));
    element.on('mouseout', element.data(OUT_HANDLER));
    // mouseover is applicable only for touch devices
    hasTouch && element.on('mouseover', function (e) {
      return ref.draw(e, text, toolTip);
    });

    return ref;
  };

  /**
   * Disable the implicit tooltip on a Raphael element
   * @param  {Object} element The Raphael element from which the implicit tooltip will be removed
   *
   * @return {Object} An instance of ToolTipController
   */


  ToolTipController.prototype.disableToolTip = function disableToolTip(element) {
    var elemOutHandler = element.data(OUT_HANDLER),
        elemMoveHandler = element.data(MOVE_HANDLER);

    elemMoveHandler && element.off('mousemove', elemMoveHandler);
    elemOutHandler && element.off('mouseout', elemOutHandler);

    return this;
  };

  /**
   * Creates an explicit tooltip at the position of the mouse cursor with the given text
   * when invoked
   *
   * @param  {Event}   event     The Event object from which to determine the x and y co-ordinates
   *                             of the mouse
   * @param  {string}  text      The text to be displayed in the explicit tooltip
   * @param  {ToolTip} [toolTip] If provided, the tooltip is updated instead of being created anew
   *
   * @return {ToolTip}           The explicit tooltip created
   */


  ToolTipController.prototype.draw = function draw(event, text, toolTip) {
    var universeBounds = this.universe.getBoundingClientRect(),
        mousePointerWidthOffset = 11,
        mousePointerHeightOffset = 11,
        x = void 0,
        y = void 0;

    event = (0, _lib.getTouchEvent)(event);
    x = event.clientX;
    y = event.clientY;

    toolTip = toolTip || this._getAvailableToolTip('explicit');
    toolTip.setStyle(this.config.tooltipStyle);
    // Update the universe bounds before drawing the tooltip
    // incase when the chart gets resized
    toolTip.setUniverse(this.universe);

    // Adjust for the offset of the container. This will position the tooltip exactly under the
    // mouse pointer
    x -= universeBounds.left;
    y -= universeBounds.top;

    // Now shift the tooltip such that is displays slightly to the left of and to the bottom of the
    // mouse pointer
    x += mousePointerWidthOffset;
    y += mousePointerHeightOffset;

    ToolTipController._draw.call(this, x, y, text, toolTip);

    return toolTip;
  };

  /**
   * Draws an explicit tooltip at the given co-ordinates with the given text
   * @param {number} x The x co-ordinates of the tooltip
   * @param {number} y The y co-ordinates of the tooltip
   * @param {string} text The text to be displayed in the tooltip
   * @param {Object} [toolTip] If provided, the given tooltip is updated instead of being created
   *                           again
   * @return {Object} The newly created, or updated tooltip
   */


  ToolTipController.prototype.drawAt = function drawAt(x, y, text, toolTip) {
    toolTip = toolTip || this._getAvailableToolTip('explicit');
    toolTip.setStyle(this.config.tooltipStyle);
    ToolTipController._draw(x, y, text, toolTip);

    return toolTip;
  };

  /**
   * Internal method to show and update tooltips on elements
   * @param  {number}  x        The X position at which to draw the tooltip
   * @param  {number}  y        The Y position at which to draw the tooltip
   * @param  {number}  text     The text content of the tooltip
   * @param  {ToolTip} toolTip  The tooltip to draw or update
   * @private
   */


  ToolTipController._draw = function _draw(x, y, text, toolTip) {
    toolTip.setStyle(this.config.tooltipStyle);
    toolTip.show(text);
    toolTip.update(x, y);
  };

  /**
   * Gets an available tooltip of a specific type. If no tooltip is available, create a new one.
   * @param  {string} type      The type of tooltip to search for, either implicit or explicit
   * @param  {Object} [element] In case of an explicit tooltip, the element which will be checked
   *                            for active tooltips
   * @return {ToolTip}          The tooltip element that was found or newly created
   * @private
   */


  ToolTipController.prototype._getAvailableToolTip = function _getAvailableToolTip(type) {
    var toolTips = this.toolTips[type],
        toolTip = void 0,
        isToolTipInactive = void 0;

    for (var i = 0, ii = toolTips.length; i < ii; i++) {
      toolTip = toolTips[i];
      isToolTipInactive = toolTip.getData('active') === false;
      if (isToolTipInactive) {
        return toolTip;
      }
    }

    return this._createToolTip(type);
  };
  /**
   * Method that stores style of tooltip that gets applied in tooltip container
   * @param {Object} obj The object that contains styles for the tooltip container
   */


  ToolTipController.prototype.setStyle = function setStyle(obj) {
    var toolTipController = this,
        toolTipConfig = toolTipController.config,
        tooltipStyle = toolTipConfig.tooltipStyle || (toolTipConfig.tooltipStyle = {});
    for (var key in obj) {
      tooltipStyle[key] = obj[key];
    }
  };

  /**
   * Given a toolTip, hides it
   * @param  {ToolTip} toolTip The tooltip to hide
   * @return {Object} An instance of ToolTipController
   */


  ToolTipController.prototype.hide = function hide(toolTip) {
    ToolTipController._hide(toolTip, 'dispose');
    return this;
  };

  /**
   * Hides all the tooltips
   */


  ToolTipController.prototype.hideAll = function hideAll() {
    var self = this,
        type,
        i;

    for (type in self.toolTips) {
      for (i = 0; i < self.toolTips[type].length; i++) {
        ToolTipController._hide(self.toolTips[type][i], 'dispose');
      }
    }
  };

  /**
   * internal method to control the hiding and disposal of a tooltip.
   * @param  {ToolTip} toolTip       The tooltip to hide or dispose
   * @param  {boolean} [willDispose] If true, indicates that the tooltip should dispose itself,
   *                                 i.e. remove its associated DOM element
   * @private
   */


  ToolTipController._hide = function _hide(toolTip, willDispose) {
    if (toolTip) {
      if (willDispose) {
        toolTip.dispose();
      } else {
        toolTip.hide();
      }
    }
  };

  return ToolTipController;
}();

exports['default'] = {
  extension: ToolTipController,
  name: 'ToolTipController',
  type: 'plugin'
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _lib = __webpack_require__(26);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var FC_TOOLTIP_CLASS = 'fc__tooltip',
    GUTTER_12 = 12;

/**
 * This component is responsible for drawing and updating the tooltips associated with the chart
 * @class
 */

var ToolTip = function () {
  /**
   * Creates an instance of ToolTip.
   * @param {Object} universe The container which defines the bounds within which the tooltip must
   *                          exist
   */
  function ToolTip(universe) {
    _classCallCheck(this, ToolTip);

    this.text = '';
    this.x = 0;
    this.y = 0;
    this.visibleWidth = 0;
    this.universeBounds = universe.getBoundingClientRect();
    this.data = {
      active: false,
      target: false
    };
    this.element = this.createElement(universe);
  }

  /**
   * Sets the universe bounds
   * @param {Object} universe the target raphael element
   */


  ToolTip.prototype.setUniverse = function setUniverse(universe) {
    this.universeBounds = universe.getBoundingClientRect();
  };

  /**
   * Creates an HTML element which corresponds to an instance of ToolTip.
   *
   * @param {Object} universe The container which defines the bounds within which the tooltip must
   *                          exist
   * @return {Element} The HTML tooltip element
   */


  ToolTip.prototype.createElement = function createElement(universe) {
    var div = document.createElement('div');
    div.setAttribute('class', FC_TOOLTIP_CLASS);

    div.innerHTML = this.text;

    div.style.color = '#000';
    div.style.padding = '3px';
    div.style.fontSize = '0.8em';
    div.style.overflow = 'hidden';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#666';
    div.style.whiteSpace = 'nowrap';
    div.style.position = 'absolute';
    div.style.borderStyle = 'solid';
    div.style.backgroundColor = '#EEE';

    div.style['user-select'] = 'none'; // Chrome and Opera
    div.style['-ms-user-select'] = 'none'; // Internet Explorer and Edge
    div.style['-moz-user-select'] = 'none'; // Firefox
    div.style['-webkit-user-select'] = 'none'; // Safari
    div.style['-webkit-touch-callout'] = 'none'; // iOS Safari

    div.style.top = this.x + 'px';
    div.style.left = this.y + 'px';
    div.style.visibility = 'hidden';
    div.style['pointer-events'] = 'none';

    universe.appendChild(div);

    return div;
  };

  /**
   * Stores a key with a specified value inside the instance of this component
   *
   * @param {string} key The key by which to store the value
   * @param {any} val The value to be stored
   */


  ToolTip.prototype.setData = function setData(key, val) {
    this.data[key] = val;
  };

  /**
   * Gets the value of a key from the store
   *
   * @param {string} key The key whose value to retrieve
   * @return {any} The value corresponding to the key in the store
   */


  ToolTip.prototype.getData = function getData(key) {
    return this.data[key];
  };

  /**
   * Method that applies style to the tooltip container
   * @param {Object} styleObj The object that contains styles for the tooltip container
   */


  ToolTip.prototype.setStyle = function setStyle(styleObj) {
    var div = this.element;
    div.style.color = styleObj.fontColor;
    if (_lib.hasSVG) {
      div.style.backgroundColor = styleObj.bgColor;
      div.style.borderColor = styleObj.borderColor;
      if (styleObj.showToolTipShadow) {
        div.style['box-shadow'] = '1px 1px 3px rgba(64,64,64,0.4)';
      } else {
        div.style['box-shadow'] = 'none';
      }
    } else {
      div.style.backgroundColor = styleObj.rawBgColor;
      div.style.borderColor = styleObj.rawBorderColor;
      if (styleObj.showToolTipShadow) {
        div.style.filter = 'progid:DXImageTransform.Microsoft.Shadow' + '(Strength=2, Direction=135, Color="#404040", shadowOpacity="1")';
      } else {
        div.style.filter = 'none';
      }
    }
    div.style['font-family'] = styleObj['font-family'];
    div.style['font-size'] = styleObj['font-size'] + 'px';
    div.style['border-width'] = styleObj.borderThickness + 'px';
    div.style['border-radius'] = styleObj.borderRadius + 'px';
    div.style.padding = styleObj.padding + 'px';
  };

  /**
   * Shows the HTML element with the given text.
   *
   * @param {string} text The text to be shown
   */


  ToolTip.prototype.show = function show(text) {
    this.text = text;

    if (this.element.innerHTML !== this.text) {
      this.element.innerHTML = this.text;
    }

    this.setData('active', true);
    this.element.style.visibility = 'visible';
    // maximum allowable width of the tooltip container
    this.element.style['max-width'] = this.universeBounds.width - 2 * GUTTER_12 + 'px';
  };

  /**
   * Updates the x and y position of the tooltip's HTML element
   *
   * @param {any} [x=this.x] The x position of the tooltip
   * @param {any} [y=this.y] The y position of the tooltip
   */


  ToolTip.prototype.update = function update() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;

    var universeBounds = this.universeBounds,

    // shrink the bounds so that tooltip can be padded within
    // the container
    universeLeft = universeBounds.left + GUTTER_12,
        universeRight = universeBounds.right - GUTTER_12,
        universeTop = universeBounds.top + GUTTER_12,
        universeBottom = universeBounds.bottom - GUTTER_12,
        universeWidth = universeBounds.width - 2 * GUTTER_12,
        offsetWidth = this.element.offsetWidth,
        offsetHeight = this.element.offsetHeight;

    if (x + offsetWidth + universeLeft < universeRight) {
      // when both the right edge of tooltip and its width is within the universe
      this.element.style.left = x + 'px';
      this.element.style.whiteSpace = 'nowrap';
    } else if (offsetWidth < universeWidth) {
      // when the right edge of the tooltip is greater than or equal to universeright
      this.element.style.left = universeRight - offsetWidth - universeLeft + 'px';
    } else {
      // if width of the provided tooltext is greater than the universeWidth
      // then the left and width of the div needs to be updated so that tooltext
      // can be displayed within the visible area.
      this.element.style.left = GUTTER_12 + 'px';
      this.element.style.whiteSpace = 'normal';
    }

    if (y + universeTop + offsetHeight < universeBottom) {
      this.element.style.top = y + 'px';
    } else {
      this.element.style.top = universeBottom - offsetHeight - universeTop + 'px';
    }
  };

  /**
   * Hides the tooltip
   */


  ToolTip.prototype.hide = function hide() {
    this.y = 0;
    this.x = 0;
    this.x = '';
    this.setData('active', false);
    this.setData('target', false);
    this.element.style.visibility = 'hidden';
    this.element.innerHTML = '';
  };

  /**
   * Disposes the tooltip
   */


  ToolTip.prototype.dispose = function dispose() {
    this.hide();
    // Also remove html element
  };

  return ToolTip;
}();

exports['default'] = ToolTip;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(59);
module.exports = __webpack_require__(23).f('iterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(28)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(33);
var descriptor = __webpack_require__(10);
var setToStringTag = __webpack_require__(22);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(54);
var toAbsoluteIndex = __webpack_require__(55);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(12);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(1);
var toObject = __webpack_require__(58);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
var global = __webpack_require__(0);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(17);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61);
var step = __webpack_require__(62);
var Iterators = __webpack_require__(17);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(28)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
module.exports = __webpack_require__(15).Symbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(1);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(29);
var redefine = __webpack_require__(32);
var META = __webpack_require__(65).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(20);
var setToStringTag = __webpack_require__(22);
var uid = __webpack_require__(11);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(23);
var wksDefine = __webpack_require__(24);
var enumKeys = __webpack_require__(66);
var isArray = __webpack_require__(67);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(7);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(16);
var createDesc = __webpack_require__(10);
var _create = __webpack_require__(33);
var gOPNExt = __webpack_require__(68);
var $GOPD = __webpack_require__(69);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(38).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(14)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(2)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(11)('meta');
var isObject = __webpack_require__(7);
var has = __webpack_require__(1);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(38).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);
var createDesc = __webpack_require__(10);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(16);
var has = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(30);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24)('asyncIterator');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24)('observable');


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {"name":"xt-edge","description":"JavaScript Data Visualisation Library","homepage":"http://www.fusioncharts.com/","version":"3.13.0-alpha.2","browserslist":["> 0.2%"],"license":"MIT","author":"FusionCharts Technologies  <support@fusioncharts.com>","main":"./lib/fusioncharts.js","src":"./develop/src","build":{"dist":"./out/build/","name":"fusioncharts"},"lib":"./lib","samples":{"root":"samples","dist":"dist","src":"src","port":"8080"},"keywords":["fusioncharts","charts","gauges","maps"],"preferGlobal":false,"repository":{"type":"git","url":"https://bitbucket.org/fusioncharts/xt-edge.git"},"dependencies":{"babel-runtime":"^6.26.0","browser-sync":"^2.18.13","circular-dependency-plugin":"^4.2.1","documentation":"^4.0.0","dotenv":"^4.0.0","gulp-wrap":"^0.13.0","jest":"^19.0.2","jquery-fusioncharts":"^1.0.5","redraphael":"^1.1.26","svgdecanvo":"^1.0.1","svgdom":"^0.0.8"},"devDependencies":{"babel":"^6.23.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-transform-es2015-classes":"^6.24.1","babel-plugin-transform-es3-member-expression-literals":"^6.22.0","babel-plugin-transform-es3-property-literals":"^6.22.0","babel-plugin-transform-proto-to-assign":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-es2015-rollup":"^3.0.0","body-parser":"^1.18.2","chai":"^3.5.0","chalk":"^1.1.3","chrome-launcher":"^0.6.0","chrome-remote-interface":"^0.24.5","cors":"^2.8.4","del":"^2.2.2","es3ify-loader":"^0.2.0","esdoc":"^1.0.4","esdoc-standard-plugin":"^1.0.0","eslint":"^4.19.0","eslint-config-google":"^0.7.1","eslint-config-standard":"^7.0.1","eslint-plugin-compat":"^1.0.2","eslint-plugin-promise":"^3.6.0","eslint-plugin-standard":"^2.1.1","express":"^4.16.2","google-closure-compiler":"20160208.4.0","gulp":"^3.9.1","gulp-babel":"^6.1.2","gulp-concat":"^2.6.1","gulp-header":"^1.8.9","gulp-metascript":"^0.0.3","gulp-mocha":"^3.0.1","gulp-preprocess":"^2.0.0","gulp-rename":"^1.2.2","gulp-streamify":"^1.0.2","gulp-uglify":"^2.1.2","gulp-unzip":"^0.2.0","gulp-util":"^3.0.8","jasmine":"^2.8.0","jasmine-node":"^1.14.5","jsdoc":"^3.5.5","jsdom":"^9.12.0","jsinspect":"^0.12.7","jslink":"^1.1.3","karma":"^1.7.1","karma-allure-reporter":"^1.4.4","karma-chai":"^0.1.0","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^1.1.0","karma-jasmine-html-reporter":"^0.2.2","karma-json-result-reporter":"^1.0.0","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-sinon":"^1.0.5","karma-webpack":"^1.8.1","larry":"0.0.3-beta","metascript":"^0.18.0","mkdirp":"^0.5.1","mocha":"^3.5.3","path":"^0.12.7","phantomjs":"^2.1.7","pre-commit":"^1.2.2","pump":"^1.0.3","ramda":"^0.24.1","rollup":"^0.43.0","rollup-plugin-babel":"^2.7.1","rollup-plugin-commonjs":"^8.2.6","rollup-plugin-hypothetical":"^1.2.1","rollup-plugin-json":"^2.3.0","rollup-plugin-multi-entry":"^2.0.2","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-uglify":"^2.0.1","rollup-watch":"^4.3.1","run-sequence":"^1.2.2","sinon":"^2.4.1","webpack":"^3.8.1","webpack-bundle-analyzer":"^2.9.1","webpack-dev-server":"^2.9.4","webpack-merge":"^4.1.1","webpack-stream":"^3.2.0","webpack-visualizer-plugin":"^0.1.11"},"scripts":{"pull":"git pull && git submodule update --init --recursive","component":"sh develop/test/extra/component/bash.sh","karma":"node --max_old_space_size=4096 ./node_modules/karma/bin/karma start","unit-test":"develop/ci/karma/karma","inspect-code":"jsinspect ./develop/src > develop/test/extra/jsinspect/jsinspect.txt || true","unit":"./node_modules/karma/bin/karma start --browsers='ChromeHeadless'","_build":"node rollup.config.js && echo 'Build completed'","start":"webpack-dev-server --host 0.0.0.0 --env.production=true","test":"develop/ci/test/test","jest":"develop/ci/jest/jest","jsunit":"develop/ci/jsunit/jsunit","drone":"develop/ci/drone/drone","lint":"develop/ci/lint/lint $file","jscs":"develop/ci/jscs/jscs $file","lint-errors":"develop/ci/lint/lint-errors $file","docs":"develop/ci/docs/docs","docs-api":"develop/ci/docs/docs-api","docs-esdoc":"develop/ci/docs/docs-esdoc","analyse:bundle":"rm -rf out/_build && mkdirp webpack-analyser/data && babel-node develop/ci/build/modular-build.js --analyse","custom:bundle":"rm -rf out/_build && babel-node develop/ci/build/modular-build.js --charts MSColumn2D --filename fc.mscol.js","dev:bundle":"rm -rf out/_build && webpack --progress --display-modules --display-used-exports","build":"rm -rf out/ && webpack && gulp create:build && gulp compress:licensed && gulp compress:eval && gulp compress:resellereval","build-source":"rm -rf out/build/source && webpack && gulp create:source","build-eval":"rm -rf out/build/eval && webpack && gulp create:eval && gulp compress:eval","verify":"develop/ci/verify/verify","package-release":"develop/ci/package/package-release","package":"develop/ci/package/package","user-verifications":"develop/ci/user-verifications/user-verifications"},"pre-commit":{"run":["lint","unit-test","build-eval","docs","verify","user-verifications"]}}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * @private
 * @module fusioncharts.renderer.javascript.lib-attr
 */

// Removing circular dependancy from lib so declaring thr variables here
var attrTypeNum = 1,
    attrTypeBool = 2,
    UNDEF = void 0;

var blankObj = {},
    // @note: readonly object. Don't write anything in this object
mathMax = Math.max,
    attribDefs;

// add attribute parsing methods
// @todo: this part need to to be properly planed and written.
function parseConfiguration(userConfig, defaultConfig, parentConfig, ignoreList, helperComponents, localAttribDefs) {
  var key,
      val,
      type,
      attrUpdateCount = 1,
      tempDefs;
  exports.attribDefs = attribDefs = attribDefs || blankObj;

  ignoreList = ignoreList || blankObj;
  localAttribDefs = localAttribDefs || blankObj;
  helperComponents = helperComponents || {};
  // appaly user given attributes
  for (key in userConfig) {
    if (!ignoreList[key]) {
      val = userConfig[key];
      if (!(!val && val !== false && val !== 0)) {
        type = (tempDefs = localAttribDefs[key] || attribDefs[key]) && tempDefs.type;
        switch (type) {
          case attrTypeNum:
            val = Number(val);
            if (!isNaN(val)) {
              defaultConfig[key] = val;
            }
            break;
          case attrTypeBool:
            val = Number(val);
            if (!isNaN(val)) {
              defaultConfig[key] = !!val;
            }
            break;
          default:
            defaultConfig[key] = val;
        }
      }
    }
  }

  // Update attributes thar are inherated from parentConfig
  if (parentConfig) {
    for (key in defaultConfig) {
      // if the attribute value is UNDEF and the defination says it will be inherited from parent
      if (defaultConfig[key] === UNDEF && (tempDefs = localAttribDefs[key] || attribDefs[key]) && tempDefs.pAttr) {
        defaultConfig[key] = parentConfig[tempDefs.pAttr];
      }
    }
  }

  // Update attributes thar are inherated from another attributes
  // Update attributes whos values will be updated through some function call
  while (attrUpdateCount) {
    attrUpdateCount = 0;
    for (key in defaultConfig) {
      // if the attribute value is UNDEF and the defination says it will be inherited from parent
      if (defaultConfig[key] === UNDEF && (tempDefs = localAttribDefs[key] || attribDefs[key])) {
        // attribute that will be inherited from another
        if (tempDefs.attr) {
          if ((val = defaultConfig[tempDefs.attr]) !== UNDEF) {
            defaultConfig[key] = val;
            attrUpdateCount += 1;
          }
        } else if (tempDefs.parser) {
          if ((val = tempDefs.parser(defaultConfig, parentConfig, helperComponents)) !== UNDEF) {
            defaultConfig[key] = val;
            attrUpdateCount += 1;
          }
        }
      }
    }
  }
}

/**
 * Set an attribute defination
 * @param {string} name name of the defination or an object containg the definations as key pair object
 * @param {type} def defination of the object
 */
function setAttribDefs(name, def) {
  var attribObj, key;

  exports.attribDefs = attribDefs = attribDefs || {};

  if (typeof name === 'string') {
    attribObj = {};
    attribObj[name] = def;
  } else {
    attribObj = name;
  }
  for (key in attribObj) {
    // the defination is not previously added, then only the definations
    if (!attribDefs[key]) {
      attribDefs[key] = attribObj[key];
    }
  }
}

function hasAttribDefs(name) {
  // assuming definations should not be UNDEF
  return !!attribDefs[name];
}

/**
 * Store for all attributes definations
 * possible defination object properties
 *  `type`: type of the attribute. Attribute will be parsed into proper format
 *  `pAttr`: name of the parent scope attribute, from which the attribute value will be inherited
 *  `attr`: Name fo another attribute of same scope from which the default value will be inherited
 *  `parser`: Defination the parser function using which the value fo this attribute will be generated.
 *            The parser will get the current scope config and the parent scope config as arguments respectively.
 *
 */
exports.attribDefs = attribDefs = {
  setBorderWidth: {
    type: attrTypeNum,
    pAttr: 'plotborderthickness'
  },
  plotborderthickness: {
    type: attrTypeNum,
    pAttr: 'plotborderthickness'
  },
  showBorderEffect: {
    parser: function parser() {
      var pConfig = arguments[1],
          plotBorderThicknessLimit = 0.1;

      return +pConfig.showplotborder === 1 && pConfig.plotborderthickness === plotBorderThicknessLimit ? 1 : 0;
    }
  },
  alphaanimation: {
    type: attrTypeNum
  },
  showplotborder: {
    type: attrTypeNum,
    pAttr: 'showplotborder'
  },
  zeroplanethickness: {
    type: attrTypeNum
  },
  showzeroplaneontop: {
    type: attrTypeNum
  },
  stickytracking: {
    type: attrTypeNum
  },

  // realtime related attributes
  usemessagelog: {
    type: attrTypeNum
  },
  showtooltip: {
    type: attrTypeNum,
    pAttr: 'showtooltip'
  },
  seriesnameintooltip: {
    type: attrTypeNum
  },
  plothovereffect: {
    type: attrTypeNum,
    attr: 'anchorhovereffect'
  },
  anchorhovereffect: {
    type: attrTypeNum,
    attr: 'showhovereffect'
  },
  showhovereffect: {
    type: attrTypeNum,
    attr: 'drawcrossline'
  },
  drawcrossline: {
    type: attrTypeNum
  },
  linethickness: {
    type: attrTypeNum,
    pAttr: 'linethickness'
  },
  dashed: {
    type: attrTypeNum,
    pAttr: 'linedashed'
  },
  linedashed: {
    type: attrTypeNum,
    attr: 'plotborderdashed'
  },
  plotborderdashed: {
    type: attrTypeNum,
    pAttr: 'plotborderdashed'
  },
  linedashlen: {
    type: attrTypeNum,
    pAttr: 'linedashlen'
  },
  linedashgap: {
    type: attrTypeNum,
    pAttr: 'linedashgap'
  },
  anchoralpha: {
    pAttr: 'anchoralpha'
  },
  anchorsides: {
    type: attrTypeNum,
    pAttr: 'anchorsides'
  },
  anchorradius: {
    type: attrTypeNum,
    pAttr: 'anchorradius'
  },
  anchorbgalpha: {
    pAttr: 'anchorbgalpha'
  },
  anchorbgcolor: {
    pAttr: 'anchorbgcolor'
  },
  anchorbordercolor: {
    pAttr: 'anchorbordercolor'
  },
  anchorstartangle: {
    type: attrTypeNum,
    pAttr: 'anchorstartangle'
  },
  anchorimageurl: {
    pAttr: 'anchorimageurl'
  },
  anchorimagescale: {
    type: attrTypeNum,
    pAttr: 'anchorimagescale'
  },
  anchorimagealpha: {
    pAttr: 'anchorimagealpha'
  },
  anchorimagepadding: {
    type: attrTypeNum,
    pAttr: 'anchorimagepadding'
  },
  anchorborderthickness: {
    type: attrTypeNum,
    pAttr: 'anchorborderthickness'
  },
  anchorshadow: {
    type: attrTypeNum,
    pAttr: 'anchorshadow'
  },
  valuepadding: {
    type: attrTypeNum,
    pAttr: 'valuepadding'
  },
  valueposition: {
    pAttr: 'valueposition'
  },
  plotfillangle: {
    type: attrTypeNum,
    pAttr: 'plotfillangle'
  },
  useplotgradientcolor: {
    type: attrTypeNum
  },
  rotatevalues: {
    type: attrTypeNum,
    pAttr: 'rotatevalues'
  },
  includeinlegend: {
    type: attrTypeNum
  },
  connectnulldata: {
    type: attrTypeNum
  },
  plotfillalpha: {
    pAttr: 'plotfillalpha'
  },
  alpha: {
    pAttr: 'linealpha'
  },
  linealpha: {
    pAttr: 'plotfillalpha'
  },
  showvalues: {
    type: attrTypeNum,
    pAttr: 'showvalues'
  },
  showpercentvalues: {
    type: attrTypeNum,
    parser: function parser(config) {
      return config.isstacked && config.stack100percent ? 1 : 0;
    }
  },
  showpercentintooltip: {
    type: attrTypeNum,
    parser: function parser(config) {
      return config.isstacked && config.stack100percent ? 1 : 0;
    }
  },
  stack100percent: {
    type: attrTypeNum,
    attr: 'usepercentdistribution'
  },
  drawfullareaborder: {
    type: attrTypeNum
  },
  use3dlineshift: {
    type: attrTypeNum
  },
  parentyaxis: {
    type: attrTypeNum
  },
  radarborderthickness: {
    type: attrTypeNum
  },
  radarborderradius: {
    type: attrTypeNum
  },
  gaugeoriginx: {
    type: attrTypeNum
  },
  hasgaugeoriginx: {
    attr: 'gaugeoriginx'
  },
  gaugeoriginy: {
    type: attrTypeNum
  },
  hasgaugeoriginy: {
    attr: 'gaugeoriginy'
  },
  gaugeradius: {
    type: attrTypeNum
  },
  hasgaugeradius: {
    attr: 'gaugeradius'
  },
  showgaugeborder: {
    type: attrTypeNum
  },
  setAdaptiveMin: {
    type: attrTypeNum
  },
  adjustDiv: {
    type: attrTypeNum
  },
  axisNameWidth: {
    type: attrTypeNum
  },
  rotateAxisName: {
    type: attrTypeNum
  },
  useEllipsesWhenOverflow: {
    type: attrTypeNum
  },
  showZeroPlane: {
    type: attrTypeNum
  },
  zeroPlaneAlpha: {
    type: attrTypeNum
  },
  showZeroPlaneValue: {
    type: attrTypeNum
  },
  zeroPlaneOnTop: {
    type: attrTypeNum
  },
  trendlineThickness: {
    type: attrTypeNum
  },
  showTrendlinesOnTop: {
    type: attrTypeNum
  },
  trendlinesAreDashed: {
    type: attrTypeNum
  },
  trendlinesDashLen: {
    type: attrTypeNum
  },
  trendlinesDashGap: {
    type: attrTypeNum
  },
  showTrendlines: {
    type: attrTypeNum
  },
  showTrendlineLabels: {
    type: attrTypeNum
  },
  showLabels: {
    type: attrTypeNum
  },
  rotateLabels: {
    type: attrTypeNum
  },
  slantLabel: {
    type: attrTypeNum
  },
  showAxisValues: {
    type: attrTypeNum
  },
  showTooltip: {
    type: attrTypeNum
  },
  maxLabelHeight: {
    type: attrTypeNum
  },
  useroundedges: {
    type: attrTypeNum,
    pAttr: 'useroundedges'
  },
  placevaluesinside: {
    type: attrTypeNum
  },
  plotpaddingpercent: {
    type: attrTypeNum
  },
  use3dlighting: {
    type: attrTypeNum,
    pAttr: 'use3dlighting'
  },
  usedataplotcolorforlabels: {
    type: attrTypeNum
  },
  plotspacepercent: {
    type: attrTypeNum,
    parser: function parser(config) {
      return mathMax(config.plotspacepercent % 100, 0);
    }
  },
  ratio: {
    pAttr: 'plotfillratio'
  },
  base: {
    type: attrTypeNum
  },
  showMinorDivLineValues: {
    type: attrTypeNum
  },
  numMinorDivLines: {
    type: attrTypeNum
  },
  majorTMNumber: {
    type: attrTypeNum
  },
  majorTMHeight: {
    type: attrTypeNum
  },
  showTickMarks: {
    type: attrTypeNum
  },
  majorTMThickness: {
    type: attrTypeNum
  },
  adjustTM: {
    type: attrTypeBool
  },
  minorTMNumber: {
    type: attrTypeNum
  },
  minorTMThickness: {
    type: attrTypeNum
  },
  tickMarkDistance: {
    type: attrTypeNum
  },
  placeTicksInside: {
    type: attrTypeNum
  },
  placeValuesInside: {
    type: attrTypeNum
  },
  axisValuePadding: {
    type: attrTypeNum
  },
  gridLineWidth: {
    type: attrTypeNum
  },
  showRadarBorder: {
    type: attrTypeNum
  },
  radarBorderThickness: {
    type: attrTypeNum
  },
  maxcolwidth: {
    type: attrTypeNum,
    parser: function parser(config) {
      return Math.abs(config.maxcolwidth);
    }
  },
  maxbarheight: {
    type: attrTypeNum,
    parser: function parser(config) {
      return Math.abs(config.maxbarheight);
    }
  },
  plotborderalpha: {
    parser: function parser(config, pConfig) {
      return pConfig.plotborderalpha || config.plotfillalpha;
    }
  },
  autoscale: {
    type: attrTypeNum
  },
  plotborderdashlen: {
    type: attrTypeNum,
    pAttr: 'plotborderdashlen'
  },
  plotborderdashgap: {
    type: attrTypeNum,
    pAttr: 'plotborderdashgap'
  },
  plotfillratio: {
    pAttr: 'plotfillratio'
  },
  drawverticaljoins: {
    type: attrTypeNum,
    pAttr: 'drawverticaljoins'
  },
  useforwardsteps: {
    type: attrTypeNum,
    pAttr: 'useforwardsteps'
  },
  minimizetendency: {
    type: attrTypeNum
  },
  usepercentdistribution: {
    type: attrTypeNum
  },
  stepatmiddle: {
    type: attrTypeNum
  }
};

exports.attribDefs = attribDefs;
exports.parseConfiguration = parseConfiguration;
exports.setAttribDefs = setAttribDefs;
exports.hasAttribDefs = hasAttribDefs;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _raphael = __webpack_require__(39);

var _raphael2 = _interopRequireDefault(_raphael);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SPACE = ' ',
    win = window,
    doc = win.document,
    hasTouch = 'ontouchstart' in win,


/*
* Basic Events
* ~type {object} BE
*/
BE = {
  click: 'click',
  touchstart: 'touchstart',
  touchend: 'touchend',
  touchmove: 'touchmove',
  mousedown: 'mousedown',
  mouseup: 'mouseup',
  mousemove: 'mousemove',
  mouseout: 'mouseout',
  mouseover: 'mouseover',
  keydown: 'keydown'
},

/*
* An abstraction layer
* ~type {object} gestures
*/
gestures = function () {
  var retObj = {},
      gesture;

  retObj.pointerdrag = {
    start: [BE.mousedown],
    end: [BE.mouseup],
    onStart: [BE.mousemove],
    postHandlers: {},
    preHandlers: {}
  };

  retObj.pointerhover = {
    start: [BE.mouseover],
    end: [BE.mouseout]
  };

  retObj.click = {
    start: [BE.click]
  };

  /* retObj.drag = {
              start: [retObj.pointerdrag, retObj.touchdrag]
          };
           retObj.hover = {
              start: [retObj.pointerhover]
          }; */

  retObj.escape = {
    start: [BE.keydown],
    preHandlers: {
      start: function start(event) {
        /**
                       * @todo check the event keyCode and return true is it corresponds to
                       * escape key.
                       */
        event = event || win.event;
        if (event.keyCode && event.keyCode === 27) {
          return true;
        }
        return false;
      }
    }
  };

  if (hasTouch) {
    gesture = retObj.pointerdrag;

    gesture.start.push(BE.touchstart);
    gesture.end.push(BE.touchend);
    gesture.onStart.push(BE.touchmove);

    gesture.postHandlers.onStart = function (event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    };
  }

  return retObj;
}(),
    gDefs;

/*
      * Define generic gestures in terms of sequence of DOM events depending on the
      * browser.
      */
function defineGestures() {
  var gestureMap = (0, _raphael2['default'])({}, gestures); /** @todo reduce dependency on lib functions as much as possible */
  // browType = getBrowserClass();

  // switch (browType) {

  //      // Add browser vendor specific code here defining each gesture as a
  //      // sequence of events.

  //     default:
  //         break;
  // }

  return gestureMap;
}

gDefs = defineGestures();

/*
      * Gets the class of browser.
      *
      * ~returns {string} class
      *
      * ~todo classification parameters have to be decided upon.
      */
// function getBrowserClass() {
//     var browType = '';

//     return browType;
// }

/*
      * Creates a new instance of the DOM Event wrapper.
      * ~constructor
      * ~todo Enable handling of custom events.
      */
function DOMEventFx() {
  var
  /*
  * ~private {object} eventHandlerMap A map of all the handlers
  * created per event type.
  */
  eventHandlerMap = {},


  /*
  * ~private {object} gestureHandlerMap A map of all the handlers
  * created per gesture type.
  */
  gestureHandlerMap = {},


  /*
  * Binds a DOM event to a handler function.
  *
  * ~param {Element} elem The DOM element pertaining to the event.
  * ~param {string} event Event type that needs to be listened to.
  * ~param {function} handlerFn The function that gets called when the event
  * is triggered.
  *
  * ~returns {undefined}
  */
  addHandler = doc.addEventListener ? function (elem, event, handlerFn) {
    elem.addEventListener(event, handlerFn, false);
  } : function (elem, event, handlerFn) {
    elem.attachEvent('on' + event, handlerFn);
  },


  /*
  * Removes the binding of the event handler with the DOM.
  *
  * ~param {Element} elem The DOM element pertaining to the event.
  * ~param {string} event Event type for which the existing handler
  * must be detached.
  * ~param {function} handlerFn The handler function.
  *
  * ~returns {undefined}
  */
  removeHandler = doc.removeEventListener ? function (elem, event, handlerFn) {
    elem.removeEventListener(event, handlerFn, false);
  } : function (elem, event, handlerFn) {
    elem.detachEvent('on' + event, handlerFn);
  },


  /*
  * Function that finally calls the addHandler to bind the event with
  * a wrapper handler(start/end/closure).
  *
  * ~param {DOM Element} elem
  * ~param {string} event
  * ~param {object} handlerObj
  * ~param {string} [attachTo=closure] The wrapper to which to bind.
  *
  * ~return {function} The unbinding function.
  */
  addEventHandler = function addEventHandler(elem, event, handlerObj, attachTo) {
    /**
     * @todo event can later be an array once we start supporting
     * complex gestures.
     */
    var unlistener;
    attachTo = attachTo || 'closure';

    // Attach the handler to the DOM element.
    addHandler(elem, event, handlerObj[attachTo]);
    unlistener = function unlistener() {
      removeHandler(elem, event, handlerObj[attachTo]);
    };

    return unlistener;
  },


  /*
            * Converts the gesture in to a sequence of events and adds handlers
            * to the events.
            *
            * ~param {DOM Element} elem The target element.
            * ~param {string} gesture The name of the gesture.
            * ~param {object} handlerObj The object containing all the binding
            * related information.
            *
            * ~returns {array} unlisteners An array of functions that can be
            * invoked to unbind the handlers.
            */
  addGestureHandler = function addGestureHandler(elem, gesture, handlerObj) {
    var unlisteners = [],
        eventArr,
        each,
        i,
        def;

    def = gDefs[gesture];

    /*
                * The handler wrapper that must be called when the event
                * corresponding to the start to the gesture is triggered.
                *
                * ~param {object} event The browser event object.
                *
                * ~return {undefined}
                */
    handlerObj.start = function (event) {
      var onStartArr = def.onStart,
          endArr = def.end,
          startUn = [],
          endUn = [],
          i = onStartArr && onStartArr.length || 0;

      event = event || win.event;
      // startUn and endUn are arrays that contain functions to
      // unbind the handlers that were bound at the start of the
      // gesture.
      while (i--) {
        startUn.push(addEventHandler(elem, onStartArr[i], handlerObj, 'onStart'));
      }

      i = endArr && endArr.length || 0;

      while (i--) {
        endUn.push(addEventHandler(elem, endArr[i], handlerObj, 'end'));
      }

      // Storing in the handlerObj
      handlerObj.startUn = handlerObj.startUn ? handlerObj.startUn.concat(startUn) : startUn;
      handlerObj.endUn = handlerObj.endUn ? handlerObj.endUn.concat(endUn) : endUn;
      handlerObj.state = 'start';
      handlerObj.closure(event);
    };

    handlerObj.onStart = function (event) {
      event = event || win.event;
      handlerObj.state = 'on';

      if (handlerObj.gDef && handlerObj.gDef.preHandlers && typeof handlerObj.gDef.preHandlers.onStart === 'function') {
        handlerObj.gDef.preHandlers.onStart(event);
      }

      handlerObj.closure(event);

      if (handlerObj.gDef && handlerObj.gDef.postHandlers && typeof handlerObj.gDef.postHandlers.onStart === 'function') {
        handlerObj.gDef.postHandlers.onStart(event);
      }
    };

    /*
                * The handler wrapper that must be called when the event
                * corresponding to the end to the gesture is triggered.
                *
                * ~param {object} event The browser event object.
                *
                * ~return {undefined}
                */
    handlerObj.end = function (event) {
      var startUn = handlerObj.startUn,
          endUn = handlerObj.endUn,
          i = startUn && startUn.length || 0;

      event = event || win.event;
      // Unbinding the events that were bound to when the gesture
      // had started.
      while (i--) {
        startUn[i]();
      }
      delete handlerObj.startUn;
      handlerObj.startUn = [];

      i = endUn && endUn.length || 0;

      while (i--) {
        endUn[i]();
      }
      delete handlerObj.endUn;
      handlerObj.endUn = [];

      handlerObj.state = 'end';
      handlerObj.closure(event);
    };

    // Gesture
    if (def) {
      eventArr = def.start;
      i = eventArr.length;

      while (i--) {
        each = eventArr[i];
        if (each) {
          // Listen to only the event that corresponds to the
          // start of the gesture.
          unlisteners.push(addEventHandler(elem, each, handlerObj, 'start'));
        }
      }
    }

    return unlisteners;
  },


  /*
            * Unbinding the handler/gesture.
            *
            * ~param {DOM Element} elem The target element.
            * ~param {string} gesture The name of the gesture.
            * ~param {object} handlerObj The object containing all the binding
            * related information.
            *
            */
  removeGestureHandler = function removeGestureHandler(elem, gesture, handlerObj) {
    var eventArr, each, i, def;

    def = gDefs[gesture];

    // Gesture
    if (def) {
      eventArr = def.start;
      i = eventArr.length;

      while (i--) {
        each = eventArr[i];
        if (each) {
          removeHandler(elem, each, handlerObj.start);
        }
      }
    }
  },
      getHandlerClosure = function getHandlerClosure(handlerObj) {
    return function (event) {
      var ctxt = handlerObj.context || handlerObj.elem,
          eventObj;
      event = event.originalEvent || event;

      eventObj = {
        data: handlerObj.data,
        type: handlerObj.type,
        state: handlerObj.state,
        isGesture: handlerObj.isGesture,
        target: event.target || event.srcElement,
        originalEvent: event
        // more properties to be added here
      };
      event = event || win.event;
      handlerObj.handler.call(ctxt, eventObj);
    };
  };

  /*
              * Clean up the eventHandlerMap if and when elements get deleted. (or
              * handlers get reassigned or overwritten?)
              * ~returns {undefined}
              */
  // garbageCollector = function () {
  /**
                 * @todo Go through all the existing handler objects and delete
                 * the ones that do not have a proper elem or handler property.
                 *
                 * @todo Try to listen to events that are fired when DOM tree changes.
                 * and start the garbageCollector then.
                 *
                 */
  // };

  return {

    /*
              * External API to attach the handler to DOM element
              * ~param {DOM} elem The element to which the event listener
              * has to be attached.
              * ~param {string} gestures Gestures are a sequence of events.
              * ~param {function} handlers A single handler or if it is
              * an array will have a one-to-one mapping with gestures.
              * ~param {object} data The data that should be passed to the
              * handler when it is invoked
              * ~param {type} context The context in which the handler should
              * be invoked.
              *
              * ~returns {object} An object containing the method to detach
              * the handlers that have been bound to elem.
              */
    listen: function listen(elem, gestures, handlers, data, context) {
      var dem = this,
          gestureArr = typeof gestures === 'string' ? gestures.split(SPACE) : gestures,
          i = gestureArr.length,
          unlisteners = [],
          addToUnlistener = function addToUnlistener(elem, type, handler) {
        unlisteners.push(function () {
          dem.unlisten(elem, type, handler);
        });
      },
          handlerMap,
          gesture,
          handlerObj,
          isGesture,
          handler;

      if (!elem.ownerDocument || elem.ownerDocument !== doc) {
        // elem is a not a DOM element.
        while (i--) {
          gesture = gestureArr[i];
          handler = typeof handlers === 'function' ? handlers : handlers[i];

          // Internal object maintained by the event fx.
          // Should not be exposed outside.
          handlerObj = {
            handler: handler,
            elem: elem,
            type: gesture,
            isGesture: isGesture,
            data: data,
            context: context,
            start: [],
            end: [],
            links: {
              prev: null,
              next: null
            }
          };

          // Encapsulate the actual handler call within a closure so that it is
          // easier to invoke the handler in a particular context and pass
          // parameters to it.
          handlerObj.closure = getHandlerClosure(handlerObj);

          handlerMap = eventHandlerMap[gesture];
          if (!handlerMap) {
            handlerMap = eventHandlerMap[gesture] = [];
          }
          handlerMap.push(handlerObj);

          addEventHandler(elem, gesture, handlerObj);

          // Adding the unlisteners in a closure to
          // unlisten each of individual events.
          addToUnlistener(elem, gesture, handler);
        }
      } else {
        while (i--) {
          gesture = gestureArr[i];
          isGesture = Boolean(gDefs[gesture]);
          handler = typeof handlers === 'function' ? handlers : handlers[i];

          // Internal object maintained by the event fx.
          // Should not be exposed outside.
          handlerObj = {
            handler: handler,
            elem: elem,
            type: gesture,
            isGesture: isGesture,
            gDef: isGesture ? gDefs[gesture] : null,
            data: data,
            context: context,
            start: [],
            end: [],
            links: {
              prev: null,
              next: null
            }
          };

          // Encapsulate the actual handler call within a closure so that it is
          // easier to invoke the handler in a particular context and pass
          // parameters to it.
          handlerObj.closure = getHandlerClosure(handlerObj);

          // If the listener is supposed to listen to a gesture
          if (isGesture) {
            handlerMap = gestureHandlerMap[gesture];
            if (!handlerMap) {
              handlerMap = gestureHandlerMap[gesture] = [];
            }
            handlerMap.push(handlerObj);

            addGestureHandler(elem, gesture, handlerObj);
          } else {
            // else listening to a DOM event (future: custom event)
            handlerMap = eventHandlerMap[gesture];
            if (!handlerMap) {
              handlerMap = eventHandlerMap[gesture] = [];
            }
            handlerMap.push(handlerObj);

            addEventHandler(elem, gesture, handlerObj);
          }

          // Adding the unlisteners in a closure to
          // unlisten each of individual events.
          addToUnlistener(elem, gesture, handler);
        }
      }

      // Pass an object containing a method to unbind the handler for
      // ease of use.
      return {
        unlisten: function unlisten() {
          var i = unlisteners.length;
          while (i--) {
            unlisteners[i]();
          }
          // clear the unlisteners
          unlisteners.length = 0;
          unlisteners = null;
        }
      };
    },

    /*
              * External API to detach the handler from the DOM element.
              *
              * ~param {DOM} elem
              * ~param {string} gesture
              * ~param {function} handler
              *
              * ~returns {boolean} retVal
              */
    unlisten: function unlisten(elem, gesture, handler) {
      var isGesture = Boolean(gDefs[gesture]),
          eventHandlers,
          retVal = false,
          i,
          hObj;

      // Iterate over the array of handler objects for the event type
      // and remove when the element and handler of a handler object
      // matches the ones passed as arguments.
      if (!isGesture) {
        eventHandlers = eventHandlerMap[gesture];
        i = eventHandlers && eventHandlers.length || 0;

        while (i--) {
          hObj = eventHandlers[i];
          if (hObj.handler === handler && hObj.elem === elem) {
            removeHandler(elem, gesture, hObj.closure);
            eventHandlers.splice(i, 1);
            retVal = true;
          }
        }
      } else {
        eventHandlers = gestureHandlerMap[gesture];
        i = eventHandlers && eventHandlers.length || 0;

        while (i--) {
          hObj = eventHandlers[i];
          if (hObj.handler === handler && hObj.elem === elem) {
            removeGestureHandler(elem, gesture, hObj);
            eventHandlers.splice(i, 1);
            retVal = true;
          }
        }
      }

      return retVal;
    },

    /*
              * External API to fire an event on a particular DOM element.
              * ~param {object} elem
              * ~param {string} event
              * ~param {object} eventArguments
              * ~param {function} defaultFunction
              *
              * ~returns {undefined}
              */
    fire: function fire(elem, event, eventArguments, defaultFunction) {
      var eventHandlers, i, hObj, eventObj;

      // If elem is a custom object
      if (!elem.ownerDocument || elem.ownerDocument !== doc) {
        eventHandlers = eventHandlerMap[event];
        i = eventHandlers && eventHandlers.length || 0;

        while (i--) {
          hObj = eventHandlers[i];
          if (hObj.elem === elem) {
            hObj.closure(eventArguments);
          }
        }
      } else {
        // For non-IE browsers
        if (doc.createEvent) {
          eventObj = doc.createEvent('HTMLEvents');
          eventObj.initEvent(event, true, true);
          if (eventArguments) {
            if (eventArguments.originalEvent) {
              eventArguments.originalEvent = eventObj;
            } else {
              (0, _raphael2['default'])(eventObj, eventArguments);
            }
          }

          // If the event can be called as a function on the element
          // like blur, focus etc then first call them.
          if (typeof elem[event] === 'function') {
            elem[event]();
          }
          elem.dispatchEvent(eventObj);
          if (defaultFunction && !eventObj.returnValue) {
            defaultFunction(eventObj);
          }
        } else {
          // IE
          eventObj = doc.createEventObject();
          eventObj.eventType = event;
          if (eventArguments) {
            if (eventArguments.originalEvent) {
              eventArguments.originalEvent = eventObj;
            } else {
              (0, _raphael2['default'])(eventObj, eventArguments);
            }
          }

          // If the event can be called as a function on the element
          // like blur, focus etc then first call them.
          if (typeof elem[event] === 'function') {
            elem[event]();
          }

          elem.fireEvent('on' + event, eventObj);
          if (defaultFunction && !eventObj.returnValue) {
            defaultFunction(eventObj);
          }
        }
      }
    }
  };
}

exports['default'] = new DOMEventFx();

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setRootSender = exports.raiseEventWithLegacy = exports.raiseEventGroup = exports.raiseError = exports.raiseWarning = exports.disposeEvents = exports.getListeners = exports.triggerEvent = exports.removeListener = exports.addListener = undefined;

var _schedular = __webpack_require__(40);

var _schedular2 = _interopRequireDefault(_schedular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This module allows FusionCharts to work with W3C Level 2 style events for
 * allowing multiple handlers per event and also to do event driven development
 * on a global or per-chart or per-component basis.
 */
var UNDEF = void 0,
    conditionChecks = {},
    rootSender = {},

// A function to create an abstraction layer so that the try-catch /
// error suppression of flash can be avoided while raising events.
managedFnCall = function managedFnCall(item, scope, event, args) {
  // We change the scope of the function with respect to the
  // object that raised the event.
  try {
    item[0].call(scope, event, args || {});
  } catch (e) {
    // Call error in a separate thread to avoid stopping
    // of chart load.
    setTimeout(function () {
      throw e;
    }, 0);
  }
},

// Function that executes all functions that are to be invoked upon trigger
// of an event.
slotLoader = function slotLoader(slot, event, args) {
  // Initialize variables.
  var i = 0,
      scope;

  // If slot does not have a queue, we assume that the listener
  // was never added and halt method.
  if (!(slot instanceof Array) || event.cancelled) {
    // Statutory W3C NOT preventDefault flag
    return;
  }

  // Iterate through the slot and look for match with respect to
  // type and binding.
  for (; i < slot.length; i += 1) {
    // Checking if the event listener is already marked removed. If marked removed then splice the array
    if (slot[i].removed === true) {
      slot.splice(i, 1);
      i -= 1;
      continue;
    }
    // If there is a match found w.r.t. type and bind, we fire it.
    if (slot[i][1] === event.sender || slot[i][1] === UNDEF) {
      // Determine the sender of the event for global events.
      // The choice of scope differes depending on whether a
      // global or a local event is being raised.
      scope = slot[i][1] === event.sender ? event.sender : rootSender;

      managedFnCall(slot[i], scope, event, args);

      // Check if the user wanted to detach the event
      if (event.detached === true) {
        slot.splice(i, 1);
        i -= 1;
        event.detached = false;
      }
    }

    // Check whether propagation flag is set to false and discontnue
    // iteration if needed.
    if (event.cancelled === true) {
      break;
    }
  }
},
    unpropagator = function unpropagator() {
  this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call && this.originalEvent.stopPropagation();
},
    unImdPropagator = function unImdPropagator() {
  this.cancelled = true;
  if (this.originalEvent && this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation.call) {
    this.originalEvent.stopImmediatePropagation();
  } else if (this.originalEvent && this.originalEvent.stopPropagation && this.originalEvent.stopPropagation.call) {
    this.originalEvent.stopPropagation();
  }
},
    detacher = function detacher() {
  return (this.detached = true) === false;
},
    undefaulter = function undefaulter() {
  this.defaultPrevented = true;
  this.originalEvent && this.originalEvent.preventDefault && this.originalEvent.preventDefault.call && this.originalEvent.preventDefault();
},

/**
 * This function checks whether the same listener is already added or not
 * @param  {Array} slot Store where the listeners are stored
 * @param  {Function} listener The listeners function that will be called
 * @param  {Object} bind the object on which this listeners are attached.
 */
isDuplicate = function isDuplicate(slot, listener, bind) {
  var i = void 0,
      l = slot.length;
  for (i = 0; i < l; i += 1) {
    if (slot[i][0] === listener && slot[i][1] === bind && !slot[i].removed) {
      return true;
    }
  }
},


// Entire collection of listeners.
listeners = {},


// The last raised event id. Allows to calculate the next event id.
lastEventId = 0,
    addListener = function addListener(type, listener, bind) {
  var recurseReturn, i, slot;
  // In case type is sent as array, we recurse this function.
  if (type instanceof Array) {
    recurseReturn = [];
    // We look into each item of the 'type' parameter and send it,
    // along with other parameters to a recursed addListener
    // method.
    for (i = 0; i < type.length; i += 1) {
      recurseReturn.push(addListener(type[i], listener, bind));
    }
    return recurseReturn;
  }

  // Validate the type parameter. Listener cannot be added without
  // valid type.
  if (typeof type !== 'string') {
    /**
     * The event name has not been provided while adding an event listener. Ensure that you pass a
     * `string` to the first parameter of {@link FusionCharts.addEventListener}.
     *
     * @typedef {ParameterException} Error-03091549
     * @memberOf FusionCharts.debugger
     * @group debugger-error
     */
    raiseError(bind, '03091549', 'param', '::addListener', new Error('Unspecified Event Type'));
    return;
  }

  // Listener must be a function. It will not eval a string.
  if (typeof listener !== 'function') {
    /**
     * The event listener passed to {@link FusionCharts.addEventListener} needs to be a function.
     *
     * @typedef {ParameterException} Error-03091550
     * @memberOf FusionCharts.debugger
     * @group debugger-error
     */
    raiseError(bind, '03091550', 'param', '::addListener', new Error('Invalid Event Listener'));
    return;
  }

  // Desensitize the type case for user accessability.
  type = type.toLowerCase();

  // If it has a bind element, store the listeners within it
  if (bind) {
    if (!bind._evtListeners) {
      bind._evtListeners = {};
    }
    // If the insertion position does not have a queue, then create one.
    if (!(bind._evtListeners[type] instanceof Array)) {
      bind._evtListeners[type] = [];
    }
    slot = bind._evtListeners[type];
  } else {
    // If the insertion position does not have a queue, then create one.
    if (!(listeners[type] instanceof Array)) {
      listeners[type] = [];
    }
    slot = listeners[type];
  }
  // If the listener is already there, then don't add it again
  if (isDuplicate(slot, listener, bind)) {
    return false;
  }
  // Add the listener to the queue.
  slot.push([listener, bind]);
  return listener;
},
    removeListener = function removeListener(type, listener, bind) {
  var slot, i;

  // Listener must be a function. Else we have nothing to remove!
  if (typeof listener !== 'function') {
    /**
     * The event listener passed to {@link FusionCharts.removeEventListener} needs to be a function.
     * Otherwise, the event listener function has no way to know which function is to be removed.
     *
     * @typedef {ParameterException} Error-03091560
     * @memberOf FusionCharts.debugger
     * @group debugger-error
     */
    raiseError(bind, '03091560', 'param', '::removeListener', new Error('Invalid Event Listener'));
    return;
  }

  // In case type is sent as array, we recurse this function.
  if (type instanceof Array) {
    // We look into each item of the 'type' parameter and send it,
    // along with other parameters to a recursed addListener
    // method.
    for (i = 0; i < type.length; i += 1) {
      removeListener(type[i], listener, bind);
    }
    return;
  }

  // Create a reference to the slot for easy lookup in this method.
  slot = getListeners(type, bind);

  // If slot does not have a queue, we assume that the listener
  // was never added and halt method.
  if (!(slot instanceof Array && slot.length)) {
    return;
  }

  // Iterate through the slot and remove every instance of the
  // event handler.
  for (i = slot.length - 1; i >= 0; i -= 1) {
    // Remove all instances of the listener found in the queue.
    if (slot[i][0] === listener && slot[i][1] === bind) {
      // Instead of splicing the array, it is marked as removed and removed during the raising of the event
      slot[i].removed = true;
    }
  }
},


// opts can have { async:true, omni:true }
triggerEvent = function triggerEvent(type, sender, args, originalEvent, defaultFn, cancelFn) {
  var eventObject, primarySlot, secondarySlot, tertiarySlot, quaternarySlot;

  // Event namer are case incencitive
  type = type.toLowerCase();

  primarySlot = getListeners(type, sender);
  secondarySlot = getListeners('*', sender);

  tertiarySlot = listeners[type];
  quaternarySlot = listeners['*'];

  if (primarySlot && primarySlot.length || secondarySlot && secondarySlot.length || tertiarySlot && tertiarySlot.length || quaternarySlot && quaternarySlot.length) {
    // Model the event as per W3C standards. Add the function to cancel
    // event propagation by user handlers. Also append an incremental
    // event id.
    eventObject = {
      type: type,
      eventType: type,
      eventId: lastEventId += 1,
      sender: sender || new Error('Orphan Event'),
      stopPropagation: unpropagator,
      stopImmediatePropagation: unImdPropagator,
      cancelled: false,
      preventDefault: undefaulter,
      defaultPrevented: false,
      originalEvent: originalEvent,
      detached: false,
      data: args,
      detachHandler: detacher
    };

    /**
     * Event listeners are used to tap into different stages of creating, updating, rendering or removing
     * charts. A FusionCharts instance fires specific events based on what stage it is in. For example, the
     * `renderComplete` event is fired each time a chart has finished rendering. You can listen to any such
     * event using {@link FusionCharts.addEventListener} or {@link FusionCharts#addEventListener} and bind
     * your own functions to that event.
     *
     * These functions are known as "listeners" and are passed on to the second argument (`listener`) of the
     * {@link FusionCharts.addEventListener} and {@link FusionCharts#addEventListener} functions.
     *
     * @callback FusionCharts~eventListener
     * @see FusionCharts.addEventListener
     * @see FusionCharts.removeEventListener
     *
     * @param {object} eventObject - The first parameter passed to the listener function is an event object
     * that contains all information pertaining to a particular event.
     *
     * @param {string} eventObject.type - The name of the event.
     *
     * @param {number} eventObject.eventId - A unique ID associated with the event. Internally it is an
     * incrementing counter and as such can be indirectly used to verify the order in which  the event was
     * fired.
     *
     * @param {FusionCharts} eventObject.sender - The instance of FusionCharts object that fired this event.
     * Occassionally, for events that are not fired by individual charts, but are fired by the framework,
     * will have the framework as this property.
     *
     * @param {boolean} eventObject.cancelled - Shows whether an  event's propagation was cancelled or not.
     * It is set to `true` when `.stopPropagation()` is called.
     *
     * @param {function} eventObject.stopPropagation - Call this function from within a listener to prevent
     * subsequent listeners from being executed.
     *
     * @param {boolean} eventObject.defaultPrevented - Shows whether the default action of this event has been
     * prevented. It is set to `true` when `.preventDefault()` is called.
     *
     * @param {function} eventObject.preventDefault - Call this function to prevent the default action of an
     * event. For example, for the event {@link FusionCharts#event:beforeResize}, if you do
     * `.preventDefault()`, the resize will never take place and instead
     * {@link FusionCharts#event:resizeCancelled} will be fired.
     *
     * @param {boolean} eventObject.detached - Denotes whether a listener has been detached and no longer
     * gets executed for any subsequent event of this particular `type`.
     *
     * @param {function} eventObject.detachHandler - Allows the listener to remove itself rather than being
     * called externally by {@link FusionCharts.removeEventListener}. This is very useful for one-time event
     * listening or for special situations when the event is no longer required to be listened when the
     * event has been fired with a specific condition.
     *
     * @param {object} eventArgs - Every event has an argument object as second parameter that contains
     * information relevant to that particular event.
     */
    // Facilitate the call of a global event listener.
    slotLoader(quaternarySlot, eventObject, args);
    slotLoader(tertiarySlot, eventObject, args);

    // Facilitate the call of a "*" event listener.
    slotLoader(getListeners('*', sender), eventObject, args);
    slotLoader(getListeners(type, sender), eventObject, args);
  }
  // Execute default action
  if (eventObject && eventObject.defaultPrevented) {
    if (cancelFn && typeof cancelFn === 'function') {
      cancelFn.call(sender, eventObject, args || {});
      // try {
      //   cancelFn.call(sender, eventObject, args || {});
      // } catch (err) {
      //   // Call error in a separate thread to avoid stopping
      //   // of chart load.
      //   setTimeout(function () {
      //     throw err;
      //   }, 0);
      // }
    }
  } else if (defaultFn && typeof defaultFn === 'function') {
    defaultFn.call(sender, eventObject, args || {});
    // try {
    //   defaultFn.call(sender, eventObject, args || {});
    // } catch (err) {
    //   // Call error in a separate thread to avoid stopping
    //   // of chart load.
    //   setTimeout(function () {
    //     throw err;
    //   }, 0);
    // }
  }

  // Statutory W3C NOT preventDefault flag
  return true;
},
    getListeners = function getListeners(type, bind) {
  // Validate the type parameter. Listener cannot be removed without
  // valid type.
  if (typeof type !== 'string') {
    /**
     * The event name passed to {@link FusionCharts.removeEventListener} needs to be a string.
     *
     * @typedef {ParameterException} Error-03091559
     * @memberOf FusionCharts.debugger
     * @group debugger-error
     */
    raiseError(bind, '03091559', 'param', '::removeListener', new Error('Unspecified Event Type'));
    return;
  }

  // Desensitize the type case for user accessability.
  type = type.toLowerCase();
  // return listeners[type];
  return bind ? bind._evtListeners && bind._evtListeners[type] : listeners[type];
},
    disposeEvents = function disposeEvents(target) {
  var type,
      evtListeners = target ? target._evtListeners : listeners;
  // Iterate through all events in the collection of listeners
  for (type in evtListeners) {
    evtListeners[type].length && (evtListeners[type].length = 0);
  }
},

/**
 * The debugging events {@link FusionCharts.debugger#event:error} and
 * {@link FusionCharts.debugger#event:warning} pass on the "nature" of the error/warning as its argument. The
 * value of this argument is one from the following list - giving a summary of the category of the error/warning
 * raised.
 *
 * <table>
 * <thead><tr><th>Name</th><th>Description</th></tr></thead>
 * <tbody>
 * <tr><td>`TypeException`</td>
 *     <td>Type mismatch of an input being processed. For example, `null` or `undefined` has been found in an
 *         operation where only `string` type of data is expected.</td>
 * </tr>
 * <tr><td>`ValueRangeException`</td>
 *     <td>The error or warning event was caused due to a critical value involved during an operation is outside
 *         the acceptable range.</td>
 * </tr>
 * <tr><td>`ParameterException`</td>
 *     <td>This exception is caused when a parameter passed on to a function is missing or is in an unacceptable
 *         format.</td>
 * </tr>
 * <tr><td>`RuntimeException`</td>
 *     <td>When a specific combination of inputs caused a process to reach a computational error such as
 *         division by zero, mathematical operation on non-numeric values, etc - this nature of warning or error
 *         is raised.</td>
 * </tr>
 * <tr><td>`DesignTimeException`</td>
 *     <td>Specific implementations of FusionCharts library may cause issues on
 *         specific browsers. Such issues (wherever detected) is notified as `DesignTimeException`. An example
 *         for the same would be having a chart's variable name exposed rootly and also be similar to the
 *         chart's Id - this causes issue on older versions of Internet Explorer browser.</td>
 * </tr>
 * <tr><td>`NotImplementedException`</td>
 *     <td>You've hit a jackpot! The operation  that caused this error or wanning is planned, but not yet
 *         implemented. Welcome to the future!</td>
 * </tr>
 * <tr><td>`UnspecifiedException`</td>
 *     <td>Exceptions that were trapped but specific cause of the same is not ascertained.</td>
 * </tr>
 * </tbody>
 * </table>
 *
 * @name FusionCharts.debugger~errorNatures
 */
errorNatures = {
  type: 'TypeException',
  range: 'ValueRangeException',
  impl: 'NotImplementedException',
  param: 'ParameterException',
  run: 'RuntimeException',
  comp: 'DesignTimeError',
  'undefined': 'UnspecifiedException'
},

/**
 * This function raises the error event after appropriately formatting the parameters.
 *
 * @param {FusionCharts} sender
 * @param {string} id Is the error reference id.
 * @param {string} nature Is a cue as to what category of error is this. The value of this param must be same as
 * one of the "keys" within the "errorNatures" collection.
 * @param {string} source Is a cue as to which object/module caused this error.
 * @param {Error} err
 * @param {string} level Indicates whether this error event is an error or warning event. Its values can be
 * "Error" or "Warning".
 * @private
 */
raiseEWEvent = function raiseEWEvent(sender, id, nature, source, err, level) {
  // We create a human-readable message for this error.
  var message = '#' + id + ' ' + (sender ? sender.id : 'unknown-source') + source + ' ' + level + ' >> ',
      args;

  // If err is sent as error object, we input more details to the error
  // object
  if (err instanceof Error) {
    err.name = errorNatures[nature];
    err.module = 'FusionCharts' + source;
    err.level = level;

    // Update the error message.
    err.message = message + err.message;
    message = err.message;

    // Throw error in a separate scope so that the execution of this script
    // is not blocked. Do this only when debugger is enabled
    setTimeout(function () {
      throw err;
    }, 0);
  } else {
    // Append the message string to the error message and sync with err.
    message = message + err;
  }

  // Prepare the event argument object.
  args = {
    id: id,
    nature: errorNatures[nature],
    source: 'FusionCharts' + source,
    message: message
  };

  triggerEvent(level, sender, args);
},


/**
 * This function raises an "Error" event based upon the parameters passed to it.
 *
 * @param {FusionCharts} sender
 * @param {string} id Is the error reference id.
 * @param {string} nature Is a cue as to what category of error is this. The value of this param must be same as one
 * of the "keys" within the "errorNatures" collection.
 * @param {string} source Is a cue as to which object/module caused this error.
 * @param {string} message
 */
raiseError = function raiseError(sender, id, nature, source, message) {
  /**
       * FusionCharts framework is designed to be non disruptive in execution. This means that in case of an error,
       * the library would attempt recovery or graceful fallback or not render a chart. It should ideally not raise
       * a JavaScript runtime error unless at places that is intended to raise error or when unexpected runtime errors
       * occur.
       *
       * For known error causing situations, this `error` event is raised with an error code and a message guiding to
       * the possible cause of error. In situtations where charts behave unexpectedly, this event can be subscribed
       * to discover possible errors.
       *
       * Furthermore, these events are forwarded to the {@link FusionCharts.debugger} output and when `debugger` is
       * enabled, any such error event would be visible.
       *
       * @event FusionCharts.debugger#error
       * @param {string} id - Reference ID of the error being raised.
       * @param {FusionCharts.debugger~errorNatures} nature - Is a cue as to what category of error is this.
       * The value of this param must be same as one from within  the {@link FusionCharts.debugger~errorNatures}
       * collection.
       * @param {string} source - source is a cue as to which object/module caused this error.
       * @param {string} message - The content of this argument is generally a human comprehensible message denoting
       * the cause of the error being raised.
       */
  raiseEWEvent(sender, id, nature, source, message, 'Error');
},


/**
 * This function raises an "Warning" event based upon the parameters passed to it.
 *
 * @param {FusionCharts} sender
 * @param {string} id Is the error reference id.
 * @param {string} nature Is a cue as to what category of error is this. The value of this param must be same as one
 * of the "keys" within the "errorNatures" collection.
 * @param {string} source Is a cue as to which object/module caused this error.
 * @param {string} message
 */
raiseWarning = function raiseWarning(sender, id, nature, source, message) {
  /**
   * Certain implementation setup, browser or combination of the both cause unexpected scenarios during the
   * rendering process of a chart. Whenever such situations are encountered that "may" cause issue but,
   * during the propagation of the event, has been compensated for. FusionCharts keeps the developer in the loop
   * by issuing this warning event.
   *
   * @event FusionCharts.debugger#warning
   *
   * @param {string} id - Reference ID of the warning being raised.
   * @param {FusionCharts.debugger~errorNatures} nature - Is a cue as to what category of warning is this.
   * The value of this param must be same as one from within  the {@link FusionCharts.debugger~errorNatures}
   * collection.
   * @param {string} source - source is a cue as to which object/module caused this error.
   * @param {string} message - The content of this argument is generally a human comprehensible cause of the error
   * being raised.
   */
  raiseEWEvent(sender, id, nature, source, message, 'Warning');
},
    legacyEventList = {
  loaded: 'FC_Loaded',
  dataloaded: 'FC_DataLoaded',
  rendered: 'FC_Rendered',
  drawcomplete: 'FC_DrawComplete',
  dataxmlinvalid: 'FC_DataXMLInvalid',
  nodatatodisplay: 'FC_NoDataToDisplay',
  exported: 'FC_Exported',
  resized: 'FC_Resized'
},

/**
 * This method allows to uniformly raise events of FusionCharts
 * Framework.
 *
 * @param {string} name specifies the name of the event to be raised.
 * @param {Object} args allows to provide an arguments object to be
 *                      passed on to the event listeners.
 * @param {Object} obj is the FusionCharts instance object on
 *                     behalf of which the event would be raised.
 * @param {Array} legacyArgs is an array of arguments to be passed on
 *                           to the equivalent legacy event.
 * @param {Object} eventScope indicates the 'this' context of the defaultFn and cancelledFn
 * @param {Function} defaultFn the function which will be invoked when the event is triggered
 *                             successfully
 * @param {Function} cancelledFn the function which will be invoked when the event could not
 *                               be triggered successfully
 */
raiseEventWithLegacy = function raiseEventWithLegacy(name, args, obj, legacyArgs, eventScope, defaultFn, cancelledFn) {
  var legacy = legacyEventList[name];
  triggerEvent(name, obj, args, eventScope, defaultFn, cancelledFn);
  if (legacy && window && typeof window[legacy] === 'function') {
    _schedular2['default'].addJob(function () {
      window[legacy].apply(eventScope || window, legacyArgs);
    }, _schedular.priorityList.chartEvents);
  }
},


/**
 * This allows one to raise related events that are grouped together and
 * raised by multiple sources. Usually this is used where a congregation
 * of successive events need to cancel out each other and behave like a
 * unified entity.
 *
 * @param {string} check is used to identify event groups. Provide same value
 *                       for all events that you want to group together from multiple sources.
 * @param {string} name  specifies the name of the event to be raised.
 * @param {Object} args  allows to provide an arguments object to be
 *                       passed on to the event listeners.
 * @param {Object} obj     is the FusionCharts instance object on
 *                       behalf of which the event would be raised.
 * @param {Object} eventScope indicates the 'this' context of the defaultFn and cancelledFn
 * @param {Function} defaultFn the function which will be invoked when the event group is triggered
 *                             successfully
 * @param {Function} cancelledFn the function which will be invoked when the event group could not
 *                               be triggered successfully
 */
raiseEventGroup = function raiseEventGroup(check, name, args, obj, eventScope, defaultFn, cancelledFn) {
  var id = obj.id,
      hash = check + id;
  if (conditionChecks[hash]) {
    clearTimeout(conditionChecks[hash]);
    delete conditionChecks[hash];
  } else {
    if (id && hash) {
      conditionChecks[hash] = setTimeout(function () {
        triggerEvent(name, obj, args, eventScope, defaultFn, cancelledFn);
        delete conditionChecks[hash];
      }, 0);
    } else {
      triggerEvent(name, obj, args, eventScope, defaultFn, cancelledFn);
    }
  }
},

/**
 * Function to set the default sender for the events
 * @param {Object} [sender = {}] the default sender that will be assigned as the scope (this) of event handlers which has no bind
 */
setRootSender = function setRootSender() {
  var sender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  rootSender = sender;
};

exports.addListener = addListener;
exports.removeListener = removeListener;
exports.triggerEvent = triggerEvent;
exports.getListeners = getListeners;
exports.disposeEvents = disposeEvents;
exports.raiseWarning = raiseWarning;
exports.raiseError = raiseError;
exports.raiseEventGroup = raiseEventGroup;
exports.raiseEventWithLegacy = raiseEventWithLegacy;
exports.setRootSender = setRootSender;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=fusioncharts.tooltip.js.map