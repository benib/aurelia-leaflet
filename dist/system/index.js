System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./leaflet');
  }

  return {
    setters: [],
    execute: function () {}
  };
});