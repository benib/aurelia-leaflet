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
