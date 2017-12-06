'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafletCustomElement = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp;

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _aureliaLeafletExceptions = require('./aurelia-leaflet-exceptions');

var _leafletDefaults = require('./leaflet-defaults');

var _layerFactory = require('./helpers/layer-factory');

var _leaflet = require('leaflet');

var Leaflet = _interopRequireWildcard(_leaflet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var LeafletCustomElement = exports.LeafletCustomElement = (_dec = (0, _aureliaFramework.customElement)('leaflet'), _dec2 = (0, _aureliaFramework.useView)('./leaflet.html'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
  function LeafletCustomElement(eventAggregator, element) {
    var _this = this;

    

    _initDefineProp(this, 'layers', _descriptor, this);

    _initDefineProp(this, 'mapEvents', _descriptor2, this);

    _initDefineProp(this, 'mapOptions', _descriptor3, this);

    _initDefineProp(this, 'withLayerControl', _descriptor4, this);

    _initDefineProp(this, 'withScaleControl', _descriptor5, this);

    this.attachedLayers = {
      base: {},
      overlay: {}
    };

    this.L = Leaflet;
    this.eventAggregator = eventAggregator;
    this.element = element;

    this.layerFactory = new _layerFactory.LayerFactory(this.L);

    this.mapInit = new Promise(function (resolve, reject) {
      _this.mapInitResolve = resolve;
      _this.mapInitReject = reject;
    });

    this.eventsBound = new Promise(function (resolve, reject) {
      _this.eventsBoundResolve = resolve;
      _this.eventsBoundReject = reject;
    });

    this.mapOptions = _leafletDefaults.defaultMapOptions;
    this.layers = _leafletDefaults.defaultLayers;
  }

  LeafletCustomElement.prototype.layersChanged = function layersChanged(newLayers, oldLayers) {
    if (oldLayers && oldLayers !== null) {
      this.removeOldLayers(oldLayers.base, 'base');
      this.removeOldLayers(oldLayers.overlay, 'overlay');
    }
    this.attachLayers();
  };

  LeafletCustomElement.prototype.mapOptionsChanged = function mapOptionsChanged(newOptions, oldOptions) {
    var _this2 = this;

    this.mapOptions = Object.assign(_leafletDefaults.defaultMapOptions, newOptions);

    this.mapInit.then(function () {
      if (oldOptions) {
        if (_this2.mapOptions.center !== oldOptions.center) {
          _this2.map.setView(_this2.mapOptions.center);
        }
        if (_this2.mapOptions.zoom !== oldOptions.zoom) {
          _this2.map.setZoom(_this2.mapOptions.zoom);
        }
        if (_this2.mapOptions.maxBounds !== oldOptions.maxBounds) {
          _this2.map.setMaxBounds(_this2.mapOptions.maxBounds);
        }
      }
    });
  };

  LeafletCustomElement.prototype.mapEventsChanged = function mapEventsChanged(newEvents, oldEvents) {
    var _this3 = this;

    this.mapInit.then(function () {
      if (newEvents && newEvents.length) {
        for (var _iterator = newEvents, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var eventName = _ref;

          _this3.map.on(eventName, function (e) {
            return _this3.eventAggregator.publish('aurelia-leaflet', Object.assign(e, { map: _this3.map }));
          });
        }
      }
      if (oldEvents !== null) {
        for (var _iterator2 = oldEvents.filter(function (e) {
          return newEvents.indexOf(e) === -1;
        }), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var removedEvent = _ref2;

          _this3.map.off(removedEvent);
        }
      }
      if (!_this3.eventsBound.resolved) {
        _this3.eventsBoundResolve();
      }
    });
  };

  LeafletCustomElement.prototype.withLayerControlChanged = function withLayerControlChanged(newValue) {
    var _this4 = this;

    if (newValue === false) {
      this.mapInit.then(function () {
        if (_this4.layerControl) {
          _this4.map.removeControl(_this4.layerControl);
        }
      });
    } else {
      this.mapInit.then(function () {
        if (_this4.layerControl) {
          _this4.map.removeControl(_this4.layerControl);
        }
        _this4.layerControl = _this4.L.control.layers(_this4.attachedLayers.base, _this4.attachedLayers.overlay, newValue).addTo(_this4.map);
      });
    }
  };

  LeafletCustomElement.prototype.withScaleControlChanged = function withScaleControlChanged(newValue) {
    var _this5 = this;

    if (newValue === false) {
      this.mapInit.then(function () {
        if (_this5.scaleControl) {
          _this5.map.removeControl(_this5.scaleControl);
        }
      });
    } else {
      this.mapInit.then(function () {
        if (_this5.scaleControl) {
          _this5.map.removeControl(_this5.scaleControl);
        }
        _this5.scaleControl = _this5.L.control.scale(newValue).addTo(_this5.map);
      });
    }
  };

  LeafletCustomElement.prototype.attached = function attached() {
    var _this6 = this;

    return new Promise(function (resolve, reject) {
      var center = _this6.mapOptions.center;
      delete _this6.mapOptions.center;
      if (!_this6.map) {
        _this6.map = new _this6.L.map(_this6.mapContainer, _this6.mapOptions);
      }
      _this6.mapOptions.center = center;

      if (_this6.map) {
        _this6.mapInitResolve();
      } else {
        _this6.mapInitReject();
        reject();
      }

      resolve();

      if (_this6.mapEvents) {
        _this6.eventsBound.then(function () {
          _this6.map.setView([_this6.mapOptions.center.lat, _this6.mapOptions.center.lng], _this6.mapOptions.zoomLevel);
        });
      } else {
        _this6.map.setView([_this6.mapOptions.center.lat, _this6.mapOptions.center.lng], _this6.mapOptions.zoomLevel);
      }
    });
  };

  LeafletCustomElement.prototype.attachLayers = function attachLayers() {
    var _this7 = this;

    var layersToAttach = {
      base: {},
      overlay: {}
    };
    if (this.layers.hasOwnProperty('base')) {
      for (var _iterator3 = this.layers.base, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var layer = _ref3;

        layersToAttach.base[this.getLayerId(layer)] = this.layerFactory.getLayer(layer);
      }
    }
    if (this.layers.hasOwnProperty('overlay')) {
      for (var _iterator4 = this.layers.overlay, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var _layer = _ref4;

        layersToAttach.overlay[this.getLayerId(_layer)] = this.layerFactory.getLayer(_layer);
      }
    }
    this.mapInit.then(function () {
      for (var layerId in layersToAttach.base) {
        _this7.attachedLayers.base[layerId] = layersToAttach.base[layerId].addTo(_this7.map);
      }
      for (var _layerId in layersToAttach.overlay) {
        _this7.attachedLayers.overlay[_layerId] = layersToAttach.overlay[_layerId].addTo(_this7.map);
      }
    });
  };

  LeafletCustomElement.prototype.removeOldLayers = function removeOldLayers(oldLayers, type) {
    var _this8 = this;

    if (!oldLayers || !oldLayers.length) {
      return;
    }
    var removedLayers = oldLayers.filter(function (oldLayer) {
      var removed = true;
      if (!_this8.layers.hasOwnProperty(type)) {
        return true;
      }
      for (var _iterator5 = _this8.layers[type], _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var newLayer = _ref5;

        if (_this8.getLayerId(newLayer) === _this8.getLayerId(oldLayer)) {
          removed = false;
        }
      }
      return removed;
    });

    var _loop = function _loop() {
      if (_isArray6) {
        if (_i6 >= _iterator6.length) return 'break';
        _ref6 = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) return 'break';
        _ref6 = _i6.value;
      }

      var removedLayer = _ref6;

      _this8.mapInit.then(function () {
        var id = _this8.getLayerId(removedLayer);
        if (_this8.attachedLayers[type].hasOwnProperty(id)) {
          _this8.map.removeLayer(_this8.attachedLayers[type][id]);
          delete _this8.attachedLayers[type][_this8.getLayerId(removedLayer)];
        }
      });
    };

    for (var _iterator6 = removedLayers, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref6;

      var _ret = _loop();

      if (_ret === 'break') break;
    }
  };

  LeafletCustomElement.prototype.getLayerId = function getLayerId(layer) {
    var id = layer.id ? layer.id : layer.url;
    if (!id) {
      throw new _aureliaLeafletExceptions.AureliaLeafletException('Not possible to get id for layer. Set the id property');
    }
    return id;
  };

  return LeafletCustomElement;
}(), _class3.inject = [_aureliaEventAggregator.EventAggregator, Element], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'layers', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mapEvents', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mapOptions', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'withLayerControl', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'withScaleControl', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);