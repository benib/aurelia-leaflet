System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
  "use strict";

  var inject, bindable, HttpClient, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, ExampleCodeCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      _export('ExampleCodeCustomElement', ExampleCodeCustomElement = (_dec = inject(HttpClient), _dec(_class = (_class2 = function () {
        function ExampleCodeCustomElement(HttpClient) {
          var _this = this;

          _classCallCheck(this, ExampleCodeCustomElement);

          _initDefineProp(this, 'jsFile', _descriptor, this);

          _initDefineProp(this, 'htmlFile', _descriptor2, this);

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

        ExampleCodeCustomElement.prototype.jsFileChanged = function jsFileChanged() {
          var _this2 = this;

          this.httpClient.fetch('./src/examples/' + this.jsFile).then(function (response) {
            return response.text();
          }).then(function (text) {
            _this2.jsElement.textContent = text.replace(/\/\/ demo[\s\S]*?\/\/ demoend/g, '');
            _this2.jsLoadedResolve();
          });
        };

        ExampleCodeCustomElement.prototype.htmlFileChanged = function htmlFileChanged() {
          var _this3 = this;

          this.httpClient.fetch('./src/examples/' + this.htmlFile).then(function (response) {
            return response.text();
          }).then(function (text) {
            _this3.htmlElement.textContent = text.replace(/<!-- demo -->[\s\S]*?<!-- demoend -->/g, '');
            _this3.htmlLoadedResolve();
          });
        };

        ExampleCodeCustomElement.prototype.attached = function attached() {
          var _this4 = this;

          this.jsLoadedPromise.then(function () {
            hljs.highlightBlock(_this4.jsElement);
          });
          this.htmlLoadedPromise.then(function () {
            hljs.highlightBlock(_this4.htmlElement);
          });
        };

        return ExampleCodeCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'jsFile', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'htmlFile', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('ExampleCodeCustomElement', ExampleCodeCustomElement);
    }
  };
});
//# sourceMappingURL=example-code.js.map
