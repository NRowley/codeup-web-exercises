// "use strict"
(() => {
    const url = '../data/houses.json';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            //working with the houses array
            let housesXBedrooms = [];
            //forEach way
            // data.forEach((house) => {
            //     if (parseFloat(house.beds) >= 4) {
            //         housesXBedrooms.push(house);
            //     }
            // });

            //filterWay
            const houses4Beds = data.filter(house=>{
                return parseFloat(house.beds) >= 4;
            })
            console.log(houses4Beds);
        });


})();