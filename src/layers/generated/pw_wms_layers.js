// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

const PWLayers = [
    new ol.layer.Tile({
        title: 'USDA Palau Imagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/rest/services/ortho_imagery/palau_vivid_2022_30cm/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default PWLayers;
