import {inject, useView} from 'aurelia-framework';

@useView('./only-layers.html')
export class Marker {
  // demo
  jsFile = 'marker.js';
  htmlFile = 'only-layers.html';
  // demoend

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
      ],
      overlay: [
        {
          id: 'myMarker',
          type: 'marker',
          latLng: [47.3686498,8.53918250]
        }
      ]
    }
  }

}
