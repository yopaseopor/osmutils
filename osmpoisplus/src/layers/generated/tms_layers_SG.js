// OpenLayers TMS/XYZ Layers for SG
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const SG_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Singapore OneMap Orthophoto",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://www.onemap.gov.sg/maps/tiles/Satellite/{z}/{x}/{y}.png',
            attributions: '©OneMap Singapore ODL v1.0',
            maxZoom: 18,
            minZoom: 10,
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
window.layers = window.layers.concat(SG_TMS_LAYERS);*/
