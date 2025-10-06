# OSM Tag Search Integration

A predictive search component that allows users to search for OSM key=value pairs from the taginfo_definitions.csv file and display them on the map.

## Features

- **Predictive Search**: Type-ahead search for OSM tags
- **CSV Data Source**: Uses the generated taginfo_definitions.csv file
- **Map Integration**: Displays search results as vector layers on the map
- **Overpass API**: Queries live OSM data for selected tags
- **Multi-language Support**: Definitions in English, Catalan, and Spanish

## Files

- `src/tag_search.js` - Main tag search implementation
- `taginfo_definitions.csv` - Data source with tag definitions and statistics
- `src/index.js` - Integration with main application

## How It Works

1. **Load Tag Data**: Reads taginfo_definitions.csv file
2. **Search Interface**: Provides autocomplete search for tags
3. **Overpass Query**: When a tag is selected, queries Overpass API for live data
4. **Map Display**: Shows results as styled vector features on the map
5. **Statistics**: Displays usage counts and other metadata

## Usage

1. **Search for Tags**: Click the "Tags" button in the map controls
2. **Type Query**: Start typing to search for OSM key=value pairs
3. **Select Tag**: Click on a search result to query live data
4. **View Results**: See the tag features displayed on the map

## Search Results

The search provides:
- **Tag Name**: The key=value combination
- **Definition**: Multi-language description of the tag
- **Usage Count**: How many times the tag is used in OSM
- **Live Data**: Current OSM features with that tag

## Example Usage

```javascript
// Search for "building=residential"
initTagSearch(map); // Initialize the search component

// User searches and selects "building=residential"
// System queries Overpass API for:
// node[building=residential];
// way[building=residential];
// relation[building=residential];

// Results displayed as red vector features on map
```

## Integration

The tag search is integrated into the existing map interface alongside:
- Nominatim place search
- Mapillary street view
- PanoraMax viewer
- Layer controls
- Overlay management

## Data Source

The search uses `taginfo_definitions.csv` which contains:
- OSM tag key=value combinations
- Definitions in English, Catalan, and Spanish
- Usage statistics (count_all, count_nodes, etc.)
- Wiki documentation status
- Project associations

## API Integration

- **Taginfo API**: Used to generate the definitions CSV
- **Overpass API**: Used for live data queries
- **OpenLayers**: For map display and vector layers
- **jQuery**: For DOM manipulation and AJAX

## Performance

- **Client-side Search**: Fast filtering of local CSV data
- **Efficient Queries**: Optimized Overpass queries with timeout
- **Memory Management**: Proper cleanup of vector layers
- **Error Handling**: Graceful handling of API failures

## Customization

The search can be customized by:
- Modifying the CSV data source
- Adjusting search result limits
- Changing map styling for results
- Adding additional data columns
- Modifying the query parameters

## Troubleshooting

**Common Issues:**
- CSV file not found: Ensure taginfo_definitions.csv exists
- No search results: Check CSV format and column names
- API errors: Verify internet connection and Overpass API availability
- Map not updating: Check browser console for JavaScript errors

**Debug Information:**
- Check browser console for errors
- Verify CSV file format and encoding
- Test Overpass API connectivity
- Check map layer management
