# aurelia-leaflet

This is a plugin for [Aurelia](http://aurelia.io/) providing a CustomElement `<leaflet>`.

## Usage

### Install
`jspm install github:benib/aurelia-leaflet`

You need to add the plugin to your aurelia configuration and register an instance of Leaflet in the DI Container as 'Leaflet' before you start Aurelia. You can do this by either loading Leaflet from the CDN of your choice:

`<script src="https://cdn.jsdelivr.net/leaflet/0.7.3/leaflet.js"></script>` or by `jspm install leaflet` and then importing it.

```js
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('benib/aurelia-leaflet');

  // if loaded from CDN leaflet defines window.L
  aurelia.container.registerInstance('Leaflet', window.L);

  aurelia.start().then(a => a.setRoot());
}
```

From there on you can use the CustomElement `<leaflet>` like this:

```html
  <leaflet></leaflet>
```
This is the most basic usage and gives you a map of Zurich at zoom 13 with the OpenStreetMap tiles from openstreetmap.org. This is probably not what you want, so here are the options you got:

```html
  <leaflet
    map-options.bind="mapOptions"
    layers.bind="layers"
    map-events.bind="leafletMapEvents"
    with-layer-control.bind="withLayerControl"
    with-scale-control.bind="withScaleControl"
  >
  </leaflet>
```

### attributes of the leaflet CustomElement explained

#### map-options
Bind this to an object with options from http://leafletjs.com/reference.html#map-options. They will get merged with the default options:
```js
{
  center: {
    lat: 47.3686498,
    lng: 8.53918250,
  },
  zoomLevel: 13
}
```
So if you don't want a map centered at Zurich, provide at least another center. If you change `center`, `zoom`, or `maxBounds` after the map is loaded, the map will get changed, other property changes are not yet implemented. Open an issue or submit a PR if you need something else.

#### layers
Layers is an object with information about the layers you want on your map. Whenever you change it, the layers available on your map will change. Removed ones will get removed, new ones will get added. Have a look at the default layers object:
```js
{
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
}
```
Alright, this gives you a one baseLayer with tiles from openstreetmap.org. Note that the layers are divided in base and overlay layers. Every Layer needs to have an `id` property. This `id` is used as the key in the LayersControl, if you add one. If not given, it is set to the `url`. If no `url` is given (some layers don't have one), an exception is thrown.

Note that there is a `type` property. `"tile"` is the default value and could be omitted. The other types available are: `marker`, `popup`, `wms`, `canvas`, `imageOverlay`, `polyline`, `multiPolyline`, `polygone`, `multiPolygon`, `rectangle`, `circle`, `circleMarker`, `LayerGroup`, `FeatureGroup` and `GeoJSON` . If you know Leaflet, you see that these are all the Layers available in Leaflet. They are documented here: http://leafletjs.com/reference.html. The options property of your layer config will get passed to the respective constructor for the given layer type.

For more information on what to you need to configure either read the leaflet docs for these layers and guess what you need to configure, or read `src/helpers/layer-factory.js`.

#### map-events
Bind this to an array like `['click', 'load']`. The array should consist of any of the map-events documented here: http://leafletjs.com/reference.html#map-events. Listeners for these will get added to the `map` object and will publish an event using aurelias `EventAggregator` in the `aurelia-leaflet` channel.
To listen to them, you want to import and inject the `EventAggregator` like this:
```js
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  
  constructor(EventAggregator) {
    this.eventAggregator = EventAggregator;

    this.eventAggregator.subscribe('aurelia-leaflet', (payload) => {
      console.log(payload);
    });
  }
}
```
The payload you receive will be the event from Leaflet with one additional property `map` that is the instance of `Leaflet.map`.

#### with-layer-control
If this is `false` or not set there will be no layer control. Otherwise the value of this property will get passed as the options parameter to `L.control.layers` as documented here: http://leafletjs.com/reference.html#control-layers.

#### with-scale-control
If this is `false` or not set there will be no scale control. Otherwise the value of this property will get passed as the options parameter to `L.control.scale` as documented here: http://leafletjs.com/reference.html#control-scale.

### How to get access to the map object
Read the information about `map-events`. Make sure you register the `load` event, subscribe to the channel `aurelia-leaflet` in aurelias `EventAggregator` and get a payload with a property `map` that is the map object after leaflet fires to `load` event (after first time center and zoom are set).


## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
