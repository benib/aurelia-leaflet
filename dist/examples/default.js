System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, useView, _dec, _class, Default;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      _export('Default', Default = (_dec = useView('./default.html'), _dec(_class = function Default() {
        _classCallCheck(this, Default);

        this.jsFile = 'default.js';
        this.htmlFile = 'default.html';
      }) || _class));

      _export('Default', Default);
    }
  };
});
//# sourceMappingURL=default.js.map
