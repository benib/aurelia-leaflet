System.register([], function (_export) {
  'use strict';

  var ChildRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'aurelia-leaflet examples';
          this.examples = ['default', 'base-layer', 'marker', 'marker-with-popup', 'load-event', 'controls'];
        }

        _createClass(ChildRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.examples[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var example = _step.value;

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
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLFdBQVc7Ozs7Ozs7OztBQUFYLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7ZUFDdEIsT0FBTyxHQUFHLDBCQUEwQjtlQUVwQyxRQUFRLEdBQUcsQ0FDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLFVBQVUsQ0FDWDs7O3FCQVZVLFdBQVc7O2lCQVlQLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7Ozs7OztBQUM5QixtQ0FBb0IsSUFBSSxDQUFDLFFBQVEsOEhBQUU7b0JBQTFCLE9BQU87O0FBQ2Qsb0JBQUksQ0FBQyxHQUFHLENBQUM7QUFDUCx1QkFBSyxFQUFFLEVBQUU7QUFDVCwwQkFBUSxFQUFFLFNBQVM7aUJBQ3BCLENBQUMsQ0FBQztBQUNILGlCQUFDLENBQUMsSUFBSSxDQUFDO0FBQ0wsdUJBQUssRUFBRSxPQUFPO0FBQ2Qsc0JBQUksRUFBRSxPQUFPO0FBQ2IsMEJBQVEsRUFBRSxXQUFXLEdBQUcsT0FBTztBQUMvQixxQkFBRyxFQUFFLElBQUk7QUFDVCx1QkFBSyxFQUFFLE9BQU87aUJBQ2YsQ0FBQyxDQUFDO0FBQ0gsc0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7ZUFDZjs7Ozs7Ozs7Ozs7Ozs7OztBQUVELGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBN0JVLFdBQVciLCJmaWxlIjoiZXhhbXBsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2hpbGRSb3V0ZXJ7XG4gIGhlYWRpbmcgPSAnYXVyZWxpYS1sZWFmbGV0IGV4YW1wbGVzJztcblxuICBleGFtcGxlcyA9IFtcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2Jhc2UtbGF5ZXInLFxuICAgICdtYXJrZXInLFxuICAgICdtYXJrZXItd2l0aC1wb3B1cCcsXG4gICAgJ2xvYWQtZXZlbnQnLFxuICAgICdjb250cm9scycsXG4gIF07XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgZm9yIChsZXQgZXhhbXBsZSBvZiB0aGlzLmV4YW1wbGVzKSB7XG4gICAgICBsZXQgYyA9IFt7XG4gICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdkZWZhdWx0J1xuICAgICAgfV07XG4gICAgICBjLnB1c2goe1xuICAgICAgICByb3V0ZTogZXhhbXBsZSxcbiAgICAgICAgbmFtZTogZXhhbXBsZSxcbiAgICAgICAgbW9kdWxlSWQ6ICdleGFtcGxlcy8nICsgZXhhbXBsZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICB0aXRsZTogZXhhbXBsZVxuICAgICAgfSk7XG4gICAgICBjb25maWcubWFwKGMpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=