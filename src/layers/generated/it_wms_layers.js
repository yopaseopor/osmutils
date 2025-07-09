// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 16

const ITLayers = [
    new ol.layer.Tile({
        title: 'Lombardia - Italy (C.T.R. 10000 - 1980-94)',
        source: new ol.source.TileWMS({
            attributions: 'Regione Lombardia - Infrastruttura per l\'informazione territoriale',
            url: 'https://www.cartografia.servizirl.it/arcgis/services/wms/ctr_wms/MapServer/WmsServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PCN 2006 - Italy',
        source: new ol.source.TileWMS({
            attributions: '© Ministero dell\'Ambiente e della Tutela del Territorio e del Mare - Geoportale nazionale',
            url: 'http://wms.pcn.minambiente.it/ogc',
            params: {
                'LAYERS': 'OI.ORTOIMMAGINI.2006.33,OI.ORTOIMMAGINI.2006.32',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PCN 2008 - IT Lazio+Umbria',
        source: new ol.source.TileWMS({
            attributions: '© Ministero dell\'Ambiente e della Tutela del Territorio e del Mare - Geoportale nazionale',
            url: 'http://wms.pcn.minambiente.it/ogc',
            params: {
                'LAYERS': 'OI.ORTOIMMAGINI.2008.33',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PCN 2012 - Italy',
        source: new ol.source.TileWMS({
            attributions: '© Ministero dell\'Ambiente e della Tutela del Territorio e del Mare - Geoportale nazionale',
            url: 'http://wms.pcn.minambiente.it/ogc',
            params: {
                'LAYERS': 'OI.ORTOIMMAGINI.2012.32,OI.ORTOIMMAGINI.2012.33',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Sicily - Italy',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'http://map.sitr.regione.sicilia.it/ArcGIS/services/WGS84_F33/Ortofoto_ATA20072008_f33/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Basemap',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/wms',
            params: {
                'LAYERS': 'p_bz-BaseMap%3ABasemap-Standard',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol DSM Hillshade 2006 (2.5 m)',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Elevation/wms',
            params: {
                'LAYERS': 'DigitalElevationModel-2.5m-Hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol DSM Hillshade 2013 (0.5 m)',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Elevation/wms',
            params: {
                'LAYERS': 'DigitalElevationModel-0.5m-Hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol DTM Hillshade 2006 (2.5 m)',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Elevation/wms',
            params: {
                'LAYERS': 'DigitalTerrainModel-2.5m-Hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol DTM Hillshade 2013 (0.5 m)',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Elevation/wms',
            params: {
                'LAYERS': 'DigitalTerrainModel-0.5m-Hillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2011 (highres)',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC-BY 4.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2011-AgEA-RGB,Aerial-2011-RGB-20CM',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2014',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC-BY 4.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2015-RGB,Aerial-2014-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2014/2015',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC-BY 4.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2015-RGB,Aerial-2014-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2017',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC0-1.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2017-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2020',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC-BY 4.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2020-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'South Tyrol Orthofoto 2023',
        source: new ol.source.TileWMS({
            attributions: '© Autonome Provinz Bozen/Provincia Autonoma di Bolzano CC-BY 4.0',
            url: 'https://geoservices.buergernetz.bz.it/mapproxy/p_bz-Orthoimagery/wms',
            params: {
                'LAYERS': 'Aerial-2023-RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default ITLayers;
