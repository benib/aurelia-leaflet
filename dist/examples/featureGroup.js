System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, useView, _dec, _class, FeatureGroup;

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
      _export('FeatureGroup', FeatureGroup = (_dec = useView('./only-layers.html'), _dec(_class = function () {
        function FeatureGroup() {
          _classCallCheck(this, FeatureGroup);

          this.jsFile = 'featureGroup.js';
          this.htmlFile = 'only-layers.html';
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
          this.hasConsoleOutput = true;
        }

        FeatureGroup.prototype.activate = function activate() {
          this.layers = {
            base: [{
              id: "OSM",
              url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
              options: {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            }],
            overlay: [{
              id: 'myFeatures',
              type: 'featureGroup',
              layers: [{
                type: 'circle',
                latLng: [47.3686498, 8.53918250],
                radius: 100,
                options: {
                  color: "red"
                },
                events: [{
                  name: 'add',
                  callback: function callback(event) {
                    return console.log(event, 'red circle added');
                  }
                }]
              }, {
                type: 'circleMarker',
                latLng: [47.3786498, 8.54918250],
                radius: 100,
                options: {
                  color: "blue"
                },
                events: [{
                  name: 'click',
                  callback: function callback(event) {
                    return console.log(event, 'blue clicked');
                  }
                }]
              }, {
                type: 'marker',
                latLng: [47.3886498, 8.55918250],
                popupContent: 'I am a popup on a marker'
              }],
              events: [{
                name: 'click',
                callback: function callback(event) {
                  return console.log(event, 'featureGroup clicked');
                }
              }]
            }]
          };
        };

        return FeatureGroup;
      }()) || _class));

      _export('FeatureGroup', FeatureGroup);
    }
  };
});
//# sourceMappingURL=featureGroup.js.map
