// Example: Stamen Toner Layer
export const stamenTonerLayer = [
    // Stamen Toner
    new ol.layer.Tile({
        title: 'Stamen Toner',
        type: 'base',
        visible: false,
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors'
        })
    }),
    // OSM Shortbread Neutrino
    (function() {
        const neutrinoLayer = new ol.layer.VectorTile({
            title: 'OSM Shortbread Neutrino',
            type: 'base',
            visible: false,
            opacity: 1.0,
            source: new ol.source.VectorTile({
                tilePixelRatio: 1,
                tileGrid: ol.tilegrid.createXYZ({ minZoom: 0, maxZoom: 14 }),
                format: new ol.format.MVT(),
                url: 'https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt',
                attributions: [
                    '<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
                ]
            }),
            declutter: true
        });
        return neutrinoLayer;
    })()
];
