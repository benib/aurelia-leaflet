import 'fetch';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('benib/aurelia-leaflet');

  aurelia.use.globalResources('example-code/example-code');

  aurelia.start().then(a => a.setRoot());
}
