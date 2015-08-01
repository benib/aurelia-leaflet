System.register([], function (_export) {
  'use strict';

  var defaultMapOptions, defaultLayers;
  return {
    setters: [],
    execute: function () {
      defaultMapOptions = {
        center: {
          lat: 47.3686498,
          lng: 8.53918250
        },
        zoomLevel: 13
      };

      _export('defaultMapOptions', defaultMapOptions);

      defaultLayers = {
        base: [{
          id: 'OSM Tiles',
          type: 'tile',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        }],
        overlay: []
      };

      _export('defaultLayers', defaultLayers);
    }
  };
});