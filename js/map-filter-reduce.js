"use strict"
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
console.log(`#1: .filter-------------------`)
const threeLangs = users.filter((user) => {
    if (user.languages.length >= 3) {
        return user;
    }
})
console.log(threeLangs);

// Use .map to create an array of strings where each element is a user's email address
console.log(`#2: .map----------------------`)
const userEmails = users.map((user) => {
    return user.email;
})
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
console.log(`#3: .reduce---------------------`)
const totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)

console.log(totalExp);

// Use .reduce to get the longest email from the list of users.

console.log(`#4: .reduce again------------------`)
const longestEmail = users.reduce((longest, user) => {
    console.log(`${user.email}, ${user.email.length}`);
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
}, "")
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
console.log(`#5: .reduce AGAIN-------------------`)

const getInstructors = users.reduce((instructorNames, user) => {
    instructorNames += ` ${user.name},`;
    return instructorNames;
}, "")

console.log(`Your instructors are: ${getInstructors}`)