// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 9

const XXLayers = [
    new ol.layer.Tile({
        title: 'GeoScribble latest notes',
        source: new ol.source.TileWMS({
            attributions: 'GeoScribble contributors',
            url: 'https://geoscribble.osmz.ru/wms',
            params: {
                'LAYERS': 'latest',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2017 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2017)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2017_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2018 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2017 & 2018)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2018_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2019 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2019)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2019_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2020 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2020)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2020_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2021 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2021)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2021_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2022 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2022)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2022_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2023 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2023)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2023_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'eox.at 2024 cloudless',
        source: new ol.source.TileWMS({
            attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2024)',
            url: 'https://tiles.maps.eox.at/wms',
            params: {
                'LAYERS': 's2cloudless-2024_3857',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default XXLayers;
