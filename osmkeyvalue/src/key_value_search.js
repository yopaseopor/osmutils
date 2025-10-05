// Key-Value Searchers: predictive search for OSM keys and values using Taginfo API
// Fixed implementation that works reliably

(function() {
    'use strict';

    // Simple cache for API responses
    const cache = {
        keys: new Map(),
        values: new Map()
    };

    // Initialize when DOM is ready
    $(document).ready(function() {
        initializeKeySearcher();
        initializeValueSearcher();
        initializeClearResultsButton();
        initializeExecuteButton();
    });

    function initializeClearResultsButton() {
        const clearButton = document.getElementById('clear-taginfo-results');
        if (!clearButton) return;

        clearButton.addEventListener('click', function() {
            // Clear search inputs
            const keyInput = document.getElementById('key-search');
            const valueInput = document.getElementById('value-search');
            if (keyInput) keyInput.value = '';
            if (valueInput) valueInput.value = '';

            // Clear search dropdowns
            const keyDropdown = document.getElementById('key-search-dropdown');
            const valueDropdown = document.getElementById('value-search-dropdown');
            if (keyDropdown) keyDropdown.style.display = 'none';
            if (valueDropdown) valueDropdown.style.display = 'none';

            // Clear value searcher's selected key
            if (valueInput) {
                valueInput.dataset.selectedKey = '';
            }

            // Remove taginfo result layers from map
            if (window.map && window.config && window.config.layers) {
                const layersToRemove = [];
                window.config.layers.forEach((layer, index) => {
                    if (layer && layer.get && layer.get('title') &&
                        (layer.get('title').includes('Features with key:') ||
                         layer.get('title').includes('Features with') &&
                         layer.get('title').includes('='))) {
                        layersToRemove.push(index);
                    }
                });

                // Remove layers in reverse order to maintain indices
                layersToRemove.reverse().forEach(index => {
                    const layer = window.config.layers[index];
                    if (layer && window.map) {
                        window.map.removeLayer(layer);
                    }
                    window.config.layers.splice(index, 1);
                });
            }

            // Clear overlay summary
            if (window.setOverlaySummary) {
                window.setOverlaySummary('');
            }
        });
    }

    function initializeExecuteButton() {
        // Check if execute button exists, if not create it
        let executeButton = document.getElementById('execute-taginfo-search');
        if (!executeButton) {
            const searchSection = document.querySelector('.taginfo-search-section');
            if (searchSection) {
                const button = document.createElement('button');
                button.id = 'execute-taginfo-search';
                button.textContent = 'Search on Map';
                button.style.cssText = 'padding: 8px 16px; background: #2196F3; color: white; border: none; border-radius: 3px; cursor: pointer; margin-left: 10px;';
                button.title = 'Execute search query on the current map view';

                const container = searchSection.querySelector('div');
                if (container) {
                    container.appendChild(button);
                }
            }
        }

        executeButton = document.getElementById('execute-taginfo-search');
        if (executeButton) {
            executeButton.addEventListener('click', function() {
                executeCurrentSearch();
            });
        }
    }

    function executeCurrentSearch() {
        const keyInput = document.getElementById('key-search');
        const valueInput = document.getElementById('value-search');

        const key = keyInput ? keyInput.value.trim() : '';
        const value = valueInput ? valueInput.value.trim() : '';

        if (!key) {
            alert('Please select a key first');
            return;
        }

        if (value) {
            executeKeyValueQuery(key, value);
        } else {
            executeKeyQuery(key);
        }
    }

    function initializeKeySearcher() {
        const searchInput = document.getElementById('key-search');
        if (!searchInput) return;

        const dropdown = document.createElement('div');
        dropdown.id = 'key-search-dropdown';
        dropdown.className = 'search-dropdown';
        dropdown.style.cssText = `
            position: absolute; top: 100%; left: 0; right: 0;
            background: white; border: 1px solid #ccc; border-top: none;
            max-height: 200px; overflow-y: auto; z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: none;
        `;
        searchInput.parentNode.appendChild(dropdown);

        let searchTimeout = null;

        // Debounced search function
        const debouncedSearch = debounce(async function(query) {
            if (!query || query.length < 1) {  // Changed from 2 to 1
                dropdown.style.display = 'none';
                return;
            }

            try {
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #666;">Searching...</div>';
                dropdown.style.display = 'block';

                const result = await searchKeysAPI(query);

                console.log('Key search result:', result); // Debug log
                renderKeyDropdown(result.data || [], query);
            } catch (error) {
                console.error('Key search error:', error);
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #d32f2f;">Search failed</div>';
            }
        }, 300);

        function renderKeyDropdown(keys, query) {
            dropdown.innerHTML = '';

            if (!keys || keys.length === 0) {
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #666;">No keys found</div>';
                return;
            }

            keys.slice(0, 15).forEach(key => {
                const option = document.createElement('div');
                option.style.cssText = `
                    padding: 8px 12px; border-bottom: 1px solid #eee; cursor: pointer;
                    display: flex; justify-content: space-between; align-items: center;
                `;

                const keyName = document.createElement('span');
                keyName.style.fontWeight = '500';
                keyName.style.color = '#333';
                keyName.textContent = key.key;
                option.appendChild(keyName);

                const keyCount = document.createElement('span');
                keyCount.style.fontSize = '0.9em';
                keyCount.style.color = '#666';
                keyCount.style.marginLeft = '10px';
                keyCount.textContent = `(${formatNumber(key.count_all || 0)})`;
                option.appendChild(keyCount);

                option.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    selectKey(key.key);
                });

                option.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f0f0f0';
                });

                option.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                });

                dropdown.appendChild(option);
            });

            dropdown.style.display = 'block';
        }

        function selectKey(key) {
            searchInput.value = key;
            dropdown.style.display = 'none';

            // Trigger value search for this key
            const valueInput = document.getElementById('value-search');
            if (valueInput) {
                valueInput.dataset.selectedKey = key;
                valueInput.placeholder = `Search values for key: ${key}...`;
            }
        }

        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            console.log('Key input changed:', query); // Debug log
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchTimeout = setTimeout(() => debouncedSearch(query), 300);
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    function initializeValueSearcher() {
        const searchInput = document.getElementById('value-search');
        if (!searchInput) return;

        const dropdown = document.createElement('div');
        dropdown.id = 'value-search-dropdown';
        dropdown.className = 'search-dropdown';
        dropdown.style.cssText = `
            position: absolute; top: 100%; left: 0; right: 0;
            background: white; border: 1px solid #ccc; border-top: none;
            max-height: 200px; overflow-y: auto; z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: none;
        `;
        searchInput.parentNode.appendChild(dropdown);

        let searchTimeout = null;

        // Debounced search function
        const debouncedSearch = debounce(async function(query) {
            const key = searchInput.dataset.selectedKey || '';

            if (!key || !query || query.length < 1) {
                dropdown.style.display = 'none';
                return;
            }

            try {
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #666;">Searching...</div>';
                dropdown.style.display = 'block';

                const result = await searchValuesAPI(key, query);

                console.log('Value search result:', result); // Debug log
                renderValueDropdown(result.data || [], query, key);
            } catch (error) {
                console.error('Value search error:', error);
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #d32f2f;">Search failed</div>';
            }
        }, 300);

        function renderValueDropdown(values, query, key) {
            dropdown.innerHTML = '';

            if (!values || values.length === 0) {
                dropdown.innerHTML = '<div style="padding: 12px; text-align: center; color: #666;">No values found</div>';
                return;
            }

            values.slice(0, 15).forEach(value => {
                const option = document.createElement('div');
                option.style.cssText = `
                    padding: 8px 12px; border-bottom: 1px solid #eee; cursor: pointer;
                    display: flex; justify-content: space-between; align-items: center;
                `;

                const valueName = document.createElement('span');
                valueName.style.fontWeight = '500';
                valueName.style.color = '#333';
                valueName.textContent = value.value;
                option.appendChild(valueName);

                const valueCount = document.createElement('span');
                valueCount.style.fontSize = '0.9em';
                valueCount.style.color = '#666';
                valueCount.style.marginLeft = '10px';
                valueCount.textContent = `(${formatNumber(value.count || 0)})`;
                option.appendChild(valueCount);

                option.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    selectValue(key, value.value);
                });

                option.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f0f0f0';
                });

                option.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                });

                dropdown.appendChild(option);
            });

            dropdown.style.display = 'block';
        }

        function selectValue(key, value) {
            searchInput.value = value;
            dropdown.style.display = 'none';
        }

        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            console.log('Value input changed:', query, 'for key:', searchInput.dataset.selectedKey); // Debug log
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchTimeout = setTimeout(() => debouncedSearch(query), 300);
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Simplified API functions using XMLHttpRequest
    async function searchKeysAPI(query) {
        const cacheKey = `keys:${query}`;

        // Check cache first
        if (cache.keys.has(cacheKey)) {
            return cache.keys.get(cacheKey);
        }

        return new Promise((resolve, reject) => {
            const url = `https://taginfo.openstreetmap.org/api/4/keys?q=${encodeURIComponent(query)}&limit=20&sortname=count_all&sortorder=desc`;

            console.log('Making keys API request:', url); // Debug log

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                console.log('Keys API response:', xhr.status, xhr.responseText.substring(0, 200)); // Debug log
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        const result = {
                            data: data.data || [],
                            total: data.total || 0,
                            url: url
                        };
                        cache.keys.set(cacheKey, result);
                        resolve(result);
                    } catch (e) {
                        console.error('Error parsing keys response:', e);
                        resolve({ data: [], total: 0, error: 'Parse error' });
                    }
                } else {
                    console.error('Keys API error:', xhr.status, xhr.statusText);
                    resolve({ data: [], total: 0, error: `HTTP ${xhr.status}` });
                }
            };

            xhr.onerror = function() {
                console.error('Keys API network error');
                resolve({ data: [], total: 0, error: 'Network error' });
            };

            xhr.timeout = 10000; // 10 second timeout
            xhr.ontimeout = function() {
                console.error('Keys API timeout');
                resolve({ data: [], total: 0, error: 'Timeout' });
            };

            xhr.send();
        });
    }

    async function searchValuesAPI(key, query) {
        const cacheKey = `values:${key}:${query}`;

        // Check cache first
        if (cache.values.has(cacheKey)) {
            return cache.values.get(cacheKey);
        }

        return new Promise((resolve, reject) => {
            const url = `https://taginfo.openstreetmap.org/api/4/key/values?key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}&limit=20&sortname=count_all&sortorder=desc`;

            console.log('Making values API request:', url); // Debug log

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                console.log('Values API response:', xhr.status, xhr.responseText.substring(0, 200)); // Debug log
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        const result = {
                            data: data.data || [],
                            total: data.total || 0,
                            url: url
                        };
                        cache.values.set(cacheKey, result);
                        resolve(result);
                    } catch (e) {
                        console.error('Error parsing values response:', e);
                        resolve({ data: [], total: 0, error: 'Parse error' });
                    }
                } else {
                    console.error('Values API error:', xhr.status, xhr.statusText);
                    resolve({ data: [], total: 0, error: `HTTP ${xhr.status}` });
                }
            };

            xhr.onerror = function() {
                console.error('Values API network error');
                resolve({ data: [], total: 0, error: 'Network error' });
            };

            xhr.timeout = 10000; // 10 second timeout
            xhr.ontimeout = function() {
                console.error('Values API timeout');
                resolve({ data: [], total: 0, error: 'Timeout' });
            };

            xhr.send();
        });
    }

    // Utility function to format numbers
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // Execute Overpass query and display results on map
    function executeKeyQuery(key) {
        if (!window.map || !window.config) return;

        // Get current bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');
        const bboxString = `${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}`;

        // Create Overpass query for this key
        const query = `[bbox:${bboxString}];(node[~"${key}"~"."];way[~"${key}"~"."];relation[~"${key}"~"."];);out;`;

        executeOverpassQuery(query, `Features with key: ${key}`);
    }

    function executeKeyValueQuery(key, value) {
        if (!window.map || !window.config) return;

        // Get current bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');
        const bboxString = `${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}`;

        // Create Overpass query for key=value
        const query = `[bbox:${bboxString}];(node[~"${key}"~"^${value}$"];way[~"${key}"~"^${value}$"];relation[~"${key}"~"^${value}$"];);out;`;

        executeOverpassQuery(query, `Features with ${key}=${value}`);
    }

    // Execute Overpass query and display results on map
    function executeOverpassQuery(query, description) {
        if (!window.map || !window.config) return;

        // Show loading indicator
        if (window.loading) {
            window.loading.show();
        }

        // Create vector source for the query results
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML2(),
            loader: function(extent, resolution, projection) {
                const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                const bboxQuery = query.replace('[bbox:', `[bbox:${epsg4326Extent[1]},${epsg4326Extent[0]},${epsg4326Extent[3]},${epsg4326Extent[2]}];(`);

                const client = new XMLHttpRequest();
                client.open('POST', window.config.overpassApi ? window.config.overpassApi() : 'https://overpass-api.de/api/interpreter');

                client.onload = function() {
                    if (window.loading) window.loading.hide();

                    if (client.status === 200) {
                        try {
                            const xmlDoc = $.parseXML(client.responseText);
                            const features = new ol.format.OSMXML2().readFeatures(xmlDoc, {
                                featureProjection: window.map.getView().getProjection()
                            });

                            vectorSource.clear();
                            vectorSource.addFeatures(features);

                            // Update overlay summary
                            if (window.setOverlaySummary) {
                                window.setOverlaySummary(`${features.length} features: ${description}`);
                            }

                            // Fit view to features if any found
                            if (features.length > 0) {
                                const extent = vectorSource.getExtent();
                                window.map.getView().fit(extent, {
                                    padding: [20, 20, 20, 20],
                                    maxZoom: 18
                                });
                            }
                        } catch (e) {
                            console.error('Error parsing Overpass response:', e);
                            if (window.setOverlaySummary) {
                                window.setOverlaySummary('Parse error');
                            }
                        }
                    } else {
                        console.error('Overpass query failed:', client.status);
                        if (window.setOverlaySummary) {
                            window.setOverlaySummary('Query failed');
                        }
                    }
                };

                client.onerror = function() {
                    if (window.loading) window.loading.hide();
                    console.error('Overpass query error');
                    if (window.setOverlaySummary) {
                        window.setOverlaySummary('Query error');
                    }
                };

                client.send(bboxQuery);
            },
            strategy: ol.loadingstrategy.bbox
        });

        // Create vector layer for results
        const resultLayer = new ol.layer.Vector({
            source: vectorSource,
            title: description,
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 0, 0, 0.7)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.8)',
                        width: 2
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, 0.7)',
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 0, 0, 0.1)'
                })
            }),
            visible: true
        });

        // Add to map and config
        window.map.addLayer(resultLayer);
        if (Array.isArray(window.config.layers)) {
            window.config.layers.push(resultLayer);
        }

        // Update overlay summary
        if (window.setOverlaySummary) {
            window.setOverlaySummary(`Loading: ${description}...`);
        }
    }

    // Debounce helper function
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

})();
