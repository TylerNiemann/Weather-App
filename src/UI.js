import { getLocation, noDecimal, capitalize } from './functions';

const cityName = (city, country) => {
  const cityCountry = document.querySelector('#cityname > h1');
  cityCountry.textContent = `${city}, ${country}`;
};

const currentTemp = (current) => {
  const temp = document.querySelector('#currentTemp > h1');
  temp.textContent = `${noDecimal(current)}\u00B0F`;
};

const currentDescription = (current) => {
  const description = document.querySelector('#currentDescription > h3');
  description.textContent = `${capitalize(current)}`;
};

const minMaxTemp = (min, max) => {
  const temp = document.querySelector('#minMaxCurrentTemp > h3');
  temp.textContent = `high: ${noDecimal(max)}\u00B0F min: ${noDecimal(min)}\u00B0F`;
};

const currentDisplay = () => {
  const display = document.getElementById('currentDisplay');
  display.style.display = 'block';
};

async function getCurrentWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation()}&APPID=d8b9f48dd6f09d896c01cd6aaf24c79b&units=imperial`, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status} `);
  }
  const locationData = await response.json();
  console.log(locationData);
  cityName(locationData.name, locationData.sys.country);
  currentTemp(locationData.main.temp);
  currentDescription(locationData.weather[0].description);
  minMaxTemp(locationData.main.temp_min, locationData.main.temp_max);
  console.log(locationData.wind);

  currentDisplay();
}

const pageEventListener = () => {
  const search = document.getElementById('searchButton');
  search.addEventListener('click', (e) => {
    e.preventDefault();
    getCurrentWeather();
  });
};

export { pageEventListener };
