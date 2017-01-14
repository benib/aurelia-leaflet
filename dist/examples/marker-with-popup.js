System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, useView, _dec, _class, MarkerWithPopup;

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
      _export('MarkerWithPopup', MarkerWithPopup = (_dec = useView('./only-layers.html'), _dec(_class = function () {
        function MarkerWithPopup() {
          _classCallCheck(this, MarkerWithPopup);

          this.jsFile = 'marker-with-popup.js';
          this.htmlFile = 'only-layers.html';
        }

        MarkerWithPopup.prototype.activate = function activate() {
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };

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
              latLng: [47.3686498, 8.53918250],
              popupContent: 'Awesome Popup'
            }, {
              id: 'myOtherMarker',
              type: 'marker',
              latLng: [47.3886498, 8.55918250],
              popupContent: 'Awesome Popup'
            }]
          };
        };

        return MarkerWithPopup;
      }()) || _class));

      _export('MarkerWithPopup', MarkerWithPopup);
    }
  };
});
//# sourceMappingURL=marker-with-popup.js.map
