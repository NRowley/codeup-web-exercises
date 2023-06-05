let number = 1;
while(number < 65536){
    number = number + number;
    console.log(number);
}

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesSold = Math.floor(Math.random() * 5) +1;
    // let sellCones = allCones - conesSold;

    if(allCones >= conesSold){
        console.log(`${conesSold} cones sold!`);
        allCones = allCones - conesSold;
        if (allCones === 0){
            console.log("Sold out!")
        }
    } else if(allCones < conesSold) {
        console.log(`Sorry, I can't sell ${conesSold}, I only have ${allCones}...`);
    }
}while(allCones > 0);
