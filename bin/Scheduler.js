/**
 * Load the HTML X Scheduler
 *
 * @author www.pcsg.de (Henning Leutz)
 */
define('package/quiqqer/calendar-controls/bin/Scheduler', [
    URL_OPT_DIR + 'quiqqer/calendar-controls/bin/htmlxScheduler/dhtmlxscheduler.js'
], function () {
    "use strict";
    return window.scheduler;
});