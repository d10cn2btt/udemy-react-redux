import {FETCH_WEATHER} from '../action';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.push(action.payload.data);
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
  }

  return state;
}
