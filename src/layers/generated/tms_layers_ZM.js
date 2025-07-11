// OpenLayers TMS/XYZ Layers for ZM
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const ZM_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Medium voltage gridlines",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://zmbgrid.zabop.workers.dev/{z}/{x}/{y}',
            attributions: '',
            maxZoom: 22,
            minZoom: 7,
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
window.layers = window.layers.concat(ZM_TMS_LAYERS);
