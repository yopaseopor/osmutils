// Aggregate all external layer definitions here
// Example: import { myLayer } from './myLayer.js';
// export const allLayers = { myLayer };

import { FRLayers } from './generated/fr_wms_layers.js';
import { myCustomLayer } from './myCustomLayer.js';
import { osmBrightLayer } from './osmBrightLayer.js';
import { stamenTonerLayer } from './stamenTonerLayer.js';

export const allLayers = { fr_wms_layers, myCustomLayer, osmBrightLayer, stamenTonerLayer };
