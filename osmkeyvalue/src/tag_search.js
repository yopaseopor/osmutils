/**
 * Taginfo Tag Search Implementation
 * Searches through taginfo_definitions.csv for OSM key=value pairs
 */
function initTagSearch(map) {
    // Tag data cache
    var tagData = [];
    var isLoadingTags = false;

    // Load tag data from CSV
    function loadTagData() {
        if (isLoadingTags) return;
        isLoadingTags = true;

        return $.ajax({
            url: 'taginfo_definitions.csv',
            dataType: 'text',
            success: function(csvText) {
                // Parse CSV
                var lines = csvText.split('\n');
                var headers = lines[0].split(',');

                // Find column indices
                var tagIndex = headers.findIndex(h => h.trim() === 'tag');
                var definitionEnIndex = headers.findIndex(h => h.trim() === 'definition_en');
                var countAllIndex = headers.findIndex(h => h.trim() === 'count_all');

                if (tagIndex === -1 || definitionEnIndex === -1 || countAllIndex === -1) {
                    console.error('Required columns not found in CSV');
                    return;
                }

                // Parse data rows
                tagData = [];
                for (var i = 1; i < lines.length; i++) {
                    var values = lines[i].split(',');
                    if (values.length > Math.max(tagIndex, definitionEnIndex, countAllIndex)) {
                        var tag = values[tagIndex]?.trim();
                        var definition = values[definitionEnIndex]?.trim();
                        var count = values[countAllIndex]?.trim();

                        if (tag && tag.includes('=')) {
                            tagData.push({
                                tag: tag,
                                definition: definition || '',
                                count: parseInt(count) || 0,
                                displayText: tag + (definition ? ' - ' + definition.substring(0, 60) + '...' : '') + ' (' + (parseInt(count) || 0).toLocaleString() + ')'
                            });
                        }
                    }
                }

                // Sort by count (most popular first)
                tagData.sort(function(a, b) {
                    return b.count - a.count;
                });

                console.log('Loaded ' + tagData.length + ' tags from CSV');
            },
            error: function(xhr, status, error) {
                console.error('Failed to load tag data:', error);
            },
            complete: function() {
                isLoadingTags = false;
            }
        });
    }

    // Search Control
    var searchControlBuild = function () {
        var container = $('<div>').addClass('ol-control ol-unselectable tag-search')
            .html($('<button type="button"><i class="fa fa-tag"></i> Tags</button>'));

        var searchInput = $('<input type="text" placeholder="Search OSM tags...">').hide();
        var resultsList = $('<ul>').addClass('search-results').hide();
        container.append(searchInput).append(resultsList);

        container.on('click', 'button', function(e) {
            e.preventDefault();
            searchInput.toggle();
            if (searchInput.is(':visible')) {
                searchInput.focus();
                if (tagData.length === 0) {
                    loadTagData();
                }
            } else {
                resultsList.hide();
            }
        });

        searchInput.on('input', function(e) {
            var query = $(this).val().toLowerCase().trim();

            if (query.length < 2) {
                resultsList.hide();
                return;
            }

            // Filter tags based on query
            var matches = tagData.filter(function(tag) {
                return tag.tag.toLowerCase().includes(query) ||
                       tag.definition.toLowerCase().includes(query);
            }).slice(0, 10); // Limit to 10 results

            resultsList.empty();

            if (matches.length > 0) {
                matches.forEach(function(tag) {
                    $('<li>')
                        .html('<strong>' + tag.tag + '</strong><br><small>' + tag.definition + '<br><em>' + tag.count.toLocaleString() + ' uses</em></small>')
                        .data('tag', tag.tag)
                        .appendTo(resultsList);
                });
                resultsList.show();
            } else {
                resultsList.append($('<li>').addClass('no-results').text('No tags found'));
                resultsList.show();
            }
        });

        resultsList.on('click', 'li', function() {
            if (!$(this).hasClass('no-results')) {
                var selectedTag = $(this).data('tag');

                // Parse key=value from tag
                var parts = selectedTag.split('=');
                if (parts.length === 2) {
                    var key = parts[0];
                    var value = parts[1];

                    // Query Overpass API for this tag
                    queryOverpassForTag(map, key, value, selectedTag);

                    // Hide search UI
                    searchInput.hide().val('');
                    resultsList.hide();
                }
            }
        });

        // Close results when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.tag-search').length) {
                resultsList.hide();
            }
        });

        return container[0];
    };

    // Query Overpass API for a specific key=value combination
    function queryOverpassForTag(map, key, value, tagName) {
        console.log('Querying Overpass for:', key + '=' + value);

        // Show loading indicator
        $('.tag-search').addClass('loading');

        // Build Overpass query
        var overpassQuery = `
            [out:json][timeout:25];
            (
                node[${key}=${value}];
                way[${key}=${value}];
                relation[${key}=${value}];
            );
            out geom;
        `;

        $.ajax({
            url: 'https://overpass-api.de/api/interpreter',
            method: 'POST',
            data: {
                data: overpassQuery
            },
            success: function(data) {
                if (data && data.elements) {
                    displayTagResults(map, data.elements, tagName);
                } else {
                    console.log('No results found for tag:', tagName);
                    alert('No results found for tag: ' + tagName);
                }
                $('.tag-search').removeClass('loading');
            },
            error: function(xhr, status, error) {
                console.error('Overpass API error:', error);
                alert('Error querying Overpass API for tag: ' + tagName);
                $('.tag-search').removeClass('loading');
            }
        });
    }

    // Display tag results on map
    function displayTagResults(map, elements, tagName) {
        // Remove existing tag layer if it exists
        var existingLayer = map.getLayers().getArray().find(function(layer) {
            return layer.get('name') === 'tag-results';
        });

        if (existingLayer) {
            map.removeLayer(existingLayer);
        }

        if (elements.length === 0) {
            alert('No results found for tag: ' + tagName);
            return;
        }

        // Convert OSM data to GeoJSON
        var geojson = osmtogeojson(data);

        // Create vector source
        var vectorSource = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(geojson, {
                featureProjection: 'EPSG:3857'
            })
        });

        // Create vector layer with styling
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            name: 'tag-results',
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 0, 0, 0.8)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 1)',
                        width: 2
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, 0.8)',
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 0, 0, 0.2)'
                })
            })
        });

        // Add layer to map
        map.addLayer(vectorLayer);

        // Fit view to show all results
        if (elements.length > 0) {
            var extent = vectorSource.getExtent();
            if (!ol.extent.isEmpty(extent)) {
                map.getView().fit(extent, {
                    padding: [20, 20, 20, 20],
                    maxZoom: 18
                });
            }
        }

        // Show results info
        var resultCount = elements.length;
        alert('Found ' + resultCount + ' features for tag "' + tagName + '"');

        console.log('Displayed', resultCount, 'features for tag:', tagName);
    }

    // Add the search control to the map
    map.addControl(new ol.control.Control({
        element: searchControlBuild()
    }));

    // Load tag data on initialization
    loadTagData();
}
