// OpenLayers TMS/XYZ Layers for CZ
// Generated on: 2025-07-09 02:09:02
// Total layers: 5

export const CZ_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Czech CUZK:KM tiles proxy",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://osm-{a,b,c}.zby.cz/tiles_cuzk.php/{z}/{x}/{y}.png',
            attributions: '',
            maxZoom: 18,
            minZoom: 13,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Czech RUIAN budovy",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.poloha.net/budovy/{z}/{x}/{y}.png',
            attributions: 'Czech RUIAN',
            maxZoom: 20,
            minZoom: 12,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Czech RUIAN parcely",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.poloha.net/parcely/{z}/{x}/{y}.png',
            attributions: 'Czech RUIAN',
            maxZoom: 20,
            minZoom: 12,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Praha IPR latest orthophoto (TMS mirror)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://osm-{a,b,c}.zby.cz/tiles_ipr_last.php/{z}/{x}/{y}.jpg',
            attributions: 'IPR Praha; OSM CZ',
            maxZoom: 20,
            minZoom: 2,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Praha IPR low-vegetation orthophoto (TMS mirror)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://osm-{a,b,c}.zby.cz/tiles_ipr_vege.php/{z}/{x}/{y}.jpg',
            attributions: 'IPR Praha; OSM CZ',
            maxZoom: 20,
            minZoom: 2,
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
window.layers = window.layers.concat(CZ_TMS_LAYERS);
