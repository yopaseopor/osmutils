import { getTranslation } from '../../i18n/index.js';

export function osmbabymapOverlays() {
    return [
        // Baby feeding overlays
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
            iconStyle: 'background-color:rgba(206,9,9,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(206,9,9,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(206,9,9,1)',
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
            iconStyle: 'background-color:rgba(0,0,0,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0,1)',
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
            title: getTranslation('baby_feeding_check_date_before_2020'),
            query: '(nwr["baby_feeding"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255,0,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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
            title: getTranslation('baby_feeding_check_date_after_2020'),
            query: '(nwr["baby_feeding"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,255,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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

        // Amenities - Kids area
        {
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_yes'),
            query: '(nwr["kids_area"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 37, 180, 2 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(37,180,2,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 37, 180, 2 ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_no'),
            query: '(nwr["kids_area"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 202, 0, 0  ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 202, 0, 0  ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 202, 0, 0  ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_indoor'),
            query: '(nwr["kids_area:indoor"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 175, 122, 197  ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(175,122,197,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 175, 122, 197  ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_outdoor'),
            query: '(nwr["kids_area:outdoor"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 142, 68, 173  ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(142,68,173,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 142, 68, 173  ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_supervised'),
            query: '(nwr["kids_area:supervised"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(84,153,199,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(84,153,199,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(84,153,199,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_fee'),
            query: '(nwr["kids_area:fee"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(72,201,176,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(72,201,176,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(72,201,176,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('kids_area_no_info'),
            query: '(nwr[amenity][!"kids_area"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('highchair_yes'),
            query: '(nwr[amenity]["highchair"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(22, 160, 133 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(22,160,133,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(22, 160, 133 ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('highchair_no'),
            query: '(nwr[amenity]["highchair"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 202, 0, 0  ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 202, 0, 0  ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('highchair_no_info'),
            query: '(nwr[amenity][!"highchair"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('infant_bed_yes'),
            query: '(nwr["infant_bed"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(82,190,128,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(82,190,128,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(82,190,128,1)',
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
            group: getTranslation('amenities'),
            title: getTranslation('infant_bed_no_info'),
            query: '(nwr["tourism"="guest_house"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="hotel"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="motel"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="camp_site"][!"infant_bed"]({{bbox}});node(w);nwr["tourism"="hostel"][!"infant_bed"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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

        // Changing table
        {
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_yes'),
            query: '(nwr["changing_table"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 37, 180, 2  ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 37, 180, 2  ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 37, 180, 2  ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_no'),
            query: '(nwr["changing_table"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 202, 0, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 202, 0, 0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_limited'),
            query: '(nwr["changing_table"="limited"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(243, 156, 18 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(243, 156, 18 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(243, 156, 18 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_no_info'),
            query: '(nwr[amenity][!"changing_table"]({{bbox}});node(w);nwr[shop][!"changing_table"]({{bbox}});node(w);nwr[office][!"changing_table"]({{bbox}});node(w);nwr[tourism][!"changing_table"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_fee'),
            query: '(nwr["changing_table:fee"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(52, 152, 219 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(52, 152, 219,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(52, 152, 219 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_free'),
            query: '(nwr["changing_table:fee"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(125, 206, 160 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(125, 206, 160 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(125, 206, 160 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_fee_no_info'),
            query: '(nwr[changing_table][!"changing_table:fee"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_wheelchair_toilet'),
            query: '(nwr["changing_table:location"="wheelchair_toilet"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 255, 165, 250 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 255, 165, 250 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_female_toilet'),
            query: '(nwr["changing_table:location"="female_toilet"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 186, 74, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 186, 74, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 186, 74, 0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_male_toilet'),
            query: '(nwr["changing_table:location"="male_toilet"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(223, 255, 0,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(223, 255, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(223, 255, 0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_unisex_toilet'),
            query: '(nwr["changing_table:location"="unisex_toilet"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(204, 204, 255,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 204, 204, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(204, 204, 255 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_dedicated_room'),
            query: '(nwr["changing_table:location"="dedicated_room"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 255, 165, 250 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 255, 165, 250 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_room'),
            query: '(nwr["changing_table:location"="room"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(100, 149, 237,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(100, 149, 237 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(100, 149, 237 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_sales_area'),
            query: '(nwr["changing_table:location"="sales_area"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 0, 128,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 0, 128,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 0, 128,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_location_no_info'),
            query: '(nwr[changing_table][!"changing_table:location"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_check_date_before_2020'),
            query: '(nwr["changing_table"="yes"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255,0,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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
            group: getTranslation('changing_table'),
            title: getTranslation('changing_table_check_date_after_2020'),
            query: '(nwr["changing_table"="yes"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,255,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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

        // Playgrounds - Playground_1
        {
            group: getTranslation('playground_1'),
            title: getTranslation('playground_leisure'),
            query: '(nwr["leisure"="playground"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 255, 165, 250 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 255, 165, 250 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_structure'),
            query: '(nwr["playground"="structure"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 0, 128 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 0, 128 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 0, 128 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_slide'),
            query: '(nwr["playground"="slide"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(128, 0, 128,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(128, 0, 128 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(128, 0, 128,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_climbingframe'),
            query: '(nwr["playground"="climbingframe"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255, 0, 255 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(255, 0, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(255, 0, 255,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_climbingwall'),
            query: '(nwr["playground"="climbingwall"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 0, 255,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 0, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 0, 255,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_balancebeam'),
            query: '(nwr["playground"="balancebeam"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 128, 128,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 128, 128 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 128, 128 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_playhouse'),
            query: '(nwr["playground"="playhouse"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 255, 255,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 255, 255,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 255, 255 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_sandpit'),
            query: '(nwr["playground"="sandpit"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 128, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 128, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 128, 0 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_hopscotch'),
            query: '(nwr["playground"="hopscotch"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0, 255, 0,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0, 255, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0, 255, 0,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_teenshelter'),
            query: '(nwr["playground"="teenshelter"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(128, 128, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(128, 128, 0,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(128, 128, 0,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_sledding'),
            query: '(nwr["playground"="sledding"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(128, 0, 0,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(128, 0, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(128, 0, 0 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_youth_bench'),
            query: '(nwr["playground"="youth_bench"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(128, 128, 128,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(128, 128, 128 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(128, 128, 128 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_map'),
            query: '(nwr["playground"="map"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(233, 30, 99,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(233, 30, 99,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 233, 30, 99,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_bridge'),
            query: '(nwr["playground"="bridge"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(171, 71, 188,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(171, 71, 188,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(171, 71, 188,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_funnel_ball'),
            query: '(nwr["playground"="funnel_ball"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(126, 87, 194,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(126, 87, 194,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(126, 87, 194,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_tunnel_tube'),
            query: '(nwr["playground"="tunnel_tube"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 66, 165, 245 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 66, 165, 245 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 66, 165, 245 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_speaking_tube'),
            query: '(nwr["playground"="speaking_tube"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(38, 198, 218,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(38, 198, 218,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(38, 198, 218,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_ball_pool'),
            query: '(nwr["playground"="ball_pool"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(77, 182, 172,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(77, 182, 172,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(77, 182, 172,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_activitypanel'),
            query: '(nwr["playground"="activitypanel"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 102, 187, 106 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 102, 187, 106 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 102, 187, 106 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_horizontal_bar'),
            query: '(nwr["playground"="horizontal_bar"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(212, 225, 87,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(212, 225, 87 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(212, 225, 87,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_no_info'),
            query: '(nwr["leisure"="playground"][!"playground"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_check_date_before_2020'),
            query: '(nwr["playground"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255,0,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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
            group: getTranslation('playground_1'),
            title: getTranslation('playground_check_date_after_2020'),
            query: '(nwr["playground"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,255,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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

        // Playgrounds - Playground_2
        {
            group: getTranslation('playground_2'),
            title: getTranslation('playground_leisure_2'),
            query: '(nwr["leisure"="playground"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 255, 165, 250 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 255, 165, 250 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_swing'),
            query: '(nwr["playground"="swing"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(212, 225, 87,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(212, 225, 87,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(212, 225, 87,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_spinning_circle'),
            query: '(nwr["playground"="spinning_circle"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255, 138, 101,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(255, 138, 101,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(255, 138, 101,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_basketswing'),
            query: '(nwr["playground"="basketswing"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(161, 136, 127,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(161, 136, 127,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(161, 136, 127,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_basketrotator'),
            query: '(nwr["playground"="basketrotator"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(109, 76, 65,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(109, 76, 65,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(109, 76, 65,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_aerialrotator'),
            query: '(nwr["playground"="aerialrotator"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 236, 64, 122 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 236, 64, 122 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 236, 64, 122 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_seesaw'),
            query: '(nwr["playground"="seesaw"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(186, 104, 200,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(186, 104, 200,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(186, 104, 200,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_springy'),
            query: '(nwr["playground"="springy"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 179, 157, 219 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 179, 157, 219 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 179, 157, 219 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_trampoline'),
            query: '(nwr["playground"="trampoline"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(63, 81, 181,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(63, 81, 181,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(63, 81, 181,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_roundabout'),
            query: '(nwr["playground"="roundabout"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 100, 181, 246 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 100, 181, 246 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 100, 181, 246 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_cushion'),
            query: '(nwr["playground"="cushion"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(38, 198, 218,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(38, 198, 218,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(38, 198, 218,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_exercise'),
            query: '(nwr["playground"="exercise"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 0, 137, 123 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 0, 137, 123  ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 0, 137, 123 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_zipwire'),
            query: '(nwr["playground"="zipwire"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(104, 159, 56,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(104, 159, 56,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(104, 159, 56,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_splash_pad'),
            query: '(nwr["playground"="splash_pad"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 202, 0, 0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 202, 0, 0  ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_water'),
            query: '(nwr["playground"="water"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(230, 238, 156,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(230, 238, 156,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(230, 238, 156,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_no_info'),
            query: '(nwr["leisure"="playground"][!"playground"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,0,0 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba(0,0,0 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba(0,0,0 ,1)',
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_check_date_before_2020'),
            query: '(nwr["playground"][~"^check_date$"~"201[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(255,0,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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
            group: getTranslation('playground_2'),
            title: getTranslation('playground_check_date_after_2020'),
            query: '(nwr["playground"][~"^check_date$"~"202[0-9]."]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba(0,255,0,1)',
            style: function (feature) {
                const key_regex = /^check_date$/
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

        // Generic overlays
        {
            group: getTranslation('generic'),
            title: getTranslation('baby_yes'),
            query: '(nwr["baby"="yes"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 255, 165, 250 ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 255, 165, 250 ,1)',
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
            group: getTranslation('generic'),
            title: getTranslation('baby_no'),
            query: '(nwr["baby"="no"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/base/circle.svg',
            iconStyle: 'background-color:rgba( 202, 0, 0  ,1)',
            style: function (feature) {
                const key_regex = /^name$/
                const name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
                const name = feature.get(name_key) || '';
                const fill = new ol.style.Fill({
                    color: 'rgba( 202, 0, 0  ,0.4)'
                });
                const stroke = new ol.style.Stroke({
                    color: 'rgba( 202, 0, 0  ,1)',
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
            group: getTranslation('generic'),
            title: getTranslation('shop_baby_goods'),
            query: '(nwr["shop"="baby_goods"]({{bbox}});node(w););out meta;',
            iconSrc: 'src/img/icones/osmbabymap_logo.svg',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                const key_regex = /^name$/
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
                        src: 'src/img/icones/osmbabymap_logo.svg',
                        scale:0.12
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
        }
    ];
}
