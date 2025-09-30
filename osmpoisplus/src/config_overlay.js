// Overlay configuration for OSMUtils
import { getAllOverlays } from './overlays/index.js';

const overlayConfig = {
    overlays: []
};

// Initialize overlays when the module loads
try {
    const allOverlays = getAllOverlays();
    overlayConfig.overlays = allOverlays;
} catch (error) {
    console.error('Error loading overlays:', error);
    overlayConfig.overlays = [];
}

export { overlayConfig };
