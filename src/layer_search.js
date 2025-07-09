// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
    const searchInput = document.getElementById('layer-search');
    const dropdown = document.getElementById('layer-search-dropdown');

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        // Get all active layers and track their indices
        const activeLayers = [];
        const activeLayerIndices = [];
        $.each(window.layers, function(indexLayer, layerObj) {
            const isVisible = (layerObj._olLayerGroup && layerObj._olLayerGroup.getVisible && layerObj._olLayerGroup.getVisible()) ||
                            (layer.getVisible && layer.getVisible());
            if (isVisible) {
                activeLayers.push(layerObj);
                activeLayerIndices.push(indexLayer);
            }
        });

        // Add active layers section if there are any
        if (activeLayers.length > 0) {
            const activeHeader = document.createElement('div');
            activeHeader.textContent = 'Active Layers:';
            activeHeader.style.padding = '6px 10px';
            activeHeader.style.background = '#e8f5e9';
            activeHeader.style.fontWeight = 'bold';
            activeHeader.style.borderBottom = '1px solid #c8e6c9';
            dropdown.appendChild(activeHeader);

            // Add each active layer with move controls
            activeLayers.forEach((activeLayer, activeIndex) => {
                const activeItem = document.createElement('div');
                activeItem.className = 'layer-search-option active-layer';
                activeItem.style.display = 'flex';
                activeItem.style.alignItems = 'center';
                activeItem.style.padding = '4px 10px';
                activeItem.style.borderLeft = '3px solid #4CAF50';
                activeItem.style.marginLeft = '-3px';
                
                const layerName = document.createElement('span');
                layerName.textContent = (activeLayer.group ? activeLayer.group + ': ' : '') + activeLayer.title;
                layerName.style.flexGrow = '1';
                layerName.style.padding = '2px 0';
                
                // Add move up button
                const moveUp = document.createElement('button');
                moveUp.textContent = '↑';
                moveUp.title = 'Move layer up in z-order';
                moveUp.style.margin = '0 2px';
                moveUp.style.padding = '2px 6px';
                moveUp.style.cursor = 'pointer';
                moveUp.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const currentIndex = window.layers.indexOf(activeLayer);
                    if (currentIndex > 0) {
                        // Swap with layer above
                        [window.layers[currentIndex - 1], window.layers[currentIndex]] = 
                            [window.layers[currentIndex], window.layers[currentIndex - 1]];
                        if (window.renderLayerList) window.renderLayerList(window.layers, '');
                        renderDropdown([]); // Refresh dropdown
                    }
                });
                
                // Add move down button
                const moveDown = document.createElement('button');
                moveDown.textContent = '↓';
                moveDown.title = 'Move layer down in z-order';
                moveDown.style.margin = '0 2px';
                moveDown.style.padding = '2px 6px';
                moveDown.style.cursor = 'pointer';
                moveDown.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const currentIndex = window.layers.indexOf(activeLayer);
                    if (currentIndex < window.layers.length - 1) {
                        // Swap with layer below
                        [window.layers[currentIndex], window.layers[currentIndex + 1]] = 
                            [window.layers[currentIndex + 1], window.layers[currentIndex]];
                        if (window.renderLayerList) window.renderLayerList(window.layers, '');
                        renderDropdown([]); // Refresh dropdown
                    }
                });
                
                activeItem.appendChild(layerName);
                activeItem.appendChild(moveUp);
                activeItem.appendChild(moveDown);
                dropdown.appendChild(activeItem);
            });
            
            // Add separator
            const separator = document.createElement('div');
            separator.style.height = '1px';
            separator.style.background = '#e0e0e0';
            separator.style.margin = '5px 0';
            dropdown.appendChild(separator);
        }

        // Add a 'Clear Active Layers' button if any layers are active (moved to top for better visibility)
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

            // Layer orderer buttons (only show if layer is active)
            if ((layer._olLayerGroup && layer._olLayerGroup.getVisible && layer._olLayerGroup.getVisible()) || 
                (layer.getVisible && layer.getVisible())) {
                
                const upBtn = document.createElement('button');
                upBtn.textContent = '↑';
                upBtn.title = 'Move layer up in z-order';
                upBtn.style.marginLeft = '2px';
                upBtn.style.padding = '2px 6px';
                upBtn.style.cursor = 'pointer';
                upBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const idx = window.layers.indexOf(layer);
                    if (idx > 0) {
                        [window.layers[idx-1], window.layers[idx]] = [window.layers[idx], window.layers[idx-1]];
                        if (window.config && Array.isArray(window.config.layers)) {
                            [window.config.layers[idx-1], window.config.layers[idx]] = [window.config.layers[idx], window.config.layers[idx-1]];
                        }
                        if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                        renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                            (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                    }
                });
                opt.appendChild(upBtn);

                const downBtn = document.createElement('button');
                downBtn.textContent = '↓';
                downBtn.title = 'Move layer down in z-order';
                downBtn.style.marginLeft = '2px';
                downBtn.style.padding = '2px 6px';
                downBtn.style.cursor = 'pointer';
                downBtn.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const idx = window.layers.indexOf(layer);
                    if (idx < window.layers.length - 1) {
                        [window.layers[idx], window.layers[idx+1]] = [window.layers[idx+1], window.layers[idx]];
                        if (window.config && Array.isArray(window.config.layers)) {
                            [window.config.layers[idx], window.config.layers[idx+1]] = [window.config.layers[idx+1], window.config.layers[idx]];
                        }
                        if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                        renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || 
                            (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
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
        const filtered = window.layers.filter(layer =>
            (layer.title && layer.title.toLowerCase().includes(query)) ||
            (layer.group && layer.group.toLowerCase().includes(query))
        );
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
