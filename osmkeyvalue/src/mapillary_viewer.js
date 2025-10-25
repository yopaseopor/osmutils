/**
 * Mapillary Viewer Implementation - Integrated into side menu
 *
 * This implementation integrates Mapillary street view into the side menu
 * instead of using a popup window, providing a better user experience.
 */
function initMapillaryViewer(map) {
    // Create Mapillary vector layer for coverage visualization
    var mapillarySource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {
            var epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            var bbox = epsg4326Extent.join(',');

            // Fetch Mapillary coverage data using CORS proxy to avoid CORS issues
            // Note: Mapillary API v4 requires authentication for full access
            var apiUrl = 'https://graph.mapillary.com/images?bbox=' + bbox + '&limit=100&fields=id,geometry';

            // Add API key if available in config
            if (typeof config !== 'undefined' && config.apiKeys && config.apiKeys.mapillary) {
                apiUrl += '&access_token=' + config.apiKeys.mapillary;
                console.log('Using Mapillary API key for authenticated access');
            } else {
                console.warn('No Mapillary API key configured. Using public access (limited functionality)');
            }

            fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.contents) {
                        var mapillaryData = JSON.parse(data.contents);
                        if (mapillaryData && mapillaryData.data) {
                            var features = mapillaryData.data.map(function(image) {
                                return new ol.Feature({
                                    geometry: new ol.geom.Point(ol.proj.fromLonLat([
                                        image.geometry.coordinates[0],
                                        image.geometry.coordinates[1]
                                    ])),
                                    id: image.id
                                });
                            });
                            mapillarySource.addFeatures(features);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching Mapillary data:', error);
                    // Show user-friendly error message
                    console.warn('Mapillary API requires authentication. Coverage layer may not work without API key.');
                });
        },
        strategy: ol.loadingstrategy.bbox
    });

    var mapillaryLayer = new ol.layer.Vector({
        source: mapillarySource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 4,
                fill: new ol.style.Fill({
                    color: '#05CB63'
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 1
                })
            })
        })
    });

    map.addLayer(mapillaryLayer);

    // Initially hide the Mapillary layer
    mapillaryLayer.setVisible(false);

    // Handle map click events for Mapillary
    map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
            return feature;
        });

        if (feature && feature.get('id')) {
            var coords = ol.proj.transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
            var zoom = map.getView().getZoom();
            showMapillaryInMenu(coords[1], coords[0], zoom, feature.get('id'));
        }
    });

    // Function to show Mapillary in side menu
    function showMapillaryInMenu(lat, lon, zoom, imageId) {
        // Build URL with the current Mapillary format
        var url = `https://www.mapillary.com/app/?lat=${lat}&lng=${lon}&z=${Math.max(1, Math.min(20, zoom))}&style=photo`;

        if (imageId) {
            url += `&imageKey=${imageId}`;
        }

        console.log('Mapillary URL:', url);

        // Update the menu content with coordinates
        $('.preview-coords').html(`<strong>${lat.toFixed(6)}, ${lon.toFixed(6)}</strong><br><small>Zoom: ${zoom}</small>`);

        // Update the button click handler
        $('.open-mapillary-btn').off('click').on('click', function() {
            window.open(url, 'mapillary', 'width=1200,height=800,scrollbars=yes,resizable=yes');
        });

        // Show the Mapillary layer
        mapillaryLayer.setVisible(true);
    }

    // Function to hide Mapillary from side menu
    function hideMapillaryFromMenu() {
        // Reset the menu content
        $('.preview-coords').html('Click on the map to set a location');

        // Hide the Mapillary layer
        mapillaryLayer.setVisible(false);

        // Remove button click handler
        $('.open-mapillary-btn').off('click');
    }

    // Create viewer button control (now toggles menu section)
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-mapillary');

        // Map view button - now toggles the menu section
        var mapViewButton = $('<button type="button">')
            .html('<i class="fa fa-camera"></i>')
            .on('click', function() {
                // Find the Mapillary menu section
                var $mapillarySection = $('.mapillary-menu-content');

                if ($mapillarySection.is(':visible')) {
                    // Hide Mapillary section
                    $mapillarySection.hide();
                    hideMapillaryFromMenu();
                    $(this).removeClass('active');
                } else {
                    // Hide other active sections first (like router)
                    $('.osmcat-menu .osmcat-content').not($mapillarySection).hide();
                    $('.osmcat-router').removeClass('active');

                    // Show Mapillary section
                    $mapillarySection.show();
                    $(this).addClass('active');
                }
            });

        container.append(mapViewButton);
        return container[0];
    };

    // Add the viewer control to the map
    map.addControl(new ol.control.Control({
        element: viewerControlBuild()
    }));

    // Listen for clicks on the Mapillary menu button
    $('.open-mapillary-btn').on('click', function(e) {
        e.preventDefault();
        var url = 'https://www.mapillary.com/app/';
        window.open(url, 'mapillary', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    });
} 