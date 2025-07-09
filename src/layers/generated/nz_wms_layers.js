// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

const NZLayers = [
    new ol.layer.Tile({
        title: 'Environment Canterbury Imagery',
        source: new ol.source.TileWMS({
            attributions: 'Environment Canterbury',
            url: 'https://gisbasemap.ecan.govt.nz/arcgis/rest/services/Imagery/MapServer/export',
            params: {
                'LAYERS': 'export',
                'VERSION': '1.3.0',
                'FORMAT': 'jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default NZLayers;
