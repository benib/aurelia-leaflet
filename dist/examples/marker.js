System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, useView, Marker;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      Marker = (function () {
        function Marker() {
          _classCallCheck(this, _Marker);

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

        _createClass(Marker, [{
          key: 'activate',
          value: function activate() {
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
          }
        }]);

        var _Marker = Marker;
        Marker = useView('./only-layers.html')(Marker) || Marker;
        return Marker;
      })();

      _export('Marker', Marker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL21hcmtlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBR2EsTUFBTTs7Ozs7Ozs7aUNBSFgsTUFBTTtrQ0FBRSxPQUFPOzs7QUFHVixZQUFNO2lCQUFOLE1BQU07OztlQUVqQixNQUFNLEdBQUcsV0FBVztlQUNwQixRQUFRLEdBQUcsa0JBQWtCO2VBRzdCLFVBQVUsR0FBRztBQUNYLGtCQUFNLEVBQUU7QUFDTixpQkFBRyxFQUFFLFVBQVU7QUFDZixpQkFBRyxFQUFFLFVBQVU7YUFDaEI7QUFDRCxxQkFBUyxFQUFFLEVBQUU7V0FDZDs7O3FCQVpVLE1BQU07O2lCQWNULG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxNQUFNLEdBQUc7QUFDWixrQkFBSSxFQUFFLENBQ0o7QUFDRSxrQkFBRSxFQUFFLEtBQUs7QUFDVCxtQkFBRyxFQUFFLHlDQUF5QztBQUM5Qyx1QkFBTyxFQUFFO0FBQ1AsNkJBQVcsRUFBRSx3RkFBd0Y7aUJBQ3RHO2VBQ0YsQ0FDRjtBQUNELHFCQUFPLEVBQUUsQ0FDUDtBQUNFLGtCQUFFLEVBQUUsVUFBVTtBQUNkLG9CQUFJLEVBQUUsUUFBUTtBQUNkLHNCQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUMsVUFBVSxDQUFDO2VBQ2hDLENBQ0Y7YUFDRixDQUFBO1dBQ0Y7OztzQkFqQ1UsTUFBTTtBQUFOLGNBQU0sR0FEbEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQ2pCLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy9tYXJrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgdXNlVmlld30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AdXNlVmlldygnLi9vbmx5LWxheWVycy5odG1sJylcbmV4cG9ydCBjbGFzcyBNYXJrZXIge1xuICAvLyBkZW1vXG4gIGpzRmlsZSA9ICdtYXJrZXIuanMnO1xuICBodG1sRmlsZSA9ICdvbmx5LWxheWVycy5odG1sJztcbiAgLy8gZGVtb2VuZFxuXG4gIG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDQ3LjM2ODY0OTgsXG4gICAgICBsbmc6IDguNTM5MTgyNTBcbiAgICB9LFxuICAgIHpvb21MZXZlbDogMTJcbiAgfTtcblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgIGJhc2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIk9TTVwiLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG92ZXJsYXk6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnbXlNYXJrZXInLFxuICAgICAgICAgIHR5cGU6ICdtYXJrZXInLFxuICAgICAgICAgIGxhdExuZzogWzQ3LjM2ODY0OTgsOC41MzkxODI1MF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=