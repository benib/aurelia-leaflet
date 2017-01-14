System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var useView, _dec, _class, Controls;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      _export('Controls', Controls = (_dec = useView('./controls.html'), _dec(_class = function () {
        function Controls() {
          _classCallCheck(this, Controls);

          this.jsFile = 'controls.js';
          this.htmlFile = 'controls.html';
          this.withLayerControl = {
            position: "topright"
          };
          this.withScaleControl = {};
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
        }

        Controls.prototype.activate = function activate() {
          this.layers = {
            base: [{
              id: "OSM",
              url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
              options: {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            }]
          };
        };

        return Controls;
      }()) || _class));

      _export('Controls', Controls);
    }
  };
});
//# sourceMappingURL=controls.js.map
