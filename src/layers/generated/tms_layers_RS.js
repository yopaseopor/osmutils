// OpenLayers TMS/XYZ Layers for RS
// Generated on: 2025-07-09 02:09:02
// Total layers: 3

export const RS_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Official Serbia OSM (cyr)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.openstreetmap.rs/cir/{z}/{x}/{y}.png',
            attributions: 'openstreetmap.rs',
            maxZoom: 20,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Official Serbia OSM (lat)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.openstreetmap.rs/lat/{z}/{x}/{y}.png',
            attributions: 'openstreetmap.rs',
            maxZoom: 20,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "RGZ address and street open data overlay",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://vector-rgz.openstreetmap.rs/styles/rgz-big/{z}/{x}/{y}.png',
            attributions: 'openstreetmap.rs',
            maxZoom: 21,
            minZoom: 8,
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
window.layers = window.layers.concat(RS_TMS_LAYERS);*/
