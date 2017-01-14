System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, useView, _dec, _class, BaseLayer;

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
      _export('BaseLayer', BaseLayer = (_dec = useView('./only-layers.html'), _dec(_class = function () {
        function BaseLayer() {
          _classCallCheck(this, BaseLayer);

          this.jsFile = 'base-layer.js';
          this.htmlFile = 'only-layers.html';
        }

        BaseLayer.prototype.activate = function activate() {
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
            }]
          };
        };

        return BaseLayer;
      }()) || _class));

      _export('BaseLayer', BaseLayer);
    }
  };
});
//# sourceMappingURL=base-layer.js.map
