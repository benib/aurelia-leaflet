'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeafletCustomElement = undefined;
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _leaflet = require('./leaflet');

function configure(frameworkConfig) {
    frameworkConfig.globalResources(_aureliaPal.PLATFORM.moduleName('./leaflet'));
}

exports.LeafletCustomElement = _leaflet.LeafletCustomElement;