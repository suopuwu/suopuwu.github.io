"use strict";
//appease the lint gods
//if you're looking for something to do, search fix or todo
var mode = 'intro',
    donezo = [
        true, //home
        false, //breakout
        false //debug
    ],
    $, //debug
    age = (function () {
        var counter = 0;
        return function () {
            return counter += 0.05;
        };
    })();

/*88888888ba
  88      "8b
  88      ,8P
  88aaaaaa8P'  ,adPPYYba,  ,adPPYba,   ,adPPYba,
  88""""""8b,  ""     `Y8  I8[    ""  a8P_____88
  88      `8b  ,adPPPPP88   `"Y8ba,   8PP"""""""
  88      a8P  88,    ,88  aa    ]8I  "8b,   ,aa
  88888888P"   `"8bbdP"Y8  `"YbbdP"'   `"Ybbd8"'  Base*/
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
window.cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitcancelAnimationFrame ||
        window.mozcancelAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, -1 / 60);
        };
})();

function scrollTo(targetElement) {
    $('html, body').animate({
        scrollTop: $(targetElement).offset().top
    }, 1000);
}

function rand(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//returns a number for the string of the mode
function getMode(mode) {
    switch (mode) {
        default: return null;
        break;
        case 'home':
                return 0;
            break;
        case 'breakout':
                return 1;
            break;
        case 'debug':
                return 2;
            break;
    }
}

function writeLine(what_to_log) {
    $('#debug').prepend('<li>' + what_to_log + '</li>');
}
/*88b           d88              88
  888b         d888              ""
  88`8b       d8'88
  88 `8b     d8' 88  ,adPPYYba,  88  8b,dPPYba,
  88  `8b   d8'  88  ""     `Y8  88  88P'   `"8a
  88   `8b d8'   88  ,adPPPPP88  88  88       88
  88    `888'    88  88,    ,88  88  88       88
  88     `8'     88  `"8bbdP"Y8  88  88       88  Main*/
//ASCII font is univers

$(document).ready(function () {
    //breakout canvas adjustments and start if clicked

    //makes title not expand 'til it's at the top
    $('#welcome').css('transition', '666s');

    function aaa() { //startup functions with delay
        $('#welcome').css('transition', '2s');
        if (mode === 'intro') {
            mode = null;
        }
        $('img:hover').css('cursor', 'pointer');
    }

    function aab() {
        $('.fade-in').css('opacity', '1');
    }
    //closure and age 

    function aac() {
        age();
    }

    setTimeout(aaa, 3000);
    setTimeout(aab, 2000);
    setInterval(aac, 50);

    //buttons
    $('#breakoutButton').click(function () {
        if (donezo[1] === false && age() >= 2) {
            donezo[1] = true;
            $('#breakoutDiv').css('display', 'flex');
            $('#lay1').width(window.innerWidth).height(window.innerHeight);
            mode = 'breakout';
            breakout();
            scrollTo('#lay1');
        } else if (age() >= 2) {
            donezo[1] = false;
            $('#breakoutDiv').css('display', 'none');
            mode = null;
        }
    });

    $('#debugButton').click(function () {
        if (donezo[getMode('debug')] === false && age() >= 2) {
            donezo[getMode('debug')] = true;
            $('#debugDiv').css('display', 'flex');
            scrollTo('#debugDiv');
        } else if (age() >= 2) {
            donezo[getMode('debug')] = false;
            $('#debugDiv').css('display', 'none');
        }
    });
    /*          88
                88                                           ,d
                88                                           88
                88  8b,dPPYba,   8b,dPPYba,   88       88  MM88MMM  ,adPPYba,
                88  88P'   `"8a  88P'    "8a  88       88    88     I8[    ""
                88  88       88  88       d8  88       88    88      `"Y8ba,
                88  88       88  88b,   ,a8"  "8a,   ,a88    88,    aa    ]8I
                88  88       88  88`YbbdP"'    `"YbbdP'Y8    "Y888  `"YbbdP"'
                                 88
                                 88*/
    //a function... to skip the intro animation
    function skipIntro() {
        if (age() <= 2) {
            $('.slide-up-center').css('animation-delay', -2 + age() + "s");
        }
        if (age() <= 1) {
            $('.splash').css('animation-delay', -1 + age() + "s");
        } //if key is escape, speed animation
        if (age() <= 1.5) {
            $('.whitebg').css('animation-delay', -1.5 + age() + "s");
        }
    }

    $(document).keydown(function (event, char) {
        char = event.which; //identify what char was pressed
        switch (char) {
            case 27:
                scrollTo('#home');
        }

        switch (mode) { //handles how to accept inputs depending on mode
            default: //home mode
                $('#title').html('home' + char);
            break;
            case 'intro':
                    $('#title').html('title' + char);
                skipIntro();
                mode = null;
                break;

            case 'breakout':
                    $('#title').html('breakout' + char);
        }
    });
    $(document).click(function () {
        switch (mode) {
            case 'intro':
                skipIntro();
        }
    });


});

/*88888888ba                                       88
  88      "8b                                      88                                    ,d
  88      ,8P                                      88                                    88
  88aaaaaa8P'  8b,dPPYba,   ,adPPYba,  ,adPPYYba,  88   ,d8   ,adPPYba,   88       88  MM88MMM
  88""""""8b,  88P'   "Y8  a8P_____88  ""     `Y8  88 ,a8"   a8"     "8a  88       88    88
  88      `8b  88          8PP"""""""  ,adPPPPP88  8888[     8b       d8  88       88    88
  88      a8P  88          "8b,   ,aa  88,    ,88  88`"Yba,  "8a,   ,a8"  "8a,   ,a88    88,
  88888888P"   88           `"Ybbd8"'  `"8bbdP"Y8  88   `Y8a  `"YbbdP"'    `"YbbdP'Y8    "Y888  Breakout*/
var bkVars = {
    x: (function () {
        var canvas = document.getElementById('lay1');
        return canvas / 2;
    })

};

function breakout() {
    var canvas = document.getElementById("lay1"),
        ctx = canvas.getContext("2d"),
        x = canvas.width / 2,
        y = canvas.height / 2,
        dx = -200,
        dy = -200,
        xdir = 1,
        ydir = 1;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        writeLine('breakout has been resized')
    }
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    //TODO find out why resize canvas is running but not resizing

    function drawBall() { //actually draws it
        ctx.beginPath();
        ctx.rect(x - 10, y - 10, 20, 20);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
    }

    function bounce() { //changes trajectory of bounce
        if (dx > 0) {
            xdir = 1;
        } else {
            xdir = -1;
        }
        if (dy > 0) {
            ydir = 1;
        } else {
            ydir = -1;
        }
        if (x >= canvas.width - 10 || x <= 10) {
            dx = rand(200, 400) * -xdir;
            dy = rand(200, 400) * ydir;
            if (x >= canvas.width - 10) { //move the ball back onto the canvas to prevent jittering
                x = canvas.width - 10;
            } else {
                x = 10;
            }
        }
        if (y >= canvas.height - 10 || y <= 10) {
            dy = rand(200, 400) * -ydir;
            dx = rand(200, 400) * xdir;
            if (y >= canvas.height - 10) { //same as above
                y = canvas.height - 10;
            } else {
                y = 10;
            }
        }
    }

    //paddle begins here


    function updatePos(modifier) {
        x += dx * modifier;
        y += dy * modifier;
    }

    function draw() { //clears canvas and invokes drawball and makes new pos
        if (mode === 'breakout') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var now = Date.now();
            var delta = now - then;
            updatePos(delta / 1000);
            drawBall();
            bounce();
            then = now;
        }
        requestAnimFrame(draw);
    }
    var then = Date.now();
    requestAnimFrame(draw);
}
