# OSM Automatic Definitions Generator

A GUI application that automatically generates **specific definitions** for OSM key=value pairs from Taginfo CSV data using a comprehensive translation database.

## Features

- **Specific Value Definitions**: Generates definitions that include the actual key=value combinations
- **Comprehensive Database**: Contains specific translations for common OSM tags
- **Multi-language Support**: English, Catalan, and Spanish definitions
- **Filtering Options**: Filter by minimum count and wiki documentation status
- **Batch Processing**: Processes all tags in one operation
- **CSV Export**: Exports complete definitions with all statistical data

## Usage

```bash
cd /path/to/osmkeyvalue
python osm_auto_definitions_generator.py
```

## How It Works

The script uses a comprehensive database of specific key=value translations:

1. **Load CSV File**: Select your Taginfo CSV file (like `export_test_taginfo.csv`)
2. **Apply Filters**: Set minimum count threshold and wiki-only options
3. **Generate All**: Automatically processes all key=value pairs with specific definitions
4. **Export Results**: Save complete definitions to CSV file

## Specific Translations

The script includes specific definitions for common OSM key=value combinations:

### Building Tags
- `building=residential` → "A residential building is a structure designed specifically for housing people and families"
- `building=commercial` → "A commercial building is a structure used for business activities, offices, and retail operations"
- `building=school` → "A school building is an educational facility where students learn and study various subjects"

### Highway Tags
- `highway=residential` → "A residential road is a street or road located within a residential area, designed for local traffic"
- `highway=footway` → "A footway is a path or walkway designated exclusively for pedestrian use, where vehicles are not allowed"
- `highway=primary` → "A primary road is a major highway connecting important destinations, forming the primary road network"

### Surface Tags
- `surface=asphalt` → "Asphalt is a sticky, black, highly viscous petroleum-based material commonly used for road surfaces"
- `surface=concrete` → "Concrete is a hard, durable composite material made from cement, aggregate, and water, used for various surfaces"

### Natural Features
- `natural=tree` → "A tree is a perennial woody plant with a trunk, branches, and leaves that grows naturally in the environment"
- `natural=water` → "A water body is any significant accumulation of water, such as a lake, river, stream, or ocean"

## Settings

### Filter Options
- **Minimum Count**: Only include tags with at least X total uses (default: 1000)
- **Wiki Only**: Only include tags documented in the OSM Wiki (optional)

### Generation Process
1. Loads all key=value pairs from CSV
2. Applies selected filters
3. Generates specific definitions using the translation database
4. Shows progress and statistics
5. Allows preview of first 10 results
6. Exports complete CSV file

## Output Format

The exported CSV contains:

| Column | Description |
|--------|-------------|
| `key` | OSM tag key |
| `value` | OSM tag value |
| `tag` | Combined key=value |
| `definition_en` | English definition (specific to key=value) |
| `definition_ca` | Catalan definition (specific to key=value) |
| `definition_es` | Spanish definition (specific to key=value) |
| `count_all` | Total usage count |
| `count_nodes` | Count on nodes |
| `count_ways` | Count on ways |
| `count_relations` | Count on relations |
| `in_wiki` | Whether documented in OSM Wiki |
| `projects` | Number of related projects |

## Example Output

```csv
key,value,tag,definition_en,definition_ca,definition_es,count_all
building,residential,building=residential,A residential building is a structure designed specifically for housing people and families,Un edifici residencial és una estructura dissenyada específicament per allotjar persones i famílies,Un edificio residencial es una estructura diseñada específicamente para alojar personas y familias,524808847
highway,footway,highway=footway,A footway is a path or walkway designated exclusively for pedestrian use, where vehicles are not allowed,Un camí per a vianants és un camí o passeig designat exclusivament per a l'ús de vianants, on els vehicles no estan permesos,Un camino peatonal es un camino o paseo designado exclusivamente para uso peatonal, donde los vehículos no están permitidos,28258682
surface,asphalt,surface=asphalt,Asphalt is a sticky, black, highly viscous petroleum-based material commonly used for road surfaces,L'asfalt és un material viscós negre enganxós basat en petroli comunament utilitzat per a superfícies de carreteres,El asfalto es un material viscoso negro pegajoso basado en petróleo comúnmente utilizado para superficies de carreteras,33466269
```

## Supported Tags

The script includes specific definitions for:

- **Buildings**: residential, commercial, industrial, school, office, retail, apartments, hotel, hospital, etc.
- **Highways**: residential, service, footway, track, primary, secondary, tertiary, path, cycleway, etc.
- **Natural**: tree, water, wood, grassland, etc.
- **Surface**: asphalt, concrete, paved, unpaved, grass, etc.
- **Landuse**: residential, commercial, industrial, forest, etc.
- **Amenities**: school, hospital, restaurant, cafe, bank, pharmacy, parking, etc.
- **Source data**: Microsoft Building Footprints, etc.

## Performance

- **Batch Processing**: Handles large CSV files efficiently
- **Memory Efficient**: Processes data in streams
- **Progress Tracking**: Real-time progress updates
- **Error Handling**: Robust error handling for malformed data

## Benefits

✅ **Specific Definitions**: Each key=value gets its own tailored definition
✅ **No Manual Work**: Fully automatic processing of all tags
✅ **Quality Translations**: Professionally crafted multilingual definitions
✅ **Complete Data**: Includes all statistical information from source CSV
✅ **Flexible Filtering**: Focus on most important or documented tags

## Tips

- Use minimum count filter (e.g., 1000) to focus on widely used tags
- Enable wiki-only filter for officially documented tags
- Review the preview before exporting to verify quality
- Export periodically during large processing operations

## Recent Updates

### Version 2.0 - Specific Value Definitions
- **Fixed value inclusion**: Now includes specific key=value combinations in definitions
- **Comprehensive database**: Added specific translations for common OSM tag combinations
- **Better accuracy**: Definitions now accurately reflect the specific tag values
- **Enhanced quality**: More detailed and accurate descriptions for each tag type
