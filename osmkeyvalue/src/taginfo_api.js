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
            console.log('✅ Taginfo data already loaded');
            resolve();
            return;
        }

        console.log('📂 Loading taginfo definitions from CSV...');
        fetch('taginfo_definitions.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                console.log('📄 CSV response status:', response.status);
                return response.text();
            })
            .then(csvText => {
                console.log('📊 CSV loaded, length:', csvText.length, 'characters');
                console.log('📝 First few lines:', csvText.split('\n').slice(0, 3));

                const startTime = Date.now();
                parseCSVData(csvText);
                const endTime = Date.now();

                window.taginfoData.loaded = true;
                console.log('✅ Taginfo definitions loaded successfully in', endTime - startTime, 'ms');
                console.log('📋 Keys loaded:', window.taginfoData.keys.size);
                console.log('📋 Values loaded:', window.taginfoData.values.size);
                console.log('📋 Definitions loaded:', window.taginfoData.definitions.size);

                resolve();
            })
            .catch(error => {
                console.error('❌ Error loading taginfo definitions:', error);
                reject(error);
            });
    });
}

/**
 * Parse CSV data and organize it for fast searching
 */
function parseCSVData(csvText) {
    console.log('🔄 Starting CSV parsing...');
    const lines = csvText.split('\n');
    console.log('📊 Total lines in CSV:', lines.length);

    if (lines.length === 0) {
        console.error('❌ CSV file is empty!');
        return;
    }

    // Parse header
    const headers = lines[0].split(',');
    console.log('📋 CSV Headers:', headers);

    if (headers.length < 5) {
        console.error('❌ CSV headers incomplete:', headers);
        return;
    }

    const expectedHeaders = ['key', 'value', 'tag', 'definition', 'countAll'];
    const hasExpectedHeaders = expectedHeaders.every(h => headers.includes(h));

    if (!hasExpectedHeaders) {
        console.warn('⚠️ CSV headers don\'t match expected format:', headers);
    }

    console.log('🔄 Processing', Math.min(1000, lines.length - 1), 'rows for testing...');

    // Process data rows
    for (let i = 1; i < lines.length && i < 1001; i++) {
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

    console.log('✅ CSV parsing completed');
    console.log('📋 Keys loaded:', window.taginfoData.keys.size);
    console.log('📋 Values loaded:', window.taginfoData.values.size);
    console.log('📋 Definitions loaded:', window.taginfoData.definitions.size);
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
    console.log('🔍 Searching keys for query:', query);
    if (!query || query.length < 1) return [];

    const results = [];
    const queryLower = query.toLowerCase();

    console.log('📋 Available keys:', window.taginfoData.keys.size);

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

    console.log('🔍 Key search results:', results.length, 'found');
    // Sort by total count (most popular first)
    results.sort((a, b) => b.totalCount - a.totalCount);

    return results;
}

/**
 * Search for values matching a query string for a specific key
 */
function searchValues(query, key = null, limit = 20) {
    console.log('🔍 Searching values for query:', query, 'key:', key);
    if (!query || query.length < 1) return [];

    const results = [];
    const queryLower = query.toLowerCase();

    if (key && window.taginfoData.keys.has(key)) {
        console.log('🔍 Searching values for specific key:', key);
        // Search values for specific key
        const keyData = window.taginfoData.keys.get(key);
        console.log('📋 Key data values count:', keyData.values.size);

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
        console.log('🔍 Specific key value results:', results.length);
    } else {
        console.log('🔍 Searching all values');
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
                    keys: keysWithValue, // Add array of keys that use this value
                    type: 'value'
                });

                if (results.length >= limit) break;
            }
        }
        console.log('🔍 All values results:', results.length);
    }

    // Sort by count (most popular first)
    results.sort((a, b) => (b.countAll || b.totalCount) - (a.countAll || a.totalCount));

    console.log('🔍 Final sorted results:', results.length);
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

// Test function for debugging
window.testTaginfoData = function() {
    console.log('🧪 Testing taginfo data...');
    console.log('📋 Keys loaded:', window.taginfoData.keys.size);
    console.log('📋 Values loaded:', window.taginfoData.values.size);
    console.log('📋 Definitions loaded:', window.taginfoData.definitions.size);
    console.log('📋 Data loaded:', window.taginfoData.loaded);

    if (window.taginfoData.keys.size > 0) {
        const firstKey = Array.from(window.taginfoData.keys.keys())[0];
        console.log('🔍 First key:', firstKey);
        console.log('🔍 Key data:', window.taginfoData.keys.get(firstKey));
    }

    // Test search
    console.log('🔍 Testing key search for "building"...');
    const keyResults = searchKeys('building', 5);
    console.log('🏗️ Building key results:', keyResults);

    return {
        keys: window.taginfoData.keys.size,
        values: window.taginfoData.values.size,
        definitions: window.taginfoData.definitions.size,
        loaded: window.taginfoData.loaded
    };
};
