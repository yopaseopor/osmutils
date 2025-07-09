// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 15

export const FRLayers = [
    new ol.layer.Tile({
        title: 'Auvergne 2013 25cm CRAIG',
        source: new ol.source.TileWMS({
            attributions: 'Orthophotographie CRAIG/Sintegra/IGN 2013',
            url: 'https://tiles.craig.fr/ortho/service',
            params: {
                'LAYERS': 'ortho_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Auvergne 2016 25cm CRAIG',
        source: new ol.source.TileWMS({
            attributions: 'CRAIG - IGN -TopoGEODIS - Feder Auvergne-Rhône-Alpes 2016',
            url: 'https://tiles.craig.fr/ortho/service',
            params: {
                'LAYERS': 'ortho_2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bassin d Arcachon 2018',
        source: new ol.source.TileWMS({
            attributions: 'SIBA Vues aeriennes 2018',
            url: 'https://siba.geosphere.fr/cgi-bin/mapserv.exe',
            params: {
                'LAYERS': 'Couche51',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Bayonne - Petit et Grand Bayonne 2019',
        source: new ol.source.TileWMS({
            attributions: 'Ville de Bayonne - 2019',
            url: 'https://wms.openstreetmap.fr/wms',
            params: {
                'LAYERS': 'bayonne_2019',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Brest Métropole Orthophoto 2023/2024',
        source: new ol.source.TileWMS({
            attributions: 'Brest Métropole - 2023-2024',
            url: 'https://geo.brest-metropole.fr/arcgis/rest/services/public/PhotoAerienne/MapServer/export',
            params: {
                'LAYERS': 'export',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Eurométropole de Strasbourg - Orthophotographie 2022',
        source: new ol.source.TileWMS({
            attributions: 'Ville et eurométropole de Strasbourg - DataGrandEst 2022',
            url: 'https://www.datagrandest.fr/geoserver/ems/ows',
            params: {
                'LAYERS': 'EMS_Ortho_2022',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Géolittoral - Orthophotos 2000',
        source: new ol.source.TileWMS({
            attributions: 'Ortho Littorale 2000 - Ministère en charge de l’environnement',
            url: 'https://geolittoral.din.developpement-durable.gouv.fr/wxs',
            params: {
                'LAYERS': 'ortholittorale',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Géolittoral - Sentiers',
        source: new ol.source.TileWMS({
            attributions: '© Typologie et usage - sentier du littoral français (métropole et outre-mer) - Ministère en charge de l’environnement - 2020',
            url: 'https://geolittoral.din.developpement-durable.gouv.fr/wxs',
            params: {
                'LAYERS': 'n_sentier_littoral_l_metropole_outremer',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Géolittoral V2 - Orthophotos 2011-2014',
        source: new ol.source.TileWMS({
            attributions: 'Ortho Littorale v2 - Ministère en charge de l’environnement',
            url: 'https://geolittoral.din.developpement-durable.gouv.fr/wxs',
            params: {
                'LAYERS': 'ortholittorale_v2_rvb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Loire-Atlantique - Orthophotos 2016 - 10 cm',
        source: new ol.source.TileWMS({
            attributions: '© Loire-Atlantique ouverture des données publiques',
            url: 'https://wms-vuduciel2.makina-corpus.net/geoserver/wms',
            params: {
                'LAYERS': 'cg44:ortho44-2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lyon Orthophoto 2018 (8cm)',
        source: new ol.source.TileWMS({
            attributions: 'Métropole de Lyon',
            url: 'https://imagerie.data.grandlyon.com/geoserver/grandlyon/ows',
            params: {
                'LAYERS': 'ortho_2018',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lyon Orthophoto 2012 (10cm)',
        source: new ol.source.TileWMS({
            attributions: 'Grand Lyon Smart Data DSIT 2012',
            url: 'https://imagerie.data.grandlyon.com/geoserver/grandlyon/ows',
            params: {
                'LAYERS': 'ortho_2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lyon Orthophoto 2022 (5cm)',
        source: new ol.source.TileWMS({
            attributions: 'CRAIG - Métropole du Grand Lyon 2022',
            url: 'https://imagerie.data.grandlyon.com/geoserver/grandlyon/ows',
            params: {
                'LAYERS': 'ortho_2022',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PCRS raster',
        source: new ol.source.TileWMS({
            attributions: 'PCRS - République Française',
            url: 'https://data.geopf.fr/wms-r/wms',
            params: {
                'LAYERS': 'PCRS.LAMB93',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Rennes orthophotographie 2021 (5 cm)',
        source: new ol.source.TileWMS({
            attributions: 'Rennes Ville et Métropole, IGN, SDE35, Megalis Bretagne',
            url: 'https://public.sig.rennesmetropole.fr/geoserver/raster/ows',
            params: {
                'LAYERS': 'ortho2021',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    })
];
