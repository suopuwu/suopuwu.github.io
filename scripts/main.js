//appease the lint gods
//if you're looking for something to do, search fix or todo
var MODE = 'intro',
    DONEZO = [
        true, //home
        false, //breakout
        false //debug
    ],
    $,
    firebase,
    window,
    document,
    setTimeout,
    setInterval,
    requestAnimFrame,
    CanvasRenderingContext2D,
    //the age of the webpage, incrementing every 50 miliseconds
    AGE = (function () {
        var counter = 0;
        return function () {
            return counter += 0.05;
        };
    })();
//the keys that are down
var keysDown = {};
//the id of the current window
var CURRENTWINDOW = 0;
//the ids of the screens in order of cascade
var SCROLLORDER = ['#home'];
//TODO the beginnings of Firebase (hopefully)
var database = firebase.database();
// Get a key for a new user.
var newuid = firebase.database().ref().child('users').push().key;
/*██████   █████  ███████ ███████
  ██   ██ ██   ██ ██      ██
  ██████  ███████ ███████ █████
  ██   ██ ██   ██      ██ ██
  ██████  ██   ██ ███████ ███████*/


//firebase stuff
function addUser(userName, userId) { //IMPORTANT this is how you write to the database
    database.ref('users/' + userId).set({
        userName: userName
    });
}
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
        case 'home':
                return 0;

        case 'breakout':
                return 1;

        case 'debug':
                return 2;

    }
}

// function writeLine(what_to_log) {
//     //the below comment is for my bad webpage specific solution
//     //$('#debug').prepend('<li>' + what_to_log + '</li>');
//     window.console.log(what_to_log);
// }

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
/*███    ███  █████  ██ ███    ██
  ████  ████ ██   ██ ██ ████   ██
  ██ ████ ██ ███████ ██ ██ ██  ██
  ██  ██  ██ ██   ██ ██ ██  ██ ██
  ██      ██ ██   ██ ██ ██   ████*/



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
        if (AGE() >= 5) {
            window.clearInterval(ageInterval);
        }
    }
    setTimeout(aaa, 3000);
    setTimeout(aab, 2000);
    var ageInterval = setInterval(aac, 50);

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
        addUser('dummy', newuid);
        if (DONEZO[getMode('debug')] === false && AGE() >= 2) {
            newWindow('#debugDiv');
        } else if (AGE() >= 2) {
            removeWindow('#debugDiv');
        }
    });

  /*██ ███    ██ ██████  ██    ██ ████████ ███████
    ██ ████   ██ ██   ██ ██    ██    ██    ██
    ██ ██ ██  ██ ██████  ██    ██    ██    ███████
    ██ ██  ██ ██ ██      ██    ██    ██         ██
    ██ ██   ████ ██       ██████     ██    ███████*/
    //runs on scroll
    window.addEventListener('resize', CurrentWindowScroll, false);

    function CurrentWindowScroll() {
        scrollTo(SCROLLORDER[CURRENTWINDOW]);
    }
    $(window).on('wheel', function (e) {
        var scrollNum = e.originalEvent.deltaY;
        if (scrollNum < 0 && CURRENTWINDOW > 0) { //on scroll up
            CURRENTWINDOW -= 1;
            scrollTo(SCROLLORDER[CURRENTWINDOW]);
            MODE = removeHash(SCROLLORDER[CURRENTWINDOW]);

        } else if (scrollNum > 0 && CURRENTWINDOW !== SCROLLORDER.length - 1) { //on scroll down
            CURRENTWINDOW += 1;
            scrollTo(SCROLLORDER[CURRENTWINDOW]);
            MODE = removeHash(SCROLLORDER[CURRENTWINDOW]);
        }
    });

    //runs on keypress
    $(document).keydown(function (event, char) {
        char = event.which; //identify what char was pressed
        keysDown[event.keyCode] = true;
        switch (char) {
            case 27:
                scrollTo('#home');
                MODE = null;
                CURRENTWINDOW = 0;
        }

        switch (MODE) { //handles how to accept inputs depending on mode
            default: //home mode
                break;
            case 'intro':
                    skipIntro();
                MODE = null;
                break;
            case 'breakout':
                    breakoutInputs(char);
                break;
            case 'debug':
                    break;

        }
    });
    $(document).keyup(function (event, char) {
        char = event.which;
        delete keysDown[event.keyCode];
    });
    $(document).click(function () {
        switch (MODE) {
            case 'intro':
                skipIntro();
        }
    });


});

/*██████  ██████  ███████  █████  ██   ██  ██████  ██    ██ ████████
  ██   ██ ██   ██ ██      ██   ██ ██  ██  ██    ██ ██    ██    ██
  ██████  ██████  █████   ███████ █████   ██    ██ ██    ██    ██
  ██   ██ ██   ██ ██      ██   ██ ██  ██  ██    ██ ██    ██    ██
  ██████  ██   ██ ███████ ██   ██ ██   ██  ██████   ██████     ██*/


var BKVARS = {
    paddlePosX: 500,
    paddlePosY: null,
    drawPauseDone: null,
    delta: null,
    paddleSpeed: $('#lay1').height / 2
};
//input handling
function breakoutInputs(char) {

}

function breakout() {
    var canvas = document.getElementById("lay1");
    var canvas2 = document.getElementById("lay2");
    //settings
    var settings = {
        spinnyBall: true
    };

    function resizeCanvas() {
        if (ctx) {
            setTimeout(resetColor, 15);
        }
        canvas.width = window.innerWidth;
        canvas2.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas2.height = window.innerHeight;
    }

    function resetColor() {
        ctx.fillStyle = '#fff';
    }
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas, false);

    var ctx = canvas.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 1.5;
    var dx = -200;
    var dy = -200;
    var xdir = 1;
    var ydir = 1;
    var ballRandFloor = canvas.height / 3;
    var ballRandCeil = canvas.height / 1.5;
    var paddleWidth = 160;
    var paddleheight = 15;
    var brickSpace = [];
    var prevX = 0;
    var prevY = 0;
    BKVARS.paddlePosX = canvas.width / 2;
    BKVARS.paddlePosX = canvas.width / 2;
    BKVARS.paddlePosY = canvas.height - 35;
    BKVARS.paddleSpeed = canvas.width / 1.5;
    var brickWidthForBreakout;

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
        if (x >= canvas.width - 10 || x <= 10) { //bounce on walls
            dx = rand(100, ballRandCeil) * -xdir;
            dy = rand(ballRandFloor, ballRandCeil) * ydir;
            if (x >= canvas.width - 10) { //move the ball back onto the canvas to prevent jittering
                x = canvas.width - 10;
            } else {
                x = 10;
            }
        }
        if (y >= canvas.height - 10 || y <= 10) { //bounce on ceiling and floor
            dy = rand(ballRandFloor, ballRandCeil) * -ydir;
            dx = rand(100, ballRandCeil) * xdir;
            if (y >= canvas.height - 10) { //same as above
                y = canvas.height - 10;
                kaboom(x - 10, y - 10, 20);
            } else {
                y = 10;
            }
        }
        $.each(brickSpace, function (idx, val) {
            $.each(val, function (index, value) { //value[0] is min x [1] is max x [2] is min y [3] is max y
                if (y <= value[3] + 10 && y >= value[2] - 10 && x >= value[0] - 10 && x <= value[1] + 10) {
                    if (prevY >= value[3] + 10 || prevY <= value[2] - 10) {
                        dy = rand(ballRandFloor, ballRandCeil) * -ydir;
                        dx = rand(100, ballRandCeil) * xdir;
                    }
                    if (prevX <= value[0] - 10 || prevX >= value[1]) {
                        dx = rand(100, ballRandCeil) * -xdir;
                        dy = rand(ballRandFloor, ballRandCeil) * ydir;
                    }
                    ctx2.clearRect(value[0] - 1, value[2] - 1, value[1] - value[0] + 2, value[3] - value[2] + 2);
                    brickSpace[idx][index].splice(0, 4);
                    kaboom(value[0], value[2], 20);
                }
            });


        });
        if (y >= BKVARS.paddlePosY - paddleheight &&
            x >= BKVARS.paddlePosX - (paddleWidth / 2) &&
            x <= BKVARS.paddlePosX + (paddleWidth / 2)
        ) {
            dy = rand(ballRandFloor, ballRandCeil) * -ydir;
            dx = rand(100, ballRandCeil) * xdir;
            y = BKVARS.paddlePosY - paddleheight;
        }
    }

    ctx.fillStyle = '#fff';
    ctx2.fillStyle = '#fff';

    var spinnyBall = (function () {
        var angle = 0;
        return function () {
            angle++;
            return angle;
        };
    })();

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function clearCanvas2() {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
    }

    var drawBall = (function () { //draws it
        if (settings.spinnyBall === true) {
            drawBall = (function () {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(spinnyBall() * Math.PI / 180);
                ctx.fillRect(-10, -10, 20, 20);
                ctx.restore();
            });
        } else {
            drawBall = (function () {
                ctx.save();
                ctx.translate(x, y);
                ctx.fillRect(-10, -10, 20, 20);
                ctx.restore();
            });
        }
    });
    drawBall();

    function drawPaddle() {
        ctx.fillRect((BKVARS.paddlePosX - (paddleWidth / 2)), //make centered
            BKVARS.paddlePosY, paddleWidth, paddleheight);
    }

    function updateValues(modifier) {
        //update the ball position
        prevX = x;
        prevY = y;
        x += dx * modifier;
        y += dy * modifier;
        //update the paddle position
        if (65 in keysDown === true &&
            BKVARS.paddlePosX >= paddleWidth / 2 ||
            37 in keysDown === true && //left arrow
            BKVARS.paddlePosX >= paddleWidth / 2
        ) {
            if (16 in keysDown === false) { //shift
                BKVARS.paddlePosX -= BKVARS.paddleSpeed * modifier;
            } else {
                BKVARS.paddlePosX -= BKVARS.paddleSpeed * modifier / 3;
            }
        }
        if (68 in keysDown === true && //d
            BKVARS.paddlePosX <= (canvas.width - (paddleWidth / 3)) ||
            39 in keysDown === true && //right arrow
            BKVARS.paddlePosX <= (canvas.width - (paddleWidth / 3))
        ) {
            if (16 in keysDown === false) { //shift
                BKVARS.paddlePosX += BKVARS.paddleSpeed * modifier;
            } else
                BKVARS.paddlePosX += BKVARS.paddleSpeed * modifier / 3;

        }
    }

    function kaboom(kBoomX, kBoomY, particleNum) {
        var counter = 0;
        while (counter <= particleNum) {
            var temp = new PartCon();
            temp.x = kBoomX;
            temp.y = kBoomY;
            temp.dx = rand(-250, 250);
            temp.dy = rand(-250, 250);
            particles.push(temp);
            counter++;
        }
    }

    //constructor for particles
    function PartCon(x, y, life, width, height, color, dx, dy, shape) {
        this.age = 0;
        this.life = 60;
        if (!this.life) {
            this.life = life;
        }
        this.deathLife = 10;
        this.dying = false;
        this.deathAnim = 'fade';
        this.width = 10;
        if (!this.width) {
            this.width = width;
        }
        this.height = 10;
        if (!this.height) {
            this.height = height;
        }
        this.opacity = 1;
        this.x = 0;
        if (!this.x) {
            this.x = x;
        }
        this.y = 0;
        if (!this.y) {
            this.y = y;
        }
        this.dx = 0;
        if (!this.dx) {
            this.dx = dx;
        }
        this.dy = 0;
        if (!this.dy) {
            this.dy = dy;
        }
        this.color = '#fff';
        if (!this.color) {
            this.color = color;
        }
        this.shape = 'rect';
        if (this.shape) {
            this.shape = 'rect';
        }
        this.update = (function (modifier, pId) {
            this.age++;
            this.x += this.dx * modifier;
            this.y += this.dy * modifier;
            if (this.age === this.life) {
                this.dying = true;
            }
            if (this.age === this.life + this.deathLife) {
                particles.splice(pId, 1);
            }
            if (this.dying === true) {
                switch (this.deathAnim) {
                    case 'fade':
                        this.opacity -= 1 / this.deathLife;
                        if (this.opacity <= 0) {
                            this.opacity = 0;
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    }

    var particles = [
    ];

    function drawParticle(pId, val, modifier) {
        if (particles[pId]) {
            ctx.save();
            ctx.globalAlpha = val.opacity;
            if (val.shape === 'rect') {
                ctx.fillRect(val.x, val.y, val.width, val.height);
            }
            ctx.restore();
            val.update(modifier, pId);
        }
    }

    function drawBricks(bricksPerRow, rows) {
        if (!bricksPerRow) {
            bricksPerRow = 10;
        }

        if (!rows) {
            rows = 4;
        }
        var brickWidth = (canvas.width - 20) / bricksPerRow - 20;
        var bricks = 0;
        var row = 0;
        var counter1 = 0;
        var counter2 = 0;
        console.log(brickWidth);
        while (counter1 < rows) {
            brickSpace.push([]);
            while (counter2 < bricksPerRow) {
                brickSpace[counter1].push([counter2 * 20 + 20 + (counter2 * brickWidth), //x min
                    (counter2 * 20) + 20 + ((counter2 + 1) * brickWidth), //x max
                    (counter1 * 20) + 20 + (counter1 * brickWidth / 2), //y min
                    (counter1 * 20) + 20 + (counter1 * brickWidth / 2) + (brickWidth / 2)]); //y max
                counter2++;
            }
            counter2 = 0;
            counter1++;
            console.log(brickSpace);
        }
        while (bricks < bricksPerRow) {
            ctx2.fillRect((20 + (bricks * 20) + (bricks * brickWidth)), 20 + (row * brickWidth / 2) + (row * 20), brickWidth, brickWidth / 2);
            bricks++;
            if (bricks === bricksPerRow && row !== rows - 1) {
                bricks = 0;
                row++;
            }
        }
    }

    drawBricks();

    function breakoutDraw() { //clears canvas and invokes drawball and makes new pos
        if (MODE === 'breakout') {
            var now = Date.now();
            clearCanvas();
            //makes delta a different value depending on whether it was lag or moving away from the window
            if (BKVARS.drawPauseDone === null) {
                BKVARS.delta = now - then;
            } else {
                BKVARS.drawPauseDone = null;
                BKVARS.delta = 1;
            }
            updateValues(BKVARS.delta / 1000);
            $.each(particles, (function (index, val) {
                drawParticle(index, val, (BKVARS.delta / 1000));
            }));
            drawPaddle();
            drawBall();
            bounce();
            then = now;
        } else {
            BKVARS.drawPauseDone = true;
        }
        var breakoutLoop = requestAnimFrame(breakoutDraw);
    }
    var then = Date.now();
    var breakoutLoop = requestAnimFrame(breakoutDraw);
}
