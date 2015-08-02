System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia Leaflet';
            config.map([{ route: [''], redirect: 'quickstart' }, { route: ['quickstart'], name: 'quickstart', moduleId: './quickstart', nav: true, title: 'Quick Start' }, { route: 'examples', name: 'examples', moduleId: './examples', nav: true, title: 'Examples' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7QUFDakMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFDdkMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFFLEVBQ3ZHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFFLENBQzdGLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVZVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgTGVhZmxldCc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJyddLCByZWRpcmVjdDogJ3F1aWNrc3RhcnQnIH0sXG4gICAgICB7IHJvdXRlOiBbJ3F1aWNrc3RhcnQnXSwgbmFtZTogJ3F1aWNrc3RhcnQnLCBtb2R1bGVJZDogJy4vcXVpY2tzdGFydCcsIG5hdjogdHJ1ZSwgdGl0bGU6J1F1aWNrIFN0YXJ0JyB9LFxuICAgICAgeyByb3V0ZTogJ2V4YW1wbGVzJywgbmFtZTogJ2V4YW1wbGVzJywgbW9kdWxlSWQ6ICcuL2V4YW1wbGVzJywgbmF2OiB0cnVlLCB0aXRsZTonRXhhbXBsZXMnIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=