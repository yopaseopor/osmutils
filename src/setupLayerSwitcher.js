// LayerSwitcher integration for OpenLayers with nested group support
// Make sure ol-layerswitcher is included in your project (via npm or CDN)
// Usage: call setupLayerSwitcher(map) after your map is created

export function setupLayerSwitcher(map) {
    // If using npm import, uncomment the next line:
    // import LayerSwitcher from 'ol-layerswitcher';
    // If using CDN, LayerSwitcher is available as ol.control.LayerSwitcher
    const LayerSwitcher = window.LayerSwitcher || (window.ol && window.ol.control && window.ol.control.LayerSwitcher);
    if (!LayerSwitcher) {
        console.warn('LayerSwitcher is not available. Please include ol-layerswitcher.');
        return;
    }
    const layerSwitcher = new LayerSwitcher({
        activationMode: 'click',
        startActive: true,
        tipLabel: 'Layers',
        groupSelectStyle: 'children' // Show all child layers as selectable
    });
    map.addControl(layerSwitcher);
}
