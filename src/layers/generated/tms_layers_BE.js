// OpenLayers TMS/XYZ Layers for BE
// Generated on: 2025-07-09 02:09:02
// Total layers: 6

export export const BE_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Digitaal Vlaanderen GRB",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://geo.api.vlaanderen.be/GRB/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=grb_bsk&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}',
            attributions: '© Digitaal Vlaanderen',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Digitaal Vlaanderen most recent aerial imagery",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=omwrgbmrvl&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}',
            attributions: '© Digitaal Vlaanderen',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Digitaal Vlaanderen preliminary aerial imagery",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://geo.api.vlaanderen.be/OFW/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ofw&STYLE=&FORMAT=image/png&tileMatrixSet=GoogleMapsVL&tileMatrix={z}&tileRow={y}&tileCol={x}',
            attributions: '© Digitaal Vlaanderen',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "OpenStreetMap (Belgian Style - Dutch)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.openstreetmap.be/osmbe-nl/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA; Tiles courtesy of GEO-6',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "OpenStreetMap (Belgian Style - French)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.openstreetmap.be/osmbe-fr/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA; Tiles courtesy of GEO-6',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "OpenStreetMap (Belgian Style)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA; Tiles courtesy of GEO-6',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    })
];
