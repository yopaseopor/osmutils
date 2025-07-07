// External Layer Integration Logic
// This file contains the logic for integrating and managing external (base) layers.
import { allLayers } from './layers/index.js';

// Global variables to store layer references
window.externalLayerGroups = {};
window.externalLayers = [];

/**
 * Get all available layers from external files
 * @returns {Object} Object containing grouped and flat layer lists
 */
function getAllExternalLayers() {
    if (!window.config || !window.config.layers) return { groups: {}, layers: [] };
    
    // Group layers by their source file (key in allLayers)
    const groupedLayers = Object.entries(allLayers)
        .filter(([key, value]) => Array.isArray(value))
        .map(([key, layers]) => ({ 
            key, 
            layers: layers.filter(layer => layer && layer.get) // Filter out invalid layers
        }));

    const externalLayerGroups = {};
    let externalLayersFlat = [];

    groupedLayers.forEach(({ key, layers }) => {
        const groupTitle = key.replace('Layer', '').replace(/([A-Z])/g, ' $1').trim();
        
        // Store for UI: array of { title, _olLayer, group, visible }
        externalLayerGroups[groupTitle] = layers.map(layer => {
            const layerTitle = layer.get('title') || 'Unnamed Layer';
            return {
                title: layerTitle,
                _olLayer: layer,
                group: groupTitle,
                visible: layer.getVisible() || false
            };
        });

        externalLayersFlat = externalLayersFlat.concat(externalLayerGroups[groupTitle]);
    });

    return { groups: externalLayerGroups, layers: externalLayersFlat };
}

/**
 * Toggle the visibility of a specific layer
 * @param {string} layerTitle - Title of the layer to toggle
 * @param {boolean} visible - Whether to show or hide the layer
 */
window.toggleExternalLayer = function(layerTitle, visible) {
    if (!window.externalLayers) return;
    
    const layerInfo = window.externalLayers.find(l => l.title === layerTitle);
    if (layerInfo && layerInfo._olLayer) {
        // Hide all other base layers in the same group
        if (visible) {
            window.externalLayers
                .filter(l => l.group === layerInfo.group && l.title !== layerTitle)
                .forEach(l => l._olLayer.setVisible(false));
        }
        layerInfo._olLayer.setVisible(visible);
        layerInfo.visible = visible;
        
        // Update the layer switcher if available
        if (window.layerSwitcher) {
            window.layerSwitcher.renderPanel();
        }
    }
};

/**
 * Render the external layers UI
 */
window.renderExternalLayerList = function() {
    const container = document.getElementById('external-layers-container');
    if (!container) return;
    
    const { groups } = getAllExternalLayers();
    
    let html = '<div class="external-layers">';
    
    Object.entries(groups).forEach(([groupName, layers]) => {
        if (layers.length === 0) return;
        
        html += `
            <div class="layer-group">
                <h3>${groupName}</h3>
                <div class="layer-options">
                    ${layers.map(layer => `
                        <label class="layer-option">
                            <input type="radio" 
                                   name="${groupName}" 
                                   value="${layer.title}"
                                   ${layer.visible ? 'checked' : ''}
                                   onchange="window.toggleExternalLayer('${layer.title}', this.checked)">
                            ${layer.title}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
};

export function integrateExternalLayers() {
    const { groups, layers } = getAllExternalLayers();
    
    // Make available globally
    window.externalLayerGroups = groups;
    window.externalLayers = layers;
    
    // Add layers to the map
    Object.values(layers).forEach(layerInfo => {
        if (!window.map.getLayers().getArray().includes(layerInfo._olLayer)) {
            window.map.addLayer(layerInfo._olLayer);
        }
    });
    
    // Render the UI
    if (window.renderExternalLayerList) {
        window.renderExternalLayerList();
    }
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('externalLayersReady', {
        detail: { groups, layers }
    }));
    
    console.log('External layers integrated:', groups);
}

// Initialize the layer switcher
window.setupLayerSwitcher = function(map) {
    if (!window.ol || !window.ol.control || !window.ol.control.LayerSwitcher) {
        console.warn('ol-layerswitcher is not loaded. Please include the CDN in your HTML.');
        return;
    }
    
    window.layerSwitcher = new window.ol.control.LayerSwitcher({
        activationMode: 'click',
        startActive: true,
        tipLabel: 'Layers',
        groupSelectStyle: 'children', // Show all child layers as selectable
        collapseLabel: '×',
        label: 'Layers',
        tipLabel: 'Toggle layers',
        collapseTipLabel: 'Collapse layers',
        target: document.getElementById('layer-switcher')
    });
    
    map.addControl(window.layerSwitcher);
    
    // Add custom CSS class for styling
    const panel = document.querySelector('.ol-control.layer-switcher');
    if (panel) {
        panel.classList.add('custom-layer-switcher');
    }
};

// Automatically setup LayerSwitcher after map is created if ol-layerswitcher is available
(function() {
    // Wait for the map to be available on window (assume window.map is your map variable)
    function trySetupLayerSwitcher() {
        if (window.map && window.ol && window.ol.control && window.ol.control.LayerSwitcher) {
            window.setupLayerSwitcher(window.map);
        } else if (!window.map) {
            // Try again in 500ms if map is not ready
            setTimeout(trySetupLayerSwitcher, 500);
        }
    }
    trySetupLayerSwitcher();
})();
