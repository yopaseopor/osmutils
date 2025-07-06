// Example: Custom OpenLayers Tile Layer
export const myCustomLayer = [
    new ol.layer.Tile({
        title: 'Custom OSM Layer',
        visible: false,
        source: new ol.source.OSM(),
    })
];
