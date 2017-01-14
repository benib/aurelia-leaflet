System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
  "use strict";

  var inject, useView, HttpClient, _dec, _dec2, _class, GeoJSON;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      _export('GeoJSON', GeoJSON = (_dec = useView('./only-layers.html'), _dec2 = inject(HttpClient), _dec(_class = _dec2(_class = function () {
        function GeoJSON(httpClient) {
          _classCallCheck(this, GeoJSON);

          this.jsFile = 'geojson.js';
          this.htmlFile = 'only-layers.html';
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 11
          };

          this.http = httpClient;
        }

        GeoJSON.prototype.activate = function activate() {
          var _this = this;

          this.http.fetch("https://cors-proxy.xiala.net/https://data.stadt-zuerich.ch/storage/f/velopumpstation/velopumpstation.json").then(function (response) {
            return response.json();
          }).then(function (json) {
            _this.layers = {
              base: [{
                id: 'OSM Tiles',
                type: 'tile',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                options: {
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
              }],
              overlay: [{
                id: 'pump',
                type: 'geoJSON',
                data: json,
                options: {
                  pointToLayer: function pointToLayer(feature, latlng) {
                    return L.circleMarker(latlng, {
                      radius: 8,
                      fillColor: feature.properties.Typ === 'Handpumpe' ? 'green' : 'blue',
                      color: "#000",
                      weight: 1,
                      opacity: 1,
                      fillOpacity: 0.8
                    });
                  },
                  onEachFeature: function onEachFeature(feature, layer) {
                    layer.bindPopup(feature.properties.Bezeichnung + '<br>' + feature.properties.Typ);
                  }
                }
              }]
            };
          });
        };

        return GeoJSON;
      }()) || _class) || _class));

      _export('GeoJSON', GeoJSON);
    }
  };
});
//# sourceMappingURL=geojson.js.map
