/* global config, ol */
$(function () {

    // Initialize the map if not already done
    if (typeof window.map === 'undefined' && config && config.mapConfig) {
        // Basic map initialization - simplified for taginfo searchers
        window.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([0, 0]),
                zoom: 2
            })
        });

        // Add map move end event for cache invalidation
        window.map.getView().on('change:resolution', function() {
            const event = new CustomEvent('mapMoveEnd');
            window.dispatchEvent(event);
        });

        window.map.on('moveend', function() {
            const event = new CustomEvent('mapMoveEnd');
            window.dispatchEvent(event);
        });
    }

    // Taginfo searchers are handled by separate modules
    // No need for layer or overlay initialization here

    // Initialize query results display
    if (window.TagQueryResults) {
        window.TagQueryResults.initialize();
    }

    console.log('OSM Utils initialized with Taginfo searchers');

});
