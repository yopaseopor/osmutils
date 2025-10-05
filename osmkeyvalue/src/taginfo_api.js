// Taginfo API integration for OSM Utils
// Provides predictive search for keys and values using the Taginfo API

(function() {
    'use strict';

    // Taginfo API base URL
    const TAGINFO_API_BASE = 'https://taginfo.openstreetmap.org/api/4';

    // Cache for API responses to avoid repeated requests
    const cache = {
        keys: new Map(),
        values: new Map()
    };

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Get current map bbox and view
    function getCurrentMapExtent() {
        if (typeof window !== 'undefined' && window.map) {
            const view = window.map.getView();
            const extent = view.calculateExtent();
            // Convert to EPSG:4326 bbox
            const epsg4326Extent = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');
            return {
                minLon: epsg4326Extent[0],
                minLat: epsg4326Extent[1],
                maxLon: epsg4326Extent[2],
                maxLat: epsg4326Extent[3]
            };
        }
        return null;
    }

    // Get element types filter (node/way/relation) based on current zoom level or user preference
    function getElementTypes() {
        // Default to all types, but could be made configurable based on zoom level
        return ['node', 'way', 'relation'];
    }

    // Fetch keys from Taginfo API
    async function fetchKeys(query = '', limit = 10) {
        const bbox = getCurrentMapExtent();
        if (!bbox) return [];

        const elementTypes = getElementTypes();
        const cacheKey = `${query}_${elementTypes.join(',')}_${bbox.minLon}_${bbox.minLat}_${bbox.maxLon}_${bbox.maxLat}`;

        if (cache.keys.has(cacheKey)) {
            return cache.keys.get(cacheKey);
        }

        try {
            const params = new URLSearchParams({
                query: query,
                minLon: bbox.minLon,
                minLat: bbox.minLat,
                maxLon: bbox.maxLon,
                maxLat: bbox.maxLat,
                sortname: 'count',
                sortorder: 'desc',
                page: '1',
                rp: limit.toString()
            });

            // Add element type filters if not all types
            if (elementTypes.length < 3) {
                elementTypes.forEach(type => {
                    params.append('type', type);
                });
            }

            const response = await fetch(`${TAGINFO_API_BASE}/keys/all?${params}`);
            const data = await response.json();

            const keys = data.data.map(item => ({
                key: item.key,
                count: item.count,
                inWiki: item.in_wiki,
                description: item.description || ''
            }));

            cache.keys.set(cacheKey, keys);
            return keys;
        } catch (error) {
            console.error('Error fetching keys from Taginfo:', error);
            return [];
        }
    }

    // Fetch values for a specific key from Taginfo API
    async function fetchValues(key, query = '', limit = 10) {
        const bbox = getCurrentMapExtent();
        if (!bbox) return [];

        const elementTypes = getElementTypes();
        const cacheKey = `${key}_${query}_${elementTypes.join(',')}_${bbox.minLon}_${bbox.minLat}_${bbox.maxLon}_${bbox.maxLat}`;

        if (cache.values.has(cacheKey)) {
            return cache.values.get(cacheKey);
        }

        try {
            const params = new URLSearchParams({
                key: key,
                query: query,
                minLon: bbox.minLon,
                minLat: bbox.minLat,
                maxLon: bbox.maxLon,
                maxLat: bbox.maxLat,
                sortname: 'count',
                sortorder: 'desc',
                page: '1',
                rp: limit.toString()
            });

            // Add element type filters if not all types
            if (elementTypes.length < 3) {
                elementTypes.forEach(type => {
                    params.append('type', type);
                });
            }

            const response = await fetch(`${TAGINFO_API_BASE}/key/values?${params}`);
            const data = await response.json();

            const values = data.data.map(item => ({
                value: item.value,
                count: item.count,
                fraction: item.fraction,
                inWiki: item.in_wiki,
                description: item.description || ''
            }));

            cache.values.set(cacheKey, values);
            return values;
        } catch (error) {
            console.error('Error fetching values from Taginfo:', error);
            return [];
        }
    }

    // Clear cache when map moves significantly
    function clearCache() {
        cache.keys.clear();
        cache.values.clear();
    }

    // Debounced version for map move events
    const debouncedClearCache = debounce(clearCache, 1000);

    // Listen for map move events to clear cache
    if (typeof window !== 'undefined') {
        window.addEventListener('mapMoveEnd', debouncedClearCache);
    }

    // Public API
    window.TaginfoAPI = {
        fetchKeys,
        fetchValues,
        clearCache,
        getCurrentMapExtent,
        getElementTypes
    };

})();
