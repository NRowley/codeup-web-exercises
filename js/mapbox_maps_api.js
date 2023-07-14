"use strict"
//  variables and queries
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1,
    center: [8.25069, 49.99234]
});
let favRestaurants = [
    {
        coord: [8.242705459248796, 50.084878986536246],
        name: "Chookdee",
        info: "A thai restaurant in downtown Wiesbaden, Germany. While I absolutely love German food, this Thai restaurant is one of my favorite thai restaurants I've ever been to. It's also a restaurant my wife and I visited often while dating."
    },
    {
        coord: [10.179048886372575, 49.69687002346552],
        name: "Oma's",
        info: "A restauant/inn in Michelfeld; a tiny village I lived in when I was a kid in Germany. I used to visit this place often and had a close relationship with the owner/cook, who I called Oma."
    },
    {
        coord: [127.04955897624744, 37.0800480334133],
        name: "Mr. Kebab",
        info: `A very small restaurant right outside Osan Air Force Base's gate. I got kebab to go boxes from here frequently, after working long shifts or long nights out during my tour in Korea. I carried a punch card for a free kebab in my wallet for years after leaving the country... I never got that free kebab...`
    }
]
let navigator = document.querySelector('#navigator');
let navBtn = document.querySelectorAll('.navBtn')
let userNavigator = document.querySelector('#user-navigator');
let userAddresses = [];
let submitAddress = document.querySelector('#submit');
let userAddress = document.querySelector('#address');
let markerToggleBtn = document.querySelector('#markerToggle');
let showMarkerBtn = document.querySelector('#show-marker');
let currentLocation = document.querySelector('#current-location');



// FUNCTIONS ------------------------
function zoom(evenTarget) {
    if (evenTarget.innerHTML === "+") {
        map.setZoom(map.getZoom() + 2);
        console.log(`zoom in ${map.getZoom()}`)
    } else {
        map.setZoom(map.getZoom() - 2);
        if (map.getZoom() < 1) {
            map.setZoom(1);
        }
        console.log(`zoom out ${map.getZoom()}`)
    }

}
favRestaurants.forEach((place) => {
    let placeMarker = new mapboxgl.Marker().setLngLat(place.coord).addTo(map);
    let placePopup = new mapboxgl.Popup().setHTML(`<h1>${place.name}</h1><p>${place.info}</p>`);
    placeMarker.setPopup(placePopup);
    navigator.innerHTML += (`
    <button class="navBtn">${place.name}</button>
    `);
})
function goToPlace(place) {
    favRestaurants.forEach((restaurant) => {
        if (restaurant.name.includes(place.innerHTML)) {
            map.setCenter(restaurant.coord);
            currentLocation.innerHTML = "";
            currentLocation.innerHTML += `Current Location: ${place.innerHTML}`;
        }
    })
    userAddresses.forEach((address) => {
        if (address.name.includes(place.innerHTML)) {
            map.setCenter(address.coord);
            currentLocation.innerHTML = "";
            currentLocation.innerHTML += `Current Location: ${place.innerHTML}`;
        }
    })
};
let userAddressMarker = function (address) {
    console.log(address);
    geocode(address, MAPBOX_TOKEN).then(function (coordinates) {
        console.log('in user Marker function... adding new address to array')
        const newAddress = {
            coord: coordinates,
            name: address,
            info: ""
        }
        userAddresses.push(newAddress);
        console.log(userAddresses);
        const popup = new mapboxgl.Popup().setHTML(`
        ${address}
        `)
        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        map.setCenter(coordinates);
        renderUserAddresses();
    });
}
let renderUserAddresses = function () {
    userNavigator.innerHTML = "";
    userAddresses.forEach((place) => {
        userNavigator.innerHTML += (`
    <button class="navBtn">${place.name}</button>
    `);
        console.log('update navBtn')
        navBtn = document.querySelectorAll('.navBtn');
        console.log(navBtn);
    })
}
let hideShowMarkers = function (button) {
    console.log(button);
    console.log(map._markers[1]);
    console.log('attempting to hide markers');
    const markers = document.querySelectorAll('.mapboxgl-marker');
    console.log(markers[1]);
    if (button.innerHTML === "Hide Markers") {
        markers.forEach((marker) => {
            marker.style.visibility = 'hidden';
        })
    } else {
        markers.forEach((marker) => {
            marker.style.visibility = 'unset';
        })
    }
}



//EVENT LISTENERS-------------------------
document.querySelector('#zoom1').addEventListener('click', (event) => {
    zoom(event.target);
});
document.querySelector('#zoom2').addEventListener('click', (event) => {
    zoom(event.target);
});
submitAddress.addEventListener('click', (e) => {
    e.preventDefault();
    userAddressMarker(userAddress.value);
})
document.addEventListener('click', (event) => {
    console.log(event.target);
    goToPlace(event.target);
})
markerToggleBtn.addEventListener('click', (event) => {
    hideShowMarkers(event.target);
})
showMarkerBtn.addEventListener('click', (event) => {
    hideShowMarkers(event.target);
})
document.addEventListener("keyup", (event) => {
    console.log(event.code);
    if (event.code === 'Enter') {
        userAddressMarker(userAddress.value);
    }
})
