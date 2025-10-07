/**
 * Value Search Implementation for OSM Tags
 */

function initValueSearch() {
    console.log('🔍 initValueSearch called');
    const searchInput = $('#value-search');
    const resultsContainer = $('#value-search-dropdown');

    console.log('🔍 Value search input found:', searchInput.length);
    console.log('🔍 Value search dropdown found:', resultsContainer.length);

    if (!searchInput.length) {
        console.error('🔍 Value search input not found!');
        return;
    }

    if (!resultsContainer.length) {
        console.error('🔍 Value search dropdown not found!');
        return;
    }

    let searchTimeout;
    let currentKey = null;
    let currentValue = null;
    let currentResults = [];

    // Initialize search input
    searchInput.on('input', function() {
        const query = $(this).val().trim();
        console.log('🔍 Value search input:', query);

        // Get the selected key from key search
        const selectedKey = $(this).data('selectedKey');
        console.log('🔍 Selected key:', selectedKey);

        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Clear results if query is empty
        if (!query) {
            resultsContainer.empty().hide();
            return;
        }

        // Debounce search - use selected key if available
        searchTimeout = setTimeout(() => {
            console.log('🔍 Performing value search for:', query, 'with key:', selectedKey);
            performValueSearch(query, selectedKey);
        }, 300);
    });

    // Handle result selection
    resultsContainer.on('click', '.value-search-result', function() {
        const result = $(this).data('result');
        selectValueResult(result);
    });

    // Handle execute button click
    $('#execute-query-btn').on('click', function() {
        if (currentKey && currentValue) {
            executeTagQuery(currentKey, currentValue);
            $(this).prop('disabled', true).text('Executing...');
        }
    });

    // Handle clear button click
    $('#clear-search-btn').on('click', function() {
        console.log('🧹 Clear button clicked');

        currentKey = null;
        currentValue = null;
        currentResults = [];

        searchInput.val('');
        resultsContainer.empty().hide();

        $('#execute-query-btn').hide().prop('disabled', false).text('Execute Query');
        $(this).hide();

        // Clear the selected key from value search
        searchInput.removeData('selectedKey');

        console.log('✅ Search cleared');
    });

    searchInput.on('keydown', function(e) {
        const highlighted = resultsContainer.find('.highlighted');

        switch(e.keyCode) {
            case 40: // Down arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').next().addClass('highlighted');
                } else {
                    resultsContainer.find('.value-search-result:first').addClass('highlighted');
                }
                break;
            case 38: // Up arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').prev().addClass('highlighted');
                } else {
                    resultsContainer.find('.value-search-result:last').addClass('highlighted');
                }
                break;
            case 13: // Enter
                e.preventDefault();
                if (highlighted.length) {
                    const result = highlighted.data('result');
                    selectValueResult(result);
                } else if (currentResults.length > 0) {
                    // Select first result if none highlighted
                    selectValueResult(currentResults[0]);
                }
                break;
            case 27: // Escape
                resultsContainer.empty().hide();
                searchInput.blur();
                break;
        }
    });

    function performValueSearch(query, key) {
        if (!window.taginfoData.loaded) {
            window.initTaginfoAPI().then(() => {
                performValueSearch(query, key);
            });
            return;
        }

        const results = window.searchValues(query, key, 10);
        currentResults = results;
        displayValueResults(results);

        // Trigger custom event for other components
        searchInput.trigger('valueSearchResults', [results, key]);
    }

    function displayValueResults(results) {
        console.log('🔍 displayValueResults called with:', results.length, 'results');
        resultsContainer.empty();

        if (results.length === 0) {
            console.log('🔍 No results to display');
            resultsContainer.append('<div class="no-results">No values found</div>');
            resultsContainer.show();
            return;
        }

        console.log('🔍 Displaying results...');
        results.forEach((result, index) => {
            console.log('🔍 Result', index, ':', result.value || result.key);
            const resultElement = $('<div>')
                .addClass('value-search-result')
                .data('result', result)
                .html(`
                    <div class="value-name">${escapeHtml(result.value || result.key)}</div>
                    ${result.key ? `<div class="value-key">for key: ${escapeHtml(result.key)}</div>` : ''}
                    ${result.tag ? `<div class="value-tag">${escapeHtml(result.tag)}</div>` : ''}
                    <div class="value-definition">${escapeHtml(result.definition || 'No description available')}</div>
                    <div class="value-count">${formatNumber(result.countAll || result.totalCount)} uses</div>
                `);

            resultsContainer.append(resultElement);
        });

        console.log('🔍 Results displayed, showing container');
        resultsContainer.show();
    }

    function selectValueResult(result) {
        if (result.key && result.value) {
            // Key-value pair selected (from specific key search)
            currentKey = result.key;
            currentValue = result.value;
            searchInput.val(result.value);
            resultsContainer.empty().hide();

            showExecuteButton(currentKey, currentValue);
        } else if (result.keys && result.keys.length > 0 && result.value) {
            // Value with multiple possible keys - use the first one
            currentKey = result.keys[0];
            currentValue = result.value;
            searchInput.val(result.value);
            resultsContainer.empty().hide();

            showExecuteButton(currentKey, currentValue);
        } else {
            // Just a value selected (no specific key)
            searchInput.val(result.value);
            resultsContainer.empty().hide();
        }
    }

    function showExecuteButton(key, value) {
        const executeBtn = $('#execute-query-btn');
        const clearBtn = $('#clear-search-btn');

        executeBtn
            .show()
            .prop('disabled', false)
            .text('Execute Query: ' + key + '=' + value);

        clearBtn.show();
    }

    function executeTagQuery(key, value) {
        console.log('🚀 executeTagQuery called with:', key, value);

        // Check if map is ready with retry mechanism
        if (!window.map) {
            console.log('🚀 Map not ready, retrying in 500ms');
            setTimeout(() => executeTagQuery(key, value), 500);
            return;
        }

        if (typeof window.map.getView !== 'function') {
            console.log('🚀 Map view not ready, retrying in 500ms');
            setTimeout(() => executeTagQuery(key, value), 500);
            return;
        }

        console.log('🚀 Map is ready, getting bbox');

        // Get current map bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        console.log('🚀 Map bbox:', bbox);

        // Get element types from UI (default to all)
        const elementTypes = getSelectedElementTypes();
        console.log('🚀 Element types:', elementTypes);

        // Generate Overpass query
        const query = window.generateOverpassQuery(key, value, bbox, elementTypes);
        console.log('🚀 Generated query:', query);

        // Update button state
        $('#execute-query-btn').prop('disabled', true).text('Executing...');

        // Create overlay for results
        createTagOverlay(key, value, query);
    }

    function createTagOverlay(key, value, query) {
        console.log('🎯 createTagOverlay called with:', key, value);
        console.log('🎯 Query:', query);

        // Create a unique overlay for this tag query
        const overlayId = `tag_${key}_${value}_${Date.now()}`;
        const overlayTitle = `${key}=${value}`;

        console.log('🎯 Creating overlay:', overlayId, overlayTitle);

        // Create vector source for the query
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML2(),
            loader: function (extent, resolution, projection) {
                console.log('🎯 Vector loader called');
                // Show loading indicator
                if (window.loading) window.loading.show();

                const client = new XMLHttpRequest();
                client.open('POST', config.overpassApi());
                client.onloadend = function () {
                    console.log('🎯 Request ended');
                    if (window.loading) window.loading.hide();
                };
                client.onerror = function () {
                    console.error('🎯 Error loading tag data:', client.status);
                    if (window.loading) window.loading.hide();
                };
                client.onload = function () {
                    console.log('🎯 Request loaded, status:', client.status);
                    if (client.status === 200) {
                        const xmlDoc = $.parseXML(client.responseText);
                        const xml = $(xmlDoc);
                        const remark = xml.find('remark');

                        if (remark.length !== 0) {
                            console.error('🎯 Overpass error:', remark.text());
                            $('<div>').html(remark.text()).dialog({
                                modal: true,
                                title: 'Error',
                                close: function () {
                                    $(this).dialog('destroy');
                                }
                            });
                        } else {
                            const features = new ol.format.OSMXML2().readFeatures(xmlDoc, {
                                featureProjection: window.map.getView().getProjection()
                            });

                            console.log('🎯 Features loaded:', features.length);
                            this.addFeatures(features);

                            // Update overlay summary if function exists
                            if (window.updateOverlaySummary) {
                                window.updateOverlaySummary();
                            }

                            // Trigger event for overlay management
                            window.dispatchEvent(new CustomEvent('tagOverlayLoaded', {
                                detail: { key, value, overlayId, featureCount: features.length }
                            }));
                        }
                    } else {
                        client.onerror.call(this);
                    }
                };
                client.send(query);
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
                        color: [255, 0, 255, 0.7]
                    }),
                    stroke: new ol.style.Stroke({
                        color: [255, 0, 255, 1],
                        width: 1
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: [255, 0, 255, 1],
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: [255, 0, 255, 0.3]
                })
            })
        });

        // Add to overlays group if it exists, otherwise create one
        const overlaysGroup = findOrCreateTagOverlaysGroup();
        console.log('🔍 Adding vector layer to group');
        overlaysGroup.getLayers().push(vectorLayer);

        // Make sure the overlay group is visible
        overlaysGroup.setVisible(true);
        vectorLayer.setVisible(true);

        console.log('🔍 Vector layer added, group layers count:', overlaysGroup.getLayers().getLength());

        // Trigger overlay update event to refresh the UI
        window.dispatchEvent(new Event('overlaysUpdated'));

        // Reset button state
        $('#execute-query-btn').prop('disabled', false).text('Query Executed');
        $('#clear-search-btn').show();
    }

    function findOrCreateTagOverlaysGroup() {
        console.log('🔍 Looking for Tag Queries group');
        // First, try to find existing Tag Queries group
        for (const layer of config.layers) {
            if (layer.get && layer.get('type') === 'overlay' && layer.get('title') === 'Tag Queries') {
                console.log('🔍 Found existing Tag Queries group');
                return layer;
            }
        }

        // Create new Tag Queries group if none exists
        console.log('🔍 Creating new Tag Queries group');
        const overlaysGroup = new ol.layer.Group({
            title: 'Tag Queries',
            type: 'overlay',
            layers: []
        });

        config.layers.push(overlaysGroup);
        console.log('🔍 Added Tag Queries group to config.layers');
        return overlaysGroup;
    }

    function getSelectedElementTypes() {
        // Get selected element types from checkboxes or default to all
        const elementTypesCheckboxes = $('.element-type-checkbox:checked');
        if (elementTypesCheckboxes.length > 0) {
            return elementTypesCheckboxes.map((i, el) => $(el).val()).get();
        }
        return ['node', 'way', 'relation'];
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

    // Listen for key selection from key search
    searchInput.on('keySelected', function(e, keyResult) {
        console.log('🔗 Key selected event received:', keyResult);
        currentKey = keyResult.key;
        // Clear value search and results
        searchInput.val('');
        resultsContainer.empty().hide();
    });

    // Hide results when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#value-search-container').length) {
            resultsContainer.empty().hide();
        }
    });

    // Expose function for external use
    window.searchValuesForKey = function(key, query) {
        currentKey = key;
        performValueSearch(query, key);
    };
}
// Initialize when DOM is ready
$(document).ready(function() {
    // Wait for map to be ready
    const waitForMap = () => {
        if (window.map && typeof window.map.getView === 'function') {
            initValueSearch();
        } else {
            setTimeout(waitForMap, 100);
        }
    };

    waitForMap();
});

// Export for use in other modules
window.initValueSearch = initValueSearch;
