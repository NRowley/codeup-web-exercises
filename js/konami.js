"use strict";
//UP - 38
//DOWN - 40
//L - 37
//R - 39
// test area

let game = {
    playerLives: ($("#lives").children()).length,
    iconPresent: false,
    input: false
};
const up = 38;
const down = 40;
const left = 37;
const right = 39;

let iconDirections = [up, down, left, right];
let konamiCodeInput = [];
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let generateIconsIntervalId;

//Game functions
let inputGenerator = function () {
    const direction = Math.floor(Math.random() * (iconDirections.length));
    console.log(`Direction: ${direction}`);
    console.log(iconDirections[direction]);
    if (direction === 0) {
        $('.game-icon').html("&larr;");
    } else if (direction === 1) {
        $('.game-icon').html("&uarr;");
    } else if (direction === 2) {
        $('.game-icon').html("&darr;");
    } else if (direction === 3)
    {
        $('.game-icon').html("&rarr;");
    }
}

let inputChecker = function (key) {
    if (key === 0) {
        console.log(`success`);
    }
};
let addHearts = function () {
    for (let i = 0; i < 30; i++) {
        $("#lives").append("<span class='heart'>&#10084;<span>");
    }
    game.playerLives = ($("#lives").children()).length;
};
let startBtn = function () {
    if ($('#start').html() === `START`) {
        console.log(`GAME START`);
        $('#start').css('background-color', 'grey');
        $('#start').css('color', 'black');
        $('#start').html('PAUSE');
        generateIconsIntervalId = setInterval(generateIcons, 100);
    } else if ($('#start').html() === `RESUME`) {
        console.log(`RESUME GAME`);
        $('#start').css('background-color', 'grey');
        $('#start').css('color', 'black');
        $('#start').html('PAUSE');
        generateIconsIntervalId = setInterval(generateIcons, 100);
    } else if ($('#start').html() === `PAUSE`) {
        console.log(`GAME PAUSED`);
        $('#start').css('background-color', 'orangered');
        $('#start').css('color', 'white');
        $('#start').html('RESUME');
        clearInterval(generateIconsIntervalId);
    }
};
let generateIcons = function () {
    if (!game.iconPresent) {
        $('.game-area').html('<span class="game-icon"></span>');
        inputGenerator();
        game.iconPresent = true;
    } else if (game.iconPresent) {
        let newHeight = `${parseInt($('.game-icon').css('height')) - 5}px`;
        let newWidth = `${parseInt($('.game-icon').css('width')) - 5}px`;
        $('.game-icon').css('height', newHeight);
        $('.game-icon').css('width', newWidth);
        if (parseInt(newHeight) === 75) {
            $('.game-icon').css('background-color', 'orange');
        } else if (parseInt(newHeight) === 60) {
            $('.game-icon').css('background-color', 'red');
        } else if (parseInt(newHeight) === 35) {
            $('.game-area').html("");
            game.iconPresent = false;
            $('.heart').last().remove();
            if (game.playerLives === 0) {
                confirm(`GAME OVER... Continue?`);
                clearInterval(generateIconsIntervalId);
            }
            game.playerLives--;
        }
    }
};

$(document).keyup(function (event) {
    console.log(event.keyCode);
    konamiCodeInput.push(event.keyCode);
    console.log(`Code Input: ${konamiCodeInput}`);
    let i = 0;
    if (konamiCodeInput[i] != konamiCode[i]) {
        konamiCodeInput = [];
    } else if (konamiCodeInput.toString() === konamiCode.toString()) {
        alert(`Success! Extra-lives +30!`);
        addHearts();
    }
    if (event.keyCode === 32) {
        startBtn();
    }
});
//check key input
$(document).keyup(function (e) {
    if (game.input === false) {

    }
})
// $('#start').on('click', function (){
//     startBtn();
// });



