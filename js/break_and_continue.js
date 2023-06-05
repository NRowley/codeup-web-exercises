//Break and Continue
console.log('Break and Continue Exercise');
let oddNum = parseInt(prompt("please enter an ODD number between 1 and 50"));
console.log(oddNum);

for (let i = 1; i < 100; i++) {
    if (oddNum % 2 != 0 && oddNum >= 1 && oddNum <= 49) {
        console.log(`${oddNum} is your number`);
        break;
    } else {
        oddNum = parseInt(prompt(`Attempt number: ${i}... I said enter an ODD number between 1 and 50`));
    }
}

// while(oddNum % 2 === 0){
//     oddNum = parseInt(prompt(`I said enter an ODD number between 1 and 50`));
//     console.log(oddNum);
//     break;
// }

for (let i = 1; i < 50; i++) {
    if (i === oddNum) {
        console.log(`Skipping ${oddNum}!!!`);
        continue;
    } else if (i % 2 == 0) {
        continue;
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}
