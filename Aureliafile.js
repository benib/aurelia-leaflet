var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "dist/app-bundle": {
      modules: [
        '*',
        'benib/aurelia-leaflet',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding', 
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser'
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
