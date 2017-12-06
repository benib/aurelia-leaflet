define(['exports', './aurelia-leaflet'], function (exports, _aureliaLeaflet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaLeaflet).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaLeaflet[key];
      }
    });
  });
});