// OpenLayers TMS/XYZ Layers for HT
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const HT_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Canaan - American Red Cross, Dec-2017",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.openaerialmap.org/5ac65a9f91b5310010e0d489/0/5ac65a9f91b5310010e0d48a/{z}/{x}/{y}.png',
            attributions: 'American Red Cross',
            maxZoom: 21,
            minZoom: 12,
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
window.layers = window.layers.concat(HT_TMS_LAYERS);*/
