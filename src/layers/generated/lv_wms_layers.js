// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 9

const LVLayers = [
    new ol.layer.Tile({
        title: 'USSR - Latvia',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'http://www.gisnet.lv/cgi-bin/topo',
            params: {
                'LAYERS': 'DTO,DTC,DIVDPTC,PD,VS,DS,PS,M',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cadastral map, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'Data: VZD (Valsts zemes dienests); WMS service: LVM (Latvijas valsts meži)',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'publicwfs:Kadastra_karte',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophoto (1994–1999), B&W, 1:30000, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0) and WMS service.',
            url: 'https://servisi.lgia.gov.lv/lksopen/services/ORTO/Ortofoto_v1/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophoto (2007–2008), 1:10000, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0) and WMS service.',
            url: 'https://servisi.lgia.gov.lv/lksopen/services/ORTO/Ortofoto_v3_CIR/MapServer/WmsServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophoto (2010-2011), 1:5000, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0). WMS service is provided by LVM (Latvian State Forestry).',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'public:Orto_4cikls',
                'VERSION': '1.3.0',
                'FORMAT': 'image/vnd.jpeg-png8',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophoto (2013-2015), 1:5000, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0). WMS service is provided by LVM (Latvian State Forestry).',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'public:Orto_5cikls',
                'VERSION': '1.3.0',
                'FORMAT': 'image/vnd.jpeg-png8',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophoto (2016–2018), 1:5000, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0). WMS service is provided by LVM (Latvian State Forestry).',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'public:Orto_LKS',
                'VERSION': '1.3.0',
                'FORMAT': 'image/vnd.jpeg-png8',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Digital terrain model (2013–2019), LĢIA, Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0). WMS service is provided by LVM (Latvian State Forestry).',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'public:ZemeLKS',
                'VERSION': '1.3.0',
                'FORMAT': 'image/vnd.jpeg-png8',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'LĢIA topographic, 1:50000, 3 ed., Latvia',
        source: new ol.source.TileWMS({
            attributions: 'LĢIA (Latvian Geospatial Information Agency) provided these open data (CC0). WMS service is provided by LVM (Latvian State Forestry).',
            url: 'https://lvmgeoserver.lvm.lv/geoserver/ows',
            params: {
                'LAYERS': 'public:Topo50',
                'VERSION': '1.3.0',
                'FORMAT': 'image/vnd.jpeg-png8',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
];

export default LVLayers;
