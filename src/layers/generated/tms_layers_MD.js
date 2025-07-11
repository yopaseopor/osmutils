// OpenLayers TMS/XYZ Layers for MD
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const MD_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "American Aerial Imagery (1966)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://chronica.md/api/tiles/1966/data/v3/{z}/{x}/{y}.png',
            attributions: '© Simpals SRL, U.S. Geological Survey',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "German Aerial Imagery (1944)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://chronica.md/api/tiles/1940/data/v3/{z}/{x}/{y}.png',
            attributions: '© Simpals SRL, Bundesarchiv - Stabsbildabteilung',
            maxZoom: 18,
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
window.layers = window.layers.concat(MD_TMS_LAYERS);*/
