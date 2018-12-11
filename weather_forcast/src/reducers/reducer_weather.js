import _ from 'lodash';

import {FETCH_WEATHER, MOVE_CITY} from '../action';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.error ? state : [action.payload.data, ...state];
      // return state.push(action.payload.data);
      // return state.concat([action.payload.data]);
      // return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]

    case MOVE_CITY:
      return [..._.pullAt(state, action.payload), ...state];
  }

  return state;
}
