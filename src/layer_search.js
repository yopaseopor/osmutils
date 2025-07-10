// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
    // Helper function to get the OpenLayers layer object from a layer config
    function getOLLayer(layerConfig) {
        return layerConfig._olLayerGroup || layerConfig;
    }

    // Helper function to find the OpenLayers map instance
    function findMapInstance() {
        // Try different ways to find the map instance
        if (window.map && window.map.getLayers) return window.map;
        if (window.olMap) {
            if (typeof window.olMap.getMap === 'function') return window.olMap.getMap();
            return window.olMap;
        }
        
        // Try to find map in ol.Map.instances_
        if (window.ol && window.ol.Map && window.ol.Map.instances_) {
            const instances = Object.values(window.ol.Map.instances_);
            if (instances.length > 0) return instances[0];
        }
        
        // Try to find any ol.Map instance in the global scope
        for (const key in window) {
            const value = window[key];
            if (value && value instanceof window.ol.Map) {
                return value;
            }
        }
        
        console.error('Could not find map instance');
        return null;
    }
    
    // Helper function to move a layer up in the z-order
    function moveLayerUp(layer) {
        console.log('moveLayerUp called for layer:', layer);
        
        // Get the map instance
        const map = findMapInstance();
        if (!map) {
            console.error('No map instance found');
            return false;
        }
        
        console.log('Found map instance:', map);
        
        // Get the layers collection
        let mapLayers;
        if (map.getLayers) {
            mapLayers = map.getLayers();
        } else if (map.getLayersCollection) {
            mapLayers = map.getLayersCollection();
        } else if (map.layers) {
            mapLayers = map.layers;
        } else {
            console.error('Could not get map layers collection');
            return false;
        }
        
        const olLayer = getOLLayer(layer);
        console.log('OpenLayers layer:', olLayer);
        
        // Get the layers array
        let layersArray;
        if (mapLayers.getArray) {
            layersArray = mapLayers.getArray();
        } else if (mapLayers.array_) {
            layersArray = mapLayers.array_;
        } else if (Array.isArray(mapLayers)) {
            layersArray = mapLayers;
        } else {
            console.error('Could not get layers array');
            return false;
        }
        
        console.log('Map layers:', layersArray);
        
        // Find the layer in the map's layers
        const layerIndex = layersArray.findIndex(l => l === olLayer);
        console.log('Layer index in map layers:', layerIndex);
        
        // Can't move up if already at the top or not found
        if (layerIndex <= 0) {
            console.log('Layer is already at the top or not found in map layers');
            return false;
        }
        
        try {
            console.log('Current layer order before move:', 
                window.layers.map(l => l.title || l.id || 'unnamed'));
            
            // We already have the layer index
            
            try {
                // Remove the layer from the map
                console.log('Removing layer from map...');
                if (mapLayers.removeAt) {
                    mapLayers.removeAt(layerIndex);
                } else if (mapLayers.remove) {
                    mapLayers.remove(olLayer);
                } else {
                    // Direct array manipulation as last resort
                    layersArray.splice(layerIndex, 1);
                }
                
                // Insert it one position higher
                const newIndex = layerIndex - 1;
                console.log('Reinserting layer at position', newIndex);
                
                if (mapLayers.insertAt) {
                    mapLayers.insertAt(newIndex, olLayer);
                } else {
                    // Direct array manipulation
                    layersArray.splice(newIndex, 0, olLayer);
                    if (mapLayers.changed) mapLayers.changed();
                }
                
                // Update our window.layers array to match if it exists
                if (window.layers) {
                    console.log('Updating window.layers array...');
                    const currentIndex = window.layers.findIndex(l => getOLLayer(l) === olLayer);
                    if (currentIndex !== -1) {
                        const [movedLayer] = window.layers.splice(currentIndex, 1);
                        window.layers.splice(newIndex, 0, movedLayer);
                    }
                    console.log('New layer order after move:', 
                        window.layers.map(l => l.title || l.id || 'unnamed'));
                }
                
                // Force update
                console.log('Triggering map update...');
                if (mapLayers.changed) mapLayers.changed();
                if (map.render) map.render();
                else if (map.renderSync) map.renderSync();
            } catch (error) {
                console.error('Error during layer movement:', error);
                return false;
            }
            
            console.log('Layer moved successfully');
            return true;
        } catch (error) {
            console.error('Error moving layer:', error);
            return false;
        }
    }
    const searchInput = document.getElementById('layer-search');
    const dropdown = document.getElementById('layer-search-dropdown');

    let lastResults = [];
    let lastQuery = '';

    function getActiveLayers() {
        return window.layers.filter(layerObj => 
            (layerObj._olLayerGroup && layerObj._olLayerGroup.getVisible && layerObj._olLayerGroup.getVisible()) ||
            (layerObj.getVisible && layerObj.getVisible())
        );
    }

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        const activeLayers = getActiveLayers();
        const searchQuery = searchInput.value.trim().toLowerCase();
        
        // If there's a search query, include active layers in the results
        if (searchQuery) {
            activeLayers.forEach(activeLayer => {
                if (!results.some(layer => layer === activeLayer)) {
                    results.unshift(activeLayer); // Add active layers at the top
                }
            });
        }

        // Add a 'Clear Active Layers' button if any layers are active
        if (activeLayers.length > 0) {
            const clearBtn = document.createElement('div');
            clearBtn.textContent = `✖ Clear All Active Layers (${activeLayers.length})`;
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.padding = '6px 10px';
            clearBtn.style.background = '#ffeaea';
            clearBtn.style.color = '#b00';
            clearBtn.style.fontWeight = 'bold';
            clearBtn.style.marginBottom = '5px';
            clearBtn.id = 'clear-active-layer-btn';
            clearBtn.tabIndex = 0;
            clearBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Hide all active layers
                activeLayers.forEach(layer => {
                    if (layer._olLayerGroup && layer._olLayerGroup.setVisible) {
                        layer._olLayerGroup.setVisible(false);
                    } else if (layer.setVisible) {
                        layer.setVisible(false);
                    }
                });
                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                    (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                searchInput.focus();
            });
            dropdown.appendChild(clearBtn);
        }
        if (!results.length || !searchInput.value.trim()) {
            dropdown.style.display = 'none';
            return;
        }
        // Limit results to 10
        results.slice(0, 10).forEach((layer, idx) => {
            const opt = document.createElement('div');
            opt.className = 'layer-search-option';
            opt.textContent = (layer.group ? layer.group + ': ' : '') + layer.title;
            opt.tabIndex = 0;

            // Opacity slider
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = 0;
            slider.max = 100;
            slider.value = (layer._olLayerGroup && layer._olLayerGroup.getOpacity) ? Math.round(layer._olLayerGroup.getOpacity() * 100) : (layer.getOpacity ? Math.round(layer.getOpacity() * 100) : 100);
            slider.style.marginLeft = '10px';
            slider.style.verticalAlign = 'middle';
            slider.title = 'Opacity';
            slider.addEventListener('input', function(e) {
                e.stopPropagation(); // Prevent event from bubbling up
                var val = parseInt(e.target.value, 10) / 100;
                if (layer._olLayerGroup && layer._olLayerGroup.setOpacity) {
                    layer._olLayerGroup.setOpacity(val);
                } else if (layer.setOpacity) {
                    layer.setOpacity(val);
                }
            });
            
            // Also prevent mousedown on the slider from closing the menu
            slider.addEventListener('mousedown', function(e) {
                e.stopPropagation();
            });
            opt.appendChild(slider);

            // Activation button
            const activateBtn = document.createElement('button');
            activateBtn.textContent = 'A';
            activateBtn.title = 'Toggle layer visibility';
            activateBtn.style.marginLeft = '10px';
            activateBtn.style.cursor = 'pointer';
            
            // Set initial active state with better visual feedback
            const isActive = (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) || 
                            (layer.getVisible && layer.getVisible());
            if (isActive) {
                opt.style.borderLeft = '3px solid #4CAF50';
                opt.style.paddingLeft = '9px';
                opt.style.marginLeft = '-3px';
                activateBtn.style.fontWeight = 'bold';
                activateBtn.style.backgroundColor = '#4CAF50';
                activateBtn.style.color = 'white';
            }
            
            activateBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle the selected layer's visibility
                let newState;
                if (layer._olLayerGroup && layer._olLayerGroup.getVisible) {
                    newState = !layer._olLayerGroup.getVisible();
                    layer._olLayerGroup.setVisible(newState);
                } else if (layer.getVisible) {
                    newState = !layer.getVisible();
                    layer.setVisible(newState);
                }
                
                // Update button and row appearance
                if (newState) {
                    opt.style.borderLeft = '3px solid #4CAF50';
                    opt.style.paddingLeft = '9px';
                    opt.style.marginLeft = '-3px';
                    activateBtn.style.fontWeight = 'bold';
                    activateBtn.style.backgroundColor = '#4CAF50';
                    activateBtn.style.color = 'white';
                } else {
                    opt.style.borderLeft = '';
                    opt.style.paddingLeft = '';
                    opt.style.marginLeft = '';
                    activateBtn.style.fontWeight = '';
                    activateBtn.style.backgroundColor = '';
                    activateBtn.style.color = '';
                }
                
                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                    (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
            });
            opt.appendChild(activateBtn);

            // Add up button for active layers
            const isLayerActive = (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) || 
                               (layer.getVisible && layer.getVisible());
            
            if (isLayerActive) {
                const upBtn = document.createElement('button');
                upBtn.textContent = '↑';
                upBtn.title = 'Move layer up in z-order';
                upBtn.style.marginLeft = '5px';
                upBtn.style.padding = '2px 5px';
                upBtn.style.cursor = 'pointer';
                upBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('Up button clicked for layer:', layer.title || layer.id || 'unnamed');
                    
                    // Move the layer up and update the UI
                    const success = moveLayerUp(layer);
                    console.log('moveLayerUp result:', success);
                    
                    if (success) {
                        const currentSearch = searchInput.value.toLowerCase();
                        console.log('Updating UI...');
                        
                        if (window.renderLayerList) {
                            window.renderLayerList(window.layers, currentSearch);
                        }
                        
                        // Re-render the dropdown to show the new order
                        const filteredLayers = window.layers.filter(l => 
                            l.title.toLowerCase().includes(currentSearch) || 
                            (l.group && l.group.toLowerCase().includes(currentSearch))
                        );
                        console.log('Rendering dropdown with filtered layers:', filteredLayers.length);
                        renderDropdown(filteredLayers);
                    }
                });
                opt.appendChild(upBtn);
            }


            opt.addEventListener('mousedown', function(e) {
                // Prevent slider or up button from triggering layer activation
                if (e.target === slider || (e.target.tagName === 'BUTTON' && e.target.textContent === '↑')) return;
                e.preventDefault();
                searchInput.value = ''; // Clear the search input
                dropdown.style.display = 'none';
                // Toggle layer visibility (allow multiple active)
                if (layer._olLayerGroup && layer._olLayerGroup.setVisible) {
                    layer._olLayerGroup.setVisible(!layer._olLayerGroup.getVisible());
                } else if (layer.setVisible) {
                    layer.setVisible(!layer.getVisible());
                }
                if (window.renderLayerList) {
                    window.renderLayerList(window.layers, '');
                }
            });
            dropdown.appendChild(opt);
        });
        dropdown.style.display = 'block';
    }

    function filterAndRender(filtered, query) {
        if (window.renderLayerList) {
            window.renderLayerList(filtered, query);
        }
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            dropdown.style.display = 'none';
            filterAndRender([], '');
            return;
        }
        
        // First filter by search query
        let filtered = window.layers.filter(layer => {
            const titleMatch = layer.title && layer.title.toLowerCase().includes(query);
            const groupMatch = layer.group && layer.group.toLowerCase().includes(query);
            return titleMatch || groupMatch;
        });
        
        // Then sort: active layers first, then by match relevance
        filtered.sort((a, b) => {
            const aActive = (a._olLayerGroup && a._olLayerGroup.getVisible && a._olLayerGroup.getVisible()) || 
                          (a.getVisible && a.getVisible());
            const bActive = (b._olLayerGroup && b._olLayerGroup.getVisible && b._olLayerGroup.getVisible()) || 
                          (b.getVisible && b.getVisible());
            
            // Active layers first
            if (aActive && !bActive) return -1;
            if (!aActive && bActive) return 1;
            
            // Then sort by position in the original array (z-order)
            return window.layers.indexOf(a) - window.layers.indexOf(b);
        });
        
        lastResults = filtered;
        lastQuery = query;
        renderDropdown(filtered);
        filterAndRender(filtered, query);
    });

    // Keyboard navigation for dropdown
    searchInput.addEventListener('keydown', function(e) {
        if (!['ArrowDown','ArrowUp','Enter','Escape'].includes(e.key)) return;
        const opts = dropdown.querySelectorAll('.layer-search-option');
        if (!opts.length) return;
        let idx = Array.from(opts).findIndex(opt => document.activeElement === opt);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            opts[Math.min(idx+1, opts.length-1)].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            opts[Math.max(idx-1, 0)].focus();
        } else if (e.key === 'Enter' && idx >= 0) {
            opts[idx].dispatchEvent(new MouseEvent('mousedown'));
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
        }
    });

    // Click outside handler
    document.addEventListener('click', function(e) {
        // If the click is outside both the search input and dropdown
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
    
    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Hide dropdown when search input loses focus (with a small delay to allow for button clicks)
    searchInput.addEventListener('blur', function() {
        setTimeout(function() {
            // Only hide if focus isn't moving to an element inside the dropdown
            if (!dropdown.contains(document.activeElement)) {
                dropdown.style.display = 'none';
            }
        }, 100);
    });
})();
