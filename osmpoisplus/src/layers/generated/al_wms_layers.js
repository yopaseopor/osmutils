// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

export const ALLayers = [
    new ol.layer.Tile({
        title: 'Address System Albania (ASIG)',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoportal.asig.gov.al/service/adresar/ows',
            params: {
                'LAYERS': 'adr_ndertese,adr_numertim,adr_rruge',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
visible: false
    })
];

