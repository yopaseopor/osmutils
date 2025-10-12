/**
 * Key Search Implementation for OSM Tags
 */

function initKeySearch() {
    console.log('🔑 initKeySearch called');
    const searchInput = $('#key-search');
    const resultsContainer = $('#key-search-dropdown');

    console.log('🔑 Key search input found:', searchInput.length);
    console.log('🔑 Key search dropdown found:', resultsContainer.length);

    if (!searchInput.length) {
        console.error('🔑 Key search input not found!');
        return;
    }

    if (!resultsContainer.length) {
        console.error('🔑 Key search dropdown not found!');
        return;
    }

    let searchTimeout;
    let currentKey = null;
    let currentResults = [];

    // Initialize search input with debugging
    searchInput.on('input', function() {
        const query = $(this).val().trim();
        console.log('🔑 Key search input:', query);

        // Store current key for potential generic query execution
        if (query) {
            currentKey = query;
            showKeyExecuteButton(query);

            // Synchronize with value search - set the key for value queries
            const valueSearchInput = $('#value-search');
            if (valueSearchInput.length) {
                console.log('🔗 Syncing key with value search:', query);
                valueSearchInput.data('selectedKey', query);
            }
        } else {
            $('#execute-key-query-btn').hide();
            $('#clear-key-search-btn').hide();

            // Clear the selected key from value search when key search is empty
            const valueSearchInput = $('#value-search');
            if (valueSearchInput.length) {
                valueSearchInput.removeData('selectedKey');
            }
        }

        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Clear results if query is empty
        if (!query) {
            resultsContainer.empty().hide();
            return;
        }

        // Debounce search
        searchTimeout = setTimeout(() => {
            console.log('🔑 Performing key search for:', query);
            performKeySearch(query);
        }, 300);
    });

    // Handle result selection
    resultsContainer.on('click', '.key-search-result', function() {
        const result = $(this).data('result');
        console.log('🔑 Clicked key result data:', result);
        if (result) {
            selectKeyResult(result);
        } else {
            console.error('🔑 No result data found on clicked key element');
        }
    });

    // Handle keyboard navigation
    searchInput.on('keydown', function(e) {
        const highlighted = resultsContainer.find('.highlighted');

        switch(e.keyCode) {
            case 40: // Down arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').next().addClass('highlighted');
                } else {
                    resultsContainer.find('.key-search-result:first').addClass('highlighted');
                }
                break;
            case 38: // Up arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').prev().addClass('highlighted');
                } else {
                    resultsContainer.find('.key-search-result:last').addClass('highlighted');
                }
                break;
            case 13: // Enter
                e.preventDefault();
                if (highlighted.length) {
                    const result = highlighted.data('result');
                    console.log('🔑 Enter key result data:', result);
                    if (result) {
                        selectKeyResult(result);
                    } else {
                        console.error('🔑 No result data found on highlighted key element');
                    }
                }
                break;
            case 27: // Escape
                resultsContainer.empty().hide();
                searchInput.blur();
                break;
        }
    });

    function performKeySearch(query) {
        console.log('🔑 performKeySearch called with:', query);
        console.log('🔑 taginfoData.loaded:', window.taginfoData.loaded);

        if (!window.taginfoData.loaded) {
            console.log('🔑 Taginfo data not loaded, initializing...');
            window.initTaginfoAPI().then(() => {
                console.log('🔑 Taginfo API initialized, retrying search');
                performKeySearch(query);
            }).catch(error => {
                console.error('🔑 Failed to initialize taginfo API:', error);
            });
            return;
        }

        console.log('🔑 Searching for keys with query:', query);
        console.log('🔑 Available keys in map:', window.taginfoData.keys.size);

        const results = window.searchKeys(query, 10);
        console.log('🔑 Key search results:', results);
        displayKeyResults(results, query);

        // Trigger custom event for other components
        searchInput.trigger('keySearchResults', [results]);
    }

    function displayKeyResults(results, query) {
        console.log('🔑 displayKeyResults called with:', results.length, 'results');
        resultsContainer.empty();

        if (results.length === 0) {
            console.log('🔑 No results to display');
            resultsContainer.append('<div class="no-results">No keys found</div>');
            resultsContainer.show();
            return;
        }

        console.log('🔑 Displaying results...');
        results.forEach((result, index) => {
            console.log('🔑 Result', index, ':', result.key);

            // Find which definition contains the search term to show the most relevant one
            let bestDefinition = result.definition_en || result.definition_ca || result.definition_es || result.definition || 'No description available';
            const queryLower = query.toLowerCase();

            if (result.definition_en && result.definition_en.toLowerCase().includes(queryLower)) {
                bestDefinition = result.definition_en;
            } else if (result.definition_ca && result.definition_ca.toLowerCase().includes(queryLower)) {
                bestDefinition = result.definition_ca;
            } else if (result.definition_es && result.definition_es.toLowerCase().includes(queryLower)) {
                bestDefinition = result.definition_es;
            }

            const resultElement = $('<div>')
                .addClass('key-search-result')
                .data('result', result)
                .html(`
                    <div class="key-name">${escapeHtml(result.key)}</div>
                    <div class="key-definition">${escapeHtml(bestDefinition)}</div>
                    <div class="key-count">${formatKeyCount(result.totalCount, bestDefinition)}</div>
                `);

            resultsContainer.append(resultElement);
        });

        console.log('🔑 Results displayed, showing container');
        resultsContainer.show();
    }

    function selectKeyResult(result) {
        console.log('🔑 selectKeyResult called with:', result);

        if (!result) {
            console.error('🔑 selectKeyResult: result is undefined or null');
            return;
        }

        if (result.key) {
            currentKey = result.key; // Store the selected key
            searchInput.val(result.key);
            resultsContainer.empty().hide();

            // Communicate with value search - set the selected key
            const valueSearchInput = $('#value-search');
            if (valueSearchInput.length) {
                console.log('🔗 Setting key for value search:', result.key);
                valueSearchInput.data('selectedKey', result.key);

                // Trigger event for value search to know a key was selected
                valueSearchInput.trigger('keySelected', [result]);
            }

            // Show execute and clear buttons for generic key queries
            showKeyExecuteButton(result.key);

            console.log('✅ Key selected:', result.key);
        } else {
            console.error('🔑 selectKeyResult: result missing key property:', result);
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    function formatKeyCount(count, definition) {
        console.log('🔑 formatKeyCount called with count:', count, 'definition:', definition);
        if (count > 0) {
            const formatted = `${formatNumber(count)} uses`;
            console.log('🔑 formatKeyCount returning:', formatted);
            return formatted;
        } else {
            // For keys with 0 uses, show a brief description instead
            const shortDesc = definition ? definition.substring(0, 60) + (definition.length > 60 ? '...' : '') : 'No description available';
            console.log('🔑 formatKeyCount returning description:', shortDesc);
            return shortDesc;
        }
    }

    // Handle execute button click for generic key queries
    $('#execute-key-query-btn').on('click', function() {
        if (currentKey) {
            executeGenericKeyQuery(currentKey);
            $(this).prop('disabled', true).text('Executing...');
        }
    });

    // Handle clear button click
    $('#clear-key-search-btn').on('click', function() {
        console.log('🧹 Key search clear button clicked');

        // Clear UI state
        currentKey = null;
        currentResults = [];

        searchInput.val('');
        resultsContainer.empty().hide();

        $('#execute-key-query-btn').hide().prop('disabled', false).text('Execute Key Query');
        $(this).hide();

        console.log('✅ Key search cleared');
    });

    function showKeyExecuteButton(key) {
        const executeBtn = $('#execute-key-query-btn');
        const clearBtn = $('#clear-key-search-btn');

        executeBtn
            .show()
            .prop('disabled', false)
            .text('Execute Key Query: ' + key);

        clearBtn.show();
    }

    function executeGenericKeyQuery(key) {
        console.log('🚀 executeGenericKeyQuery called with:', key);

        if (!window.map) {
            console.log('🚀 Map not ready, retrying in 500ms');
            setTimeout(() => executeGenericKeyQuery(key), 500);
            return;
        }

        if (typeof window.map.getView !== 'function') {
            console.log('🚀 Map view not ready, retrying in 500ms');
            setTimeout(() => executeGenericKeyQuery(key), 500);
            return;
        }

        console.log('🚀 Map is ready, getting bbox');

        // Get current map bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        console.log('🚀 Map extent:', extent);
        console.log('🚀 Map projection:', view.getProjection());
        console.log('🚀 Map bbox:', bbox);
        console.log('🚀 Bbox formatted:', `${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}`);

        // Validate bbox coordinates
        if (bbox.some(coord => isNaN(coord) || Math.abs(coord) > 180)) {
            console.error('🚀 Invalid bbox coordinates:', bbox);
            $('#execute-key-query-btn').prop('disabled', false).text('Invalid Location');
            return;
        }

        // Get element types from UI (default to all)
        const elementTypes = ['node', 'way', 'relation']; // For generic key queries, search all types
        console.log('🚀 Element types:', elementTypes);

        // Generate generic key query (no specific value)
        const query = window.generateOverpassQuery(key, null, bbox, elementTypes);
        console.log('🚀 Generated generic key query:', query);

        // Check if query generation failed
        if (!query) {
            console.error('🚀 Failed to generate query - check key and bbox');
            $('#execute-key-query-btn').prop('disabled', false).text('Query Failed');
            return;
        }

        // Update button state
        $('#execute-key-query-btn').prop('disabled', true).text('Executing...');
        console.log('🚀 Button state updated to executing');

        // Create overlay for results
        createGenericKeyOverlay(key, query);
    }

    function createGenericKeyOverlay(key, query) {
        console.log('🎯 createGenericKeyOverlay called with:', key);
        console.log('🎯 Query:', query);

        // Generate unique color for this key
        const uniqueColor = generateUniqueColor(key, 'generic');
        console.log('🎯 Generated unique color:', uniqueColor);

        // Create a unique overlay for this generic key query
        const overlayId = `key_${key}_${Date.now()}`;
        const overlayTitle = `Key: ${key}`;

        console.log('🎯 Creating generic key overlay:', overlayId, overlayTitle);

        // Add to legend before creating the overlay
        window.tagQueryLegend.addQuery(overlayId, key, null, uniqueColor, 0, true);

        // Create vector source for the query with retry mechanism
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML2(),
            loader: function (extent, resolution, projection) {
                console.log('🎯 Vector loader called');
                // Show loading indicator
                if (window.loading) window.loading.show();

                makeRequestWithRetry.call(this, query, 3, 2000); // 3 retries, 2 second delay

                function makeRequestWithRetry(queryData, maxRetries, delayMs) {
                    const client = new XMLHttpRequest();
                    client.open('POST', config.overpassApi());
                    client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
                    client.timeout = 15000; // 15 second timeout for retries
                    console.log('🎯 Sending request to:', config.overpassApi());
                    console.log('🎯 Request data:', queryData);

                    client.ontimeout = function () {
                        console.error('🎯 Request timed out after 15 seconds');
                        if (maxRetries > 0) {
                            console.log('🎯 Retrying request in', delayMs, 'ms...');
                            setTimeout(() => makeRequestWithRetry.call(this, queryData, maxRetries - 1, delayMs), delayMs);
                        } else {
                            if (window.loading) window.loading.hide();
                            $('#execute-key-query-btn').prop('disabled', false).text('Query Timeout');
                        }
                    }.bind(this);

                    client.onloadend = function () {
                        console.log('🎯 Request ended, status:', client.status);
                        if (window.loading) window.loading.hide();
                    }.bind(this);

                    client.onerror = function () {
                        console.error('🎯 Error loading tag data:', client.status, client.statusText);
                        if (maxRetries > 0) {
                            console.log('🎯 Retrying request in', delayMs, 'ms...');
                            setTimeout(() => makeRequestWithRetry.call(this, queryData, maxRetries - 1, delayMs), delayMs);
                        } else {
                            $('#execute-key-query-btn').prop('disabled', false).text('Query Failed');
                        }
                    }.bind(this);

                    client.onload = function () {
                        console.log('🎯 Request loaded, status:', client.status);
                        console.log('🎯 Response text length:', client.responseText.length);
                        if (client.status === 200) {
                            try {
                                const xmlDoc = $.parseXML(client.responseText);
                                const xml = $(xmlDoc);
                                const remark = xml.find('remark');

                                console.log('🎯 Parsed XML, looking for remark elements:', remark.length);

                                if (remark.length !== 0) {
                                    console.error('🎯 Overpass error:', remark.text());
                                    $('<div>').html(remark.text()).dialog({
                                        modal: true,
                                        title: 'Error',
                                        close: function () {
                                            $(this).dialog('destroy');
                                        }
                                    });
                                    $('#execute-key-query-btn').prop('disabled', false).text('Query Error');
                                } else {
                                    console.log('🎯 No errors found, parsing features...');
                                    const features = new ol.format.OSMXML2().readFeatures(xmlDoc, {
                                        featureProjection: window.map.getView().getProjection()
                                    });

                                    console.log('🎯 Features parsed successfully:', features.length);
                                    console.log('🎯 Sample feature:', features[0] ? {
                                        type: features[0].getGeometry().getType(),
                                        id: features[0].getId()
                                    } : 'No features');

                                    this.addFeatures(features);
                                    console.log('🎯 Features added to source');

                                    // Update legend with actual count
                                    window.tagQueryLegend.updateCount(overlayId, features.length);

                                    // Update overlay summary if function exists
                                    if (window.updateOverlaySummary) {
                                        window.updateOverlaySummary();
                                    }

                                    // Trigger event for overlay management
                                    window.dispatchEvent(new CustomEvent('tagOverlayLoaded', {
                                        detail: { key, value: null, overlayId, featureCount: features.length }
                                    }));

                                    // Trigger the overlay features loaded event
                                    window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));

                                    $('#execute-key-query-btn').prop('disabled', false).text('Query Executed');
                                    $('#clear-key-search-btn').show();

                                    // Force a map render update to ensure visibility
                                    if (window.map) {
                                        console.log('🔍 Forcing map render update');
                                        window.map.render();
                                    }
                                }
                            } catch (parseError) {
                                console.error('🎯 Error parsing XML response:', parseError);
                                console.error('🎯 Response text preview:', client.responseText.substring(0, 500));
                                $('#execute-key-query-btn').prop('disabled', false).text('Parse Error');
                            }
                        } else {
                            console.error('🎯 Request failed with status:', client.status);
                            console.error('🎯 Response text:', client.responseText);
                            $('#execute-key-query-btn').prop('disabled', false).text('Request Failed');
                        }
                    }.bind(this);
                    client.send(queryData);
                }
            },
            strategy: ol.loadingstrategy.bbox
        });

        // Create vector layer
        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            title: overlayTitle,
            id: overlayId,
            iconSrc: 'src/img/icones_web/tag_icon.png',
            iconStyle: 'filter: hue-rotate(120deg);',
            visible: true,
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 4,
                    fill: new ol.style.Fill({
                        color: [...uniqueColor, 0.7]
                    }),
                    stroke: new ol.style.Stroke({
                        color: [...uniqueColor, 1],
                        width: 1
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: [...uniqueColor, 1],
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: [...uniqueColor, 0.3]
                })
            })
        });

        // Set additional properties for overlay system integration
        vectorLayer.set('group', 'Tag Queries');
        vectorLayer.set('type', 'tag-query');

        // Add to overlays group if it exists, otherwise create one
        const overlaysGroup = findOrCreateTagOverlaysGroup();
        console.log('🔍 Adding vector layer to group');
        console.log('🔍 Overlays group title:', overlaysGroup.get('title'));
        console.log('🔍 Overlays group type:', overlaysGroup.get('type'));

        // Add the layer to the group - the group already has layers array in constructor
        const layersCollection = overlaysGroup.getLayers();

        // Check if this overlay already exists in the group
        const existingLayer = layersCollection.getArray().find(layer =>
            layer.get && layer.get('id') === overlayId
        );

        if (existingLayer) {
            console.log('🔍 Overlay already exists in group, skipping duplicate');
            return;
        }

        layersCollection.push(vectorLayer);
        console.log('🔍 Vector layer added to group, total layers:', layersCollection.getLength());

        // If the map already exists, we need to add the layer group to it
        if (window.map) {
            console.log('🔍 Adding layer group to existing map');
            console.log('🔍 Current map layers before:', window.map.getLayers().getLength());
            // Check if the layer group is already in the map
            const existingLayers = window.map.getLayers().getArray();
            const existingTagGroups = existingLayers.filter(layer =>
                layer.get && layer.get('title') === 'Tag Queries' && layer.get('type') === 'tag-query'
            );

            console.log('🔍 Found existing Tag Queries groups:', existingTagGroups.length);

            if (existingTagGroups.length > 1) {
                console.log('🔍 Multiple Tag Queries groups found, removing extras');
                // Remove extra groups
                existingTagGroups.slice(1).forEach(group => {
                    window.map.removeLayer(group);
                    console.log('🔍 Removed extra Tag Queries group');
                });
            }

            const groupExists = existingLayers.some(layer => layer === overlaysGroup);

            console.log('🔍 Group exists in map:', groupExists);

            if (!groupExists) {
                console.log('🔍 Layer group not in map, adding it');
                window.map.addLayer(overlaysGroup);
                console.log('🔍 Layer group added, total map layers now:', window.map.getLayers().getLength());

                // Verify the group was actually added
                const verifyLayers = window.map.getLayers().getArray();
                const verifyGroupExists = verifyLayers.some(layer => layer === overlaysGroup);
                console.log('🔍 Verification - Group exists in map after add:', verifyGroupExists);
            } else {
                console.log('🔍 Layer group already exists in map');
            }
        } else {
            console.warn('🔍 Window.map is not available');
        }

        // Make sure the overlay group is visible
        overlaysGroup.setVisible(true);
        vectorLayer.setVisible(true);
        console.log('🔍 Overlay group visible:', overlaysGroup.getVisible());
        console.log('🔍 Vector layer visible:', vectorLayer.getVisible());

        console.log('🔍 Vector layer added, group layers count:', overlaysGroup.getLayers().getLength());

        // Trigger overlay update event to refresh the UI
        window.dispatchEvent(new Event('overlaysUpdated'));

        // Also trigger a more specific event for the overlay system
        window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));

        // Reset button state
        $('#execute-key-query-btn').prop('disabled', false).text('Query Executed');
        $('#clear-key-search-btn').show();

        // Force a map render update to ensure visibility
        if (window.map) {
            console.log('🔍 Forcing map render update');
            window.map.render();
        }
    }

    function generateUniqueColor(key, value) {
        // Create a simple hash from the key-value combination
        const combined = `${key}:${value || 'generic'}`;
        let hash = 0;

        for (let i = 0; i < combined.length; i++) {
            const char = combined.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }

        // Convert hash to RGB values
        const r = Math.abs(hash) % 255;
        const g = Math.abs(hash >> 8) % 255;
        const b = Math.abs(hash >> 16) % 255;

        // Ensure good contrast and visibility by adjusting values
        const adjustedR = Math.max(50, Math.min(200, r));
        const adjustedG = Math.max(50, Math.min(200, g));
        const adjustedB = Math.max(50, Math.min(200, b));

        return [adjustedR, adjustedG, adjustedB];
    }

    function findOrCreateTagOverlaysGroup() {
        console.log('🔍 Looking for Tag Queries group');

        // First, try to find existing Tag Queries group
        console.log('🔍 Checking config.layers for Tag Queries group');
        console.log('🔍 Total layers in config:', config.layers.length);

        for (let i = 0; i < config.layers.length; i++) {
            const layer = config.layers[i];
            console.log('🔍 Checking layer', i, ':', layer.get ? layer.get('title') : 'no title', layer.get ? layer.get('type') : 'no type');

            if (layer.get && layer.get('type') === 'tag-query' && layer.get('title') === 'Tag Queries') {
                console.log('🔍 Found existing Tag Queries group at index', i);
                console.log('🔍 Group layers count:', layer.getLayers().getLength());

                // If the map already exists, make sure the layer group is in it
                if (window.map) {
                    console.log('🔍 Checking if layer group is in map');
                    const existingLayers = window.map.getLayers().getArray();
                    const groupExists = existingLayers.some(existingLayer => existingLayer === layer);
                    console.log('🔍 Group exists in map:', groupExists);

                    if (!groupExists) {
                        console.log('🔍 Layer group not in map, adding it');
                        window.map.addLayer(layer);
                    }
                }

                return layer;
            }
        }

        // Create new Tag Queries group if none exists
        console.log('🔍 Creating new Tag Queries group');
        const overlaysGroup = new ol.layer.Group({
            title: 'Tag Queries',
            type: 'tag-query',
            layers: []
        });

        // Set additional properties to match the expected overlay structure
        overlaysGroup.set('originalTitle', 'Tag Queries');
        overlaysGroup.set('id', 'tag-queries-group');

        config.layers.push(overlaysGroup);

        // If the map already exists, add the new layer group to it
        if (window.map) {
            console.log('🔍 Adding new layer group to existing map');
            window.map.addLayer(overlaysGroup);
        }

        console.log('🔍 Added Tag Queries group to config.layers');
        return overlaysGroup;
    }
}

// Initialize when DOM is ready
$(document).ready(function() {
    console.log('🔑 DOM ready, initializing key search');
    initKeySearch();
});

// Export for use in other modules
window.initKeySearch = initKeySearch;
