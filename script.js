const apiKey = 'd0196c636c1da157c46bf9bc5d89f93c';
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastSection = document.getElementById('forecast');
const searchHistorySection = document.getElementById('searchHistory');

// city form event listener
cityForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const cityName = cityInput.value.trim();
  // fetching weather data using open weather API
  if (cityName !== '') {
    fetchWeatherData(cityName);
  }
});

// function for fetching weather data
async function fetchWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// function to display current weather
function displayCurrentWeather(data) {
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const locationElement = document.getElementById('location');

  temperatureElement.textContent = `Temperature: ${data.main.temp}
';
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastSection = document.getElementById('forecast');
const searchHistorySection = document.getElementById('searchHistory');

// city form event listener
cityForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const cityName = cityInput.value.trim();
  // fetching weather data using open weather API
  if (cityName !== '') {
    fetchWeatherData(cityName);
  }
});

// function for fetching weather data
async function fetchWeatherData(cityName) {
  const apiKey = 'API KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// function to display current weather
function displayCurrentWeather(data) {
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const locationElement = document.getElementById('location');

  temperatureElement.textContent = `Temperature: ${data.main.temp} °F`;
  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
  locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
}
// Call the display function with the example data
displayCurrentWeather(exampleWeatherData);
