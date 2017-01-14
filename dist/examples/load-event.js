System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
  "use strict";

  var inject, useView, EventAggregator, _dec, _dec2, _class, LoadEvent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _export('LoadEvent', LoadEvent = (_dec = useView('./events.html'), _dec2 = inject(EventAggregator), _dec(_class = _dec2(_class = function () {
        function LoadEvent(EventAggregator) {
          _classCallCheck(this, LoadEvent);

          this.jsFile = 'load-event.js';
          this.htmlFile = 'events.html';
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
          this.hasConsoleOutput = true;

          this.leafletMapEvents = ['load'];
          this.eventAggregator = EventAggregator;
          this.eventAggregator.subscribe('aurelia-leaflet', function (payload) {
            console.log(payload);
          });
        }

        LoadEvent.prototype.activate = function activate() {
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

        return LoadEvent;
      }()) || _class) || _class));

      _export('LoadEvent', LoadEvent);
    }
  };
});
//# sourceMappingURL=load-event.js.map
