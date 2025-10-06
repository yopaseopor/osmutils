// Taginfo Search Components
// Provides UI components for predictive key and value search

import { getTranslation } from './i18n/index.js';

class TaginfoSearchComponents {
    constructor() {
        this.keyInput = null;
        this.valueInput = null;
        this.elementTypeSelect = null;
        this.searchButton = null;
        this.searchContainer = null;
        this.keyDropdown = null;
        this.valueDropdown = null;

        this.selectedKey = '';
        this.selectedValue = '';
        this.selectedElementTypes = ['node', 'way', 'relation'];

        this.currentKeySuggestions = [];
        this.currentValueSuggestions = [];

        this.keyDropdownVisible = false;
        this.valueDropdownVisible = false;
    }

    // Initialize the search components in the UI
    init() {
        this.createSearchContainer();
        this.attachEventListeners();

        // Listen for taginfo data loading
        window.addEventListener('taginfoDataLoaded', (event) => {
            console.log('Taginfo data loaded:', event.detail);
        });
    }

    // Create the search container HTML
    createSearchContainer() {
        // Create main container
        this.searchContainer = document.createElement('div');
        this.searchContainer.id = 'taginfo-search-container';
        this.searchContainer.className = 'taginfo-search-wrapper';
        this.searchContainer.innerHTML = `
            <div class="search-section">
                <h4 data-i18n="taginfoSearchLabel">Search by OSM Tags</h4>

                <!-- Key Search -->
                <div class="search-group">
                    <label for="taginfo-key-search" data-i18n="keyLabel">Key:</label>
                    <div class="search-input-container">
                        <input type="text" id="taginfo-key-search" placeholder="Enter OSM key (e.g., amenity, highway)" autocomplete="off">
                        <div id="taginfo-key-dropdown" class="search-dropdown"></div>
                    </div>
                </div>

                <!-- Value Search -->
                <div class="search-group">
                    <label for="taginfo-value-search" data-i18n="valueLabel">Value:</label>
                    <div class="search-input-container">
                        <input type="text" id="taginfo-value-search" placeholder="Enter value (optional)" autocomplete="off">
                        <div id="taginfo-value-dropdown" class="search-dropdown"></div>
                    </div>
                </div>

                <!-- Element Type Selection -->
                <div class="search-group">
                    <label data-i18n="elementTypesLabel">Element Types:</label>
                    <div class="element-type-container">
                        <label class="checkbox-label">
                            <input type="checkbox" id="search-nodes" value="node" checked>
                            <span data-i18n="nodesLabel">Nodes</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" id="search-ways" value="way" checked>
                            <span data-i18n="waysLabel">Ways</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" id="search-relations" value="relation" checked>
                            <span data-i18n="relationsLabel">Relations</span>
                        </label>
                    </div>
                </div>

                <!-- Search Button -->
                <div class="search-group">
                    <button id="taginfo-search-button" class="search-button" data-i18n="searchButton">Search</button>
                </div>

                <!-- Results Info -->
                <div id="taginfo-search-info" class="search-info" style="display: none;"></div>
            </div>
        `;

        // Insert after the overlay search container
        const overlaySearchContainer = document.getElementById('overlay-search-container');
        if (overlaySearchContainer) {
            overlaySearchContainer.parentNode.insertBefore(this.searchContainer, overlaySearchContainer.nextSibling);
        }

        // Get references to elements
        this.keyInput = document.getElementById('taginfo-key-search');
        this.valueInput = document.getElementById('taginfo-value-search');
        this.elementTypeSelect = {
            nodes: document.getElementById('search-nodes'),
            ways: document.getElementById('search-ways'),
            relations: document.getElementById('search-relations')
        };
        this.searchButton = document.getElementById('taginfo-search-button');
        this.keyDropdown = document.getElementById('taginfo-key-dropdown');
        this.valueDropdown = document.getElementById('taginfo-value-dropdown');

        const searchInfo = document.getElementById('taginfo-search-info');
    }

    // Attach event listeners
    attachEventListeners() {
        // Key search input
        if (this.keyInput) {
            this.keyInput.addEventListener('input', (e) => this.handleKeyInput(e));
            this.keyInput.addEventListener('focus', (e) => this.handleKeyFocus(e));
            this.keyInput.addEventListener('keydown', (e) => this.handleKeyKeydown(e));
        }

        // Value search input
        if (this.valueInput) {
            this.valueInput.addEventListener('input', (e) => this.handleValueInput(e));
            this.valueInput.addEventListener('focus', (e) => this.handleValueFocus(e));
            this.valueInput.addEventListener('keydown', (e) => this.handleValueKeydown(e));
        }

        // Search button
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.performSearch());
        }

        // Element type checkboxes
        Object.values(this.elementTypeSelect).forEach(checkbox => {
            if (checkbox) {
                checkbox.addEventListener('change', () => this.updateElementTypes());
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => this.handleDocumentClick(e));

        // Close dropdowns on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideDropdowns();
            }
        });
    }

    // Handle key input
    handleKeyInput(e) {
        const query = e.target.value.trim();

        if (query.length < 1) {
            this.hideKeyDropdown();
            return;
        }

        this.currentKeySuggestions = window.taginfoSearch.searchKeys(query);
        this.showKeySuggestions();
    }

    // Handle key focus
    handleKeyFocus(e) {
        const query = e.target.value.trim();
        if (query.length > 0) {
            this.currentKeySuggestions = window.taginfoSearch.searchKeys(query);
            this.showKeySuggestions();
        }
    }

    // Handle key keydown
    handleKeyKeydown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateKeySuggestions(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateKeySuggestions(-1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.selectCurrentKeySuggestion();
        } else if (e.key === 'Tab' && this.keyDropdownVisible) {
            e.preventDefault();
            this.selectCurrentKeySuggestion();
        }
    }

    // Handle value input
    handleValueInput(e) {
        const query = e.target.value.trim();

        if (!this.selectedKey) {
            this.valueInput.value = '';
            return;
        }

        if (query.length < 1) {
            this.hideValueDropdown();
            return;
        }

        this.currentValueSuggestions = window.taginfoSearch.searchValues(this.selectedKey, query);
        this.showValueSuggestions();
    }

    // Handle value focus
    handleValueFocus(e) {
        if (!this.selectedKey) return;

        const query = e.target.value.trim();
        if (query.length > 0) {
            this.currentValueSuggestions = window.taginfoSearch.searchValues(this.selectedKey, query);
            this.showValueSuggestions();
        }
    }

    // Handle value keydown
    handleValueKeydown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateValueSuggestions(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateValueSuggestions(-1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.selectCurrentValueSuggestion();
        } else if (e.key === 'Tab' && this.valueDropdownVisible) {
            e.preventDefault();
            this.selectCurrentValueSuggestion();
        }
    }

    // Show key suggestions
    showKeySuggestions() {
        if (this.currentKeySuggestions.length === 0) {
            this.hideKeyDropdown();
            return;
        }

        const html = this.currentKeySuggestions.map((suggestion, index) =>
            `<div class="search-suggestion ${index === 0 ? 'selected' : ''}" data-index="${index}">
                <div class="suggestion-key">${this.escapeHtml(suggestion.key)}</div>
                <div class="suggestion-description">${this.escapeHtml(suggestion.description || '')}</div>
            </div>`
        ).join('');

        this.keyDropdown.innerHTML = html;
        this.keyDropdown.style.display = 'block';
        this.keyDropdownVisible = true;

        // Add click listeners
        this.keyDropdown.querySelectorAll('.search-suggestion').forEach((item, index) => {
            item.addEventListener('click', () => this.selectKeySuggestion(index));
        });
    }

    // Show value suggestions
    showValueSuggestions() {
        if (this.currentValueSuggestions.length === 0) {
            this.hideValueDropdown();
            return;
        }

        const html = this.currentValueSuggestions.map((suggestion, index) =>
            `<div class="search-suggestion ${index === 0 ? 'selected' : ''}" data-index="${index}">
                <div class="suggestion-tag">${this.escapeHtml(suggestion.display)}</div>
                <div class="suggestion-description">${this.escapeHtml(suggestion.description || '')}</div>
            </div>`
        ).join('');

        this.valueDropdown.innerHTML = html;
        this.valueDropdown.style.display = 'block';
        this.valueDropdownVisible = true;

        // Add click listeners
        this.valueDropdown.querySelectorAll('.search-suggestion').forEach((item, index) => {
            item.addEventListener('click', () => this.selectValueSuggestion(index));
        });
    }

    // Navigate key suggestions
    navigateKeySuggestions(direction) {
        if (!this.keyDropdownVisible) return;

        const suggestions = this.keyDropdown.querySelectorAll('.search-suggestion');
        const currentSelected = this.keyDropdown.querySelector('.selected');
        let newIndex = 0;

        if (currentSelected) {
            const currentIndex = parseInt(currentSelected.dataset.index);
            newIndex = Math.max(0, Math.min(suggestions.length - 1, currentIndex + direction));
        }

        suggestions.forEach(item => item.classList.remove('selected'));
        if (suggestions[newIndex]) {
            suggestions[newIndex].classList.add('selected');
        }
    }

    // Navigate value suggestions
    navigateValueSuggestions(direction) {
        if (!this.valueDropdownVisible) return;

        const suggestions = this.valueDropdown.querySelectorAll('.search-suggestion');
        const currentSelected = this.valueDropdown.querySelector('.selected');
        let newIndex = 0;

        if (currentSelected) {
            const currentIndex = parseInt(currentSelected.dataset.index);
            newIndex = Math.max(0, Math.min(suggestions.length - 1, currentIndex + direction));
        }

        suggestions.forEach(item => item.classList.remove('selected'));
        if (suggestions[newIndex]) {
            suggestions[newIndex].classList.add('selected');
        }
    }

    // Select key suggestion
    selectKeySuggestion(index) {
        if (this.currentKeySuggestions[index]) {
            this.selectedKey = this.currentKeySuggestions[index].key;
            this.keyInput.value = this.selectedKey;
            this.hideKeyDropdown();

            // Clear value when key changes
            this.selectedValue = '';
            this.valueInput.value = '';

            // Focus value input
            this.valueInput.focus();
        }
    }

    // Select current key suggestion
    selectCurrentKeySuggestion() {
        const selected = this.keyDropdown.querySelector('.selected');
        if (selected) {
            const index = parseInt(selected.dataset.index);
            this.selectKeySuggestion(index);
        }
    }

    // Select value suggestion
    selectValueSuggestion(index) {
        if (this.currentValueSuggestions[index]) {
            this.selectedKey = this.currentValueSuggestions[index].key;
            this.selectedValue = this.currentValueSuggestions[index].value;
            this.keyInput.value = this.selectedKey;
            this.valueInput.value = this.selectedValue;
            this.hideValueDropdown();
        }
    }

    // Select current value suggestion
    selectCurrentValueSuggestion() {
        const selected = this.valueDropdown.querySelector('.selected');
        if (selected) {
            const index = parseInt(selected.dataset.index);
            this.selectValueSuggestion(index);
        }
    }

    // Hide key dropdown
    hideKeyDropdown() {
        this.keyDropdown.style.display = 'none';
        this.keyDropdownVisible = false;
    }

    // Hide value dropdown
    hideValueDropdown() {
        this.valueDropdown.style.display = 'none';
        this.valueDropdownVisible = false;
    }

    // Hide all dropdowns
    hideDropdowns() {
        this.hideKeyDropdown();
        this.hideValueDropdown();
    }

    // Update selected element types
    updateElementTypes() {
        this.selectedElementTypes = [];
        if (this.elementTypeSelect.nodes.checked) this.selectedElementTypes.push('node');
        if (this.elementTypeSelect.ways.checked) this.selectedElementTypes.push('way');
        if (this.elementTypeSelect.relations.checked) this.selectedElementTypes.push('relation');
    }

    // Handle document click
    handleDocumentClick(e) {
        if (!this.searchContainer.contains(e.target)) {
            this.hideDropdowns();
        }
    }

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Perform search
    performSearch() {
        const key = this.keyInput.value.trim();
        const value = this.valueInput.value.trim();

        if (!key) {
            alert('Please enter a key to search for.');
            return;
        }

        // Update element types first
        this.updateElementTypes();

        // Dispatch search event
        window.dispatchEvent(new CustomEvent('taginfoSearch', {
            detail: {
                key,
                value: value || null,
                elementTypes: this.selectedElementTypes,
                bbox: this.getCurrentBbox()
            }
        }));
    }

    // Get current map bbox
    getCurrentBbox() {
        if (window.map) {
            const view = window.map.getView();
            const extent = view.calculateExtent();
            const epsg4326Extent = ol.proj.transformExtent(extent, view.getProjection(), 'EPSG:4326');
            return {
                minLon: epsg4326Extent[0],
                minLat: epsg4326Extent[1],
                maxLon: epsg4326Extent[2],
                maxLat: epsg4326Extent[3]
            };
        }
        return null;
    }

    // Show search info
    showSearchInfo(message) {
        const infoElement = document.getElementById('taginfo-search-info');
        if (infoElement) {
            infoElement.textContent = message;
            infoElement.style.display = 'block';
        }
    }

    // Hide search info
    hideSearchInfo() {
        const infoElement = document.getElementById('taginfo-search-info');
        if (infoElement) {
            infoElement.style.display = 'none';
        }
    }
}

// Create global instance
window.taginfoSearchComponents = new TaginfoSearchComponents();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.taginfoSearchComponents.init();
});

export { TaginfoSearchComponents };
export default window.taginfoSearchComponents;
