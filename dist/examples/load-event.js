System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
  'use strict';

  var inject, useView, EventAggregator, Simple;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      Simple = (function () {
        function Simple(EventAggregator) {
          _classCallCheck(this, _Simple);

          this.jsFile = 'load-event.js';
          this.htmlFile = 'events.html';
          this.leafletMapEvents = ['load'];
          this.withLayerControl = {
            position: "topright"
          };
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
          this.hasConsoleOutput = true;

          this.eventAggregator = EventAggregator;
          this.eventAggregator.subscribe('aurelia-leaflet', function (payload) {
            console.log(payload);
          });
        }

        _createClass(Simple, [{
          key: 'activate',
          value: function activate() {
            this.layers = {
              base: [{
                id: "OSM",
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                options: {
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
              }]
            };
          }
        }]);

        var _Simple = Simple;
        Simple = inject(EventAggregator)(Simple) || Simple;
        Simple = useView('./events.html')(Simple) || Simple;
        return Simple;
      })();

      _export('Simple', Simple);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2xvYWQtZXZlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQUthLE1BQU07Ozs7Ozs7O2lDQUxYLE1BQU07a0NBQUUsT0FBTzs7Z0RBQ2YsZUFBZTs7O0FBSVYsWUFBTTtBQXFCTixpQkFyQkEsTUFBTSxDQXFCTCxlQUFlLEVBQUU7OztlQW5CN0IsTUFBTSxHQUFHLGVBQWU7ZUFDeEIsUUFBUSxHQUFHLGFBQWE7ZUFFeEIsZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLENBQUM7ZUFFM0IsZ0JBQWdCLEdBQUc7QUFDakIsb0JBQVEsRUFBRSxVQUFVO1dBQ3JCO2VBRUQsVUFBVSxHQUFHO0FBQ1gsa0JBQU0sRUFBRTtBQUNOLGlCQUFHLEVBQUUsVUFBVTtBQUNmLGlCQUFHLEVBQUUsVUFBVTthQUNoQjtBQUNELHFCQUFTLEVBQUUsRUFBRTtXQUNkO2VBRUQsZ0JBQWdCLEdBQUcsSUFBSTs7QUFHckIsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsY0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLEVBQUs7QUFDN0QsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDdEIsQ0FBQyxDQUFDO1NBQ0o7O3FCQTFCVSxNQUFNOztpQkE0QlQsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLE1BQU0sR0FBRztBQUNaLGtCQUFJLEVBQUUsQ0FDSjtBQUNFLGtCQUFFLEVBQUUsS0FBSztBQUNULG1CQUFHLEVBQUUseUNBQXlDO0FBQzlDLHVCQUFPLEVBQUU7QUFDUCw2QkFBVyxFQUFFLHdGQUF3RjtpQkFDdEc7ZUFDRixDQUNGO2FBQ0YsQ0FBQTtXQUNGOzs7c0JBeENVLE1BQU07QUFBTixjQUFNLEdBRGxCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDWCxNQUFNLEtBQU4sTUFBTTtBQUFOLGNBQU0sR0FGbEIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUVaLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy9sb2FkLWV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5AdXNlVmlldygnLi9ldmVudHMuaHRtbCcpXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBTaW1wbGUge1xuICAvLyBkZW1vXG4gIGpzRmlsZSA9ICdsb2FkLWV2ZW50LmpzJztcbiAgaHRtbEZpbGUgPSAnZXZlbnRzLmh0bWwnO1xuICAvLyBkZW1vZW5kXG4gIGxlYWZsZXRNYXBFdmVudHMgPSBbJ2xvYWQnXTtcblxuICB3aXRoTGF5ZXJDb250cm9sID0ge1xuICAgIHBvc2l0aW9uOiBcInRvcHJpZ2h0XCJcbiAgfVxuXG4gIG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDQ3LjM2ODY0OTgsXG4gICAgICBsbmc6IDguNTM5MTgyNTBcbiAgICB9LFxuICAgIHpvb21MZXZlbDogMTJcbiAgfTtcblxuICBoYXNDb25zb2xlT3V0cHV0ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihFdmVudEFnZ3JlZ2F0b3IpIHtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IEV2ZW50QWdncmVnYXRvcjtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2F1cmVsaWEtbGVhZmxldCcsIChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMubGF5ZXJzID0ge1xuICAgICAgYmFzZTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiT1NNXCIsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==