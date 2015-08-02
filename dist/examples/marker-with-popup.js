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

          this.jsFile = 'marker-with-popup.js';
          this.htmlFile = 'only-layers.html';
        }

        _createClass(Marker, [{
          key: 'activate',
          value: function activate() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL21hcmtlci13aXRoLXBvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1QkFHYSxNQUFNOzs7Ozs7OztpQ0FIWCxNQUFNO2tDQUFFLE9BQU87OztBQUdWLFlBQU07aUJBQU4sTUFBTTs7O2VBRWpCLE1BQU0sR0FBRyxzQkFBc0I7ZUFDL0IsUUFBUSxHQUFHLGtCQUFrQjs7O3FCQUhsQixNQUFNOztpQkFLVCxvQkFBRztBQUNULGdCQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLG9CQUFNLEVBQUU7QUFDTixtQkFBRyxFQUFFLFVBQVU7QUFDZixtQkFBRyxFQUFFLFVBQVU7ZUFDaEI7QUFDRCx1QkFBUyxFQUFFLEVBQUU7YUFDZCxDQUFDOztBQUVGLGdCQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osa0JBQUksRUFBRSxDQUNKO0FBQ0Usa0JBQUUsRUFBRSxLQUFLO0FBQ1QsbUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsdUJBQU8sRUFBRTtBQUNQLDZCQUFXLEVBQUUsd0ZBQXdGO2lCQUN0RztlQUNGLENBQ0Y7QUFDRCxxQkFBTyxFQUFFLENBQ1A7QUFDRSxrQkFBRSxFQUFFLFVBQVU7QUFDZCxvQkFBSSxFQUFFLFFBQVE7QUFDZCxzQkFBTSxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQztBQUMvQiw0QkFBWSxFQUFFLGVBQWU7ZUFDOUIsRUFDRDtBQUNFLGtCQUFFLEVBQUUsZUFBZTtBQUNuQixvQkFBSSxFQUFFLFFBQVE7QUFDZCxzQkFBTSxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQztBQUMvQiw0QkFBWSxFQUFFLGVBQWU7ZUFDOUIsQ0FDRjthQUNGLENBQUE7V0FDRjs7O3NCQXZDVSxNQUFNO0FBQU4sY0FBTSxHQURsQixPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FDakIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL21hcmtlci13aXRoLXBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQHVzZVZpZXcoJy4vb25seS1sYXllcnMuaHRtbCcpXG5leHBvcnQgY2xhc3MgTWFya2VyIHtcbiAgLy8gZGVtb1xuICBqc0ZpbGUgPSAnbWFya2VyLXdpdGgtcG9wdXAuanMnO1xuICBodG1sRmlsZSA9ICdvbmx5LWxheWVycy5odG1sJztcbiAgLy8gZGVtb2VuZFxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XG4gICAgICBjZW50ZXI6IHtcbiAgICAgICAgbGF0OiA0Ny4zNjg2NDk4LFxuICAgICAgICBsbmc6IDguNTM5MTgyNTBcbiAgICAgIH0sXG4gICAgICB6b29tTGV2ZWw6IDEyXG4gICAgfTtcblxuICAgIHRoaXMubGF5ZXJzID0ge1xuICAgICAgYmFzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiT1NNXCIsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb3ZlcmxheTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdteU1hcmtlcicsXG4gICAgICAgICAgdHlwZTogJ21hcmtlcicsXG4gICAgICAgICAgbGF0TG5nOiBbNDcuMzY4NjQ5OCw4LjUzOTE4MjUwXSxcbiAgICAgICAgICBwb3B1cENvbnRlbnQ6ICdBd2Vzb21lIFBvcHVwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdteU90aGVyTWFya2VyJyxcbiAgICAgICAgICB0eXBlOiAnbWFya2VyJyxcbiAgICAgICAgICBsYXRMbmc6IFs0Ny4zODg2NDk4LDguNTU5MTgyNTBdLFxuICAgICAgICAgIHBvcHVwQ29udGVudDogJ0F3ZXNvbWUgUG9wdXAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9