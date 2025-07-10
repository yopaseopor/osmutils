// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
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

            // Layer orderer buttons (only for active layers)
            const isLayerActive = (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) || 
                               (layer.getVisible && layer.getVisible());
            
            if (isLayerActive) {
                const upBtn = document.createElement('button');
                upBtn.textContent = '↑';
                upBtn.title = 'Move layer up in z-order';
                upBtn.style.marginLeft = '2px';
                upBtn.style.cursor = 'pointer';
                upBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const currentIdx = window.layers.indexOf(layer);
                    
                    if (currentIdx < window.layers.length - 1) {
                        // Move layer to the front (end of array)
                        window.layers.splice(currentIdx, 1);
                        window.layers.push(layer);
                        
                        // Update config if it exists
                        if (window.config && Array.isArray(window.config.layers)) {
                            const configLayer = window.config.layers.splice(currentIdx, 1)[0];
                            window.config.layers.push(configLayer);
                        }
                        
                        // Update the map
                        if (window.map) {
                            const mapLayers = window.map.getLayers().getArray();
                            const olLayer = layer._olLayerGroup || layer;
                            const layerIndex = mapLayers.findIndex(l => l === olLayer);
                            
                            if (layerIndex !== -1) {
                                mapLayers.splice(layerIndex, 1);
                                mapLayers.push(olLayer);
                                window.map.render();
                            }
                        }
                        
                        // Re-render the UI
                        if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                        renderDropdown(window.layers.filter(l => 
                            l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                            (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))
                        ));
                    }
                });
                opt.appendChild(upBtn);

                const downBtn = document.createElement('button');
                downBtn.textContent = '↓';
                downBtn.title = 'Move layer down in z-order';
                downBtn.style.marginLeft = '2px';
                downBtn.style.cursor = 'pointer';
                downBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const currentIdx = window.layers.indexOf(layer);
                    
                    if (currentIdx > 0) {
                        // Move layer to the back (beginning of array)
                        window.layers.splice(currentIdx, 1);
                        window.layers.unshift(layer);
                        
                        // Update config if it exists
                        if (window.config && Array.isArray(window.config.layers)) {
                            const configLayer = window.config.layers.splice(currentIdx, 1)[0];
                            window.config.layers.unshift(configLayer);
                        }
                        
                        // Update the map
                        if (window.map) {
                            const mapLayers = window.map.getLayers().getArray();
                            const olLayer = layer._olLayerGroup || layer;
                            const layerIndex = mapLayers.findIndex(l => l === olLayer);
                            
                            if (layerIndex !== -1) {
                                mapLayers.splice(layerIndex, 1);
                                mapLayers.unshift(olLayer);
                                window.map.render();
                            }
                        }
                        
                        // Re-render the UI
                        if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                        renderDropdown(window.layers.filter(l => 
                            l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                            (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))
                        ));
                    }
                });
                opt.appendChild(downBtn);
            }

            opt.addEventListener('mousedown', function(e) {
                // Prevent slider or orderer from triggering layer activation
                if (e.target === slider || e.target === upBtn || e.target === downBtn) return;
                e.preventDefault();
                searchInput.value = layer.title;
                dropdown.style.display = 'none';
                // Toggle layer visibility (allow multiple active)
                if (layer._olLayerGroup && layer._olLayerGroup.setVisible) {
                    layer._olLayerGroup.setVisible(!layer._olLayerGroup.getVisible());
                } else if (layer.setVisible) {
                    layer.setVisible(!layer.getVisible());
                }
                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
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
        let filtered = window.layers.filter(layer =>
            (layer.title && layer.title.toLowerCase().includes(query)) ||
            (layer.group && group.toLowerCase().includes(query))
        );
        
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
