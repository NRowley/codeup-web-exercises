"use strict"
//GLOBAL VARIABLES AND QUERIES////////////////
//MAPBOX
mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    zoom: 1,
    center: [8.25069, 49.99234]
});

//OPEN WEATHER
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
let currentWeatherData;
//QUERIES
const forecastCards = document.querySelector('.forecast-cards');
const forecastHeader = document.querySelector('.forecast-header');
//Subject to change...
const SAN_ANTONIO_COORD = ['29.4260', '-98.4861'];
console.log(...SAN_ANTONIO_COORD);
const URL = createWeatherURL(...SAN_ANTONIO_COORD);



//FUNCTIONS////////////////////////////
function createWeatherURL(lat, lon) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

function getWeatherData(url){
    $.ajax(url).done(data => {
        currentWeatherData = data;
        console.log(currentWeatherData);
        getFiveDayForecast(data);
    }).fail(console.error);
}

function renderForecastCard(forecast){
    console.log('rendering cards')
    console.log(currentWeatherData);
    forecastHeader.innerHTML = (`
        <h3 class="forecast-city">${currentWeatherData.city.name.toUpperCase()}</h3>
    `);
    forecastCards.innerHTML = "";
    forecast.forEach((day) => {
        forecastCards.innerHTML += (`
        <div class="day-forecast-card">
        <h4 class="h2-day">Day: ${day.dt_txt}</h4>
        <p class="conditions temp">${day.main.temp_max}/${day.main.temp_min}</p>
        <p class="conditions">${day.weather[0].main}</p>
        <p class="conditions">${day.weather[0].main}</p>
        <p class="conditions">${day.weather[0].main}</p>
        <p class="conditions">${day.weather[0].main}</p>
        </div>

    `)
    })
}
function getFiveDayForecast (data){
    let forecast = [];
    console.log(data.list);
    for(let i = 0; i < data.list.length; i++){
        if(i % 8 === 0){
            forecast.push(data.list[i]);
        }
    }
    console.log(forecast);
    renderForecastCard(forecast);
    return(forecast);
}


//EVENTS///////////////////////////////


//RUN ON LOAD//////////////////////////
getWeatherData(URL);

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