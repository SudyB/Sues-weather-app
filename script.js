let currentTime = new Date();
let currentDate = currentTime.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let formattedDate = `${day} ${currentDate}, ${hours}:${minutes}`;
console.log(formattedDate);

let current = document.querySelector("#date-time");
current.innerHTML = `${day} ${currentDate}, ${hours}:${minutes}`;

// API

function showTemperature(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let units = "imperial";
  let apiKey = "e643dd0a18e5a5dda974b966e4e9caa6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${city}`;

  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "e643dd0a18e5a5dda974b966e4e9caa6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
