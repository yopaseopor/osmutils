/**
 * Debug script to test tag search functionality
 */
console.log('🔍 Testing tag search integration...');

// Check if initTagSearch function exists
if (typeof initTagSearch === 'function') {
    console.log('✅ initTagSearch function exists');

    // Check if map object exists (would be available in the context where this runs)
    if (typeof map !== 'undefined') {
        console.log('✅ Map object exists');

        // Try to call initTagSearch
        try {
            initTagSearch(map);
            console.log('✅ initTagSearch called successfully');
        } catch (error) {
            console.error('❌ Error calling initTagSearch:', error);
        }
    } else {
        console.log('❌ Map object not available in this context');
    }
} else {
    console.log('❌ initTagSearch function not found');

    // Check if tag_search.js loaded
    var scripts = document.getElementsByTagName('script');
    var tagSearchLoaded = false;

    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && scripts[i].src.includes('tag_search.js')) {
            tagSearchLoaded = true;
            break;
        }
    }

    if (tagSearchLoaded) {
        console.log('✅ tag_search.js is loaded');
    } else {
        console.log('❌ tag_search.js is not loaded');
    }
}

console.log('🔍 Debug check complete');
