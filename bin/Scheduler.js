/**
 * Load the HTML X Scheduler
 *
 * @author www.pcsg.de (Henning Leutz)
 */
define('package/quiqqer/calendar-controls/bin/Scheduler', [
    URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.js',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.css',
    'css!package/quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler_flat.css'
], function () {
    "use strict";
    return window.scheduler;
});