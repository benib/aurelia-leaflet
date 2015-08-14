System.register(['fetch'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_fetch) {}],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFFYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7QUFDakMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFDdkMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFFLEVBQ3ZHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFFLENBQzdGLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVZVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmZXRjaCc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhIExlYWZsZXQnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnXSwgcmVkaXJlY3Q6ICdxdWlja3N0YXJ0JyB9LFxuICAgICAgeyByb3V0ZTogWydxdWlja3N0YXJ0J10sIG5hbWU6ICdxdWlja3N0YXJ0JywgbW9kdWxlSWQ6ICcuL3F1aWNrc3RhcnQnLCBuYXY6IHRydWUsIHRpdGxlOidRdWljayBTdGFydCcgfSxcbiAgICAgIHsgcm91dGU6ICdleGFtcGxlcycsIG5hbWU6ICdleGFtcGxlcycsIG1vZHVsZUlkOiAnLi9leGFtcGxlcycsIG5hdjogdHJ1ZSwgdGl0bGU6J0V4YW1wbGVzJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9