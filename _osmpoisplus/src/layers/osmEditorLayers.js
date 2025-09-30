/**
 * OpenLayers layer configurations for OSM Editor Layer Index
 * Source: https://osmlab.github.io/editor-layer-index/
 * Generated on: 2025-07-08
 */

import { Tile as TileLayer, Image as ImageLayer } from 'ol/layer';
import { OSM, XYZ, TileWMS } from 'ol/source';

/**
 * Creates a layer configuration object for the OSM Editor Layer Index
 * @returns {Object} Object containing layer configurations
 */
export function getOsmEditorLayers() {
  return {
    // Default OSM layer
    'openstreetmap': {
      title: 'OpenStreetMap',
      type: 'base',
      layer: new TileLayer({
        source: new OSM(),
        visible: true
      })
    },

    // Imagico.de layers
    'imagico-sentinel2': {
      title: 'Sentinel-2 (via imagico.de)',
      type: 'overlay',
      layer: new TileLayer({
        source: new XYZ({
          url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/g/{z}/{y}/{x}.jpg',
          attributions: 'Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2016 & 2017)',
          maxZoom: 16
        }),
        visible: false
      })
    },

    // South Africa - Cape Town Aerial
    'capetown-aerial-2024': {
      title: 'Cape Town Aerial 2024',
      type: 'overlay',
      layer: new TileLayer({
        source: new TileWMS({
          url: 'https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets',
          params: {
            'LAYERS': 'Aerial Imagery_Aerial Imagery 2024',
            'FORMAT': 'image/jpeg',
            'VERSION': '1.3.0'
          },
          attributions: '© City of Cape Town',
          projection: 'EPSG:3857',
          serverType: 'geoserver'
        }),
        visible: false
      })
    },

    // Zambia - Medium Voltage Grid
    'zambia-grid': {
      title: 'Zambia Medium Voltage Grid',
      type: 'overlay',
      layer: new TileLayer({
        source: new XYZ({
          url: 'https://zmbgrid.zabop.workers.dev/{z}/{x}/{y}',
          attributions: '© ZESCO - Zambia Electricity Supply Corporation Limited',
          maxZoom: 22,
          minZoom: 7
        }),
        visible: false
      })
    },

    // Add more layers as needed following the same pattern
  };
}

/**
 * Helper function to create a WMS layer
 * @param {string} url - WMS service URL
 * @param {string} layerName - WMS layer name
 * @param {string} title - Layer title
 * @param {Object} options - Additional options like minZoom, maxZoom, etc.
 * @returns {Object} Layer configuration object
 */
function createWmsLayer(url, layerName, title, options = {}) {
  return {
    title: title,
    type: 'overlay',
    layer: new TileLayer({
      source: new TileWMS({
        url: url,
        params: {
          'LAYERS': layerName,
          'FORMAT': 'image/png',
          'TRANSPARENT': true,
          'VERSION': '1.3.0'
        },
        attributions: options.attributions || '',
        projection: 'EPSG:3857',
        serverType: 'geoserver',
        ...options
      }),
      minZoom: options.minZoom || 0,
      maxZoom: options.maxZoom || 22,
      visible: false
    })
  };
}

/**
 * Helper function to create an XYZ/TMS layer
 * @param {string} url - Template URL with {z}/{x}/{y} placeholders
 * @param {string} title - Layer title
 * @param {Object} options - Additional options like minZoom, maxZoom, etc.
 * @returns {Object} Layer configuration object
 */
function createXyzLayer(url, title, options = {}) {
  return {
    title: title,
    type: options.type || 'overlay',
    layer: new TileLayer({
      source: new XYZ({
        url: url,
        attributions: options.attributions || '',
        maxZoom: options.maxZoom || 22,
        minZoom: options.minZoom || 0,
        crossOrigin: 'anonymous',
        ...options
      }),
      visible: options.visible || false
    })
  };
}
