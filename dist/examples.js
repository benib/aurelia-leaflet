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
          this.examples = ['default', 'base-layer', 'marker', 'marker-with-popup', 'load-event', 'controls', 'featureGroup', 'geojson'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLFdBQVc7Ozs7Ozs7OztBQUFYLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7ZUFDdEIsT0FBTyxHQUFHLDBCQUEwQjtlQUVwQyxRQUFRLEdBQUcsQ0FDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLFVBQVUsRUFDVixjQUFjLEVBQ2QsU0FBUyxDQUNWOzs7cUJBWlUsV0FBVzs7aUJBY1AseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTs7Ozs7O0FBQzlCLG1DQUFvQixJQUFJLENBQUMsUUFBUSw4SEFBRTtvQkFBMUIsT0FBTzs7QUFDZCxvQkFBSSxDQUFDLEdBQUcsQ0FBQztBQUNQLHVCQUFLLEVBQUUsRUFBRTtBQUNULDBCQUFRLEVBQUUsU0FBUztpQkFDcEIsQ0FBQyxDQUFDO0FBQ0gsaUJBQUMsQ0FBQyxJQUFJLENBQUM7QUFDTCx1QkFBSyxFQUFFLE9BQU87QUFDZCxzQkFBSSxFQUFFLE9BQU87QUFDYiwwQkFBUSxFQUFFLFdBQVcsR0FBRyxPQUFPO0FBQy9CLHFCQUFHLEVBQUUsSUFBSTtBQUNULHVCQUFLLEVBQUUsT0FBTztpQkFDZixDQUFDLENBQUM7QUFDSCxzQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUEvQlUsV0FBVyIsImZpbGUiOiJleGFtcGxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGlsZFJvdXRlcntcbiAgaGVhZGluZyA9ICdhdXJlbGlhLWxlYWZsZXQgZXhhbXBsZXMnO1xuXG4gIGV4YW1wbGVzID0gW1xuICAgICdkZWZhdWx0JyxcbiAgICAnYmFzZS1sYXllcicsXG4gICAgJ21hcmtlcicsXG4gICAgJ21hcmtlci13aXRoLXBvcHVwJyxcbiAgICAnbG9hZC1ldmVudCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZmVhdHVyZUdyb3VwJyxcbiAgICAnZ2VvanNvbidcbiAgXTtcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBmb3IgKGxldCBleGFtcGxlIG9mIHRoaXMuZXhhbXBsZXMpIHtcbiAgICAgIGxldCBjID0gW3tcbiAgICAgICAgcm91dGU6ICcnLFxuICAgICAgICByZWRpcmVjdDogJ2RlZmF1bHQnXG4gICAgICB9XTtcbiAgICAgIGMucHVzaCh7XG4gICAgICAgIHJvdXRlOiBleGFtcGxlLFxuICAgICAgICBuYW1lOiBleGFtcGxlLFxuICAgICAgICBtb2R1bGVJZDogJ2V4YW1wbGVzLycgKyBleGFtcGxlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIHRpdGxlOiBleGFtcGxlXG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5tYXAoYyk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==