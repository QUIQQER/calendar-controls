/**
 * Load the HTML X Scheduler
 *
 * @author www.pcsg.de (Henning Leutz)
 */
var needles = [
    URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.js',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.css',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler_flat.css'
];

var localeFile = '';

if ("QUIQQER_PROJECT" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.QUIQQER_PROJECT.lang + '.js';

    needles.push(localeFile);
}

if ("USER" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.USER.lang + '.js';

    if (!needles.contains(localeFile)) {
        needles.push(localeFile);
    }
}

define('package/quiqqer/calendar-controls/bin/Scheduler', needles, function () {
    "use strict";
    return window.scheduler;
});