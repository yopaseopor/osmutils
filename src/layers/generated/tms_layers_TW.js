// OpenLayers TMS/XYZ Layers for TW
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const TW_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "NLSC General Map with Contour line",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://wmts.nlsc.gov.tw/wmts/EMAP5_OPENDATA/default/EPSG:3857/{z}/{y}/{x}',
            attributions: '© National Land Surveying and Mapping Center, Taiwan OGDL 1.0',
            maxZoom: 15,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Taiwan e-Map Open Data",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://wmts.nlsc.gov.tw/wmts/EMAP6_OPENDATA/default/GoogleMapsCompatible/{z}/{y}/{x}',
            attributions: '© National Land Surveying and Mapping Center, Taiwan OGDL 1.0',
            maxZoom: 15,
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
window.layers = window.layers.concat(TW_TMS_LAYERS);*/
