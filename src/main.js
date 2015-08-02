import 'fetch';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('benib/aurelia-leaflet');

  aurelia.globalizeResources('./example-code/example-code');

  aurelia.container.registerInstance('Leaflet', window.L);

  aurelia.start().then(a => a.setRoot());
}
