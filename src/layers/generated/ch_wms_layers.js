// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 49

const CHLayers = [
    new ol.layer.Tile({
        title: 'Plan Cadastral du SITN, Neuchâtel',
        source: new ol.source.TileWMS({
            attributions: 'Plan Cadastral du SITN, Neuchâtel',
            url: 'https://sitn.ne.ch/services/wmts',
            params: {
                'LAYERS': 'plan_cadastral',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE SURFACE 2014 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_SURFACE_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '3',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE SURFACE 2017 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_SURFACE_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '4',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE SURFACE 2019 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_SURFACE_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '5',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE SURFACE 2023 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_SURFACE_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '6',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE TERRAIN 2014 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_TERRAIN_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '3',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE TERRAIN 2017 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_TERRAIN_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '4',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE TERRAIN 2019 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_TERRAIN_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '5',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Canton de Génève, MNA RELIEF OMBRE TERRAIN 2023 (SITG)',
        source: new ol.source.TileWMS({
            attributions: 'Système d\'information du territoire à Genève (SITG)',
            url: 'https://raster.sitg.ge.ch/arcgis/services/MNA_RELIEF_TERRAIN_COLLECTION/MapServer/WMSServer',
            params: {
                'LAYERS': '6',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Basel-Stadt 2020',
        source: new ol.source.TileWMS({
            attributions: 'Geodaten Kanton Basel-Stadt',
            url: 'https://wms.geo.bs.ch/',
            params: {
                'LAYERS': 'OF_TrueOrthofoto2020Maerz',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Basel-Stadt 2023',
        source: new ol.source.TileWMS({
            attributions: 'Geodaten Kanton Basel-Stadt',
            url: 'https://wms.geo.bs.ch/',
            params: {
                'LAYERS': 'OF_TrueOrthofoto2023Mai',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug 2011',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2011_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug Nord 2016',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2016_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug Gemeinde Zug Süd 2018',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2018_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug (Walchwil und Zug (Alpli)) 2019',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2019_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug Neuheim 2020 3.5 cm',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2020_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zug Menzingen 2021 6.5 cm',
        source: new ol.source.TileWMS({
            attributions: 'GIS Kanton Zug',
            url: 'https://services.geo.zg.ch/ows/Orthofotos',
            params: {
                'LAYERS': 'zg.orthofoto_2021_kt_zg',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Bern, Digitales Oberflaechenmodell 50cm, Relief',
        source: new ol.source.TileWMS({
            attributions: 'Digitales Oberflächenmodell LIDAR 50cm © Amt für Wald des Kantons Bern',
            url: 'https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_elevation01_de_ms_wms/MapServer/WMSServer',
            params: {
                'LAYERS': 'LDOM50CM_LORELIEF_4163',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Bern, Digitales Terrainmodell 50cm, Relief',
        source: new ol.source.TileWMS({
            attributions: 'Digitales Terrainmodell LIDAR 50cm © Amt für Wald des Kantons Bern',
            url: 'https://www.geoservice.apps.be.ch/geoservice3/services/a42geo/of_elevation01_de_ms_wms/MapServer/WMSServer',
            params: {
                'LAYERS': 'LDTM50CM_LTRELIEF_883',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Schaffhausen, Relief 2013',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Schaffhausen, Relief 2013',
            url: 'https://wms.geo.sh.ch/raster',
            params: {
                'LAYERS': 'Relief_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Schaffhausen, Luftbild 2013',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Schaffhausen, Luftbild 2013',
            url: 'https://wms.geo.sh.ch/raster',
            params: {
                'LAYERS': 'Luftbild_2013',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DOM Relief 2014 50cm',
        source: new ol.source.TileWMS({
            attributions: 'DOM Relief 2014 - Auflösung 50cm, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.lidar_2014.dom_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DSM Relief 2018',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, DSM Relief 2018, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.bl.agi.lidar_2018.dsm_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DSM Relief 2019',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, DSM Relief 2019, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.lidar_2019.dsm_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DTM Relief 2014 50cm',
        source: new ol.source.TileWMS({
            attributions: 'DTM Relief 2014 - Auflösung 50cm, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.lidar_2014.dtm_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DTM Relief 2018',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, DTM Relief 2018, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.bl.agi.lidar_2018.dtm_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, DTM Relief 2019',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, DTM Relief 2019, WMS Solothurn (SOGIS)',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.lidar_2019.dtm_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, Orthofoto 2014 RGB',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, Orthofoto 2014 RGB',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.orthofoto_2014.rgb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, Orthofoto 2015 RGB',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, Orthofoto 2015 RGB',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.orthofoto_2015.rgb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, Orthofoto 2016 RGB',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, Orthofoto 2016 RGB',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.orthofoto_2016_rgb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Solothurn, Orthofoto 2017 RGB',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Solothurn, Orthofoto 2017 RGB',
            url: 'https://geo.so.ch/api/wms',
            params: {
                'LAYERS': 'ch.so.agi.orthofoto_2017_rgb',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Thurgau, Basisplan-AV',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Thurgau, Basisplan-AV',
            url: 'https://ows.geo.tg.ch/geofy_access_proxy/basisplanf',
            params: {
                'LAYERS': 'Selbstrechte,Liegenschaften,Bodenbedeckung_1,Bodenbedeckung_2,hoehenkurven,Einzelobjekte_Flaechen_1,Einzelobjekte_Linien_1,Gebaeude,BO_uebrige_befestigte,BO_Verkehr,Einzelobjekte_Flaechen_2,Einzelobjekte_Linien_2,Einzelobjekte_Punkte,Gemeindegrenzen,Kantonsgrenzen,Landesgrenzen,Hoehenkoten,BO_Objeknamen,Gelaendenamen,Strassennamen',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Thurgau, Rad-Routen',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Thurgau, Rad-Routen',
            url: 'https://ows.geo.tg.ch/geofy_access_proxy/radwege',
            params: {
                'LAYERS': 'Radwege',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Thurgau, Wanderwege',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Thurgau, Wanderwege',
            url: 'https://ows.geo.tg.ch/geofy_access_proxy/wanderwege',
            params: {
                'LAYERS': 'Wanderwege',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png',
                'TRANSPARENT': 'true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Thurgau, Orthofoto2017 RGB',
        source: new ol.source.TileWMS({
            attributions: 'Kanton Thurgau, Orthofoto2017 RGB',
            url: 'https://ows-raster.geo.tg.ch/geofy_access_proxy/orthofoto2017',
            params: {
                'LAYERS': 'Orthofoto2017_RGB',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Oberflächenschummerung 2014 50cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Oberflächenschummerung',
            url: 'https://wms.zh.ch/OGDLidarZH',
            params: {
                'LAYERS': 'dom2014_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Oberflächenschummerung 2017',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Oberflächenschummerung',
            url: 'https://wms.zh.ch/OGDLidarZH',
            params: {
                'LAYERS': 'dom2017_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Terrainschummerung 2014 50cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Terrainschummerung',
            url: 'https://wms.zh.ch/OGDLidarZH',
            params: {
                'LAYERS': 'dtm2014_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Terrainschummerung 2017',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Terrainschummerung',
            url: 'https://wms.zh.ch/OGDLidarZH',
            params: {
                'LAYERS': 'dtm2017_relief',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Sommer 2014/15 RGB 10cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Sommer 2014/15 RGB',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_s_2014',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Frühjahr 2015/16 RGB 10cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Frühjahr 2015/16 RGB',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_w_2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Sommer 2018 RGB 10cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Sommer 2018 RGB',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_s_2018',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Sommer 2020 RGB 5cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Sommer 2020 RGB',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_s_2020',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Frühjahr 2021 RGB 5cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Frühjahr 2021 RGB 5cm',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_w_2021',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kanton Zurich, Orthofoto ZH Sommer 2024 RGB 5cm',
        source: new ol.source.TileWMS({
            attributions: 'Geographisches Informationssystem des Kantons Zürich (GIS-ZH), Orthofoto ZH Sommer 2024 RGB 5cm',
            url: 'https://wms.zh.ch/OGDOrthoZH',
            params: {
                'LAYERS': 'ortho_s_2024',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Stadt St. Gallen',
        source: new ol.source.TileWMS({
            attributions: 'Orthofoto 2018 Stadt St. Gallen',
            url: 'https://map.stadt.sg.ch/cgi-bin/mapserv.exe',
            params: {
                'LAYERS': 'OP_SG',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Stadt Bern 10cm (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Geoinformation Stadt Bern',
            url: 'https://map.bern.ch/arcgis/services/Geoportal/Orthofoto_2023/MapServer/WmsServer',
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
        title: 'Stadt Zürich Luftbild 2013',
        source: new ol.source.TileWMS({
            attributions: 'Stadt Zürich Open Government Data',
            url: 'https://www.ogd.stadt-zuerich.ch/wms/geoportal/Orthofoto_2013_Stadt_Zuerich___Fruehling',
            params: {
                'LAYERS': 'OP_2013_STZH.tif',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'swisstopo SWISSIMAGE',
        source: new ol.source.TileWMS({
            attributions: 'Federal Office of Topography swisstopo',
            url: 'https://wms.geo.admin.ch',
            params: {
                'LAYERS': 'ch.swisstopo.swissimage',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default CHLayers;
