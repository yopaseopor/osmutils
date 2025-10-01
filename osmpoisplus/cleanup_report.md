# Informe de Neteja del Projecte OSM Utils

## 📋 Resum Executiu
Anàlisi exhaustiva dels arxius del projecte OSM Utils per identificar recursos no utilitzats i optimitzar l'espai d'emmagatzematge.

## 🗑️ ARXIUS PER ESBORRAR

### 1. Arxius d'Idiomes NO Actius (35 arxius)
**Ubicació:** `src/i18n/`

| Arxiu | Estat |
|-------|-------|
| an.js | No utilitzat |
| ar.js | No utilitzat |
| ast.js | No utilitzat |
| bn.js | No utilitzat |
| da.js | No utilitzat |
| de.js | No utilitzat |
| eu.js | No utilitzat |
| fi.js | No utilitzat |
| fr.js | No utilitzat |
| gl.js | No utilitzat |
| hi.js | No utilitzat |
| it.js | No utilitzat |
| ja.js | No utilitzat |
| ko.js | No utilitzat |
| nl.js | No utilitzat |
| no.js | No utilitzat |
| pl.js | No utilitzat |
| pt.js | No utilitzat |
| ru.js | No utilitzat |
| sv.js | No utilitzat |
| uk.js | No utilitzat |
| vi.js | No utilitzat |
| zh.js | No utilitzat |
| bg.js | No utilitzat |
| cs.js | No utilitzat |
| el.js | No utilitzat |
| hr.js | No utilitzat |
| hu.js | No utilitzat |
| ro.js | No utilitzat |
| sk.js | No utilitzat |
| sr.js | No utilitzat |

### 2. Versions Alternatives d'Idiomes (3 arxius)
**Ubicació:** `src/i18n/`
- ca2.js
- en2.js
- es2.js

### 3. Grups d'Overlays Comentats (14 arxius)
**Ubicació:** `src/overlays/groups/`
- business.js
- food_drink.js
- shopping.js
- economy.js
- leisure.js
- logistics.js
- mobility.js
- culture.js
- office.js
- others.js
- transport.js
- sport.js
- health.js
- education.js

### 4. Arxius de Layers Comentats (3 arxius)
**Ubicació:** `src/layers/`
- myCustomLayer.js
- osmBrightLayer.js
- stamenTonerLayer.js

### 5. Arxius WMS Layers No Utilitzats (35 arxius)
**Ubicació:** `src/layers/generated/`
- al_wms_layers.js
- all_tms_layers.js
- as_wms_layers.js
- at_wms_layers.js
- au_wms_layers.js
- be_wms_layers.js
- br_wms_layers.js
- ca_wms_layers.js
- ch_wms_layers.js
- cz_wms_layers.js
- dk_wms_layers.js
- ee_wms_layers.js
- fi_wms_layers.js
- fm_wms_layers.js
- fr_wms_layers.js
- gu_wms_layers.js
- hr_wms_layers.js
- hu_wms_layers.js
- it_wms_layers.js
- lv_wms_layers.js
- md_wms_layers.js
- mh_wms_layers.js
- mp_wms_layers.js
- no_wms_layers.js
- nz_wms_layers.js
- pl_wms_layers.js
- pt_wms_layers.js
- pw_wms_layers.js
- se_wms_layers.js
- sg_wms_layers.js
- tw_wms_layers.js
- us_wms_layers.js
- uy_wms_layers.js
- xx_wms_layers.js
- za_wms_layers.js

### 6. Arxius TMS Layers No Utilitzats (23 arxius)
**Ubicació:** `src/layers/generated/`
- tms_layers_BE.js
- tms_layers_BR.js
- tms_layers_CZ.js
- tms_layers_DK.js
- tms_layers_FI.js
- tms_layers_HT.js
- tms_layers_HU.js
- tms_layers_IT.js
- tms_layers_LT.js
- tms_layers_LU.js
- tms_layers_MD.js
- tms_layers_NL.js
- tms_layers_NZ.js
- tms_layers_PH.js
- tms_layers_PL.js
- tms_layers_RS.js
- tms_layers_SE.js
- tms_layers_SG.js
- tms_layers_SK.js
- tms_layers_TW.js
- tms_layers_XX.js
- tms_layers_ZA.js
- tms_layers_ZM.js

### 7. Scripts de Desenvolupament (2 arxius)
**Ubicació:** `scripts/`
- generate_nsi_overlays_nsi.py
- process_wms_layers -funciona.py

### 8. Icones Duplicades
**Ubicació:** `src/img/icones/`
- *-copia*.svg
- *-copia*.png
- *_Big.png
- maxaxleload - copia.svg
- maxheight - copia.svg
- maxspeed - copia.svg

## ✅ ARXIUS PER MANTENIR

### Idiomes Actius (4 arxius)
**Ubicació:** `src/i18n/`
- ca.js (Català)
- en.js (Anglès)
- es.js (Espanyol)
- index.js (Configuració d'idiomes)

### Grups d'Overlays Actius (2 arxius)
**Ubicació:** `src/overlays/groups/`
- animal.js
- government.js

### Arxius de Layers Actius (3 arxius)
**Ubicació:** `src/layers/generated/`
- de_wms_layers.js (Alemanya)
- es_wms_layers.js (Espanya)
- gb_wms_layers.js (Gran Bretanya)

### Arxius Essencials del Projecte
**Ubicació:** `src/`
- config.js (Configuració principal)
- index.js (Punt d'entrada principal)
- init.js (Inicialització)
- layer_search.js (Cerca de capes)
- overlay_search.js (Cerca d'overlays)
- nominatim_search.js (Cerca de llocs)
- panoramax_viewer.js (Visor PanoraMax)
- mapillary_viewer.js (Visor Mapillary)
- router.js (Sistema de rutes)
- overlays/index.js (Sistema d'overlays)
- overlay_integration.js (Integració d'overlays)
- language_init.js (Inicialització d'idiomes)
- components/LanguageSelector.js (Selector d'idiomes)
- layers/index.js (Sistema de capes)

### CSS i Recursos
**Ubicació:** `src/css/`
- index.css (Estils principals)
- font-awesome.css (Icones Font Awesome)
- language-selector.css (Estils del selector d'idiomes)

### Llibreries Externes
**Ubicació:** `src/api/`
- jquery-ui-1.12.1.custom/ (jQuery UI)
- openlayers/v6.2.2-custom/ (OpenLayers)

## 📊 Estadístiques

| Categoria | Arxius per Esborrar | Arxius per Mantenir | Espai Estimat |
|-----------|-------------------|-------------------|---------------|
| Idiomes | 38 | 4 | ~5 MB |
| Overlays | 14 | 2 | ~15 MB |
| Layers | 61 | 3 | ~30 MB |
| Scripts | 2 | - | ~2 MB |
| Icones | 12 | - | ~1 MB |
| **TOTAL** | **~127** | **~50** | **~53 MB** |

## ⚠️ Notes Importants

### Arxius Faltants (Crítics):
- `src/api/jquery/3.4.1/jquery.min.js` - Referenciat a `index.html` però no existeix

### Arxius Potencialment No Utilitzats:
- Alguns directoris d'imatges (`icones/`, `icones_web/`) contenen molts arxius sense referències directes
- Alguns arxius de `layers/generated/` poden no utilitzar-se

## 🔧 Comandes d'Execució

```bash
# Esborrar idiomes no actius
cd src/i18n && rm an.js ar.js ast.js bn.js da.js de.js eu.js fi.js fr.js gl.js hi.js it.js ja.js ko.js nl.js no.js pl.js pt.js ru.js sv.js uk.js vi.js zh.js bg.js cs.js el.js hr.js hu.js ro.js sk.js sr.js

# Esborrar versions alternatives
cd src/i18n && rm ca2.js en2.js es2.js

# Esborrar overlays comentats
cd src/overlays/groups && rm business.js food_drink.js shopping.js economy.js leisure.js logistics.js mobility.js culture.js office.js others.js transport.js sport.js health.js education.js

# Esborrar layers comentats
cd src/layers && rm myCustomLayer.js osmBrightLayer.js stamenTonerLayer.js

# Esborrar WMS layers no utilitzats
cd src/layers/generated && rm al_wms_layers.js all_tms_layers.js as_wms_layers.js at_wms_layers.js au_wms_layers.js be_wms_layers.js br_wms_layers.js ca_wms_layers.js ch_wms_layers.js cz_wms_layers.js dk_wms_layers.js ee_wms_layers.js fi_wms_layers.js fm_wms_layers.js fr_wms_layers.js gu_wms_layers.js hr_wms_layers.js hu_wms_layers.js it_wms_layers.js lv_wms_layers.js md_wms_layers.js mh_wms_layers.js mp_wms_layers.js no_wms_layers.js nz_wms_layers.js pl_wms_layers.js pt_wms_layers.js pw_wms_layers.js se_wms_layers.js sg_wms_layers.js tw_wms_layers.js us_wms_layers.js uy_wms_layers.js xx_wms_layers.js za_wms_layers.js

# Esborrar TMS layers
cd src/layers/generated && rm tms_layers_*.js

# Esborrar scripts de desenvolupament
cd scripts && rm generate_nsi_overlays_nsi.py process_wms_layers\ -funciona.py

# Esborrar icones duplicades
cd src/img/icones && rm *-copia*.svg *-copia*.png *_Big.png
```

## ✅ Verificació Post-Neteja
Després d'executar les comandes:
1. Verificar que l'aplicació funciona correctament
2. Comprovar que no es trenquen funcionalitats
3. Restaurar jQuery si cal
4. Testejar els idiomes actius (ca, en, es)

---

*Informe generat automàticament el 2025-10-01*
*Espai estimat a alliberar: ~53 MB*
