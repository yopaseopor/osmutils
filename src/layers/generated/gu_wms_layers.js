// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

export const GULayers = [
    new ol.layer.Tile({
        title: 'USDA Guam Imagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/services/ortho_imagery/guam_vivid_2022_30cm/ImageServer/WMSServer',
            params: {
                'LAYERS': 'guam_vivid_2022_30cm:Natural Color No Stretch',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
visible: false
    })
];

