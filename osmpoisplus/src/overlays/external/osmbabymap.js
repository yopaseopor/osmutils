import { getTranslation } from '../../i18n/index.js';

export const osmbabymapOverlays = [
    {
        group: 'Baby_feeding|Lactancia',
        title: 'Yes/Sí',
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
        group: 'Baby_feeding|Lactancia',
        title: 'No',
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
        group: 'Baby_feeding|Lactancia',
        title: 'Room<br>Habitación<br>Habitació',
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
        group: 'Baby_feeding|Lactancia',
        title: 'Lactation<br>Lactància',
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
        group: 'Baby_feeding|Lactancia',
        title: 'No info <b><a href="https://mapcomplete.org/theme.html?userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fbabyfeeding.json&language=en#welcome">+ info</a></b>',
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
