//Api and other consts

const myApi = {
    /****Please use your own Api key if you're using or referencing this code****/
    key: "24d26e86cc84b567c2140ceb9c8a7861",
    proxy : 'https://cors-anywhere.herokuapp.com/'
};
const KELVIN = 273.15;

//Grabbing the DOM elements

const locationElement = document.querySelector(".place");
const timeElement = document.querySelector(".time");
const weatherIconElement = document.querySelector(".weather-icon");
const descElement = document.querySelector(".weather-description");
const tempElement = document.querySelector(".temperature");
const humidityElement = document.querySelector('.humidity');

//Weather object in which we will store the data from the api and use that later
const weather = {};
weather.temperature = {
    unit : 'celsius'
}

//checks if geolocation exists in navigator (browser supports navigation)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}

//THROWS AN ERROR WHEN GEOLOCATION DOES NOT WORKS
function showError() {
    console.log("location enable kar be");
  }

//Setting user's location
function setPosition(position) {
  let myLatitude = position.coords.latitude;
  let myLongitude = position.coords.longitude;

  //   console.log(myLongitude, myLatitude);
  getWeather(myLatitude, myLongitude);
}

//GET WEATHER
 
function getWeather(myLat, myLong){
    let link = `${myApi.proxy}https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myApi.key}`;
    fetch(link)  //send a network request and get the information from the server
        .then(response => { 
            let data = response.json(); //now whatever response we get, parse it into json and store in data
            return data;
        })
        .then(data => { //then we update our weather object with the required data 
            // console.log(data);
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconID = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity = data.main.humidity;
        })
        .then(() => { //then display the weather to the ui
            displayWeather();
        });
}

//DISPLAYING THE WEATHER TO THE UI
function displayWeather() {
  locationElement.textContent = `${weather.city}, ${weather.country}`;
  weatherIconElement.innerHTML = `<img src="./icons/${weather.iconID}.svg" alt="icon">`;
  descElement.textContent = `${weather.description}`;
  tempElement.innerHTML = `${weather.temperature.value}<span>°c</span>`;
  humidityElement.innerHTML = `<img class="humidity-icon" src="./extraicons/humidity.svg" alt="humidity">${weather.humidity}`;
}

// CELSIUS TO FAHRENHEIT CONVERSION
function celsiusToFahrenheit(temp){
    return ((9/5) * temp) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
function toggleUnits(){
    if(weather.temperature.value === undefined){ 
        //if the value is undefined then simply come out of the fuction
        return;
    }
    if(weather.temperature.unit === 'celsius'){
        let fahrenheit = Math.floor(celsiusToFahrenheit(weather.temperature.value));
        tempElement.innerHTML = `${fahrenheit}<span>°F</span>`;
        weather.temperature.unit = 'fahrenheit';
    } else {
        tempElement.innerHTML = `${weather.temperature.value}<span>°c</span>`;
        weather.temperature.unit = 'celsius';
    }    
}
tempElement.addEventListener('click', toggleUnits);