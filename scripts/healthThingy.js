var $, window;
var currentWindow = 0;
$(function () {
    "use strict";
    console.log('succ');
    var data = $.getJSON('json/tenReasons.json', (function () {
        data = data.responseJSON;
        $.each(data.reasons, function (index, val) {
            $('<div id="' + index + '" class="container" style=" background: ' + val.bg + '; flex-direction: column; justify-content: flex-start; align-items: center;"><h1 id="event" style="transform: scale(1); font-size: 2.5em;">' + val.event + '</h1><h2 id="date">' + val.date + '</h2><div id="spacer" style="height: ' + (window.innerHeight / 3.5) + 'px"></div><div style="padding: 50px"><h3 id="explanation">' + val.reason + '</h3></div></div>').appendTo('body');
        });

        $('<li>' + data.reasons[0].event + '</li>').appendTo('ul');
    }));
    $(window).on('wheel', function (e) {
        var scrollNum = e.originalEvent.deltaY;
        if (scrollNum < 0 && currentWindow > 0) { //on scroll up
            currentWindow -= 1;
            scrollTo('#' + currentWindow);

        } else if (scrollNum > 0 && currentWindow !== data.reasons.length - 1) { //on scroll down
            currentWindow += 1;
            scrollTo('#' + currentWindow);
        }
    });

    function scrollTo(targetElement) {
        $('html, body').animate({
            scrollTop: $(targetElement).offset().top
        }, 500);
    }
});
