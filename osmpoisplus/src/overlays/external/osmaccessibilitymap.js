import { getTranslation } from '../../i18n/index.js';

export const osmaccessibilitymapOverlays = [
    {
        group: 'Wheelchair',
        title: 'Wheelchair=yes',
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
        group: 'Wheelchair',
        title: 'Wheelchair=limited',
        query: '(node[wheelchair=limited][shop]({{bbox}});node[wheelchair=limited][amenity]({{bbox}});node[wheelchair=limited][office]({{bbox}}););out meta;',
        iconSrc: 'src/img/accessibilitat/wheelchair_limited_shop.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Wheelchair',
        title: 'Wheelchair=no',
        query: '(node[wheelchair=no][shop]({{bbox}});node[wheelchair=no][amenity]({{bbox}});node[wheelchair=no][office]({{bbox}}););out meta;',
        iconSrc: 'src/img/accessibilitat/wheelchair_no_shop.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Wheelchair',
        title: 'Falta/Missing Wheelchair',
        query: '(node[!wheelchair][shop]({{bbox}});node[!wheelchair][amenity]({{bbox}});node[!wheelchair][office]({{bbox}}););out meta;',
        iconSrc: 'src/img/accessibilitat/wheelchair_unknown.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.25,
        style: function () {
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/wheelchair_unknown.svg'
                })
            });
            return style;
        }
    },
    {
        group: 'Voreres/Aceras/Sidewalks',
        title: 'Adaptada/Adapted',
        query: '(way[wheelchair=yes][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#40E0D0',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(64,224,208,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#40E0D0',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Voreres/Aceras/Sidewalks',
        title: 'Limitada/Limited',
        query: '(way[wheelchair=limited][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FFA500',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FFA500',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Voreres/Aceras/Sidewalks',
        title: 'NO adaptada/adapted',
        query: '(way[wheelchair=no][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FF0000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FF0000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Voreres/Aceras/Sidewalks',
        title: 'No info',
        query: '(way[!wheelchair][highway=footway][footway=sidewalk]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#000000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(0,0,0,0.2)'
            });
            const stroke = new ol.style.Stroke({
                color: '#000000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Passos/Pasos/Crossings',
        title: 'Adaptat/do/Adapted',
        query: '(way[wheelchair=yes][highway=footway][footway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#40E0D0',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(64,224,208,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#40E0D0',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Passos/Pasos/Crossings',
        title: 'Limitat/do/Limited',
        query: '(way[wheelchair=limited][highway=footway][footway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FFA500',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FFA500',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Passos/Pasos/Crossings',
        title: 'NO Adaptat/do/Adapted',
        query: '(way[wheelchair=no][highway=footway][footway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FF0000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FF0000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Passos/Pasos/Crossings',
        title: 'Wheelchair=yes',
        query: '(node[wheelchair=yes][highway=crossing]({{bbox}});node(w););out;',
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
        group: 'Passos/Pasos/Crossings',
        title: 'Wheelchair=limited',
        query: '(node[wheelchair=limited][highway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/wheelchair_limited_shop.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Passos/Pasos/Crossings',
        title: 'Wheelchair=no',
        query: '(node[wheelchair=no][highway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/wheelchair_no_shop.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Passos/Pasos/Crossings',
        title: 'Falta/Missing Wheelchair',
        query: '(node[!wheelchair][highway=crossing]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/wheelchair_unknown.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.25,
        style: function () {
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/wheelchair_unknown.svg'
                })
            });
            return style;
        }
    },
    {
        group: 'Via/Way',
        title: 'Adaptada/Adapted',
        query: '(way[wheelchair=yes][highway]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#40E0D0',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(64,224,208,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#40E0D0',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Via/Way',
        title: 'Limitada/Limited',
        query: '(way[wheelchair=limited][highway]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FFA500',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FFA500',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Via/Way',
        title: 'NO adaptada/adapted',
        query: '(way[wheelchair=no][highway]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#FF0000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FF0000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Via/Way',
        title: 'No info',
        query: '(way[!wheelchair][highway]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/line.png',
        iconStyle: 'background-color:#000000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(0,0,0,0.2)'
            });
            const stroke = new ol.style.Stroke({
                color: '#000000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Àrea',
        title: 'Adaptada/Adapted',
        query: '(way[wheelchair=yes][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/dots.png',
        iconStyle: 'background-color:#40E0D0',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(64,224,208,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#40E0D0',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Àrea',
        title: 'Limitada/Limited',
        query: '(way[wheelchair=limited][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/dots.png',
        iconStyle: 'background-color:#FFA500',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FFA500',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Àrea',
        title: 'NO adaptada/adapted',
        query: '(way[wheelchair=no][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/dots.png',
        iconStyle: 'background-color:#FF0000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FF0000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Àrea',
        title: 'No info',
        query: '(way[!wheelchair][highway=pedestrian][area=yes]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/dots.png',
        iconStyle: 'background-color:#000000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(0,0,0,0.2)'
            });
            const stroke = new ol.style.Stroke({
                color: '#000000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Altres/Otros/Others',
        title: 'Plaça/Plaza parking space',
        query: '(node["capacity:disabled"]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/capacity_disabled.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
        style: function () {
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/capacity_disabled.svg'
                })
            });
            return style;
        }
    },
    {
        group: 'Altres/Otros/Others',
        title: 'Escales/ras/Steps',
        query: '(way[highway=steps]({{bbox}});node(w););out;',
        iconSrc: 'src/img/base/dots.png',
        iconStyle: 'background-color:#FF0000',
        style: function () {
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: '#FF0000',
                width: 5
            });
            const style = new ol.style.Style({
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Altres/Otros/Others',
        title: 'Obstacles/Obstáculos',
        query: '(node["obstacle:wheelchair"]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/obstacle_wheelchair_yes.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
        style: function () {
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/obstacle_wheelchair_yes.svg'
                })
            });
            return style;
        }
    },
    {
        group: 'Vorades/Bordillos/Kerbs',
        title: 'Elevades/Raised >> <a href="https://mapcomplete.org/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome"</a><b>Completar/Complete</b>',
        query: '(node[kerb=raised]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/kerb_raised.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Vorades/Bordillos/Kerbs',
        title: 'Rebaixades/Lowered >> <a href="https://mapcomplete.org/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome"</a><b>Completar/Complete</b>',
        query: '(node[kerb=lowered]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/kerb_lowered.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Vorades/Bordillos/Kerbs',
        title: 'A nivell/Flush >> <a href="https://mapcomplete.org/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome"</a><b>Completar/Complete</b>',
        query: '(node[kerb=flush]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/kerb_flush.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
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
        group: 'Incline',
        title: 'Escales/ras/Steps ↑↑',
        query: '(nwr["highway"="steps"]["incline"="up"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/steps_up.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/steps_up.svg',
                    scale:0.006
                }),
                text: new ol.style.Text({
                    text: "/",
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Escales/ras/Steps ↓↓',
        query: '(nwr["highway"="steps"]["incline"="down"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/steps_down.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/steps_down.svg',
                    scale:0.006
                }),
                text: new ol.style.Text({
                    text: "\\",
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑↑',
        query: '(nwr["highway"!="elevator"]["incline"="up"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓↓',
        query: '(nwr["highway"!="elevator"]["incline"="down"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'No Incline',
        query: '(nwr["highway"!="elevator"]["incline"="no"]({{bbox}});node(w);nwr["highway"!="elevator"]["incline"~"^0"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_nul.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_nul.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑ +1-4%',
        query: '(nwr["highway"!="elevator"]["incline"~"^[1-4]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up_0.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up_0.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑ +5-9%',
        query: '(nwr["highway"!="elevator"]["incline"~"^[5-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up_5.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up_5.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑ +10-14%',
        query: '(nwr["highway"!="elevator"]["incline"~"^1[0-4]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up_10.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up_10.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑ +15-19%',
        query: '(nwr["highway"!="elevator"]["incline"~"^1[5-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up_15.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up_15.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↑ +20+%',
        query: '(nwr["highway"!="elevator"]["incline"~"^[2-9][0-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_up_20.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_up_20.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓ -1-4%',
        query: '(nwr["highway"!="elevator"]["incline"~"^-[1-4]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down_0.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down_0.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓ -5-9%',
        query: '(nwr["highway"!="elevator"]["incline"~"^-[5-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down_5.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down_5.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓ -10-14%',
        query: '(nwr["highway"!="elevator"]["incline"~"^-1[0-4]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down_10.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down_10.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓ -15-19%',
        query: '(nwr["highway"!="elevator"]["incline"~"^-1[5-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down_15.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down_15.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Incline ↓ -20+%',
        query: '(nwr["highway"!="elevator"]["incline"~"^-[2-9][0-9]%"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_down_20.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_down_20.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Incline',
        title: 'Falta Incline missing >> <a href="https://mapcomplete.org/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fincline.json&language=ca#welcome"</a><b>Completar/Complete</b>',
        query: '(way["highway"]["highway"!="elevator"][!"incline"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/accessibilitat/incline_question.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const key_regex = /^incline$/
            const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            const name = feature.get(name_key) || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/incline_question.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    },
    {
        group: 'Vorades/Bordillos/Kerbs',
        title: 'Falta info missing >> <a href="https://mapcomplete.org/index.html?z=\' + view.getZoom() +\'&lat=\'+ coordinateLL[1] +\'&lon=\'+ coordinateLL[0] +\'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmaster%2Fkerbs.json&language=ca#welcome" Test</a><b>Completar/Complete</b>',
        query: '(node[kerb=yes]({{bbox}});node(w););out;',
        iconSrc: 'src/img/accessibilitat/kerb_yes.svg',
        iconStyle: 'background-color:#714601',
        scale: 0.0004,
        style: function () {
            const style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/accessibilitat/kerb_yes.svg'
                })
            });
            return style;
        }
    }
];
