// OpenLayers TMS/XYZ Layers for SE
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const SE_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Lantmäteriet Topographic Map",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://api.lantmateriet.se/open/topowebb-ccby/v1/wmts/token/9b342b7d9f12d4ddb92277be9869d860/1.0.0/topowebb/default/3857/{z}/{y}/{x}.png',
            attributions: '© Lantmäteriet, CC0',
            maxZoom: 15,
            minZoom: 3,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Snowmobile map Sweden",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.skoterleder.org/tiles/{z}/{x}/{y}.png',
            attributions: '© Skoterleder.org',
            maxZoom: 14,
            minZoom: 5,
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
window.layers = window.layers.concat(SE_TMS_LAYERS);
