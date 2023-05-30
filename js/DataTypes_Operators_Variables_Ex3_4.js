//EXERCISE 3.1
//Amount of Days the movies were rented
let mermaidDaysRented  = prompt("how many days are you renting the Mermaid movie?");
let brotherBearDaysRented = prompt("how many days are you renting the bear movie?");
let herculesDaysRented = prompt("how many days are you renting Hercules?");
//Price of renting a movie per day
let moviePriceDollars = 3;
//calculate total cost of renting the movies
let totalPrice = moviePriceDollars * (parseInt(mermaidDaysRented) + parseInt(brotherBearDaysRented) + parseInt(herculesDaysRented));
console.log("Exercise 3.1: $" + totalPrice );
alert("the total cost of renting these movies will be $ " + totalPrice);

//EXERCISE 3.2
//hourly pay for each company
let googlePayDollars = 400;
let amazonPayDollars = 380;
let facebookPayDollars = 350;

//hours worked for each company
let facebookHoursWorked = prompt("how many hours did you work for FaceBook this week");
let googleHoursWorked = prompt("How many hours did you work for Google this week");
let amazonHoursWorked = prompt("How many hours did you work for Amazon this week?");

//calculate the paycheck for the week
let paycheck = (parseInt(googleHoursWorked)*googlePayDollars) + (parseInt(amazonHoursWorked)*amazonPayDollars) + (parseInt(facebookHoursWorked)*facebookPayDollars);
console.log("Exercise 3.2: Your paycheck for the week is $" + paycheck + "!");
alert("Exercise 3.2: Your paycheck for the week is $" + paycheck + "!");

//EXERCISE 3.3
//requirements to attend class
let classFull = confirm("Is this class full?");
let freeSchedule = confirm("Is your scedule free?");
//check if class may be attended
if(classFull == false && freeSchedule == true){
    console.log("Exercise 3.3: You may attend Class!");
    alert("Exercise 3.3: You may attend Class!");
    } else {
    console.log("Exercise 3.3: No class for you...");
    alert("Exercise 3.3: No class for you...");
    };

//EXERCISE 3.4
//discount requirements
let itemsBought = prompt("how many items are you purchasing?");
let premiumMember = confirm("Are you a Premium Member?");
let offerExpired = confirm("Is this offer expired?");

//check if discount requirements are met
if(offerExpired == false && (itemsBought >= 2 || premiumMember == true)){
    console.log("Exercise 3.4: You get a discount!");
    alert("Exercise 3.4: You get a discount!");
    } else {
    console.log("Exercise 3.4: Full Price...");
    alert("Exercise 3.4: Full Price...");
    };

//EXERCISE 4
//Input username and password
let username = prompt("enter your username");
let password = prompt("enter your password");

//username and password requirements
let passwordFiveCharOrMore = undefined;
let passwordIncludesUsername = undefined;
let usernameLessThanTwentyChar = undefined;
let usernameOrPasswordSpace = undefined;

//5 character minimum check for password
if(password.length >= 5){
    passwordFiveCharOrMore = true;
    } else {
    passwordFiveCharOrMore = false;
    };

//password includes username check
if(password.includes(username.trim())){
    passwordIncludesUsername = true;
    } else {
    passwordIncludesUsername = false;
    };

//username length 20 char maximum check
if(username.length <= 20){
    usernameLessThanTwentyChar = true;
    } else {
    usernameLessThanTwentyChar = false;
    };

//check if username or password has white space at the beginning or end
if(username[0] === " " || username[username.length-1] === " " || password[0] === " " || password[password.length-1] ===  " "){
    usernameOrPasswordSpace = true;
    } else {
    usernameOrPasswordSpace = false;
    };

//check if username and/or password meet requirements
if(passwordFiveCharOrMore == true && passwordIncludesUsername == false && usernameLessThanTwentyChar == true && usernameOrPasswordSpace == false){
    console.log("Exercise 4: Username and Password accepted");
    alert("Exercise 4: Username and Password accepted");
} else {
    console.log("Exercise 4: Username and/or Password do not meet requirements");
    alert("Username and/or Password do not meet requirements, check the log for details");
    if(passwordFiveCharOrMore == false){
        console.log("Password must be at least 5 characters");
    };
    if(passwordIncludesUsername == true){
        console.log("Password cannot include the username");
    };
    if(usernameLessThanTwentyChar == false){
        console.log("Username cannot be longer than 20 characters");
    };
    if(usernameOrPasswordSpace == true){
        console.log("username and/or password cannot begin or end with a space");
    };
};


