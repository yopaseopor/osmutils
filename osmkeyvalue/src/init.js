import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
// Overlay config removed - replaced by taginfo searchers
// import { overlayConfig } from './config_overlay.js';
// Overlay integration removed - replaced by taginfo searchers
// import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Remove overlay initialization - replaced by taginfo searchers
// window.config.overlays = overlayConfig.overlays;

// Dispatch config loaded event after everything is initialized
window.dispatchEvent(new CustomEvent('configLoaded', {
    detail: window.config
}));

// Remove overlay searcher notification - replaced by taginfo searchers
// window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
//     detail: {
//         overlays: window.config.overlays
//     }
// }));

// Initialize map when document is ready
$(document).ready(function() {
    // Map initialization will be handled by index_simple.js
    console.log('OSM Utils init.js loaded - using Taginfo searchers');
}); 