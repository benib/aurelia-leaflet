System.register(['leaflet'], function (_export) {
  'use strict';

  var Leaflet;

  _export('configure', configure);

  function configure(frameworkConfig) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$LeafletDefaultImagePath = _ref.LeafletDefaultImagePath;
    var LeafletDefaultImagePath = _ref$LeafletDefaultImagePath === undefined ? 'jspm_packages/github/Leaflet/Leaflet@0.7.7/dist/images' : _ref$LeafletDefaultImagePath;

    Leaflet.Icon.Default.imagePath = LeafletDefaultImagePath;
    frameworkConfig.globalResources('./leaflet');
  }

  return {
    setters: [function (_leaflet) {
      Leaflet = _leaflet['default'];
    }],
    execute: function () {}
  };
});