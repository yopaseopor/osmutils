import { foodOverlays } from './food.js';
import { customOverlays } from './custom_overlays.js';
import { osmaccessibilitymapOverlays } from './osmaccessibilitymap.js';
import { osmbabymapOverlays } from './osmbabymap.js';

// Function to load external overlay files
export function loadExternalOverlays() {
    return Promise.resolve([
        ...foodOverlays,
        ...customOverlays,
        ...osmaccessibilitymapOverlays,
        ...osmbabymapOverlays
    ]);
} 