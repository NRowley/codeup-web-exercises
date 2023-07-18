"use strict"
//GLOBAL VARIABLES AND QUERIES////////////////
//MAPBOX
mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1,
    center: [8.25069, 49.99234]
});
let searchAddress;
let marker;
let addressHistory = [];
let savedAddresses = [];

//OPEN WEATHER
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
let currentWeatherData;
let weatherURL;
let dateFormat;
let localAvgTemp = [];
let avgTemp;

//QUERIES
const forecastCards = document.querySelector('.forecast-cards');
const forecastHeaderCity = document.querySelector('.forecast-header-city');
const searchTextBox = document.querySelector('.search');
const searchSubmitBtn = document.querySelector('#search-submit');
const historyHead = document.querySelector('#history-head');
const historyItems = document.querySelector('.history-col');
const savedHead = document.querySelector('#saved-head');
const savedItems = document.querySelector('.saved-col');
let historyItemButtons = document.querySelectorAll('.history-item');
let savedItemButtons = document.querySelectorAll('.saved-item');
let favStar = document.querySelectorAll('.fav-star');
const bodyBg = document.querySelector('body');
const forecastHeaderWrapper = document.querySelector('.forecast-header-wrapper');
let allForecastCards = document.querySelectorAll('.day-forecast-card');

//OTHER VARIABLES
const monthsArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let cardOpen = false;
let cardEvent;
let hiddenConditions;


//FUNCTIONS////////////////////////////
//WEATHER FUNCTIONS--------------------------------
function createWeatherURL(lon, lat) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

function getWeatherData(url) {
    $.ajax(url).done(data => {
        currentWeatherData = data;
        getFiveDayForecast(data);
    }).fail(console.error);
}

function renderForecastCard(forecast) {
    forecastHeaderWrapper.style.display = 'flex';
    forecastHeaderCity.innerHTML = (`
        <h3 class="forecast-city">${currentWeatherData.city.name.toUpperCase()}</h3>
    `);
    forecastCards.innerHTML = "";
    forecast.forEach((day) => {
        dateFormat = new Date(day.dt_txt);
        let dayDate = dateFormat.getDate().toString();
        let month = monthsArr[dateFormat.getMonth() - 1];
        let year = dateFormat.getFullYear();
        let sky = day.weather[0].description;

        forecastCards.innerHTML += (`
        <div class="day-forecast-card">
        <h4 class="h4-day">${dayDate}${month}${year}</h4>
        <p class="temp">${day.main.temp_max}&deg | ${day.main.temp_min}&deg</p>
        <div class="hide">
        <p class="conditions">Sky: ${day.weather[0].main}</p>
        <p class="conditions">Humidity: ${day.main.humidity}</p>
        <p class="conditions">Wind Speed: ${day.wind.speed}mph(?)</p>
        <p class="conditions">Pressure: ${day.main.pressure}</p>
        </div>
        </div>
    `)
    })
    allForecastCards = document.querySelectorAll('.day-forecast-card');
    calculateAvgTemp(localAvgTemp);
}

function calculateAvgTemp(temps) {
    let tempSum = temps[0] + temps [1] + temps [2] + temps [3] + temps [4];
    avgTemp = tempSum / 5;
    localAvgTemp = [];
    for (let i = 0; i < 5; i++) {
        if (avgTemp >= 95) {
            forecastCards.style.backgroundColor = '#ce5b3e';
            bodyBg.style.backgroundColor = '#410000';
        } else if (avgTemp >= 80) {
            forecastCards.style.backgroundColor = '#e3964f';
            bodyBg.style.backgroundColor = '#652d00';
        } else if (avgTemp >= 65) {
            forecastCards.style.backgroundColor = '#4ca273';
            bodyBg.style.backgroundColor = '#003d19';
        } else if (avgTemp >= 40) {
            forecastCards.style.backgroundColor = '#4f7fe1';
            bodyBg.style.backgroundColor = '#001848';
        } else if (avgTemp <= 35) {
            forecastCards.style.backgroundColor = '#74a1b2';
            bodyBg.style.backgroundColor = '#212d31';
        }

        if (temps[i] >= 95) {
            allForecastCards[i].style.backgroundColor = '#ce5b3e';
        } else if (temps[i] >= 80) {
            allForecastCards[i].style.backgroundColor = '#e3964f';
        } else if (temps[i] >= 65) {
            allForecastCards[i].style.backgroundColor = '#4ca273';
        } else if (temps[i] >= 40) {
            allForecastCards[i].style.backgroundColor = '#4f7fe1';
        } else if (temps[i] <= 35) {
            allForecastCards[i].style.backgroundColor = '#74a1b2';
        }
    }
    //
    // if (avgTemp >= 95) {
    //     allForecastCards.forEach((card) => {
    //         card.style.backgroundColor = '#ce5b3e';
    //     })
    // } else if (avgTemp >= 80) {
    //     bodyBg.style.backgroundColor = '#e3964f';
    // } else if (avgTemp >= 65) {
    //     bodyBg.style.backgroundColor = '#4ca273';
    // } else if (avgTemp >= 40) {
    //     bodyBg.style.backgroundColor = '#4f7fe1';
    // } else if (avgTemp < 35) {
    //     bodyBg.style.backgroundColor = '#74a1b2';
    // } else {
    //     bodyBg.style.backgroundColor = 'black';
    // }
}

function getFiveDayForecast(data) {
    let forecast = [];
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 === 0) {
            forecast.push(data.list[i]);
            localAvgTemp.push(data.list[i].main.temp_max);
        }
    }
    renderForecastCard(forecast);
    return (forecast);
}

//MAPBOX FUNCTIONS------------------------------
function createMarker(address) {
    geocode(address, MAPBOX_TOKEN).then(function (coordinates) {
        searchAddress = {
            coord: coordinates,
            name: address,
            info: ""
        }
        if (marker) {
            marker.remove();
        }
        marker = new mapboxgl.Marker().setLngLat(searchAddress.coord).addTo(map);
        goToPlace(searchAddress);
    })
}

function clickCreateMarker(event) {
    reverseGeocode(event.lngLat, MAPBOX_TOKEN).then(function (name) {
        let tempName = name.split(" ");
        let shortName = [];
        shortName.push(tempName[tempName.length - 1]);
        shortName.join();

        let coordinates = [event.lngLat.lng, event.lngLat.lat];
        searchAddress = {
            coord: coordinates,
            name: shortName,
            info: ""
        }
        if (marker) {
            marker.remove();
        }
        marker = new mapboxgl.Marker().setLngLat(event.lngLat).addTo(map);
        goToPlace(searchAddress);
    })
}

function renderAddressHistory(addresses) {
    historyItems.innerHTML = "";
    addresses.forEach((address) => {
        historyItems.innerHTML += (`
        <div class="history-item"><span class="history-item-name">${address.name}</span><span class="fav-star">&starf;</span></div>
        `)
        historyItemButtons = document.querySelectorAll('.history-item');
        favStar = document.querySelectorAll('.fav-star');
    })
}

function addToSaved(addresses) {
    console.log('adding to saved items')
    console.log(addresses);
    savedItems.innerHTML = "";
    addresses.forEach((address) => {
        savedItems.innerHTML += (`
        <div class="saved-item"><span class="saved-item-name">${address}</span></div>
        `)
        savedItemButtons = document.querySelectorAll('.saved-item');
    })
}

function historyUpdate(place) {
    if (addressHistory.length >= 10) {
        console.log('remove last');
        addressHistory.splice(9, 1);
        addressHistory.unshift(place);
    } else {
        addressHistory.push(place);
    }
}

function goToPlace(place) {
    map.setCenter(place.coord);
    map.setZoom(5);
    historyUpdate(place);
    weatherURL = createWeatherURL(...place.coord);
    renderAddressHistory(addressHistory);
    getWeatherData(weatherURL);
}

//EVENTS///////////////////////////////
map.on('click', (event) => {
    clickCreateMarker(event);
})
searchSubmitBtn.addEventListener('click', (event) => {
    map._marker = [];
    createMarker(searchTextBox.value);
})
historyItems.addEventListener('click', (event) => {
    console.log(event.target);
    let target = event.target;
    if (target.classList.contains('fav-star')) {
        let historyName = target.previousElementSibling.innerHTML;
        console.log(historyName);
        if (savedAddresses.includes(historyName)) {
            alert(`${historyName} is already in favorites!`);
        } else {
            // event.target.innerHTML = '&starf;';
            event.target.style.color = 'gold';
            savedAddresses.push(historyName);
            addToSaved(savedAddresses);
        }
    } else if (target.classList.contains('history-item-name')) {
        console.log('go to history');
        let historyName = target.innerHTML;
        console.log(historyName);
        createMarker(historyName);
    }
})
savedItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('saved-item-name')) {
        createMarker(event.target.innerHTML);
    }
})
forecastCards.addEventListener('mouseover', (event) => {
    if (cardOpen === false) {
        if (event.target.classList.contains('h4-day')) {
            hiddenConditions = event.target.nextElementSibling.nextElementSibling;
            cardEvent = event.target.parentElement;
            cardEvent.style.transform = 'translateY(-2rem)';
            cardEvent.style.borderBottom = "unset";
            hiddenConditions.style.display = 'unset';
            cardOpen = true;
        }
    }
})
forecastCards.addEventListener('mouseleave', (event) => {
    if (cardOpen) {
        cardEvent.style.transform = 'unset';
        cardEvent.style.borderBottom = 'solid 3px white'
        hiddenConditions.style.display = 'none';
        cardOpen = false;
    }
})
searchTextBox.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        createMarker(searchTextBox.value);
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        map.setZoom(map.getZoom() + 1);
    } else if (event.key === 'ArrowDown') {
        map.setZoom(map.getZoom() - 1);
    }
})

//RUN ON LOAD//////////////////////////

//DEMO
/**
 * returnMinMaxTemps destructures the OpenWeather 5 Day / 3 Hour Forecast API response to get the daily minimum
 *   and maximum temperatures using a list of 40 three-hour forecast blocks.
 * @param - the data from the API response
 * @returns - an array of objects that represent the minimum and maximum temperature of each forecast day.
 *   Example response:
 *   [
 *      {
 *          "date":"2023-07-14",
 *          "min":97.39,
 *          "max":106.63
 *      },
 *      {
 *          "date":"2023-07-15",
 *          "min":75.79,
 *          "max":105.75
 *      },
 *      etc.
 *   ]
 */
function returnMinMaxTemps({list}) {
    const minMaxTempDays = [];

    // loops through 40 three hour blocks of forecast and creates a new temperature object for each new day
    list.forEach(({dt_txt, main: {temp_max, temp_min}}) => {
        const [date, time] = dt_txt.split(' '); // splits the date time string
        if (minMaxTempDays.length === 0 || time.startsWith('00')) { // add a new forecast day for each new date
            minMaxTempDays.push({date, min: temp_min, max: temp_max});
        } else {
            // replace the current days min and max temps if a higher max or lower min is found throughout the day
            const currentMinMaxTemp = minMaxTempDays[minMaxTempDays.length - 1];
            const {min, max} = currentMinMaxTemp;
            if (min > temp_min) currentMinMaxTemp.min = temp_min;
            if (max < temp_max) currentMinMaxTemp.max = temp_max;
        }
    });

    return minMaxTempDays;
}

/*
    EXAMPLE OF USAGE:

    $.get(OPEN_WEATHER_API_URL)).done(data => {
            const minMaxTemps = returnMinMaxTemps(data);
            // use minMaxTemps data as needed
     });

 */