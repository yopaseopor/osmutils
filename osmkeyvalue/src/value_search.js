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

        // Clear legend
        window.tagQueryLegend.queries.clear();
        window.tagQueryLegend.updateLegendDisplay();

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
            // Show option to use custom value
            const selectedKey = $('#value-search').data('selectedKey');
            if (selectedKey) {
                resultsContainer.append(`
                    <div class="no-results">
                        No values found for "${query}"<br>
                        <button class="use-custom-value-btn" style="margin-top: 8px; padding: 4px 8px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">
                            Use Custom Value: ${selectedKey}=${query}
                        </button>
                    </div>
                `);

                // Handle custom value execution
                resultsContainer.find('.use-custom-value-btn').on('click', function() {
                    console.log('🔍 Executing custom value query:', selectedKey, '=', query);
                    executeCustomValueQuery(selectedKey, query);
                    resultsContainer.empty().hide();
                });
            } else {
                resultsContainer.append('<div class="no-results">No values found</div>');
            }
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

        // Add option for custom value at the bottom
        const selectedKey = $('#value-search').data('selectedKey');
        if (selectedKey && query.trim()) {
            resultsContainer.append(`
                <div class="custom-value-option" style="padding: 6px 12px; border-top: 1px solid #eee; background: #f9f9f9; font-size: 11px; color: #666;">
                    Not found? <button class="use-custom-value-small" style="background: #007cba; color: white; border: none; border-radius: 2px; padding: 2px 6px; cursor: pointer; font-size: 10px;">Use: ${selectedKey}=${query}</button>
                </div>
            `);

            resultsContainer.find('.use-custom-value-small').on('click', function() {
                console.log('🔍 Executing custom value query:', selectedKey, '=', query);
                executeCustomValueQuery(selectedKey, query);
                resultsContainer.empty().hide();
            });
        }

    function displayValueResults(results, query) {
        console.log('🔍 displayValueResults called with:', results.length, 'results');
        resultsContainer.empty();

        if (results.length === 0) {
            console.log('🔍 No results to display');
            // Show option to use custom value
            const selectedKey = $('#value-search').data('selectedKey');
            if (selectedKey) {
                resultsContainer.append(`
                    <div class="no-results">
                        No values found for "${query}"<br>
                        <button class="use-custom-value-btn" style="margin-top: 8px; padding: 4px 8px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">
                            Use Custom Value: ${selectedKey}=${query}
                        </button>
                    </div>
                `);

                // Handle custom value execution
                resultsContainer.find('.use-custom-value-btn').on('click', function() {
                    console.log('🔍 Executing custom value query:', selectedKey, '=', query);
                    executeCustomValueQuery(selectedKey, query);
                    resultsContainer.empty().hide();
                });
            } else {
                resultsContainer.append('<div class="no-results">No values found</div>');
            }
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

        // Add option for custom value at the bottom
        const selectedKey = $('#value-search').data('selectedKey');
        if (selectedKey && query.trim()) {
            resultsContainer.append(`
                <div class="custom-value-option" style="padding: 6px 12px; border-top: 1px solid #eee; background: #f9f9f9; font-size: 11px; color: #666;">
                    Not found? <button class="use-custom-value-small" style="background: #007cba; color: white; border: none; border-radius: 2px; padding: 2px 6px; cursor: pointer; font-size: 10px;">Use: ${selectedKey}=${query}</button>
                </div>
            `);

            resultsContainer.find('.use-custom-value-small').on('click', function() {
                console.log('🔍 Executing custom value query:', selectedKey, '=', query);
                executeCustomValueQuery(selectedKey, query);
                resultsContainer.empty().hide();
            });
        }

        console.log('🔍 Results displayed, showing container');
        resultsContainer.show();
    }

    function executeCustomValueQuery(key, value) {
        console.log('🚀 Executing custom value query:', key, '=', value);

        if (!window.map) {
            console.log('🚀 Map not ready, retrying in 500ms');
            setTimeout(() => executeCustomValueQuery(key, value), 500);
            return;
        }

        // Get current map bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        // Validate bbox coordinates
        if (bbox.some(coord => isNaN(coord) || Math.abs(coord) > 180)) {
            console.error('🚀 Invalid bbox coordinates:', bbox);
            alert('Invalid map location');
            return;
        }

        // Get element types from UI
        const elementTypes = getSelectedElementTypes();

        // Generate Overpass query with custom value
        const query = window.generateOverpassQuery(key, value, bbox, elementTypes);
        console.log('🚀 Generated custom query:', query);

        if (!query) {
            console.error('🚀 Failed to generate query');
            alert('Failed to generate query');
            return;
        }

        // Create overlay for results
        createCustomValueOverlay(key, value, query);
    }

        if (!window.map) {
            console.log('🚀 Map not ready, retrying in 500ms');
            setTimeout(() => executeCustomValueQuery(key, value), 500);
            return;
        }

        // Get current map bbox
        const view = window.map.getView();
        const extent = view.calculateExtent();
        const bbox = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');

        // Validate bbox coordinates
        if (bbox.some(coord => isNaN(coord) || Math.abs(coord) > 180)) {
            console.error('🚀 Invalid bbox coordinates:', bbox);
            alert('Invalid map location');
            return;
        }

        // Get element types from UI
        const elementTypes = getSelectedElementTypes();

        // Generate Overpass query with custom value
        const query = window.generateOverpassQuery(key, value, bbox, elementTypes);
        console.log('🚀 Generated custom query:', query);

        if (!query) {
            console.error('🚀 Failed to generate query');
            alert('Failed to generate query');
            return;
        }

        // Create overlay for results
        createCustomValueOverlay(key, value, query);
    }

    function createCustomValueOverlay(key, value, query) {
        console.log('🎯 createCustomValueOverlay called with:', key, value);

        // Generate unique color for this key-value pair
        const uniqueColor = generateUniqueColor(key, value);
        console.log('🎯 Generated unique color:', uniqueColor);

        // Create a unique overlay for this tag query
        const overlayId = `tag_${key}_${value}_${Date.now()}`;
        const overlayTitle = `${key}=${value}`;

        console.log('🎯 Creating overlay:', overlayId, overlayTitle);

        // Add to legend before creating the overlay
        window.tagQueryLegend.addQuery(overlayId, key, value, uniqueColor, 0, true);

        // Create vector source for the query
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML2(),
            loader: function (extent, resolution, projection) {
                console.log('🎯 Custom value vector loader called');
                if (window.loading) window.loading.show();

                const client = new XMLHttpRequest();
                client.open('POST', config.overpassApi());
                client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
                client.timeout = 15000;

                client.onload = function () {
                    if (window.loading) window.loading.hide();
                    console.log('🎯 Custom value request loaded, status:', client.status);

                    if (client.status === 200) {
                        try {
                            const xmlDoc = $.parseXML(client.responseText);
                            const xml = $(xmlDoc);
                            const remark = xml.find('remark');

                            if (remark.length !== 0) {
                                console.error('🎯 Overpass error:', remark.text());
                                alert('Query Error: ' + remark.text());
                            } else {
                                const features = new ol.format.OSMXML2().readFeatures(xmlDoc, {
                                    featureProjection: window.map.getView().getProjection()
                                });

                                console.log('🎯 Custom value features parsed successfully:', features.length);
                                this.addFeatures(features);

                                // Update legend with actual count
                                window.tagQueryLegend.updateCount(overlayId, features.length);

                                // Show execute button
                                showExecuteButton(key, value);

                                // Force a map render update
                                if (window.map) {
                                    window.map.render();
                                }
                            }
                        } catch (parseError) {
                            console.error('🎯 Error parsing XML response:', parseError);
                        }
                    } else {
                        console.error('🎯 Request failed with status:', client.status);
                    }
                }.bind(this);

                client.onerror = function () {
                    if (window.loading) window.loading.hide();
                    console.error('🎯 Error loading custom value data');
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
        const layersCollection = overlaysGroup.getLayers();

        // Check if this overlay already exists in the group
        const existingLayer = layersCollection.getArray().find(layer =>
            layer.get && layer.get('id') === overlayId
        );

        if (!existingLayer) {
            layersCollection.push(vectorLayer);

            // If the map already exists, add the layer group to it if needed
            if (window.map) {
                const existingLayers = window.map.getLayers().getArray();
                const groupExists = existingLayers.some(layer => layer === overlaysGroup);

                if (!groupExists) {
                    window.map.addLayer(overlaysGroup);
                }
            }

            // Make sure the overlay group is visible
            overlaysGroup.setVisible(true);
            vectorLayer.setVisible(true);
        }
    }

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

/**
 * Display last modified files information in console
 */
function displayLastModifiedInfo() {
    console.log('📁 Darrers arxius modificats al projecte OSMKeyValue:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Name                   LastWriteTime');
    console.log('----                   -------------');
    console.log('index.js               2025-10-13 23:43:14');
    console.log('taginfo_api.js         2025-10-13 18:53:13');
    console.log('config.js              2025-10-13 00:18:22');
    console.log('key_search.js          2025-10-12 20:24:55');
    console.log('value_search.js        2025-10-11 21:46:31');
    console.log('');
    console.log('🕐 Darrera modificació: index.js - 2025-10-13 23:43:14');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// Display last modified info when the module loads
displayLastModifiedInfo();

// Export for use in other modules
window.initValueSearch = initValueSearch;
