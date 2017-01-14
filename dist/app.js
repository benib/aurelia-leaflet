System.register(['whatwg-fetch'], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_whatwgFetch) {}],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Aurelia Leaflet';
          config.map([{ route: [''], redirect: 'quickstart' }, { route: ['quickstart'], name: 'quickstart', moduleId: './quickstart', nav: true, title: 'Quick Start' }, { route: 'examples', name: 'examples', moduleId: './examples', nav: true, title: 'Examples' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
