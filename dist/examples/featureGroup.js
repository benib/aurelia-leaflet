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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2ZlYXR1cmVHcm91cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBR2EsTUFBTTs7Ozs7Ozs7aUNBSFgsTUFBTTtrQ0FBRSxPQUFPOzs7QUFHVixZQUFNO2lCQUFOLE1BQU07OztlQUVqQixNQUFNLEdBQUcsaUJBQWlCO2VBQzFCLFFBQVEsR0FBRyxrQkFBa0I7ZUFHN0IsVUFBVSxHQUFHO0FBQ1gsa0JBQU0sRUFBRTtBQUNOLGlCQUFHLEVBQUUsVUFBVTtBQUNmLGlCQUFHLEVBQUUsVUFBVTthQUNoQjtBQUNELHFCQUFTLEVBQUUsRUFBRTtXQUNkO2VBRUQsZ0JBQWdCLEdBQUcsSUFBSTs7O3FCQWRaLE1BQU07O2lCQWdCVCxvQkFBRztBQUNULGdCQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osa0JBQUksRUFBRSxDQUNKO0FBQ0Usa0JBQUUsRUFBRSxLQUFLO0FBQ1QsbUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsdUJBQU8sRUFBRTtBQUNQLDZCQUFXLEVBQUUsd0ZBQXdGO2lCQUN0RztlQUNGLENBQ0Y7QUFDRCxxQkFBTyxFQUFFLENBQ1A7QUFDRSxrQkFBRSxFQUFFLFlBQVk7QUFDaEIsb0JBQUksRUFBRSxjQUFjO0FBQ3BCLHNCQUFNLEVBQUUsQ0FDTjtBQUNFLHNCQUFJLEVBQUUsUUFBUTtBQUNkLHdCQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUMsVUFBVSxDQUFDO0FBQy9CLHdCQUFNLEVBQUUsR0FBRztBQUNYLHlCQUFPLEVBQUU7QUFDUCx5QkFBSyxFQUFFLEtBQUs7bUJBQ2I7QUFDRCx3QkFBTSxFQUFFLENBQ047QUFDRSx3QkFBSSxFQUFFLEtBQUs7QUFDWCw0QkFBUSxFQUFFLGtCQUFDLEtBQUs7NkJBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUM7cUJBQUE7bUJBQzVELENBQ0Y7aUJBQ0YsRUFDRDtBQUNFLHNCQUFJLEVBQUUsY0FBYztBQUNwQix3QkFBTSxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQztBQUMvQix3QkFBTSxFQUFFLEdBQUc7QUFDWCx5QkFBTyxFQUFFO0FBQ1AseUJBQUssRUFBRSxNQUFNO21CQUNkO0FBQ0Qsd0JBQU0sRUFBRSxDQUNOO0FBQ0Usd0JBQUksRUFBRSxPQUFPO0FBQ2IsNEJBQVEsRUFBRSxrQkFBQyxLQUFLOzZCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQztxQkFBQTttQkFDeEQsQ0FDRjtpQkFDRixFQUNEO0FBQ0Usc0JBQUksRUFBRSxRQUFRO0FBQ2Qsd0JBQU0sRUFBRSxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUM7QUFDL0IsOEJBQVksRUFBRSwwQkFBMEI7aUJBQ3pDLENBQ0Y7QUFDRCxzQkFBTSxFQUFFLENBQ047QUFDRSxzQkFBSSxFQUFFLE9BQU87QUFDYiwwQkFBUSxFQUFFLGtCQUFDLEtBQUs7MkJBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUM7bUJBQUE7aUJBQ2hFLENBQ0Y7ZUFDRixDQUNGO2FBQ0YsQ0FBQTtXQUNGOzs7c0JBM0VVLE1BQU07QUFBTixjQUFNLEdBRGxCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUNqQixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvZmVhdHVyZUdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQHVzZVZpZXcoJy4vb25seS1sYXllcnMuaHRtbCcpXG5leHBvcnQgY2xhc3MgTWFya2VyIHtcbiAgLy8gZGVtb1xuICBqc0ZpbGUgPSAnZmVhdHVyZUdyb3VwLmpzJztcbiAgaHRtbEZpbGUgPSAnb25seS1sYXllcnMuaHRtbCc7XG4gIC8vIGRlbW9lbmRcblxuICBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgbGF0OiA0Ny4zNjg2NDk4LFxuICAgICAgbG5nOiA4LjUzOTE4MjUwXG4gICAgfSxcbiAgICB6b29tTGV2ZWw6IDEyXG4gIH07XG5cbiAgaGFzQ29uc29sZU91dHB1dCA9IHRydWU7XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5sYXllcnMgPSB7XG4gICAgICBiYXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJPU01cIixcbiAgICAgICAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvdmVybGF5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ215RmVhdHVyZXMnLFxuICAgICAgICAgIHR5cGU6ICdmZWF0dXJlR3JvdXAnLFxuICAgICAgICAgIGxheWVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgbGF0TG5nOiBbNDcuMzY4NjQ5OCw4LjUzOTE4MjUwXSxcbiAgICAgICAgICAgICAgcmFkaXVzOiAxMDAsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50LCAncmVkIGNpcmNsZSBhZGRlZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlTWFya2VyJyxcbiAgICAgICAgICAgICAgbGF0TG5nOiBbNDcuMzc4NjQ5OCw4LjU0OTE4MjUwXSxcbiAgICAgICAgICAgICAgcmFkaXVzOiAxMDAsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50LCAnYmx1ZSBjbGlja2VkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdtYXJrZXInLFxuICAgICAgICAgICAgICBsYXRMbmc6IFs0Ny4zODg2NDk4LDguNTU5MTgyNTBdLFxuICAgICAgICAgICAgICBwb3B1cENvbnRlbnQ6ICdJIGFtIGEgcG9wdXAgb24gYSBtYXJrZXInLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXZlbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiAoZXZlbnQpID0+IGNvbnNvbGUubG9nKGV2ZW50LCAnZmVhdHVyZUdyb3VwIGNsaWNrZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=