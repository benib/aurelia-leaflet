System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, useView, _dec, _class, Marker;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      _export('Marker', Marker = (_dec = useView('./only-layers.html'), _dec(_class = function () {
        function Marker() {
          _classCallCheck(this, Marker);

          this.jsFile = 'marker.js';
          this.htmlFile = 'only-layers.html';
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
        }

        Marker.prototype.activate = function activate() {
          this.layers = {
            base: [{
              id: "OSM",
              url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
              options: {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            }],
            overlay: [{
              id: 'myMarker',
              type: 'marker',
              latLng: [47.3686498, 8.53918250]
            }]
          };
        };

        return Marker;
      }()) || _class));

      _export('Marker', Marker);
    }
  };
});
//# sourceMappingURL=marker.js.map
