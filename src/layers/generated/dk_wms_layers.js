// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 5

const DKLayers = [
    new ol.layer.Tile({
        title: 'SDFI Cadastral Parcels INSPIRE View',
        source: new ol.source.TileWMS({
            attributions: 'Geodatastyrelsen og Styrelsen for Dataforsyning og Infrastruktur',
            url: 'https://kortforsyningen.kms.dk/cp_inspire',
            params: {
                'LAYERS': 'CP.CadastralParcel',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SDFI DTK Map25',
        source: new ol.source.TileWMS({
            attributions: 'Styrelsen for Dataforsyning og Infrastruktur',
            url: 'https://api.dataforsyningen.dk/dtk_25_DAF',
            params: {
                'LAYERS': 'dtk25',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SDFI Screenmap',
        source: new ol.source.TileWMS({
            attributions: 'Styrelsen for Dataforsyning og Infrastruktur',
            url: 'https://services.datafordeler.dk/DKskaermkort/topo_skaermkort/1.0.0/Wms',
            params: {
                'LAYERS': 'dtk_skaermkort',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SDFI Surface Shadow Map (40 cm)',
        source: new ol.source.TileWMS({
            attributions: 'Styrelsen for Dataforsyning og Infrastruktur',
            url: 'https://api.dataforsyningen.dk/dhm_DAF',
            params: {
                'LAYERS': 'dhm_overflade_skyggekort',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SDFI Terrain Shadow Map (40 cm)',
        source: new ol.source.TileWMS({
            attributions: 'Styrelsen for Dataforsyning og Infrastruktur',
            url: 'https://api.dataforsyningen.dk/dhm_DAF',
            params: {
                'LAYERS': 'dhm_terraen_skyggekort',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default DKLayers;
