import axios from 'axios';

const API_KEY_WEATHER = '45a89bd210a3a9d46aea7273b3645e90';
const URL_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const MOVE_CITY = 'MOVE_CITY';

export function fetchWeather(city) {
  const request = axios.get(`${URL_WEATHER}&q=${city},vn`);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}

export function moveCity(position) {
  return {
    type: MOVE_CITY,
    payload: position,
  }
}
