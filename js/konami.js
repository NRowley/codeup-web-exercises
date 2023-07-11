"use strict";
//UP - 38
//DOWN - 40
//L - 37
//R - 39
// test area

let game = {
    playerLives: ($("#lives").children()).length,
    iconPresent: false,
    success: false,
    hits: 0,
    start: false
};
const up = 38;
const down = 40;
const left = 37;
const right = 39;

let iconDirections = ["&larr", "&uarr", "&darr", "&rarr"];
// let konamiCodeInput = [];
// let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let generateIconsIntervalId;

let gameOver = function (){
    let gameOverConfirm = confirm("Play Again?");
    if(gameOverConfirm){
        location.reload();
    } else {
        $("body").html("THANKS FOR PLAYING");
    }
}
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
    } else if (direction === 3) {
        $('.game-icon').html("&rarr;");
    }
    return direction;
}
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
        generateIconsIntervalId = setInterval(generateIcons, (500 - ((game.hits + 1) * 100)));
    } else if ($('#start').html() === `RESUME`) {
        console.log(`RESUME GAME`);
        $('#start').css('background-color', 'grey');
        $('#start').css('color', 'black');
        $('#start').html('PAUSE');
        generateIconsIntervalId = setInterval(generateIcons, (500 - ((game.hits + 1) * 100)));
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
        if(game.success){
            $('.game-icon').css('background-color', 'blue');
            $('.game-icon').css('color', 'white');
            $('.game-icon').html("SUCCESS");
            clearInterval(generateIconsIntervalId);
            setTimeout(gameOver(), 500);
        }

        if(!game.success){
            if (parseInt(newHeight) === 75) {
                $('.game-icon').css('background-color', 'orange');
            } else if (parseInt(newHeight) === 60) {
                $('.game-icon').css('background-color', 'red');
            } else if (parseInt(newHeight) === 35) {
                $('.game-area').html("");
                game.iconPresent = false;
                $('.heart').last().remove();
                if (game.playerLives === 0) {
                    gameOver();
                    clearInterval(generateIconsIntervalId);
                }
                game.playerLives--;
            }
        }
    }
};

//code is in html for exercise
// $(document).keyup(function (event) {
//     console.log(event.keyCode);
//     konamiCodeInput.push(event.keyCode);
//     console.log(`Code Input: ${konamiCodeInput}`);
//     if(game.start) {
//         let input;
//         if (event.keyCode === 38) {
//             input = "&uarr";
//         } else if (event.keyCode === 40) {
//             input = "&darr";
//         } else if (event.keyCode === 37) {
//             input = "&larr";
//         } else if (event.keyCode === 39) {
//             input = "&rarr";
//         }
//         if (input === iconDirections[inputGenerator()]) {
//             $('.game-icon').css('background-color', 'blue');
//             game.success = true;
//         }
//
//     } else if (!game.start){
//         let i = 0;
//         if (konamiCodeInput[i] != konamiCode[i]) {
//             konamiCodeInput = [];
//         } else if (konamiCodeInput.toString() === konamiCode.toString()) {
//             alert(`Success! Extra-lives +30!`);
//             addHearts();
//         }
//         if (event.keyCode === 32) {
//             game.start = true;
//             startBtn();
//         }
//     }
// });



