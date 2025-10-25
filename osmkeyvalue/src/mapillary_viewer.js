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
                // Check if Mapillary section already exists in menu
                var $existingMapillary = $('.osmcat-menu .osmcat-layer').filter(function() {
                    return $(this).find('.osmcat-select, b:contains("Street View")').length > 0 ||
                           $(this).text().includes('Street View');
                });

                if ($existingMapillary.length > 0) {
                    // Mapillary section exists, toggle its content
                    var $mapillaryContent = $existingMapillary.find('.mapillary-menu-content');
                    if ($mapillaryContent.is(':visible')) {
                        // Hide Mapillary section
                        $mapillaryContent.hide();
                        hideMapillaryFromMenu();
                        $(this).removeClass('active');
                    } else {
                        // Hide other active sections first (like router)
                        $('.osmcat-menu .osmcat-content').not($mapillaryContent).hide();
                        $('.osmcat-router').removeClass('active');

                        // Show Mapillary section
                        $mapillaryContent.show();
                        $(this).addClass('active');
                    }
                    return;
                }

                // Mapillary section doesn't exist, create it dynamically like routing does
                $(this).addClass('active');

                // Create Mapillary content dynamically
                var mapillaryContent = $(`
                    <div class="osmcat-layer">
                        <div class="osmcat-select">Street View</div>
                        <div class="osmcat-content mapillary-menu-content">
                            <div class="mapillary-notice">
                                <i class="fa fa-street-view"></i><br>
                                <strong>Mapillary Street View</strong><br>
                                <small>Click below to open street-level imagery in a new window</small>
                            </div>
                            <div class="mapillary-preview">
                                <div class="preview-info">
                                    <div class="preview-title">Location Preview</div>
                                    <div class="preview-coords">Click on the map to set a location</div>
                                </div>
                                <div class="preview-map">
                                    <small>Interactive map will open in new window</small>
                                </div>
                            </div>
                            <button class="open-mapillary-btn">
                                <i class="fa fa-external-link"></i> Open Mapillary
                            </button>
                        </div>
                    </div>
                `);

                // Handle clicks on the Mapillary section header to close it
                mapillaryContent.find('.osmcat-select').on('click', function() {
                    hideMapillaryFromMenu();
                    mapillaryContent.remove();
                    $('.osmcat-mapillary button').removeClass('active');
                });

                // Insert after overlays section
                var $menu = $('.osmcat-menu');
                var $overlays = $menu.find('.osmcat-layer .osmcat-select').filter(function(){
                    return $(this).find('option').filter(function(){
                        return $(this).val().toLowerCase().indexOf('overlay') !== -1;
                    }).length;
                }).closest('.osmcat-layer').first();

                if ($overlays.length) {
                    mapillaryContent.insertAfter($overlays);
                } else {
                    // Fallback: insert after layers section
                    var $layers = $menu.find('.osmcat-layer').first();
                    mapillaryContent.insertAfter($layers);
                }

                // Set up button click handler
                mapillaryContent.find('.open-mapillary-btn').on('click', function(e) {
                    e.preventDefault();
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    var url = `https://www.mapillary.com/app/?lat=${center[1]}&lng=${center[0]}&z=${zoom}&style=photo`;
                    window.open(url, 'mapillary', 'width=1200,height=800,scrollbars=yes,resizable=yes');
                });
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