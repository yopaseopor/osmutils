// Taginfo Search Module
// Loads and provides predictive search functionality for OSM keys and values

class TaginfoSearch {
    constructor() {
        this.csvData = [];
        this.keys = new Set();
        this.values = new Map(); // key -> Set of values
        this.definitions = new Map(); // key=value -> definition
        this.isLoaded = false;
    }

    // Load CSV data from the taginfo_definitions file
    async loadData() {
        try {
            console.log('Loading taginfo definitions...');
            const response = await fetch('taginfo_definitions.csv');
            const csvText = await response.text();

            // Parse CSV (simple parser for this format)
            const lines = csvText.split('\n');
            const headers = lines[0].split(',');

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;

                // Simple CSV parsing (handles quoted values)
                const values = this.parseCSVLine(line);
                if (values.length < 14) continue; // Skip malformed lines

                const key = values[0];
                const value = values[1];
                const tag = values[2];
                const definition_en = values[3];

                // Store data
                this.keys.add(key);

                // Store values for each key
                if (!this.values.has(key)) {
                    this.values.set(key, new Set());
                }
                this.values.get(key).add(value);

                // Store definitions
                this.definitions.set(tag, definition_en);

                // Store full record
                this.csvData.push({
                    key,
                    value,
                    tag,
                    definition_en,
                    definition_ca: values[4],
                    definition_es: values[5],
                    count_all: parseInt(values[6]) || 0,
                    count_nodes: parseInt(values[8]) || 0,
                    count_ways: parseInt(values[10]) || 0,
                    count_relations: parseInt(values[12]) || 0,
                    in_wiki: values[14] === 'Yes',
                    projects: parseInt(values[15]) || 0
                });
            }

            this.isLoaded = true;
            console.log(`Loaded ${this.csvData.length} tag definitions`);
            console.log(`Found ${this.keys.size} unique keys`);

            // Dispatch event when data is loaded
            window.dispatchEvent(new CustomEvent('taginfoDataLoaded', {
                detail: {
                    keysCount: this.keys.size,
                    valuesCount: Array.from(this.values.values()).reduce((sum, set) => sum + set.size, 0),
                    recordsCount: this.csvData.length
                }
            }));

        } catch (error) {
            console.error('Error loading taginfo definitions:', error);
        }
    }

    // Simple CSV line parser that handles quoted values
    parseCSVLine(line) {
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

        // Add the last field
        values.push(current);

        return values;
    }

    // Get suggestions for keys based on query
    searchKeys(query, limit = 10) {
        if (!this.isLoaded) return [];

        const queryLower = query.toLowerCase();
        const matches = [];

        for (const key of this.keys) {
            if (key.toLowerCase().includes(queryLower)) {
                matches.push({
                    key,
                    type: 'key',
                    display: key,
                    description: this.getKeyDescription(key)
                });

                if (matches.length >= limit) break;
            }
        }

        return matches;
    }

    // Get suggestions for values based on key and query
    searchValues(key, query, limit = 10) {
        if (!this.isLoaded || !this.values.has(key)) return [];

        const queryLower = query.toLowerCase();
        const valuesSet = this.values.get(key);
        const matches = [];

        for (const value of valuesSet) {
            if (value.toLowerCase().includes(queryLower)) {
                const tag = `${key}=${value}`;
                matches.push({
                    key,
                    value,
                    tag,
                    type: 'value',
                    display: `${key}=${value}`,
                    description: this.definitions.get(tag) || ''
                });

                if (matches.length >= limit) break;
            }
        }

        return matches;
    }

    // Get description for a key
    getKeyDescription(key) {
        // Find the most common value for this key to get a representative description
        const keyData = this.csvData.filter(item => item.key === key);
        if (keyData.length === 0) return '';

        // Sort by total count and get the description from the most common value
        keyData.sort((a, b) => b.count_all - a.count_all);
        return keyData[0].definition_en || '';
    }

    // Get detailed information about a tag
    getTagInfo(key, value) {
        const tag = `${key}=${value}`;
        return this.csvData.find(item => item.key === key && item.value === value);
    }

    // Get popular keys (for suggestions)
    getPopularKeys(limit = 20) {
        if (!this.isLoaded) return [];

        const keyStats = new Map();

        for (const item of this.csvData) {
            if (!keyStats.has(item.key)) {
                keyStats.set(item.key, {
                    key: item.key,
                    totalCount: 0,
                    description: item.definition_en || ''
                });
            }
            keyStats.get(item.key).totalCount += item.count_all;
        }

        return Array.from(keyStats.values())
            .sort((a, b) => b.totalCount - a.totalCount)
            .slice(0, limit)
            .map(item => ({
                key: item.key,
                type: 'key',
                display: item.key,
                description: item.description,
                popularity: item.totalCount
            }));
    }

    // Get popular values for a key
    getPopularValues(key, limit = 10) {
        if (!this.isLoaded) return [];

        return this.csvData
            .filter(item => item.key === key)
            .sort((a, b) => b.count_all - a.count_all)
            .slice(0, limit)
            .map(item => ({
                key: item.key,
                value: item.value,
                tag: item.tag,
                type: 'value',
                display: `${key}=${item.value}`,
                description: item.definition_en || '',
                count: item.count_all
            }));
    }
}

// Create global instance
window.taginfoSearch = new TaginfoSearch();

// Initialize when module loads
console.log('Taginfo search module loaded');

// Auto-load data
window.taginfoSearch.loadData();

export { TaginfoSearch };
export default window.taginfoSearch;
