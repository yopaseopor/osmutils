// OpenLayers TMS/XYZ Layers for LU
// Generated on: 2025-07-09 02:09:02
// Total layers: 7

export const LU_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Basemap geoportail.lu",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,3,w,m,t,s,4}.geoportail.lu/opendata/wmts/basemap/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Cadastre geoportail.lu",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,3,w,m,t,s,4}.geoportail.lu/opendata/wmts/cadastre/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.png',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "geoportail.lu ortho technique 2019 (10cm)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,1,w,m,t,s,2,w,m,t,s,3}.geoportail.lu/opendata/wmts/ortho_2019_winter/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Latest available ortho geoportail.lu",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,1,w,m,t,s,2}.geoportail.lu/opendata/wmts/ortho_latest/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "openstreetmap.lu \\"mapper’s delight\\" hillshade lidar 2019 with unclassified points",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://lidar-hillshade-2019.openstreetmap.lu/layer/mappers_delight_lidar_hillshade_2019_withunclassified/{z}/{x}/{y}.png',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 22,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Ortho 2021 geoportail.lu",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,3,w,m,t,s,4}.geoportail.lu/opendata/wmts/ortho_2021/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
            minZoom: 5,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Topographical Map geoportail.lu",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{w,m,t,s,3,w,m,t,s,4}.geoportail.lu/opendata/wmts/topo/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.png',
            attributions: 'Administration du Cadastre et de la Topographie',
            maxZoom: 20,
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
window.layers = window.layers.concat(LU_TMS_LAYERS);
