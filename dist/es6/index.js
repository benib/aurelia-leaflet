import Leaflet from 'leaflet';

export function configure(frameworkConfig, {
    LeafletDefaultImagePath = 'jspm_packages/github/Leaflet/Leaflet@0.7.3/dist/images'
  } = {}) {
    Leaflet.Icon.Default.imagePath = LeafletDefaultImagePath;
    frameworkConfig.globalResources('leaflet');
  }
