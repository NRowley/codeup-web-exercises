console.log('---In for_loops.js---')
//Multiplication table function
function showMultiplicationTable(x) {
    x = parseInt(x);
    for (let i = 1; i < 11; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
        // console.log("")
    }
}

//RNG function
function randomNumberGenerator(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

//Multiplication table exercise
let userNumber = prompt(`please enter a number`);
console.log(`Generating multiplication table for ${userNumber}`);
showMultiplicationTable(userNumber);

//Even and Odd Random Number Exercise
let randomNumberChecker = confirm("Would you like to check for even and odd numbers?");

if (randomNumberChecker == true) {
    for (let i = 0; i < 10; i++) {
        let number = randomNumberGenerator(20, 200);
        if (number % 2 == 0) {
            console.log(`${number} is even`);
        } else {
            console.log(`${number} is odd`);
        }
    }
} else {
    console.log("Even and Odd random number checker canceled");
}

//Number Pyramid Exercise
let numberPyramid = confirm("Want to see the number pyramid?");

if (numberPyramid == true) {
    for (let i = 1; i < 10; i++) {
        console.log(`${i.toString().repeat(i)}`);
    }
} else {
    console.log("Number pyramid canceled");
}

//Count down by 5 from 100 exercise
let fiveCountDown = confirm("Do you wanna count down by 5 from 100?");

if (fiveCountDown == true) {
    for (let i = 100; i > 0; i = i - 5) {
        console.log(i);
    }
} else {
    console.log("Five count down canceled");
}
