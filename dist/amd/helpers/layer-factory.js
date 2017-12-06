define(['exports', '../aurelia-leaflet-exceptions'], function (exports, _aureliaLeafletExceptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LayerFactory = undefined;

  

  var LayerFactory = exports.LayerFactory = function () {
    function LayerFactory(Leaflet) {
      

      this.L = Leaflet;
    }

    LayerFactory.prototype.getLayer = function getLayer(layer) {
      if (!layer.hasOwnProperty('type')) {
        layer.type = 'tile';
      }

      var instance = void 0;

      switch (layer.type) {
        case 'marker':
          instance = this.getMarker(layer);
          break;
        case 'popup':
          instance = this.getPopup(layer);
          break;
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
        case 'group':
          instance = this.getLayerGroup(layer);
          break;
        case 'featureGroup':
          instance = this.getFeatureGroup(layer);
          break;
        case 'geoJSON':
          instance = this.getGeoJson(layer);
          break;
        default:
          throw new _aureliaLeafletExceptions.AureliaLeafletException('Layer type ' + layer.type + ' not implemented');
      }

      if (typeof layer.initCallback === 'function') {
        layer.initCallback(instance);
      }

      if (layer.hasOwnProperty('events')) {
        for (var _iterator = layer.events, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var e = _ref;

          if (typeof instance.on === 'function') {
            instance.on(e.name, e.callback);
          }
        }
      }

      return instance;
    };

    LayerFactory.prototype.getMarker = function getMarker(layer) {
      if (!layer.hasOwnProperty('latLng')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLng given for layer.type "marker"');
      }
      var marker = this.L.marker(layer.latLng, layer.options);
      if (layer.hasOwnProperty('popupContent')) {
        marker.bindPopup(layer.popupContent).openPopup();
      }
      return marker;
    };

    LayerFactory.prototype.getPopup = function getPopup(layer) {
      var popup = this.L.popup(layer.options);
      if (layer.hasOwnProperty('content')) {
        popup.setContent(layer.content);
      }
      if (layer.hasOwnProperty('latLng')) {
        popup.setLatLng(layer.latLng);
      }
      return popup;
    };

    LayerFactory.prototype.getTile = function getTile(layer) {
      if (!layer.hasOwnProperty('url')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No url given for layer.type "tile"');
      }
      return this.L.tileLayer(layer.url, layer.options);
    };

    LayerFactory.prototype.getWMS = function getWMS(layer) {
      if (!layer.hasOwnProperty('url')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No url given for layer.type "wms"');
      }
      return this.L.tileLayer.wms(layer.url, layer.options);
    };

    LayerFactory.prototype.getCanvas = function getCanvas(layer) {
      var l = this.L.tileLayer.canvas(layer.options);
      if (layer.hasOwnProperty('drawTile')) {
        l.drawTile = layer.drawTile;
      }
      if (layer.hasOwnProperty('tileDrawn')) {
        l.tileDrawn = layer.tileDrawn;
      }
      return l;
    };

    LayerFactory.prototype.getImageOverlay = function getImageOverlay(layer) {
      if (!layer.hasOwnProperty('url')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No url given for layer.type "imageOverlay"');
      }
      if (!layer.hasOwnProperty('imageBounds')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No imageBounds given for layer.type "imageOverlay"');
      }
      return this.L.imageOverlay(layer.url, layer.imageBounds, layer.options);
    };

    LayerFactory.prototype.getPolyline = function getPolyline(layer) {
      if (!layer.hasOwnProperty('latLngs')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLngs given for layer.type "polyline"');
      }
      return this.L.polyline(layer.latlngs, layer.options);
    };

    LayerFactory.prototype.getMultiPolyline = function getMultiPolyline(layer) {
      if (!layer.hasOwnProperty('latLngs')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLngs given for layer.type "multiPolyline"');
      }
      return this.L.multiPolyline(layer.latlngs, layer.options);
    };

    LayerFactory.prototype.getPolygone = function getPolygone(layer) {
      if (!layer.hasOwnProperty('latLngs')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLngs given for layer.type "polygone"');
      }
      return this.L.polygone(layer.latlngs, layer.options);
    };

    LayerFactory.prototype.getMultiPolygone = function getMultiPolygone(layer) {
      if (!layer.hasOwnProperty('latLngs')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLngs given for layer.type "multiPolygone"');
      }
      return this.L.multiPolygone(layer.latlngs, layer.options);
    };

    LayerFactory.prototype.getRectangle = function getRectangle(layer) {
      if (!layer.hasOwnProperty('bounds')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No bounds given for layer.type "rectangle"');
      }
      return this.L.rectangle(layer.bounds, layer.options);
    };

    LayerFactory.prototype.getCircle = function getCircle(layer) {
      if (!layer.hasOwnProperty('latLng')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLng given for layer.type "circle"');
      }
      if (!layer.hasOwnProperty('radius')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No radius given for layer.type "circle"');
      }
      return this.L.circle(layer.latLng, layer.radius, layer.options);
    };

    LayerFactory.prototype.getCircleMarker = function getCircleMarker(layer) {
      if (!layer.hasOwnProperty('latLng')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No latLng given for layer.type "circleMarker"');
      }
      return this.L.circleMarker(layer.latLng, layer.options);
    };

    LayerFactory.prototype.getLayerGroup = function getLayerGroup(layer) {
      if (!layer.hasOwnProperty('layers')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No layers given for layer.type "group"');
      }
      var layers = [];
      for (var _iterator2 = layer.layers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var l = _ref2;

        layers.push(this.getLayer(l));
      }
      return this.L.layerGroup(layers);
    };

    LayerFactory.prototype.getFeatureGroup = function getFeatureGroup(layer) {
      if (!layer.hasOwnProperty('layers')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No layers given for layer.type "featureGroup"');
      }
      var layers = [];
      for (var _iterator3 = layer.layers, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var l = _ref3;

        layers.push(this.getLayer(l));
      }
      return this.L.featureGroup(layers);
    };

    LayerFactory.prototype.getGeoJson = function getGeoJson(layer) {
      if (!layer.hasOwnProperty('data')) {
        throw new _aureliaLeafletExceptions.AureliaLeafletException('No data property given for layer.type "geoJSON"');
      }
      return this.L.geoJson(layer.data, layer.options);
    };

    return LayerFactory;
  }();
});