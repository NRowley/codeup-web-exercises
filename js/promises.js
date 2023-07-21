const GIT_TOKEN = GIT_ACCESS_TOKEN;
const docBody = document.querySelector('body');
//USING FETCH AND THEN////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// const url = "https://api.github.com/users/NRowley/events"
// const options = {
//     method: "GET",
//     headers: {
//         'Authorization': GIT_TOKEN
//     }
// }

// const getGitUser = (userName) => {
//     const url = `https://api.github.com/users/${userName}/events`;
//     const options = {
//         method: "GET",
//         headers: {
//             'Authorization': GIT_TOKEN
//         }
//     }
//     return fetch(url, options)
//         .then(response => response.json())
//         .catch(error => console.log(error.message));
// }


// (() => {
// //Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
//
//     let userName = prompt('Enter a gitHub Username:');
//     getGitUser(userName).then((data) => {
//         console.log(data);
//         let pushEvent = data.filter(event =>{
//             return event.type === 'PushEvent';
//         })
//         // console.log(pushEvent);
//         let pushEventDate = new Date(pushEvent[0].created_at);
//         docBody.innerHTML += `${userName}'s latest push was at: ${pushEventDate}`;
//     });
//
// })();

//ASYNC///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const getGitUser = async (userName) => {
    try {
        const url = `https://api.github.com/users/${userName}/events`;
        const options = {
            method: "GET",
            headers: {
                'Authorization': GIT_TOKEN
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error.message);
    }

}

(async () => {
    let userName = prompt('Enter a UserName');
    const userEvents = await getGitUser(userName);
    const pushEvents = userEvents.filter((event) => {
        return event.type === 'PushEvent';
    })
    let lastPushDate = new Date(pushEvents[0].created_at)
    console.log(lastPushDate);
    docBody.innerHTML += `${userName}'s last push was at: ${lastPushDate}`

})();