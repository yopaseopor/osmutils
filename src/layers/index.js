// Aggregate all external layer definitions here
// Example: import { myLayer } from './myLayer.js';
// export const allLayers = { myLayer };

import { myCustomLayer } from './myCustomLayer.js';
import { osmBrightLayer } from './osmBrightLayer.js';
import { stamenTonerLayer } from './stamenTonerLayer.js';

export const allLayers = { myCustomLayer, osmBrightLayer, stamenTonerLayer };
