const GIT_TOKEN = GIT_ACCESS_TOKEN;
const url = "https://api.github.com/users/NRowley/events"
const options = {
    method: "GET",
    headers: {
        'Authorization': GIT_TOKEN
    }
}

const getGitUser = (userName) => {
    const url = `https://api.github.com/users/${userName}/events`;
    const options = {
        method: "GET",
        headers: {
            'Authorization': GIT_TOKEN
        }
    }
    return fetch(url, options)
        .then(response => response.json()
            .then(commits => {
                return commits[0].created_at;
            }))
        .catch(error => console.log(error.message));
}


(() => {
//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

    getGitUser(`NRowley`).then((latestCommit) => {
        // console.log(data[0].created_at);
        console.log(latestCommit);
    });

})();