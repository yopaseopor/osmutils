// OpenLayers TMS/XYZ Layers for FI
// Generated on: 2025-07-09 02:09:02
// Total layers: 3

const FI_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "MML Background Map",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.kartat.kapsi.fi/taustakartta/{z}/{x}/{y}.png',
            attributions: '© Maanmittauslaitos',
            maxZoom: 19,
            minZoom: 2,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "MML Orthophoto",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.kartat.kapsi.fi/ortokuva/{z}/{x}/{y}.png',
            attributions: '© Maanmittauslaitos',
            maxZoom: 19,
            minZoom: 2,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "MML Topographic Map",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.png',
            attributions: '© Maanmittauslaitos',
            maxZoom: 19,
            minZoom: 2,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }
];

// Add to global layers array if it exists
if (typeof window.layers === 'undefined') {
    window.layers = [];
}
window.layers = window.layers.concat(FI_TMS_LAYERS);
