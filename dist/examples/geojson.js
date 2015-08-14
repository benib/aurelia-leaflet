System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, useView, HttpClient, GeoJSON;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      GeoJSON = (function () {
        function GeoJSON(httpClient) {
          _classCallCheck(this, _GeoJSON);

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

        _createClass(GeoJSON, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.fetch("//benib.github.io/aurelia-leaflet/data/bikepumps.json").then(function (response) {
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
          }
        }]);

        var _GeoJSON = GeoJSON;
        GeoJSON = inject(HttpClient)(GeoJSON) || GeoJSON;
        GeoJSON = useView('./only-layers.html')(GeoJSON) || GeoJSON;
        return GeoJSON;
      })();

      _export('GeoJSON', GeoJSON);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2dlb2pzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21DQUthLE9BQU87Ozs7Ozs7O2lDQUxaLE1BQU07a0NBQUUsT0FBTzs7dUNBQ2YsVUFBVTs7O0FBSUwsYUFBTztBQU1QLGlCQU5BLE9BQU8sQ0FNTixVQUFVLEVBQUU7OztlQUp4QixNQUFNLEdBQUcsWUFBWTtlQUNyQixRQUFRLEdBQUcsa0JBQWtCO2VBTzdCLFVBQVUsR0FBRztBQUNYLGtCQUFNLEVBQUU7QUFDTixpQkFBRyxFQUFFLFVBQVU7QUFDZixpQkFBRyxFQUFFLFVBQVU7YUFDaEI7QUFDRCxxQkFBUyxFQUFFLEVBQUU7V0FDZDs7QUFUQyxjQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN4Qjs7cUJBUlUsT0FBTzs7aUJBa0JWLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FDckUsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLHFCQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ1osb0JBQUssTUFBTSxHQUFHO0FBQ1osb0JBQUksRUFBRSxDQUNKO0FBQ0Usb0JBQUUsRUFBRSxXQUFXO0FBQ2Ysc0JBQUksRUFBRSxNQUFNO0FBQ1oscUJBQUcsRUFBRSxvREFBb0Q7QUFDekQseUJBQU8sRUFBRTtBQUNQLCtCQUFXLEVBQUUsd0ZBQXdGO21CQUN0RztpQkFDRixDQUNGO0FBQ0QsdUJBQU8sRUFBRSxDQUNQO0FBQ0Usb0JBQUUsRUFBRSxNQUFNO0FBQ1Ysc0JBQUksRUFBRSxTQUFTO0FBQ2Ysc0JBQUksRUFBRSxJQUFJO0FBQ1YseUJBQU8sRUFBRTtBQUNQLGdDQUFZLEVBQUUsc0JBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2Qyw2QkFBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtBQUM1Qiw4QkFBTSxFQUFFLENBQUM7QUFDVCxpQ0FBUyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLFdBQVcsR0FBRyxPQUFPLEdBQUcsTUFBTTtBQUNwRSw2QkFBSyxFQUFFLE1BQU07QUFDYiw4QkFBTSxFQUFFLENBQUM7QUFDVCwrQkFBTyxFQUFFLENBQUM7QUFDVixtQ0FBVyxFQUFFLEdBQUc7dUJBQ2pCLENBQUMsQ0FBQztxQkFDSjtBQUNELGlDQUFhLEVBQUUsdUJBQVUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNyQywyQkFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckY7bUJBQ0Y7aUJBQ0YsQ0FDRjtlQUNGLENBQUE7YUFDRixDQUFDLENBQUM7V0FDTjs7O3VCQTNEVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBRm5CLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUVqQixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU8iLCJmaWxlIjoiZXhhbXBsZXMvZ2VvanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCB1c2VWaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuQHVzZVZpZXcoJy4vb25seS1sYXllcnMuaHRtbCcpXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgR2VvSlNPTiB7XG4gIC8vIGRlbW9cbiAganNGaWxlID0gJ2dlb2pzb24uanMnO1xuICBodG1sRmlsZSA9ICdvbmx5LWxheWVycy5odG1sJztcbiAgLy8gZGVtb2VuZFxuXG4gIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmh0dHAgPSBodHRwQ2xpZW50O1xuICB9XG5cbiAgbWFwT3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogNDcuMzY4NjQ5OCxcbiAgICAgIGxuZzogOC41MzkxODI1MFxuICAgIH0sXG4gICAgem9vbUxldmVsOiAxMVxuICB9O1xuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuaHR0cC5mZXRjaChcIi8vYmVuaWIuZ2l0aHViLmlvL2F1cmVsaWEtbGVhZmxldC9kYXRhL2Jpa2VwdW1wcy5qc29uXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0ge1xuICAgICAgICAgIGJhc2U6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdPU00gVGlsZXMnLFxuICAgICAgICAgICAgICB0eXBlOiAndGlsZScsXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3ZlcmxheTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ3B1bXAnLFxuICAgICAgICAgICAgICB0eXBlOiAnZ2VvSlNPTicsXG4gICAgICAgICAgICAgIGRhdGE6IGpzb24sXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5UeXAgPT09ICdIYW5kcHVtcGUnID8gJ2dyZWVuJyA6ICdibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FYWNoRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmJpbmRQb3B1cChmZWF0dXJlLnByb3BlcnRpZXMuQmV6ZWljaG51bmcgKyAnPGJyPicgKyBmZWF0dXJlLnByb3BlcnRpZXMuVHlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=