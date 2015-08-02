var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "dist/app-bundle": {
      modules: [
        '*',
        'benib/aurelia-leaflet',
        'aurelia-bootstrapper',
        'aurelia-http-client',
        'aurelia-router',
        'github:aurelia/templating-binding@0.13.2',
        'github:aurelia/templating-resources@0.13.3',
        'github:aurelia/templating-router@0.14.1',
        'github:aurelia/loader-default@0.9.1',
        'github:aurelia/history-browser@0.6.2'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  },
  template: {
    "dist/app-bundle": {
      pattern: 'dist/*.html',
      options: {
        inject: true
      }
    }
  }
});
