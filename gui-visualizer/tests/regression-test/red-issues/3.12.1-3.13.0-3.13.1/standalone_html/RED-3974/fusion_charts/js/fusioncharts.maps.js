
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
return webpackJsonpFusionCharts([4],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var fadeEffect = [{
  initialAttr: function initialAttr() {
    return { opacity: 0 };
  },
  finalAttr: function finalAttr() {
    return { opacity: 1 };
  }
}];

exports['default'] = {
  'initial.dataset.entities': function initialDatasetEntities() {
    return {
      'path.appearing': function pathAppearing() {
        fadeEffect[0].slot = 'plot';
        return fadeEffect;
      },
      'path.updating': function pathUpdating(input) {
        return [{
          finalAttr: function finalAttr() {
            return input.finalAttr;
          }
        }];
      },
      'labelConnectors.appearing': function labelConnectorsAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'labelConnectors.updating': null,
      'entityLabel.appearing': function entityLabelAppearing() {
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
  },
  'initial.dataset.markers': function initialDatasetMarkers() {
    return {
      markers: null,
      'markerItem.appearing': function markerItemAppearing() {
        fadeEffect[0].slot = 'final';
        return fadeEffect;
      },
      'markerItem.updating': function markerItemUpdating(input) {
        return [{
          finalAttr: function finalAttr() {
            return input.finalAttr;
          }
        }];
      }
    };
  },
  'initial.group.mapGroup': function initialGroupMapGroup() {
    return {
      'group.appearing': function groupAppearing(input) {
        return [{
          initialAttr: function initialAttr() {
            return (0, _assign2['default'])({ opacity: 0 }, input.attr);
          },
          finalAttr: function finalAttr() {
            return input.attr;
          },
          slot: 'plot'
        }];
      },
      'group.updating': function groupUpdating(input) {
        return [{
          initialAttr: function initialAttr() {
            return (0, _assign2['default'])({ opacity: 0 }, input.attr);
          },
          finalAttr: function finalAttr() {
            return input.attr;
          },
          slot: 'plot'
        }];
      },
      '*': null
    };
  }
};

/***/ }),

/***/ 385:
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

var _keys = __webpack_require__(22);

var _keys2 = _interopRequireDefault(_keys);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; }; /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _extAnnotation = __webpack_require__(172);

var _extAnnotation2 = _interopRequireDefault(_extAnnotation);

var _dependencyManager = __webpack_require__(6);

var _mapEntitiesAnimation = __webpack_require__(237);

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

var _lib = __webpack_require__(5);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var convertColor = _lib.graphics.convertColor,
    UNDEF = void 0,
    userAgent = window.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !window.opera,
    COMMA = ',',
    BLANK = '',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_MIDDLE = 'middle',
    POSITION_CENTER = 'center',
    CRISP = 'crisp',
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,
    isStrokeReg = /stroke/ig,
    isWebKit = /AppleWebKit/.test(userAgent),
    mathCeil = math.ceil,
    colorize = function colorize(original, obj) {
  var col = !obj ? {
    FCcolor: original
  } : (0, _lib.extend2)(original.FCcolor, obj, false, true);

  col.toString = _lib.toRaphaelColor;
  return col;
},
    pruneStrokeAttrs = function pruneStrokeAttrs(obj, thicknessModifier) {
  var key = void 0,
      returnObj = {};

  thicknessModifier = thicknessModifier || 1;

  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return returnObj;
  }

  for (key in obj) {
    if (!isStrokeReg.test(key)) {
      if (key === 'stroke-width') {
        returnObj[key] = Number(obj[key]) / thicknessModifier;

        if (isWebKit) {
          // webkit issue fix
          returnObj[key] = returnObj[key] && mathCeil(returnObj[key]) || 0;
        }
      } else {
        returnObj[key] = obj[key];
      }
    }
  }

  return returnObj;
},
    getTextWrapWidth = {
  right: function right() {
    // return x value
    return arguments[1];
  },
  left: function left(w, x) {
    return w - x;
  },
  center: function center(w, x) {
    return mathMin(x, w - x) * 2;
  }
},
    getTextWrapHeight = {
  top: function top() {
    // returns y value
    return arguments[1];
  },
  middle: function middle(h, y) {
    return mathMin(y, h - y) * 2;
  },
  bottom: function bottom(h, y) {
    return h - y;
  }
},
    convertArrayToIdMap = function convertArrayToIdMap(arr) {
  var i = arr && arr.length || 0,
      ret = {},
      item = void 0;

  while (i--) {
    item = arr[i];
    if (item.id !== UNDEF) {
      ret[item.id.toLowerCase()] = item;
    }
  }

  return ret;
};
(0, _dependencyManager.addDep)({
  name: 'mapsAnimation',
  type: 'animationRule',
  extension: _mapEntitiesAnimation2['default']
});
/**
 * Cretaes class Entities to render map entities
 */

var Entities = function (_ComponentInterface) {
  _inherits(Entities, _ComponentInterface);

  /**
   * Creates an instance of Entities
   */
  function Entities() {
    _classCallCheck(this, Entities);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.components = {};
    return _this;
  }

  /**
   * Returns the name of the component
   * @return {string} name of the component
   */


  Entities.prototype.getName = function getName() {
    return 'entities';
  };

  /**
   * Returns the type of the component
   * @return {string} type of the component
   */


  Entities.prototype.getType = function getType() {
    return 'dataset';
  };

  /**
   * Configures the entities
   * @param {Object} entityJSONDataOb JSON for dataset configurations
   */


  Entities.prototype.configureAttributes = function configureAttributes(entityJSONDataOb) {
    if (!entityJSONDataOb) {
      return;
    }
    this.JSONData = {
      data: entityJSONDataOb
    };
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        rawData = chart.jsonData,
        conf = dataset.config,
        mapAttrs = rawData.map || rawData.chart,
        entityJSONData = void 0,
        entities = void 0,
        dataItem = void 0,
        entityItem = void 0,
        item = void 0,
        minMaxArray = [],
        minMaxArrayLen = void 0,
        i = void 0,
        d = void 0,
        entityDef = rawData.entitydef || [];

    if (!conf.attachEvent) {
      dataset.addExtEventListener('legendUpdate', function () {
        d = arguments[1];
        if (d.component === 'legend') {
          dataset.legendInteractivity(d.legendItem, d.colorObj);
        } else {
          minMaxArray = d.maxMinArray;
          minMaxArrayLen = minMaxArray.length;
          for (i = 0; i < minMaxArrayLen; i++) {
            dataset.updateEntityColors(minMaxArray[i].min, minMaxArray[i].max);
          }
        }
      }, dataset.getFromEnv('colorManager'));
      conf.attachEvent = true;
    }

    if (rawData.data && rawData.data[0] && rawData.data[0].data) {
      entityJSONData = dataset.JSONData = rawData.data[0].data || [];
    } else {
      entityJSONData = dataset.JSONData = rawData.data || [];
    }
    conf.useSNameAsId = (0, _lib.pluckNumber)(mapAttrs.usesnameasid, 0);
    this._redefineEntities(entityDef);
    entities = dataset.components.data;
    conf.showTooltip = (0, _lib.pluckNumber)(mapAttrs.showtooltip, 1);
    conf.showHoverEffect = (0, _lib.pluckNumber)(mapAttrs.showhovereffect, 0);
    entityJSONData = convertArrayToIdMap(entityJSONData);
    dataset.calculateDataLimits();

    !rawData.colorrange && dataset.detachChild(dataset.getChildren('colorRange') && dataset.getChildren('colorRange')[0].getId());

    for (item in entities) {
      dataItem = entityJSONData[item];
      entityItem = entities[item];
      if (dataItem) {
        // Work on a copy of dataItem
        this._configureEntity(item, entityItem, (0, _lib.imprint)(Entities._sanitizeEntityOptions((0, _lib.extend2)({}, dataItem)), entityItem.config));
      } else {
        this._configureEntity(item, entityItem, entityItem.config);
      }
    }
  };

  /**
   * Function to update entity colors
   * @param {number} minValue minimum value of range selected
   * @param {number} maxValue maximum value of range selected
   */


  Entities.prototype.updateEntityColors = function updateEntityColors(minValue, maxValue) {
    var dataset = this,
        entities = dataset.components.data,
        chart = dataset.getFromEnv('chart'),
        entityObj = void 0,
        config = void 0,
        value = void 0,
        name = void 0,
        alphaArr = void 0,
        visibleEntityAttr = void 0,
        hiddenAttr = {
      'fill-opacity': 0
    };
    for (name in entities) {
      entityObj = entities[name];
      config = entityObj.config;
      value = config.cleanValue;
      alphaArr = config.alphaArr || [];
      visibleEntityAttr = {
        'fill-opacity': alphaArr[0] / 100 || 1
      };

      // Value outside range
      if (value < minValue || value > maxValue) {
        Entities.setCustomAttrs(entityObj, hiddenAttr, chart);
        entityObj.hidden = true;
      } else {
        entityObj.hidden = false;
        Entities.setCustomAttrs(entityObj, visibleEntityAttr, chart);
      }
    }
  };

  /**
   * Function that deals with all interactions associated with a map
   * @param {Object} legendItem corresponding legend item
   * @param {Object} entityColorObj color object of a aparticular entity
   * @memberof Entities
   */


  Entities.prototype.legendInteractivity = function legendInteractivity(legendItem, entityColorObj) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        entities = dataset.components.data,
        i = void 0,
        entity = void 0,
        config = legendItem.config,
        visible = legendItem.hasState('hidden'),
        cleanValue = void 0,
        colorRange = dataset.getFromEnv('colorManager'),
        entityAttrs = void 0,
        visibleEntityAttr = {},
        applyAttr = void 0,
        hiddenAttr = {
      'fill-opacity': 0
    },
        colorObj = void 0;
    chart.getFromEnv('animationManager').setAnimationState('legendInteraction');
    for (i in entities) {
      if (entities.hasOwnProperty(i)) {
        entity = entities[i];
        config = entity.config;
        cleanValue = config.cleanValue;
        colorObj = colorRange.getColorObj(cleanValue);
        entityAttrs = config.visibleEntityAttr;
        visibleEntityAttr['fill-opacity'] = entityAttrs['fill-opacity'];
        applyAttr = !visible ? hiddenAttr : visibleEntityAttr;
        if (entityColorObj.code === colorObj.code) {
          entity.hidden = !visible;
          Entities.setCustomAttrs(entity, applyAttr, chart);
          if (!visible) {
            legendItem.setLegendState('hidden');
          } else {
            legendItem && legendItem.removeLegendState('hidden');
          }
        }
      }
    }
  };

  /**
   * set attribute to entity grphics
   * @param {Object} entityObj paricular entity object
   * @param {Object} attrs set of attributes to be applied
   */


  Entities.setCustomAttrs = function setCustomAttrs(entityObj, attrs) {
    var elements = void 0,
        graphic = void 0;
    if (entityObj) {
      elements = entityObj.graphics;
      graphic = elements.outlines;
      // Apply animation to the entities affected by legend interaction
      // graphic.animateWith(dummyAnimElem, dummyAnimObj, attrs,
      //                 animDurations.legendTransition, animationType);
      graphic.attr(attrs);
    }
  };

  /**
   * Calculates the data limits for chart
   * @memberof Entities
   */


  Entities.prototype.calculateDataLimits = function calculateDataLimits() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        jsonData = chart.jsonData,
        dataArr = jsonData.data || [],

    // numberFormatter = chart.components.numberFormatter,
    numberFormatter = this.getFromEnv('number-formatter'),
        cleanValue = void 0,
        value = void 0,
        minValue = +Infinity,
        maxValue = -Infinity,
        len = void 0,
        i = void 0;
    for (i = 0, len = dataArr.length; i < len; i++) {
      value = dataArr[i].value;
      cleanValue = numberFormatter.getCleanValue(value);
      minValue = mathMin(minValue, cleanValue);
      maxValue = mathMax(maxValue, cleanValue);
    }
    conf.max = maxValue;
    conf.min = minValue;
  };

  /**
   * Configures particular entity
   * @param {number} id entity id
   * @param {Object} entityItem particular entity object
   * @param {Object} entityJSON entity JSON object
   */


  Entities.prototype._configureEntity = function _configureEntity(id, entityItem, entityJSON) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        numberFormatter = this.getFromEnv('number-formatter'),
        chartConf = chart.config,
        entityOpts = chartConf.entityOpts,
        entityConf = entityItem.config,
        labelConfig = entityItem.labelConfig,
        value = entityJSON.value,
        cleanValue = entityConf.cleanValue = numberFormatter.getCleanValue(value),
        formattedValue = entityConf.formattedValue = cleanValue !== UNDEF ? numberFormatter.dataLabels(cleanValue) : UNDEF,
        showTooltip = (0, _lib.pluckNumber)(entityJSON.showtooltip, entityOpts.showTooltip),
        defaultTooltip = this._getDefaultTooltip(entityItem, entityJSON, dataset),
        tooltextMacroObj = {
      formattedValue: formattedValue,
      sName: entityJSON.shortLabel,
      lName: entityJSON.label
    },
        styleObj = entityOpts.dataLabels.style,
        toolText = entityConf.toolText = showTooltip ? (0, _lib.parseUnsafeString)((0, _lib.pluck)((0, _lib.parseTooltext)((0, _lib.pluck)(entityJSON.tooltext, entityOpts.tooltext, defaultTooltip), [1, 2, 7, 38, 39], tooltextMacroObj, entityJSON))) : BLANK,
        borderColor = entityConf.borderColor = (0, _lib.pluck)(entityJSON.bordercolor, entityOpts.borderColor),
        borderAlpha = entityConf.borderAlpha = (0, _lib.pluck)(entityJSON.borderalpha, entityOpts.borderAlpha),
        borderThickness = entityConf.borderThickness = (0, _lib.pluckNumber)(entityJSON.borderthickness, entityOpts.borderThickness),
        hoverOnNull = entityOpts.hoverOnNull,
        useHoverColor = entityConf.useHoverColor = (0, _lib.pluckNumber)(entityJSON.showhovereffect, entityJSON.usehovercolor, hoverOnNull ? entityOpts.showHoverEffect : isNaN(value) ? 0 : entityOpts.showHoverEffect),
        labelAlignment = entityConf.labelAlignment,
        link = void 0,
        align = void 0,
        valign = void 0,
        color = void 0,
        alpha = void 0,
        angle = void 0,
        ratio = void 0,
        fillColor = void 0,
        fontColor = void 0,
        fontFamily = void 0,
        fontBold = void 0,
        emptyColorObject = void 0,
        fillColorObject = void 0,
        hoverColor = void 0,
        bgColor = void 0,
        labels = void 0,
        labelObj = void 0,
        oriLabels = void 0,
        i = void 0,
        alphaArr = void 0;

    // Reset the hidden flag so that on data update entity item gets visible
    entityItem.hidden = false;
    entityConf.showLabel = (0, _lib.pluckNumber)(entityJSON.showlabel, entityOpts.showLabels);
    entityConf.labelPadding = (0, _lib.pluckNumber)(entityJSON.labelpadding, entityOpts.labelPadding);
    entityConf.fontFamily = (0, _lib.pluck)(entityJSON.font, styleObj.fontFamily);
    entityConf.fontSize = (0, _lib.pluckNumber)(parseInt(entityJSON.fontsize, 10), parseInt(styleObj.fontSize, 10));
    entityConf.fontBold = (0, _lib.pluckNumber)(entityJSON.fontbold, 0);
    entityConf.fontColor = (0, _lib.pluck)(entityJSON.fontcolor, styleObj.color);
    entityConf.connectorColor = (0, _lib.pluck)(entityJSON.labelconnectorcolor, entityOpts.connectorColor);
    entityConf.connectorAlpha = (0, _lib.pluck)(entityJSON.labelconnectoralpha, entityOpts.connectorAlpha);
    entityConf.hoverBorderThickness = (0, _lib.pluckNumber)(entityJSON.borderhoverthickness, entityJSON.hoverborderthickness, entityOpts.hoverBorderThickness);
    entityConf.hoverBorderColor = (0, _lib.pluck)(entityJSON.borderhovercolor, entityJSON.hoverbordercolor, entityOpts.hoverBorderColor, entityConf.borderColor);
    entityConf.hoverBorderAlpha = (0, _lib.pluck)(entityJSON.borderhoveralpha, entityJSON.hoverborderalpha, entityOpts.hoverBorderAlpha, entityConf.borderAlpha);
    entityConf.connectorThickness = (0, _lib.pluckNumber)(entityJSON.labelconnectorthickness, entityOpts.connectorThickness);
    entityConf.origConnectorThickness = entityConf.connectorThickness;
    entityConf.borderThickness = borderThickness;
    entityConf.link = entityJSON.link;
    entityConf.isVisible = true;
    entityConf.id = id;
    entityConf.originalId = entityJSON.origId;
    if (cleanValue !== null) {
      bgColor = dataset.getFromEnv('colorManager') && dataset.getFromEnv('colorManager').getColor(cleanValue).code;
    }

    if ((0, _lib.pluck)(entityJSON.color, entityJSON.alpha, entityJSON.angle, entityJSON.ratio) !== UNDEF) {
      color = (0, _lib.pluck)(entityJSON.color, bgColor, entityOpts.fillColor);
      alpha = (0, _lib.pluck)(entityJSON.alpha, entityOpts.fillAlpha);
      angle = (0, _lib.pluck)(entityJSON.angle, entityOpts.fillAngle);
      ratio = (0, _lib.pluck)(entityJSON.ratio, entityOpts.fillRatio);

      fillColor = colorize({
        color: color,
        alpha: alpha,
        angle: angle,
        ratio: ratio
      });
    } else {
      fillColorObject = colorize({
        color: (0, _lib.pluck)(bgColor, entityOpts.fillColor),
        alpha: (0, _lib.pluck)(entityOpts.fillAlpha),
        angle: (0, _lib.pluck)(entityOpts.fillAngle),
        ratio: (0, _lib.pluck)(entityOpts.fillRatio)
      });

      emptyColorObject = colorize({
        color: (0, _lib.pluck)(entityOpts.nullEntityColor),
        alpha: (0, _lib.pluck)(entityOpts.nullEntityAlpha),
        angle: (0, _lib.pluck)(entityOpts.nullEntityAngle),
        ratio: (0, _lib.pluck)(entityOpts.nullEntityRatio)
      });

      // If value is null then set empty color for entity
      fillColor = cleanValue === null ? emptyColorObject : fillColorObject;
      color = fillColor.FCcolor.color;
      alpha = fillColor.FCcolor.alpha;
      angle = fillColor.FCcolor.angle;
      ratio = fillColor.FCcolor.ratio;
    }
    // Need to re-check whether tooltip is to be shown for blank
    // tooltext
    if (toolText === BLANK) {
      conf.showTooltip = 0;
    }

    entityConf.visibleEntityAttr = {
      stroke: convertColor(borderColor, borderAlpha),
      fill: (entityConf.fillColor = fillColor).toString(),
      'fill-opacity': alpha / 100
    };

    alphaArr = alpha.split(COMMA);

    // if (borderThickness) {
    //     alphaArr.push(borderAlpha);
    // }
    entityConf.alphaArr = alphaArr;

    if (useHoverColor) {
      if ((0, _lib.pluck)(entityJSON.fillhovercolor, entityJSON.fillhoveralpha, entityJSON.fillhoverangle, entityJSON.fillhoverratio, entityJSON.hoverfillcolor, entityJSON.hoverfillalpha, entityJSON.hoverfillratio, entityJSON.hoverfillangle) !== UNDEF) {
        color = (0, _lib.pluck)(entityJSON.fillhovercolor, entityJSON.hoverfillcolor, entityOpts.hoverFillColor);
        alpha = (0, _lib.pluck)(entityJSON.fillhoveralpha, entityJSON.hoverfillalpha, entityOpts.hoverFillAlpha);
        angle = (0, _lib.pluck)(entityJSON.fillhoverangle, entityJSON.hoverfillangle, entityOpts.hoverFillAngle);
        ratio = (0, _lib.pluck)(entityJSON.fillhoverratio, entityJSON.hoverfillratio, entityOpts.hoverFillRatio);

        hoverColor = colorize({
          color: color,
          alpha: alpha,
          angle: angle,
          ratio: ratio
        });
      } else {
        if (!entityOpts.hoverColorObject) {
          entityOpts.hoverColorObject = colorize({
            color: entityOpts.hoverFillColor,
            alpha: entityOpts.hoverFillAlpha,
            angle: entityOpts.hoverFillAngle,
            ratio: entityOpts.hoverFillRatio
          });
        }

        hoverColor = entityOpts.hoverColorObject;
      }

      entityConf.hoverColor = hoverColor;
    }

    // Entity Label configurations
    !labelConfig && (labelConfig = entityItem.labelConfig = {});
    fontColor = entityConf.fontColor;
    fontFamily = entityConf.fontFamily;
    fontBold = entityConf.fontBold;
    toolText = entityConf.toolText;
    link = entityConf.link;

    if (labelAlignment) {
      // labelPadding neednt be scaleFactored.
      align = labelAlignment[0];
      valign = labelAlignment[1];
    } else {
      align = POSITION_CENTER;
      valign = POSITION_MIDDLE;
    }
    labelConfig.align = align;
    labelConfig.vAlign = valign;
    labelConfig.bgColor = BLANK;
    labelConfig.borderColor = BLANK;
    labelConfig.fontColor = fontColor;
    labelConfig.fontFamily = fontFamily;
    labelConfig.fontBold = fontBold;
    labelConfig.toolText = toolText;
    labelConfig.link = link;

    if (_typeof(entityConf.options) === 'object') {
      labels = entityConf.entityLabels = entityConf.entityLabels || [];

      oriLabels = entityConf.labels || [];

      i = oriLabels.length;

      while (i--) {
        if (!labels[i]) {
          labels[i] = {
            config: {}
          };
        }
        labelConfig = labels[i].config;
        labelAlignment = oriLabels[i].labelAlignment;
        if (labelAlignment) {
          // labelPadding neednt be scaleFactored.
          align = labelAlignment[0];
          valign = labelAlignment[1];
        } else {
          align = POSITION_CENTER;
          valign = POSITION_MIDDLE;
        }
        labelConfig.align = align;
        labelConfig.vAlign = valign;
        labelConfig.displayValue = dataset.getDisplayValue(entityItem, oriLabels[i], entityConf.options.isDataEnabled, !i, entityJSON);

        labelConfig.bgColor = BLANK;
        labelConfig.borderColor = BLANK;
        labelConfig.toolText = toolText;
        labelConfig.align = align;
        labelConfig.vAlign = valign;
        labelConfig.bgColor = BLANK;
        labelConfig.borderColor = BLANK;
        labelConfig.fontColor = fontColor;
        labelConfig.fontFamily = fontFamily;
        labelConfig.fontBold = fontBold;
        labelConfig.toolText = toolText;
      }
    } else {
      labelObj = {
        shortText: entityConf.shortLabel,
        text: entityConf.label
      };
      labelConfig.displayValue = dataset.getDisplayValue(entityItem, labelObj, true, true, entityJSON);
    }
  };

  /**
   * Return display value of entity labels
   * @param {Object} entity entity item
   * @param {Object} labelObj [description]
   * @param {boolean} userValue whether to parse user value or not
   * @param {boolean} userDV whether to parse user display value or not
   * @param {Object} entityJSON raw JSON for entities
   * @return {string} display value of entity labels
   */


  Entities.prototype.getDisplayValue = function getDisplayValue(entity, labelObj, userValue, userDV, entityJSON) {
    var chart = this.getFromEnv('chart'),
        entityOpts = chart.config.entityOpts,
        entityConf = entity.config,
        cleanValue = entityConf.cleanValue,
        formattedValue = entityConf.formattedValue,
        labelSepChar = entityOpts.labelSepChar,
        displayValue = void 0;
    // Parsing display Value
    if (userValue) {
      if (userDV && typeof entityJSON.displayvalue !== 'undefined') {
        displayValue = entityJSON.displayvalue;
      } else {
        displayValue = (0, _lib.pluck)(entityOpts.includeNameInLabels ? entityOpts.useShortName ? labelObj.shortText : labelObj.text : '');

        if (entityOpts.includeValueInLabels && cleanValue !== null) {
          displayValue = displayValue === UNDEF ? formattedValue : displayValue + labelSepChar + formattedValue;
        }
      }
    } else {
      displayValue = entityConf.label;
    }
    return displayValue;
  };

  /**
   * Function that clears all entity options
   * @param {Object} options configuration object
   * @return {Object} configuration object
   */


  Entities._sanitizeEntityOptions = function _sanitizeEntityOptions(options) {
    delete options.outlines;
    delete options.label;
    delete options.shortlabel;
    delete options.labelposition;
    delete options.labelalignment;
    delete options.labelconnectors;

    return options;
  };

  /**
   * Redifines entities on update
   * @param {Object} entityDef entity definitions
   */


  Entities.prototype._redefineEntities = function _redefineEntities(entityDef) {
    var dataset = this,
        conf = dataset.config,
        chart = dataset.getFromEnv('chart'),
        redefinedEntities = {},
        processedIds = {},
        entities = chart.config.entities,
        useSNameAsId = conf.useSNameAsId,
        i = void 0,
        defObj = void 0,
        oldId = void 0,
        newId = void 0,
        sName = void 0,
        lName = void 0,
        id = void 0,
        newObj = void 0,
        entityCount = 0,
        entityStore = void 0,
        entityDataStore = void 0,
        item = void 0,
        entityObj = void 0;
    i = entityDef.length;

    while (i--) {
      defObj = entityDef[i];
      oldId = defObj.internalid;
      newId = defObj.newid ? defObj.newid : oldId;
      sName = defObj.sname;
      lName = defObj.lname;
      entityObj = entities[oldId];

      /**
                   * Handling the exception when the entity ids in the map js have an
                   * extra space (leading or trailing)
                   */
      oldId = (0, _lib.trimString)(oldId);
      newId = (0, _lib.trimString)(newId);
      newId = newId && newId.toLowerCase();
      if (entityObj) {
        redefinedEntities[newId] = newObj = { origId: oldId };

        // processedIds is needed to keep track of all the entities
        // that have been redefined using the entitiydef block.
        processedIds[oldId] = true;

        // not using extend2 as it involves a deep copy of the objects.
        for (item in entityObj) {
          newObj[item] = entityObj[item];
        }

        newObj.shortLabel = sName || entityObj.shortLabel;
        newObj.label = lName || entityObj.label;
        newObj.showhovereffect = defObj.showhovereffect;
        newObj.fillhovercolor = defObj.fillhovercolor;
        newObj.fillhoveralpha = defObj.fillhoveralpha;
        newObj.fillhoverangle = defObj.fillhoverangle;
        newObj.fillhoverratio = defObj.fillhoverratio;
        newObj.borderhoverthickness = defObj.borderhoverthickness;
      }
    }
    entityDataStore = dataset.components.data;
    if (!entityDataStore) {
      entityDataStore = dataset.components.data = {};
    }
    for (id in redefinedEntities) {
      id = id.toLowerCase();
      if (!entityDataStore[id]) {
        entityDataStore[id] = {
          config: {}
        };
      }
      entityDataStore[id].config = redefinedEntities[id];
      entityCount += 1;
    }
    entityStore = entityDataStore;
    for (id in entities) {
      newObj = entities[id];
      /**
                   * Handling the exception when the entity ids in the map js have an
                   * extra space (leading or trailing)
                   */
      id = (0, _lib.trimString)(id);

      if (!processedIds[id]) {
        if (useSNameAsId) {
          entityObj = entityStore[newObj.shortLabel.toLowerCase()];
          if (!entityObj) {
            entityObj = entityStore[newObj.shortLabel.toLowerCase()] = {};
          }
          entityObj.config = {};
          entityObj.origId = newObj.shortLabel;
        } else {
          entityObj = entityStore[id.toLowerCase()];
          if (!entityObj) {
            entityObj = entityStore[id.toLowerCase()] = {};
          }
          entityObj.config = {};
          entityObj.config.origId = id;
        }

        for (item in newObj) {
          entityObj.config[item] = newObj[item];
        }

        entityCount += 1;
      }
    }
    // Entity count introduced to enable the batch rendering of entities.
    conf.entityCount = entityCount;
  };

  /**
   * Draws entities
   */


  Entities.prototype.draw = function draw() {
    var dataset = this,
        conf = dataset.config,
        chart = dataset.getFromEnv('chart'),

    // The rendering should be done in samll batches only for VML.
    // For SVG increase the batch size
    // @todo Determine the batchsize in a generalized way for all browsers instead of hardcoding it.
    BATCH_SIZE = _lib.hasSVG ? 200 : 10,
        doBatchRendering = void 0;
    this.config.ready = false;
    conf.BATCH_SIZE = BATCH_SIZE;
    conf.labelBatchSize = _lib.hasSVG ? 200 : 20;
    doBatchRendering = this._batchRender();
    doBatchRendering(0);
    chart.config.entityFlag = true;
    chart.checkComplete();
  };

  /**
   * Renders large entities in a small chunk
   * @return {Function} draw entities batch wise
   */


  Entities.prototype._batchRender = function _batchRender() {
    var dataset = this,
        conf = dataset.config,
        chart = dataset.getFromEnv('chart'),

    // jobList = chart.getJobList(),
    firstEntity = chart.config.entities.firstEntity,

    // components = dataset.components,
    entities = dataset.components.data,
        batchSize = conf.BATCH_SIZE,
        keys = conf.entityKeys = firstEntity ? dataset._getKeys(firstEntity, entities) : (0, _keys2['default'])(entities),
        keysLength = conf.entityLength = keys.length,
        i = void 0,
        entityObj = void 0,
        count = void 0,
        ent = void 0,
        outlinesDrawn = void 0,
        drawEntities = function drawEntities(entityStartIndex) {
      i = entityStartIndex;
      count = 0;
      // To counter the performance issues while rendering in IE, the entities shall
      // be rendered in bat +ches of BATCH_SIZE.
      while (keys[i] !== UNDEF) {
        entityObj = entities[keys[i]];
        outlinesDrawn = dataset.drawEntity(entityObj, batchSize);
        count += outlinesDrawn;
        if (entityObj.config.drawn) {
          ent = i === keysLength - 1 ? entityObj : entities[keys[i - 1]];
          if (ent) {
            ent.config.drawn = false;
            ent.config.outlineStartIndex = UNDEF;
          }
          i++;
        }
        if (count >= batchSize) {
          // jobList.entityDrawID.push(Schedular.addJob(drawEntities, dataset, [i],
          //                       priorityList.entitydraw, true));
          dataset.addJob('entityDraw', drawEntities.bind(this, i), _schedular.priorityList.entitydraw);
          break;
        }
      }

      if (i === keysLength) {
        dataset._addEventListenersToEntities(0);
        dataset.initComplete();
      }
    };

    return drawEntities;
  };

  /**
   * Add event listeners to entities
   * @param {number} startIndex index of entity array
   */


  Entities.prototype._addEventListenersToEntities = function _addEventListenersToEntities(startIndex) {
    var dataset = this,
        entities = dataset.components.data,

    // chart = dataset.getFromEnv('chart'),
    // jobList = chart.getJobList(),
    conf = dataset.config,
        batchSize = conf.BATCH_SIZE,
        keys = conf.entityKeys,
        i = void 0,
        len = conf.entityLength,
        entity = void 0,
        count = 0,
        options = void 0,
        entityConf = void 0;

    for (i = startIndex; i < len; i++) {
      entity = entities[keys[i]];
      entityConf = entity.config;
      options = entityConf.options;
      if (!(options && options.isDataEnabled === false)) {
        dataset.addMouseGestures(entity);
      }
      count++;
      if (count === batchSize) {
        // jobList.entityDrawID.push(Schedular.addJob(dataset._addEventListenersToEntities, dataset, [i],
        //                   priorityList.entitydraw, true));
        dataset.addJob('_addEventListenersToEntities', dataset._addEventListenersToEntities.bind(this, i), _schedular.priorityList.entitydraw);
        break;
      }
    }
  };

  /**
   * Fetch keys of entity object
   * @param {Object} firstEntity reference of starting entity object
   * @param {Array} entities array of entities
   * @return {Object} key of entity object
   */


  Entities._getKeys = function _getKeys(firstEntity, entities) {
    var keys = [firstEntity],
        item = firstEntity;

    while (entities[item]) {
      item = entities[item].nextId;
      keys.push(item);
    }
    return keys;
  };

  /**
   * Fetch default tooltip of entity
   * @param {Object} entity item
   * @param {Object} entityJSON raw entity JSON object
   * @return {string} tooltip string
   */


  Entities.prototype._getDefaultTooltip = function _getDefaultTooltip(entity, entityJSON) {
    var dataset = this,
        value = entity.config.cleanValue,
        formattedValue = entity.config.formattedValue,
        entityOpts = dataset.getFromEnv('chart').config.entityOpts,
        tooltip = void 0,
        labelObj = void 0;

    if (_typeof(entity.config.options) === 'object') {
      labelObj = entityJSON.labels && entityJSON.labels[0];
      if (!labelObj) {
        return UNDEF;
      }
      tooltip = (entityOpts.useSNameInTooltip ? labelObj.shortText : labelObj.text) + (value === null ? BLANK : entityOpts.tooltipSepChar + formattedValue);
    } else {
      tooltip = (entityOpts.useSNameInTooltip ? entityJSON.shortLabel : entityJSON.label) + (value === null ? BLANK : entityOpts.tooltipSepChar + formattedValue);
    }

    return tooltip;
  };

  /**
   * Draws individual entity
   * @param {Object} entity individual entity object
   * @param {number} outlinesDrawCount number of outlines to be drawn
   * @return {number} count of entities drawn
   */


  Entities.prototype.drawEntity = function drawEntity(entity, outlinesDrawCount) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),

    // components = chart.components,
    // paper = dataset.getFromEnv('paper'),
    entityConf = entity.config,
        pathStr = _lib.hasSVG || !isIE ? 'litepath' : 'path',
        entityOpts = chart.config.entityOpts,
        outlines = entityConf.outlines,
        toolTipController = dataset.getFromEnv('toolTipController'),
        addTo = this.getLinkedParent().getChildContainer('plot'),
        shadowGroup = this.getLinkedParent().getChildContainer('plotShadow'),
        toolText = entityConf.toolText,
        showShadow = entityOpts.shadow,
        i = void 0,
        outlinePath = [],
        path = void 0,
        visibleEntityAttr = void 0,

    // fillOpacity,
    applyAttr = void 0,
        outlineGraphics = void 0,
        outline = void 0,
        count = void 0,
        customStrokeWidthModifier = void 0,
        shadowOptions = void 0;

    dataset._configureEntityDrawingParams(entity);
    entityConf = entity.config;
    visibleEntityAttr = entityConf.visibleEntityAttr;
    shadowOptions = entityConf.shadowOptions;
    // fillOpacity = entityConf.fillOpacity;

    i = entityConf.outlineStartIndex === UNDEF ? outlines.length : entityConf.outlineStartIndex;
    if (!entity.graphics) {
      entity.graphics = {};
    }
    count = 0;
    outlinePath = entityConf.outlinePath || (entityConf.outlinePath = []);
    customStrokeWidthModifier = entityConf.customStrokeWidthModifier;
    if (_typeof(entityConf.options) === 'object') {
      while (i--) {
        outlinePath = outlines[i].outline;
        if (entityConf.options.isDataEnabled === true) {
          applyAttr = visibleEntityAttr;
        } else {
          applyAttr = (0, _lib.extend2)((0, _lib.extend2)({}, visibleEntityAttr), pruneStrokeAttrs(outlines[i].style, customStrokeWidthModifier));
        }

        outlineGraphics = entity.graphics.outlines;
        if (!outlineGraphics) {
          outlineGraphics = entity.graphics.outlines = [];
        }

        !outlineGraphics[i] && (outlineGraphics[i] = {});
        outline = outlineGraphics[i].outline;
        // if (!outline) {
        //   outline = outlineGraphics[i].outline = paper[pathStr](outlinePath, addTo);
        // }

        applyAttr[pathStr] = outlinePath;
        outline = outlineGraphics[i].outline = animationManager.setAnimation({
          el: pathStr,
          container: addTo,
          attr: applyAttr,
          component: dataset,
          label: 'path'
        });

        outline.shadow(showShadow ? shadowOptions : false, shadowGroup);
        toolTipController.enableToolTip(outline, toolText);
        count++;
        entityConf.outlineStartIndex = i;
        if (count === outlinesDrawCount) {
          return count;
        }
      }

      entityConf.drawn = true;
      return count;
    } else {
      if (!entity.graphics.outlines) {
        while (i--) {
          path = outlines[i];
          outlinePath = path.concat(outlinePath);
          count++;
          entityConf.outlineStartIndex = i;
          if (count === outlinesDrawCount) {
            entityConf.outlinePath = outlinePath;
            return count;
          }
        }

        visibleEntityAttr[pathStr] = outlinePath;
        entity.graphics.outlines = animationManager.setAnimation({
          el: pathStr,
          container: addTo,
          attr: visibleEntityAttr,
          component: dataset,
          label: 'path'
        });

        // entity.graphics.outlines = paper[pathStr](outlinePath, addTo)
        //   .attr(visibleEntityAttr);
      }
      // entity.graphics.outlines.attr({
      //   'fill-opacity': 0,
      //   'stroke-opacity': 0
      // });
      entityConf.drawn = true;
      entityConf.outlineStartIndex = 0;
      entityConf.outlinePath = [];
      entity.graphics.outlines.shadow(showShadow ? shadowOptions : false, shadowGroup);
      toolTipController.enableToolTip(entity.graphics.outlines, toolText);
      return count;
    }
  };

  /**
   * Configure graphics attributes of entities
   * @param {Object} entity individual entity object
   */


  Entities.prototype._configureEntityDrawingParams = function _configureEntityDrawingParams(entity) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        entityConf = entity.config,
        entityOpts = chart.config.entityOpts,
        scalingParams = chart.config.scalingParams,
        scaleStrokes = !isIE || _lib.hasSVG,
        scaleFactor = scalingParams.scaleFactor,
        scaledPixel = scalingParams.strokeWidth,
        scaledPixelWithBaseFactor = (scaleStrokes ? chart.baseScaleFactor : 1) * scaledPixel,
        scaleBorder = entityOpts.scaleBorder === 1,
        borderThickness = entityConf.borderThickness,
        alphaArr = entityConf.alphaArr,
        connectorThickness = entityConf.origConnectorThickness,
        hoverBorderThickness = entityConf.hoverBorderThickness,
        visibleEntityAttr = entityConf.visibleEntityAttr,
        fillOpacity = visibleEntityAttr['fill-opacity'],
        customStrokeWidthModifier = void 0;

    entityConf.shadowOptions = {
      scalefactor: [scaleFactor, scaleFactor * chart.config.baseScaleFactor],
      opacity: mathMax.apply(math, alphaArr) / 100,
      useFilter: 0
    };

    entityConf.fillOpacity = entity.hidden ? 0 : fillOpacity;

    // By default scaleBorder is false.
    if (scaleStrokes) {
      // SVG
      borderThickness = entityConf.entityBorderThickness = scaleBorder ? borderThickness * scaledPixelWithBaseFactor : borderThickness / scaleFactor;
      connectorThickness = connectorThickness / scaleFactor;
      customStrokeWidthModifier = scaleBorder ? scaleFactor : scalingParams.sFactor;
      if (hoverBorderThickness) {
        hoverBorderThickness = entityConf.hoverBorderThickness = scaleBorder ? hoverBorderThickness * scaledPixelWithBaseFactor : hoverBorderThickness / scaleFactor;
      }

      // if (isWebKit) {
      // webkit issue fix
      //     borderThickness = (borderThickness && mathCeil(borderThickness)) || 0;
      //     connectorThickness = (connectorThickness && mathCeil(connectorThickness)) || 0;
      // }
    } else {
      // VML
      borderThickness = scaleBorder ? borderThickness * scaledPixel : borderThickness;
      customStrokeWidthModifier = scaleBorder ? scalingParams.scaleFactor : chart.baseScaleFactor;
    }
    entityConf.entityBorderThickness = borderThickness;
    entityConf.connectorThickness = connectorThickness;
    entityConf.customStrokeWidthModifier = customStrokeWidthModifier;
    visibleEntityAttr['stroke-width'] = borderThickness;
    visibleEntityAttr.transform = _lib.hasSVG || !isIE ? '' : scalingParams.transformStr;
  };

  /**
   * Draw entity labels
   * @param {Object} ent entity item
   * @param {Object} dataset Entity dataset component
   */


  Entities.prototype.drawLabels = function drawLabels(ent) {
    var dataset = this,
        itemMap = ent,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        batchSize = conf.labelBatchSize,
        keysLength = conf.entityLength,
        labelItems = [],
        i = void 0,
        j = void 0,
        groupItems = void 0,
        annObj = void 0,
        annCount = 0,
        mapLabelAnnotations = chart.getChildren('mapLabelAnnotations') && chart.getChildren('mapLabelAnnotations')[annCount],
        count = 0,
        labelItemsAdded = 0,
        toolTipController = chart.getFromEnv('toolTipController'),
        annConfig = chart.config.annotationConfig;
    // mapLabelAnnotations = components.mapLabelAnnotations = components.mapLabelAnnotations ||
    //                 (components.mapLabelAnnotations = []);

    // annotations = chart.getChildren('mapLabelAnnotations' + annCount) && chart.getChildren('mapLabelAnnotations' + annCount)[0];
    if (!mapLabelAnnotations) {
      annObj = new _extAnnotation2['default']();
      // annotations = mapLabelAnnotations[count] = annObj;
      chart.attachChild(annObj, 'mapLabelAnnotations');
      mapLabelAnnotations = chart.getChildren('mapLabelAnnotations')[annCount];
    }
    mapLabelAnnotations.clear();
    mapLabelAnnotations._renderer && (mapLabelAnnotations._renderer = null);
    // Entity objects should be shown above plots by default
    annConfig.showbelow = 0;

    for (i in itemMap) {
      dataset.drawLabel(itemMap[i], labelItems);
      count++;
      if (count === batchSize) {
        mapLabelAnnotations.annotation.injectDependency('paper', chart.getFromEnv('paper'));
        mapLabelAnnotations.annotation.injectDependency('toolTipController', toolTipController);
        // Set the label of entity labels
        for (j = 0; j < labelItems.length; j++) {
          labelItems[j].animationLabel = 'entityLabel';
        }
        groupItems = mapLabelAnnotations.addGroup((0, _assign2['default'])(annConfig, {
          id: 'entityLabels' + annCount,
          items: labelItems,
          animationLabel: 'entityLabelGroup'
        }), dataset);
        chart.config.labelsOnTop && groupItems.store.element.toFront();
        for (j = 0; j < groupItems.items.length; j++) {
          groupItems.items[j].addEventListener('mouseover', labelItems[j].onmouseover);
          groupItems.items[j].addEventListener('mouseout', labelItems[j].onmouseout);
          groupItems.items[j].addEventListener('click', labelItems[j].onclick);
        }
        annCount++;
        mapLabelAnnotations = chart.getChildren('mapLabelAnnotations') && chart.getChildren('mapLabelAnnotations')[annCount];
        if (!mapLabelAnnotations) {
          annObj = new _extAnnotation2['default']();
          chart.attachChild(annObj, 'mapLabelAnnotations');
          mapLabelAnnotations = chart.getChildren('mapLabelAnnotations')[annCount];
        }
        mapLabelAnnotations.clear();
        mapLabelAnnotations._renderer && (mapLabelAnnotations._renderer = null);
        count = 0;
        labelItems = [];
      } else if (labelItemsAdded === keysLength - 1) {
        mapLabelAnnotations.annotation.injectDependency('paper', chart.getFromEnv('paper'));
        mapLabelAnnotations.annotation.injectDependency('toolTipController', toolTipController);
        // Set the labels of entity labels
        for (j = 0; j < labelItems.length; j++) {
          labelItems[j].animationLabel = 'entityLabel';
        }
        groupItems = mapLabelAnnotations.addGroup((0, _assign2['default'])(annConfig, {
          id: 'entityLabels' + annCount,
          items: labelItems,
          animationLabel: 'entityLabelGroup'
        }), dataset);
        chart.config.labelsOnTop && groupItems.store.element.toFront();
        for (j = 0; j < groupItems.items.length; j++) {
          groupItems.items[j].addEventListener('mouseover', labelItems[j].onmouseover);
          groupItems.items[j].addEventListener('mouseout', labelItems[j].onmouseout);
          groupItems.items[j].addEventListener('click', labelItems[j].onclick);
        }
      }
      labelItemsAdded++;
    }
    dataset.drawLabelConnFn(0);
  };

  /**
   * Draw label connectors
   * @param {number} startIndex starting index of entity
   */


  Entities.prototype.drawLabelConnFn = function drawLabelConnFn(startIndex) {
    var dataset = this,
        conf = dataset.config,

    // chart = dataset.getFromEnv('chart'),
    // jobList = chart.getJobList(),
    entities = dataset.components.data,
        batchSize = conf.BATCH_SIZE,
        keys = conf.entityKeys,
        l = void 0,
        i = void 0,
        length = keys.length,
        labelArr = void 0,
        config = void 0,
        entity = void 0,
        count = 0;

    for (i = startIndex; i < length; i++) {
      entity = entities[keys[i]];
      config = entity.config;
      if (_typeof(config.options) === 'object') {
        labelArr = config.labels;
        l = labelArr && labelArr.length || 0;
        while (l--) {
          if (labelArr[l].labelConnectors) {
            dataset.drawLabelConnectors(entity, labelArr[l].labelConnectors, dataset);
            count++;
          }
        }
      } else {
        if (config.labelConnectors) {
          dataset.drawLabelConnectors(entity, config.labelConnectors, dataset);
          count++;
        }
      }
      if (count === batchSize) {
        // jobList.entityDrawID.push(Schedular.addJob(dataset.drawLabelConnFn, dataset, [i],
        //                   priorityList.entitydraw, true));
        dataset.addJob('drawLabelConnectors', dataset.drawLabelConnFn.bind(this, i), _schedular.priorityList.entitydraw);
        break;
      }
    }
  };

  /**
   * Return the label object to feed annotation
   * @param {Object} entity item
   * @param {number} index index of entities
   * @param {boolean} userValue determines whether to parse user value
   * @return {Object} individual label object
   */


  Entities.prototype._getLabelObject = function _getLabelObject(entity, index, userValue) {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        entityConf = entity.config,
        labelConfig = void 0,
        scalingParams = chart.config.scalingParams,
        labelPos = void 0,
        labelAlignment = void 0,
        firstEle = entity.graphics && entity.graphics.outlines,
        fontStyleObj = void 0,
        fontSize = entityConf.fontSize,
        labelPadding = entityConf.labelPadding,
        labelsArr = entityConf.labels || [],
        entityLabels = entityConf.entityLabels || [],
        baseWidth = void 0,
        baseHeight = void 0,
        labelX = void 0,
        labelY = void 0,
        box = void 0,
        align = void 0,
        valign = void 0,
        fsize = void 0,
        xOffset = void 0,
        yOffset = void 0,
        oriLabelObj = void 0,
        labelObj = void 0;

    if (index !== UNDEF) {
      oriLabelObj = labelsArr[index];
      labelObj = entityLabels[index];
      labelConfig = labelObj.config;
      fontStyleObj = labelConfig.style = oriLabelObj.style;

      labelPos = oriLabelObj.labelPosition;
      labelAlignment = oriLabelObj.labelAlignment;
    } else {
      labelConfig = entity.labelConfig;

      labelPos = entityConf.labelPosition;
      labelAlignment = entityConf.labelAlignment;
    }

    if (labelPos) {
      labelX = labelPos[0];
      labelY = labelPos[1];
    } else {
      box = firstEle.getBBox();
      labelX = box.x + box.width / 2;
      labelY = box.y + box.height / 2;
    }

    if (labelAlignment) {
      // labelPadding neednt be scaleFactored.
      align = labelAlignment[0];
      valign = labelAlignment[1];

      if (align === POSITION_RIGHT) {
        labelX -= labelPadding;
      } else if (align === POSITION_LEFT) {
        labelX += labelPadding;
      }

      if (valign === POSITION_TOP) {
        labelY -= labelPadding;
      } else if (valign === POSITION_BOTTOM) {
        labelY += labelPadding;
      }
    } else {
      align = POSITION_CENTER;
      valign = POSITION_MIDDLE;
    }

    fsize = parseFloat(fontSize) / scalingParams.sFactor;
    if (!userValue && fontStyleObj) {
      /** @todo change fill property to color as for fonts fill is non-standard */
      fontStyleObj.color && (labelConfig.fontColor = fontStyleObj.color);
      fontStyleObj['font-size'] && (fsize = parseFloat(fontStyleObj['font-size']) / scalingParams.sFactor);
      fontStyleObj['font-family'] && (labelConfig.fontFamily = fontStyleObj['font-family']);
      fontStyleObj['font-weight'] !== UNDEF && (labelConfig.fontBold = fontStyleObj['font-weight'] === 'bold');
    }
    labelConfig.x = labelX.toString();
    labelConfig.y = labelY.toString();
    labelConfig.wrap = 1;
    labelConfig.type = 'text';
    labelConfig.fontSize = fsize;
    return {
      x: labelX.toString(),
      y: labelY.toString(),
      wrapwidth: getTextWrapWidth[align](baseWidth, labelX + xOffset) - labelPadding,
      wrapheight: getTextWrapHeight[valign](baseHeight, labelY + yOffset) - labelPadding,
      wrap: 1,
      type: 'text',
      align: labelConfig.align,
      valign: labelConfig.vAlign,
      text: labelConfig.displayValue,
      tooltext: labelConfig.toolText,
      // link: labelConfig.link,
      css: labelConfig.link !== UNDEF && {
        cursor: 'pointer',
        '_cursor': 'hand'
      },
      bgcolor: labelConfig.bgColor,
      bordercolor: labelConfig.borderColor,
      fillcolor: labelConfig.fontColor,
      fontsize: labelConfig.fontSize,
      font: labelConfig.fontFamily,
      bold: labelConfig.fontBold,
      onclick: function onclick(e) {
        var hoverEnt = entity.graphics.outlines,
            i = void 0,
            len = void 0;

        // In some maps outline graphics is an array of elements for example - usmsa map
        if (hoverEnt instanceof Array) {
          for (i = 0, len = hoverEnt.length; i < len; i++) {
            dataset.entityClick(hoverEnt[i].outline, e);
          }
        } else {
          dataset.entityClick(hoverEnt, e);
        }
      },

      onmouseover: function onmouseover(e) {
        var hoverEnt = entity.graphics.outlines,
            i = void 0,
            len = void 0;

        // In some maps outline graphics is an array of elements for example - usmsa map
        if (hoverEnt instanceof Array) {
          for (i = 0, len = hoverEnt.length; i < len; i++) {
            dataset.entityRollOver(hoverEnt[i].outline, e);
          }
        } else {
          dataset.entityRollOver(hoverEnt, e);
        }
      },

      onmouseout: function onmouseout(e) {
        var hoverEnt = entity.graphics.outlines,
            i = void 0,
            len = void 0;

        // In some maps outline graphics is an array of elements for example - usmsa map
        if (hoverEnt instanceof Array) {
          for (i = 0, len = hoverEnt.length; i < len; i++) {
            dataset.entityRollOut(hoverEnt[i].outline, e);
          }
        } else {
          dataset.entityRollOut(hoverEnt, e);
        }
      },
      ontouchstart: function ontouchstart(e) {
        var hoverEnt = entity.graphics.outlines,
            i = void 0,
            len = void 0;

        // In some maps outline graphics is an array of elements for example - usmsa map
        if (hoverEnt instanceof Array) {
          for (i = 0, len = hoverEnt.length; i < len; i++) {
            dataset.entityRollOver(hoverEnt[i].outline, e);
          }
        } else {
          dataset.entityRollOver(hoverEnt, e);
        }
        dataset.entityRollOver(hoverEnt, e);
      }
    };
  };

  /**
   * Draw labels using annotaion
   * @param {Object} entity entity item
   * @param {Array} annotationsArray annotation array for labels
   */


  Entities.prototype.drawLabel = function drawLabel(entity, annotationsArray) {
    var dataset = this,
        config = entity.config,
        showLabel = config.showLabel,
        useValue = void 0,
        i = void 0,
        labelArr = void 0;

    if (!showLabel) {
      return;
    }

    if (_typeof(config.options) === 'object') {
      labelArr = config.labels;
      i = labelArr && labelArr.length || 0;

      useValue = config.options.isDataEnabled;
      while (i--) {
        annotationsArray.push(dataset._getLabelObject(entity, i, useValue, !i));
      }
    } else {
      annotationsArray.push(dataset._getLabelObject(entity, UNDEF, true, true));
    }
  };

  /**
   * Draw label connectors
   * @param {Object} entity entity item
   * @param {Array} connectorArr datalabel connector array
   * @param {Object} dataSet entity dataset object
   */


  Entities.prototype.drawLabelConnectors = function drawLabelConnectors(entity, connectorArr, dataSet) {
    var entityConf = entity.config,
        dataset = this,
        chart = dataset.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),

    // paper = dataset.getFromEnv('paper'),
    scalingParams = chart.config.scalingParams,
        datasetGroup = dataSet.getLinkedParent().getChildContainer('plot'),
        i = connectorArr && connectorArr.length || 0,
        connElem = void 0,
        path = void 0,
        showLabel = entityConf.showLabel;

    while (i--) {
      path = connectorArr[i];
      connElem = entity.graphics.connectorElem;
      if (showLabel) {
        entity.graphics.connectorElem = connElem = animationManager.setAnimation({
          el: entity.graphics.connectorElem || 'path',
          attr: {
            path: path,
            opacity: 1,
            transform: _lib.hasSVG || !isIE ? '' : scalingParams.transformStr,
            stroke: convertColor(entityConf.connectorColor, entityConf.connectorAlpha),
            'shape-rendering': CRISP,
            'stroke-width': entityConf.connectorThickness
          },
          container: datasetGroup,
          component: dataset,
          label: 'labelConnectors'
        });
      } else {
        connElem && connElem.hide();
      }
    }
  };

  /**
   * Handler function for entity click
   * @param {Object} entityElem entity graphic
   * @param {Event} e click event
   */


  Entities.prototype.entityClick = function entityClick(entityElem, e) {
    var entity = entityElem.node.__entity,
        dataset = this,
        chart = dataset.getFromEnv('chart'),
        scalingParams = chart.config.scalingParams,
        entityBox = entity.graphics.outlines.getBBox(),
        linkClickFN = chart.getFromEnv('linkClickFN'),
        config = entity.config,
        link = config.link;

    entityBox.width = entityBox.width * scalingParams.scaleFactor;
    entityBox.height = entityBox.height * scalingParams.scaleFactor;
    entityBox.x = entityBox.x * scalingParams.scaleFactor + scalingParams.translateX;
    entityBox.y = entityBox.y * scalingParams.scaleFactor + scalingParams.translateY;
    entityBox.x2 = entityBox.x + entityBox.width;
    entityBox.y2 = entityBox.y + entityBox.height;

    chart.fireChartInstanceEvent('entityclick', config.eventArgs, e);

    if (link !== UNDEF) {
      linkClickFN.call({
        link: link,
        entity: entity,
        entityBox: entityBox
      }, chart);
    }
  };

  /**
   * Handler function for entity mouse roll over
   * @param {Object} entityElem entity graphic
   * @param {Event} e mouse roll over event
   */


  Entities.prototype.entityRollOver = function entityRollOver(entityElem, e) {
    var entity = entityElem.node.__entity,
        dataset = this,
        config = entity.config,
        chart = dataset.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),
        hoverAttr = config.hoverAttr;

    _lib.plotEventHandler.call(entityElem, chart, e, 'entityRollOver');
    if (entityElem.data('hovered')) {
      clearTimeout(entity.config.timer);
    } else {
      if (config.useHoverColor && config.isVisible && !entity.hidden) {
        chart.config.hoverEntity = entityElem;
        // Highlight hovered entity with fade animation
        animationManager.setAnimation({
          el: entityElem,
          attr: hoverAttr,
          component: dataset,
          state: 'updating',
          label: 'path'
        });
        entityElem.data('hovered', true);
      }
    }
  };

  /**
   * Handler function for entity mouse roll out
   * @param {Object} entityElem entity graphic
   * @param {Event} e mouse roll out event
   */


  Entities.prototype.entityRollOut = function entityRollOut(entityElem, e) {
    var entity = entityElem.node.__entity,
        dataset = this,
        hidden = void 0,
        chart = dataset.getFromEnv('chart'),
        animationManager = chart.getFromEnv('animationManager'),
        config = entity.config,
        revertAttr = config.revertAttr;
    _lib.plotEventHandler.call(entityElem, chart, e, 'entityRollOut');
    // global.raiseEvent('entityRollOut', eventArgs, chart.chartInstance);
    entity.config.timer = setTimeout(function () {
      hidden = entity.hidden;
      if (hidden !== true) {
        // Remove highlight from entitiy
        animationManager.setAnimation({
          el: entityElem,
          attr: revertAttr,
          component: dataset,
          state: 'updating',
          label: 'path'
        });
        entityElem.data('hovered', false);
      }
    }, 100);
  };

  /**
   * Function to capture mouse activities
   * @param {Object} entity entity item
   * @memberof Entities
   */


  Entities.prototype.addMouseGestures = function addMouseGestures(entity) {
    var config = entity.config,
        originalId = config.originalId,
        dataset = this,
        graphics = entity.graphics,
        useHoverColor = config.useHoverColor,
        hoverBorderThickness = config.hoverBorderThickness,
        hoverBorderColor = config.hoverBorderColor,
        hoverBorderAlpha = config.hoverBorderAlpha,
        borderThickness = config.entityBorderThickness,
        borderColor = config.borderColor,
        borderAlpha = config.borderAlpha,
        link = config.link,
        visibleEntityAttr = config.visibleEntityAttr,
        groupId = 'groupId' + originalId,
        item = void 0,
        i = void 0,
        graphic = void 0,
        len = void 0,
        outlines = void 0,
        bindListener = function bindListener(graphic) {
      if (link !== UNDEF) {
        graphic.css({
          cursor: 'pointer',
          '_cursor': 'hand'
        });
      }

      graphic.data('eventArgs', config.eventArgs);
      graphic.data('groupId', groupId);
      graphic.node.__entity = entity;

      // If listeners are not binded
      if (!entity._listenersBinded) {
        graphic.click(dataset.entityClick.bind(dataset, graphic)).hover(dataset.entityRollOver.bind(dataset, graphic), dataset.entityRollOut.bind(dataset, graphic));
      }
    };

    config.eventArgs = {
      value: config.cleanValue,
      label: config.label,
      shortLabel: config.shortLabel,
      originalId: config.origId,
      id: config.id || config.origId
    };

    config.legacyEventArgs = {
      value: config.value,
      lName: config.label,
      sName: config.shortLabel,
      id: config.originalId || config.id
    };

    if (useHoverColor) {
      config.hoverAttr = {
        fill: (0, _lib.toRaphaelColor)(config.hoverColor)
      };
      config.revertAttr = {
        fill: (0, _lib.toRaphaelColor)(config.fillColor),
        stroke: (0, _lib.toRaphaelColor)(config.borderColor, config.borderAlpha)
      };

      config.revertAttr['fill-opacity'] = visibleEntityAttr['fill-opacity'];
      if (hoverBorderThickness !== borderThickness) {
        config.hoverAttr['stroke-width'] = (0, _lib.pluckNumber)(hoverBorderThickness, borderThickness);
        config.revertAttr['stroke-width'] = borderThickness;
      }

      /* @todo: Enable once the drawing of entities allows these
                   * hover effects to be applied properly.
                   */
      if (hoverBorderColor !== borderColor || hoverBorderAlpha !== borderAlpha) {
        config.hoverAttr.stroke = convertColor(hoverBorderColor, hoverBorderAlpha);
        config.revertAttr.stroke = convertColor(borderColor, borderAlpha);
      }
    }

    for (item in graphics) {
      if (graphics.hasOwnProperty(item)) {
        if (graphics[item] instanceof Array) {
          outlines = graphics[item];
          for (i = 0, len = outlines.length; i < len; i++) {
            graphic = outlines[i].outline;
            bindListener(graphic);
          }
          entity._listenersBinded = true;
        } else {
          graphic = graphics[item];
          bindListener(graphic);
          entity._listenersBinded = true;
        }
      }
    }
  };

  /**
   * Function which returns the upper and lower data limits.
   * @return {Object} containing the upper and lower data bounds
   * @memberof Entities
   */


  Entities.prototype.getDataLimits = function getDataLimits() {
    var dataset = this,
        conf = dataset.config;
    return {
      max: conf.max,
      min: conf.min
    };
  };

  /**
   * Function to check whether drawing of labels is complete
   *
   * @memberof Entities
   */


  Entities.prototype.initComplete = function initComplete() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        entities = dataset.components.data;
    this.drawLabels(entities);
    chart.config.entitiesReady = true;
    chart.checkComplete();
  };

  return Entities;
}(_componentInterface2['default']);

exports['default'] = Entities;

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(901);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(18);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts4['default'].addDep(_fusioncharts2['default']);
_fusioncharts4['default'].addFile('fusioncharts.maps.js');

exports['default'] = _fusioncharts4['default'];

/***/ }),

/***/ 901:
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

var _componentInterface = __webpack_require__(7);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _chartPaletteColors = __webpack_require__(199);

var defaultPaletteOption = _interopRequireWildcard(_chartPaletteColors);

var _domEvent = __webpack_require__(35);

var _domEvent2 = _interopRequireDefault(_domEvent);

var _eventApi = __webpack_require__(14);

var _lib = __webpack_require__(5);

var _extAnnotation = __webpack_require__(172);

var _extAnnotation2 = _interopRequireDefault(_extAnnotation);

var _raphael = __webpack_require__(117);

var _raphael2 = _interopRequireDefault(_raphael);

var _mapsDatasetFactory = __webpack_require__(902);

var _mapsDatasetFactory2 = _interopRequireDefault(_mapsDatasetFactory);

var _canvasFactory = __webpack_require__(296);

var _canvasFactory2 = _interopRequireDefault(_canvasFactory);

var _colorrange = __webpack_require__(224);

var _colorrange2 = _interopRequireDefault(_colorrange);

var _legendmanager = __webpack_require__(225);

var _legendmanager2 = _interopRequireDefault(_legendmanager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var defaultPaletteOptions = (0, _raphael2['default'])(defaultPaletteOption, {
  foregroundcolor: '333333',
  foregroundalpha: '100',
  foregrounddarkcolor: '111111',
  foregrounddarkalpha: '100',
  foregroundlightcolor: '666666',
  foregroundlightalpha: '100',
  backgroundlightcolor: 'FFFFFF',
  backgroundlightalpha: '100',
  backgroundlightangle: 90,
  backgroundlightratio: '',
  backgroundcolor: 'FFFFCC',
  backgroundalpha: '100',
  backgrounddarkcolor: 'ffcc66',
  backgrounddarkalpha: '100',
  backgrounddarkangle: 270,
  backgrounddarkratio: '',
  shadow: 1
}),
    zeroCommaHundredStr = '0,100',
    colorPaletteMapGlobal = {
  basefontcolor: 'foregroundcolor',
  bordercolor: 'foregrounddarkcolor',
  borderalpha: 'foregrounddarkalpha',
  bgcolor: 'backgroundlightcolor',
  bgalpha: 'backgroundlightalpha',
  bgangle: 'backgroundlightangle',
  bgratio: 'backgroundlightratio',
  canvasbordercolor: 'foregrounddarkcolor',
  canvasborderalpha: 'foregrounddarkalpha',
  canvasbgcolor: 'backgroundlightcolor',
  canvasbgalpha: 'backgroundlightalpha',
  canvasbgangle: 'backgroundlightangle',
  canvasbgratio: 'backgroundlightratio',
  tooltipbordercolor: 'foregrounddarkcolor',
  tooltipborderalpha: 'foregrounddarkalpha',
  tooltipbgcolor: 'backgroundlightcolor',
  tooltipbgalpha: 'backgroundlightalpha',
  tooltipfontcolor: 'foregroundcolor',
  legendbordercolor: 'foregrounddarkcolor',
  legendborderalpha: 'foregrounddarkalpha',
  markerbordercolor: 'foregroundlightcolor',
  markerborderalpha: 'foregroundlightalpha',
  markerfillcolor: 'backgrounddarkcolor',
  markerfillalpha: 'backgrounddarkalpha',
  markerfillangle: 'backgrounddarkangle',
  markerfillratio: 'backgrounddarkratio',
  plotfillcolor: 'backgroundcolor',
  plotfillalpha: 'backgroundalpha',
  plotfillangle: 'backgroundangle',
  plotfillratio: 'backgroundratio',
  plothoverfillcolor: 'backgrounddarkcolor',
  plothoverfillalpha: 'backgrounddarkalpha',
  plothoverfillangle: 'backgrounddarkangle',
  plothoverfillratio: 'backgrounddarkratio',
  plotbordercolor: 'foregroundcolor',
  plotborderalpha: 'foregroundalpha',
  shadow: 'shadow'
},
    eiMethodsGlobal = {
  getMapName: function getMapName() {
    var chart = this,
        iapi = chart.jsVars.instanceAPI,
        mapName = iapi.getName().toLowerCase();
    return mapName;
  },

  getEntityList: function getEntityList() {
    var chart = this,
        iapi = chart.jsVars.instanceAPI,
        datasets = iapi.getDatasets() || [],
        i = void 0,
        entities = void 0,
        dataset = void 0,
        len = datasets.length,
        entityList = [],
        data = void 0,
        entityObj = void 0,
        config = void 0,
        type = void 0;

    for (i = 0; i < len; i++) {
      dataset = datasets[i] || [];
      type = dataset.type;
      if (type === 'entity') {
        entities = dataset;
        break;
      }
    }

    data = entities.components.data;
    len = data.length;
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        entityObj = data[i] || {};
        config = entityObj.config || {};
        entityList.push({
          id: config.id,
          originalId: config.originalId || config.id,
          label: config.label,
          shortlabel: config.shortLabel,
          value: config.value,
          formattedValue: config.formattedValue,
          toolText: config.toolText
        });
      }
    }
    return entityList;
  },

  getMapAttribute: function getMapAttribute() {
    var chartObj = this;

    (0, _eventApi.raiseWarning)(this, '12061210581', 'run', 'JavaScriptRenderer~getMapAttribute()', 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".');
    return chartObj.getChartAttribute.apply(chartObj, arguments);
  },
  exportMap: function exportMap() {
    var chartObj = this;

    (0, _eventApi.raiseWarning)(this, '12061210581', 'run', 'JavaScriptRenderer~exportMap()', 'Use of deprecated "exportMap()". Replace with "exportChart()".');
    return chartObj.exportChart && chartObj.exportChart.apply(chartObj, arguments);
  },

  addMarker: function addMarker(options) {
    var iapi = this.jsVars.instanceAPI,
        datasets = iapi.getDatasets() || [],
        len = datasets.length,
        i = void 0,
        dataset = void 0,
        markers = void 0,
        type = void 0;

    for (i = 0; i < len; i++) {
      dataset = datasets[i] || [];
      type = dataset.type;
      if (type === 'markers') {
        markers = dataset;
        break;
      }
    }

    if (markers && !markers.addMarkerItem(options)) {
      (0, _eventApi.raiseWarning)(this, '1309264086', 'run', 'MapsRenderer~addMarker()', 'Failed to add marker. Check the options and try again.');
    }
  },

  updateMarker: function updateMarker(id, options) {
    var iapi = this.jsVars.instanceAPI,
        datasets = iapi.getDatasets() || [],
        len = datasets.length,
        i = void 0,
        dataset = void 0,
        markers = void 0,
        type = void 0;

    for (i = 0; i < len; i++) {
      dataset = datasets[i] || [];
      type = dataset.type;
      if (type === 'markers') {
        markers = dataset;
        break;
      }
    }

    if (markers && id) {
      id = (id + BLANK).toLowerCase();
      markers.updateMarkerItem(id, options);
    }
  },

  removeMarker: function removeMarker(id) {
    var iapi = this.jsVars.instanceAPI,
        datasets = iapi.getDatasets() || [],
        len = datasets.length,
        i = void 0,
        dataset = void 0,
        markers = void 0,
        type = void 0;

    for (i = 0; i < len; i++) {
      dataset = datasets[i] || [];
      type = dataset.type;
      if (type === 'markers') {
        markers = dataset;
        break;
      }
    }

    if (id) {
      id = (id + BLANK).toLowerCase();

      markers._removeMarkerItem(id);
    }
  }
},
    convertColor = _lib.graphics.convertColor,
    UNDEF = void 0,
    DASH_DEF = 'none',


// animDurations = {
//   click: 300,
//   hover: 300,
//   linkedScale: 1000,
//   legendTransition: 1000
// },

COMMASPACE = ', ',
    BLANK = '',
    POSITION_BOTTOM = 'bottom',
    SHAPE_CIRCLE = 'circle',
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,
    isWithinCanvas = function isWithinCanvas(e, chart) {
  var mousePos = (0, _lib.getMouseCoordinate)(chart.getFromEnv('chart-container'), e),

  /* converts the original mouse event to a Fusion
        Charts event( that has chartX, chartY, pageX and pageY as its property) */
  chartX = mousePos.chartX,
      chartY = mousePos.chartY,
      chartConfig = chart.config,
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
/**
 * Creates class ColorPalette for maps
 */

var ColorPalette = function (_ComponentInterface) {
  _inherits(ColorPalette, _ComponentInterface);

  /**
   * Instantiate ColorPalette class
   * @param {Object} hash color properties map
   * @param {number} index color palette index
   */
  function ColorPalette(hash, index) {
    _classCallCheck(this, ColorPalette);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.subpalette = '';
    _this.key = '';

    _this.index = index;
    for (_this.key in hash) {
      _this.subpalette = defaultPaletteOptions[hash[_this.key]];
      _this[_this.key] = _this.subpalette instanceof Array ? _this.subpalette[index] : _this.subpalette;
    }
    return _this;
  }

  return ColorPalette;
}(_componentInterface2['default']);
/**
 * Creates Maps class
 */


var Maps = function (_MSCartesian) {
  _inherits(Maps, _MSCartesian);

  /**
   * Instantiate Map class
   */
  function Maps() {
    _classCallCheck(this, Maps);

    // this.name = GEO;
    var _this2 = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _this2.friendlyName = 'Map';
    _this2.revision = 1;
    // this.creditLabel = CREDITS;
    _this2.hasCanvas = true;
    _this2.standaloneInit = false; // this map cannot be displayed alone
    _this2.defaultDatasetType = 'maps';
    _this2.defaultSeriesType = 'geo';
    _this2.fireGroupEvent = true;
    _this2.legendposition = 'right';
    _this2.hasGradientLegend = true;
    _this2.isMap = true;
    _this2.defaultPaletteOptions = {
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

      // Default font color should be #555555
      baseFontColor: ['555555', '60634E', '025B6A', 'A15E01', '68001B'],
      tickColor: ['333333', '60634E', '025B6A', 'A15E01', '68001B'],
      trendColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      plotFillColor: ['545454', '60634E', '415D6F', '845001', '68001B'],

      borderColor: ['767575', '545454', '415D6F', '845001', '68001B'],
      borderAlpha: [50, 50, 50, 50, 50]
    };

    _this2.colorPaletteMap = colorPaletteMapGlobal;
    _this2.eiMethods = eiMethodsGlobal;
    // decide and create legend after creating canvas
    _this2.registerFactory('legend-decider', _legendmanager2['default'], ['canvas']);

    _this2.registerFactory('axis', function () {
      // empty
    }, ['canvas']);

    // create color manager after creating legend-decider
    _this2.registerFactory('colormanager-decider', _colorrange2['default'], ['legend-decider']);

    _this2.registerFactory('dataset', _mapsDatasetFactory2['default'], ['colormanager-decider']);
    _this2.registerFactory('canvas', _canvasFactory2['default']);
    return _this2;
  }

  /**
   * function to check if the chart specific data is proper is not
   * this fn is define for specific chart types
   * @return {boolean} if JSON data is valid or not
   */


  Maps.prototype._checkInvalidSpecificData = function _checkInvalidSpecificData() {
    // @temp - need to remove
    this.config.invalid = false;
    return false;
  };

  /**
   * parse defualt configuration of the chart
   */


  Maps.prototype.__setDefaultConfig = function __setDefaultConfig() {
    var config = this.config;
    !config.baseWidth && (config.baseWidth = 400);
    !config.baseHeight && (config.baseHeight = 300);
    !config.baseScaleFactor && (config.baseScaleFactor = 1);
  };

  /**
   * Returns the name of the component
   * @return {string} name of the component
   */


  Maps.getName = function getName() {
    return 'maps';
  };

  /**
   * Returns the type of the component
   * @return {string} type of the component
   */


  Maps.getType = function getType() {
    return 'chartAPI';
  };

  /**
   * Returns the name of the component
   * @return {string} name of the component
   */


  Maps.prototype.getName = function getName() {
    return this.config.name || 'GEO';
  };

  /**
   * Returns the type of the component
   * @return {string} type of the component
   */


  Maps.prototype.getType = function getType() {
    return 'chartAPI';
  };

  /**
   * function to create component and configure and also configure the chart
   * It creates components which are depend on data and configure them and also configure chart
   * It calls helper function namely, configure
   * @param  {Object} dataObj contains json data of the chart
   */


  Maps.prototype.configureAttributes = function configureAttributes(dataObj) {
    var iapi = this,
        colorPalette = iapi.getChildren('colorPalette') && iapi.getChildren('colorPalette')[0],
        chartAttrs = void 0;

    chartAttrs = dataObj.chart = dataObj.chart || dataObj.graph || dataObj.map || {};
    iapi.jsonData = dataObj;

    (0, _lib.componentFactory)(iapi, _extAnnotation2['default'], 'mapAnnotations');

    if (!colorPalette) {
      colorPalette = new ColorPalette(this.colorPaletteMap, (chartAttrs.palette > 0 && chartAttrs.palette < 6 ? chartAttrs.palette : (0, _lib.pluckNumber)(iapi.paletteIndex, 1)) - 1);
      iapi.attachChild(colorPalette, 'colorPalette');
    }

    iapi.config.skipCanvasDrawing = true;
    _MSCartesian.prototype.configureAttributes.call(this, dataObj);
  };

  /**
   * Parse the chart attributes and store in chart's config
   * @param {Object} dataObj User input json
   */


  Maps.prototype.parseChartAttr = function parseChartAttr(dataObj) {
    var iapi = this,
        config = void 0,
        jsonData = iapi.jsonData,
        chartAttrs = jsonData.chart || jsonData.map,
        markerAttrs = jsonData.markers,

    // Select the color palette
    palette = new ColorPalette(this.colorPaletteMap, (chartAttrs.palette > 0 && chartAttrs.palette < 6 ? chartAttrs.palette : (0, _lib.pluckNumber)(iapi.paletteIndex, 1)) - 1),
        inCancolor = void 0,
        inCanFontFamily = void 0,
        inCanFontSize = void 0,
        style = void 0,
        entityBorderColor = (0, _lib.pluck)(chartAttrs.entitybordercolor, chartAttrs.bordercolor, palette.plotbordercolor),
        entityFillColor = (0, _lib.pluck)(chartAttrs.entityfillcolor, chartAttrs.fillcolor, palette.plotfillcolor),
        entityFillAlpha = (0, _lib.pluck)(chartAttrs.entityfillalpha, chartAttrs.fillalpha, palette.plotfillalpha),
        entityFillRatio = (0, _lib.pluck)(chartAttrs.entityfillratio, chartAttrs.fillratio, palette.plotfillratio),
        entityFillAngle = (0, _lib.pluck)(chartAttrs.entityfillangle, chartAttrs.fillangle, palette.plotfillangle),
        nullEntityColor = (0, _lib.pluck)(chartAttrs.nullentityfillcolor, chartAttrs.nullentitycolor, entityFillColor),
        markerDataEnabled = (0, _lib.pluckNumber)(chartAttrs.usevaluesformarkers, jsonData.markers && jsonData.markers.items && jsonData.markers.items.length, !(jsonData.markers && jsonData.markers.application && jsonData.markers.application.length && jsonData.markers.definition && jsonData.markers.definition.length));
    _MSCartesian.prototype.parseChartAttr.call(this, dataObj);
    config = iapi.config;

    config.origMarginTop = (0, _lib.pluckNumber)(chartAttrs.charttopmargin, chartAttrs.maptopmargin, 11);
    config.origMarginLeft = (0, _lib.pluckNumber)(chartAttrs.chartleftmargin, chartAttrs.mapleftmargin, 11);
    config.origMarginBottom = (0, _lib.pluckNumber)(chartAttrs.chartbottommargin, chartAttrs.mapbottommargin, 11);
    config.origMarginRight = (0, _lib.pluckNumber)(chartAttrs.chartrightmargin, chartAttrs.maprightmargin, 11);
    config.labelsOnTop = (0, _lib.pluckNumber)(chartAttrs.entitylabelsontop, 1);
    style = config.style;
    inCancolor = style.inCancolor;
    inCanFontFamily = style.inCanfontFamily;
    inCanFontSize = style.inCanfontSize;
    config.entityOpts = {
      baseScaleFactor: config.baseScaleFactor,
      dataLabels: {
        style: {
          fontFamily: inCanFontFamily,
          fontSize: inCanFontSize,
          lineHeight: style.inCanLineHeight,
          color: style.inCancolor
        }
      },
      fillColor: entityFillColor,
      fillAlpha: entityFillAlpha,
      fillRatio: entityFillRatio,
      fillAngle: entityFillAngle,
      borderColor: entityBorderColor,
      borderAlpha: (0, _lib.pluck)(chartAttrs.entityborderalpha, chartAttrs.borderalpha, iapi.borderAlpha, '100'),
      borderThickness: (0, _lib.pluckNumber)(chartAttrs.showentityborder, chartAttrs.showborder, 1) ? (0, _lib.pluckNumber)(chartAttrs.entityborderthickness, chartAttrs.borderthickness, 1) : 0,
      scaleBorder: (0, _lib.pluckNumber)(chartAttrs.scaleentityborder, chartAttrs.scaleborder, 0),
      hoverFillColor: (0, _lib.pluck)(chartAttrs.entityfillhovercolor, chartAttrs.hoverfillcolor, chartAttrs.hovercolor, palette.plothoverfillcolor),
      hoverFillAlpha: (0, _lib.pluck)(chartAttrs.entityfillhoveralpha, chartAttrs.hoverfillalpha, chartAttrs.hoveralpha, palette.plothoverfillalpha),
      hoverFillRatio: (0, _lib.pluck)(chartAttrs.entityfillhoverratio, chartAttrs.hoverfillratio, chartAttrs.hoverratio, palette.plothoverfillratio),
      hoverFillAngle: (0, _lib.pluck)(chartAttrs.entityfillhoverangle, chartAttrs.hoverfillangle, chartAttrs.hoverangle, palette.plothoverfillangle),
      hoverBorderThickness: (0, _lib.pluck)(chartAttrs.entityborderhoverthickness, chartAttrs.hoverborderthickness),
      hoverBorderColor: (0, _lib.pluck)(chartAttrs.entityborderhovercolor, entityBorderColor, palette.plotbordercolor),
      hoverBorderAlpha: (0, _lib.pluck)(chartAttrs.entityborderhoveralpha, palette.plotborderalpha),

      nullEntityColor: nullEntityColor,
      nullEntityAlpha: (0, _lib.pluck)(chartAttrs.nullentityfillalpha, chartAttrs.nullentityalpha, entityFillAlpha),
      nullEntityRatio: (0, _lib.pluck)(chartAttrs.nullentityfillratio, chartAttrs.nullentityratio, entityFillRatio),
      nullEntityAngle: (0, _lib.pluck)(chartAttrs.nullentityfillangle, chartAttrs.nullentityangle, entityFillAngle),

      connectorColor: (0, _lib.pluck)(chartAttrs.labelconnectorcolor, chartAttrs.connectorcolor, inCancolor),
      connectorAlpha: (0, _lib.pluck)(chartAttrs.labelconnectoralpha, chartAttrs.connectoralpha, '100'),
      connectorThickness: (0, _lib.pluckNumber)(chartAttrs.labelconnectorthickness, chartAttrs.borderthickness, 1),

      showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showentityhovereffect, chartAttrs.usehovercolor, chartAttrs.showhovereffect, 1),
      hoverOnNull: (0, _lib.pluckNumber)(chartAttrs.hoveronnull, chartAttrs.entityhoveronnull, 1),

      labelPadding: (0, _lib.pluckNumber)(chartAttrs.labelpadding, 5),
      showLabels: (0, _lib.pluckNumber)(chartAttrs.showlabels, 1),
      labelsOnTop: (0, _lib.pluckNumber)(chartAttrs.entitylabelsontop, 1),
      includeNameInLabels: (0, _lib.pluckNumber)(chartAttrs.includenameinlabels, 1),
      includeValueInLabels: (0, _lib.pluckNumber)(chartAttrs.includevalueinlabels, 0),
      useSNameInTooltip: (0, _lib.pluckNumber)(chartAttrs.usesnameintooltip, 0),
      useShortName: (0, _lib.pluckNumber)(chartAttrs.usesnameinlabels, 1),
      labelSepChar: (0, _lib.pluck)(chartAttrs.labelsepchar, COMMASPACE),
      showTooltip: (0, _lib.pluckNumber)(chartAttrs.showentitytooltip, chartAttrs.showtooltip, 1),
      tooltipSepChar: (0, _lib.pluck)(chartAttrs.tooltipsepchar, ', '),
      tooltext: chartAttrs.entitytooltext,
      hideNullEntities: (0, _lib.pluckNumber)(chartAttrs.hidenullentities, 0),
      showHiddenEntityBorder: (0, _lib.pluckNumber)(chartAttrs.showhiddenentityborder, 1),
      showNullEntityBorder: (0, _lib.pluckNumber)(chartAttrs.shownullentityborder, 1),
      hiddenEntityColor: (0, _lib.pluck)(chartAttrs.hiddenentitycolor, chartAttrs.hiddenentityfillcolor, chartAttrs.hiddenentityalpha || chartAttrs.hiddenentityfillalpha ? nullEntityColor : 'ffffff'),
      hiddenEntityAlpha: (0, _lib.pluck)(chartAttrs.hiddenentityalpha, chartAttrs.hiddenentityfillalpha, 0.001),

      shadow: (0, _lib.pluckNumber)(chartAttrs.showshadow, iapi.defaultPlotShadow, palette.shadow)
    };

    config.markerOpts = {
      dataLabels: {
        style: {
          fontFamily: (0, _lib.pluck)(chartAttrs.markerfont, inCanFontFamily),
          fontSize: (0, _lib.pluckNumber)(chartAttrs.markerfontsize, parseInt(inCanFontSize, 10)),
          fontColor: (0, _lib.pluck)(chartAttrs.markerfontcolor, inCancolor)
        }
      },
      showTooltip: (0, _lib.pluckNumber)(chartAttrs.showmarkertooltip, chartAttrs.showtooltip, 1),
      showLabels: (0, _lib.pluckNumber)(chartAttrs.showmarkerlabels, chartAttrs.showlabels, 1),
      showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showmarkerhovereffect, 1),
      labelPadding: (0, _lib.pluck)(chartAttrs.markerlabelpadding, '5'),
      labelWrapWidth: (0, _lib.pluckNumber)(chartAttrs.markerlabelwrapwidth, 0),
      labelWrapHeight: (0, _lib.pluckNumber)(chartAttrs.markerlabelwrapheight, 0),
      fillColor: (0, _lib.pluck)(chartAttrs.markerfillcolor, chartAttrs.markerbgcolor, palette.markerfillcolor), // has a legacy attr
      fillAlpha: (0, _lib.pluck)(chartAttrs.markerfillalpha, palette.markerfillalpha),
      fillAngle: (0, _lib.pluck)(chartAttrs.markerfillangle, palette.markerfillangle),
      fillRatio: (0, _lib.pluck)(chartAttrs.markerfillratio, palette.markerfillratio),
      fillPattern: (0, _lib.pluck)(chartAttrs.markerfillpattern, palette.markerbgpattern),
      hoverFillColor: chartAttrs.markerfillhovercolor,
      hoverFillAlpha: chartAttrs.markerfillhoveralpha,
      hoverFillRatio: chartAttrs.markerfillhoverratio,
      hoverFillAngle: chartAttrs.markerfillhoverangle,
      borderThickness: (0, _lib.pluck)(chartAttrs.markerborderthickness, 1),
      borderColor: (0, _lib.pluck)(chartAttrs.markerbordercolor, palette.markerbordercolor),
      borderAlpha: (0, _lib.pluckNumber)(chartAttrs.markerborderalpha, palette.markerborderalpha),
      hoverBorderThickness: chartAttrs.markerborderhoverthickness,
      hoverBorderColor: chartAttrs.markerborderhovercolor,
      hoverBorderAlpha: chartAttrs.markerborderhoveralpha,
      radius: (0, _lib.pluckNumber)(chartAttrs.markerradius && (0, _lib.trimString)(chartAttrs.markerradius), 7),
      shapeId: (0, _lib.pluck)(chartAttrs.defaultmarkershape, SHAPE_CIRCLE),
      labelSepChar: (0, _lib.pluck)(chartAttrs.labelsepchar, COMMASPACE),
      tooltipSepChar: (0, _lib.pluck)(chartAttrs.tooltipsepchar, ', '),
      autoScale: (0, _lib.pluckNumber)(chartAttrs.autoscalemarkers, 0),
      tooltext: (0, _lib.pluck)(markerAttrs && markerAttrs.tooltext, chartAttrs.markertooltext),

      /* Value related attributes */
      dataEnabled: markerDataEnabled,
      valueToRadius: (0, _lib.pluckNumber)(chartAttrs.markerradiusfromvalue, 1),
      valueMarkerAlpha: (0, _lib.pluck)(chartAttrs.valuemarkeralpha, '75'),
      hideNull: (0, _lib.pluckNumber)(chartAttrs.hidenullmarkers, 0),
      nullRadius: (0, _lib.pluckNumber)(chartAttrs.nullmarkerradius, chartAttrs.markerradius, 7),
      adjustViewPort: (0, _lib.pluckNumber)(chartAttrs.adjustviewportformarkers, 0),
      startAngle: (0, _lib.pluckNumber)(chartAttrs.markerstartangle, 90),
      maxRadius: (0, _lib.pluckNumber)(chartAttrs.maxmarkerradius, 0),
      minRadius: (0, _lib.pluckNumber)(chartAttrs.minmarkerradius, 0),
      applyAll: (0, _lib.pluckNumber)(chartAttrs.applyallmarkers, 0),
      shadow: (0, _lib.pluckNumber)(chartAttrs.showmarkershadow, chartAttrs.showshadow, 0)
    };
    config.connectorOpts = {
      showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showconnectorhovereffect, 1),
      thickness: (0, _lib.pluckNumber)(chartAttrs.connectorthickness, chartAttrs.markerconnthickness, '2'),
      color: (0, _lib.pluck)(chartAttrs.connectorcolor, chartAttrs.markerconncolor, palette.markerbordercolor),
      alpha: (0, _lib.pluck)(chartAttrs.connectoralpha, chartAttrs.markerconnalpha, '100'),
      hoverThickness: (0, _lib.pluckNumber)(chartAttrs.connectorhoverthickness, chartAttrs.connectorthickness, chartAttrs.markerconnthickness, '2'),
      hoverColor: (0, _lib.pluck)(chartAttrs.connectorhovercolor, chartAttrs.connectorcolor, chartAttrs.markerconncolor, palette.markerbordercolor),
      hoverAlpha: (0, _lib.pluck)(chartAttrs.connectorhoveralpha, chartAttrs.connectoralpha, chartAttrs.markerconnalpha, '100'),
      dashed: (0, _lib.pluckNumber)(chartAttrs.connectordashed, chartAttrs.markerconndashed, 0),
      dashLen: (0, _lib.pluckNumber)(chartAttrs.connectordashlen, chartAttrs.markerconndashlen, 3),
      dashGap: (0, _lib.pluckNumber)(chartAttrs.connectordashgap, chartAttrs.markerconndashgap, 2),
      font: (0, _lib.pluck)(chartAttrs.connectorfont, chartAttrs.markerconnfont, inCanFontFamily),
      fontColor: (0, _lib.pluck)(chartAttrs.connectorfontcolor, chartAttrs.markerconnfontcolor, inCancolor),
      fontSize: (0, _lib.pluckNumber)(chartAttrs.connectorfontsize, chartAttrs.markerconnfontsize, parseInt(inCanFontSize, 10)),
      showLabels: (0, _lib.pluckNumber)(chartAttrs.showconnectorlabels, chartAttrs.showmarkerlabels, chartAttrs.showlabels, 1),
      labelBgColor: (0, _lib.pluck)(chartAttrs.connectorlabelbgcolor, chartAttrs.markerconnlabelbgcolor, palette.plotfillcolor),
      labelBorderColor: (0, _lib.pluck)(chartAttrs.connectorlabelbordercolor, chartAttrs.markerconnlabelbordercolor, palette.markerbordercolor),
      shadow: (0, _lib.pluckNumber)(chartAttrs.showconnectorshadow, chartAttrs.showmarkershadow, chartAttrs.showshadow, 0),
      showTooltip: (0, _lib.pluckNumber)(chartAttrs.showconnectortooltip, chartAttrs.showmarkertooltip, chartAttrs.showtooltip, 1),
      tooltext: (0, _lib.pluck)(markerAttrs && markerAttrs.connectortooltext, chartAttrs.connectortooltext),
      hideOpen: (0, _lib.pluckNumber)(chartAttrs.hideopenconnectors, 1)
    };
    config.adjustViewPortForMarkers = (0, _lib.pluckNumber)(chartAttrs.adjustviewportformarkers, markerDataEnabled);
  };

  /**
   * Attach mouse events
   */


  Maps.prototype._attachMouseEvents = function _attachMouseEvents() {
    var iapi = this,
        listeners = iapi.getFromEnv('eventListeners'),

    // containerElem = iapi.linkedItems.container;
    containerElem = iapi.getFromEnv('chart-container');

    if (!listeners) {
      listeners = [];
      iapi.addToEnv('eventListeners', listeners);
    }

    // remove any existing events if any
    _domEvent2['default'].unlisten(containerElem, _lib.hasTouch ? 'touchstart' : 'mousemove', Maps.searchMouseMove);
    // adds to event stack.
    listeners.push(_domEvent2['default'].listen(containerElem, 'touchstart mousemove', Maps.searchMouseMove, iapi));
  };

  /**
   * Searches for point on mouse move
   * @param {Event} e mouse move event
   */


  Maps.searchMouseMove = function searchMouseMove(e) {
    var mousePos = void 0,
        chart = e.data,
        chartConfig = chart.config,
        lastMouseCoordinate = {};

    if (!chart.getFromEnv('chart-container')) {
      return;
    }

    // check if the event is fired within the canvas region.
    if ((mousePos = isWithinCanvas(e, chart)) && mousePos.insideCanvas) {
      // store the evnt object. This will be used to generate event on same coordinate
      chartConfig.lastMouseEvent = e;
      lastMouseCoordinate = {
        x: mousePos.chartX,
        y: mousePos.chartY
      };

      // search the best neighbouring point of the mouse moved point.
      chart._searchNearestNeighbour(lastMouseCoordinate);
    }
  };

  /**
   * Searches for nearest point on mouse move using kdTree
   * @param {Object} point point object
   */


  Maps.prototype._searchNearestNeighbour = function _searchNearestNeighbour(point) {
    var iapi = this,

    // datasets = iapi.components.dataset,
    datasets = iapi.getDatasets(),
        markers = datasets[1],
        kdPoint = void 0;

    if (markers) {
      if (!markers.components.kDTree) {
        return;
      }
      // searches the nearest neighbouring point of the input point.
      kdPoint = markers.getElement(point);
      if (kdPoint) {
        iapi.config.lastHoveredPoint !== kdPoint && markers.highlightPoint(kdPoint);
      } else {
        markers.highlightPoint(false);
      }
    }
  };

  /**
   * Create group layers graphics
   */


  Maps.prototype._createLayers = function _createLayers() {
    _MSCartesian.prototype._createLayers.call(this);
    this._attachMouseEvents();
  };
  /**
   * Function to parse background cosmetics
   * @memberof GEO
   */


  Maps.prototype._parseBackgroundCosmetics = function _parseBackgroundCosmetics() {
    var iapi = this,
        background = iapi.getChildren('background')[0],
        config = background.config,

    // palette = iapi.components.colorPalette,
    palette = iapi.getChildren('colorPalette')[0],
        chartAttrs = iapi.getFromEnv('chart-attrib'),
        showBorder = void 0;
    showBorder = config.showBorder = (0, _lib.pluckNumber)(chartAttrs.showcanvasborder, 1);
    config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.canvasborderthickness, 1) : 0;
    config.borderRadius = config.borderRadius = (0, _lib.pluckNumber)(chartAttrs.canvasborderradius, 0);
    config.borderDashStyle = config.borderDashStyle = (0, _lib.pluckNumber)(chartAttrs.borderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(chartAttrs.borderdashlen, 4), (0, _lib.pluckNumber)(chartAttrs.borderdashgap, 2)) : DASH_DEF;
    config.borderColor = config.borderColor = convertColor((0, _lib.pluck)(chartAttrs.canvasbordercolor, palette && palette.borderColor));
    config.borderAlpha = (0, _lib.pluck)(chartAttrs.canvasborderalpha, palette.borderAlpha);
  };

  /**
   * Function to create background cosmetics
   * @return {Object} color object for background
   * @memberof GEO
   */


  Maps.prototype._getBackgroundCosmetics = function _getBackgroundCosmetics() {
    var iapi = this,
        chartAttrs = iapi.getFromEnv('chart-attrib') || iapi.jsonData.map,
        palette = iapi.getChildren('colorPalette')[0];

    return {
      FCcolor: {
        color: (0, _lib.pluck)(chartAttrs.bgcolor, chartAttrs.canvasbgcolor, palette.bgcolor),
        alpha: (0, _lib.pluck)(chartAttrs.bgalpha, chartAttrs.canvasbgalpha, palette.bgalpha),
        angle: (0, _lib.pluck)(chartAttrs.bgangle, chartAttrs.canvasbgangle, palette.bgangle),
        ratio: (0, _lib.pluck)(chartAttrs.bgratio, chartAttrs.canvasbgratio, palette.bgratio)
      }
    };
  };

  /**
   * Function to parse background cosmetics
   * @memberof GEO
   */


  Maps.prototype._parseCanvasCosmetics = function _parseCanvasCosmetics() {
    _MSCartesian.prototype._parseCanvasCosmetics.call(this);
    var iapi = this,
        config = iapi.config,
        chartAttrs = iapi.getFromEnv('chart-attrib') || iapi.jsonData.map,

    // canvasConfig = components.canvas.config
    canvasConfig = iapi.getChildren('canvas')[0].config;

    // borderThickness = pluckNumber(chartAttrs.showborder, 1) ? pluckNumber(chartAttrs.borderthickness, 1) : 0;
    // chart margins
    config.origMarginTop = (0, _lib.pluckNumber)(chartAttrs.maptopmargin, 11);
    config.origMarginLeft = (0, _lib.pluckNumber)(chartAttrs.mapleftmargin, 11);
    config.origMarginBottom = (0, _lib.pluckNumber)(chartAttrs.mapbottommargin, 11);
    config.origMarginRight = (0, _lib.pluckNumber)(chartAttrs.maprightmargin, 11);

    config.origCanvasLeftMargin = (0, _lib.pluckNumber)(chartAttrs.canvasleftmargin, 0);
    config.origCanvasRightMargin = (0, _lib.pluckNumber)(chartAttrs.canvasrightmargin, 0);
    config.origCanvasTopMargin = (0, _lib.pluckNumber)(chartAttrs.canvastopmargin, 0);
    config.origCanvasBottomMargin = (0, _lib.pluckNumber)(chartAttrs.canvasbottommargin, 0);

    canvasConfig.canvasBorderRadius = (0, _lib.pluckNumber)(chartAttrs.canvasborderradius, 0);
    // canvas padding
    canvasConfig.origCanvasTopPad = (0, _lib.pluckNumber)(chartAttrs.canvastoppadding, 0);
    canvasConfig.origCanvasBottomPad = (0, _lib.pluckNumber)(chartAttrs.canvasbottompadding, 0);
    canvasConfig.origCanvasLeftPad = (0, _lib.pluckNumber)(chartAttrs.canvasleftpadding, 0);
    canvasConfig.origCanvasRightPad = (0, _lib.pluckNumber)(chartAttrs.canvasrightpadding, 0);
  };

  /**
   * Function to scale markers
   * @return {Object} scaled coordinates
   * @memberof GEO
   */


  Maps.prototype.preliminaryScaling = function preliminaryScaling() {
    var iapi = this,
        jsonData = iapi.jsonData,
        markerArray = jsonData.markers && jsonData.markers.items || [],
        i = markerArray && markerArray.length || 0,
        minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity,
        x = void 0,
        y = void 0,
        item = void 0;

    while (i--) {
      item = markerArray[i];

      x = Number(item.x);
      y = Number(item.y);

      minX = mathMin(minX, x);
      minY = mathMin(minY, y);
      maxX = mathMax(maxX, x);
      maxY = mathMax(maxY, y);
    }

    return {
      x: minX,
      y: minY,
      x1: maxX,
      y1: maxY
    };
  };

  /**
   * [getScalingParameters description]
   * @param {number} wg original width
   * @param {number} hg original height
   * @param {number} wv scaled width
   * @param {number} hv scaled height
   * @return {Object} scaled properties
   */


  Maps.prototype.getScalingParameters = function getScalingParameters(wg, hg, wv, hv) {
    var iapi = this,
        aspR = wg / hg,
        widthScaleR = wv / (wg * iapi.config.baseScaleFactor),
        heightScaleR = hv / (hg * iapi.config.baseScaleFactor),
        translateX = 0,
        translateY = 0,
        scaleFactor = void 0,
        strokeWidth = void 0;

    if (widthScaleR > heightScaleR) {
      scaleFactor = heightScaleR;
      translateX += (wv - hv * aspR) / 2;
      strokeWidth = 200 / (hg * scaleFactor);
    } else {
      scaleFactor = widthScaleR;
      translateY += (hv - wv / aspR) / 2;
      strokeWidth = 200 / (wg * scaleFactor);
    }

    return {
      scaleFactor: scaleFactor,
      strokeWidth: strokeWidth,
      translateX: translateX,
      translateY: translateY
    };
  };

  /**
   * Calculates marker bounds (coordinates, dimention)
   * @param {number} scaleFactor factor of scaling
   * @param {number} xOffset x coordinate offset
   * @param {number} yOffset y coordinate offset
   * @return {Object} scaled coordinates
   */


  Maps.prototype.calculateMarkerBounds = function calculateMarkerBounds(scaleFactor, xOffset, yOffset) {
    var iapi = this,
        config = iapi.config,
        markerOptions = config.markerOpts,

    // datasets = iapi.components.dataset,
    datasets = iapi.getDatasets(),
        limits = iapi.getDataLimits(),
        dataMin = limits.dataMin,
        dataMax = limits.dataMax,
        hideNull = markerOptions.hideNull,
        nullRadius = markerOptions.nullRadius,
        v2r = markerOptions.valueToRadius,
        markerDataset = void 0,
        markerConf = void 0,
        minR = void 0,
        maxR = void 0,
        markerArray = void 0,
        i = void 0,
        name = void 0,
        dataset = void 0,
        len = void 0,
        minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity,
        x = void 0,
        y = void 0,
        r = void 0,
        definition = void 0,
        item = void 0;

    for (i = 0, len = datasets.length; i < len; i++) {
      dataset = datasets[i];
      name = dataset.getName();
      if (name === 'Markers') {
        markerDataset = dataset;
      }
    }

    if (markerDataset) {
      markerDataset.calculateMarkerRadiusLimits();
      markerConf = markerDataset.config || {};
      minR = markerConf.minRadius;
      maxR = markerConf.maxRadius;
      markerArray = markerDataset.components && markerDataset.components.markerObjs || {};

      for (i in markerArray) {
        item = markerArray[i];
        config = item.config;
        definition = config.definition || {};
        if (config.cleanValue !== null) {
          if (v2r && definition.radius === UNDEF) {
            config.radius = minR + (maxR - minR) * (config.cleanValue - dataMin) / (dataMax - dataMin);
          }
        } else {
          if (hideNull) {
            config.__hideMarker = true;
          } else if (config.radius === null) {
            config.radius = nullRadius;
          }
          continue;
        }
        r = Number(config.radius);
        x = (Number(definition.x) + xOffset) * scaleFactor;
        y = (Number(definition.y) + yOffset) * scaleFactor;

        // These values will be scaled along with the graphic
        minX = mathMin(minX, x - r);
        minY = mathMin(minY, y - r);
        maxX = mathMax(maxX, x + r);
        maxY = mathMax(maxY, y + r);
      }
    }

    return {
      x: minX,
      y: minY,
      x1: maxX,
      y1: maxY
    };
  };

  /**
   * calculate and allote space for various components
   * every components are get notified with maximum space and then components return
   * the available space.
   * @memberof GEO
   */


  Maps.prototype._spaceManager = function _spaceManager() {
    var availableHeight = void 0,
        iapi = this,
        config = iapi.config,
        legend = iapi.getChildren('legend') && iapi.getChildren('legend')[0],
        legendPosition = legend && legend.config.legendPos,
        chartAttrs = iapi.getFromEnv('chart-attrib'),
        showBorder = config.showBorder,
        translateX = config.origMarginLeft,
        translateY = config.origMarginTop,
        wg = iapi.config.baseWidth,
        hg = iapi.config.baseHeight,
        scalingParams = void 0,
        wv = void 0,
        hv = void 0,
        sFactor = void 0,
        extraMarkerSpace = {},
        xDifference = 0,
        yDifference = 0,
        initHv = void 0,
        initWv = void 0,
        allottedSpace = void 0,
        topSpace = void 0,
        markerOptions = config.markerOpts,
        chartBorderWidth = config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0;

    iapi._allocateSpace({
      top: chartBorderWidth,
      bottom: chartBorderWidth,
      left: chartBorderWidth,
      right: chartBorderWidth
    });
    iapi._allocateSpace(iapi._manageActionBarSpace && iapi._manageActionBarSpace(config.availableHeight * 0.225) || {});

    if (legendPosition === 'right') {
      allottedSpace = config.canvasWidth * 0.3;
    } else {
      allottedSpace = config.canvasHeight * 0.3;
    }
    iapi._manageLegendSpace(allottedSpace);
    availableHeight = legendPosition === POSITION_BOTTOM ? config.canvasHeight * 0.225 : config.canvasWidth * 0.225;

    // a space manager that manages the space for the tools as well as the captions.
    topSpace = iapi._manageChartMenuBar(availableHeight);
    wv = config.canvasWidth;
    hv = config.canvasHeight;
    if (markerOptions.dataEnabled) {
      if (config.adjustViewPortForMarkers) {
        // Calculate the overflow of the scaled properties (x, y)
        extraMarkerSpace = iapi.preliminaryScaling();

        if (extraMarkerSpace.x1 > wg) {
          wg = extraMarkerSpace.x1;
        }

        if (extraMarkerSpace.x < 0) {
          wg += -extraMarkerSpace.x;
          xDifference = -extraMarkerSpace.x;
        }

        if (extraMarkerSpace.y1 > hg) {
          hg = extraMarkerSpace.y1;
        }

        if (extraMarkerSpace.y < 0) {
          hg += -extraMarkerSpace.y;
          yDifference = -extraMarkerSpace.y;
        }

        // Get the scale factor and translate factors
        scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);

        // Assign radii to the markers that have a value but no radius.
        // Calculate the overflow of the radius (unscaled property).
        extraMarkerSpace = iapi.calculateMarkerBounds(scalingParams.scaleFactor * iapi.config.baseScaleFactor, xDifference, yDifference);

        /**
                         * @todo: Check if the wv and hv become less than a certain limit.
                         * If they do reduce the radii of the markers.
                         */
        initHv = hv;
        initWv = wv;

        if (extraMarkerSpace.x < 0) {
          translateX += -extraMarkerSpace.x;
          wv += extraMarkerSpace.x;
        }

        if (extraMarkerSpace.y < 0) {
          translateY += -extraMarkerSpace.y;
          hv += extraMarkerSpace.y;
        }

        if (extraMarkerSpace.x1 > initWv) {
          wv -= extraMarkerSpace.x1 - initWv;
        }

        if (extraMarkerSpace.y1 > initHv) {
          hv -= extraMarkerSpace.y1 - initHv;
        }
      } else {
        // Get the scale factor and translate factors
        scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);

        // Assign radii to the markers that have a value but no radius.
        // Calculate the overflow of the radius (unscaled property).
        iapi.calculateMarkerBounds(scalingParams.scaleFactor * iapi.config.baseScaleFactor, xDifference, yDifference);
      }

      // Recalculate the scale factor after accounting for radii.
      scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
      translateX += xDifference * scalingParams.scaleFactor * iapi.config.baseScaleFactor;
      translateY += yDifference * scalingParams.scaleFactor * iapi.config.baseScaleFactor;
    } else {
      scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
    }
    iapi.config.scalingParams = scalingParams;
    sFactor = scalingParams.scaleFactor;
    scalingParams.translateX = scalingParams.translateX + translateX;
    scalingParams.translateY = scalingParams.translateY + translateY + topSpace.top || 0;
    scalingParams.sFactor = sFactor * iapi.config.baseScaleFactor * 100 / 100;
    scalingParams.transformStr = ['t', scalingParams.translateX, ',', scalingParams.translateY, 's', sFactor, ',', sFactor, ',0,0'].join('');

    iapi.config.annotationConfig = {
      id: 'Geo',
      showbelow: 0,
      autoscale: 0,
      grpxshift: scalingParams.translateX ? scalingParams.translateX : 0,
      grpyshift: scalingParams.translateY ? scalingParams.translateY : 0,
      xscale: (sFactor ? sFactor * iapi.config.baseScaleFactor : 1) * 100,
      yscale: (sFactor ? sFactor * iapi.config.baseScaleFactor : 1) * 100,
      scaletext: 1,
      // centeralign: 1,
      options: { useTracker: true }
    };
    iapi.getChildren('mapAnnotations')[0].clear();
    iapi.getChildren('mapAnnotations')[0].configureAttributes();
  };

  /**
   * Function to calculate the lower and upper limit of data
   * @return {Object} data minimum, maximum value
   * @memberof GEO
   */


  Maps.prototype.getDataLimits = function getDataLimits() {
    var iapi = this,
        datasets = iapi.getDatasets(),
        length = datasets.length,
        dataset = void 0,
        dataMin = +Infinity,
        dataMax = -Infinity,
        limits = void 0,
        i = void 0;
    for (i = 0; i < length; i++) {
      dataset = datasets[i];
      limits = dataset.getDataLimits();
      dataMin = mathMin(dataMin, limits.min);
      dataMax = mathMax(dataMax, limits.max);
    }
    return {
      dataMin: dataMin,
      dataMax: dataMax
    };
  };

  /**
   * Return copy of entity paths
   * @param {boolean} copy whether to copy or return the original object
   * @return {Object} entity path object
   */


  Maps.prototype.getEntityPaths = function getEntityPaths(copy) {
    var returnObj = {},
        ents = this.config.entities,
        id = void 0;

    if (copy) {
      for (id in ents) {
        returnObj[id] = ents[id];
      }
      return returnObj;
    } else {
      return ents;
    }
  };

  /**
   * Check if rendering is complete
   * @memberof GEO
   */


  Maps.prototype.checkComplete = function checkComplete() {
    var iapi = this;

    // iapi.config.labelDrawCount = 0;
    if (iapi.config.entityFlag && iapi.config.entitiesReady) {
      iapi.config.entityFlag = false;
      iapi.config.markersDrawn = true;
      iapi.fireChartInstanceEvent('internal.mapdrawingcomplete', {
        renderer: iapi
      });
    }
  };

  return Maps;
}(_fusioncharts2['default']);

exports['default'] = Maps;

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (chart) {
  var mapGroupManager,
      dataObj = chart.getFromEnv('dataSource'),
      entityJSONData = dataObj.data || {},
      markerJSONData = dataObj.markers;

  (0, _lib.componentFactory)(chart, _maps2['default'], 'mapGroup');
  mapGroupManager = chart.getChildren('mapGroup')[0];
  (0, _lib.datasetFactory)(mapGroupManager, _entities2['default'], 'entities', 1, [entityJSONData]);
  if (markerJSONData) {
    (0, _lib.datasetFactory)(mapGroupManager, _markers2['default'], 'markers', 1, [markerJSONData]);
  } else {
    chart.getDatasets()[1] && chart.getDatasets()[1].remove();
  }
};

var _lib = __webpack_require__(5);

var _entities = __webpack_require__(385);

var _entities2 = _interopRequireDefault(_entities);

var _markers = __webpack_require__(903);

var _markers2 = _interopRequireDefault(_markers);

var _maps = __webpack_require__(904);

var _maps2 = _interopRequireDefault(_maps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ 903:
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

var _entities = __webpack_require__(385);

var _entities2 = _interopRequireDefault(_entities);

var _kdtree = __webpack_require__(110);

var _kdtree2 = _interopRequireDefault(_kdtree);

var _dependencyManager = __webpack_require__(6);

var _mapEntitiesAnimation = __webpack_require__(237);

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

var _lib = __webpack_require__(5);

var _eventApi = __webpack_require__(14);

var _schedular = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


var convertColor = _lib.graphics.convertColor,
    UNDEF = void 0,
    userAgent = window.navigator.userAgent,
    isIE = /msie/i.test(userAgent) && !window.opera,
    BLANK = '',
    POSITION_TOP = 'top',
    POSITION_BOTTOM = 'bottom',
    POSITION_RIGHT = 'right',
    POSITION_LEFT = 'left',
    POSITION_MIDDLE = 'middle',
    POSITION_CENTER = 'center',
    INNERRADIUSFACTOR = 0.6,
    math = window.Math,
    mathMin = math.min,
    mathMax = math.max,


//   isStrokeReg = /stroke/ig,
//   isWebKit = /AppleWebKit/.test(userAgent),
//   mathCeil = math.ceil,
MARKER_ITEM_KEY = 'items',
    mathPI = Math.PI,
    deg2rad = mathPI / 180,
    TRACKER_FILL = 'rgba(192,192,192,' + (isIE ? 0.002 : 0.000001) + ')',
    // invisible but clickable

colorize = function colorize(original, obj) {
  var col = !obj ? {
    FCcolor: original
  } : (0, _lib.extend2)(original.FCcolor, obj, false, true);

  col.toString = _lib.toRaphaelColor;
  return col;
},
    convertToObj = function convertToObj(arr, idKey) {
  var i = arr && arr.length || false,
      key = idKey || 'id',
      returnObj = {},
      item = void 0;

  if (!arr) {
    return arr;
  }

  while (i--) {
    item = arr[i];

    item[key] !== UNDEF && (returnObj[item[key].toLowerCase()] = item);
  }

  return returnObj;
};

(0, _dependencyManager.addDep)({
  name: 'mapsAnimation',
  type: 'animationRule',
  extension: _mapEntitiesAnimation2['default']
});
/**
 * Creates class Markers to render markers in maps
 */

var Markers = function (_Entities) {
  _inherits(Markers, _Entities);

  /**
   * Creates an instance of Markers
   */
  function Markers() {
    _classCallCheck(this, Markers);

    var _this = _possibleConstructorReturn(this, _Entities.call(this));

    _this.components = {};
    _this.getLabelAlignment = {
      top: function top(x, y, radius) {
        return {
          x: x.toString(),
          y: (y - radius).toString(),
          align: POSITION_CENTER,
          valign: POSITION_TOP
        };
      },
      left: function left(x, y, radius) {
        return {
          x: (x - radius).toString(),
          y: y.toString(),
          align: POSITION_RIGHT,
          valign: POSITION_MIDDLE
        };
      },
      right: function right(x, y, radius) {
        return {
          x: (x + radius).toString(),
          y: y.toString(),
          align: POSITION_LEFT,
          valign: POSITION_MIDDLE
        };
      },
      bottom: function bottom(x, y, radius) {
        return {
          x: x.toString(),
          y: (y + radius).toString(),
          align: POSITION_CENTER,
          valign: POSITION_BOTTOM
        };
      },
      center: function center(x, y) {
        return {
          x: x.toString(),
          y: y.toString(),
          align: POSITION_CENTER,
          valign: POSITION_MIDDLE
        };
      }
    };
    _this.getWrapWidth = {
      right: function right() {
        return arguments[1];
      },
      left: function left(width, x) {
        return width - x;
      },
      center: function center(width, x) {
        return mathMin(x, width - x) * 2;
      }
    };
    _this.getWrapHeight = {
      top: function top() {
        return arguments[1];
      },
      middle: function middle(height, y) {
        return mathMin(y, height - y) * 2;
      },
      bottom: function bottom(height, y) {
        return height - y;
      }
    };
    return _this;
  }

  /**
   * Returns the name of the component
   * @return {string} name of the component
   */


  Markers.prototype.getName = function getName() {
    return 'markers';
  };

  /**
   * Returns the type of the component
   * @return {string} type of the component
   */


  Markers.prototype.getType = function getType() {
    return 'dataset';
  };

  /**
   * Configures the marker component
   * @param {Object} markerJSONData JSON for dataset configurations
   */


  Markers.prototype.configureAttributes = function configureAttributes(markerJSONData) {
    if (!markerJSONData) {
      return;
    }
    this.JSONData = markerJSONData;
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        markerOptions = chart.config.markerOpts;
    dataset.calculateDataLimits();
    if (markerOptions.dataEnabled) {
      this._parseMarkers();
    } else {
      this.defineMarkersNShapes();
    }
    this.configureConnectors();
  };

  /**
   * Function that calculates the marker radius limits.
   * @memberof Markers
   */


  Markers.prototype.calculateMarkerRadiusLimits = function calculateMarkerRadiusLimits() {
    if (!this.JSONData) {
      return;
    }
    var dataset = this,
        JSONData = dataset.JSONData,
        conf = dataset.config,
        chart = dataset.getFromEnv('chart'),
        width = chart.config.width,
        height = chart.config.height,
        markerMaxRadius = JSONData.markermaxradius,
        markerMinRadius = JSONData.markerminradius,
        minMax = Markers.getMarkerRadiusLimits(width, height, markerMaxRadius, markerMinRadius);
    conf.minRadius = minMax.min;
    conf.maxRadius = minMax.max;
  };

  /**
   * Function to calculate the data limits of chart
   * @memberof Markers
   */


  Markers.prototype.calculateDataLimits = function calculateDataLimits() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        jsonData = chart.jsonData,
        markers = jsonData.markers || {},
        markerData = markers[MARKER_ITEM_KEY] || [],

    // numberFormatter = chart.components.numberFormatter,
    numberFormatter = this.getFromEnv('number-formatter'),
        min = +Infinity,
        max = -Infinity,
        markerObj = void 0,
        cleanValue = void 0,
        len = void 0,
        value = void 0,
        i = void 0;
    for (i = 0, len = markerData.length; i < len; i++) {
      markerObj = markerData[i];
      value = markerObj.value;
      cleanValue = numberFormatter.getCleanValue(value);
      if (cleanValue !== null) {
        min = mathMin(cleanValue, min);
        max = mathMax(cleanValue, max);
      }
    }
    conf.min = min;
    conf.max = max;
  };

  /**
   * Function to parse marker components
   * @memberof Markers
   */


  Markers.prototype._parseMarkers = function _parseMarkers() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        jsonData = chart.jsonData,
        markers = jsonData.markers,
        markerData = markers[MARKER_ITEM_KEY],
        shapeArr = markers.shapes,
        markerOptions = chart.config.markerOpts,

    // numberFormatter = chart.components.numberFormatter,
    numberFormatter = this.getFromEnv('number-formatter'),
        shapeObjs = dataset.components.shapeObjs = {},
        markerObjs = dataset.components.markerObjs = {},
        value = void 0,
        i = void 0,
        markerObj = void 0,
        item = void 0,
        shapeId = void 0,
        markerConfig = void 0,
        options = void 0,
        id = void 0;

    if (!markerData || !markerData.length) {
      return;
    }

    if (shapeArr && shapeArr.length) {
      i = shapeArr.length;
      for (; i; i -= 1) {
        item = shapeArr[i - 1];
        if (id = item.id.toLowerCase()) {
          shapeObjs[id] = item;
        }
      }
    }

    i = markerData.length;

    while (i--) {
      item = markerData[i];

      if (id = item.id && item.id.toLowerCase()) {
        value = item.value;
        if (value !== UNDEF && value !== '') {
          value = parseFloat(value);
        }

        markerObj = Markers._initializeMarkerItem(id, item, null, chart);
        shapeId = markerObj.config.options.shapeid;
        shapeId && typeof shapeId === 'string' && (shapeId = shapeId.toLowerCase());
        markerConfig = markerObj.config;
        options = markerConfig.options;
        markerConfig.cleanValue = numberFormatter.getCleanValue(value);
        if (markerConfig.cleanValue !== null) {
          markerConfig.formattedValue = numberFormatter.dataLabels(value);
        } else {
          markerConfig.formattedValue = UNDEF;
        }
        markerConfig.fillColor = (0, _lib.pluck)(options.fillcolor, options.color, markerOptions.fillColor);
        markerConfig.fillAlpha = (0, _lib.pluck)(options.fillalpha, options.alpha, markerOptions.fillAlpha);
        markerConfig.fillRatio = (0, _lib.pluck)(options.fillratio, markerOptions.fillRatio);
        markerConfig.fillAngle = (0, _lib.pluck)(options.fillangle, markerOptions.fillAngle);
        markerConfig.borderThickness = (0, _lib.pluckNumber)(options.borderthickness, markerOptions.borderThickness);
        markerConfig.borderColor = (0, _lib.pluck)(options.bordercolor, markerOptions.borderColor);
        markerConfig.borderAlpha = (0, _lib.pluck)(options.borderalpha, markerOptions.borderAlpha);
        markerConfig.labelPadding = options.labelpadding || markerOptions.labelPadding;
        markerObj.dataset = dataset;
        if (item.__hideMarker) {
          markerObj._isHidden = true;
        }

        if (shapeId) {
          markerObj.shapeObj = shapeObjs[shapeId];
        }

        markerObjs[id] = markerObj;
      }
    }
  };

  /**
   * Creates the marker objects abd their specified shapes
   */


  Markers.prototype.defineMarkersNShapes = function defineMarkersNShapes() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        jsonData = chart.jsonData,
        markers = jsonData.markers,
        defineArr = markers.definition,

    // numberFormatter = chart.components.numberFormatter,
    numberFormatter = this.getFromEnv('number-formatter'),
        markerOptions = chart.config.markerOpts,
        defineObject = convertToObj(defineArr) || {},
        applyObject = convertToObj(markers.application) || {},
        shapeArr = markers.shapes,
        shapeObjs = dataset.components.shapeObjs = dataset.components.shapeObjs || (dataset.components.shapeObjs = {}),
        markerObjs = dataset.components.markerObjs = dataset.components.markerObjs || (dataset.components.markerObjs = {}),
        options = void 0,
        markerConfig = void 0,
        value = void 0,
        i = void 0,
        markerObj = void 0,
        item = void 0,
        shapeId = void 0,
        id = void 0;

    if (!defineArr || !defineArr.length) {
      return;
    }

    if (shapeArr && shapeArr.length) {
      i = shapeArr.length;
      for (; i; i -= 1) {
        item = shapeArr[i - 1];
        if (id = item.id.toLowerCase()) {
          shapeObjs[id] = item;
        }
      }
    }

    for (id in defineObject) {
      item = defineObject[id];
      markerObj = markerObjs[id] = Markers._initializeMarkerItem(id, item, applyObject[id], chart);
      markerObj.dataset = dataset;
      shapeId = markerObj.config.options.shapeid;
      markerConfig = markerObj.config;
      value = item.value;
      markerConfig.cleanValue = numberFormatter.getCleanValue(value);
      options = markerConfig.options;
      if (markerConfig.cleanValue !== null) {
        markerConfig.formattedValue = numberFormatter.dataLabels(value);
      } else {
        markerConfig.formattedValue = UNDEF;
      }
      markerConfig.fillColor = (0, _lib.pluck)(options.fillcolor, options.color, markerOptions.fillColor);
      markerConfig.fillAlpha = (0, _lib.pluck)(options.fillalpha, options.alpha, markerOptions.fillAlpha);
      markerConfig.fillRatio = (0, _lib.pluck)(options.fillratio, markerOptions.fillRatio);
      markerConfig.fillAngle = (0, _lib.pluck)(options.fillangle, markerOptions.fillAngle);
      markerConfig.borderThickness = (0, _lib.pluckNumber)(options.borderthickness, markerOptions.borderThickness);
      markerConfig.borderColor = (0, _lib.pluck)(options.bordercolor, markerOptions.borderColor);
      markerConfig.borderAlpha = (0, _lib.pluck)(options.borderalpha, markerOptions.borderAlpha);
      markerConfig.labelPadding = options.labelpadding || markerOptions.labelPadding;
      markerConfig.options.tooltext = (0, _lib.pluck)(options.tooltext, markerOptions.tooltext);
      markerConfig.link = options.link;
      if (shapeId) {
        markerObj.shapeObj = shapeObjs[shapeId.toLowerCase()];
      }
    }
  };

  /**
   * Return marker radius limit for a particular marker
   * @param {number} width available width
   * @param {number} height available height
   * @param {number} userMax user defined max value
   * @param {number} userMin user defined min value
   * @return {Object} Max, Min value
   */


  Markers.getMarkerRadiusLimits = function getMarkerRadiusLimits(width, height, userMax, userMin) {
    var dime = mathMin(width, height),
        factor = 0.02,
        times = 3.5,
        minR = factor * dime,
        maxR = factor * times * dime;

    userMin = parseFloat(userMin);
    userMax = parseFloat(userMax);

    if (!isNaN(userMin) && !isNaN(userMax)) {
      if (userMin < userMax) {
        return {
          min: userMin,
          max: userMax
        };
      } else {
        return {
          min: userMax,
          max: userMin
        };
      }
    } else if (!isNaN(userMin)) {
      return {
        min: userMin,
        max: 10 * userMin
      };
    } else if (!isNaN(userMax)) {
      return {
        min: parseInt(userMax / 10, 10),
        max: userMax
      };
    } else {
      return {
        min: minR,
        max: maxR
      };
    }
  };

  /**
   * Function that returns the upper and lower data limits
   * @return {Object} containing the upper and lower data limits
   * @memberof Markers
   */


  Markers.prototype.getDataLimits = function getDataLimits() {
    var dataset = this,
        conf = dataset.config;
    return {
      min: conf.min,
      max: conf.max
    };
  };

  /**
   * Initialise a marker item
   * @param {string} id marker id
   * @param {Object} markerDefinition marker configurations
   * @param {Object} markerApplication configurations to be added
   * @return {Object} marker item object
   */


  Markers._initializeMarkerItem = function _initializeMarkerItem(id, markerDefinition, markerApplication) {
    var markerObj = {},
        config = markerObj.config,
        opts = void 0;
    if (!config) {
      config = markerObj.config = {};
    }
    config.id = id;
    config.definition = markerDefinition;
    config.application = markerApplication;

    // new member variables for value markers.
    config.hasValue = null;
    config.value = null;
    config.options = null;

    config.label = null;
    config.markerShape = null;
    config.markerLabel = null;
    config.drawOptions = { shape: null, label: null };

    config.drawComplete = false;

    opts = markerObj.config.options = (0, _lib.extend2)({}, config.definition);

    if (config.dataEnabled) {
      if (!isNaN(opts.value) && opts.value !== '') {
        markerObj.value = parseFloat(opts.value);
        markerObj.hasValue = true;
      }
    } else if (config.applyAll) {
      config.options = (0, _lib.extend2)(opts, config.application);
    } else if (markerApplication) {
      config.options = (0, _lib.extend2)(opts, config.application);
    }
    return markerObj;
  };

  /**
   * Function that configures the map connectors
   * @memberof Markers
   */


  Markers.prototype.configureConnectors = function configureConnectors() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        jsonData = chart.jsonData,
        datasetComponents = dataset.components,
        markers = jsonData.markers || {},
        connectors = markers.connector || markers.connectors || [],
        markerObjs = datasetComponents.markerObjs,
        length = connectors.length,
        connectorComponents = dataset.components.connectors,
        getMouseOverFn = function getMouseOverFn(eventArgs) {
      return function (e) {
        var shape = this,
            wrapper = shape.getElement();

        if (wrapper && shape.unfilteredConfig.hoverEffect) {
          wrapper.attr(shape.unfilteredConfig._hoverAttrs);
        }
        chart.fireChartInstanceEvent('connectorrollover', eventArgs, e);
      };
    },
        getMouseOutFn = function getMouseOutFn(eventArgs) {
      return function (e) {
        var shape = this,
            wrapper = shape.getElement();

        if (wrapper && shape.unfilteredConfig.hoverEffect) {
          wrapper.attr(shape.unfilteredConfig._defaultAttrs);
        }
        chart.fireChartInstanceEvent('connectorrollout', eventArgs, e);
      };
    },
        getClickFn = function getClickFn(eventArgs) {
      return function (e) {
        chart.fireChartInstanceEvent('connectorClick', eventArgs, e);
      };
    },
        chartConnOptions = chart.config.connectorOpts,
        connectorItem = {},
        config = void 0,
        options = void 0,
        fromMarker = void 0,
        toMarker = void 0,
        label = void 0,
        toolText = void 0,
        thickness = void 0,
        color = void 0,
        alpha = void 0,
        hovercolor = void 0,
        hoveralpha = void 0,
        hoverthickness = void 0,
        connLabelConfig = void 0,
        obj = void 0,
        i = void 0;
    connectorComponents = dataset.components.connectors = [];
    for (i = 0; i < length; i++) {
      obj = connectors[i];
      if (!obj.from && !obj.to) {
        continue;
      }
      fromMarker = markerObjs[obj.from.toLowerCase()];
      toMarker = markerObjs[obj.to.toLowerCase()];

      if (!fromMarker || !toMarker) {
        continue;
      }
      label = connectors[i].label;
      // if (connectorConfig.hideOpen &&
      //         (fromMarker._isHidden || toMarker._isHidden)) {
      //     continue;
      // }
      connectorItem = connectorComponents[i];
      !connectorItem && (connectorItem = connectorComponents[i] = {});
      !connectorItem.config && (config = connectorItem.config = {});
      !connectorItem.graphics && (connectorItem.graphics = {});
      config = connectorItem.config = (0, _lib.extend2)({}, obj);
      config.fromMarker = fromMarker;
      config.toMarker = toMarker;
      config.link = obj.link;
      config.showTooltip = (0, _lib.pluckNumber)(obj.showtooltip, chartConnOptions.showTooltip);
      toolText = config.tooltext = config.showTooltip ? (0, _lib.pluck)(obj.tooltext, chartConnOptions.tooltext) : BLANK;
      thickness = config.thickness = (0, _lib.pluck)(obj.thickness, chartConnOptions.thickness);
      color = config.color = (0, _lib.pluck)(obj.color, chartConnOptions.color);
      alpha = config.alpha = (0, _lib.pluck)(obj.alpha, chartConnOptions.alpha);
      config.hoverEffect = (0, _lib.pluckNumber)(obj.showhovereffect, chartConnOptions.showHoverEffect);
      hovercolor = (0, _lib.pluck)(obj.hovercolor, chartConnOptions.hoverColor, color);
      hoveralpha = (0, _lib.pluck)(obj.hoveralpha, chartConnOptions.hoverAlpha, alpha);
      hoverthickness = (0, _lib.pluck)(obj.hoverthickness, chartConnOptions.hoverThickness, thickness);
      config.dashed = (0, _lib.pluck)(obj.dashed, chartConnOptions.dashed);
      config.dashLen = (0, _lib.pluckNumber)(obj.dashlen, chartConnOptions.dashlen);
      config.dashGap = (0, _lib.pluckNumber)(obj.dashgap, chartConnOptions.dashgap);
      if (toolText) {
        config.tooltext = toolText = (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(toolText, [3, 40, 41, 42, 43], {
          label: label,
          fromId: fromMarker.config.definition.id,
          toId: toMarker.config.definition.id,
          fromLabel: fromMarker.config.definition.label,
          toLabel: toMarker.config.definition.label
        }, options));
      }
      config.eventArgs = {
        fromMarkerId: fromMarker.config.id,
        toMarkerId: toMarker.config.id,
        label: label
      };
      config._hoverAttrs = {
        stroke: colorize({
          color: hovercolor,
          alpha: hoveralpha
        }).toString(),
        'stroke-width': hoverthickness
      };
      config._defaultAttrs = {
        stroke: colorize({
          color: color,
          alpha: alpha
        }).toString(),
        'stroke-width': thickness
      };
      config.type = 'line';
      config.onclick = getClickFn(config.eventArgs);
      config.onmouseover = getMouseOverFn(config.eventArgs);
      config.onmouseout = getMouseOutFn(config.eventArgs);
      if (label) {
        connLabelConfig = connectorItem.labelConfig;
        !connLabelConfig && (connLabelConfig = connectorItem.labelConfig = {});
        connLabelConfig.type = 'text';
        connLabelConfig.text = label;
        connLabelConfig.align = POSITION_CENTER;
        connLabelConfig.valign = POSITION_MIDDLE;
        connLabelConfig.font = chartConnOptions.font;
        connLabelConfig.fillcolor = chartConnOptions.fontColor;
        connLabelConfig.bgcolor = chartConnOptions.labelBgColor;
        connLabelConfig.bordercolor = chartConnOptions.labelBorderColor;
        connLabelConfig.tooltext = config.tooltext;
      }
    }
  };

  /**
   * Function that draws the marker components
   * @memberof Markers
   */


  Markers.prototype.draw = function draw() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        annotations = chart.getChildren('mapAnnotations')[0],
        markers = dataset.components.markerObjs,
        chartConf = chart.config,
        chartMarkerOpts = chartConf.markerOpts,
        scalingParams = chartConf.scalingParams,
        annConfig = chart.config.annotationConfig,
        toolTipController = dataset.getFromEnv('toolTipController'),
        markerItems = [],
        markerLabels = [],
        appliedMarkers = {},
        appliedObj = void 0,
        markerItem = void 0,

    // shapeId,
    config = void 0,
        id = void 0,
        markerLabelGroup = void 0,
        markerGroup = void 0;

    this._drawConnectors();

    dataset.imageLoadCount = 0;
    dataset.imageCount = 0;

    markerGroup = annotations.addGroup((0, _assign2['default'])(annConfig, {
      id: 'markers',
      fillalpha: '100',
      items: markerItems,
      scaleimages: 1
    }), dataset);

    markerLabelGroup = annotations.addGroup((0, _assign2['default'])(annConfig, {
      id: 'markerLabels',
      items: markerLabels,
      scaleimages: 1
    }), dataset);

    chartConf.labelsOnTop && chart.getChildren('mapLabelAnnotations') && chart.getChildren('mapLabelAnnotations')[0].annotation.groups[0].store.element.toFront();

    dataset.components.markerGroup = markerGroup;
    dataset.components.markerLabelGroup = markerLabelGroup;
    // Have to configure the autoscale property in draw function as the scale factor is
    // available only after spaceManagement
    conf.autoScale = chartMarkerOpts.autoScale ? scalingParams.sFactor : 1;
    for (id in markers) {
      appliedObj = null;
      markerItem = markers[id];
      config = markerItem.config;
      // shapeId = config.options.shapeid;

      if (!config.conIsHidden) {
        appliedObj = this._drawMarkerItem.call(markerItem);
      }

      if (!appliedObj) {
        continue;
      }

      config._annotationIndex = markerItems.length;
      appliedMarkers[id] = markerItem;
      markerItem.markerShape = appliedObj.markerShape && annotations.addItem(markerGroup.getId(), (0, _assign2['default'])({
        align: 'center',
        valign: 'middle',
        animationLabel: 'markerItem'
      }, appliedObj.markerShape), true, dataset);
      toolTipController.enableToolTip(markerItem.markerShape.getElement(), markerItem.config.tooltext);
      markerItems.push(markerItem.markerShape);
      markerItem.markerLabel = appliedObj.markerLabel && annotations.addItem(markerLabelGroup.getId(), (0, _assign2['default'])({ animationLabel: 'markerItem' }, appliedObj.markerLabel), true, dataset);
      markerLabels.push(markerItem.markerLabel);
    }
    dataset.addJob('buildKdtree', dataset._buildKdTree.bind(dataset), _schedular.priorityList.kdTree);
  };

  /**
   * Function to create a K-dimensional tree
   * @memberof Markers
   */


  Markers.prototype._buildKdTree = function _buildKdTree() {
    var dataset = this,
        kdArrayMap = dataset.components.kdArrayMap,
        markerGroup = dataset.components.markerGroup,
        kdPointsArr = [],
        id = void 0,
        i = void 0,
        items = markerGroup && markerGroup.items,
        len = items && items.length || 0;

    for (i = 0; i < len; i++) {
      id = items[i].config.id;
      kdArrayMap[id] && kdPointsArr.push(kdArrayMap[id]);
    }

    if (!dataset.components.kDTree) {
      // Create a new instance of the KdTree class and store its reference in the current instance.
      dataset.components.kDTree = new _kdtree2['default'](true);
      // componentFactory(dataset, KdTree, 'kDTree');
    }
    // dataset.components.kDTree._setSearchLimit(Infinity, Infinity);
    // dataset.components.kDTree.buildKdTree(kdPointsArr);
    dataset.components.kDTree._setSearchLimit(Infinity, Infinity);
    dataset.components.kDTree.buildKdTree(kdPointsArr);
  };

  /**
   * Draws marker items
   * @return {Object} marker shape, label
   * @memberof Markers
   */


  Markers.prototype._drawMarkerItem = function _drawMarkerItem() {
    var marker = this,
        dataset = marker.dataset,
        chart = dataset.getFromEnv('chart'),
        conf = chart.config,
        datasetConfig = dataset.config,
        scalingParams = conf.scalingParams,
        markerConfig = marker.config,
        options = markerConfig.options,
        definition = markerConfig.definition,
        chartMarkerOpts = conf.markerOpts,
        markerStyle = chartMarkerOpts.dataLabels.style,
        shapeId = options.shapeid,
        itemScale = options.scale || 1,
        label = options.label || BLANK,
        scaleFactor = chart.config.scalingParams.scaleFactor * chart.config.baseScaleFactor,
        labelPos = (options.labelpos || POSITION_TOP).toLowerCase(),
        value = markerConfig.formattedValue === UNDEF ? UNDEF : markerConfig.formattedValue,
        tooltext = options.tooltext || chartMarkerOpts.tooltext,
        radius = (0, _lib.pluckNumber)(definition.radius, markerConfig.radius, chartMarkerOpts.radius) * itemScale * datasetConfig.autoScale || 0.0001,
        fillColor = markerConfig.fillColor,
        fillAlpha = markerConfig.fillAlpha,
        fillRatio = markerConfig.fillRatio,
        fillAngle = markerConfig.fillAngle,
        borderThickness = markerConfig.borderThickness,
        borderColor = markerConfig.borderColor,
        borderAlpha = markerConfig.borderAlpha,
        labelObj = void 0,
        align = void 0,
        valign = void 0,
        baseWidth = void 0,
        baseHeight = void 0,
        xOffset = void 0,
        yOffset = void 0,
        wrapWidth = void 0,
        wrapHeight = void 0,
        labelPadding = void 0,
        shapeObj = void 0,
        fillAttrs = void 0,
        hoverFillAttrs = void 0,

    // shapeType,
    calcX = void 0,
        calcY = void 0,
        kdPoint = void 0,
        innerradius = void 0,
        sides = void 0,
        type = void 0,
        kdArrayMap = dataset.components.kdArrayMap || (dataset.components.kdArrayMap = {}),
        markerId = marker.config.id;

    markerConfig.autoScale = chartMarkerOpts.autoScale ? scaleFactor : 1;
    if (!shapeId) {
      return;
    }

    if (tooltext) {
      tooltext = (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(tooltext, [1, 2, 3], {
        formattedValue: value,
        label: label
      }, options));
    } else {
      tooltext = value ? label + chartMarkerOpts.tooltipSepChar + value : label;
    }

    if (value !== UNDEF && value !== null) {
      /* value_for_markers */
      label = label + chartMarkerOpts.labelSepChar + value;
    } else {
      if (!isNaN(itemScale)) {
        if (itemScale < 0) {
          itemScale = 0;
        } else if (itemScale > 5) {
          itemScale = 5;
        }
      } else {
        itemScale = 1;
      }
    }

    (0, _lib.extend2)(options, {
      x: options.x.toString(),
      y: options.y.toString(),
      fillcolor: fillColor,
      fillalpha: fillAlpha,
      fillratio: fillRatio,
      fillangle: fillAngle,
      borderthickness: borderThickness,
      bordercolor: borderColor,
      borderalpha: borderAlpha,
      hovereffect: (0, _lib.pluck)(chartMarkerOpts.showHoverEffect),
      radius: radius.toString(),
      // tooltext: chartMarkerOpts.showTooltip ? tooltext : 0,
      link: options.link,
      showshadow: (0, _lib.pluckNumber)(options.showshadow, markerConfig.shadow),
      _markerLabel: label, // for event
      _markerId: options.id, // for event
      id: (options.id + BLANK).toLowerCase()
    });

    delete options.tooltext;

    markerConfig.tooltext = chartMarkerOpts.showTooltip ? tooltext : false;

    // shapeType = options.type;

    calcX = Number(options.x) * scalingParams.sFactor + scalingParams.translateX;
    calcY = Number(options.y) * scalingParams.sFactor + scalingParams.translateY;
    radius = options.radius;

    if (shapeId === 'triangle') {
      (0, _lib.extend2)(options, {
        type: 'polygon',
        sides: 3,
        startangle: chartMarkerOpts.startAngle

      });
      type = 'polygon';
      sides = 3;
    } else if (shapeId === 'diamond') {
      (0, _lib.extend2)(options, {
        type: 'polygon',
        sides: 4,
        startangle: chartMarkerOpts.startAngle
      });
      type = 'polygon';
      sides = 4;
    } else if (shapeId === 'arc') {
      innerradius = radius * INNERRADIUSFACTOR;

      (0, _lib.extend2)(options, {
        type: 'arc',
        startangle: 0,
        endangle: 360,
        innerradius: innerradius
      });
      type = 'arc';
    } else if (shapeId === 'circle') {
      options.type = 'circle';
      type = 'circle';
    } else {
      shapeObj = dataset.getShapeArgs.call(marker);

      if (!chartMarkerOpts.dataEnabled || !chartMarkerOpts.valueToRadius || options.radius === UNDEF) {
        !shapeObj.radius && (shapeObj.radius = chartMarkerOpts.radius);
        shapeObj.radius *= itemScale * markerConfig.autoScale;
      } else {
        delete shapeObj.radius;
      }

      (0, _lib.extend2)(options, shapeObj);
      options.id = options._markerId && options._markerId.toLowerCase();
      innerradius = shapeObj.innerradius;
      radius = shapeObj.radius;
      type = shapeObj.type.toLowerCase();
      sides = shapeObj.sides;
    }
    options.type = options.type.toLowerCase();
    // Setting the hover attributes after all the cosmetics have been finalized.
    (0, _lib.extend2)(options, {
      hoverfillcolor: (0, _lib.pluck)(options.fillhovercolor, chartMarkerOpts.hoverFillColor, options.fillcolor),
      hoverfillalpha: (0, _lib.pluck)(options.fillhoveralpha, chartMarkerOpts.hoverFillAlpha, options.fillalpha),
      hoverfillratio: (0, _lib.pluck)(options.fillhoverratio, chartMarkerOpts.hoverFillRatio, options.fillratio),
      hoverfillangle: (0, _lib.pluck)(options.fillhoverangle, chartMarkerOpts.hoverFillAngle, options.fillangle),
      hoverborderthickness: (0, _lib.pluckNumber)(options.borderhoverthickness, chartMarkerOpts.hoverBorderThickness, options.borderthickness),
      hoverbordercolor: (0, _lib.pluck)(options.borderhovercolor, chartMarkerOpts.hoverBorderColor, options.bordercolor),
      hoverborderalpha: (0, _lib.pluck)(options.borderhoveralpha, chartMarkerOpts.hoverBorderAlpha, options.borderalpha)
    });

    fillAttrs = {
      alpha: options.fillalpha,
      color: options.fillcolor,
      angle: 360 - options.fillangle,
      ratio: options.fillratio
    };

    hoverFillAttrs = {
      alpha: options.hoverfillalpha,
      color: options.hoverfillcolor,
      angle: 360 - options.hoverfillangle,
      ratio: options.hoverfillratio
    };

    /** Hover Effect for markers **/
    options._defaultattrs = {
      fill: (0, _lib.toRaphaelColor)(fillAttrs),
      'stroke-width': options.showborder !== '0' ? options.borderthickness : 0,
      stroke: convertColor(options.bordercolor, options.borderalpha)
    };

    options._hoverattrs = {
      fill: (0, _lib.toRaphaelColor)(hoverFillAttrs),
      'stroke-width': options.showborder !== '0' ? options.hoverborderthickness : 0,
      stroke: convertColor(options.hoverbordercolor, options.hoverborderalpha)
    };

    if (options.type === 'image') {
      // In case of image there should not be a border around it by default.
      options.borderthickness = options.borderthickness || 0;

      options.onload = function (imageattr) {
        var shape = this,
            options = shape.options,
            width = imageattr.width,
            height = imageattr.height,
            kdPoint = {},


        // Recalculating x & y because by default annotations fx
        // aligns the image to the top left corner.
        // In this case the image needs to be centrally aligned.
        calcX = (Number(options.x) - width / (2 * scalingParams.sFactor)) * scalingParams.sFactor,
            calcY = (Number(options.y) - height / (2 * scalingParams.sFactor)) * scalingParams.sFactor,
            item = void 0;

        kdPoint = kdArrayMap[markerId] || (kdArrayMap[markerId] = {});

        kdPoint.x = calcX + scalingParams.translateX;
        kdPoint.y = calcY + scalingParams.translateY;
        kdPoint.element = marker;

        kdPoint.shapeInfo = {
          type: 'rect',
          width: width,
          height: height
        };

        if (width && height) {
          for (item in { wrapper: 1, tracker: 1 }) {
            shape[item] && shape[item].attr({
              x: calcX,
              y: calcY,
              width: width,
              height: height
            });
          }
        }
        dataset.imageLoadCount++;

        if (dataset.imageLoadCount === dataset.imageCount) {
          dataset._buildKdTree();
        }
      };

      options.onerror = function () {
        dataset.imageLoadCount++;
        if (dataset.imageLoadCount === dataset.imageCount) {
          dataset._buildKdTree();
        }
      };

      dataset.imageCount++;
    } else {
      kdPoint = kdArrayMap[markerId] || (kdArrayMap[markerId] = {});

      kdPoint.x = calcX;
      kdPoint.y = calcY;
      kdPoint.element = marker;

      kdPoint.shapeInfo = {
        type: type,
        sides: sides,
        radius: Number(radius) + options.borderthickness / 2,
        innerradius: innerradius
      };
    }

    markerConfig.drawOptions.shape = options;
    if (!chartMarkerOpts.showLabels) {
      return {
        markerShape: options
      };
    }

    // creating marker label options here.
    labelPadding = options.labelpadding || chartMarkerOpts.labelPadding;
    labelObj = dataset._getLabelOptions(labelPos, labelPadding, options);
    align = labelObj.align;
    valign = labelObj.valign;
    baseWidth = markerConfig._labelBaseWidth;
    baseHeight = markerConfig._labelBaseHeight;
    xOffset = markerConfig._labelXOffset;
    yOffset = markerConfig._labelYOffset;

    wrapWidth = chartMarkerOpts.labelWrapWidth ? chartMarkerOpts.labelWrapWidth : dataset.getWrapWidth[align](baseWidth, Number(labelObj.x) + xOffset);
    wrapHeight = chartMarkerOpts.labelWrapHeight ? chartMarkerOpts.labelWrapHeight : dataset.getWrapHeight[valign](baseHeight, Number(labelObj.y) + yOffset);

    if (wrapWidth > labelPadding) {
      wrapWidth -= labelPadding;
    }
    if (wrapHeight > labelPadding) {
      wrapHeight -= labelPadding;
    }

    // When the marker label is placed over the marker then the label
    // will have the same hovering effect as the marker
    if (align == 'center' && valign == 'middle') {
      markerConfig.drawOptions.label = (0, _lib.extend2)({ type: 'text' }, {
        text: label,
        tooltext: options.tooltext,
        x: labelObj.x,
        y: labelObj.y,
        align: align,
        valign: labelObj.valign,
        wrap: 1,
        wrapwidth: wrapWidth,
        wrapheight: wrapHeight,
        fontsize: markerStyle.fontSize / scalingParams.sFactor,
        font: markerStyle.fontFamily,
        fillcolor: markerStyle.fontColor
      });
    } else {
      markerConfig.drawOptions.label = (0, _lib.extend2)({ type: 'text' }, {
        text: label,
        tooltext: options.tooltext,
        x: labelObj.x,
        y: labelObj.y,
        align: align,
        valign: labelObj.valign,
        wrap: 1,
        wrapwidth: wrapWidth,
        wrapheight: wrapHeight,
        fontsize: markerStyle.fontSize / scalingParams.sFactor,
        font: markerStyle.fontFamily,
        fillcolor: markerStyle.fontColor
      });
    }

    return {
      markerShape: options,
      markerLabel: markerConfig.drawOptions.label
    };
  };

  /**
   * Returns hover in handler function for markers
   * @return {Function} hover in handler function
   */


  Markers.prototype.getHoverFn = function getHoverFn() {
    var dataset = this,
        chart = dataset.getFromEnv('chart');

    return function () {
      var element = this,
          marker = element.data('marker'),
          shape = marker.markerShape,
          options = shape.unfilteredConfig,
          bounds = shape.getBounds(),
          eventArgs = options._markerEventArgs,
          wrapper = shape.getElement(),
          attrs = void 0,
          fillObj = void 0,
          scalingParams = chart.config.scalingParams,
          plotLeft = scalingParams.translateX,
          plotTop = scalingParams.translateY,
          markerConfig = marker.config;

      if (wrapper && options.hovereffect) {
        if (shape.config.type === 'circle') {
          fillObj = {
            color: options.hoverfillcolor,
            alpha: options.hoverfillalpha,
            angle: 360 - options.hoverfillangle,
            ratio: options.hoverfillratio,
            gradientUnits: 'objectBoundingBox',
            radialGradient: shape.config.radialGradient === 'radial',
            cx: options.x,
            cy: options.y
          };
          options._hoverattrs.fill = (0, _lib.toRaphaelColor)(fillObj);
          // options._hoverattrs = extend2(obj, options._hoverattrs);
        }
        attrs = (0, _lib.extend2)({}, options._hoverattrs);
        if (wrapper.type === 'image') {
          delete attrs.fill;
          delete attrs.stroke;
          delete attrs['stroke-width'];
        }
        wrapper.attr(attrs);
      }

      if (!eventArgs) {
        eventArgs = options._markerEventArgs = {
          x: bounds.x,
          y: bounds.y,
          scaledX: bounds.x / shape.groupConfig.scaleX,
          scaledY: bounds.y / shape.groupConfig.scaleY,
          chartX: plotLeft + bounds.x,
          chartY: plotTop + bounds.y,
          id: options.id,
          label: options.label
        };
      }
      (0, _eventApi.raiseEventGroup)(markerConfig.options.id, 'markerRollOver', eventArgs, chart.getFromEnv('chartInstance'), markerConfig, UNDEF, UNDEF, UNDEF);
    };
  };

  /**
   * Returns hover out handler function for markers
   * @return {Function} hover out handler function
   */


  Markers.prototype.getHoverOutFn = function getHoverOutFn() {
    var dataset = this,
        chart = dataset.getFromEnv('chart');

    return function () {
      var element = this,
          marker = element.data('marker'),
          shape = marker.markerShape,
          wrapper = shape.getElement(),
          markerConfig = marker.config,
          options = shape.unfilteredConfig,
          attrs = void 0;

      if (wrapper && shape.unfilteredConfig.hovereffect) {
        if (shape.config.type === 'circle') {
          options._defaultattrs.fill = (0, _lib.toRaphaelColor)({
            alpha: shape.config.rawAlpha,
            color: shape.config.rawColor,
            angle: 360 - shape.config.rawAngle,
            ratio: shape.config.rawRatio
          });
        }

        attrs = (0, _lib.extend2)({}, shape.unfilteredConfig._defaultattrs);
        if (wrapper.type === 'image') {
          delete attrs.fill;
          delete attrs.stroke;
          delete attrs['stroke-width'];
        }
        wrapper.attr(attrs);
      }
      (0, _eventApi.raiseEventGroup)(markerConfig.id, 'markerRollOut', shape.unfilteredConfig._markerEventArgs, chart.getFromEnv('chartInstance'), UNDEF, UNDEF, UNDEF);
    };
  };

  /**
   * Returns click handler function for markers
   * @return {Function} click handler function
   */


  Markers.prototype.getClickFn = function getClickFn() {
    var dataset = this;
    return function (e) {
      var element = this,
          marker = element.data('marker'),
          chart = dataset.getFromEnv('chart'),
          scalingParams = chart.config.scalingParams,
          plotLeft = scalingParams.translateX,
          plotTop = scalingParams.translateY,
          shape = marker.markerShape,
          options = shape.config,
          bounds = shape.getBounds(),
          eventArgs = options._markerEventArgs;

      if (!eventArgs) {
        eventArgs = options._markerEventArgs = {
          x: bounds.x,
          y: bounds.y,
          scaledX: bounds.x / shape.groupConfig.scaleX,
          scaledY: bounds.y / shape.groupConfig.scaleY,
          chartX: plotLeft + bounds.x,
          chartY: plotTop + bounds.y,
          id: options.id,
          label: options.label
        };
      }
      chart.fireChartInstanceEvent('markerClick', eventArgs, e);
    };
  };

  /**
   * highlight the markers
   * @param {Object|boolean} kdPoint point object of markers
   */


  Markers.prototype.highlightPoint = function highlightPoint(kdPoint) {
    var marker = kdPoint.element,
        dataset = this,
        chart = dataset.getFromEnv('chart'),
        chartGraphics = chart.graphics,
        animationManager = dataset.getFromEnv('animationManager'),
        trackerElems = chartGraphics.trackerElems || (chartGraphics.trackerElems = {}),
        shapeInfo = kdPoint.shapeInfo,
        toolTipController = dataset.getFromEnv('toolTipController'),
        type = void 0,
        trackerElement = void 0,
        x = kdPoint.x,
        y = kdPoint.y,
        hiddenAttr = void 0,
        sides = void 0,
        startAngle = void 0,
        width = void 0,
        radius = void 0,
        innerradius = void 0,
        height = void 0,
        endAngle = void 0,
        lastHoveredPoint = chart.config.lastHoveredPoint,
        newElem = false;

    if (kdPoint === false) {
      type = lastHoveredPoint && lastHoveredPoint.shapeInfo.type;
      trackerElement = trackerElems[type];
      trackerElement && trackerElement.hide();
      chart.config.lastHoveredPoint = null;
      return;
    }

    hiddenAttr = {
      fill: TRACKER_FILL,
      stroke: TRACKER_FILL
    };

    type = shapeInfo.type;

    type === 'circle' && (type = 'polygon');

    trackerElement = trackerElems[type];
    if (type === 'polygon') {
      sides = shapeInfo.sides || 1;
      startAngle = shapeInfo.startAngle;
      radius = shapeInfo.radius;

      !trackerElement && (newElem = true);
      trackerElement = chartGraphics.trackerElems[type] = animationManager.setAnimation({
        el: chartGraphics.trackerElems[type] || 'polypath',
        container: trackerElement,
        attr: (0, _assign2['default'])({
          polypath: [sides, x, y, radius, startAngle]
        }, hiddenAttr),
        component: dataset,
        label: 'markers'
      });
    } else if (type === 'rect') {
      width = shapeInfo.width;
      height = shapeInfo.height;

      !trackerElement && (newElem = true);
      trackerElement = chartGraphics.trackerElems[type] = animationManager.setAnimation({
        el: chartGraphics.trackerElems[type] || 'rect',
        container: trackerElement,
        attr: (0, _assign2['default'])({
          x: x,
          y: y,
          width: width,
          height: height
        }, hiddenAttr),
        component: dataset,
        label: 'markers'
      });
    } else if (type === 'arc') {
      innerradius = marker.markerShape.config.innerRadius;
      startAngle = marker.markerShape.config.startAngle * deg2rad;
      endAngle = marker.markerShape.config.endAngle * deg2rad;
      radius = shapeInfo.radius;

      !trackerElement && (newElem = true);
      trackerElement = chartGraphics.trackerElems[type] = animationManager.setAnimation({
        el: chartGraphics.trackerElems[type] || 'ringpath',
        container: trackerElement,
        attr: (0, _assign2['default'])({
          ringpath: [x, y, radius, innerradius, startAngle, endAngle]
        }, hiddenAttr),
        component: dataset,
        label: 'markers'
      });
    }

    chart.config.lastHoveredPoint = kdPoint;

    if (newElem) {
      trackerElement.click(dataset.getClickFn()).hover(dataset.getHoverFn(), dataset.getHoverOutFn());
      trackerElement.trackTooltip(true);
    }

    trackerElement.show().data('marker', marker);
    toolTipController.enableToolTip(trackerElement, marker.config.tooltext);
  };

  /**
   * Function that draws the connectors
   * @memberof Markers
   */


  Markers.prototype._drawConnectors = function _drawConnectors() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        annConfig = chart.config.annotationConfig,
        datasetComponents = dataset.components,
        connectors = datasetComponents.connectors || (dataset.components.connectors = []),
        connector = void 0,
        length = connectors.length,
        scalingParams = chart.config.scalingParams,
        chartConnOptions = chart.config.connectorOpts,
        showConnectorLabels = chartConnOptions.showLabels,
        annotations = chart.getChildren('mapAnnotations')[0],
        i = void 0,
        connectorOptions = [],
        connectorLabelItems = [],
        x = void 0,
        y = void 0,
        toX = void 0,
        toY = void 0,
        fromMarkerConfig = void 0,
        toMarkerConfig = void 0,
        groups = [];
    groups.push({
      id: 'connectorLabels',
      fillalpha: '100',
      items: connectorLabelItems
    });
    groups.push({
      id: 'connectors',
      fillalpha: '100',
      items: connectorOptions
    });
    annotations.addGroup((0, _assign2['default'])(annConfig, groups[1]), dataset);
    annotations.addGroup((0, _assign2['default'])(annConfig, groups[0]), dataset);
    for (i = 0; i < length; i++) {
      if (!connectors[i]) {
        continue;
      }
      fromMarkerConfig = connectors[i].config.fromMarker.config;
      toMarkerConfig = connectors[i].config.toMarker.config;
      x = fromMarkerConfig.options.x;
      y = fromMarkerConfig.options.y;
      toX = toMarkerConfig.options.x;
      toY = toMarkerConfig.options.y;
      connectors[i].config.x = x;
      connectors[i].config.y = y;
      connectors[i].config.tox = toX;
      connectors[i].config.toy = toY;
      connectorOptions.push(connectors[i].config);
      connector = annotations.addItem('connectors', (0, _assign2['default'])({ animationLabel: 'markerItem' }, connectors[i].config), true, dataset);
      connector.addEventListener('mouseover', connectors[i].config.onmouseover);
      connector.addEventListener('mouseout', connectors[i].config.onmouseout);
      connector.addEventListener('click', connectors[i].config.onclick);
      if (connectors[i].labelConfig && showConnectorLabels) {
        connectors[i].labelConfig.x = ((Number(x) + Number(toX)) / 2).toString();
        connectors[i].labelConfig.y = ((Number(y) + Number(toY)) / 2).toString();
        // base scale factor, taken from chart config is required to calculate font size
        connectors[i].labelConfig.fontsize = chartConnOptions.fontSize / (scalingParams.scaleFactor * chart.config.baseScaleFactor);
        connectorLabelItems.push(connectors[i].labelConfig);
        annotations.addItem('connectorLabels', (0, _assign2['default'])({ animationLabel: 'markerItem' }, connectors[i].labelConfig), true, dataset);
      }
    }
    // annotations.addGroup(Object.assign(annConfig, groups[0]));
    // annotations.addGroup(Object.assign(annConfig, groups[1]));
  };

  /**
   * Determines marker shape
   * @return {Object} prepared marker shape object
   */


  Markers.prototype.getShapeArgs = function getShapeArgs() {
    var mark = this,
        config = mark.config,
        shapeObj = (0, _lib.extend2)({}, mark.shapeObj),

    // FMXT-388: work on a copy of the shapeObj so as to not alter the original shapeObj.
    radius = void 0;
    config.autoScale = 1;
    if (shapeObj) {
      if (shapeObj.type === 'polygon') {
        if (shapeObj.sides < 3) {
          shapeObj.type = 'circle';
        } else {
          shapeObj.startangle = config.startAngle;
        }
      } else if (shapeObj.type === 'arc') {
        radius = (shapeObj.radius || config.markerRadius) * config.autoScale;
        shapeObj.radius = radius;

        shapeObj.innerradius = shapeObj.innerradius && shapeObj.innerradius * config.autoScale || radius * INNERRADIUSFACTOR;
      }

      return shapeObj;
    } else {
      return null;
    }
  };

  /**
   * Prepares label object for markers
   * @param {string} labelPos label position
   * @param {string} labelPadding padding of a label
   * @param {Object} options marker configurations
   * @param {string} width max width
   * @param {string} height max height
   * @return {Object}label object need for annotation
   */


  Markers.prototype._getLabelOptions = function _getLabelOptions(labelPos, labelPadding, options, width, height) {
    var dataset = this,
        radius = void 0,
        x = void 0,
        y = void 0,
        alignment = labelPos && labelPos.toLowerCase();

    // validate alignments
    if (!dataset.getLabelAlignment[alignment]) {
      alignment = 'center';
    }

    x = Number(options.x);
    y = Number(options.y);

    if (width === UNDEF || height === UNDEF) {
      // not an image
      radius = options.radius || 0;
    } else {
      // image
      radius = /^(top|bottom)$/ig.test(alignment) && height * 0.5 || /^(left|right)$/ig.test(alignment) && width * 0.5 || 0;
    }

    radius = Number(radius) + Number(labelPadding);
    return dataset.getLabelAlignment[alignment](x, y, radius);
  };

  /**
   * Add marker item
   * @param {Object} options configuration of the marker item
   */


  Markers.prototype.addMarkerItem = function addMarkerItem(options) {
    var markers = this,
        item = options,
        markerObj = void 0,
        items = markers.components.markerObjs,
        shapeObjs = markers.components.shapeObjs,
        markerGroup = markers.components.markerGroup,
        markerLabelGroup = markers.components.markerLabelGroup,
        annotations = this.getFromEnv('chart').getChildren('mapAnnotations')[0],
        drawOptions = void 0,
        shapeId = void 0,
        id = void 0;

    if (id = item.id.toLowerCase()) {
      if (items[id]) {
        return;
      }

      // Data enabled markers not yet supported by this method.
      delete item.value;
      markers.imageLoadCount = 0;
      markerObj = Markers._initializeMarkerItem(id, item, null);
      markerObj.dataset = markers;
      shapeId = markerObj.config.options.shapeid;

      if (shapeId) {
        markerObj.shapeObj = shapeObjs[shapeId && shapeId.toLowerCase()];
      }

      items[id] = markerObj;
      drawOptions = markers._drawMarkerItem.call(markerObj);

      if (markerGroup && markerLabelGroup) {
        markerObj.markerShape = drawOptions.markerShape &&
        // markerGroup.addItem(drawOptions.markerShape, true);
        annotations.addItem(markerGroup.getId(), (0, _assign2['default'])({
          align: 'center',
          valign: 'middle',
          animationLabel: 'markerItem'
        }, drawOptions.markerShape), true, markers);
        markerObj.markerLabel = drawOptions.markerLabel &&
        // markerLabelGroup.addItem(drawOptions.markerLabel, true);
        annotations.addItem(markerLabelGroup.getId(), (0, _assign2['default'])({ animationLabel: 'markerItem' }, drawOptions.markerLabel), true, markers);
      }

      markers._buildKdTree();
    }
  };

  /**
   * Updates a marker item
   * @param {string} id marker item id
   * @param {Object} options configuration of the marker item
   */


  Markers.prototype.updateMarkerItem = function updateMarkerItem(id, options) {
    var markers = this,
        chart = markers.getFromEnv('chart'),
        annotations = chart.getChildren('mapAnnotations')[0],
        markerObjs = markers.components.markerObjs,
        origOptions = void 0,
        marker = markerObjs[id],
        annotOptions = void 0;

    if (marker) {
      origOptions = marker.config.options;
      // Add the marker options passed to the original options to persist in case of multiple updates.
      (0, _lib.extend2)(origOptions, options);
      markers.imageLoadCount = 0;
      // Get the annotation options from marker options.
      annotOptions = markers._drawMarkerItem.call(marker).markerShape;

      markers._buildKdTree();

      // Update annotations
      annotations.update(id, annotOptions);
    }
  };

  /**
   * Remove a marker item
   * @param {string} id marker item id
   */


  Markers.prototype._removeMarkerItem = function _removeMarkerItem(id) {
    var markers = this,
        components = markers.components,
        markerObjs = components.markerObjs,
        markerObj = markerObjs[id],
        kdArrayMap = components.kdArrayMap,
        markerShape = void 0,
        markerLabel = void 0;

    if (markerObj) {
      markerShape = markerObj.markerShape;
      markerLabel = markerObj.markerLabel;
      markerShape && markerShape.dispose();
      markerLabel && markerLabel.dispose();
      delete kdArrayMap[id];
      markers._buildKdTree();
    }

    delete markerObjs[id];
  };

  /**
   * Return nearest marker element on mouse hover
   * @param {Object|boolean} point point object of mouse coordinate
   * @return {Object} marker element graphics
   */


  Markers.prototype.getElement = function getElement(point) {
    var datasetObj = this;
    if (datasetObj.components.kDTree) {
      // searches the neighbouring points using the kdtree instance.
      return datasetObj.components.kDTree.getNeighbour(point);
    }
  };

  return Markers;
}(_entities2['default']);

exports['default'] = Markers;

/***/ }),

/***/ 904:
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

var _mapEntitiesAnimation = __webpack_require__(237);

var _mapEntitiesAnimation2 = _interopRequireDefault(_mapEntitiesAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: ["error", { "requireReturn": false }] */


(0, _dependencyManager.addDep)({
  name: 'mapsAnimation',
  type: 'animationRule',
  extension: _mapEntitiesAnimation2['default']
});
/**
 * Class to create Maps group
 */

var MapGroup = function (_ComponentInterface) {
  _inherits(MapGroup, _ComponentInterface);

  function MapGroup() {
    _classCallCheck(this, MapGroup);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * Returns type of chart
   * @return {string} class type
   */
  MapGroup.prototype.getType = function getType() {
    return 'group';
  };

  /**
   * Sets the name of the component
   * @return {string} name
   */


  MapGroup.prototype.getName = function getName() {
    return 'mapGroup';
  };
  /**
   * function to configure this manager
   */


  MapGroup.prototype.configure = function configure() {
    var manager = this;
    manager._mapChildren(function (child) {
      child.configure && child.configure();
    });
  };
  /**
   * Create child containers
   */


  MapGroup.prototype.createContainer = function createContainer() {
    var manager = this,
        parent = manager.getLinkedParent(),
        animationManager = manager.getFromEnv('animationManager'),
        pContainer = void 0,
        parentChildContainers = parent.getChildContainer();

    pContainer = parentChildContainers.plotGroup;

    !manager.getChildContainer('plotShadow') && manager.addChildContainer('plotShadow', animationManager.setAnimation({
      el: 'group',
      attr: {
        name: 'manager-plot-shadow',
        opacity: 1
      },
      container: pContainer,
      component: manager,
      label: 'group'
    }));

    !manager.getChildContainer('plot') && manager.addChildContainer('plot', animationManager.setAnimation({
      el: 'group',
      attr: {
        name: 'manager-plot',
        opacity: 1
      },
      container: pContainer,
      component: manager,
      label: 'group'
    }));
  };

  /**
   * Transforms entity group
   */


  MapGroup.prototype._transformGroup = function _transformGroup() {
    var manager = this,
        chart = this.getFromEnv('chart'),
        chartInstance = chart.getFromEnv('chartInstance'),
        animationManager = manager.getFromEnv('animationManager'),

    // dataset = chart.getDatasets(),
    jsonData = chart.jsonData,
        plotGroup = manager.getChildContainer('plot'),
        plotShadowGroup = manager.getChildContainer('plotShadow'),
        scalingParams = chart.config.scalingParams,
        transformGroup = function transformGroup() {
      return function (event) {
        // let clickedElemScaleParams,
        // transformStr,
        // clickedElementBox;
        event.detachHandler(); // one time
        if (_lib.hasSVG) {
          if (chartInstance.args.link && chartInstance.args.clickedEntityBox && jsonData.chart.linkedcharttransition === 'scale') {
            // clickedElementBox = chartInstance.args.clickedEntityBox;
            // clickedElemScaleParams = chart.getScalingParameters(
            //   chart.baseWidth,
            //   chart.baseHeight,
            //   clickedElementBox.width,
            //   clickedElementBox.height);
            // transformStr = ['t',
            //   clickedElementBox.x,
            //   ',',
            //   clickedElementBox.y,
            //   's',
            //   clickedElemScaleParams.scaleFactor,
            //   ',',
            //   clickedElemScaleParams.scaleFactor,
            //   ',0,0'].join('');

            // plotGroup && animationManager.setAnimation({
            //   el: plotGroup,
            //   attr: {
            //     transform: transformStr
            //   },
            //   component: manager,
            //   state: 'appearing',
            //   label: 'group'
            // });

            // // plotGroup && plotGroup.attr({
            // //   transform: transformStr
            // // });

            // plotShadowGroup && animationManager.setAnimation({
            //   el: plotShadowGroup,
            //   attr: {
            //     transform: transformStr
            //   },
            //   component: manager,
            //   state: 'appearing',
            //   label: 'group'
            // });

            plotGroup && animationManager.setAnimation({
              el: plotGroup,
              attr: {
                transform: scalingParams.transformStr
              },
              component: manager,
              state: 'appearing',
              label: 'group'
            });

            plotShadowGroup && animationManager.setAnimation({
              el: plotShadowGroup,
              attr: {
                transform: scalingParams.transformStr
              },
              component: manager,
              state: 'appearing',
              label: 'group'
            });

            // plotShadowGroup && plotShadowGroup.attr({
            //   transform: transformStr
            // });

            // plotGroup && plotGroup.attr({
            //   transform: scalingParams.transformStr
            // });
            // plotShadowGroup && plotShadowGroup.attr({
            //   transform: scalingParams.transformStr
            // });
          } else {
            plotGroup && animationManager.setAnimation({
              el: plotGroup,
              attr: {
                transform: scalingParams.transformStr
              },
              component: manager,
              state: 'appearing',
              label: 'group'
            });
            // plotGroup && plotGroup.attr({
            //   transform: scalingParams.transformStr
            // });
            plotShadowGroup && animationManager.setAnimation({
              el: plotShadowGroup,
              attr: {
                transform: scalingParams.transformStr
              },
              component: manager,
              state: 'appearing',
              label: 'group'
            });
            // plotShadowGroup && plotShadowGroup.attr({
            //   transform: scalingParams.transformStr
            // });
          }
        }
        // Show the dataset's shadow layers for both VML and SVG
        plotGroup.show();
        plotShadowGroup.show();
      };
    };
    // i;

    // Initially set the opacity of the shadow group to zero
    // plotShadowGroup.attr({
    //   opacity: 0
    // });

    plotShadowGroup && animationManager.setAnimation({
      el: plotShadowGroup,
      attr: {
        opacity: 0
      },
      component: manager,
      state: 'appearing',
      label: 'group'
    });

    plotGroup.hide();
    plotShadowGroup.hide();
    chart.config.entitiesReady = false;
    chartInstance.addEventListener('internal.mapdrawingcomplete', transformGroup());
    chart.checkComplete();
  };
  /**
   * function call sync draw of its children
   */


  MapGroup.prototype.draw = function draw() {
    this.createContainer();
    this._transformGroup();
  };
  /**
   * function to get data limits from its child datasets
   * return minimun and maximum value among the datasets limit
   * @param {boolean} allVisible  whether consider all the datasets are visible or not
   * @return {Object}             [min, max]
   */


  MapGroup.prototype.getDataLimits = function getDataLimits(allVisible) {
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
      if (child.getState('removed') || child.getState('visible') === false) {
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

  return MapGroup;
}(_componentInterface2['default']);

exports['default'] = MapGroup;

/***/ })

},[900])["default"];
});
//# sourceMappingURL=fusioncharts.maps.js.map