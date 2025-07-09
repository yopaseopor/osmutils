// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
    const searchInput = document.getElementById('layer-search');
    const dropdown = document.getElementById('layer-search-dropdown');

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        // Get all active layers and their indices
        const activeLayers = [];
        const activeLayerIndices = [];
        $.each(window.layers, function(indexLayer, layerObj) {
            const isVisible = (layerObj._olLayerGroup && layerObj._olLayerGroup.getVisible && layerObj._olLayerGroup.getVisible()) ||
                            (layerObj.getVisible && layerObj.getVisible());
            if (isVisible) {
                activeLayers.push(layerObj);
                activeLayerIndices.push(indexLayer);
            }
        });

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
                var val = parseInt(e.target.value, 10) / 100;
                if (layer._olLayerGroup && layer._olLayerGroup.setOpacity) {
                    layer._olLayerGroup.setOpacity(val);
                } else if (layer.setOpacity) {
                    layer.setOpacity(val);
                }
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

            // Layer orderer buttons - only show for active layers in search results
            const layerIsActive = (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) || 
                               (layer.getVisible && layer.getVisible());
            
            if (layerIsActive) {
                const upBtn = document.createElement('button');
                upBtn.textContent = '↑';
                upBtn.title = 'Move layer up in z-order';
                upBtn.style.marginLeft = '2px';
                upBtn.style.cursor = 'pointer';
                upBtn.style.backgroundColor = '#f0f0f0';
                upBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const idx = window.layers.indexOf(layer);
                    if (idx > 0) {
                        // Find previous active layer to swap with
                        for (let i = idx - 1; i >= 0; i--) {
                            const prevLayer = window.layers[i];
                            const isPrevActive = (prevLayer._olLayerGroup && prevLayer._olLayerGroup.getVisible && prevLayer._olLayerGroup.getVisible()) ||
                                              (prevLayer.getVisible && prevLayer.getVisible());
                            if (isPrevActive) {
                                // Swap in array
                                [window.layers[i], window.layers[idx]] = [window.layers[idx], window.layers[i]];
                                // Also swap in config.layers if present
                                if (window.config && Array.isArray(window.config.layers)) {
                                    [window.config.layers[i], window.config.layers[idx]] = [window.config.layers[idx], window.config.layers[i]];
                                }
                                // Force re-render of all layers to update z-index
                                window.layers.forEach((l, i) => {
                                    if (l._olLayerGroup && l._olLayerGroup.setZIndex) {
                                        l._olLayerGroup.setZIndex(window.layers.length - i);
                                    }
                                });
                                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                                renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                                    (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                                break;
                            }
                        }
                    }
                });
                opt.appendChild(upBtn);

                const downBtn = document.createElement('button');
                downBtn.textContent = '↓';
                downBtn.title = 'Move layer down in z-order';
                downBtn.style.marginLeft = '2px';
                downBtn.style.cursor = 'pointer';
                downBtn.style.backgroundColor = '#f0f0f0';
                downBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const idx = window.layers.indexOf(layer);
                    if (idx < window.layers.length - 1) {
                        // Find next active layer to swap with
                        for (let i = idx + 1; i < window.layers.length; i++) {
                            const nextLayer = window.layers[i];
                            const isNextActive = (nextLayer._olLayerGroup && nextLayer._olLayerGroup.getVisible && nextLayer._olLayerGroup.getVisible()) ||
                                              (nextLayer.getVisible && nextLayer.getVisible());
                            if (isNextActive) {
                                // Swap in array
                                [window.layers[i], window.layers[idx]] = [window.layers[idx], window.layers[i]];
                                // Also swap in config.layers if present
                                if (window.config && Array.isArray(window.config.layers)) {
                                    [window.config.layers[i], window.config.layers[idx]] = [window.config.layers[idx], window.config.layers[i]];
                                }
                                // Force re-render of all layers to update z-index
                                window.layers.forEach((l, i) => {
                                    if (l._olLayerGroup && l._olLayerGroup.setZIndex) {
                                        l._olLayerGroup.setZIndex(window.layers.length - i);
                                    }
                                });
                                if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                                renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                                    (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                                break;
                            }
                        }
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
            // If search is empty, show active layers first, then all layers
            const activeLayers = window.layers.filter(layer => 
                (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) ||
                (layer.getVisible && layer.getVisible())
            );
            lastResults = [...new Set([...activeLayers, ...window.layers])]; // Remove duplicates while preserving order
            renderDropdown(lastResults);
            filterAndRender(activeLayers, '');
            return;
        }
        
        // Filter layers by search query
        const filtered = window.layers.filter(layer =>
            (layer.title && layer.title.toLowerCase().includes(query)) ||
            (layer.group && layer.group.toLowerCase().includes(query))
        );
        
        lastResults = filtered;
        lastQuery = query;
        renderDropdown(filtered);
        
        // Only show active layers that match the search
        const activeFiltered = filtered.filter(layer => 
            (layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) ||
            (layer.getVisible && layer.getVisible())
        );
        filterAndRender(activeFiltered, query);
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

    // Hide dropdown on blur, but keep it open if the clear button is being clicked
    searchInput.addEventListener('blur', function() {
        setTimeout(function() {
            var clearBtn = document.getElementById('clear-active-layer-btn');
            if (clearBtn && document.activeElement === clearBtn) {
                return;
            }
            dropdown.style.display = 'none';
        }, 100);
    });
})();
