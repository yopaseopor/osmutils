/**
 * Value Search Implementation for OSM Tags
 */

function initValueSearch() {
    const searchInput = $('#value-search');
    const resultsContainer = $('#value-search-dropdown');

    if (!searchInput.length) return;

    let searchTimeout;
    let currentKey = null;
    let currentValue = null;
    let currentResults = [];

    // Initialize search input
    searchInput.on('input', function() {
        const query = $(this).val().trim();

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
            performValueSearch(query, currentKey);
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
        console.log('🔍 performValueSearch called with query:', query, 'key:', key);

        if (!window.taginfoData.loaded) {
            console.log('🔍 Taginfo data not loaded, initializing...');
            // Load taginfo data if not already loaded
            window.initTaginfoAPI().then(() => {
                console.log('🔍 Taginfo data loaded, retrying search');
                performValueSearch(query, key);
            });
            return;
        }

        console.log('🔍 Taginfo data loaded, searching...');
        const results = window.searchValues(query, key, 10);
        console.log('🔍 Value search results:', results.length, 'results');
        console.log('🔍 First few results:', results.slice(0, 3));

        currentResults = results;
        displayValueResults(results);

        // Trigger custom event for other components
        searchInput.trigger('valueSearchResults', [results, key]);
    }

    function displayValueResults(results) {
        resultsContainer.empty();

        if (results.length === 0) {
            resultsContainer.append('<div class="no-results">No values found</div>');
            resultsContainer.show();
            return;
        }

        results.forEach((result, index) => {
            const resultElement = $('<div>')
                .addClass('value-search-result')
                .data('result', result)
                .html(`
                    <div class="value-name">${escapeHtml(result.value)}</div>
                    ${result.key ? `<div class="value-key">for key: ${escapeHtml(result.key)}</div>` : ''}
                    ${result.tag ? `<div class="value-tag">${escapeHtml(result.tag)}</div>` : ''}
                    <div class="value-definition">${escapeHtml(result.definition || 'No description available')}</div>
                    <div class="value-count">${formatNumber(result.countAll || result.totalCount)} uses</div>
                `);

            resultsContainer.append(resultElement);
        });

        resultsContainer.show();
    }

    function selectValueResult(result) {
        console.log('🔍 selectValueResult called with:', result);
        console.log('🔍 result.key:', result.key, 'result.value:', result.value, 'result.keys:', result.keys);

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
            console.log('🔍 Just a value selected (no key)');
            searchInput.val(result.value);
            resultsContainer.empty().hide();
        }
    }

    function showExecuteButton(key, value) {
        const executeBtn = $('#execute-query-btn');
        const clearBtn = $('#clear-search-btn');

        console.log('🔍 Showing execute button for:', key + '=' + value);
        console.log('🔍 Buttons found - Execute:', executeBtn.length, 'Clear:', clearBtn.length);

        executeBtn
            .show()
            .prop('disabled', false)
            .text('Execute Query: ' + key + '=' + value);

        clearBtn.show();

        console.log('🔍 Buttons should be visible now');
    }

    function executeTagQuery(key, value) {
        // Get current map bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        // Get element types from UI (default to all)
        const elementTypes = getSelectedElementTypes();

        // Generate Overpass query
        const query = window.generateOverpassQuery(key, value, bbox, elementTypes);

        // Update button state
        $('#execute-query-btn').prop('disabled', true).text('Executing...');

        // Create overlay for results
        createTagOverlay(key, value, query);
    }

    function createTagOverlay(key, value, query) {
        // Create a unique overlay for this tag query
        const overlayId = `tag_${key}_${value}_${Date.now()}`;
        const overlayTitle = `${key}=${value}`;

        // Create vector source for the query
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML2(),
            loader: function (extent, resolution, projection) {
                // Show loading indicator
                if (window.loading) window.loading.show();

                const client = new XMLHttpRequest();
                client.open('POST', config.overpassApi());
                client.onloadend = function () {
                    if (window.loading) window.loading.hide();
                };
                client.onerror = function () {
                    console.error('[' + client.status + '] Error loading tag data.');
                    if (window.loading) window.loading.hide();
                };
                client.onload = function () {
                    if (client.status === 200) {
                        const xmlDoc = $.parseXML(client.responseText);
                        const xml = $(xmlDoc);
                        const remark = xml.find('remark');

                        if (remark.length !== 0) {
                            console.error('Error:', remark.text());
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
        overlaysGroup.getLayers().push(vectorLayer);

        // Trigger overlay update event to refresh the UI
        window.dispatchEvent(new Event('overlaysUpdated'));

        // Reset button state
        $('#execute-query-btn').prop('disabled', false).text('Query Executed');
        $('#clear-search-btn').show();
    }

    function findOrCreateTagOverlaysGroup() {
        // First, try to find existing Tag Queries group
        for (const layer of config.layers) {
            if (layer.get && layer.get('type') === 'overlay' && layer.get('title') === 'Tag Queries') {
                return layer;
            }
        }

        // Create new Tag Queries group if none exists
        const overlaysGroup = new ol.layer.Group({
            title: 'Tag Queries',
            type: 'overlay',
            layers: []
        });

        config.layers.push(overlaysGroup);
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
    console.log('DOM ready, initializing value search...');
    initValueSearch();
    console.log('Value search initialized');

    // Test if buttons exist
    console.log('Execute button found:', $('#execute-query-btn').length);
    console.log('Clear button found:', $('#clear-search-btn').length);
    console.log('Value search input found:', $('#value-search').length);
});

// Export for use in other modules
window.initValueSearch = initValueSearch;
