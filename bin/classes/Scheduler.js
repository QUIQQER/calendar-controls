/**
 * Bridge for the scheduler
 *
 * returns the global scheduler and can be load scheduler extensions
 *
 * @module package/quiqqer/calendar-controls/bin/Scheduler
 *
 * @require qui/QUI
 * @require qui/classes/DOM
 */
define('package/quiqqer/calendar-controls/bin/classes/Scheduler', [

    'qui/QUI',
    'qui/classes/DOM'

], function (QUI, QDOM) {
    "use strict";

    return new Class({
        Extends: QDOM,
        Type   : 'package/quiqqer/calendar-controls/bin/classes/Scheduler',

        Binds: [
            'loadExtension'
        ],

        /**
         * Return the global scheduler
         *
         * @returns {Object}
         */
        getScheduler: function () {
            return window.scheduler;
        },

        /**
         * Load scheduler extensions
         *
         * @param {string} extName
         * @returns {Promise}
         */
        loadExtension: function (extName) {
            var self = this;

            return new Promise(function (resolve) {
                var extensionUrl = URL_OPT_DIR + 'quiqqer/calendar-controls/' +
                                   'bin/htmlxScheduler/ext/' +
                                   'dhtmlxscheduler_' + extName + '.js';

                require([extensionUrl], function () {
                    resolve(self);
                });
            });
        }
    });
});