// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

const FMLayers = [
    new ol.layer.Tile({
        title: 'USDA Micronesia Imagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/services/ortho_imagery/micronesia_vivid_2023_30cm/ImageServer/WMSServer',
            params: {
                'LAYERS': 'micronesia_vivid_2023_30cm:Natural Color No Stretch',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default FMLayers;
