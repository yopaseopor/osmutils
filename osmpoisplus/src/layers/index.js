// Aggregate all external layer definitions here
// Example: import { myLayer } from './myLayer.js';
// export const allLayers = { myLayer };

import { DELayers } from './generated/de_wms_layers.js';
import { ESLayers } from './generated/es_wms_layers.js';
import { FRLayers } from './generated/fr_wms_layers.js';
import { GBLayers } from './generated/gb_wms_layers.js';
import { BE_TMS_LAYERS } from './generated/tms_layers_BE.js';
import { DK_TMS_LAYERS } from './generated/tms_layers_DK.js';
import { myCustomLayer } from './myCustomLayer.js';
import { osmBrightLayer } from './osmBrightLayer.js';
import { stamenTonerLayer } from './stamenTonerLayer.js';

export const allLayers = { DELayers, ESLayers, FRLayers, GBLayers, GULayers,
  HRLayers, HULayers, ITLayers, LVLayers, MDLayers, MHLayers, MPLayers, NOLayers, NZLayers,
  PLLayers, PTLayers, PWLayers, SELayers, SGLayers, TWLayers, USLayers, UYLayers, XXLayers, ZALayers, 
  BE_TMS_LAYERS, DK_TMS_LAYERS, 
  myCustomLayer, osmBrightLayer, stamenTonerLayer 
};