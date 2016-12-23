
QUIQQER Kalender Controls
========

GUI Element um Kalender anzuzeigen

Paketname:

    quiqqer/calendar-controls


Features (Funktionen)
--------

- JavaScript Kalender Control
- JavaScript Kalender Sceduler

Installation
------------

Der Paketname ist: quiqqer/calendar-controls


Mitwirken
----------

- Issue Tracker: https://dev.quiqqer.com/quiqqer/calendar-controls/issues
- Source Code: https://dev.quiqqer.com/quiqqer/calendar-controls/tree/master


Support
-------

Falls Sie ein Fehler gefunden haben, oder Verbesserungen wünschen,
dann können Sie gerne an support@pcsg.de eine E-Mail schreiben.


Lizenz
-------

MIT

Entwickler
--------

### JavaScript Scheduler bekommen:

Ein Scheduler ist ein Kalender Objekt welches einen grossen Kalender verwaltet.
Scheduler: https://dhtmlx.com/docs/products/dhtmlxScheduler/

```javascript

require(['package/quiqqer/calendar-controls/bin/Scheduler'], function(Scheduler) {
    console.log(Scheduler.getScheduler());
});

```

### JavaScript Scheduler Erweiterungen laden:

```javascript

require([
    'package/quiqqer/calendar-controls/bin/Scheduler'
], function(Scheduler) {
    Scheduler.loadExtension('agenda_view').then(function(Scheduler) {
        console.log(Scheduler.getScheduler());
    });
});

```

```javascript

// Mehrere Erweiterungen laden

require([
    'package/quiqqer/calendar-controls/bin/Scheduler'
], function(Scheduler) {
    Promise.all([
        Scheduler.loadExtension('agenda_view'),
        Scheduler.loadExtension('collision'),
        Scheduler.loadExtension('cookie')
    ]).then(function(Scheduler) {
        console.log(Scheduler.getScheduler());
    });
});

```
