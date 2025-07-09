// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 6

const CZLayers = [
    new ol.layer.Tile({
        title: 'Czech CUZK:KM',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://wms.cuzk.cz/wms.asp',
            params: {
                'LAYERS': 'parcelni_cisla_i,obrazy_parcel_i,RST_KMD_I,hranice_parcel_i,DEF_BUDOVY,RST_KN_I,dalsi_p_mapy_i,prehledka_kat_prac,prehledka_kat_uz,prehledka_kraju-linie',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Czechia CUZK terrain DMR 5G greyscale',
        source: new ol.source.TileWMS({
            attributions: 'CUZK',
            url: 'https://ags.cuzk.cz/arcgis2/services/dmr5g/ImageServer/WMSServer',
            params: {
                'LAYERS': 'dmr5g:GrayscaleHillshade',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Czechia CUZK orthophoto',
        source: new ol.source.TileWMS({
            attributions: 'CUZK',
            url: 'https://ags.cuzk.gov.cz/arcgis1/services/ORTOFOTO/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Czech pLPIS',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://eagri.cz/public/app/wms/public_DPB_PB_OPV.fcgi',
            params: {
                'LAYERS': 'DPB_UCINNE,DPB_UCINNE_KOD',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Praha IPR latest orthophoto',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://gs-pub.praha.eu/imgs/services/ort/letecke_snimkovani/ImageServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Praha IPR low-vegetation orthophoto',
        source: new ol.source.TileWMS({
            attributions: 'IPR Praha',
            url: 'https://gs-pub.praha.eu/imgs/services/ort/mimovegetacni_letecke_snimkovani/ImageServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default CZLayers;
