// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 11

export const CALayers = [
    new ol.layer.Tile({
        title: 'Canvec - French',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://maps.geogratis.gc.ca/wms/canvec_fr',
            params: {
                'LAYERS': 'canvec',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canvec - English',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://maps.geogratis.gc.ca/wms/canvec_en',
            params: {
                'LAYERS': 'canvec',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geobase Hydrography - French',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://maps.geogratis.gc.ca/wms/hydro_network_fr',
            params: {
                'LAYERS': 'nhn:nhn',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geobase Hydrography - English',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://maps.geogratis.gc.ca/wms/hydro_network_en',
            params: {
                'LAYERS': 'nhn:nhn',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geobase Roads - French',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://cartes.geogratis.gc.ca/wms/roads_fr',
            params: {
                'LAYERS': 'routes',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geobase Roads - English',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://maps.geogratis.gc.ca/wms/roads_en',
            params: {
                'LAYERS': 'roads',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'High Resolution Digital Elevation Model Mosaic (DSM)',
        source: new ol.source.TileWMS({
            attributions: 'Contains information licensed under the Open Government Licence – Canada',
            url: 'https://datacube.services.geo.ca/wrapper/ogc/elevation-hrdem-mosaic',
            params: {
                'LAYERS': 'dsm-hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'High Resolution Digital Elevation Model Mosaic (DTM)',
        source: new ol.source.TileWMS({
            attributions: 'Contains information licensed under the Open Government Licence – Canada',
            url: 'https://datacube.services.geo.ca/wrapper/ogc/elevation-hrdem-mosaic',
            params: {
                'LAYERS': 'dtm-hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Toronto Latest Orthoimagery',
        source: new ol.source.TileWMS({
            attributions: 'Contains information licensed under the Open Government Licence – Toronto',
            url: 'https://gis.toronto.ca/arcgis/services/basemap/cot_ortho/MapServer/WmsServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Ontario Orthophotography Mosaic 2018-2022 (CIR)',
        source: new ol.source.TileWMS({
            attributions: 'Contains information licensed under the Open Government Licence – Ontario',
            url: 'https://ws.geoservices.lrc.gov.on.ca/arcgis5/services/AerialImagery/GEO_Imagery_Data_Service_2018to2022/ImageServer/WMSServer/',
            params: {
                'LAYERS': 'GEO_Imagery_Data_Service_2018to2022:NaturalResource_FalseColourComposite',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Ontario Orthophotography Mosaic 2018-2022 (RGB)',
        source: new ol.source.TileWMS({
            attributions: 'Contains information licensed under the Open Government Licence – Ontario',
            url: 'https://ws.geoservices.lrc.gov.on.ca/arcgis5/services/AerialImagery/GEO_Imagery_Data_Service_2018to2022/ImageServer/WMSServer/',
            params: {
                'LAYERS': 'GEO_Imagery_Data_Service_2018to2022:None',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
visible: false
    })
];

