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
]);

// locale
var localeNeedles = ['dhtmlxscheduler'];
var localeFile    = '';

if ("QUIQQER_PROJECT" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.QUIQQER_PROJECT.lang + '.js';

    localeNeedles.push(localeFile);
}

if ("USER" in window) {
    localeFile = URL_OPT_DIR + 'quiqqer/calendar-controls/bin/' +
                 'htmlxScheduler/locale/' +
                 'locale_' + window.USER.lang + '.js';

    if (!localeNeedles.contains(localeFile)) {
        localeNeedles.push(localeFile);
    }
}

define('dhtmlxschedulerLocale', localeNeedles);

define('package/quiqqer/calendar-controls/bin/Scheduler', [
    'dhtmlxschedulerLocale'
], function () {
    "use strict";
    return window.scheduler;
});