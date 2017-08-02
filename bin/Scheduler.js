/**
 * Load the HTML X Scheduler
 *
 * @author www.pcsg.de (Henning Leutz)
 *
 * you can use require(['package/quiqqer/calendar-controls/bin/Scheduler'])
 */

// scheduler
define('dhtmlxscheduler', [
    URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.js',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.css',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler_flat.css',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler_custom.css'
]);

// locale
require.config({
    paths: {
        'dhtmlxschedulerLocale': URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/locale'
    }
});

var dhtmlxscheduler = [
    'package/quiqqer/calendar-controls/bin/classes/Scheduler',
    'dhtmlxscheduler'
];

(function () {
    "use strict";

    var localeNeedles = [];

    if ("QUIQQER_PROJECT" in window) {
        localeNeedles.push(window.QUIQQER_PROJECT.lang);
    }

    if ("USER" in window) {
        if (!localeNeedles.contains(window.USER.lang)) {
            localeNeedles.push(window.USER.lang);
        }
    }

    var i, len, key, lang;
    var shim = {};

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
})();

define('package/quiqqer/calendar-controls/bin/Scheduler', dhtmlxscheduler, function (Bridge) {
    "use strict";
    return new Bridge();
});
