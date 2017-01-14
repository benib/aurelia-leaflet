System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var computedFrom, QuickStart;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      _export('QuickStart', QuickStart = function () {
        function QuickStart() {
          _classCallCheck(this, QuickStart);
        }

        QuickStart.prototype.attached = function attached() {
          for (var i = 0; i < this.container.querySelectorAll('code').length; i++) {
            hljs.highlightBlock(this.container.querySelectorAll('code').item(i));
          }
        };

        return QuickStart;
      }());

      _export('QuickStart', QuickStart);
    }
  };
});
//# sourceMappingURL=quickstart.js.map
