// OpenLayers TMS/XYZ Layers for IT
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const IT_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Bologna ortofoto 2017",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://sitmappe.comune.bologna.it/tms/tileserver/Ortofoto2017/{z}/{x}/{y}.png',
            attributions: '© Comune di Bologna cc-by 4.0 ODbL compliant',
            maxZoom: 19,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Bologna ortofoto 2022",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://sitmappe.comune.bologna.it/tms/tileserver/Ortofoto2022/{z}/{x}/{y}.png',
            attributions: '© Comune di Bologna cc-by 4.0 ODbL compliant',
            maxZoom: 19,
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
window.layers = window.layers.concat(IT_TMS_LAYERS);*/
