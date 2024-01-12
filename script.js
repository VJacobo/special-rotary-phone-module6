document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd0196c636c1da157c46bf9bc5d89f93c';
    const cityForm = document.getElementById('cityForm');
    const cityInput = document.getElementById('cityInput');
    const currentWeatherSection = document.getElementById('currentWeatherSection');
    const forecastSection = document.getElementById('forecastSection');
    const searchHistorySection = document.getElementById('searchHistorySection');
    const searchButton = document.getElementById('searchButton');

    // Event Listener - City Form
    searchButton.addEventListener('click', async function () {
        const cityName = cityInput.value.trim();

        if (cityName !== '') {
            await fetchWeatherData(cityName);
        }
    });

    // Fetching Weather Data
    async function fetchWeatherData(cityName) {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data);
            displayCurrentWeather(data);
            saveToLocalStorage(cityName, data);
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

    // Saving data to local storage
    function saveToLocalStorage(cityName, data) {
        const weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || {};

        // Store the weather data for the searched cities
        weatherHistory[cityName] = {
            timestamp: new Date().getTime(),
            data: data,
        };

        // Save updated weather history to local storage
        localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory));
    }

    // Retrieve data from local storage
    function getFromLocalStorage(cityName) {
        const weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || {};

        // Get data for a specific city
        const cityData = weatherHistory[cityName];
        if (cityData) {
            console.log('Weather data for', cityName, ':', cityData.data);
        } else {
            console.log('No weather data found for', cityName);
        }
    }
});

