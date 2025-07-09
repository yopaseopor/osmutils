// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 18

const ATLayers = [
    new ol.layer.Tile({
        title: 'BEV INSPIRE Orthofoto',
        source: new ol.source.TileWMS({
            attributions: 'Bundesamt für Eich- und Vermessungswesen',
            url: 'https://kataster.bev.gv.at/ortho/ows',
            params: {
                'LAYERS': 'bev:RGB',
                'VERSION': '2.0.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoimage.at MaxRes',
        source: new ol.source.TileWMS({
            attributions: 'geoimage.at',
            url: 'https://gis.lfrz.gv.at/wmsgw/',
            params: {
                'LAYERS': 'Luftbild',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Steiermark Surface',
        source: new ol.source.TileWMS({
            attributions: '© GIS-Steiermark',
            url: 'https://gis.stmk.gv.at/arcgis/services/OGD/als_schummerung/MapServer/WmsServer',
            params: {
                'LAYERS': 'Digitales_Oberflaechenmodell_DOM',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Steiermark Terrain',
        source: new ol.source.TileWMS({
            attributions: '© GIS-Steiermark',
            url: 'https://gis.stmk.gv.at/arcgis/services/OGD/als_schummerung/MapServer/WmsServer',
            params: {
                'LAYERS': 'Digitales_Gelaendemodell_DGM_multidirektional',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tiris: contour lines',
        source: new ol.source.TileWMS({
            attributions: 'tiris.tirol.gv.at',
            url: 'https://gis.tirol.gv.at/arcgis/services/Service_Public/terrain/MapServer/WmsServer',
            params: {
                'LAYERS': 'Hoehenschichtlinien_20m',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tiris: DGM (Terrain model)',
        source: new ol.source.TileWMS({
            attributions: 'tiris.tirol.gv.at',
            url: 'https://gis.tirol.gv.at/arcgis/services/Service_Public/terrain/MapServer/WmsServer',
            params: {
                'LAYERS': 'Image_Schummerung_Gelaendemodell',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tiris: DOM (Surface model)',
        source: new ol.source.TileWMS({
            attributions: 'tiris.tirol.gv.at',
            url: 'https://gis.tirol.gv.at/arcgis/services/Service_Public/terrain/MapServer/WmsServer',
            params: {
                'LAYERS': 'Image_Schummerung_Oberflaechenmodell',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tiris: orthophoto',
        source: new ol.source.TileWMS({
            attributions: 'tiris.tirol.gv.at',
            url: 'https://gis.tirol.gv.at/arcgis/services/Service_Public/orthofoto/MapServer/WmsServer',
            params: {
                'LAYERS': 'Image_Aktuell_RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Tiris: orthophoto infrared',
        source: new ol.source.TileWMS({
            attributions: 'tiris.tirol.gv.at',
            url: 'https://gis.tirol.gv.at/arcgis/services/Service_Public/orthofoto/MapServer/WmsServer',
            params: {
                'LAYERS': 'Image_Aktuell_CIR',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vienna: Mehrzweckkarte (situation)',
        source: new ol.source.TileWMS({
            attributions: 'Stadt Wien',
            url: 'https://stp.wien.gv.at/GeodatenviewerWMS',
            params: {
                'LAYERS': 'MZK_LINIE_L.DGMGKV1,MZK_LINIE_L.DGMGKV2,GRP__MZKSITUATION',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: DGM (Terrain model)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'schummerung_50cm_terrain',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: DOM (Surface model)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'schummerung_50cm_surface',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild 2012 (12cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'ef2012_12cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild 2015 (10cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'ef2015_10cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild 2018 (10cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'ef2018_10cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild 2020 (10cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'ef2020_10cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild 2022 (10cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'ef2022_10cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VoGIS: Echtfarbenbild Winter 2015 (20cm)',
        source: new ol.source.TileWMS({
            attributions: 'Datenquelle: Land Vorarlberg – data.vorarlberg.gv.at',
            url: 'https://vogis.cnv.at/mapserver/mapserv',
            params: {
                'LAYERS': 'wi2015_20cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default ATLayers;
