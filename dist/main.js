System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('benib/aurelia-leaflet');

    aurelia.use.globalResources('example-code/example-code');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
