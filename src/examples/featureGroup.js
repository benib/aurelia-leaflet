import {inject, useView} from 'aurelia-framework';

@useView('./only-layers.html')
export class Marker {
  // demo
  jsFile = 'featureGroup.js';
  htmlFile = 'only-layers.html';
  // demoend

  mapOptions = {
    center: {
      lat: 47.3686498,
      lng: 8.53918250
    },
    zoomLevel: 12
  };

  hasConsoleOutput = true;

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
          id: 'myFeatures',
          type: 'featureGroup',
          layers: [
            {
              type: 'circle',
              latLng: [47.3686498,8.53918250],
              radius: 100,
              options: {
                color: "red"
              },
              events: [
                {
                  name: 'add',
                  callback: (event) => console.log(event, 'red circle added')
                }
              ]
            },
            {
              type: 'circleMarker',
              latLng: [47.3786498,8.54918250],
              radius: 100,
              options: {
                color: "blue"
              },
              events: [
                {
                  name: 'click',
                  callback: (event) => console.log(event, 'blue clicked')
                }
              ]
            },
            {
              type: 'marker',
              latLng: [47.3886498,8.55918250],
              popupContent: 'I am a popup on a marker',
            }
          ],
          events: [
            {
              name: 'click',
              callback: (event) => console.log(event, 'featureGroup clicked')
            }
          ]
        }
      ]
    }
  }

}
