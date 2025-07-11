// OpenLayers TMS/XYZ Layers for SK
// Generated on: 2025-07-09 02:09:02
// Total layers: 9

export const SK_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "DSM 1.0 shading",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://dmp1-shading.tiles.freemap.sk/{z}/{x}/{y}.jpg',
            attributions: 'ÚGKK SR',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "DTM 5.0 light shading",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://dmr5-light-shading.tiles.freemap.sk/{z}/{x}/{y}.jpg',
            attributions: 'ÚGKK SR',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "DTM 5.0 shading",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://dmr5-shading.tiles.freemap.sk/{z}/{x}/{y}.jpg',
            attributions: 'ÚGKK SR',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Freemap.sk Bicycle",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.freemap.sk/C/{z}/{x}/{y}.jpeg',
            attributions: 'Map © Freemap Slovakia, data © OpenStreetMap contributors and SRTM',
            maxZoom: 16,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Freemap.sk Car",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.freemap.sk/A/{z}/{x}/{y}.jpeg',
            attributions: 'Map © Freemap Slovakia, data © OpenStreetMap contributors',
            maxZoom: 16,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Freemap.sk Hiking",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.freemap.sk/T/{z}/{x}/{y}.jpeg',
            attributions: 'Map © Freemap Slovakia, data © OpenStreetMap contributors and SRTM',
            maxZoom: 16,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Freemap.sk Ski",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.freemap.sk/K/{z}/{x}/{y}.jpeg',
            attributions: 'Map © Freemap Slovakia, data © OpenStreetMap contributors and SRTM',
            maxZoom: 16,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Ortofotomozaika SR",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg',
            attributions: '© GKÚ, NLC 2017-2019',
            maxZoom: 19,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Slovakia Historic Maps",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tms.freemap.sk/historicke/{z}/{x}/{y}.png',
            attributions: '',
            maxZoom: 12,
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
window.layers = window.layers.concat(SK_TMS_LAYERS);*/
