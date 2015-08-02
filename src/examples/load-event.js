import {inject, useView} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@useView('./events.html')
@inject(EventAggregator)
export class Simple {
  // demo
  jsFile = 'load-event.js';
  htmlFile = 'events.html';
  // demoend
  leafletMapEvents = ['load'];

  withLayerControl = {
    position: "topright"
  }

  mapOptions = {
    center: {
      lat: 47.3686498,
      lng: 8.53918250
    },
    zoomLevel: 12
  };

  hasConsoleOutput = true;

  constructor(EventAggregator) {
    this.eventAggregator = EventAggregator;
    this.eventAggregator.subscribe('aurelia-leaflet', (payload) => {
      console.log(payload);
    });
  }

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
