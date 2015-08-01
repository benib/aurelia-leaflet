System.register(['../aurelia-leaflet-exceptions'], function (_export) {
  'use strict';

  var AureliaLeafletException, LayerFactory;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaLeafletExceptions) {
      AureliaLeafletException = _aureliaLeafletExceptions.AureliaLeafletException;
    }],
    execute: function () {
      LayerFactory = (function () {
        function LayerFactory(Leaflet) {
          _classCallCheck(this, LayerFactory);

          this.L = Leaflet;
        }

        _createClass(LayerFactory, [{
          key: 'getLayer',
          value: function getLayer(layer) {
            if (!layer.hasOwnProperty('type')) {
              layer.type = 'tile';
            }

            var instance = undefined;

            switch (layer.type) {
              case 'tile':
                instance = this.getTile(layer);
                break;
              case 'wms':
                instance = this.getWMS(layer);
                break;
              case 'canvas':
                instance = this.getCanvas(layer);
                break;
              case 'imageOverlay':
                instance = this.getImageOverlay(layer);
                break;
              case 'polyline':
                instance = this.getPolyline(layer);
                break;
              case 'multiPolyline':
                instance = this.getMultiPolyline(layer);
                break;
              case 'polygone':
                instance = this.getPolygone(layer);
                break;
              case 'multiPolygone':
                instance = this.getMultiPolygone(layer);
                break;
              case 'rectangle':
                instance = this.getRectangle(layer);
                break;
              case 'circle':
                instance = this.getCircle(layer);
                break;
              case 'circleMarker':
                instance = this.getCircleMarker(layer);
                break;
              default:
                throw new AureliaLeafletException('Layer type ' + layer.type + ' not implemented');
            }

            if (typeof layer.initCallback === 'function') {
              layer.initCallback(instance);
            }

            if (layer.hasOwnProperty('events')) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = layer.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var e = _step.value;

                  instance.on(e.name, e.callback);
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
            }

            return instance;
          }
        }, {
          key: 'getTile',
          value: function getTile(layer) {
            if (!layer.hasOwnProperty('url')) {
              throw new AureliaLeafletException('No url given for layer.type "tile"');
            }
            return this.L.tileLayer(layer.url, layer.options);
          }
        }, {
          key: 'getWMS',
          value: function getWMS(layer) {
            if (!layer.hasOwnProperty('url')) {
              throw new AureliaLeafletException('No url given for layer.type "wms"');
            }
            return this.L.tileLayer.wms(layer.url, layer.options);
          }
        }, {
          key: 'getCanvas',
          value: function getCanvas(layer) {
            var l = this.L.tileLayer.canvas(layer.options);
            if (layer.hasOwnProperty('drawTile')) {
              l.drawTile = layer.drawTile;
            }
            if (layer.hasOwnProperty('tileDrawn')) {
              l.tileDrawn = layer.tileDrawn;
            }
            return l;
          }
        }, {
          key: 'getImageOverlay',
          value: function getImageOverlay(layer) {
            if (!layer.hasOwnProperty('url')) {
              throw new AureliaLeafletException('No url given for layer.type "imageOverlay"');
            }
            if (!layer.hasOwnProperty('imageBounds')) {
              throw new AureliaLeafletException('No imageBounds given for layer.type "imageOverlay"');
            }
            return this.L.imageOverlay(layer.url, layer.imageBounds, layer.options);
          }
        }, {
          key: 'getPolyline',
          value: function getPolyline(layer) {
            if (!layer.hasOwnProperty('latLngs')) {
              throw new AureliaLeafletException('No latLngs given for layer.type "polyline"');
            }
            return this.L.polyline(layer.latlngs, layer.options);
          }
        }, {
          key: 'getMultiPolyline',
          value: function getMultiPolyline(layer) {
            if (!layer.hasOwnProperty('latLngs')) {
              throw new AureliaLeafletException('No latLngs given for layer.type "multiPolyline"');
            }
            return this.L.multiPolyline(layer.latlngs, layer.options);
          }
        }, {
          key: 'getPolygone',
          value: function getPolygone(layer) {
            if (!layer.hasOwnProperty('latLngs')) {
              throw new AureliaLeafletException('No latLngs given for layer.type "polygone"');
            }
            return this.L.polygone(layer.latlngs, layer.options);
          }
        }, {
          key: 'getMultiPolygone',
          value: function getMultiPolygone(layer) {
            if (!layer.hasOwnProperty('latLngs')) {
              throw new AureliaLeafletException('No latLngs given for layer.type "multiPolygone"');
            }
            return this.L.multiPolygone(layer.latlngs, layer.options);
          }
        }, {
          key: 'getRectangle',
          value: function getRectangle(layer) {
            if (!layer.hasOwnProperty('bounds')) {
              throw new AureliaLeafletException('No bounds given for layer.type "rectangle"');
            }
            return this.L.rectangle(layer.bounds, layer.options);
          }
        }, {
          key: 'getCircle',
          value: function getCircle(layer) {
            if (!layer.hasOwnProperty('latLng')) {
              throw new AureliaLeafletException('No latLng given for layer.type "circle"');
            }
            if (!layer.hasOwnProperty('radius')) {
              throw new AureliaLeafletException('No radius given for layer.type "circle"');
            }
            return this.L.circle(layer.latLng, layer.radius, layer.options);
          }
        }, {
          key: 'getCircleMarker',
          value: function getCircleMarker(layer) {
            if (!layer.hasOwnProperty('latLng')) {
              throw new AureliaLeafletException('No latLng given for layer.type "circleMarker"');
            }
            return this.L.circleMarker(layer.latLng, layer.options);
          }
        }]);

        return LayerFactory;
      })();

      _export('default', LayerFactory);
    }
  };
});