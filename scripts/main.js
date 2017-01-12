"use strict";
//appease the lint gods
//if you're looking for something to do, search fix or todo
var MODE = 'intro',
    DONEZO = [
        true, //home
        false, //breakout
        false //debug
    ],
    $,
    //the age of the webpage, incrementing every 50 miliseconds
    AGE = (function () {
        var counter = 0;
        return function () {
            return counter += 0.05;
        };
    })();
var CURRENTWINDOW = 0;
//the ids of the screens in order of cascade
var SCROLLORDER = ['#home'];

/*88888888ba
  88      "8b
  88      ,8P
  88aaaaaa8P'  ,adPPYYba,  ,adPPYba,   ,adPPYba,
  88""""""8b,  ""     `Y8  I8[    ""  a8P_____88
  88      `8b  ,adPPPPP88   `"Y8ba,   8PP"""""""
  88      a8P  88,    ,88  aa    ]8I  "8b,   ,aa
  88888888P"   `"8bbdP"Y8  `"YbbdP"'   `"Ybbd8"'  Base*/
//a function... to skip the intro animation
function skipIntro() {
    if (AGE() <= 2) {
        $('.slide-up-center').css('animation-delay', -2 + AGE() + "s");
    }
    if (AGE() <= 1) {
        $('.splash').css('animation-delay', -1 + AGE() + "s");
    } //if key is escape, speed animation
    if (AGE() <= 1.5) {
        $('.whitebg').css('animation-delay', -1.5 + AGE() + "s");
    }
}
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
    }, 500);
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
//adds new item to debugDiv
function writeLine(what_to_log) {
    $('#debug').prepend('<li>' + what_to_log + '</li>');
}
//removes # and Div from strings
function removeHash(stringToRemoveHash) {
    var noHash = stringToRemoveHash.split('');
    noHash.splice(0, 1);
    noHash.splice(noHash.indexOf('D'), 3);
    noHash = noHash.join('');
    return noHash;
}
//changes mode, DONEZO, visibility on selected element, adds to SCROLLORDER, and scrolls to selected element
function newWindow(theNewWindow) {
    //get the div without Div and #
    var noHash = removeHash(theNewWindow);
    //set donezo to true
    DONEZO[getMode(noHash)] = true;
    //change mode
    MODE = noHash;
    //make visible
    $(theNewWindow).css('display', 'flex');
    //move to after homeDiv
    $(theNewWindow).insertAfter('#homeDiv');
    //add to scrollorder
    SCROLLORDER.splice(1, 0, theNewWindow);
    scrollTo(theNewWindow);
    CURRENTWINDOW += 1;
}

function removeWindow(windowToRemove) {
    var noHash = removeHash(windowToRemove);
    DONEZO[getMode(noHash)] = false;
    $(windowToRemove).css('display', 'none');
    SCROLLORDER.splice(SCROLLORDER.indexOf(windowToRemove), 1);
}

function add(a, b) {
    return a + b;
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
        if (MODE === 'intro') {
            MODE = null;
        }
        $('img:hover').css('cursor', 'pointer');
    }

    function aab() {
        $('.fade-in').css('opacity', '1');
    }
    //closure and age 

    function aac() {
        AGE();
    }
    setTimeout(aaa, 3000);
    setTimeout(aab, 2000);
    setInterval(aac, 50);

    //buttons
    $('#breakoutButton').click(function () {
        if (DONEZO[1] === false && AGE() >= 2) { //if window is not visible
            newWindow('#breakoutDiv');
            breakout();
        } else if (AGE() >= 2) { //if it is
            removeWindow('#breakoutDiv');
        }
    });

    $('#debugButton').click(function () {
        if (DONEZO[getMode('debug')] === false && AGE() >= 2) {
            newWindow('#debugDiv');
        } else if (AGE() >= 2) {
            removeWindow('#debugDiv');
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
    //runs on scroll
    $(window).on('wheel', function (e) {
        var scrollNum = e.originalEvent.deltaY;
        if (scrollNum < 0 && CURRENTWINDOW > 0) { //on scroll up
            CURRENTWINDOW -= 1
            scrollTo(SCROLLORDER[CURRENTWINDOW]);
            MODE = removeHash(SCROLLORDER[CURRENTWINDOW]);

        } else if (scrollNum > 0 && CURRENTWINDOW !== SCROLLORDER.length - 1) { //on scroll down
            CURRENTWINDOW += 1
            scrollTo(SCROLLORDER[CURRENTWINDOW]);
            MODE = removeHash(SCROLLORDER[CURRENTWINDOW]);
        }
    });

    //runs on keypress
    $(document).keydown(function (event, char) {
        char = event.which; //identify what char was pressed
        switch (char) {
            case 27:
                scrollTo('#home');
        }

        switch (MODE) { //handles how to accept inputs depending on mode
            default: //home mode
                $('#title').html('home' + char);
            break;
            case 'intro':
                    $('#title').html('title' + char);
                skipIntro();
                MODE = null;
                break;

            case 'breakout':
                    $('#title').html('breakout' + char);
                break;
            case 'debug':
                    $('#title').html('debug' + char);
                break;

        }
    });
    $(document).click(function () {
        switch (MODE) {
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
    }),
    drawPauseDone: null,
    delta: null,
    deltaAvg: []
};

function breakout() {

    var canvas = document.getElementById("lay1"),
        ctx = canvas.getContext("2d"),
        x = canvas.width / 2,
        y = canvas.height / 2,
        dx = -200,
        dy = -200,
        xdir = 1,
        ydir = 1,
        ballRandFloor = canvas.height / 2,
        ballRandCeil = canvas.height / 0.8;


    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

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
            dx = rand(ballRandFloor, ballRandCeil) * -xdir;
            dy = rand(ballRandFloor, ballRandCeil) * ydir;
            if (x >= canvas.width - 10) { //move the ball back onto the canvas to prevent jittering
                x = canvas.width - 10;
            } else {
                x = 10;
            }
        }
        if (y >= canvas.height - 10 || y <= 10) {
            dy = rand(ballRandFloor, ballRandCeil) * -ydir;
            dx = rand(ballRandFloor, ballRandCeil) * xdir;
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
        if (MODE === 'breakout') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var now = Date.now();
            if (bkVars.drawPauseDone == null) {
                bkVars.delta = now - then;
            } else {
                bkVars.drawPauseDone = null;
                bkVars.delta = 1;
            }
            updatePos(bkVars.delta / 1000);
            drawBall();
            bounce();
            then = now;
        } else {
            bkVars.drawPauseDone = true;
        }
        requestAnimFrame(draw);
    }
    var then = Date.now();
    requestAnimFrame(draw);
}
