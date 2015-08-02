import {useView} from 'aurelia-framework';

@useView('./full.html')
export class Simple {
  // demo
  jsFile = 'load-event.js';
  htmlFile = 'events.html';
  // demoend

  withLayerControl = {
    position: "topright"
  }

  withScaleControl = {

  }

  mapOptions = {
    center: {
      lat: 47.3686498,
      lng: 8.53918250
    },
    zoomLevel: 12
  };

  activate() {
    this.layers = {
      base: [
        {
          id: "OSM",
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
          options: {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
        }
      ]
    }
  }

}
