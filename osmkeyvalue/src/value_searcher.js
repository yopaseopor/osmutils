// Taginfo Value Searcher: predictive search for OSM values based on selected key
// Replaces the overlay searcher with Taginfo-based value search

(function() {
    'use strict';

    const searchInput = document.getElementById('value-search');
    const dropdown = document.getElementById('value-search-dropdown');

    let currentQuery = '';
    let currentKey = null;
    let selectedValue = null;
    let searchTimeout = null;

    // Debounce search requests
    function debounceSearch(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(searchTimeout);
                func(...args);
            };
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(later, wait);
        };
    }

    // Format value display with description
    function formatValueDisplay(valueData) {
        const value = valueData.value;
        const count = valueData.count;
        const fraction = valueData.fraction;
        const description = valueData.description;
        const inWiki = valueData.inWiki;

        let display = `<strong>${value}</strong>`;
        if (description) {
            display += ` - ${description}`;
        }

        const percentage = (fraction * 100).toFixed(1);
        display += ` <span style="color: #666; font-size: 0.9em;">(${count.toLocaleString()} uses, ${percentage}%)</span>`;

        if (inWiki) {
            display += ' <span style="color: #4CAF50; font-size: 0.8em;">📖</span>';
        }

        return display;
    }

    // Render dropdown with search results
    function renderDropdown(values) {
        dropdown.innerHTML = '';

        if (!values || values.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        // Add "Show all values for this key" option if we have a selected key
        if (currentKey && values.length > 0) {
            const showAllOption = document.createElement('div');
            showAllOption.className = 'value-search-option show-all-option';
            showAllOption.innerHTML = `<em>Show all ${currentKey}=* features on map</em>`;
            showAllOption.style.fontStyle = 'italic';
            showAllOption.style.color = '#666';

            showAllOption.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Trigger show all event
                const event = new CustomEvent('showAllValues', {
                    detail: { key: currentKey }
                });
                window.dispatchEvent(event);

                dropdown.style.display = 'none';
            });

            dropdown.appendChild(showAllOption);
        }

        values.forEach((valueData, index) => {
            const option = document.createElement('div');
            option.className = 'value-search-option';
            option.innerHTML = formatValueDisplay(valueData);
            option.tabIndex = 0;

            // Highlight selected value
            if (selectedValue === valueData.value) {
                option.style.backgroundColor = '#e3f2fd';
                option.style.borderLeft = '3px solid #2196F3';
            }

            option.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();

                selectedValue = valueData.value;
                searchInput.value = `${currentKey}=${valueData.value}`;
                dropdown.style.display = 'none';

                // Focus on value search if available
                const valueSearchInput = document.getElementById('value-search');
                if (valueSearchInput) {
                    valueSearchInput.focus();
                }

                // Trigger value selection event
                const event = new CustomEvent('valueSelected', {
                    detail: {
                        key: currentKey,
                        value: valueData.value,
                        valueData: valueData
                    }
                });
                window.dispatchEvent(event);

                // Execute query and show on map
                executeTagQuery(currentKey, valueData.value);
            });

            dropdown.appendChild(option);
        });

        dropdown.style.display = 'block';
    }

    // Execute Overpass query for the selected key-value pair
    function executeTagQuery(key, value) {
        if (!window.map || !window.config) {
            console.error('Map or config not available for tag query');
            return;
        }

        // Get current map extent
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const epsg4326Extent = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        // Build Overpass query
        const bbox = `${epsg4326Extent[1]},${epsg4326Extent[0]},${epsg4326Extent[3]},${epsg4326Extent[2]}`;
        const query = `[maxsize:536870912];(node[${key}=${value}](${bbox});way[${key}=${value}](${bbox});relation[${key}=${value}](${bbox}););out meta;`;

        // Create vector source for the results
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML(),
            loader: function(extent, resolution, projection) {
                const client = new XMLHttpRequest();
                client.open('POST', window.config.overpassApi ?
                    window.config.overpassApi() : 'https://overpass-api.de/api/interpreter');

                client.onload = function() {
                    if (client.status === 200) {
                        const features = new ol.format.OSMXML().readFeatures(client.responseText, {
                            featureProjection: window.map.getView().getProjection()
                        });
                        vectorSource.addFeatures(features);

                        // Fit map to show results if there are features
                        if (features.length > 0) {
                            const extent = vectorSource.getExtent();
                            window.map.getView().fit(extent, {
                                padding: [20, 20, 20, 20],
                                maxZoom: 18
                            });
                        }
                    }
                };

                client.onerror = function() {
                    console.error('Error executing tag query');
                };

                client.send(query);
            },
            strategy: ol.loadingstrategy.bbox
        });

        // Create vector layer for the results
        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            title: `${key}=${value}`,
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: '#ff6b6b'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#fff',
                        width: 2
                    })
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 107, 107, 0.3)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#ff6b6b',
                    width: 2
                })
            })
        });

        // Add layer to map
        window.map.addLayer(vectorLayer);

        // Store reference for potential removal later
        if (!window.tagQueryLayers) {
            window.tagQueryLayers = [];
        }
        window.tagQueryLayers.push(vectorLayer);

        // Dispatch event for UI updates
        const event = new CustomEvent('tagQueryExecuted', {
            detail: {
                key: key,
                value: value,
                layer: vectorLayer,
                featureCount: 0 // Will be updated when features are loaded
            }
        });
        window.dispatchEvent(event);
    }

    // Handle value search input
    function handleValueSearch() {
        const query = searchInput.value.trim();

        // If query contains "=", treat it as a direct key=value specification
        if (query.includes('=')) {
            const parts = query.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim();

                if (key && value) {
                    currentKey = key;
                    selectedValue = value;
                    dropdown.style.display = 'none';

                    // Execute query directly
                    executeTagQuery(key, value);
                    return;
                }
            }
        }

        // Otherwise, search for values if we have a current key
        if (!currentKey) {
            dropdown.style.display = 'none';
            return;
        }

        if (query === currentQuery) {
            return; // Don't search for the same query
        }

        currentQuery = query;

        // Search for values using Taginfo API
        if (window.TaginfoAPI) {
            window.TaginfoAPI.fetchValues(currentKey, query, 10)
                .then(values => {
                    renderDropdown(values);
                })
                .catch(error => {
                    console.error('Error searching values:', error);
                    dropdown.style.display = 'none';
                });
        }
    }

    // Handle key selection from key searcher
    function handleKeySelection(event) {
        currentKey = event.detail.key;
        selectedValue = null;
        searchInput.value = '';
        currentQuery = '';

        // Update placeholder to show current key
        if (searchInput) {
            searchInput.placeholder = `Search values for ${currentKey}...`;
        }
    }

    // Handle show all values request
    function handleShowAllValues(event) {
        const key = event.detail.key;
        if (key) {
            currentKey = key;
            selectedValue = '*'; // Special value for "all"
            searchInput.value = `${key}=*`;

            // Execute query for all values of this key
            executeTagQuery(key, '*');
        }
    }

    // Debounced search handler
    const debouncedSearch = debounceSearch(handleValueSearch, 300);

    // Setup event listeners
    function setupEventListeners() {
        if (!searchInput) {
            console.error('Value search input not found');
            return;
        }

        searchInput.addEventListener('input', debouncedSearch);

        // Listen for key selection events
        window.addEventListener('keySelected', handleKeySelection);
        window.addEventListener('showAllValues', handleShowAllValues);

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const options = dropdown.querySelectorAll('.value-search-option');

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    if (options.length > 0) {
                        options[0].focus();
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (options.length > 0) {
                        options[options.length - 1].focus();
                    }
                    break;
                case 'Enter':
                    e.preventDefault();
                    const allOptions = dropdown.querySelectorAll('.value-search-option, .show-all-option');
                    if (allOptions.length > 0) {
                        allOptions[0].dispatchEvent(new MouseEvent('mousedown'));
                    }
                    break;
                case 'Escape':
                    dropdown.style.display = 'none';
                    searchInput.blur();
                    break;
            }
        });

        // Handle option keyboard navigation
        dropdown.addEventListener('keydown', (e) => {
            const options = dropdown.querySelectorAll('.value-search-option, .show-all-option');
            const currentIndex = Array.from(options).findIndex(opt => opt === document.activeElement);

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = Math.min(currentIndex + 1, options.length - 1);
                    options[nextIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = Math.max(currentIndex - 1, 0);
                    options[prevIndex].focus();
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (currentIndex >= 0) {
                        options[currentIndex].dispatchEvent(new MouseEvent('mousedown'));
                    }
                    break;
                case 'Escape':
                    dropdown.style.display = 'none';
                    searchInput.focus();
                    break;
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // Hide dropdown on blur (with delay to allow for option clicks)
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) {
                    dropdown.style.display = 'none';
                }
            }, 150);
        });
    }

    // Initialize when DOM is ready
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupEventListeners);
        } else {
            setupEventListeners();
        }
    }

    // Update placeholder text
    function updatePlaceholder() {
        if (searchInput) {
            searchInput.placeholder = 'Select a key first, then search values...';
        }
    }

    // Public API
    window.ValueSearcher = {
        initialize,
        updatePlaceholder,
        getCurrentKey: () => currentKey,
        getSelectedValue: () => selectedValue,
        executeTagQuery
    };

    // Auto-initialize
    initialize();
    updatePlaceholder();

})();
