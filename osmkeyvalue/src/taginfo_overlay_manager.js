// Dynamic Taginfo Overlay System
// Creates dynamic overlays based on taginfo search queries

import { getTranslation } from './i18n/index.js';

class TaginfoOverlayManager {
    constructor() {
        this.activeOverlays = new Map(); // id -> overlay info
        this.nextOverlayId = 1;
    }

    // Initialize the overlay manager
    init() {
        // Listen for taginfo search events
        window.addEventListener('taginfoSearch', (event) => {
            this.handleSearchEvent(event.detail);
        });

        console.log('Taginfo overlay manager initialized');
    }

    // Handle search events from the search components
    handleSearchEvent(searchParams) {
        const { key, value, elementTypes, bbox } = searchParams;

        if (!bbox) {
            alert('Unable to get map bounding box. Please ensure the map is loaded.');
            return;
        }

        // Create query for the search
        const query = this.buildOverpassQuery(key, value, elementTypes, bbox);

        // Create overlay for this search
        const overlayId = this.createOverlay(key, value, elementTypes, query);

        // Show search info
        if (window.taginfoSearchComponents) {
            const elementTypeText = elementTypes.join(', ');
            const searchText = value ?
                `${key}=${value} (${elementTypeText})` :
                `${key} (${elementTypeText})`;
            window.taginfoSearchComponents.showSearchInfo(`Searching for: ${searchText}`);
        }

        console.log('Executing taginfo search:', { key, value, elementTypes, bbox });
    }

    // Build Overpass query from search parameters
    buildOverpassQuery(key, value, elementTypes, bbox) {
        const bboxString = `${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`;

        // Build element type filters
        const elementFilters = elementTypes.map(type => {
            switch (type) {
                case 'node': return `nwr["${key}"${value ? `="${value}"` : ''}]({{bbox}})`;
                case 'way': return `wr["${key}"${value ? `="${value}"` : ''}]({{bbox}})`;
                case 'relation': return `r["${key}"${value ? `="${value}"` : ''}]({{bbox}})`;
                default: return `nwr["${key}"${value ? `="${value}"` : ''}]({{bbox}})`;
            }
        }).join(';');

        const query = `[out:json][timeout:25];(${elementFilters};);out meta;`;

        // Replace bbox placeholder
        return query.replace('{{bbox}}', bboxString);
    }

    // Create a new overlay for the search
    createOverlay(key, value, elementTypes, query) {
        const overlayId = `taginfo_${this.nextOverlayId++}`;
        const tagDisplay = value ? `${key}=${value}` : key;
        const elementTypeText = elementTypes.join('/');
        const title = `Search: ${tagDisplay} (${elementTypeText})`;

        const overlay = {
            id: overlayId,
            key,
            value,
            elementTypes,
            title,
            query,
            visible: true,
            created: new Date(),
            vectorSource: null,
            layer: null
        };

        // Create the actual OpenLayers layer
        this.createOverlayLayer(overlay);

        // Store overlay
        this.activeOverlays.set(overlayId, overlay);

        // Dispatch event for UI updates
        window.dispatchEvent(new CustomEvent('taginfoOverlayCreated', {
            detail: overlay
        }));

        return overlayId;
    }

    // Create the actual OpenLayers layer for an overlay
    createOverlayLayer(overlay) {
        const vectorSource = new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            loader: (extent, resolution, projection) => {
                this.executeOverlayQuery(overlay, vectorSource, extent, resolution, projection);
            },
            strategy: ol.loadingstrategy.bbox
        });

        const layer = new ol.layer.Vector({
            title: overlay.title,
            source: vectorSource,
            style: this.getDefaultStyle(overlay),
            visible: overlay.visible,
            type: 'taginfo'
        });

        // Store references
        overlay.vectorSource = vectorSource;
        overlay.layer = layer;

        // Add to map if map is available
        if (window.map) {
            window.map.addLayer(layer);
        }

        return layer;
    }

    // Execute the Overpass query for an overlay
    executeOverlayQuery(overlay, vectorSource, extent, resolution, projection) {
        const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
        const currentBbox = [epsg4326Extent[1], epsg4326Extent[0], epsg4326Extent[3], epsg4326Extent[2]].join(',');

        // Update bbox in query
        const queryWithBbox = overlay.query.replace(/\{\{bbox\}\}/g, currentBbox);

        const url = window.config.overpassApi() + '?data=' + encodeURIComponent(queryWithBbox);

        // Show loading state
        if (window.taginfoSearchComponents) {
            window.taginfoSearchComponents.showSearchInfo('Loading data...');
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(`Received ${data.elements ? data.elements.length : 0} elements for ${overlay.title}`);

                if (!data || !data.elements) {
                    console.warn('No elements found in response for ' + overlay.title);
                    if (window.taginfoSearchComponents) {
                        window.taginfoSearchComponents.showSearchInfo('No results found');
                    }
                    return;
                }

                const geojson = osmtogeojson(data);
                const features = new ol.format.GeoJSON().readFeatures(geojson, {
                    featureProjection: projection
                });

                console.log(`Added ${features.length} features for ${overlay.title}`);
                vectorSource.addFeatures(features);

                // Update search info
                if (window.taginfoSearchComponents) {
                    window.taginfoSearchComponents.showSearchInfo(`Found ${features.length} results`);
                }

                // Dispatch event for global summary update
                window.dispatchEvent(new CustomEvent('taginfoOverlayFeaturesLoaded', {
                    detail: {
                        overlayId: overlay.id,
                        featureCount: features.length
                    }
                }));
            })
            .catch(error => {
                console.error(`Error loading overlay data for ${overlay.title}:`, error);
                if (window.taginfoSearchComponents) {
                    window.taginfoSearchComponents.showSearchInfo(`Error: ${error.message}`);
                }
            });
    }

    // Get default style for overlays
    getDefaultStyle(overlay) {
        const key = overlay.key;
        const value = overlay.value;

        // Color coding based on key type
        let fillColor = 'rgba(0, 123, 255, 0.3)'; // Default blue
        let strokeColor = 'rgba(0, 123, 255, 1)';

        if (key.startsWith('amenity')) {
            fillColor = 'rgba(40, 167, 69, 0.3)';
            strokeColor = 'rgba(40, 167, 69, 1)';
        } else if (key.startsWith('highway')) {
            fillColor = 'rgba(220, 53, 69, 0.3)';
            strokeColor = 'rgba(220, 53, 69, 1)';
        } else if (key.startsWith('building')) {
            fillColor = 'rgba(108, 117, 125, 0.3)';
            strokeColor = 'rgba(108, 117, 125, 1)';
        } else if (key.startsWith('natural')) {
            fillColor = 'rgba(23, 162, 184, 0.3)';
            strokeColor = 'rgba(23, 162, 184, 1)';
        } else if (key.startsWith('waterway') || key.startsWith('water')) {
            fillColor = 'rgba(0, 123, 255, 0.3)';
            strokeColor = 'rgba(0, 123, 255, 1)';
        }

        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: fillColor
            }),
            stroke: new ol.style.Stroke({
                color: strokeColor,
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: strokeColor
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 255, 255, 1)',
                    width: 2
                })
            })
        });
    }

    // Remove an overlay
    removeOverlay(overlayId) {
        const overlay = this.activeOverlays.get(overlayId);
        if (!overlay) return false;

        // Remove from map
        if (overlay.layer && window.map) {
            window.map.removeLayer(overlay.layer);
        }

        // Remove from active overlays
        this.activeOverlays.delete(overlayId);

        // Dispatch event
        window.dispatchEvent(new CustomEvent('taginfoOverlayRemoved', {
            detail: { overlayId }
        }));

        return true;
    }

    // Clear all overlays
    clearAllOverlays() {
        const overlayIds = Array.from(this.activeOverlays.keys());
        overlayIds.forEach(id => this.removeOverlay(id));

        if (window.taginfoSearchComponents) {
            window.taginfoSearchComponents.hideSearchInfo();
        }
    }

    // Get all active overlays
    getActiveOverlays() {
        return Array.from(this.activeOverlays.values());
    }

    // Toggle overlay visibility
    toggleOverlay(overlayId) {
        const overlay = this.activeOverlays.get(overlayId);
        if (!overlay || !overlay.layer) return false;

        const newVisibility = !overlay.layer.getVisible();
        overlay.layer.setVisible(newVisibility);
        overlay.visible = newVisibility;

        return newVisibility;
    }
}

// Create global instance
window.taginfoOverlayManager = new TaginfoOverlayManager();

// Initialize when module loads
document.addEventListener('DOMContentLoaded', () => {
    window.taginfoOverlayManager.init();
});

export { TaginfoOverlayManager };
export default window.taginfoOverlayManager;
