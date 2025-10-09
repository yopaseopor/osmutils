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
        let result = $(this).data('result');

        // If jQuery data didn't work, try the attribute
        if (!result) {
            const attrData = $(this).attr('data-result');
            if (attrData) {
                try {
                    result = JSON.parse(attrData);
                } catch (e) {
                    console.error('🔍 Failed to parse result attribute:', e);
                }
            }
        }

        console.log('🔍 Clicked result data:', result);
        if (result) {
            selectValueResult(result);
        } else {
            console.error('🔍 No result data found on clicked element');
            console.log('🔍 Element HTML:', $(this).html());
            console.log('🔍 Element data:', $(this).data());
            console.log('🔍 Element attributes:', $(this).attr());
        }
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
        console.log('🧹 Current map layers before clear:', window.map ? window.map.getLayers().getLength() : 'No map');
        console.log('🧹 Current key:', currentKey);
        console.log('🧹 Current value:', currentValue);

        // Clear map layers first
        clearMapLayers();

        // Clear UI state
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
        console.log('🧹 Current map layers after clear:', window.map ? window.map.getLayers().getLength() : 'No map');
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
                    console.log('🔍 Enter key value result data:', result);
                    if (result) {
                        selectValueResult(result);
                    } else {
                        console.error('🔍 No result data found on highlighted value element');
                    }
                } else if (currentResults.length > 0) {
                    // Select first result if none highlighted
                    console.log('🔍 Enter key selecting first result:', currentResults[0]);
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
        console.log('🔍 performValueSearch called with:', query, 'key:', key);
        console.log('🔍 taginfoData.loaded:', window.taginfoData.loaded);

        if (!window.taginfoData.loaded) {
            console.log('🔍 Taginfo data not loaded, initializing...');
            window.initTaginfoAPI().then(() => {
                console.log('🔍 Taginfo API initialized, retrying search');
                performValueSearch(query, key);
            }).catch(error => {
                console.error('🔍 Failed to initialize taginfo API:', error);
            });
            return;
        }

        console.log('🔍 Available values count:', window.taginfoData.values.size);
        console.log('🔍 Available keys count:', window.taginfoData.keys.size);

        const results = window.searchValues(query, key, 10);
        console.log('🔍 Value search results:', results);
        console.log('🔍 Results length:', results.length);

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
            console.log('🔍 Result', index, ':', result);
            console.log('🔍 Result definition:', result.definition);
            console.log('🔍 Result definition_en:', result.definition_en);
            console.log('🔍 Result countAll:', result.countAll);
            console.log('🔍 Result totalCount:', result.totalCount);
            console.log('🔍 Result keys:', result.keys);
            console.log('🔍 Result value:', result.value);

            const countToUse = result.countAll || result.totalCount || 0;
            const definitionToUse = result.definition_en || result.definition;
            console.log('🔍 Count to use for formatting:', countToUse);
            console.log('🔍 Definition to use for formatting:', definitionToUse);

            // Debug the HTML structure
            const html = `
                <div class="value-name">${escapeHtml(result.value || result.key || 'No value')}</div>
                ${result.key ? `<div class="value-key">for key: ${escapeHtml(result.key)}</div>` : ''}
                ${result.tag ? `<div class="value-tag">${escapeHtml(result.tag)}</div>` : ''}
                <div class="value-definition">${escapeHtml(definitionToUse || 'No description available')}</div>
                <div class="value-count">${formatValueCount(countToUse, definitionToUse)}</div>
            `;
            console.log('🔍 Generated HTML:', html);

            const resultElement = $('<div>')
                .addClass('value-search-result')
                .attr('data-result', JSON.stringify(result))  // Store as attribute as well
                .data('result', result)
                .html(html);

            // Debug: check if data was stored correctly
            const storedData = resultElement.data('result');
            const attrData = resultElement.attr('data-result');
            console.log('🔍 Stored result data check:', storedData);
            console.log('🔍 Attribute data check:', attrData);

            resultsContainer.append(resultElement);
        });

        console.log('🔍 Results displayed, showing container');
        resultsContainer.show();
    }

    function selectValueResult(result) {
        console.log('🔍 selectValueResult called with:', result);

        if (!result) {
            console.error('🔍 selectValueResult: result is undefined or null');
            return;
        }

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
        } else if (result.value) {
            // Just a value selected (no specific key)
            currentKey = null;
            currentValue = result.value;
            searchInput.val(result.value);
            resultsContainer.empty().hide();
        } else {
            console.error('🔍 selectValueResult: result missing required properties:', result);
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

    function clearMapLayers() {
        console.log('🗑️ clearMapLayers CALLED');
        console.log('🗑️ Map exists:', !!window.map);

        if (!window.map) {
            console.log('🗑️ No map available');
            return;
        }

        console.log('🗑️ Map layers before clear:', window.map.getLayers().getLength());

        // Find the Tag Queries group
        const tagQueriesGroup = findOrCreateTagOverlaysGroup();
        if (!tagQueriesGroup) {
            console.log('🗑️ No Tag Queries group found');
            return;
        }

        console.log('🗑️ Found Tag Queries group:', tagQueriesGroup.get('title'));
        console.log('🗑️ Group layers count:', tagQueriesGroup.getLayers().getLength());

        // Check if group is in map
        const mapLayers = window.map.getLayers();
        const existingLayers = mapLayers.getArray();
        console.log('🗑️ Map layers array length:', existingLayers.length);

        // Log all layers in the map
        console.log('🗑️ All layers in map:');
        existingLayers.forEach((layer, index) => {
            console.log(`  Layer ${index}:`, {
                title: layer.get ? layer.get('title') : 'no title',
                type: layer.get ? layer.get('type') : 'no type',
                id: layer.get ? layer.get('id') : 'no id',
                visible: layer.getVisible ? layer.getVisible() : 'no visible'
            });
        });

        const groupInMap = existingLayers.some(layer => layer === tagQueriesGroup);
        console.log('🗑️ Group in map (=== comparison):', groupInMap);

        // Also check if group is in map by title (in case object references don't match)
        const groupByTitle = existingLayers.find(layer =>
            layer.get && layer.get('title') === 'Tag Queries' && layer.get('type') === 'overlay'
        );
        console.log('🗑️ Group in map (by title):', !!groupByTitle);
        if (groupByTitle) {
            console.log('🗑️ Found group by title, using it instead');
        }

        // Try to find and remove by title if direct comparison fails
        if (!groupInMap && !groupByTitle) {
            console.log('🗑️ Group not in map, nothing to remove');
            return;
        }

        // Use either the original group or the title-based group for removal
        const groupToRemove = groupInMap ? tagQueriesGroup : groupByTitle;
        console.log('🗑️ Using group for removal:', groupToRemove.get ? groupToRemove.get('title') : 'no title');

        // Try a completely different approach - hide and clear instead of remove
        console.log('🗑️ Using alternative approach: hide and clear...');

        // Find all Tag Queries layers and hide them
        const allLayers = window.map.getLayers().getArray();
        const tagQueryLayers = allLayers.filter(layer =>
            layer.get && (
                layer.get('title') === 'Tag Queries' ||
                layer.get('title')?.includes('Tag Queries') ||
                layer.get('group') === 'Tag Queries'
            )
        );

        console.log('🗑️ Found', tagQueryLayers.length, 'Tag Queries layers to hide');

        // Hide all Tag Queries layers
        tagQueryLayers.forEach((layer, index) => {
            console.log('🗑️ Hiding layer', index, ':', layer.get ? layer.get('title') : 'no title');
            layer.setVisible(false);

            // Also clear the vector source if it's a vector layer
            if (layer instanceof ol.layer.Vector) {
                const source = layer.getSource();
                if (source && typeof source.clear === 'function') {
                    console.log('🗑️ Clearing source for hidden layer');
                    source.clear();
                }
            }
        });

        // Also try to find and hide any vector layers that might contain query results
        const vectorLayers = allLayers.filter(layer =>
            layer instanceof ol.layer.Vector && layer.getSource
        );

        console.log('🗑️ Found', vectorLayers.length, 'vector layers to check');

        vectorLayers.forEach((layer, index) => {
            const source = layer.getSource();
            if (source && source.getFeatures) {
                const featureCount = source.getFeatures().length;
                console.log('🗑️ Vector layer', index, 'has', featureCount, 'features');

                // If this layer has features and might be from our queries, clear it
                if (featureCount > 0 && (
                    layer.get('title')?.includes('=') ||
                    layer.get('group') === 'Tag Queries' ||
                    layer.get('id')?.startsWith('tag_')
                )) {
                    console.log('🗑️ Clearing query result layer:', layer.get ? layer.get('title') : 'no title');
                    source.clear();
                    layer.setVisible(false);
                }
            }
        });

        console.log('🗑️ Map layers after hiding and clearing:', window.map.getLayers().getLength());

        // Force immediate map re-render
        if (window.map) {
            console.log('🗑️ Forcing immediate map render after hiding...');
            window.map.renderSync();
        }

        // Don't trigger overlay update event immediately to prevent re-integration
        // The overlay system will update itself if needed
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

        console.log('🚀 Map extent:', extent);
        console.log('🚀 Map projection:', view.getProjection());
        console.log('🚀 Map bbox:', bbox);
        console.log('🚀 Bbox formatted:', `${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}`);

        // Validate bbox coordinates
        if (bbox.some(coord => isNaN(coord) || Math.abs(coord) > 180)) {
            console.error('🚀 Invalid bbox coordinates:', bbox);
            $('#execute-query-btn').prop('disabled', false).text('Invalid Location');
            return;
        }

        // Get element types from UI (default to all)
        const elementTypes = getSelectedElementTypes();
        console.log('🚀 Element types:', elementTypes);

        // Debug: Check current key and value
        console.log('🚀 Current key:', currentKey, 'length:', currentKey ? currentKey.length : 'null');
        console.log('🚀 Current value:', value, 'length:', value ? value.length : 'null');
        console.log('🚀 Parameters - key:', key, 'value:', value);

        // Generate Overpass query
        const query = window.generateOverpassQuery(key, value, bbox, elementTypes);
        console.log('🚀 Generated query:', query);

        // Check if query generation failed
        if (!query) {
            console.error('🚀 Failed to generate query - check key, value, and bbox');
            $('#execute-query-btn').prop('disabled', false).text('Query Failed');
            return;
        }

        // Update button state
        $('#execute-query-btn').prop('disabled', true).text('Executing...');
        console.log('🚀 Button state updated to executing');

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
                            $('#execute-query-btn').prop('disabled', false).text('Query Timeout');
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
                            $('#execute-query-btn').prop('disabled', false).text('Query Failed');
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
                                    $('#execute-query-btn').prop('disabled', false).text('Query Error');
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

                                    // Update overlay summary if function exists
                                    if (window.updateOverlaySummary) {
                                        window.updateOverlaySummary();
                                    }

                                    // Trigger event for overlay management
                                    window.dispatchEvent(new CustomEvent('tagOverlayLoaded', {
                                        detail: { key, value, overlayId, featureCount: features.length }
                                    }));

                                    // Trigger the overlay features loaded event
                                    window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));

                                    $('#execute-query-btn').prop('disabled', false).text('Query Executed');
                                    $('#clear-search-btn').show();

                                    // Force a map render update to ensure visibility
                                    if (window.map) {
                                        console.log('🔍 Forcing map render update');
                                        window.map.render();
                                    }
                                }
                            } catch (parseError) {
                                console.error('🎯 Error parsing XML response:', parseError);
                                console.error('🎯 Response text preview:', client.responseText.substring(0, 500));
                                $('#execute-query-btn').prop('disabled', false).text('Parse Error');
                            }
                        } else {
                            console.error('🎯 Request failed with status:', client.status);
                            console.error('🎯 Response text:', client.responseText);
                            $('#execute-query-btn').prop('disabled', false).text('Request Failed');
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

        // Set additional properties for overlay system integration
        vectorLayer.set('group', 'Tag Queries');
        vectorLayer.set('type', 'overlay');

        // Add to overlays group if it exists, otherwise create one
        const overlaysGroup = findOrCreateTagOverlaysGroup();
        console.log('🔍 Adding vector layer to group');
        console.log('🔍 Overlays group title:', overlaysGroup.get('title'));
        console.log('🔍 Overlays group type:', overlaysGroup.get('type'));

        // Add the layer to the group - the group already has layers array in constructor
        const layersCollection = overlaysGroup.getLayers();
        layersCollection.push(vectorLayer);
        console.log('🔍 Vector layer added to group, total layers:', layersCollection.getLength());

        // If the map already exists, we need to add the layer group to it
        if (window.map) {
            console.log('🔍 Adding layer group to existing map');
            console.log('🔍 Current map layers before:', window.map.getLayers().getLength());
            // Check if the layer group is already in the map
            const existingLayers = window.map.getLayers().getArray();
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
        $('#execute-query-btn').prop('disabled', false).text('Query Executed');
        $('#clear-search-btn').show();

        // Force a map render update to ensure visibility
        if (window.map) {
            console.log('🔍 Forcing map render update');
            window.map.render();
        }
    }

    function findOrCreateTagOverlaysGroup() {
        console.log('🔍 Looking for Tag Queries group');

        // First, try to find existing Tag Queries group
        console.log('🔍 Checking config.layers for Tag Queries group');
        console.log('🔍 Total layers in config:', config.layers.length);

        for (let i = 0; i < config.layers.length; i++) {
            const layer = config.layers[i];
            console.log('🔍 Checking layer', i, ':', layer.get ? layer.get('title') : 'no title', layer.get ? layer.get('type') : 'no type');

            if (layer.get && layer.get('type') === 'overlay' && layer.get('title') === 'Tag Queries') {
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
            type: 'overlay',
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

    function formatValueCount(count, definition) {
        console.log('🔍 formatValueCount called with count:', count, 'definition:', definition);
        if (count > 0) {
            const formatted = `${formatNumber(count)} uses`;
            console.log('🔍 formatValueCount returning:', formatted);
            return formatted;
        } else {
            // For values with 0 uses, show a brief description instead
            const shortDesc = definition ? definition.substring(0, 60) + (definition.length > 60 ? '...' : '') : 'No description available';
            console.log('🔍 formatValueCount returning description:', shortDesc);
            return shortDesc;
        }
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

    // Expose clearMapLayers globally for use by overlay system
    window.clearMapLayers = clearMapLayers;
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
