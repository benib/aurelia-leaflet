'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

function configure(frameworkConfig) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$LeafletDefaultImagePath = _ref.LeafletDefaultImagePath;
  var LeafletDefaultImagePath = _ref$LeafletDefaultImagePath === undefined ? 'jspm_packages/github/Leaflet/Leaflet@0.7.7/dist/images' : _ref$LeafletDefaultImagePath;

  _leaflet2['default'].Icon.Default.imagePath = LeafletDefaultImagePath;
  frameworkConfig.globalResources('./leaflet');
}