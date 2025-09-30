// OpenLayers TMS/XYZ Layers for PH
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const PH_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Lupang Arenda, Taytay Drone Imagery",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.openaerialmap.org/5d25d7bf161a790005c03e6e/0/5d25d7bf161a790005c03e6f/{z}/{x}/{y}.png',
            attributions: '',
            maxZoom: 22,
            minZoom: 14,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Pangasinán/Bulacan (Philippines HiRes)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://gravitystorm.dev.openstreetmap.org/imagery/philippines/{z}/{x}/{y}.png',
            attributions: '',
            maxZoom: 19,
            minZoom: 14,
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
window.layers = window.layers.concat(PH_TMS_LAYERS);*/
