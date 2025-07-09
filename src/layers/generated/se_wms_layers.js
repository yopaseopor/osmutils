// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 34

const SELayers = [
    new ol.layer.Tile({
        title: 'Lantmäteriet Historic Orthophoto 1960',
        source: new ol.source.TileWMS({
            attributions: '© Lantmäteriet, CC0',
            url: 'https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/9b342b7d9f12d4ddb92277be9869d860/',
            params: {
                'LAYERS': 'OI.Histortho_60',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lantmäteriet Historic Orthophoto 1975',
        source: new ol.source.TileWMS({
            attributions: '© Lantmäteriet, CC0',
            url: 'https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/9b342b7d9f12d4ddb92277be9869d860/',
            params: {
                'LAYERS': 'OI.Histortho_75',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lidingö Orthophoto',
        source: new ol.source.TileWMS({
            attributions: '© Lidingö municipality, CC0',
            url: 'https://karta.lidingo.se/wms',
            params: {
                'LAYERS': 'theme-ortofoto2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Environmental Protection Agency - Protected Areas',
        source: new ol.source.TileWMS({
            attributions: '© Naturvårdsverket, CC0',
            url: 'https://geodata.naturvardsverket.se/inspire/ps-nvr/ows',
            params: {
                'LAYERS': 'PS.ProtectedSites.OBO,PS.ProtectedSites.DVO,PS.ProtectedSites.IF,PS.ProtectedSites.KR,PS.ProtectedSites.NP,PS.ProtectedSites.NM,PS.ProtectedSites.NM.Punkter,PS.ProtectedSites.NM.Ytor,PS.ProtectedSites.NR,PS.ProtectedSites.NVO,PS.ProtectedSites.SBO,PS.ProtectedSites.VSO',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Environmental Protection Agency - Trails',
        source: new ol.source.TileWMS({
            attributions: '© Naturvårdsverket, CC0',
            url: 'https://nvpub.vic-metria.nu/arcgis/services/Leder_friluftsliv/MapServer/WmsServer',
            params: {
                'LAYERS': 'LED',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Riksantikvarieämbetet - Archaeological Sites and Monuments',
        source: new ol.source.TileWMS({
            attributions: '© Riksantikvarieämbetet, CC0',
            url: 'https://inspire-raa.metria.se/geoserver/Fornlamningar/ows',
            params: {
                'LAYERS': 'PS.ProtectedSite',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Riksantikvarieämbetet - Heritage buildings',
        source: new ol.source.TileWMS({
            attributions: '© Riksantikvarieämbetet, CC0',
            url: 'https://inspire-raa.metria.se/geoserver/Byggnader/ows',
            params: {
                'LAYERS': 'BU.Building',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Riksantikvarieämbetet - Protected Heritage Areas',
        source: new ol.source.TileWMS({
            attributions: '© Riksantikvarieämbetet, CC0',
            url: 'https://inspire-raa.metria.se/geoserver/Kulturarv/ows',
            params: {
                'LAYERS': 'PS.ProtectedSite',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Riksantikvarieämbetet - Ruins',
        source: new ol.source.TileWMS({
            attributions: '© Riksantikvarieämbetet, CC0',
            url: 'https://inspire-raa.metria.se/geoserver/ByggnaderRuiner/ows',
            params: {
                'LAYERS': 'BU.Building',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Skolverket - Schools',
        source: new ol.source.TileWMS({
            attributions: '© Skolverket',
            url: 'https://inspire-skolverket.metria.se/geoserver/skolverket/ows',
            params: {
                'LAYERS': 'Forskoleklass,Grundsarskola,Grundskola,Gymnasiesarskola,Gymnasieskola,Sameskola,Specialskola',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Sollentuna Orthophoto',
        source: new ol.source.TileWMS({
            attributions: '© Solentuna municipality',
            url: 'https://kartor.sollentuna.se/bios/wms/site/web/WMS_ORTOFOTO2016',
            params: {
                'LAYERS': 'p_40137',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg City map',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/stadskarta/wms/v4',
            params: {
                'LAYERS': 'stadskarta',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Hillshade',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/hojdmodell/wms/v2',
            params: {
                'LAYERS': 'terranglutning',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Orthophoto 2015',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/ortofoto/wms/v1',
            params: {
                'LAYERS': 'orto_2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Orthophoto 2017',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/ortofoto/wms/v1',
            params: {
                'LAYERS': 'orto_2017',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Orthophoto 2019',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/ortofoto/wms/v1',
            params: {
                'LAYERS': 'orto_2019',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Orthophoto 2021',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/ortofoto/wms/v1',
            params: {
                'LAYERS': 'orto_2021',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gothenburg Orthophoto latest',
        source: new ol.source.TileWMS({
            attributions: '© Gothenburg municipality, CC0',
            url: 'https://opengeodata.goteborg.se/services/ortofoto/wms/v1',
            params: {
                'LAYERS': 'orto',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kalmar North Orthophoto 2014',
        source: new ol.source.TileWMS({
            attributions: '© Kalmar municipality',
            url: 'https://karta.kalmar.se/ims/services/Ortofoto/Norra_Kalmar_2014/ImageServer/WMSServer',
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
        title: 'Kalmar South Orthophoto 2016',
        source: new ol.source.TileWMS({
            attributions: '© Kalmar municipality',
            url: 'https://karta.kalmar.se/ims/services/Ortofoto/Kalmar_2016/ImageServer/WMSServer',
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
        title: 'Kalmar Urban Orthophoto 2018',
        source: new ol.source.TileWMS({
            attributions: '© Kalmar municipality',
            url: 'https://karta.kalmar.se/ims/services/Ortofoto/Kalmar_2018/ImageServer/WMSServer',
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
        title: 'Kalmar Urban Orthophoto 2020',
        source: new ol.source.TileWMS({
            attributions: '© Kalmar municipality',
            url: 'https://karta.kalmar.se/ims/services/Ortofoto/Kalmar_2020/ImageServer/WMSServer',
            params: {
                'LAYERS': 'Kalmar_2020:RGB_2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lantmäteriet Economic Map 1950–1978',
        source: new ol.source.TileWMS({
            attributions: '© Lantmäteriet, CC0',
            url: 'https://ext-geodata-raster.lansstyrelsen.se/arcgis/services/RasterNationellt/lst_ext_ekonomiska_kartan/ImageServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lantmäteriet Generalstabskartan 1859–1979',
        source: new ol.source.TileWMS({
            attributions: '© Lantmäteriet, CC0',
            url: 'https://ext-geodata-raster.lansstyrelsen.se/arcgis/services/RasterNationellt/lst_ext_generalstabskartan/ImageServer/WMSServer',
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
        title: 'Linköping Orthophoto',
        source: new ol.source.TileWMS({
            attributions: '© Linköping municipality',
            url: 'http://kartan.linkoping.se/wms',
            params: {
                'LAYERS': 'Kommun_2010_25cm',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SCB - Industrial zones',
        source: new ol.source.TileWMS({
            attributions: '© Statistiska Centralbyrån, CC0',
            url: 'http://geodata.scb.se/geoserver/stat/Verksamhetsomraden/ows',
            params: {
                'LAYERS': 'stat:Verksamhetsomraden.2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SCB - Small Settlements',
        source: new ol.source.TileWMS({
            attributions: '© Statistiska Centralbyrån, CC0',
            url: 'http://geodata.scb.se/geoserver/stat/Smaorter/ows',
            params: {
                'LAYERS': 'stat:Smaorter.2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SCB - Urban Areas',
        source: new ol.source.TileWMS({
            attributions: '© Statistiska Centralbyrån, CC0',
            url: 'http://geodata.scb.se/geoserver/stat/Tatorter/ows',
            params: {
                'LAYERS': 'Tatorter_2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SCB - Vacation Home Areas',
        source: new ol.source.TileWMS({
            attributions: '© Statistiska Centralbyrån, CC0',
            url: 'http://geodata.scb.se/geoserver/stat/Fritidshusomraden/ows',
            params: {
                'LAYERS': 'Fritidshusomraden',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Stockholm Orthophoto',
        source: new ol.source.TileWMS({
            attributions: '© Stockholm municipality, CC0',
            url: 'https://openmap.stockholm.se/bios/wms/app/baggis/web/WMS_STHLM_ORTOFOTO_2018',
            params: {
                'LAYERS': 'p_1003070',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SVK - Electricity Network',
        source: new ol.source.TileWMS({
            attributions: '© Svenska kraftnät',
            url: 'https://inspire-skn.metria.se/geoserver/skn/ows',
            params: {
                'LAYERS': 'US.ElectricityNetwork.Lines,US.ElectricityNetwork.Pylons,US.ElectricityNetwork.StationAreas,US.ElectricityNetwork.Stations',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Trafikverket Railway Network',
        source: new ol.source.TileWMS({
            attributions: '© Trafikverket, CC0',
            url: 'https://geo-baninfo.trafikverket.se/mapservice/wms.axd/BanInfo_1_3',
            params: {
                'LAYERS': 'Spar_Huvud_och_sidospar',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Trafikverket Road Network extra',
        source: new ol.source.TileWMS({
            attributions: '© Trafikverket, CC0',
            url: 'https://geo-netinfo.trafikverket.se/mapservice/wms.axd/NetInfo_1_5',
            params: {
                'LAYERS': 'Vagnummer,Vaghinder,Rastplats,Hallplats,Farthinder,BroTunnel,ATK_Matplats',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Trafikverket Road Network',
        source: new ol.source.TileWMS({
            attributions: '© Trafikverket, CC0',
            url: 'https://geo-netinfo.trafikverket.se/mapservice/wms.axd/NetInfo_1_5',
            params: {
                'LAYERS': 'Vagtrafiknat,Funkvagklass,Farjeled',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default SELayers;
