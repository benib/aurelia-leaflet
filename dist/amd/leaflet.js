define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', './aurelia-leaflet-exceptions', './leaflet-defaults', './helpers/layer-factory'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaLeafletExceptions, _leafletDefaults, _helpersLayerFactory) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _LayerFactory = _interopRequireDefault(_helpersLayerFactory);

  var LeafletCustomElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(LeafletCustomElement, [{
      key: 'layers',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'mapEvents',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'mapOptions',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'withLayerControl',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'withScaleControl',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], [{
      key: 'inject',
      value: ['Leaflet', _aureliaEventAggregator.EventAggregator, Element],
      enumerable: true
    }], _instanceInitializers);

    function LeafletCustomElement(Leaflet, EventAggregator, Element) {
      var _this = this;

      _classCallCheck(this, _LeafletCustomElement);

      this.__initializeProperties();

      this.L = Leaflet;
      this.eventAggregator = EventAggregator;
      this.element = Element;

      this.layerFactory = new _LayerFactory['default'](this.L);

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

    _createDecoratedClass(LeafletCustomElement, [{
      key: 'layersChanged',
      value: function layersChanged(newLayers, oldLayers) {
        if (oldLayers && oldLayers !== null) {
          this.removeOldLayers(oldLayers.base, 'base');
          this.removeOldLayers(oldLayers.overlay, 'overlay');
        }
        this.attachLayers();
      }
    }, {
      key: 'mapOptionsChanged',
      value: function mapOptionsChanged(newOptions, oldOptions) {
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
      }
    }, {
      key: 'mapEventsChanged',
      value: function mapEventsChanged(newEvents, oldEvents) {
        var _this3 = this;

        this.mapInit.then(function () {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = newEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var eventName = _step.value;

              _this3.map.on(eventName, function (e) {
                return _this3.eventAggregator.publish('aurelia-leaflet', Object.assign(e, { map: _this3.map }));
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (oldEvents !== null) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = oldEvents.filter(function (e) {
                return newEvents.indexOf(e) === -1;
              })[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var removedEvent = _step2.value;

                _this3.map.off(removedEvent);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
          if (!_this3.eventsBound.resolved) {
            _this3.eventsBoundResolve();
          }
        });
      }
    }, {
      key: 'withLayerControlChanged',
      value: function withLayerControlChanged(newValue) {
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
      }
    }, {
      key: 'withScaleControlChanged',
      value: function withScaleControlChanged(newValue) {
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
      }
    }, {
      key: 'attached',
      value: function attached() {
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
      }
    }, {
      key: 'attachLayers',
      value: function attachLayers() {
        var _this7 = this;

        var layersToAttach = {
          base: {},
          overlay: {}
        };
        if (this.layers.hasOwnProperty('base')) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.layers.base[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var layer = _step3.value;

              layersToAttach.base[this.getLayerId(layer)] = this.layerFactory.getLayer(layer);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
        if (this.layers.hasOwnProperty('overlay')) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.layers.overlay[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var layer = _step4.value;

              layersToAttach.overlay[this.getLayerId(layer)] = this.layerFactory.getLayer(layer);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                _iterator4['return']();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
        this.mapInit.then(function () {
          for (var layerId in layersToAttach.base) {
            _this7.attachedLayers.base[layerId] = layersToAttach.base[layerId].addTo(_this7.map);
          }
          for (var layerId in layersToAttach.overlay) {
            _this7.attachedLayers.overlay[layerId] = layersToAttach.overlay[layerId].addTo(_this7.map);
          }
        });
      }
    }, {
      key: 'removeOldLayers',
      value: function removeOldLayers(oldLayers, type) {
        var _this8 = this;

        if (!oldLayers || !oldLayers.length) {
          return;
        }
        var removedLayers = oldLayers.filter(function (oldLayer) {
          var removed = true;
          if (!_this8.layers.hasOwnProperty(type)) {
            return true;
          }
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _this8.layers[type][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var newLayer = _step5.value;

              if (_this8.getLayerId(newLayer) === _this8.getLayerId(oldLayer)) {
                removed = false;
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                _iterator5['return']();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return removed;
        });

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          var _loop = function () {
            var removedLayer = _step6.value;

            _this8.mapInit.then(function () {
              var id = _this8.getLayerId(removedLayer);
              if (_this8.attachedLayers[type].hasOwnProperty(id)) {
                _this8.map.removeLayer(_this8.attachedLayers[type][id]);
                delete _this8.attachedLayers[type][_this8.getLayerId(removedLayer)];
              }
            });
          };

          for (var _iterator6 = removedLayers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
              _iterator6['return']();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }
    }, {
      key: 'getLayerId',
      value: function getLayerId(layer) {
        var id = layer.id ? layer.id : layer.url;
        if (!id) {
          throw new _aureliaLeafletExceptions.AureliaLeafletException('Not possible to get id for layer. Set the id property');
        }
        return id;
      }
    }, {
      key: '__initializeProperties',
      value: function __initializeProperties() {
        _defineDecoratedPropertyDescriptor(this, 'layers', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'mapEvents', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'mapOptions', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'withLayerControl', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'withScaleControl', _instanceInitializers);

        this.attachedLayers = {
          base: {},
          overlay: {}
        };
      }
    }], null, _instanceInitializers);

    var _LeafletCustomElement = LeafletCustomElement;
    LeafletCustomElement = (0, _aureliaFramework.useView)('./leaflet.html')(LeafletCustomElement) || LeafletCustomElement;
    LeafletCustomElement = (0, _aureliaFramework.customElement)('leaflet')(LeafletCustomElement) || LeafletCustomElement;
    return LeafletCustomElement;
  })();

  exports.LeafletCustomElement = LeafletCustomElement;
});