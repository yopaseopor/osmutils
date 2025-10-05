// Taginfo API integration for OSM key/value predictive search
// Provides functionality to query OSM keys and values from taginfo.openstreetmap.org

(function() {
    'use strict';

    // Taginfo API endpoints
    const TAGINFO_BASE_URL = 'https://taginfo.openstreetmap.org/api/4';

    // Cache for API responses to avoid repeated requests
    const cache = {
        keys: new Map(),
        values: new Map(),
        keyValues: new Map()
    };

    // Debounce function for API requests
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

    // Main Taginfo API class
    class TaginfoAPI {
        constructor() {
            this.pendingRequests = new Map();
        }

        // Query keys from Taginfo API
        async searchKeys(query, options = {}) {
            const cacheKey = `keys:${query}:${JSON.stringify(options)}`;

            // Check cache first
            if (cache.keys.has(cacheKey)) {
                return cache.keys.get(cacheKey);
            }

            // Check if request is already pending
            if (this.pendingRequests.has(cacheKey)) {
                return this.pendingRequests.get(cacheKey);
            }

            // Remove bbox from options for keys endpoint (not supported)
            const { bbox, ...cleanOptions } = options;

            const requestPromise = this._makeRequest(cacheKey, 'keys', query, cleanOptions);
            this.pendingRequests.set(cacheKey, requestPromise);

            try {
                const result = await requestPromise;
                cache.keys.set(cacheKey, result);
                return result;
            } finally {
                this.pendingRequests.delete(cacheKey);
            }
        }

        // Query values for a specific key
        async searchValues(key, query = '', options = {}) {
            const cacheKey = `values:${key}:${query}:${JSON.stringify(options)}`;

            // Check cache first
            if (cache.values.has(cacheKey)) {
                return cache.values.get(cacheKey);
            }

            // Check if request is already pending
            if (this.pendingRequests.has(cacheKey)) {
                return this.pendingRequests.get(cacheKey);
            }

            const requestPromise = this._makeRequest(cacheKey, 'key/values', `${key}/${query}`, options);
            this.pendingRequests.set(cacheKey, requestPromise);

            try {
                const result = await requestPromise;
                cache.values.set(cacheKey, result);
                return result;
            } finally {
                this.pendingRequests.delete(cacheKey);
            }
        }

        // Query combinations of keys and values
        async searchKeyValues(keyQuery, valueQuery, options = {}) {
            const cacheKey = `keyvalues:${keyQuery}:${valueQuery}:${JSON.stringify(options)}`;

            // Check cache first
            if (cache.keyValues.has(cacheKey)) {
                return cache.keyValues.get(cacheKey);
            }

            // Check if request is already pending
            if (this.pendingRequests.has(cacheKey)) {
                return this.pendingRequests.get(cacheKey);
            }

            const requestPromise = this._makeRequest(cacheKey, 'key/values', `${keyQuery}/${valueQuery}`, options);
            this.pendingRequests.set(cacheKey, requestPromise);

            try {
                const result = await requestPromise;
                cache.keyValues.set(cacheKey, result);
                return result;
            } finally {
                this.pendingRequests.delete(cacheKey);
            }
        }

        // Generic request handler
        async _makeRequest(cacheKey, endpoint, query, options) {
            const params = new URLSearchParams();

            if (query) {
                params.append('q', query);
            }

            // Add pagination
            if (options.page !== undefined) {
                params.append('page', options.page);
            }
            if (options.limit !== undefined) {
                params.append('limit', options.limit || 50);
            } else {
                params.append('limit', 25);
            }

            // Add sorting
            if (options.sortname) {
                params.append('sortname', options.sortname);
            }
            if (options.sortorder) {
                params.append('sortorder', options.sortorder);
            }

            // Add filters for bbox and object types
            if (options.bbox) {
                params.append('bbox', options.bbox);
            }
            if (options.objectTypes && options.objectTypes.length > 0) {
                options.objectTypes.forEach(type => {
                    params.append('otype', type);
                });
            }

            const url = `${TAGINFO_BASE_URL}/${endpoint}?${params.toString()}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Taginfo API error: ${response.status}`);
                }

                const data = await response.json();
                return {
                    data: data.data || [],
                    total: data.total || 0,
                    url: url
                };
            } catch (error) {
                console.error('Taginfo API request failed:', error);
                return {
                    data: [],
                    total: 0,
                    error: error.message
                };
            }
        }

        // Get current map bbox for filtering results
        getCurrentBbox() {
            if (window.map && window.map.getView) {
                const view = window.map.getView();
                const extent = view.calculateExtent();
                const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');
                return `${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}`;
            }
            return null;
        }

        // Get current zoom level for relevance filtering
        getCurrentZoom() {
            if (window.map && window.map.getView) {
                return Math.round(window.map.getView().getZoom());
            }
            return 10;
        }
    }

    // Create global instance
    window.taginfoAPI = new TaginfoAPI();

    // Export for use in other modules
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TaginfoAPI;
    }

})();
