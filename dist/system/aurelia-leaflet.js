'use strict';

System.register(['aurelia-pal', './leaflet'], function (_export, _context) {
    "use strict";

    var PLATFORM, LeafletCustomElement;
    function configure(frameworkConfig) {
        frameworkConfig.globalResources(PLATFORM.moduleName('./leaflet'));
    }

    _export('configure', configure);

    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }, function (_leaflet) {
            LeafletCustomElement = _leaflet.LeafletCustomElement;
        }],
        execute: function () {
            _export('LeafletCustomElement', LeafletCustomElement);
        }
    };
});