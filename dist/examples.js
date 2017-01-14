System.register([], function (_export, _context) {
  "use strict";

  var ChildRouter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ChildRouter', ChildRouter = function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'aurelia-leaflet examples';
          this.examples = ['default', 'base-layer', 'marker', 'marker-with-popup', 'load-event', 'controls', 'featureGroup', 'geojson'];
        }

        ChildRouter.prototype.configureRouter = function configureRouter(config, router) {
          for (var _iterator = this.examples, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var example = _ref;

            var c = [{
              route: '',
              redirect: 'default'
            }];
            c.push({
              route: example,
              name: example,
              moduleId: 'examples/' + example,
              nav: true,
              title: example
            });
            config.map(c);
          }

          this.router = router;
        };

        return ChildRouter;
      }());

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=examples.js.map
