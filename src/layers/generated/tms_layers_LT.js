// OpenLayers TMS/XYZ Layers for LT
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const LT_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Lithuania - NŽT ORT10LT",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://ort10lt.openmap.lt/g16/{z}/{x}/{y}.jpeg',
            attributions: 'NŽT ORT10LT',
            maxZoom: 18,
            minZoom: 4,
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
window.layers = window.layers.concat(LT_TMS_LAYERS);*/
