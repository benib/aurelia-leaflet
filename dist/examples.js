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
          this.examples = ['default', 'base-layer', 'marker', 'marker-with-popup', 'load-event', 'controls', 'featureGroup'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLFdBQVc7Ozs7Ozs7OztBQUFYLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7ZUFDdEIsT0FBTyxHQUFHLDBCQUEwQjtlQUVwQyxRQUFRLEdBQUcsQ0FDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLFVBQVUsRUFDVixjQUFjLENBQ2Y7OztxQkFYVSxXQUFXOztpQkFhUCx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFOzs7Ozs7QUFDOUIsbUNBQW9CLElBQUksQ0FBQyxRQUFRLDhIQUFFO29CQUExQixPQUFPOztBQUNkLG9CQUFJLENBQUMsR0FBRyxDQUFDO0FBQ1AsdUJBQUssRUFBRSxFQUFFO0FBQ1QsMEJBQVEsRUFBRSxTQUFTO2lCQUNwQixDQUFDLENBQUM7QUFDSCxpQkFBQyxDQUFDLElBQUksQ0FBQztBQUNMLHVCQUFLLEVBQUUsT0FBTztBQUNkLHNCQUFJLEVBQUUsT0FBTztBQUNiLDBCQUFRLEVBQUUsV0FBVyxHQUFHLE9BQU87QUFDL0IscUJBQUcsRUFBRSxJQUFJO0FBQ1QsdUJBQUssRUFBRSxPQUFPO2lCQUNmLENBQUMsQ0FBQztBQUNILHNCQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQTlCVSxXQUFXIiwiZmlsZSI6ImV4YW1wbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoaWxkUm91dGVye1xuICBoZWFkaW5nID0gJ2F1cmVsaWEtbGVhZmxldCBleGFtcGxlcyc7XG5cbiAgZXhhbXBsZXMgPSBbXG4gICAgJ2RlZmF1bHQnLFxuICAgICdiYXNlLWxheWVyJyxcbiAgICAnbWFya2VyJyxcbiAgICAnbWFya2VyLXdpdGgtcG9wdXAnLFxuICAgICdsb2FkLWV2ZW50JyxcbiAgICAnY29udHJvbHMnLFxuICAgICdmZWF0dXJlR3JvdXAnXG4gIF07XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgZm9yIChsZXQgZXhhbXBsZSBvZiB0aGlzLmV4YW1wbGVzKSB7XG4gICAgICBsZXQgYyA9IFt7XG4gICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdkZWZhdWx0J1xuICAgICAgfV07XG4gICAgICBjLnB1c2goe1xuICAgICAgICByb3V0ZTogZXhhbXBsZSxcbiAgICAgICAgbmFtZTogZXhhbXBsZSxcbiAgICAgICAgbW9kdWxlSWQ6ICdleGFtcGxlcy8nICsgZXhhbXBsZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICB0aXRsZTogZXhhbXBsZVxuICAgICAgfSk7XG4gICAgICBjb25maWcubWFwKGMpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=