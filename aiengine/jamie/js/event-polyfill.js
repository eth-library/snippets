(window.tawkJsonp = window.tawkJsonp || []).push([
    ["event-polyfill"], {
        "2b2d": function(n, e) {
            var o = window.Event;
            if (window.Event = function(n, e) {
                    e = e || {};
                    var o = document.createEvent("Event");
                    return o.initEvent(n, Boolean(e.bubbles), Boolean(e.cancelable)), o
                }, o) {
                for (var t in o) window.Event[t] = o[t];
                window.Event.prototype = o.prototype
            }
        }
    },
    [
        ["2b2d", "runtime"]
    ]
]);