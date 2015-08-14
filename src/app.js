import 'fetch';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Leaflet';
    config.map([
      { route: [''], redirect: 'quickstart' },
      { route: ['quickstart'], name: 'quickstart', moduleId: './quickstart', nav: true, title:'Quick Start' },
      { route: 'examples', name: 'examples', moduleId: './examples', nav: true, title:'Examples' }
    ]);

    this.router = router;
  }
}
