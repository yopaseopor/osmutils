// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 56

const AULayers = [
    new ol.layer.Tile({
        title: 'ACTmapi Imagery Mar 2025',
        source: new ol.source.TileWMS({
            attributions: 'Aerial Imagery from ACTMapi ©ACT Government and Aerometrex',
            url: 'https://data4.actmapi.act.gov.au/arcgis/rest/services/ACT_IMAGERY_MGA2020/2025_03_urban_75mm/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpgpng','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries County',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '4',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries LGA',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '6',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries NPWS Reserve',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries Parish',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '3',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries State Forest',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '2',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Administrative Boundaries Suburb',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Administrative_Boundaries/MapServer/WMSServer',
            params: {
                'LAYERS': '7',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Geocoded Addressing',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/export',
            params: {
                'LAYERS': 'export',
                'VERSION': '1.3.0',
                'FORMAT': 'png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Imagery Dates',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery_Dates/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Land Parcel Lot',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme/MapServer/export',
            params: {
                'LAYERS': 'show%3A8',
                'VERSION': '1.3.0',
                'FORMAT': 'png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW StrataHub Strata Plan',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/StrataHub/MapServer/export',
            params: {
                'LAYERS': 'show%3A0',
                'VERSION': '1.3.0',
                'FORMAT': 'png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Bourke flood 2021 04 15cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Brewarrina flood 2021 04 14 15cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:2',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Hawkesbury-Nepean Floods Central Sector 2021 03 15cm RGB',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:6',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Hawkesbury-Nepean Floods West Sector 2021 03 15cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:7',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Hawkesbury-nepean floods eastern sector 2021 03 25cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:8',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Hawkesbury-nepean floods southern sector 2021 03 16cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:9',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Lower clarence flood 2021 03 16cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:5',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Mogil Mogil RGB 2021 04 10 Flood 15cm Rapid ortho',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Mungindi RGB 2021 04 10 Flood 15cm Rapid ortho',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods 2021 Walgett flood 2021 04 14 15cm',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_2021/MapServer/export',
            params: {
                'LAYERS': 'show:1',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Historical Forbes 2012-03',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Historical/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Historical Forbes 2016-10',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Historical/MapServer/export',
            params: {
                'LAYERS': 'show:1',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 Grafton Flood 2022 03 02 10cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 Hawkesbury-Nepean Flood 2022 03 09 13cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:2',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 Lismore Flood 2022 03 02 8cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:5',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 Ulmarra Flood 2022 03 03 8cm p3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 Wisemans Ferry 2022 03 13cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Mar 2022 singleton flood 2022 03 10 10cm p3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Mar_2022/MapServer/export',
            params: {
                'LAYERS': 'show:1',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Condobolin Flood 2021 11 13cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Forbes Flood East 2021 11 16 15cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:5',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Forbes Flood West 2021 11 17 15cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Lake Cowal North Flood 2021 12 36cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:1',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Nanami Flood East 2021 11 15 9cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:7',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 Nanami Flood West 2021 11 15 9cm P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:6',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 humbug creek flood 2021 12 16cm p3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2021 mirrool creek flood 2021 11 16cm p3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2021/MapServer/export',
            params: {
                'LAYERS': 'show:2',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Balranald Flood 02122022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:2',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Bathurst Flood 14112022 10cm BGRN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:11',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Billabong Creek Flood 26112022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Condobolin Flood 22112022 10cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:8',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Coreen Flood 17112022 10cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:10',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Corowa Yarrawonga Flood 25112022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:5',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Derriwong Flood 22112022 10cm P3 RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:9',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Forbes Flood 05112022 10cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:12',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Lake-Cargelligo Euabolong Flood 04122022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:6',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Murray Wakool Flood 01122022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Swan-Hill Flood 25112022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:7',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Tooleybuc Flood 01122022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:1',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DCS NSW Floods Nov 2022 Wentworth Flood 03122022 15cm RGBN P3',
        source: new ol.source.TileWMS({
            attributions: '© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.',
            url: 'https://portal.spatial.nsw.gov.au/server/rest/services/Floods_Nov_2022/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vicmap Address - Address Point',
        source: new ol.source.TileWMS({
            attributions: 'The State of Victoria Department of Energy, Environment and Climate Action 2023',
            url: 'https://opendata.maps.vic.gov.au/geoserver/wms',
            params: {
                'LAYERS': 'open-data-platform:address',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vicmap Elevation - Contour Line',
        source: new ol.source.TileWMS({
            attributions: 'The State of Victoria Department of Energy, Environment and Climate Action 2023',
            url: 'https://opendata.maps.vic.gov.au/geoserver/wms',
            params: {
                'LAYERS': 'open-data-platform:el_contour',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vicmap Hydro - Watercourse Line',
        source: new ol.source.TileWMS({
            attributions: 'The State of Victoria Department of Energy, Environment and Climate Action 2023',
            url: 'https://opendata.maps.vic.gov.au/geoserver/wms',
            params: {
                'LAYERS': 'open-data-platform:hy_watercourse',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vicmap Property - Property Polygon',
        source: new ol.source.TileWMS({
            attributions: 'The State of Victoria Department of Energy, Environment and Climate Action 2023',
            url: 'https://opendata.maps.vic.gov.au/geoserver/wms',
            params: {
                'LAYERS': 'open-data-platform:property_view',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Vicmap Transport - Road Line',
        source: new ol.source.TileWMS({
            attributions: 'The State of Victoria Department of Energy, Environment and Climate Action 2023',
            url: 'https://opendata.maps.vic.gov.au/geoserver/wms',
            params: {
                'LAYERS': 'open-data-platform:tr_road',
                'VERSION': '1.3.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Main Roads WA Road Hierarchy',
        source: new ol.source.TileWMS({
            attributions: 'Main Roads Western Australia',
            url: 'https://gisservices.mainroads.wa.gov.au/arcgis/services/OpenData/RoadAssets_DataPortal/MapServer/WMSServer',
            params: {
                'LAYERS': '15',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png32','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default AULayers;
