// Example: Custom OpenLayers Tile Layer
export const myCustomLayer = [
    // Example: MapTiler Openmaptiles (from config.js)
    new ol.layer.VectorTile({
        title: 'MapTiler Openmaptiles',
        visible: false,
        opacity: 1.0,
        source: new ol.source.VectorTile({
            tilePixelRatio: 1,
            tileGrid: ol.tilegrid.createXYZ({ minZoom: 0, maxZoom: 22 }),
            format: new ol.format.MVT(),
            url: 'https://api.maptiler.com/tiles/v3-openmaptiles/{z}/{x}/{y}.pbf?key=Faz9gJu55zrWejNF55oZ',
            attributions: [
                '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
                '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
            ],
            crossOrigin: 'anonymous',
            projection: 'EPSG:3857'
        }),
        style: new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(200, 200, 200, 0.5)' }),
            stroke: new ol.style.Stroke({ color: '#3399CC', width: 1.25 })
        })
    }),
    // Example: OSM Layer (from before)
    new ol.layer.Tile({
        title: 'Custom OSM Layer',
        visible: false,
        source: new ol.source.OSM(),
    })
];
