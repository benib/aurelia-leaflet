define(['exports', 'aurelia-pal', './leaflet'], function (exports, _aureliaPal, _leaflet) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.LeafletCustomElement = undefined;
    exports.configure = configure;
    function configure(frameworkConfig) {
        frameworkConfig.globalResources(_aureliaPal.PLATFORM.moduleName('./leaflet'));
    }

    exports.LeafletCustomElement = _leaflet.LeafletCustomElement;
});