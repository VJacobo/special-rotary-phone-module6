const apiKey = 'd0196c636c1da157c46bf9bc5d89f93c';
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastSection = document.getElementById('forecast');
const searchHistorySection = document.getElementById('searchHistory');

// City form event listener
cityForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const cityName = cityInput.value.trim();

  // Fetching weather data using the open weather API
  if (cityName !== '') {
    await fetchWeatherData(cityName);
  }
});

// Function for fetching weather data
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

// Function to display current weather
function displayCurrentWeather(data) {
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const locationElement = document.getElementById('location');

  temperatureElement.textContent = `Temperature: ${data.main.temp} °F`;
  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
  locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
}
