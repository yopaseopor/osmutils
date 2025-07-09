// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 2

const SGLayers = [
    new ol.layer.Tile({
        title: 'Singapore Landlot',
        source: new ol.source.TileWMS({
            attributions: '©OneMap Singapore ODL v1.0',
            url: 'https://www.onemap.gov.sg/maps/service',
            params: {
                'LAYERS': 'LandLot',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Singapore OneMap',
        source: new ol.source.TileWMS({
            attributions: '©OneMap Singapore ODL v1.0',
            url: 'https://www.onemap.gov.sg/maps/service',
            params: {
                'LAYERS': 'Default',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default SGLayers;
