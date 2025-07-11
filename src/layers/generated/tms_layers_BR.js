// OpenLayers TMS/XYZ Layers for BR
// Generated on: 2025-07-09 02:09:02
// Total layers: 2

export const BR_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Curitiba Ortofoto 2019",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://geocuritiba.ippuc.org.br/server/rest/services/Hosted/Ortofotos2019/MapServer/tile/{z}/{y}/{x}',
            attributions: 'Instituto de Pesquisa e Planejamento Urbano de Curitiba',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: "Jaraguá do Sul Ortomosaico 2020",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://www.jaraguadosul.sc.gov.br/geo/ortomosaico2020/{z}/{x}/{y}.png',
            attributions: 'Prefeitura de Jaraguá do Sul, SC',
            maxZoom: 19,
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
window.layers = window.layers.concat(BR_TMS_LAYERS);
