import { getLocation } from './location';

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation()}&APPID=d8b9f48dd6f09d896c01cd6aaf24c79b&units=imperial`, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status} `);
  }
  const locationData = await response.json();
  console.log(locationData);
  console.log(locationData.name);
  console.log(locationData.sys.country);
  console.log(locationData.main);
  console.log(locationData.weather[0].description);
  console.log(locationData.wind);
}

export { getWeather };
