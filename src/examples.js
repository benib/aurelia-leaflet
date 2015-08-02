export class ChildRouter{
  heading = 'aurelia-leaflet examples';

  examples = [
    'default',
    'base-layer',
    'marker',
    'marker-with-popup',
    'load-event',
    'controls',
  ];

  configureRouter(config, router) {
    for (let example of this.examples) {
      let c = [{
        route: '',
        redirect: 'default'
      }];
      c.push({
        route: example,
        name: example,
        moduleId: 'examples/' + example,
        nav: true,
        title: example
      });
      config.map(c);
    }

    this.router = router;
  }
}
