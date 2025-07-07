// Example: OSM Bright Layer
export const osmBrightLayer = [
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
        title: 'ICGC - Ortofoto de Catalunya Provisional',
        source: new ol.source.TileWMS({
            attributions: 'Institut Cartogràfic i Geològic de Catalunya',
            url: 'http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms',
            params: {
                'LAYERS': 'ortofoto_color_provisional',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    })
];
