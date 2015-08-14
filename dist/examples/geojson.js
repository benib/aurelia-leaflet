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

          this.http = httpClient;
        }

        _createClass(GeoJSON, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.fetch("../../data/bikepumps.json").then(function (response) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2dlb2pzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21DQUthLE9BQU87Ozs7Ozs7O2lDQUxaLE1BQU07a0NBQUUsT0FBTzs7dUNBQ2YsVUFBVTs7O0FBSUwsYUFBTztBQU1QLGlCQU5BLE9BQU8sQ0FNTixVQUFVLEVBQUU7OztlQUp4QixNQUFNLEdBQUcsWUFBWTtlQUNyQixRQUFRLEdBQUcsa0JBQWtCOztBQUkzQixjQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN4Qjs7cUJBUlUsT0FBTzs7aUJBVVYsb0JBQUc7OztBQUNULGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUN6QyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIscUJBQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDWixvQkFBSyxNQUFNLEdBQUc7QUFDWixvQkFBSSxFQUFFLENBQ0o7QUFDRSxvQkFBRSxFQUFFLFdBQVc7QUFDZixzQkFBSSxFQUFFLE1BQU07QUFDWixxQkFBRyxFQUFFLG9EQUFvRDtBQUN6RCx5QkFBTyxFQUFFO0FBQ1AsK0JBQVcsRUFBRSx3RkFBd0Y7bUJBQ3RHO2lCQUNGLENBQ0Y7QUFDRCx1QkFBTyxFQUFFLENBQ1A7QUFDRSxvQkFBRSxFQUFFLE1BQU07QUFDVixzQkFBSSxFQUFFLFNBQVM7QUFDZixzQkFBSSxFQUFFLElBQUk7QUFDVix5QkFBTyxFQUFFO0FBQ1AsZ0NBQVksRUFBRSxzQkFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3ZDLDZCQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO0FBQzVCLDhCQUFNLEVBQUUsQ0FBQztBQUNULGlDQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNO0FBQ3BFLDZCQUFLLEVBQUUsTUFBTTtBQUNiLDhCQUFNLEVBQUUsQ0FBQztBQUNULCtCQUFPLEVBQUUsQ0FBQztBQUNWLG1DQUFXLEVBQUUsR0FBRzt1QkFDakIsQ0FBQyxDQUFDO3FCQUNKO0FBQ0QsaUNBQWEsRUFBRSx1QkFBVSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3JDLDJCQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyRjttQkFDRjtpQkFDRixDQUNGO2VBQ0YsQ0FBQTthQUNGLENBQUMsQ0FBQztXQUNOOzs7dUJBbkRVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FGbkIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBRWpCLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJleGFtcGxlcy9nZW9qc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5AdXNlVmlldygnLi9vbmx5LWxheWVycy5odG1sJylcbkBpbmplY3QoSHR0cENsaWVudClcbmV4cG9ydCBjbGFzcyBHZW9KU09OIHtcbiAgLy8gZGVtb1xuICBqc0ZpbGUgPSAnZ2VvanNvbi5qcyc7XG4gIGh0bWxGaWxlID0gJ29ubHktbGF5ZXJzLmh0bWwnO1xuICAvLyBkZW1vZW5kXG5cbiAgY29uc3RydWN0b3IoaHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHBDbGllbnQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmh0dHAuZmV0Y2goXCIuLi8uLi9kYXRhL2Jpa2VwdW1wcy5qc29uXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0ge1xuICAgICAgICAgIGJhc2U6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdPU00gVGlsZXMnLFxuICAgICAgICAgICAgICB0eXBlOiAndGlsZScsXG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3ZlcmxheTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ3B1bXAnLFxuICAgICAgICAgICAgICB0eXBlOiAnZ2VvSlNPTicsXG4gICAgICAgICAgICAgIGRhdGE6IGpzb24sXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5UeXAgPT09ICdIYW5kcHVtcGUnID8gJ2dyZWVuJyA6ICdibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25FYWNoRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmJpbmRQb3B1cChmZWF0dXJlLnByb3BlcnRpZXMuQmV6ZWljaG51bmcgKyAnPGJyPicgKyBmZWF0dXJlLnByb3BlcnRpZXMuVHlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=