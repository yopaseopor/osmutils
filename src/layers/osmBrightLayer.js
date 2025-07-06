// Example: OSM Bright Layer
export const osmBrightLayer = [
    new ol.layer.Tile({
        title: 'OSM Bright',
        visible: false,
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
    })
];
