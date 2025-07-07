// Import external layers
import { allLayers } from './layers/index.js';

// Global variable to store the map instance
let map;

// Store registered layers
const registeredLayers = [];

/**
 * Process a layer definition and return an array of OpenLayers layers
 * @param {Object|Array|ol.layer.Base} layerDef - The layer definition to process
 * @returns {Array<ol.layer.Base>} Array of OpenLayers layers
 */
function processLayerDefinition(layerDef) {
    if (!layerDef) {
        console.error('Invalid layer definition:', layerDef);
        return [];
    }

    // If it's already an OpenLayers layer, return it as is
    if (layerDef instanceof ol.layer.Base) {
        return [layerDef];
    }
    
    // If it's an array, process each item
    if (Array.isArray(layerDef)) {
        return layerDef.flatMap(processLayerDefinition);
    }
    
    // If it's an object with a source property, treat it as a layer definition
    if (layerDef.source) {
        try {
            // Create the appropriate layer type based on the source type
            let olLayer;
            if (layerDef.source.type === 'XYZ' || layerDef.source.url?.includes('{z}/{x}/{y}')) {
                olLayer = new ol.layer.Tile({
                    title: layerDef.title,
                    type: layerDef.type || 'base',
                    visible: layerDef.visible !== false,
                    source: new ol.source.XYZ({
                        url: layerDef.source.url,
                        attributions: layerDef.source.attributions,
                        maxZoom: layerDef.source.maxZoom || 19,
                        crossOrigin: 'anonymous'
                    })
                });
            } else if (layerDef.source.type === 'Vector' || layerDef.source.url?.endsWith('.geojson')) {
                olLayer = new ol.layer.Vector({
                    title: layerDef.title,
                    type: layerDef.type || 'overlay',
                    source: new ol.source.Vector({
                        url: layerDef.source.url,
                        format: new ol.format.GeoJSON()
                    }),
                    style: layerDef.style,
                    visible: layerDef.visible !== false
                });
            } else if (layerDef.source.type === 'VectorTile' || layerDef.source.url?.endsWith('.mvt')) {
                olLayer = new ol.layer.VectorTile({
                    title: layerDef.title,
                    type: layerDef.type || 'overlay',
                    source: new ol.source.VectorTile({
                        format: new ol.format.MVT(),
                        url: layerDef.source.url,
                        attributions: layerDef.source.attributions,
                        tileGrid: ol.tilegrid.createXYZ({ maxZoom: 19 })
                    }),
                    style: layerDef.style,
                    visible: layerDef.visible !== false
                });
            } else if (layerDef.source.type === 'WMTS') {
                olLayer = new ol.layer.Tile({
                    title: layerDef.title,
                    type: layerDef.type || 'base',
                    visible: layerDef.visible !== false,
                    source: new ol.source.WMTS({
                        url: layerDef.source.url,
                        layer: layerDef.source.layer,
                        matrixSet: layerDef.source.matrixSet,
                        format: layerDef.source.format || 'image/png',
                        projection: layerDef.source.projection,
                        tileGrid: new ol.tilegrid.WMTS({
                            origin: ol.extent.getTopLeft(layerDef.source.tileGrid.extent),
                            resolutions: layerDef.source.tileGrid.resolutions,
                            matrixIds: layerDef.source.tileGrid.matrixIds
                        }),
                        style: 'default',
                        wrapX: true
                    })
                });
            } else {
                console.error('Unsupported layer source type:', layerDef.source);
                return [];
            }

            // Store the original layer definition for reference
            olLayer.originalDef = layerDef;
            return [olLayer];
        } catch (error) {
            console.error('Error creating layer', layerDef.title, ':', error);
            return [];
        }
    }
    
    console.error('Unsupported layer definition format:', layerDef);
    return [];
}

/**
 * Integrate external layers into the map
 * @param {ol.Map} map - The OpenLayers map instance
 */
function integrateExternalLayers(map) {
    if (!map) {
        console.warn('Map not provided for external layers integration');
        return;
    }

    console.log('Integrating external layers...');
    
    // Clear previously registered layers
    registeredLayers.length = 0;
    
    // Process each layer definition and add to the map
    Object.values(allLayers).forEach((layerDef, index) => {
        const layers = processLayerDefinition(layerDef);
        
        layers.forEach(layer => {
            if (layer) {
                // Add to the map
                map.addLayer(layer);
                
                // Store reference
                registeredLayers.push({
                    id: `ext-layer-${index}-${Date.now()}`,
                    layer: layer,
                    originalDef: layer.originalDef || layerDef
                });
                
                console.log('Added layer:', layer.get('title') || 'Untitled');
            }
        });
    });
    
    console.log('External layers integration complete. Total layers:', registeredLayers.length);
    
    // Dispatch event when all layers are loaded
    window.dispatchEvent(new CustomEvent('externalLayersLoaded', {
        detail: { layers: [...registeredLayers] }
    }));
}

// Listen for map initialization
window.addEventListener('mapInitialized', function(e) {
    console.log('Map initialized, integrating external layers...');
    map = e.detail.map;
    integrateExternalLayers(map);
});

/**
 * Get all registered external layers
 * @returns {Array} Array of registered layer objects
 */
function getExternalLayers() {
    return [...registeredLayers];
}

// Make functions available globally
window.integrateExternalLayers = integrateExternalLayers;
window.getExternalLayers = getExternalLayers;

export { 
    integrateExternalLayers, 
    getExternalLayers,
    processLayerDefinition
};
