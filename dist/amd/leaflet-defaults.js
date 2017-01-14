define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var defaultMapOptions = {
    center: {
      lat: 47.3686498,
      lng: 8.53918250
    },
    zoomLevel: 13
  };

  exports.defaultMapOptions = defaultMapOptions;
  var defaultLayers = {
    base: [{
      id: 'OSM Tiles',
      type: 'tile',
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      options: {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    }],
    overlay: []
  };
  exports.defaultLayers = defaultLayers;
});