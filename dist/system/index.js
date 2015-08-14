System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(frameworkConfig) {
    frameworkConfig.globalResources('leaflet');
  }

  return {
    setters: [],
    execute: function () {}
  };
});