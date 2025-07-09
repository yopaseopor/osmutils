// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 11

const HRLayers = [
    new ol.layer.Tile({
        title: 'dgu.hr: Croatia 2011 Aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/dof/ows',
            params: {
                'LAYERS': 'DOF5_2011',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Croatia 2014-2016 Aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/inspire/orthophoto_2014-2016/ows',
            params: {
                'LAYERS': 'OI.OrthoImagery',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Croatia 2019-2020 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/inspire/orthophoto_2019_2020/ows',
            params: {
                'LAYERS': 'OI.OrthoimageCoverage',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Croatia 2021-2022 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/inspire/orthophoto_2021_2022/ows',
            params: {
                'LAYERS': 'OI.OrthoimageCoverage',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: HOK',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/hok/ows',
            params: {
                'LAYERS': 'HOK5',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Topo 100',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/tk/ows',
            params: {
                'LAYERS': 'tk:TK100',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Topo 200',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/tk/ows',
            params: {
                'LAYERS': 'tk:TK200',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Topo 25 new',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/tk/ows',
            params: {
                'LAYERS': 'tk:TK25_NOVI',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'dgu.hr: Topo 25',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Državne geodetske uprave',
            url: 'https://geoportal.dgu.hr/services/tk/ows',
            params: {
                'LAYERS': 'tk:TK25',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'gis-rijeka: Rijeka 2012 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Geografskog informacijskog sustava Grada Rijeke',
            url: 'http://gis01.rijeka.hr/geoserver/CKAN/wms',
            params: {
                'LAYERS': 'Ortofoto_2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'gis-rijeka: Rijeka 2020 aerial imagery',
        source: new ol.source.TileWMS({
            attributions: 'Sadrži podatke Geografskog informacijskog sustava Grada Rijeke',
            url: 'http://gis01.rijeka.hr/geoserver/CKAN/wms',
            params: {
                'LAYERS': 'Ortofoto_2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
];

export default HRLayers;
