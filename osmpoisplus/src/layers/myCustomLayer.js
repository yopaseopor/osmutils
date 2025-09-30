// Example: Custom OpenLayers Tile Layer
export const myCustomLayer = [
    // MapTiler Openmaptiles
    		new ol.layer.VectorTile({
			title: 'MapTiler Openmaptiles',
			iconSrc: imgSrc + 'icones_web/maptiler_logo.png',
			visible: false,
			opacity: 1.0,
			ratio: 1,
			source: new ol.source.VectorTile({
				tilePixelRatio: 1,
				tileGrid: ol.tilegrid.createXYZ({ 
                    minZoom: 0,
                    maxZoom: 22 
                }),
				format: new ol.format.MVT(),
				url: 'https://api.maptiler.com/tiles/v3-openmaptiles/{z}/{x}/{y}.pbf?key=Faz9gJu55zrWejNF55oZ',
				attributions: [
					'<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
					'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
				],
				crossOrigin: 'anonymous',
				projection: 'EPSG:3857'
			}),
			// Basic style as fallback
			style: new ol.style.Style({
				fill: new ol.style.Fill({
					color: 'rgba(200, 200, 200, 0.5)'
				}),
				stroke: new ol.style.Stroke({
					color: '#3399CC',
					width: 1.25
				})
			})
				}),

		// Vector Tiles - MapTiler Basic with style.json
		(function() {
			const layer = new ol.layer.VectorTile({
				title: 'MapTiler Basic',
				iconSrc: imgSrc + 'icones_web/maptiler_logo.png',
				visible: false,
				opacity: 1.0,
				source: new ol.source.VectorTile({
					tilePixelRatio: 1,
					tileGrid: ol.tilegrid.createXYZ({
						minZoom: 0,
						maxZoom: 14 // Preserving this zoom for this layer
					}),
					format: new ol.format.MVT(),
					url: 'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=Faz9gJu55zrWejNF55oZ',
					attributions: [
						'<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
						'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
					]
				})
			});

			const styleUrl = 'src/assets/style.json';
			const apiKey = 'Faz9gJu55zrWejNF55oZ';
			fetch(styleUrl)
				.then(response => response.text())
				.then(text => {
					const style = JSON.parse(text.replace(/{key}/g, apiKey));
					olms.applyStyle(layer, style, 'openmaptiles')
						.then(() => console.log('MapTiler style applied successfully for MapTiler Basic.'))
						.catch(err => console.error('Error applying MapTiler style for MapTiler Basic:', err));
				}).catch(err => {
					console.error('Failed to load or apply style.json for MapTiler Basic:', err);
				});
			return layer;
		})(),
		
		// MapTiler Vector Tile Layer with enhanced glyph and sprite support
		new ol.layer.VectorTile({
			title: 'MapTiler configured',
			iconSrc: imgSrc + 'icones_web/maptiler_logo.png',
			visible: false,
			opacity: 1.0,
			source: new ol.source.VectorTile({
				projection: 'EPSG:3857',
				format: new ol.format.MVT(),
				url: 'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=Faz9gJu55zrWejNF55oZ',
				tileGrid: ol.tilegrid.createXYZ({
					minZoom: 0,
					maxZoom: 14
				}),
				attributions: [
					'<a href="https://www.maptiler.com/copyright/" target="_blank"> MapTiler</a>',
					'<a href="https://www.openstreetmap.org/copyright" target="_blank"> OpenStreetMap contributors</a>'
				]
			}),
			style: (function() {
				// Initialize style configuration with glyphs and sprites
				window.maptilerStyleConfig = {
					spriteBaseUrl: 'https://api.maptiler.com/maps/streets/sprite',
					glyphs: 'https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=Faz9gJu55zrWejNF55oZ',
					fontStacks: {
						regular: ['Noto Sans Regular', 'Arial Unicode MS Regular'],
						bold: ['Noto Sans Bold', 'Arial Unicode MS Bold'],
						italic: ['Noto Sans Italic', 'Arial Unicode MS Italic'],
						bolditalic: ['Noto Sans Bold Italic', 'Arial Unicode MS Bold Italic']
					}
				};

				// Preload fonts
				const fontPromises = [];
				Object.values(window.maptilerStyleConfig.fontStacks).forEach(fonts => {
					fonts.forEach(font => {
						const fontUrl = window.maptilerStyleConfig.glyphs
							.replace('{fontstack}', encodeURIComponent(font))
							.replace('{range}', '0-255');
						fontPromises.push(
							fetch(fontUrl).catch(e => console.warn('Failed to load font:', font, e))
						);
					});
				});

				// Return the style function with access to the config
				return function(feature, resolution) {
					if (window.vectorTileStyle) {
						try {
							return window.vectorTileStyle(feature, resolution, window.maptilerStyleConfig);
						} catch (e) {
							console.error('Error in vectorTileStyle:', e);
							return [];
						}
					}
					return [];
				};
			})()
			

		}),
		
				(function() {
			const colorfulLayer = new ol.layer.VectorTile({
				title: 'Versatiles colorful',
				iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
				visible: true,
				opacity: 1.0,
				source: new ol.source.VectorTile({
					tilePixelRatio: 1,
					tileGrid: ol.tilegrid.createXYZ({
						minZoom: 0,
						maxZoom: 14
					}),
					format: new ol.format.MVT(),
					url: 'https://tiles.versatiles.org/tiles/osm/{z}/{x}/{y}',
					attributions: [
						'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
					]
				}),
				declutter: true
			});

			const styleUrl = 'src/assets/colorful.json';
			fetch(styleUrl)
				.then(response => response.json())
				.then(style => {
					return olms.applyStyle(colorfulLayer, style, 'versatiles-shortbread')
						.then(() => console.log('Colorful style applied successfully for OSM Shortbread.'))
						.catch(err => console.error('Error applying Colorful style for OSM Shortbread:', err));
				}).catch(err => {
					console.error('Failed to load or apply colorful.json for OSM Shortbread:', err);
				});
			return colorfulLayer;
		})(),
		
	

						(function() {
			const neutrinoLayer = new ol.layer.VectorTile({
				title: 'OSM Shortbread Neutrino',
				iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
				visible: false,
				opacity: 1.0,
				source: new ol.source.VectorTile({
					tilePixelRatio: 1,
					tileGrid: ol.tilegrid.createXYZ({
						minZoom: 0,
						maxZoom: 14
					}),
					format: new ol.format.MVT(),
					url: 'https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt',
					attributions: [
						'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
					]
				}),
				declutter: true
			});

			const styleUrl = 'src/assets/neutrino.json';
			fetch(styleUrl)
				.then(response => response.json())
				.then(style => {
					return olms.applyStyle(neutrinoLayer, style, 'versatiles-neutrino')
						.then(() => console.log('Neutrino style applied successfully for OSM Shortbread.'))
						.catch(err => console.error('Error applying Neutrino style for OSM Shortbread:', err));
				}).catch(err => {
					console.error('Failed to load or apply neutrino.json for OSM Shortbread:', err);
				});
			return neutrinoLayer;
		})(),
		
						(function() {
			const customLayer = new ol.layer.VectorTile({
				title: 'OSM Customyopaseopor',
				iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
				visible: false,
				opacity: 1.0,
				source: new ol.source.VectorTile({
					tilePixelRatio: 1,
					tileGrid: ol.tilegrid.createXYZ({
						minZoom: 0,
						maxZoom: 14
					}),
					format: new ol.format.MVT(),
					url: 'https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt',
					attributions: [
						'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
					]
				}),
				declutter: true
			});

			const styleUrl = 'src/assets/customyopaseopor.json';
			fetch(styleUrl)
				.then(response => response.json())
				.then(style => {
					return olms.applyStyle(customLayer, style, 'customyopaseopor')
						.then(() => console.log('Customyopaseopor style applied successfully for OSM Shortbread.'))
						.catch(err => console.error('Error applying Customyopaseopor style for OSM Shortbread:', err));
				}).catch(err => {
					console.error('Failed to load or apply customyopaseopor.json for OSM Shortbread:', err);
				});
			return customLayer;
		})(),
		
		new ol.layer.VectorTile({
			title: 'OSM Shortbread',
			iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
			visible: false,
			opacity: 1.0,
			ratio: 1,
			source: new ol.source.VectorTile({
				tilePixelRatio: 1,
				tileGrid: ol.tilegrid.createXYZ({ 
                    minZoom: 0,
                    maxZoom: 14 
                }),
				format: new ol.format.MVT(),
				url: 'https://vector.openstreetmap.org/shortbread_v1/{z}/{x}/{y}.mvt',
				attributions: [
					'<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
					'<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>'
				],
				crossOrigin: 'anonymous',
				projection: 'EPSG:3857'
			}),
			
				}),
		
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
			visible: false,
			source: new ol.source.OSM()
/*@@ inicio de copia */			}),
								new ol.layer.Tile({
/*@@ título */					title: 'OpenStreetMap DE',
/*@@ icono */					iconSrc: imgSrc + 'icones_web/osmbw_logo-layer.png',
/*@@ zoom máximo */				maxZoom: 18,
								source: new ol.source.XYZ({
/*@@ atribución */				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
/*@@ url */						url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
								}),
/*@@ visible de inicio */		visible: false
/*@@ final de copia */			}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'icones_web/osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'icones_web/opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'icones_web/topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'icones_web/worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'icones_web/cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'icones_web/cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'icones_web/esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'icones_web/logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'icones_web/logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?',
				params: {'LAYERS': 'ortofoto_color_vigent', 'VERSION': '1.3.0'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'icones_web/gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'icones_web/gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
    })
];