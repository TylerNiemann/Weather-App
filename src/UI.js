import { getWeather } from './api';

const pageEventListener = () => {
  const search = document.getElementById('searchButton');
  search.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather();
  });
};

export { pageEventListener };
