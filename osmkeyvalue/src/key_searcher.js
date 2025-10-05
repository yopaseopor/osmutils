// Taginfo Key Searcher: predictive search for OSM keys
// Replaces the layer searcher with Taginfo-based key search

(function() {
    'use strict';

    const searchInput = document.getElementById('key-search');
    const dropdown = document.getElementById('key-search-dropdown');

    let currentQuery = '';
    let searchTimeout = null;
    let selectedKey = null;

    // Debounce search requests
    function debounceSearch(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(searchTimeout);
                func(...args);
            };
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(later, wait);
        };
    }

    // Format key display with description
    function formatKeyDisplay(keyData) {
        const key = keyData.key;
        const count = keyData.count;
        const description = keyData.description;
        const inWiki = keyData.inWiki;

        let display = `<strong>${key}</strong>`;
        if (description) {
            display += ` - ${description}`;
        }
        display += ` <span style="color: #666; font-size: 0.9em;">(${count.toLocaleString()} uses)</span>`;

        if (inWiki) {
            display += ' <span style="color: #4CAF50; font-size: 0.8em;">📖</span>';
        }

        return display;
    }

    // Render dropdown with search results
    function renderDropdown(keys) {
        dropdown.innerHTML = '';

        if (!keys || keys.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        keys.forEach((keyData, index) => {
            const option = document.createElement('div');
            option.className = 'key-search-option';
            option.innerHTML = formatKeyDisplay(keyData);
            option.tabIndex = 0;

            // Highlight selected key
            if (selectedKey === keyData.key) {
                option.style.backgroundColor = '#e3f2fd';
                option.style.borderLeft = '3px solid #2196F3';
            }

            option.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();

                selectedKey = keyData.key;
                searchInput.value = keyData.key;
                dropdown.style.display = 'none';

                // Trigger key selection event
                const event = new CustomEvent('keySelected', {
                    detail: { key: keyData.key, keyData: keyData }
                });
                window.dispatchEvent(event);

                // Focus on value search if available
                const valueSearchInput = document.getElementById('overlay-search');
                if (valueSearchInput) {
                    valueSearchInput.focus();
                }
            });

            dropdown.appendChild(option);
        });

        dropdown.style.display = 'block';
    }

    // Handle key search input
    function handleKeySearch() {
        const query = searchInput.value.trim();

        if (!query) {
            dropdown.style.display = 'none';
            selectedKey = null;
            return;
        }

        if (query === currentQuery) {
            return; // Don't search for the same query
        }

        currentQuery = query;

        // Search for keys using Taginfo API
        if (window.TaginfoAPI) {
            window.TaginfoAPI.fetchKeys(query, 10)
                .then(keys => {
                    renderDropdown(keys);
                })
                .catch(error => {
                    console.error('Error searching keys:', error);
                    dropdown.style.display = 'none';
                });
        }
    }

    // Debounced search handler
    const debouncedSearch = debounceSearch(handleKeySearch, 300);

    // Setup event listeners
    function setupEventListeners() {
        if (!searchInput) {
            console.error('Key search input not found');
            return;
        }

        searchInput.addEventListener('input', debouncedSearch);

        // Keyboard navigation
        searchInput.addEventListener('keydown', (e) => {
            const options = dropdown.querySelectorAll('.key-search-option');

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    if (options.length > 0) {
                        options[0].focus();
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (options.length > 0) {
                        options[options.length - 1].focus();
                    }
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (options.length > 0) {
                        options[0].dispatchEvent(new MouseEvent('mousedown'));
                    }
                    break;
                case 'Escape':
                    dropdown.style.display = 'none';
                    searchInput.blur();
                    break;
            }
        });

        // Handle option keyboard navigation
        dropdown.addEventListener('keydown', (e) => {
            const options = dropdown.querySelectorAll('.key-search-option');
            const currentIndex = Array.from(options).findIndex(opt => opt === document.activeElement);

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = Math.min(currentIndex + 1, options.length - 1);
                    options[nextIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = Math.max(currentIndex - 1, 0);
                    options[prevIndex].focus();
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (currentIndex >= 0) {
                        options[currentIndex].dispatchEvent(new MouseEvent('mousedown'));
                    }
                    break;
                case 'Escape':
                    dropdown.style.display = 'none';
                    searchInput.focus();
                    break;
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // Hide dropdown on blur (with delay to allow for option clicks)
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) {
                    dropdown.style.display = 'none';
                }
            }, 150);
        });
    }

    // Initialize when DOM is ready
    function initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupEventListeners);
        } else {
            setupEventListeners();
        }
    }

    // Update placeholder text
    function updatePlaceholder() {
        if (searchInput) {
            searchInput.placeholder = 'Search OSM keys...';
        }
    }

    // Public API
    window.KeySearcher = {
        initialize,
        updatePlaceholder,
        getSelectedKey: () => selectedKey
    };

    // Auto-initialize
    initialize();
    updatePlaceholder();

})();
