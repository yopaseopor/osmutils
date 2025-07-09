// OpenLayers WMS layers generated from JOSM imagery.xml
// Generated on: 2025-07-07 23:30:22 UTC
// Total layers: 26

const BRLayers = [
    new ol.layer.Tile({
        title: 'Belo Horizonte Ortofoto 2015',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura de Belo Horizonte',
            url: 'https://geoservicos.pbh.gov.br:443/ortofoto/ORTOFOTO/ows',
            params: {
                'LAYERS': 'Ortofoto2015',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Cartas Topográficas do Exército Brasileiro',
        source: new ol.source.TileWMS({
            attributions: 'BDGEx',
            url: 'https://bdgex.eb.mil.br/mapcache',
            params: {
                'LAYERS': 'ctmmultiescalas_mercator',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'DER-ES',
        source: new ol.source.TileWMS({
            attributions: 'Departamento de Estradas de Rodagem do Estado do Espírito Santo',
            url: 'http://portal.der.es.gov.br/geoserver/wms',
            params: {
                'LAYERS': 'deres-ext:TRECHOINFO',
                'VERSION': '1.1.1',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Dourados Ortofotos',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Dourados - GeoDourados',
            url: 'https://geodourados.dourados.ms.gov.br/geoserver/dourados/ows',
            params: {
                'LAYERS': 'ortofoto_2018,ortofoto_2020_distritos',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Fortaleza Ortofoto 2010',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Fortaleza',
            url: 'https://geoserver.sefin.fortaleza.ce.gov.br/geoserver/IMAGEAMENTO/wms',
            params: {
                'LAYERS': 'ortofoto_2010',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Fortaleza Ortofoto 2016',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Fortaleza',
            url: 'https://geoserver.sefin.fortaleza.ce.gov.br/geoserver/IMAGEAMENTO/wms',
            params: {
                'LAYERS': 'ortofoto_2016',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Fortaleza Base Cartográfica',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Fortaleza',
            url: 'https://geoserver.sefin.fortaleza.ce.gov.br/geoserver/wms',
            params: {
                'LAYERS': 'CAMADA_BASE:mapa_fortaleza',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Fortaleza Nomes e Geometria de Ruas',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Fortaleza',
            url: 'https://geoserver.sefin.fortaleza.ce.gov.br/geoserver/CARTOGRAFIA_BASE/logradouros/ows',
            params: {
                'LAYERS': 'logradouros',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'GeoPortal DF 2015',
        source: new ol.source.TileWMS({
            attributions: 'GeoPortal DF',
            url: 'https://www.geoservicos.ide.df.gov.br/arcgis/services/Imagens/FOTO_2015/ImageServer/WMSServer',
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
        title: 'GeoPortal DF 2016',
        source: new ol.source.TileWMS({
            attributions: 'GeoPortal DF',
            url: 'https://www.geoservicos.ide.df.gov.br/arcgis/services/Imagens/FOTO_2016/ImageServer/WMSServer',
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
        title: 'GeoPortal DF 2019',
        source: new ol.source.TileWMS({
            attributions: 'GeoPortal DF',
            url: 'https://www.geoservicos.ide.df.gov.br/arcgis/services/Imagens/SENTINEL_2019/ImageServer/WMSServer',
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
        title: 'GeoPortal DF 2021 50 cm',
        source: new ol.source.TileWMS({
            attributions: 'GeoPortal DF',
            url: 'https://www.geoservicos.ide.df.gov.br/arcgis/services/Imagens/2021_50CM/ImageServer/WMSServer',
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
        title: 'IBGE BC250 - Aglomerado Rural Isolado',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Aglomerado_Rural_Isolado_P',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Estações Geradoras de Energia Elétrica',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/wms',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Est_Gerad_Energia_Eletrica_P',
                'VERSION': '1.1.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Municípios',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/wms',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Municipio_A',
                'VERSION': '1.1.0',
                'FORMAT': 'image%2Fpng','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Pista de Pouso',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Pista_Ponto_Pouso_L',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Rios Drenagem',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Trecho_Drenagem_L',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Trecho Rodoviário',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Trecho_Rodoviario_L',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Terra Indígena',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2019_Terra_Indigena_A',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Unidade de Uso Sustentável - APA',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2019_Unidade_Uso_Sustentavel_A',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'IBGE BC250 - Vila',
        source: new ol.source.TileWMS({
            attributions: 'IBGE',
            url: 'https://geoservicos.ibge.gov.br/geoserver/ows',
            params: {
                'LAYERS': 'CCAR:BC250_2021_Vila_P',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Rio Mosaico 2019',
        source: new ol.source.TileWMS({
            attributions: 'Instituto Pereira Passos - Prefeitura da Cidade do Rio de Janeiro',
            url: 'https://pgeo3.rio.rj.gov.br/arcgis/services/Imagens/Mosaico_2019/ImageServer/WMSServer',
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
        title: 'Rio Mosaico 2022',
        source: new ol.source.TileWMS({
            attributions: 'Instituto Pereira Passos - Prefeitura da Cidade do Rio de Janeiro',
            url: 'https://pgeo3.rio.rj.gov.br/arcgis/services/Imagens/Mosaico_2022/ImageServer/WMSServer',
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
        title: 'SIG Santa Catarina OrtoRGB 2012',
        source: new ol.source.TileWMS({
            attributions: 'Sistema de Informações Geográficas - Governo de Santa Catarina',
            url: 'http://sigsc.sc.gov.br/sigserver/SIGSC/wms',
            params: {
                'LAYERS': 'OrtoRGB-Landsat-2012',
                'VERSION': '1.3.0',
                'FORMAT': 'image/jpeg',
                'TRANSPARENT': 'false'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Itu - Eixos',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura da Estância Turística de Itu, SP',
            url: 'https://urbigis.com/geoproxy/4ac1cd2049d8857b21d9ff38339f7c1SERVICE=WMS&REQUEST=GETMAP&FORMAT=image/png8&VERSION=1.3.0&LAYERS=6139ca97-1bc9-4952-a441-b68957ab222c&CRS={proj}&WIDTH={width}&HEIGHT={height}&BBOX={bbox}',
            params: {
                'LAYERS': 'png8&VERSION=1.3.0&LAYERS=6139ca97-1bc9-4952-a441-b68957ab222c&CRS={proj}&WIDTH={width}&HEIGHT={height}&BBOX={bbox}',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'mapserver'
        }),
        visible: false
    }),
    new ol.layer.Tile({
        title: 'Sobral Ortofoto 2017',
        source: new ol.source.TileWMS({
            attributions: 'Prefeitura Municipal de Sobral',
            url: 'http://geoserver.sobral.ce.gov.br:80/geoserver/Ceara/ows',
            params: {
                'LAYERS': 'prdAracatiacu,prdJaibaras,prdSobral,prdTaperuaba',
                'VERSION': '1.3.0',
                'FORMAT': 'image/png','
                'TRANSPARENT': true'
            },
            serverType: 'geoserver'
        }),
        visible: false
    }),
];

export default BRLayers;
