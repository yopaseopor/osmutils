// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 2

const TWLayers = [
    new ol.layer.Tile({
        title: 'Taiwan Land-Section Data',
        source: new ol.source.TileWMS({
            attributions: '© National Land Surveying and Mapping Center, Taiwan OGDL 1.0',
            url: 'https://wms.nlsc.gov.tw/wms',
            params: {
                'LAYERS': 'LANDSECT',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Taiwan Village Boundaries',
        source: new ol.source.TileWMS({
            attributions: '© National Land Surveying and Mapping Center, Taiwan OGDL 1.0',
            url: 'https://wms.nlsc.gov.tw/wms',
            params: {
                'LAYERS': 'Village',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default TWLayers;
