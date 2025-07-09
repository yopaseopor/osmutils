// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 1

const UYLayers = [
    new ol.layer.Tile({
        title: 'Uruguay IDE.uy Ortofotos 2019',
        source: new ol.source.TileWMS({
            attributions: 'AGESIC - Agencia de Gobierno Electrónico y Sociedad de la Información y del Conocimiento',
            url: 'https://mapas.ide.uy/geoserver-raster/ortofotos/ows',
            params: {
                'LAYERS': 'ORTOFOTOS_2019',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
];

export default UYLayers;
