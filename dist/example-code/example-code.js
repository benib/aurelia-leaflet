System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, bindable, HttpClient, ExampleCodeCustomElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      ExampleCodeCustomElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(ExampleCodeCustomElement, [{
          key: 'jsFile',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'htmlFile',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function ExampleCodeCustomElement(HttpClient) {
          var _this = this;

          _classCallCheck(this, _ExampleCodeCustomElement);

          _defineDecoratedPropertyDescriptor(this, 'jsFile', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'htmlFile', _instanceInitializers);

          this.httpClient = HttpClient;

          this.jsLoadedPromise = new Promise(function (resolve, reject) {
            _this.jsLoadedResolve = resolve;
            _this.jsLoadedReject = reject;
          });

          this.htmlLoadedPromise = new Promise(function (resolve, reject) {
            _this.htmlLoadedResolve = resolve;
            _this.htmlLoadedReject = reject;
          });
        }

        _createDecoratedClass(ExampleCodeCustomElement, [{
          key: 'jsFileChanged',
          value: function jsFileChanged() {
            var _this2 = this;

            this.httpClient.get('/aurelia-leaflet/src/examples/' + this.jsFile).then(function (response) {
              _this2.js = response.content;
              _this2.js = response.content.replace(/\/\/ demo[\s\S]*?\/\/ demoend/g, '');
              _this2.jsLoadedResolve();
            });
          }
        }, {
          key: 'htmlFileChanged',
          value: function htmlFileChanged() {
            var _this3 = this;

            this.httpClient.get('/aurelia-leaflet/src/examples/' + this.htmlFile).then(function (response) {
              _this3.html = response.content.replace(/<!-- demo -->[\s\S]*?<!-- demoend -->/g, '');
              _this3.htmlLoadedResolve();
            });
          }
        }, {
          key: 'attached',
          value: function attached() {
            var _this4 = this;

            this.jsLoadedPromise.then(function () {
              hljs.highlightBlock(_this4.jsElement);
            });
            this.htmlLoadedPromise.then(function () {
              hljs.highlightBlock(_this4.htmlElement);
            });
          }
        }], null, _instanceInitializers);

        var _ExampleCodeCustomElement = ExampleCodeCustomElement;
        ExampleCodeCustomElement = inject(HttpClient)(ExampleCodeCustomElement) || ExampleCodeCustomElement;
        return ExampleCodeCustomElement;
      })();

      _export('ExampleCodeCustomElement', ExampleCodeCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtY29kZS9leGFtcGxlLWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQUlhLHdCQUF3Qjs7Ozs7Ozs7OztpQ0FKN0IsTUFBTTttQ0FBRSxRQUFROztzQ0FDaEIsVUFBVTs7O0FBR0wsOEJBQXdCOzs7OzhCQUF4Qix3QkFBd0I7O3VCQUNsQyxRQUFROzs7Ozt1QkFDUixRQUFROzs7OztBQUVFLGlCQUpBLHdCQUF3QixDQUl2QixVQUFVLEVBQUU7Ozs7Ozs7OztBQUN0QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7QUFFN0IsY0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEQsa0JBQUssZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUMvQixrQkFBSyxjQUFjLEdBQUcsTUFBTSxDQUFDO1dBQzlCLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3hELGtCQUFLLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztBQUNqQyxrQkFBSyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7V0FDaEMsQ0FBQyxDQUFDO1NBRUo7OzhCQWpCVSx3QkFBd0I7O2lCQW1CdEIseUJBQUc7OztBQUNkLGdCQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsb0NBQWtDLElBQUksQ0FBQyxNQUFNLENBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDckYscUJBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDM0IscUJBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLHFCQUFLLGVBQWUsRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FBQztXQUNKOzs7aUJBRWMsMkJBQUc7OztBQUNoQixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLG9DQUFrQyxJQUFJLENBQUMsUUFBUSxDQUFHLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ3ZGLHFCQUFLLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNuRixxQkFBSyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCLENBQUMsQ0FBQztXQUNKOzs7aUJBRU8sb0JBQUc7OztBQUNULGdCQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzlCLGtCQUFJLENBQUMsY0FBYyxDQUFDLE9BQUssU0FBUyxDQUFDLENBQUM7YUFDckMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNoQyxrQkFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztXQUNKOzs7d0NBekNVLHdCQUF3QjtBQUF4QixnQ0FBd0IsR0FEcEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLHdCQUF3QixLQUF4Qix3QkFBd0I7ZUFBeEIsd0JBQXdCIiwiZmlsZSI6ImV4YW1wbGUtY29kZS9leGFtcGxlLWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVDb2RlQ3VzdG9tRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBqc0ZpbGVcbiAgQGJpbmRhYmxlIGh0bWxGaWxlXG5cbiAgY29uc3RydWN0b3IoSHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cENsaWVudCA9IEh0dHBDbGllbnQ7XG5cbiAgICB0aGlzLmpzTG9hZGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuanNMb2FkZWRSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuanNMb2FkZWRSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0bWxMb2FkZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odG1sTG9hZGVkUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLmh0bWxMb2FkZWRSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGpzRmlsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5odHRwQ2xpZW50LmdldChgL2F1cmVsaWEtbGVhZmxldC9zcmMvZXhhbXBsZXMvJHt0aGlzLmpzRmlsZX1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5qcyA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgICB0aGlzLmpzID0gcmVzcG9uc2UuY29udGVudC5yZXBsYWNlKC9cXC9cXC8gZGVtb1tcXHNcXFNdKj9cXC9cXC8gZGVtb2VuZC9nLCAnJyk7XG4gICAgICB0aGlzLmpzTG9hZGVkUmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaHRtbEZpbGVDaGFuZ2VkKCkge1xuICAgIHRoaXMuaHR0cENsaWVudC5nZXQoYC9hdXJlbGlhLWxlYWZsZXQvc3JjL2V4YW1wbGVzLyR7dGhpcy5odG1sRmlsZX1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5odG1sID0gcmVzcG9uc2UuY29udGVudC5yZXBsYWNlKC88IS0tIGRlbW8gLS0+W1xcc1xcU10qPzwhLS0gZGVtb2VuZCAtLT4vZywgJycpO1xuICAgICAgdGhpcy5odG1sTG9hZGVkUmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5qc0xvYWRlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuanNFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmh0bWxMb2FkZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9