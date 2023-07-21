const getPerson = async (id) => {
    try {
        const url = `https://swapi.dev/api/people/${id}/`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options);
        const person = await response.json();
        return person;
    } catch (error) {
        console.log(error.message);
    }
}
const getFilm = async (url) => {
    try {

        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}



(async () => {
    const person = await getPerson(69);
    console.log(person);
    const firstFilm = await getFilm(person.films[0]);
    console.log(firstFilm);
})();