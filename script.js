const formEL = document.querySelector("#search-form");
const key = "bfcf9c71afd1e6e519df7e6db053ca5e";

const showCurrentWeather = function (city) {
  const currentEl = document.querySelector("#current");
  // console.log('name', city.name);
  // console.log('temp', city.main.temp);
  // console.log('speed',city.wind.speed);
  // console.log('humidity', city.main.humidity);
const icon = city.weather[0].icon;
  currentEl.innerHTML = `<div class="card">
                <div class="card-content">
                  <div class="content">
                   <h2 class="title"> ${city.name} (${new Date(
    city.dt * 1000
  ).toLocaleDateString()})</h2>
  <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${city.weather[0].description}">
                   <p>Temp: ${city.main.temp}°F</p>
                   <p>Wind: ${city.wind.speed} MPH</p>
                   <p>Humidity: ${city.main.humidity}%</p>
                  </div>
                </div>
              </div>`;
};

// change city to forecast
//change fiveDay to dailyForecasts
const fiveDayWeather = function (cityForecastData) {
  const fiveDayEl = document.querySelector("#five-day");
  const fiveDayForecasts = cityForecastData.list.filter(
    (forecastEntry, index) => index % 8 === 0
  );
  fiveDayEl.innerHTML = "";

  fiveDayForecasts.forEach((forecastEntry) => {
    const date = new Date(forecastEntry.dt * 1000).toLocaleDateString();
    const icon = forecastEntry.weather[0].icon;
    fiveDayEl.innerHTML += `
      <div class="cell">  
          <div class="card">
              <div class="card-content">
                  <div class="content">
                      <h2 class="title">${date}</h2>
                      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${forecastEntry.weather[0].description}">
                      <p>Temp: ${forecastEntry.main.temp}°F</p>
                      <p>Wind: ${forecastEntry.wind.speed} MPH</p>
                      <p>Humidity: ${forecastEntry.main.humidity}%</p>
                  </div>
              </div>
          </div>
      </div>`;
  });
};

const saveCityToLocalStorage = function (city) {
  const cities = JSON.parse(localStorage.getItem("cities")) || [];

  cities.push(city.name);
  localStorage.setItem("cities", JSON.stringify(cities));
  return city;
};

const getCurrentWeather = function (city) {
  showCurrentWeather(city);
};

formEL.addEventListener("submit", function (event) {
  event.preventDefault();
  const cityInput = document.querySelector("#city");
  const cityData = cityInput.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value},US&appid=${key}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(saveCityToLocalStorage)
    .then(getCurrentWeather);
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value},US&appid=${key}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(fiveDayWeather)
    .catch((error) => console.log(error));
});
