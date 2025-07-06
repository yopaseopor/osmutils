// Example: Stamen Toner Layer
export const stamenTonerLayer = [
    new ol.layer.Tile({
        title: 'Stamen Toner',
        visible: false,
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap contributors'
        })
    })
];
