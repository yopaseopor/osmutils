#!/usr/bin/env python3
"""
OSM Taginfo Automatic Definitions Generator
Automatically generates definitions for OSM key=value pairs using specific value combinations
"""

import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import csv
import re
from datetime import datetime

class OSMAutoDefinitionsGenerator:
    def __init__(self, root):
        self.root = root
        self.root.title("OSM Automatic Definitions Generator")
        self.root.geometry("700x500")

        # Data storage
        self.csv_data = []
        self.definitions_data = []

        # Comprehensive translation dictionary for specific key=value pairs
        self.translations = self.load_comprehensive_translations()

        # Column name translations
        self.column_translations = self.load_column_translations()

        self.create_gui()

    def load_comprehensive_translations(self):
        """Load comprehensive translations for specific OSM key=value combinations"""
        return {
            # Buildings
            'building=yes': {
                'en': 'A building is a permanent construction with a roof and walls, used for various purposes',
                'ca': 'Un edifici és una construcció permanent amb sostre i parets, utilitzat per a diversos propòsits',
                'es': 'Un edificio es una construcción permanente con techo y paredes, utilizado para diversos propósitos'
            },
            'building=house': {
                'en': 'A house is a residential building designed for human habitation and living',
                'ca': 'Una casa és un edifici residencial dissenyat per a l\'habitatge i vida humana',
                'es': 'Una casa es un edificio residencial diseñado para habitación y vida humana'
            },
            'building=residential': {
                'en': 'A residential building is a structure designed specifically for housing people and families',
                'ca': 'Un edifici residencial és una estructura dissenyada específicament per allotjar persones i famílies',
                'es': 'Un edificio residencial es una estructura diseñada específicamente para alojar personas y familias'
            },
            'building=commercial': {
                'en': 'A commercial building is a structure used for business activities, offices, and retail operations',
                'ca': 'Un edifici comercial és una estructura utilitzada per a activitats empresarials, oficines i operacions comercials',
                'es': 'Un edificio comercial es una estructura utilizada para actividades empresariales, oficinas y operaciones comerciales'
            },
            'building=industrial': {
                'en': 'An industrial building is a facility designed for manufacturing, production, and industrial operations',
                'ca': 'Un edifici industrial és una instal·lació dissenyada per a la fabricació, producció i operacions industrials',
                'es': 'Un edificio industrial es una instalación diseñada para fabricación, producción y operaciones industriales'
            },
            'building=school': {
                'en': 'A school building is an educational facility where students learn and study various subjects',
                'ca': 'Un edifici escolar és una instal·lació educativa on els estudiants aprenen i estudien diverses matèries',
                'es': 'Un edificio escolar es una instalación educativa donde los estudiantes aprenden y estudien diversas materias'
            },
            'building=office': {
                'en': 'An office building is a commercial structure designed for business administration and office work',
                'ca': 'Un edifici d\'oficines és una estructura comercial dissenyada per a l\'administració empresarial i treball d\'oficina',
                'es': 'Un edificio de oficinas es una estructura comercial diseñada para administración empresarial y trabajo de oficina'
            },
            'building=retail': {
                'en': 'A retail building is a commercial structure used for selling goods and services to customers',
                'ca': 'Un edifici comercial és una estructura comercial utilitzada per vendre béns i serveis als clients',
                'es': 'Un edificio comercial es una estructura comercial utilizada para vender bienes y servicios a los clientes'
            },
            'building=apartments': {
                'en': 'An apartments building is a residential structure containing multiple housing units for different families',
                'ca': 'Un edifici d\'apartaments és una estructura residencial que conté múltiples unitats d\'habitatge per a diferents famílies',
                'es': 'Un edificio de apartamentos es una estructura residencial que contiene múltiples unidades de vivienda para diferentes familias'
            },
            'building=hotel': {
                'en': 'A hotel building provides temporary accommodation and lodging services for travelers and visitors',
                'ca': 'Un edifici d\'hotel proporciona allotjament temporal i serveis d\'hostaleria per a viatgers i visitants',
                'es': 'Un edificio de hotel proporciona alojamiento temporal y servicios de hospedaje para viajeros y visitantes'
            },
            'building=hospital': {
                'en': 'A hospital building is a medical facility providing healthcare, treatment, and medical services',
                'ca': 'Un edifici d\'hospital és una instal·lació mèdica que proporciona atenció sanitària, tractament i serveis mèdics',
                'es': 'Un edificio de hospital es una instalación médica que proporciona atención sanitaria, tratamiento y servicios médicos'
            },

            # Highways
            'highway=residential': {
                'en': 'A residential road is a street or road located within a residential area, designed for local traffic',
                'ca': 'Una carretera residencial és un carrer o carretera situat dins d\'una zona residencial, dissenyat per al trànsit local',
                'es': 'Una carretera residencial es una calle o carretera situada dentro de un área residencial, diseñada para tráfico local'
            },
            'highway=service': {
                'en': 'A service road provides access to buildings, facilities, and properties, often for delivery or maintenance',
                'ca': 'Un camí de servei proporciona accés a edificis, instal·lacions i propietats, sovint per a lliurament o manteniment',
                'es': 'Un camino de servicio proporciona acceso a edificios, instalaciones y propiedades, a menudo para entrega o mantenimiento'
            },
            'highway=footway': {
                'en': 'A footway is a path or walkway designated exclusively for pedestrian use, where vehicles are not allowed',
                'ca': 'Un camí per a vianants és un camí o passeig designat exclusivament per a l\'ús de vianants, on els vehicles no estan permesos',
                'es': 'Un camino peatonal es un camino o paseo designado exclusivamente para uso peatonal, donde los vehículos no están permitidos'
            },
            'highway=track': {
                'en': 'A track is a road or path, often unpaved, used for vehicular or pedestrian access in rural or off-road areas',
                'ca': 'Una pista és una carretera o camí, sovint sense pavimentar, utilitzat per a l\'accés vehicular o de vianants en zones rurals o fora de carretera',
                'es': 'Una pista es una carretera o camino, a menudo sin pavimentar, utilizado para acceso vehicular o peatonal en áreas rurales o todoterreno'
            },
            'highway=primary': {
                'en': 'A primary road is a major highway connecting important destinations, forming the primary road network',
                'ca': 'Una carretera principal és una autopista important que connecta destinacions importants, formant la xarxa viària principal',
                'es': 'Una carretera principal es una autopista importante que conecta destinos importantes, formando la red vial principal'
            },
            'highway=secondary': {
                'en': 'A secondary road connects smaller towns, villages, and regional destinations, supporting local transportation',
                'ca': 'Una carretera secundària connecta pobles més petits, vil·les i destinacions regionals, donant suport al transport local',
                'es': 'Una carretera secundaria conecta pueblos más pequeños, villas y destinos regionales, apoyando el transporte local'
            },
            'highway=tertiary': {
                'en': 'A tertiary road serves local destinations and communities, providing access to residential and commercial areas',
                'ca': 'Una carretera terciària serveix destinacions i comunitats locals, proporcionant accés a zones residencials i comercials',
                'es': 'Una carretera terciaria sirve destinos y comunidades locales, proporcionando acceso a áreas residenciales y comerciales'
            },
            'highway=path': {
                'en': 'A path is a generic trail or walkway for pedestrians, often found in parks, forests, or rural areas',
                'ca': 'Un camí és un sender o passeig genèric per a vianants, sovint trobat en parcs, boscos o zones rurals',
                'es': 'Un camino es un sendero o paseo genérico para peatones, a menudo encontrado en parques, bosques o áreas rurales'
            },
            'highway=cycleway': {
                'en': 'A cycleway is a road or path specifically designated for bicycle traffic, separate from motor vehicle lanes',
                'ca': 'Un carril bici és una carretera o camí específicament designat per al trànsit de bicicletes, separat dels carrils de vehicles motoritzats',
                'es': 'Un carril bici es una carretera o camino específicamente designado para tráfico de bicicletas, separado de los carriles de vehículos motorizados'
            },
            'highway=unclassified': {
                'en': 'An unclassified road is a minor road that has not been assigned a specific functional classification',
                'ca': 'Una carretera sense classificar és una carretera menor que no ha rebut una classificació funcional específica',
                'es': 'Una carretera sin clasificar es una carretera menor que no ha recibido una clasificación funcional específica'
            },

            # Natural features
            'natural=tree': {
                'en': 'A tree is a perennial woody plant with a trunk, branches, and leaves that grows naturally in the environment',
                'ca': 'Un arbre és una planta llenyosa perenne amb tronc, branques i fulles que creix naturalment en el medi ambient',
                'es': 'Un árbol es una planta leñosa perenne con tronco, ramas y hojas que crece naturalmente en el medio ambiente'
            },
            'natural=water': {
                'en': 'A water body is any significant accumulation of water, such as a lake, river, stream, or ocean',
                'ca': 'Un cos d\'aigua és qualsevol acumulació significativa d\'aigua, com un llac, riu, rierol o oceà',
                'es': 'Un cuerpo de agua es cualquier acumulación significativa de agua, como un lago, río, arroyo u océano'
            },
            'natural=wood': {
                'en': 'A wood is a forested area covered with trees and woody vegetation, typically larger than a grove',
                'ca': 'Un bosc és una zona forestal coberta d\'arbres i vegetació llenyosa, típicament més gran qu\'una arbreda',
                'es': 'Un bosque es un área forestal cubierta de árboles y vegetación leñosa, típicament más grande que una arboleda'
            },
            'natural=grassland': {
                'en': 'A grassland is an area covered predominantly with grasses and herbaceous plants, with few or no trees',
                'ca': 'Una prada és una zona coberta predominantment d\'herbes i plantes herbàcies, amb pocs o cap arbre',
                'es': 'Un pastizal es un área cubierta predominantemente de hierbas y plantas herbáceas, con pocos o ningún árbol'
            },

            # Surface types
            'surface=asphalt': {
                'en': 'Asphalt is a sticky, black, highly viscous petroleum-based material commonly used for road surfaces',
                'ca': 'L\'asfalt és un material viscós negre enganxós basat en petroli comunament utilitzat per a superfícies de carreteres',
                'es': 'El asfalto es un material viscoso negro pegajoso basado en petróleo comúnmente utilizado para superficies de carreteras'
            },
            'surface=concrete': {
                'en': 'Concrete is a hard, durable composite material made from cement, aggregate, and water, used for various surfaces',
                'ca': 'El formigó és un material compost dur i durador fet de ciment, àrids i aigua, utilitzat per a diverses superfícies',
                'es': 'El hormigón es un material compuesto duro y duradero hecho de cemento, áridos y agua, utilizado para diversas superficies'
            },
            'surface=paved': {
                'en': 'A paved surface is covered with artificial materials such as stone, brick, concrete, or asphalt',
                'ca': 'Una superfície pavimentada està coberta de materials artificials com pedra, maó, formigó o asfalt',
                'es': 'Una superficie pavimentada está cubierta de materiales artificiales como piedra, ladrillo, hormigón o asfalto'
            },
            'surface=unpaved': {
                'en': 'An unpaved surface is made of natural materials like gravel, dirt, or grass, without artificial paving',
                'ca': 'Una superfície sense pavimentar està feta de materials naturals com grava, terra o herba, sense paviment artificial',
                'es': 'Una superficie sin pavimentar está hecha de materiales naturales como grava, tierra o hierba, sin pavimento artificial'
            },
            'surface=grass': {
                'en': 'A grass surface is covered with living grass and vegetation, commonly found in parks and recreational areas',
                'ca': 'Una superfície d\'herba està coberta d\'herba viva i vegetació, comunament trobada en parcs i zones recreatives',
                'es': 'Una superficie de hierba está cubierta de hierba viva y vegetación, comúnmente encontrada en parques y áreas recreativas'
            },

            # Landuse
            'landuse=residential': {
                'en': 'Residential land use designates areas primarily intended for housing, living, and residential development',
                'ca': 'L\'ús residencial del sòl designa zones destinades principalment a l\'habitatge, vida i desenvolupament residencial',
                'es': 'El uso residencial del suelo designa áreas destinadas principalmente a vivienda, vida y desarrollo residencial'
            },
            'landuse=commercial': {
                'en': 'Commercial land use designates areas for business activities, retail, offices, and commercial development',
                'ca': 'L\'ús comercial del sòl designa zones per a activitats empresarials, comerç, oficines i desenvolupament comercial',
                'es': 'El uso comercial del suelo designa áreas para actividades empresariales, comercio, oficinas y desarrollo comercial'
            },
            'landuse=industrial': {
                'en': 'Industrial land use designates areas for manufacturing, production, warehousing, and industrial activities',
                'ca': 'L\'ús industrial del sòl designa zones per a la fabricació, producció, emmagatzematge i activitats industrials',
                'es': 'El uso industrial del suelo designa áreas para fabricación, producción, almacenamiento y actividades industriales'
            },
            'landuse=forest': {
                'en': 'Forest land use designates areas covered with trees and managed for forestry, timber, and conservation',
                'ca': 'L\'ús forestal del sòl designa zones cobertes d\'arbres i gestionades per a silvicultura, fusta i conservació',
                'es': 'El uso forestal del suelo designa áreas cubiertas de árboles y gestionadas para silvicultura, madera y conservación'
            },

            # Amenities
            'amenity=school': {
                'en': 'A school is an educational institution where students of various ages learn academic and practical subjects',
                'ca': 'Una escola és una institució educativa on estudiants de diverses edats aprenen assignatures acadèmiques i pràctiques',
                'es': 'Una escuela es una institución educativa donde estudiantes de varias edades aprenden materias académicas y prácticas'
            },
            'amenity=hospital': {
                'en': 'A hospital is a medical facility providing comprehensive healthcare, emergency treatment, and specialized medical services',
                'ca': 'Un hospital és una instal·lació mèdica que proporciona atenció sanitària integral, tractament d\'emergències i serveis mèdics especialitzats',
                'es': 'Un hospital es una instalación médica que proporciona atención sanitaria integral, tratamiento de emergencias y servicios médicos especializados'
            },
            'amenity=restaurant': {
                'en': 'A restaurant is a business establishment where people pay to eat prepared meals and drinks in a dining environment',
                'ca': 'Un restaurant és un establiment empresarial on les persones paguen per menjar àpats preparats i begudes en un ambient de menjador',
                'es': 'Un restaurante es un establecimiento empresarial donde las personas pagan por comer comidas preparadas y bebidas en un ambiente de comedor'
            },
            'amenity=cafe': {
                'en': 'A cafe is a small restaurant or coffee shop serving light meals, snacks, coffee, and other beverages',
                'ca': 'Un cafè és un petit restaurant o cafeteria que serveix àpats lleugers, aperitius, cafè i altres begudes',
                'es': 'Un café es un pequeño restaurante o cafetería que sirve comidas ligeras, aperitivos, café y otras bebidas'
            },
            'amenity=bank': {
                'en': 'A bank is a financial institution that provides services such as deposits, loans, investments, and financial advice',
                'ca': 'Un banc és una institució financera que proporciona serveis com dipòsits, préstecs, inversions i assessorament financer',
                'es': 'Un banco es una institución financiera que proporciona servicios como depósitos, préstamos, inversiones y asesoramiento financiero'
            },
            'amenity=pharmacy': {
                'en': 'A pharmacy is a healthcare facility where medicines are dispensed and pharmaceutical advice is provided',
                'ca': 'Una farmàcia és una instal·lació sanitària on es dispenseu medicaments i s\'ofereix assessorament farmacèutic',
                'es': 'Una farmacia es una instalación sanitaria donde se dispensan medicamentos y se ofrece asesoramiento farmacéutico'
            },
            'amenity=parking': {
                'en': 'A parking facility provides designated spaces for vehicles to be parked, either for short-term or long-term use',
                'ca': 'Una instal·lació d\'aparcament proporciona espais designats perquè els vehicles s\'aparcin, ja sigui per ús a curt o llarg termini',
                'es': 'Una instalación de aparcamiento proporciona espacios designados para que los vehículos se aparquen, ya sea para uso a corto o largo plazo'
            },

            # Source data
            'source=microsoft/BuildingFootprints': {
                'en': 'Building footprint data sourced from Microsoft Building Footprints dataset, used for mapping building outlines',
                'ca': 'Dades d\'empremta d\'edifici obtingudes del conjunt de dades Microsoft Building Footprints, utilitzades per cartografiar contorns d\'edificis',
                'es': 'Datos de huella de edificio obtenidos del conjunto de datos Microsoft Building Footprints, utilizados para mapear contornos de edificios'
            }
        }

    def load_column_translations(self):
        """Load translations for column names"""
        return {
            'key': {'ca': 'clau', 'es': 'clave'},
            'value': {'ca': 'valor', 'es': 'valor'},
            'tag': {'ca': 'etiqueta', 'es': 'etiqueta'},
            'definition_en': {'ca': 'definicio_anglesa', 'es': 'definicion_inglesa'},
            'definition_ca': {'ca': 'definicio_catalana', 'es': 'definicion_catalana'},
            'definition_es': {'ca': 'definicio_castellana', 'es': 'definicion_espanola'},
            'count_all': {'ca': 'nombre_total', 'es': 'numero_total'},
            'count_all_fraction': {'ca': 'fraccio_total', 'es': 'fraccion_total'},
            'count_nodes': {'ca': 'nombre_nodes', 'es': 'numero_nodos'},
            'count_nodes_fraction': {'ca': 'fraccio_nodes', 'es': 'fraccion_nodos'},
            'count_ways': {'ca': 'nombre_ways', 'es': 'numero_ways'},
            'count_ways_fraction': {'ca': 'fraccio_ways', 'es': 'fraccion_ways'},
            'count_relations': {'ca': 'nombre_relacions', 'es': 'numero_relaciones'},
            'count_relations_fraction': {'ca': 'fraccio_relacions', 'es': 'fraccion_relaciones'},
            'in_wiki': {'ca': 'en_wiki', 'es': 'en_wiki'},
            'projects': {'ca': 'projectes', 'es': 'proyectos'}
        }

    def generate_definition(self, key, value):
        """Generate definitions for a specific key=value pair"""
        tag = f"{key}={value}"

        # Check if we have a specific translation for this exact combination
        if tag in self.translations:
            return self.translations[tag]

        # Generic fallback definitions
        return {
            'en': f"An OSM {key} tag with value '{value}' used to describe {key} features",
            'ca': f"Una etiqueta OSM {key} amb valor '{value}' utilitzada per descriure característiques {key}",
            'es': f"Una etiqueta OSM {key} con valor '{value}' utilizada para describir características {key}"
        }

    def create_gui(self):
        # Main frame
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

        # Configure grid weights
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)

        # Language selection
        lang_frame = ttk.LabelFrame(main_frame, text="Output Language", padding="5")
        lang_frame.grid(row=0, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=10)

        self.output_language = tk.StringVar(value="ca")
        ttk.Radiobutton(lang_frame, text="Catalan", variable=self.output_language, value="ca").grid(row=0, column=0, padx=10)
        ttk.Radiobutton(lang_frame, text="Spanish", variable=self.output_language, value="es").grid(row=0, column=1, padx=10)
        ttk.Radiobutton(lang_frame, text="English", variable=self.output_language, value="en").grid(row=0, column=2, padx=10)

        # File selection
        file_frame = ttk.LabelFrame(main_frame, text="Input File", padding="5")
        file_frame.grid(row=1, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=10)

        ttk.Label(file_frame, text="Taginfo CSV File:").grid(row=0, column=0, sticky=tk.W)
        self.input_path = tk.StringVar()
        self.input_entry = ttk.Entry(file_frame, textvariable=self.input_path, width=50)
        self.input_entry.grid(row=0, column=1, sticky=(tk.W, tk.E), padx=(5, 0))

        browse_btn = ttk.Button(file_frame, text="Browse...", command=self.browse_input_file)
        browse_btn.grid(row=0, column=2, sticky=tk.W, padx=(5, 0))

        # Settings
        settings_frame = ttk.LabelFrame(main_frame, text="Generation Settings", padding="5")
        settings_frame.grid(row=2, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=10)

        self.include_wiki_only = tk.BooleanVar(value=False)
        wiki_check = ttk.Checkbutton(settings_frame, text="Only include tags documented in OSM Wiki",
                                   variable=self.include_wiki_only)
        wiki_check.grid(row=0, column=0, columnspan=2, sticky=tk.W)

        self.min_count = tk.IntVar(value=1000)
        ttk.Label(settings_frame, text="Minimum count:").grid(row=1, column=0, sticky=tk.W)
        count_spin = ttk.Spinbox(settings_frame, from_=1, to=1000000, width=10,
                                textvariable=self.min_count)
        count_spin.grid(row=1, column=1, sticky=tk.W)

        # Progress section
        progress_frame = ttk.LabelFrame(main_frame, text="Progress", padding="5")
        progress_frame.grid(row=3, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=10)

        self.progress_var = tk.DoubleVar()
        self.progress_bar = ttk.Progressbar(progress_frame, variable=self.progress_var, maximum=100)
        self.progress_bar.grid(row=0, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=5)

        self.status_var = tk.StringVar(value="Ready")
        status_label = ttk.Label(progress_frame, textvariable=self.status_var)
        status_label.grid(row=1, column=0, sticky=tk.W)

        self.stats_var = tk.StringVar(value="Total: 0 | Processed: 0 | Generated: 0 | Skipped: 0")
        stats_label = ttk.Label(progress_frame, textvariable=self.stats_var)
        stats_label.grid(row=1, column=1, sticky=tk.W)

        # Control buttons
        btn_frame = ttk.Frame(main_frame)
        btn_frame.grid(row=4, column=0, columnspan=2, pady=10)

        self.load_btn = ttk.Button(btn_frame, text="Load & Generate All", command=self.load_and_generate_all)
        self.load_btn.grid(row=0, column=0, padx=5)

        self.export_btn = ttk.Button(btn_frame, text="Export CSV", command=self.export_csv)
        self.export_btn.grid(row=0, column=1, padx=5)
        self.export_btn.config(state=tk.DISABLED)

        # Preview area
        preview_frame = ttk.LabelFrame(main_frame, text="Preview (first 10)", padding="5")
        preview_frame.grid(row=5, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S), pady=10)

        self.preview_text = tk.Text(preview_frame, height=8, width=80, wrap=tk.WORD)
        preview_scroll = ttk.Scrollbar(preview_frame, orient=tk.VERTICAL, command=self.preview_text.yview)
        self.preview_text.configure(yscrollcommand=preview_scroll.set)

        self.preview_text.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        preview_scroll.grid(row=0, column=1, sticky=(tk.N, tk.S))

        preview_frame.columnconfigure(0, weight=1)
        preview_frame.rowconfigure(0, weight=1)

        # Menu bar
        menubar = tk.Menu(self.root)
        self.root.config(menu=menubar)

        file_menu = tk.Menu(menubar, tearoff=0)
        menubar.add_cascade(label="File", menu=file_menu)
        file_menu.add_command(label="Exit", command=self.root.quit)

        help_menu = tk.Menu(menubar, tearoff=0)
        menubar.add_cascade(label="Help", menu=help_menu)
        help_menu.add_command(label="About", command=self.show_about)

    def browse_input_file(self):
        filename = filedialog.askopenfilename(
            title="Select Taginfo CSV file",
            filetypes=[("CSV files", "*.csv"), ("All files", "*.*")]
        )
        if filename:
            self.input_path.set(filename)

    def load_and_generate_all(self):
        if not self.input_path.get():
            messagebox.showerror("Error", "Please select an input CSV file")
            return

        try:
            # Load CSV data
            with open(self.input_path.get(), 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                self.csv_data = list(reader)

            # Filter data based on settings - only include rows with valid key=value pairs
            filtered_data = []
            skipped_count = 0

            for row in self.csv_data:
                key = row.get('key', '').strip()
                value = row.get('value', '').strip()

                # Skip rows without both key and value, or with null/empty values
                if not key or not value or value.lower() in ['null', 'nil', 'none', '', 'n/a']:
                    skipped_count += 1
                    continue

                # Apply additional filters
                if self.include_wiki_only.get() and row.get('in_wiki') != '1':
                    skipped_count += 1
                    continue

                count_all = int(row.get('count_all', 0))
                if count_all < self.min_count.get():
                    skipped_count += 1
                    continue

                filtered_data.append(row)

            self.csv_data = filtered_data

            # Generate all definitions
            self.definitions_data = []
            total = len(self.csv_data)

            for i, row in enumerate(self.csv_data):
                key = row.get('key', '').strip()
                value = row.get('value', '').strip()

                # Generate definition for this specific key=value pair
                definitions = self.generate_definition(key, value)

                definition_entry = {
                    'key': key,
                    'value': value,
                    'tag': f"{key}={value}",
                    'definition_en': definitions['en'],
                    'definition_ca': definitions['ca'],
                    'definition_es': definitions['es'],
                    # Keep original numeric columns as-is (no translation of numbers)
                    'count_all': row.get('count_all', '0'),
                    'count_all_fraction': row.get('count_all_fraction', '0'),
                    'count_nodes': row.get('count_nodes', '0'),
                    'count_nodes_fraction': row.get('count_nodes_fraction', '0'),
                    'count_ways': row.get('count_ways', '0'),
                    'count_ways_fraction': row.get('count_ways_fraction', '0'),
                    'count_relations': row.get('count_relations', '0'),
                    'count_relations_fraction': row.get('count_relations_fraction', '0'),
                    # Translate categorical values
                    'in_wiki': self.translate_wiki_value(row.get('in_wiki', '0')),
                    'projects': row.get('projects', '0')
                }

                self.definitions_data.append(definition_entry)

                # Update progress
                progress = ((i + 1) / total) * 100
                self.progress_var.set(progress)
                self.status_var.set(f"Generating definitions... ({i + 1}/{total})")
                self.root.update()

            # Update stats
            self.update_stats(skipped_count)

            # Show preview
            self.show_preview()

            messagebox.showinfo("Success",
                              f"Generated definitions for {len(self.definitions_data)} key=value pairs\n"
                              f"Skipped {skipped_count} invalid or filtered entries")

            self.export_btn.config(state=tk.NORMAL)

        except Exception as e:
            messagebox.showerror("Error", f"Failed to process CSV file: {e}")

    def translate_wiki_value(self, value):
        """Translate wiki values: 1->Yes/Sí, 0->No/No"""
        if value == '1':
            return 'Yes'
        elif value == '0':
            return 'No'
        else:
            return value

    def update_stats(self, skipped_count=0):
        total = len(self.csv_data) + skipped_count
        generated = len(self.definitions_data)

        self.stats_var.set(f"Total: {total} | Processed: {len(self.csv_data)} | Generated: {generated} | Skipped: {skipped_count}")

    def show_preview(self):
        self.preview_text.delete(1.0, tk.END)

        if not self.definitions_data:
            return

        # Show first 10 entries
        for i, entry in enumerate(self.definitions_data[:10]):
            tag = entry['tag']
            en_def = entry['definition_en'][:80] + "..." if len(entry['definition_en']) > 80 else entry['definition_en']

            self.preview_text.insert(tk.END, f"{i+1}. {tag}\n")
            self.preview_text.insert(tk.END, f"   Definition: {en_def}\n")
            self.preview_text.insert(tk.END, f"   Wiki: {entry['in_wiki']}\n\n")

    def export_csv(self):
        if not self.definitions_data:
            messagebox.showwarning("Warning", "No definitions to export")
            return

        filename = filedialog.asksaveasfilename(
            defaultextension=".csv",
            filetypes=[("CSV files", "*.csv"), ("All files", "*.*")]
        )

        if not filename:
            return

        try:
            with open(filename, 'w', newline='', encoding='utf-8') as f:
                # Get selected language for column headers
                lang = self.output_language.get()

                # Translate fieldnames
                original_fieldnames = [
                    'key', 'value', 'tag',
                    'definition_en', 'definition_ca', 'definition_es',
                    'count_all', 'count_all_fraction',
                    'count_nodes', 'count_nodes_fraction',
                    'count_ways', 'count_ways_fraction',
                    'count_relations', 'count_relations_fraction',
                    'in_wiki', 'projects'
                ]

                translated_fieldnames = []
                for field in original_fieldnames:
                    if field in self.column_translations and lang in self.column_translations[field]:
                        translated_fieldnames.append(self.column_translations[field][lang])
                    else:
                        translated_fieldnames.append(field)

                writer = csv.DictWriter(f, fieldnames=translated_fieldnames)
                writer.writeheader()

                # Write data with translated fieldnames
                for entry in self.definitions_data:
                    translated_entry = {}
                    for original_field, translated_field in zip(original_fieldnames, translated_fieldnames):
                        translated_entry[translated_field] = entry.get(original_field, '')

                    writer.writerow(translated_entry)

            messagebox.showinfo("Success",
                              f"Exported {len(self.definitions_data)} definitions to:\n{filename}")

        except Exception as e:
            messagebox.showerror("Error", f"Failed to export CSV: {e}")

    def show_about(self):
        messagebox.showinfo("About",
                          "OSM Automatic Definitions Generator\n\n"
                          "Automatically generates specific definitions for OSM key=value pairs\n"
                          "using comprehensive translation database.\n\n"
                          "Features:\n"
                          "- Load Taginfo CSV files\n"
                          "- Specific key=value definitions\n"
                          "- Multi-language support (EN/CA/ES)\n"
                          "- Translated column headers\n"
                          "- Filtering options\n"
                          "- Batch processing\n"
                          "- CSV export")

def main():
    root = tk.Tk()
    app = OSMAutoDefinitionsGenerator(root)
    root.mainloop()

if __name__ == "__main__":
    main()
