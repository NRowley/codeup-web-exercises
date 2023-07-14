"use strict"

//Global Variables
const map = initMap();
const marker = createMarker();
const popup = createPopup();

//Functions
// Function that initializes the map
function initMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v12',
        zoom: 0.1,
        center: {
            "lng": 0.51201,
            "lat": 52.34272
        }
    }

    return new mapboxgl.Map(mapOptions);
}

//Function that creates a marker at wherever
function createMarker() {
    return new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4260])
        .addTo(map);
}

//Function that creates a popup
function createPopup() {
    return new mapboxgl.Popup()
        .setLngLat([-98.4916, 29.4260])
        .setHTML(`
    <div>
    <h1>CODEUPPPPPPPPPPPPPP</h1>
    <p>COOOOOOOOOODEUPPPPPPPPPPPPPP</p>
</div>
    `)
}

function goToMainz() {
    geocode("En Thai Sing, 42 St Andrew's St, Mildenhall, Bury Saint Edmunds IP28 7HB, United Kingdom", MAPBOX_TOKEN).then((data) => {
        console.log(data);
        map.setCenter(data);
    });
}

function findAndPrintLocation() {
    const coords = map.getCenter();
    console.log(coords);
    reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
        console.log(data);
        document.querySelector('h1').innerHTML = (`
        ${data};
        `)
    });
}

function markMainzKastel(){
    geocode('Mainz-Kastel, Germany', MAPBOX_TOKEN).then((data)=>{
        console.log(data);
        const mainzKastelPopup = new mapboxgl.Popup().setHTML(`
        <p>we met here!</p>
        `);
        const mainzKastelMarker = new mapboxgl.Marker().setLngLat(data).addTo(map).setPopup(mainzKastelPopup);
        mainzKastelPopup.addTo(map);
    })
}

//Events
document.querySelector('#geocode-btn').addEventListener('click', goToMainz);
document.querySelector('#reverse-geocode-btn').addEventListener('click', findAndPrintLocation);
document.querySelector('#mark-mainz-kastel').addEventListener('click', markMainzKastel);
//Runs when program loads
map.setZoom(10);
marker.setPopup(popup);