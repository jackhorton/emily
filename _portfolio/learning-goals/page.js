'use strict';

var gumshoe = require('gumshoe');
var smoothscroll = require('smooth-scroll');

document.addEventListener('DOMContentLoaded', function () {
    gumshoe.init({
        callback: (function () {
            var active;

            return function onNav(nav) {
                if (nav.target !== active) {
                    window.history.replaceState(null, null, '#' + nav.target.id);
                    active = nav.target;
                }
            }
        })()
    });

    smoothscroll.init({
        offset: -1
    });
});

document.addEventListener('typekitReady', function () {
    gumshoe.setDistances();

    // fix the scroll location on new page enter
    if (window.location.hash) {
        var hash = smoothscroll.escapeCharacters(window.location.hash);
        var toggle = document.querySelector('a[href*="' + hash + '"]');
        smoothscroll.animateScroll(hash, toggle, { speed: 1, offset: -1 });
    }
});
