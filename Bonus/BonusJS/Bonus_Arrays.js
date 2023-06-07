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
