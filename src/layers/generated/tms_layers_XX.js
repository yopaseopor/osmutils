// OpenLayers TMS/XYZ Layers for XX
// Generated on: 2025-07-08 11:19:17
// Total layers: 42

const XX_TMS_LAYERS = [
  new ol.layer.Tile({
        title: "Cambodia, Laos, Thailand, Vietnam, Malaysia, Myanmar bilingual",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c,d}.tile.osm-tools.org/osm/{z}/{x}/{y}.png',
            attributions: '© osm-tools.org & OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "CyclOSM",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
            attributions: 'Rendering: CyclOSM (hosted by OpenStreetMap France) © Map data OpenStreetMap contributors',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Esri World Imagery",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{s,e,r,v,i,c,e,s,s,e,r,v,e,r}.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attributions: 'Terms & Feedback',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Esri World Imagery (Clarity) Beta",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attributions: 'Terms & Feedback',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Locator Overlay",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/openstreetmap/ckasmteyi1tda1ipfis6wqhuq/tiles/256/{z}/{x}/{y}?access_token={apikey}',
            attributions: 'Terms & Feedback',
            maxZoom: 16,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Mapbox Satellite",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c,d}.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.jpg?access_token={apikey}',
            attributions: 'Terms & Feedback',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Nordic snowmobile overlay",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.kelkkareitit.fi/kelkkareitit/{z}/{x}/{y}.png',
            attributions: '© Kelkkareitit.fi',
            maxZoom: 18,
            minZoom: 3,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenAerialMap Mosaic, by Kontur.io",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://apps.kontur.io/raster-tiler/oam/mosaic/{z}/{x}/{y}.png',
            attributions: '',
            maxZoom: 24,
            minZoom: 1,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenPT Map (overlay)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'http://openptmap.de/tiles/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 17,
            minZoom: 4,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenRailwayMap",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
            attributions: 'Rendering: OpenRailwayMap, © Map data OpenStreetMap contributors',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenRailwayMap Maxspeeds",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png',
            attributions: 'Rendering: OpenRailwayMap, © Map data OpenStreetMap contributors',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenRailwayMap Signalling",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tiles.openrailwaymap.org/signals/{z}/{x}/{y}.png',
            attributions: 'Rendering: OpenRailwayMap, © Map data OpenStreetMap contributors',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenSeaMap",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenSnowMap overlay",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://www.opensnowmap.org/pistes/{z}/{x}/{y}.png',
            attributions: '© OpenSnowMap.org',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (French Style)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
            attributions: 'Tiles © cquest@Openstreetmap France, data © OpenStreetMap contributors, ODBL',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (German Style)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c,d}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (HOT Style)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, tiles courtesy of Humanitarian OpenStreetMap Team',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (Mapnik, no labels)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap (Standard)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, ODbL 1.0',
            maxZoom: 19,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenStreetMap GPS traces",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors',
            maxZoom: 20,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OpenTopoMap",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.opentopomap.org/{z}/{x}/{y}.png',
            attributions: 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)',
            maxZoom: 17,
            minZoom: 3,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Addresses",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/addresses/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Area",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/area/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 19,
            minZoom: 8,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Geometry",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/geometry/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Highways",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/highways/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Places",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/places/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Routing",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/routing/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "OSM Inspector: Tagging",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tools.geofabrik.de/osmi/tiles/tagging/{z}/{x}/{y}.png',
            attributions: '© Geofabrik GmbH, OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Public Transport (ÖPNV)",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "QA No Address",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile{2,3}.poole.ch/noaddress/{z}/{x}/{y}.png',
            attributions: 'Simon Poole, Data ©OpenStreetMap contributors',
            maxZoom: 18,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "skobbler",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tiles{1,2,3,4}-4001b3692e229e3215c9b7a73e528198.skobblermaps.com/TileService/tiles/2.0/00021210101/0/{z}/{x}/{y}.png',
            attributions: '© Tiles: skobbler Map data: OpenStreetMap contributors',
            maxZoom: 18,
            minZoom: 1,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Stamen Terrain",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles-{a,b,c,d}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.jpg',
            attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL',
            maxZoom: 18,
            minZoom: 4,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Thunderforest Landscape",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}',
            attributions: 'Maps © Thunderforest, Data © OpenStreetMap contributors',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Thunderforest OpenCycleMap",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}',
            attributions: 'Maps © Thunderforest, Data © OpenStreetMap contributors',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Thunderforest Outdoors",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://{a,b,c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}',
            attributions: 'Maps © Thunderforest, Data © OpenStreetMap contributors',
            maxZoom: 22,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: Cycling",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: Hiking",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: Horse Riding",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/riding/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: MTB",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/mtb/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: Skating",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/skating/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Waymarked Trails: Winter Sports",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png',
            attributions: '© waymarkedtrails.org, OpenStreetMap contributors, CC by-SA 3.0',
            maxZoom: 17,
            minZoom: 0,
            crossOrigin: 'anonymous',
            tileSize: 256,
            projection: 'EPSG:3857'
        }),
        visible: false
    },
  new ol.layer.Tile({
        title: "Wikimedia Map",
        type: 'XYZ',
        source: new ol.source.XYZ({
            url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
            attributions: '© OpenStreetMap contributors, CC-BY-SA',
            maxZoom: 18,
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
window.layers = window.layers.concat(XX_TMS_LAYERS);
