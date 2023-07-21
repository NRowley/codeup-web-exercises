const getPerson = (id) => {
    const url = `https://swapi.dev/api/people/${id}/`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error =>{
            console.log(error.message);
        })
    // .then((data) => {
    //     console.log(data);
    // });
}
const getFilm = (url) =>{
    const filmUrl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .catch(error =>{
            console.log(error.message);
        })
        // .then((film) => {
        //     console.log(film);
        // })
}

(() => { // IIFE (Immediately Invoked Function Expression)

    getPerson(69).then((person)=>{
        console.log(person);
        getFilm(person.films[0]).then(film =>{
            console.log(film);
        })
    });

})();