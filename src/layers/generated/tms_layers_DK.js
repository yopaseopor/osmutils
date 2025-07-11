// OpenLayers TMS/XYZ Layers for DK
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const DK_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "SDFI Aerial Imagery",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://osmtools.septima.dk/mapproxy/tiles/1.0.0/kortforsyningen_ortoforaar/EPSG3857/{z}/{x}/{y}.jpeg',
            attributions: 'Styrelsen for Dataforsyning og Infrastruktur',
            maxZoom: 21,
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
window.layers = window.layers.concat(DK_TMS_LAYERS);
