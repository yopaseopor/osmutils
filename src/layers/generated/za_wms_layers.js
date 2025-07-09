// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 4

const ZALayers = [
    new ol.layer.Tile({
        title: 'City of Cape Town Aerial Imagery (2017)',
        source: new ol.source.TileWMS({
            attributions: 'City of Cape Town Aerial',
            url: 'https://cityimg.capetown.gov.za:443/erdas-iws/ogc/wms/GeoSpatial%20Datasets',
            params: {
                'LAYERS': 'Aerial%20Imagery_Aerial%20Imagery%202017Jan',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Cape Town Aerial Imagery (2018)',
        source: new ol.source.TileWMS({
            attributions: 'City of Cape Town Aerial',
            url: 'https://cityimg.capetown.gov.za:443/erdas-iws/ogc/wms/GeoSpatial%20Datasets',
            params: {
                'LAYERS': 'Aerial%20Imagery_Aerial%20Imagery%202018Feb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Cape Town Aerial Imagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Cape Town Aerial',
            url: 'https://cityimg.capetown.gov.za:443/erdas-iws/ogc/wms/GeoSpatial%20Datasets',
            params: {
                'LAYERS': 'Aerial%20Imagery_Aerial%20Imagery%202023Jan',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Cape Town Aerial Imagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'City of Cape Town Aerial',
            url: 'https://cityimg.capetown.gov.za:443/erdas-iws/ogc/wms/GeoSpatial%20Datasets',
            params: {
                'LAYERS': 'Aerial%20Imagery_Aerial%20Imagery%202024',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default ZALayers;
