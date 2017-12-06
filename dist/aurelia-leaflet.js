import * as Leaflet from 'leaflet';
import {inject,customElement,useView,bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class AureliaLeafletException {
  name = 'AureliaLeafletException';

  constructor(message) {
    this.message = message;
  }
}

export var defaultMapOptions = {
  center: {
    lat: 47.3686498,
    lng: 8.53918250
  },
  zoomLevel: 13
};

export var defaultLayers = {
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
  overlay: []
};

@customElement('leaflet')
@useView('./leaflet.html')
export class LeafletCustomElement {
  static inject = [EventAggregator, Element];

  @bindable layers;
  @bindable mapEvents;
  @bindable mapOptions;
  @bindable withLayerControl;
  @bindable withScaleControl;

  map;

  attachedLayers = {
    base: {},
    overlay: {}
  }

  constructor(eventAggregator, element) {
    this.L               = Leaflet;
    this.eventAggregator = eventAggregator;
    this.element         = element;

    this.layerFactory = new LayerFactory(this.L);

    this.mapInit = new Promise((resolve, reject) => {
      this.mapInitResolve = resolve;
      this.mapInitReject = reject;
    });

    this.eventsBound = new Promise((resolve, reject) => {
      this.eventsBoundResolve = resolve;
      this.eventsBoundReject = reject;
    });

    this.mapOptions = defaultMapOptions;
    this.layers     = defaultLayers;
  }

  layersChanged(newLayers, oldLayers) {
    if (oldLayers && oldLayers !== null) {
      this.removeOldLayers(oldLayers.base, 'base');
      this.removeOldLayers(oldLayers.overlay, 'overlay');
    }
    this.attachLayers();
  }

  mapOptionsChanged(newOptions, oldOptions) {
    this.mapOptions = Object.assign(defaultMapOptions, newOptions);

    // some options can get set on the map object after init
    this.mapInit.then(() => {
      if (oldOptions) {
        if (this.mapOptions.center !== oldOptions.center) {
          this.map.setView(this.mapOptions.center);
        }
        if (this.mapOptions.zoom !== oldOptions.zoom) {
          this.map.setZoom(this.mapOptions.zoom);
        }
        if (this.mapOptions.maxBounds !== oldOptions.maxBounds) {
          this.map.setMaxBounds(this.mapOptions.maxBounds);
        }
      }
    });
  }

  mapEventsChanged(newEvents, oldEvents) {
    this.mapInit.then(() => {
      if (newEvents && newEvents.length) {
        for (let eventName of newEvents) {
          this.map.on(eventName, (e) => this.eventAggregator.publish('aurelia-leaflet', Object.assign(e, {map: this.map})));
        }
      }
      if (oldEvents !== null) {
        for (let removedEvent of oldEvents.filter((e) => newEvents.indexOf(e) === -1)) {
          this.map.off(removedEvent);
        }
      }
      if (!this.eventsBound.resolved) {
        this.eventsBoundResolve();
      }
    });
  }

  withLayerControlChanged(newValue) {
    if (newValue === false) {
      this.mapInit.then(() => {
        if (this.layerControl) {
          this.map.removeControl(this.layerControl);
        }
      });
    } else {
      this.mapInit.then(() => {
        if (this.layerControl) {
          this.map.removeControl(this.layerControl);
        }
        this.layerControl = this.L.control.layers(this.attachedLayers.base, this.attachedLayers.overlay, newValue).addTo(this.map);
      });
    }
  }

  withScaleControlChanged(newValue) {
    if (newValue === false) {
      this.mapInit.then(() => {
        if (this.scaleControl) {
          this.map.removeControl(this.scaleControl);
        }
      });
    } else {
      this.mapInit.then(() => {
        if (this.scaleControl) {
          this.map.removeControl(this.scaleControl);
        }
        this.scaleControl = this.L.control.scale(newValue).addTo(this.map);
      });
    }
  }

  attached() {
    return new Promise((resolve, reject) => {
      // remove the center option before contructing the map to have a chance to bind to the "load" event
      // first. The "load" event on the map gets fired after center and zoom are set for the first time.
      var center = this.mapOptions.center;
      delete this.mapOptions.center;
      if (!this.map) {
        this.map = new this.L.map(this.mapContainer, this.mapOptions);
      }
      this.mapOptions.center = center;

      if (this.map) {
        this.mapInitResolve();
      } else {
        this.mapInitReject();
        reject();
      }

      resolve();

      if (this.mapEvents) {
        this.eventsBound.then(() => {
          this.map.setView([this.mapOptions.center.lat, this.mapOptions.center.lng], this.mapOptions.zoomLevel);
        });
      } else {
        this.map.setView([this.mapOptions.center.lat, this.mapOptions.center.lng], this.mapOptions.zoomLevel);
      }
    });
  }

  attachLayers() {
    let layersToAttach = {
      base: {},
      overlay: {}
    };
    if (this.layers.hasOwnProperty('base')) {
      for (let layer of this.layers.base) {
        layersToAttach.base[this.getLayerId(layer)] = this.layerFactory.getLayer(layer);
      }
    }
    if (this.layers.hasOwnProperty('overlay')) {
      for (let layer of this.layers.overlay) {
        layersToAttach.overlay[this.getLayerId(layer)] = this.layerFactory.getLayer(layer);
      }
    }
    this.mapInit.then(() => {
      for (let layerId in layersToAttach.base) {
        this.attachedLayers.base[layerId] = layersToAttach.base[layerId].addTo(this.map);
      }
      for (let layerId in layersToAttach.overlay) {
        this.attachedLayers.overlay[layerId] = layersToAttach.overlay[layerId].addTo(this.map);
      }
    });
  }

  removeOldLayers(oldLayers, type) {
    if (!oldLayers || !oldLayers.length) {
      return;
    }
    let removedLayers = oldLayers.filter((oldLayer) => {
      let removed = true;
      if (!this.layers.hasOwnProperty(type)) {
        return true;
      }
      for (let newLayer of this.layers[type]) {
        if (this.getLayerId(newLayer) === this.getLayerId(oldLayer)) {
          removed = false;
        }
      }
      return removed;
    });

    for (let removedLayer of removedLayers) {
      this.mapInit.then(() => {
        let id = this.getLayerId(removedLayer);
        if (this.attachedLayers[type].hasOwnProperty(id)) {
          this.map.removeLayer(this.attachedLayers[type][id]);
          delete this.attachedLayers[type][this.getLayerId(removedLayer)];
        }
      });
    }
  }

  getLayerId(layer) {
    let id = layer.id ? layer.id : layer.url;
    if (!id) {
      throw new AureliaLeafletException('Not possible to get id for layer. Set the id property');
    }
    return id;
  }

}

export class LayerFactory {

  constructor(Leaflet) {
    this.L = Leaflet;
  }

  getLayer(layer) {
    if (!layer.hasOwnProperty('type')) {
      layer.type = 'tile';
    }

    let instance;

    switch (layer.type) {
      case 'marker':
        instance = this.getMarker(layer);
        break;
      case 'popup':
        instance = this.getPopup(layer);
        break;
      case 'tile':
        instance = this.getTile(layer);
        break;
      case 'wms':
        instance = this.getWMS(layer);
        break;
      case 'canvas':
        instance = this.getCanvas(layer);
        break;
      case 'imageOverlay':
        instance = this.getImageOverlay(layer);
        break;
      case 'polyline':
        instance = this.getPolyline(layer);
        break;
      case 'multiPolyline':
        instance = this.getMultiPolyline(layer);
        break;
      case 'polygone':
        instance = this.getPolygone(layer);
        break;
      case 'multiPolygone':
        instance = this.getMultiPolygone(layer);
        break;
      case 'rectangle':
        instance = this.getRectangle(layer);
        break;
      case 'circle':
        instance = this.getCircle(layer);
        break;
      case 'circleMarker':
        instance = this.getCircleMarker(layer);
        break;
      case 'group':
        instance = this.getLayerGroup(layer);
        break;
      case 'featureGroup':
        instance = this.getFeatureGroup(layer);
        break;
      case 'geoJSON':
        instance = this.getGeoJson(layer);
        break;
      default:
        throw new AureliaLeafletException(`Layer type ${layer.type} not implemented`);
    }

    if (typeof layer.initCallback === 'function') {
      layer.initCallback(instance);
    }

    if (layer.hasOwnProperty('events')) {
      for (let e of layer.events) {
        if (typeof instance.on === 'function') {
          instance.on(e.name, e.callback);
        }
      }
    }

    return instance;
  }

  getMarker(layer) {
    if (!layer.hasOwnProperty('latLng')) {
      throw new AureliaLeafletException('No latLng given for layer.type "marker"');
    }
    let marker = this.L.marker(layer.latLng, layer.options);
    if (layer.hasOwnProperty('popupContent')) {
      marker.bindPopup(layer.popupContent).openPopup();
    }
    return marker;
  }

  getPopup(layer) {
    let popup = this.L.popup(layer.options);
    if (layer.hasOwnProperty('content')) {
      popup.setContent(layer.content);
    }
    if (layer.hasOwnProperty('latLng')) {
      popup.setLatLng(layer.latLng);
    }
    return popup;
  }

  getTile(layer) {
    if (!layer.hasOwnProperty('url')) {
      throw new AureliaLeafletException('No url given for layer.type "tile"');
    }
    return this.L.tileLayer(layer.url, layer.options);
  }

  getWMS(layer) {
    if (!layer.hasOwnProperty('url')) {
      throw new AureliaLeafletException('No url given for layer.type "wms"');
    }
    return this.L.tileLayer.wms(layer.url, layer.options);
  }

  getCanvas(layer) {
    let l = this.L.tileLayer.canvas(layer.options);
    if (layer.hasOwnProperty('drawTile')) {
      l.drawTile = layer.drawTile;
    }
    if (layer.hasOwnProperty('tileDrawn')) {
      l.tileDrawn = layer.tileDrawn;
    }
    return l;
  }

  getImageOverlay(layer) {
    if (!layer.hasOwnProperty('url')) {
      throw new AureliaLeafletException('No url given for layer.type "imageOverlay"');
    }
    if (!layer.hasOwnProperty('imageBounds')) {
      throw new AureliaLeafletException('No imageBounds given for layer.type "imageOverlay"');
    }
    return this.L.imageOverlay(layer.url, layer.imageBounds, layer.options);
  }

  getPolyline(layer) {
    if (!layer.hasOwnProperty('latLngs')) {
      throw new AureliaLeafletException('No latLngs given for layer.type "polyline"');
    }
    return this.L.polyline(layer.latlngs, layer.options);
  }

  getMultiPolyline(layer) {
    if (!layer.hasOwnProperty('latLngs')) {
      throw new AureliaLeafletException('No latLngs given for layer.type "multiPolyline"');
    }
    return this.L.multiPolyline(layer.latlngs, layer.options);
  }

  getPolygone(layer) {
    if (!layer.hasOwnProperty('latLngs')) {
      throw new AureliaLeafletException('No latLngs given for layer.type "polygone"');
    }
    return this.L.polygone(layer.latlngs, layer.options);
  }

  getMultiPolygone(layer) {
    if (!layer.hasOwnProperty('latLngs')) {
      throw new AureliaLeafletException('No latLngs given for layer.type "multiPolygone"');
    }
    return this.L.multiPolygone(layer.latlngs, layer.options);
  }

  getRectangle(layer) {
    if (!layer.hasOwnProperty('bounds')) {
      throw new AureliaLeafletException('No bounds given for layer.type "rectangle"');
    }
    return this.L.rectangle(layer.bounds, layer.options);
  }

  getCircle(layer) {
    if (!layer.hasOwnProperty('latLng')) {
      throw new AureliaLeafletException('No latLng given for layer.type "circle"');
    }
    if (!layer.hasOwnProperty('radius')) {
      throw new AureliaLeafletException('No radius given for layer.type "circle"');
    }
    return this.L.circle(layer.latLng, layer.radius, layer.options);
  }

  getCircleMarker(layer) {
    if (!layer.hasOwnProperty('latLng')) {
      throw new AureliaLeafletException('No latLng given for layer.type "circleMarker"');
    }
    return this.L.circleMarker(layer.latLng, layer.options);
  }

  getLayerGroup(layer) {
    if (!layer.hasOwnProperty('layers')) {
      throw new AureliaLeafletException('No layers given for layer.type "group"');
    }
    let layers = [];
    for (let l of layer.layers) {
      layers.push(this.getLayer(l));
    }
    return this.L.layerGroup(layers);
  }

  getFeatureGroup(layer) {
    if (!layer.hasOwnProperty('layers')) {
      throw new AureliaLeafletException('No layers given for layer.type "featureGroup"');
    }
    let layers = [];
    for (let l of layer.layers) {
      layers.push(this.getLayer(l));
    }
    return this.L.featureGroup(layers);
  }

  getGeoJson(layer) {
    if (!layer.hasOwnProperty('data')) {
      throw new AureliaLeafletException('No data property given for layer.type "geoJSON"');
    }
    return this.L.geoJson(layer.data, layer.options);
  }
}
