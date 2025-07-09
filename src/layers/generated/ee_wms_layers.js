// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 4

const EELayers = [
    new ol.layer.Tile({
        title: 'Maa-amet Basic Map',
        source: new ol.source.TileWMS({
            attributions: 'Maa-ameti põhikaart',
            url: 'https://kaart.maaamet.ee/wms/alus-geo',
            params: {
                'LAYERS': 'pohi_vr2',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Maa-amet Forestry',
        source: new ol.source.TileWMS({
            attributions: 'Maa-ameti metsanduslik ortofoto',
            url: 'https://kaart.maaamet.ee/wms/alus-geo',
            params: {
                'LAYERS': 'cir_ngr',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Maa-amet Cadastral Map',
        source: new ol.source.TileWMS({
            attributions: 'Maa-ameti katastrikaart ortofoto alusel',
            url: 'https://kaart.maaamet.ee/wms/alus-geo',
            params: {
                'LAYERS': 'of10000,TOPOYKSUS_6569,TOPOYKSUS_6573',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Maa-amet Ortho (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Maa-ameti ortofoto',
            url: 'https://kaart.maaamet.ee/wms/alus-geo',
            params: {
                'LAYERS': 'of10000',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default EELayers;
