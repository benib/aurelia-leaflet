import {inject, useView} from 'aurelia-framework';

@useView('./only-layers.html')
export class Marker {
  // demo
  jsFile = 'marker-with-popup.js';
  htmlFile = 'only-layers.html';
  // demoend
  activate() {
    this.mapOptions = {
      center: {
        lat: 47.3686498,
        lng: 8.53918250
      },
      zoomLevel: 12
    };

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
          latLng: [47.3686498,8.53918250],
          popupContent: 'Awesome Popup'
        },
        {
          id: 'myOtherMarker',
          type: 'marker',
          latLng: [47.3886498,8.55918250],
          popupContent: 'Awesome Popup'
        }
      ]
    }
  }

}
