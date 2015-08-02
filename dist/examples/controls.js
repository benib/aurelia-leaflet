System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var useView, Simple;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      Simple = (function () {
        function Simple() {
          _classCallCheck(this, _Simple);

          this.jsFile = 'load-event.js';
          this.htmlFile = 'events.html';
          this.withLayerControl = {
            position: "topright"
          };
          this.withScaleControl = {};
          this.mapOptions = {
            center: {
              lat: 47.3686498,
              lng: 8.53918250
            },
            zoomLevel: 12
          };
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
        Simple = useView('./full.html')(Simple) || Simple;
        return Simple;
      })();

      _export('Simple', Simple);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2NvbnRyb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztlQUdhLE1BQU07Ozs7Ozs7O2tDQUhYLE9BQU87OztBQUdGLFlBQU07aUJBQU4sTUFBTTs7O2VBRWpCLE1BQU0sR0FBRyxlQUFlO2VBQ3hCLFFBQVEsR0FBRyxhQUFhO2VBR3hCLGdCQUFnQixHQUFHO0FBQ2pCLG9CQUFRLEVBQUUsVUFBVTtXQUNyQjtlQUVELGdCQUFnQixHQUFHLEVBRWxCO2VBRUQsVUFBVSxHQUFHO0FBQ1gsa0JBQU0sRUFBRTtBQUNOLGlCQUFHLEVBQUUsVUFBVTtBQUNmLGlCQUFHLEVBQUUsVUFBVTthQUNoQjtBQUNELHFCQUFTLEVBQUUsRUFBRTtXQUNkOzs7cUJBcEJVLE1BQU07O2lCQXNCVCxvQkFBRztBQUNULGdCQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osa0JBQUksRUFBRSxDQUNKO0FBQ0Usa0JBQUUsRUFBRSxLQUFLO0FBQ1QsbUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsdUJBQU8sRUFBRTtBQUNQLDZCQUFXLEVBQUUsd0ZBQXdGO2lCQUN0RztlQUNGLENBQ0Y7YUFDRixDQUFBO1dBQ0Y7OztzQkFsQ1UsTUFBTTtBQUFOLGNBQU0sR0FEbEIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUNWLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJleGFtcGxlcy9jb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlVmlld30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AdXNlVmlldygnLi9mdWxsLmh0bWwnKVxuZXhwb3J0IGNsYXNzIFNpbXBsZSB7XG4gIC8vIGRlbW9cbiAganNGaWxlID0gJ2xvYWQtZXZlbnQuanMnO1xuICBodG1sRmlsZSA9ICdldmVudHMuaHRtbCc7XG4gIC8vIGRlbW9lbmRcblxuICB3aXRoTGF5ZXJDb250cm9sID0ge1xuICAgIHBvc2l0aW9uOiBcInRvcHJpZ2h0XCJcbiAgfVxuXG4gIHdpdGhTY2FsZUNvbnRyb2wgPSB7XG5cbiAgfVxuXG4gIG1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDQ3LjM2ODY0OTgsXG4gICAgICBsbmc6IDguNTM5MTgyNTBcbiAgICB9LFxuICAgIHpvb21MZXZlbDogMTJcbiAgfTtcblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgIGJhc2U6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIk9TTVwiLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=