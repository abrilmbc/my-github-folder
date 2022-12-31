function updateDisplayInfo(response) {
  console.log(response);
  let currentTemp = document.querySelector("#current-temp");
  let currentCity = document.querySelector("#current-city");
  let weatherDescription = document.querySelector("#weather-description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  let temperature = Math.round(response.data.main.temp);

  currentCity.innerHTML = response.data.name;
  currentTemp.innerHTML = temperature;
  weatherDescription.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}`;
  wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
}

function getWeather(event) {
  event.preventDefault();
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let inputCity = document.querySelector("#input-city");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=${apiKey}`;

  axios.get(apiURL).then(updateDisplayInfo);
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(getPos);
}

function getPos(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&lat=${lat}&lon=${long}`;
  axios.get(apiURL).then(updateDisplayInfo);
}

let inputBox = document.querySelector("#search-city");
inputBox.addEventListener("submit", getWeather);

//let searchBTN = document.querySelector("#search-btn");
//searchBTN.addEventListener("click", getWeather);

let currentBTN = document.querySelector("#current-btn");
currentBTN.addEventListener("click", getPosition);
