// External Layer Integration Logic
// This file contains only the logic for integrating external (base) layers.
import { allLayers } from './layers/index.js';

export function integrateExternalLayers() {
    if (!window.config || !window.config.layers) return;
    // Group layers by their source file (key in allLayers)
    const groupedLayers = Object.entries(allLayers)
        .filter(([key, value]) => Array.isArray(value))
        .map(([key, layers]) => ({ key, layers }));

    // For each group, create an OpenLayers Group layer with a title
    const externalLayerGroups = {};
    let externalLayersFlat = [];
    groupedLayers.forEach(({ key, layers }) => {
        // Use the filename (key) as the group title, or customize as needed
        const groupTitle = key;
        const group = new ol.layer.Group({
            title: groupTitle,
            type: 'base', // or 'external', as appropriate
            layers: new ol.Collection(layers),
            visible: false
        });
        window.config.layers.push(group);
        // Store for UI: array of { title, _olLayer, group }
        externalLayerGroups[groupTitle] = layers.map(layer => ({
            title: layer.get && layer.get('title'),
            _olLayer: layer,
            group: groupTitle
        }));
        // Add to flat array for UI
        externalLayersFlat = externalLayersFlat.concat(
            layers.map(layer => ({
                title: layer.get && layer.get('title'),
                _olLayer: layer,
                group: groupTitle
            }))
        );
    });
    // Make available globally for UI
    window.externalLayerGroups = externalLayerGroups;
    window.externalLayers = externalLayersFlat;
    // Dispatch event for UI update
    window.dispatchEvent(new CustomEvent('externalLayersReady', {
        detail: { groups: externalLayerGroups, layers: externalLayersFlat }
    }));
    // Optionally trigger UI update if function exists
    if (window.renderExternalLayerList) {
        window.renderExternalLayerList(externalLayerGroups, externalLayersFlat);
    }
    // Debug: Log all group titles after integration
    console.log('All external layer groups after integration:', groupedLayers.map(g => g.key));
}