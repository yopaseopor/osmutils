// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 215

const USLayers = [
    new ol.layer.Tile({
        title: 'USGS 3D Elevation Program',
        source: new ol.source.TileWMS({
            attributions: '',
            url: 'https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WMSServer',
            params: {
                'LAYERS': '3DEPElevation:Hillshade%20Gray',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'CBJ Aerial Imagery (2013)',
        source: new ol.source.TileWMS({
            attributions: 'City and Borough of Juneau',
            url: 'https://epv.ci.juneau.ak.us/arcgis/rest/services/prod/aerial_layers_ipv/MapServer/export',
            params: {
                'LAYERS': 'show:2',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'CBJ Aerial Imagery (May 2023)',
        source: new ol.source.TileWMS({
            attributions: 'City and Borough of Juneau',
            url: 'https://epv.ci.juneau.ak.us/arcgis/rest/services/prod/aerial_layers_ipv/MapServer/export',
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
        title: 'CBJ Aerial Imagery (June 2023)',
        source: new ol.source.TileWMS({
            attributions: 'City and Borough of Juneau',
            url: 'https://epv.ci.juneau.ak.us/arcgis/rest/services/prod/aerial_layers_ipv/MapServer/export',
            params: {
                'LAYERS': 'show:1,4',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MSB Aerial Imagery - Area 1(2019)',
        source: new ol.source.TileWMS({
            attributions: 'Matanuska-Susitna Borough GIS Division',
            url: 'https://maps.matsugov.us/imagery/rest/services/Imagery/AerialMosaic_2019_SP_Dyn/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MSB Aerial Imagery - Area 2 (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Matanuska-Susitna Borough GIS Division',
            url: 'https://maps.matsugov.us/imagery/rest/services/Imagery/AerialMosaic_2020_half_foot_SP_Dyn/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MSB Aerial Imagery - Area 3 (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Matanuska-Susitna Borough GIS Division',
            url: 'https://maps.matsugov.us/imagery/rest/services/Imagery/AerialMosaic_2021_SP_Dyn/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MSB Aerial Imagery - Core Area (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Matanuska-Susitna Borough GIS Division',
            url: 'https://maps.matsugov.us/imagery/rest/services/Imagery/AerialMosaic_2022_SP_Dyn/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MSB Aerial Imagery - Area 2 (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Matanuska-Susitna Borough GIS Division',
            url: 'https://maps.matsugov.us/imagery/rest/services/Imagery/AerialMosaic_2023_SP_Dyn/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'USDA Delta Junction Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/services/ortho_imagery/alaska_delta_junction_2021/ImageServer/WMSServer',
            params: {
                'LAYERS': 'alaska_delta_junction_2021:NaturalColor_4Band_Vivid_NoStretch',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PAgis 2018 Orthophotography',
        source: new ol.source.TileWMS({
            attributions: 'Pulaski Area Geographic Information System',
            url: 'https://www.pagis.org/arcgis/services/MAPS/AerialPhotos2018/MapServer/WmsServer',
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
        title: 'PAgis 2021 Orthophotography',
        source: new ol.source.TileWMS({
            attributions: 'Pulaski Area Geographic Information System',
            url: 'https://www.pagis.org/arcgis/rest/services/MAPS/AerialPhotos2021/MapServer/export',
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
        title: 'City of Berkeley Orthoimagery (Latest)',
        source: new ol.source.TileWMS({
            attributions: 'City of Berkeley',
            url: 'https://gis.cityofberkeley.info/arcgis3/rest/services/Imagery/Orthophoto/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Burbank Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'City of Burbank',
            url: 'https://mobilegis.burbankca.gov/burgis/rest/services/Ortho/Base_2024_4in/MapServer/export',
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
        title: 'City of Eureka Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Eureka',
            url: 'https://arcgis-svr.ci.eureka.ca.gov/arcgis/rest/services/2023_mosaic/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Irvine Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Irvine',
            url: 'https://gis.cityofirvine.org/arcgis/rest/services/Aerial/Aerial_2023/MapServer/export',
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
        title: 'City of Manhattan Beach Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Manhattan Beach',
            url: 'https://permitmaps.citymb.info/arcgis/rest/services/MBGISInfo_Imagery2017_1071/MapServer/export',
            params: {
                'LAYERS': 'show:4',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Manteca Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'City of Manteca',
            url: 'https://gisweb.ci.manteca.ca.us/arcgis/rest/services/Basemaps/2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Manteca Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'City of Manteca',
            url: 'https://gisweb.ci.manteca.ca.us/arcgis/rest/services/Basemaps/2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Modesto Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Modesto',
            url: 'https://gis.modestogov.com/hosting/rest/services/ExternalServices/City_of_Modesto_2023_Aerial/MapServer/export',
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
        title: 'City of Modesto Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'City of Modesto',
            url: 'https://gis.modestogov.com/hosting/rest/services/ExternalServices/City_of_Modesto_2024_Aerial/MapServer/export',
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
        title: 'Orange County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Orange County',
            url: 'https://ocgis.com/arcpub/rest/services/Aerial_Imagery_Countywide/22_OC_3IN_SP6/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Roseville Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Roseville',
            url: 'https://ags.roseville.ca.us/arcgis/rest/services/PublicServices/CityOrtho2023/MapServer/export',
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
        title: 'City of Roseville Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'City of Roseville',
            url: 'https://ags.roseville.ca.us/arcgis/rest/services/PublicServices/CityOrtho2024/MapServer/export',
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
        title: 'SANDAG 2020 Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'San Diego Association of Governments',
            url: 'https://gis.sandag.org/sdgis/services/Imagery/SD2020/ImageServer/WMSServer',
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
        title: 'SANDAG 2023 Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'San Diego Association of Governments',
            url: 'https://gis.sandag.org/sdgis/services/Imagery/SD2023_9inch/ImageServer/WMSServer',
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
        title: 'San Bernardino County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'San Bernardino County',
            url: 'https://maps.sbcounty.gov/arcgis/rest/services/Y2023_pua_cache/MapServer/export',
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
        title: 'San Bernardino County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'San Bernardino County',
            url: 'https://maps.sbcounty.gov/arcgis/rest/services/Y2024_pua_cache/MapServer/export',
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
        title: 'San Mateo County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'San Mateo County',
            url: 'https://gis.smcgov.org/image/rest/services/SanMateoCounty_Imagery2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Santa Clara County Orthoimagery (Winter 2022)',
        source: new ol.source.TileWMS({
            attributions: 'County of Santa Clara',
            url: 'https://mapimages.sccgov.org/arcgis/rest/services/imagery/OrthoImagery2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Santa Clara County Orthoimagery (Spring 2023)',
        source: new ol.source.TileWMS({
            attributions: 'County of Santa Clara',
            url: 'https://mapimages.sccgov.org/arcgis/rest/services/imagery/OrthoImagery2023_LimitedCities/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Santa Clara County Orthoimagery (Spring 2024)',
        source: new ol.source.TileWMS({
            attributions: 'County of Santa Clara',
            url: 'https://mapimages.sccgov.org/arcgis/rest/services/imagery/OrthoImagery2024_LimitedCities/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Santa Clara County Orthoimagery (Winter 2024)',
        source: new ol.source.TileWMS({
            attributions: 'County of Santa Clara',
            url: 'https://mapimages.sccgov.org/arcgis/rest/services/imagery/OrthoImagery2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Santa Rosa Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'City of Santa Rosa',
            url: 'https://ags2maps.srcity.org/arcgis/rest/services/Aerial_2022_SR/MapServer/export',
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
        title: 'City of Santa Rosa Orthoimagery (2025)',
        source: new ol.source.TileWMS({
            attributions: 'City of Santa Rosa',
            url: 'https://ags2maps.srcity.org/arcgis/rest/services/Aerial_2025_SR/MapServer/export',
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
        title: 'City of Stockton Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Stockton',
            url: 'https://gisportal.stocktonca.gov/arcgis/services/Aerials/Aerials_2023/ImageServer/WMSServer',
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
        title: 'Arapahoe County Aerials Latest',
        source: new ol.source.TileWMS({
            attributions: 'Arapahoe County GIS',
            url: 'https://gis.arapahoegov.com/arcgis/rest/services/Aerials/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Mesa County GIS NAIP 2015',
        source: new ol.source.TileWMS({
            attributions: 'Mesa County GIS',
            url: 'https://mcgis.mesacounty.us/imagery/rest/services/Mosaic_Datasets/MesaCounty_2015/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Mesa County GIS Valleywide 2022',
        source: new ol.source.TileWMS({
            attributions: 'Mesa County GIS',
            url: 'https://mcgis.mesacounty.us/imagery/rest/services/Mosaic_Datasets/Airphoto_2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Mesa County GIS Valleywide 2024',
        source: new ol.source.TileWMS({
            attributions: 'Mesa County GIS',
            url: 'https://mcgis.mesacounty.us/imagery/rest/services/Mosaic_Datasets/City_County_2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'CT ECO Shaded Relief (2016)',
        source: new ol.source.TileWMS({
            attributions: 'Connecticut Environmental Conditions Online',
            url: 'https://cteco.uconn.edu/ctraster/services/elevation/Elevation/ImageServer/WMSServer',
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
        title: 'CT ECO Shaded Relief (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Connecticut Environmental Conditions Online',
            url: 'https://cteco.uconn.edu/ctraster/services/elevation/ShadedRelief_noDRA/ImageServer/WMSServer',
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
        title: 'DC From Above Orthophoto 2019',
        source: new ol.source.TileWMS({
            attributions: 'OCTO, DCGIS',
            url: 'https://maps2.dcgis.dc.gov/dcgis/services/DCGIS_DATA/Ortho2019/MapServer/WMSServer',
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
        title: 'DC From Above Orthophoto 2021',
        source: new ol.source.TileWMS({
            attributions: 'OCTO, DCGIS',
            url: 'https://imagery.dcgis.dc.gov/dcgis/services/Ortho/Ortho_2021/ImageServer/WMSServer',
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
        title: 'DC From Above Orthophoto 2023',
        source: new ol.source.TileWMS({
            attributions: 'OCTO, DCGIS',
            url: 'https://imagery.dcgis.dc.gov/dcgis/services/Ortho/Ortho_2023/ImageServer/WMSServer',
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
        title: 'Delaware 2017 Orthophotography (Natural Color)',
        source: new ol.source.TileWMS({
            attributions: 'Surdex Corp, FirstMap',
            url: 'https://imagery.firstmap.delaware.gov/imagery/services/DE_Imagery/DE_Imagery_2017/ImageServer/WMSServer',
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
        title: 'Delaware Boundaries',
        source: new ol.source.TileWMS({
            attributions: 'FirstMap',
            url: 'https://enterprise.firstmap.delaware.gov/arcgis/rest/services/Boundaries/DE_Boundaries/MapServer/export',
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
        title: 'Delaware FirstMap 2021',
        source: new ol.source.TileWMS({
            attributions: 'Hexagon, FirstMap',
            url: 'https://imagery.firstmap.delaware.gov/imagery/rest/services/DE_Imagery/DE_Imagery_2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Delaware FirstMap 2022',
        source: new ol.source.TileWMS({
            attributions: 'Sanborn Map Company, FirstMap',
            url: 'https://imagery.firstmap.delaware.gov/imagery/rest/services/DE_Imagery/DE_Imagery_2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Delaware Parks 2022',
        source: new ol.source.TileWMS({
            attributions: 'Sanborn Map Company, FirstMap',
            url: 'https://imagery.firstmap.delaware.gov/imagery/rest/services/DE_Imagery/DE_Imagery_2022_Parks_HR/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Brevard County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Brevard County Board of County Commissioners',
            url: 'https://gis.brevardfl.gov/gissrv/rest/services/Aerial_Photo/Y2021/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Brevard County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Brevard County Board of County Commissioners',
            url: 'https://gis.brevardfl.gov/gissrv/rest/services/Aerial_Photo/Y2022/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Brevard County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Brevard County Board of County Commissioners',
            url: 'https://gis.brevardfl.gov/gissrv/rest/services/Aerial_Photo/Y2023/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Brevard County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Brevard County Board of County Commissioners',
            url: 'https://gis.brevardfl.gov/gissrv/rest/services/Aerial_Photo/Y2024/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Broward County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Broward County Property Appraiser’s Office',
            url: 'https://gisweb-adapters.bcpa.net/arcgis/rest/services/BCPA_WEB_BASE_21/MapServer/export',
            params: {
                'LAYERS': 'show,3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Broward County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Broward County Property Appraiser’s Office',
            url: 'https://gisweb-adapters.bcpa.net/arcgis/rest/services/BCPA_WEB_BASE_22/MapServer/export',
            params: {
                'LAYERS': 'show,3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Broward County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Broward County Property Appraiser’s Office',
            url: 'https://gisweb-adapters.bcpa.net/arcgis/rest/services/BCPA_WEB_BASE_23/MapServer/export',
            params: {
                'LAYERS': 'show,3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Broward County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Broward County Property Appraiser’s Office',
            url: 'https://gisweb-adapters.bcpa.net/arcgis/rest/services/BCPA_WEB_BASE_24/MapServer/export',
            params: {
                'LAYERS': 'show,3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Charlotte County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Charlotte County Geographic Information Systems',
            url: 'https://agis.charlottecountyfl.gov/arcgis/rest/services/Aerials/Raster2020/MapServer/export',
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
        title: 'Charlotte County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Charlotte County Geographic Information Systems',
            url: 'https://agis.charlottecountyfl.gov/arcgis/rest/services/Aerials/Aerials2022_Post_IAN/MapServer/export',
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
        title: 'Charlotte County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Charlotte County Geographic Information Systems',
            url: 'https://agis.charlottecountyfl.gov/arcgis/rest/services/Aerials/Aerials2023/MapServer/export',
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
        title: 'Charlotte County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Charlotte County Geographic Information Systems',
            url: 'https://agis.charlottecountyfl.gov/arcgis/rest/services/Aerials/Aerials2024/MapServer/export',
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
        title: 'Charlotte County Orthoimagery (2025)',
        source: new ol.source.TileWMS({
            attributions: 'Charlotte County Geographic Information Systems',
            url: 'https://agis.charlottecountyfl.gov/arcgis/rest/services/Aerials/Aerials2025/MapServer/export',
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
        title: 'Citrus County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Citrus County Property Appraiser\'s Office',
            url: 'https://gis.citruspa.org/arcgisweb/rest/services/Tyler/2020_Aerials/MapServer/export',
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
        title: 'Citrus County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Citrus County Property Appraiser\'s Office',
            url: 'https://gis.citruspa.org/arcgisweb/rest/services/Tyler/2023_Aerials/MapServer/export',
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
        title: 'Collier County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Collier County Information Technology GIS Team',
            url: 'https://ags2.colliercountyfl.gov/imagery/rest/services/Orthos2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Collier County Orthoimagery (Latest)',
        source: new ol.source.TileWMS({
            attributions: 'Collier County Information Technology GIS Team',
            url: 'https://ags2.colliercountyfl.gov/imagery/rest/services/CurrentOrthos/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'JaxGIS Duval Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'JaxGIS',
            url: 'https://maps.coj.net/coj/rest/services/imagery/Duval2023/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Florida DEP Orthoimagery Composite (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Florida Department of Environmental Protection',
            url: 'https://ca.dep.state.fl.us/arcgis/rest/services/Imagery/Aerial_Imagery_2020/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Florida DEP Orthoimagery Composite (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Florida Department of Environmental Protection',
            url: 'https://ca.dep.state.fl.us/arcgis/rest/services/Imagery/Aerial_Imagery_2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Hillsborough County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Hillsborough County Zoning Information & Counseling',
            url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Aerials/HC_Aerials_2023_WGS/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lee County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Lee County GIS',
            url: 'https://gissvr4.leepa.org/gissvr/rest/services/AP2021Pict/MapServer/export',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lee County Orthoimagery (2022 Q1)',
        source: new ol.source.TileWMS({
            attributions: 'Lee County GIS',
            url: 'https://gissvr4.leepa.org/gissvr/rest/services/AP2022Pict/MapServer/export',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lee County Orthoimagery (2022 Q4)',
        source: new ol.source.TileWMS({
            attributions: 'Lee County GIS',
            url: 'https://gissvr4.leepa.org/gissvr/rest/services/AP2022q4Pict/MapServer/export',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lee County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Lee County GIS',
            url: 'https://gissvr4.leepa.org/gissvr/rest/services/AP2023Pict/MapServer/export',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Lee County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Lee County GIS',
            url: 'https://gissvr4.leepa.org/gissvr/rest/services/AP2024Pict/MapServer/export',
            params: {
                'LAYERS': '0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Manatee County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Manatee County GIS',
            url: 'https://www.mymanatee.org/lizardtech/iserv/ows',
            params: {
                'LAYERS': '2021_webmercator',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Marion County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Marion County',
            url: 'https://gis.marionfl.org/image/rest/services/Aerials/Aerials_2023/ImageServer/exportImage',
            params: {
                'LAYERS': 'show,6',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Martin County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Martin County',
            url: 'https://geoweb.martin.fl.us/raster/services/2021_Imagery/ImageServer/WMSServer',
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
        title: 'Martin County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Martin County',
            url: 'https://geoweb.martin.fl.us/raster/services/2022_Imagery/ImageServer/WMSServer',
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
        title: 'Martin County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Martin County',
            url: 'https://geoweb.martin.fl.us/raster/services/2023_Imagery/ImageServer/WMSServer',
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
        title: 'Martin County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Martin County',
            url: 'https://geoweb.martin.fl.us/raster/rest/services/2024_Imagery/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Miami-Dade County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Miami-Dade County',
            url: 'https://imageserverintra.miamidade.gov/arcgis/services/Woolpert2021/ImageServer/WMSServer',
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
        title: 'Miami-Dade County Orthoimagery (Latest)',
        source: new ol.source.TileWMS({
            attributions: 'Miami-Dade County',
            url: 'https://gisweb.miamidade.gov/arcgis/rest/services/MapCache/MDCImagery_WebMercator/MapServer/export',
            params: {
                'LAYERS': 'show,6',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Monroe County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Monroe County',
            url: 'https://mcgis4.monroecounty-fl.gov/public/rest/services/Images/Orthos2023/ImageServer/exportImage',
            params: {
                'LAYERS': 'show,6',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Monroe County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Monroe County',
            url: 'https://mcgis4.monroecounty-fl.gov/public/rest/services/Images/Orthos2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'show,6',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Naples Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Collier County Property Appraiser’s Office, Naples GIS',
            url: 'https://g.naplesgov.com/arcgis/rest/services/Imagery/NAPLES_2020/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Okaloosa County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Okaloosa County, FL GIS',
            url: 'https://ags.myokaloosa.com/arcgis/rest/services/imagery/Aerial2022_dynamic/MapServer/export',
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
        title: 'Orange County Orthoimagery (Latest)',
        source: new ol.source.TileWMS({
            attributions: 'Orange County GIS',
            url: 'https://ocgis4.ocfl.net/arcgis/rest/services/AGOL_Open_Data/MapServer/export',
            params: {
                'LAYERS': 'show:57',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Osceola County Roads',
        source: new ol.source.TileWMS({
            attributions: 'Osceola County, FL',
            url: 'https://gis.osceola.org/hosting/rest/services/Centerlines/MapServer/export',
            params: {
                'LAYERS': 'export',
                'VERSION': '1.3.0',
                'FORMAT': 'png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Palm Beach County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Palm Beach County',
            url: 'https://maps.co.palm-beach.fl.us/arcgis/rest/services/Aerials/2021/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Palm Beach County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Palm Beach County',
            url: 'https://maps.co.palm-beach.fl.us/arcgis/rest/services/Aerials/2022/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Polk County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Polk County, FL',
            url: 'https://gis.polk-county.net/image/rest/services/Aerials/Aerial_2023/ImageServer/exportImage',
            params: {
                'LAYERS': 'show,6',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Seminole County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Seminole County GIS',
            url: 'https://seminolearcgis.seminolecountyfl.gov:6443/arcgis/rest/services/Aerials2024/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Volusia County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Volusia County Property Appraiser’s Office',
            url: 'https://maps5.vcgov.org/arcgis/services/Aerials/2021_Aerial/ImageServer/WMSServer',
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
        title: 'Volusia County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Volusia County Property Appraiser’s Office',
            url: 'https://maps5.vcgov.org/arcgis/services/Aerials/2023_Aerial/ImageServer/WMSServer',
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
        title: 'Volusia County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Volusia County Property Appraiser’s Office',
            url: 'https://maps5.vcgov.org/arcgis/rest/services/Aerials/2024_Aerial/ImageServer/exportImage',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'USDA Hawaii Imagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/services/ortho_imagery/hawaii_vivid_2022_30cm/ImageServer/WMSServer',
            params: {
                'LAYERS': 'hawaii_vivid_2022_30cm:Natural Color No Stretch',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'USDA Northwest Hawaiian Islands Imagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'U.S. Department of Agriculture',
            url: 'https://nrcsgeoservices.sc.egov.usda.gov/arcgis/services/ortho_imagery/northwest_hawaiian_islands_2022_30cm/ImageServer/WMSServer',
            params: {
                'LAYERS': 'northwest_hawaiian_islands_2022_30cm:Natural Color No Stretch',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cook County Orthoimagery 2020',
        source: new ol.source.TileWMS({
            attributions: 'Cook County GIS',
            url: 'https://gis.cookcountyil.gov/imagery/rest/services/CookOrtho2020/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cook County Orthoimagery 2021',
        source: new ol.source.TileWMS({
            attributions: 'Cook County GIS',
            url: 'https://gis.cookcountyil.gov/imagery/rest/services/CookOrtho2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cook County Orthoimagery 2022',
        source: new ol.source.TileWMS({
            attributions: 'Cook County GIS',
            url: 'https://gis.cookcountyil.gov/imagery/rest/services/CookOrtho2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cook County Orthoimagery 2023',
        source: new ol.source.TileWMS({
            attributions: 'Cook County GIS',
            url: 'https://gis.cookcountyil.gov/imagery/rest/services/CookOrtho2023/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cook County Orthoimagery 2024',
        source: new ol.source.TileWMS({
            attributions: 'Cook County GIS',
            url: 'https://gis.cookcountyil.gov/imagery/rest/services/CookOrtho2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Indiana Statewide Imagery Program (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Indiana Geographic Information Office',
            url: 'https://imagery.gis.in.gov/arcgis/rest/services/Imagery/2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IndianaMap Orthoimagery - Latest Available',
        source: new ol.source.TileWMS({
            attributions: 'IndianaMap, Indiana Geographic Information Office',
            url: 'https://di-ingov.img.arcgis.com/arcgis/rest/services/DynamicWebMercator/Indiana_Current_Imagery/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kansas NG911 Orthoimagery (2014)',
        source: new ol.source.TileWMS({
            attributions: 'Kansas 911 Coordinating Council',
            url: 'https://services.kansasgis.org/arcgis7/rest/services/IMAGERY_STATEWIDE/Kansas_HRO_2014_Color/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kansas NG911 Orthoimagery (2018)',
        source: new ol.source.TileWMS({
            attributions: 'Kansas 911 Coordinating Council',
            url: 'https://services.kansasgis.org/arcgis7/rest/services/IMAGERY_STATEWIDE/NG911_Imagery_2018_SID/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Kansas NG911 Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Kansas 911 Coordinating Council',
            url: 'https://services.kansasgis.org/arcgis7/rest/services/IMAGERY_STATEWIDE/NG911_Imagery_2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'KyFromAbove Aerial Imagery (2012-2014)',
        source: new ol.source.TileWMS({
            attributions: 'KyFromAbove',
            url: 'https://kyraster.ky.gov/arcgis/services/ImageServices/Ky_KYAPED_Imagery_WGS84WM/ImageServer/WMSServer',
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
        title: 'MD Latest 6 Inch Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'DoIT, MD iMap, MDP',
            url: 'https://geodata.md.gov/imap/rest/services/Imagery/MD_SixInchImagery/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MD Three Inch Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'DoIT, MD iMap, MDP',
            url: 'https://geodata.md.gov/imap/rest/services/Imagery/MD_ThreeInchImagery/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Maine Orthoimagery Program (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Maine Orthoimagery Program',
            url: 'https://gis.maine.gov/arcgis/services/imageryBaseMapsEarthCover/orthoRegional2021/ImageServer/WMSServer',
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
        title: 'Oakland County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Oakland County',
            url: 'https://gisservices.oakgov.com/arcgis/rest/services/ImageServices/EnterpriseOrthoTC2020ImageService/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Oakland County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Oakland County',
            url: 'https://gisservices.oakgov.com/arcgis/rest/services/ImageServices/EnterpriseOrthoTC2023ImageService/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Dakota County GIS 2017 Fall Leaf-Off 6-Inch',
        source: new ol.source.TileWMS({
            attributions: 'Dakota County GIS',
            url: 'https://gisimg.co.dakota.mn.us/arcgis/services/AerialPhotography/2017AirPhotoLeafOff6Inch/ImageServer/WMSServer',
            params: {
                'LAYERS': '2017AirPhotoLeafOff6Inch:None',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Dakota County GIS 2019 Spring Leaf-Off 6-Inch',
        source: new ol.source.TileWMS({
            attributions: 'Dakota County GIS',
            url: 'https://gisimg.co.dakota.mn.us/arcgis/services/AerialPhotography/2019AirPhotoLeafOff6Inch_Spring/ImageServer/WMSServer',
            params: {
                'LAYERS': '2019AirPhotoLeafOff6Inch_Spring:default',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Hennepin County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Hennepin County GIS',
            url: 'https://gis.hennepin.us/arcgis/services/Imagery/UTM_Aerial_2020/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Hennepin County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Hennepin County GIS',
            url: 'https://gis.hennepin.us/arcgis/services/Imagery/UTM_Aerial_2021/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Hennepin County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Hennepin County GIS',
            url: 'https://gis.hennepin.us/arcgis/services/Imagery/UTM_Aerial_2022/MapServer/WMSServer',
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
        title: 'Hennepin County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Hennepin County GIS',
            url: 'https://gis.hennepin.us/arcgis/services/Imagery/UTM_Aerial_2023/MapServer/WMSServer',
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
        title: 'Hennepin County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Hennepin County GIS',
            url: 'https://gis.hennepin.us/arcgis/services/Imagery/UTM_Aerial_2024/MapServer/WMSServer',
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
        title: 'Minnesota Composite Image Service',
        source: new ol.source.TileWMS({
            attributions: 'MnGeo',
            url: 'https://imageserver.gisdata.mn.gov/cgi-bin/mncomp',
            params: {
                'LAYERS': 'mncomp',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'City of Bozeman Aerial Photography (2021)',
        source: new ol.source.TileWMS({
            attributions: 'City of Bozeman GIS Department',
            url: 'https://gisweb.bozeman.net/image/services/COB_20210417_WGS84_WebMercator/ImageServer/WMSServer',
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
        title: 'City of Bozeman Aerial Photography (2023)',
        source: new ol.source.TileWMS({
            attributions: 'City of Bozeman GIS Department',
            url: 'https://gisweb.bozeman.net/image/services/COB_20230430_WebMercator/ImageServer/WMSServer',
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
        title: 'Mecklenburg County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Mecklenburg County GIS',
            url: 'https://meckaerial.mecklenburgcountync.gov/server/rest/services/aerial2021/MapServer/export',
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
        title: 'Mecklenburg County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Mecklenburg County GIS',
            url: 'https://meckaerial.mecklenburgcountync.gov/server/rest/services/aerial2022/MapServer/export',
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
        title: 'Mecklenburg County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Mecklenburg County GIS',
            url: 'https://meckaerial.mecklenburgcountync.gov/server/rest/services/aerial2023/MapServer/export',
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
        title: 'Mecklenburg County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Mecklenburg County GIS',
            url: 'https://meckaerial.mecklenburgcountync.gov/server/rest/services/aerial2024/MapServer/export',
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
        title: 'Mecklenburg County Orthoimagery (2025)',
        source: new ol.source.TileWMS({
            attributions: 'Mecklenburg County GIS',
            url: 'https://meckaerial.mecklenburgcountync.gov/server/rest/services/aerial2025/MapServer/export',
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
        title: 'NC OneMap Latest Orthoimagery (Infrared)',
        source: new ol.source.TileWMS({
            attributions: 'NCCGIA, NC911 Board',
            url: 'https://services.nconemap.gov/secure/rest/services/Imagery/Orthoimagery_CIR/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NC OneMap Latest Orthoimagery (NDVI)',
        source: new ol.source.TileWMS({
            attributions: 'NCCGIA, NC911 Board',
            url: 'https://services.nconemap.gov/secure/rest/services/Imagery/Orthoimagery_NDVI/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Union County Orthoimagery (2019)',
        source: new ol.source.TileWMS({
            attributions: 'Union County GIS',
            url: 'https://gis-image1.unioncountync.gov/arcgis/rest/services/GoMapsOrthos/Orthos2019/MapServer/export',
            params: {
                'LAYERS': 'show,0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NH GRANIT LiDAR Hillshade 2022 (Northeast)',
        source: new ol.source.TileWMS({
            attributions: 'NH GRANIT',
            url: 'https://nhgeodata.unh.edu/nhgeodata/services/ImageServices/LiDAR_Bare_Earth_NE_HS_NH_2022/ImageServer/WMSServer',
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
        title: 'NH GRANIT LiDAR Hillshade 2022 (Northwest)',
        source: new ol.source.TileWMS({
            attributions: 'NH GRANIT',
            url: 'https://nhgeodata.unh.edu/nhgeodata/services/ImageServices/LiDAR_Bare_Earth_NW_HS_NH_2022/ImageServer/WMSServer',
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
        title: 'NH GRANIT 2021/2022 6-inch Orthophotos (Infrared)',
        source: new ol.source.TileWMS({
            attributions: 'NH GRANIT',
            url: 'https://nhgeodata.unh.edu/nhgeodata/services/ImageServices/NH_2021_2022_6in_CIR/ImageServer/WMSServer',
            params: {
                'LAYERS': 'NH_2021_2022_6in_CIR:2122CIR',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NH GRANIT 2021/2022 6-inch Orthophotos (Color)',
        source: new ol.source.TileWMS({
            attributions: 'NH GRANIT',
            url: 'https://nhgeodata.unh.edu/image/services/ImageServices/NH_2021_2022_6in_RGB/ImageServer/WMSServer',
            params: {
                'LAYERS': 'NH_2021_2022_6in_RGB:None',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DVRPC Orthoimagery 2020 - Burlington County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
            params: {
                'LAYERS': '7',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DVRPC Orthoimagery 2020 - Camden County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
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
        title: 'DVRPC Orthoimagery 2020 - Gloucestor County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
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
        title: 'DVRPC Orthoimagery 2020 - Mercer County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
            params: {
                'LAYERS': '2',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NJ 2015 Aerial Imagery (Infrared)',
        source: new ol.source.TileWMS({
            attributions: 'NJ Office of Information Technology (NJOIT), Office of Geographic Information Systems (OGIS)',
            url: 'https://img.nj.gov/imagerywms/Infrared2015',
            params: {
                'LAYERS': 'Infrared2015',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NJGIN Orthoimagery 2020 - Infrared (1ft leaf off)',
        source: new ol.source.TileWMS({
            attributions: 'NJGIN, NJOGIS',
            url: 'https://img.nj.gov/imagerywms/Infrared2020',
            params: {
                'LAYERS': 'Infrared2020',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NJ 2015 Aerial Imagery (Natural Color)',
        source: new ol.source.TileWMS({
            attributions: 'NJ Office of Information Technology (NJOIT), Office of Geographic Information Systems (OGIS)',
            url: 'https://img.nj.gov/imagerywms/Natural2015',
            params: {
                'LAYERS': 'Natural2015',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NJGIN Orthoimagery 2020 - Natural (1ft leaf off)',
        source: new ol.source.TileWMS({
            attributions: 'NJGIN, NJOGIS',
            url: 'https://img.nj.gov/imagerywms/Natural2020',
            params: {
                'LAYERS': 'Natural2020',
                'VERSION': '1.1.1',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Los Alamos County Orthoimagery 2018 (1in)',
        source: new ol.source.TileWMS({
            attributions: 'Los Alamos County GIS Services',
            url: 'https://gis.losalamosnm.us/securegis/rest/services/imagery/Orthoimagery_drone_1_inch/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Los Alamos County Orthoimagery 2018 (3in)',
        source: new ol.source.TileWMS({
            attributions: 'Los Alamos County GIS Services',
            url: 'https://gis.losalamosnm.us/securegis/rest/services/imagery/Orthoimagery_pictometry_3in_2018/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Los Alamos County Orthoimagery 2022 (3in)',
        source: new ol.source.TileWMS({
            attributions: 'Los Alamos County GIS Services',
            url: 'https://gis.losalamosnm.us/securegis/rest/services/imagery/Orthoimagery_pictometry_3in_2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Northern New Mexico NAIP 2022 (Infrared)',
        source: new ol.source.TileWMS({
            attributions: 'Los Alamos County GIS Services',
            url: 'https://gis.losalamosnm.us/securegis/rest/services/imagery/Orthoimagery_pictometry_3in_2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'MRCOG Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Mid-Region Council of Governments, Bohannan Huston, Inc.',
            url: 'https://gstore.unm.edu/apps/rgis/datasets/a2f27db4-ed08-4ec9-b5b3-5b12e6f1bb89/services/ogc/wms',
            params: {
                'LAYERS': 'MRCOG_2020_ECW',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'San Juan County Orthoimagery (2019)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://webmaps.sjcounty.net/arcgis/services/Imagery/SJC_2019_Imagery/ImageServer/WMSServer',
            params: {
                'LAYERS': 'SJC_2019_Imagery',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'San Juan County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://webmaps.sjcounty.net/arcgis/services/Imagery/SJC_2021Imagery/ImageServer/WMSServer',
            params: {
                'LAYERS': 'SJC_2021Imagery',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'San Juan County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://webmaps.sjcounty.net/arcgis/services/Imagery/SJC2023Imagery/ImageServer/WMSServer',
            params: {
                'LAYERS': 'SJC2023Imagery',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'San Juan County Orthoimagery (2025)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://webmaps.sjcounty.net/arcgis/services/Imagery/SJC_2025_3in6inCombined/ImageServer/WMSServer',
            params: {
                'LAYERS': 'SJC_2025_3in6inCombined',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cattaraugus County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Cattaraugus County Real Property Services',
            url: 'https://maps2.cattco.org/arcgiswebadaptor/rest/services/AerialPhotos/MapServer/export',
            params: {
                'LAYERS': 'show:12',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cattaraugus County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Cattaraugus County Real Property Services',
            url: 'https://maps2.cattco.org/arcgiswebadaptor/rest/services/AerialPhotos/MapServer/export',
            params: {
                'LAYERS': 'show:8',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cattaraugus County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Cattaraugus County Real Property Services',
            url: 'https://maps2.cattco.org/arcgiswebadaptor/rest/services/AerialPhotos/MapServer/export',
            params: {
                'LAYERS': 'show:44',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NYSDOP Latest Orthoimagery (Natural Color)',
        source: new ol.source.TileWMS({
            attributions: 'New York State Statewide Digital Orthoimagery Program',
            url: 'https://orthos.its.ny.gov/arcgis/services/wms/Latest/MapServer/WmsServer',
            params: {
                'LAYERS': '0,1,2,3',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NYSDOP Latest Orthoimagery (Infrared)',
        source: new ol.source.TileWMS({
            attributions: 'New York State Statewide Digital Orthoimagery Program',
            url: 'https://orthos.its.ny.gov/arcgis/services/wms/Latest_cir/MapServer/WmsServer',
            params: {
                'LAYERS': '0,1,2,3',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'NYS Hillshade',
        source: new ol.source.TileWMS({
            attributions: 'New York State Information Technology Services Geospatial Services',
            url: 'https://elevation.its.ny.gov/arcgis/rest/services/NYS_Statewide_Hillshade/MapServer/export',
            params: {
                'LAYERS': 'export',
                'VERSION': '1.3.0',
                'FORMAT': 'png8','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Butler County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Butler County, State of Ohio',
            url: 'https://gismaps.bceo.org/bcegis/rest/services/2023_Ortho/MapServer/export',
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
        title: 'City of Fairfield Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'City of Fairfield, State of Ohio',
            url: 'https://gis.fairfield-city.org/cofgis/services/Imagery_2020_WGS/MapServer/WMSServer',
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
        title: 'City of Mansfield Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'City of Mansfield, State of Ohio',
            url: 'https://arcgis.mansfieldcity.com/server/rest/services/Imagery/Imagery_2022/MapServer/export',
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
        title: 'City of Wooster Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'City of Wooster, State of Ohio',
            url: 'https://utility.arcgis.com/usrsvcs/servers/a9c2a83a20ea4a4ea4a910b9766329b4/rest/services/Imagery/Ortho_2021/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cuyahoga County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Cuyahoga County, State of Ohio',
            url: 'https://gis.cuyahogacounty.us/server/rest/services/IMAGERY/2023_Spring_Ortho/MapServer/export',
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
        title: 'Greene County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Greene County, State of Ohio',
            url: 'https://gis.greenecountyohio.gov/webgis2/rest/services/Aerials/Aerial_2022_Summer/MapServer/export',
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
        title: 'Greene County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Greene County, State of Ohio',
            url: 'https://gis.greenecountyohio.gov/webgis2/rest/services/Aerials/Aerial_2023/MapServer/export',
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
        title: 'Greene County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Greene County, State of Ohio',
            url: 'https://gis.greenecountyohio.gov/webgis2/rest/services/Aerials/Aerial_2024/MapServer/export',
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
        title: 'Licking County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Licking County, State of Ohio',
            url: 'https://apps.lickingcounty.gov/arcgis/rest/services/Basemaps/Imagery2023/MapServer/export',
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
        title: 'Lucas County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Lucas County, State of Ohio',
            url: 'https://lcaudgis.co.lucas.oh.us/gisaudimage/services/Orthos/Orthos2023/ImageServer/WMSServer',
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
        title: 'Montgomery County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Montgomery County, State of Ohio',
            url: 'https://gis.mcohio.org/arcgis/rest/services/AUDGIS_MrSID/MapServer/export',
            params: {
                'LAYERS': 'show:0',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Putnam County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Putnam County, State of Ohio',
            url: 'https://putnamcountygis.com/arcgis/services/Aerials/2023_Aerial/MapServer/WMSServer',
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
        title: 'Wood County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Wood County, State of Ohio',
            url: 'https://engineergis.co.wood.oh.us/arcgis/rest/services/Imagery/Wood_2020_rgb_20x/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Wood County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Wood County, State of Ohio',
            url: 'https://wcohgis.woodcountyohio.gov/arcgis/rest/services/Services_for_Web_Apps/Wood_2023_Orthoimagery/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Oregon DOGAMI Lidar',
        source: new ol.source.TileWMS({
            attributions: 'Oregon Department of Geology and Mineral Industries',
            url: 'https://gis.dogami.oregon.gov/arcgis/services/lidar/DIGITAL_TERRAIN_MODEL_MOSAIC_HS/ImageServer/WMSServer',
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
        title: 'DVRPC Orthoimagery 2020 - Bucks County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
            params: {
                'LAYERS': '8',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DVRPC Orthoimagery 2020 - Chester County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
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
        title: 'DVRPC Orthoimagery 2020 - Delaware County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
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
        title: 'DVRPC Orthoimagery 2020 - Montgomery County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DVRPC Orthoimagery 2020 - Philadelphia County (1ft)',
        source: new ol.source.TileWMS({
            attributions: 'Delaware Valley Regional Planning Commission',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/DVRPC2020/MapServer/WMSServer',
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
        title: 'PEMA Orthoimagery (2018-2020)',
        source: new ol.source.TileWMS({
            attributions: 'Pennsylvania Emergency Management Agency',
            url: 'https://imagery.pasda.psu.edu/arcgis/services/pasda/PEMAImagery2018_2020/MapServer/WMSServer',
            params: {
                'LAYERS': '1',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'PEMA Orthoimagery Cycle 2 (2021-2023)',
        source: new ol.source.TileWMS({
            attributions: 'Pennsylvania Emergency Management Agency',
            url: 'https://apps.pasda.psu.edu/arcgis/rest/services/PEMAImagery2021_2023/MapServer/export',
            params: {
                'LAYERS': 'show:3',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Pennsylvania Municipality Boundaries',
        source: new ol.source.TileWMS({
            attributions: 'Pennsylvania Department of Transportation',
            url: 'https://mapservices.pasda.psu.edu/server/rest/services/pasda/PennDOT/MapServer/export',
            params: {
                'LAYERS': 'show:7,10',
                'VERSION': '1.3.0',
                'FORMAT': 'jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Rhode Island Aerial Photo (Fall 2021)',
        source: new ol.source.TileWMS({
            attributions: 'RIGIS',
            url: 'https://maps.edc.uri.edu/rigis/rest/services/IMG/RI_202108_RGB_3in_web/ImageServer/exportImage',
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
        title: 'Rhode Island Aerial Photo (Spring 2022)',
        source: new ol.source.TileWMS({
            attributions: 'RIGIS',
            url: 'https://maps.edc.uri.edu/rigis/rest/services/IMG/RI_202204_RGB_3in_web/ImageServer/exportImage',
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
        title: 'Rhode Island Aerial Photo (Spring 2023)',
        source: new ol.source.TileWMS({
            attributions: 'RIGIS',
            url: 'https://maps.edc.uri.edu/rigis/rest/services/IMG/RI_202303_RGB_3in_web/ImageServer/exportImage',
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
        title: 'Rhode Island Aerial Photo (Spring 2024)',
        source: new ol.source.TileWMS({
            attributions: 'RIGIS',
            url: 'https://maps.edc.uri.edu/rigis/rest/services/IMG/RI_202403_RGB_3in_web/ImageServer/exportImage',
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
        title: 'StratMap Brazos County Imagery (2019)',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). Brazos County Imagery, 2019-01-29',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap19_NCCIR_6in_Brazos/ImageServer/WMSServer',
            params: {
                'LAYERS': 'StratMap19_NCCIR_6in_Brazos',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'StratMap CapArea Imagery (2019)',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). CapArea Imagery, 2019-01-29',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap19_NCCIR_CapArea/ImageServer/WMSServer',
            params: {
                'LAYERS': 'StratMap19_NCCIR_CapArea',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'TX: City of Amarillo Imagery 2015',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). City of Amarillo Imagery, 2015-03-13',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap15_NCCIR_12in_NGA_Amarillo/ImageServer/WMSServer',
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
        title: 'TX: City of El Paso Imagery 2015',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). City of El Paso Imagery, 2015-10-25',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap15_NCCIR_12in_NGA_ElPaso/ImageServer/WMSServer',
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
        title: 'TX: City of Georgetown Imagery 2015',
        source: new ol.source.TileWMS({
            attributions: 'Texas Natural Resources Information System (TNRIS). City of Georgetown Imagery, 2015-03-06',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap15_NCCIR_6in_Georgetown/ImageServer/WMSServer',
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
        title: 'TX: City of Lubbock Imagery 2015',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). City of Lubbock Imagery, 2015-03-22',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap15_NCCIR_12in_NGA_Lubbock/ImageServer/WMSServer',
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
        title: 'TX: Dallas and Fort Worth Imagery 2015',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). Dallas and Fort Worth Imagery, 2015-01-01',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap15_NCCIR_12in_NGA_Dallas_FtWorth/ImageServer/WMSServer',
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
        title: 'TX: San Antonio River Authority Imagery 2016',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). San Antonio River Authority Imagery, 2016-08-01',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap16_NCCIR_12in_SARA/ImageServer/WMSServer',
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
        title: 'TX: Smith County Imagery 2019',
        source: new ol.source.TileWMS({
            attributions: 'Smith County (Smith). Smith County Imagery, 2019-12-11',
            url: 'https://imagery.tnris.org/server/services/Smith_County/SmithCo_2020_NCCIR_6in/ImageServer/WMSServer',
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
        title: 'StratMap Balmorhea & Davis Mountain State Parks Imagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). Balmorhea & Davis Mountain State Parks Imagery/Lidar',
            url: 'https://imagery.tnris.org/server/rest/services/StratMap/StratMap20_NC_6in_Balmorhea_Davis_Mountians/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'StratMap CapArea, Brazos & Kerr Imagery (Natural Color 2021)',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). CapArea, Brazos & Kerr Imagery',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap21_NCCIR_CapArea_Brazos_Kerr/ImageServer/WMSServer',
            params: {
                'LAYERS': 'StratMap21_NCCIR_CapArea_Brazos_Kerr',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'StratMap CapArea & McLennan Imagery (Natural Color 2020)',
        source: new ol.source.TileWMS({
            attributions: 'Strategic Mapping Program (StratMap). CapArea & McLennan Imagery',
            url: 'https://imagery.tnris.org/server/services/StratMap/StratMap20_NCCIR_CapArea_McLennan/ImageServer/WMSServer',
            params: {
                'LAYERS': 'StratMap20_NCCIR_CapArea_McLennan',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Henrico County Aerial Imagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Henrico County Government',
            url: 'https://portal.henrico.us/mapping/rest/services/Imagery/AerialPhotos2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Loudoun County Orthoimagery (2021)',
        source: new ol.source.TileWMS({
            attributions: 'Loudoun County Government',
            url: 'https://logis.loudoun.gov/image/rest/services/Aerial/COLOR_2021_CACHED/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Loudoun County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Loudoun County Government',
            url: 'https://logis.loudoun.gov/image/rest/services/Aerial/COLOR_2022_CACHED/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Loudoun County Orthoimagery (2023)',
        source: new ol.source.TileWMS({
            attributions: 'Loudoun County Government',
            url: 'https://logis.loudoun.gov/image/rest/services/Aerial/COLOR_2023_CACHED/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Loudoun County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Loudoun County Government',
            url: 'https://logis.loudoun.gov/image/rest/services/Aerial/COLOR_2024_CACHED/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'VCGI LiDAR - DSM Hillshade',
        source: new ol.source.TileWMS({
            attributions: 'Vermont Center for Geographic Information',
            url: 'https://maps.vcgi.vermont.gov/arcgis/rest/services/EGC_services/IMG_VCGI_LIDARDSMHILLSHD_SP_CACHE_v1/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Suan Juan County Aerials (2019)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://gis.sanjuancountywa.gov/arcgis/rest/services/Basemaps/Aerials_2019/MapServer/export',
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
        title: 'Suan Juan County Aerials (2022)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://gis.sanjuancountywa.gov/arcgis/rest/services/Basemaps/Aerials_2022/MapServer/export',
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
        title: 'Suan Juan County Aerials (2023)',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://gis.sanjuancountywa.gov/arcgis/rest/services/Basemaps/Aerials_2023/MapServer/export',
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
        title: 'Suan Juan County Basemap',
        source: new ol.source.TileWMS({
            attributions: 'San Juan County GIS',
            url: 'https://gis.sanjuancountywa.gov/arcgis/rest/services/Basemaps/General_Basemap/MapServer/export',
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
        title: 'Snohomish County Orthoimagery (2020)',
        source: new ol.source.TileWMS({
            attributions: 'Snohomish County GIS',
            url: 'https://gis.snoco.org/img/rest/services/Imagery/Aerial_2020/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Snohomish County Orthoimagery (2022)',
        source: new ol.source.TileWMS({
            attributions: 'Snohomish County GIS',
            url: 'https://gis.snoco.org/img/rest/services/Imagery/Aerial_2022/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Snohomish County Orthoimagery (2024)',
        source: new ol.source.TileWMS({
            attributions: 'Snohomish County GIS',
            url: 'https://gis.snoco.org/img/rest/services/Imagery/Aerial_2024/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Wisconsin Leaf-Off Orthophotography (DNR)',
        source: new ol.source.TileWMS({
            attributions: 'Wisconsin Regional Orthoimagery Consortium, Southeastern Wisconsin Regional Planning Commission, Wisconsin Department of Natural Resources',
            url: 'https://dnrmaps.wi.gov/arcgis_image/rest/services/DW_Imagery/EN_Image_Basemap_Latest_Leaf_Off/ImageServer/exportImage',
            params: {
                'LAYERS': 'exportImage',
                'VERSION': '1.3.0',
                'FORMAT': 'jpg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Monongalia County 2022 Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'Monongalia Morgantown Area Geospatial Information Consortium',
            url: 'https://gis.morgantownwv.gov/image/services/Imagery/Monongalia_County_2022/ImageServer/WMSServer',
            params: {
                'LAYERS': 'Monongalia_County_2022:None',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Monongalia County 2023 Aerial Imagery',
        source: new ol.source.TileWMS({
            attributions: 'Monongalia Morgantown Area Geospatial Information Consortium',
            url: 'https://gis.morgantownwv.gov/image/services/Imagery/Monongalia_County_2023/ImageServer/WMSServer',
            params: {
                'LAYERS': 'Monongalia_County_2023:None',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
];

export default USLayers;
