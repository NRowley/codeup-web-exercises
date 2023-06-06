console.log('---In while.js---')
//Exponential Exercise
let number = 1;
while (number < 65536) {
    number += number;
    console.log(number);
}

//The Ice Cream one...
let allCones = Math.floor(Math.random() * 50) + 50;
console.log(`${allCones} cones for today`);
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;

    if (allCones >= conesSold) {
        console.log(`${conesSold} cones sold!`);
        allCones = allCones - conesSold;
        if (allCones === 0) {
            console.log("Sold out!")
        }
    } else if (allCones < conesSold) {
        console.log(`Sorry, I can't sell ${conesSold} cones, I only have ${allCones}...`);
    }
} while (allCones > 0);
