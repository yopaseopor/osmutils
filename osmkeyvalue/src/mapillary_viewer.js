/**
 * Mapillary Viewer Implementation
 *
 * Firefox Compatibility Note:
 * Firefox blocks embedded iframes from mapillary.com due to security policies (X-Frame-Options).
 * This implementation opens Mapillary in a new window instead of using an iframe for better browser compatibility.
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
            // For public access, we can only get limited data or use public endpoints
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

                    // Try public Mapillary tiles as alternative (if available)
                    // For now, disable the layer if API fails
                    mapillaryLayer.setVisible(false);
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

    // Create viewer container
    var viewerContainer = $('<div>').addClass('mapillary-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('credits')
            .append($('<div>').addClass('credit').html('&#169; <a href="https://www.mapillary.com" target="_blank">Mapillary</a>'))
            .append($('<div>').addClass('credit').html('&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'))
        )
        .append($('<div>').addClass('mapillary-content')
            .append($('<div>').addClass('mapillary-notice')
                .html('<i class="fa fa-street-view"></i><br><strong>Mapillary Street View</strong><br><small>Click below to open street-level imagery in a new window</small>'))
            .append($('<div>').addClass('mapillary-preview')
                .append($('<div>').addClass('preview-info')
                    .html('<div class="preview-title">Location Preview</div><div class="preview-coords">Loading coordinates...</div>'))
                .append($('<div>').addClass('preview-map').html('<small>Interactive map will open in new window</small>')))
            .append($('<button>').addClass('open-mapillary-btn').html('<i class="fa fa-external-link"></i> Open Mapillary')));

    $('body').append(viewerContainer);

    // Create viewer button control
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-mapillary');

        // Map view button
        var mapViewButton = $('<button type="button">')
            .html('<i class="fa fa-camera"></i>')
            .on('click', function() {
                if ($('.mapillary-viewer').hasClass('active')) {
                    hideMapillaryViewer();
                    mapillaryLayer.setVisible(false);
                } else {
                    // Hide Panoramax viewer if it's active
                    if ($('.panoramax-viewer').hasClass('active')) {
                        hidePanoraMaxViewer();
                        $('.osmcat-panoramax button').removeClass('active');
                    }
                    mapillaryLayer.setVisible(true);
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    showMapillaryViewer(center[1], center[0], zoom);
                }
                $(this).toggleClass('active');
            });

        container.append(mapViewButton);
        return container[0];
    };

    // Add the viewer control to the map
    map.addControl(new ol.control.Control({
        element: viewerControlBuild()
    }));

    // Handle viewer close button
    $('.mapillary-viewer .close-button').on('click', function() {
        hideMapillaryViewer();
        mapillaryLayer.setVisible(false);
        $('.osmcat-mapillary button').removeClass('active');
    });

    // Make viewer resizable (content area only)
    $('.mapillary-viewer').resizable({
        handles: 'e, s, se',
        minWidth: 300,
        minHeight: 200
    });

    // Function to show the viewer with a specific image
    function showMapillaryViewer(lat, lon, zoom, imageId) {
        // Build URL with the current Mapillary embed format
        var url = `https://www.mapillary.com/app/?lat=${lat}&lng=${lon}&z=${Math.max(1, Math.min(20, zoom))}&style=photo`;

        if (imageId) {
            url += `&imageKey=${imageId}`;
        }

        console.log('Mapillary URL:', url); // Debug line

        // Update the preview information
        $('.preview-coords').html(`<strong>${lat.toFixed(6)}, ${lon.toFixed(6)}</strong><br><small>Zoom: ${zoom}</small>`);

        // Update the notice and button
        $('.open-mapillary-btn').off('click').on('click', function() {
            window.open(url, 'mapillary', 'width=1200,height=800,scrollbars=yes,resizable=yes');
        });

        $('.mapillary-viewer').addClass('active');
        $('#map').addClass('viewer-active');

        // On mobile, adjust map view center after showing viewer
        if (window.innerWidth < 600) {
            setTimeout(function() {
                map.updateSize(); // Force OL to update its size calculations
                if (imageId) {
                    map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
                }
            }, 300);
        }
    }

    // Function to hide the viewer
    function hideMapillaryViewer() {
        $('.mapillary-viewer').removeClass('active');
        $('#map').removeClass('viewer-active');
        setTimeout(function() {
            // Reset the notice and preview text
            $('.mapillary-notice').html('<i class="fa fa-street-view"></i><br><strong>Mapillary Street View</strong><br><small>Click below to open street-level imagery in a new window</small>');
            $('.preview-coords').html('Loading coordinates...');
            $('.open-mapillary-btn').off('click');
            map.updateSize(); // Force OL to update its size calculations
        }, 300);
    }

    // Handle map click events
    map.on('click', function(evt) {
        if ($('.mapillary-viewer').hasClass('active')) {
            var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
                return feature;
            });

            if (feature) {
                var coords = ol.proj.transform(feature.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
                showMapillaryViewer(coords[1], coords[0], map.getView().getZoom(), feature.get('id'));
            }
        }
    });

    // Handle window resize
    $(window).on('resize', function() {
        if ($('.mapillary-viewer').hasClass('active')) {
            map.updateSize(); // Force OL to update its size calculations
        }
    });

    // Initially hide the Mapillary layer
    mapillaryLayer.setVisible(false);
} 