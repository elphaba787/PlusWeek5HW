function currentTemp(response) {
  let headingTemp = document.querySelector("h3");
  headingTemp.innerHTML = `${response.data.main.temp}°C`;
}
function cityButton(event) {
  event.preventDefault();

  let cityName = document.querySelector("#user-city-input");
  let cityHeading = document.querySelector("h2");
  cityHeading.innerHTML = cityName.value;

  let apiKey = "58852fb69388463e1271f80d4fc7e8f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(currentTemp);
}

function updateCurrentTemp() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `The weather today in ${response.data.name}, ${response.data.sys.country} is ${temperature}°C.`;
}

function showPosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "58852fb69388463e1271f80d4fc7e8f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#city-input");
form.addEventListener("submit", cityButton);

let currentButton = document.querySelector("#current-city");
currentButton.addEventListener("click", updateCurrentTemp);

let now = new Date();
let time = document.querySelector("h4");

let currentHour = now.getHours();

function fixHour(hour) {
  if (hour < 10 && hour > 1) hour = `0${hour}`;
  return hour;
}
currentHour = fixHour(currentHour);

function fixMin(min) {
  if (min < 10) min = `0${min}`;
  return min;
}
let currentMin = now.getMinutes();
currentMin = fixMin(currentMin);

time.innerHTML = `${currentHour}:${currentMin}`;

//Making changes to test GitHub repo.
