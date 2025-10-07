/**
 * Key Search Implementation for OSM Tags
 */

function initKeySearch() {
    console.log('🔑 initKeySearch called');
    const searchInput = $('#key-search');
    const resultsContainer = $('#key-search-dropdown');

    console.log('🔑 Key search input found:', searchInput.length);
    console.log('🔑 Key search dropdown found:', resultsContainer.length);

    if (!searchInput.length) {
        console.error('🔑 Key search input not found!');
        return;
    }

    if (!resultsContainer.length) {
        console.error('🔑 Key search dropdown not found!');
        return;
    }

    let searchTimeout;
    let currentResults = [];

    // Initialize search input with debugging
    searchInput.on('input', function() {
        const query = $(this).val().trim();
        console.log('🔑 Key search input:', query);

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
            console.log('🔑 Performing key search for:', query);
            performKeySearch(query);
        }, 300);
    });

    // Handle result selection
    resultsContainer.on('click', '.key-search-result', function() {
        const result = $(this).data('result');
        selectKeyResult(result);
    });

    // Handle keyboard navigation
    searchInput.on('keydown', function(e) {
        const highlighted = resultsContainer.find('.highlighted');

        switch(e.keyCode) {
            case 40: // Down arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').next().addClass('highlighted');
                } else {
                    resultsContainer.find('.key-search-result:first').addClass('highlighted');
                }
                break;
            case 38: // Up arrow
                e.preventDefault();
                if (highlighted.length) {
                    highlighted.removeClass('highlighted').prev().addClass('highlighted');
                } else {
                    resultsContainer.find('.key-search-result:last').addClass('highlighted');
                }
                break;
            case 13: // Enter
                e.preventDefault();
                if (highlighted.length) {
                    const result = highlighted.data('result');
                    selectKeyResult(result);
                }
                break;
            case 27: // Escape
                resultsContainer.empty().hide();
                searchInput.blur();
                break;
        }
    });

    function performKeySearch(query) {
        console.log('🔑 performKeySearch called with:', query);
        console.log('🔑 taginfoData.loaded:', window.taginfoData.loaded);

        if (!window.taginfoData.loaded) {
            console.log('🔑 Taginfo data not loaded, initializing...');
            window.initTaginfoAPI().then(() => {
                console.log('🔑 Taginfo API initialized, retrying search');
                performKeySearch(query);
            }).catch(error => {
                console.error('🔑 Failed to initialize taginfo API:', error);
            });
            return;
        }

        console.log('🔑 Searching for keys with query:', query);
        console.log('🔑 Available keys in map:', window.taginfoData.keys.size);

        const results = window.searchKeys(query, 10);
        console.log('🔑 Key search results:', results);
        displayKeyResults(results);

        // Trigger custom event for other components
        searchInput.trigger('keySearchResults', [results]);
    }

    function displayKeyResults(results) {
        console.log('🔑 displayKeyResults called with:', results.length, 'results');
        resultsContainer.empty();

        if (results.length === 0) {
            console.log('🔑 No results to display');
            resultsContainer.append('<div class="no-results">No keys found</div>');
            resultsContainer.show();
            return;
        }

        console.log('🔑 Displaying results...');
        results.forEach((result, index) => {
            console.log('🔑 Result', index, ':', result.key);
            const resultElement = $('<div>')
                .addClass('key-search-result')
                .data('result', result)
                .html(`
                    <div class="key-name">${escapeHtml(result.key)}</div>
                    <div class="key-definition">${escapeHtml(result.definition || 'No description available')}</div>
                    <div class="key-count">${formatNumber(result.totalCount)} uses</div>
                `);

            resultsContainer.append(resultElement);
        });

        console.log('🔑 Results displayed, showing container');
        resultsContainer.show();
    }

    function selectKeyResult(result) {
        console.log('🔑 selectKeyResult called with:', result);

        if (result.key) {
            searchInput.val(result.key);
            resultsContainer.empty().hide();

            // Communicate with value search - set the selected key
            const valueSearchInput = $('#value-search');
            if (valueSearchInput.length) {
                console.log('🔗 Setting key for value search:', result.key);
                valueSearchInput.data('selectedKey', result.key);

                // Trigger event for value search to know a key was selected
                valueSearchInput.trigger('keySelected', [result]);
            }

            console.log('✅ Key selected:', result.key);
        }
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

    // Hide results when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#key-search-container').length) {
            resultsContainer.empty().hide();
        }
    });
}

// Initialize when DOM is ready
$(document).ready(function() {
    console.log('🔑 DOM ready, initializing key search');
    initKeySearch();
});

// Export for use in other modules
window.initKeySearch = initKeySearch;
