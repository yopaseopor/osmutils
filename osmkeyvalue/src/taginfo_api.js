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
            console.log('📊 Taginfo data already loaded');
            resolve();
            return;
        }

        console.log('📊 Loading taginfo definitions from CSV...');
        fetch('taginfo_definitions.csv')
            .then(response => {
                console.log('📊 CSV fetch response:', response.status);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(csvText => {
                console.log('📊 CSV loaded, length:', csvText.length);
                parseCSVData(csvText);
                window.taginfoData.loaded = true;
                console.log('📊 Taginfo data loaded successfully');
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
    console.log('📊 Parsing CSV data...');
    const lines = csvText.split('\n');

    if (lines.length === 0) {
        console.error('❌ CSV file is empty!');
        return;
    }

    console.log('📊 CSV has', lines.length, 'lines');

    // Parse header
    const headers = lines[0].split(',');
    console.log('📊 CSV headers:', headers);

    // Process data rows (limit for performance)
    for (let i = 1; i < lines.length && i < 50000; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = parseCSVLine(line);
        if (values.length >= 14) {  // Updated to match actual CSV structure (14 columns)
            const [
                key, value, tag, definition, countAll, countNodes, countWays, countRelations,
                definition_en, in_wiki, description, icon, osm_key, osm_value
            ] = values;

            // Add to keys map
            if (!window.taginfoData.keys.has(key)) {
                window.taginfoData.keys.set(key, {
                    definition: definition_en || description || definition || '',  // Try multiple description fields
                    totalCount: 0,
                    values: new Map()
                });
            }

            const keyData = window.taginfoData.keys.get(key);
            keyData.values.set(value, {
                tag: tag,
                definition: definition_en || description || definition || '',  // Try multiple description fields
                countAll: parseInt(countAll) || 0,
                countNodes: parseInt(countNodes) || 0,
                countWays: parseInt(countWays) || 0,
                countRelations: parseInt(countRelations) || 0
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
                window.taginfoData.definitions.set(tag, definition_en || description || definition || '');
            }

            // Debug first few entries
            if (i <= 3) {
                console.log('📊 Sample entry:', {
                    key,
                    value,
                    countAll: parseInt(countAll) || 0,
                    definition_en: definition_en ? 'present' : 'empty',
                    description: description ? 'present' : 'empty',
                    definition: definition ? 'present' : 'empty'
                });
            }
        }
    }

    console.log('📊 Parsed keys:', window.taginfoData.keys.size);
    console.log('📊 Parsed values:', window.taginfoData.values.size);
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
    console.log('🔍 searchKeys called with:', query, 'limit:', limit);
    console.log('🔍 Available keys count:', window.taginfoData.keys.size);

    if (!query || query.length < 1) {
        console.log('🔍 Empty query, returning empty results');
        return [];
    }

    const results = [];
    const queryLower = query.toLowerCase();

    console.log('🔍 Searching through keys...');
    let matchCount = 0;
    for (const [key, keyData] of window.taginfoData.keys) {
        const keyLower = key.toLowerCase();
        const defLower = (keyData.definition || '').toLowerCase();

        if (keyLower.includes(queryLower) || defLower.includes(queryLower)) {
            matchCount++;
            console.log('🔍 Match found:', key, 'count:', keyData.totalCount, 'definition:', keyData.definition);

            results.push({
                key: key,
                definition: keyData.definition || '',
                totalCount: keyData.totalCount,
                type: 'key'
            });

            if (results.length >= limit) {
                console.log('🔍 Reached limit, stopping search');
                break;
            }
        }
    }

    // Sort by total count (most popular first)
    results.sort((a, b) => {
        const aCount = a.totalCount || 0;
        const bCount = b.totalCount || 0;
        return bCount - aCount;
    });

    console.log('🔍 Found', results.length, 'key results from', matchCount, 'matches');
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
                    type: 'value',
                    // Add default values for consistency
                    key: keysWithValue.length > 0 ? keysWithValue[0] : null,
                    tag: null,
                    definition: '',
                    countAll: valueData.totalCount
                });

                if (results.length >= limit) break;
            }
        }
    }

    // Sort by count (most popular first)
    results.sort((a, b) => {
        const aCount = a.countAll || a.totalCount || 0;
        const bCount = b.countAll || b.totalCount || 0;
        return bCount - aCount;
    });

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
