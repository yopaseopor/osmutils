/**
 * Taginfo API for loading and searching OSM tag definitions from CSV
 */

// Global taginfo data storage
window.taginfoData = {
    keys: new Map(),
    values: new Map(),
    definitions: new Map(),
    loaded: false
};

/**
 * Load taginfo definitions from CSV file
 */
function loadTaginfoDefinitions() {
    return new Promise((resolve, reject) => {
        // Check if already loaded
        if (window.taginfoData.loaded) {
            resolve();
            return;
        }

        fetch('taginfo_definitions.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(csvText => {
                parseCSVData(csvText);
                window.taginfoData.loaded = true;
                resolve();
            })
            .catch(error => {
                console.error('Error loading taginfo definitions:', error);
                reject(error);
            });
    });
}

/**
 * Parse CSV data and organize it for fast searching
 */
function parseCSVData(csvText) {
    const lines = csvText.split('\n');

    if (lines.length === 0) {
        console.error('CSV file is empty!');
        return;
    }

    // Parse header
    const headers = lines[0].split(',');

    // Process data rows (limit for performance)
    for (let i = 1; i < lines.length && i < 50000; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = parseCSVLine(line);
        if (values.length >= 5) {
            const [key, value, tag, definition, countAll] = values;

            // Add to keys map
            if (!window.taginfoData.keys.has(key)) {
                window.taginfoData.keys.set(key, {
                    definition: '',
                    totalCount: 0,
                    values: new Map()
                });
            }

            const keyData = window.taginfoData.keys.get(key);
            keyData.values.set(value, {
                tag: tag,
                definition: definition,
                countAll: parseInt(countAll) || 0,
                countNodes: 0,
                countWays: 0,
                countRelations: 0
            });

            keyData.totalCount += parseInt(countAll) || 0;

            // Add to values map (for global value search)
            if (!window.taginfoData.values.has(value)) {
                window.taginfoData.values.set(value, {
                    totalCount: 0
                });
            }
            window.taginfoData.values.get(value).totalCount += parseInt(countAll) || 0;

            // Add to definitions
            if (tag) {
                window.taginfoData.definitions.set(tag, definition);
            }
        }
    }
}

/**
 * Parse a single CSV line handling quoted values
 */
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                // Escaped quote
                current += '"';
                i++; // Skip next quote
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // End of field
            values.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    // Add final field
    values.push(current);

    return values;
}

/**
 * Search for keys matching a query string
 */
function searchKeys(query, limit = 20) {
    if (!query || query.length < 1) return [];

    const results = [];
    const queryLower = query.toLowerCase();

    for (const [key, keyData] of window.taginfoData.keys) {
        if (key.toLowerCase().includes(queryLower) ||
            (keyData.definition && keyData.definition.toLowerCase().includes(queryLower))) {

            results.push({
                key: key,
                definition: keyData.definition || '',
                totalCount: keyData.totalCount,
                type: 'key'
            });

            if (results.length >= limit) break;
        }
    }

    // Sort by total count (most popular first)
    results.sort((a, b) => b.totalCount - a.totalCount);

    return results;
}

/**
 * Search for values matching a query string for a specific key
 */
function searchValues(query, key = null, limit = 20) {
    if (!query || query.length < 1) return [];

    const results = [];
    const queryLower = query.toLowerCase();

    if (key && window.taginfoData.keys.has(key)) {
        // Search values for specific key
        const keyData = window.taginfoData.keys.get(key);
        for (const [value, valueData] of keyData.values) {
            if (value.toLowerCase().includes(queryLower) ||
                (valueData.definition && valueData.definition.toLowerCase().includes(queryLower))) {

                results.push({
                    key: key,
                    value: value,
                    tag: valueData.tag,
                    definition: valueData.definition || '',
                    countAll: valueData.countAll,
                    countNodes: valueData.countNodes,
                    countWays: valueData.countWays,
                    countRelations: valueData.countRelations,
                    type: 'value'
                });

                if (results.length >= limit) break;
            }
        }
    } else {
        // Search all values
        for (const [value, valueData] of window.taginfoData.values) {
            if (value.toLowerCase().includes(queryLower)) {
                // Find keys that use this value
                const keysWithValue = [];
                for (const [keyItem, keyData] of window.taginfoData.keys) {
                    if (keyData.values.has(value)) {
                        keysWithValue.push(keyItem);
                    }
                }

                results.push({
                    value: value,
                    totalCount: valueData.totalCount,
                    keys: keysWithValue,
                    type: 'value'
                });

                if (results.length >= limit) break;
            }
        }
    }

    // Sort by count (most popular first)
    results.sort((a, b) => (b.countAll || b.totalCount) - (a.countAll || a.totalCount));

    return results;
}

/**
 * Get tag definition by tag string (key=value format)
 */
function getTagDefinition(tag) {
    return window.taginfoData.definitions.get(tag) || null;
}

/**
 * Generate Overpass query for a key-value combination with bbox and element type filtering
 */
function generateOverpassQuery(key, value, bbox, elementTypes = ['node', 'way', 'relation']) {
    const elements = elementTypes.join('|');
    const query = `[out:xml][timeout:25];
(${elements}["${key}"="${value}"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});
);out meta;`;

    return query;
}

/**
 * Initialize taginfo API
 */
function initTaginfoAPI() {
    return loadTaginfoDefinitions();
}

// Export functions for use in other modules
window.loadTaginfoDefinitions = loadTaginfoDefinitions;
window.searchKeys = searchKeys;
window.searchValues = searchValues;
window.getTagDefinition = getTagDefinition;
window.generateOverpassQuery = generateOverpassQuery;
window.initTaginfoAPI = initTaginfoAPI;
