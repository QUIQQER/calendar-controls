/**
 * Load the HTML X Scheduler
 *
 * @author www.pcsg.de (Henning Leutz)
 */

// scheduler
define('dhtmlxscheduler', [
    URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.js',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.css',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler_flat.css'
], function () {
    console.warn(window.scheduler);
});

// locale
require.config({
    paths: {
        'dhtmlxschedulerLocale': URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/locale'
    }
});

var localeNeedles = [];
var localeFile    = '';

if ("QUIQQER_PROJECT" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.QUIQQER_PROJECT.lang + '.js';

    localeNeedles.push(window.QUIQQER_PROJECT.lang);
}

if ("USER" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.USER.lang + '.js';

    if (!localeNeedles.contains(window.USER.lang)) {
        localeNeedles.push(window.USER.lang);
    }
}

var i, len, key, lang;

var dhtmlxscheduler = ['dhtmlxscheduler'];
var shim            = {};

for (i = 0, len = localeNeedles.length; i < len; i++) {
    lang = localeNeedles[i];
    key  = 'dhtmlxschedulerLocale/locale_' + lang;

    shim[key] = {
        deps: ['dhtmlxscheduler']
    };

    dhtmlxscheduler.push(key);
}

requirejs.config({
    shim: shim
});

define('package/quiqqer/calendar-controls/bin/Scheduler', dhtmlxscheduler, function () {
    "use strict";
    return window.scheduler;
});