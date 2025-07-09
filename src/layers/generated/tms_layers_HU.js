// OpenLayers TMS/XYZ Layers for HU
// Generated on: 2025-07-09 02:09:02
// Total layers: 13

const HU_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Danube flood orthophoto 2013",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://e.tile.openstreetmap.hu/dunai-arviz-2013/{z}/{x}/{y}.jpg',
            attributions: 'Fotótérkép.hu',
            maxZoom: 20,
            minZoom: 10,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "EUFAR Balaton orthophotos",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://e.tile.openstreetmap.hu/balaton/0/{z}/{x}/{y}.jpg',
            attributions: 'EUFAR Balaton ortofotó 2010',
            maxZoom: 19,
            minZoom: 12,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2000",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://e.tile.openstreetmap.hu/ortofoto2000/{z}/{x}/{y}.jpg',
            attributions: 'Földmérési és Távérzékelési Intézet',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2005",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://e.tile.openstreetmap.hu/ortofoto2005/{z}/{x}/{y}.jpg',
            attributions: 'Földmérési és Távérzékelési Intézet',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2007–2010",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://e.tile.openstreetmap.hu/ortofoto-2007-2010/{z}/{x}/{y}.jpg',
            attributions: 'Földmérési és Távérzékelési Intézet',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2011–2014 (WEBP)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://orto1.tile.openstreetmap.hu/fomi2011-2014/{z}/{x}/{y}.webp',
            attributions: 'Lechner Tudásközpont',
            maxZoom: 18,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2015 (WEBP)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://orto1.tile.openstreetmap.hu/fomi_2015/{z}/{x}/{y}.webp',
            attributions: 'Lechner Tudásközpont',
            maxZoom: 18,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "FÖMI orthophoto 2015 leaf-off 20cm (webp)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://orto1.tile.openstreetmap.hu/fomi_2015-2020_lombtalan_20cm/{z}/{x}/{y}.webp',
            attributions: 'Lechner Tudásközpont',
            maxZoom: 19,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Hillshade Hungary",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.map.turistautak.hu/tiles/shading/{z}/{x}/{y}.png',
            attributions: 'SRTM',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (turistautak)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.openstreetmap.hu/tt/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "openstreetmap.hu orthophotos",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://wms.openstreetmap.hu/mapproxy/tiles/1.0.0/openstreetmap.hu.orthophotos/mercator/{z}/{x}/{y}.jpeg',
            attributions: 'openstreetmap.hu',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Szeged orthophoto 2011",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://e.tile.openstreetmap.hu/szeged-2011-10cm/{z}/{x}/{y}.png',
            attributions: 'SZTE TFGT - University of Szeged',
            maxZoom: 22,
            minZoom: 10,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Sóskút, Pusztazámor, Tárnok, Diósd ortophoto 2017",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://wms.openstreetmap.hu/mapproxy/tiles/1.0.0/Soskut-Tarnok-Pusztazamor-Diosd/mercator/{z}/{x}/{y}.png',
            attributions: 'Fototerkep.hu',
            maxZoom: 21,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    }
];

// Add to global layers array if it exists
if (typeof window.layers === 'undefined') {
    window.layers = [];
}
window.layers = window.layers.concat(HU_TMS_LAYERS);
