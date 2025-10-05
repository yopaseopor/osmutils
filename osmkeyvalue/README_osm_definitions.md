# OSM Taginfo Definitions Generator

A GUI application for creating multilingual definitions for OSM key=value pairs from Taginfo CSV data.

## Features

- **Load Taginfo CSV files** with OSM tag statistics
- **Auto-fill common translations** for frequently used tags
- **Manual definition editing** for custom definitions
- **Multi-language support**: English, Catalan, and Spanish
- **Progress tracking** with statistics
- **Export to CSV** with all definitions and count data

## Usage

```bash
cd /path/to/osmkeyvalue
python osm_definitions_generator.py
```

## How to Use

1. **Load CSV File**: Click "Browse..." to select your Taginfo CSV file (like `export_test_taginfo.csv`)
2. **Navigate Tags**: Use "Next Tag" to move through key=value pairs
3. **Auto-fill**: Click "Auto-fill from Common" to get predefined translations
4. **Edit Definitions**: Modify the English, Catalan, and Spanish definitions as needed
5. **Save**: Click "Save Definition" to store the current tag's definitions
6. **Export**: Click "Export CSV" to save all definitions to a new CSV file

## CSV Output Format

The exported CSV contains:

| Column | Description |
|--------|-------------|
| `key` | OSM tag key |
| `value` | OSM tag value |
| `tag` | Combined key=value |
| `definition_en` | English definition |
| `definition_ca` | Catalan definition |
| `definition_es` | Spanish definition |
| `count_all` | Total usage count |
| `count_nodes` | Count on nodes |
| `count_ways` | Count on ways |
| `count_relations` | Count on relations |
| `in_wiki` | Whether documented in OSM Wiki |
| `projects` | Number of related projects |

## Predefined Translations

The script includes predefined translations for common OSM tags including:

- **Buildings**: `building=yes`, `building=house`, `building=residential`, etc.
- **Highways**: `highway=residential`, `highway=service`, `highway=footway`, etc.
- **Natural features**: `natural=tree`, `natural=water`, etc.
- **Surface types**: `surface=asphalt`, `surface=concrete`, etc.
- **Land use**: `landuse=residential`, `landuse=commercial`, etc.
- **Amenities**: `amenity=school`, `amenity=hospital`, etc.

## Requirements

- Python 3.x
- Tkinter (usually included with Python)
- CSV file from Taginfo API (like `export_test_taginfo.csv`)

## Example Workflow

1. Download Taginfo data using the Taginfo downloader script
2. Load the CSV file in this definitions generator
3. Review and edit definitions for each key=value pair
4. Export the completed definitions for use in OSM tools or documentation

## Output Example

```csv
key,value,tag,definition_en,definition_ca,definition_es,count_all,count_nodes,count_ways,count_relations,in_wiki,projects
building,yes,building=yes,A building is a permanent construction with a roof and walls,Un edifici és una construcció permanent amb sostre i parets,Un edificio es una construcción permanente con techo y paredes,524808847,305361,523828637,674849,1,15
highway,residential,highway=residential,A residential road or street within a residential area,Un carrer o carretera residencial dins d'una zona residencial,Una carretera o calle residencial dentro de un área residencial,68464215,250,68463875,90,1,40
```

## Tips

- Use the auto-fill feature for common tags to save time
- Edit definitions manually for specialized or local tags
- Check the progress statistics to track your work
- Export periodically to avoid losing work
- The script remembers your definitions as you work through the list
