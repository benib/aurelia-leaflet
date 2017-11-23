import { PLATFORM } from 'aurelia-pal';
import { LeafletCustomElement }  from './leaflet';

export function configure(frameworkConfig) {
    frameworkConfig.globalResources(PLATFORM.moduleName('./leaflet'));
}

export { LeafletCustomElement };
