System.register([], function (_export) {
  'use strict';

  var AureliaLeafletException;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      AureliaLeafletException = function AureliaLeafletException(message) {
        _classCallCheck(this, AureliaLeafletException);

        this.name = 'AureliaLeafletException';

        this.message = message;
      };

      _export('AureliaLeafletException', AureliaLeafletException);
    }
  };
});