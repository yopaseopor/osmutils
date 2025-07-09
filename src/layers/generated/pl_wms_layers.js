// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 65

const PLLayers = [
    new ol.layer.Tile({
        title: 'Będzin: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Starostwo Powiatowe w Będzinie',
            url: 'http://www.geo.powiat.bedzin.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'eg_budynki_geo,pkt_adr',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Będzin: Orthophotomap 2013 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Starostwo Powiatowe w Będzinie',
            url: 'http://www.geo.powiat.bedzin.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'orto_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:eg_budynki_g',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Fotoplan 2014 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:fotoplan_2014',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Orthophotomap 2012 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:ortofotomapa_2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Orthophotomap 2016 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:ortofotomapa_2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Orthophotomap 2018 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:ort_obc_2018',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bytom: Orthophotomap 2021 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Bytomia',
            url: 'https://sitplan.um.bytom.pl/isdp/gs/ows/wms',
            params: {
                'LAYERS': 'default:orto_2021_4',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'ieg_budynek',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2011 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'orto_2011',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2013 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'Orto_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2014 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'Orto_2014',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2015 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'Orto_2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2016 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'Orto_2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Częstochowa: Orthophotomap 2017 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Częstochowy',
            url: 'http://geoportal.czestochowa.um.gov.pl/isdp/scripts/isdp.dll/wms',
            params: {
                'LAYERS': 'Orto_2017',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Squares and housing estates',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/ext/KrajowaIntegracjaNumeracjiAdresowej',
            params: {
                'LAYERS': 'prg-place',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Orthophotomap (archival imagery) (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolutionTime',
            params: {
                'LAYERS': 'Raster',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: High Resolution Orthophotomap (archival imagery) (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolutionTime',
            params: {
                'LAYERS': 'Image',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Ewidencja budynków WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
            params: {
                'LAYERS': 'budynki',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Granice działek',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
            params: {
                'LAYERS': 'dzialki',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2 Nazwy ulic',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/ext/KrajowaIntegracjaNumeracjiAdresowej',
            params: {
                'LAYERS': 'prg-ulice',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Orthophotomap (latest aerial imagery) (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution',
            params: {
                'LAYERS': 'Raster',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: High Resolution Orthophotomap (aerial image) (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/HighResolution',
            params: {
                'LAYERS': 'Raster',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: PRNG (geo names)',
        source: new ol.source.TileWMS({
            attributions: 'Centralny Ośrodek Dokumentacji Geodezyjnej i Kartograficznej',
            url: 'https://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_PRNG_WMS/MapServer/WMSServer',
            params: {
                'LAYERS': 'PozostaleObiektyFizjograficzne,Hydrografia,PozostaleMiejscowosci,Wies,UksztaltowanieTerenu',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Punkty adresowe',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/ext/KrajowaIntegracjaNumeracjiAdresowej',
            params: {
                'LAYERS': 'prg-adresy',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Borders of communes WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WMS/AdministrativeBoundaries',
            params: {
                'LAYERS': 'A03_Granice_gmin',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: City boundaries WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WMS/AdministrativeBoundaries',
            params: {
                'LAYERS': 'A04_Granice_miast',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: State borders WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WMS/AdministrativeBoundaries',
            params: {
                'LAYERS': 'A00_Granice_panstwa',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Borders of counties WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WMS/AdministrativeBoundaries',
            params: {
                'LAYERS': 'A02_Granice_powiatow',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Borders of provinces WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'http://mapy.geoportal.gov.pl/wss/service/PZGIK/PRG/WMS/AdministrativeBoundaries',
            params: {
                'LAYERS': 'A01_Granice_wojewodztw',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: Shaded relief (WMS)',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/NMT/GRID1/WMS/ShadedRelief',
            params: {
                'LAYERS': 'Raster',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: heat pipes WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_cieplowniczy',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: power cord WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_elektroenergetyczny',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: gas pipes WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_gazowy',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: sewer pipes WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_kanalizacyjny',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: telecommunications cables WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_telekomunikacyjny',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Geoportal 2: water pipes WMS',
        source: new ol.source.TileWMS({
            attributions: 'Główny Urząd Geodezji i Kartografii',
            url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu',
            params: {
                'LAYERS': 'przewod_wodociagowy',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms1',
            params: {
                'LAYERS': 'default:budynki',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2003 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2003',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2009 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2009',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2013 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2017 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2017',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2018 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2018',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2020 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Gliwice: Orthophotomap 2021 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Gliwice',
            url: 'https://geoportal.gliwice.eu/isdp/gs/ows/wms2',
            params: {
                'LAYERS': 'default:orto_2021',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat łańcucki: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat łańcucki',
            url: 'https://lancut.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'EBT,budynki,adresy',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat dębicki: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat dębicki',
            url: 'https://debica.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'budynki,adresy,EBU,EBT,S',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat lubaczowski: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat lubaczowski',
            url: 'https://lubaczow.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'S,EBT,adresy,budynki_ewid',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat ropczycko-sędziszowski: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat ropczycko-sędziszowski',
            url: 'https://spropczyce.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'budynki',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat rzeszowski: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat rzeszowski',
            url: 'https://powiatrzeszowski.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'budynki,EBT,EBU',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat rzeszowski: Orthophotomap (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Powiat rzeszowski',
            url: 'https://powiatrzeszowski.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'ortofotomapa',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Powiat stalowowolski: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Powiat stalowowolski',
            url: 'https://stalowawola.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'EBT,adresy,budynki,centroidy',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Poznań: Orthophotomap 2014 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Zarząd Geodezji i Katastru Miejskiego GEOPOZ',
            url: 'http://wms1.geopoz.poznan.pl:6080/arcgis/services/sip/ortofotomapa_2014/MapServer/WmsServer',
            params: {
                'LAYERS': 'ortofotomapa_2014_image',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Poznań: Orthophotomap 2016 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Zarząd Geodezji i Katastru Miejskiego GEOPOZ',
            url: 'http://wms1.geopoz.poznan.pl:6080/arcgis/services/sip/ortofotomapy/MapServer/WmsServer',
            params: {
                'LAYERS': 'ortofotomapa_2016_image',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Poznań: Orthophotomap Bieżąca (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Zarząd Geodezji i Katastru Miejskiego GEOPOZ',
            url: 'http://wms2.geopoz.poznan.pl/geoserver/ortogpkg/wms',
            params: {
                'LAYERS': 'ortofotomapa_biezaca',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Przemyśl: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Miasto Przemyśl',
            url: 'http://przemysl.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'adresy,budynki',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Przemyśl: Ortophotomap (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Miasto Przemyśl',
            url: 'http://przemysl.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'ortofotomapa',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Siemianowice Śląskie: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Siemianowice Śląskie',
            url: 'https://siemianowice.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'budynki,drogi,adresy,ulice',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Siemianowice Śląskie: Orthophotomap (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Siemianowice Śląskie',
            url: 'https://siemianowice.geoportal2.pl/map/wms/wms.php',
            params: {
                'LAYERS': 'ortofotomapa',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Wrocław: Orthophotomap 2015 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Wrocław',
            url: 'https://gis1.um.wroc.pl/arcgis/services/ogc/OGC_ortofoto_2015/MapServer/WmsServer',
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
        title: 'Wrocław: Orthophotomap 2018 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Wrocław',
            url: 'https://gis1.um.wroc.pl/arcgis/services/ogc/OGC_ortofoto_2018/MapServer/WmsServer',
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
        title: 'Zabrze: Orthophotomap 2011 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Zabrza',
            url: 'http://siot.um.zabrze.pl/arcgis/services/UMZ_Ortofoto_2011/MapServer/WMSServer',
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
        title: 'Łódź: Buildings',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Łodzi',
            url: 'https://gis.mapa.lodz.pl/awiskts/services/WMS_publikowane/LODZ/MapServer/WMSServer',
            params: {
                'LAYERS': 'Budynki,Ulice,Adresy',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Łódź: Orthophotomap 2015 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Łodzi',
            url: 'https://gis.mapa.lodz.pl/awiskts/services/Ortofotomapa/Ortofotomapa/MapServer/WMSServer',
            params: {
                'LAYERS': '0',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg','
                'TRANSPARENT': false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Łódź: Orthophotomap 2017 (aerial image)',
        source: new ol.source.TileWMS({
            attributions: 'Urząd Miasta Łodzi',
            url: 'https://mapa.lodz.pl/3/services/OGC/Ortofotomapa/MapServer/WmsServer',
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

export default PLLayers;
