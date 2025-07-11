// OpenLayers TMS/XYZ Layers for PL
// Generated on: 2025-07-09 02:09:02
// Total layers: 1

export const PL_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Geoportal 2: Orthophotomap (latest aerial imagery) (WMTS)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTOFOTOMAPA&STYLE=default&FORMAT=image/jpeg&tileMatrixSet=EPSG:3857&tileMatrix=EPSG:3857:{z}&tileRow={y}&tileCol={x}',
            attributions: 'Główny Urząd Geodezji i Kartografii',
            maxZoom: 23,
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
window.layers = window.layers.concat(PL_TMS_LAYERS);*/
