function allIndexesOf(array, value) {
    let indexArray = [];
    // array.forEach(function (fruit) {
    //     if (fruit === value) {
    //         indexArray.push(array.indexOf(value));
    //     }
    // })
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            indexArray.push(array.indexOf(value, i));
        }
    }
    return indexArray;
}

let fruits = ['apple', 'banana', 'orange', 'apple', 'pineapple'];

console.log(allIndexesOf(fruits, 'apple'));

function removeAll(array, value) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, 'ant'));
console.log(removeAll(bugs, 'mosquito'))

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function twoDice(dice1, dice2){
    return randomIntBetween(1, dice1) + randomIntBetween(1, dice2);
}
function anyDice(diceSides){
    return randomIntBetween(1, diceSides);
}
console.log(`D2: ${(randomIntBetween(0, 1))}`);
console.log(`2D6: ${(twoDice(6, 6))}`);
console.log(`D20: ${(anyDice(20))}`);
console.log(`D12: ${(anyDice(12))}`);
console.log(`D4: ${(anyDice(4))}`);

function listOfRolls(num){
    let diceRollArray = [];
    for(let i = 0; i < num; i ++){
        let roll = anyDice(6);
        diceRollArray.push(roll);
    }
    return diceRollArray;
}
let amountOfDice = 7;
console.log(`Result of rolling ${amountOfDice}D6: ${listOfRolls(amountOfDice)}`);

function listOfDieRollsAnyDice(rolls, diceSides){
    let anyDiceRollArray = [];
    for(let i = 0; i < rolls; i++){
        let roll = anyDice(diceSides);
        anyDiceRollArray.push(roll);
    }
    return anyDiceRollArray;
}

let timesToRoll = 5;
let sidesOfDie = 20;

console.log(`Result of rolling ${timesToRoll}D${sidesOfDie}: ${listOfDieRollsAnyDice(timesToRoll, sidesOfDie)}`);

console.log("---------JS Array Practice----------");
/**
* JS Array Practice
* Intermediate Array practice: array creation, iteration, and manipulation
*/

// Exercise 0. Write a function named first() that returns only the first element of an array
console.log('---EX0---')
let arrayOfNumbers = ['1', '2', '3', '4', '5'];
console.log(`Array used for exercises 1 and 2: ${arrayOfNumbers}`);
function first(arr){
    return arr[0];
}
console.log(`Function that returns the first number: ${first(arrayOfNumbers)}`);

// Exercise 1. Write a function named secondToLast() that returns the second to last element
console.log('---EX1---');
function secondToLast(arr){
    return arr[arr.length-2];
}
console.log(`Function that returns the second to last number: ${secondToLast(arrayOfNumbers)}`);

// Exercise 2. Write a function named rest() that takes an array and returns an array containing everything except the first element.
console.log('---EX2---')
function rest(arr){
    return arr.shift();
}
rest(arrayOfNumbers);
console.log(arrayOfNumbers);

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]