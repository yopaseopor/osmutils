// Import the overlays
import { allOverlays } from './overlays/index.js';
import { getCurrentLanguage } from './i18n/index.js';

// Import external layers
import { allLayers } from './layers/index.js';

// Function to convert overlay to OpenLayers layer
function createOlLayer(overlay) {
    // Spinner element
    const spinner = document.getElementById('overlay-search-spinner');
    function setOverlaySpinner(visible) {
        if (spinner) spinner.style.display = visible ? 'flex' : 'none';
    }
    const vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {
            const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            const bbox = [epsg4326Extent[1], epsg4326Extent[0], epsg4326Extent[3], epsg4326Extent[2]].join(',');
            const query = overlay.query.replace('{{bbox}}', bbox);
            const url = window.config.overpassApi() + '?data=' + encodeURIComponent(query);
            // Show spinner before fetch
            setOverlaySpinner(true);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setOverlaySpinner(false);
                    console.log('Received data for ' + overlay.title);
                    if (!data || !data.elements) {
                        console.warn('No elements found in response for ' + overlay.title);
                        return;
                    }
                    const geojson = osmtogeojson(data);
                    const features = new ol.format.GeoJSON().readFeatures(geojson, {
                        featureProjection: projection
                    });
                    console.log('Added ' + features.length + ' features for ' + overlay.title);
                    vectorSource.addFeatures(features);
                    // Dispatch event to trigger global summary update
                    window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));
                })
                .catch(error => {
                    setOverlaySpinner(false);
                    console.error('Error loading overlay data for ' + overlay.title + ':', error);
                });
        },
        strategy: ol.loadingstrategy.bbox
    });

    const layer = new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        type: 'overlay',
        source: vectorSource,
        style: typeof overlay.style === 'function' ? overlay.style : undefined,
        visible: false
    });

    // Add a reference to the original overlay for easier access
    layer.overlay = overlay;
    
    return layer;
}

// Function to create overlay group
function createOverlayGroup(title, layers) {
    // Get the translated title
    const translatedTitle = window.getTranslation ? window.getTranslation(title) : title;
    
    // Create the group with the translated title
    const group = new ol.layer.Group({
        title: translatedTitle,
        type: 'overlay',
        // Store the original untranslated title for future translations
        originalTitle: title,
        layers: new ol.Collection(layers),
        visible: true
    });
    
    // Store the original title on each layer for reference
    layers.forEach(layer => {
        if (layer.overlay) {
            layer.overlay._originalGroup = title;
        }
    });
    
    return group;
}

// Function to integrate overlays
function integrateOverlays() {
    if (!window.config || !window.config.layers) return;
    
    console.log('Integrating overlays...');
    
    // Clear existing overlay layers
    window.config.layers = window.config.layers.filter(layer => layer.get('type') !== 'overlay');
    
    // Flatten all overlays from all groups
    const allOverlaysFlat = Object.values(window.allOverlays)
        .filter(Array.isArray)
        .flat();
        
    // Group overlays by their group property
    const groupMap = {};
    allOverlaysFlat.forEach(overlay => {
        if (!overlay.group) return;
        let groupKey = overlay.group;
        // Store the original group key for reference
        overlay._originalGroup = groupKey;
        if (!groupMap[groupKey]) groupMap[groupKey] = [];
        groupMap[groupKey].push(overlay);
    });
    
    // Store current visibility state of layers by title
    const visibilityState = {};
    if (window.config && window.config.layers) {
        window.config.layers.forEach(layer => {
            if (layer.get('type') === 'overlay') {
                const title = layer.get('title');
                if (title) {
                    visibilityState[title] = layer.getVisible();
                }
            }
        });
    }
    
    // Create OpenLayers groups for each unique group name
    const overlayGroups = {};
    Object.entries(groupMap).forEach(([groupName, overlays]) => {
        const layers = overlays.map(overlay => createOlLayer(overlay));
        const group = createOverlayGroup(groupName, layers);
        
        // Restore visibility state if it exists
        const groupTitle = group.get('title');
        if (groupTitle in visibilityState) {
            group.setVisible(visibilityState[groupTitle]);
        }
        
        overlayGroups[groupName] = group;
    });
    
    // Add groups to config layers
    Object.values(overlayGroups).forEach(group => {
        window.config.layers.push(group);
    });
    
    // Update window.overlays for the search functionality
    console.log('Updating window.overlays...');
    window.overlays = Object.entries(overlayGroups).flatMap(([groupName, group]) => {
        return group.getLayers().getArray().map(layer => ({
            title: layer.get('title'),
            group: groupName, // Keep original group name for reference
            id: layer.get('id') || '',
            _olLayer: layer,
            ...layer.overlay,
            _originalGroup: groupName
        }));
    });
    
    // Dispatch event to notify that overlays are ready
    console.log('Dispatching overlaysReady event...');
    window.dispatchEvent(new CustomEvent('overlaysReady', {
        detail: { 
            overlays: window.overlays,
            groups: overlayGroups
        }
    }));
    
    // Also dispatch a custom event when all overlays are loaded
    window.dispatchEvent(new CustomEvent('overlaysFullyLoaded'));
    
    // Trigger overlay list update
    if (window.renderOverlayList) {
        console.log('Updating overlay list...');
        window.renderOverlayList(window.overlays);
    }
}

// Function to integrate external layers grouped by file
function integrateExternalLayers() {
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

// Integrate overlays and external layers
function integrateAll() {
    integrateExternalLayers();
    integrateOverlays();
}

// Make integrateOverlays available globally
window.integrateOverlays = integrateOverlays;

// Make integrateAll available globally
window.integrateAll = integrateAll;

// Initialize when the module loads
console.log('Overlay integration module loaded');

// Listen for config to be available
if (window.config) {
    console.log('Config already available, integrating overlays...');
    integrateAll();
} else {
    console.log('Waiting for config to be available...');
    window.addEventListener('configLoaded', () => {
        console.log('Config loaded, integrating overlays...');
        integrateAll();
    });
}

// Re-integrate when new overlays are loaded
window.addEventListener('overlaysUpdated', function(event) {
    console.log('Overlays updated, re-integrating...', event.detail);
    if (window.config) {
        integrateOverlays();
    }
});