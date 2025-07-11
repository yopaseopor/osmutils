# OSM Utils 

Based on [https://github.com/yopaseopor/osmpoismap](https://github.com/yopaseopor/osmpoismap)

## Authors:

-Map running on Openlayers. Based on [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map). New Openlayers version done by [Ripollx](https://github.com/Ripollx)

-With modifications of [Ramiro Balado](https://github.com/Qjammer)

-Possibility of show outside JSONs by [Hugoren Martinako ](https://github.com/Crashillo)

-Complex queries possibility done by [Ismael Luceno](https://github.com/ismaell)

-Search by [Nominatim](https://nominatim.openstreetmap.org)

-Street imagery by [Panoramax](https://api.panoramax.xyz)

-Other images by [Mapillary](https://www.mapillary.com)

-Routing for car, bicycle and walk by [OSRM](https://project-osrm.org/)

-Brands extracted from [Name Suggestion Index](https://nsi.guide)

-Layers extracted from [OSM Editor Layer Index](https://osmlab.github.io/editor-layer-index/)

-Translations done by [SWE](https://windsurf.com/blog/windsurf-wave-9-swe-1)

-Vibe coding to mix all of it by [yopaseopor](https://github.com/yopaseopor)

## Features

OSM Utils enables you to taste the power of Openstreetmap environment. It puts on your hand:

-A searcher

-A router for car, bicycle and walk

-A layer searcher and selector with more than 800 TMS and WMS layers you can activate and control its opacity between them, including vector tiles and layers from other commercial sources.

-An overlay searcher with more than 15000 brands from all around the world.

-A custom vector style called customyopaseopor

-38 languages for main parts of the website

-Street imagery from Panoramax and Mapillary

-Main links to manage the data you have found.

## Vibe coding

We have used some programs about coding and also AIs LMs to do major part of the work.

-Cursor with Claude Sonnet 3.5, Chat GPT 4.0

-Windsurf with ChatGPT 4.1, Deepseek 0324, Gemini 2.5, SWE-1

-Visual Studio Code with Copilot and ChatGPT 4.1


## Demo

Touch and use. Test it. Fork it. Make it better.

You can see it [here](https://yopaseopor.github.io/osmutils)

---

# OSMUtils Creation Process / Procés de creació d'OSMUtils / Proceso de creación de OSMUtils

## English

We started from OSMPoisMap: [https://github.com/yopaseopor/osmpoismap](https://github.com/yopaseopor/osmpoismap)

**Legend:**

```
+ Positive
- Negative
* Model change, observations...

+ Clear and calm night, the moon is shining...
+ I read something about vibe coding
+ I downloaded Cursor (Thursday 10th)
+ I tried it, asked for a nominatim searcher (had been trying for 10 days) and got it that same night
+ Refined it, asked for a Panoramax image viewer, got it
+ Went further, asked for a router, got it
+ Well-integrated Mapillary viewer with API, got it (each time more complex, but reaching further)
- APIs, questionable style.

+ Code change, getting serious. Cursor trial ends. Start Windsurf.
+ Goal: parse NSI (15,000 brands) and put them on the map. Script made (so I can do it whenever I want)
+ API limits, info on how many processed, how many left, emergency button.
+ Searcher for those future overlays mega config. Cool
+ Same behavior for layers
+ Opacity for layers
+ Combination for layers
+ Multi-selector for layers
+ Sorting for layers
+ Conversion script to parse locally and not have to request github NSI API. Test with one and continue.
+ Use of multi-selector for overlays
+ Icon in overlay searcher (various scripts to calculate icon sizes)
+ Mobile version

- Page misaligned
- Attempt to translate (bad)
- Attempt to separate (bad)

- Errors in development, getting further away
- Never repeats the same code
- Complicates everything, impossible to modify what's already created. Watertight compartments.
- Fails like a fairground shotgun
- Programming with a child with ASD (everything exact, misunderstandings, always your fault)
- Paid
- No style consistency, does it one way first, then another.
- Return points in Cursor are good, in Windsurf they don't let you go back to the very beginning (so if it breaks... it breaks)
- Very small parts, if you disassemble everything it no longer works. Like putting painter's glue or special screws in LEGO and then trying to take it apart.
- Touches what it shouldn't, you ask for mobile interface and it tweaks the whole web.
- Not consistent, sometimes brilliant, sometimes disappointing, illogical things, not mathematical
- Lost day, you get lost going back.
- League block
- Admits it left half the work undone, explains why, and now promises to fix it. Just as tricky as a human because you have to find a way for it to reach the needed conclusion.
- Total distrust of what it does (two actions together usually bring complicated consequences, but sometimes it proposes actions that are only useful at the end)
- Review already achieved aspects to avoid losing them (touches everything, when it's not necessary or should)
- Sometimes gets stuck on an idea, can't achieve its goal and removes comments or changes code but without logical results or a plan for success.

+ When it explains what it does and I understand and can adapt it (button size, absolute positions, etc.) the result is exactly what I want.

* End of ChatGPT 4.1 trial
* Move to Deepseek 0324

+ Managed a workaround with a second scrollbar so no info is missing
- Attempt to separate config between Info, Layers, and Overlays. Failed. (nothing worked)
Base cascade?

+ Back to Cursor with another account and all models.
- Language selector. Removes icons and hard to recover them.
- Language selector. Now fails with the router.
- Language selector appears in a corner
+- Language selector disappears but external and translatable overlays appear
+- Language selector doesn't appear but overlays are separated into different files.
+ Language selector reappears at the top, more prominent, better
+ One of the separated overlays works (not translated)
+ More or less external and translatable overlays are visible (though not translated), but don't work.

* End of second Cursor trial
*- Cursor connection to local, doesn't allow file editing.

* Back to Windsurf with ChatGPT 4.1

- Doesn't quite get what I ask
+ Answers seem very verifiable and functional
- Results don't match answers. Doesn't test internally until plugged into code.
- Windsurf needs more refinement from the start.
+ External overlays appear in overlay searcher
- Translations not applied. Several failed attempts, breaking the searcher.
+ Manages to apply translations to overlay searcher
- Can't apply to classic selector

*+- A month later (premium queries reactivated, using a mix of all as allowed). Fighting with Cursor, manages to get subcategories translated and untranslated (general ones lost, but map is more varied and URLs for sharing in all available languages are recovered)
- Can't remove duplicates, breaks multilanguage system
+ Attempted vector map implementation.
- After several attempts, credits run out. Back to Windsurf.

- App stops working though answer seems correct. Use their own model SWE-1
+ Vector tiles!! (basic, with style inside config, not style.json but working)
+ Also managed to extract to external config file for vector tiles (js)
+- After two days, manages to show letters... so many and misconfigured that the map is unusable... but there are letters.
- Considering updating Openlayers to latest version
- Considering configuring OpenFreeMap for Openlayers
+ Got three different Vector layers, one really from Style.json
- Zooms don't work well

* Still manually parsing brands.
+- Gemini 2.5 via Windsurf manages to apply style, but without text and only up to zoom 15
+ Gemini gets text by downgrading mapbox from 0.9 to 0.6
- Gemini gets confused and deletes config, doesn't work
+ Manually realize tiles only go up to 14 and replace with URL that goes to 22. Works.
*- Switching from Windsurf to Visual Studio Code with Github Copilot and focusing on ChatGPT 4.1. Intention to use ollama or lmstudio but can't quite manage.

- With Copilot, use ChatGPT 4.1, ask to duplicate Maptiler code that works, but change to Shortbread. Seems to do it but puts it at the start, out of logic and map stops working.
+ Take that generated code fragment, implement it myself in config.js, and modify colorful.json style to match what I put. Works. Halfway (selected options get stuck until updated)
+ Replicate colorful code and ask for motorways to turn blue,
*+- Work by hand, don't trust vs code, refine same for tunnels, bridges, and links. Get to tertiary but then in Maputnik see it's a mess full of duplicates.
+- In the end, replicate as much as possible the generated code, ensuring all elements appear but can't get icons.
+ Focus on manually separating brands by files, translating them
- Get tired, stop translating, so I can have them grouped
+ Ask SWE from Windsurf to get all strings to translate and generate a translatable file. Then ask to translate to all possible languages the system can handle.
+ After a couple of difficulties, it manages and I ask what languages it speaks. Suggests these:

English (AI-IA) - base file
Spanish (AI-IA) - already done
French (AI-IA)
German (AI-IA)
Italian (AI-IA)
Portuguese (AI-IA)
Dutch (AI-IA)
Russian (AI-IA)
Chinese (AI-IA)
Japanese (AI-IA)
Korean (AI-IA)
Arabic (AI-IA)
Hindi (AI-IA)
Catalan (AI-IA) - already done

I'll begin with French (fr.js):

+ Second wave

Created new language files:

Asturian (ast.js)
Aragonese (an.js)
Basque (eu.js)
Galician (gl.js)

+ Polish (pl), Ukrainian (uk), and Hindi (hi)

+ New Language Files Added:
Swedish (sv.js)
Norwegian (no.js)
Danish (da.js)
Finnish (fi.js)

+ Bengali (bn) - The 7th most spoken language in the world with over 230 million speakers
 Vietnamese (vi) - The 16th most spoken language with about 85 million speakers

2025/06/30

Let's start with Romanian (ro):
Let's add Czech (cs) next:
Let's add Hungarian (hu) next:
Let's add Greek (el) next:
Let's add Bulgarian (bg) next:

+ And then it succeeded: show only translations
- Normal ones disappeared from the list and changed place
+ Correct place maintained
+ Managed to show only translations and recover normals
- When changing language overlays stop working
+ Button to change language established
- Only updates the page with the desired language, doesn't reselect options.

* Switched to Visual Studio Code to try Qodo (Codium Linux). Doesn't work. Continue with Copilot Chat GPT 4.1

+ Gets a small spinner in the search bar. Good.
+ Edits spinner, makes it big and covers the whole web. Achieved. Not identical to the existing one but shows the workaround. Good.
+ Locally, with some help, organize buttons in a line, both normal and mobile
- Attempt to translate the router (fail)

Looking for a name, this is something else now.
OSMUtils is born

2025/07/07

+Added a summary of the active features you can see on the map.
+Try to make the layers external in separated files, to target the OSM LABS LAYER INDEX
+-It shows external layers by individual, but not the title
+-It shows the title of the group of layers but not the layers itself although they are active.
*Github Copilot end of credits. Return to Windsurf and SWE

2025/07/08

+Windsurf made a python script to parser osmlabs imagery.xml. During 15 minutes it tries itself to parser the WMS layers. Finally it gets the data (not included in the app).
+Other day Windsurf and SWE makes the same with TMS layers.
+-Fixing layer buttons up and down and opacity results the removal of up and down button and the creation of a Activation layer button. Now active layers are kept in the top list.
*Modifying manually the TMS and WMS data all the layers now are available through the layer searcher


```

---

## Català

Partim d'OSMPoisMap: [https://github.com/yopaseopor/osmpoismap](https://github.com/yopaseopor/osmpoismap)

**Llegenda:**

```
+ Positiu
- Negatiu
* Canvi de model, observacions...

+ Nit clara i tranquil·la, la lluna fa llum...
+ Vaig llegir alguna cosa sobre el vibe coding
+ Em vaig baixar Cursor (Dijous 10)
+ El vaig provar, li vaig demanar un cercador nominatim (feia 10 dies que ho intentava) i me'l va aconseguir aquella mateixa nit
+ El vaig refinar, li vaig demanar un visor d'imatges de Panoramax, me'l va donar
+ Vaig anar més enllà, li vaig demanar un rutejador, me'l va donar
+ Visor de Mapillary ben integrat amb API, me'l va donar (cada cop donant més voltes, però arribant més lluny)
- APIs, estil discutible.

+ Canvi de codi, ens posem seriosos. S'acaba la prova de Cursor. Començo Windsurf.
+ Objectiu: parsejar NSI (15.000 marques) i posar-les al mapa. Fa script (així ho podré fer jo quan vulgui)
+ Límits d'API, informació de quantes processa, quantes en queden, botó d'emergència.
+ Cercador per aquests overlays futurs mega config. Mola
+ Mateix comportament per a capes
+ Opacitat per a capes
+ Combinació per a capes
+ Selector múltiple per a capes
+ Ordenació per a capes
+ Script de conversió per parsejar localment i no haver de demanar a l'API de github NSI. Prova amb una i continuar.
+ Ús de selector múltiple per a overlays
+ Icona al cercador per a overlays (diversos scripts per calcular mides d'icones)
+ Versió per a mòbils

- Pàgina desquadrada
- Intent de traduir (malament)
- Intent de separar (malament)

- Errors en el desenvolupament, cada cop més lluny
- Mai repeteix el mateix codi
- Ho complica tot, impossible tocar el que ja està creat. Compartiments estancs.
- Falla com una escopeta de fira
- Programar amb un nen TEA (tot exacte, malentesos i la culpa sempre és teva)
- De pagament
- No manté una coherència d'estil, primer ho fa d'una manera, després d'una altra.
- Els punts de retorn a Cursor bé, a Windsurf no serveixen per tornar al principi del principi (així que si s'espatlla... s'espatlla)
- Parts molt petites, si ho desmuntes tot ja no va. És com si haguessis posat cola de pintor o cargols especials al LEGO i després intentessis desmuntar-ho.
- Toca el que no ha de tocar, li demanes interfície mòbil i toca tota la web.
- No és constant, a vegades és brillant, altres deixa molt a desitjar, coses sense lògica i gens matemàtiques
- Dia perdut, et perds tornant enrere.
- Bloqueig lliga
- Et reconeix amb tota la cara que s'ha deixat mitja feina per fer, t'ho raona, i ara et promet que t'ho arreglarà. És igual de complicat que un humà perquè has de buscar la manera que arribi a la conclusió que cal perquè faci el que li has demanat.
- Desconfiança total cap al que fa (dues accions juntes solen portar conseqüències complicades, però hi ha vegades que et planteja accions que fins al final no són útils)
- Revisar aspectes ja guanyats per no perdre'ls (ho toca tot, quan no és necessari ni hauria)
- Hi ha vegades que s'encalla en una idea, i no aconsegueix el seu objectiu i remou comentaris o canvia codi però sense resultats ni pla de treball lògics per tenir èxit.

+ Quan m'explica el que fa i jo ho entenc i fins i tot puc adaptar-ho (mida botons, posicions absolutes, etc.) el resultat és clavat al que desitjo.

* S'acaba la prova de ChatGPT amb ChatGPT 4.1
* Passem a Deepseek 0324

+ S'aconsegueix fer una xapussa amb una segona barra de desplaçament perquè no falti informació
- Intent de separar config entre Info, Layers i Overlays. Fallit. (no anava res)
Cascada Base?

+ Torno a Cursor amb un altre compte i tots els models.
- Selector d'idioma. Elimina les icones i costa recuperar-les.
- Selector d'idioma. Ara amb el rutejador falla.
- Selector d'idioma apareix en una cantonada
+- Desapareix selector d'idioma però apareixen overlays externs i traduïbles
+- No apareix selector d'idioma però es separen els overlays en diversos arxius.
+ Reapareix el selector d'idioma a dalt de tot ocupant un espai més prominent, millor
+ Un overlay dels separats funciona (sense traduir)
+ S'aconsegueix que més o menys es vegin els overlays externs i traduïbles (encara que sense traduir), però no funcionen.

* Final de la segona prova amb Cursor
*- Connexió de Cursor a local, no permet l'edició d'arxius.

* Tornem a Windsurf amb ChatGPT 4.1

- No s'acaba d'aclarir en el que li demano
+ Les seves respostes semblen molt verificables i funcionals
- Els resultats no acompanyen les respostes. No prova el que diu internament, fins que ho connecta dins el codi.
- Windsurf necessita més refinament d'entrada.
+ S'aconsegueix que els externs surtin al cercador d'overlays
- Les traduccions no s'apliquen. Fa diverses voltes de campana destrossant el cercador.
+ S'aconsegueix aplicar les traduccions al cercador d'overlays
- No ho aconsegueix aplicar al selector clàssic

*+- Un mes més tard (es reactiven les consultes premium, faig servir una barreja de tots ells (el que em permet el programa). Barallant-me amb Cursor s'aconsegueix que els subapartats surtin traduïts i sense traduir (es perden els generals, però el mapa és molt més variat i de rebot es recuperen les URL per compartir en tots els idiomes disponibles)
- No aconsegueix treure els duplicats, es carrega el sistema multillenguatge
+ Intentem implementació mapa vectorial.
- Després de diversos intents s'acaben els crèdits. Tornem a Windsurf.

- L'app deixa de funcionar encara que la resposta sembla correcta. Fem servir el seu propi model SWE-1
+ Vector tiles!! (pírrics, i amb l'estil dins del mateix config, no style.json però funcionant)
+ S'aconsegueix també extreure a arxiu de configuració extern per als vector tiles (js)
+- Després de dos dies s'aconsegueix mostrar lletres... tantes i desconfigurades que el mapa no és usable... però ja hi ha lletres.
- Divago amb actualitzar Openlayers a la seva última versió
- Divago amb intentar configurar un OpenFreeMap per a Openlayers
+ Aconsegueixo tres capes diferents de Vector, crec que una realment des de Style.json
- No acaben de funcionar bé els zooms

* Continuo executant manualment el parsejament de marques.
+- Gemini 2.5 a través de Windsurf aconsegueix aplicar l'estil, però sense text i només fins al zoom 15
+ Gemini aconsegueix que surti el text desactualitzant el mapbox de 0.9 a 0.6
- Gemini es lia i esborra la configuració a config i no va
+ Manualment entenc que els tile arriben només fins a 14 i substitueixo per la URL on m'arriben fins a 22. Funciona.
*- Canviant de Windsurf a Visual Studio Code amb Github Copilot i centrat en ChatGPT 4.1. La intenció seria usar ollama o lmstudio però no ho acabo d'aconseguir.

- Amb Copilot tiro de ChatGPT 4.1, li demano que em dupliqui el codi de Maptiler que ja funciona, però que el canviï a Shortbread. Sembla que ho fa bé però ho col·loca al principi, fora de tota lògica i el mapa deixa de funcionar.
+ Agafo aquell fragment de codi generat, l'implemento jo al config.js, i modifico l'estil colorful.json perquè coincideixi amb el que he posat. Funciona. A mitges (es queda penjat el que has triat per a les dues opcions fins que s'actualitza)
+ Replico el codi de colorful i li demano que les motorway es tornin blaves,
*+- Treballo a mà, no em fio de vs code, refino el mateix per túnels, ponts i links. Arribo fins a tertiary però després a Maputnik veig que és un autèntic desastre ple de duplicats.
+- Al final replico fins on puc el codi generat, controlant que apareguin tots els elements però no aconsegueixo els icones.
+ Em concentro manualment poc a poc separant les marques per arxius, traduint-los
- Em canso, deixo de traduir-los, així els podré tenir agrupats
+ Li demano a SWE de Windsurf que es dediqui a agafar-me tots els strings per traduir i que em generi un arxiu traduïble. Després li diré que a més me'ls tradueixi als idiomes possibles que el sistema sigui capaç.
+ Després d'un parell de dificultats ho aconsegueix i li demano quins idiomes parla. Em suggereix aquests:

English (AI-IA) - arxiu base
Spanish (AI-IA) - ja fet
French (AI-IA)
German (AI-IA)
Italian (AI-IA)
Portuguese (AI-IA)
Dutch (AI-IA)
Russian (AI-IA)
Chinese (AI-IA)
Japanese (AI-IA)
Korean (AI-IA)
Arabic (AI-IA)
Hindi (AI-IA)
Catalan (AI-IA) - ja fet

Començaré amb el francès (fr.js):

+ Segona onada

Nous arxius d'idioma creats:

Asturià (ast.js)
Aragonès (an.js)
Basc (eu.js)
Gallec (gl.js)

+ Polonès (pl), Ucraïnès (uk) i Hindi (hi)

+ Nous arxius d'idioma afegits:
Suec (sv.js)
Noruec (no.js)
Danès (da.js)
Finès (fi.js)

+ Bengalí (bn) - La 7a llengua més parlada al món amb més de 230 milions de parlants
 Vietnamita (vi) - La 16a llengua més parlada amb uns 85 milions de parlants

2025/06/30

Comencem amb el romanès (ro):
Afegim txec (cs) a continuació:
Afegim hongarès (hu) a continuació:
Afegim grec (el) a continuació:
Afegim búlgar (bg) a continuació:

+ I llavors ho va aconseguir: mostrar només les traduccions
- Van desaparèixer de la llista els normals i es canviava de lloc
+ Es manté el lloc correcte
+ S'aconsegueix mostrar només traduccions i recuperar normals
- Quan es canvia d'idioma deixen de funcionar els overlays
+ S'instaura un botó per canviar d'idioma
- Només actualitza la pàgina amb l'idioma desitjat, no reescull les opcions.

* Canviem a Visual Studio Code per provar Qodo (Codium Linux). No va. Continuo amb Copilot Chat GPT 4.1

+ S'aconsegueix un spinner petit a la barra de cerca. Em sembla bé.
+ Edita el spinner i el converteix en gran i ocupa tota la web. Aconseguit. No és idèntic al que hi ha però així es veu la xapussa. Està bé.
+ Em barallo en local i amb una mica d'ajuda els botons per organitzar-los en una línia només, tant en normal com en mòbil
- Intento que tradueixi el rutejador (fail)

Li busco nom, això ja és una altra cosa.
Neix OSMUtils

2025/07/07

+Afegit un resum de les característiques actives que pots veure al mapa. +He intentat fer les capes externes en fitxers separats, per apuntar a l'ÍNDEX DE CAPES d'OSM LABS +-Mostra capes externes individualment, però no el títol +-Mostra el títol del grup de capes però no les capes en si encara que estiguin actives. *Crèdits de GitHub Copilot esgotats. Torn a Windsurf i SWE

2025/07/08

+Windsurf va fer un script en Python per analitzar l'imagery.xml d'osmlabs. Durant 15 minuts va intentar analitzar les capes WMS. Finalment va obtenir les dades (no incloses a l'aplicació). +Un altre dia Windsurf i SWE van fer el mateix amb les capes TMS. +-Arreglar els botons de capes amunt i avall i l'opacitat va resultar en l'eliminació dels botons d'amunt i avall i la creació d'un botó d'Activació de capa. Ara les capes actives es mantenen a la llista superior. *Modificant manualment les dades TMS i WMS, ara totes les capes estan disponibles a través del cercador de capes.
```
---

## Español

Partimos de OSMPoisMap: [https://github.com/yopaseopor/osmpoismap](https://github.com/yopaseopor/osmpoismap)

**Leyenda:**

```
Proceso de creación de OSMUtils
===============================

Partimos de OSMPoisMap
https://github.com/yopaseopor/osmpoismap

Leyenda:
+Postivo
-Negativo
*Cambio de modelo,observaciones...

+Nit clara i tranquila, hi ha la lluna que fa llum...
+Leí algo sobre el vibe coding
+Me bajé Cursor (Jueves 10)
+Lo probé, le pedí un buscador nominatim (llevaba 10 días intentándolo) y me lo consiguió esa misma noche
+Lo refiné ,le pedí un visor de imágenes de Panoramax, me lo dió
+Fui más allá, le pedí un ruteador, me lo dió
+Visor de Mapillary bien integrado con API, me lo dió (cada vez dando más vueltas, pero cada vez llegando más lejos)
-APIs, estilo discutible.

+Cambio de código, nos ponemos serios. Se acaba la prueba de Cursor. Empiezo Windsurf.
+Objetivo: parsear NSI (15000 marcas) y meterlas en el mapa. Hace script (así lo podré hacer yo cuando me de la gana)
+Límites de API , información de cuantas procesa, cuantas le quedan, botón emergencia.
+Buscador para esos overlays futuros mega config. Mola
+Mismo comportamiento para layers
+Opacidad para layers
+Combinación para layers
+Selector más de uno para layers
+ordenación para layers
+Conversión script para parsear localmente y no tener que pedir api github NSI. Prueba con uno y continuar.
+Uso de selector más de uno para overlays
+Icono en buscador para overlays (varios scripts para calcular medidas iconos)
+Versión para móviles

-Página descuadrada
-Intento de traducir (mal)
-Intento de separar (mal)


-errores en el desarrollo,cada vez más lejos
-nunca repite el mismo código
-lo complica todo, imposible meterle mano a lo ya creado. Compartimentos estancos.
-falla como escopeta feria
-programar con un niño TEA (todo exacto, mal entendidos y la culpa siempre es tuya)
-es de pago
-no guarda una coherencia de estilo, primero lo hace de una manera, después de otra.
-los puntos de retorno en Cursor bien, en Windsurf no sirven para volver al principio del principio (así que si se estropea...se estropea)
-partes muy pequeñas, si no se desmonta todo y ya no va. Es como si le hubieras metido o cola de pintor o tornillos especiales al LEGO y después intentaras desmontarlo.
-toca lo que no debe, le pides interfaz móvil y toquitea toda la web.
-no es constante, unas vecess es brillante, otras deja mucho que desear, cosas sin lógica y nada matemáticas
-día perdido, te pierdes volviendo atrás.
-bloqueo liga
-te reconoce con toda la jeta que se ha dejado media faena por hacer, te lo razona, y ahora te promete que te lo arregla. Es igual de chungo que un humano porque tienes que buscar la manera de que llegue a la conclusión que se necesita para que haga lo que le has pedido.
-total desconfianza hacia lo que realiza (dos acciones juntas suelen traer consecuencias complicadas, pero hay veces que te plantea acciones que hasta el final no son útiles)
-revisar aspectos ya ganados para no perderlos (lo toquitea todo, cuando no es necesario ni debe)
-hay veces que se encasquilla en una idea, y no consigue su objetivo y remueve comentarios o cambia código pero sin resultados ni plan de trabajo lógicos para tener éxito.


+Cuando me explica lo que hace y yo lo entiendo e incluso puedo adaptarlo (tamaño botones, posiciones absolutas, etc.) el resultado es clavado a lo que deseo.

*Se acaba la prueba de ChatGPT con ChatGPT 4.1
*Pasamos a Deepseek 0324

+Conseguimos hacer una chapucilla con una segunda barra de desplazamiento para que no falte información
-Intento de separar config entre Info,Layers y Overlays. Fallido. (no iba nada)
Cascada Base?

+Vuelvo a Cursor con otra cuenta y todos los modelos.
-Selector de idioma. Elimina los iconos y cuesta recuperarlos.
-Selector de idioma. Ahora con el ruteador falla.
-Selector de idioma aparece en una esquina
+-Desaparece selector de idioma pero aparecen overlays externos y traducibles
+-No aparece selector de idioma pero se separan los overlays en diversos archivos.
+Reaparece el selector de idioma arriba de todo ocupando un espacio más prominente , mejor
+Un overlay de los separados funciona (sin traducir)
+Se consigue que más o menos se vean los overlays externos y traducibles (aunque sin traducir), pero no funcionan.

*Final de segunda prueba con Cursor
*-Conexión de Cursor a local , no permite la edición de archivos.

*Volvemos a Windsurf. con Chat GPT 4.1

-No se acaba de aclarar en lo que le pido
+Sus respuestas parecen muy verificables y funcionales
-Sus resultados no acompañan sus respuestas. No prueba lo que dice internamente, hasta que lo enchufa dentro del código.
-Windsurf necesita más refinamiento de entrada.
+Se consigue que los externos salgan en el buscador de overlays
-Las traducciones no se aplican. Da varias vueltas de campana destrozando el buscador.
+Consigue aplicar las traducciones al buscador de overlays 
-No la consigue aplicar al selector clásico

*+-Un mes más tarde (se reactivan las consultas premium, uso una mezcla de todos ellos (lo que me permite el programa) . Peleándome con Cursor se consigue que los subapartados salgan traducidos y sin traducir (se pierden los generales, pero el mapa es mucho más variado y de rebote se recuperan las URL para compartir en todos los idiomas disponibles)
-No consigue quitar los duplicados, se cepilla el sistema multilenguaje
+Intentamos implementación mapa vectorial.
-Tras varios intentos se acaban créditos. Volvemos a Windsurf.

-app deja de funcionar aunque respuesta parece correcta. Usamos modelo propio de ellos SWE-1
+Vector tiles!! (pírricas, y con el estilo dentro del mismo config, no style.json pero funcionando)
+Se consigue también extraer a archivo de configuración externo para los vector tiles. (js)
+-Después de dos días se consigue mostrar letras...tantas y desconfiguradas que el mapa no es usable...pero ya hay letras.
-divago con actualizar Openlayers a su última versión
-divago con intentar configurar un OpenFreeMap para Openlayers
+Consigo tres layers diferentes de Vector, creo que uno realmente desde Style.json
-No acaban de funcionar bien los zoom

*Sigo ejecutando manualmente el parseamiento de marcas.
+-Gemini 2.5 a través de Windsurf consigue aplicar el estilo, pero sin texto y sin más allá de zoom 15
+Gemini consigue que salga el texto desactualizando el mapbox de 0.9 a 0.6
-Gemini se lía y borra la configuración en config y no va
+Manualmente entiendo que los tile llegan sólo hasta 14 y sustituyo por la URL donde me llegan a 22. Funciona. 
*-Cambiando de Windsurf a Visual Studio Code con Github Copilot y centrado en ChatGPT 4.1 . La intención sería usar ollama o lmstudio pero no lo acabo de conseguir.

-Con Copilot tiro de ChatGPT 4.1 , le pido que me duplique el código de Maptiler que ya funciona, pero que lo cambie a Shortbread. Parecería que lo hace bien pero lo coloca al principio, fuera de toda lógica y el mapa deja de funcionar.
+Pillo ese fragmento de código generado, lo implemento yo en el config.js, y modifico el style colorful.json para que coincida con lo que yo he puesto. Funciona. A medias (se queda pillado lo que has elegido para las dos opciones hasta que se actualiza)
+Replico el código de colorful y le pido que las motorway se vuelvan azules, 
*+-Trabajo a mano , no me fío de vs code, refino lo mismo para túneles, puentes y links. Llego hasta tertiary pero después en Maputnik veo que es un auténtico desastre lleno de duplicados.
+-Al final replico hasta donde puedo el código generado, controlando que aparezcan todos los elementos pero no consigo los iconos.
+Me concentro en manualmente poco a poco separando las marcas por archivos, traduciéndolos
-Me canso, dejo de traducirlos, así podré tenerlos agrupados
+Le pido a SWE de Windsurf que se dedique a pillarme todos los strings por traducir y que me genere un archivo traducible. Después le diré que además me lo traduzca a los idiomas posibles que el sistema sea capaz.
+Después de un par de dificultades lo consigue y le pido qué idiomas habla. Me sugiere estos:

English (AI-IA) - base file
Spanish (AI-IA) - already done
French (AI-IA)
German (AI-IA)
Italian (AI-IA)
Portuguese (AI-IA)
Dutch (AI-IA)
Russian (AI-IA)
Chinese (AI-IA)
Japanese (AI-IA)
Korean (AI-IA)
Arabic (AI-IA)
Hindi (AI-IA)
Catalan (AI-IA) - already done

I'll begin with French (fr.js):

+Segunda oleada

Created new language files:

Asturian (ast.js)
Aragonese (an.js)
Basque (eu.js)
Galician (gl.js)

+Polish (pl), Ukrainian (uk), and Hindi (hi)

+New Language Files Added:
Swedish (sv.js)
Norwegian (no.js)
Danish (da.js)
Finnish (fi.js)

+Bengali (bn) - The 7th most spoken language in the world with over 230 million speakers
 Vietnamese (vi) - The 16th most spoken language with about 85 million speakers

2025/06/30

Let's start with Romanian (ro):
Let's add Czech (cs) next:
Let's add Hungarian (hu) next:
Let's add Greek (el) next:
Let's add Bulgarian (bg) next:

+Y entonces lo consiguió: mostrar solo las traducciones
-desaparecieron de la lista los normales y se cambiaba de lugar
+Se mantiene el lugar correcto
+Se consigue mostrar solo traducciones y recuperar normales
-A la que se cambia de idioma dejan de funcionar los overlays
+Se instaura un botón para cambiar de idioma
- Solo actualiza la página con el idioma deseado, no reelige las opciones.

*Cambiamos a Visual Studio Code para probar Qodo (Codium Linux). No va. Continuo con Copilot Chat GPT 4.1

+Consigue un spinner pequeñito en la barra de búsqueda. Me parece bien.
+Edita el spinner y lo convierte en grande y ocupa toda la web. Conseguido. No es idéntico al que hay pero así ve la chapucilla. Está bien.
+Me peleo en local y con un poco de su ayuda los botones para organizarlos en una línea alrededor solo, tanto en normal como en móvil
-Intento que traduzca el ruteador (fail)

Le busco nombre, esto ya es otra cosa.
Nace OSMUtils

2025/07/07

+Se agregó un resumen de las características activas que puedes ver en el mapa. 
+Intenté hacer las capas externas en archivos separados, para apuntar al ÍNDICE DE CAPAS DE OSM LABS 
+-Muestra capas externas individualmente, pero no el título +-Muestra el título del grupo de capas pero no las capas en sí aunque estén activas. 
*Créditos de GitHub Copilot agotados. Regreso a Windsurf y SWE

2025/07/08

+Windsurf hizo un script en Python para analizar el imagery.xml de osmlabs. Durante 15 minutos intentó analizar las capas WMS. Finalmente obtuvo los datos (no incluidos en la aplicación). 
+Otro día Windsurf y SWE hicieron lo mismo con las capas TMS. 
+-Arreglar los botones de capas arriba y abajo y la opacidad resultó en la eliminación de los botones de arriba y abajo y la creación de un botón de Activación de capa. Ahora las capas activas se mantienen en la lista superior. 
*Modificando manualmente los datos TMS y WMS, ahora todas las capas están disponibles a través del buscador de capas.

```
