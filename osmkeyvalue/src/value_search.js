/**
 * Generate a unique color for a key-value pair using a simple hash function
 */
function generateUniqueColor(key, value) {
    // Create a simple hash from the key-value combination
    const combined = `${key}:${value}`;
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

/**
 * Generate a unique color for a key-value pair using a simple hash function
 */
function generateUniqueColor(key, value) {
    // Create a simple hash from the key-value combination
    const combined = `${key}:${value}`;
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

/**
 * Legend data structure for active queries
 */
window.tagQueryLegend = {
    queries: new Map(), // Maps overlayId -> {key, value, color, count, visible}

    /**
     * Add or update a query in the legend
     */
    addQuery(overlayId, key, value, color, count = 0, visible = true) {
        this.queries.set(overlayId, {
            key,
            value,
            color,
            count,
            visible,
            timestamp: Date.now()
        });
        this.updateLegendDisplay();
    },

    /**
     * Remove a query from the legend
     */
    removeQuery(overlayId) {
        this.queries.delete(overlayId);
        this.updateLegendDisplay();
    },

    /**
     * Update the count for a query
     */
    updateCount(overlayId, count) {
        if (this.queries.has(overlayId)) {
            this.queries.get(overlayId).count = count;
            this.updateLegendDisplay();
        }
    },

    /**
     * Update visibility for a query
     */
    updateVisibility(overlayId, visible) {
        if (this.queries.has(overlayId)) {
            this.queries.get(overlayId).visible = visible;
            this.updateLegendDisplay();
        }
    },

    /**
     * Get all visible queries
     */
    getVisibleQueries() {
        return Array.from(this.queries.values()).filter(query => query.visible);
    },

    /**
     * Generate and display the legend
     */
    updateLegendDisplay() {
        const legendContainer = $('#tag-query-legend');
        if (!legendContainer.length) {
            this.createLegendContainer();
        }

        const visibleQueries = this.getVisibleQueries();
        if (visibleQueries.length === 0) {
            legendContainer.hide();
            return;
        }

        legendContainer.show();
        legendContainer.empty();

        // Add title
        legendContainer.append('<div class="legend-title">📊 Consultes Actives</div>');

        // Add each query
        visibleQueries.forEach(query => {
            const colorStyle = `background-color: rgb(${query.color.join(',')})`;
            const countText = query.count > 0 ? `${query.count} resultats` : 'Carregant...';

            const queryItem = `
                <div class="legend-item">
                    <div class="legend-color" style="${colorStyle}"></div>
                    <div class="legend-info">
                        <div class="legend-tag">${query.key}=${query.value}</div>
                        <div class="legend-count">${countText}</div>
                    </div>
                </div>
            `;
            legendContainer.append(queryItem);
        });
    },

    /**
     * Create the legend container if it doesn't exist
     */
    createLegendContainer() {
        if ($('#tag-query-legend').length) return;

        const legendHtml = `
            <div id="tag-query-legend" class="tag-query-legend" style="display: none;">
                <div class="legend-title">📊 Consultes Actives</div>
            </div>
        `;

        // Add to the map menu area
        $('#menu').append(legendHtml);

        // Add CSS styles
        this.addLegendStyles();
    },

    /**
     * Add CSS styles for the legend
     */
    addLegendStyles() {
        if ($('#tag-query-legend-styles').length) return;

        const styles = `
            <style id="tag-query-legend-styles">
                .tag-query-legend {
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    z-index: 1000;
                    max-width: 250px;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                }

                .legend-title {
                    font-weight: bold;
                    margin-bottom: 8px;
                    text-align: center;
                    color: #333;
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                    padding: 3px;
                    border-radius: 3px;
                }

                .legend-color {
                    width: 16px;
                    height: 16px;
                    border-radius: 2px;
                    margin-right: 8px;
                    border: 1px solid #999;
                }

                .legend-info {
                    flex: 1;
                }

                .legend-tag {
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 2px;
                }

                .legend-count {
                    color: #666;
                    font-size: 11px;
                }
            </style>
        `;

        $('head').append(styles);
    }
};

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

        // Update current value and key for potential execution
        currentValue = query;

        // Show execute button if we have both key and value
        if (selectedKey && query) {
            showExecuteButton(selectedKey, query);
        } else {
            $('#execute-query-btn').hide();
            $('#clear-search-btn').hide();
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

        // Check if this is a custom value option
        const customValue = $(this).attr('data-custom-value');
        if (customValue) {
            console.log('🔍 Custom value clicked:', customValue);
            // Set current value and show execute button
            currentValue = customValue;
            if (currentKey) {
                showExecuteButton(currentKey, currentValue);
            }
            resultsContainer.empty().hide();
            return;
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
        // Get key and value directly from input fields instead of global variables
        const selectedKey = $('#value-search').data('selectedKey');
        const valueInput = $('#value-search').val().trim();

        if (selectedKey && valueInput) {
            executeTagQuery(selectedKey, valueInput);
            $(this).prop('disabled', true).text('Executing...');
        } else {
            console.error('❌ Execute button clicked but missing key or value');
            console.log('Selected key:', selectedKey);
            console.log('Value input:', valueInput);
        }
    });

    // Handle clear button click
    $('#clear-search-btn').on('click', function() {
        console.log('🧹 Clear button clicked');

        // Clear UI state
        $('#value-search').val('');
        $('#value-search-dropdown').empty().hide();

        $('#execute-query-btn').hide().prop('disabled', false).text('Execute Query');
        $(this).hide();

        // Clear the selected key from value search
        $('#value-search').removeData('selectedKey');

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

        const results = window.searchValues(query, key, 25);
        console.log('🔍 Value search results:', results);
        console.log('🔍 Results length:', results.length);

        currentResults = results;
        displayValueResults(results, query);

        // Trigger custom event for other components
        searchInput.trigger('valueSearchResults', [results, key]);
    }

    function displayValueResults(results, query) {
        console.log('🔍 displayValueResults called with:', results.length, 'results');
        resultsContainer.empty();

        if (results.length === 0) {
            console.log('🔍 No results to display');
            // Show option to execute custom value
            const customValueOption = `
                <div class="value-search-result custom-value-option" data-custom-value="${escapeHtml(query)}">
                    <div class="value-name">🔍 "${escapeHtml(query)}"</div>
                    <div class="value-definition">Valor personalitzat - executar query directa</div>
                    <div class="value-count">Fer clic per executar</div>
                </div>
            `;
            resultsContainer.append(customValueOption);
            resultsContainer.show();
            return;
        }

        console.log('🔍 Displaying results...');
        results.forEach((result, index) => {
            console.log('🔍 result.countAll:', result.countAll, 'type:', typeof result.countAll);
            console.log('🔍 result.totalCount:', result.totalCount, 'type:', typeof result.totalCount);
            console.log('🔍 result.tag:', result.tag);
            console.log('🔍 Result definition_en exists:', !!result.definition_en);
            console.log('🔍 Result definition_en value:', result.definition_en);
            console.log('🔍 Result definition exists:', !!result.definition);
            console.log('🔍 Result definition value:', result.definition);
            let countToUse = result.countAll || result.totalCount || 0;
            if (typeof countToUse === 'string') {
                countToUse = parseInt(countToUse) || 0;
            }
            console.log('🔍 Count to use for formatting:', countToUse, 'type:', typeof countToUse, 'is > 0:', countToUse > 0);
            if (typeof countToUse !== 'number' || countToUse <= 0) {
                countToUse = 0;
            }
            let definitionToUse = result.definition_en || result.definition_ca || result.definition_es || result.definition || '';

            // For global value search results, we need to get the definition from the keys that use this value
            if (result.keys && result.keys.length > 0 && !definitionToUse) {
                // Try to get definition from the first key that uses this value
                const firstKey = result.keys[0];
                if (window.taginfoData.keys.has(firstKey)) {
                    const keyData = window.taginfoData.keys.get(firstKey);
                    if (keyData.values.has(result.value)) {
                        const valueData = keyData.values.get(result.value);
                        definitionToUse = valueData.definition_en || valueData.definition_ca || valueData.definition_es || valueData.definition || '';
                        console.log('🔍 Got definition from key data:', definitionToUse);
                    }
                }
            }

            console.log('🔍 Count to use for formatting:', countToUse);
            console.log('🔍 Definition to use for formatting:', definitionToUse);

            // Apply highlighting to search query
            const highlightedValue = highlightText(result.value || result.key || 'No value', query);
            const highlightedKey = result.key ? highlightText(result.key, query) : '';

            // Apply highlighting to all definition columns
            const highlightedDefEn = highlightText(result.definition_en || '', query);
            const highlightedDefCa = highlightText(result.definition_ca || '', query);
            const highlightedDefEs = highlightText(result.definition_es || '', query);

            // Debug the HTML structure
            const valueNameHtml = `<div class="value-name">${highlightedValue}</div>`;
            const valueKeyHtml = result.key ? `<div class="value-key">for key: ${highlightedKey}</div>` : '';
            const valueTagHtml = result.tag ? `<div class="value-tag">${escapeHtml(result.tag)}</div>` : '';

            // Show only definition columns that contain the search term
            const defEnHtml = result.definition_en && (result.definition_en.toLowerCase().includes(query.toLowerCase()))
                ? `<div class="value-definition-en">EN: ${highlightedDefEn}</div>`
                : '';
            const defCaHtml = result.definition_ca && (result.definition_ca.toLowerCase().includes(query.toLowerCase()))
                ? `<div class="value-definition-ca">CA: ${highlightedDefCa}</div>`
                : '';
            const defEsHtml = result.definition_es && (result.definition_es.toLowerCase().includes(query.toLowerCase()))
                ? `<div class="value-definition-es">ES: ${highlightedDefEs}</div>`
                : '';

            const valueCountHtml = `<div class="value-count">${formatValueCount(countToUse, definitionToUse)}</div>`;

            console.log('🔍 HTML parts:');
            console.log('  - valueNameHtml:', valueNameHtml);
            console.log('  - valueKeyHtml:', valueKeyHtml);
            console.log('  - valueTagHtml:', valueTagHtml);
            console.log('  - defEnHtml:', defEnHtml);
            console.log('  - defCaHtml:', defCaHtml);
            console.log('  - defEsHtml:', defEsHtml);
            console.log('  - valueCountHtml:', valueCountHtml);

            const html = `
                ${valueNameHtml}
                ${valueKeyHtml}
                ${valueTagHtml}
                ${defEnHtml}
                ${defCaHtml}
                ${defEsHtml}
                ${valueCountHtml}
            `;

            console.log('🔍 Complete HTML structure:', html);
            console.log('🔍 HTML length:', html.length);

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
            // Key-value pair selected (from specific key search) - use the selected values
            $('#value-search').val(result.value);
            $('#value-search').data('selectedKey', result.key);
            resultsContainer.empty().hide();

            showExecuteButton(result.key, result.value);
        } else if (result.keys && result.keys.length > 0 && result.value) {
            // Value with multiple possible keys - use the first one and the selected value
            $('#value-search').val(result.value);
            $('#value-search').data('selectedKey', result.keys[0]);
            resultsContainer.empty().hide();

            showExecuteButton(result.keys[0], result.value);
        } else if (result.value) {
            // Just a value selected (no specific key) - use current key if available
            const currentKey = $('#value-search').data('selectedKey');
            if (!currentKey) {
                console.warn('🔍 No key available for value selection');
                return;
            }
            $('#value-search').val(result.value);
            resultsContainer.empty().hide();

            showExecuteButton(currentKey, result.value);
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
        console.log('🚀 Current legend queries before execution:', window.tagQueryLegend.queries.size);

        // Check if this exact query is already running or exists
        const existingQuery = Array.from(window.tagQueryLegend.queries.entries())
            .find(([id, query]) => query.key === key && query.value === value);

        if (existingQuery) {
            console.log('🚀 Query already exists, replacing existing overlay');
            // Remove the existing query from legend
            window.tagQueryLegend.removeQuery(existingQuery[0]);
        }
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

        // Log zoom level and area info
        const zoom = view.getZoom();
        const area = (extent[2] - extent[0]) * (extent[3] - extent[1]);
        console.log('🚀 Zoom level:', zoom, 'Area:', area.toFixed(2), 'square units');

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

        // Generate unique color for this key-value pair
        const uniqueColor = generateUniqueColor(key, value);
        console.log('🎯 Generated unique color:', uniqueColor);

        // Create a unique overlay for this tag query
        const overlayId = `tag_${key}_${value}_${Date.now()}`;
        const overlayTitle = `${key}=${value}`;

        console.log('🎯 Creating overlay:', overlayId, overlayTitle);

        // Add to legend before creating the overlay
        window.tagQueryLegend.addQuery(overlayId, key, value, uniqueColor, 0, true);

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

                                    // Log detailed information about each feature
                                    features.forEach((feature, index) => {
                                        const geometry = feature.getGeometry();
                                        const geometryType = geometry.getType();
                                        const extent = geometry.getExtent();

                                        console.log(`🎯 Feature ${index}:`, {
                                            type: geometryType,
                                            id: feature.getId(),
                                            extent: extent,
                                            area: geometryType.includes('Polygon') ? geometry.getArea() : 'N/A',
                                            length: geometryType === 'LineString' ? geometry.getLength() : 'N/A'
                                        });

                                        // Special logging for different geometry types
                                        if (geometryType === 'Point') {
                                            console.log(`  📍 Point coordinates: ${JSON.stringify(geometry.getCoordinates())}`);
                                        } else if (geometryType === 'LineString') {
                                            console.log(`  📏 LineString length: ${geometry.getLength().toFixed(2)} units`);
                                            console.log(`  📏 LineString coordinates: ${geometry.getCoordinates().length} points`);
                                        } else if (geometryType.includes('Polygon')) {
                                            console.log(`  🔷 Polygon area: ${geometry.getArea().toFixed(2)} sq units`);
                                            console.log(`  🔷 Polygon rings: ${geometry.getCoordinates().length}`);
                                        }
                                    });

                                    // Fix invalid LineString geometries to make them renderable
                                    const fixedFeatures = features.map((feature, index) => {
                                        const geometry = feature.getGeometry();
                                        const geometryType = geometry.getType();

                                        // For invalid LineStrings, fix them properly
                                        if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
                                            try {
                                                const coords = geometry.getCoordinates();

                                                // Check if LineString has invalid geometry
                                                if (!coords || coords.length < 2) {
                                                    console.log(`🎯 Fixing invalid LineString ${index}:`, {
                                                        id: feature.getId(),
                                                        coordsLength: coords ? coords.length : 'null',
                                                        geometryType: geometryType
                                                    });

                                                    // If no coordinates or only 1 point, create a minimal valid line
                                                    if (!coords || coords.length === 0) {
                                                        // Create a tiny line at origin if no coordinates
                                                        const tinyLine = new ol.geom.LineString([
                                                            [0, 0],
                                                            [0.001, 0.001]
                                                        ]);
                                                        feature.setGeometry(tinyLine);
                                                        feature.set('fixedGeometry', true);
                                                    } else if (coords.length === 1) {
                                                        // Duplicate the single point to create a minimal line
                                                        const point = coords[0];
                                                        const fixedCoords = [point, [point[0] + 0.001, point[1] + 0.001]];
                                                        const fixedLine = new ol.geom.LineString(fixedCoords);
                                                        feature.setGeometry(fixedLine);
                                                        feature.set('fixedGeometry', true);
                                                    }
                                                } else {
                                                    // Validate that all coordinates are valid numbers
                                                    const hasInvalidCoords = coords.some(point =>
                                                        !Array.isArray(point) ||
                                                        point.length < 2 ||
                                                        typeof point[0] !== 'number' ||
                                                        typeof point[1] !== 'number' ||
                                                        isNaN(point[0]) ||
                                                        isNaN(point[1])
                                                    );

                                                    if (hasInvalidCoords) {
                                                        console.log(`🎯 Fixing LineString with invalid coordinates ${index}:`, feature.getId());
                                                        // Filter out invalid coordinates and ensure minimum 2 points
                                                        const validCoords = coords.filter(point =>
                                                            Array.isArray(point) &&
                                                            point.length >= 2 &&
                                                            typeof point[0] === 'number' &&
                                                            typeof point[1] === 'number' &&
                                                            !isNaN(point[0]) &&
                                                            !isNaN(point[1])
                                                        );

                                                        if (validCoords.length >= 2) {
                                                            const fixedLine = new ol.geom.LineString(validCoords);
                                                            feature.setGeometry(fixedLine);
                                                            feature.set('fixedGeometry', true);
                                                        } else if (validCoords.length === 1) {
                                                            // Duplicate the single valid point
                                                            const point = validCoords[0];
                                                            const fixedCoords = [point, [point[0] + 0.001, point[1] + 0.001]];
                                                            const fixedLine = new ol.geom.LineString(fixedCoords);
                                                            feature.setGeometry(fixedLine);
                                                            feature.set('fixedGeometry', true);
                                                        } else {
                                                            // Create a tiny line if no valid coordinates
                                                            const tinyLine = new ol.geom.LineString([
                                                                [0, 0],
                                                                [0.001, 0.001]
                                                            ]);
                                                            feature.setGeometry(tinyLine);
                                                            feature.set('fixedGeometry', true);
                                                        }
                                                    }
                                                }
                                            } catch (error) {
                                                console.warn(`🎯 Error fixing LineString ${index}:`, error);
                                                // Create a minimal valid line as fallback
                                                try {
                                                    const tinyLine = new ol.geom.LineString([
                                                        [0, 0],
                                                        [0.001, 0.001]
                                                    ]);
                                                    feature.setGeometry(tinyLine);
                                                    feature.set('fixedGeometry', true);
                                                } catch (fallbackError) {
                                                    console.error(`🎯 Fallback failed for LineString ${index}:`, fallbackError);
                                                }
                                            }
                                        }

                                        return feature;
                                    });

                                    // Filter valid features (should include all fixed LineStrings)
                                    const validFeatures = fixedFeatures.filter((feature, index) => {
                                        const geometry = feature.getGeometry();
                                        if (!geometry || !geometry.getType()) {
                                            console.warn(`🎯 Feature ${index} has invalid geometry after fixing:`, feature);
                                            return false;
                                        }
                                        return true;
                                    });

                                    // Filter to count only top-level complete elements
                                    const taggedFeatures = validFeatures.filter((feature, index) => {
                                        const geometryType = feature.getGeometry().getType();
                                        const properties = feature.getProperties();

                                        // Check if this element is a component of a larger geometry
                                        const isComponent = properties.members || properties.memberOf ||
                                                           properties.member || properties.membership;

                                        // For complete geometries (ways and relations), count them if they're not components
                                        if ((geometryType === 'LineString' || geometryType === 'MultiLineString' ||
                                             geometryType === 'Polygon' || geometryType === 'MultiPolygon') && !isComponent) {
                                            console.log(`🎯 Top-level geometry ${index}:`, feature.getId(), geometryType);
                                            return true;
                                        }

                                        // For nodes, count standalone nodes with tags OR nodes that are members but have their own tags
                                        if (geometryType === 'Point') {
                                            // Check if this node has any tags beyond basic properties
                                            const hasTags = Object.keys(properties).some(prop =>
                                                prop !== 'geometry' && prop !== 'id' && prop !== 'type' &&
                                                prop !== 'originalType' && prop !== 'fixedGeometry' &&
                                                prop !== 'members' && prop !== 'memberOf' &&
                                                prop !== 'member' && prop !== 'membership'
                                            );

                                            if (hasTags) {
                                                console.log(`🎯 Node with tags ${index}:`, feature.getId(), 'has standalone tags');
                                                return true;
                                            } else {
                                                console.log(`🎯 Node without tags ${index}:`, feature.getId(), 'no standalone tags');
                                                return false;
                                            }
                                        }

                                        console.log(`🎯 Skipping ${index}:`, feature.getId(), geometryType, 'is component or no tags');
                                        return false;
                                    });

                                    console.log(`🎯 Tagged features: ${taggedFeatures.length}/${validFeatures.length}`);

                                    // Log detailed summary of tagged features by type
                                    const detailedSummary = taggedFeatures.reduce((acc, feature) => {
                                        const type = feature.getGeometry().getType();
                                        acc[type] = (acc[type] || 0) + 1;
                                        return acc;
                                    }, {});

                                    console.log('🎯 Detailed tagged features summary:', detailedSummary);
                                    console.log('🎯 Tagged features by type:');
                                    taggedFeatures.forEach((feature, index) => {
                                        const geometry = feature.getGeometry();
                                        const geometryType = geometry.getType();
                                        console.log(`  ${index}: ${geometryType} - ${feature.getId()}`);
                                    });

                                    // Show detailed summary in a prominent way
                                    const summaryText = formatDetailedCount(detailedSummary);
                                    console.log(`🎯 📊 SUMMARY: Found ${summaryText} with tags "${key}=${value}"`);

                                    // Also show in alert for immediate visibility
                                    if (taggedFeatures.length > 0) {
                                        alert(`Query completed!\n\nFound: ${summaryText}\n\nCheck console for detailed logs.`);
                                    }

                                    this.addFeatures(validFeatures);
                                    console.log('🎯 Features added to source');

                                    // Update legend with tagged count
                                    window.tagQueryLegend.updateCount(overlayId, taggedFeatures.length);

                                    // Update overlay summary if function exists
                                    if (window.updateOverlaySummary) {
                                        window.updateOverlaySummary();
                                    }

                                    // Trigger event for overlay management
                                    window.dispatchEvent(new CustomEvent('tagOverlayLoaded', {
                                        detail: { key, value, overlayId, featureCount: taggedFeatures.length }
                                    }));

                                    // Trigger the overlay features loaded event
                                    window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));

                                    $('#execute-query-btn').prop('disabled', false).text('Query Executed - Click to Repeat');
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

                            // Handle different error types
                            if (client.status === 504) {
                                console.error('🎯 Overpass API timeout - server is too busy');
                                $('#execute-query-btn').prop('disabled', false).text('Server Timeout');
                                if (window.loading) window.loading.hide();

                                // Show user-friendly error message
                                alert('The Overpass API server is currently too busy to handle your request. Please try again in a few minutes.');
                            } else if (client.status === 400) {
                                console.error('🎯 Bad request - possibly invalid query');
                                $('#execute-query-btn').prop('disabled', false).text('Invalid Query');
                                if (window.loading) window.loading.hide();

                                alert('The query appears to be invalid. Please check your search terms and try again.');
                            } else {
                                console.error('🎯 Request failed with status:', client.status);
                                $('#execute-query-btn').prop('disabled', false).text('No Features - Click to Retry');
                                if (window.loading) window.loading.hide();

                                alert('The request failed. Please check your internet connection and try again.');
                            }
                        }
                    }.bind(this);
                    client.send(queryData);
                }
            },
            // Remove loading strategy to prevent automatic queries on map move/zoom
            // strategy: ol.loadingstrategy.bbox
        });

        // Create vector layer
        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            title: overlayTitle,
            id: overlayId,
            iconSrc: 'src/img/icones_web/tag_icon.png',
            iconStyle: 'filter: hue-rotate(120deg);',
            visible: true,
            style: function(feature) {
                const geometry = feature.getGeometry();
                const geometryType = geometry.getType();

                console.log('🎨 Styling feature:', {
                    type: geometryType,
                    id: feature.getId()
                });

                // Style for nodes (Point geometries) - ORIGINAL ELEGANT STYLE
                if (geometryType === 'Point') {
                    const originalType = feature.get('originalType');

                    // Check if this point was originally a LineString
                    if (originalType === 'LineString') {
                        return new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 5,
                                fill: new ol.style.Fill({
                                    color: generateQueryColor(vectorLayer.get('id'), true) // Use same color as fixed lines
                                }),
                                stroke: new ol.style.Stroke({
                                    color: generateQueryColor(vectorLayer.get('id'), true),
                                    width: 2
                                })
                            })
                        });
                    }

                    // Check if this point was originally a Polygon
                    if (originalType === 'Polygon') {
                        return new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 6,
                                fill: new ol.style.Fill({
                                    color: [...generateQueryColor(vectorLayer.get('id'), false), 0.4] // Reduced transparency for consistency
                                }),
                                stroke: new ol.style.Stroke({
                                    color: generateQueryColor(vectorLayer.get('id'), false),
                                    width: 2
                                })
                            })
                        });
                    }

                    // Regular point styling (nodes)
                    return new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 4,
                            fill: new ol.style.Fill({
                                color: [...generateQueryColor(vectorLayer.get('id'), false), 0.6] // Reduced transparency for consistency
                            }),
                            stroke: new ol.style.Stroke({
                                color: generateQueryColor(vectorLayer.get('id'), false),
                                width: 1
                            })
                        })
                    });
                }

                // Style for LineString geometries (ways) - show as lines
                if (geometryType === 'LineString' || geometryType === 'MultiLineString') {
                    const isFixed = feature.get('fixedGeometry');

                    // Generate consistent random color based on overlay ID
                    const overlayId = vectorLayer.get('id');
                    const color = generateQueryColor(overlayId, isFixed);

                    return new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: color,
                            width: isFixed ? 3 : 4 // Thicker lines for better visibility
                        })
                    });
                }

                // Style for Polygon geometries (areas) - show as filled areas
                if (geometryType === 'Polygon' || geometryType === 'MultiPolygon') {
                    try {
                        const area = geometry.getArea();
                        if (isNaN(area) || area <= 0) {
                            // Invalid polygon - show as point at centroid
                            console.warn('Invalid polygon, showing as point:', feature.getId());
                            const centroid = ol.extent.getCenter(geometry.getExtent());
                            return new ol.style.Style({
                                image: new ol.style.Circle({
                                    radius: 6,
                                    fill: new ol.style.Fill({
                                        color: [...generateQueryColor(vectorLayer.get('id'), false), 0.8] // Use query color for invalid polygons
                                    }),
                                    stroke: new ol.style.Stroke({
                                        color: generateQueryColor(vectorLayer.get('id'), false),
                                        width: 2
                                    })
                                }),
                                geometry: new ol.geom.Point(centroid)
                            });
                        }

                        // Valid polygon - show as filled area
                        return new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: generateQueryColor(vectorLayer.get('id'), false), // Use same color as lines
                                width: 2
                            }),
                            fill: new ol.style.Fill({
                                color: [...generateQueryColor(vectorLayer.get('id'), false), 0.05] // Ultra transparent for maximum visibility
                            })
                        });
                    } catch (error) {
                        console.warn('Error styling polygon, showing as point:', error);
                        // Show as point at centroid as fallback
                        const centroid = ol.extent.getCenter(geometry.getExtent());
                        return new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 6,
                                fill: new ol.style.Fill({
                                    color: [...generateQueryColor(vectorLayer.get('id'), false), 0.4]
                                }),
                                stroke: new ol.style.Stroke({
                                    color: generateQueryColor(vectorLayer.get('id'), false),
                                    width: 2
                                })
                            }),
                            geometry: new ol.geom.Point(centroid)
                        });
                    }
                }

                // Fallback for any other geometry type - show as point
                console.warn('Unknown geometry type, showing as point:', geometryType);
                try {
                    const centroid = ol.extent.getCenter(geometry.getExtent());
                    return new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 6,
                            fill: new ol.style.Fill({
                                color: [...generateQueryColor(vectorLayer.get('id'), false), 0.4]
                            }),
                            stroke: new ol.style.Stroke({
                                color: generateQueryColor(vectorLayer.get('id'), false),
                                width: 2
                            })
                        }),
                        geometry: new ol.geom.Point(centroid)
                    });
                } catch (error) {
                    console.error('Error creating fallback point:', error);
                    return new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 4,
                            fill: new ol.style.Fill({
                                color: [...generateQueryColor(vectorLayer.get('id'), false), 0.6]
                            }),
                            stroke: new ol.style.Stroke({
                                color: generateQueryColor(vectorLayer.get('id'), false),
                                width: 1
                            })
                        })
                    });
                }
            }
        });

        // Set additional properties for overlay system integration
        vectorLayer.set('group', 'Tag Queries');
        vectorLayer.set('type', 'overlay');  // Changed from 'tag-query' to 'overlay' to integrate with overlay system
        vectorLayer.set('title', overlayTitle);
        vectorLayer.set('id', overlayId);
        vectorLayer.set('iconSrc', 'src/img/icones_web/tag_icon.png');
        vectorLayer.set('iconStyle', 'filter: hue-rotate(120deg);');

        // Add directly to the main config.layers as an overlay instead of creating a separate group
        console.log('🔍 Adding vector layer as overlay to config.layers');
        console.log('🔍 Current config.layers length before:', config.layers.length);

        // Check if this overlay already exists and allow replacement
        const existingOverlayIndex = config.layers.findIndex(layer =>
            layer.get && layer.get('id') === overlayId
        );

        if (existingOverlayIndex !== -1) {
            console.log('🔍 Replacing existing overlay');
            // Remove the existing overlay
            const existingOverlay = config.layers[existingOverlayIndex];
            config.layers.splice(existingOverlayIndex, 1);

            // Also remove from map if it exists
            if (window.map) {
                window.map.getLayers().remove(existingOverlay);
            }
        }

        config.layers.push(vectorLayer);
        console.log('🔍 Vector layer added as overlay, total layers:', config.layers.length);

        // If the map already exists, add the layer to it
        if (window.map) {
            console.log('🔍 Adding overlay to existing map');
            console.log('🔍 Map layers before:', window.map.getLayers().getLength());

            // Check if already in map (but allow replacement since we may have replaced it above)
            const mapLayers = window.map.getLayers().getArray();
            const layerExists = mapLayers.some(layer => layer === vectorLayer);

            if (!layerExists) {
                window.map.addLayer(vectorLayer);
                console.log('🔍 Overlay added to map, total map layers now:', window.map.getLayers().getLength());

                // Force render after adding layer
                setTimeout(() => {
                    console.log('🔍 Forcing render after layer addition');
                    window.map.render();

                    // Check if layer is in map after addition
                    const checkLayers = window.map.getLayers().getArray();
                    const layerFound = checkLayers.some(layer => layer === vectorLayer);
                    console.log('🔍 Layer found in map after addition:', layerFound);

                    // Log layer properties
                    console.log('🔍 Layer properties:', {
                        id: vectorLayer.get('id'),
                        title: vectorLayer.get('title'),
                        visible: vectorLayer.getVisible(),
                        opacity: vectorLayer.getOpacity()
                    });

                    // Check source features after adding
                    const source = vectorLayer.getSource();
                    if (source) {
                        const sourceFeatures = source.getFeatures();
                        console.log('🔍 Source features after adding:', sourceFeatures.length);

                        // Log detailed info about each source feature
                        sourceFeatures.forEach((feature, index) => {
                            const geometry = feature.getGeometry();
                            const geometryType = geometry.getType();
                            const extent = geometry.getExtent();

                            console.log(`🔍 Source feature ${index}:`, {
                                id: feature.getId(),
                                geometryType: geometryType,
                                extent: extent,
                                area: geometryType.includes('Polygon') ? geometry.getArea() : 'N/A',
                                coordinates: geometryType === 'Point' ? geometry.getCoordinates() :
                                           geometryType === 'LineString' ? geometry.getCoordinates() : 'N/A'
                            });

                            // Check coordinate validity
                            if (geometryType === 'Point') {
                                const coords = geometry.getCoordinates();
                                console.log(`🔍 Point coordinates: [${coords[0]}, ${coords[1]}]`);
                                console.log(`🔍 Coordinate validity: lon=${coords[0]}, lat=${coords[1]}, valid=${Math.abs(coords[0]) <= 180 && Math.abs(coords[1]) <= 90}`);
                            }
                        });
                    }
                }, 100);
            } else {
                console.log('🔍 Overlay already exists in map');
            }
        }

        // Make sure the overlay is visible
        vectorLayer.setVisible(true);
        console.log('🔍 Vector layer visible:', vectorLayer.getVisible());

        console.log('🔍 Overlay layer added successfully');

        // Trigger overlay update event to refresh the UI
        window.dispatchEvent(new Event('overlaysUpdated'));

        // Also trigger a more specific event for the overlay system
        window.dispatchEvent(new CustomEvent('overlayFeaturesLoaded'));

        // Reset button state
        $('#execute-query-btn').prop('disabled', false).text('Query Executed - Click to Repeat');
        $('#clear-search-btn').show();

        // Force a map render update to ensure visibility
        if (window.map) {
            console.log('🔍 Forcing map render update');
            window.map.render();

            // Additional render check
            setTimeout(() => {
                console.log('🔍 Additional render check');
                window.map.render();

                // Check if the map has any layers
                const allLayers = window.map.getLayers().getArray();
                console.log('🔍 Total map layers:', allLayers.length);

                // Find our layer specifically
                const ourLayer = allLayers.find(layer => layer.get('id') === overlayId);
                if (ourLayer) {
                    console.log('🔍 Our layer found in map:', {
                        id: ourLayer.get('id'),
                        title: ourLayer.get('title'),
                        visible: ourLayer.getVisible(),
                        opacity: ourLayer.getOpacity()
                    });

                    // Force the layer to be visible and render
                    ourLayer.setVisible(true);
                    ourLayer.setOpacity(1.0);

                    // Final render
                    window.map.render();
                    console.log('🔍 Final render completed');
                } else {
                    console.warn('🔍 Our layer not found in map layers');
                }
            }, 200);
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

    function generateQueryColor(overlayId, isFixed = false) {
        // Generate a consistent color based on overlay ID hash
        let hash = 0;
        for (let i = 0; i < overlayId.length; i++) {
            const char = overlayId.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }

        // Generate vibrant colors using HSL color space
        const hue = Math.abs(hash) % 360;
        const saturation = 70 + (Math.abs(hash * 7) % 20); // 70-90%
        const lightness = isFixed ? 45 : 55; // Slightly darker for fixed geometries

        // Convert HSL to RGB
        const hslToRgb = (h, s, l) => {
            h /= 360;
            s /= 100;
            l /= 100;

            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            let r, g, b;
            if (s === 0) {
                r = g = b = l; // Achromatic
            } else {
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1/3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1/3);
            }

            return [
                Math.round(r * 255),
                Math.round(g * 255),
                Math.round(b * 255),
                isFixed ? 0.9 : 0.8 // Semi-transparent for better visibility
            ];
        };

        return hslToRgb(hue, saturation, lightness);
    }

    function formatDetailedCount(summary) {
        const parts = [];
        if (summary.Point) parts.push(`${summary.Point} nodes`);
        if (summary.LineString) parts.push(`${summary.LineString} ways`);
        if (summary.Polygon) parts.push(`${summary.Polygon} relations`);

        if (parts.length === 0) return '0 features';
        return parts.join(', ');
    }

    function getSelectedElementTypes() {
        // Get selected element types from checkboxes or default to all
        const elementTypesCheckboxes = $('.element-type-checkbox:checked');
        if (elementTypesCheckboxes.length > 0) {
            return elementTypesCheckboxes.map((i, el) => $(el).val()).get();
        }
        return ['node', 'way', 'relation'];
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function highlightText(text, query) {
        if (!query || !text) return escapeHtml(text);

        const queryLower = query.toLowerCase();
        const textLower = text.toLowerCase();

        // Find all occurrences of the query in the text
        const parts = [];
        let lastIndex = 0;
        let index = textLower.indexOf(queryLower);

        while (index !== -1) {
            // Add text before the match
            if (index > lastIndex) {
                parts.push(escapeHtml(text.substring(lastIndex, index)));
            }

            // Add highlighted match
            parts.push(`<mark>${escapeHtml(text.substring(index, index + query.length))}</mark>`);

            lastIndex = index + query.length;
            index = textLower.indexOf(queryLower, lastIndex);
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(escapeHtml(text.substring(lastIndex)));
        }

        return parts.join('');
    }

    function formatValueCount(count, definition) {
        console.log('🔍 formatValueCount called with count:', count, 'definition:', definition);
        console.log('🔍 formatValueCount - count > 0:', count > 0);

        if (count > 0) {
            const numberPart = formatNumber(count);
            const formatted = `${numberPart} uses`;
            console.log('🔍 formatValueCount - numberPart:', numberPart);
            console.log('🔍 formatValueCount - returning formatted count:', formatted);
            return formatted;
        } else {
            // For values with 0 uses, show a brief description instead
            const shortDesc = definition ? definition.substring(0, 60) + (definition.length > 60 ? '...' : '') : 'No description available';
            console.log('🔍 formatValueCount - returning description:', shortDesc);
            return shortDesc;
        }
    }

    // Listen for key selection from key search
    searchInput.on('keySelected', function(e, keyResult) {
        console.log('🔗 Key selected event received:', keyResult);
        // Store the selected key in the input field data
        searchInput.data('selectedKey', keyResult.key);
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
