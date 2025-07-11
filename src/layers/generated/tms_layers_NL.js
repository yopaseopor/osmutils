// OpenLayers TMS/XYZ Layers for NL
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const NL_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "PDOK aerial imagery Beeldmateriaal.nl 8cm (WMTS) latest",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=Actueel_orthoHR&STYLE=&FORMAT=image/jpeg&tileMatrixSet=OGC:1.0:GoogleMapsCompatible&tileMatrix={z}&tileRow={y}&tileCol={x}',
            attributions: 'Kadaster / Beeldmateriaal.nl, CC BY 4.0',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "PDOK BGT standaardvisualisatie",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://service.pdok.nl/lv/bgt/wmts/v1_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=standaardvisualisatie&STYLE=&FORMAT=image/png&tileMatrixSet=EPSG:3857&tileMatrix={z}&tileRow={y}&tileCol={x}',
            attributions: 'Kadaster, Basisregistratie Grootschalige Topografie (BGT)',
            maxZoom: 24,
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
window.layers = window.layers.concat(NL_TMS_LAYERS);
