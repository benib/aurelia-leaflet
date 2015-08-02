System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, useView, BaseLayer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      BaseLayer = (function () {
        function BaseLayer() {
          _classCallCheck(this, _BaseLayer);

          this.jsFile = 'base-layer.js';
          this.htmlFile = 'only-layers.html';
        }

        _createClass(BaseLayer, [{
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
              }]
            };
          }
        }]);

        var _BaseLayer = BaseLayer;
        BaseLayer = useView('./only-layers.html')(BaseLayer) || BaseLayer;
        return BaseLayer;
      })();

      _export('BaseLayer', BaseLayer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Jhc2UtbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUdhLFNBQVM7Ozs7Ozs7O2lDQUhkLE1BQU07a0NBQUUsT0FBTzs7O0FBR1YsZUFBUztpQkFBVCxTQUFTOzs7ZUFFcEIsTUFBTSxHQUFHLGVBQWU7ZUFDeEIsUUFBUSxHQUFHLGtCQUFrQjs7O3FCQUhsQixTQUFTOztpQkFNWixvQkFBRztBQUNULGdCQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2hCLG9CQUFNLEVBQUU7QUFDTixtQkFBRyxFQUFFLFVBQVU7QUFDZixtQkFBRyxFQUFFLFVBQVU7ZUFDaEI7QUFDRCx1QkFBUyxFQUFFLEVBQUU7YUFDZCxDQUFDOztBQUVGLGdCQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1osa0JBQUksRUFBRSxDQUNKO0FBQ0Usa0JBQUUsRUFBRSxLQUFLO0FBQ1QsbUJBQUcsRUFBRSx5Q0FBeUM7QUFDOUMsdUJBQU8sRUFBRTtBQUNQLDZCQUFXLEVBQUUsd0ZBQXdGO2lCQUN0RztlQUNGLENBQ0Y7YUFDRixDQUFBO1dBQ0Y7Ozt5QkExQlUsU0FBUztBQUFULGlCQUFTLEdBRHJCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUNqQixTQUFTLEtBQVQsU0FBUztlQUFULFNBQVMiLCJmaWxlIjoiZXhhbXBsZXMvYmFzZS1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCB1c2VWaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkB1c2VWaWV3KCcuL29ubHktbGF5ZXJzLmh0bWwnKVxuZXhwb3J0IGNsYXNzIEJhc2VMYXllciB7XG4gIC8vIGRlbW9cbiAganNGaWxlID0gJ2Jhc2UtbGF5ZXIuanMnO1xuICBodG1sRmlsZSA9ICdvbmx5LWxheWVycy5odG1sJztcbiAgLy8gZGVtb2VuZFxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMubWFwT3B0aW9ucyA9IHtcbiAgICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IDQ3LjM2ODY0OTgsXG4gICAgICAgIGxuZzogOC41MzkxODI1MFxuICAgICAgfSxcbiAgICAgIHpvb21MZXZlbDogMTJcbiAgICB9O1xuXG4gICAgdGhpcy5sYXllcnMgPSB7XG4gICAgICBiYXNlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJPU01cIixcbiAgICAgICAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9