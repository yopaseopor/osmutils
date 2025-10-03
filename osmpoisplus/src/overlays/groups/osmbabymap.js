import { getTranslation } from '../../i18n/index.js';

export function osmbabymapOverlays() {
    return [
        {
            group: getTranslation('baby_feeding'),
            title: getTranslation('baby_feeding_yes'),
            query: '(nwr["baby_feeding"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,255,0,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,255,0,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,255,0,1)',
                    width: 1
                });
                const style = new ol.style.Style({
                    image: new ol.style.Circle({
                        fill: fill,
                        stroke: stroke,
                        radius: 5
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX : 0,
                        offsetY : 20,
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
            group: getTranslation('baby_feeding'),
            title: getTranslation('baby_feeding_no'),
            query: '(nwr["baby_feeding"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 206, 9, 9 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 206, 9, 9 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 206, 9, 9 ,1)',
                    width: 1
                });
                const style = new ol.style.Style({
                    image: new ol.style.Circle({
                        fill: fill,
                        stroke: stroke,
                        radius: 5
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX : 0,
                        offsetY : 20,
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
            group: getTranslation('baby_feeding'),
            title: getTranslation('baby_feeding_room'),
            query: '(nwr["baby_feeding"="room"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(147, 229, 255,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(147, 229, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(147, 229, 255,1)',
                    width: 1
                });
                const style = new ol.style.Style({
                    image: new ol.style.Circle({
                        fill: fill,
                        stroke: stroke,
                        radius: 5
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX : 0,
                        offsetY : 20,
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
            group: getTranslation('baby_feeding'),
            title: getTranslation('baby_feeding_lactation'),
            query: '(nwr["baby_feeding"="lactation"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(202, 147, 255,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(202, 147, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(202, 147, 255,1)',
                    width: 1
                });
                const style = new ol.style.Style({
                    image: new ol.style.Circle({
                        fill: fill,
                        stroke: stroke,
                        radius: 5
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX : 0,
                        offsetY : 20,
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
            group: getTranslation('baby_feeding'),
            title: getTranslation('baby_feeding_no_info'),
            query: '(nwr[amenity][!"baby_feeding"]({{bbox}});node(w);nwr[shop][!"baby_feeding"]({{bbox}});node(w);nwr[office][!"baby_feeding"]({{bbox}});node(w);nwr[tourism][!"baby_feeding"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 0, 0, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 0, 0, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 0, 0, 0 ,1)',
                    width: 1
                });
                const style = new ol.style.Style({
                    image: new ol.style.Circle({
                        fill: fill,
                        stroke: stroke,
                        radius: 5
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX : 0,
                        offsetY : 20,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
                    }),
                    fill: fill,
                    stroke: stroke
                });
                return style;
            }
        }
    ];
}
