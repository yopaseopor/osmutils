// Tag Query Results Manager
// Handles displaying query results and managing map layers for tag queries

(function() {
    'use strict';

    let queryResultsContainer = null;
    let queryResultsHeader = null;
    let queryResultsContent = null;
    let currentLayers = [];
    let currentQuery = null;

    // Initialize the results display
    function initialize() {
        queryResultsContainer = document.getElementById('query-results');
        queryResultsHeader = document.getElementById('query-results-header');
        queryResultsContent = document.getElementById('query-results-content');

        if (!queryResultsContainer) {
            console.error('Query results container not found');
            return;
        }

        // Listen for tag query events
        window.addEventListener('tagQueryExecuted', handleTagQueryExecuted);
        window.addEventListener('keySelected', handleKeySelected);
        window.addEventListener('valueSelected', handleValueSelected);

        updateDisplay();
    }

    // Handle key selection
    function handleKeySelected(event) {
        const key = event.detail.key;
        currentQuery = { key: key };
        updateDisplay();
    }

    // Handle value selection
    function handleValueSelected(event) {
        const key = event.detail.key;
        const value = event.detail.value;
        currentQuery = { key: key, value: value };
        updateDisplay();
    }

    // Handle tag query execution
    function handleTagQueryExecuted(event) {
        const detail = event.detail;
        const key = detail.key;
        const value = detail.value;
        const layer = detail.layer;

        // Remove old layers for the same key
        removeLayersForKey(key);

        // Add new layer
        currentLayers.push({
            key: key,
            value: value,
            layer: layer,
            timestamp: Date.now()
        });

        currentQuery = { key: key, value: value };
        updateDisplay();
    }

    // Remove layers for a specific key
    function removeLayersForKey(key) {
        const layersToRemove = currentLayers.filter(l => l.key === key);
        layersToRemove.forEach(layerInfo => {
            if (window.map && layerInfo.layer) {
                window.map.removeLayer(layerInfo.layer);
            }
        });
        currentLayers = currentLayers.filter(l => l.key !== key);
    }

    // Remove all query layers
    function removeAllLayers() {
        currentLayers.forEach(layerInfo => {
            if (window.map && layerInfo.layer) {
                window.map.removeLayer(layerInfo.layer);
            }
        });
        currentLayers = [];
    }

    // Update the results display
    function updateDisplay() {
        if (!queryResultsContent) return;

        if (!currentQuery) {
            queryResultsContent.innerHTML = 'Select a key and value to see results on the map';
            return;
        }

        let content = '';

        if (currentQuery.key && !currentQuery.value) {
            content = `<div style="margin-bottom: 10px;">
                <strong>Selected Key:</strong> ${currentQuery.key}<br>
                <em>Now search for values in the second search box</em>
            </div>`;
        } else if (currentQuery.key && currentQuery.value) {
            content = `<div style="margin-bottom: 10px;">
                <strong>Active Query:</strong> ${currentQuery.key}=${currentQuery.value}<br>
                <em>Features are being loaded on the map...</em>
            </div>`;
        }

        // Show active layers
        if (currentLayers.length > 0) {
            content += '<div style="margin-top: 10px;"><strong>Active Query Layers:</strong></div>';
            content += '<div style="max-height: 150px; overflow-y: auto;">';

            currentLayers.forEach((layerInfo, index) => {
                const age = Math.round((Date.now() - layerInfo.timestamp) / 1000);
                content += `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 5px; background: white; margin: 2px 0; border-radius: 3px;">
                        <span><strong>${layerInfo.key}</strong>=${layerInfo.value}</span>
                        <button onclick="TagQueryResults.removeLayer(${index})"
                                style="background: #ff4444; color: white; border: none; padding: 2px 8px; border-radius: 3px; cursor: pointer;"
                                title="Remove this layer">×</button>
                    </div>
                `;
            });

            content += '</div>';
        }

        // Add clear all button if there are layers
        if (currentLayers.length > 0) {
            content += `
                <div style="margin-top: 10px;">
                    <button onclick="TagQueryResults.removeAllLayers()"
                            style="background: #666; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                        Clear All Query Layers
                    </button>
                </div>
            `;
        }

        queryResultsContent.innerHTML = content;
    }

    // Public API
    window.TagQueryResults = {
        initialize,
        removeLayer: function(index) {
            if (currentLayers[index]) {
                const layerInfo = currentLayers[index];
                if (window.map && layerInfo.layer) {
                    window.map.removeLayer(layerInfo.layer);
                }
                currentLayers.splice(index, 1);
                updateDisplay();
            }
        },
        removeAllLayers,
        removeLayersForKey,
        getCurrentLayers: () => currentLayers.slice(),
        getCurrentQuery: () => currentQuery
    };

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

})();
