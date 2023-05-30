//EXERCISE 4
//Input username and password
let username = prompt("enter username");
let password = prompt("enter password");

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
    alert("Username and Password accepted");
} else {
    console.log("Exercise 4: Username and/or Password do not meet requirements");
    if(passwordFiveCharOrMore == false){
        console.log("Password must be at least 5 characters");
        alert("Password must be at least 5 characters");
    };
    if(passwordIncludesUsername == true){
        console.log("Password cannot include the username");
        alert("Password cannot include the username");
    };
    if(usernameLessThanTwentyChar == false){
        console.log("Username cannot be longer than 20 characters");
        alert("Username cannot be longer than 20 characters");
    };
    if(usernameOrPasswordSpace == true){
        console.log("username and/or password cannot begin or end with a space");
        alert("username and/or password cannot begin or end with a space");
    };
};