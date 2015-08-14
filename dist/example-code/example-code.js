System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, bindable, HttpClient, ExampleCodeCustomElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
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

            this.httpClient.fetch('./src/examples/' + this.jsFile).then(function (response) {
              return response.text();
            }).then(function (text) {
              _this2.js = text.replace(/\/\/ demo[\s\S]*?\/\/ demoend/g, '');
              _this2.jsLoadedResolve();
            });
          }
        }, {
          key: 'htmlFileChanged',
          value: function htmlFileChanged() {
            var _this3 = this;

            this.httpClient.fetch('./src/examples/' + this.htmlFile).then(function (response) {
              return response.text();
            }).then(function (text) {
              _this3.html = text.replace(/<!-- demo -->[\s\S]*?<!-- demoend -->/g, '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtY29kZS9leGFtcGxlLWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQUlhLHdCQUF3Qjs7Ozs7Ozs7OztpQ0FKN0IsTUFBTTttQ0FBRSxRQUFROzt1Q0FDaEIsVUFBVTs7O0FBR0wsOEJBQXdCOzs7OzhCQUF4Qix3QkFBd0I7O3VCQUNsQyxRQUFROzs7Ozt1QkFDUixRQUFROzs7OztBQUVFLGlCQUpBLHdCQUF3QixDQUl2QixVQUFVLEVBQUU7Ozs7Ozs7OztBQUN0QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7QUFFN0IsY0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEQsa0JBQUssZUFBZSxHQUFHLE9BQU8sQ0FBQztBQUMvQixrQkFBSyxjQUFjLEdBQUcsTUFBTSxDQUFDO1dBQzlCLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3hELGtCQUFLLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztBQUNqQyxrQkFBSyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7V0FDaEMsQ0FBQyxDQUFDO1NBRUo7OzhCQWpCVSx3QkFBd0I7O2lCQW1CdEIseUJBQUc7OztBQUNkLGdCQUFJLENBQUMsVUFBVSxDQUFDLEtBQUsscUJBQW1CLElBQUksQ0FBQyxNQUFNLENBQUcsQ0FDbkQsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDWixxQkFBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RCxxQkFBSyxlQUFlLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQUM7V0FDTjs7O2lCQUVjLDJCQUFHOzs7QUFDaEIsZ0JBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxxQkFBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBRyxDQUNyRCxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLHFCQUFLLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLHFCQUFLLGlCQUFpQixFQUFFLENBQUM7YUFDMUIsQ0FBQyxDQUFDO1dBQ047OztpQkFFTyxvQkFBRzs7O0FBQ1QsZ0JBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDOUIsa0JBQUksQ0FBQyxjQUFjLENBQUMsT0FBSyxTQUFTLENBQUMsQ0FBQzthQUNyQyxDQUFDLENBQUM7QUFDSCxnQkFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ2hDLGtCQUFJLENBQUMsY0FBYyxDQUFDLE9BQUssV0FBVyxDQUFDLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1dBQ0o7Ozt3Q0E1Q1Usd0JBQXdCO0FBQXhCLGdDQUF3QixHQURwQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sd0JBQXdCLEtBQXhCLHdCQUF3QjtlQUF4Qix3QkFBd0IiLCJmaWxlIjoiZXhhbXBsZS1jb2RlL2V4YW1wbGUtY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVDb2RlQ3VzdG9tRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBqc0ZpbGVcbiAgQGJpbmRhYmxlIGh0bWxGaWxlXG5cbiAgY29uc3RydWN0b3IoSHR0cENsaWVudCkge1xuICAgIHRoaXMuaHR0cENsaWVudCA9IEh0dHBDbGllbnQ7XG5cbiAgICB0aGlzLmpzTG9hZGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuanNMb2FkZWRSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuanNMb2FkZWRSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB0aGlzLmh0bWxMb2FkZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odG1sTG9hZGVkUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLmh0bWxMb2FkZWRSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGpzRmlsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5odHRwQ2xpZW50LmZldGNoKGAuL3NyYy9leGFtcGxlcy8ke3RoaXMuanNGaWxlfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAudGhlbih0ZXh0ID0+IHtcbiAgICAgICAgdGhpcy5qcyA9IHRleHQucmVwbGFjZSgvXFwvXFwvIGRlbW9bXFxzXFxTXSo/XFwvXFwvIGRlbW9lbmQvZywgJycpO1xuICAgICAgICB0aGlzLmpzTG9hZGVkUmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBodG1sRmlsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5odHRwQ2xpZW50LmZldGNoKGAuL3NyYy9leGFtcGxlcy8ke3RoaXMuaHRtbEZpbGV9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgIC50aGVuKHRleHQgPT4ge1xuICAgICAgICB0aGlzLmh0bWwgPSB0ZXh0LnJlcGxhY2UoLzwhLS0gZGVtbyAtLT5bXFxzXFxTXSo/PCEtLSBkZW1vZW5kIC0tPi9nLCAnJyk7XG4gICAgICAgIHRoaXMuaHRtbExvYWRlZFJlc29sdmUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5qc0xvYWRlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuanNFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmh0bWxMb2FkZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmh0bWxFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9