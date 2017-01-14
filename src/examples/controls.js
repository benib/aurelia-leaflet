import {useView} from 'aurelia-framework';

@useView('./controls.html')
export class Controls {
  // demo
  jsFile = 'controls.js';
  htmlFile = 'controls.html';
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
