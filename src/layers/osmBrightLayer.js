// Example: OSM Bright Layer
export const osmBrightLayer = [
    new ol.layer.Group({
        title: 'osmBrightLayer',
        layers: new ol.Collection([
            // Versatiles colorful
            (function() {
                const colorfulLayer = new ol.layer.VectorTile({
                    title: 'Versatiles colorful',
                    visible: true,
                    opacity: 1.0,
                    source: new ol.source.VectorTile({
                        tilePixelRatio: 1,
                        tileGrid: ol.tilegrid.createXYZ({ minZoom: 0, maxZoom: 14 }),
                        format: new ol.format.MVT(),
                        url: 'https://tiles.versatiles.org/tiles/osm/{z}/{x}/{y}',
                        attributions: [
                            '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
                        ]
                    }),
                    declutter: true
                });
                return colorfulLayer;
            })(),
            // OSM Bright (XYZ)
            new ol.layer.Tile({
                title: 'OSM Bright',
                visible: false,
                source: new ol.source.OSM({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            })
        ])
    })
];
