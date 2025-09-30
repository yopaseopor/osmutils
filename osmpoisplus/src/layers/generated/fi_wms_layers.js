// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 7

export const FILayers = [
    new ol.layer.Tile({
        title: 'FTIA Road Network',
        source: new ol.source.TileWMS({
            attributions: '© Liikennevirasto',
            url: 'https://avoinapi.vaylapilvi.fi/vaylatiedot/digiroad/ows',
            params: {
                'LAYERS': 'dr_tielinkki_toim_lk',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Helsinki region orthophoto',
        source: new ol.source.TileWMS({
            attributions: '© Espoon, Helsingin ja Vantaan kaupungit, Kirkkonummen ja Nurmijärven kunnat sekä HSL ja HSY',
            url: 'https://kartta.hsy.fi/geoserver/ows',
            params: {
                'LAYERS': 'taustakartat_ja_aluejaot:Ortoilmakuva_2017',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tampere aerial imagery 2022',
        source: new ol.source.TileWMS({
            attributions: '© City of Tampere',
            url: 'https://georaster.tampere.fi/geoserver/ows',
            params: {
                'LAYERS': 'georaster%3Atampere_2022_3067_r0125',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Turku ortophoto - 2018 True ortho',
        source: new ol.source.TileWMS({
            attributions: '© Turun kaupunki',
            url: 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx',
            params: {
                'LAYERS': 'Ilmakuva 2018 True ortho',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Turku ortophoto - 2018',
        source: new ol.source.TileWMS({
            attributions: '© Turun kaupunki',
            url: 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx',
            params: {
                'LAYERS': 'Turunseutu%20ilmakuva%202018',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Turku ortophoto - 2021',
        source: new ol.source.TileWMS({
            attributions: '© Turun kaupunki',
            url: 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx',
            params: {
                'LAYERS': 'Ilmakuva 2021',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Turku topographic map',
        source: new ol.source.TileWMS({
            attributions: '© Turun kaupunki',
            url: 'https://opaskartta.turku.fi/TeklaOGCWeb/WMS.ashx',
            params: {
                'LAYERS': 'Maastokartta',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
visible: false
    })
];

