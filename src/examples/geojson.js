import {inject, useView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@useView('./only-layers.html')
@inject(HttpClient)
export class GeoJSON {
  // demo
  jsFile = 'geojson.js';
  htmlFile = 'only-layers.html';
  // demoend

  constructor(httpClient) {
    this.http = httpClient;
  }

  mapOptions = {
    center: {
      lat: 47.3686498,
      lng: 8.53918250
    },
    zoomLevel: 11
  };

  activate() {
    this.http.fetch("https://cors-proxy.xiala.net/https://data.stadt-zuerich.ch/storage/f/velopumpstation/velopumpstation.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.layers = {
          base: [
            {
              id: 'OSM Tiles',
              type: 'tile',
              url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
              options: {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }
            }
          ],
          overlay: [
            {
              id: 'pump',
              type: 'geoJSON',
              data: json,
              options: {
                pointToLayer: function (feature, latlng) {
                  return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: feature.properties.Typ === 'Handpumpe' ? 'green' : 'blue',
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                  });
                },
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(feature.properties.Bezeichnung + '<br>' + feature.properties.Typ);
                }
              }
            }
          ]
        }
      });
  }
}
