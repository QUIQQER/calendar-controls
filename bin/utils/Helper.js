/**
 * Helper utils for the calendar
 *
 * @author www.pcsg.de (Henning Leutz)
 */

define(['Locale'], function (Locale) {
    "use strict";

    return {

        /**
         * Return the day names
         *
         * @return {Array}
         */
        getDayList: function () {
            return [
                Locale.get('quiqqer/calendar-controls', 'sunday'),
                Locale.get('quiqqer/calendar-controls', 'monday'),
                Locale.get('quiqqer/calendar-controls', 'tuesday'),
                Locale.get('quiqqer/calendar-controls', 'wednesday'),
                Locale.get('quiqqer/calendar-controls', 'thursday'),
                Locale.get('quiqqer/calendar-controls', 'friday'),
                Locale.get('quiqqer/calendar-controls', 'saturday')
            ];
        },

        /**
         * Return the abbreviations of the day names
         *
         * @return {Array}
         */
        getDayListShort: function () {
            return [
                Locale.get('quiqqer/calendar-controls', 'sunday.short'),
                Locale.get('quiqqer/calendar-controls', 'monday.short'),
                Locale.get('quiqqer/calendar-controls', 'tuesday.short'),
                Locale.get('quiqqer/calendar-controls', 'wednesday.short'),
                Locale.get('quiqqer/calendar-controls', 'thursday.short'),
                Locale.get('quiqqer/calendar-controls', 'friday.short'),
                Locale.get('quiqqer/calendar-controls', 'saturday.short')
            ];
        },

        /**
         * Return the months
         *
         * @return {Array}
         */
        getMonthList: function () {
            return [
                Locale.get('quiqqer/calendar-controls', 'month.01'),
                Locale.get('quiqqer/calendar-controls', 'month.02'),
                Locale.get('quiqqer/calendar-controls', 'month.03'),
                Locale.get('quiqqer/calendar-controls', 'month.04'),
                Locale.get('quiqqer/calendar-controls', 'month.05'),
                Locale.get('quiqqer/calendar-controls', 'month.06'),
                Locale.get('quiqqer/calendar-controls', 'month.07'),
                Locale.get('quiqqer/calendar-controls', 'month.08'),
                Locale.get('quiqqer/calendar-controls', 'month.09'),
                Locale.get('quiqqer/calendar-controls', 'month.10'),
                Locale.get('quiqqer/calendar-controls', 'month.11'),
                Locale.get('quiqqer/calendar-controls', 'month.12')
            ];
        },

        /**
         * Return the month abbreviations
         *
         * @return {Array}
         */
        getMonthListShort: function () {
            return [
                Locale.get('quiqqer/calendar-controls', 'month.01.short'),
                Locale.get('quiqqer/calendar-controls', 'month.02.short'),
                Locale.get('quiqqer/calendar-controls', 'month.03.short'),
                Locale.get('quiqqer/calendar-controls', 'month.04.short'),
                Locale.get('quiqqer/calendar-controls', 'month.05.short'),
                Locale.get('quiqqer/calendar-controls', 'month.06.short'),
                Locale.get('quiqqer/calendar-controls', 'month.07.short'),
                Locale.get('quiqqer/calendar-controls', 'month.08.short'),
                Locale.get('quiqqer/calendar-controls', 'month.09.short'),
                Locale.get('quiqqer/calendar-controls', 'month.10.short'),
                Locale.get('quiqqer/calendar-controls', 'month.11.short'),
                Locale.get('quiqqer/calendar-controls', 'month.12.short')
            ];
        },

        /**
         * Return the short month name
         *
         * @param {Number} month - number of the month
         * @return {String}
         */
        getMonthShort: function (month) {
            var list = this.getMonthListShort();

            return typeof list[month] !== 'undefined' ? list[month] : '';
        },

        /**
         * Return the short month name
         *
         * @param {Number} month - number of the month
         * @return {String}
         */
        getMonth: function (month) {
            var list = this.getMonthList();

            return typeof list[month] !== 'undefined' ? list[month] : '';
        }
    };
});