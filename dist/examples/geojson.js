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

            this.http.fetch("/data/bikepumps.json").then(function (response) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2dlb2pzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21DQUthLE9BQU87Ozs7Ozs7O2lDQUxaLE1BQU07a0NBQUUsT0FBTzs7dUNBQ2YsVUFBVTs7O0FBSUwsYUFBTztBQU1QLGlCQU5BLE9BQU8sQ0FNTixVQUFVLEVBQUU7OztlQUp4QixNQUFNLEdBQUcsWUFBWTtlQUNyQixRQUFRLEdBQUcsa0JBQWtCOztBQUkzQixjQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUN4Qjs7cUJBUlUsT0FBTzs7aUJBVVYsb0JBQUc7OztBQUNULGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUNwQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIscUJBQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDWixvQkFBSyxNQUFNLEdBQUc7QUFDWixvQkFBSSxFQUFFLENBQ0o7QUFDRSxvQkFBRSxFQUFFLFdBQVc7QUFDZixzQkFBSSxFQUFFLE1BQU07QUFDWixxQkFBRyxFQUFFLG9EQUFvRDtBQUN6RCx5QkFBTyxFQUFFO0FBQ1AsK0JBQVcsRUFBRSx3RkFBd0Y7bUJBQ3RHO2lCQUNGLENBQ0Y7QUFDRCx1QkFBTyxFQUFFLENBQ1A7QUFDRSxvQkFBRSxFQUFFLE1BQU07QUFDVixzQkFBSSxFQUFFLFNBQVM7QUFDZixzQkFBSSxFQUFFLElBQUk7QUFDVix5QkFBTyxFQUFFO0FBQ1AsZ0NBQVksRUFBRSxzQkFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3ZDLDZCQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO0FBQzVCLDhCQUFNLEVBQUUsQ0FBQztBQUNULGlDQUFTLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssV0FBVyxHQUFHLE9BQU8sR0FBRyxNQUFNO0FBQ3BFLDZCQUFLLEVBQUUsTUFBTTtBQUNiLDhCQUFNLEVBQUUsQ0FBQztBQUNULCtCQUFPLEVBQUUsQ0FBQztBQUNWLG1DQUFXLEVBQUUsR0FBRzt1QkFDakIsQ0FBQyxDQUFDO3FCQUNKO0FBQ0QsaUNBQWEsRUFBRSx1QkFBVSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3JDLDJCQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyRjttQkFDRjtpQkFDRixDQUNGO2VBQ0YsQ0FBQTthQUNGLENBQUMsQ0FBQztXQUNOOzs7dUJBbkRVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FGbkIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBRWpCLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJleGFtcGxlcy9nZW9qc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5AdXNlVmlldygnLi9vbmx5LWxheWVycy5odG1sJylcbkBpbmplY3QoSHR0cENsaWVudClcbmV4cG9ydCBjbGFzcyBHZW9KU09OIHtcbiAgLy8gZGVtb1xuICBqc0ZpbGUgPSAnZ2VvanNvbi5qcyc7XG4gIGh0bWxGaWxlID0gJ29ubHktbGF5ZXJzLmh0bWwnO1xuICAvLyBkZW1vZW5kXG5cbiAgY29uc3RydWN0b3IoaHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHBDbGllbnQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmh0dHAuZmV0Y2goXCIvZGF0YS9iaWtlcHVtcHMuanNvblwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgICAgICBiYXNlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnT1NNIFRpbGVzJyxcbiAgICAgICAgICAgICAgdHlwZTogJ3RpbGUnLFxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG92ZXJsYXk6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdwdW1wJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2dlb0pTT04nLFxuICAgICAgICAgICAgICBkYXRhOiBqc29uLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG5nLCB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogOCxcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBmZWF0dXJlLnByb3BlcnRpZXMuVHlwID09PSAnSGFuZHB1bXBlJyA/ICdncmVlbicgOiAnYmx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRWFjaEZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlLCBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBsYXllci5iaW5kUG9wdXAoZmVhdHVyZS5wcm9wZXJ0aWVzLkJlemVpY2hudW5nICsgJzxicj4nICsgZmVhdHVyZS5wcm9wZXJ0aWVzLlR5cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9