// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 7

export const PTLayers = [
    new ol.layer.Tile({
        title: 'Land Use and Soil Occupation Charter of mainland Portugal - 2018 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'http://mapas.dgterritorio.pt/wms-inspire/cos2018v1',
            params: {
                'LAYERS': 'COS2018v1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Elevation hillshade of the coastal areas of mainland Portugal - 2m - 2014-2015 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://ortos.dgterritorio.gov.pt/wms-inspire/mdt2014-2015-litoral',
            params: {
                'LAYERS': 'MDT2M-2014-2015-litoral',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophotos of the coastal areas of mainland Portugal - 10 cm - 2014-2015 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://cartografia.dgterritorio.gov.pt/wms/ortos2014-2015-litoral',
            params: {
                'LAYERS': 'Ortoimagens_2014-2015_Litoral',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophotos of mainland Portugal - 25 cm - 2018 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://cartografia.dgterritorio.gov.pt/wms/ortos2018',
            params: {
                'LAYERS': 'Ortos2018-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophotos of mainland Portugal - 50 cm - 2004-2006 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://cartografia.dgterritorio.gov.pt/wms/ortos2004-2006',
            params: {
                'LAYERS': 'Ortos2004-2006-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Orthophotos of the northern portion of mainland Portugal - 25 cm - 2021 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://cartografia.dgterritorio.gov.pt/wms/ortos2021',
            params: {
                'LAYERS': 'Ortos2021-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'OrtoSat - Portugal Continental - 30 cm - 2023 (DGT)',
        source: new ol.source.TileWMS({
            attributions: 'Informação geográfica cedida pela Direção-Geral do Território',
            url: 'https://ortos.dgterritorio.gov.pt/wms/ortosat2023',
            params: {
                'LAYERS': 'ortoSat2023-CorVerdadeira',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
visible: false
    })
];

