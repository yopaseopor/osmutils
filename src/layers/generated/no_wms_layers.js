// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 23

const NOLayers = [
    new ol.layer.Tile({
        title: 'Fiskeridirektoratet Aquaculture overlay',
        source: new ol.source.TileWMS({
            attributions: '© Fiskeridirektoratet',
            url: 'https://gis.fiskeridir.no/server/services/fiskeridirWMS_akva/MapServer/WMSServer',
            params: {
                'LAYERS': 'flate_ihht_akvakulturregisteret,akvakultur_lokaliteter',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Hiking Trails',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.friluftsruter2',
            params: {
                'LAYERS': 'Fotrute',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Road Network',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://openwms.statkart.no/skwms1/wms.vegnett2',
            params: {
                'LAYERS': 'vegnett2',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Administrative Boundaries overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.adm_enheter2',
            params: {
                'LAYERS': 'fylker_gjel,kommuner_gjel',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Aviation Obstructions overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.nrl5',
            params: {
                'LAYERS': 'nrlflate,nrllinje,nrlluftspenn,nrlmast,nrlpunkt',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Buildings overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.inspire_bu',
            params: {
                'LAYERS': 'BU.Building',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Cadastral overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.matrikkel',
            params: {
                'LAYERS': 'matrikkel_WMS',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Contour Lines overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.topo',
            params: {
                'LAYERS': 'hoydepunkt,Dybdepunkt,hoydetall5linje,hoydetall5punkt,N100Hoydekurver,hoydekurver_1m,hoydekurver_5m,N50Hoydekurver,N250Hoydekurver,N500Hoydekurver,N1000Hoydekurver,N2000Hoydekurver,Dybdekontur',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Economic Maps (historic)',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.n5raster2',
            params: {
                'LAYERS': 'n5raster_foerstegang_metadata,n5raster_foerstegang',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket Historic maps',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.historiskekart',
            params: {
                'LAYERS': 'amt1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kystverket Navigational Aid overlay',
        source: new ol.source.TileWMS({
            attributions: '© Kystverket',
            url: 'https://nfs.kystverket.no/arcgis/services/nfs/NFSSistOperativ/MapServer/WmsServer',
            params: {
                'LAYERS': '13,12,10,8,6,5,4,3',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Miljødirektoratet Protected Areas overlay',
        source: new ol.source.TileWMS({
            attributions: '© Miljødirektoratet',
            url: 'https://kart.miljodirektoratet.no/arcgis/services/vern/MapServer/WmsServer',
            params: {
                'LAYERS': 'naturvern_klasser_omrade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Miljødirektoratet Public Recreation Areas overlay',
        source: new ol.source.TileWMS({
            attributions: '© Miljødirektoratet',
            url: 'https://kart.miljodirektoratet.no/arcgis/services/friluftsliv_statlig_sikra/MapServer/WmsServer',
            params: {
                'LAYERS': 'friluftsliv_statlig_sikra',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NPD Offshore Installations overlay',
        source: new ol.source.TileWMS({
            attributions: '© Oljedirektoratet',
            url: 'https://factmaps.npd.no/arcgis/services/FactMaps_ogc/3_0_WGS84_z32/MapServer/WmsServer',
            params: {
                'LAYERS': '30,55,58',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NVE Avalanche Danger Areas overlay',
        source: new ol.source.TileWMS({
            attributions: '© NVE',
            url: 'https://nve.geodataonline.no/arcgis/services/SkredSnoAktR/MapServer/WmsServer',
            params: {
                'LAYERS': 'Snoskred-Aktsomhetsomrader',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NVE Electricity Network overlay',
        source: new ol.source.TileWMS({
            attributions: '© NVE',
            url: 'https://nve.geodataonline.no/arcgis/services/Nettanlegg2/MapServer/WmsServer',
            params: {
                'LAYERS': 'Sentralnett,Regionalnett,Distribusjonsnett,Sjokabler,Master_og_stolper29882,Transformatorstasjoner',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NVE Hydropower Plants overlay',
        source: new ol.source.TileWMS({
            attributions: '© NVE',
            url: 'https://nve.geodataonline.no/arcgis/services/Vannkraft1/MapServer/WmsServer',
            params: {
                'LAYERS': 'Vannkraftverk,Vannvei,Dam',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NVE Wind Power Plants overlay',
        source: new ol.source.TileWMS({
            attributions: '© NVE',
            url: 'https://nve.geodataonline.no/arcgis/services/Vindkraft2/MapServer/WmsServer',
            params: {
                'LAYERS': 'Vindkraft_konsesjon_gitt_ikke_utbygd,Vindkraft_under_bygging,Vindkraft_utbygd,Vindkraftomrade,Vindturbin',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Riksantikvaren Heritage Sites overlay',
        source: new ol.source.TileWMS({
            attributions: '© Riksantikvaren',
            url: 'https://kart.ra.no/arcgis/services/Distribusjon/Kulturminner20180301/MapServer/WmsServer',
            params: {
                'LAYERS': 'Enkeltminner,Enkeltminneikoner',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SSB City Centres overlay',
        source: new ol.source.TileWMS({
            attributions: '© SSB',
            url: 'https://ogc.ssb.no/wms.ashx',
            params: {
                'LAYERS': 'layer_193',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'SSB Urban Areas overlay',
        source: new ol.source.TileWMS({
            attributions: '© SSB',
            url: 'https://ogc.ssb.no/wms.ashx',
            params: {
                'LAYERS': 'layer_198',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket DOM Digital Surface Model',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.hoyde-dom',
            params: {
                'LAYERS': 'DOM:skyggerelieff',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kartverket DTM Digital Terrain Model',
        source: new ol.source.TileWMS({
            attributions: '© Kartverket',
            url: 'https://wms.geonorge.no/skwms1/wms.hoyde-dtm',
            params: {
                'LAYERS': 'DTM:skyggerelieff',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default NOLayers;
