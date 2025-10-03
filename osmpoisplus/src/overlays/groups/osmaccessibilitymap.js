import { getTranslation } from '../../i18n/index.js';

export function osmaccessibilitymapOverlays() {
    return [
        {
            group: getTranslation('accessibility'),
            title: getTranslation('wheelchair_yes'),
            query: '(node[wheelchair=yes][shop]({{bbox}});node[wheelchair=yes][amenity]({{bbox}});node[wheelchair=yes][office]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/wheelchair_yes_shop.svg',
            iconStyle: 'background-color:#714601',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/wheelchair_yes_shop.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('wheelchair_no'),
            query: '(node[wheelchair=no][shop]({{bbox}});node[wheelchair=no][amenity]({{bbox}});node[wheelchair=no][office]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/wheelchair_no_shop.svg',
            iconStyle: 'background-color:#d40000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/wheelchair_no_shop.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('wheelchair_limited'),
            query: '(node[wheelchair=limited][shop]({{bbox}});node[wheelchair=limited][amenity]({{bbox}});node[wheelchair=limited][office]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/wheelchair_limited_shop.svg',
            iconStyle: 'background-color:#ff8c00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/wheelchair_limited_shop.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('wheelchair_only'),
            query: '(node[wheelchair=only][shop]({{bbox}});node[wheelchair=only][amenity]({{bbox}});node[wheelchair=only][office]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/wheelchair_only_shop.svg',
            iconStyle: 'background-color:#006400',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/wheelchair_only_shop.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('kerb_lowered'),
            query: '(way[kerb=lowered]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/kerb_lowered.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/kerb_lowered.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('kerb_raised'),
            query: '(way[kerb=raised]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/kerb_raised.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/kerb_raised.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('kerb_flush'),
            query: '(way[kerb=flush]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/kerb_flush.svg',
            iconStyle: 'background-color:#ffff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/kerb_flush.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('kerb_no'),
            query: '(way[kerb=no]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/kerb_no.svg',
            iconStyle: 'background-color:#0000ff',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/kerb_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('incline'),
            query: '(way[incline]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/incline.svg',
            iconStyle: 'background-color:#800080',
            scale: 0.25,
            style: function (feature) {
                var incline = feature.get('incline') || '';
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/incline.svg'
                    }),
                    text: new ol.style.Text({
                        text: incline,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('toilets_wheelchair'),
            query: '(node[amenity=toilets][wheelchair=yes]({{bbox}});node[amenity=toilets][wheelchair=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/toilets_wheelchair_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/toilets_wheelchair_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('toilets_wheelchair_no'),
            query: '(node[amenity=toilets][wheelchair=no]({{bbox}});node[amenity=toilets][wheelchair=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/toilets_wheelchair_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/toilets_wheelchair_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('parking_wheelchair'),
            query: '(node[amenity=parking][wheelchair=yes]({{bbox}});node[amenity=parking][wheelchair=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/parking_wheelchair_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/parking_wheelchair_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('parking_wheelchair_no'),
            query: '(node[amenity=parking][wheelchair=no]({{bbox}});node[amenity=parking][wheelchair=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/parking_wheelchair_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/parking_wheelchair_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('entrance_wheelchair'),
            query: '(node[entrance][wheelchair=yes]({{bbox}});node[entrance][wheelchair=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/entrance_wheelchair_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/entrance_wheelchair_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('entrance_wheelchair_no'),
            query: '(node[entrance][wheelchair=no]({{bbox}});node[entrance][wheelchair=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/entrance_wheelchair_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/entrance_wheelchair_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('entrance_wheelchair_limited'),
            query: '(node[entrance][wheelchair=limited]({{bbox}});node[entrance][wheelchair=limited]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/entrance_wheelchair_limited.svg',
            iconStyle: 'background-color:#ff8c00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/entrance_wheelchair_limited.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('tactile_paving_yes'),
            query: '(node[tactile_paving=yes]({{bbox}});way[tactile_paving=yes]({{bbox}});relation[tactile_paving=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/tactile_paving_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/tactile_paving_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('tactile_paving_no'),
            query: '(node[tactile_paving=no]({{bbox}});way[tactile_paving=no]({{bbox}});relation[tactile_paving=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/tactile_paving_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/tactile_paving_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('hearing_loop_yes'),
            query: '(node[hearing_loop=yes]({{bbox}});way[hearing_loop=yes]({{bbox}});relation[hearing_loop=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/hearing_loop_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/hearing_loop_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('hearing_loop_no'),
            query: '(node[hearing_loop=no]({{bbox}});way[hearing_loop=no]({{bbox}});relation[hearing_loop=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/hearing_loop_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/hearing_loop_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('disabled_parking'),
            query: '(node[amenity=parking][disabled=yes]({{bbox}});node[amenity=parking][disabled=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/disabled_parking.svg',
            iconStyle: 'background-color:#0000ff',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/disabled_parking.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('disabled_description'),
            query: '(node[disabled:description]({{bbox}});way[disabled:description]({{bbox}});relation[disabled:description]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/disabled_description.svg',
            iconStyle: 'background-color:#800080',
            scale: 0.25,
            style: function (feature) {
                var description = feature.get('disabled:description') || '';
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/disabled_description.svg'
                    }),
                    text: new ol.style.Text({
                        text: description,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('wheelchair_description'),
            query: '(node[wheelchair:description]({{bbox}});way[wheelchair:description]({{bbox}});relation[wheelchair:description]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/wheelchair_description.svg',
            iconStyle: 'background-color:#008080',
            scale: 0.25,
            style: function (feature) {
                var description = feature.get('wheelchair:description') || '';
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/wheelchair_description.svg'
                    }),
                    text: new ol.style.Text({
                        text: description,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('steps_contracted'),
            query: '(node[steps:contracted]({{bbox}});way[steps:contracted]({{bbox}});relation[steps:contracted]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/steps_contracted.svg',
            iconStyle: 'background-color:#ffa500',
            scale: 0.25,
            style: function (feature) {
                var contracted = feature.get('steps:contracted') || '';
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/steps_contracted.svg'
                    }),
                    text: new ol.style.Text({
                        text: contracted,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_island'),
            query: '(node[crossing:island=yes]({{bbox}});way[crossing:island=yes]({{bbox}});relation[crossing:island=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_island.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_island.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_island_no'),
            query: '(node[crossing:island=no]({{bbox}});way[crossing:island=no]({{bbox}});relation[crossing:island=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_island_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_island_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_calming_island'),
            query: '(node[traffic_calming=island]({{bbox}});way[traffic_calming=island]({{bbox}});relation[traffic_calming=island]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_calming_island.svg',
            iconStyle: 'background-color:#ffff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_calming_island.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_sound'),
            query: '(node[highway=traffic_signals][traffic_signals:sound=yes]({{bbox}});way[highway=traffic_signals][traffic_signals:sound=yes]({{bbox}});relation[highway=traffic_signals][traffic_signals:sound=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_sound.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_sound.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_sound_no'),
            query: '(node[highway=traffic_signals][traffic_signals:sound=no]({{bbox}});way[highway=traffic_signals][traffic_signals:sound=no]({{bbox}});relation[highway=traffic_signals][traffic_signals:sound=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_sound_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_sound_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_vibration'),
            query: '(node[highway=traffic_signals][traffic_signals:vibration=yes]({{bbox}});way[highway=traffic_signals][traffic_signals:vibration=yes]({{bbox}});relation[highway=traffic_signals][traffic_signals:vibration=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_vibration.svg',
            iconStyle: 'background-color:#800080',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_vibration.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_vibration_no'),
            query: '(node[highway=traffic_signals][traffic_signals:vibration=no]({{bbox}});way[highway=traffic_signals][traffic_signals:vibration=no]({{bbox}});relation[highway=traffic_signals][traffic_signals:vibration=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_vibration_no.svg',
            iconStyle: 'background-color:#ffa500',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_vibration_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_arrow'),
            query: '(node[highway=traffic_signals][traffic_signals:arrow=yes]({{bbox}});way[highway=traffic_signals][traffic_signals:arrow=yes]({{bbox}});relation[highway=traffic_signals][traffic_signals:arrow=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_arrow.svg',
            iconStyle: 'background-color:#00ffff',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_arrow.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_arrow_no'),
            query: '(node[highway=traffic_signals][traffic_signals:arrow=no]({{bbox}});way[highway=traffic_signals][traffic_signals:arrow=no]({{bbox}});relation[highway=traffic_signals][traffic_signals:arrow=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_arrow_no.svg',
            iconStyle: 'background-color:#ff69b4',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_arrow_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_minimap'),
            query: '(node[highway=traffic_signals][traffic_signals:minimap=yes]({{bbox}});way[highway=traffic_signals][traffic_signals:minimap=yes]({{bbox}});relation[highway=traffic_signals][traffic_signals:minimap=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_minimap.svg',
            iconStyle: 'background-color:#32cd32',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_minimap.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('traffic_signals_minimap_no'),
            query: '(node[highway=traffic_signals][traffic_signals:minimap=no]({{bbox}});way[highway=traffic_signals][traffic_signals:minimap=no]({{bbox}});relation[highway=traffic_signals][traffic_signals:minimap=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/traffic_signals_minimap_no.svg',
            iconStyle: 'background-color:#dc143c',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/traffic_signals_minimap_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_bell'),
            query: '(node[highway=crossing][crossing:bell=yes]({{bbox}});way[highway=crossing][crossing:bell=yes]({{bbox}});relation[highway=crossing][crossing:bell=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_bell.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_bell.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_bell_no'),
            query: '(node[highway=crossing][crossing:bell=no]({{bbox}});way[highway=crossing][crossing:bell=no]({{bbox}});relation[highway=crossing][crossing:bell=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_bell_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_bell_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_light'),
            query: '(node[highway=crossing][crossing:light=yes]({{bbox}});way[highway=crossing][crossing:light=yes]({{bbox}});relation[highway=crossing][crossing:light=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_light.svg',
            iconStyle: 'background-color:#ffff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_light.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_light_no'),
            query: '(node[highway=crossing][crossing:light=no]({{bbox}});way[highway=crossing][crossing:light=no]({{bbox}});relation[highway=crossing][crossing:light=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_light_no.svg',
            iconStyle: 'background-color:#800080',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_light_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_markings'),
            query: '(node[highway=crossing][crossing:markings=yes]({{bbox}});way[highway=crossing][crossing:markings=yes]({{bbox}});relation[highway=crossing][crossing:markings=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_markings.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_markings.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('crossing_markings_no'),
            query: '(node[highway=crossing][crossing:markings=no]({{bbox}});way[highway=crossing][crossing:markings=no]({{bbox}});relation[highway=crossing][crossing:markings=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/crossing_markings_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/crossing_markings_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('highway_steps'),
            query: '(way[highway=steps]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/highway_steps.svg',
            iconStyle: 'background-color:#8b4513',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/highway_steps.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('ramp_wheelchair'),
            query: '(way[ramp:wheelchair=yes]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/ramp_wheelchair_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/ramp_wheelchair_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('ramp_wheelchair_no'),
            query: '(way[ramp:wheelchair=no]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/ramp_wheelchair_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/ramp_wheelchair_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('ramp_stroller'),
            query: '(way[ramp:stroller=yes]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/ramp_stroller_yes.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/ramp_stroller_yes.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('ramp_stroller_no'),
            query: '(way[ramp:stroller=no]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/accessibilitat/ramp_stroller_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/ramp_stroller_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('automatic_door'),
            query: '(node[automatic_door=yes]({{bbox}});way[automatic_door=yes]({{bbox}});relation[automatic_door=yes]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/automatic_door.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/automatic_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('automatic_door_no'),
            query: '(node[automatic_door=no]({{bbox}});way[automatic_door=no]({{bbox}});relation[automatic_door=no]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/automatic_door_no.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/automatic_door_no.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('swing_door'),
            query: '(node[door=swing]({{bbox}});way[door=swing]({{bbox}});relation[door=swing]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/swing_door.svg',
            iconStyle: 'background-color:#ffff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/swing_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('sliding_door'),
            query: '(node[door=sliding]({{bbox}});way[door=sliding]({{bbox}});relation[door=sliding]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/sliding_door.svg',
            iconStyle: 'background-color:#00ff00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/sliding_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('revolving_door'),
            query: '(node[door=revolving]({{bbox}});way[door=revolving]({{bbox}});relation[door=revolving]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/revolving_door.svg',
            iconStyle: 'background-color:#ff0000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/revolving_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('folding_door'),
            query: '(node[door=folding]({{bbox}});way[door=folding]({{bbox}});relation[door=folding]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/folding_door.svg',
            iconStyle: 'background-color:#ff8c00',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/folding_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('overhead_door'),
            query: '(node[door=overhead]({{bbox}});way[door=overhead]({{bbox}});relation[door=overhead]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/overhead_door.svg',
            iconStyle: 'background-color:#800080',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/overhead_door.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('entrance_width'),
            query: '(node[entrance:width]({{bbox}});way[entrance:width]({{bbox}});relation[entrance:width]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/entrance_width.svg',
            iconStyle: 'background-color:#008080',
            scale: 0.25,
            style: function (feature) {
                var width = feature.get('entrance:width') || '';
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/entrance_width.svg'
                    }),
                    text: new ol.style.Text({
                        text: width,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('amenity_bench'),
            query: '(node[amenity=bench]({{bbox}});way[amenity=bench]({{bbox}});relation[amenity=bench]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/amenity_bench.svg',
            iconStyle: 'background-color:#8b4513',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/amenity_bench.svg'
                    })
                });
                return style;
            }
        },
        {
            group: getTranslation('accessibility'),
            title: getTranslation('amenity_waste_basket'),
            query: '(node[amenity=waste_basket]({{bbox}});way[amenity=waste_basket]({{bbox}});relation[amenity=waste_basket]({{bbox}}););out meta;',
            iconSrc: 'src/img/accessibilitat/amenity_waste_basket.svg',
            iconStyle: 'background-color:#000000',
            scale: 0.25,
            style: function () {
                const style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/accessibilitat/amenity_waste_basket.svg'
                    })
                });
                return style;
            }
        }
    ];
}
