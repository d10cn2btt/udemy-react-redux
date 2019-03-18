import {SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/actionTypes';

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    // We don't mutate the `state`
    case SET_VISIBILITY_FILTER:
      console.log(state, action);
      return action.filter;

    // We return the previous `state` in the default case.
    // It's important to return the previous state for any unknown action.
    default:
      return state;
  }
}

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: [],
};

// This is equivalent to combineReducers
export default function filterApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}
