// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 30

const BELayers = [
    new ol.layer.Tile({
        title: 'Digitaal Vlaanderen DHV II, multidirectional hillshade 0,25 m',
        source: new ol.source.TileWMS({
            attributions: '© Digitaal Vlaanderen',
            url: 'https://geo.api.vlaanderen.be/DHMV/wms',
            params: {
                'LAYERS': 'DHMV_II_HILL_25cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Digitaal Vlaanderen DHV II, Skyview factor 0,25 m',
        source: new ol.source.TileWMS({
            attributions: '© Digitaal Vlaanderen',
            url: 'https://geo.api.vlaanderen.be/DHMV/wms',
            params: {
                'LAYERS': 'DHMV_II_SVF_25cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Digitaal Vlaanderen 2013-2015 aerial imagery 10cm',
        source: new ol.source.TileWMS({
            attributions: '© Digitaal Vlaanderen',
            url: 'https://geo.api.vlaanderen.be/OGW/wms',
            params: {
                'LAYERS': 'OGWRGB13_15VL',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Digitaal Vlaanderen Wegenregister',
        source: new ol.source.TileWMS({
            attributions: '© Digitaal Vlaanderen',
            url: 'https://geo.api.vlaanderen.be/Wegenregister/wms',
            params: {
                'LAYERS': 'LABELS,AARDEWEG,WANDFIETS,PLLWEG,VENTWEG,OPAFGGKR,OPAFOGKR,VERKPLEIN,SPECSIT,ROT,DIENSTWEG,WEGEEN,WEGGESCH,AUTOSWEG',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) most recent aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_LAST/MapServer/WmsServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2009-2010 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2009_2010/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2012-2013 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2012_2013/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2015 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2015/MapServer/WmsServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2016 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2016/MapServer/WmsServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2018 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2018/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2019 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2019/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2020 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2020/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) 2021 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2021/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) PICC numerical imagery',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC_VDIFF/MapServer/WmsServer',
            params: {
                'LAYERS': '1,3,4,5,7,9,10,11,12,13,14,16,17,19,21,22,23,24,26,27,28,29,31',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SPW(allonie) shaded relief',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geoservices.wallonie.be/arcgis/services/RELIEF/WALLONIE_MNT_2013_2014_HILLSHADE/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'TEC bus lines',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geodata.tec-wl.be/arcgis/services/Lignes/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'TEC bus stops',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://geodata.tec-wl.be/arcgis/services/Poteaux/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbisAdm FR',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/BaseMaps/ows',
            params: {
                'LAYERS': 'UrbISFrenchLabeledColor',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbisAdm FR/NL',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/BaseMaps/ows',
            params: {
                'LAYERS': 'UrbISNotLabeledColor',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbisAdm NL',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/BaseMaps/ows',
            params: {
                'LAYERS': 'UrbISDutchLabeledColor',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'CIRB/CIBG most recent aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'URBIS 2009 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2009',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'URBIS 2012 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'URBIS 2014 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2014',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'URBIS 2015 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbIS-Ortho 2016',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbIS-Ortho 2017',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2017',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbIS-Ortho 2018',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2018',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbIS-Ortho 2019',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2019',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'UrbIS-Ortho 2020',
        source: new ol.source.TileWMS({
            attributions: 'Realized by means of Brussels UrbIS®© - Distribution & Copyright CIRB',
            url: 'https://geoservices-urbis.irisnet.be/geoserver/urbisgrid/ows',
            params: {
                'LAYERS': 'Ortho2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
];

export default BELayers;
