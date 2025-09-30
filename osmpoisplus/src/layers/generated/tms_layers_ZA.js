// OpenLayers TMS/XYZ Layers for ZA
// Generated on: 2025-07-09 02:09:02
// Total layers: 4

export const ZA_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "City of Cape Town 2013 Aerial",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.coct.aerial.openstreetmap.org.za/layer/za_coct_aerial_2013/{z}/{x}/{y}.jpg',
            attributions: 'City of Cape Town Aerial - OPENSTREETMAP USE ONLY',
            maxZoom: 21,
            minZoom: 4,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "City of Cape Town 2015 Aerial",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.coct.aerial.openstreetmap.org.za/layer/za_coct_aerial_2015/{z}/{x}/{y}.jpg',
            attributions: 'City of Cape Town Aerial - OPENSTREETMAP USE ONLY',
            maxZoom: 21,
            minZoom: 4,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "City of Cape Town Aerial Imagery (2021)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://cityimg.capetown.gov.za/erdas-iws/esri/GeoSpatial%20Datasets/rest/services/Aerial%20Imagery_Aerial%20Imagery%202021Mar%20Cache/MapServer/tile/{z}/{y}/{x}',
            attributions: 'City of Cape Town Aerial',
            maxZoom: 18,
            minZoom: 4,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "South Africa CD:NGI Aerial",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://aerial.openstreetmap.org.za/ngi-aerial/{z}/{x}/{y}.jpg',
            attributions: '',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    })
];

/* Add to global layers array if it exists
if (typeof window.layers === 'undefined') {
    window.layers = [];
}
window.layers = window.layers.concat(ZA_TMS_LAYERS);*/
