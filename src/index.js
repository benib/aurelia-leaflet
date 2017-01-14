import Leaflet from 'leaflet';

export function configure(frameworkConfig, {
    LeafletDefaultImagePath = 'jspm_packages/npm/leaflet@1.0.2/dist/images/'
  } = {}) {
    Leaflet.Icon.Default.imagePath = LeafletDefaultImagePath;
    frameworkConfig.globalResources('./leaflet');
  }
