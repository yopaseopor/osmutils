# OSM Baby Map Overlays

Aquest document descriu els nous overlays afegits al mapa OSM Utils per mostrar instal·lacions relacionades amb nadons i infants.

## Categories d'Overlays

### 1. Baby Feeding (Alletament)
Mostra llocs amb instal·lacions per a l'alletament matern:
- **Baby feeding available** (Verd): Llocs amb alletament disponible
- **Baby feeding not available** (Vermell): Llocs sense alletament
- **Baby feeding room** (Blau clar): Sales d'alletament dedicades
- **Lactation room** (Lila): Sales de lactància
- **Baby feeding unknown** (Negre): Estat desconegut d'alletament
- **Baby feeding checked before/after 2020** (Vermell/Verd): Data de verificació

### 2. Amenities (Comoditats)
Mostra comoditats per a infants:
- **Kids area available** (Verd clar): Àrees infantils disponibles
- **Kids area not available** (Vermell): Àrees infantils no disponibles
- **Indoor/Outdoor kids area** (Lila/Marró): Àrees interiors/exteriors
- **Supervised kids area** (Blau): Àrees supervisades
- **Kids area (fee)** (Turquesa): Àrees amb pagament
- **Kids area unknown** (Negre): Estat desconegut
- **Highchair available/not available/unknown** (Verd/Vermell/Negre): Disponibilitat de trones
- **Infant bed available/unknown** (Verd/Negre): Disponibilitat de bressols

### 3. Changing Table (Taula de canvi)
Mostra ubicacions amb taules per canviar nadons:
- **Changing table available** (Verd clar): Taula disponible
- **Changing table not available** (Vermell): Taula no disponible
- **Changing table limited** (Taronja): Taula limitada
- **Changing table unknown** (Negre): Estat desconegut
- **Changing table (fee/free)** (Blau/Verd): Pagament o gratuït
- **Location variants** (Diferents colors): Ubicació específica (lavabo accessible, femení, masculí, unisex, sala dedicada, àrea de vendes)
- **Verification dates** (Vermell/Verd): Data de verificació

### 4. Playground Equipment (Equipament de jocs)
**Categoria 1 (Playground_1):**
- **Playground area** (Rosa): Àrees de jocs generals
- **Play structure** (Blau marí): Estructures de joc
- **Slide** (Lila): Tobogans
- **Climbing frame** (Magenta): Marcs d'escalada
- **Climbing wall** (Blau): Parets d'escalada
- **Balance beam** (Turquesa): Bigues d'equilibri
- **Playhouse** (Cian): Cases de joc
- **Sandpit** (Verd): Sorrals
- **Hopscotch** (Verd clar): Xarranques
- **Teen shelter** (Marró): Refugis per adolescents
- **Sledding area** (Vermell fosc): Àrees d'trineus
- **Youth bench** (Gris): Bancs per joves
- **Playground map** (Rosa): Mapes dels parcs infantils
- **Bridge** (Lila clar): Ponts
- **Funnel ball** (Lila): Boles d'embut
- **Tunnel tube** (Blau clar): Túnels tubulars
- **Speaking tube** (Turquesa clar): Tubs parlants
- **Ball pool** (Turquesa): Piscines de boles
- **Activity panel** (Verd): Panells d'activitats
- **Horizontal bar** (Groc): Barres horitzontals

**Categoria 2 (Playground_2):**
- **Playground area 2** (Rosa): Àrees de jocs addicionals
- **Swing** (Groc): Balancins
- **Spinning circle** (Taronja): Cercles giratoris
- **Basket swing** (Beix): Balancins cistella
- **Basket rotator** (Marró clar): Rotadors cistella
- **Aerial rotator** (Rosa): Rotadors aeris
- **Seesaw** (Lila): Balancins
- **Springy** (Verd oliva): Molles
- **Trampoline** (Blau): Trampolins
- **Roundabout** (Blau clar): Rodadors/tiovivos
- **Cushion** (Turquesa clar): Coixins
- **Exercise equipment** (Verd fosc): Equipament d'exercici
- **Zip wire** (Verd): Tiroleses
- **Splash pad** (Vermell): Àrees d'aigua
- **Water play** (Groc): Jocs d'aigua

### 5. Generic (Genèric)
Mostra elements genèrics relacionats amb nadons:
- **Baby friendly** (Rosa): Llocs aptes per nadons
- **Not baby friendly** (Vermell): Llocs no aptes per nadons
- **Baby goods shops** (Icona personalitzada): Botigues d'articles per nadons

## Ús dels Overlays

1. **Selecció d'idioma**: Els overlays s'adapten automàticament a l'idioma seleccionat (Català, Castellà, Anglès)
2. **Cerca**: Utilitza el camp de cerca per trobar overlays específics
3. **Categories**: Els overlays estan organitzats per categories lògiques per facilitar la navegació
4. **Colors**: Cada tipus d'instal·lació té un color únic per facilitar la identificació visual
5. **Informació**: Els marcadors mostren noms dels llocs quan estan disponibles

## Dades d'OpenStreetMap

Els overlays utilitzen dades d'OpenStreetMap (OSM) amb les següents etiquetes principals:
- `baby_feeding`: Instal·lacions d'alletament
- `kids_area`: Àrees infantils
- `highchair`: Trones
- `infant_bed`: Bressols
- `changing_table`: Taules de canvi
- `leisure=playground`: Parcs infantils
- `playground=*`: Equipament específic de jocs
- `baby=yes/no`: Compatibilitat amb nadons
- `shop=baby_goods`: Botigues d'articles per nadons

## Verificació de Dades

Els overlays inclouen informació sobre la verificació de dades:
- **Check dates**: Mostra quan es van verificar les dades (abans/després de 2020)
- **Unknown status**: Indica quan la informació no està disponible o no s'ha verificat

## Icones

- **Cercle de colors**: La majoria d'overlays utilitzen cercles de colors amb etiquetes descriptives
- **Icona personalitzada**: Les botigues d'articles per nadons utilitzen una icona SVG específica amb un biberó i sonall

## Compatibilitat

Els overlays funcionen amb:
- OpenLayers 6.2.2
- Navegadors web moderns
- Dades d'OpenStreetMap actualitzades
- Internacionalització en català, castellà i anglès
